import "./rolldown-runtime-EITvVbkG.js";
import { Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Lf as reactive, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, du as ElCol, fu as ElRow, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Db as FROM_AI_PARAMETERS_MODAL_KEY, Fc as useRunWorkflow, Fd as injectWorkflowExecutionStateStore, GO as NodeConnectionTypes, Jd as injectWorkflowDocumentStore, MO as isHitlToolType, MS as useTelemetry, Mp as injectNDVStore, NM as _plugin_vue_export_helper_default, Qd as TOOL_NODE_TYPES_NEED_INPUT, Rc as useAgentRequestStore, Sj as N8nFormInputs_default, Xj as N8nCallout_default, af as useNodeTypesStore, bM as N8nText_default, gg as useUIStore, iA as DialogBody_default, kM as N8nButton_default, oA as Dialog_default, qO as traverseNodeParameters, qp as useProjectsStore, rA as DialogFooter_default, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/app/composables/useToolParameters.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useToolParameters({ node }) {
	const parameters = ref([]);
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const projectsStore = useProjectsStore();
	const nodeTypesStore = useNodeTypesStore();
	const agentRequestStore = useAgentRequestStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const selectedToolMap = reactive({});
	const error = ref(void 0);
	const nodeRunData = computed(() => {
		if (!node.value) return void 0;
		const lastRunData = workflowExecutionStateStore.value.activeExecution?.data?.resultData.runData[node.value?.name];
		if (!lastRunData) return void 0;
		return lastRunData[0];
	});
	const mapTypes = {
		["string"]: {
			inputType: "text",
			defaultValue: ""
		},
		["boolean"]: {
			inputType: "checkbox",
			defaultValue: true
		},
		["number"]: {
			inputType: "number",
			defaultValue: 0
		},
		["json"]: {
			inputType: "text",
			defaultValue: ""
		}
	};
	const getToolName = (toolNode) => {
		return (typeof toolNode === "string" ? toolNode : toolNode.name).replaceAll(" ", "_");
	};
	const getToolNamePrefix = (toolNode) => {
		return `node_${getToolName(toolNode)}_`;
	};
	const getToolNameOptionName = (toolNode) => {
		return `tool_${getToolName(toolNode)}_option`;
	};
	function checkImplicitInput(toolNode) {
		const aiSubcategories = nodeTypesStore.getNodeType(toolNode.type, toolNode.typeVersion)?.codex?.subcategories?.AI;
		const isVectorStoreToolNode = aiSubcategories?.includes("Vector Stores") && aiSubcategories?.includes("Tools");
		const mode = toolNode.parameters.mode;
		return isVectorStoreToolNode && mode === "retrieve-as-tool" || TOOL_NODE_TYPES_NEED_INPUT.includes(toolNode.type);
	}
	const getMCPTools = async (newNode) => {
		const result = [];
		const tools = await nodeTypesStore.getNodeParameterOptions({
			nodeTypeAndVersion: {
				name: newNode.type,
				version: newNode.typeVersion
			},
			path: "parameters.includedTools",
			methodName: "getTools",
			currentNodeParameters: newNode.parameters,
			credentials: newNode.credentials,
			projectId: projectsStore.currentProjectId,
			workflowId: workflowDocumentStore.value.workflowId
		});
		const toolOptions = tools?.map((tool) => ({
			label: tool.name,
			value: String(tool.value),
			disabled: false
		}));
		result.push({
			name: getToolNameOptionName(newNode),
			initialValue: "",
			properties: {
				label: "Tool name",
				type: "select",
				options: toolOptions,
				required: true
			},
			metadata: {
				nodeName: newNode.name,
				type: "selector"
			}
		});
		const newSelectedTool = selectedToolMap[newNode.name];
		if (newSelectedTool) {
			const schema = (tools?.find((tool) => String(tool.value) === newSelectedTool))?.inputSchema;
			if (schema?.properties) for (const [propertyName, value] of Object.entries(schema.properties)) {
				const type = typeof value === "object" && "type" in value && typeof value.type === "string" ? value.type : "text";
				result.push({
					name: `${getToolNamePrefix(newSelectedTool)}query.${propertyName}`,
					initialValue: "",
					properties: {
						label: propertyName,
						type: mapTypes[type].inputType,
						required: true
					},
					metadata: {
						nodeName: newSelectedTool,
						type: "query",
						propertyName
					}
				});
			}
		}
		return result;
	};
	const getToolParameters = async (newNode, omitFallbackField = false) => {
		const result = [];
		if (!newNode) return { parameters: result };
		if (isHitlToolType(newNode.type)) return { parameters: await getHitlToolParameters(newNode) };
		if (newNode.type === "@n8n/n8n-nodes-langchain.mcpClientTool") return { parameters: await getMCPTools(newNode) };
		return { parameters: getRegularToolParameters(newNode, omitFallbackField) };
	};
	const getHitlToolParameters = async (newNode) => {
		const result = [];
		const connectedTools = workflowDocumentStore.value.getParentNodes(newNode.name, "ALL_NON_MAIN", 1).map((nodeName) => workflowDocumentStore.value.getNodeByName(nodeName) ?? null).filter((tool) => !!tool);
		const ignoredFields = ["tool", "toolParameters"];
		const regularParameters = getRegularToolParameters(newNode, true).filter((parameter) => !ignoredFields.includes(parameter.name.replace(/^query\./, ""))).map((parameter) => ({
			...parameter,
			name: `${getToolName(newNode)}_${parameter.name}`
		}));
		result.push(...regularParameters);
		const toolOptions = connectedTools.map((tool) => ({
			label: tool.name,
			value: tool.name,
			disabled: false
		}));
		result.push({
			name: getToolNameOptionName(newNode),
			initialValue: "",
			properties: {
				label: "Tool name",
				type: "select",
				options: toolOptions,
				required: true
			},
			metadata: {
				nodeName: newNode.name,
				type: "selector"
			}
		});
		const newSelectedTool = selectedToolMap[newNode.name];
		if (newSelectedTool) {
			const selectedTool = connectedTools.find((tool) => tool.name === newSelectedTool);
			if (selectedTool) {
				const selectedToolParameters = await getToolParameters(selectedTool, true);
				result.push(...selectedToolParameters.parameters.map((param) => ({
					...param,
					name: `${getToolNamePrefix(selectedTool)}${param.name}`
				})));
			}
		}
		return result;
	};
	const getRegularToolParameters = (toolNode, omitFallbackField = false) => {
		const result = [];
		const params = toolNode.parameters;
		const collectedArgs = [];
		traverseNodeParameters(params, collectedArgs);
		const inputOverrides = nodeRunData.value?.inputOverride?.[NodeConnectionTypes.AiTool]?.[0]?.[0].json;
		const inputQuery = inputOverrides?.query;
		collectedArgs.forEach((value) => {
			const type = value.type ?? "string";
			const initialValue = inputQuery?.[value.key] ? inputQuery[value.key] : agentRequestStore.getQueryValue(workflowDocumentStore.value.workflowId, toolNode.id, toolNode.name, value.key) ?? mapTypes[type]?.defaultValue;
			result.push({
				name: "query." + value.key,
				initialValue,
				properties: {
					label: value.key,
					type: mapTypes[value.type ?? "string"].inputType,
					required: true
				},
				metadata: {
					nodeName: toolNode.name,
					type: "query",
					propertyName: value.key
				}
			});
		});
		const hasImplicitInput = checkImplicitInput(toolNode);
		if (result.length === 0 && !omitFallbackField || hasImplicitInput) {
			const key = hasImplicitInput ? "input" : "query";
			const queryValue = inputOverrides?.[key] ?? agentRequestStore.getQueryValue(workflowDocumentStore.value.workflowId, toolNode.id, toolNode.name, key) ?? "";
			result.unshift({
				name: hasImplicitInput ? "query.input" : "query",
				initialValue: queryValue ?? "",
				properties: {
					label: "Query",
					type: "text",
					required: true
				},
				metadata: {
					nodeName: toolNode.name,
					type: "query",
					propertyName: hasImplicitInput ? "input" : "query",
					implicitInput: hasImplicitInput
				}
			});
		}
		return result;
	};
	const updateSelectedTool = (nodeName, value) => {
		selectedToolMap[nodeName] = value;
	};
	watch([node, selectedToolMap], async ([newNode]) => {
		error.value = void 0;
		try {
			const result = await getToolParameters(newNode);
			parameters.value = result.parameters;
		} catch (e) {
			error.value = e instanceof Error ? e : /* @__PURE__ */ new Error("Unknown error occurred");
			return;
		}
	}, { immediate: true });
	return {
		getToolName,
		parameters,
		error,
		updateSelectedTool
	};
}
//#endregion
//#region src/features/ndv/parameters/components/FromAiParametersModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var FromAiParametersModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "FromAiParametersModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const inputs = ref();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const uiStore = useUIStore();
		const ndvStore = injectNDVStore();
		const modalOpen = computed(() => uiStore.modalsById[FROM_AI_PARAMETERS_MODAL_KEY]?.open === true);
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const router = useRouter();
		const { runWorkflow } = useRunWorkflow({ router });
		const agentRequestStore = useAgentRequestStore();
		const node = computed(() => props.data.nodeName ? workflowDocumentStore.value.getNodeByName(props.data.nodeName) : void 0);
		const parentNode = computed(() => {
			if (!node.value) return void 0;
			const parentNodes = workflowDocumentStore.value.getChildNodes(node.value.name, "ALL", 1);
			if (parentNodes.length === 0) return void 0;
			return workflowDocumentStore.value.getNodeByName(parentNodes[0])?.name;
		});
		const { getToolName, parameters, error, updateSelectedTool } = useToolParameters({ node });
		function closeDialog() {
			uiStore.closeModal(FROM_AI_PARAMETERS_MODAL_KEY);
		}
		function onDialogOpenUpdate(open) {
			if (!open) closeDialog();
		}
		const onExecute = async () => {
			if (!node.value) return;
			const nodeName = node.value.name;
			const inputValues = Object.values(inputs.value?.getValuesWithMetadata() ?? {});
			agentRequestStore.clearAgentRequests(workflowDocumentStore.value.workflowId, node.value.id);
			const selectedToolName = inputValues.findLast((value) => value.metadata?.type === "selector")?.value;
			const agentRequest = {
				query: {},
				toolName: selectedToolName ? getToolName(selectedToolName) : getToolName(nodeName)
			};
			for (const input of inputValues) {
				if (input.metadata?.type !== "query") continue;
				const inputNode = getToolName(input.metadata.nodeName);
				const queryKey = input.metadata.propertyName;
				const queryValue = input.value;
				if (input.metadata.implicitInput) agentRequest.query[inputNode] = queryValue;
				else {
					agentRequest.query[inputNode] ??= {};
					agentRequest.query[inputNode][queryKey] = queryValue;
				}
			}
			agentRequestStore.setAgentRequestForNode(workflowDocumentStore.value.workflowId, node.value.id, agentRequest);
			const telemetryPayload = {
				node_type: node.value.type,
				workflow_id: workflowDocumentStore.value.workflowId,
				source: "from-ai-parameters-modal",
				push_ref: ndvStore.value.pushRef
			};
			telemetry.track("User clicked execute node button in modal", telemetryPayload);
			await runWorkflow({ destinationNode: {
				nodeName: node.value.name,
				mode: "inclusive"
			} });
			closeDialog();
		};
		const onUpdate = (change) => {
			const metadata = change.metadata;
			if (metadata?.type !== "selector") return;
			if (typeof change.value === "string") updateSelectedTool(metadata.nodeName, change.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: modalOpen.value,
				size: "large",
				header: unref(i18n).baseText("fromAiParametersModal.title", { interpolate: { nodeName: node.value?.name || "" } }),
				"close-on-overlay-click": false,
				"onUpdate:open": onDialogOpenUpdate
			}, {
				default: withCtx(() => [unref(error) ? (openBlock(), createBlock(unref(DialogBody_default), { key: 0 }, {
					default: withCtx(() => [createVNode(unref(N8nCallout_default), { theme: "danger" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(error).message), 1)]),
						_: 1
					})]),
					_: 1
				})) : (openBlock(), createBlock(unref(DialogBody_default), { key: 1 }, {
					default: withCtx(() => [createVNode(unref(ElCol), null, {
						default: withCtx(() => [createVNode(unref(ElRow), { class: normalizeClass(_ctx.$style.row) }, {
							default: withCtx(() => [createVNode(unref(N8nText_default), { "data-testid": "from-ai-parameters-modal-description" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("fromAiParametersModal.description", { interpolate: { parentNodeName: parentNode.value || "" } })), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}), createVNode(unref(ElCol), null, {
						default: withCtx(() => [createVNode(unref(ElRow), { class: normalizeClass(_ctx.$style.row) }, {
							default: withCtx(() => [unref(parameters).length ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
								key: 0,
								ref_key: "inputs",
								ref: inputs,
								inputs: unref(parameters),
								"column-view": true,
								"data-test-id": "from-ai-parameters-modal-inputs",
								onSubmit: onExecute,
								onUpdate
							}, null, 8, ["inputs"])) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					})]),
					_: 1
				})), !unref(error) ? (openBlock(), createBlock(unref(DialogFooter_default), { key: 2 }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						"data-test-id": "execute-workflow-button",
						icon: "flask-conical",
						label: unref(i18n).baseText("fromAiParametersModal.execute"),
						float: "right",
						onClick: onExecute
					}, null, 8, ["label"])]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
}), [["__cssModules", { "$style": { row: "_row_1ufrv_1" } }]]);
//#endregion
export { FromAiParametersModal_default as default };

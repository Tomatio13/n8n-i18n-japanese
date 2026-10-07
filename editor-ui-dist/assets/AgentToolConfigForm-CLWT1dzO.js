import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { Ad as createTextVNode, Af as unref, Br as EditorState, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Jo as require_dateformat, Kd as onMounted, Nd as defineComponent, Pr as lineNumbers, Qd as renderSlot, Sf as ref, Td as createBlock, Tr as EditorView, Wd as onBeforeUnmount, Xd as provide, Yd as openBlock, Zd as renderList, Zf as normalizeClass, as as useRouter, bd as Fragment, cf as watch, jd as createVNode, mt as javascript, np as toDisplayString, uf as withCtx, vd as withKeys, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { $C as Input_default, $g as ResourceMapperSchemaAutoRefreshKey, Ar as updateToolRefFromNode, DC as N8nCallout_default, Dl as _virtual_node_popularity_data_default, Fm as CUSTOM_API_CALL_KEY, Fr as workflowToolTriggerLabel, Gb as NodeConnectionTypes, Kb as extractFromAICalls, Kl as codeEditorTheme, Qg as ResourceMapperRefreshEmptySchemaKey, Sd as useNodeTypesStore, Xv as AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES, YC as N8nTooltip_default, Yb as isCommunityPackageName, Zp as CREDENTIAL_EDIT_MODAL_KEY, _C as N8nOption_default, aw as _plugin_vue_export_helper_default, bS as Switch_default, ew as N8nIconButton_default, fr as isMcpRelatedNodeType, jr as updateWorkflowToolRef, kr as toolRefToNode, lf as useWorkflowsListStore, mC as N8nSelect_default, mr as nodeToMcpServer, nw as N8nIcon_default, ny as getWorkflowToolIncompatibilityReason, qC as N8nText_default, tw as N8nButton_default, ty as SUPPORTED_WORKFLOW_TOOL_TRIGGERS, uw as useI18n, uy as UNSUPPORTED_AGENT_NODE_TOOL_OPERATIONS, wp as useUIStore, z_ as VIEWS } from "./app-DPWSzjF9.js";
import { t as AgentApprovalSelector_default } from "./AgentApprovalSelector-CiAmLBxv.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-B_04Spcw.js";
//#region src/features/agents/components/AgentToolConfigApprovalSetting.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigApprovalSetting",
	props: { modelValue: { type: Boolean } },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.hint")), 1)]),
				_: 1
			})], 2), createVNode(unref(Switch_default), {
				"model-value": __props.modelValue,
				"data-test-id": "agent-tool-approval-toggle",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event))
			}, null, 8, ["model-value"])], 2);
		};
	}
});
var AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: "_approvalRow_ssfms_1",
	approvalText: "_approvalText_ssfms_9"
};
var AgentToolConfigApprovalSetting_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentCustomToolViewer.vue?vue&type=script&setup=true&lang.ts
var AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCustomToolViewer",
	props: { code: {} },
	setup(__props) {
		/**
		* Read-only TypeScript viewer for a custom tool's compiled source.
		* Shown in the editor column when the tree selects a `type: 'custom'` tool.
		*/
		const props = __props;
		const container = ref();
		let view = null;
		function createEditor(doc) {
			if (!container.value) return;
			view = new EditorView({
				state: EditorState.create({
					doc,
					extensions: [
						javascript({ typescript: true }),
						lineNumbers(),
						EditorView.lineWrapping,
						EditorState.readOnly.of(true),
						EditorView.editable.of(false),
						codeEditorTheme({
							isReadOnly: true,
							maxHeight: "100%"
						})
					]
				}),
				parent: container.value
			});
		}
		onMounted(() => createEditor(props.code ?? ""));
		onBeforeUnmount(() => {
			view?.destroy();
			view = null;
		});
		watch(() => props.code, (next) => {
			if (!view) return;
			const nextDoc = next ?? "";
			if (view.state.doc.toString() === nextDoc) return;
			view.dispatch({ changes: {
				from: 0,
				to: view.state.doc.length,
				insert: nextDoc
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "agent-custom-tool-viewer"
			}, [createBaseVNode("div", {
				ref_key: "container",
				ref: container,
				class: normalizeClass(_ctx.$style.editor)
			}, null, 2)], 2);
		};
	}
});
var AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1dag9_1",
	editor: "_editor_1dag9_8"
};
var AgentCustomToolViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigCustomContent.vue
var AgentToolConfigCustomContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigCustomContent",
	props: { code: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentCustomToolViewer_default, { code: __props.code }, null, 8, ["code"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigMcpApprovalSetting.vue
var AgentToolConfigMcpApprovalSetting_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigMcpApprovalSetting",
	props: {
		modelValue: {},
		node: {},
		projectId: {}
	},
	emits: ["update:modelValue", "update:valid"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const tools = ref([]);
		const isLoadingTools = ref(false);
		const loadingError = ref(null);
		const exposedToolNames = computed(() => {
			const names = tools.value.map((tool) => String(tool.value));
			const includeMode = props.node.parameters.include;
			const includeTools = toStringArray(props.node.parameters.includeTools);
			const excludeTools = new Set(toStringArray(props.node.parameters.excludeTools));
			if (includeMode === "selected" && includeTools.length > 0) {
				const allowedTools = new Set(includeTools);
				return names.filter((name) => allowedTools.has(name));
			}
			if (includeMode === "except") return names.filter((name) => !excludeTools.has(name));
			return names;
		});
		const exposedToolOptions = computed(() => {
			const exposed = new Set(exposedToolNames.value);
			return tools.value.filter((tool) => exposed.has(String(tool.value))).map((tool) => ({
				label: tool.name,
				value: String(tool.value)
			}));
		});
		onMounted(() => {
			if (props.node.parameters.endpointUrl || props.node.parameters.sseEndpoint) refreshTools();
		});
		function toStringArray(value) {
			return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
		}
		function handleModeUpdate(mode) {
			if (mode === "selected" && tools.value.length === 0 && !isLoadingTools.value) refreshTools();
		}
		async function refreshTools() {
			isLoadingTools.value = true;
			loadingError.value = null;
			try {
				tools.value = await nodeTypesStore.getNodeParameterOptions({
					nodeTypeAndVersion: {
						name: props.node.type,
						version: props.node.typeVersion
					},
					path: "parameters.includeTools",
					methodName: "getTools",
					currentNodeParameters: props.node.parameters,
					credentials: props.node.credentials,
					projectId: props.projectId
				});
			} catch (error) {
				loadingError.value = error instanceof Error ? error.message : String(error);
			} finally {
				isLoadingTools.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentApprovalSelector_default, {
				"model-value": props.modelValue,
				options: exposedToolOptions.value,
				label: unref(i18n).baseText("agents.toolConfig.mcpApproval.label"),
				hint: unref(i18n).baseText("agents.toolConfig.mcpApproval.hint"),
				placeholder: unref(i18n).baseText("agents.toolConfig.mcpApproval.tools.placeholder"),
				loading: isLoadingTools.value,
				error: loadingError.value ? unref(i18n).baseText("agents.toolConfig.mcpApproval.loadError") : null,
				"test-id-prefix": "agent-mcp-approval",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
				"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => emit("update:valid", $event)),
				"onUpdate:mode": handleModeUpdate
			}, {
				controls: withCtx(({ mode }) => [mode === "selected" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agents.toolConfig.mcpApproval.refresh.hint")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						"icon-only": "",
						loading: isLoadingTools.value,
						"aria-label": unref(i18n).baseText("agents.toolConfig.mcpApproval.refresh"),
						"data-test-id": "agent-mcp-approval-refresh",
						onClick: refreshTools
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "refresh-cw",
							size: 14
						})]),
						_: 1
					}, 8, ["loading", "aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"model-value",
				"options",
				"label",
				"hint",
				"placeholder",
				"loading",
				"error"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigNodeContent.vue
var AgentToolConfigNodeContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigNodeContent",
	props: {
		initialNode: {},
		existingToolNames: {},
		projectId: {},
		contentTestId: {},
		parameterIssues: {},
		fromAiDisabledParameters: {}
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:node"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const HIDDEN_AGENT_NODE_TOOL_OPERATIONS = [...UNSUPPORTED_AGENT_NODE_TOOL_OPERATIONS, CUSTOM_API_CALL_KEY];
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		provide(ResourceMapperSchemaAutoRefreshKey, false);
		provide(ResourceMapperRefreshEmptySchemaKey, true);
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function getNode() {
			return contentRef.value?.node ?? null;
		}
		function getNodeTypeDescription() {
			return contentRef.value?.nodeTypeDescription ?? null;
		}
		__expose({
			getNode,
			getNodeTypeDescription,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(NodeToolSettingsContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-node": props.initialNode,
				"existing-tool-names": props.existingToolNames,
				"project-id": props.projectId,
				"hidden-operations": HIDDEN_AGENT_NODE_TOOL_OPERATIONS,
				"parameter-issues": props.parameterIssues,
				"from-ai-disabled-parameters": props.fromAiDisabledParameters,
				"sync-node-to-ndv": true,
				"data-test-id": props.contentTestId,
				"onUpdate:valid": _cache[0] || (_cache[0] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[1] || (_cache[1] = ($event) => emit("update:node-name", $event)),
				"onUpdate:node": _cache[2] || (_cache[2] = ($event) => emit("update:node", $event))
			}, null, 8, [
				"initial-node",
				"existing-tool-names",
				"project-id",
				"parameter-issues",
				"from-ai-disabled-parameters",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/composables/useAgentToolCatalog.ts
var nodePopularityMap = new Map(_virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
var hiddenAvailableToolNodeTypes = new Set(AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES);
function hasInputs(nodeType) {
	const { inputs } = nodeType;
	if (Array.isArray(inputs)) return inputs.length > 0;
	return true;
}
function isHiddenAvailableToolType(nodeType) {
	return hiddenAvailableToolNodeTypes.has(nodeType.name);
}
function isWorkflowCompatibleWithAgentTools(workflow) {
	return getWorkflowToolIncompatibilityReason(workflow) === null;
}
/**
* Tab a node type belongs to in the tools connection modal.
*
* MCP tools keep their own tab. All other tools use the n8n nodes tab.
* Community packages are still matched first by provenance so they cannot
* claim another category through their metadata.
*/
function toolCategoryForNodeType(nodeType) {
	if (isCommunityPackageName(nodeType.name)) return "app-action";
	if (isMcpRelatedNodeType(nodeType.name)) return "mcp";
	return "app-action";
}
/**
* Ordering within a tab, derived from the category so there is one source of
* truth. Every category `toolCategoryForNodeType` can return must appear here:
* `indexOf` returns -1 for a missing one, which would sort it ahead of the rest.
*/
var NODE_CATEGORY_ORDER = ["mcp", "app-action"];
function nodeTypeOrderRank(nodeType) {
	return NODE_CATEGORY_ORDER.indexOf(toolCategoryForNodeType(nodeType));
}
/**
* Catalog of node types and project workflows eligible as agent tools.
* Node types are sorted by category first, then popularity, so each category
* tab lists its most-used tools first.
*/
function useAgentToolCatalog() {
	const nodeTypesStore = useNodeTypesStore();
	const workflowsListStore = useWorkflowsListStore();
	/**
	* Fetched workflows kept local — do NOT write into workflowsListStore's
	* shared cache (would clobber the Workflows list page).
	*/
	const projectWorkflows = ref([]);
	/**
	* Falls back to the community preview description so uninstalled verified
	* community tools (already in the AiTool name index via visibleNodeTypes)
	* are not dropped — same catalog the canvas Tools picker uses.
	*/
	function resolveToolNodeType(name) {
		return nodeTypesStore.getNodeType(name) ?? nodeTypesStore.communityNodeType(name)?.nodeDescription ?? null;
	}
	const availableToolTypes = computed(() => {
		const names = nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? [];
		return [...new Set(names)].map((name) => resolveToolNodeType(name)).filter((nt) => nt !== null && !nt.hidden && !isHiddenAvailableToolType(nt) && !hasInputs(nt)).sort((a, b) => {
			const rankDiff = nodeTypeOrderRank(a) - nodeTypeOrderRank(b);
			if (rankDiff !== 0) return rankDiff;
			const popA = nodePopularityMap.get(a.name) ?? 0;
			return (nodePopularityMap.get(b.name) ?? 0) - popA;
		});
	});
	const availableWorkflows = computed(() => projectWorkflows.value.filter((workflow) => !workflow.isArchived && isWorkflowCompatibleWithAgentTools(workflow)));
	/**
	* Workflows that can't be attached as agent tools, with the reason why.
	* Surfaced greyed-out at the bottom of the picker so the user can see why a
	* workflow is missing instead of it simply being absent. Archived workflows
	* are excluded — they're not relevant in the picker either way.
	*/
	const incompatibleWorkflows = computed(() => projectWorkflows.value.filter((workflow) => !workflow.isArchived).flatMap((workflow) => {
		const reason = getWorkflowToolIncompatibilityReason(workflow);
		return reason ? [{
			workflow,
			reason
		}] : [];
	}));
	async function loadWorkflows(projectId) {
		try {
			projectWorkflows.value = await workflowsListStore.searchWorkflows({
				projectId,
				select: [
					"id",
					"name",
					"description",
					"isArchived",
					"activeVersionId",
					"nodes",
					"connections",
					"updatedAt"
				]
			});
		} catch (error) {
			console.warn("[useAgentToolCatalog] failed to load workflows for project", error);
		}
	}
	return {
		availableToolTypes,
		availableWorkflows,
		incompatibleWorkflows,
		projectWorkflows,
		loadWorkflows,
		resolveToolNodeType
	};
}
//#endregion
//#region src/features/agents/utils/workflowToolInputFields.ts
var SUPPORTED_TRIGGER_TYPES = new Set(SUPPORTED_WORKFLOW_TOOL_TRIGGERS);
/**
* Mirror of the backend `detectTriggerNode` rule: the first node in workflow
* order whose type is in `SUPPORTED_WORKFLOW_TOOL_TRIGGERS`. Keeping this in
* sync prevents the UI from offering bindings for a trigger the runtime
* ignores (e.g. an Execute Workflow Trigger placed after a Chat Trigger).
*/
function detectWorkflowToolTrigger(workflow) {
	if (!workflow) return void 0;
	return (workflow.nodes ?? []).find((node) => SUPPORTED_TRIGGER_TYPES.has(node.type));
}
/**
* Read declared Execute Workflow Trigger input fields from a project workflow.
* Returns an empty list unless the runtime-selected trigger is the Execute
* Workflow Trigger and it is not in passthrough mode.
*/
function listWorkflowToolInputFields(workflow) {
	if (!workflow) return [];
	const trigger = detectWorkflowToolTrigger(workflow);
	if (!trigger || trigger.type !== "n8n-nodes-base.executeWorkflowTrigger") return [];
	const params = trigger.parameters ?? {};
	const inputSource = params.inputSource ?? "passthrough";
	if (inputSource === "passthrough") return [];
	if (inputSource === "jsonExample") {
		const jsonExample = params.jsonExample;
		if (!jsonExample) return [];
		let parsed;
		try {
			parsed = JSON.parse(jsonExample);
		} catch {
			return [];
		}
		if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return [];
		return Object.entries(parsed).map(([name, value]) => ({
			name,
			type: value === null ? "any" : Array.isArray(value) ? "array" : typeof value
		}));
	}
	return (params.workflowInputs?.values ?? []).filter((field) => typeof field.name === "string" && field.name.length > 0);
}
/** Format a stored fixed binding for the text input. */
function formatWorkflowToolFixedValue(value) {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
/**
* Type guard for a recursive JSON value. Used to safely narrow `JSON.parse`
* output before storing it as a fixed binding value typed `JsonValue`.
*/
function isJsonValue(value) {
	if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return true;
	if (Array.isArray(value)) return value.every(isJsonValue);
	if (typeof value === "object") return Object.values(value).every(isJsonValue);
	return false;
}
/**
* Convert a typed text-input value into the Execute Workflow Trigger field type.
* Incomplete JSON / numbers stay as the raw string so the user can keep typing.
*/
function parseWorkflowToolFixedValue(raw, type) {
	if (type === "string" || type === void 0) return raw;
	const trimmed = raw.trim();
	if (trimmed === "") return null;
	switch (type) {
		case "number": {
			const parsed = Number(trimmed);
			return Number.isFinite(parsed) ? parsed : raw;
		}
		case "boolean": {
			const lower = trimmed.toLowerCase();
			if (lower === "true") return true;
			if (lower === "false") return false;
			return raw;
		}
		case "array":
		case "object":
			try {
				const parsed = JSON.parse(trimmed);
				if (!isJsonValue(parsed)) return raw;
				if (type === "array" && Array.isArray(parsed)) return parsed;
				if (type === "object" && typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) return parsed;
			} catch {}
			return raw;
		case "any":
			try {
				const parsed = JSON.parse(trimmed);
				if (isJsonValue(parsed)) return parsed;
			} catch {}
			return raw;
		default: return raw;
	}
}
//#endregion
//#region src/features/agents/components/WorkflowToolConfigContent.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = ["data-test-id"];
var WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowToolConfigContent",
	props: {
		initialRef: {},
		projectId: {}
	},
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		/**
		* Configure a workflow-type tool on an agent.
		*
		* Workflow tools have a very different shape from node tools — no node
		* parameters, no credentials — so we render a small dedicated form instead
		* of reusing `NodeToolSettingsContent`. The LLM-facing fields are:
		*   - workflowId (the target workflow's stable lookup key)
		*   - workflow (the target workflow's display name and legacy lookup key)
		*   - name (edited in the modal header's inline-text widget)
		*   - description (what the LLM reads to understand when to use the tool)
		*   - allOutputs (`true` returns every node output; `false` = last node only)
		*   - inputs (optional AI vs fixed bindings for Execute Workflow Trigger fields)
		*
		* The underlying workflow's runtime input schema is inferred by
		* `WorkflowToolFactory.inferInputSchema` at invocation time; this form only
		* lets the user pin fixed values so the LLM is not asked for them.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const triggerLabel = workflowToolTriggerLabel();
		const router = useRouter();
		const { availableWorkflows, projectWorkflows, loadWorkflows } = useAgentToolCatalog();
		const name = ref(props.initialRef.name ?? props.initialRef.workflow ?? "");
		const description = ref(props.initialRef.description ?? "");
		const allOutputs = ref(props.initialRef.allOutputs ?? false);
		const workflow = ref(props.initialRef.workflow ?? "");
		const workflowId = ref(props.initialRef.workflowId);
		const inputs = ref({ ...props.initialRef.inputs ?? {} });
		const isLoadingWorkflows = ref(true);
		const mode = ref("list");
		const enteredId = ref("");
		const isIdUnresolvable = ref(false);
		onMounted(async () => {
			await loadWorkflows(props.projectId);
			isLoadingWorkflows.value = false;
		});
		watch(() => props.initialRef, (updated) => {
			name.value = updated.name ?? updated.workflow ?? "";
			description.value = updated.description ?? "";
			allOutputs.value = updated.allOutputs ?? false;
			workflow.value = updated.workflow ?? "";
			workflowId.value = updated.workflowId;
			inputs.value = { ...updated.inputs ?? {} };
			mode.value = "list";
			enteredId.value = "";
			isIdUnresolvable.value = false;
		});
		watch([
			name,
			description,
			workflow
		], ([nameValue, descriptionValue, workflowValue]) => {
			emit("update:valid", nameValue.trim().length > 0 && descriptionValue.trim().length > 0 && workflowValue.trim().length > 0);
			emit("update:node-name", nameValue);
		}, { immediate: true });
		function matchesReference(candidate) {
			return workflowId.value !== void 0 ? candidate.id === workflowId.value : candidate.name === workflow.value;
		}
		const matchingProjectWorkflows = computed(() => projectWorkflows.value.filter(matchesReference));
		const matchingAvailableWorkflows = computed(() => availableWorkflows.value.filter(matchesReference));
		/** Resolve an exact id, or a unique legacy name. */
		const targetWorkflow = computed(() => {
			if (workflowId.value !== void 0) return matchingProjectWorkflows.value[0];
			return matchingProjectWorkflows.value.length === 1 ? matchingProjectWorkflows.value[0] : void 0;
		});
		/** Target is gone from the project entirely — deleted, moved, or inaccessible. */
		const isMissing = computed(() => !isLoadingWorkflows.value && workflow.value.length > 0 && matchingProjectWorkflows.value.length === 0);
		/** Target still exists but is archived or holds a node that can't run as a tool. */
		const isUnusable = computed(() => !isLoadingWorkflows.value && !isMissing.value && workflow.value.length > 0 && matchingAvailableWorkflows.value.length === 0);
		/** Only legacy name-based refs can be ambiguous. */
		const isAmbiguous = computed(() => workflowId.value === void 0 && matchingProjectWorkflows.value.length > 1);
		/** Target works in preview, but the published agent cannot call it until it is published. */
		const isUnpublished = computed(() => !isLoadingWorkflows.value && !isUnusable.value && targetWorkflow.value?.activeVersionId === null);
		/**
		* Options are keyed by id so same-named workflows remain individually
		* selectable.
		*/
		const workflowOptions = computed(() => [...availableWorkflows.value].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).map((candidate) => ({
			id: candidate.id,
			name: candidate.name,
			meta: [(0, import_dateformat.default)(candidate.updatedAt, "d mmm yyyy, HH:MM"), candidate.description].filter(Boolean).join(" · ")
		})));
		const targetWorkflowId = computed(() => targetWorkflow.value?.id ?? workflowId.value);
		/** Falls back to the raw stored name so an unresolved target still displays. */
		const selectedOptionId = computed(() => targetWorkflowId.value ?? workflowId.value ?? workflow.value);
		const declaredInputFields = computed(() => listWorkflowToolInputFields(targetWorkflow.value));
		function fieldBinding(fieldName) {
			return inputs.value[fieldName] ?? { mode: "ai" };
		}
		function fieldMode(fieldName) {
			return fieldBinding(fieldName).mode;
		}
		function fieldType(fieldName) {
			return declaredInputFields.value.find((field) => field.name === fieldName)?.type;
		}
		function fieldFixedValue(fieldName) {
			const binding = fieldBinding(fieldName);
			if (binding.mode !== "fixed") return "";
			return formatWorkflowToolFixedValue(binding.value);
		}
		const FIXED_VALUE_PLACEHOLDER_KEYS = {
			string: "agents.toolConfig.workflow.inputs.value.placeholder.string",
			number: "agents.toolConfig.workflow.inputs.value.placeholder.number",
			boolean: "agents.toolConfig.workflow.inputs.value.placeholder.boolean",
			array: "agents.toolConfig.workflow.inputs.value.placeholder.array",
			object: "agents.toolConfig.workflow.inputs.value.placeholder.object"
		};
		function fieldFixedValuePlaceholder(fieldName) {
			return i18n.baseText(FIXED_VALUE_PLACEHOLDER_KEYS[fieldType(fieldName) ?? ""] ?? "agents.toolConfig.workflow.inputs.value.placeholder");
		}
		const fieldInputText = ref({});
		function fieldInputDisplay(fieldName) {
			return fieldInputText.value[fieldName] ?? fieldFixedValue(fieldName);
		}
		function handleFieldInput(fieldName, value) {
			fieldInputText.value = {
				...fieldInputText.value,
				[fieldName]: String(value)
			};
		}
		function commitFieldFixedValue(fieldName) {
			const raw = fieldInputText.value[fieldName];
			if (raw === void 0) return;
			setFieldFixedValue(fieldName, raw);
			const next = { ...fieldInputText.value };
			delete next[fieldName];
			fieldInputText.value = next;
		}
		function setFieldMode(fieldName, nextMode) {
			if (nextMode !== "ai" && nextMode !== "fixed") return;
			const nextText = { ...fieldInputText.value };
			delete nextText[fieldName];
			fieldInputText.value = nextText;
			if (nextMode === "ai") {
				const next = { ...inputs.value };
				delete next[fieldName];
				inputs.value = next;
				return;
			}
			setFieldFixedValue(fieldName, fieldFixedValue(fieldName));
		}
		function setFieldFixedValue(fieldName, value) {
			inputs.value = {
				...inputs.value,
				[fieldName]: {
					mode: "fixed",
					value: parseWorkflowToolFixedValue(String(value), fieldType(fieldName))
				}
			};
		}
		function handleChangeName(newName) {
			name.value = newName;
		}
		function applyTarget(next) {
			if (next.id === workflowId.value || workflowId.value === void 0 && next.name === workflow.value) {
				workflowId.value = next.id;
				return;
			}
			if (name.value === workflow.value) name.value = next.name;
			workflowId.value = next.id;
			workflow.value = next.name;
			description.value = "";
			inputs.value = {};
		}
		function handleSelectWorkflow(optionId) {
			const selected = workflowOptions.value.find((option) => option.id === optionId);
			if (selected) applyTarget(selected);
		}
		function openTargetWorkflow() {
			if (!targetWorkflowId.value) return;
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: targetWorkflowId.value }
			});
			window.open(href, "_blank");
		}
		function handleModeSwitch(next) {
			mode.value = next;
			isIdUnresolvable.value = false;
			enteredId.value = targetWorkflowId.value ?? "";
		}
		/** Only IDs offered in list mode can be used as workflow tools here. */
		function handleEnterWorkflowId(id) {
			const trimmed = id.trim();
			if (!trimmed) return;
			const known = availableWorkflows.value.find((candidate) => candidate.id === trimmed);
			isIdUnresolvable.value = !known;
			if (known) applyTarget(known);
		}
		function getWorkflow() {
			return targetWorkflow.value?.name ?? workflow.value;
		}
		function getWorkflowId() {
			return targetWorkflowId.value;
		}
		function getInputs() {
			for (const fieldName of Object.keys(fieldInputText.value)) commitFieldFixedValue(fieldName);
			if (Object.keys(inputs.value).length === 0) return void 0;
			const allowed = new Set(declaredInputFields.value.map((field) => field.name));
			const pruned = {};
			for (const [key, binding] of Object.entries(inputs.value)) if (allowed.has(key)) pruned[key] = binding;
			return Object.keys(pruned).length > 0 ? pruned : void 0;
		}
		__expose({
			name,
			description,
			allOutputs,
			getWorkflow,
			getWorkflowId,
			getInputs,
			handleChangeName,
			nodeTypeDescription: null
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "workflow-tool-description"
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description")) + " ", 1), createVNode(unref(N8nText_default), {
						color: "primary",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("*", -1)])]),
						_: 1
					})], 2),
					createVNode(unref(Input_default), {
						id: "workflow-tool-description",
						modelValue: description.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => description.value = $event),
						type: "textarea",
						rows: 4,
						placeholder: unref(i18n).baseText("agents.toolConfig.workflow.description.placeholder"),
						"data-test-id": "agent-workflow-tool-description"
					}, null, 8, ["modelValue", "placeholder"]),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description.hint")), 1)]),
						_: 1
					})
				], 2),
				createVNode(unref(N8nCallout_default), {
					theme: "warning",
					"data-test-id": "agent-workflow-tool-target-notice"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.notice", { interpolate: { trigger: unref(triggerLabel) } })), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "workflow-tool-target"
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target")) + " ", 1), createVNode(unref(N8nText_default), {
						color: "primary",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("*", -1)])]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.controlRow) }, [
						createVNode(unref(N8nSelect_default), {
							"model-value": mode.value,
							class: normalizeClass(_ctx.$style.modeSelector),
							"data-test-id": "agent-workflow-tool-target-mode",
							"onUpdate:modelValue": handleModeSwitch
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "list",
								label: unref(i18n).baseText("resourceLocator.mode.list")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "id",
								label: unref(i18n).baseText("resourceLocator.mode.id")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["model-value", "class"]),
						mode.value === "list" ? (openBlock(), createBlock(unref(N8nSelect_default), {
							key: 0,
							id: "workflow-tool-target",
							"model-value": selectedOptionId.value,
							class: normalizeClass(_ctx.$style.controlInput),
							filterable: "",
							loading: isLoadingWorkflows.value,
							placeholder: unref(i18n).baseText("agents.toolConfig.workflow.target.placeholder"),
							"popper-class": _ctx.$style.popper,
							"data-test-id": "agent-workflow-tool-target",
							"onUpdate:modelValue": handleSelectWorkflow
						}, {
							default: withCtx(() => [isMissing.value || isUnusable.value || isAmbiguous.value ? (openBlock(), createBlock(unref(N8nOption_default), {
								key: workflowId.value ?? workflow.value,
								value: workflowId.value ?? workflow.value,
								label: workflow.value
							}, null, 8, ["value", "label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(workflowOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.id,
									value: option.id,
									label: option.name
								}, {
									default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.option) }, [createVNode(unref(N8nText_default), {
										size: "small",
										bold: ""
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.name), 1)]),
										_: 2
									}, 1024), createVNode(unref(N8nText_default), {
										size: "xsmall",
										color: "text-light",
										class: normalizeClass(_ctx.$style.optionMeta)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.meta), 1)]),
										_: 2
									}, 1032, ["class"])], 2)]),
									_: 2
								}, 1032, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, [
							"model-value",
							"class",
							"loading",
							"placeholder",
							"popper-class"
						])) : (openBlock(), createBlock(unref(Input_default), {
							key: 1,
							id: "workflow-tool-target",
							modelValue: enteredId.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => enteredId.value = $event),
							class: normalizeClass(_ctx.$style.controlInput),
							placeholder: unref(i18n).baseText("resourceLocator.id.placeholder"),
							"data-test-id": "agent-workflow-tool-target-id",
							onBlur: _cache[2] || (_cache[2] = ($event) => handleEnterWorkflowId(enteredId.value)),
							onKeyup: _cache[3] || (_cache[3] = withKeys(($event) => handleEnterWorkflowId(enteredId.value), ["enter"]))
						}, null, 8, [
							"modelValue",
							"class",
							"placeholder"
						])),
						targetWorkflowId.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 2,
							icon: "external-link",
							variant: "ghost",
							size: "small",
							class: normalizeClass(_ctx.$style.openTarget),
							title: unref(i18n).baseText("agents.toolConfig.workflow.target.open"),
							"aria-label": unref(i18n).baseText("agents.toolConfig.workflow.target.open"),
							"data-test-id": "agent-workflow-tool-target-open",
							onClick: openTargetWorkflow
						}, null, 8, [
							"class",
							"title",
							"aria-label"
						])) : createCommentVNode("", true)
					], 2),
					isIdUnresolvable.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-id-unresolvable"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.idNotFound", { interpolate: { trigger: unref(triggerLabel) } })), 1)]),
						_: 1
					})) : isMissing.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-missing"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.unavailable", { interpolate: { name: workflow.value } })), 1)]),
						_: 1
					})) : isUnusable.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-unusable"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.validation.issue.tool.workflow.incompatibleReference", { interpolate: { id: workflow.value } })), 1)]),
						_: 1
					})) : isAmbiguous.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						size: "xsmall",
						color: "warning",
						"data-test-id": "agent-workflow-tool-target-duplicate"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.duplicateName", { interpolate: { name: workflow.value } })), 1)]),
						_: 1
					})) : isUnpublished.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 4,
						size: "xsmall",
						color: "warning",
						"data-test-id": "agent-workflow-tool-target-unpublished"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.notPublished")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				declaredInputFields.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.field),
					"data-test-id": "agent-workflow-tool-inputs"
				}, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.inputs")), 3),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.inputs.hint")), 1)]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputFields) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(declaredInputFields.value, (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.name,
							class: normalizeClass(_ctx.$style.field),
							"data-test-id": `agent-workflow-tool-input-${field.name}`
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: true,
							class: normalizeClass(_ctx.$style.inputName)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.name), 1)]),
							_: 2
						}, 1032, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.controlRow) }, [createVNode(unref(N8nSelect_default), {
							"model-value": fieldMode(field.name),
							class: normalizeClass(fieldMode(field.name) === "fixed" ? _ctx.$style.inputMode : _ctx.$style.controlInput),
							"data-test-id": `agent-workflow-tool-input-mode-${field.name}`,
							"onUpdate:modelValue": ($event) => setFieldMode(field.name, $event)
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "ai",
								label: unref(i18n).baseText("agents.toolConfig.workflow.inputs.mode.ai")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "fixed",
								label: unref(i18n).baseText("agents.toolConfig.workflow.inputs.mode.fixed")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, [
							"model-value",
							"class",
							"data-test-id",
							"onUpdate:modelValue"
						]), fieldMode(field.name) === "fixed" ? (openBlock(), createBlock(unref(Input_default), {
							key: 0,
							"model-value": fieldInputDisplay(field.name),
							class: normalizeClass(_ctx.$style.controlInput),
							placeholder: fieldFixedValuePlaceholder(field.name),
							"data-test-id": `agent-workflow-tool-input-value-${field.name}`,
							"onUpdate:modelValue": ($event) => handleFieldInput(field.name, $event),
							onBlur: ($event) => commitFieldFixedValue(field.name)
						}, null, 8, [
							"model-value",
							"class",
							"placeholder",
							"data-test-id",
							"onUpdate:modelValue",
							"onBlur"
						])) : createCommentVNode("", true)], 2)], 10, _hoisted_1);
					}), 128))], 2)
				], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleText) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.allOutputs")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.allOutputs.hint")), 1)]),
					_: 1
				})], 2), createVNode(unref(Switch_default), {
					"model-value": allOutputs.value,
					"data-test-id": "agent-workflow-tool-all-outputs",
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => allOutputs.value = $event)
				}, null, 8, ["model-value"])], 2),
				renderSlot(_ctx.$slots, "commonSettings")
			], 2);
		};
	}
});
var WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_x8923_1",
	field: "_field_x8923_7",
	label: "_label_x8923_13",
	toggleRow: "_toggleRow_x8923_19",
	toggleText: "_toggleText_x8923_27",
	controlRow: "_controlRow_x8923_34",
	modeSelector: "_modeSelector_x8923_40",
	controlInput: "_controlInput_x8923_45",
	openTarget: "_openTarget_x8923_50",
	popper: "_popper_x8923_54",
	option: "_option_x8923_61",
	optionMeta: "_optionMeta_x8923_68",
	inputFields: "_inputFields_x8923_74",
	inputName: "_inputName_x8923_81",
	inputMode: "_inputMode_x8923_85"
};
var WorkflowToolConfigContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigWorkflowContent.vue
var AgentToolConfigWorkflowContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigWorkflowContent",
	props: {
		initialRef: {},
		projectId: {},
		showApprovalSetting: { type: Boolean },
		approvalRequired: { type: Boolean }
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:approvalRequired"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		function handleChangeName(value) {
			contentRef.value?.handleChangeName(value);
		}
		function getName() {
			return contentRef.value?.name ?? "";
		}
		function getDescription() {
			return contentRef.value?.description ?? "";
		}
		function getAllOutputs() {
			return contentRef.value?.allOutputs ?? false;
		}
		function getWorkflow() {
			return contentRef.value?.getWorkflow() ?? "";
		}
		function getWorkflowId() {
			return contentRef.value?.getWorkflowId();
		}
		function getInputs() {
			return contentRef.value?.getInputs();
		}
		__expose({
			getName,
			getDescription,
			getAllOutputs,
			getWorkflow,
			getWorkflowId,
			getInputs,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowToolConfigContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-ref": props.initialRef,
				"project-id": props.projectId,
				"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[2] || (_cache[2] = ($event) => emit("update:node-name", $event))
			}, {
				commonSettings: withCtx(() => [props.showApprovalSetting ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
					key: 0,
					"model-value": props.approvalRequired ?? false,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:approvalRequired", $event))
				}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["initial-ref", "project-id"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigForm.vue?vue&type=script&setup=true&lang.ts
var httpRequestUrlErrorKey = "agents.builder.validation.issue.httpRequestUrlFromAi";
var AgentToolConfigForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigForm",
	props: { data: {} },
	emits: ["update:title", "update:credentialModalOpen"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const credentialModalOpen = computed(() => uiStore.modalsById[CREDENTIAL_EDIT_MODAL_KEY]?.open === true);
		watch(credentialModalOpen, (open) => emit("update:credentialModalOpen", open), { immediate: true });
		function isMcpServerModalData(data) {
			return data.kind === "mcpServer";
		}
		function containsFromAiCall(value) {
			if (typeof value !== "string") return false;
			try {
				return extractFromAICalls(value).length > 0;
			} catch {
				return false;
			}
		}
		const isMcpTool = computed(() => isMcpServerModalData(props.data));
		const mcpModalData = computed(() => isMcpServerModalData(props.data) ? props.data : null);
		const toolModalData = computed(() => isMcpServerModalData(props.data) ? null : props.data);
		const isWorkflowTool = computed(() => toolModalData.value?.toolRef.type === "workflow");
		const isCustomTool = computed(() => toolModalData.value?.toolRef.type === "custom");
		const nodeContentRef = ref(null);
		const mcpContentRef = ref(null);
		const workflowContentRef = ref(null);
		const isValid = ref(false);
		const submitted = ref(false);
		const approvalRequired = ref(false);
		const mcpApproval = ref();
		const mcpApprovalValid = ref(true);
		const draftNode = ref(null);
		const initialNode = computed(() => isMcpTool.value ? mcpModalData.value?.initialNode ?? null : isWorkflowTool.value || isCustomTool.value ? null : toolModalData.value ? toolRefToNode(toolModalData.value.toolRef) : null);
		const workflowInitialRef = computed(() => isWorkflowTool.value && toolModalData.value?.toolRef.type === "workflow" ? toolModalData.value.toolRef : null);
		const nodeName = ref(computed(() => {
			if (isMcpTool.value) return mcpModalData.value?.mcpServer.name ?? "";
			return (toolModalData.value?.toolRef.type === "node" ? toolModalData.value.toolRef.name : void 0) ?? initialNode.value?.name ?? "";
		}).value);
		const customToolCode = computed(() => !isMcpTool.value ? toolModalData.value?.customTool?.code ?? "" : "");
		const customToolTitle = computed(() => {
			const toolRef = toolModalData.value?.toolRef;
			const fallbackName = toolRef?.type === "custom" ? toolRef.id : toolRef?.type === "workflow" || toolRef?.type === "node" ? toolRef.name : void 0;
			return toolModalData.value?.customTool?.descriptor.name ?? fallbackName ?? i18n.baseText("agents.builder.tree.customBadge");
		});
		const title = computed(() => isCustomTool.value ? customToolTitle.value : nodeName.value);
		const supportsApproval = computed(() => props.data.supportsToolApproval !== false);
		const showApprovalSetting = computed(() => supportsApproval.value && !isMcpTool.value && toolModalData.value !== null);
		watch(() => toolModalData.value?.toolRef, (toolRef) => {
			approvalRequired.value = Boolean(toolRef?.requireApproval);
		}, { immediate: true });
		watch(() => mcpModalData.value?.mcpServer.approval, (approval) => {
			mcpApproval.value = approval;
		}, { immediate: true });
		watch(initialNode, (node) => {
			draftNode.value = node;
		}, { immediate: true });
		watch(title, (value) => emit("update:title", value), { immediate: true });
		const currentNode = computed(() => draftNode.value ?? initialNode.value);
		const hasHttpRequestUrlIssue = computed(() => {
			const data = toolModalData.value;
			if (data?.toolRef.type !== "node") return false;
			if (!data.validationIssues?.some((issue) => issue.code === "invalid_value" && issue.path.endsWith(".node.nodeParameters.url"))) return false;
			return containsFromAiCall(currentNode.value?.parameters.url);
		});
		const canSave = computed(() => {
			if (isCustomTool.value) return true;
			if (isMcpTool.value) return isValid.value && mcpApprovalValid.value;
			return isValid.value && !hasHttpRequestUrlIssue.value;
		});
		const fromAiDisabledParameters = computed(() => {
			const toolRef = toolModalData.value?.toolRef;
			if (toolRef?.type === "node" && (toolRef.node.nodeType === "n8n-nodes-base.httpRequest" || toolRef.node.nodeType === "n8n-nodes-base.httpRequestTool")) return ["url"];
			return [];
		});
		const nodeParameterIssues = computed(() => {
			const issues = {};
			if (hasHttpRequestUrlIssue.value) issues.url = [i18n.baseText(httpRequestUrlErrorKey)];
			return issues;
		});
		function withApprovalRequirement(ref) {
			if (!supportsApproval.value) {
				const { requireApproval: _requireApproval, ...rest } = ref;
				return rest;
			}
			const updatedRef = { ...ref };
			if (approvalRequired.value) updatedRef.requireApproval = true;
			else delete updatedRef.requireApproval;
			return updatedRef;
		}
		function withMcpApproval(server) {
			const updatedServer = { ...server };
			if (supportsApproval.value && mcpApproval.value) updatedServer.approval = mcpApproval.value;
			else delete updatedServer.approval;
			return updatedServer;
		}
		function confirm() {
			submitted.value = true;
			if (!canSave.value) return false;
			if (isCustomTool.value) {
				const toolData = toolModalData.value;
				if (!toolData) return false;
				toolData.onConfirm(withApprovalRequirement(toolData.toolRef));
				return true;
			}
			if (isMcpTool.value) {
				const currentMcpNode = mcpContentRef.value?.getNode();
				const mcpData = mcpModalData.value;
				if (!currentMcpNode || !mcpData) return false;
				const updatedServer = nodeToMcpServer(currentMcpNode, mcpData.mcpServer);
				mcpData.onConfirm(withMcpApproval(updatedServer));
				return true;
			}
			if (isWorkflowTool.value) {
				const content = workflowContentRef.value;
				const toolData = toolModalData.value;
				if (!toolData || !content) return false;
				const workflowId = content.getWorkflowId();
				const updatedRef = updateWorkflowToolRef(toolData.toolRef, {
					name: content.getName(),
					description: content.getDescription(),
					allOutputs: content.getAllOutputs(),
					workflow: content.getWorkflow(),
					...workflowId !== void 0 ? { workflowId } : {},
					inputs: content.getInputs()
				});
				toolData.onConfirm(withApprovalRequirement(updatedRef));
				return true;
			}
			const currentToolNode = nodeContentRef.value?.getNode();
			const toolData = toolModalData.value;
			if (!currentToolNode || !toolData) return false;
			const updatedRef = updateToolRefFromNode(toolData.toolRef, currentToolNode);
			toolData.onConfirm(withApprovalRequirement(updatedRef));
			return true;
		}
		function remove() {
			props.data.onRemove?.();
		}
		function changeTitle(name) {
			if (isCustomTool.value) return;
			if (isMcpTool.value) mcpContentRef.value?.handleChangeName(name);
			else if (isWorkflowTool.value) workflowContentRef.value?.handleChangeName(name);
			else nodeContentRef.value?.handleChangeName(name);
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		__expose({
			canSave,
			confirm,
			remove,
			changeTitle,
			credentialModalOpen,
			title
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.contentWrapper, isCustomTool.value && _ctx.$style.codeContentWrapper]) }, [
				submitted.value && !canSave.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "danger",
					"data-testid": "agent-tool-config-validation-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.validation.fixFields")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				isCustomTool.value ? (openBlock(), createBlock(AgentToolConfigCustomContent_default, {
					key: 1,
					code: customToolCode.value,
					class: normalizeClass(_ctx.$style.customToolViewer)
				}, null, 8, ["code", "class"])) : createCommentVNode("", true),
				isCustomTool.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
					key: 2,
					modelValue: approvalRequired.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => approvalRequired.value = $event)
				}, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.configureTab)
				}, [
					workflowInitialRef.value ? (openBlock(), createBlock(AgentToolConfigWorkflowContent_default, {
						key: 0,
						ref_key: "workflowContentRef",
						ref: workflowContentRef,
						"initial-ref": workflowInitialRef.value,
						"project-id": __props.data.projectId,
						"show-approval-setting": showApprovalSetting.value,
						"approval-required": approvalRequired.value,
						"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => isValid.value = $event),
						"onUpdate:nodeName": handleNodeNameUpdate,
						"onUpdate:approvalRequired": _cache[2] || (_cache[2] = ($event) => approvalRequired.value = $event)
					}, null, 8, [
						"initial-ref",
						"project-id",
						"show-approval-setting",
						"approval-required"
					])) : isMcpTool.value && initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
						key: 1,
						ref_key: "mcpContentRef",
						ref: mcpContentRef,
						"initial-node": initialNode.value,
						"existing-tool-names": __props.data.existingToolNames,
						"project-id": __props.data.projectId,
						"content-test-id": "agent-tool-config-mcp-content",
						"onUpdate:valid": _cache[3] || (_cache[3] = ($event) => isValid.value = $event),
						"onUpdate:nodeName": handleNodeNameUpdate,
						"onUpdate:node": _cache[4] || (_cache[4] = ($event) => draftNode.value = $event)
					}, null, 8, [
						"initial-node",
						"existing-tool-names",
						"project-id"
					])) : initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
						key: 2,
						ref_key: "nodeContentRef",
						ref: nodeContentRef,
						"initial-node": initialNode.value,
						"existing-tool-names": __props.data.existingToolNames,
						"project-id": __props.data.projectId,
						"from-ai-disabled-parameters": fromAiDisabledParameters.value,
						"parameter-issues": nodeParameterIssues.value,
						"content-test-id": "node-tool-settings-content",
						"onUpdate:valid": _cache[5] || (_cache[5] = ($event) => isValid.value = $event),
						"onUpdate:nodeName": handleNodeNameUpdate,
						"onUpdate:node": _cache[6] || (_cache[6] = ($event) => draftNode.value = $event)
					}, null, 8, [
						"initial-node",
						"existing-tool-names",
						"project-id",
						"from-ai-disabled-parameters",
						"parameter-issues"
					])) : createCommentVNode("", true),
					!isMcpTool.value && initialNode.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
						key: 3,
						modelValue: approvalRequired.value,
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => approvalRequired.value = $event)
					}, null, 8, ["modelValue"])) : createCommentVNode("", true),
					isMcpTool.value && currentNode.value && supportsApproval.value ? (openBlock(), createBlock(AgentToolConfigMcpApprovalSetting_default, {
						key: 4,
						modelValue: mcpApproval.value,
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => mcpApproval.value = $event),
						node: currentNode.value,
						"project-id": __props.data.projectId,
						"onUpdate:valid": _cache[9] || (_cache[9] = ($event) => mcpApprovalValid.value = $event)
					}, null, 8, [
						"modelValue",
						"node",
						"project-id"
					])) : createCommentVNode("", true)
				], 2))
			], 2);
		};
	}
});
var AgentToolConfigForm_vue_vue_type_style_index_0_lang_module_default = {
	contentWrapper: "_contentWrapper_1qm8f_1",
	codeContentWrapper: "_codeContentWrapper_1qm8f_11",
	configureTab: "_configureTab_1qm8f_16",
	customToolViewer: "_customToolViewer_1qm8f_23"
};
var AgentToolConfigForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useAgentToolCatalog as i, hasInputs as n, toolCategoryForNodeType as r, AgentToolConfigForm_default as t };

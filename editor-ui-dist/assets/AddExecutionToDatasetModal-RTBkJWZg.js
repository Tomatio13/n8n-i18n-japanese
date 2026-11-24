import { Bd as createElementBlock, Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { AM as N8nSpinner_default, Dj as N8nOption_default, Ej as N8nSelect_default, MS as useTelemetry, NM as _plugin_vue_export_helper_default, OS as useToast, Wj as createEventBus, bM as N8nText_default, gb as ADD_EXECUTION_TO_DATASET_MODAL_KEY, kM as N8nButton_default, kj as N8nInputLabel_default, sf as useEvaluationStore, zM as useI18n } from "./app-BJz3tlB7.js";
import { t as Modal_default } from "./Modal-UWXQ2H-M.js";
import { D as stringifyValue } from "./evaluation.utils-t1O1zVPS.js";
//#region src/features/ai/evaluation.ee/components/AddExecutionToDataset/AddExecutionToDatasetModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["data-test-id"];
var AddExecutionToDatasetModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AddExecutionToDatasetModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const evaluationStore = useEvaluationStore();
		const modalBus = createEventBus();
		const selectedConfigId = ref(props.data.configs[0]?.id ?? "");
		const candidate = ref(null);
		const loadingCandidate = ref(false);
		const submitting = ref(false);
		const mapping = ref({});
		const hasMultipleConfigs = computed(() => props.data.configs.length > 1);
		const selectedConfigName = computed(() => props.data.configs.find((c) => c.id === selectedConfigId.value)?.name ?? "");
		const fieldOptions = computed(() => {
			if (!candidate.value) return [];
			const inputLabel = locale.baseText("evaluations.addToDataset.source.input");
			const outputLabel = locale.baseText("evaluations.addToDataset.source.output");
			return [...candidate.value.fields.inputs.map((f) => ({
				value: `input:${f.key}`,
				field: f.key,
				source: "input",
				sourceLabel: inputLabel,
				sample: f.sample
			})), ...candidate.value.fields.outputs.map((f) => ({
				value: `output:${f.key}`,
				field: f.key,
				source: "output",
				sourceLabel: outputLabel,
				sample: f.sample
			}))];
		});
		const sampleByValue = computed(() => fieldOptions.value.reduce((acc, option) => {
			acc[option.value] = option.sample;
			return acc;
		}, {}));
		const hasColumns = computed(() => (candidate.value?.columns.length ?? 0) > 0);
		const mappedColumnCount = computed(() => Object.values(mapping.value).filter((value) => value !== "").length);
		const canSubmit = computed(() => !loadingCandidate.value && !submitting.value && hasColumns.value && mappedColumnCount.value > 0);
		function formatSample(value) {
			if (value === null || value === void 0) return locale.baseText("evaluations.addToDataset.empty");
			return stringifyValue(value);
		}
		function initMappingFromSuggestion(response) {
			mapping.value = response.columns.reduce((acc, column) => {
				const suggestion = response.suggestedMapping[column.name];
				acc[column.name] = suggestion ? `${suggestion.source}:${suggestion.field}` : "";
				return acc;
			}, {});
		}
		async function loadCandidate(configId) {
			if (!configId) return;
			loadingCandidate.value = true;
			candidate.value = null;
			try {
				const response = await evaluationStore.getDatasetCandidate({
					workflowId: props.data.workflowId,
					configId,
					executionId: props.data.executionId
				});
				if (configId !== selectedConfigId.value) return;
				candidate.value = response;
				initMappingFromSuggestion(response);
			} catch (error) {
				if (configId !== selectedConfigId.value) return;
				toast.showError(error, locale.baseText("evaluations.addToDataset.error.candidate"));
			} finally {
				if (configId === selectedConfigId.value) loadingCandidate.value = false;
			}
		}
		function buildPayloadMapping() {
			const result = {};
			for (const column of candidate.value?.columns ?? []) {
				const selected = mapping.value[column.name];
				if (!selected) {
					result[column.name] = null;
					continue;
				}
				const separatorIndex = selected.indexOf(":");
				const source = selected.slice(0, separatorIndex);
				const field = selected.slice(separatorIndex + 1);
				result[column.name] = {
					source,
					field
				};
			}
			return result;
		}
		async function onSubmit() {
			if (!canSubmit.value) return;
			submitting.value = true;
			try {
				await evaluationStore.addExecutionToDataset({
					workflowId: props.data.workflowId,
					configId: selectedConfigId.value,
					payload: {
						executionId: props.data.executionId,
						mapping: buildPayloadMapping()
					}
				});
				telemetry.track("User added execution to evaluation dataset", {
					workflow_id: props.data.workflowId,
					execution_id: props.data.executionId,
					config_id: selectedConfigId.value,
					columns_mapped: mappedColumnCount.value
				});
				toast.showMessage({
					type: "success",
					title: locale.baseText("evaluations.addToDataset.success.title")
				});
				modalBus.emit("close");
			} catch (error) {
				toast.showError(error, locale.baseText("evaluations.addToDataset.error.submit"));
			} finally {
				submitting.value = false;
			}
		}
		watch(selectedConfigId, async (configId) => await loadCandidate(configId));
		onMounted(async () => {
			telemetry.track("User opened add execution to dataset modal", {
				workflow_id: props.data.workflowId,
				execution_id: props.data.executionId,
				config_count: props.data.configs.length
			});
			await loadCandidate(selectedConfigId.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(ADD_EXECUTION_TO_DATASET_MODAL_KEY),
				title: unref(locale).baseText("evaluations.addToDataset.title"),
				"event-bus": unref(modalBus),
				center: true,
				"max-width": "640px",
				"data-test-id": "add-execution-to-dataset-modal"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nInputLabel_default), {
					label: unref(locale).baseText("evaluations.addToDataset.config.label"),
					bold: false,
					size: "small"
				}, null, 8, ["label"]), hasMultipleConfigs.value ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 0,
					modelValue: selectedConfigId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedConfigId.value = $event),
					size: "medium",
					"data-test-id": "add-execution-to-dataset-config-select"
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.data.configs, (config) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: config.id,
							label: config.name,
							value: config.id
						}, null, 8, ["label", "value"]);
					}), 128))]),
					_: 1
				}, 8, ["modelValue"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedConfigName.value), 1)]),
					_: 1
				}))], 2), loadingCandidate.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading),
					"data-test-id": "add-execution-loading"
				}, [createVNode(unref(N8nSpinner_default), {
					type: "brand",
					size: "xxlarge"
				})], 2)) : !hasColumns.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.addToDataset.noColumns")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.mapping),
					"data-test-id": "add-execution-to-dataset-mapping"
				}, [createVNode(unref(N8nInputLabel_default), {
					label: unref(locale).baseText("evaluations.addToDataset.mapping.title"),
					size: "small"
				}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(candidate.value?.columns ?? [], (column) => {
					return openBlock(), createElementBlock("div", {
						key: column.name,
						class: normalizeClass(_ctx.$style.row),
						"data-test-id": `add-execution-to-dataset-column-${column.name}`
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.column) }, [createVNode(unref(N8nInputLabel_default), {
						label: column.name,
						size: "small"
					}, null, 8, ["label"]), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(column.type), 1)]),
						_: 2
					}, 1024)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.source) }, [createVNode(unref(N8nSelect_default), {
						modelValue: mapping.value[column.name],
						"onUpdate:modelValue": ($event) => mapping.value[column.name] = $event,
						size: "medium",
						filterable: "",
						placeholder: unref(locale).baseText("evaluations.addToDataset.field.placeholder"),
						"data-test-id": `add-execution-to-dataset-select-${column.name}`
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							label: unref(locale).baseText("evaluations.addToDataset.leaveEmpty"),
							value: ""
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(fieldOptions.value, (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								label: `${option.field} (${option.sourceLabel})`,
								value: option.value
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"placeholder",
						"data-test-id"
					]), mapping.value[column.name] ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "xsmall",
						color: "text-light",
						class: normalizeClass(_ctx.$style.sample)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formatSample(sampleByValue.value[mapping.value[column.name]])), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true)], 2)], 10, _hoisted_1);
				}), 128))], 2))], 2)]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					label: unref(locale).baseText("generic.cancel"),
					"data-test-id": "add-execution-to-dataset-cancel",
					onClick: close
				}, null, 8, ["label", "onClick"]), createVNode(unref(N8nButton_default), {
					label: unref(locale).baseText("evaluations.addToDataset.submit"),
					loading: submitting.value,
					disabled: !canSubmit.value,
					"data-test-id": "add-execution-to-dataset-submit",
					onClick: onSubmit
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_52zr1_1",
	field: "_field_52zr1_7",
	loading: "_loading_52zr1_13",
	empty: "_empty_52zr1_14",
	mapping: "_mapping_52zr1_20",
	row: "_row_52zr1_26",
	column: "_column_52zr1_33",
	source: "_source_52zr1_41",
	sample: "_sample_52zr1_48",
	footer: "_footer_52zr1_56"
} }]]);
//#endregion
export { AddExecutionToDatasetModal_default as default };

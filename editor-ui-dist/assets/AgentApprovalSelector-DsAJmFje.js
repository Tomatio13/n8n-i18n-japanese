import { Ad as Fragment, Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, cf as renderSlot, fp as toDisplayString, sf as renderList, sp as normalizeClass, vf as watch } from "./vendor-LwB6jUFW.js";
import { AC as N8nSelect_default, Dw as useI18n, NC as N8nOption_default, Sw as _plugin_vue_export_helper_default, uw as N8nText_default } from "./app-6hFiMIk3.js";
//#region src/features/agents/components/AgentApprovalSelector.vue?vue&type=script&setup=true&lang.ts
var AgentApprovalSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentApprovalSelector",
	props: {
		modelValue: {},
		options: {},
		label: {},
		hint: {},
		placeholder: {},
		testIdPrefix: {},
		loading: { type: Boolean },
		error: {},
		hideDisabledOption: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"update:valid",
		"update:mode"
	],
	setup(__props, { emit: __emit }) {
		/**
		* Mode picker plus tag list for a human-in-the-loop approval selection.
		* Shared by MCP servers, whose entries are tool names, and channels, whose
		* entries are action names.
		*
		* The caller owns where the entries come from: MCP fetches them from the
		* server, a channel takes them from the integration catalog.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const approvalMode = ref("disabled");
		const selectedEntries = ref([]);
		const modeOptions = computed(() => {
			const all = [
				{
					label: i18n.baseText("agents.toolConfig.mcpApproval.disabled"),
					value: "disabled"
				},
				{
					label: i18n.baseText("agents.toolConfig.mcpApproval.askAll"),
					value: "global"
				},
				{
					label: i18n.baseText("agents.toolConfig.mcpApproval.askSelected"),
					value: "selected"
				}
			];
			return props.hideDisabledOption ? all.filter((option) => option.value !== "disabled") : all;
		});
		const isValid = computed(() => approvalMode.value !== "selected" || selectedEntries.value.length > 0);
		watch(() => props.modelValue, (approval) => {
			if (!approval) {
				approvalMode.value = "disabled";
				selectedEntries.value = [];
				return;
			}
			approvalMode.value = approval.mode;
			selectedEntries.value = approval.mode === "selected" ? approval.tools : [];
		}, { immediate: true });
		watch(isValid, (valid) => emit("update:valid", valid), { immediate: true });
		watch([() => props.modelValue, () => props.options], ([, options]) => {
			if (approvalMode.value !== "selected" || options.length === 0) return;
			const available = new Set(options.map((option) => option.value));
			const pruned = selectedEntries.value.filter((entry) => available.has(entry));
			if (pruned.length !== selectedEntries.value.length) {
				selectedEntries.value = pruned;
				emitApproval();
			}
		}, { immediate: true });
		function toStringArray(value) {
			return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
		}
		function toApprovalMode(value) {
			return value === "global" || value === "selected" ? value : "disabled";
		}
		function emitApproval() {
			if (approvalMode.value === "global") {
				emit("update:modelValue", { mode: "global" });
				return;
			}
			if (approvalMode.value === "selected") {
				emit("update:modelValue", {
					mode: "selected",
					tools: selectedEntries.value
				});
				return;
			}
			emit("update:modelValue", void 0);
		}
		function handleModeUpdate(value) {
			approvalMode.value = toApprovalMode(value);
			emitApproval();
			emit("update:mode", approvalMode.value);
		}
		function handleSelectedUpdate(value) {
			selectedEntries.value = toStringArray(value);
			emitApproval();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.label), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.hint), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(N8nSelect_default), {
					"model-value": approvalMode.value,
					size: "small",
					"data-test-id": `${props.testIdPrefix}-mode`,
					class: normalizeClass(_ctx.$style.modeSelect),
					"onUpdate:modelValue": handleModeUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(modeOptions.value, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"data-test-id",
					"class"
				]), renderSlot(_ctx.$slots, "controls", { mode: approvalMode.value })], 2),
				approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 0,
					"model-value": selectedEntries.value,
					multiple: "",
					filterable: "",
					size: "small",
					loading: props.loading,
					placeholder: props.placeholder,
					"data-test-id": `${props.testIdPrefix}-tools`,
					"onUpdate:modelValue": handleSelectedUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"loading",
					"placeholder",
					"data-test-id"
				])) : createCommentVNode("", true),
				props.error && approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "xsmall",
					color: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.error), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentApprovalSelector_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: "_approvalRow_4tj0v_1",
	approvalText: "_approvalText_4tj0v_9",
	controls: "_controls_4tj0v_16",
	modeSelect: "_modeSelect_4tj0v_22"
};
var AgentApprovalSelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentApprovalSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentApprovalSelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentApprovalSelector_default as t };

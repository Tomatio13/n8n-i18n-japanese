import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, ap as toDisplayString, ep as normalizeClass, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { CE as N8nButton_default, DE as _plugin_vue_export_helper_default, ME as useI18n, Wh as useUIStore, hE as N8nText_default, xE as Input_default } from "./app-BdR1u3Ua.js";
import { t as AgentModal_default } from "./AgentModal-BOcas3Q1.js";
//#region src/features/agents/components/AgentDescriptionModal.vue?vue&type=script&setup=true&lang.ts
var AgentDescriptionModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentDescriptionModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const description = ref(props.data.description);
		const canSave = computed(() => description.value.trim() !== props.data.description);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function onSave() {
			props.data.onConfirm(description.value.trim());
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: __props.data.agentName || unref(i18n).baseText("generic.description"),
				size: "medium",
				"data-testid": "agent-description-modal",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canSave.value,
					"data-testid": "agent-description-save",
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(Input_default), {
					modelValue: description.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => description.value = $event),
					type: "textarea",
					rows: 6,
					maxlength: unref(512),
					autofocus: "",
					placeholder: unref(i18n).baseText("agents.builder.description.placeholder"),
					"data-testid": "agent-description-input"
				}, null, 8, [
					"modelValue",
					"maxlength",
					"placeholder"
				]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.description.tip")), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
});
var AgentDescriptionModal_vue_vue_type_style_index_0_lang_module_default = { content: "_content_113zd_1" };
var AgentDescriptionModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentDescriptionModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentDescriptionModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentDescriptionModal_default as default };

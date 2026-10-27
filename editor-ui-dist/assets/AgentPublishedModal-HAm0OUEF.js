import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, ap as toDisplayString, ep as normalizeClass, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { CE as N8nButton_default, DE as _plugin_vue_export_helper_default, ET as Checkbox_default, ME as useI18n, Wh as useUIStore, Xm as LOCAL_STORAGE_HIDE_AGENT_PUBLISHED_CONFIRMATION, bi as useAgentTelemetry, hE as N8nText_default, wy as useStorage } from "./app-BdR1u3Ua.js";
import { t as AgentModal_default } from "./AgentModal-BOcas3Q1.js";
//#region src/features/agents/components/AgentPublishedModal.vue?vue&type=script&setup=true&lang.ts
var AgentPublishedModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPublishedModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const { trackDismissedAgentPublishedModal } = useAgentTelemetry();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const checked = ref(false);
		function handleCheckboxChange(checkboxValue) {
			const boolValue = typeof checkboxValue === "boolean" ? checkboxValue : Boolean(checkboxValue);
			checked.value = boolValue;
			useStorage(LOCAL_STORAGE_HIDE_AGENT_PUBLISHED_CONFIRMATION).value = boolValue.toString();
		}
		function onOpenChange(open) {
			if (open) return;
			trackDismissedAgentPublishedModal({
				agentId: props.data.agentId,
				dontShowAgain: checked.value
			});
			uiStore.closeModal(props.modalName);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.publish.modal.title"),
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-published-modal",
				"onUpdate:open": onOpenChange
			}, {
				footerLeft: withCtx(() => [createVNode(unref(Checkbox_default), {
					"model-value": checked.value,
					"data-testid": "agent-published-modal-dont-show-again",
					"onUpdate:modelValue": handleCheckboxChange
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
					_: 1
				}, 8, ["model-value"])]),
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					"data-testid": "agent-published-modal-got-it",
					onClick: _cache[0] || (_cache[0] = ($event) => onOpenChange(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.gotIt")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.description.readyToUse")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.description.changesNotPublished")), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
});
var AgentPublishedModal_vue_vue_type_style_index_0_lang_module_default = { content: "_content_113zd_1" };
var AgentPublishedModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPublishedModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPublishedModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentPublishedModal_default as default };

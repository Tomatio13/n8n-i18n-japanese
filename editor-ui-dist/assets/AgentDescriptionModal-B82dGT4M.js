import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Bf as ref, Df as withCtx, Gd as createTextVNode, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Rd as computed, Yf as unref, ff as openBlock, gp as normalizeClass, rp as init_shared_esm_bundler, xp as toDisplayString, zd as createBaseVNode } from "./vendor-BtpAr53w.js";
import { A_ as useUIStore, Ek as N8nButton_default, Fk as useI18n, _k as N8nText_default, kk as _plugin_vue_export_helper_default, wk as Input_default } from "./app-Dp0u0Hpe.js";
import { t as AgentModal_default } from "./AgentModal-C_94LzU2.js";
//#region src/features/agents/components/AgentDescriptionModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentDescriptionModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": { content: "_content_113zd_1" } }]]);
//#endregion
export { AgentDescriptionModal_default as default };

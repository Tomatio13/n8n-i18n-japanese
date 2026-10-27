import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, ap as toDisplayString, ep as normalizeClass, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { CE as N8nButton_default, DE as _plugin_vue_export_helper_default, Wh as useUIStore, hE as N8nText_default, wE as N8nIcon_default } from "./app-BdR1u3Ua.js";
import { t as AgentModal_default } from "./AgentModal-BOcas3Q1.js";
//#region src/features/agents/components/AgentConfirmationModal.vue?vue&type=script&setup=true&lang.ts
var AgentConfirmationModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentConfirmationModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const submitting = ref(false);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onCancel() {
			await props.data.onCancel?.();
			closeModal();
		}
		async function onConfirm() {
			submitting.value = true;
			try {
				if (await props.data.onConfirm?.() !== false) closeModal();
			} catch {} finally {
				submitting.value = false;
			}
		}
		async function onOpenChange(open) {
			if (open) return;
			if (await props.data.onClose?.() !== false) closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: props.data.title,
				busy: submitting.value,
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-confirmation-modal",
				"onUpdate:open": onOpenChange
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					disabled: submitting.value,
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.cancelButtonText), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					loading: submitting.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.confirmButtonText), 1)]),
					_: 1
				}, 8, ["loading"])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.description), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
});
var AgentConfirmationModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1l0k1_1",
	icon: "_icon_1l0k1_8"
};
var AgentConfirmationModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentConfirmationModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentConfirmationModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentConfirmationModal_default as default };

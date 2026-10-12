import { Ad as createTextVNode, Af as unref, Cd as computed, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-C0K-pJCd.js";
import { aw as _plugin_vue_export_helper_default, nw as N8nIcon_default, qC as N8nText_default, tw as N8nButton_default, wp as useUIStore } from "./app-Gcu_WcI0.js";
import { t as AgentModal_default } from "./AgentModal-DPr65EUE.js";
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
					variant: "subtle",
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
	content: "_content_1eme1_1",
	icon: "_icon_1eme1_8"
};
var AgentConfirmationModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentConfirmationModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentConfirmationModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentConfirmationModal_default as default };

import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Mf as ref, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, fp as toDisplayString, nf as onMounted, sp as normalizeClass } from "./vendor-C1jTjpo6.js";
import { Cw as _plugin_vue_export_helper_default, LC as createFormEventBus, N as CONFIRM_PASSWORD_MODAL_KEY, Ow as useI18n, _u as Modal_default, bC as N8nFormInputs_default, dw as N8nText_default, yw as N8nButton_default } from "./app-C5zIGyiz.js";
import { t as confirmPasswordEventBus } from "./auth.eventBus-DvM4B_IR.js";
//#region src/features/core/auth/components/ConfirmPasswordModal.vue?vue&type=script&setup=true&lang.ts
var ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ConfirmPasswordModal",
	setup(__props) {
		const config = ref(null);
		const formBus = createFormEventBus();
		const loading = ref(false);
		const i18n = useI18n();
		const onSubmit = (data) => {
			const currentPassword = data.currentPassword;
			if (!currentPassword) return;
			loading.value = true;
			confirmPasswordEventBus.emit("close", { currentPassword });
		};
		const onSubmitClick = () => {
			formBus.emit("submit");
		};
		onMounted(() => {
			config.value = [{ currentPassword: {
				name: "currentPassword",
				properties: {
					label: i18n.baseText("auth.confirmPassword.currentPassword"),
					type: "password",
					required: true,
					autocomplete: "current-password",
					capitalize: true,
					focusInitially: true
				}
			} }.currentPassword];
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CONFIRM_PASSWORD_MODAL_KEY),
				title: unref(i18n).baseText("auth.confirmPassword"),
				center: true,
				width: "460px",
				"event-bus": unref(confirmPasswordEventBus),
				onEnter: onSubmitClick
			}, {
				content: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.confirmPassword.confirmPasswordToChangeEmail")), 1)]),
					_: 1
				}, 8, ["class"]), config.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
					key: 0,
					inputs: config.value,
					"event-bus": unref(formBus),
					"column-view": true,
					onSubmit
				}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)]),
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					loading: loading.value,
					label: unref(i18n).baseText("generic.confirm"),
					float: "right",
					"data-test-id": "confirm-password-button",
					onClick: onSubmitClick
				}, null, 8, ["loading", "label"])]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
var ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default = { description: "_description_1xnmv_1" };
var ConfirmPasswordModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ConfirmPasswordModal_default as default };

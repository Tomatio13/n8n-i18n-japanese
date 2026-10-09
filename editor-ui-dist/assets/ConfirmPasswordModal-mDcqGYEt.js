import { Ad as createTextVNode, Af as unref, Ed as createCommentVNode, Kd as onMounted, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, jd as createVNode, np as toDisplayString, uf as withCtx } from "./vendor-BdZVA4Px.js";
import { M as CONFIRM_PASSWORD_MODAL_KEY, au as Modal_default, aw as _plugin_vue_export_helper_default, bC as createFormEventBus, qC as N8nText_default, rC as N8nFormInputs_default, tw as N8nButton_default, uw as useI18n } from "./app-BLs7xE53.js";
import { t as confirmPasswordEventBus } from "./auth.eventBus-B2cjd0xZ.js";
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

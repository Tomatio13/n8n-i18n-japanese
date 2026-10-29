import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Sd as withModifiers, Tf as ref, ap as toDisplayString, df as watch, ep as normalizeClass, kd as createCommentVNode, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, EE as N8nButton_default, FE as useI18n, OT as N8nInputLabel_default, Ty as useToast, U as CONFIRM_PASSWORD_MODAL_KEY, fw as DialogFooter_default, jy as useUsersStore, pw as Dialog_default, qh as useUIStore, tb as ResponseError, vE as N8nText_default, wE as Input_default } from "./app-kkzDAG6o.js";
import { t as confirmPasswordEventBus } from "./auth.eventBus-CAx8-hHq.js";
//#region src/features/core/auth/components/ConfirmPasswordModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["value"];
var WRONG_PASSWORD_MESSAGE = "Unable to update profile. Please check your credentials and try again.";
var ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ConfirmPasswordModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const { showError } = useToast();
		const password = ref("");
		const passwordInput = ref(null);
		const isSubmitting = ref(false);
		const rejection = ref();
		const canConfirm = computed(() => password.value.length > 0 && !rejection.value);
		const rejectionMessages = computed(() => ({
			wrongPassword: i18n.baseText("auth.password.wrong"),
			tooManyAttempts: i18n.baseText("mfa.prompt.error.tooManyAttempts")
		}));
		const error = computed(() => rejection.value && rejectionMessages.value[rejection.value]);
		watch(password, () => {
			rejection.value = void 0;
		});
		const close = (payload) => {
			if (isSubmitting.value) return;
			uiStore.closeModal(CONFIRM_PASSWORD_MODAL_KEY);
			confirmPasswordEventBus.emit("closed", payload);
		};
		const onOpenChange = (open) => {
			if (!open) close();
		};
		const onOpenAutoFocus = (event) => {
			event.preventDefault();
			passwordInput.value?.focus();
		};
		function toRejection(e) {
			if (!(e instanceof ResponseError)) return void 0;
			if (e.httpStatusCode === 429) return "tooManyAttempts";
			if (e.httpStatusCode === 400 && e.message === WRONG_PASSWORD_MESSAGE) return "wrongPassword";
		}
		const onSubmit = async () => {
			if (!canConfirm.value || isSubmitting.value) return;
			const sent = { currentPassword: password.value };
			isSubmitting.value = true;
			try {
				await props.data?.submit(sent);
			} catch (e) {
				rejection.value = toRejection(e);
				if (rejection.value) {
					passwordInput.value?.focus();
					passwordInput.value?.select();
					return;
				}
				showError(e, i18n.baseText("settings.personal.personalSettingsUpdatedError"));
			} finally {
				isSubmitting.value = false;
			}
			close(sent);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: true,
				header: unref(i18n).baseText("auth.confirmPassword.changeEmail.title"),
				description: unref(i18n).baseText("auth.confirmPassword.changeEmail.description"),
				size: "medium",
				"onUpdate:open": onOpenChange,
				onOpenAutoFocus
			}, {
				default: withCtx(() => [createBaseVNode("form", {
					novalidate: "",
					"data-test-id": "confirm-password-modal",
					onSubmit: withModifiers(onSubmit, ["prevent"])
				}, [
					createBaseVNode("input", {
						type: "email",
						name: "username",
						autocomplete: "username",
						value: unref(usersStore).currentUser?.email,
						hidden: "",
						readonly: ""
					}, null, 8, _hoisted_1),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.field, { [_ctx.$style.fieldInvalid]: error.value }]) }, [createVNode(unref(N8nInputLabel_default), {
						"input-name": "confirm-password",
						label: unref(i18n).baseText("auth.confirmPassword.changeEmail.input.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "confirm-password",
							ref_key: "passwordInput",
							ref: passwordInput,
							modelValue: password.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => password.value = $event),
							type: "password",
							name: "current-password",
							autocomplete: "current-password",
							size: "medium",
							"aria-invalid": Boolean(error.value),
							"aria-describedby": error.value ? "confirm-password-error" : void 0,
							"data-test-id": "confirm-password-input"
						}, null, 8, [
							"modelValue",
							"aria-invalid",
							"aria-describedby"
						])]),
						_: 1
					}, 8, ["label"]), error.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						id: "confirm-password-error",
						size: "small",
						color: "danger",
						role: "alert",
						"data-test-id": "confirm-password-error"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							disabled: isSubmitting.value,
							"data-test-id": "confirm-password-cancel-button",
							onClick: _cache[1] || (_cache[1] = ($event) => close())
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							type: "submit",
							disabled: !canConfirm.value,
							loading: isSubmitting.value,
							"data-test-id": "confirm-password-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.confirmPassword.changeEmail.button")), 1)]),
							_: 1
						}, 8, ["disabled", "loading"])]),
						_: 1
					})
				], 32)]),
				_: 1
			}, 8, ["header", "description"]);
		};
	}
});
var ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default = {
	field: "_field_hoqfs_1",
	fieldInvalid: "_fieldInvalid_hoqfs_9"
};
var ConfirmPasswordModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ConfirmPasswordModal_default as default };

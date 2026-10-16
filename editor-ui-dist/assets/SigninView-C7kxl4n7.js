import { Ad as Fragment, Af as reactive, Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Qd as nextTick, Ud as defineComponent, Vd as createVNode, af as openBlock, as as useRoute, au as CollapsibleTrigger_default, bf as withCtx, fp as toDisplayString, nf as onMounted, os as useRouter, rf as onUnmounted, sd as toRefs, sp as normalizeClass, su as CollapsibleRoot_default, vf as watch } from "./vendor-LwB6jUFW.js";
import { B as useNotificationsStore, DC as N8nHeading_default, DS as AnimatedCollapsibleContent_default, Dw as useI18n, H as useSSOStore, H_ as MFA_FORM, IC as createFormEventBus, J_ as useToast, Q_ as useTelemetry, Sw as _plugin_vue_export_helper_default, UC as N8nCallout_default, V_ as INTERNAL_AUTH_QUERY_PARAM, Y_ as VIEWS, dC as N8nLogo_default, ev as useUsersStore, tv as useSettingsStore, uw as N8nText_default, vw as N8nButton_default, xC as N8nLink_default, yC as N8nFormInputs_default, yw as N8nIcon_default, zC as N8nCard_default } from "./app-6hFiMIk3.js";
import { n as mfaEventBus } from "./auth.eventBus-YbWUDwm9.js";
import { t as AuthView_default } from "./AuthView-B4MJKxL4.js";
//#region src/features/core/auth/views/MfaView.vue?vue&type=script&setup=true&lang.ts
var MfaView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MfaView",
	props: { reportError: { type: Boolean } },
	emits: [
		"onFormChanged",
		"onBackClick",
		"submit"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const hasAnyChanges = ref(false);
		const formBus = ref(mfaEventBus);
		const formInputs = ref(null);
		const showRecoveryCodeForm = ref(false);
		const verifyingMfaCode = ref(false);
		const formError = ref("");
		const { reportError } = toRefs(props);
		const mfaFormRef = ref(null);
		const i18 = useI18n();
		const emit = __emit;
		const formField = (name, label, placeholder, maxlength, focus = true, autocomplete = "off") => {
			return {
				name,
				initialValue: "",
				properties: {
					label,
					placeholder,
					maxlength,
					capitalize: true,
					validateOnBlur: false,
					focusInitially: focus,
					autocomplete
				}
			};
		};
		const onRecoveryCodeClick = () => {
			formError.value = "";
			showRecoveryCodeForm.value = true;
			hasAnyChanges.value = false;
			formInputs.value = [mfaRecoveryCodeFieldWithDefaults()];
			emit("onFormChanged", MFA_FORM.MFA_RECOVERY_CODE);
		};
		const onBackClick = () => {
			if (!showRecoveryCodeForm.value) {
				emit("onBackClick", MFA_FORM.MFA_TOKEN);
				return;
			}
			showRecoveryCodeForm.value = false;
			hasAnyChanges.value = true;
			formInputs.value = [mfaCodeFieldWithDefaults()];
			emit("onBackClick", MFA_FORM.MFA_RECOVERY_CODE);
			focusMfaCodeAfterPasswordManager();
		};
		const onSubmit = (formData) => {
			const data = formData;
			formError.value = !showRecoveryCodeForm.value ? i18.baseText("mfa.code.invalid") : i18.baseText("mfa.recovery.invalid");
			emit("submit", data);
		};
		const focusMfaCodeAfterPasswordManager = () => {
			setTimeout(() => {
				if (mfaFormRef.value) {
					const container = mfaFormRef.value.$el;
					if (!container) return;
					const inputElement = container.querySelector("input[name=\"mfaCode\"]");
					if (inputElement) inputElement.focus();
				}
			}, 200);
		};
		const onInput = ({ target: { value, name } }) => {
			const isSubmittingMfaCode = name === "mfaCode";
			const inputValidLength = isSubmittingMfaCode ? 6 : 36;
			if (value.length !== inputValidLength) {
				hasAnyChanges.value = false;
				return;
			}
			verifyingMfaCode.value = true;
			hasAnyChanges.value = true;
			const dataToSubmit = isSubmittingMfaCode ? {
				mfaCode: value,
				mfaRecoveryCode: ""
			} : {
				mfaCode: "",
				mfaRecoveryCode: value
			};
			try {
				onSubmit(dataToSubmit);
			} catch (e) {} finally {
				verifyingMfaCode.value = false;
			}
		};
		const mfaRecoveryCodeFieldWithDefaults = () => {
			return formField("mfaRecoveryCode", i18.baseText("mfa.recovery.input.label"), i18.baseText("mfa.recovery.input.placeholder"), 36);
		};
		const mfaCodeFieldWithDefaults = () => {
			return formField("mfaCode", i18.baseText("mfa.code.input.label"), i18.baseText("mfa.code.input.placeholder"), 6, false, "one-time-code");
		};
		const onSaveClick = () => {
			formBus.value.emit("submit");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		onMounted(() => {
			formInputs.value = [mfaCodeFieldWithDefaults()];
			focusMfaCodeAfterPasswordManager();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLogo_default), {
				size: "large",
				"release-channel": unref(releaseChannel)
			}, null, 8, ["release-channel"]), createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContainer) }, [createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.modal.title") : unref(i18).baseText("mfa.code.modal.title")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.formContainer, unref(reportError) ? _ctx.$style.formError : ""]) }, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
						key: 0,
						ref_key: "mfaFormRef",
						ref: mfaFormRef,
						"data-test-id": "mfa-login-form",
						inputs: formInputs.value,
						"event-bus": formBus.value,
						onInput,
						onSubmit
					}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoBox) }, [!showRecoveryCodeForm.value && !unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base",
						bold: false
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18).baseText("mfa.code.input.info")) + " ", 1), createBaseVNode("a", {
							"data-test-id": "mfa-enter-recovery-code-button",
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.code.input.info.action")), 1)]),
						_: 1
					})) : createCommentVNode("", true), unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formError.value) + " ", 1), !showRecoveryCodeForm.value ? (openBlock(), createElementBlock("a", {
							key: 0,
							class: normalizeClass(_ctx.$style.recoveryCodeLink),
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.recovery.input.info.action")), 3)) : createCommentVNode("", true)]),
						_: 1
					})) : createCommentVNode("", true)], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						float: "left",
						label: unref(i18).baseText("mfa.button.back"),
						size: "large",
						onClick: onBackClick
					}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
						float: "right",
						loading: verifyingMfaCode.value,
						label: showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.button.verify") : unref(i18).baseText("mfa.code.button.continue"),
						size: "large",
						disabled: !hasAnyChanges.value,
						onClick: onSaveClick
					}, null, 8, [
						"loading",
						"label",
						"disabled"
					])], 2)
				]),
				_: 1
			})], 2);
		};
	}
});
var MfaView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_zl0jk_5",
	formContainer: "_formContainer_zl0jk_15",
	footer: "_footer_zl0jk_19",
	headerContainer: "_headerContainer_zl0jk_25",
	formError: "_formError_zl0jk_30",
	recoveryCodeLink: "_recoveryCodeLink_zl0jk_34",
	infoBox: "_infoBox_zl0jk_38"
};
var MfaView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MfaView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MfaView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/auth/components/SsoSigninCard.vue?vue&type=script&setup=true&lang.ts
/**
* The sign-in card for instances where SSO is the active login method.
* "Continue with SSO" is the primary action; the email/password form sits
* behind a disclosure so it stays one click away without inviting users to
* type credentials that SSO would reject.
*/
var SsoSigninCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SsoSigninCard",
	props: {
		form: {},
		formLoading: {
			type: Boolean,
			default: false
		},
		ssoLoading: {
			type: Boolean,
			default: false
		},
		ssoRequired: {
			type: Boolean,
			default: false
		},
		defaultExpanded: {
			type: Boolean,
			default: false
		}
	},
	emits: ["submit", "ssoLogin"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const formBus = createFormEventBus();
		const isPasswordFormOpen = ref(props.defaultExpanded);
		const passwordFormRef = ref(null);
		const calloutRef = ref(null);
		const passwordFormContentId = ref();
		const inputs = computed(() => props.form.inputs.map((input) => ({
			...input,
			properties: {
				...input.properties,
				focusInitially: false
			}
		})));
		const nextFrame = async () => await new Promise((resolve) => requestAnimationFrame(() => resolve()));
		const focusFirstInput = async () => {
			await nextTick();
			for (let frame = 0; frame < 10 && passwordFormRef.value?.parentElement?.hidden; frame++) await nextFrame();
			passwordFormRef.value?.querySelector("input")?.focus({ preventScroll: true });
		};
		onMounted(async () => {
			passwordFormContentId.value = passwordFormRef.value?.parentElement?.id || void 0;
			if (props.defaultExpanded) await focusFirstInput();
		});
		watch(isPasswordFormOpen, async (isOpen) => {
			if (isOpen) await focusFirstInput();
		});
		watch(() => props.ssoRequired, async (ssoRequired) => {
			if (!ssoRequired) return;
			await nextTick();
			const element = calloutRef.value?.$el;
			if (element instanceof HTMLElement) element.focus({ preventScroll: true });
		});
		const onSubmit = (values) => {
			emit("submit", values);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["n8n-form-box", _ctx.$style.container]),
				"data-test-id": "sso-signin-card"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.form.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium",
					color: "text-base",
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("sso.login.subtitle")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nButton_default), {
					size: "large",
					class: normalizeClass(_ctx.$style.ssoButton),
					label: unref(i18n).baseText("sso.login.button"),
					loading: __props.ssoLoading,
					"data-test-id": "sso-login-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("ssoLogin"))
				}, null, 8, [
					"class",
					"label",
					"loading"
				]),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.divider),
					"aria-hidden": "true"
				}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)], 2),
				createVNode(unref(CollapsibleRoot_default), {
					open: isPasswordFormOpen.value,
					"onUpdate:open": _cache[3] || (_cache[3] = ($event) => isPasswordFormOpen.value = $event),
					"unmount-on-hide": false,
					class: normalizeClass(_ctx.$style.passwordSection)
				}, {
					default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "large",
							class: normalizeClass(_ctx.$style.revealTrigger),
							"aria-controls": passwordFormContentId.value,
							"data-test-id": "reveal-password-login"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.signin.passwordDisclosure")) + " ", 1), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: "small",
								class: normalizeClass([_ctx.$style.chevron, isPasswordFormOpen.value && _ctx.$style.chevronOpen])
							}, null, 8, ["class"])]),
							_: 1
						}, 8, ["class", "aria-controls"])]),
						_: 1
					}), createVNode(unref(AnimatedCollapsibleContent_default), {
						class: normalizeClass(_ctx.$style.passwordFormContent),
						blur: ""
					}, {
						default: withCtx(() => [createBaseVNode("div", {
							ref_key: "passwordFormRef",
							ref: passwordFormRef,
							class: normalizeClass(_ctx.$style.passwordForm)
						}, [
							__props.ssoRequired ? (openBlock(), createBlock(unref(N8nCallout_default), {
								key: 0,
								ref_key: "calloutRef",
								ref: calloutRef,
								theme: "warning",
								class: normalizeClass(_ctx.$style.callout),
								tabindex: "-1",
								"data-test-id": "sso-required-callout"
							}, {
								default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.calloutContent) }, [
									createVNode(unref(N8nText_default), {
										tag: "p",
										size: "small",
										color: "text-base",
										bold: ""
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.signin.ssoRequired.title")), 1)]),
										_: 1
									}),
									createVNode(unref(N8nText_default), {
										tag: "p",
										size: "small",
										color: "text-base"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.signin.ssoRequired")), 1)]),
										_: 1
									}),
									createVNode(unref(N8nButton_default), {
										variant: "subtle",
										size: "small",
										class: normalizeClass(_ctx.$style.calloutAction),
										label: unref(i18n).baseText("sso.login.button"),
										loading: __props.ssoLoading,
										"data-test-id": "sso-required-callout-action",
										onClick: _cache[1] || (_cache[1] = ($event) => emit("ssoLogin"))
									}, null, 8, [
										"class",
										"label",
										"loading"
									])
								], 2)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputsContainer) }, [createVNode(unref(N8nFormInputs_default), {
								inputs: inputs.value,
								"event-bus": unref(formBus),
								"column-view": true,
								onSubmit
							}, null, 8, ["inputs", "event-bus"])], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonsContainer) }, [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "large",
								label: __props.form.buttonText,
								loading: __props.formLoading,
								"data-test-id": "form-submit-button",
								onClick: _cache[2] || (_cache[2] = ($event) => unref(formBus).emit("submit"))
							}, null, 8, ["label", "loading"])], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionContainer) }, [__props.form.redirectText && __props.form.redirectLink ? (openBlock(), createBlock(unref(N8nLink_default), {
								key: 0,
								to: __props.form.redirectLink
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.form.redirectText), 1)]),
								_: 1
							}, 8, ["to"])) : createCommentVNode("", true)], 2)
						], 2)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["open", "class"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/core/auth/components/SsoSigninCard.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_q8dml_276";
var heading = "_heading_q8dml_284";
var ssoButton = "_ssoButton_q8dml_295";
var divider = "_divider_q8dml_299";
var passwordSection = "_passwordSection_q8dml_324";
var revealTrigger = "_revealTrigger_q8dml_330";
var chevron = "_chevron_q8dml_335";
var chevronOpen = "_chevronOpen_q8dml_346";
var passwordFormContent = "_passwordFormContent_q8dml_350";
var passwordForm = "_passwordForm_q8dml_350";
var callout = "_callout_q8dml_359";
var fadeInDown = "_fadeInDown_q8dml_1";
var calloutContent = "_calloutContent_q8dml_375";
var calloutAction = "_calloutAction_q8dml_385";
var inputsContainer = "_inputsContainer_q8dml_389";
var actionContainer = "_actionContainer_q8dml_393";
var buttonsContainer = "_buttonsContainer_q8dml_398 _actionContainer_q8dml_393";
var shimmer = "_shimmer_q8dml_1";
var spin = "_spin_q8dml_1";
var opacityPulse = "_opacityPulse_q8dml_1";
var popoverIn = "_popoverIn_q8dml_1";
var fadeIn = "_fadeIn_q8dml_1";
var collapsibleSlideDown = "_collapsibleSlideDown_q8dml_1";
var collapsibleSlideUp = "_collapsibleSlideUp_q8dml_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_q8dml_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_q8dml_1";
var blurSwapIn = "_blurSwapIn_q8dml_1";
var blurSwapOut = "_blurSwapOut_q8dml_1";
var pulseGlow = "_pulseGlow_q8dml_1";
var pulseGlowDelayed = "_pulseGlowDelayed_q8dml_1";
var fade = "_fade_q8dml_1";
var fadeInUp = "_fadeInUp_q8dml_1";
var fadeInLeft = "_fadeInLeft_q8dml_1";
var fadeInRight = "_fadeInRight_q8dml_1";
var fadeOut = "_fadeOut_q8dml_1";
var fadeOutDown = "_fadeOutDown_q8dml_1";
var fadeOutUp = "_fadeOutUp_q8dml_1";
var fadeOutLeft = "_fadeOutLeft_q8dml_1";
var fadeOutRight = "_fadeOutRight_q8dml_1";
var ping = "_ping_q8dml_1";
var blinkBackground = "_blinkBackground_q8dml_1";
var typingBlink = "_typingBlink_q8dml_1";
var SsoSigninCard_vue_vue_type_style_index_0_lang_module_default = {
	container,
	heading,
	ssoButton,
	divider,
	passwordSection,
	revealTrigger,
	chevron,
	chevronOpen,
	passwordFormContent,
	passwordForm,
	callout,
	fadeInDown,
	calloutContent,
	calloutAction,
	inputsContainer,
	actionContainer,
	buttonsContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_q8dml_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var SsoSigninCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SsoSigninCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SsoSigninCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/auth/views/SigninView.vue
var SigninView_default = /* @__PURE__ */ defineComponent({
	__name: "SigninView",
	setup(__props) {
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const showMfaView = ref(false);
		const emailOrLdapLoginId = ref("");
		const password = ref("");
		const reportError = ref(false);
		const isSsoLogin = computed(() => ssoStore.showSsoLoginButton);
		const isInternalAuthRequested = computed(() => route.query[INTERNAL_AUTH_QUERY_PARAM] === "true");
		const ssoLoading = ref(false);
		const ssoRequired = ref(false);
		const notificationsStore = useNotificationsStore();
		const showAuthViewMessage = (messageData) => {
			notificationsStore.setNotificationsSuppressed(false);
			toast.showMessage(messageData);
			notificationsStore.setNotificationsSuppressed(true);
		};
		onMounted(() => {
			if (route.query["ssoError"] === "access-denied") {
				showAuthViewMessage({
					title: locale.baseText("auth.signin.accessDenied.title"),
					message: locale.baseText("auth.signin.accessDenied"),
					type: "error",
					duration: 0
				});
				return;
			}
			if (route.query["ssoError"] === "login-failed") {
				showAuthViewMessage({
					title: locale.baseText("auth.signin.ssoLoginFailed.title"),
					message: locale.baseText("auth.signin.ssoLoginFailed"),
					type: "error",
					duration: 0
				});
				return;
			}
			if (route.query.sessionExpired !== "true") return;
			showAuthViewMessage({
				title: locale.baseText("auth.signin.sessionExpired.title"),
				message: locale.baseText("auth.signin.sessionExpired"),
				type: "info"
			});
		});
		onUnmounted(() => {
			notificationsStore.setNotificationsSuppressed(false);
		});
		const ldapLoginLabel = computed(() => ssoStore.ldapLoginLabel);
		const isLdapLoginEnabled = computed(() => ssoStore.isLdapLoginEnabled);
		const emailLabel = computed(() => {
			let label = locale.baseText("auth.email");
			if (isLdapLoginEnabled.value && ldapLoginLabel.value) label = ldapLoginLabel.value;
			return label;
		});
		const formConfig = reactive({
			title: locale.baseText("auth.signin"),
			buttonText: locale.baseText("auth.signin"),
			redirectText: locale.baseText("forgotPassword"),
			redirectLink: "/forgot-password",
			inputs: [{
				name: "emailOrLdapLoginId",
				properties: {
					label: emailLabel.value,
					type: "email",
					required: true,
					...!isLdapLoginEnabled.value && { validationRules: [{ name: "VALID_EMAIL" }] },
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "email",
					capitalize: true,
					focusInitially: true
				}
			}, {
				name: "password",
				properties: {
					label: locale.baseText("auth.password"),
					type: "password",
					required: true,
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "current-password",
					capitalize: true
				}
			}]
		});
		const onMFASubmitted = async (form) => {
			await login({
				emailOrLdapLoginId: emailOrLdapLoginId.value,
				password: password.value,
				mfaCode: form.mfaCode,
				mfaRecoveryCode: form.mfaRecoveryCode
			});
		};
		const onEmailPasswordSubmitted = async (form) => {
			await login(form);
		};
		const onSsoLogin = async () => {
			notificationsStore.setNotificationsSuppressed(false);
			ssoLoading.value = true;
			try {
				window.location.href = await ssoStore.getSsoLoginUrl(typeof route.query?.redirect === "string" ? route.query.redirect : "");
			} catch (error) {
				ssoLoading.value = false;
				toast.showError(error, locale.baseText("auth.signin.error"));
			}
		};
		const isRedirectSafe = () => {
			const redirect = getRedirectQueryParameter();
			if (redirect.startsWith("/")) return true;
			try {
				return new URL(redirect).origin === window.location.origin;
			} catch {
				return false;
			}
		};
		const getRedirectQueryParameter = () => {
			let redirect = "";
			if (typeof route.query?.redirect === "string") redirect = decodeURIComponent(route.query?.redirect);
			return redirect;
		};
		const login = async (form) => {
			notificationsStore.setNotificationsSuppressed(false);
			ssoRequired.value = false;
			try {
				loading.value = true;
				await usersStore.loginWithCreds({
					emailOrLdapLoginId: form.emailOrLdapLoginId,
					password: form.password,
					mfaCode: form.mfaCode,
					mfaRecoveryCode: form.mfaRecoveryCode
				});
				loading.value = false;
				await settingsStore.getSettings();
				toast.clearAllStickyNotifications();
				if (settingsStore.isMFAEnforced && !usersStore.currentUser?.mfaAuthenticated) {
					await router.push({ name: VIEWS.PERSONAL_SETTINGS });
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_success" : "success" });
				if (isRedirectSafe()) {
					const redirect = getRedirectQueryParameter();
					if (redirect.startsWith("http")) {
						window.location.href = redirect;
						return;
					}
					router.push(redirect);
					return;
				}
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				if (error.errorCode === 998) {
					showMfaView.value = true;
					cacheCredentials(form);
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_token_rejected" : "credentials_error" });
				if (error.errorCode === 996 && isSsoLogin.value && !showMfaView.value) {
					ssoRequired.value = true;
					loading.value = false;
					return;
				}
				if (!showMfaView.value) {
					toast.showError(error, locale.baseText("auth.signin.error"));
					loading.value = false;
					return;
				}
				reportError.value = true;
			}
		};
		const onBackClick = (fromForm) => {
			reportError.value = false;
			if (fromForm === MFA_FORM.MFA_TOKEN) {
				showMfaView.value = false;
				loading.value = false;
			}
		};
		const onFormChanged = (toForm) => {
			if (toForm === MFA_FORM.MFA_RECOVERY_CODE) reportError.value = false;
		};
		const cacheCredentials = (form) => {
			emailOrLdapLoginId.value = form.emailOrLdapLoginId;
			password.value = form.password;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!showMfaView.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [isSsoLogin.value ? (openBlock(), createBlock(AuthView_default, {
				key: 0,
				"data-test-id": "signin-form"
			}, {
				default: withCtx(() => [createVNode(SsoSigninCard_default, {
					form: formConfig,
					"form-loading": loading.value,
					"sso-loading": ssoLoading.value,
					"sso-required": ssoRequired.value,
					"default-expanded": isInternalAuthRequested.value,
					onSubmit: onEmailPasswordSubmitted,
					onSsoLogin
				}, null, 8, [
					"form",
					"form-loading",
					"sso-loading",
					"sso-required",
					"default-expanded"
				])]),
				_: 1
			})) : (openBlock(), createBlock(AuthView_default, {
				key: 1,
				form: formConfig,
				"form-loading": loading.value,
				"data-test-id": "signin-form",
				onSubmit: onEmailPasswordSubmitted
			}, null, 8, ["form", "form-loading"]))], 64)) : createCommentVNode("", true), showMfaView.value ? (openBlock(), createBlock(MfaView_default, {
				key: 1,
				"report-error": reportError.value,
				onSubmit: onMFASubmitted,
				onOnBackClick: onBackClick,
				onOnFormChanged: onFormChanged
			}, null, 8, ["report-error"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
export { SigninView_default as default };

import { Ad as Fragment, Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, ef as onBeforeUnmount, fp as toDisplayString, nf as onMounted, sf as renderList, sp as normalizeClass } from "./vendor-C1jTjpo6.js";
import { AC as N8nSelect_default, Bm as MFA_DOCS_URL, DC as N8nHeading_default, Dw as useI18n, F as PROMPT_MFA_CODE_MODAL_KEY, Fp as useUIStore, H as useSSOStore, IC as createFormEventBus, J_ as useToast, Jv as ROLE, M as CHANGE_PASSWORD_MODAL_KEY, N as CONFIRM_PASSWORD_MODAL_KEY, NC as N8nOption_default, No as useRolesStore, P as MFA_SETUP_MODAL_KEY, SC as N8nInputLabel_default, Sw as _plugin_vue_export_helper_default, Z_ as useCloudPlanStore, ev as useUsersStore, fw as N8nTooltip_default, iC as N8nNotice_default, qC as N8nAvatar_default, tv as useSettingsStore, uw as N8nText_default, vd as useDocumentTitle, vw as N8nButton_default, xC as N8nLink_default, yC as N8nFormInputs_default } from "./app-C-V9N0hV.js";
import { r as promptMfaCodeBus, t as confirmPasswordEventBus } from "./auth.eventBus-DajPLO77.js";
//#region src/features/core/auth/views/SettingsPersonalView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { "data-test-id": "personal-data-form" };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { class: "mb-s" };
var _hoisted_5 = {
	key: 0,
	class: "mb-s"
};
var _hoisted_6 = {
	key: 1,
	"data-test-id": "mfa-section"
};
var _hoisted_7 = { class: "mb-xs" };
var _hoisted_8 = { class: "mb-s" };
var SettingsPersonalView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsPersonalView",
	setup(__props) {
		const i18n = useI18n();
		const { showToast, showError } = useToast();
		const documentTitle = useDocumentTitle();
		const isActive = ref(true);
		const hasAnyBasicInfoChanges = ref(false);
		const formInputs = ref(null);
		const formBus = createFormEventBus();
		const readyToSubmit = ref(false);
		const currentSelectedTheme = ref(useUIStore().theme);
		const themeOptions = ref([
			{
				name: "system",
				label: "settings.personal.theme.systemDefault"
			},
			{
				name: "light",
				label: "settings.personal.theme.light"
			},
			{
				name: "dark",
				label: "settings.personal.theme.dark"
			}
		]);
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const rolesStore = useRolesStore();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const cloudPlanStore = useCloudPlanStore();
		const currentUser = computed(() => {
			return usersStore.currentUser;
		});
		const isManagedByEnv = computed(() => {
			return currentUser.value?.isManagedByEnv ?? false;
		});
		const isLdapCurrentAuthMethod = computed(() => {
			return ssoStore.isEnterpriseLdapEnabled && currentUser.value?.signInType === "ldap";
		});
		const isExternalAuthEnabled = computed(() => {
			const isSamlEnabled = ssoStore.isSamlLoginEnabled && ssoStore.isDefaultAuthenticationSaml;
			const isOidcEnabled = ssoStore.isEnterpriseOidcEnabled && ssoStore.isOidcLoginEnabled && currentUser.value?.signInType === "oidc";
			return isLdapCurrentAuthMethod.value || isSamlEnabled || isOidcEnabled;
		});
		const isPersonalSecurityEnabled = computed(() => {
			return usersStore.isInstanceOwner || !isExternalAuthEnabled.value;
		});
		const mfaDisabled = computed(() => {
			return !usersStore.mfaEnabled;
		});
		const mfaEnforced = computed(() => {
			return settingsStore.isMFAEnforced;
		});
		const isMfaFeatureEnabled = computed(() => {
			return settingsStore.isMfaFeatureEnabled;
		});
		const canConfigureMfa = computed(() => {
			return isMfaFeatureEnabled.value && (isPersonalSecurityEnabled.value || isLdapCurrentAuthMethod.value);
		});
		const isSecuritySectionVisible = computed(() => {
			return !isManagedByEnv.value && (isPersonalSecurityEnabled.value || canConfigureMfa.value);
		});
		const hasAnyPersonalisationChanges = computed(() => {
			return currentSelectedTheme.value !== uiStore.theme;
		});
		const hasAnyChanges = computed(() => {
			return hasAnyBasicInfoChanges.value || hasAnyPersonalisationChanges.value;
		});
		const currentUserRole = computed(() => {
			const knownRoles = {
				[ROLE.Default]: {
					name: i18n.baseText("auth.roles.default"),
					description: i18n.baseText("settings.personal.role.tooltip.default")
				},
				[ROLE.Member]: {
					name: i18n.baseText("auth.roles.member"),
					description: i18n.baseText("settings.personal.role.tooltip.member")
				},
				[ROLE.ChatUser]: {
					name: i18n.baseText("auth.roles.chatUser"),
					description: i18n.baseText("settings.personal.role.tooltip.chatUser")
				},
				[ROLE.Admin]: {
					name: i18n.baseText("auth.roles.admin"),
					description: i18n.baseText("settings.personal.role.tooltip.admin")
				},
				[ROLE.Owner]: {
					name: i18n.baseText("auth.roles.owner"),
					description: i18n.baseText("settings.personal.role.tooltip.owner", { interpolate: { cloudAccess: cloudPlanStore.hasCloudPlan ? i18n.baseText("settings.personal.role.tooltip.cloud") : "" } })
				}
			};
			const globalRoleName = usersStore.globalRoleName;
			const knownRole = knownRoles[globalRoleName];
			if (knownRole) return knownRole;
			const customRole = rolesStore.processedInstanceRoles.find((r) => r.slug === globalRoleName);
			return {
				name: customRole?.displayName ?? globalRoleName,
				description: customRole?.description ?? ""
			};
		});
		function buildFormInputs() {
			return [
				{
					name: "firstName",
					initialValue: currentUser.value?.firstName,
					properties: {
						label: i18n.baseText("auth.firstName"),
						maxlength: 32,
						required: true,
						autocomplete: "given-name",
						capitalize: true,
						disabled: isManagedByEnv.value || isExternalAuthEnabled.value
					}
				},
				{
					name: "lastName",
					initialValue: currentUser.value?.lastName,
					properties: {
						label: i18n.baseText("auth.lastName"),
						maxlength: 32,
						required: true,
						autocomplete: "family-name",
						capitalize: true,
						disabled: isManagedByEnv.value || isExternalAuthEnabled.value
					}
				},
				{
					name: "email",
					initialValue: currentUser.value?.email,
					properties: {
						label: i18n.baseText("auth.email"),
						type: "email",
						required: true,
						validationRules: [{ name: "VALID_EMAIL" }],
						autocomplete: "email",
						capitalize: true,
						disabled: isManagedByEnv.value || !isPersonalSecurityEnabled.value
					}
				}
			];
		}
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.personal.personalSettings"));
			formInputs.value = buildFormInputs();
		});
		function onInput() {
			hasAnyBasicInfoChanges.value = true;
		}
		function onReadyToSubmit(ready) {
			readyToSubmit.value = ready;
		}
		async function onSubmit(data) {
			const form = data;
			const emailChanged = usersStore.currentUser?.email !== form.email;
			await saveNameAndPersonalisation(form);
			if (emailChanged && isActive.value) startEmailChange(form.email);
		}
		/** Saves name and personalization settings, only when they changed. */
		async function saveNameAndPersonalisation(form) {
			const current = usersStore.currentUser;
			const nameChanged = current?.firstName !== form.firstName || current?.lastName !== form.lastName;
			if (!nameChanged && !hasAnyPersonalisationChanges.value) return;
			try {
				if (nameChanged && usersStore.currentUserId) await usersStore.updateUserName({
					firstName: form.firstName,
					lastName: form.lastName
				});
				if (hasAnyPersonalisationChanges.value) uiStore.setTheme(currentSelectedTheme.value);
				hasAnyBasicInfoChanges.value = false;
				showToast({
					title: i18n.baseText("settings.personal.personalSettingsUpdated"),
					message: "",
					type: "success"
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.personal.personalSettingsUpdatedError"));
			}
		}
		function startEmailChange(newEmail) {
			if (usersStore.currentUser?.mfaEnabled) {
				uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
				promptMfaCodeBus.once("closed", async (payload) => {
					if (!payload) return;
					await submitEmailChange({
						email: newEmail,
						mfaCode: payload.mfaCode
					});
				});
			} else {
				uiStore.openModal(CONFIRM_PASSWORD_MODAL_KEY);
				confirmPasswordEventBus.once("close", async (payload) => {
					if (!payload) return;
					await submitEmailChange({
						email: newEmail,
						currentPassword: payload.currentPassword
					});
					uiStore.closeModal(CONFIRM_PASSWORD_MODAL_KEY);
				});
			}
		}
		async function submitEmailChange(params) {
			try {
				if ((await usersStore.requestEmailChange(params)).status === "confirmation-sent") {
					revertEmailField();
					showToast({
						title: i18n.baseText("settings.personal.emailChange.confirmationSent.title"),
						message: i18n.baseText("settings.personal.emailChange.confirmationSent.message"),
						type: "success"
					});
				} else showToast({
					title: i18n.baseText("settings.personal.personalSettingsUpdated"),
					message: "",
					type: "success"
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.personal.personalSettingsUpdatedError"));
			}
		}
		function revertEmailField() {
			formInputs.value = buildFormInputs();
			hasAnyBasicInfoChanges.value = false;
		}
		function onSaveClick() {
			formBus.emit("submit");
		}
		function openPasswordModal() {
			uiStore.openModal(CHANGE_PASSWORD_MODAL_KEY);
		}
		async function onMfaEnableClick() {
			if (!settingsStore.isCloudDeployment || !usersStore.isInstanceOwner) {
				uiStore.openModal(MFA_SETUP_MODAL_KEY);
				return;
			}
			try {
				await usersStore.canEnableMFA();
				uiStore.openModal(MFA_SETUP_MODAL_KEY);
			} catch (e) {
				showToast({
					title: i18n.baseText("settings.personal.mfa.toast.canEnableMfa.title"),
					message: e.message,
					type: "error"
				});
				await usersStore.sendConfirmationEmail();
			}
		}
		async function disableMfa(payload) {
			if (!payload) return;
			try {
				await usersStore.disableMfa(payload);
				showToast({
					title: i18n.baseText("settings.personal.mfa.toast.disabledMfa.title"),
					message: i18n.baseText("settings.personal.mfa.toast.disabledMfa.message"),
					type: "success",
					duration: 0
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.personal.mfa.toast.disabledMfa.error.message"));
			}
		}
		async function onMfaDisableClick() {
			uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
			promptMfaCodeBus.once("closed", disableMfa);
		}
		onBeforeUnmount(() => {
			isActive.value = false;
			promptMfaCodeBus.off("closed", disableMfa);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "personal-settings-container"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalSettings")), 1)]),
					_: 1
				}), currentUser.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.user)
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.username),
					"data-test-id": "current-user-name"
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentUser.value.fullName), 1)]),
					_: 1
				}), createVNode(unref(N8nTooltip_default), {
					placement: "bottom",
					disabled: !currentUserRole.value.description
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.description), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.tooltip),
						color: "text-light",
						"data-test-id": "current-user-role"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.name), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"])], 2), createVNode(unref(N8nAvatar_default), {
					"first-name": currentUser.value.firstName,
					"last-name": currentUser.value.lastName,
					size: "large"
				}, null, 8, ["first-name", "last-name"])], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", null, [
					createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.basicInformation")), 1)]),
						_: 1
					})]),
					isManagedByEnv.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						content: unref(i18n).baseText("settings.personal.managedByEnv"),
						"data-test-id": "managed-by-env-notice"
					}, null, 8, ["content"])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_2, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
						key: 0,
						inputs: formInputs.value,
						"event-bus": unref(formBus),
						onUpdate: onInput,
						onReady: onReadyToSubmit,
						onSubmit
					}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)])
				]),
				isSecuritySectionVisible.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nHeading_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.security")), 1)]),
						_: 1
					})]),
					isPersonalSecurityEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("auth.password") }, {
						default: withCtx(() => [createVNode(unref(N8nLink_default), {
							"data-test-id": "change-password-link",
							onClick: openPasswordModal
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.changePassword")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["label"])])) : createCommentVNode("", true),
					canConfigureMfa.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
						createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.personal.mfa.section.title") }, null, 8, ["label"]), createVNode(unref(N8nText_default), {
							bold: false,
							class: normalizeClass(_ctx.$style.infoText)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(mfaDisabled.value ? unref(i18n).baseText("settings.personal.mfa.button.disabled.infobox") : unref(i18n).baseText("settings.personal.mfa.button.enabled.infobox")) + " ", 1), createVNode(unref(N8nLink_default), {
								to: unref(MFA_DOCS_URL),
								size: "small",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
								_: 1
							}, 8, ["to"])]),
							_: 1
						}, 8, ["class"])]),
						mfaDisabled.value && mfaEnforced.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
							key: 0,
							content: unref(i18n).baseText("settings.personal.mfa.enforced")
						}, null, 8, ["content"])) : createCommentVNode("", true),
						mfaDisabled.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "subtle",
							class: normalizeClass(_ctx.$style.button),
							label: unref(i18n).baseText("settings.personal.mfa.button.enabled"),
							"data-test-id": "enable-mfa-button",
							onClick: onMfaEnableClick
						}, null, 8, ["class", "label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 2,
							variant: "subtle",
							class: normalizeClass(_ctx.$style.disableMfaButton),
							label: unref(i18n).baseText("settings.personal.mfa.button.disabled"),
							"data-test-id": "disable-mfa-button",
							onClick: onMfaDisableClick
						}, null, 8, ["class", "label"]))
					])) : createCommentVNode("", true)
				])) : createCommentVNode("", true),
				createBaseVNode("div", null, [createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nHeading_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalisation")), 1)]),
					_: 1
				})]), createBaseVNode("div", null, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.personal.theme") }, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						modelValue: currentSelectedTheme.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentSelectedTheme.value = $event),
						class: normalizeClass(_ctx.$style.themeSelect),
						"data-test-id": "theme-select",
						size: "small",
						filterable: ""
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(themeOptions.value, (item) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: item.name,
								label: unref(i18n).baseText(item.label),
								value: item.name
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "class"])]),
					_: 1
				}, 8, ["label"])])]),
				createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
					float: "right",
					label: unref(i18n).baseText("settings.personal.save"),
					size: "large",
					disabled: !hasAnyChanges.value || !readyToSubmit.value,
					"data-test-id": "save-settings-button",
					onClick: onSaveClick
				}, null, 8, ["label", "disabled"])])
			], 2);
		};
	}
});
var SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1cnup_1",
	header: "_header_1cnup_8",
	user: "_user_1cnup_17",
	username: "_username_1cnup_27",
	tooltip: "_tooltip_1cnup_40",
	disableMfaButton: "_disableMfaButton_1cnup_44",
	button: "_button_1cnup_48",
	infoText: "_infoText_1cnup_55",
	themeSelect: "_themeSelect_1cnup_60"
};
var SettingsPersonalView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsPersonalView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsPersonalView_default as default };

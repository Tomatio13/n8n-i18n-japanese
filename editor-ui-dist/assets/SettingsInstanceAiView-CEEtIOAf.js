import { Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, cf as renderList, cp as normalizeClass, cs as useRouter, jd as Fragment, jf as reactive, of as openBlock, pp as toDisplayString, rf as onMounted, xf as withCtx, yf as watch, zd as createSlots } from "./vendor-BVSPIsYM.js";
import { AT as _plugin_vue_export_helper_default, Bv as VIEWS, DT as N8nIcon_default, Do as useInstanceAiSettingsStore, ET as N8nButton_default, FT as useI18n, GC as N8nStatusDot_default, Kv as useSettingsStore, Pw as N8nEmptyState_default, Rw as N8nSelect_default, VC as N8nSwitch_default, Vw as N8nOption_default, _p as useCredentialsStore, aC as useMessage, aw as SettingsRow_default, cw as SettingsLayout_default, fT as N8nLoading_default, gw as PreviewBadge_default, iw as SettingsRowConfigure_default, j as useOpenWorkflowInAssistantStore, ko as useInstanceAiComputerUseExperiment, o as isContextPreferencesEnabled, pT as N8nBadge_default, rw as SettingsRowGroup_default, sw as SettingsPageHeader_default, tw as SettingsSection_default, uT as DropdownMenu_default, vT as N8nText_default, vf as useDocumentTitle, zb as DEFAULT_INSTANCE_AI_PERMISSIONS, zv as useToast } from "./app-Ne537q-x.js";
import { a as useInstanceCredentialTest, t as useInstanceAiConfiguration } from "./useInstanceAiConfiguration-B-Y8hJjJ.js";
import { n as ConnectionDialog_default, t as SandboxSettingsRow_default } from "./SandboxSettingsRow-0SCtxic0.js";
import { t as useSetupPageViewTelemetry } from "./instanceAiSetup.telemetry-DcRQ78Ux.js";
//#region src/experiments/openWorkflowInAssistant/components/DefaultEditorSetting.vue?vue&type=script&setup=true&lang.ts
var DefaultEditorSetting_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultEditorSetting",
	setup(__props) {
		const store = useOpenWorkflowInAssistantStore();
		const i18n = useI18n();
		const toast = useToast();
		const rootEl = ref(null);
		const highlighted = ref(false);
		const selected = computed({
			get: () => store.resolvedDefaultEditor,
			set: (value) => {
				store.saveDefaultEditor(value).catch((error) => {
					toast.showError(error, i18n.baseText("experiments.openWorkflowInAssistant.setting.saveError"));
				});
			}
		});
		onMounted(() => {
			if (!store.consumeSettingHighlight()) return;
			rootEl.value?.scrollIntoView({ block: "center" });
			highlighted.value = true;
			setTimeout(() => highlighted.value = false, 2400);
		});
		return (_ctx, _cache) => {
			return unref(store).isTreatment ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "rootEl",
				ref: rootEl,
				class: normalizeClass({ [_ctx.$style.highlighted]: highlighted.value }),
				"data-test-id": "default-editor-setting"
			}, [createVNode(unref(SettingsSection_default), null, {
				default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [createVNode(unref(SettingsRow_default), {
						title: unref(i18n).baseText("experiments.openWorkflowInAssistant.setting.label"),
						description: unref(i18n).baseText("experiments.openWorkflowInAssistant.setting.description")
					}, {
						action: withCtx(() => [createVNode(unref(N8nSelect_default), {
							modelValue: selected.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
							size: "small",
							"data-test-id": "default-editor-select"
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "assistant",
								label: unref(i18n).baseText("experiments.openWorkflowInAssistant.setting.assistant")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "manual",
								label: unref(i18n).baseText("experiments.openWorkflowInAssistant.setting.manual")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					}, 8, ["title", "description"])]),
					_: 1
				})]),
				_: 1
			})], 2)) : createCommentVNode("", true);
		};
	}
});
var DefaultEditorSetting_vue_vue_type_style_index_0_lang_module_default = {
	highlighted: "_highlighted_mc897_1",
	flash: "_flash_mc897_1"
};
var DefaultEditorSetting_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultEditorSetting_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DefaultEditorSetting_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var DOCS_URL = "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-n8n-assistant";
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const store = useInstanceAiSettingsStore();
		const { isTestingCredential, testSavedCredential } = useInstanceCredentialTest();
		const { modelCredential, modelConfigured: isModelConfigured, sandboxCredentialId, sandboxConfigured: isSandboxConfigured, searchCredential, searchState } = useInstanceAiConfiguration();
		const { isFeatureEnabled: isComputerUseExperimentEnabled } = useInstanceAiComputerUseExperiment();
		const isAdmin = computed(() => store.canManage);
		const isEnabled = computed(() => store.settings?.enabled ?? settingsStore.moduleSettings?.["instance-ai"]?.enabled ?? false);
		const isOff = computed(() => !isEnabled.value);
		const isMcpAccessEnabled = computed(() => store.settings?.mcpAccessEnabled ?? true);
		const isSelfManaged = computed(() => !store.isProxyEnabled && !store.isCloudManaged);
		const showCredentialsRows = computed(() => isAdmin.value && isSelfManaged.value);
		const showSandboxRow = computed(() => isAdmin.value && !store.isCloudManaged);
		const isModelConnectionEnvManaged = computed(() => isSelfManaged.value && (store.settings?.envManaged?.model.provider ?? store.settings?.modelEnvConfigured ?? false));
		const isModelNameEnvManaged = computed(() => isSelfManaged.value && (store.settings?.envManaged?.model.model ?? false));
		const isModelReadOnly = computed(() => isModelConnectionEnvManaged.value && isModelNameEnvManaged.value);
		const isSandboxEnvManaged = computed(() => isSelfManaged.value && (store.settings?.sandboxEnvConfigured ?? false));
		const isSearchEnvManaged = computed(() => isSelfManaged.value && (store.settings?.searchEnvConfigured ?? false));
		const modelValue = computed(() => {
			if (isModelConnectionEnvManaged.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (store.settings?.modelCredentialId) return [modelCredential.value ? credentialTypeLabel(modelCredential.value.type) : "", store.settings.modelName ?? ""].filter(Boolean).join(" · ");
			return i18n.baseText("settings.n8nAgent.modelCredential.env.value");
		});
		const modelDescription = computed(() => {
			if (isModelConnectionEnvManaged.value) return {
				key: "settings.n8nAgent.modelCredential.env.description",
				warning: false
			};
			if (store.settings?.modelCredentialId && store.settings.modelName) return null;
			return {
				key: "settings.n8nAgent.modelCredential.missing.description",
				warning: !isOff.value
			};
		});
		const searchValue = computed(() => {
			if (isSearchEnvManaged.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (searchState.value === "disabled") return i18n.baseText("instanceAi.onboarding.disabled");
			return searchCredential.value ? credentialTypeLabel(searchCredential.value.type) : "";
		});
		const isSetupRequired = computed(() => isEnabled.value && (showCredentialsRows.value && !isModelConfigured.value || showSandboxRow.value && !isSandboxConfigured.value || showCredentialsRows.value && searchState.value === "notset"));
		const neverConfigured = computed(() => {
			if (isEnabled.value) return false;
			if (!isSelfManaged.value || !store.settings) return true;
			return !isModelConfigured.value && !isSandboxConfigured.value && searchState.value === "notset";
		});
		const emptyStateIcon = {
			type: "cards",
			center: "sparkles",
			sides: [
				"workflow",
				"message-square",
				"search",
				"bot"
			]
		};
		const disableMenuItems = [{
			id: "disable",
			label: i18n.baseText("settings.n8nAgent.status.disable"),
			icon: {
				type: "icon",
				value: "power"
			}
		}];
		const PERMISSION_OPTIONS = [
			"require_approval",
			"always_allow",
			"blocked"
		];
		const PREFERENCE_PERMISSION_OPTIONS = ["always_allow", "blocked"];
		const PERMISSION_OPTION_LABEL = {
			require_approval: "settings.n8nAgent.permissions.needsApproval",
			always_allow: "settings.n8nAgent.permissions.alwaysAllow",
			blocked: "settings.n8nAgent.permissions.blocked"
		};
		const PERMISSION_GROUPS = [
			{
				id: "workflows",
				labelKey: "settings.n8nAgent.permissions.group.workflows",
				keys: [
					"createWorkflow",
					"updateWorkflow",
					"runWorkflow",
					"publishWorkflow",
					"deleteWorkflow",
					"restoreWorkflowVersion",
					"tagWorkflow",
					"moveWorkflowToFolder"
				]
			},
			{
				id: "nodes",
				labelKey: "settings.n8nAgent.permissions.group.nodes",
				keys: ["executeNode"]
			},
			{
				id: "folders",
				labelKey: "settings.n8nAgent.permissions.group.folders",
				keys: ["createFolder", "deleteFolder"]
			},
			{
				id: "dataTables",
				labelKey: "settings.n8nAgent.permissions.group.dataTables",
				keys: [
					"createDataTable",
					"mutateDataTableSchema",
					"mutateDataTableRows"
				]
			},
			{
				id: "credentials",
				labelKey: "settings.n8nAgent.permissions.group.credentials",
				keys: ["createCredential", "deleteCredential"]
			},
			{
				id: "system",
				labelKey: "settings.n8nAgent.permissions.group.system",
				keys: ["readFilesystem", "cleanupTestExecutions"]
			},
			{
				id: "web",
				labelKey: "settings.n8nAgent.permissions.group.web",
				keys: ["fetchUrl", "webSearch"]
			},
			{
				id: "mcp",
				labelKey: "settings.n8nAgent.permissions.group.mcp",
				descriptionKey: "settings.n8nAgent.permissions.group.mcpDescription",
				keys: ["mcpRead", "mcpWrite"]
			}
		];
		const PREFERENCES_PERMISSION_GROUP = {
			id: "preferences",
			labelKey: "settings.n8nAgent.permissions.group.preferences",
			keys: ["createPreference"]
		};
		const permissionGroups = computed(() => isContextPreferencesEnabled() ? [...PERMISSION_GROUPS, PREFERENCES_PERMISSION_GROUP] : PERMISSION_GROUPS);
		const expandedGroups = reactive({});
		function isGroupLocked(group) {
			return isOff.value || group.id === "mcp" && !isMcpAccessEnabled.value;
		}
		function groupSummary(group) {
			if (group.id === "mcp" && !isMcpAccessEnabled.value) return i18n.baseText("settings.n8nAgent.permissions.group.mcpDisabled");
			const exceptions = group.keys.filter((key) => store.getPermission(key) !== DEFAULT_INSTANCE_AI_PERMISSIONS[key]).length;
			if (exceptions === 0) return i18n.baseText("settings.n8nAgent.permissions.group.default");
			if (exceptions === 1) return i18n.baseText("settings.n8nAgent.permissions.group.exception");
			return i18n.baseText("settings.n8nAgent.permissions.group.exceptions", { interpolate: { count: exceptions } });
		}
		function permissionOptionsFor(key) {
			if (key === "createPreference") return PREFERENCE_PERMISSION_OPTIONS;
			return PERMISSION_OPTIONS;
		}
		/** Exactly one dialog can be active; transitions between steps never observe an all-closed state. */
		const activeDialog = ref(null);
		const setupChain = ref(false);
		const enableAfterSetup = ref(false);
		watch(activeDialog, (dialog) => {
			if (dialog !== null) return;
			setupChain.value = false;
			enableAfterSetup.value = false;
		});
		function setDialogOpen(kind, isOpen) {
			if (isOpen) activeDialog.value = kind;
			else if (activeDialog.value === kind) activeDialog.value = null;
		}
		function openModelDialog() {
			if (isModelReadOnly.value) return;
			setupChain.value = false;
			activeDialog.value = "model";
		}
		function openModelSetup() {
			setupChain.value = !isSandboxConfigured.value && !isSandboxEnvManaged.value || searchState.value === "notset";
			activeDialog.value = "model";
		}
		function openSandboxDialog() {
			if (isSandboxEnvManaged.value) return;
			setupChain.value = false;
			activeDialog.value = "sandbox";
		}
		function openSearchDialog() {
			if (isSearchEnvManaged.value) return;
			setupChain.value = false;
			activeDialog.value = "search";
		}
		function openSearchSetup() {
			activeDialog.value = "search";
		}
		/** Returns whether the chain may continue (false only when enabling failed). */
		async function finishSetup() {
			setupChain.value = false;
			if (!enableAfterSetup.value) {
				activeDialog.value = null;
				return true;
			}
			enableAfterSetup.value = false;
			const enabled = await store.persistEnabled(true);
			if (enabled) activeDialog.value = null;
			return enabled;
		}
		async function handleModelSaved() {
			if ((setupChain.value || enableAfterSetup.value) && !await enableEnvironmentSandboxIfNeeded()) return;
			if (setupChain.value) {
				if (isSandboxConfigured.value || isSandboxEnvManaged.value) openSearchSetup();
				else activeDialog.value = "sandbox";
				return;
			}
			await finishSetup();
		}
		async function handleSandboxSaved() {
			if (setupChain.value && searchState.value === "notset") {
				openSearchSetup();
				return;
			}
			await finishSetup();
		}
		async function handleSearchSaved() {
			await finishSetup();
		}
		function credentialTypeLabel(type) {
			return credentialsStore.getCredentialTypeByName(type)?.displayName ?? type;
		}
		async function enableEnvironmentSandboxIfNeeded() {
			if (!isSandboxEnvManaged.value || isSandboxConfigured.value) return true;
			store.setField("sandboxEnabled", true);
			return await store.save();
		}
		useSetupPageViewTelemetry("settings");
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.n8nAgent"));
			store.fetch();
			credentialsStore.fetchCredentialTypes(false);
		});
		async function handleEnable() {
			if (!showCredentialsRows.value && (!showSandboxRow.value || isSandboxConfigured.value)) {
				await store.persistEnabled(true);
				return;
			}
			enableAfterSetup.value = true;
			if (showCredentialsRows.value && !isModelConfigured.value) {
				openModelSetup();
				return;
			}
			const modelCredentialId = store.settings?.modelCredentialId;
			if (showCredentialsRows.value && modelCredentialId && store.canManageInstanceCredentials && (!modelCredential.value || !await testSavedCredential(modelCredentialId, modelCredential.value.name, modelCredential.value.type))) {
				openModelSetup();
				return;
			}
			if (!await enableEnvironmentSandboxIfNeeded()) return;
			if (showSandboxRow.value && !isSandboxConfigured.value && !isSandboxEnvManaged.value) {
				openSandboxDialog();
				return;
			}
			if (showSandboxRow.value && sandboxCredentialId.value && store.canManageInstanceCredentials) {
				const isDaytona = store.settings?.sandboxProvider === "daytona";
				if (!await testSavedCredential(sandboxCredentialId.value, "n8n Assistant sandbox", isDaytona ? "daytonaApi" : "httpHeaderAuth")) {
					openSandboxDialog();
					return;
				}
			}
			if (showCredentialsRows.value && searchState.value === "notset") {
				setupChain.value = true;
				openSearchSetup();
				return;
			}
			await finishSetup();
		}
		async function handleStatusAction(action) {
			if (action !== "disable") return;
			if (await message.confirm(i18n.baseText("settings.n8nAgent.status.disable.description"), {
				title: i18n.baseText("settings.n8nAgent.status.disable.title"),
				confirmButtonText: i18n.baseText("settings.n8nAgent.status.disable"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) === "confirm") await store.persistEnabled(false);
		}
		function handleComputerUseToggle(value) {
			store.setField("localGatewayDisabled", !value);
			store.save();
		}
		function handleBrowserUseToggle(value) {
			store.setField("browserUseEnabled", value);
			store.save();
		}
		function handleMcpAccessToggle(value) {
			store.setField("mcpAccessEnabled", value);
			store.save();
		}
		function handlePermissionChange(key, value) {
			store.setPermission(key, value);
			store.save();
		}
		function openAiUsageSettings() {
			router.push({ name: VIEWS.AI_SETTINGS });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { "data-test-id": "n8n-agent-settings" }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.n8nAgent"),
						description: unref(i18n).baseText("settings.n8nAgent.description"),
						"docs-url": DOCS_URL,
						"docs-label": unref(i18n).baseText("settings.n8nAgent.docsLabel")
					}, {
						titleTrailing: withCtx(() => [createVNode(unref(PreviewBadge_default), { size: "medium" })]),
						_: 1
					}, 8, [
						"title",
						"description",
						"docs-label"
					]),
					unref(store).isLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						rows: 3,
						"shrink-last": false
					})) : neverConfigured.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 1,
						icon: emptyStateIcon,
						heading: unref(i18n).baseText("settings.n8nAgent.empty.title"),
						description: unref(i18n).baseText("settings.n8nAgent.empty.description"),
						"button-text": isAdmin.value ? unref(i18n).baseText("settings.n8nAgent.empty.enable") : void 0,
						"button-disabled": unref(store).isSaving || unref(isTestingCredential),
						"button-variant": "solid",
						"onClick:button": handleEnable
					}, createSlots({ _: 2 }, [isAdmin.value ? {
						name: "additionalContent",
						fn: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.empty.footnote")), 1)]),
							_: 1
						})]),
						key: "0"
					} : void 0]), 1032, [
						"heading",
						"description",
						"button-text",
						"button-disabled"
					])) : isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						createVNode(unref(SettingsSection_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.n8nAgent.enable.label"),
										description: unref(i18n).baseText("settings.n8nAgent.enable.description")
									}, {
										action: withCtx(() => [isOff.value ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.status.enable"),
											disabled: unref(store).isSaving || unref(isTestingCredential),
											"data-test-id": "n8n-agent-enable-button",
											onClick: handleEnable
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(DropdownMenu_default), {
											key: 1,
											items: disableMenuItems,
											placement: "bottom-end",
											"data-test-id": "n8n-agent-status-menu",
											onSelect: handleStatusAction
										}, {
											trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
												variant: "outline",
												size: "medium",
												disabled: unref(store).isSaving,
												"aria-label": unref(i18n).baseText("settings.n8nAgent.status.manage")
											}, {
												default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusLabel) }, [
													createVNode(unref(N8nStatusDot_default), {
														variant: isSetupRequired.value ? "warning" : "success",
														pulse: !isSetupRequired.value,
														"data-test-id": "n8n-agent-status-dot"
													}, null, 8, ["variant", "pulse"]),
													createTextVNode(" " + toDisplayString(isSetupRequired.value ? unref(i18n).baseText("settings.n8nAgent.status.setupRequired") : unref(i18n).baseText("settings.n8nAgent.status.enabled")) + " ", 1),
													createVNode(unref(N8nIcon_default), {
														icon: "chevron-down",
														size: "small"
													})
												], 2)]),
												_: 1
											}, 8, ["disabled", "aria-label"])]),
											"item-leading": withCtx(({ item }) => [item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												class: normalizeClass(_ctx.$style.danger),
												icon: item.icon.value,
												size: "small"
											}, null, 8, ["class", "icon"])) : createCommentVNode("", true)]),
											"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(item.label), 3)]),
											_: 1
										}))]),
										_: 1
									}, 8, ["title", "description"]),
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && unref(isModelConfigured) && !isModelReadOnly.value,
										"data-test-id": "n8n-agent-model-row",
										onClick: openModelDialog
									}, createSlots({
										info: withCtx(() => [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.modelCredential.label")), 1)]),
											_: 1
										}), modelDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 0,
											size: "small",
											color: modelDescription.value.warning ? "warning" : "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(modelDescription.value.key)), 1)]),
											_: 1
										}, 8, ["color"])) : createCommentVNode("", true)]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [!unref(isModelConfigured) ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.modelCredential.add"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-model-add",
											onClick: openModelSetup
										}, null, 8, ["label", "disabled"])) : isModelReadOnly.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 1,
											size: "small",
											color: "text-light",
											"data-test-id": "n8n-agent-model-env-value"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(modelValue.value), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 2,
											value: modelValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									showSandboxRow.value ? (openBlock(), createBlock(SandboxSettingsRow_default, {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										disabled: isOff.value,
										onConfigure: openSandboxDialog,
										onEnable: enableEnvironmentSandboxIfNeeded
									}, null, 8, ["class", "disabled"])) : createCommentVNode("", true)
								]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(DefaultEditorSetting_default),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.capabilities.title"),
							description: unref(i18n).baseText("settings.n8nAgent.capabilities.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && unref(searchState) !== "notset" && !isSearchEnvManaged.value,
										"data-test-id": "n8n-agent-search-row",
										onClick: openSearchDialog
									}, createSlots({
										info: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleWithTag) }, [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.label")), 1)]),
											_: 1
										}), createVNode(unref(N8nBadge_default), {
											variant: "success",
											size: "xsmall"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.recommended")), 1)]),
											_: 1
										})], 2), createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(searchState) === "env" ? unref(i18n).baseText("settings.n8nAgent.search.env.description") : unref(i18n).baseText("settings.n8nAgent.search.description")), 1)]),
											_: 1
										})]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [unref(searchState) === "notset" ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "outline",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.search.setup"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-search-setup",
											onClick: openSearchDialog
										}, null, 8, ["label", "disabled"])) : isSearchEnvManaged.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 1,
											size: "small",
											color: "text-light",
											"data-test-id": "n8n-agent-search-env-value"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(searchValue.value), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 2,
											value: searchValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									unref(isComputerUseExperimentEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.computerUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": !(unref(store).settings?.localGatewayDisabled ?? false),
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
											"data-test-id": "n8n-agent-computer-use-toggle",
											"onUpdate:modelValue": handleComputerUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])) : createCommentVNode("", true),
									createVNode(unref(SettingsRow_default), {
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.browserUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": unref(store).settings?.browserUseEnabled ?? true,
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
											"data-test-id": "n8n-agent-browser-use-toggle",
											"onUpdate:modelValue": handleBrowserUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.mcp.title"),
							description: unref(i18n).baseText("settings.n8nAgent.mcp.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
									description: unref(i18n).baseText("settings.n8nAgent.mcpAccess.description")
								}, {
									action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
										"model-value": isMcpAccessEnabled.value,
										disabled: unref(store).isSaving || isOff.value,
										"aria-label": unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
										"data-test-id": "n8n-agent-mcp-access-toggle",
										"onUpdate:modelValue": handleMcpAccessToggle
									}, null, 8, [
										"model-value",
										"disabled",
										"aria-label"
									])]),
									_: 1
								}, 8, [
									"class",
									"title",
									"description"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.permissions.title"),
							description: unref(i18n).baseText("settings.n8nAgent.permissions.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionGroups.value, (group) => {
									return openBlock(), createBlock(unref(SettingsRow_default), {
										key: group.id,
										modelValue: expandedGroups[group.id],
										"onUpdate:modelValue": ($event) => expandedGroups[group.id] = $event,
										class: normalizeClass({ [_ctx.$style.dim]: isGroupLocked(group) }),
										title: unref(i18n).baseText(group.labelKey),
										expandable: !isGroupLocked(group),
										"expand-label": groupSummary(group),
										"collapse-label": groupSummary(group),
										"data-test-id": `n8n-agent-permission-group-${group.id}`
									}, createSlots({
										expanded: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionList) }, [group.descriptionKey ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 0,
											class: normalizeClass(_ctx.$style.permissionDescription),
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(group.descriptionKey)), 1)]),
											_: 2
										}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.keys, (key) => {
											return openBlock(), createElementBlock("div", {
												key,
												class: normalizeClass(_ctx.$style.permissionRow)
											}, [createVNode(unref(N8nText_default), {
												size: "small",
												color: "text-dark"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.n8nAgent.permissions.${key}`)), 1)]),
												_: 2
											}, 1024), createVNode(unref(N8nSelect_default), {
												class: normalizeClass(_ctx.$style.permissionSelect),
												"model-value": unref(store).getPermission(key),
												size: "small",
												disabled: unref(store).isSaving || isGroupLocked(group),
												"data-test-id": `n8n-agent-permission-${key}`,
												"onUpdate:modelValue": ($event) => handlePermissionChange(key, $event)
											}, {
												default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionOptionsFor(key), (option) => {
													return openBlock(), createBlock(unref(N8nOption_default), {
														key: option,
														value: option,
														label: unref(i18n).baseText(PERMISSION_OPTION_LABEL[option])
													}, null, 8, ["value", "label"]);
												}), 128))]),
												_: 2
											}, 1032, [
												"class",
												"model-value",
												"disabled",
												"data-test-id",
												"onUpdate:modelValue"
											])], 2);
										}), 128))], 2)]),
										_: 2
									}, [isGroupLocked(group) ? {
										name: "action",
										fn: withCtx(() => [createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(groupSummary(group)), 1)]),
											_: 2
										}, 1024)]),
										key: "0"
									} : void 0]), 1032, [
										"modelValue",
										"onUpdate:modelValue",
										"class",
										"title",
										"expandable",
										"expand-label",
										"collapse-label",
										"data-test-id"
									]);
								}), 128))]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.dataSharing.title"),
							description: unref(i18n).baseText("settings.n8nAgent.dataSharing.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.label"),
									description: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.description"),
									clickable: !isOff.value && unref(store).canManageAiUsage,
									"data-test-id": "n8n-agent-data-sharing-row",
									onClick: openAiUsageSettings
								}, createSlots({ _: 2 }, [!isOff.value && unref(store).canManageAiUsage ? {
									name: "action",
									fn: withCtx(() => [createVNode(unref(SettingsRowConfigure_default))]),
									key: "0"
								} : void 0]), 1032, [
									"class",
									"title",
									"description",
									"clickable"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : createCommentVNode("", true),
					!isAdmin.value && !unref(store).isLoading && !neverConfigured.value ? (openBlock(), createBlock(DefaultEditorSetting_default, { key: 3 })) : createCommentVNode("", true),
					showCredentialsRows.value && !isModelReadOnly.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 4,
						kind: "model",
						open: activeDialog.value === "model",
						setup: setupChain.value,
						"onUpdate:open": _cache[0] || (_cache[0] = ($event) => setDialogOpen("model", $event)),
						onSaved: handleModelSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showSandboxRow.value && !isSandboxEnvManaged.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 5,
						kind: "sandbox",
						open: activeDialog.value === "sandbox",
						setup: showCredentialsRows.value && setupChain.value,
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => setDialogOpen("sandbox", $event)),
						onSaved: handleSandboxSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showCredentialsRows.value && !isSearchEnvManaged.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 6,
						kind: "search",
						open: activeDialog.value === "search",
						setup: setupChain.value,
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => setDialogOpen("search", $event)),
						onSaved: handleSearchSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true)
				]),
				_: 1
			});
		};
	}
});
var SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	statusLabel: "_statusLabel_18c0l_1",
	danger: "_danger_18c0l_7",
	titleWithTag: "_titleWithTag_18c0l_11",
	dim: "_dim_18c0l_17",
	permissionList: "_permissionList_18c0l_22",
	permissionDescription: "_permissionDescription_18c0l_29",
	permissionRow: "_permissionRow_18c0l_33",
	permissionSelect: "_permissionSelect_18c0l_40"
};
var SettingsInstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceAiView_default as default };

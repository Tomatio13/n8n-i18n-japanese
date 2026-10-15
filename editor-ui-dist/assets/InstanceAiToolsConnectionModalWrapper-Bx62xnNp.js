import { Ad as Fragment, Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, Zd as mergeProps, af as openBlock, bf as withCtx, cp as normalizeProps, df as resolveDynamicComponent, ef as onBeforeUnmount, fp as toDisplayString, of as provide, sf as renderList, sp as normalizeClass, vf as watch } from "./vendor-LwB6jUFW.js";
import { $S as SettingsRowButton_default, $x as useMessage, AC as N8nSelect_default, Dw as useI18n, Ew as i18n, Fp as useUIStore, J_ as useToast, NC as N8nOption_default, Sw as _plugin_vue_export_helper_default, UC as N8nCallout_default, Uy as DEFAULT_INSTANCE_AI_PERMISSIONS, cm as CREDENTIAL_EDIT_MODAL_KEY, eo as useInstanceAiSettingsStore, mf as useCredentialsStore, nw as DropdownMenu_default, sS as DialogFooter_default, so as BROWSER_USE_CONNECTION_TYPE, uo as COMPUTER_USE_CONNECTION_TYPE, uw as N8nText_default, vw as N8nButton_default, yw as N8nIcon_default } from "./app-Ddu-psGf.js";
import { i as TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY } from "./ToolIcon-4UxYWYOC.js";
import { n as DefaultDetailBody_default, t as ToolsConnectionModal_default } from "./ToolsConnectionModal-DeFwVHfe.js";
import { t as McpRegistrySuggestionFooter_default } from "./McpRegistrySuggestionFooter-Bs8EMxuK.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-DbFsEwfJ.js";
import { n as useMcpServerConnect, r as useInstanceAiMcpTelemetry, t as iconForTool } from "./toolIcons-CSIYimbo.js";
import { t as useInstanceAiComputerUseTelemetry } from "./instanceAiComputerUse.telemetry-CBlvz79U.js";
import { i as useInstanceAiBrowserUseTelemetry } from "./useExtensionDirectConnect-5EyHVRcG.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-DiZ5Gf8R.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-BhsDB-g8.js";
//#region src/features/shared/toolsConnection/McpDetailBody.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["href"];
var _hoisted_2$1 = { key: 1 };
var _hoisted_3 = {
	key: 1,
	"aria-hidden": "true"
};
var McpDetailBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpDetailBody",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const hasMetadata = computed(() => Boolean(props.item.publisher) || Boolean(props.item.version));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.identity) }, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.serverName),
				tag: "h3"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.item.isOfficial ? "tools.connection.detail.officialServer" : "tools.connection.detail.server", { interpolate: { service: __props.item.title } })), 1)]),
				_: 1
			}, 8, ["class"]), hasMetadata.value ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.metadata),
				"data-test-id": "tools-connection-detail-metadata"
			}, [
				__props.item.publisher ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.publisher)
				}, [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.publishedBy")) + " ", 1), __props.item.publisher.url ? (openBlock(), createElementBlock("a", {
					key: 0,
					href: __props.item.publisher.url,
					target: "_blank",
					rel: "noopener noreferrer",
					class: normalizeClass(_ctx.$style.metadataLink)
				}, toDisplayString(__props.item.publisher.name), 11, _hoisted_1$1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(__props.item.publisher.name), 1))], 2)) : createCommentVNode("", true),
				__props.item.publisher && __props.item.version ? (openBlock(), createElementBlock("span", _hoisted_3, "\xA0·\xA0")) : createCommentVNode("", true),
				__props.item.version ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass(_ctx.$style.version)
				}, toDisplayString(unref(i18n).baseText("tools.connection.detail.versionValue", { interpolate: { version: __props.item.version } })), 3)) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true)], 2), __props.item.longDescription ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.description),
				"data-test-id": "tools-connection-detail-description"
			}, toDisplayString(__props.item.longDescription), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
var McpDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_eqtqb_1",
	identity: "_identity_eqtqb_7",
	serverName: "_serverName_eqtqb_14",
	metadata: "_metadata_eqtqb_22",
	publisher: "_publisher_eqtqb_33",
	version: "_version_eqtqb_39",
	metadataLink: "_metadataLink_eqtqb_43",
	description: "_description_eqtqb_52"
};
var McpDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/PermissionDropdown.vue
var PermissionDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "PermissionDropdown",
	props: {
		modelValue: {},
		custom: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		dataTestId: { default: void 0 }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const open = ref(false);
		const permissions = [
			"always_allow",
			"require_approval",
			"blocked"
		];
		const labels = computed(() => ({
			always_allow: i18n.baseText("tools.connection.permissions.alwaysAllow"),
			require_approval: i18n.baseText("tools.connection.permissions.requireApproval"),
			blocked: i18n.baseText("tools.connection.permissions.blocked")
		}));
		const selectedLabel = computed(() => props.custom ? i18n.baseText("tools.connection.permissions.custom") : labels.value[props.modelValue]);
		const items = computed(() => permissions.map((id) => ({
			id,
			label: labels.value[id],
			checked: !props.custom && id === props.modelValue
		})));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				modelValue: open.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => open.value = $event),
				items: items.value,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				placement: "bottom-end",
				onSelect: _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", $event))
			}, {
				trigger: withCtx(() => [createVNode(unref(SettingsRowButton_default), {
					disabled: __props.disabled,
					expanded: open.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(selectedLabel.value), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["disabled", "expanded"])]),
				_: 1
			}, 8, [
				"modelValue",
				"items",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/McpToolSettingsContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-disabled"];
var _hoisted_2 = ["data-test-id"];
var McpToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpToolSettingsContent",
	props: {
		item: {},
		actor: { default: "assistant" }
	},
	emits: [
		"save",
		"disconnect",
		"cancel",
		"reconnect",
		"retry"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const message = useMessage();
		const isConnectionUnhealthy = computed(() => props.item.status === "disconnected");
		const arePermissionsDisabled = computed(() => props.item.status !== "connected");
		const failureMessageKey = computed(() => {
			switch (props.item.connectionFailureReason) {
				case "authentication": return "tools.connection.failure.authentication";
				case "server_unavailable": return "tools.connection.failure.serverUnavailable";
				default: return "tools.connection.failure.unknown";
			}
		});
		const recoveryActionKey = computed(() => props.item.connectionFailureReason === "authentication" ? "tools.connection.action.reconnect" : "generic.retry");
		const writeConfirmationDescriptionKey = computed(() => props.actor === "agent" ? "tools.connection.permissions.write.confirm.description.agent" : "tools.connection.permissions.write.confirm.description.assistant");
		const initialSettings = () => props.item.settings ?? { categories: {
			read: DEFAULT_INSTANCE_AI_PERMISSIONS.mcpRead,
			write: DEFAULT_INSTANCE_AI_PERMISSIONS.mcpWrite
		} };
		const categories = ref({ ...initialSettings().categories });
		const toolPermissions = ref({ ...initialSettings().tools });
		const expandedCategory = ref(null);
		const hasSavedBefore = ref(false);
		watch(() => props.item.id, () => {
			hasSavedBefore.value = false;
			const next = initialSettings();
			categories.value = { ...next.categories };
			toolPermissions.value = { ...next.tools };
			expandedCategory.value = null;
		});
		watch(() => props.item.status, (status) => {
			if (status !== "connected") expandedCategory.value = null;
		});
		const permissionOptions = [
			{
				value: "always_allow",
				label: i18n.baseText("tools.connection.permissions.alwaysAllow")
			},
			{
				value: "require_approval",
				label: i18n.baseText("tools.connection.permissions.requireApproval")
			},
			{
				value: "blocked",
				label: i18n.baseText("tools.connection.permissions.blocked")
			}
		];
		const categoryContent = {
			read: {
				title: "tools.connection.permissions.read.title",
				description: "tools.connection.permissions.read.description"
			},
			write: {
				title: "tools.connection.permissions.write.title",
				description: "tools.connection.permissions.write.description"
			}
		};
		const groups = computed(() => ["read", "write"].map((category) => ({
			category,
			title: i18n.baseText(categoryContent[category].title),
			description: i18n.baseText(categoryContent[category].description),
			tools: props.item.availableTools.filter((tool) => (tool.category ?? "write") === category)
		})));
		async function updateCategory(category, permission) {
			if (category === "write" && permission === "always_allow" && categories.value.write !== "always_allow") {
				const writeToolCount = props.item.availableTools.filter((tool) => (tool.category ?? "write") === "write").length;
				if (await message.confirm(i18n.baseText(writeConfirmationDescriptionKey.value, { interpolate: {
					server: props.item.title,
					count: writeToolCount
				} }), {
					title: i18n.baseText("tools.connection.permissions.write.confirm.title"),
					confirmButtonText: i18n.baseText("tools.connection.permissions.write.confirm.keepAsk"),
					cancelButtonText: i18n.baseText("tools.connection.permissions.write.confirm.allow")
				}) !== "cancel") return;
			}
			categories.value[category] = permission;
			const next = { ...toolPermissions.value };
			for (const tool of props.item.availableTools) if ((tool.category ?? "write") === category) delete next[tool.id];
			toolPermissions.value = next;
		}
		function updateTool(toolId, category, permission) {
			const next = { ...toolPermissions.value };
			if (permission === categories.value[category]) delete next[toolId];
			else next[toolId] = permission;
			toolPermissions.value = next;
		}
		function isPermission(value) {
			return value === "always_allow" || value === "require_approval" || value === "blocked";
		}
		function onToolChange(toolId, category, value) {
			if (isPermission(value)) updateTool(toolId, category, value);
		}
		function hasCategoryOverrides(category) {
			return props.item.availableTools.some((tool) => (tool.category ?? "write") === category && toolPermissions.value[tool.id] !== void 0);
		}
		const hasChanges = computed(() => {
			if (!hasSavedBefore.value) return true;
			return JSON.stringify({
				categories: categories.value,
				tools: toolPermissions.value
			}) !== JSON.stringify({
				categories: initialSettings().categories,
				tools: initialSettings().tools ?? {}
			});
		});
		function handleSave() {
			if (!hasChanges.value) return;
			hasSavedBefore.value = true;
			emit("save", {
				categories: { ...categories.value },
				...Object.keys(toolPermissions.value).length > 0 ? { tools: { ...toolPermissions.value } } : {}
			});
		}
		function handleRecovery() {
			if (props.item.connectionFailureReason === "authentication") emit("reconnect");
			else emit("retry");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
				createVNode(McpDetailBody_default, { item: __props.item }, null, 8, ["item"]),
				isConnectionUnhealthy.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.failureCallout),
					theme: "danger",
					"data-test-id": "tools-connection-failure"
				}, {
					actions: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"data-test-id": "tools-connection-recovery",
						onClick: handleRecovery
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(recoveryActionKey.value)), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(failureMessageKey.value)) + " ", 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissions) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.fieldLabel),
					tag: "h3",
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.permissions.title")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.permissionGroups, { [_ctx.$style.permissionGroupsDisabled]: arePermissionsDisabled.value }]),
					"data-disabled": arePermissionsDisabled.value || void 0
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
					return openBlock(), createElementBlock("div", {
						key: group.category,
						class: normalizeClass(_ctx.$style.permissionGroup)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupHeader) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupSummary) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupTitle) }, [createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.groupTitleText) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(group.title), 1)]),
							_: 2
						}, 1032, ["class"]), createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.countBadge),
							"data-test-id": `tools-connection-count-${group.category}`
						}, [createVNode(unref(N8nText_default), {
							size: "xsmall",
							bold: "",
							compact: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(arePermissionsDisabled.value ? "—" : group.tools.length), 1)]),
							_: 2
						}, 1024)], 10, _hoisted_2)], 2), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group.description), 1)]),
							_: 2
						}, 1024)], 2),
						createVNode(PermissionDropdown_default, {
							class: normalizeClass(_ctx.$style.permissionSelect),
							"model-value": categories.value[group.category],
							custom: hasCategoryOverrides(group.category),
							disabled: arePermissionsDisabled.value,
							"data-test-id": `tools-connection-permission-${group.category}`,
							"onUpdate:modelValue": ($event) => updateCategory(group.category, $event)
						}, null, 8, [
							"class",
							"model-value",
							"custom",
							"disabled",
							"data-test-id",
							"onUpdate:modelValue"
						]),
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							"icon-only": "",
							disabled: arePermissionsDisabled.value,
							"aria-label": group.title,
							"aria-expanded": expandedCategory.value === group.category,
							onClick: ($event) => expandedCategory.value = expandedCategory.value === group.category ? null : group.category
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: expandedCategory.value === group.category ? "chevron-up" : "chevron-down",
								size: 16
							}, null, 8, ["icon"])]),
							_: 2
						}, 1032, [
							"disabled",
							"aria-label",
							"aria-expanded",
							"onClick"
						])
					], 2), expandedCategory.value === group.category ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.toolList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.tools, (tool) => {
						return openBlock(), createElementBlock("div", {
							key: tool.id,
							class: normalizeClass(_ctx.$style.toolRow)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolSummary) }, [createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(tool.name), 1)]),
							_: 2
						}, 1024), tool.description ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.toolDescription),
							title: tool.description,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(tool.description), 1)]),
							_: 2
						}, 1032, ["class", "title"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nSelect_default), {
							class: normalizeClass(_ctx.$style.permissionSelect),
							"model-value": toolPermissions.value[tool.id] ?? categories.value[group.category],
							size: "small",
							disabled: arePermissionsDisabled.value,
							"onUpdate:modelValue": ($event) => onToolChange(tool.id, group.category, $event)
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(permissionOptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, null, 8, ["value", "label"]);
							}), 64))]),
							_: 1
						}, 8, [
							"class",
							"model-value",
							"disabled",
							"onUpdate:modelValue"
						])], 2);
					}), 128))], 2)) : createCommentVNode("", true)], 2);
				}), 128))], 10, _hoisted_1)], 2)
			], 2), createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.footer) }, {
				default: withCtx(() => [
					createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.removeButton),
						variant: "outline",
						size: "small",
						"data-test-id": "tools-connection-settings-remove",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("disconnect"))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "trash-2",
							size: 14,
							class: normalizeClass(_ctx.$style.footerIcon)
						}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.settings.remove")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						label: unref(i18n).baseText("generic.cancel"),
						"data-test-id": "tools-connection-settings-cancel",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("cancel"))
					}, null, 8, ["label"]),
					createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "small",
						label: unref(i18n).baseText("generic.save"),
						disabled: !hasChanges.value || arePermissionsDisabled.value,
						"data-test-id": "tools-connection-settings-save",
						onClick: handleSave
					}, null, 8, ["label", "disabled"])
				]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var McpToolSettingsContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1xdf9_1",
	body: "_body_1xdf9_9",
	failureCallout: "_failureCallout_1xdf9_18",
	permissions: "_permissions_1xdf9_22",
	fieldLabel: "_fieldLabel_1xdf9_29",
	permissionGroups: "_permissionGroups_1xdf9_33",
	permissionGroupsDisabled: "_permissionGroupsDisabled_1xdf9_39",
	permissionGroup: "_permissionGroup_1xdf9_33",
	groupHeader: "_groupHeader_1xdf9_51",
	groupSummary: "_groupSummary_1xdf9_59",
	toolSummary: "_toolSummary_1xdf9_60",
	groupTitle: "_groupTitle_1xdf9_72",
	groupTitleText: "_groupTitleText_1xdf9_78",
	countBadge: "_countBadge_1xdf9_82",
	toolList: "_toolList_1xdf9_95",
	toolRow: "_toolRow_1xdf9_103",
	toolDescription: "_toolDescription_1xdf9_110",
	permissionSelect: "_permissionSelect_1xdf9_118",
	footer: "_footer_1xdf9_123",
	removeButton: "_removeButton_1xdf9_129",
	footerIcon: "_footerIcon_1xdf9_133"
};
var McpToolSettingsContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpToolSettingsContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpToolSettingsContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/modals/InstanceAiToolsConnectionModalWrapper.vue
var InstanceAiToolsConnectionModalWrapper_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "InstanceAiToolsConnectionModalWrapper",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const mcpStore = useInstanceAiMcpStore();
		const mcpTelemetry = useInstanceAiMcpTelemetry();
		const browserUseTelemetry = useInstanceAiBrowserUseTelemetry();
		const computerUseTelemetry = useInstanceAiComputerUseTelemetry();
		const settingsStore = useInstanceAiSettingsStore();
		const toast = useToast();
		const message = useMessage();
		const isComputerUseEnabled = computed(() => settingsStore.isComputerUseAvailable);
		const isBrowserUseEnabled = computed(() => settingsStore.isBrowserUseAvailable);
		function readConnectionIdPayload(data) {
			if (data === null || typeof data !== "object") return null;
			const value = data.connectionId;
			return typeof value === "string" ? value : null;
		}
		const modalState = computed(() => uiStore.modalsById[props.modalName] ?? null);
		const isCredentialModalOpen = computed(() => uiStore.modalsById[CREDENTIAL_EDIT_MODAL_KEY]?.open === true);
		const isOpen = computed({
			get: () => !isCredentialModalOpen.value,
			set: (value) => {
				if (!value) uiStore.closeModal(props.modalName);
			}
		});
		const activeItemId = ref(readConnectionIdPayload(modalState.value?.data));
		const isDirectConnectionOpen = computed(() => !!readConnectionIdPayload(modalState.value?.data));
		const detailItem = computed(() => {
			if (!activeItemId.value) return null;
			const item = items.value.find((candidate) => candidate.id === activeItemId.value) ?? null;
			return item?.kind === "mcp-server" && item.status === "none" ? null : item;
		});
		const detailMode = computed(() => detailItem.value?.kind === "mcp-server" ? "settings" : "detail");
		const { connectServer, connectWithCredential, createCredentialAdapter, ignorePendingConnectResult, isConnectLocked } = useMcpServerConnect();
		/** Reveals the settings view of the server the user just connected */
		function showConnectedServer(connectionId) {
			if (connectionId) activeItemId.value = connectionId;
		}
		if (settingsStore.isMcpAvailable) {
			mcpStore.fetchCatalogLazy();
			mcpStore.fetchConnectionsLazy();
			credentialsStore.fetchAllCredentials();
		}
		onBeforeUnmount(() => {
			const state = uiStore.modalsById[props.modalName];
			if (state?.data && Object.keys(state.data).length > 0) uiStore.setModalData({
				name: props.modalName,
				data: {}
			});
		});
		function toMcpServerTool(tool) {
			const out = {
				id: tool.name,
				name: tool.name,
				category: tool.category
			};
			if (tool.description) out.description = tool.description;
			return out;
		}
		function settingsForConnection(connection) {
			return connection.toolPermissions;
		}
		function availableToolsForConnection(connection) {
			return (connection ? mcpStore.connectionToolsById.get(connection.id) : void 0)?.map(toMcpServerTool) ?? [];
		}
		function buildItem(server, connection) {
			return {
				id: connection?.id ?? server.slug,
				kind: "mcp-server",
				category: "mcp",
				title: server.title,
				description: server.tagline,
				longDescription: server.description,
				status: isConnectLocked(server.slug) ? "connecting" : connection?.status ?? "none",
				connectionFailureReason: connection?.failureReason,
				iconSource: iconForTool(server.icons, uiStore.appliedTheme),
				credentials: server.credentials.map(({ credentialType, name }) => ({
					authType: credentialType,
					displayName: name,
					credentialId: connection?.credentialType === credentialType ? connection.credentialId : void 0,
					required: true
				})),
				availableTools: availableToolsForConnection(connection),
				isOfficial: server.isOfficial,
				...connection ? { settings: settingsForConnection(connection) } : {},
				publisher: server.isOfficial || server.websiteUrl ? {
					name: server.title,
					url: server.websiteUrl
				} : void 0,
				version: server.version,
				docsUrl: server.websiteUrl
			};
		}
		const builtInServiceDefinitions = computed(() => {
			return [{
				id: BROWSER_USE_CONNECTION_TYPE,
				titleKey: "instanceAi.connections.add.browserUse",
				descriptionKey: "instanceAi.connections.types.browserUse.description",
				iconSource: {
					type: "icon",
					name: "globe"
				},
				detailComponent: BrowserUseSetupContent_default,
				detailProps: { embedded: true },
				isAvailable: isBrowserUseEnabled.value,
				isConnected: settingsStore.isBrowserUseConnected
			}, {
				id: COMPUTER_USE_CONNECTION_TYPE,
				titleKey: "instanceAi.connections.add.computerUse",
				descriptionKey: "instanceAi.connections.types.computerUse.description",
				iconSource: {
					type: "icon",
					name: "mouse-pointer"
				},
				detailComponent: ComputerUseSetupContent_default,
				detailProps: { embedded: true },
				isAvailable: isComputerUseEnabled.value,
				isConnected: settingsStore.isGatewayConnected
			}];
		});
		const serviceItems = computed(() => {
			return builtInServiceDefinitions.value.filter((service) => service.isAvailable).map((service) => ({
				id: service.id,
				kind: "service",
				category: "built-in",
				serviceId: service.id,
				title: i18n.baseText(service.titleKey),
				description: i18n.baseText(service.descriptionKey),
				status: service.isConnected ? "connected" : "none",
				iconSource: service.iconSource
			}));
		});
		const activeServiceDefinition = computed(() => {
			const item = detailItem.value;
			if (item?.kind !== "service") return null;
			return builtInServiceDefinitions.value.find((service) => service.id === item.serviceId) ?? null;
		});
		const items = computed(() => {
			const out = [...serviceItems.value];
			if (settingsStore.isMcpAvailable) {
				const catalog = mcpStore.catalog ?? [];
				for (const server of catalog) {
					const connections = mcpStore.connectionsByServerSlug.get(server.slug) ?? [];
					if (connections.length === 0) {
						out.push(buildItem(server, void 0));
						continue;
					}
					for (const connection of connections) out.push(buildItem(server, connection));
				}
			}
			return out;
		});
		watch(() => detailItem.value?.id ?? null, (id) => {
			const item = detailItem.value;
			if (!id || !item || item.kind !== "mcp-server") return;
			mcpStore.fetchConnectionToolsLazy(id);
		}, { immediate: true });
		provide(TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, createCredentialAdapter((authType, item, credentialTypes) => {
			(async () => {
				const server = item.kind === "mcp-server" ? findServerForItem(item) : void 0;
				if (!server) {
					uiStore.openNewCredential(authType);
					return;
				}
				showConnectedServer(await connectServer({
					slug: server.slug,
					credentialType: authType,
					credentialTypes
				}));
			})();
		}));
		function serverSlugForItem(item) {
			return mcpStore.connections.find((c) => c.id === item.id)?.serverSlug ?? item.id;
		}
		function findServerForItem(item) {
			const serverSlug = serverSlugForItem(item);
			return mcpStore.catalog?.find((server) => server.slug === serverSlug);
		}
		function areToolPermissionsEqual(left, right) {
			if (left.categories.read !== right.categories.read || left.categories.write !== right.categories.write) return false;
			const leftTools = left.tools ?? {};
			const rightTools = right.tools ?? {};
			const leftToolNames = Object.keys(leftTools);
			return leftToolNames.length === Object.keys(rightTools).length && leftToolNames.every((toolName) => leftTools[toolName] === rightTools[toolName]);
		}
		function trackMcpCredentialInteraction(item, track) {
			if (item.kind !== "mcp-server") return;
			const server = findServerForItem(item);
			if (!server) return;
			track(server.slug);
		}
		function handleFirstCredentialConnect(item) {
			trackMcpCredentialInteraction(item, (serverSlug) => {
				mcpTelemetry.trackFirstCredentialConnectionStart(serverSlug);
			});
		}
		function handleCredentialDropdownOpen(item) {
			trackMcpCredentialInteraction(item, (serverSlug) => {
				mcpTelemetry.trackCredentialDropdownOpened(serverSlug);
			});
		}
		function handleNewCredentialConnect(item) {
			trackMcpCredentialInteraction(item, (serverSlug) => {
				mcpTelemetry.trackNewCredentialConnectionStart(serverSlug);
			});
		}
		async function handleSelectCredential(item, _authType, credentialId) {
			if (item.kind !== "mcp-server") return;
			const server = findServerForItem(item);
			if (!server) return;
			ignorePendingConnectResult(server.slug);
			mcpTelemetry.trackExistingCredentialSelected(server.slug);
			showConnectedServer(await connectWithCredential(server.slug, credentialId));
		}
		async function handleSave(item, settings) {
			if (!settings) return;
			const permissionsChanged = item.kind === "mcp-server" && (!item.settings || !areToolPermissionsEqual(item.settings, settings));
			const updated = await mcpStore.updateConnection(item.id, { toolPermissions: settings });
			if (!updated) return;
			if (permissionsChanged) mcpTelemetry.trackToolPermissionsUpdated(updated.serverSlug, settings);
			toast.showMessage({
				type: "success",
				title: i18n.baseText("instanceAi.mcp.settings.saved")
			});
			uiStore.closeModal(props.modalName);
		}
		async function handleDisconnect(item) {
			if (item.kind === "mcp-server") {
				if (await message.confirm(i18n.baseText("tools.connection.settings.removeConfirm.description", { interpolate: { service: item.title } }), {
					title: i18n.baseText("tools.connection.settings.removeConfirm.title", { interpolate: { name: item.title } }),
					confirmButtonText: i18n.baseText("tools.connection.settings.removeConfirm.confirmButton"),
					cancelButtonText: i18n.baseText("generic.cancel")
				}) !== "confirm") return;
				ignorePendingConnectResult(serverSlugForItem(item));
			}
			if (!await mcpStore.disconnect(item.id)) return;
			activeItemId.value = null;
		}
		function handleDetailItemUpdate(item) {
			if (item?.kind === "mcp-server" && item.status === "none") return;
			activeItemId.value = item?.id ?? null;
			if (item?.kind !== "service") return;
			if (item.serviceId === "browser-use") browserUseTelemetry.trackModalOpened("tools_modal");
			else if (item.serviceId === "computer-use") computerUseTelemetry.trackModalOpened(settingsStore.isGatewayConnected, "tools_modal");
		}
		async function handleConnect(item) {
			if (item.kind !== "mcp-server") return;
			const server = findServerForItem(item);
			const credentialType = item.credentials?.[0]?.authType;
			if (server && credentialType) showConnectedServer(await connectServer({
				slug: server.slug,
				credentialType
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ToolsConnectionModal_default, {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				items: items.value,
				categories: ["all"],
				title: unref(i18n).baseText("instanceAi.connections.modal.title"),
				"search-placeholder": unref(i18n).baseText("instanceAi.connections.modal.searchPlaceholder"),
				"detail-item": detailItem.value,
				"detail-mode": detailMode.value,
				"hide-back-button": isDirectConnectionOpen.value,
				"show-suggestion-footer": true,
				"onUpdate:detailItem": handleDetailItemUpdate,
				onSelectCredential: handleSelectCredential,
				onCredentialDropdownOpen: handleCredentialDropdownOpen,
				onFirstCredentialConnect: handleFirstCredentialConnect,
				onNewCredentialConnect: handleNewCredentialConnect,
				onConnect: handleConnect,
				onSave: handleSave,
				onDisconnect: handleDisconnect
			}, {
				"suggestion-footer": withCtx(() => [createVNode(McpRegistrySuggestionFooter_default, {
					prompt: unref(i18n).baseText("instanceAi.connections.modal.suggestion.prompt"),
					action: unref(i18n).baseText("instanceAi.connections.modal.suggestion.action")
				}, null, 8, ["prompt", "action"])]),
				"detail-body": withCtx(({ item }) => [item.kind === "service" && activeServiceDefinition.value ? (openBlock(), createBlock(resolveDynamicComponent(activeServiceDefinition.value.detailComponent), normalizeProps(mergeProps({ key: 0 }, activeServiceDefinition.value.detailProps ?? {})), null, 16)) : (openBlock(), createBlock(DefaultDetailBody_default, {
					key: 1,
					item
				}, null, 8, ["item"]))]),
				"settings-body": withCtx(({ item, onSave, onDisconnect, onClose, onReconnect }) => [item.kind === "mcp-server" ? (openBlock(), createBlock(McpToolSettingsContent_default, {
					key: 0,
					item,
					onSave: (settings) => onSave(settings),
					onDisconnect,
					onCancel: onClose,
					onReconnect,
					onRetry: ($event) => unref(mcpStore).fetchConnectionTools(item.id)
				}, null, 8, [
					"item",
					"onSave",
					"onDisconnect",
					"onCancel",
					"onReconnect",
					"onRetry"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"open",
				"items",
				"title",
				"search-placeholder",
				"detail-item",
				"detail-mode",
				"hide-back-button"
			]);
		};
	}
});
//#endregion
export { InstanceAiToolsConnectionModalWrapper_default as default };

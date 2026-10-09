import { Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Nd as defineComponent, Qf as normalizeProps, Sf as ref, Td as createBlock, Vd as mergeProps, Wd as onBeforeUnmount, Xd as provide, Yd as openBlock, Zd as renderList, Zf as normalizeClass, bd as Fragment, cf as watch, jd as createVNode, np as toDisplayString, tf as resolveDynamicComponent, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { R_ as useToast, Zp as CREDENTIAL_EDIT_MODAL_KEY, _C as N8nOption_default, aw as _plugin_vue_export_helper_default, io as COMPUTER_USE_CONNECTION_TYPE, lw as i18n, mC as N8nSelect_default, nw as N8nIcon_default, qC as N8nText_default, qa as useInstanceAiSettingsStore, rf as useCredentialsStore, to as BROWSER_USE_CONNECTION_TYPE, tw as N8nButton_default, uw as useI18n, wp as useUIStore } from "./app-BLs7xE53.js";
import { i as TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY } from "./ToolIcon-CGLuI6k8.js";
import { n as McpDetailBody_default, r as DefaultDetailBody_default, t as ToolsConnectionModal_default } from "./ToolsConnectionModal-BItxc2SL.js";
import { t as McpRegistrySuggestionFooter_default } from "./McpRegistrySuggestionFooter-CxiXNxpX.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-Qm_4W6ts.js";
import { n as useMcpServerConnect, r as useInstanceAiMcpTelemetry, t as iconForTool } from "./toolIcons-DA3gWuny.js";
import { t as useInstanceAiComputerUseTelemetry } from "./instanceAiComputerUse.telemetry-C2yWnmT2.js";
import { i as useInstanceAiBrowserUseTelemetry } from "./useExtensionDirectConnect-tVnJ5wK8.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-9vZHS0sl.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-kzUn0Hog.js";
//#region src/features/shared/toolsConnection/McpToolSettingsContent.vue?vue&type=script&setup=true&lang.ts
var McpToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpToolSettingsContent",
	props: { item: {} },
	emits: ["save", "disconnect"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const initialSettings = () => props.item.settings ?? {
			inclusionMode: "all",
			selectedTools: [],
			excludedTools: []
		};
		const inclusionMode = ref(initialSettings().inclusionMode);
		const selectedTools = ref([...initialSettings().selectedTools]);
		const excludedTools = ref([...initialSettings().excludedTools]);
		const hasSavedBefore = ref(false);
		watch(() => props.item.id, () => {
			hasSavedBefore.value = false;
			const next = initialSettings();
			inclusionMode.value = next.inclusionMode;
			selectedTools.value = [...next.selectedTools];
			excludedTools.value = [...next.excludedTools];
		});
		const inclusionOptions = [
			{
				value: "all",
				label: i18n.baseText("tools.connection.settings.inclusion.all")
			},
			{
				value: "selected",
				label: i18n.baseText("tools.connection.settings.inclusion.selected")
			},
			{
				value: "except",
				label: i18n.baseText("tools.connection.settings.inclusion.except")
			}
		];
		const toolOptions = computed(() => props.item.availableTools.map((tool) => ({
			value: tool.id,
			label: tool.name,
			description: tool.description
		})));
		const showToolList = computed(() => inclusionMode.value === "selected" || inclusionMode.value === "except");
		const toolListLabel = computed(() => inclusionMode.value === "selected" ? i18n.baseText("tools.connection.settings.toolsToInclude") : i18n.baseText("tools.connection.settings.toolsToExclude"));
		const toolListTestId = computed(() => inclusionMode.value === "selected" ? "tools-connection-settings-selected" : "tools-connection-settings-excluded");
		const toolListSelection = computed({
			get: () => inclusionMode.value === "except" ? excludedTools.value : selectedTools.value,
			set: (value) => {
				if (inclusionMode.value === "except") excludedTools.value = value;
				else selectedTools.value = value;
			}
		});
		function toolsKey(tools) {
			return JSON.stringify([...tools].sort());
		}
		const hasChanges = computed(() => {
			if (!hasSavedBefore.value) return true;
			const saved = initialSettings();
			if (inclusionMode.value !== saved.inclusionMode) return true;
			if (inclusionMode.value === "selected") return toolsKey(selectedTools.value) !== toolsKey(saved.selectedTools);
			if (inclusionMode.value === "except") return toolsKey(excludedTools.value) !== toolsKey(saved.excludedTools);
			return false;
		});
		function handleSave() {
			if (!hasChanges.value) return;
			hasSavedBefore.value = true;
			emit("save", {
				inclusionMode: inclusionMode.value,
				selectedTools: [...selectedTools.value],
				excludedTools: [...excludedTools.value]
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.fieldLabel),
				tag: "label",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.settings.toolInclusion")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
				modelValue: inclusionMode.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inclusionMode.value = $event),
				size: "small",
				"data-test-id": "tools-connection-settings-inclusion"
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(inclusionOptions, (opt) => {
					return createVNode(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 64))]),
				_: 1
			}, 8, ["modelValue"])], 2), showToolList.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.field)
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.fieldLabel),
				tag: "label",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(toolListLabel.value), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
				modelValue: toolListSelection.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => toolListSelection.value = $event),
				multiple: "",
				filterable: "",
				size: "small",
				class: normalizeClass(_ctx.$style.multiSelect),
				placeholder: unref(i18n).baseText("tools.connection.settings.toolsPlaceholder"),
				"data-test-id": toolListTestId.value
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(toolOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.listOption) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionHeadline) }, toDisplayString(opt.label), 3), opt.description ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.optionDescription)
						}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)], 2)]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"placeholder",
				"data-test-id"
			])], 2)) : createCommentVNode("", true)], 2), createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "small",
				"data-test-id": "tools-connection-settings-remove",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("disconnect"))
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "trash-2",
					size: 14,
					class: normalizeClass(_ctx.$style.footerIcon)
				}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.settings.remove")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				variant: "solid",
				size: "small",
				label: unref(i18n).baseText("tools.connection.settings.save"),
				disabled: !hasChanges.value,
				"data-test-id": "tools-connection-settings-save",
				onClick: handleSave
			}, null, 8, ["label", "disabled"])], 2)], 2);
		};
	}
});
var McpToolSettingsContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_boetw_1",
	body: "_body_boetw_8",
	field: "_field_boetw_15",
	multiSelect: "_multiSelect_boetw_21",
	fieldLabel: "_fieldLabel_boetw_27",
	listOption: "_listOption_boetw_31",
	optionHeadline: "_optionHeadline_boetw_37",
	optionDescription: "_optionDescription_boetw_43",
	footer: "_footer_boetw_56",
	footerIcon: "_footerIcon_boetw_64"
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
			return activeItemId.value ? items.value.find((i) => i.id === activeItemId.value) ?? null : null;
		});
		const detailMode = computed(() => detailItem.value?.kind === "mcp-server" && mcpStore.connections.some((connection) => connection.id === activeItemId.value) ? "settings" : "detail");
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
		function categoryForTool(tool) {
			if (tool?.annotations?.readOnlyHint === true) return "read";
			if (tool?.annotations?.readOnlyHint === false) return "write";
		}
		function toMcpServerTool(tool, categorySource) {
			const out = {
				id: tool.name,
				name: tool.name
			};
			const category = categoryForTool(categorySource);
			if (category !== void 0) out.category = category;
			if ("description" in tool && tool.description) out.description = tool.description;
			return out;
		}
		function settingsForConnection(connection) {
			if (!connection.toolFilter) return {
				inclusionMode: "all",
				selectedTools: [],
				excludedTools: []
			};
			if (connection.toolFilter.mode === "allow") return {
				inclusionMode: "selected",
				selectedTools: [...connection.toolFilter.tools],
				excludedTools: []
			};
			return {
				inclusionMode: "except",
				selectedTools: [],
				excludedTools: [...connection.toolFilter.tools]
			};
		}
		function availableToolsForServer(server, connection) {
			const liveTools = connection ? mcpStore.connectionToolsById.get(connection.id) : void 0;
			if (!liveTools) return server.tools.map((tool) => toMcpServerTool(tool, tool));
			const registryToolByName = new Map(server.tools.map((tool) => [tool.name, tool]));
			return liveTools.map((tool) => toMcpServerTool(tool, registryToolByName.get(tool.name)));
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
				iconSource: iconForTool(server.icons, uiStore.appliedTheme),
				credentials: server.credentials.map(({ credentialType, name }) => ({
					authType: credentialType,
					displayName: name,
					credentialId: connection?.credentialType === credentialType ? connection.credentialId : void 0,
					required: true
				})),
				availableTools: availableToolsForServer(server, connection),
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
			const updated = await mcpStore.updateConnection(item.id, {
				inclusionMode: settings.inclusionMode,
				selectedTools: settings.selectedTools,
				excludedTools: settings.excludedTools
			});
			if (!updated) return;
			mcpTelemetry.trackToolFilterSettingsUpdated(updated.serverSlug, settings.inclusionMode);
			toast.showMessage({
				type: "success",
				title: i18n.baseText("instanceAi.mcp.settings.saved")
			});
			if (isDirectConnectionOpen.value) uiStore.closeModal(props.modalName);
		}
		async function handleDisconnect(item) {
			if (item.kind === "mcp-server") ignorePendingConnectResult(serverSlugForItem(item));
			if (!await mcpStore.disconnect(item.id)) return;
			activeItemId.value = null;
		}
		function handleDetailItemUpdate(item) {
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
				categories: [
					"all",
					"built-in",
					"mcp"
				],
				title: unref(i18n).baseText("instanceAi.connections.modal.title"),
				"search-placeholder": unref(i18n).baseText("instanceAi.connections.modal.searchPlaceholder"),
				"detail-item": detailItem.value,
				"detail-mode": detailMode.value,
				"hide-back-button": isDirectConnectionOpen.value,
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
				"detail-body": withCtx(({ item }) => [item.kind === "service" && activeServiceDefinition.value ? (openBlock(), createBlock(resolveDynamicComponent(activeServiceDefinition.value.detailComponent), normalizeProps(mergeProps({ key: 0 }, activeServiceDefinition.value.detailProps ?? {})), null, 16)) : item.kind === "mcp-server" ? (openBlock(), createBlock(McpDetailBody_default, {
					key: 1,
					item
				}, null, 8, ["item"])) : (openBlock(), createBlock(DefaultDetailBody_default, {
					key: 2,
					item
				}, null, 8, ["item"]))]),
				"settings-body": withCtx(({ item, onSave, onDisconnect }) => [item.kind === "mcp-server" ? (openBlock(), createBlock(McpToolSettingsContent_default, {
					key: 0,
					item,
					onSave: (settings) => onSave(settings),
					onDisconnect
				}, null, 8, [
					"item",
					"onSave",
					"onDisconnect"
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

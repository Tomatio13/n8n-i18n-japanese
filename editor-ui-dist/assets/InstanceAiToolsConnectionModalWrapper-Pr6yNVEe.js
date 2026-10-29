import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { $d as provide, Ad as createElementBlock, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, Wd as mergeProps, ap as toDisplayString, df as watch, ep as normalizeClass, if as resolveDynamicComponent, ja as require_isEqual, kd as createCommentVNode, pf as withCtx, qd as onBeforeUnmount, tp as normalizeProps } from "./vendor-z-loPfiR.js";
import { $o as useInstanceAiSettingsStore, AE as _plugin_vue_export_helper_default, Ax as DEFAULT_INSTANCE_AI_PERMISSIONS, DE as N8nIcon_default, EE as N8nButton_default, FE as useI18n, Ny as useRootStore, PE as i18n, Yp as useCredentialsStore, fw as DialogFooter_default, ls as COMPUTER_USE_CONNECTION_TYPE, os as BROWSER_USE_CONNECTION_TYPE, qh as useUIStore, rw as useMessage, vg as CREDENTIAL_EDIT_MODAL_KEY } from "./app-kkzDAG6o.js";
import { t as useLatestFetch } from "./useLatestFetch-AuP-_B3s.js";
import { r as TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY } from "./ToolCredentialPicker-B4ntvCHp.js";
import { n as DefaultDetailBody_default, t as ToolsConnectionModal_default } from "./ToolsConnectionModal-B8R_CdJn.js";
import { n as McpDetailBody_default, r as McpConnectionStatusCallout_default, t as McpToolPermissionsEditor_default } from "./McpToolPermissionsEditor-C-OFs54q.js";
import { t as iconForMcpRegistryServer } from "./mcpRegistryIcon-CIup7XLH.js";
import { t as discoverMcpConnection } from "./mcpRegistry.api-qUhGWn0R.js";
import { t as McpRegistrySuggestionFooter_default } from "./McpRegistrySuggestionFooter-Bj4SBFgZ.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-vMymKjZz.js";
import { n as useInstanceAiMcpTelemetry, t as useMcpServerConnect } from "./useMcpServerConnect-eQp9GTSo.js";
import { t as useInstanceAiComputerUseTelemetry } from "./instanceAiComputerUse.telemetry-Coo4od01.js";
import { i as useInstanceAiBrowserUseTelemetry } from "./useExtensionDirectConnect-DGy4m4lW.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-H0Fjy37f.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-D3HefwyV.js";
//#region src/features/shared/toolsConnection/McpToolSettingsContent.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var McpToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpToolSettingsContent",
	props: {
		item: {},
		actor: { default: "assistant" },
		supportsApproval: {
			type: Boolean,
			default: true
		},
		showRemove: {
			type: Boolean,
			default: true
		},
		saveLabel: {}
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
		const isConnectionUnhealthy = computed(() => props.item.status === "disconnected");
		const arePermissionsDisabled = computed(() => props.item.status !== "connected");
		const initialSettings = () => props.item.settings ?? { categories: {
			read: DEFAULT_INSTANCE_AI_PERMISSIONS.mcpRead,
			write: DEFAULT_INSTANCE_AI_PERMISSIONS.mcpWrite
		} };
		const draftSettings = ref(initialSettings());
		const draftPermissions = computed({
			get: () => draftSettings.value,
			set: (permissions) => {
				draftSettings.value = {
					...permissions,
					...draftSettings.value.connectionTimeoutMs === void 0 ? {} : { connectionTimeoutMs: draftSettings.value.connectionTimeoutMs }
				};
			}
		});
		const hasSavedBefore = ref(false);
		watch(() => props.item.id, () => {
			hasSavedBefore.value = false;
			draftSettings.value = initialSettings();
		});
		const hasChanges = computed(() => {
			if (!hasSavedBefore.value) return true;
			return JSON.stringify(draftSettings.value) !== JSON.stringify(initialSettings());
		});
		function handleSave() {
			if (!hasChanges.value) return;
			hasSavedBefore.value = true;
			emit("save", draftSettings.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
				createVNode(McpDetailBody_default, { item: __props.item }, null, 8, ["item"]),
				isConnectionUnhealthy.value ? (openBlock(), createBlock(McpConnectionStatusCallout_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.failureCallout),
					"failure-reason": __props.item.connectionFailureReason,
					onReconnect: _cache[0] || (_cache[0] = ($event) => emit("reconnect")),
					onRetry: _cache[1] || (_cache[1] = ($event) => emit("retry"))
				}, null, 8, ["class", "failure-reason"])) : createCommentVNode("", true),
				createVNode(McpToolPermissionsEditor_default, {
					modelValue: draftPermissions.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => draftPermissions.value = $event),
					class: normalizeClass(_ctx.$style.permissions),
					actor: __props.actor,
					"available-tools": __props.item.availableTools,
					"server-title": __props.item.title,
					status: __props.item.status,
					"exclude-permissions": __props.supportsApproval ? [] : ["require_approval"]
				}, null, 8, [
					"modelValue",
					"class",
					"actor",
					"available-tools",
					"server-title",
					"status",
					"exclude-permissions"
				])
			], 2), createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.footer) }, {
				default: withCtx(() => [
					__props.showRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.removeButton),
						variant: "outline",
						size: "small",
						"data-test-id": "tools-connection-settings-remove",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("disconnect"))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "trash-2",
							size: 14,
							class: normalizeClass(_ctx.$style.footerIcon)
						}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.settings.remove")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						label: unref(i18n).baseText("generic.cancel"),
						"data-test-id": "tools-connection-settings-cancel",
						onClick: _cache[4] || (_cache[4] = ($event) => emit("cancel"))
					}, null, 8, ["label"]),
					createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "small",
						label: __props.saveLabel ?? unref(i18n).baseText("generic.save"),
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
	container: "_container_1c13b_1",
	body: "_body_1c13b_9",
	failureCallout: "_failureCallout_1c13b_18",
	permissions: "_permissions_1c13b_22",
	footer: "_footer_1c13b_26",
	removeButton: "_removeButton_1c13b_32",
	footerIcon: "_footerIcon_1c13b_36"
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
		const rootStore = useRootStore();
		const credentialsStore = useCredentialsStore();
		const mcpStore = useInstanceAiMcpStore();
		const mcpTelemetry = useInstanceAiMcpTelemetry();
		const browserUseTelemetry = useInstanceAiBrowserUseTelemetry();
		const computerUseTelemetry = useInstanceAiComputerUseTelemetry();
		const settingsStore = useInstanceAiSettingsStore();
		const message = useMessage();
		const draftConnection = ref(null);
		const { invalidate: invalidateDiscovery, next: nextDiscovery } = useLatestFetch();
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
		const { connectServer, createCredentialAdapter, ignorePendingConnectResult, isConnectLocked, saveConnection } = useMcpServerConnect();
		/** Reveals the settings view of the server the user just connected */
		function showConnectedServer(connectionId) {
			if (connectionId) activeItemId.value = connectionId;
		}
		async function discoverDraft(serverSlug, credentialId, credentialType) {
			const connection = mcpStore.connections.find((item) => item.serverSlug === serverSlug);
			const isCurrent = nextDiscovery();
			draftConnection.value = {
				...connection ? { connectionId: connection.id } : {},
				serverSlug,
				credentialId,
				credentialType,
				status: "connecting",
				tools: []
			};
			const itemId = connection?.id ?? serverSlug;
			activeItemId.value = itemId;
			const result = await discoverMcpConnection(rootStore.restApiContext, {
				slug: serverSlug,
				credentialId
			}).catch(() => ({
				status: "disconnected",
				failureReason: "unknown",
				tools: []
			}));
			const currentDraft = draftConnection.value;
			if (!isCurrent() || !currentDraft) return null;
			draftConnection.value = {
				...currentDraft,
				status: result.status,
				tools: result.tools,
				...result.status === "disconnected" ? { failureReason: result.failureReason } : {}
			};
			return itemId;
		}
		const isLoadingCredentials = ref(false);
		/**
		* App startup does not wait for credentials, so the store can still be empty.
		* Block until the first fetch lands, and refresh in the background otherwise.
		*/
		async function loadCredentials() {
			isLoadingCredentials.value = credentialsStore.allCredentials.length === 0;
			try {
				await credentialsStore.fetchAllCredentials();
			} catch (error) {
				console.error("Failed to fetch credentials", error);
			} finally {
				isLoadingCredentials.value = false;
			}
		}
		if (settingsStore.isMcpAvailable) {
			mcpStore.fetchCatalogLazy();
			mcpStore.fetchConnectionsLazy();
			loadCredentials();
			credentialsStore.fetchCredentialTypes(false);
		}
		onBeforeUnmount(() => {
			invalidateDiscovery();
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
		function draftForConnection(serverSlug, connection) {
			const draft = draftConnection.value;
			return draft?.serverSlug === serverSlug && draft.connectionId === connection?.id ? draft : null;
		}
		function availableToolsForConnection(serverSlug, connection) {
			const draft = draftForConnection(serverSlug, connection);
			if (draft) return draft.tools.map(toMcpServerTool);
			return (connection ? mcpStore.connectionToolsById.get(connection.id) : void 0)?.map(toMcpServerTool) ?? [];
		}
		function buildItem(server, connection) {
			const draft = draftForConnection(server.slug, connection);
			return {
				id: connection?.id ?? server.slug,
				kind: "mcp-server",
				category: "mcp",
				title: server.title,
				description: server.tagline,
				longDescription: server.description,
				status: isConnectLocked(server.slug) ? "connecting" : draft?.status ?? connection?.status ?? "none",
				connectionFailureReason: draft?.failureReason ?? connection?.failureReason,
				iconSource: iconForMcpRegistryServer(server.icons, uiStore.appliedTheme),
				credentials: server.credentials.map(({ credentialType, name }) => ({
					authType: credentialType,
					displayName: name,
					credentialId: draft?.credentialType === credentialType ? draft.credentialId : connection?.credentialType === credentialType ? connection.credentialId : void 0,
					required: true
				})),
				availableTools: availableToolsForConnection(server.slug, connection),
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
			if (draftConnection.value?.serverSlug === serverSlugForItem(item)) return;
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
				}, discoverDraft));
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
		async function handleSelectCredential(item, authType, credentialId) {
			if (item.kind !== "mcp-server") return;
			const server = findServerForItem(item);
			if (!server) return;
			ignorePendingConnectResult(server.slug);
			mcpTelemetry.trackExistingCredentialSelected(server.slug);
			showConnectedServer(await discoverDraft(server.slug, credentialId, authType));
		}
		async function handleSave(item, settings) {
			if (!settings || item.kind !== "mcp-server") return;
			const draft = draftConnection.value?.serverSlug === serverSlugForItem(item) ? draftConnection.value : null;
			if (draft && draft.status !== "connected") return;
			const saved = mcpStore.connections.find((connection) => connection.id === item.id);
			const serverSlug = draft?.serverSlug ?? saved?.serverSlug;
			const credentialId = draft?.credentialId ?? saved?.credentialId;
			if (!serverSlug || !credentialId) return;
			const updated = await saveConnection({
				serverSlug,
				credentialId,
				toolPermissions: settings
			});
			if (!updated) return;
			if (saved && !(0, import_isEqual.default)(item.settings, settings)) mcpTelemetry.trackToolPermissionsUpdated(updated.serverSlug, settings);
			draftConnection.value = null;
			uiStore.closeModal(props.modalName);
		}
		async function handleDisconnect(item) {
			const disconnectedSlug = item.kind === "mcp-server" ? serverSlugForItem(item) : void 0;
			if (item.kind === "mcp-server") {
				if (await message.confirm(i18n.baseText("tools.connection.settings.removeConfirm.description", { interpolate: {
					item: "connector",
					service: item.title
				} }), {
					title: i18n.baseText("tools.connection.settings.removeConfirm.title", { interpolate: { name: item.title } }),
					confirmButtonText: i18n.baseText("tools.connection.settings.removeConfirm.confirmButton", { interpolate: { item: "connector" } }),
					cancelButtonText: i18n.baseText("generic.cancel")
				}) !== "confirm") return;
				ignorePendingConnectResult(serverSlugForItem(item));
			}
			if (!await mcpStore.disconnect(item.id)) return;
			if (disconnectedSlug && draftConnection.value?.serverSlug === disconnectedSlug) {
				invalidateDiscovery();
				draftConnection.value = null;
			}
			activeItemId.value = null;
		}
		function handleDetailItemUpdate(item) {
			if (item?.kind === "mcp-server" && item.status === "none") return;
			if (!item) {
				invalidateDiscovery();
				draftConnection.value = null;
			}
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
			}, discoverDraft));
		}
		function isNewDraft(item) {
			return draftConnection.value?.serverSlug === serverSlugForItem(item) && draftConnection.value.connectionId === void 0;
		}
		function retryConnection(item) {
			const draft = draftConnection.value;
			if (draft?.serverSlug === serverSlugForItem(item)) {
				discoverDraft(draft.serverSlug, draft.credentialId, draft.credentialType);
				return;
			}
			mcpStore.fetchConnectionTools(item.id);
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
				loading: isLoadingCredentials.value,
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
					"show-remove": !isNewDraft(item),
					"save-label": isNewDraft(item) ? unref(i18n).baseText("instanceAi.inputMenu.tools.add") : void 0,
					onSave: (settings) => onSave(settings),
					onDisconnect,
					onCancel: onClose,
					onReconnect,
					onRetry: ($event) => retryConnection(item)
				}, null, 8, [
					"item",
					"show-remove",
					"save-label",
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
				"hide-back-button",
				"loading"
			]);
		};
	}
});
//#endregion
export { InstanceAiToolsConnectionModalWrapper_default as default };

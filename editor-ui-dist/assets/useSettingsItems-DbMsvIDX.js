import { Cd as computed, as as useRouter } from "./vendor-BdZVA4Px.js";
import { Dc as useAiGateway, Ec as useAiGatewayTopUp, G_ as useSettingsStore, Sf as hasPermission, a as isContextPreferencesEnabled, f as PROMOTIONS_SETTINGS_VIEW, m as usePromotionsEnabled, uw as useI18n, wp as useUIStore, z_ as VIEWS } from "./app-BLs7xE53.js";
//#region src/app/composables/useUserHelpers.ts
function useUserHelpers(router) {
	const canUserAccessRouteByName = (name) => {
		return canUserAccessRoute(router.resolve({ name }));
	};
	const canUserAccessRoute = (route) => {
		const middleware = route.meta?.middleware;
		const middlewareOptions = route.meta?.middlewareOptions;
		if (!middleware) return true;
		return hasPermission(middleware, middlewareOptions);
	};
	return { canUserAccessRouteByName };
}
//#endregion
//#region src/app/composables/useSettingsItems.ts
function useSettingsItems() {
	const router = useRouter();
	const i18n = useI18n();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const { canUserAccessRouteByName } = useUserHelpers(router);
	const { isEnabled: isPromotionsEnabled } = usePromotionsEnabled();
	const { balance } = useAiGateway();
	const { openTopUp } = useAiGatewayTopUp();
	const settingsItems = computed(() => {
		const menuItems = [
			{
				id: "settings-usage-and-plan",
				icon: "chart-column-decreasing",
				label: i18n.baseText("settings.usageAndPlan.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USAGE),
				route: { to: { name: VIEWS.USAGE } }
			},
			{
				id: "settings-personal",
				icon: "circle-user-round",
				label: i18n.baseText("settings.personal"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
				route: { to: { name: VIEWS.PERSONAL_SETTINGS } }
			},
			{
				id: "settings-users",
				icon: "user-round",
				label: i18n.baseText("settings.users"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
				route: { to: { name: VIEWS.USERS_SETTINGS } }
			},
			{
				id: "settings-ai",
				icon: "sparkles",
				label: i18n.baseText("settings.ai"),
				position: "top",
				available: settingsStore.isAiAssistantEnabled && canUserAccessRouteByName(VIEWS.AI_SETTINGS),
				route: { to: { name: VIEWS.AI_SETTINGS } }
			},
			{
				id: "settings-n8n-connect",
				icon: "plug-zap",
				label: i18n.baseText(settingsStore.isAiGatewayCloudUbbEnabled ? "settings.n8nCredits" : "settings.n8nConnect"),
				position: "top",
				available: settingsStore.isAiGatewayEnabled && (settingsStore.isAiGatewayCloudUbbEnabled || canUserAccessRouteByName(VIEWS.AI_GATEWAY_SETTINGS)),
				route: settingsStore.isAiGatewayCloudUbbEnabled ? void 0 : { to: { name: VIEWS.AI_GATEWAY_SETTINGS } },
				creditsTag: balance.value !== void 0 ? i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(balance.value).toFixed(2)}` } }) : void 0
			},
			{
				id: "settings-roles",
				icon: "user-round",
				label: i18n.baseText("settings.roles"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.ROLES_SETTINGS),
				route: { to: { name: VIEWS.ROLES_SETTINGS } },
				new: true
			},
			{
				id: "settings-api",
				icon: "plug",
				label: i18n.baseText("settings.n8napi"),
				position: "top",
				available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
				route: { to: { name: VIEWS.API_SETTINGS } }
			},
			{
				id: "settings-external-secrets",
				icon: "vault",
				label: i18n.baseText("settings.externalSecrets.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
				route: { to: { name: VIEWS.EXTERNAL_SECRETS_SETTINGS } }
			},
			{
				id: "settings-credential-resolvers",
				icon: "key-round",
				label: i18n.baseText("credentialResolver.view.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.RESOLVERS),
				route: { to: { name: VIEWS.RESOLVERS } }
			},
			{
				id: "settings-source-control",
				icon: "git-branch",
				label: i18n.baseText("settings.sourceControl.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
				route: { to: { name: VIEWS.SOURCE_CONTROL } }
			},
			{
				id: "settings-promotions",
				icon: "git-branch",
				label: i18n.baseText("settings.promotions.title"),
				position: "top",
				available: isPromotionsEnabled.value && canUserAccessRouteByName("PromotionsSettings"),
				route: { to: { name: PROMOTIONS_SETTINGS_VIEW } },
				preview: true
			},
			{
				id: "settings-sso",
				icon: "user-lock",
				label: i18n.baseText("settings.sso"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
				route: { to: { name: VIEWS.SSO_SETTINGS } }
			},
			{
				id: "settings-encryption-keys",
				icon: "key-round",
				label: i18n.baseText("settings.encryptionKeys"),
				position: "top",
				available: settingsStore.moduleSettings["encryption-key-manager"]?.rotationEnabled === true && canUserAccessRouteByName(VIEWS.ENCRYPTION_KEYS_SETTINGS),
				route: { to: { name: VIEWS.ENCRYPTION_KEYS_SETTINGS } }
			},
			{
				id: "settings-security",
				icon: "shield",
				label: i18n.baseText("settings.security"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SECURITY_SETTINGS),
				route: { to: { name: VIEWS.SECURITY_SETTINGS } }
			},
			{
				id: "settings-ldap",
				icon: "network",
				label: i18n.baseText("settings.ldap"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
				route: { to: { name: VIEWS.LDAP_SETTINGS } }
			},
			{
				id: "settings-workersview",
				icon: "waypoints",
				label: i18n.baseText("mainSidebar.workersView"),
				position: "top",
				available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], { rbac: { scope: "workersView:manage" } }),
				route: { to: { name: VIEWS.WORKER_VIEW } }
			}
		];
		menuItems.push({
			id: "settings-log-streaming",
			icon: "log-in",
			label: i18n.baseText("settings.log-streaming"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.LOG_STREAMING_SETTINGS),
			route: { to: { name: VIEWS.LOG_STREAMING_SETTINGS } }
		});
		menuItems.push({
			id: "settings-community-nodes",
			icon: "box",
			label: i18n.baseText("settings.communityNodes"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
			route: { to: { name: VIEWS.COMMUNITY_NODES } }
		});
		menuItems.push({
			id: "settings-migration-report",
			icon: "list-checks",
			label: i18n.baseText("settings.migrationReport"),
			position: "top",
			available: canUserAccessRouteByName(VIEWS.MIGRATION_REPORT),
			route: { to: { name: VIEWS.MIGRATION_REPORT } }
		});
		const moduleItems = uiStore.settingsSidebarItems;
		const items = menuItems.concat(moduleItems.filter((item) => !menuItems.some((m) => m.id === item.id)));
		const mcpIndex = items.findIndex((item) => item.id === "settings-mcp");
		items.splice(mcpIndex === -1 ? items.length : mcpIndex + 1, 0, {
			id: "settings-context",
			icon: "brain",
			label: i18n.baseText("settings.context.title"),
			position: "top",
			available: isContextPreferencesEnabled() && canUserAccessRouteByName(VIEWS.SETTINGS_CONTEXT),
			route: { to: { name: VIEWS.SETTINGS_CONTEXT } },
			preview: true
		});
		return items;
	});
	const visibleSettingsItems = computed(() => settingsItems.value.filter((item) => item.available));
	const handleSettingsItemSelect = async (itemId) => {
		if (itemId === "settings-n8n-connect" && settingsStore.isAiGatewayCloudUbbEnabled) await openTopUp({ source: "settings_page" });
	};
	return {
		settingsItems: visibleSettingsItems,
		handleSettingsItemSelect
	};
}
//#endregion
export { useSettingsItems as t };

import { Pd as computed, cs as useRouter } from "./vendor-D9HlBS7Y.js";
import { Bv as VIEWS, El as useAiGateway, FT as useI18n, Ip as hasPermission, Kv as useSettingsStore, Tl as useAiGatewayTopUp, b as usePromotionsEnabled, ch as useUIStore, o as isContextPreferencesEnabled, v as PROMOTIONS_SETTINGS_VIEW } from "./app-TXEjHrLJ.js";
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
		const shellItems = [
			{
				id: "settings-usage-and-plan",
				order: 10,
				icon: "chart-column-decreasing",
				label: i18n.baseText("settings.usageAndPlan.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USAGE),
				route: { to: { name: VIEWS.USAGE } }
			},
			{
				id: "settings-personal",
				order: 20,
				icon: "circle-user-round",
				label: i18n.baseText("settings.personal"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
				route: { to: { name: VIEWS.PERSONAL_SETTINGS } }
			},
			{
				id: "settings-users",
				order: 30,
				icon: "user-round",
				label: i18n.baseText("settings.users"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
				route: { to: { name: VIEWS.USERS_SETTINGS } }
			},
			{
				id: "settings-ai",
				order: 40,
				icon: "sparkles",
				label: i18n.baseText("settings.ai"),
				position: "top",
				available: settingsStore.isAiAssistantEnabled && canUserAccessRouteByName(VIEWS.AI_SETTINGS),
				route: { to: { name: VIEWS.AI_SETTINGS } }
			},
			{
				id: "settings-n8n-connect",
				order: 50,
				icon: "plug-zap",
				label: i18n.baseText(settingsStore.isAiGatewayCloudUbbEnabled ? "settings.n8nCredits" : "settings.n8nConnect"),
				position: "top",
				available: settingsStore.isAiGatewayEnabled && (settingsStore.isAiGatewayCloudUbbEnabled || canUserAccessRouteByName(VIEWS.AI_GATEWAY_SETTINGS)),
				route: settingsStore.isAiGatewayCloudUbbEnabled ? void 0 : { to: { name: VIEWS.AI_GATEWAY_SETTINGS } },
				creditsTag: balance.value !== void 0 ? i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(balance.value).toFixed(2)}` } }) : void 0
			},
			{
				id: "settings-roles",
				order: 60,
				icon: "user-round",
				label: i18n.baseText("settings.roles"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.ROLES_SETTINGS),
				route: { to: { name: VIEWS.ROLES_SETTINGS } },
				new: true
			},
			{
				id: "settings-api",
				order: 70,
				icon: "plug",
				label: i18n.baseText("settings.n8napi"),
				position: "top",
				available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
				route: { to: { name: VIEWS.API_SETTINGS } }
			},
			{
				id: "settings-external-secrets",
				order: 80,
				icon: "vault",
				label: i18n.baseText("settings.externalSecrets.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
				route: { to: { name: VIEWS.EXTERNAL_SECRETS_SETTINGS } }
			},
			{
				id: "settings-credential-resolvers",
				order: 90,
				icon: "key-round",
				label: i18n.baseText("credentialResolver.view.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.RESOLVERS),
				route: { to: { name: VIEWS.RESOLVERS } }
			},
			{
				id: "settings-source-control",
				order: 100,
				icon: "git-branch",
				label: i18n.baseText("settings.sourceControl.title"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
				route: { to: { name: VIEWS.SOURCE_CONTROL } }
			},
			{
				id: "settings-promotions",
				order: 110,
				icon: "git-branch",
				label: i18n.baseText("settings.promotions.title"),
				position: "top",
				available: isPromotionsEnabled.value && canUserAccessRouteByName("PromotionsSettings"),
				route: { to: { name: PROMOTIONS_SETTINGS_VIEW } },
				preview: true
			},
			{
				id: "settings-sso",
				order: 120,
				icon: "user-lock",
				label: i18n.baseText("settings.sso"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
				route: { to: { name: VIEWS.SSO_SETTINGS } }
			},
			{
				id: "settings-encryption-keys",
				order: 130,
				icon: "key-round",
				label: i18n.baseText("settings.encryptionKeys"),
				position: "top",
				available: settingsStore.moduleSettings["encryption-key-manager"]?.rotationEnabled === true && canUserAccessRouteByName(VIEWS.ENCRYPTION_KEYS_SETTINGS),
				route: { to: { name: VIEWS.ENCRYPTION_KEYS_SETTINGS } }
			},
			{
				id: "settings-security",
				order: 140,
				icon: "shield",
				label: i18n.baseText("settings.security"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.SECURITY_SETTINGS),
				route: { to: { name: VIEWS.SECURITY_SETTINGS } }
			},
			{
				id: "settings-ldap",
				order: 150,
				icon: "network",
				label: i18n.baseText("settings.ldap"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
				route: { to: { name: VIEWS.LDAP_SETTINGS } }
			},
			{
				id: "settings-workersview",
				order: 160,
				icon: "waypoints",
				label: i18n.baseText("mainSidebar.workersView"),
				position: "top",
				available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], { rbac: { scope: "workersView:manage" } }),
				route: { to: { name: VIEWS.WORKER_VIEW } }
			},
			{
				id: "settings-community-nodes",
				order: 180,
				icon: "box",
				label: i18n.baseText("settings.communityNodes"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
				route: { to: { name: VIEWS.COMMUNITY_NODES } }
			},
			{
				id: "settings-migration-report",
				order: 190,
				icon: "list-checks",
				label: i18n.baseText("settings.migrationReport"),
				position: "top",
				available: canUserAccessRouteByName(VIEWS.MIGRATION_REPORT),
				route: { to: { name: VIEWS.MIGRATION_REPORT } }
			},
			{
				id: "settings-context",
				order: 210,
				icon: "brain",
				label: i18n.baseText("settings.context.title"),
				position: "top",
				available: isContextPreferencesEnabled() && canUserAccessRouteByName(VIEWS.SETTINGS_CONTEXT),
				route: { to: { name: VIEWS.SETTINGS_CONTEXT } },
				preview: true
			}
		];
		const moduleItems = uiStore.settingsSidebarItems.filter((item) => !shellItems.some((shellItem) => shellItem.id === item.id));
		return [...shellItems, ...moduleItems].sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
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

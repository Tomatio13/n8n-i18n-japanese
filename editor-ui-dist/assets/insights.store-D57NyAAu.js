import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { Cl as getResourcePermissions } from "./constants-CC8dRo-k.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-Bbon-W6O.js";
import { t as useSettingsStore } from "./settings.store-C07h5tXp.js";
import { s as useAsyncState } from "./core-C0GM8qYW.js";
import { t as useUsersStore } from "./users.store-CTegMf5H.js";
import { c as transformInsightsSummary } from "./insights.utils-CnC5FqSt.js";
//#region src/features/execution/insights/insights.api.ts
function serializeInsightsFilter(filter) {
	if (!filter) return void 0;
	const { startDate, endDate, ...rest } = filter;
	const serialized = { ...rest };
	if (startDate) serialized.startDate = startDate.toISOString();
	if (endDate) serialized.endDate = endDate.toISOString();
	return serialized;
}
var fetchInsightsSummary = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/summary", serializeInsightsFilter(filter));
var fetchInsightsByTime = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time", serializeInsightsFilter(filter));
var fetchInsightsTimeSaved = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time/time-saved", serializeInsightsFilter(filter));
var fetchInsightsByWorkflow = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-workflow", serializeInsightsFilter(filter));
//#endregion
//#region src/features/execution/insights/insights.store.ts
var useInsightsStore = defineStore("insights", () => {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const globalInsightsPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).insights);
	const isInsightsEnabled = computed(() => settingsStore.isModuleActive("insights"));
	const isDashboardEnabled = computed(() => !!settingsStore.moduleSettings.insights?.dashboard);
	return {
		globalInsightsPermissions,
		isInsightsEnabled,
		isSummaryEnabled: computed(() => globalInsightsPermissions.value.list && isInsightsEnabled.value),
		isDashboardEnabled,
		weeklySummary: useAsyncState(async () => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		summary: useAsyncState(async (filter) => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext, filter));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		charts: useAsyncState(async (filter) => {
			return await (isDashboardEnabled.value ? fetchInsightsByTime : fetchInsightsTimeSaved)(rootStore.restApiContext, filter);
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		table: useAsyncState(async (filter) => {
			return await fetchInsightsByWorkflow(rootStore.restApiContext, filter);
		}, {
			count: 0,
			data: []
		}, {
			immediate: false,
			resetOnExecute: false
		}),
		dateRanges: computed(() => settingsStore.moduleSettings.insights?.dateRanges ?? [])
	};
});
//#endregion
export { useInsightsStore as t };

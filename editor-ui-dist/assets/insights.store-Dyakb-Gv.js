import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { u as useAsyncState } from "./dist-C4pFh3bs.js";
import { h as $14e0f24ef4ac5c92$export$aa8b41735afcabd2 } from "./CalendarDate-B9aUKdgV.js";
import { fr as defineStore, nr as makeRestApiRequest, t as useRootStore } from "./useRootStore-DR5raQ_t.js";
import { Ft as getResourcePermissions } from "./src-DVqjY0nx.js";
import { t as useSettingsStore } from "./settings.store-CWApP-Zs.js";
import { t as useUsersStore } from "./users.store-B7NlP6UW.js";
import { c as transformInsightsSummary } from "./insights.utils-DzkKIwH3.js";
//#region ../../modules/insights/frontend/src/insights.api.ts
function serializeInsightsFilter(filter) {
	if (!filter) return void 0;
	const { startDate, endDate, ...rest } = filter;
	const serialized = { ...rest };
	if (startDate) serialized.startDate = startDate.toISOString();
	if (endDate) serialized.endDate = endDate.toISOString();
	serialized.timeZone = $14e0f24ef4ac5c92$export$aa8b41735afcabd2();
	return serialized;
}
var fetchInsightsSummary = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/summary", serializeInsightsFilter(filter));
var fetchInsightsByTime = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time", serializeInsightsFilter(filter));
var fetchInsightsTimeSaved = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time/time-saved", serializeInsightsFilter(filter));
var fetchInsightsByWorkflow = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-workflow", serializeInsightsFilter(filter));
//#endregion
//#region ../../modules/insights/frontend/src/insights.store.ts
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
		dateRanges: computed(() => settingsStore.moduleSettings.insights?.dateRanges ?? []),
		earliestDataDate: computed(() => settingsStore.moduleSettings.insights?.earliestDataDate ?? null)
	};
});
//#endregion
export { useInsightsStore as t };

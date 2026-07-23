import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { It as useRouteWorkflowId, fn as useWorkflowsStore, qt as useNDVStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore } from "./workflowDocument.store-HoPTLiiy.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-ZJkIKG4j.js";
import { Vn as STORES, t as useSettingsStore } from "./settings.store-DGttGpNV.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-CN7DQ4Gg.js";
//#region src/app/stores/webhooks.store.ts
var useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	const routeWorkflowId = useRouteWorkflowId();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(routeWorkflowId.value)));
	const ndvStore = computed(() => useNDVStore(workflowDocumentStore.value.documentId));
	return {
		...useRootStore(),
		...useWorkflowsStore(),
		...useUIStore(),
		...useUsersStore(),
		workflowDocumentStore,
		ndvStore,
		...useSettingsStore()
	};
});
//#endregion
//#region src/app/composables/useExternalHooks.ts
async function runExternalHook(eventName, metadata) {
	if (!window.n8nExternalHooks) return;
	const store = useWebhooksStore();
	const [resource, operator] = eventName.split(".");
	const context = window.n8nExternalHooks[resource];
	if (context?.[operator]) {
		const hookMethods = context[operator];
		for (const hookMethod of hookMethods) await hookMethod(store, metadata);
	}
}
function useExternalHooks() {
	return { run: runExternalHook };
}
//#endregion
export { useExternalHooks as t };

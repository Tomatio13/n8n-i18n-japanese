import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Nt as useRouteWorkflowId, Wt as useNDVStore, cn as useWorkflowsStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore } from "./workflowDocument.store-DGzD2Kyg.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-B7BRrI0z.js";
import { Bn as STORES, t as useSettingsStore } from "./settings.store-DtJXACMf.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-B2kV19El.js";
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

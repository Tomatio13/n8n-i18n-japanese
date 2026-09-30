import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { Cn as useNDVStore, T as createWorkflowDocumentId, fn as useRouteWorkflowId, j as useWorkflowDocumentStore, t as useWorkflowsStore } from "./workflows.store-CW4k8Pkp.js";
import { fr as defineStore, lr as STORES, t as useRootStore } from "./useRootStore-DR5raQ_t.js";
import { t as useSettingsStore } from "./settings.store-CWApP-Zs.js";
import { t as useUsersStore } from "./users.store-B7NlP6UW.js";
import { t as setExternalHooks } from "./useExternalHooks-C4Nb7Yft.js";
import { n as useUIStore } from "./ui.store-BOTdVxL9.js";
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
/**
* Concrete runner. Loosely typed to match the `@n8n/composables` contract so it
* can be registered for package-side consumers; the exported {@link runExternalHook}
* wrapper below re-adds per-event type-checking for direct call sites.
*/
async function runExternalHookInternal(eventName, metadata) {
	if (!window.n8nExternalHooks) return;
	const store = useWebhooksStore();
	const [resource, operator] = eventName.split(".");
	const context = window.n8nExternalHooks[resource];
	if (context?.[operator]) {
		const hookMethods = context[operator];
		for (const hookMethod of hookMethods) await hookMethod(store, metadata);
	}
}
async function runExternalHook(eventName, metadata) {
	await runExternalHookInternal(eventName, metadata);
}
setExternalHooks({ run: runExternalHookInternal });
function useExternalHooks() {
	return { run: runExternalHook };
}
//#endregion
export { useExternalHooks as t };

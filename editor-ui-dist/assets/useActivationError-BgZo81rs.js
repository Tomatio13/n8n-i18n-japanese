import { Ht as toValue, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ot as useI18n } from "./core-BXkLhTK0.js";
import { $t as createWorkflowDocumentId, nn as useWorkflowDocumentStore, s as useWorkflowsStore } from "./users.store-hEvzGEte.js";
//#region src/app/composables/useActivationError.ts
/**
* Composable for activation error helpers.
* Resolves a node ID to a formatted activation error message reactively.
*/
function useActivationError(nodeId) {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const i18n = useI18n();
	return { errorMessage: computed(() => {
		const id = toValue(nodeId);
		if (!id) return void 0;
		const node = workflowDocumentStore.value?.getNodeById(id);
		if (!node) return void 0;
		return i18n.baseText("workflowActivator.showError.nodeError", { interpolate: { nodeName: node.name } });
	}) };
}
//#endregion
export { useActivationError as t };

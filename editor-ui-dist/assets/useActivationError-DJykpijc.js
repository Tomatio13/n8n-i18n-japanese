import { Ht as toValue, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ot as useI18n } from "./core-Ig8Qayg5.js";
import { s as useWorkflowsStore } from "./users.store-Bf8GFNsA.js";
//#region src/app/composables/useActivationError.ts
/**
* Composable for activation error helpers.
* Resolves a node ID to a formatted activation error message reactively.
*/
function useActivationError(nodeId) {
	const workflowsStore = useWorkflowsStore();
	const i18n = useI18n();
	return { errorMessage: computed(() => {
		const id = toValue(nodeId);
		if (!id) return void 0;
		const node = workflowsStore.getNodeById(id);
		if (!node) return void 0;
		return i18n.baseText("workflowActivator.showError.nodeError", { interpolate: { nodeName: node.name } });
	}) };
}
//#endregion
export { useActivationError as t };

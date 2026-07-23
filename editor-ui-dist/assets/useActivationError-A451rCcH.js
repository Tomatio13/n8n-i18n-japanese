import { S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Q as useI18n } from "./dist-CCx-0V9x.js";
import { a as injectWorkflowDocumentStore } from "./workflowDocument.store-HoPTLiiy.js";
//#region src/app/composables/useActivationError.ts
/**
* Composable for activation error helpers.
* Resolves a node ID to a formatted activation error message reactively.
*/
function useActivationError(nodeId) {
	const workflowDocumentStore = injectWorkflowDocumentStore();
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

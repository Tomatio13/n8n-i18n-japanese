import { dd as WorkflowIdKey } from "./constants-ClB6ch9-.js";
import { Fr as injectStrict } from "./workflowDocument.store-BiHUDiZn.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };

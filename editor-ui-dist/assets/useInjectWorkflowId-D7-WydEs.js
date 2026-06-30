import { Bu as WorkflowIdKey } from "./constants-DZ3uFLXZ.js";
import { jr as injectStrict } from "./workflowDocument.store-DGzD2Kyg.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };

import { c as useI18n } from "./src-DxZTq86C.js";
import { ka as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE } from "./src-idT_fqaK.js";
//#region src/features/agents/utils/workflowToolTriggers.ts
/** Locale key of each supported trigger's display name, keyed by node type so a rename is a one-key change. */
var TRIGGER_LABEL_KEYS = { [EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE]: "nodeCreator.aiPanel.workflowTriggerDisplayName" };
/** Display name of the trigger a workflow tool has to start with, for the `{trigger}` placeholder. */
function workflowToolTriggerLabel() {
	return useI18n().baseText(TRIGGER_LABEL_KEYS[EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE]);
}
//#endregion
export { workflowToolTriggerLabel as t };

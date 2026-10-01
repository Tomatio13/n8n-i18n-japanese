import { t as workflowToolTriggerLabel } from "./workflowToolTriggers-BxTFOHro.js";
//#region src/features/agents/utils/agentValidationIssueMessages.ts
var GENERIC_ISSUE_KEYS = {
	missing_required: "agents.builder.validation.issue.missingRequired",
	invalid_value: "agents.builder.validation.issue.invalidValue",
	missing_credential: "agents.builder.validation.issue.missingCredential",
	invalid_credential: "agents.builder.validation.issue.invalidCredential",
	incompatible_credential: "agents.builder.validation.issue.incompatibleCredential",
	missing_reference: "agents.builder.validation.issue.missingReference",
	incompatible_reference: "agents.builder.validation.issue.incompatibleReference"
};
var SPECIFIC_ISSUE_KEYS = {
	"subAgent.missing_reference": "agents.builder.validation.issue.subAgent.missingReference",
	"subAgent.incompatible_reference": "agents.builder.validation.issue.subAgent.incompatibleReference",
	"skill.missing_reference": "agents.builder.validation.issue.skill.missingReference",
	"task.invalid_value": "agents.builder.validation.issue.task.invalidValue",
	"tool.workflow.missing_reference": "agents.builder.validation.issue.tool.workflow.missingReference",
	"tool.workflow.incompatible_reference": "agents.builder.validation.issue.tool.workflow.incompatibleReference",
	"tool.custom.missing_reference": "agents.builder.validation.issue.tool.custom.missingReference",
	"tool.node.missing_reference": "agents.builder.validation.issue.tool.node.missingReference",
	"mcpServer.incompatible_credential": "agents.builder.validation.issue.mcpServer.incompatibleCredential"
};
var REASON_SPECIFIC_KEYS = {
	incompatible_nodes: "agents.builder.validation.issue.tool.workflow.incompatibleNodes",
	no_supported_trigger: "agents.builder.validation.issue.tool.workflow.noSupportedTrigger",
	not_published: "agents.builder.validation.issue.tool.workflow.notPublished"
};
function resolveAgentValidationIssueMessageKey(issue) {
	const { kind, toolType } = issue.capability;
	return (issue.code === "invalid_value" && issue.path.endsWith(".node.nodeParameters.url") ? "agents.builder.validation.issue.httpRequestUrlFromAi" : void 0) ?? (issue.reason ? REASON_SPECIFIC_KEYS[issue.reason] : void 0) ?? (kind === "tool" && toolType ? SPECIFIC_ISSUE_KEYS[`tool.${toolType}.${issue.code}`] : void 0) ?? SPECIFIC_ISSUE_KEYS[`${kind}.${issue.code}`] ?? GENERIC_ISSUE_KEYS[issue.code];
}
function getAgentValidationIssueInterpolation(issue) {
	return {
		id: issue.capability.id ?? "",
		trigger: workflowToolTriggerLabel()
	};
}
//#endregion
//#region src/features/agents/utils/validationIssues.ts
/**
* A warning blocks publishing but not the draft preview: the workflow tool is
* compatible, its workflow just has no published version yet.
*/
function isWarningIssue(issue) {
	return issue.code === "incompatible_reference" && issue.reason === "not_published";
}
/** Warning-only issues are resolved by the publish flow itself, so only the rest block it. */
function hasBlockingIssues(issues) {
	return issues.some((issue) => !isWarningIssue(issue));
}
//#endregion
export { resolveAgentValidationIssueMessageKey as i, isWarningIssue as n, getAgentValidationIssueInterpolation as r, hasBlockingIssues as t };

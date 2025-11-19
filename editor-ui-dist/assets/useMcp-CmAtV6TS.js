import { t as useTelemetry } from "./useTelemetry-BTUGwy7s.js";
import { On as WEBHOOK_NODE_TYPE } from "./constants-Gz3J7Ncu.js";
function useMcp() {
	const telemetry = useTelemetry();
	const isEligibleForMcpAccess = (workflow) => {
		if (!workflow.active) return false;
		return workflow.nodes.some((node) => node.type === "n8n-nodes-base.webhook" && node.disabled !== true);
	};
	const trackMcpAccessEnabledForWorkflow = (workflowId) => {
		telemetry.track("User gave MCP access to workflow", { workflow_id: workflowId });
	};
	const trackUserToggledMcpAccess = (enabled) => {
		telemetry.track("User toggled MCP access", { state: enabled });
	};
	return {
		isEligibleForMcpAccess,
		trackMcpAccessEnabledForWorkflow,
		trackUserToggledMcpAccess
	};
}
export { useMcp as t };

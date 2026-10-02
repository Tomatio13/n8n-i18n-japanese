import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { yr as AGENT_BUILDER_VIEW, zr as PENDING_AGENT_ID_STATE } from "./constants-BFgNRWjM.js";
import { t as generateNanoId } from "./generate-nano-id-CfIPazZQ.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-BIJmNB2X.js";
//#region src/features/agents/composables/useCreateAgent.ts
/**
* The "new agent" action shared by every entry point (agents list, project
* header, empty state): mint the id up front so the "clicked" and "created"
* telemetry events join on it, report the click, then open the builder for it.
* The builder persists the agent lazily, on the first edit.
*/
function useCreateAgent() {
	const router = useRouter();
	const agentTelemetry = useAgentTelemetry();
	function createAgent(source, projectId) {
		const agentId = generateNanoId();
		agentTelemetry.trackClickedNewAgent(source, agentId);
		router.push({
			name: AGENT_BUILDER_VIEW,
			params: {
				projectId,
				agentId
			},
			state: { [PENDING_AGENT_ID_STATE]: agentId }
		});
	}
	return { createAgent };
}
//#endregion
export { useCreateAgent as t };

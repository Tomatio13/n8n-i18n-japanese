import { Fr as NEW_AGENT_VIEW } from "./constants-CyB1HP9v.js";
import { d as INSTANCE_AI_CREATE_AGENT_MODE_QUERY, h as INSTANCE_AI_PROJECT_ID_QUERY, p as INSTANCE_AI_PENDING_AGENT_ID_STATE, u as INSTANCE_AI_CREATE_AGENT_MODE_MANUAL } from "./constants-oMejWYMJ.js";
//#region src/features/ai/instanceAi/createAgentRoute.ts
/**
* `agentId` lets a caller that reports the click pin the agent the click will
* eventually produce. Omit it and the new-agent view mints its own.
* `manual` skips the Instance AI flow and opens the standalone builder.
*/
function instanceAiCreateAgentRoute(projectId, agentId, options) {
	return {
		name: NEW_AGENT_VIEW,
		query: {
			[INSTANCE_AI_PROJECT_ID_QUERY]: projectId,
			...options?.manual ? { [INSTANCE_AI_CREATE_AGENT_MODE_QUERY]: INSTANCE_AI_CREATE_AGENT_MODE_MANUAL } : {}
		},
		...agentId ? { state: { [INSTANCE_AI_PENDING_AGENT_ID_STATE]: agentId } } : {}
	};
}
//#endregion
export { instanceAiCreateAgentRoute as t };

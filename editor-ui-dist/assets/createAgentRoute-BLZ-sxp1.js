import { i as INSTANCE_AI_PROJECT_ID_QUERY, s as INSTANCE_AI_VIEW } from "./constants-B3_ETD15.js";
//#region src/features/ai/instanceAi/createAgentRoute.ts
function instanceAiCreateAgentRoute(projectId) {
	return {
		name: INSTANCE_AI_VIEW,
		query: { [INSTANCE_AI_PROJECT_ID_QUERY]: projectId }
	};
}
//#endregion
export { instanceAiCreateAgentRoute as t };

import { S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Fu as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT } from "./constants-nXXpkwjS.js";
import { g as usePostHog } from "./users.store-__96YzVi.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiMcpConnectionsExperiment as t };

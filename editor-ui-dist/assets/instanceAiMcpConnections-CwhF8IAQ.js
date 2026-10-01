import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { Xa as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT } from "./constants-xJAwzpHs.js";
import { t as usePostHog } from "./posthog.store-y0wHoxUE.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiMcpConnectionsExperiment as t };

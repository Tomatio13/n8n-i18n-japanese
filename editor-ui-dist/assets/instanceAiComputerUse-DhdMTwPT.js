import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ad as INSTANCE_AI_BROWSER_USE_EXPERIMENT, od as INSTANCE_AI_COMPUTER_USE_EXPERIMENT, sd as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT } from "./constants-DZ3uFLXZ.js";
import { g as usePostHog } from "./users.store-B2kV19El.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiBrowserUse/useInstanceAiBrowserUseExperiment.ts
function useInstanceAiBrowserUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_BROWSER_USE_EXPERIMENT.name) === INSTANCE_AI_BROWSER_USE_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiComputerUse/useInstanceAiComputerUseExperiment.ts
function useInstanceAiComputerUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_COMPUTER_USE_EXPERIMENT.name) === INSTANCE_AI_COMPUTER_USE_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiBrowserUseExperiment as n, useInstanceAiMcpConnectionsExperiment as r, useInstanceAiComputerUseExperiment as t };

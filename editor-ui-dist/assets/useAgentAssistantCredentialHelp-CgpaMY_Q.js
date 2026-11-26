import { Id as computed, Yo as useRoute, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { nd as useInstanceAiReady } from "./app-B_io1t1X.js";
import { t as agentsEventBus } from "./agents.eventBus-Cwm_O7xv.js";
//#region src/features/agents/composables/useAgentAssistantCredentialHelp.ts
init_runtime_core_esm_bundler();
function useAgentAssistantCredentialHelp() {
	const route = useRoute();
	const ready = useInstanceAiReady();
	const isAgentUi = computed(() => route?.name === "AgentBuilderView" || route?.name === "AgentPreviewView");
	function getCredentialHelp() {
		if (!ready.value || !isAgentUi.value) return void 0;
		const { projectId, agentId } = route.params;
		if (typeof projectId !== "string" || typeof agentId !== "string") return void 0;
		return async (credential) => {
			const request = {
				projectId,
				agentId,
				credential
			};
			agentsEventBus.emit("credentialHelpRequested", request);
			return await request.handle?.() ?? false;
		};
	}
	return {
		isAgentUi,
		getCredentialHelp
	};
}
//#endregion
export { useAgentAssistantCredentialHelp as t };

import { Id as computed, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { zM as useI18n } from "./app-B_io1t1X.js";
//#region src/features/agents/n8nChatPage/composables/useN8nAssistantIdentity.ts
init_runtime_core_esm_bundler();
/** How n8n Assistant shows up next to agents in the n8n Chat picker and library. */
function useN8nAssistantIdentity() {
	const i18n = useI18n();
	return {
		name: computed(() => i18n.baseText("instanceAi.view.title")),
		description: computed(() => i18n.baseText("agents.n8nChatPage.picker.assistantDescription"))
	};
}
//#endregion
export { useN8nAssistantIdentity as t };

import { Cd as computed } from "./vendor-C0K-pJCd.js";
import { Ny as AI_ASSISTANT_AT_MENTIONS_FLAG, dm as usePostHog } from "./app-Gcu_WcI0.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

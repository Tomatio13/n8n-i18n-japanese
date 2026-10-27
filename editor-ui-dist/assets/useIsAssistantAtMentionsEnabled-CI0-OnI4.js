import { Ed as computed } from "./vendor-DtL-V0ia.js";
import { Tx as AI_ASSISTANT_AT_MENTIONS_FLAG, kg as usePostHog } from "./app-BdR1u3Ua.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

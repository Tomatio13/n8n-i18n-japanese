import { Pd as computed } from "./vendor-D9HlBS7Y.js";
import { Gh as usePostHog, Lb as AI_ASSISTANT_AT_MENTIONS_FLAG } from "./app-TXEjHrLJ.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

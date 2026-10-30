import { Ed as computed } from "./vendor-z-loPfiR.js";
import { Mg as usePostHog, Ox as AI_ASSISTANT_AT_MENTIONS_FLAG } from "./app-CJdBXMVa.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

import { Nd as computed } from "./vendor-C1jTjpo6.js";
import { Sm as usePostHog, Vy as AI_ASSISTANT_AT_MENTIONS_FLAG } from "./app-C-V9N0hV.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

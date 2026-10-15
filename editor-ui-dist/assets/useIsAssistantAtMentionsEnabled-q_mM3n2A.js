import { Nd as computed } from "./vendor-LwB6jUFW.js";
import { Sm as usePostHog, Vy as AI_ASSISTANT_AT_MENTIONS_FLAG } from "./app-Ddu-psGf.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

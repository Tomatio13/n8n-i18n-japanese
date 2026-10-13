import { Nd as computed } from "./vendor-C1jTjpo6.js";
import { Hy as AI_ASSISTANT_AT_MENTIONS_FLAG, Sm as usePostHog } from "./app-C5zIGyiz.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

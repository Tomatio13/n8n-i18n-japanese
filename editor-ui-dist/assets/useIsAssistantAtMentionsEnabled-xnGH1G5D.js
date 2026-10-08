import { Cd as computed } from "./vendor-BdZVA4Px.js";
import { Ny as AI_ASSISTANT_AT_MENTIONS_FLAG, dm as usePostHog } from "./app-BLs7xE53.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

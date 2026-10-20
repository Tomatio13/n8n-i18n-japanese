import { Pd as computed } from "./vendor-BVSPIsYM.js";
import { Gh as usePostHog, Lb as AI_ASSISTANT_AT_MENTIONS_FLAG } from "./app-Ne537q-x.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

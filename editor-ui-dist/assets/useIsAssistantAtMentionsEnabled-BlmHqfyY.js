import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-BtpAr53w.js";
import { BC as AI_ASSISTANT_AT_MENTIONS_FLAG, Sv as usePostHog } from "./app-Dp0u0Hpe.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
init_runtime_core_esm_bundler();
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };

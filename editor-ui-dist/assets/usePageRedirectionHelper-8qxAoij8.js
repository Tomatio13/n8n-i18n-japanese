import { t as useBasePageRedirectionHelper } from "./useBasePageRedirectionHelper-B5hsAih2.js";
import { t as confirmIfBuilderStreaming } from "./useBuilderStreamingGuard-C1aJtVNv.js";
//#region src/app/composables/usePageRedirectionHelper.ts
/**
* App-facing `usePageRedirectionHelper`, pre-bound with the AI builder streaming
* guard so every upgrade CTA confirms before discarding an in-flight build.
*
* This wrapper is permanent, not a migration shim: the guard lives in the feature
* layer, and `@n8n/stores` — where the base composable now lives — must not reach
* into `features/ai/assistant`. Binding it here is what keeps that boundary clean.
*/
function usePageRedirectionHelper() {
	return useBasePageRedirectionHelper({ guard: confirmIfBuilderStreaming });
}
//#endregion
export { usePageRedirectionHelper as t };

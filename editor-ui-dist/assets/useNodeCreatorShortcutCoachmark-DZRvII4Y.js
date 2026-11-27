import { Id as computed, If as onScopeDispose, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-zYfdu4Ed.js";
import { $n as useCalloutHelpers, Yu as canvasEventBus } from "./app-BXv1VOvT.js";
//#region src/features/shared/nodeCreator/composables/useNodeCreatorShortcutCoachmark.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var NODE_CREATOR_SHORTCUT_COACHMARK_KEY = "node-creator-shortcut-coachmark";
function useNodeCreatorShortcutCoachmark() {
	const { isCalloutDismissed, dismissCallout } = useCalloutHelpers();
	const isTabPressed = ref(false);
	const shouldShowCoachmark = computed(() => {
		return isTabPressed.value && !isCalloutDismissed("node-creator-shortcut-coachmark");
	});
	function onDeprecatedTabShortcut() {
		isTabPressed.value = true;
	}
	canvasEventBus.on("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	onScopeDispose(() => {
		canvasEventBus.off("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	});
	async function onDismissCoachmark() {
		isTabPressed.value = false;
		await dismissCallout(NODE_CREATOR_SHORTCUT_COACHMARK_KEY);
	}
	return {
		shouldShowCoachmark,
		onDismissCoachmark
	};
}
//#endregion
export { useNodeCreatorShortcutCoachmark as n, NODE_CREATOR_SHORTCUT_COACHMARK_KEY as t };

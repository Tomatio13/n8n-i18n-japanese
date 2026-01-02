import { C as computed, It as ref } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { vt as useI18n } from "./_MapCache-B0Oimqnl.js";
import { gr as useCanvasStore, oa as useUIStore } from "./builder.store-Bf8BHc6B.js";
import { Ro as VIEWS } from "./constants-Ba2dQjnP.js";
function useBeforeUnload({ route }) {
	const uiStore = useUIStore();
	const canvasStore = useCanvasStore();
	const i18n = useI18n();
	const unloadTimeout = ref(null);
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	const handlers = [];
	function onBeforeUnload(e) {
		if (isDemoRoute.value || window.preventNodeViewBeforeUnload) return;
		handlers.forEach((handler) => handler());
		if (uiStore.stateIsDirty) {
			e.returnValue = true;
			return true;
		} else {
			canvasStore.startLoading(i18n.baseText("nodeView.redirecting"));
			return;
		}
	}
	function addBeforeUnloadHandler(handler) {
		handlers.push(handler);
	}
	function addBeforeUnloadEventBindings() {
		window.addEventListener("beforeunload", onBeforeUnload);
	}
	function removeBeforeUnloadEventBindings() {
		if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
		window.removeEventListener("beforeunload", onBeforeUnload);
	}
	return {
		onBeforeUnload,
		addBeforeUnloadEventBindings,
		removeBeforeUnloadEventBindings,
		addBeforeUnloadHandler
	};
}
export { useBeforeUnload as t };

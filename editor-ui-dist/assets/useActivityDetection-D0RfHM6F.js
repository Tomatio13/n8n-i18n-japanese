import { ld as useDebounceFn, nf as onMounted, rf as onUnmounted, vf as watch } from "./vendor-C1jTjpo6.js";
import { Cm as getDebounceTime, R_ as DEBOUNCE_TIME } from "./app-C5zIGyiz.js";
//#region src/app/composables/useActivityDetection.ts
function useActivityDetection(store) {
	const recordActivity = useDebounceFn(() => {
		store.recordActivity();
	}, getDebounceTime(DEBOUNCE_TIME.COLLABORATION.ACTIVITY));
	const events = [
		"mousedown",
		"keydown",
		"touchstart"
	];
	const attachListeners = () => {
		events.forEach((event) => {
			document.addEventListener(event, recordActivity, { passive: true });
		});
	};
	const detachListeners = () => {
		events.forEach((event) => {
			document.removeEventListener(event, recordActivity);
		});
	};
	watch(() => store.isCurrentTabWriter, (isWriter) => {
		if (isWriter) attachListeners();
		else detachListeners();
	});
	onMounted(() => {
		if (store.isCurrentTabWriter) attachListeners();
	});
	onUnmounted(() => {
		detachListeners();
	});
	return { recordActivity };
}
//#endregion
export { useActivityDetection as t };

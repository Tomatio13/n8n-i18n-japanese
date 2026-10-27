import { Xd as onUnmounted, Yd as onMounted, df as watch, nd as useDebounceFn } from "./vendor-DtL-V0ia.js";
import { Ag as getDebounceTime, fy as DEBOUNCE_TIME } from "./app-BdR1u3Ua.js";
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

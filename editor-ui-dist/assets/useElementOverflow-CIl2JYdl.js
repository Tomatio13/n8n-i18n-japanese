import { Cf as watch, Gu as useResizeObserver, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-zYfdu4Ed.js";
//#region ../@n8n/composables/src/useElementOverflow.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
/**
* Whether the content is clipped along one axis. Re-checks on resize and when `sources` change.
* The element may mount later or be swapped (`v-if`): the observer follows the ref.
*/
function useElementOverflow(element, axis, sources = []) {
	const isOverflowing = ref(false);
	const update = () => {
		const el = element.value;
		if (!el) {
			isOverflowing.value = false;
			return;
		}
		isOverflowing.value = axis === "x" ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight;
	};
	useResizeObserver(element, update);
	watch([element, ...sources], update, { flush: "post" });
	return {
		isOverflowing,
		update
	};
}
//#endregion
export { useElementOverflow as t };

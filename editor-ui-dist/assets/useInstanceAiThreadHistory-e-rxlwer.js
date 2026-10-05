import { It as ref, S as computed, X as onMounted, gt as watch, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { z as refDebounced } from "./dist-C4pFh3bs.js";
import "./constants-BFgNRWjM.js";
import { n as DEBOUNCE_TIME } from "./durations-DueaJvoh.js";
import { t as getDebounceTime } from "./useDebounce-DRI3mMad.js";
import { n as useInstanceAiStore } from "./instanceAi.store-DDp9JlLC.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BPHTIt4i.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiThreadHistory.ts
/**
* Server-side searched, cursor-paged chat list for one mounted list at a time.
* Bind `search` to the input, `listRef` to the scroll container and `sentinelRef` to an
* element after the last row. Loads on mount and clears the store state on unmount.
*/
function useInstanceAiThreadHistory() {
	const store = useInstanceAiStore();
	const history = computed(() => store.threadHistory);
	const search = ref("");
	const listRef = ref(null);
	const sentinelRef = ref(null);
	function loadMore() {
		store.loadThreadHistoryPage();
	}
	watch(refDebounced(search, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH)), (value) => {
		store.resetThreadHistory(value.trim());
		loadMore();
	});
	const { observe } = useIntersectionObserver({
		root: listRef,
		onIntersect: loadMore
	});
	watch([sentinelRef, () => history.value.loading], ([sentinel, loading]) => {
		if (sentinel && !loading) observe(sentinel);
	}, { flush: "post" });
	onMounted(loadMore);
	onBeforeUnmount(() => store.resetThreadHistory());
	return {
		history,
		search,
		listRef,
		sentinelRef,
		loadMore
	};
}
//#endregion
export { useInstanceAiThreadHistory as t };

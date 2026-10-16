import { Mf as ref, Nd as computed, ef as onBeforeUnmount, id as refDebounced, nf as onMounted, vf as watch } from "./vendor-LwB6jUFW.js";
import { Cm as getDebounceTime, R_ as DEBOUNCE_TIME, Sa as useInstanceAiStore } from "./app-6hFiMIk3.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-CwZPng0n.js";
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

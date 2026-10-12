import { Cd as computed, Ju as refDebounced, Kd as onMounted, Sf as ref, Wd as onBeforeUnmount, cf as watch } from "./vendor-C0K-pJCd.js";
import { O_ as DEBOUNCE_TIME, _a as useInstanceAiStore, fm as getDebounceTime } from "./app-Gcu_WcI0.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-CRf950iO.js";
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

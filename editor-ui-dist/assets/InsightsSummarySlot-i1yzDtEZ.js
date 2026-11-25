import { Jf as unref, Kd as defineComponent, Rd as createBlock, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { t as useInsightsStore } from "./insights.store-FWMdj0S9.js";
import { t as InsightsSummary_default } from "./InsightsSummary-Cf019qXU.js";
import "./src-Blnyi56T.js";
//#region src/features/collaboration/projects/components/InsightsSummarySlot.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/collaboration/projects/components/InsightsSummarySlot.vue
var InsightsSummarySlot_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsSummarySlot",
	setup(__props) {
		const insightsStore = useInsightsStore();
		onMounted(() => {
			if (insightsStore.isSummaryEnabled) insightsStore.weeklySummary.execute();
		});
		return (_ctx, _cache) => {
			return unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
				key: 0,
				loading: unref(insightsStore).weeklySummary.isLoading,
				summary: unref(insightsStore).weeklySummary.state,
				"time-range": "week"
			}, null, 8, ["loading", "summary"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { InsightsSummarySlot_default as default };

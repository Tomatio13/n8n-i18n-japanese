import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Mf as init_reactivity_esm_bundler, Vd as createCommentVNode, Yf as unref, ff as openBlock, lf as onMounted } from "./vendor-BtpAr53w.js";
import { t as useInsightsStore } from "./insights.store-ZLRjFRC4.js";
import { t as InsightsSummary_default } from "./InsightsSummary-Cx6xhxYM.js";
import "./src-DkWBqibj.js";
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

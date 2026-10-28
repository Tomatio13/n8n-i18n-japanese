import { Ed as computed, Id as defineComponent, Nf as unref, Od as createBlock, Qd as openBlock, l as index } from "./vendor-z-loPfiR.js";
import { FE as useI18n } from "./app-CqwplyU_.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-B4MjxVVV.js";
import { o as transformInsightsAverageRunTime } from "./insights.utils-BNRcv_AO.js";
import { t as smartDecimal } from "./smart-decimal-BjuW9V7L.js";
import { r as Line } from "./dist-3NGlP0gW.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-lMFIKRyt.js";
//#endregion
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartAverageRuntime.vue
var InsightsChartAverageRuntime_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartAverageRuntime",
	props: {
		data: {},
		type: {},
		granularity: {},
		startDate: {},
		endDate: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const chartOptions = computed(() => generateLineChartOptions({ plugins: { tooltip: { callbacks: { label: (context) => {
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
		} } } } }));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				const value = transformInsightsAverageRunTime(entry.values.averageRunTime);
				data.push(value);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.averageRunTime"),
					data,
					cubicInterpolationMode: "monotone",
					fill: "origin",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-average-runtime",
				data: chartData.value,
				options: chartOptions.value,
				plugins: [unref(index)]
			}, null, 8, [
				"data",
				"options",
				"plugins"
			]);
		};
	}
});
//#endregion
export { InsightsChartAverageRuntime_default as default };

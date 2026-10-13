import { Bf as unref, Fd as createBlock, Nd as computed, Ud as defineComponent, af as openBlock, l as index } from "./vendor-C1jTjpo6.js";
import { Ow as useI18n } from "./app-C5zIGyiz.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-WnEimcIw.js";
import { l as transformInsightsTimeSaved } from "./insights.utils-9ZS1vvvH.js";
import { r as Line } from "./dist-DsnGOOhQ.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-817lzSZ0.js";
//#endregion
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartTimeSaved.vue
var InsightsChartTimeSaved_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartTimeSaved",
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
		const chartOptions = computed(() => generateLineChartOptions({
			plugins: { tooltip: { callbacks: { label: (context) => {
				const label = context.dataset.label ?? "";
				const value = Number(context.parsed.y);
				return `${label} ${transformInsightsTimeSaved(value).toLocaleString("en-US")}${INSIGHTS_UNIT_MAPPING[props.type](value)}`;
			} } } },
			scales: { y: { ticks: { callback(tickValue) {
				return transformInsightsTimeSaved(Number(tickValue));
			} } } }
		}));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(entry.values.timeSaved);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.timeSaved"),
					data,
					fill: "origin",
					cubicInterpolationMode: "monotone",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-time-saved",
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
export { InsightsChartTimeSaved_default as default };

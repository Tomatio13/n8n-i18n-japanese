import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { l as useCssVar, ot as useI18n } from "./core-7u9zGY8N.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-BHI_Rf0_.js";
import { t as smartDecimal } from "./smartDecimal-BqxgcpD8.js";
import { t as Bar } from "./dist-DN_60rbD.js";
import { t as generateBarChartOptions } from "./chartjs.utils-BsP9pQJ1.js";
//#endregion
//#region src/features/execution/insights/components/charts/InsightsChartFailed.vue
var InsightsChartFailed_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartFailed",
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
		const colorPrimary = useCssVar("--color--primary", document.body);
		const chartOptions = computed(() => generateBarChartOptions({ plugins: { tooltip: { callbacks: { label: (context) => {
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}`;
		} } } } }));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(entry.values.failed);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.chart.failed"),
					data,
					backgroundColor: colorPrimary.value
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Bar), {
				"data-test-id": "insights-chart-failed",
				data: chartData.value,
				options: chartOptions.value
			}, null, 8, ["data", "options"]);
		};
	}
});
//#endregion
export { InsightsChartFailed_default as default };

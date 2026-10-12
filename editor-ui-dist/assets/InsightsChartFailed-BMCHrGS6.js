import { Af as unref, Cd as computed, Nd as defineComponent, Td as createBlock, Yd as openBlock, bu as useCssVar } from "./vendor-C0K-pJCd.js";
import { uw as useI18n } from "./app-Gcu_WcI0.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-DJ7nAh2-.js";
import { t as smartDecimal } from "./smart-decimal-BWQb0-8w.js";
import { t as Bar } from "./dist-BMcfi5Jc.js";
import { t as generateBarChartOptions } from "./chartjs.utils-DG0GW_WA.js";
//#endregion
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartFailed.vue
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

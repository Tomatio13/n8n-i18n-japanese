import { Ad as Fragment, Bd as createTextVNode, Bf as unref, Id as createCommentVNode, Ld as createElementBlock, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, as as useRoute, bf as withCtx, fp as toDisplayString, gd as I18nT, lf as resolveComponent, sf as renderList, sp as normalizeClass, wd as useCssModule } from "./vendor-LwB6jUFW.js";
import { Dw as useI18n, Q_ as useTelemetry, Sw as _plugin_vue_export_helper_default, Y_ as VIEWS, fw as N8nTooltip_default, yw as N8nIcon_default } from "./app-6hFiMIk3.js";
import { i as INSIGHTS_UNIT_IMPACT_MAPPING, o as INSIGHT_IMPACT_TYPES } from "./insights.constants-D53KSBeM.js";
import { i as getTimeRangeLabels, r as getMatchingPreset, t as formatDateRange } from "./insights.utils-DDVLY2p4.js";
import { t as smartDecimal } from "./smart-decimal-Dq6QIlqS.js";
//#region ../../modules/insights/frontend/src/components/InsightsSummary.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "insights-summary-tabs" };
var _hoisted_2 = ["data-test-id"];
var _hoisted_3 = ["href"];
var _hoisted_4 = { key: 1 };
var InsightsSummary_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsSummary",
	props: {
		summary: {},
		startDate: {},
		endDate: {},
		loading: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const route = useRoute();
		const $style = useCssModule();
		const telemetry = useTelemetry();
		const timeRangeLabels = getTimeRangeLabels();
		const displayDateRangeLabel = computed(() => {
			const timeRangeKey = getMatchingPreset({
				start: props.startDate,
				end: props.endDate
			});
			if (timeRangeKey) return timeRangeLabels[timeRangeKey];
			return formatDateRange({
				start: props.startDate,
				end: props.endDate
			});
		});
		const summaryTitles = computed(() => ({
			total: i18n.baseText("insights.banner.title.total"),
			failed: i18n.baseText("insights.banner.title.failed"),
			failureRate: i18n.baseText("insights.banner.title.failureRate"),
			timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
			averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
		}));
		const summaryHasNoData = computed(() => {
			const summaryValues = Object.values(props.summary);
			return summaryValues.length > 0 && summaryValues.every((summary) => !summary.value);
		});
		const summaryWithRouteLocations = computed(() => props.summary.map((s) => ({
			...s,
			to: {
				name: VIEWS.INSIGHTS,
				params: { insightType: s.id },
				query: route.query
			}
		})));
		const getImpactStyle = (id, value) => {
			const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
			if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) return $style.neutral;
			if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) return value > 0 ? $style.positive : $style.negative;
			if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) return value < 0 ? $style.positive : $style.negative;
			return $style.neutral;
		};
		const trackTabClick = (insightType) => {
			telemetry.track(`User clicked ${summaryTitles.value[insightType]}`, { referrer: route.name === VIEWS.INSIGHTS ? "Dashboard" : "Overview" });
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).insightsWrapper) }, [createBaseVNode("div", { class: normalizeClass(unref($style).insights) }, [createBaseVNode("ul", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(summaryWithRouteLocations.value, ({ id, value, deviation, deviationUnit, unit, to }) => {
				return openBlock(), createElementBlock("li", {
					key: id,
					"data-test-id": `insights-summary-tab-${id}`
				}, [createVNode(unref(N8nTooltip_default), {
					placement: unref(route).name === unref(VIEWS).INSIGHTS ? "bottom" : "top",
					disabled: !(summaryHasNoData.value && id === "total"),
					"show-after": 500
				}, {
					content: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "insights.banner.noData.tooltip",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: unref(i18n).baseText("insights.banner.noData.tooltip.link.url"),
							target: "_blank"
						}, toDisplayString(unref(i18n).baseText("insights.banner.noData.tooltip.link")), 9, _hoisted_3)]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to,
						"exact-active-class": unref($style).activeTab,
						onClick: ($event) => trackTabClick(id)
					}, {
						default: withCtx(() => [
							createBaseVNode("strong", null, [createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "timeSaved"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title.timeSaved.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(summaryTitles.value[id]), 1)]),
								_: 2
							}, 1032, ["disabled"])]),
							createBaseVNode("small", { class: normalizeClass(unref($style).days) }, toDisplayString(displayDateRangeLabel.value), 3),
							value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(unref($style).empty)
							}, [_cache[0] || (_cache[0] = createBaseVNode("em", null, "--", -1)), createBaseVNode("small", null, [createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
								content: withCtx(() => [createVNode(unref(I18nT), {
									keypath: "insights.banner.timeSaved.tooltip",
									scope: "global"
								}, {
									link: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)]),
									_: 1
								})]),
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									class: normalizeClass(unref($style).icon),
									icon: "info",
									size: "medium"
								}, null, 8, ["class"])]),
								_: 1
							})])], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, [createBaseVNode("em", null, [createTextVNode(toDisplayString(unref(smartDecimal)(value).toLocaleString("en-US")) + " ", 1), createBaseVNode("i", null, toDisplayString(unit), 1)]), deviation !== null ? (openBlock(), createElementBlock("small", {
								key: 0,
								class: normalizeClass(getImpactStyle(id, deviation))
							}, [createVNode(unref(N8nIcon_default), {
								class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
								icon: deviation === 0 ? "chevron-right" : deviation > 0 ? "chevron-up" : "chevron-down"
							}, null, 8, ["class", "icon"]), createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "failureRate"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.failureRate.deviation.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(smartDecimal)(Math.abs(deviation)).toLocaleString("en-US")) + toDisplayString(deviationUnit), 1)]),
								_: 2
							}, 1032, ["disabled"])], 2)) : createCommentVNode("", true)]))
						]),
						_: 2
					}, 1032, [
						"to",
						"exact-active-class",
						"onClick"
					])]),
					_: 2
				}, 1032, ["placement", "disabled"])], 8, _hoisted_2);
			}), 128))])], 2)], 2);
		};
	}
});
var InsightsSummary_vue_vue_type_style_index_0_lang_module_default = {
	insightsWrapper: "_insightsWrapper_1e7xc_1",
	insights: "_insights_1e7xc_1",
	activeTab: "_activeTab_1e7xc_49",
	days: "_days_1e7xc_62",
	empty: "_empty_1e7xc_73",
	icon: "_icon_1e7xc_84",
	noData: "_noData_1e7xc_114",
	positive: "_positive_1e7xc_119",
	negative: "_negative_1e7xc_123",
	neutral: "_neutral_1e7xc_127",
	loading: "_loading_1e7xc_142",
	queueModeWarning: "_queueModeWarning_1e7xc_153",
	underlined: "_underlined_1e7xc_159"
};
var InsightsSummary_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsSummary_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsSummary_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsSummary_default as t };

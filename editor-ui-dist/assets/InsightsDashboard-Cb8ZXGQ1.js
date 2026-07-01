const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-DK2VxYn8.js","assets/_plugin-vue_export-helper-CRUgzHrM.js","assets/src-BlcBUV6L.js","assets/chunk-CC9Q-vWm.js","assets/get-qaES6ZIq.js","assets/_MapCache-BeI7RFXl.js","assets/vue.runtime.esm-bundler-CDDUUZhE.js","assets/CalendarDate-BSqfMJxT.js","assets/core-Sj5ESywy.js","assets/sanitize-html-DjMz7PQS.js","assets/empty-ZVkPP5Jz.js","assets/en-tsO72ocl.js","assets/src-CMDIc5kj.css","assets/src-CYroLbRZ.js","assets/usePageRedirectionHelper-Dgnfgiy5.js","assets/constants-DrSqIb_p.js","assets/merge-Bp2f9-FX.js","assets/expression-runtime-stub-X9-C4MqC.js","assets/settings.store-BGVx_7U7.js","assets/useRootStore-ZXuABwK6.js","assets/useMessage-Bjw3LGB-.js","assets/workflowDocument.store-lGuYnDs8.js","assets/_baseOrderBy-CQq6nPpO.js","assets/useDebounce-aZ_oztCT.js","assets/useDocumentTitle-BqFJTSWN.js","assets/users.store-CBk8qdbo.js","assets/workflowsList.store-CmhwCxTs.js","assets/dateformat-BcDx-k02.js","assets/overlay-Dn5zQyli.js","assets/builder.store-DHFA-Y_8.js","assets/useToast-DfOkl2Do.js","assets/useExternalHooks-Dkdz52DV.js","assets/useStyles-KGrmo28r.js","assets/FileSaver.min-CX2lIQVz.js","assets/dist-Cn4ms0hY.js","assets/useCodeDiff-DbnyJs9_.js","assets/event-bus-yioBhAa7.js","assets/useNodeHelpers-hijFircr.js","assets/useLoadingService-DbSqgXLY.js","assets/usePrivateCredentials-DsjG64UW.js","assets/focusPanel.store-BQb2HDX0.js","assets/templates.store-BvuOhLwy.js","assets/cloudPlan.store-V4r7gk--.js","assets/utils-C9nF4SbS.js","assets/versions.store-_KtsJD2K.js","assets/InsightsPaywall-BgF1_jwg.css","assets/InsightsChartTotal-CDbUu0i_.js","assets/dist-uCAg1U_G.js","assets/chart-dJdA7qKu.js","assets/chartjs.utils-C6ybqSBa.js","assets/smartDecimal-B78m7_qJ.js","assets/insights.constants-D-fO5kKJ.js","assets/InsightsChartFailed-7d3RvibV.js","assets/InsightsChartFailureRate-CuagReoM.js","assets/insights.utils-BdCNngoO.js","assets/InsightsChartTimeSaved-DlaD5Sxu.js","assets/InsightsChartAverageRuntime-DKXyvxlq.js","assets/InsightsTableWorkflows-BPC0a-Hi.js","assets/InsightsTableWorkflows-MTZz-k0w.css"])))=>i.map(i=>d[i]);
import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { c as useI18n } from "./src-CYroLbRZ.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, P as N8nSpinner_default, Ya as N8nIcon_default, _ as DateRangePicker_default, gt as useRoute, qa as N8nText_default } from "./src-BlcBUV6L.js";
import { d as __vitePreload } from "./get-qaES6ZIq.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CRUgzHrM.js";
import { g as $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3, h as $14e0f24ef4ac5c92$export$aa8b41735afcabd2, u as $14e0f24ef4ac5c92$export$629b0a497aa65267 } from "./CalendarDate-BSqfMJxT.js";
import { t as ElDialog } from "./dialog-kWBVCiki.js";
import { xn as useProjectsStore, yn as useAvailableProjectSearch } from "./workflowDocument.store-lGuYnDs8.js";
import { p as useTelemetry } from "./users.store-CBk8qdbo.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BqFJTSWN.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Dgnfgiy5.js";
import { t as ProjectSharing_default } from "./ProjectSharing-Dd0Ff0ut.js";
import { t as useInsightsStore } from "./insights.store-O2UVZk2_.js";
import { s as INSIGHT_TYPES } from "./insights.constants-D-fO5kKJ.js";
import { a as timeRangeMappings, i as getTimeRangeLabels, n as getAdjustedDateRange, t as formatDateRange } from "./insights.utils-BdCNngoO.js";
import { t as InsightsSummary_default } from "./InsightsSummary-i4qW7fIF.js";
//#region src/features/execution/insights/components/InsightsUpgradeModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "perks-list" };
var _hoisted_2 = { class: "insight-modal-button-container" };
//#endregion
//#region src/features/execution/insights/components/InsightsUpgradeModal.vue
var InsightsUpgradeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InsightsUpgradeModal",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const i18n = useI18n();
		function goToUpgrade() {
			model.value = false;
			usePageRedirectionHelper().goToUpgrade("insights", "upgrade-insights");
		}
		const perks = computed(() => [...Array(3).keys()].map((index) => i18n.baseText(`insights.upgradeModal.perks.${index}`)));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: model.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
				title: unref(i18n).baseText("insights.upgradeModal.title"),
				width: "500"
			}, {
				footer: withCtx(() => [createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: _cache[0] || (_cache[0] = ($event) => model.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.button.dismiss")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})])]),
				default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
					tag: "p",
					class: "mb-s"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.content")), 1)]),
					_: 1
				}), createBaseVNode("ul", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(perks.value, (perk) => {
					return openBlock(), createBlock(unref(N8nText_default), {
						key: perk,
						color: "text-dark",
						tag: "li"
					}, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 16 16",
							width: "16px",
							height: "16px"
						}, [createBaseVNode("path", {
							d: "M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z M 3.97 9.03 L 5.97 11.03 L 6.5 11.561 L 7.03 11.03 L 12.53 5.53 L 11.47 4.47 L 6.5 9.439 L 5.03 7.97 L 3.97 9.03 Z",
							fill: "currentColor"
						})], -1)), createTextVNode(" " + toDisplayString(perk), 1)]),
						_: 2
					}, 1024);
				}), 128))])])]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
}), [["__scopeId", "data-v-fdfc14aa"]]);
//#endregion
//#region src/features/execution/insights/components/InsightsDataRangePicker.vue?vue&type=script&setup=true&lang.ts
var InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsDataRangePicker",
	props: {
		maxValue: {},
		minValue: {},
		modelValue: {},
		presets: {}
	},
	emits: [
		"update:modelValue",
		"update:placeholder",
		"update:startValue",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const telemetry = useTelemetry();
		const upgradeModal = ref(false);
		function showUpgradeModal() {
			upgradeModal.value = true;
		}
		const actionType = ref("custom");
		function getDaysDiff({ start, end }) {
			if (!start) return 0;
			if (!end) return 0;
			return end.compare(start);
		}
		function isBeforeOrSame(dateToCompare, referenceDate) {
			return dateToCompare.compare(referenceDate) <= 0;
		}
		function isAfterOrSame(dateToCompare, referenceDate) {
			return dateToCompare.compare(referenceDate) >= 0;
		}
		function isEqual(dateToCompare, referenceDate) {
			if (!dateToCompare || !referenceDate) return false;
			return dateToCompare.compare(referenceDate) === 0;
		}
		function isValidDateRange({ start, end }) {
			if (!start) return false;
			if (!end) return false;
			return isBeforeOrSame(end, props.maxValue) && isAfterOrSame(start, props.minValue);
		}
		const range = shallowRef({
			start: props.modelValue.start?.copy(),
			end: props.modelValue.end?.copy()
		});
		function syncWithParentValue() {
			if (!isEqual(range.value?.start, props.modelValue.start) || !isEqual(range.value?.end, props.modelValue.end)) range.value = {
				start: props.modelValue.start?.copy(),
				end: props.modelValue.end?.copy()
			};
		}
		let lastSyncedRange = null;
		function syncData(isOpen) {
			if (isOpen) {
				syncWithParentValue();
				return;
			}
			const normalizedRange = {
				start: range.value?.start?.copy(),
				end: range.value?.end?.copy() ?? range.value?.start?.copy()
			};
			if (!isValidDateRange(normalizedRange)) {
				console.error("Invalid date range selected", normalizedRange);
				syncWithParentValue();
				return;
			}
			if (lastSyncedRange && isEqual(normalizedRange.start, lastSyncedRange.start) && isEqual(normalizedRange.end, lastSyncedRange.end)) return;
			if (isEqual(normalizedRange.start, props.modelValue.start) && isEqual(normalizedRange.end, props.modelValue.end)) return;
			lastSyncedRange = normalizedRange;
			emit("update:modelValue", normalizedRange);
			const { startDate, endDate } = getAdjustedDateRange(normalizedRange);
			const trackData = {
				start_date: startDate.toISOString(),
				end_date: endDate.toISOString(),
				range_length_days: getDaysDiff(normalizedRange),
				type: actionType.value
			};
			telemetry.track("User updated insights time range", trackData);
		}
		const open = ref(false);
		watch(open, (opened) => {
			if (opened) actionType.value = "custom";
			syncData(opened);
		});
		function setPresetRange(days) {
			range.value = {
				start: props.maxValue.copy().subtract({ days }),
				end: props.maxValue.copy()
			};
			actionType.value = "preset";
			open.value = false;
		}
		const formattedRange = computed(() => {
			const { start, end } = props.modelValue;
			if (!start) return "Select range";
			return formatDateRange({
				start,
				end
			});
		});
		function isActiveRange(presetValue) {
			if (!$14e0f24ef4ac5c92$export$629b0a497aa65267(props.modelValue.end, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())) return false;
			return props.modelValue.end.compare(props.modelValue.start) === presetValue;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(DateRangePicker_default), {
				modelValue: range.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => range.value = $event),
				open: open.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event),
				"max-value": __props.maxValue,
				"min-value": __props.minValue
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					icon: "calendar"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedRange.value), 1)]),
					_: 1
				})]),
				presets: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.presets, (preset) => {
					return openBlock(), createBlock(unref(N8nButton_default), {
						key: preset.value,
						class: normalizeClass(_ctx.$style.PresetButton),
						variant: isActiveRange(preset.value) ? "solid" : "outline",
						size: "small",
						onClick: ($event) => preset.disabled ? showUpgradeModal() : setPresetRange(preset.value)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(preset.label) + " ", 1), preset.disabled ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "lock",
							class: normalizeClass(_ctx.$style.LockIcon)
						}, null, 8, ["class"])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, [
						"class",
						"variant",
						"onClick"
					]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"open",
				"max-value",
				"min-value"
			]), createVNode(InsightsUpgradeModal_default, {
				modelValue: upgradeModal.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => upgradeModal.value = $event)
			}, null, 8, ["modelValue"])], 64);
		};
	}
});
var InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default = {
	PresetButton: "_PresetButton_1waws_2",
	LockIcon: "_LockIcon_1waws_7"
};
var InsightsDataRangePicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/insights/components/InsightsDashboard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "mt-s",
	style: {
		"display": "flex",
		"gap": "12px",
		"align-items": "center"
	}
};
var InsightsDashboard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsDashboard",
	props: { insightType: {} },
	setup(__props) {
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-DK2VxYn8.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45])));
		const InsightsChartTotal = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTotal-CDbUu0i_.js"), __vite__mapDeps([46,13,6,3,8,5,47,48,49,16,50,51,27])));
		const InsightsChartFailed = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailed-7d3RvibV.js"), __vite__mapDeps([52,13,6,3,8,5,47,48,50,49,16,51,27])));
		const InsightsChartFailureRate = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailureRate-CuagReoM.js"), __vite__mapDeps([53,13,6,3,8,5,47,48,50,49,16,51,27,54,7])));
		const InsightsChartTimeSaved = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTimeSaved-DlaD5Sxu.js"), __vite__mapDeps([55,13,6,3,48,47,49,8,5,16,50,51,27,54,7])));
		const InsightsChartAverageRuntime = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartAverageRuntime-DKXyvxlq.js"), __vite__mapDeps([56,13,6,3,48,47,50,49,8,5,16,51,27,54,7])));
		const InsightsTableWorkflows = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsTableWorkflows-BPC0a-Hi.js"), __vite__mapDeps([57,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,50,25,19,18,23,51,27,54,58])));
		const props = __props;
		const route = useRoute();
		const i18n = useI18n();
		const insightsStore = useInsightsStore();
		const projectsStore = useProjectsStore();
		const isTimeSavedRoute = computed(() => route.params.insightType === INSIGHT_TYPES.TIME_SAVED);
		const chartComponents = computed(() => ({
			total: InsightsChartTotal,
			failed: InsightsChartFailed,
			failureRate: InsightsChartFailureRate,
			timeSaved: InsightsChartTimeSaved,
			averageRunTime: InsightsChartAverageRuntime
		}));
		const transformFilter = ({ id, desc }) => {
			return `${id}:${desc ? "desc" : "asc"}`;
		};
		const sortTableBy = ref([{
			id: props.insightType,
			desc: true
		}]);
		const granularity = computed(() => {
			const { start, end } = range.value;
			if (!start || !end) return "day";
			const comparison = end.compare(start);
			if (comparison <= 0) return "hour";
			if (comparison <= 30) return "day";
			return "week";
		});
		const selectedProject = ref(null);
		const maxDate = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
		const maxLicensedDate = insightsStore.dateRanges.toReversed().find((dateRange) => dateRange.licensed)?.key ?? "week";
		const timeRangeLabels = getTimeRangeLabels();
		const presets = computed(() => insightsStore.dateRanges.map((item) => {
			return {
				value: timeRangeMappings[item.key],
				label: timeRangeLabels[item.key],
				disabled: !item.licensed
			};
		}));
		const maximumValue = shallowRef(maxDate.copy());
		const minimumValue = shallowRef(maxDate.copy().subtract({ days: timeRangeMappings[maxLicensedDate] }));
		const range = shallowRef({
			start: maxDate.copy().subtract({ days: 7 }),
			end: maxDate.copy()
		});
		/**
		* Converts the range to adjusted Date objects for API calls
		*/
		const getFilteredRange = () => {
			return getAdjustedDateRange(range.value);
		};
		const fetchPaginatedTableData = ({ page = 0, itemsPerPage = 25, sortBy, projectId = selectedProject.value?.id }) => {
			const skip = page * itemsPerPage;
			const take = itemsPerPage;
			const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
			const { startDate, endDate } = getFilteredRange();
			insightsStore.table.execute(0, {
				skip,
				take,
				sortBy: sortKey,
				startDate,
				endDate,
				projectId
			});
		};
		watch(() => [
			props.insightType,
			selectedProject.value,
			range.value
		], () => {
			sortTableBy.value = [{
				id: props.insightType,
				desc: true
			}];
			const { startDate, endDate } = getFilteredRange();
			if (insightsStore.isSummaryEnabled) insightsStore.summary.execute(0, {
				startDate,
				endDate,
				projectId: selectedProject.value?.id
			});
			insightsStore.charts.execute(0, {
				startDate,
				endDate,
				projectId: selectedProject.value?.id
			});
			if (insightsStore.isDashboardEnabled) fetchPaginatedTableData({
				sortBy: sortTableBy.value,
				projectId: selectedProject.value?.id
			});
		}, { immediate: true });
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("insights.heading"));
		});
		const emailPattern = /^<([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})>$/;
		const searchFn = useAvailableProjectSearch();
		const filterFn = (project) => !!project.name && !emailPattern.test(project.name.trim());
		onBeforeMount(async () => {
			if (!projectsStore.globalProjectPermissions.list) await projectsStore.getAvailableProjects();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.insightsView) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsContainer) }, [
				createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", _hoisted_1, [createVNode(ProjectSharing_default, {
					modelValue: selectedProject.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedProject.value = $event),
					"search-fn": unref(searchFn),
					"filter-fn": filterFn,
					placeholder: unref(i18n).baseText("insights.dashboard.search.placeholder"),
					"empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects"),
					size: "mini",
					class: normalizeClass(_ctx.$style.projectSelect),
					clearable: "",
					onClear: _cache[1] || (_cache[1] = ($event) => selectedProject.value = null)
				}, null, 8, [
					"modelValue",
					"search-fn",
					"placeholder",
					"empty-options-text",
					"class"
				]), createVNode(InsightsDataRangePicker_default, {
					modelValue: range.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => range.value = $event),
					"max-value": maximumValue.value,
					"min-value": minimumValue.value,
					presets: presets.value
				}, null, 8, [
					"modelValue",
					"max-value",
					"min-value",
					"presets"
				])]),
				unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
					key: 0,
					summary: unref(insightsStore).summary.state,
					loading: unref(insightsStore).summary.isLoading,
					"start-date": range.value.start,
					"end-date": range.value.end,
					class: normalizeClass(_ctx.$style.insightsBanner)
				}, null, 8, [
					"summary",
					"loading",
					"start-date",
					"end-date",
					"class"
				])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsContent) }, [unref(insightsStore).isDashboardEnabled || isTimeSavedRoute.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.insightsContentWrapper)
				}, [
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.dataLoader, { [_ctx.$style.isDataLoading]: unref(insightsStore).charts.isLoading || unref(insightsStore).table.isLoading }]) }, [createVNode(unref(N8nSpinner_default)), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsChartWrapper) }, [createVNode(unref(N8nHeading_default), {
						bold: "",
						tag: "h3",
						size: "medium",
						class: "mb-s"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.chart.title", { interpolate: { granularity: granularity.value } })), 1)]),
						_: 1
					}), (openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
						type: props.insightType,
						data: unref(insightsStore).charts.state,
						granularity: granularity.value,
						"start-date": range.value.start.toString(),
						"end-date": range.value.end.toString()
					}, null, 8, [
						"type",
						"data",
						"granularity",
						"start-date",
						"end-date"
					]))], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsTableWrapper) }, [createVNode(unref(InsightsTableWorkflows), {
						"sort-by": sortTableBy.value,
						"onUpdate:sortBy": _cache[3] || (_cache[3] = ($event) => sortTableBy.value = $event),
						data: unref(insightsStore).table.state,
						loading: unref(insightsStore).table.isLoading,
						"is-dashboard-enabled": unref(insightsStore).isDashboardEnabled,
						"onUpdate:options": fetchPaginatedTableData
					}, null, 8, [
						"sort-by",
						"data",
						"loading",
						"is-dashboard-enabled"
					])], 2)
				], 2)) : (openBlock(), createBlock(unref(InsightsPaywall), { key: 1 }))], 2)
			], 2)], 2);
		};
	}
});
var InsightsDashboard_vue_vue_type_style_index_0_lang_module_default = {
	insightsView: "_insightsView_vh5lw_125",
	insightsContainer: "_insightsContainer_vh5lw_133",
	insightsBanner: "_insightsBanner_vh5lw_140",
	insightsContent: "_insightsContent_vh5lw_148",
	insightsContentWrapper: "_insightsContentWrapper_vh5lw_157",
	insightsChartWrapper: "_insightsChartWrapper_vh5lw_162",
	insightsTableWrapper: "_insightsTableWrapper_vh5lw_169",
	dataLoader: "_dataLoader_vh5lw_175",
	isDataLoading: "_isDataLoading_vh5lw_188",
	projectSelect: "_projectSelect_vh5lw_210",
	PresetButton: "_PresetButton_vh5lw_217"
};
var InsightsDashboard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsDashboard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsDashboard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsDashboard_default as default };

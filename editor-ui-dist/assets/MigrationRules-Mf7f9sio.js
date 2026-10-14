import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { Ad as Fragment, Bd as createTextVNode, Bf as unref, D as require_orderBy, Du as useAsyncState, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, cf as renderSlot, fp as toDisplayString, gd as I18nT, lp as normalizeStyle, sf as renderList, sp as normalizeClass, wd as useCssModule } from "./vendor-C1jTjpo6.js";
import { Dw as useI18n, Io as TimeAgo_default, NS as N8nTabs_default, QS as SettingsRow_default, Sw as _plugin_vue_export_helper_default, XS as SettingsRowGroup_default, Y_ as VIEWS, eC as SettingsPageHeader_default, fw as N8nTooltip_default, hn as refreshReport, iw as N8nLoading_default, nv as useRootStore, pn as getReport, tC as SettingsLayout_default, uw as N8nText_default, vd as useDocumentTitle, vw as N8nButton_default, xC as N8nLink_default, yw as N8nIcon_default } from "./app-C-V9N0hV.js";
import { t as ImpactTag_default } from "./ImpactTag-DbCzL56B.js";
//#region src/features/settings/migrationReport/components/EmptyTab.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var EmptyTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EmptyTab",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.NoIssuesContainer) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "large",
				color: "text-base",
				class: "mb-2xs"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
				_: 3
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "medium",
				color: "text-light",
				class: "mb-2xl"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "description")]),
				_: 3
			})], 2);
		};
	}
});
var EmptyTab_vue_vue_type_style_index_0_lang_module_default = { NoIssuesContainer: "_NoIssuesContainer_1o8ra_2" };
var EmptyTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/migrationReport/MigrationRules.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-valuenow", "aria-label"];
var MigrationRules_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRules",
	setup(__props) {
		const $style = useCssModule();
		const rootStore = useRootStore();
		const i18n = useI18n();
		useDocumentTitle().set(i18n.baseText("settings.migrationReport"));
		const currentTab = ref("workflow-issues");
		const versionQuery = { version: "v3" };
		const targetVersionMajor = "v3"?.slice(1) ?? "2";
		const targetVersionDisplay = `${targetVersionMajor}.0.0`;
		const documentationUrl = `https://docs.n8n.io/${targetVersionMajor}-0-breaking-changes/`;
		const { state, isLoading, execute } = useAsyncState(async (refresh = false) => {
			if (refresh) {
				const response = await refreshReport(rootStore.restApiContext, versionQuery);
				if (response.report.workflowResults.length === 0 && response.report.instanceResults.length > 0) currentTab.value = "instance-issues";
				return response;
			}
			return await getReport(rootStore.restApiContext, versionQuery);
		}, void 0);
		async function refreshReport$1() {
			await execute(0, true);
		}
		const tabs = computed(() => {
			return [{
				label: i18n.baseText("settings.migrationReport.tabs.workflowIssues"),
				value: "workflow-issues",
				tag: state.value?.report.workflowResults.length ? String(state.value.report.workflowResults.length) : void 0
			}, {
				label: i18n.baseText("settings.migrationReport.tabs.instanceIssues"),
				value: "instance-issues",
				tag: state.value?.report.instanceResults.length ? String(state.value.report.instanceResults.length) : void 0
			}];
		});
		const workflowTooltips = computed(() => ({
			upgradeBlocked: i18n.baseText("settings.migrationReport.workflowTooltip.upgradeBlocked"),
			executionsFail: i18n.baseText("settings.migrationReport.workflowTooltip.executionsFail"),
			behaviorChanges: i18n.baseText("settings.migrationReport.workflowTooltip.behaviorChanges"),
			capabilityRemoved: i18n.baseText("settings.migrationReport.workflowTooltip.capabilityRemoved")
		}));
		const instanceTooltips = computed(() => ({
			upgradeBlocked: i18n.baseText("settings.migrationReport.instanceTooltip.upgradeBlocked"),
			executionsFail: i18n.baseText("settings.migrationReport.instanceTooltip.executionsFail"),
			behaviorChanges: i18n.baseText("settings.migrationReport.instanceTooltip.behaviorChanges"),
			capabilityRemoved: i18n.baseText("settings.migrationReport.instanceTooltip.capabilityRemoved")
		}));
		const compatibleWorkflowsCount = computed(() => {
			if (!state.value) return 0;
			return state.value.totalWorkflows - state.value.totalAffectedWorkflows;
		});
		const compatiblePercentage = computed(() => {
			const total = state.value?.totalWorkflows ?? 0;
			if (total === 0) return 0;
			return Math.floor(compatibleWorkflowsCount.value / total * 100);
		});
		const progressLabel = computed(() => i18n.baseText("settings.migrationReport.progress.label", { interpolate: {
			compatibleCount: compatibleWorkflowsCount.value.toLocaleString(),
			totalCount: (state.value?.totalWorkflows ?? 0).toLocaleString()
		} }));
		const impactOrder = {
			upgradeBlocked: 0,
			executionsFail: 1,
			behaviorChanges: 2,
			capabilityRemoved: 3
		};
		const sortedWorkflowResults = computed(() => {
			if (!state.value?.report.workflowResults) return [];
			return (0, import_orderBy.default)(state.value.report.workflowResults, [(issue) => impactOrder[issue.ruleImpact]], ["asc"]);
		});
		const sortedInstanceResults = computed(() => {
			if (!state.value?.report.instanceResults) return [];
			return (0, import_orderBy.default)(state.value.report.instanceResults, [(issue) => impactOrder[issue.ruleImpact]], ["asc"]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), null, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("settings.migrationReport"),
					description: unref(i18n).baseText("settings.migrationReport.description", { interpolate: {
						compatibleCount: compatibleWorkflowsCount.value.toLocaleString(),
						totalCount: (unref(state)?.totalWorkflows ?? 0).toLocaleString(),
						version: targetVersionDisplay
					} }),
					"docs-url": documentationUrl,
					"docs-label": unref(i18n).baseText("settings.migrationReport.documentationLink"),
					"docs-leading-text": ""
				}, null, 8, [
					"title",
					"description",
					"docs-label"
				]), createBaseVNode("div", null, [
					unref(state) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style).Progress)
					}, [createBaseVNode("div", {
						class: normalizeClass(unref($style).ProgressTrack),
						role: "progressbar",
						"aria-valuenow": compatiblePercentage.value,
						"aria-valuemin": "0",
						"aria-valuemax": "100",
						"aria-label": progressLabel.value,
						"data-test-id": "migration-report-progress"
					}, [createBaseVNode("div", {
						class: normalizeClass(unref($style).ProgressFill),
						style: normalizeStyle({ width: `${compatiblePercentage.value}%` })
					}, null, 6)], 10, _hoisted_1), createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base",
						class: normalizeClass(unref($style).NoLineBreak)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(progressLabel.value), 1)]),
						_: 1
					}, 8, ["class"])], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(unref($style).ActionBar) }, [createVNode(unref(N8nTabs_default), {
						modelValue: currentTab.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
						options: tabs.value,
						variant: "modern"
					}, null, 8, ["modelValue", "options"]), createBaseVNode("div", { class: normalizeClass(unref($style).RefreshGroup) }, [unref(state)?.report.generatedAt ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-light",
						"data-test-id": "migration-report-last-synced"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.migrationReport.lastSynced",
							tag: "span",
							scope: "global"
						}, {
							time: withCtx(() => [createVNode(TimeAgo_default, { date: unref(state).report.generatedAt.toString() }, null, 8, ["date"])]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
						variant: "subtle",
						label: unref(i18n).baseText("settings.migrationReport.refreshButton"),
						icon: "refresh-cw",
						loading: unref(isLoading),
						disabled: unref(isLoading),
						onClick: refreshReport$1
					}, null, 8, [
						"label",
						"loading",
						"disabled"
					])], 2)], 2),
					unref(isLoading) ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(4, (i) => {
							return createVNode(unref(SettingsRow_default), { key: i }, {
								info: withCtx(() => [createVNode(unref(N8nLoading_default), {
									variant: "p",
									rows: 3,
									class: normalizeClass(unref($style).PLoading)
								}, null, 8, ["class"])]),
								action: withCtx(() => [createVNode(unref(N8nLoading_default), { variant: "button" })]),
								_: 1
							});
						}), 64))]),
						_: 1
					})) : currentTab.value === "workflow-issues" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(state)?.report.workflowResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
						title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.title")), 1)]),
						description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.description", { interpolate: { version: targetVersionDisplay } })), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedWorkflowResults.value, (issue) => {
							return openBlock(), createBlock(unref(SettingsRow_default), { key: issue.ruleId }, {
								info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), {
									tag: "h3",
									size: "medium",
									color: "text-dark"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
									_: 2
								}, 1024), createVNode(unref(N8nTooltip_default), {
									content: workflowTooltips.value[issue.ruleImpact],
									placement: "top",
									enterable: false
								}, {
									default: withCtx(() => [createVNode(ImpactTag_default, { impact: issue.ruleImpact }, null, 8, ["impact"])]),
									_: 2
								}, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
									tag: "p",
									color: "text-base"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + toDisplayString(issue.ruleDescription.endsWith(".") ? "" : ".") + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
										key: 0,
										theme: "text",
										href: issue.ruleDocumentationUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										class: normalizeClass(unref($style).NoLineBreak)
									}, {
										default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[1] || (_cache[1] = createTextVNode(" ↗ ", -1))]),
										_: 1
									}, 8, ["href", "class"])) : createCommentVNode("", true)]),
									_: 2
								}, 1024)]),
								action: withCtx(() => [createVNode(unref(N8nLink_default), {
									class: normalizeClass(unref($style).NoLineBreak),
									theme: "text",
									to: {
										name: unref(VIEWS).MIGRATION_RULE_REPORT,
										params: { migrationRuleId: issue.ruleId }
									}
								}, {
									default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).NoLineBreak) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.workflowsCount", { interpolate: { count: issue.nbAffectedWorkflows } })) + " ", 1), createVNode(unref(N8nIcon_default), {
										icon: "chevron-right",
										size: 24
									})], 2)]),
									_: 2
								}, 1032, ["class", "to"])]),
								_: 2
							}, 1024);
						}), 128))]),
						_: 1
					}))], 64)) : currentTab.value === "instance-issues" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [unref(state)?.report.instanceResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
						title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.title")), 1)]),
						description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.description", { interpolate: { version: targetVersionDisplay } })), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedInstanceResults.value, (issue) => {
							return openBlock(), createBlock(unref(SettingsRow_default), { key: issue.ruleId }, {
								info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), { tag: "h3" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
									_: 2
								}, 1024), createVNode(unref(N8nTooltip_default), {
									content: instanceTooltips.value[issue.ruleImpact],
									placement: "top",
									enterable: false
								}, {
									default: withCtx(() => [createVNode(ImpactTag_default, { impact: issue.ruleImpact }, null, 8, ["impact"])]),
									_: 2
								}, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
									tag: "p",
									color: "text-base"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + toDisplayString(issue.ruleDescription.endsWith(".") ? "" : ".") + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
										key: 0,
										theme: "text",
										href: issue.ruleDocumentationUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										class: normalizeClass(unref($style).NoLineBreak)
									}, {
										default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[2] || (_cache[2] = createTextVNode(" ↗ ", -1))]),
										_: 1
									}, 8, ["href", "class"])) : createCommentVNode("", true)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024);
						}), 128))]),
						_: 1
					}))], 64)) : createCommentVNode("", true)
				])]),
				_: 1
			});
		};
	}
});
var MigrationRules_vue_vue_type_style_index_0_lang_module_default = {
	CardTitleContainer: "_CardTitleContainer_192by_2",
	NoLineBreak: "_NoLineBreak_192by_9",
	Progress: "_Progress_192by_16",
	ProgressTrack: "_ProgressTrack_192by_23",
	ProgressFill: "_ProgressFill_192by_31",
	ActionBar: "_ActionBar_192by_37",
	RefreshGroup: "_RefreshGroup_192by_44",
	PLoading: "_PLoading_192by_50",
	UnderlinedText: "_UnderlinedText_192by_56"
};
var MigrationRules_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MigrationRules_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRules_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MigrationRules_default as default };

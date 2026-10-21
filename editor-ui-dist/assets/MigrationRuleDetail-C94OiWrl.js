import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { $d as nextTick, Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, O as require_orderBy, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, Zd as mergeModels, _d as I18nT, cf as renderList, cp as normalizeClass, cs as useRouter, hf as useModel, jd as Fragment, ku as useAsyncState, of as openBlock, pp as toDisplayString, ud as useDebounceFn, xf as withCtx, yf as watch } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, Bv as VIEWS, Bw as Select_default, DT as N8nIcon_default, ET as N8nButton_default, FT as useI18n, Gv as useUsersStore, Gw as createEventBus, Jv as getUsers, Kh as getDebounceTime, Lp as useRBACStore, Ov as TIME, Ow as N8nLink_default, Rw as N8nSelect_default, SC as N8nDataTableServer_default, TC as N8nUserSelect_default, Vw as N8nOption_default, ZC as N8nSegmentControl_default, _n as getReportForRule, bn as updateFindingStatus, ch as useUIStore, cw as SettingsLayout_default, ew as N8nPopover_default, fT as N8nLoading_default, hn as assignWorkflowOwner, kv as DEBOUNCE_TIME, lw as N8nSelectedItemsInfo_default, pT as N8nBadge_default, qv as useRootStore, s_ as MIGRATE_WORKFLOW_MODAL_KEY, tT as N8nAvatar_default, uT as DropdownMenu_default, us as TimeAgo_default, vT as N8nText_default, vf as useDocumentTitle, wT as Input_default, xn as updateFindingStatuses, yn as unassignWorkflowOwner, zv as useToast } from "./app-Bl9bQlKQ.js";
import { t as ImpactTag_default } from "./ImpactTag-Db9FpCYx.js";
//#region src/features/settings/migrationReport/components/FindingStateSelect.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var FindingStateSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "FindingStateSelect",
	__name: "FindingStateSelect",
	props: /* @__PURE__ */ mergeModels({ disabled: {
		type: Boolean,
		default: false
	} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const i18n = useI18n();
		const stateOptions = computed(() => [{
			value: "open",
			label: i18n.baseText("settings.migrationReport.detail.state.open"),
			description: i18n.baseText("settings.migrationReport.detail.state.open.description")
		}, {
			value: "wont_fix",
			label: i18n.baseText("settings.migrationReport.detail.state.wontFix"),
			description: i18n.baseText("settings.migrationReport.detail.state.wontFix.description")
		}]);
		function findOption(value) {
			return stateOptions.value.find((option) => option.value === value);
		}
		function onSelect(value) {
			const option = findOption(value);
			if (option) modelValue.value = option.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Select_default), {
				items: stateOptions.value,
				"model-value": modelValue.value,
				disabled: __props.disabled,
				size: "small",
				"aria-label": unref(i18n).baseText("settings.migrationReport.detail.table.state"),
				"data-test-id": "migration-finding-state-select",
				"onUpdate:modelValue": onSelect
			}, {
				"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.itemStack) }, [createVNode(unref(N8nText_default), {
					tag: "span",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					tag: "span",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(findOption(item.value)?.description), 1)]),
					_: 2
				}, 1024)], 2)]),
				_: 1
			}, 8, [
				"items",
				"model-value",
				"disabled",
				"aria-label"
			]);
		};
	}
});
var FindingStateSelect_vue_vue_type_style_index_0_lang_module_default = { itemStack: "_itemStack_16fpv_1" };
var FindingStateSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FindingStateSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FindingStateSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/migrationReport/workflowFilters.ts
var DEFAULT_WORKFLOW_FILTERS = {
	lastRun: "any",
	lastUpdated: "any",
	executions: "any",
	published: "any",
	owner: "any"
};
var UNASSIGNED_OWNER = "unassigned";
/** The number of filters that differ from the default. */
function countActiveFilters(filters) {
	return Object.keys(DEFAULT_WORKFLOW_FILTERS).filter((key) => filters[key] !== DEFAULT_WORKFLOW_FILTERS[key]).length;
}
function matchesAge(date, filter, now) {
	if (filter === "any") return true;
	if (!date) return false;
	const age = now - new Date(date).getTime();
	if (filter === "under30Days") return age < 30 * TIME.DAY;
	if (filter === "under6Months") return age < 182 * TIME.DAY;
	return age > 365 * TIME.DAY;
}
function matchesExecutions(count, filter) {
	if (filter === "none") return count === 0;
	if (filter === "under100") return count < 100;
	if (filter === "over1000") return count > 1e3;
	return true;
}
function matchesOwner(workflow, filter) {
	if (filter === "any") return true;
	if (filter === "unassigned") return !workflow.owner;
	return workflow.owner?.id === filter;
}
function matchesWorkflowFilters(workflow, filters, now = Date.now()) {
	return matchesAge(workflow.lastExecutedAt, filters.lastRun, now) && matchesAge(workflow.lastUpdatedAt, filters.lastUpdated, now) && matchesExecutions(workflow.numberOfExecutions, filters.executions) && (filters.published === "any" || workflow.active === (filters.published === "published")) && matchesOwner(workflow, filters.owner);
}
//#endregion
//#region src/features/settings/migrationReport/components/WorkflowFiltersPopover.vue?vue&type=script&setup=true&lang.ts
var WorkflowFiltersPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowFiltersPopover",
	props: /* @__PURE__ */ mergeModels({ owners: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const filters = useModel(__props, "modelValue");
		const i18n = useI18n();
		const open = ref(false);
		const activeCount = computed(() => countActiveFilters(filters.value));
		function setFilter(key, value) {
			filters.value = {
				...filters.value,
				[key]: value
			};
		}
		const anyLabel = computed(() => i18n.baseText("settings.migrationReport.detail.filters.any"));
		const ageOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "under30Days",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.under30Days")
			},
			{
				value: "under6Months",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.under6Months")
			},
			{
				value: "over12Months",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.over12Months")
			}
		]);
		const executionsOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "none",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.none")
			},
			{
				value: "under100",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.under100")
			},
			{
				value: "over1000",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.over1000")
			}
		]);
		const publishedOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "published",
				label: i18n.baseText("settings.migrationReport.detail.table.published")
			},
			{
				value: "notPublished",
				label: i18n.baseText("settings.migrationReport.detail.table.notPublished")
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				"onUpdate:open": _cache[7] || (_cache[7] = ($event) => open.value = $event),
				width: "420px",
				align: "start"
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					"data-test-id": "migration-rule-filters"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(activeCount.value ? unref(i18n).baseText("settings.migrationReport.detail.filters.buttonWithCount", { interpolate: { count: String(activeCount.value) } }) : unref(i18n).baseText("settings.migrationReport.detail.filters.button")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "migration-rule-filters-content"
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.lastRun")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: ageOptions.value,
						"model-value": filters.value.lastRun,
						"data-test-id": "migration-rule-filter-last-run",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => setFilter("lastRun", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.lastUpdated")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: ageOptions.value,
						"model-value": filters.value.lastUpdated,
						"data-test-id": "migration-rule-filter-last-updated",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => setFilter("lastUpdated", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.executions")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: executionsOptions.value,
						"model-value": filters.value.executions,
						"data-test-id": "migration-rule-filter-executions",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => setFilter("executions", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.status")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: publishedOptions.value,
						"model-value": filters.value.published,
						"data-test-id": "migration-rule-filter-status",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => setFilter("published", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.owner")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
						size: "small",
						filterable: "",
						class: normalizeClass(_ctx.$style.ownerSelect),
						"model-value": filters.value.owner,
						"data-test-id": "migration-rule-filter-owner",
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => setFilter("owner", $event))
					}, {
						default: withCtx(() => [
							createVNode(unref(N8nOption_default), {
								value: "any",
								label: anyLabel.value
							}, null, 8, ["label"]),
							createVNode(unref(N8nOption_default), {
								value: unref(UNASSIGNED_OWNER),
								label: unref(i18n).baseText("settings.migrationReport.detail.table.unassigned")
							}, null, 8, ["value", "label"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(__props.owners, (owner) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: owner.id,
									value: owner.id,
									label: owner.label
								}, null, 8, ["value", "label"]);
							}), 128))
						]),
						_: 1
					}, 8, ["class", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						disabled: activeCount.value === 0,
						"data-test-id": "migration-rule-filters-clear",
						onClick: _cache[5] || (_cache[5] = ($event) => filters.value = { ...unref(DEFAULT_WORKFLOW_FILTERS) })
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.clearAll")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "small",
						onClick: _cache[6] || (_cache[6] = ($event) => open.value = false)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.done")), 1)]),
						_: 1
					})], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var WorkflowFiltersPopover_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1hyv0_2",
	group: "_group_1hyv0_9",
	ownerSelect: "_ownerSelect_1hyv0_16",
	footer: "_footer_1hyv0_20"
};
var WorkflowFiltersPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowFiltersPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowFiltersPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mb-2xs" };
var MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRuleDetail",
	props: { migrationRuleId: {} },
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const rootStore = useRootStore();
		const rbacStore = useRBACStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		useDocumentTitle().set(i18n.baseText("settings.migrationReport"));
		const props = __props;
		const router = useRouter();
		const canMigrate = computed(() => rbacStore.hasScope("breakingChanges:migrate"));
		const { state, isLoading } = useAsyncState(async () => {
			return await getReportForRule(rootStore.restApiContext, props.migrationRuleId);
		}, {
			ruleId: "",
			ruleTitle: "",
			ruleDescription: "",
			ruleImpact: "capabilityRemoved",
			affectedWorkflows: [],
			recommendations: [],
			migratable: false
		});
		const isLoadingUsers = ref(false);
		const activeProjectId = ref();
		const memberOptions = ref([]);
		function userOption(user) {
			const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");
			return {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				fullName: fullName || void 0
			};
		}
		const incomingOwners = ref(/* @__PURE__ */ new Map());
		/** The members found for the row's project, plus the row's owner so the picker never shows a bare id. */
		function ownerOptionsFor(workflow) {
			const options = workflow.homeProjectId === activeProjectId.value ? [...memberOptions.value] : [];
			for (const owner of [workflow.owner, incomingOwners.value.get(workflow.id)]) if (owner?.email && !options.some((option) => option.id === owner.id)) options.push(userOption(owner));
			return options;
		}
		let memberRequestSequence = 0;
		async function loadMembers(projectId, query = "") {
			const sequence = ++memberRequestSequence;
			isLoadingUsers.value = true;
			try {
				const { items } = await getUsers(rootStore.restApiContext, {
					skip: 0,
					take: 50,
					filter: {
						...projectId ? { projectId } : {},
						...query.trim() ? { fullText: query.trim() } : {}
					}
				});
				if (sequence !== memberRequestSequence) return;
				memberOptions.value = items.map(userOption);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.owner.search.error.title"));
			} finally {
				if (sequence === memberRequestSequence) isLoadingUsers.value = false;
			}
		}
		function onOwnerPickerFocus(workflow) {
			if (activeProjectId.value === workflow.homeProjectId && memberOptions.value.length > 0) return;
			activeProjectId.value = workflow.homeProjectId;
			memberOptions.value = [];
			loadMembers(workflow.homeProjectId);
		}
		const searchMembers = useDebounceFn(async (query) => await loadMembers(activeProjectId.value, query), getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const ownerRequestSequence = /* @__PURE__ */ new Map();
		async function onOwnerChange(workflow, userId) {
			const sequence = (ownerRequestSequence.get(workflow.id) ?? 0) + 1;
			ownerRequestSequence.set(workflow.id, sequence);
			try {
				const { owner } = userId ? await assignWorkflowOwner(rootStore.restApiContext, workflow.id, userId) : await unassignWorkflowOwner(rootStore.restApiContext, workflow.id);
				if (ownerRequestSequence.get(workflow.id) !== sequence) return;
				if (owner) {
					incomingOwners.value = new Map(incomingOwners.value).set(workflow.id, owner);
					await nextTick();
				}
				state.value = {
					...state.value,
					affectedWorkflows: state.value.affectedWorkflows.map((row) => row.id === workflow.id ? {
						...row,
						owner: owner ?? void 0
					} : row)
				};
				const remaining = new Map(incomingOwners.value);
				remaining.delete(workflow.id);
				incomingOwners.value = remaining;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.owner.error.title"));
			}
		}
		function ownerLabel(workflow) {
			const owner = workflow.owner;
			return [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || i18n.baseText("settings.migrationReport.detail.table.unassigned");
		}
		const showMigrate = computed(() => state.value.migratable && canMigrate.value);
		const tableHeaders = computed(() => {
			return [
				{
					title: i18n.baseText("settings.migrationReport.detail.table.name"),
					key: "name",
					width: 240
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.nodesAffected"),
					key: "issues",
					width: 200,
					disableSort: true
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.usage"),
					key: "numberOfExecutions",
					width: 160
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.owner"),
					key: "owner",
					value: ownerLabel,
					width: 220
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.state"),
					key: "status",
					width: 140
				},
				{
					title: "",
					key: "actions",
					value: () => "",
					width: showMigrate.value ? 160 : 80,
					disableSort: true
				}
			];
		});
		const STALE_WORKFLOW_AFTER = 90 * TIME.DAY;
		function isStale(workflow) {
			if (!workflow.lastExecutedAt) return false;
			return Date.now() - new Date(workflow.lastExecutedAt).getTime() > STALE_WORKFLOW_AFTER;
		}
		function runCountLabel(workflow) {
			return i18n.baseText("settings.migrationReport.detail.table.runs", {
				adjustToNumber: workflow.numberOfExecutions,
				interpolate: { count: workflow.numberOfExecutions.toLocaleString(rootStore.defaultLocale) }
			});
		}
		const migratedWorkflowIds = ref(/* @__PURE__ */ new Set());
		const migrateModalBus = createEventBus();
		migrateModalBus.on("migrated", ({ workflowId }) => {
			migratedWorkflowIds.value = new Set(migratedWorkflowIds.value).add(workflowId);
		});
		function openMigrateModal(workflow) {
			uiStore.openModalWithData({
				name: MIGRATE_WORKFLOW_MODAL_KEY,
				data: {
					ruleId: props.migrationRuleId,
					workflow,
					recommendations: state.value.recommendations,
					eventBus: migrateModalBus
				}
			});
		}
		const openCount = computed(() => state.value.affectedWorkflows.filter((workflow) => findingState(workflow) === "open").length);
		const savingWorkflowIds = ref(/* @__PURE__ */ new Set());
		function setFindingStatuses(statuses) {
			state.value = {
				...state.value,
				affectedWorkflows: state.value.affectedWorkflows.map((workflow) => {
					const status = statuses.get(workflow.id);
					return status ? {
						...workflow,
						status
					} : workflow;
				})
			};
		}
		function setSaving(workflowIds, saving) {
			const next = new Set(savingWorkflowIds.value);
			for (const workflowId of workflowIds) if (saving) next.add(workflowId);
			else next.delete(workflowId);
			savingWorkflowIds.value = next;
		}
		async function onFindingStatusChange(workflow, status) {
			const previousStatus = workflow.status;
			if (status === previousStatus || savingWorkflowIds.value.has(workflow.id)) return;
			setFindingStatuses(new Map([[workflow.id, status]]));
			setSaving([workflow.id], true);
			try {
				await updateFindingStatus(rootStore.restApiContext, props.migrationRuleId, workflow.id, status);
			} catch (error) {
				setFindingStatuses(new Map([[workflow.id, previousStatus]]));
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.state.error.title"));
			} finally {
				setSaving([workflow.id], false);
			}
		}
		const selectedWorkflowIds = ref([]);
		const selectedWorkflows = computed(() => {
			const selected = new Set(selectedWorkflowIds.value);
			return state.value.affectedWorkflows.filter((workflow) => selected.has(workflow.id));
		});
		function isSelectable(workflow) {
			return !migratedWorkflowIds.value.has(workflow.id);
		}
		/** The selected rows that a bulk change to `status` would change. */
		function bulkTargets(status) {
			return selectedWorkflows.value.filter((workflow) => workflow.status !== status && isSelectable(workflow) && !savingWorkflowIds.value.has(workflow.id));
		}
		/** Changes the state of all `workflows` in one request. Returns false when the request fails. */
		async function changeFindingStatuses(workflows, status) {
			const workflowIds = workflows.map((workflow) => workflow.id);
			setFindingStatuses(new Map(workflowIds.map((workflowId) => [workflowId, status])));
			setSaving(workflowIds, true);
			try {
				await updateFindingStatuses(rootStore.restApiContext, props.migrationRuleId, workflowIds, status);
				return true;
			} catch (error) {
				setFindingStatuses(new Map(workflows.map((workflow) => [workflow.id, workflow.status])));
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.state.error.title"));
				return false;
			} finally {
				setSaving(workflowIds, false);
			}
		}
		async function onBulkStatusChange(status) {
			const workflows = bulkTargets(status);
			if (workflows.length === 0) return;
			if (!await changeFindingStatuses(workflows, status)) return;
			const changed = new Set(workflows.map((workflow) => workflow.id));
			selectedWorkflowIds.value = selectedWorkflowIds.value.filter((workflowId) => !changed.has(workflowId));
		}
		const UNUSED_WORKFLOW_FILTERS = {
			...DEFAULT_WORKFLOW_FILTERS,
			lastRun: "over12Months"
		};
		const unusedOpenWorkflows = computed(() => {
			const now = Date.now();
			return state.value.affectedWorkflows.filter((workflow) => findingState(workflow) === "open" && !savingWorkflowIds.value.has(workflow.id) && matchesWorkflowFilters(workflow, UNUSED_WORKFLOW_FILTERS, now));
		});
		function reviewUnusedWorkflows() {
			searchInput.value = "";
			searchQuery.value = "";
			stateFilter.value = "open";
			workflowFilters.value = { ...UNUSED_WORKFLOW_FILTERS };
		}
		async function markUnusedWorkflowsAsWontFix() {
			const workflows = unusedOpenWorkflows.value;
			if (workflows.length === 0) return;
			await changeFindingStatuses(workflows, "wont_fix");
		}
		function workflowUrl(workflow) {
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflow.id }
			}).href;
		}
		const sortBy = ref([{
			id: "numberOfExecutions",
			desc: true
		}]);
		const sortFieldLabels = computed(() => ({
			numberOfExecutions: i18n.baseText("settings.migrationReport.detail.sort.executions"),
			lastExecutedAt: i18n.baseText("settings.migrationReport.detail.sort.lastRun"),
			lastUpdatedAt: i18n.baseText("settings.migrationReport.detail.sort.lastUpdated"),
			name: i18n.baseText("settings.migrationReport.detail.table.name"),
			owner: i18n.baseText("settings.migrationReport.detail.table.owner")
		}));
		const sortMenuItems = computed(() => [
			"numberOfExecutions",
			"lastExecutedAt",
			"lastUpdatedAt",
			"name"
		].map((id) => ({
			id,
			label: sortFieldLabels.value[id],
			checked: sortBy.value[0]?.id === id
		})));
		const sortLabel = computed(() => {
			const current = sortBy.value[0];
			if (!current) return i18n.baseText("settings.migrationReport.detail.sort.none");
			return i18n.baseText("settings.migrationReport.detail.sort.label", { interpolate: {
				field: sortFieldLabels.value[current.id] ?? current.id,
				direction: current.desc ? "↓" : "↑"
			} });
		});
		function onSortSelect(id) {
			const current = sortBy.value[0];
			sortBy.value = [{
				id,
				desc: current?.id === id ? !current.desc : id !== "name"
			}];
		}
		const searchInput = ref("");
		const searchQuery = ref("");
		const workflowFilters = ref({ ...DEFAULT_WORKFLOW_FILTERS });
		const stateFilter = ref();
		const debouncedSearch = useDebounceFn((value) => {
			searchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearchInput = (value) => {
			searchInput.value = value;
			debouncedSearch(value);
		};
		function findingState(workflow) {
			return migratedWorkflowIds.value.has(workflow.id) ? "migrated" : workflow.status;
		}
		const wontFixCount = computed(() => state.value.affectedWorkflows.filter((workflow) => findingState(workflow) === "wont_fix").length);
		const unassignedCount = computed(() => state.value.affectedWorkflows.filter((workflow) => !workflow.owner).length);
		const currentUserId = computed(() => usersStore.currentUserId ?? void 0);
		const assignedToMeCount = computed(() => state.value.affectedWorkflows.filter((workflow) => workflow.owner?.id === currentUserId.value).length);
		function quickFilterLabel(key, count) {
			return i18n.baseText(key, { interpolate: { count: String(count) } });
		}
		function toggleStateFilter(status) {
			stateFilter.value = stateFilter.value === status ? void 0 : status;
		}
		function toggleOwnerFilter(owner) {
			workflowFilters.value = {
				...workflowFilters.value,
				owner: workflowFilters.value.owner === owner ? "any" : owner
			};
		}
		const ownerFilterOptions = computed(() => {
			const owners = /* @__PURE__ */ new Map();
			for (const workflow of state.value.affectedWorkflows) if (workflow.owner) owners.set(workflow.owner.id, ownerLabel(workflow));
			return (0, import_orderBy.default)([...owners].map(([id, label]) => ({
				id,
				label
			})), [(owner) => owner.label.toLowerCase()]);
		});
		const filteredWorkflows = computed(() => {
			const query = searchQuery.value.toLowerCase();
			const now = Date.now();
			return state.value.affectedWorkflows.filter((workflow) => (!query || workflow.name.toLowerCase().includes(query)) && (!stateFilter.value || findingState(workflow) === stateFilter.value) && matchesWorkflowFilters(workflow, workflowFilters.value, now));
		});
		watch(filteredWorkflows, (workflows) => {
			const visible = new Set(workflows.map((workflow) => workflow.id));
			const kept = selectedWorkflowIds.value.filter((workflowId) => visible.has(workflowId));
			if (kept.length !== selectedWorkflowIds.value.length) selectedWorkflowIds.value = kept;
		});
		const sortValues = {
			owner: ownerLabel,
			lastExecutedAt: (workflow) => workflow.lastExecutedAt ? new Date(workflow.lastExecutedAt).getTime() : 0,
			lastUpdatedAt: (workflow) => new Date(workflow.lastUpdatedAt).getTime(),
			name: (workflow) => workflow.name.toLowerCase()
		};
		const sortedWorkflows = computed(() => {
			if (!sortBy.value.length) return filteredWorkflows.value;
			const { id, desc } = sortBy.value[0];
			return (0, import_orderBy.default)(filteredWorkflows.value, [sortValues[id] ?? id], [desc ? "desc" : "asc"]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("generic.back"),
				onBack: _cache[10] || (_cache[10] = ($event) => unref(router).push({ name: unref(VIEWS).MIGRATION_REPORT }))
			}, {
				default: withCtx(() => [
					createBaseVNode("header", { class: normalizeClass(_ctx.$style.pageHeader) }, [unref(isLoading) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "h1" })]), createBaseVNode("div", null, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 2
					})])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nText_default), {
						tag: "h2",
						size: "xlarge",
						color: "text-dark",
						class: "mb-2xs",
						style: {
							"display": "flex",
							"align-items": "center",
							"gap": "4px"
						}
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(unref(state).ruleTitle) + " ", 1),
							createVNode(ImpactTag_default, { impact: unref(state).ruleImpact }, null, 8, ["impact"]),
							createVNode(unref(N8nBadge_default), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.affectedTag", { interpolate: { count: String(openCount.value) } })), 1)]),
								_: 1
							})
						]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						tag: "p",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleDescription) + toDisplayString(unref(state).ruleDescription.endsWith(".") ? "" : ".") + " ", 1), unref(state).ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							theme: "text",
							href: unref(state).ruleDocumentationUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							class: normalizeClass(_ctx.$style.NoLineBreak)
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[11] || (_cache[11] = createTextVNode(" ↗ ", -1))]),
							_: 1
						}, 8, ["href", "class"])) : createCommentVNode("", true)]),
						_: 1
					})], 64))], 2),
					!unref(isLoading) && canMigrate.value && unusedOpenWorkflows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.unusedCallout),
						"data-test-id": "migration-rule-unused-callout"
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.message", {
							adjustToNumber: unusedOpenWorkflows.value.length,
							interpolate: { count: String(unusedOpenWorkflows.value.length) }
						})), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.unusedCalloutActions) }, [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"data-test-id": "migration-rule-unused-review",
						onClick: reviewUnusedWorkflows
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.review")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "small",
						"data-test-id": "migration-rule-unused-mark-all",
						onClick: markUnusedWorkflowsAsWontFix
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.markAll", { interpolate: { count: String(unusedOpenWorkflows.value.length) } })), 1)]),
						_: 1
					})], 2)], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickFilters) }, [
						currentUserId.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: workflowFilters.value.owner === currentUserId.value ? "solid" : "subtle",
							size: "small",
							icon: "user",
							"aria-pressed": workflowFilters.value.owner === currentUserId.value,
							"data-test-id": "migration-rule-quick-filter-mine",
							onClick: _cache[0] || (_cache[0] = ($event) => toggleOwnerFilter(currentUserId.value))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.assignedToMe", assignedToMeCount.value)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							variant: stateFilter.value === "open" ? "solid" : "subtle",
							size: "small",
							"aria-pressed": stateFilter.value === "open",
							"data-test-id": "migration-rule-quick-filter-open",
							onClick: _cache[1] || (_cache[1] = ($event) => toggleStateFilter("open"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.open", openCount.value)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"]),
						createVNode(unref(N8nButton_default), {
							variant: stateFilter.value === "wont_fix" ? "solid" : "subtle",
							size: "small",
							"aria-pressed": stateFilter.value === "wont_fix",
							"data-test-id": "migration-rule-quick-filter-wont-fix",
							onClick: _cache[2] || (_cache[2] = ($event) => toggleStateFilter("wont_fix"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.wontFix", wontFixCount.value)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"]),
						createVNode(unref(N8nButton_default), {
							variant: workflowFilters.value.owner === unref("unassigned") ? "solid" : "subtle",
							size: "small",
							"aria-pressed": workflowFilters.value.owner === unref(UNASSIGNED_OWNER),
							"data-test-id": "migration-rule-quick-filter-unassigned",
							onClick: _cache[3] || (_cache[3] = ($event) => toggleOwnerFilter(unref("unassigned")))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.unassigned", unassignedCount.value)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"])
					], 2), createVNode(unref(Input_default), {
						"model-value": searchInput.value,
						placeholder: unref(i18n).baseText("settings.migrationReport.detail.search.placeholder"),
						size: "small",
						clearable: "",
						class: normalizeClass(_ctx.$style.search),
						"data-test-id": "migration-rule-search",
						"onUpdate:modelValue": onSearchInput
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"model-value",
						"placeholder",
						"class"
					])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.sortAndFilters) }, [createVNode(unref(DropdownMenu_default), {
						items: sortMenuItems.value,
						placement: "bottom-start",
						"data-test-id": "migration-rule-sort",
						onSelect: onSortSelect
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "small",
							"data-test-id": "migration-rule-sort-trigger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(sortLabel.value), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["items"]), createVNode(WorkflowFiltersPopover_default, {
						modelValue: workflowFilters.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => workflowFilters.value = $event),
						owners: ownerFilterOptions.value
					}, null, 8, ["modelValue", "owners"])], 2),
					(openBlock(), createBlock(unref(N8nDataTableServer_default), {
						key: String(unref(state).migratable),
						"sort-by": sortBy.value,
						"onUpdate:sortBy": _cache[5] || (_cache[5] = ($event) => sortBy.value = $event),
						selection: selectedWorkflowIds.value,
						"onUpdate:selection": _cache[6] || (_cache[6] = ($event) => selectedWorkflowIds.value = $event),
						"show-select": canMigrate.value,
						"item-selectable": isSelectable,
						"items-per-page": sortedWorkflows.value.length + 1,
						items: sortedWorkflows.value,
						"items-length": sortedWorkflows.value.length,
						headers: tableHeaders.value,
						loading: unref(isLoading)
					}, {
						[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellStack) }, [createVNode(unref(N8nText_default), {
							color: "text-dark",
							class: normalizeClass(_ctx.$style.truncate),
							title: item.name
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1032, ["class", "title"]), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.active ? unref(i18n).baseText("settings.migrationReport.detail.table.published") : unref(i18n).baseText("settings.migrationReport.detail.table.notPublished")) + " · ", 1), createVNode(unref(I18nT), {
								keypath: "settings.migrationReport.detail.table.updated",
								tag: "span",
								scope: "global"
							}, {
								time: withCtx(() => [createVNode(TimeAgo_default, { date: item.lastUpdatedAt.toString() }, null, 8, ["date"])]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024)], 2)]),
						[`item.issues`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.truncate, _ctx.$style.nodeNames]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
							return openBlock(), createElementBlock(Fragment, { key: issue.nodeId }, [createVNode(unref(N8nLink_default), {
								theme: "text",
								to: `/workflow/${item.id}/${issue.nodeId}`,
								"new-window": ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.nodeName), 1)]),
								_: 2
							}, 1032, ["to"]), index < item.issues.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(", ")], 64)) : createCommentVNode("", true)], 64);
						}), 128))], 2)]),
						[`item.numberOfExecutions`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellStack) }, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(runCountLabel(item)), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "small",
							color: isStale(item) ? "danger" : "text-light",
							"data-test-id": "migration-workflow-last-run"
						}, {
							default: withCtx(() => [item.lastExecutedAt ? (openBlock(), createBlock(unref(I18nT), {
								key: 0,
								keypath: "settings.migrationReport.detail.table.lastRun",
								tag: "span",
								scope: "global"
							}, {
								time: withCtx(() => [createVNode(TimeAgo_default, { date: item.lastExecutedAt.toString() }, null, 8, ["date"])]),
								_: 2
							}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.neverRun")), 1)], 64))]),
							_: 2
						}, 1032, ["color"])], 2)]),
						[`item.owner`]: withCtx(({ item }) => [canMigrate.value ? (openBlock(), createBlock(unref(N8nUserSelect_default), {
							key: 0,
							size: "small",
							users: ownerOptionsFor(item),
							"hide-email-in-label": "",
							"show-avatar": "",
							borderless: "",
							"model-value": item.owner?.id ?? "",
							placeholder: unref(i18n).baseText("settings.migrationReport.detail.table.unassigned"),
							remote: "",
							"remote-method": unref(searchMembers),
							loading: isLoadingUsers.value,
							clearable: "",
							"data-test-id": "migration-owner-select",
							onFocus: ($event) => onOwnerPickerFocus(item),
							"onUpdate:modelValue": (userId) => onOwnerChange(item, userId)
						}, null, 8, [
							"users",
							"model-value",
							"placeholder",
							"remote-method",
							"loading",
							"onFocus",
							"onUpdate:modelValue"
						])) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.ownerLabel)
						}, [createVNode(unref(N8nAvatar_default), {
							size: "xsmall",
							"first-name": item.owner?.firstName,
							"last-name": item.owner?.lastName
						}, null, 8, ["first-name", "last-name"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.truncate) }, toDisplayString(ownerLabel(item)), 3)], 2))]),
						[`item.status`]: withCtx(({ item }) => [createVNode(FindingStateSelect_default, {
							"model-value": item.status,
							disabled: !canMigrate.value || savingWorkflowIds.value.has(item.id) || migratedWorkflowIds.value.has(item.id),
							"onUpdate:modelValue": ($event) => onFindingStatusChange(item, $event)
						}, null, 8, [
							"model-value",
							"disabled",
							"onUpdate:modelValue"
						])]),
						[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [showMigrate.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [migratedWorkflowIds.value.has(item.id) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.migrate.migrated")), 1)]),
							_: 1
						})) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							size: "small",
							label: unref(i18n).baseText("settings.migrationReport.detail.migrate.button"),
							"data-test-id": "migrate-workflow-button",
							onClick: ($event) => openMigrateModal(item)
						}, null, 8, ["label", "onClick"]))], 64)) : createCommentVNode("", true), createVNode(unref(N8nLink_default), {
							theme: "text",
							to: workflowUrl(item),
							"new-window": "",
							class: normalizeClass(_ctx.$style.NoLineBreak),
							"data-test-id": "migration-workflow-open-link"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.open")) + " ↗ ", 1)]),
							_: 1
						}, 8, ["to", "class"])], 2)]),
						_: 2
					}, 1032, [
						"sort-by",
						"selection",
						"show-select",
						"items-per-page",
						"items",
						"items-length",
						"headers",
						"loading"
					])),
					selectedWorkflowIds.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.selectionBar)
					}, [createVNode(unref(N8nSelectedItemsInfo_default), {
						"selected-count": selectedWorkflowIds.value.length,
						onClearSelection: _cache[9] || (_cache[9] = ($event) => selectedWorkflowIds.value = [])
					}, {
						actions: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							label: unref(i18n).baseText("settings.migrationReport.detail.bulk.wontFix"),
							disabled: bulkTargets("wont_fix").length === 0,
							"data-test-id": "migration-bulk-wont-fix-button",
							onClick: _cache[7] || (_cache[7] = ($event) => onBulkStatusChange("wont_fix"))
						}, null, 8, ["label", "disabled"]), createVNode(unref(N8nButton_default), {
							variant: "subtle",
							label: unref(i18n).baseText("settings.migrationReport.detail.bulk.reopen"),
							disabled: bulkTargets("open").length === 0,
							"data-test-id": "migration-bulk-reopen-button",
							onClick: _cache[8] || (_cache[8] = ($event) => onBulkStatusChange("open"))
						}, null, 8, ["label", "disabled"])]),
						_: 1
					}, 8, ["selected-count"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["back-label"]);
		};
	}
});
var MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default = {
	pageHeader: "_pageHeader_1w6qf_4",
	unusedCallout: "_unusedCallout_1w6qf_10",
	unusedCalloutActions: "_unusedCalloutActions_1w6qf_22",
	cellStack: "_cellStack_1w6qf_28",
	truncate: "_truncate_1w6qf_35",
	nodeNames: "_nodeNames_1w6qf_41",
	ownerLabel: "_ownerLabel_1w6qf_45",
	actions: "_actions_1w6qf_52",
	selectionBar: "_selectionBar_1w6qf_62",
	toolbar: "_toolbar_1w6qf_68",
	quickFilters: "_quickFilters_1w6qf_77",
	sortAndFilters: "_sortAndFilters_1w6qf_78",
	search: "_search_1w6qf_89",
	NoLineBreak: "_NoLineBreak_1w6qf_93",
	UnderlinedText: "_UnderlinedText_1w6qf_97"
};
var MigrationRuleDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MigrationRuleDetail_default as default };

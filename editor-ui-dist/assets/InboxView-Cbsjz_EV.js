import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { $d as provide, Ad as createElementBlock, Cd as Fragment, Cf as reactive, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Jl as AccordionTrigger_default, Lu as useResizeObserver, Mu as useIntersectionObserver, Nd as createTextVNode, Nf as unref, Nu as useLocalStorage, Od as createBlock, Pd as createVNode, Qd as openBlock, Ql as AccordionRoot_default, Sd as withModifiers, Tf as ref, Ud as mergeModels, Vd as inject, Wd as mergeProps, Xl as AccordionContent_default, Yd as onMounted, Yl as AccordionHeader_default, Zl as AccordionItem_default, ap as toDisplayString, bf as isRef, df as watch, ef as renderList, ep as normalizeClass, fo as defineStore, if as resolveDynamicComponent, is as useRouter, ja as require_isEqual, jd as createSlots, kd as createCommentVNode, ld as I18nT, lf as useTemplateRef, mo as storeToRefs, np as normalizeStyle, of as useId, pf as withCtx, qd as onBeforeUnmount, rs as useRoute, sf as useModel, tf as renderSlot, xd as withKeys } from "./vendor-z-loPfiR.js";
import { $h as get, A as formatUserDisplayName, AE as _plugin_vue_export_helper_default, DE as N8nIcon_default, DT as N8nLink_default, EE as N8nButton_default, Ey as VIEWS, FE as useI18n, Fw as N8nTimeAgo_default, Gw as N8nResizeWrapper_default, I as ReviewDetailScrollContainerKey, Kw as useResizablePanel, L as ReviewLinkedWorkflowsKey, M as inboxItemLocation, My as useSettingsStore, N as isInboxRoute, NT as N8nEmptyState_default, Ny as useRootStore, P as selectionFromRoute, PT as N8nHeading_default, Qw as N8nPopover_default, Rw as N8nTabs_default, Ty as useToast, Xf as useDocumentTitle, ZT as N8nCallout_default, bE as N8nTooltip_default, fE as N8nLoading_default, gE as N8nChatInput_default, j as toError, jy as useUsersStore, k as formatActorName, mE as AskAssistantAvatar_default, nb as makeRestApiRequest, pE as N8nBadge_default, px as WORKFLOW_REVIEW_TEXT_MAX_LENGTH, qT as N8nCard_default, tE as N8nAvatar_default, tb as ResponseError, vE as N8nText_default, wE as Input_default, wa as getVersionLabel, z as INBOX_VIEW } from "./app-kkzDAG6o.js";
import { t as require_omit } from "./omit-CluhXIrp.js";
import { t as useIntersectionObserver$1 } from "./useIntersectionObserver-CJHu-eUO.js";
//#region ../../modules/inbox/frontend/src/inbox.api.ts
async function fetchInbox(context, query) {
	return await makeRestApiRequest(context, "GET", "/inbox", query);
}
async function fetchInboxSummary(context) {
	return await makeRestApiRequest(context, "GET", "/inbox/summary");
}
//#endregion
//#region ../../modules/inbox/frontend/src/inbox.store.ts
var sourceTypes = ["workflow_review", "self_healing_result"];
function isSourceType(value) {
	return value === "workflow_review" || value === "self_healing_result";
}
function disabledTypesFromError(error) {
	const types = error instanceof ResponseError ? error.meta?.disabledSources : void 0;
	return Array.isArray(types) ? types.filter(isSourceType) : [];
}
function createInboxListSlice(requestPage, onDisabledSources, onPage) {
	const state = reactive({
		items: [],
		nextCursor: null,
		hasMore: false,
		hasLoaded: false,
		loading: false,
		loadingMore: false,
		error: null,
		failedRequest: null,
		partial: false
	});
	let requestSeq = 0;
	function applyResponse(page, append) {
		onPage?.(page, append);
		onDisabledSources(page.disabledSources);
		state.hasLoaded = true;
		state.items = append ? [...state.items, ...page.data] : page.data;
		state.nextCursor = page.nextCursor;
		state.hasMore = page.hasMore;
		state.partial = page.partial;
	}
	async function fetchList() {
		const seq = ++requestSeq;
		state.items = [];
		state.nextCursor = null;
		state.hasMore = false;
		state.loading = true;
		state.loadingMore = false;
		state.error = null;
		state.failedRequest = null;
		try {
			const page = await requestPage();
			if (seq === requestSeq) applyResponse(page, false);
		} catch (error) {
			if (seq !== requestSeq) return;
			onDisabledSources(disabledTypesFromError(error));
			state.error = toError(error);
			state.failedRequest = "list";
		} finally {
			if (seq === requestSeq) state.loading = false;
		}
	}
	async function loadMore() {
		if (state.loading || state.loadingMore || !state.hasMore || !state.nextCursor) return;
		const seq = ++requestSeq;
		state.loadingMore = true;
		state.error = null;
		state.failedRequest = null;
		try {
			const page = await requestPage(state.nextCursor);
			if (seq === requestSeq) applyResponse(page, true);
		} catch (error) {
			if (seq !== requestSeq) return;
			onDisabledSources(disabledTypesFromError(error));
			state.error = toError(error);
			state.failedRequest = "loadMore";
		} finally {
			if (seq === requestSeq) state.loadingMore = false;
		}
	}
	function removeSources(types) {
		state.items = state.items.filter((item) => !types.includes(item.type));
	}
	function reset() {
		requestSeq++;
		state.items = [];
		state.hasLoaded = false;
		state.nextCursor = null;
		state.hasMore = false;
		state.loading = false;
		state.loadingMore = false;
		state.error = null;
		state.failedRequest = null;
		state.partial = false;
	}
	return Object.assign(state, {
		fetchList,
		loadMore,
		removeSources,
		reset,
		async retry() {
			if (state.failedRequest === "loadMore") await loadMore();
			else await fetchList();
		}
	});
}
var useInboxStore = defineStore("inbox", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const activeTab = ref("open");
	const openCount = ref(null);
	const closedCount = ref(null);
	const disabledSources = ref([]);
	const enabled = computed(() => settingsStore.settings.inbox?.enabled === true);
	let summaryRequestSeq = 0;
	function removeDisabledSources(types) {
		if (types.length === 0) return;
		disabledSources.value = [...new Set([...disabledSources.value, ...types])];
		for (const list of Object.values(lists)) list.removeSources(types);
	}
	function reconcileSources(page, partialSourceSet) {
		if (partialSourceSet) {
			const returnedTypes = page.data.map((item) => item.type);
			disabledSources.value = disabledSources.value.filter((type) => page.disabledSources.includes(type) || !returnedTypes.includes(type));
			return;
		}
		const settings = settingsStore.settings.inbox;
		const knownTypes = new Set([
			...settings?.availableTypes ?? [],
			...settings?.failedTypes ?? [],
			...page.data.map((item) => item.type)
		]);
		disabledSources.value = sourceTypes.filter((type) => !knownTypes.has(type) || page.disabledSources.includes(type) || disabledSources.value.includes(type) && page.failedSources.includes(type));
	}
	function requestPage(state, category) {
		return async (cursor) => await fetchInbox(rootStore.restApiContext, {
			state,
			category,
			limit: 15,
			cursor
		});
	}
	const lists = {
		waiting: createInboxListSlice(requestPage("open", "waiting"), removeDisabledSources, reconcileSources),
		authored: createInboxListSlice(requestPage("open", "authored"), removeDisabledSources, (page) => reconcileSources(page, true)),
		closed: createInboxListSlice(requestPage("closed"), removeDisabledSources, reconcileSources)
	};
	const activeSectionKeys = computed(() => activeTab.value === "closed" ? ["closed"] : ["waiting", "authored"]);
	const activeLists = computed(() => activeSectionKeys.value.map((key) => lists[key]));
	const hasItems = computed(() => activeLists.value.some((list) => list.items.length > 0));
	const loading = computed(() => activeLists.value.some((list) => list.loading));
	const initialLoadFailed = computed(() => activeLists.value.some((list) => list.failedRequest === "list"));
	const partial = computed(() => activeLists.value.some((list) => list.partial));
	const isEmpty = computed(() => activeLists.value.every((list) => list.hasLoaded && !list.loading && !list.error && !list.partial && !list.hasMore && list.items.length === 0));
	async function fetchSummary() {
		if (!enabled.value) return;
		const seq = ++summaryRequestSeq;
		try {
			const summary = await fetchInboxSummary(rootStore.restApiContext);
			if (seq !== summaryRequestSeq) return;
			removeDisabledSources(summary.disabledSources);
			openCount.value = summary.counts?.open ?? null;
			closedCount.value = summary.counts?.closed ?? null;
		} catch (error) {
			if (seq !== summaryRequestSeq) return;
			removeDisabledSources(disabledTypesFromError(error));
		}
	}
	async function fetchActiveTab() {
		if (!enabled.value) return;
		await Promise.all(activeLists.value.map(async (list) => await list.fetchList()));
	}
	async function refreshListAndSummary() {
		await Promise.all([fetchActiveTab(), fetchSummary()]);
	}
	function reconcileItemChange(change) {
		let previousState;
		for (const [key, list] of Object.entries(lists)) {
			const item = list.items.find((row) => row.type === change.type && row.id === change.id);
			if (!item) continue;
			previousState ??= item.state;
			if (change.state) item.state = change.state;
			if (change.updatedAt) item.updatedAt = change.updatedAt;
			if (item.type === "workflow_review" && change.decision) item.decision = change.decision;
			if (item.state !== (key === "closed" ? "closed" : "open")) list.items = list.items.filter((row) => row !== item);
		}
		if (change.state !== "closed") return;
		if (previousState === "open") {
			if (openCount.value !== null) openCount.value = Math.max(0, openCount.value - 1);
			if (closedCount.value !== null) closedCount.value++;
		} else if (!previousState) fetchSummary();
	}
	async function setActiveTab(tab) {
		if (activeTab.value === tab) return;
		activeTab.value = tab;
		await fetchActiveTab();
	}
	function reset() {
		summaryRequestSeq++;
		for (const list of Object.values(lists)) list.reset();
		openCount.value = null;
		closedCount.value = null;
		const settings = settingsStore.settings.inbox;
		const available = [...settings?.availableTypes ?? [], ...settings?.failedTypes ?? []];
		disabledSources.value = sourceTypes.filter((type) => !available.includes(type));
	}
	return {
		lists,
		activeTab,
		activeSectionKeys,
		activeLists,
		hasItems,
		loading,
		initialLoadFailed,
		partial,
		isEmpty,
		enabled,
		openCount,
		closedCount,
		disabledSources,
		fetchSummary,
		fetchActiveTab,
		refreshListAndSummary,
		reconcileItemChange,
		setActiveTab,
		reset
	};
});
//#endregion
//#region ../../modules/inbox/frontend/src/components/InboxEmptyState.vue?vue&type=script&setup=true&lang.ts
var InboxEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InboxEmptyState",
	setup(__props) {
		const store = useInboxStore();
		const { activeTab, hasItems, loading, initialLoadFailed, partial, isEmpty, openCount, closedCount } = storeToRefs(store);
		const i18n = useI18n();
		const alertIcon = {
			type: "icon",
			value: "circle-alert"
		};
		const inboxIcon = {
			type: "cards",
			center: "inbox",
			sides: [
				"file-diff",
				"git-branch",
				"circle-check",
				"list",
				"message-square"
			]
		};
		const noSelectionHeading = computed(() => {
			const count = activeTab.value === "closed" ? closedCount.value : openCount.value;
			if (count === null) return i18n.baseText(`inbox.items.${activeTab.value}`);
			return i18n.baseText(`inbox.noSelection.title.${activeTab.value}`, {
				adjustToNumber: count,
				interpolate: { count: String(count) }
			});
		});
		return (_ctx, _cache) => {
			return unref(loading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: true,
				rows: 3
			})) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyStateWrapper)
			}, [unref(initialLoadFailed) && !unref(hasItems) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.emptyState),
				icon: alertIcon,
				heading: unref(i18n).baseText("workflowReviews.error.load"),
				"button-text": unref(i18n).baseText("generic.retry"),
				"onClick:button": _cache[0] || (_cache[0] = ($event) => unref(store).fetchActiveTab())
			}, null, 8, [
				"class",
				"heading",
				"button-text"
			])) : unref(partial) && !unref(hasItems) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyState),
				icon: alertIcon,
				heading: unref(i18n).baseText("inbox.partial"),
				"button-text": unref(i18n).baseText("generic.retry"),
				"onClick:button": _cache[1] || (_cache[1] = ($event) => unref(store).refreshListAndSummary())
			}, null, 8, [
				"class",
				"heading",
				"button-text"
			])) : unref(isEmpty) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 2,
				class: normalizeClass(_ctx.$style.emptyState),
				icon: inboxIcon,
				heading: unref(i18n).baseText(unref(activeTab) === "open" ? "inbox.empty.open" : "inbox.empty.closed"),
				description: unref(i18n).baseText(`inbox.empty.body.${unref(activeTab)}`),
				"data-test-id": "inbox-empty"
			}, null, 8, [
				"class",
				"heading",
				"description"
			])) : unref(hasItems) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 3,
				class: normalizeClass(_ctx.$style.emptyState),
				icon: inboxIcon,
				heading: noSelectionHeading.value,
				description: unref(i18n).baseText("inbox.noSelection.body")
			}, null, 8, [
				"class",
				"heading",
				"description"
			])) : createCommentVNode("", true)], 2));
		};
	}
});
var InboxEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	emptyStateWrapper: "_emptyStateWrapper_j3370_1",
	emptyState: "_emptyState_j3370_1"
};
var InboxEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InboxEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InboxEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/composables/useReviewInboxSectionCollapse.ts
var DEFAULT_COLLAPSED = {
	waiting: false,
	authored: false
};
/**
* Which inbox sections are collapsed, persisted per user. Collapsing only hides
* rows — the store keeps the loaded items and their cursors, so re-expanding
* never refetches.
*/
var useReviewInboxSectionCollapse = () => {
	const userId = useUsersStore().currentUserId;
	const collapsedSections = userId ? useLocalStorage(`${userId}_N8N_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS`, { ...DEFAULT_COLLAPSED }, { writeDefaults: false }) : ref({ ...DEFAULT_COLLAPSED });
	function isCollapsed(section) {
		return collapsedSections.value[section] ?? false;
	}
	function toggleSection(section) {
		collapsedSections.value = {
			...collapsedSections.value,
			[section]: !isCollapsed(section)
		};
	}
	return {
		collapsedSections,
		isCollapsed,
		toggleSection
	};
};
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/workflowReviewStatus.utils.ts
/**
* The one mapping from review state/decision to what users see — card badge,
* detail status card, and status dot all render from here so their labels and
* colors cannot drift apart. A closed review that never got a decision reads
* `No decision`, not `Waiting for review`: nobody is waiting anymore.
*/
function getWorkflowReviewStatusDisplay(i18n, state, decision) {
	const decisionKey = state === "closed" && decision === "pending" ? "workflowReviews.decision.noDecision" : `workflowReviews.decision.${decision}`;
	const decisionLabel = i18n.baseText(decisionKey);
	return {
		stateLabel: i18n.baseText(`workflowReviews.status.${state}`),
		decisionLabel,
		colorClass: state === "open" ? decision === "changes_requested" ? "changesRequested" : decision === "approved" ? "approved" : "pending" : decision === "approved" ? "approved" : "closed"
	};
}
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewStatusDot.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusDot",
	props: {
		state: {},
		decision: {},
		size: { default: "medium" },
		decorative: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => getWorkflowReviewStatusDisplay(i18n, props.state, props.decision));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({
				class: [
					_ctx.$style.dot,
					_ctx.$style[status.value.colorClass],
					__props.size === "small" && _ctx.$style.small
				],
				"data-test-id": "workflow-review-request-status-dot"
			}, __props.decorative ? { "aria-hidden": "true" } : {
				role: "img",
				"aria-label": `${status.value.stateLabel} | ${status.value.decisionLabel}`
			}), null, 16);
		};
	}
});
var WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1jjrv_1",
	small: "_small_1jjrv_8",
	pending: "_pending_1jjrv_13",
	changesRequested: "_changesRequested_1jjrv_17",
	approved: "_approved_1jjrv_21",
	closed: "_closed_1jjrv_25"
};
var WorkflowReviewStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/components/InboxListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["aria-label"];
var _hoisted_2$2 = ["title"];
var InboxListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InboxListItem",
	props: {
		item: {},
		selected: { type: Boolean }
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		function outcomeLabel(item) {
			switch (item.outcome) {
				case "fix_ready": return i18n.baseText("inbox.outcome.fixReady");
				case "needs_you": return i18n.baseText("inbox.outcome.needsAttention");
				case "could_not_fix": return i18n.baseText("inbox.outcome.couldNotFix");
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.selected]: __props.selected }]),
				role: "button",
				tabindex: "0",
				"aria-current": __props.selected ? "true" : void 0,
				"data-source": __props.item.type,
				"data-test-id": "inbox-row",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("select")),
				onKeydown: [_cache[1] || (_cache[1] = withKeys(withModifiers(($event) => emit("select"), ["prevent"]), ["enter"])), _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("select"), ["prevent"]), ["space"]))]
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [
					__props.item.type === "self_healing_result" ? (openBlock(), createBlock(unref(AskAssistantAvatar_default), {
						key: 0,
						size: "mini",
						class: normalizeClass(_ctx.$style.assistantAvatar),
						"data-test-id": "inbox-assistant-avatar"
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						bold: "",
						tag: "h3",
						class: normalizeClass([_ctx.$style.cardTitle, { [_ctx.$style.assistantTitle]: __props.item.type === "self_healing_result" }])
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.type === "workflow_review" ? __props.item.title : __props.item.summary), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.item.type === "workflow_review" ? (openBlock(), createBlock(WorkflowReviewStatusDot_default, {
						key: 1,
						state: __props.item.state,
						decision: __props.item.decision
					}, null, 8, ["state", "decision"])) : (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass([_ctx.$style.statusDot, __props.item.state === "closed" ? _ctx.$style.closed : __props.item.outcome === "fix_ready" ? _ctx.$style.fixReady : _ctx.$style.needsAttention]),
						role: "img",
						"aria-label": `${unref(i18n).baseText(__props.item.state === "open" ? "inbox.tabs.open" : "inbox.tabs.closed")} | ${outcomeLabel(__props.item)}`,
						"data-test-id": "inbox-assistant-status"
					}, null, 10, _hoisted_1$5))
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.meta) }, [__props.item.workflowName ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					variant: "outline",
					class: normalizeClass(_ctx.$style.workflowBadge)
				}, {
					default: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.workflowBadgeText),
						title: __props.item.workflowName
					}, [createVNode(unref(N8nIcon_default), {
						icon: "workflow",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(__props.item.workflowName), 1)], 10, _hoisted_2$2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaActions) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.time),
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createVNode(unref(N8nTimeAgo_default), {
						date: __props.item.updatedAt,
						locale: unref(rootStore).defaultLocale
					}, null, 8, ["date", "locale"])]),
					_: 1
				}, 8, ["class"])], 2)], 2)], 2)]),
				_: 1
			}, 8, [
				"class",
				"aria-current",
				"data-source"
			]);
		};
	}
});
var InboxListItem_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1y91r_1",
	selected: "_selected_1y91r_8",
	cardContent: "_cardContent_1y91r_22",
	cardHeader: "_cardHeader_1y91r_31",
	cardTitle: "_cardTitle_1y91r_40",
	assistantTitle: "_assistantTitle_1y91r_48",
	assistantAvatar: "_assistantAvatar_1y91r_52",
	meta: "_meta_1y91r_56",
	workflowBadge: "_workflowBadge_1y91r_65",
	workflowBadgeText: "_workflowBadgeText_1y91r_77",
	metaActions: "_metaActions_1y91r_92",
	time: "_time_1y91r_100",
	statusDot: "_statusDot_1y91r_104",
	fixReady: "_fixReady_1y91r_111",
	needsAttention: "_needsAttention_1y91r_115",
	closed: "_closed_1y91r_119"
};
var InboxListItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InboxListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InboxListItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/components/InboxListSection.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["data-section"];
var _hoisted_2$1 = [
	"id",
	"aria-expanded",
	"aria-controls"
];
var _hoisted_3 = [
	"id",
	"aria-labelledby",
	"aria-label"
];
var InboxListSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InboxListSection",
	props: {
		section: {},
		collapsed: { type: Boolean },
		selectedKey: {}
	},
	emits: [
		"select",
		"toggle",
		"loadMore",
		"retry",
		"refreshSection"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		function sectionTitle(key) {
			return key === "waiting" && usersStore.isAdminOrOwner ? i18n.baseText("workflowReviews.sidebar.section.waiting.titleAdmin") : i18n.baseText(`workflowReviews.sidebar.section.${key}.title`);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.section),
				"data-section": __props.section.key
			}, [
				__props.section.key !== "closed" ? (openBlock(), createElementBlock("button", {
					key: 0,
					id: `inbox-section-header-${__props.section.key}`,
					type: "button",
					class: normalizeClass(_ctx.$style.sectionHeader),
					"aria-expanded": !__props.collapsed,
					"aria-controls": `inbox-section-${__props.section.key}`,
					"data-test-id": "inbox-section-header",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle", __props.section.key))
				}, [createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "small",
					class: normalizeClass([_ctx.$style.chevron, { [_ctx.$style.chevronCollapsed]: __props.collapsed }])
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					bold: "",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sectionTitle(__props.section.key)), 1)]),
					_: 1
				})], 10, _hoisted_2$1)) : createCommentVNode("", true),
				createBaseVNode("div", {
					id: `inbox-section-${__props.section.key}`,
					class: normalizeClass(_ctx.$style.group),
					role: "list",
					"aria-labelledby": __props.section.key !== "closed" ? `inbox-section-header-${__props.section.key}` : void 0,
					"aria-label": __props.section.key === "closed" ? unref(i18n).baseText("inbox.tabs.closed") : void 0
				}, [!__props.collapsed ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.section.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: `${item.type}:${item.id}`,
						role: "listitem"
					}, [createVNode(InboxListItem_default, {
						item,
						selected: __props.selectedKey === `${item.type}:${item.id}`,
						onSelect: ($event) => emit("select", item)
					}, null, 8, [
						"item",
						"selected",
						"onSelect"
					])]);
				}), 128)) : createCommentVNode("", true)], 10, _hoisted_3),
				!__props.collapsed ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.section.loadingMore ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingMore)
					}, [createVNode(unref(N8nLoading_default), {
						loading: true,
						rows: 1
					})], 2)) : createCommentVNode("", true),
					__props.section.partial ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.notice),
						role: "status",
						"data-test-id": "inbox-partial"
					}, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("inbox.partial")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "mini",
						variant: "outline",
						label: unref(i18n).baseText("generic.retry"),
						onClick: _cache[1] || (_cache[1] = ($event) => emit("refreshSection"))
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true),
					__props.section.error ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.notice),
						role: "alert",
						"data-test-id": "inbox-list-error"
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("inbox.loadError")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "mini",
						variant: "outline",
						label: unref(i18n).baseText("generic.retry"),
						onClick: _cache[2] || (_cache[2] = ($event) => emit("retry"))
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true),
					__props.section.key !== "closed" && __props.section.hasMore ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 3,
						class: normalizeClass(_ctx.$style.loadMore),
						size: "small",
						variant: "outline",
						loading: __props.section.loadingMore,
						disabled: __props.section.loading,
						label: unref(i18n).baseText("inbox.loadMore"),
						"data-test-id": "inbox-load-more",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("loadMore"))
					}, null, 8, [
						"class",
						"loading",
						"disabled",
						"label"
					])) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)
			], 10, _hoisted_1$4);
		};
	}
});
var InboxListSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_4s8j7_1",
	group: "_group_4s8j7_2",
	sectionHeader: "_sectionHeader_4s8j7_9",
	chevron: "_chevron_4s8j7_30",
	chevronCollapsed: "_chevronCollapsed_4s8j7_35",
	notice: "_notice_4s8j7_39",
	loadMore: "_loadMore_4s8j7_47",
	loadingMore: "_loadingMore_4s8j7_51"
};
var InboxListSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InboxListSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InboxListSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/components/InboxList.vue?vue&type=script&setup=true&lang.ts
var InboxList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InboxList",
	props: {
		sections: {},
		activeTab: {},
		selectedKey: {},
		openCount: {},
		closedCount: {}
	},
	emits: [
		"select",
		"clear",
		"update:active-tab",
		"loadMore",
		"retry",
		"retryActiveTab",
		"refreshSection"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { isCollapsed, toggleSection } = useReviewInboxSectionCollapse();
		const loading = computed(() => props.sections.some((section) => section.loading));
		const hasUsableRows = computed(() => props.sections.some((section) => section.items.length > 0));
		const showInitialLoadError = computed(() => !hasUsableRows.value && props.sections.some((section) => section.failedRequest === "list") && !props.sections.some((section) => section.partial));
		const visibleSections = computed(() => props.sections.filter((section) => !loading.value && !showInitialLoadError.value && (section.error || section.partial || section.items.length > 0 || section.hasMore)));
		const listRef = useTemplateRef("list");
		const loadMoreSentinel = useTemplateRef("loadMoreSentinel");
		const canAutoLoad = computed(() => {
			const closed = props.sections.find((section) => section.key === "closed");
			return props.activeTab === "closed" && closed?.hasMore && !loading.value && !closed.loadingMore && !closed.error;
		});
		useIntersectionObserver(loadMoreSentinel, ([entry]) => {
			if (entry?.isIntersecting && canAutoLoad.value) emit("loadMore", "closed");
		}, {
			root: listRef,
			threshold: .01
		});
		const tabs = computed(() => [{
			value: "open",
			label: i18n.baseText("inbox.tabs.open"),
			tag: props.openCount === null ? void 0 : String(props.openCount)
		}, {
			value: "closed",
			label: i18n.baseText("inbox.tabs.closed"),
			tag: props.closedCount === null ? void 0 : String(props.closedCount)
		}]);
		function onTabChange(value) {
			if (value === "open" || value === "closed") emit("update:active-tab", value);
		}
		function onListBackgroundClick() {
			if (props.selectedKey) emit("clear");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.sidebar),
				"data-test-id": "inbox-list"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("inbox.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nTabs_default), {
					"model-value": __props.activeTab,
					options: tabs.value,
					variant: "modern",
					"data-test-id": "inbox-tabs",
					"onUpdate:modelValue": onTabChange
				}, null, 8, ["model-value", "options"])], 2),
				createBaseVNode("div", {
					ref: "list",
					class: normalizeClass(_ctx.$style.list),
					onClick: withModifiers(onListBackgroundClick, ["self"])
				}, [
					loading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						loading: true,
						rows: 3,
						"data-test-id": "inbox-list-skeleton"
					})) : showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionError),
						role: "alert",
						"data-test-id": "inbox-list-error"
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("inbox.loadError")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "mini",
						label: unref(i18n).baseText("generic.retry"),
						onClick: _cache[0] || (_cache[0] = ($event) => emit("retryActiveTab"))
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSections.value, (section) => {
						return openBlock(), createBlock(InboxListSection_default, {
							key: section.key,
							section,
							collapsed: section.key !== "closed" && unref(isCollapsed)(section.key),
							"selected-key": __props.selectedKey,
							onSelect: _cache[1] || (_cache[1] = ($event) => emit("select", $event)),
							onToggle: unref(toggleSection),
							onLoadMore: ($event) => emit("loadMore", section.key),
							onRetry: ($event) => emit("retry", section.key),
							onRefreshSection: ($event) => emit("refreshSection", section.key)
						}, null, 8, [
							"section",
							"collapsed",
							"selected-key",
							"onToggle",
							"onLoadMore",
							"onRetry",
							"onRefreshSection"
						]);
					}), 128)),
					canAutoLoad.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)) : __props.activeTab === "closed" && !loading.value && !showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)) : createCommentVNode("", true)
				], 2)
			], 2);
		};
	}
});
var InboxList_vue_vue_type_style_index_0_lang_module_default = {
	sidebar: "_sidebar_19c90_1",
	title: "_title_19c90_10",
	header: "_header_19c90_17",
	list: "_list_19c90_34",
	sectionError: "_sectionError_19c90_44",
	sentinel: "_sentinel_19c90_52"
};
var InboxList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InboxList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InboxList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/workflowReviews.api.ts
async function decideWorkflowReviewRequest(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/decision`, { ...payload });
}
async function fetchWorkflowReviewRequestDetail(context, workflowReviewRequestId) {
	return await makeRestApiRequest(context, "GET", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}`);
}
async function fetchWorkflowReviewActivity(context, workflowReviewRequestId, params) {
	return await makeRestApiRequest(context, "GET", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/activity`, params);
}
async function createWorkflowReviewComment(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/comments`, { ...payload });
}
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/reviewActivity.store.ts
var DEFAULT_LIMIT = 25;
/**
* The activity feed of one review. `entries` is ascending by id: the backend pages
* backwards, so `loadMore` prepends older pages. Posted comments merge by id.
*/
var useReviewActivityStore = defineStore("workflowReviewActivity", () => {
	const rootStore = useRootStore();
	const currentReviewId = ref(null);
	const entries = ref([]);
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const posting = ref(false);
	const error = ref(null);
	const draft = ref("");
	const decisionNote = ref("");
	let feedRequestSeq = 0;
	let postSeq = 0;
	async function fetchFeed(reviewId) {
		const requestSeq = ++feedRequestSeq;
		const switchedReview = currentReviewId.value !== reviewId;
		currentReviewId.value = reviewId;
		nextCursor.value = null;
		hasMore.value = false;
		loadingMore.value = false;
		loading.value = true;
		error.value = null;
		if (switchedReview) {
			postSeq++;
			entries.value = [];
			posting.value = false;
			draft.value = "";
			decisionNote.value = "";
		}
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, { limit: DEFAULT_LIMIT });
			if (requestSeq !== feedRequestSeq) return;
			const newestInPage = Number(response.data.at(-1)?.id ?? 0);
			entries.value = [...response.data, ...entries.value.filter((entry) => Number(entry.id) > newestInPage)];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore;
		} catch (e) {
			if (requestSeq !== feedRequestSeq) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		const reviewId = currentReviewId.value;
		const cursor = nextCursor.value;
		if (!reviewId || !cursor || loading.value || loadingMore.value) return;
		const requestSeq = ++feedRequestSeq;
		loadingMore.value = true;
		error.value = null;
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, {
				limit: DEFAULT_LIMIT,
				cursor
			});
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			entries.value = [...response.data, ...entries.value];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore && response.data.length > 0;
		} catch (e) {
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loadingMore.value = false;
		}
	}
	/**
	* Resolves `false` after a selection change. The saved comment can still belong
	* in the current feed, but the caller must not clear a new draft.
	*/
	async function postComment(body) {
		const reviewId = currentReviewId.value;
		if (!reviewId) throw new Error("Cannot post a comment without a selected review");
		const requestSeq = ++postSeq;
		posting.value = true;
		try {
			const entry = await createWorkflowReviewComment(rootStore.restApiContext, reviewId, { body });
			if (currentReviewId.value !== reviewId) return false;
			entries.value = [...entries.value.filter((existing) => existing.id !== entry.id), entry].sort((a, b) => Number(a.id) - Number(b.id));
			return requestSeq === postSeq;
		} finally {
			if (requestSeq === postSeq) posting.value = false;
		}
	}
	/**
	* Clears the decision note, unless the viewer typed something else since the submit
	* `expected` came from — both callers await a request first.
	*/
	function clearDecisionNote(expected) {
		if (decisionNote.value.trim() === expected) decisionNote.value = "";
	}
	function reset() {
		feedRequestSeq += 1;
		postSeq++;
		currentReviewId.value = null;
		entries.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		posting.value = false;
		error.value = null;
		draft.value = "";
		decisionNote.value = "";
	}
	return {
		currentReviewId,
		entries,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		posting,
		error,
		draft,
		decisionNote,
		fetchFeed,
		loadMore,
		postComment,
		clearDecisionNote,
		reset
	};
});
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activity-entries/WorkflowReviewActivityActorAvatar.vue?vue&type=script&setup=true&lang.ts
/**
* The avatar column of a feed entry that names a person: the actor's avatar, or a person
* silhouette when the actor was deleted.
*/
var WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityActorAvatar",
	props: { actor: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.actor ? (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 0,
				size: "xxsmall",
				class: normalizeClass(_ctx.$style.avatar),
				"first-name": __props.actor.firstName,
				"last-name": __props.actor.lastName
			}, null, 8, [
				"class",
				"first-name",
				"last-name"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.deletedActor),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-deleted-actor"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-user-round",
				size: 16,
				color: "text-light"
			})], 2));
		};
	}
});
var WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default = {
	avatar: "_avatar_70nmw_10",
	deletedActor: "_deletedActor_70nmw_16"
};
var WorkflowReviewActivityActorAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activity-entries/WorkflowReviewActivityComment.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["datetime"];
var WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityComment",
	props: { entry: {} },
	setup(__props) {
		const i18n = useI18n();
		const rootStore = useRootStore();
		function authorName(message) {
			return formatActorName(message.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor"));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.entry.messages, (message) => {
				return openBlock(), createElementBlock("div", {
					key: message.id,
					class: normalizeClass(_ctx.$style.message)
				}, [createVNode(WorkflowReviewActivityActorAvatar_default, { actor: message.createdBy }, null, 8, ["actor"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-comment-author"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(authorName(message)), 1)]),
					_: 2
				}, 1032, ["class"]), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light"
				}, {
					default: withCtx(() => [createBaseVNode("time", {
						datetime: message.createdAt,
						"data-test-id": "workflow-review-activity-comment-time",
						class: normalizeClass(_ctx.$style.timeStamp)
					}, [createVNode(unref(N8nTimeAgo_default), {
						date: message.createdAt,
						locale: unref(rootStore).defaultLocale
					}, null, 8, ["date", "locale"])], 10, _hoisted_1$3)]),
					_: 2
				}, 1024)], 2), message.deletedAt ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.deleted),
					"data-test-id": "workflow-review-activity-comment-deleted"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.comment.deleted")), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "medium",
					color: "text-dark",
					class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
					"data-test-id": "workflow-review-activity-comment-body"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(message.body), 1)]),
					_: 2
				}, 1032, ["class"]))], 2)], 2);
			}), 128))], 2);
		};
	}
});
var WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_rdsw0_11",
	message: "_message_rdsw0_21",
	content: "_content_rdsw0_27",
	header: "_header_rdsw0_34",
	line: "_line_rdsw0_41",
	timeStamp: "_timeStamp_rdsw0_45",
	body: "_body_rdsw0_49",
	deleted: "_deleted_rdsw0_54"
};
var WorkflowReviewActivityComment_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activity-entries/WorkflowReviewActivityFallback.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "WorkflowReviewActivityFallback",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.icon),
				"aria-hidden": "true"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-help",
				size: 16,
				color: "text-light"
			})], 2), createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light",
				class: normalizeClass(_ctx.$style.line),
				"data-test-id": "workflow-review-activity-unknown"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownEntry")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_ls3mo_10",
	icon: "_icon_ls3mo_16",
	line: "_line_ls3mo_26"
};
var WorkflowReviewActivityFallback_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activity-entries/WorkflowReviewActivityWorkflowLink.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityWorkflowLink",
	props: {
		workflowId: {},
		workflowName: {},
		version: {}
	},
	setup(__props) {
		const props = __props;
		const label = computed(() => props.version ? `${props.workflowName} ${props.version}` : props.workflowName);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nLink_default), {
				to: {
					name: unref(VIEWS).WORKFLOW,
					params: { workflowId: __props.workflowId }
				},
				theme: "text",
				size: "medium",
				"data-test-id": "workflow-review-activity-workflow-link"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "medium",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]), createTextVNode(toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["to"]);
		};
	}
});
var WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default = { icon: "_icon_1w4u3_1" };
var WorkflowReviewActivityWorkflowLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activity-entries/WorkflowReviewActivityEventEntry.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["datetime"];
var _hoisted_2 = ["datetime"];
var WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityEventEntry",
	props: { entry: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const linkedWorkflows = inject(ReviewLinkedWorkflowsKey, computed(() => /* @__PURE__ */ new Map()));
		const closedReasonKeys = { "no-reviewable-workflows": "workflowReviews.detail.closedCallout.noReviewableWorkflows" };
		/**
		* A lifecycle close concludes the feed, so it renders as a callout rather than one more
		* sentence. The body is a keypath, and the stored reason, so there is nothing to fall back to.
		*/
		const closedCallout = computed(() => {
			const entry = props.entry;
			if (entry.type !== "review.closed" || !entry.data) return null;
			return {
				title: i18n.baseText("workflowReviews.detail.closedCallout.title"),
				bodyKey: closedReasonKeys[entry.data.reason]
			};
		});
		const causeKeys = {
			"workflow.archived": {
				user: "workflowReviews.detail.activity.workflowArchived.user",
				userNamed: "workflowReviews.detail.activity.workflowArchived.user.named",
				system: "workflowReviews.detail.activity.workflowArchived.system",
				systemNamed: "workflowReviews.detail.activity.workflowArchived.system.named",
				testId: "workflow-review-activity-workflow-archived"
			},
			"workflow.deleted": {
				user: "workflowReviews.detail.activity.workflowDeleted.user",
				userNamed: "workflowReviews.detail.activity.workflowDeleted.user.named",
				system: "workflowReviews.detail.activity.workflowDeleted.system",
				systemNamed: "workflowReviews.detail.activity.workflowDeleted.system.named",
				testId: "workflow-review-activity-workflow-deleted"
			},
			"workflow.moved": {
				user: "workflowReviews.detail.activity.workflowMoved.user",
				userNamed: "workflowReviews.detail.activity.workflowMoved.user.named",
				system: "workflowReviews.detail.activity.workflowMoved.system",
				systemNamed: "workflowReviews.detail.activity.workflowMoved.system.named",
				testId: "workflow-review-activity-workflow-moved"
			}
		};
		/**
		* The sentence for one entry: an i18n key plus its placeholder values, one case per type.
		* `null` means "no sentence" — `review.closed` renders as a callout instead, and a
		* `workflow.published` entry with an unreadable payload has nothing to say. Other types
		* survive a bad payload with a reduced sentence: a decision loses its note, a cause event
		* its actor.
		*
		* `workflow` is set only when the workflow still exists.
		*
		* `namesActor` comes from the entry itself, never from `createdBy` — that is also null for
		* deleted users, whose actions must still read as a person's.
		*/
		const content = computed(() => {
			const entry = props.entry;
			const workflowId = entry.data && "workflowId" in entry.data ? entry.data.workflowId : null;
			const linked = workflowId === null ? void 0 : linkedWorkflows.value.get(workflowId);
			const workflow = workflowId !== null && linked ? {
				id: workflowId,
				name: linked.workflowName
			} : void 0;
			switch (entry.type) {
				case "review.opened": return {
					key: "workflowReviews.detail.activity.opened",
					note: null,
					testId: "workflow-review-activity-opened",
					namesActor: true
				};
				case "review.changes_requested": return {
					key: "workflowReviews.detail.activity.changesRequested",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-changes-requested",
					namesActor: true
				};
				case "review.approved": return {
					key: "workflowReviews.detail.activity.approved",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-approved",
					namesActor: true
				};
				case "review.version_updated": return {
					key: workflow ? "workflowReviews.detail.activity.versionUpdated.named" : "workflowReviews.detail.activity.versionUpdated",
					workflow,
					note: null,
					testId: "workflow-review-activity-version-updated",
					namesActor: true
				};
				case "review.closed": return null;
				case "workflow.archived":
				case "workflow.deleted":
				case "workflow.moved": {
					const keys = causeKeys[entry.type];
					const namesActor = entry.data?.actorKind === "user";
					return {
						key: namesActor ? workflow ? keys.userNamed : keys.user : workflow ? keys.systemNamed : keys.system,
						workflow,
						note: null,
						testId: keys.testId,
						namesActor
					};
				}
				case "workflow.published": {
					if (!entry.data) return null;
					const versionName = linked?.pinnedVersionId === entry.data.workflowVersionId ? linked.pinnedVersionName : null;
					return {
						key: "workflowReviews.detail.activity.workflowPublished",
						workflow,
						version: getVersionLabel({ workflowHistory: {
							versionId: entry.data.workflowVersionId,
							name: versionName
						} }),
						note: null,
						testId: "workflow-review-activity-workflow-published",
						namesActor: true
					};
				}
			}
			return null;
		});
		const actorName = computed(() => formatActorName(props.entry.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor")));
		return (_ctx, _cache) => {
			return closedCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				class: normalizeClass(_ctx.$style.closedCallout),
				"data-test-id": "workflow-review-activity-closed"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(closedCallout.value.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: closedCallout.value.bodyKey,
						scope: "global"
					}, {
						timestamp: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(unref(N8nTimeAgo_default), {
							date: __props.entry.createdAt,
							locale: unref(rootStore).defaultLocale
						}, null, 8, ["date", "locale"])], 8, _hoisted_1$2)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"])) : content.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass([_ctx.$style.entry, content.value.note && _ctx.$style.boxed])
			}, [content.value.namesActor ? (openBlock(), createBlock(WorkflowReviewActivityActorAvatar_default, {
				key: 0,
				actor: __props.entry.createdBy
			}, null, 8, ["actor"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.systemIcon),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-system-icon"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "info",
				size: 16,
				color: "text-light"
			})], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headline) }, [
				content.value.namesActor ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "medium",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-actor"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actorName.value) + " ", 1), createBaseVNode("span", {
						"aria-hidden": "true",
						class: normalizeClass(_ctx.$style.separator)
					}, "|", 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": content.value.testId
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: content.value.key,
						scope: "global"
					}, createSlots({ _: 2 }, [content.value.workflow ? {
						name: "workflowName",
						fn: withCtx(() => [createVNode(WorkflowReviewActivityWorkflowLink_default, {
							"workflow-id": content.value.workflow.id,
							"workflow-name": content.value.workflow.name,
							version: content.value.version
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"version"
						])]),
						key: "0"
					} : content.value.version ? {
						name: "workflowName",
						fn: withCtx(() => [createBaseVNode("i", { class: normalizeClass(_ctx.$style.unknownWorkflow) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownWorkflow")), 3), createTextVNode(" " + toDisplayString(content.value.version), 1)]),
						key: "1"
					} : void 0]), 1032, ["keypath"])]),
					_: 1
				}, 8, ["class", "data-test-id"]),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light",
					class: normalizeClass(_ctx.$style.timeStamp)
				}, {
					default: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(unref(N8nTimeAgo_default), {
						date: __props.entry.createdAt,
						locale: unref(rootStore).defaultLocale
					}, null, 8, ["date", "locale"])], 8, _hoisted_2)]),
					_: 1
				}, 8, ["class"])
			], 2), content.value.note ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "medium",
				color: "text-dark",
				class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
				"data-test-id": "workflow-review-activity-note"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(content.value.note), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2)) : (openBlock(), createBlock(WorkflowReviewActivityFallback_default, { key: 2 }));
		};
	}
});
var WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_ov45x_10",
	systemIcon: "_systemIcon_ov45x_16",
	content: "_content_ov45x_26",
	headline: "_headline_ov45x_34",
	separator: "_separator_ov45x_41",
	unknownWorkflow: "_unknownWorkflow_ov45x_46",
	timeStamp: "_timeStamp_ov45x_50",
	boxed: "_boxed_ov45x_55",
	closedCallout: "_closedCallout_ov45x_63",
	closedCalloutContent: "_closedCalloutContent_ov45x_67",
	line: "_line_ov45x_74",
	body: "_body_ov45x_78"
};
var WorkflowReviewActivityEventEntry_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/activityEntryRegistry.ts
var registry = {
	"comment.created": { 1: WorkflowReviewActivityComment_default },
	"review.opened": { 1: WorkflowReviewActivityEventEntry_default },
	"review.changes_requested": { 1: WorkflowReviewActivityEventEntry_default },
	"review.approved": { 1: WorkflowReviewActivityEventEntry_default },
	"review.version_updated": { 1: WorkflowReviewActivityEventEntry_default },
	"review.closed": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.archived": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.deleted": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.moved": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.published": { 1: WorkflowReviewActivityEventEntry_default }
};
function resolveActivityComponent(entry) {
	return registry[entry.type]?.[entry.typeVersion] ?? WorkflowReviewActivityFallback_default;
}
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewActivityFeed.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityFeed",
	setup(__props) {
		const i18n = useI18n();
		const store = useReviewActivityStore();
		const { entries, loading, loadingMore, hasMore, error } = storeToRefs(store);
		const scrollContainer = inject(ReviewDetailScrollContainerKey, ref(null));
		const feed = ref(null);
		const list = ref(null);
		const sentinel = ref(null);
		const composer = ref(null);
		const initialScrollApplied = ref(false);
		let prependAnchor = null;
		const enteringIds = ref(/* @__PURE__ */ new Set());
		function scrollToBottom() {
			const container = scrollContainer.value;
			if (container) container.scrollTop = container.scrollHeight;
		}
		const { observe } = useIntersectionObserver$1({
			root: scrollContainer,
			threshold: .01,
			onIntersect: () => {
				const element = list.value?.firstElementChild ?? null;
				prependAnchor = element ? {
					element,
					top: element.getBoundingClientRect().top
				} : null;
				store.loadMore();
			}
		});
		watch([
			sentinel,
			hasMore,
			loadingMore,
			() => entries.value.length
		], ([sentinelElement, moreToLoad, isLoadingMore]) => {
			if (sentinelElement && moreToLoad && !isLoadingMore) observe(sentinelElement);
		}, {
			immediate: true,
			flush: "post"
		});
		watch(entries, (next, previous) => {
			const anchor = prependAnchor?.element.isConnected === true ? prependAnchor : null;
			prependAnchor = null;
			if (next.length === 0) return;
			if (!previous || previous.length === 0) {
				scrollToBottom();
				return;
			}
			if (next[0]?.id !== previous[0]?.id) {
				const container = scrollContainer.value;
				if (!container || !anchor) {
					scrollToBottom();
					return;
				}
				container.scrollTop += anchor.element.getBoundingClientRect().top - anchor.top;
				return;
			}
			if (next.at(-1)?.id !== previous.at(-1)?.id) scrollToBottom();
		}, { flush: "post" });
		watch(entries, (next, previous) => {
			if (next.length === 0) {
				enteringIds.value = /* @__PURE__ */ new Set();
				return;
			}
			const lastShown = previous?.at(-1);
			if (!lastShown) return;
			const newer = next.filter((entry) => Number(entry.id) > Number(lastShown.id));
			if (newer.length > 0) enteringIds.value = new Set(newer.map((entry) => entry.id));
		}, { flush: "post" });
		let composerHeight = 0;
		useResizeObserver(composer, ([entry]) => {
			const height = entry?.borderBoxSize[0]?.blockSize ?? 0;
			const growth = height - composerHeight;
			composerHeight = height;
			feed.value?.style.setProperty("--review-activity--composer-height", `${height}px`);
			const container = scrollContainer.value;
			if (!container || growth <= 0) return;
			if (container.scrollHeight - container.clientHeight - container.scrollTop <= growth + 1) scrollToBottom();
		});
		function retry() {
			if (!store.nextCursor) {
				if (store.currentReviewId) store.fetchFeed(store.currentReviewId);
				return;
			}
			store.loadMore();
		}
		onMounted(() => {
			if (entries.value.length > 0) scrollToBottom();
			initialScrollApplied.value = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "feed",
				ref: feed,
				class: normalizeClass([_ctx.$style.feed, { [_ctx.$style.feedWithComposer]: _ctx.$slots.composer }]),
				"data-test-id": "workflow-review-activity-feed"
			}, [
				_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.header)
				}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
				unref(loading) && unref(entries).length === 0 ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: true,
					rows: 3
				})) : unref(error) && unref(entries).length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorRow),
					"data-test-id": "workflow-review-activity-error"
				}, [createVNode(unref(N8nText_default), {
					color: "danger",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "mini",
					variant: "outline",
					"data-test-id": "workflow-review-activity-retry",
					onClick: _cache[0] || (_cache[0] = ($event) => retry())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
					initialScrollApplied.value && unref(hasMore) && !unref(error) ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref_key: "sentinel",
						ref: sentinel,
						class: normalizeClass(_ctx.$style.sentinel),
						"data-test-id": "workflow-review-activity-load-more-sentinel"
					}, null, 2)) : createCommentVNode("", true),
					unref(loadingMore) || unref(loading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 1,
						loading: true,
						rows: 1
					})) : createCommentVNode("", true),
					unref(error) ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.errorRow)
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "mini",
						variant: "outline",
						"data-test-id": "workflow-review-activity-load-more-retry",
						onClick: _cache[1] || (_cache[1] = ($event) => retry())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium",
						class: normalizeClass(_ctx.$style.header)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.tabs.activity")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", {
						ref_key: "list",
						ref: list,
						role: "list",
						"aria-label": unref(i18n).baseText("workflowReviews.detail.activity.listLabel"),
						class: normalizeClass(_ctx.$style.list)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(entries), (entry) => {
						return openBlock(), createElementBlock("div", {
							key: entry.id,
							role: "listitem",
							class: normalizeClass([_ctx.$style.item, { [_ctx.$style.itemEntering]: enteringIds.value.has(entry.id) }]),
							"data-test-id": "workflow-review-activity-entry"
						}, [(openBlock(), createBlock(resolveDynamicComponent(unref(resolveActivityComponent)(entry)), { entry }, null, 8, ["entry"]))], 2);
					}), 128)), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
						key: 0,
						role: "listitem",
						class: normalizeClass(_ctx.$style.item)
					}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 10, _hoisted_1$1)
				], 64)),
				_ctx.$slots.composer ? (openBlock(), createElementBlock("div", {
					key: 4,
					ref_key: "composer",
					ref: composer,
					class: normalizeClass(_ctx.$style.composer)
				}, [renderSlot(_ctx.$slots, "composer")], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewActivityFeed.vue?vue&type=style&index=0&lang.module.scss
var feed = "_feed_l3apd_276";
var header$1 = "_header_l3apd_290";
var list$1 = "_list_l3apd_295";
var item$1 = "_item_l3apd_303";
var itemEntering = "_itemEntering_l3apd_313";
var fadeInUp = "_fadeInUp_l3apd_1";
var feedWithComposer = "_feedWithComposer_l3apd_339";
var composer$1 = "_composer_l3apd_344";
var errorRow = "_errorRow_l3apd_355";
var sentinel = "_sentinel_l3apd_362";
var shimmer = "_shimmer_l3apd_1";
var spin = "_spin_l3apd_1";
var opacityPulse = "_opacityPulse_l3apd_1";
var popoverIn = "_popoverIn_l3apd_1";
var fadeIn = "_fadeIn_l3apd_1";
var collapsibleSlideDown = "_collapsibleSlideDown_l3apd_1";
var collapsibleSlideUp = "_collapsibleSlideUp_l3apd_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_l3apd_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_l3apd_1";
var blurSwapIn = "_blurSwapIn_l3apd_1";
var blurSwapOut = "_blurSwapOut_l3apd_1";
var pulseGlow = "_pulseGlow_l3apd_1";
var pulseGlowDelayed = "_pulseGlowDelayed_l3apd_1";
var fade = "_fade_l3apd_1";
var fadeInDown = "_fadeInDown_l3apd_1";
var fadeInLeft = "_fadeInLeft_l3apd_1";
var fadeInRight = "_fadeInRight_l3apd_1";
var fadeOut = "_fadeOut_l3apd_1";
var fadeOutDown = "_fadeOutDown_l3apd_1";
var fadeOutUp = "_fadeOutUp_l3apd_1";
var fadeOutLeft = "_fadeOutLeft_l3apd_1";
var fadeOutRight = "_fadeOutRight_l3apd_1";
var ping = "_ping_l3apd_1";
var blinkBackground = "_blinkBackground_l3apd_1";
var typingBlink = "_typingBlink_l3apd_1";
var WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default = {
	feed,
	header: header$1,
	list: list$1,
	item: item$1,
	itemEntering,
	fadeInUp,
	feedWithComposer,
	composer: composer$1,
	errorRow,
	sentinel,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_l3apd_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var WorkflowReviewActivityFeed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewChangesSection.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewChangesSection",
	props: {
		workflow: {},
		state: {},
		decision: {}
	},
	setup(__props) {
		const WorkflowDiffView = computed(() => get("workflow-diff"));
		const props = __props;
		const i18n = useI18n();
		const isApproved = computed(() => props.state === "closed" && props.decision === "approved");
		const isClosedWithoutApproval = computed(() => props.state === "closed" && props.decision !== "approved");
		/**
		* Label each side the way version history does, falling back to a short id.
		* Falsy rather than nullish: the publish endpoints accept `name: ""`.
		*/
		const versionLabel = (snapshot) => getVersionLabel({ workflowHistory: snapshot });
		/**
		* A snapshot minus its identity and metadata — i.e. everything the diff renders.
		* Derived by omission rather than an explicit field list to avoid drift; renaming
		* a version must not read as a change.
		*/
		function contentOf(snapshot) {
			return (0, import_omit.default)(snapshot, [
				"versionId",
				"name",
				"createdAt"
			]);
		}
		const hasChanges = computed(() => {
			const { pinnedVersion, baselineVersion } = props.workflow;
			if (!pinnedVersion) return false;
			if (!baselineVersion) return true;
			if (pinnedVersion.versionId === baselineVersion.versionId) return false;
			return !(0, import_isEqual.default)(contentOf(baselineVersion), contentOf(pinnedVersion));
		});
		const sourceDotClass = computed(() => isApproved.value ? "statusDotSuperseded" : "statusDotPublished");
		const targetDotClass = computed(() => isApproved.value ? "statusDotPublished" : "statusDotInReview");
		const noChangesText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.noChanges" : "workflowReviews.changes.noChanges"));
		const sourceEmptyText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.firstPublish.sourceEmpty" : "workflowReviews.changes.firstPublish.sourceEmpty"));
		const sourceLabel = computed(() => props.workflow.baselineVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.sourceLabel" : "workflowReviews.changes.sourceLabel", { interpolate: { version: versionLabel(props.workflow.baselineVersion) } }) : void 0);
		const targetLabel = computed(() => props.workflow.pinnedVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.targetLabel" : "workflowReviews.changes.targetLabel", { interpolate: { version: versionLabel(props.workflow.pinnedVersion) } }) : void 0);
		return (_ctx, _cache) => {
			return isClosedWithoutApproval.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-closed-without-approval"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.closedWithoutApproval")), 1)]),
				_: 1
			}, 8, ["class"])) : !__props.workflow.pinnedVersion ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-version-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.versionUnavailable.body")), 1)]),
				_: 1
			}, 8, ["class"])) : !hasChanges.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-no-changes"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(noChangesText.value), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.diff),
				"data-review-diff": "",
				"data-test-id": "workflow-review-changes-diff"
			}, [(openBlock(), createBlock(resolveDynamicComponent(WorkflowDiffView.value), {
				"source-snapshot": __props.workflow.baselineVersion ?? void 0,
				"workflow-id": __props.workflow.workflowId,
				"workflow-name": __props.workflow.workflowName,
				"target-snapshot": __props.workflow.pinnedVersion ?? void 0,
				"source-label": sourceLabel.value,
				"target-label": targetLabel.value,
				"canvas-id-prefix": __props.workflow.workflowId,
				"show-fullscreen-button": "",
				"hide-title": ""
			}, createSlots({
				targetLabel: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-target-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[targetDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(targetLabel.value), 1)]),
					_: 1
				})], 2)]),
				sourceEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceEmptyText.value), 1)]),
					_: 1
				})]),
				_: 2
			}, [__props.workflow.baselineVersion ? {
				name: "sourceLabel",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-source-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[sourceDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceLabel.value), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"source-snapshot",
				"workflow-id",
				"workflow-name",
				"target-snapshot",
				"source-label",
				"target-label",
				"canvas-id-prefix"
			]))], 2));
		};
	}
});
var WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_19xza_1",
	versionBadge: "_versionBadge_19xza_6",
	statusDot: "_statusDot_19xza_27",
	statusDotPublished: "_statusDotPublished_19xza_35",
	statusDotInReview: "_statusDotInReview_19xza_39",
	statusDotSuperseded: "_statusDotSuperseded_19xza_43",
	diff: "_diff_19xza_47"
};
var WorkflowReviewChangesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewChangesList.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewChangesList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewChangesList",
	props: /* @__PURE__ */ mergeModels({
		workflows: {},
		state: {},
		decision: {}
	}, {
		"expanded": {},
		"expandedModifiers": {}
	}),
	emits: ["update:expanded"],
	setup(__props) {
		/** The open workflow's id. The parent owns it, so it survives a tab switch. */
		const expanded = useModel(__props, "expanded");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AccordionRoot_default), {
				modelValue: expanded.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => expanded.value = $event),
				type: "single",
				collapsible: "",
				"unmount-on-hide": "",
				class: normalizeClass(_ctx.$style.list)
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.workflows, (workflow) => {
					return openBlock(), createBlock(unref(AccordionItem_default), {
						key: workflow.workflowId,
						value: workflow.workflowId,
						class: normalizeClass(_ctx.$style.item),
						"data-test-id": "workflow-review-changes-item"
					}, {
						default: withCtx(() => [createVNode(unref(AccordionHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
							default: withCtx(() => [createVNode(unref(AccordionTrigger_default), {
								class: normalizeClass(_ctx.$style.trigger),
								"data-test-id": "workflow-review-changes-item-trigger"
							}, {
								default: withCtx(() => [
									createVNode(unref(N8nIcon_default), {
										icon: "chevron-down",
										size: "small",
										class: normalizeClass(_ctx.$style.chevron)
									}, null, 8, ["class"]),
									createVNode(unref(N8nText_default), {
										bold: "",
										size: "medium",
										color: "text-dark",
										class: normalizeClass(_ctx.$style.name)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(workflow.workflowName), 1)]),
										_: 2
									}, 1032, ["class"]),
									workflow.pinnedVersion ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 0,
										size: "small",
										color: "text-light",
										class: normalizeClass(_ctx.$style.version),
										"data-test-id": "workflow-review-changes-item-version"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(getVersionLabel)({ workflowHistory: workflow.pinnedVersion })), 1)]),
										_: 2
									}, 1032, ["class"])) : createCommentVNode("", true)
								]),
								_: 2
							}, 1032, ["class"])]),
							_: 2
						}, 1032, ["class"]), createVNode(unref(AccordionContent_default), { class: normalizeClass(_ctx.$style.content) }, {
							default: withCtx(() => [createVNode(WorkflowReviewChangesSection_default, {
								workflow,
								state: __props.state,
								decision: __props.decision
							}, null, 8, [
								"workflow",
								"state",
								"decision"
							])]),
							_: 2
						}, 1032, ["class"])]),
						_: 2
					}, 1032, ["value", "class"]);
				}), 128))]),
				_: 1
			}, 8, ["modelValue", "class"]);
		};
	}
});
var WorkflowReviewChangesList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_16lzz_1",
	item: "_item_16lzz_9",
	header: "_header_16lzz_23",
	trigger: "_trigger_16lzz_27",
	chevron: "_chevron_16lzz_46",
	name: "_name_16lzz_55",
	version: "_version_16lzz_56",
	content: "_content_16lzz_67"
};
var WorkflowReviewChangesList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewChangesList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewChangesList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewCommentComposer.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewCommentComposer",
	props: { canComment: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, draft } = storeToRefs(store);
		const submitDisabled = computed(() => posting.value || draft.value.trim().length === 0 || draft.value.length > 1e4 || !props.canComment);
		async function onSubmit() {
			const submitted = draft.value;
			const body = submitted.trim();
			if (!body) return;
			try {
				if (await store.postComment(body) && draft.value === submitted) draft.value = "";
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("label", { class: normalizeClass(_ctx.$style.composer) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.srOnly) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.composer.label")), 3), createVNode(unref(N8nChatInput_default), {
				modelValue: unref(draft),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(draft) ? draft.value = $event : null),
				layout: "adaptive",
				"max-length": unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
				placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
				"refocus-after-send": "",
				disabled: !__props.canComment,
				"disabled-tooltip": unref(i18n).baseText("workflowReviews.detail.activity.composer.notAllowed"),
				"submit-disabled": submitDisabled.value,
				"data-test-id": "workflow-review-comment-composer",
				onSubmit
			}, null, 8, [
				"modelValue",
				"max-length",
				"placeholder",
				"disabled",
				"disabled-tooltip",
				"submit-disabled"
			])], 2);
		};
	}
});
var WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_1g329_1",
	srOnly: "_srOnly_1g329_5"
};
var WorkflowReviewCommentComposer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewDecisionPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDecisionPopover",
	props: {
		deciding: { type: Boolean },
		viewerCanDecide: { type: Boolean },
		viewerCanComment: { type: Boolean },
		ineligibilityHint: {}
	},
	emits: ["decide", "comment-posted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, decisionNote } = storeToRefs(store);
		const isOpen = ref(false);
		const noteInputId = useId();
		const note = computed(() => decisionNote.value.trim());
		const commentDisabled = computed(() => posting.value || props.deciding || note.value.length === 0 || !props.viewerCanComment);
		const decisionDisabled = computed(() => props.deciding || posting.value);
		function submitDecision(input) {
			isOpen.value = false;
			emit("decide", input);
		}
		function onRequestChanges() {
			submitDecision({
				decision: "changes_requested",
				note: note.value
			});
		}
		function onApprove() {
			submitDecision(note.value ? {
				decision: "approved",
				note: note.value
			} : { decision: "approved" });
		}
		async function onComment() {
			const body = note.value;
			isOpen.value = false;
			try {
				if (!await store.postComment(body)) return;
				store.clearDecisionNote(body);
				emit("comment-posted");
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				width: "480px",
				"enable-scrolling": false,
				"content-class": _ctx.$style.popover
			}, {
				trigger: withCtx(() => [__props.ineligibilityHint ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(unref(N8nTooltip_default), {
					content: __props.ineligibilityHint,
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						disabled: __props.deciding || !__props.viewerCanDecide,
						"data-test-id": "workflow-review-decision-trigger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["content"])])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					size: "small",
					disabled: __props.deciding || !__props.viewerCanDecide,
					"data-test-id": "workflow-review-decision-trigger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
					_: 1
				}, 8, ["disabled"]))]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "workflow-review-decision-popover"
				}, [createVNode(unref(Input_default), {
					id: unref(noteInputId),
					modelValue: unref(decisionNote),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(decisionNote) ? decisionNote.value = $event : null),
					"aria-label": unref(i18n).baseText("workflowReviews.detail.decision.note.label"),
					type: "textarea",
					rows: 3,
					maxlength: unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
					placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
					class: normalizeClass(_ctx.$style.input),
					"data-test-id": "workflow-review-decision-note"
				}, null, 8, [
					"id",
					"modelValue",
					"aria-label",
					"maxlength",
					"placeholder",
					"class"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: commentDisabled.value,
						"data-test-id": "workflow-review-decision-comment-button",
						onClick: onComment
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "message-square" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.comment")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					createVNode(unref(N8nTooltip_default), {
						disabled: !!note.value,
						content: unref(i18n).baseText("workflowReviews.detail.decision.note.required"),
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							disabled: !note.value || decisionDisabled.value,
							"data-test-id": "workflow-review-decision-request-changes-button",
							onClick: onRequestChanges
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "refresh-cw" })]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.requestChanges")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["disabled", "content"]),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: decisionDisabled.value,
						"data-test-id": "workflow-review-decision-approve-button",
						onClick: onApprove
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "check" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.approveAndPublish")), 1)]),
						_: 1
					}, 8, ["disabled"])
				], 2)], 2)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
var WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default = {
	popover: "_popover_v2y1m_1",
	content: "_content_v2y1m_5",
	input: "_input_v2y1m_11",
	actions: "_actions_v2y1m_15"
};
var WorkflowReviewDecisionPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewDetailMetadata.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailMetadata",
	props: { review: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const otherAuthors = computed(() => props.review.authors.filter((author) => author.id !== props.review.requester?.id));
		const statusSummary = computed(() => getWorkflowReviewStatusDisplay(i18n, props.review.state, props.review.decision));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.metadata),
				"data-test-id": "workflow-review-detail-metadata"
			}, [
				createVNode(unref(N8nCard_default), {
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-status-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.status")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.status) }, [createVNode(WorkflowReviewStatusDot_default, {
						state: __props.review.state,
						decision: __props.review.decision,
						decorative: ""
					}, null, 8, ["state", "decision"]), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(statusSummary.value.stateLabel) + " ", 1),
							createBaseVNode("span", {
								"aria-hidden": "true",
								class: normalizeClass(_ctx.$style.statusSeparator)
							}, "|", 2),
							createTextVNode(" " + toDisplayString(statusSummary.value.decisionLabel), 1)
						]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					class: normalizeClass([_ctx.$style.card, _ctx.$style.peopleCard]),
					"data-test-id": "workflow-review-detail-people-card"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requestedBy")), 1)]),
							_: 1
						}), __props.review.requester ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.person)
						}, [createVNode(unref(N8nAvatar_default), {
							"first-name": __props.review.requester.firstName,
							"last-name": __props.review.requester.lastName,
							size: "xsmall"
						}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(__props.review.requester)), 1)]),
							_: 1
						})], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: "text-light",
							size: "medium",
							"data-test-id": "workflow-review-detail-requester-deleted"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requesterDeleted")), 1)]),
							_: 1
						}))], 2),
						otherAuthors.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.section),
							"data-test-id": "workflow-review-detail-other-authors"
						}, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.otherAuthors")), 1)]),
							_: 1
						}), (openBlock(true), createElementBlock(Fragment, null, renderList(otherAuthors.value, (author) => {
							return openBlock(), createElementBlock("div", {
								key: author.id,
								class: normalizeClass(_ctx.$style.person)
							}, [createVNode(unref(N8nAvatar_default), {
								"first-name": author.firstName,
								"last-name": author.lastName,
								size: "xsmall"
							}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(author)), 1)]),
								_: 2
							}, 1024)], 2);
						}), 128))], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [
							createVNode(unref(N8nText_default), {
								bold: "",
								color: "text-light",
								size: "medium"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.reviewers")), 1)]),
								_: 1
							}),
							(openBlock(true), createElementBlock(Fragment, null, renderList(__props.review.reviewers, (reviewer) => {
								return openBlock(), createElementBlock("div", {
									key: reviewer.id,
									class: normalizeClass(_ctx.$style.person)
								}, [createVNode(unref(N8nAvatar_default), {
									"first-name": reviewer.firstName,
									"last-name": reviewer.lastName,
									size: "xsmall"
								}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(reviewer)), 1)]),
									_: 2
								}, 1024)], 2);
							}), 128)),
							__props.review.reviewers.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-light",
								size: "medium",
								"data-test-id": "workflow-review-detail-no-reviewers"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.noReviewers")), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						], 2)
					]),
					_: 1
				}, 8, ["class"]),
				detail.value?.workflows.length ? (openBlock(), createBlock(unref(N8nCard_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-changes-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.workflow", { adjustToNumber: detail.value.workflows.length })), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.workflows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.workflows, (workflow) => {
						return openBlock(), createBlock(unref(N8nLink_default), {
							key: workflow.workflowId,
							to: {
								name: unref(VIEWS).WORKFLOW,
								params: { workflowId: workflow.workflowId }
							},
							theme: "text",
							size: "medium",
							class: normalizeClass(_ctx.$style.workflow),
							"data-test-id": "workflow-review-detail-workflow-link"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "workflow",
								size: "medium",
								class: normalizeClass(_ctx.$style.workflowIcon)
							}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.workflowName) }, toDisplayString(workflow.workflowName), 3)]),
							_: 2
						}, 1032, ["to", "class"]);
					}), 128))], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default = {
	metadata: "_metadata_ferqb_1",
	card: "_card_ferqb_13",
	status: "_status_ferqb_24",
	section: "_section_ferqb_30",
	workflows: "_workflows_ferqb_31",
	statusSeparator: "_statusSeparator_ferqb_38",
	peopleCard: "_peopleCard_ferqb_43",
	person: "_person_ferqb_47",
	workflow: "_workflow_ferqb_31",
	workflowName: "_workflowName_ferqb_69",
	workflowIcon: "_workflowIcon_ferqb_76"
};
var WorkflowReviewDetailMetadata_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/components/WorkflowReviewDetailTabs.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailTabs",
	props: {
		review: {},
		tab: {},
		deciding: { type: Boolean }
	},
	emits: ["update:tab", "decide"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		provide(ReviewDetailScrollContainerKey, useTemplateRef("detailBody"));
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const expandedWorkflowId = ref();
		let expandedReviewId;
		watch(detail, (value) => {
			if (!value?.workflows.length) return;
			const open = expandedWorkflowId.value;
			const isListed = value.workflows.some(({ workflowId }) => workflowId === open);
			if (value.id === expandedReviewId && (open === void 0 || isListed)) return;
			expandedReviewId = value.id;
			expandedWorkflowId.value = value.workflows[0].workflowId;
		}, { immediate: true });
		const viewerCanDecide = computed(() => detail.value?.viewerCanDecide ?? false);
		const viewerCanComment = computed(() => detail.value?.viewerCanComment ?? false);
		provide(ReviewLinkedWorkflowsKey, computed(() => new Map((detail.value?.workflows ?? []).map((workflow) => [workflow.workflowId, {
			workflowName: workflow.workflowName,
			pinnedVersionId: workflow.workflowVersionId,
			pinnedVersionName: workflow.pinnedVersion?.name ?? null
		}]))));
		const ineligibilityHint = computed(() => {
			if (!detail.value || detail.value.viewerCanDecide) return "";
			return detail.value.viewerDecisionIneligibilityReason === "author" ? i18n.baseText("workflowReviews.detail.decision.ineligible.author") : i18n.baseText("generic.missing.permissions");
		});
		/**
		* Whether to append the approved-and-published summary below the feed. Derived at read
		* time from the live published pointer, not from a `workflow.published` entry: an entry
		* can sit on an unfetched feed page, and it would keep the summary up after a newer
		* version replaced this one. The pointer cannot claim a publication that isn't live —
		* a failed publish either left the pin unpublished (no summary) or never touched a pin
		* that was already live (summary true) — and it is the signal the canvas banner trusts,
		* so the two cannot disagree. A lifecycle close needs no summary here: its
		* `review.closed` entry renders as a callout.
		*/
		const showApprovedAndPublished = computed(() => {
			const review = detail.value;
			if (review?.state !== "closed" || review.decision !== "approved") return false;
			return review.workflows.length > 0 && review.workflows.every((workflow) => workflow.workflowVersionId !== null && workflow.publishedVersionId === workflow.workflowVersionId);
		});
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.detail.tabs.activity"),
			value: "activity"
		}, {
			label: i18n.baseText("workflowReviews.detail.tabs.changes"),
			value: "changes"
		}]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "workflow-review-detail-tabs"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabRow) }, [createVNode(unref(N8nTabs_default), {
				"model-value": __props.tab,
				options: tabOptions.value,
				variant: "modern",
				"data-test-id": "workflow-review-detail-tab-bar",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:tab", $event))
			}, null, 8, ["model-value", "options"]), detail.value?.state === "open" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.decisionActions)
			}, [createVNode(WorkflowReviewDecisionPopover_default, {
				deciding: __props.deciding,
				"viewer-can-decide": viewerCanDecide.value,
				"viewer-can-comment": viewerCanComment.value,
				"ineligibility-hint": ineligibilityHint.value,
				onDecide: _cache[1] || (_cache[1] = ($event) => emit("decide", $event)),
				onCommentPosted: _cache[2] || (_cache[2] = ($event) => emit("update:tab", "activity"))
			}, null, 8, [
				"deciding",
				"viewer-can-decide",
				"viewer-can-comment",
				"ineligibility-hint"
			])], 2)) : createCommentVNode("", true)], 2), (openBlock(), createElementBlock("div", {
				key: `${__props.review.id}:${__props.tab}`,
				ref: "detailBody",
				class: normalizeClass(_ctx.$style.detailBody)
			}, [__props.tab === "activity" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.activityPanel),
				"data-test-id": "workflow-review-activity-panel"
			}, [(openBlock(), createBlock(WorkflowReviewActivityFeed_default, { key: __props.review.id }, createSlots({
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.descriptionCard) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					bold: "",
					color: "text-light",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.description")), 1)]),
					_: 1
				}), detail.value?.description ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base",
					size: "medium",
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "workflow-review-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(detail.value.description), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-review-no-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.noDescription")), 1)]),
					_: 1
				}))], 2)]),
				_: 2
			}, [showApprovedAndPublished.value ? {
				name: "footer",
				fn: withCtx(() => [createVNode(unref(N8nCallout_default), {
					theme: "success",
					class: normalizeClass(_ctx.$style.closedCallout),
					"data-test-id": "workflow-review-closed-callout"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.approvedAndPublished")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"])]),
				key: "0"
			} : void 0, __props.review.state === "open" ? {
				name: "composer",
				fn: withCtx(() => [createVNode(WorkflowReviewCommentComposer_default, { "can-comment": viewerCanComment.value }, null, 8, ["can-comment"])]),
				key: "1"
			} : void 0]), 1024))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "workflow-review-changes-panel"
			}, [!detail.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.unavailable")), 1)]),
				_: 1
			}, 8, ["class"])) : detail.value.workflows.length > 0 ? (openBlock(), createBlock(WorkflowReviewChangesList_default, {
				key: 1,
				expanded: expandedWorkflowId.value,
				"onUpdate:expanded": _cache[3] || (_cache[3] = ($event) => expandedWorkflowId.value = $event),
				workflows: detail.value.workflows,
				state: detail.value.state,
				decision: detail.value.decision
			}, null, 8, [
				"expanded",
				"workflows",
				"state",
				"decision"
			])) : (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-workflow-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.workflowUnavailable")), 1)]),
				_: 1
			}, 8, ["class"]))], 2)), createVNode(WorkflowReviewDetailMetadata_default, { review: __props.review }, null, 8, ["review"])], 2))], 2);
		};
	}
});
var WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1utw9_10",
	tabRow: "_tabRow_1utw9_19",
	detailBody: "_detailBody_1utw9_33",
	panel: "_panel_1utw9_43",
	activityPanel: "_activityPanel_1utw9_48",
	descriptionCard: "_descriptionCard_1utw9_55",
	callout: "_callout_1utw9_65",
	closedCallout: "_closedCallout_1utw9_70",
	closedCalloutContent: "_closedCalloutContent_1utw9_74",
	description: "_description_1utw9_55",
	decisionActions: "_decisionActions_1utw9_87"
};
var WorkflowReviewDetailTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/reviewDetail.store.ts
var useReviewDetailStore = defineStore("workflowReviewDetail", () => {
	const rootStore = useRootStore();
	const detail = ref(null);
	const detailLoading = ref(false);
	const detailNotFound = ref(false);
	const deciding = ref(false);
	const selectionRevision = ref(0);
	let requestSeq = 0;
	async function fetchDetail(id) {
		const seq = ++requestSeq;
		if (detail.value?.id !== id) {
			detail.value = null;
			detailLoading.value = true;
			detailNotFound.value = false;
		}
		try {
			const response = await fetchWorkflowReviewRequestDetail(rootStore.restApiContext, id);
			if (seq !== requestSeq) return;
			detail.value = response;
			detailNotFound.value = false;
		} catch (error) {
			if (seq !== requestSeq) return;
			if (error instanceof ResponseError && error.httpStatusCode === 404) {
				detailNotFound.value = true;
				return;
			}
			throw error;
		} finally {
			if (seq === requestSeq) detailLoading.value = false;
		}
	}
	async function decideOnReview(id, input) {
		const response = await decideWorkflowReviewRequest(rootStore.restApiContext, id, input);
		if (detail.value?.id === id) {
			detail.value.decision = response.decision;
			detail.value.state = response.state;
			detail.value.updatedAt = response.updatedAt;
		}
		return response;
	}
	function clearDetail() {
		requestSeq++;
		selectionRevision.value++;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
	}
	return {
		detail,
		detailLoading,
		detailNotFound,
		deciding,
		selectionRevision,
		fetchDetail,
		decideOnReview,
		clearDetail
	};
});
//#endregion
//#region ../../modules/inbox/frontend/src/reviews/WorkflowReviewDetail.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetail",
	props: {
		reviewId: {},
		listItem: {},
		tab: { default: "activity" },
		onItemChange: {},
		isActive: {},
		isSelected: {}
	},
	emits: ["update:tab"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const reviewStore = useReviewDetailStore();
		const activityStore = useReviewActivityStore();
		const { detail, detailLoading, detailNotFound, deciding } = storeToRefs(reviewStore);
		const i18n = useI18n();
		const { showError, showMessage } = useToast();
		const alertIcon = {
			type: "icon",
			value: "circle-alert"
		};
		const review = computed(() => {
			if (detail.value?.id === props.reviewId) return detail.value;
			return props.listItem?.id === props.reviewId ? props.listItem : null;
		});
		let isMounted = false;
		let selectionRevision = 0;
		function ownsSelection(id, revision = selectionRevision) {
			return isMounted && props.reviewId === id && revision === selectionRevision && revision === reviewStore.selectionRevision;
		}
		async function loadDetail(id, revision) {
			try {
				await reviewStore.fetchDetail(id);
			} catch (error) {
				if (props.isActive() && props.isSelected(id) && revision === reviewStore.selectionRevision) showError(error, i18n.baseText("workflowReviews.error.load"));
			}
		}
		watch(() => props.reviewId, (id) => {
			reviewStore.clearDetail();
			activityStore.reset();
			selectionRevision = reviewStore.selectionRevision;
			loadDetail(id, selectionRevision);
			activityStore.fetchFeed(id);
		}, { immediate: true });
		function asSentence(message) {
			const trimmed = message.trim();
			return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
		}
		async function onDecide(input) {
			const id = props.reviewId;
			const revision = selectionRevision;
			if (!ownsSelection(id, revision) || deciding.value) return;
			const onItemChange = props.onItemChange;
			const isActive = props.isActive;
			const isSelected = props.isSelected;
			deciding.value = true;
			try {
				const { autoPublish, state, decision, updatedAt } = await reviewStore.decideOnReview(id, input);
				onItemChange({
					type: "workflow_review",
					id,
					state,
					decision,
					updatedAt
				});
				if (ownsSelection(id, revision)) activityStore.clearDecisionNote(input.note ?? "");
				if (isSelected(id)) {
					activityStore.fetchFeed(id);
					if (state === "closed" || detail.value?.id !== id) loadDetail(id, reviewStore.selectionRevision);
				}
				if (!isActive()) return;
				if (autoPublish?.status === "published") showMessage({
					type: "success",
					title: i18n.baseText("workflowReviews.decision.approved.published.title"),
					message: i18n.baseText("workflowReviews.decision.approved.published.message")
				});
				else if (autoPublish?.status === "failed") showMessage({
					type: "warning",
					duration: 0,
					title: i18n.baseText("workflowReviews.decision.approved.publishFailed.title"),
					message: i18n.baseText("workflowReviews.decision.approved.publishFailed.message", { interpolate: { message: asSentence(autoPublish.message) } })
				});
			} catch (error) {
				onItemChange({
					type: "workflow_review",
					id
				});
				if (!isActive()) return;
				showError(error, i18n.baseText("workflowReviews.decision.error.title"));
				const selectedId = activityStore.currentReviewId;
				if (selectedId && isSelected(selectedId)) await Promise.all([loadDetail(selectedId, reviewStore.selectionRevision), selectedId === id ? activityStore.fetchFeed(id) : void 0]);
			} finally {
				deciding.value = false;
			}
		}
		onMounted(() => {
			isMounted = true;
		});
		onBeforeUnmount(() => {
			isMounted = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.detail),
				"data-test-id": "workflow-review-detail"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [review.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.reviewTitle),
				"data-test-id": "workflow-review-request-title-row"
			}, [createVNode(WorkflowReviewStatusDot_default, {
				state: review.value.state,
				decision: review.value.decision
			}, null, 8, ["state", "decision"]), createVNode(unref(N8nHeading_default), {
				bold: "",
				tag: "h2",
				size: "xlarge",
				"data-test-id": "workflow-review-request-title"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(review.value.title), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [unref(detailNotFound) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.emptyStateWrapper),
				"data-test-id": "workflow-review-detail-not-found"
			}, [createVNode(unref(N8nEmptyState_default), {
				class: normalizeClass(_ctx.$style.emptyState),
				icon: alertIcon,
				heading: unref(i18n).baseText("workflowReviews.detail.notFound.title"),
				description: unref(i18n).baseText("workflowReviews.detail.notFound.body")
			}, null, 8, [
				"class",
				"heading",
				"description"
			])], 2)) : unref(detailLoading) ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.detailSkeleton)
			}, [createVNode(unref(N8nLoading_default), {
				loading: true,
				rows: 3
			})], 2)) : review.value ? (openBlock(), createBlock(WorkflowReviewDetailTabs_default, {
				key: 2,
				review: review.value,
				tab: __props.tab,
				deciding: unref(deciding),
				"onUpdate:tab": _cache[0] || (_cache[0] = ($event) => emit("update:tab", $event)),
				onDecide
			}, null, 8, [
				"review",
				"tab",
				"deciding"
			])) : renderSlot(_ctx.$slots, "default", { key: 3 })], 2)], 2);
		};
	}
});
var WorkflowReviewDetail_vue_vue_type_style_index_0_lang_module_default = {
	detail: "_detail_6qj8w_1",
	columnTitle: "_columnTitle_6qj8w_8",
	reviewTitle: "_reviewTitle_6qj8w_15",
	mainBody: "_mainBody_6qj8w_22",
	detailSkeleton: "_detailSkeleton_6qj8w_28",
	emptyStateWrapper: "_emptyStateWrapper_6qj8w_32",
	emptyState: "_emptyState_6qj8w_32"
};
var WorkflowReviewDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/inbox/frontend/src/self-healing/SelfHealingResultDetail.vue
var SelfHealingResultDetail_default = /* @__PURE__ */ defineComponent({
	__name: "SelfHealingResultDetail",
	props: { selection: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				heading: unref(i18n).baseText("inbox.resultUnavailable.title"),
				description: unref(i18n).baseText("inbox.resultUnavailable.body"),
				"data-test-id": "inbox-self-healing-detail",
				"data-result-id": __props.selection.id
			}, null, 8, [
				"heading",
				"description",
				"data-result-id"
			]);
		};
	}
});
//#endregion
//#region ../../modules/inbox/frontend/src/views/InboxView.vue?vue&type=script&setup=true&lang.ts
var InboxView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InboxView",
	setup(__props) {
		const store = useInboxStore();
		const settingsStore = useSettingsStore();
		const { activeTab, openCount, closedCount } = storeToRefs(store);
		const sections = computed(() => store.activeSectionKeys.map((key) => ({
			key,
			...store.lists[key]
		})));
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		useDocumentTitle({ releaseChannel: settingsStore.settings.releaseChannel }).set(i18n.baseText("inbox.title"));
		const contentRef = ref(null);
		const sidebarResizer = useResizablePanel({
			container: contentRef,
			width: {
				localStorageKey: "N8N_WORKFLOW_REVIEW_SIDEBAR_WIDTH",
				defaultSize: (size) => Math.min(Math.max(size * .25, 240), 400),
				minSize: 240,
				maxSize: (size) => Math.min(size * .5, 640),
				snap: true
			}
		});
		const sidebarWidth = sidebarResizer.width;
		const selection = computed(() => selectionFromRoute(route));
		const selectedKey = computed(() => selection.value ? `${selection.value.type}:${selection.value.id}` : null);
		const selectedListItem = computed(() => Object.values(store.lists).flatMap((list) => list.items).find((item) => `${item.type}:${item.id}` === selectedKey.value));
		const selectedReviewItem = computed(() => selectedListItem.value?.type === "workflow_review" ? selectedListItem.value : void 0);
		const detailTab = computed(() => route.query.tab === "changes" ? "changes" : "activity");
		let isMounted = false;
		function isOnInbox() {
			return isInboxRoute(router.currentRoute.value);
		}
		function isActive() {
			return isMounted && isOnInbox();
		}
		function isSelectedReview(id) {
			const selected = selectionFromRoute(router.currentRoute.value);
			return selected?.type === "workflow_review" && selected.id === id;
		}
		store.reset();
		store.activeTab = route.query.state === "closed" ? "closed" : "open";
		watch(() => route.query.state, (state) => {
			if (isOnInbox()) store.setActiveTab(state === "closed" ? "closed" : "open");
		});
		watch([selection, () => store.disabledSources], ([item, types]) => {
			if (item && types.includes(item.type)) onClearSelection();
		}, { immediate: true });
		function onSelect(item) {
			router.replace(inboxItemLocation(item, route));
		}
		function onClearSelection() {
			if (!isOnInbox()) return;
			const query = { ...route.query };
			for (const key of ["projectId", "workflowId"]) delete query[key];
			router.replace({
				name: INBOX_VIEW,
				query
			});
		}
		function onActiveTabChange(tab) {
			const query = { ...route.query };
			if (tab === "closed") query.state = tab;
			else delete query.state;
			router.replace({ query });
		}
		function onDetailTabChange(tab) {
			if (!isOnInbox()) return;
			const query = { ...route.query };
			if (tab === "changes") query.tab = tab;
			else delete query.tab;
			router.replace({ query });
		}
		function onItemChange(change) {
			if (!change.state && !isActive()) return;
			store.reconcileItemChange(change);
			if (!isOnInbox()) return;
			if (!change.state || change.state === "closed" && activeTab.value === "closed") store.fetchActiveTab();
			const currentRoute = router.currentRoute.value;
			const selected = selectionFromRoute(currentRoute);
			if (change.state === "closed" && activeTab.value !== "closed" && selected?.type === change.type && selected.id === change.id) router.replace({ query: {
				...currentRoute.query,
				state: "closed"
			} });
		}
		watch(() => store.enabled, (enabled) => {
			if (!enabled && isMounted && isOnInbox()) router.replace({ name: VIEWS.HOMEPAGE });
		});
		onMounted(() => {
			isMounted = true;
			store.refreshListAndSummary();
		});
		onBeforeUnmount(() => {
			isMounted = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "inbox-view"
			}, [createBaseVNode("main", {
				ref_key: "contentRef",
				ref: contentRef,
				class: normalizeClass(_ctx.$style.content)
			}, [createVNode(unref(N8nResizeWrapper_default), {
				class: normalizeClass(_ctx.$style.sidebarResizer),
				style: normalizeStyle({ width: `${unref(sidebarWidth)}px` }),
				resizer: unref(sidebarResizer),
				"supported-directions": ["right"]
			}, {
				default: withCtx(() => [createVNode(InboxList_default, {
					class: normalizeClass(_ctx.$style.sidebar),
					sections: sections.value,
					"active-tab": unref(activeTab),
					"selected-key": selectedKey.value,
					"open-count": unref(openCount),
					"closed-count": unref(closedCount),
					onSelect,
					onClear: onClearSelection,
					"onUpdate:activeTab": onActiveTabChange,
					onLoadMore: _cache[0] || (_cache[0] = (section) => unref(store).lists[section].loadMore()),
					onRetry: _cache[1] || (_cache[1] = (section) => unref(store).lists[section].retry()),
					onRefreshSection: _cache[2] || (_cache[2] = (section) => unref(store).lists[section].fetchList()),
					onRetryActiveTab: _cache[3] || (_cache[3] = ($event) => unref(store).fetchActiveTab())
				}, null, 8, [
					"class",
					"sections",
					"active-tab",
					"selected-key",
					"open-count",
					"closed-count"
				])]),
				_: 1
			}, 8, [
				"class",
				"style",
				"resizer"
			]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [selection.value?.type === "workflow_review" && !unref(store).disabledSources.includes(selection.value.type) ? (openBlock(), createBlock(WorkflowReviewDetail_default, {
				key: 0,
				"review-id": selection.value.id,
				"list-item": selectedReviewItem.value,
				tab: detailTab.value,
				"on-item-change": onItemChange,
				"is-active": isActive,
				"is-selected": isSelectedReview,
				"onUpdate:tab": onDetailTabChange
			}, {
				default: withCtx(() => [createVNode(InboxEmptyState_default)]),
				_: 1
			}, 8, [
				"review-id",
				"list-item",
				"tab"
			])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [selection.value?.type === "self_healing_result" && !unref(store).disabledSources.includes(selection.value.type) ? (openBlock(), createBlock(SelfHealingResultDetail_default, {
				key: 0,
				selection: selection.value
			}, null, 8, ["selection"])) : (openBlock(), createBlock(InboxEmptyState_default, { key: 1 }))], 2)], 64))], 2)], 2)], 2);
		};
	}
});
var InboxView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_1yd3k_113",
	content: "_content_1yd3k_122",
	sidebarResizer: "_sidebarResizer_1yd3k_136",
	main: "_main_1yd3k_140",
	sidebar: "_sidebar_1yd3k_136",
	columnTitle: "_columnTitle_1yd3k_161",
	mainBody: "_mainBody_1yd3k_166"
};
var InboxView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InboxView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InboxView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InboxView_default as default };

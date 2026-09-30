import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nBadge_default } from "./N8nBadge-CjUJHqMU.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-Cmy1iCsL.js";
import { t as N8nCard_default } from "./N8nCard-DjZP7lvP.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { jn as useProjectsStore } from "./workflows.store-CW4k8Pkp.js";
import { t as useRootStore } from "./useRootStore-DR5raQ_t.js";
import { t as useSettingsStore } from "./settings.store-CWApP-Zs.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { Lr as NEW_SESSION_PARAM, xr as AGENT_DUPLICATE_MODAL_KEY, yr as AGENT_BUILDER_VIEW } from "./constants-BFgNRWjM.js";
import { n as DEBOUNCE_TIME } from "./durations-DueaJvoh.js";
import { n as useDebounce, r as require_debounce, t as getDebounceTime } from "./useDebounce-DRI3mMad.js";
import { t as require_dateformat } from "./dateformat-mPS8fa4I.js";
import { n as useFavoritesStore } from "./workflowsList.store-L91cqPL5.js";
import { n as useUIStore } from "./ui.store-BOTdVxL9.js";
import { n as useDocumentTitle } from "./useDocumentTitle-CPn7KmoV.js";
import { D as listAgentsPage, O as listAgentsPageGlobal, d as duplicateAgent, s as deleteAgent } from "./useAgentApi-CDI0Ja-Y.js";
import { t as TimeAgo_default } from "./TimeAgo-B9_fxM5C.js";
import { t as useMcp } from "./useMcp-Bzwrz7x-.js";
import { n as upsertProjectAgentsListCache, t as removeProjectAgentFromListCache } from "./useProjectAgentsList-CF20tyt_.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-nDuUgQkp.js";
import { t as useCreateAgent } from "./useCreateAgent-Z6O6gOHD.js";
import { i as useProjectPages } from "./readyToRun.store-BrNCcStF.js";
import { t as useMCPStore } from "./mcp.store-BkC1syx-.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-CRIzBBLx.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-DiDjVI2P.js";
import { t as ProjectHeader_default } from "./ProjectHeader-C9-JBys3.js";
import { t as useAgentPermissions } from "./useAgentPermissions-DSWfvWMR.js";
import { t as PublicationIndicator_default } from "./PublicationIndicator-B5DNzWLA.js";
import { t as useInsightsStore } from "./insights.store-Dyakb-Gv.js";
import { t as InsightsSummary_default } from "./InsightsSummary-pFyfz7RN.js";
import "./src-B75HtL8n.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-CU30wl8k.js";
import { t as useAgentPublish } from "./useAgentPublish-lMInYLwe.js";
//#region src/features/agents/components/AgentCard.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 0 };
var AgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCard",
	props: {
		agent: {},
		projectId: {}
	},
	emits: [
		"select",
		"published",
		"unpublished",
		"deleted",
		"new-chat",
		"duplicate"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const mcpStore = useMCPStore();
		const mcp = useMcp();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const { publish, unpublish } = useAgentPublish();
		const { canCreate, canUpdate, canDelete, canPublish, canUnpublish } = useAgentPermissions(() => props.projectId);
		const isPublished = computed(() => props.agent.activeVersionId !== null);
		const isMcpEnabled = computed(() => settingsStore.isModuleActive("mcp") && !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
		const mcpToggleStatus = ref(null);
		const isAvailableInMCP = computed(() => mcpToggleStatus.value ?? props.agent.availableInMCP ?? false);
		watch([() => props.agent, () => props.agent.availableInMCP], () => {
			mcpToggleStatus.value = null;
		});
		const showMcpIndicator = computed(() => isMcpEnabled.value && isAvailableInMCP.value);
		const favoriteStore = useFavoritesStore();
		const isFavorite = computed(() => favoriteStore.isFavorite(props.agent.id, "agent"));
		const actions = computed(() => {
			const items = [];
			if (isPublished.value && canUnpublish.value) items.push({
				value: "unpublish",
				label: locale.baseText("agents.list.actions.unpublish"),
				divided: true
			});
			else if (!isPublished.value && canPublish.value) items.push({
				value: "publish",
				label: locale.baseText("agents.list.actions.publish"),
				divided: true
			});
			items.push({
				value: "toggleFavorite",
				label: locale.baseText(isFavorite.value ? "favorites.remove" : "favorites.add"),
				divided: !isPublished.value ? !canPublish.value : !canUnpublish.value
			});
			if (isMcpEnabled.value && canUpdate.value) items.push({
				value: "toggleMCPAccess",
				label: locale.baseText(isAvailableInMCP.value ? "agents.list.actions.disableMCPAccess" : "agents.list.actions.enableMCPAccess")
			});
			if (canDelete.value) items.push({
				value: "delete",
				label: locale.baseText("agents.list.actions.delete"),
				divided: items.length > 0
			});
			if (canCreate.value) items.push({
				value: "duplicate",
				label: locale.baseText("agents.list.actions.duplicate")
			});
			return items;
		});
		const showActions = computed(() => actions.value.length > 0);
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.agent.createdAt, `d mmmm${String(props.agent.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		async function onAction(action) {
			if (action === "publish") {
				const updated = await publish(props.projectId, props.agent.id);
				if (updated) emit("published", updated);
			} else if (action === "unpublish") {
				const updated = await unpublish(props.projectId, props.agent.id, props.agent.name);
				if (updated) emit("unpublished", updated);
			} else if (action === "toggleFavorite") await favoriteStore.toggleFavorite(props.agent.id, "agent");
			else if (action === "toggleMCPAccess") await toggleMCPAccess(!isAvailableInMCP.value);
			else if (action === "delete") {
				if (await openAgentConfirmationModal({
					title: locale.baseText("agents.delete.modal.title", { interpolate: { name: props.agent.name } }),
					description: locale.baseText("agents.delete.modal.description", { interpolate: { name: props.agent.name } }),
					confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
					cancelButtonText: locale.baseText("generic.cancel")
				}) !== "confirm") return;
				await deleteAgent(rootStore.restApiContext, props.projectId, props.agent.id);
				removeProjectAgentFromListCache(props.projectId, props.agent.id);
				favoriteStore.removeFavoriteLocally(props.agent.id, "agent");
				emit("deleted", props.agent.id);
			} else if (action === "duplicate") emit("duplicate", props.agent.id);
		}
		async function toggleMCPAccess(enabled) {
			try {
				await mcpStore.toggleAgentMcpAccess(props.agent.id, enabled);
				mcpToggleStatus.value = enabled;
				if (enabled) mcp.trackMcpAccessEnabledForAgent(props.agent.id);
			} catch (error) {
				toast.showError(error, locale.baseText("agents.toggleMCP.error.title"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "agent-card",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("select", __props.agent.id))
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading),
					"data-test-id": "agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name) + " ", 1), !unref(canUpdate) ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.readonlyBadge),
						theme: "tertiary",
						bold: "",
						"data-test-id": "agent-card-readonly-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.readonly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, [
					isPublished.value ? (openBlock(), createBlock(PublicationIndicator_default, {
						key: 0,
						label: unref(locale).baseText("agents.list.published"),
						"data-test-id": "agent-card-publish-indicator"
					}, null, 8, ["label"])) : createCommentVNode("", true),
					createVNode(unref(N8nTooltip_default), { content: unref(locale).baseText("agents.list.actions.newChat") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "message-circle-plus",
							variant: "ghost",
							size: "medium",
							"aria-label": unref(locale).baseText("agents.list.actions.newChat"),
							"data-test-id": "agent-card-new-chat",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("new-chat", __props.agent.id, __props.projectId))
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["content"]),
					showActions.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
						key: 1,
						actions: actions.value,
						theme: "dark",
						"data-test-id": "agent-card-actions",
						onAction
					}, null, 8, ["actions"])) : createCommentVNode("", true)
				], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
					createBaseVNode("span", null, [
						createTextVNode(toDisplayString(unref(locale).baseText("agents.list.updated")) + " ", 1),
						createVNode(TimeAgo_default, { date: String(__props.agent.updatedAt) }, null, 8, ["date"]),
						_cache[3] || (_cache[3] = createTextVNode(" | ", -1))
					]),
					createBaseVNode("span", null, toDisplayString(unref(locale).baseText("agents.list.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 1),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_1, "|")) : createCommentVNode("", true),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.mcpIndicator),
						"data-test-id": "agent-card-mcp"
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "right",
						content: unref(locale).baseText("agents.list.availableInMCP")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "mcp",
							size: "medium"
						})]),
						_: 1
					}, 8, ["content"])], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AgentCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_a4mie_113",
	cardHeading: "_cardHeading_a4mie_123",
	readonlyBadge: "_readonlyBadge_a4mie_131",
	cardDescription: "_cardDescription_a4mie_135",
	mcpIndicator: "_mcpIndicator_a4mie_145",
	cardActions: "_cardActions_a4mie_150"
};
var AgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentsListView.vue
var AgentsListView_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsListView",
	setup(__props) {
		function isAgentResource(value) {
			return typeof value === "object" && value !== null && "id" in value;
		}
		const AGENTS_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc"
		};
		const locale = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const insightsStore = useInsightsStore();
		const projectPages = useProjectPages();
		const uiStore = useUIStore();
		const toast = useToast();
		const agentTelemetry = useAgentTelemetry();
		const { createAgent } = useCreateAgent();
		const { callDebounced } = useDebounce();
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const { canCreate: canCreateAgent } = useAgentPermissions(() => projectId.value ?? homeProject.value?.id);
		const allAgents = ref([]);
		const filters = ref({
			search: "",
			homeProject: ""
		});
		const currentPage = ref(1);
		const pageSize = ref(50);
		const currentSort = ref("updatedAt:desc");
		const totalAgents = ref(0);
		const loading = ref(true);
		const projectId = computed(() => route.params.projectId);
		const sortFns = {
			lastUpdated: (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
			lastCreated: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			nameAsc: (a, b) => a.name.localeCompare(b.name),
			nameDesc: (a, b) => b.name.localeCompare(a.name)
		};
		async function fetchAgents() {
			const shouldDelayLoading = allAgents.value.length > 0;
			const delayedLoading = (0, import_debounce.default)(() => {
				loading.value = true;
			}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
			if (shouldDelayLoading) delayedLoading();
			else loading.value = true;
			try {
				const fetchOptions = {
					skip: (currentPage.value - 1) * pageSize.value,
					take: pageSize.value,
					sortBy: currentSort.value,
					filter: filters.value.search ? { query: filters.value.search } : void 0
				};
				const { count, data } = projectId.value ? await listAgentsPage(rootStore.restApiContext, projectId.value, fetchOptions) : await listAgentsPageGlobal(rootStore.restApiContext, fetchOptions);
				allAgents.value = data;
				totalAgents.value = count;
			} finally {
				delayedLoading.cancel();
				loading.value = false;
			}
		}
		function onSelectAgent(agentId, agentProjectId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				}
			});
		}
		function onNewAgentChat(agentId, agentProjectId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				},
				query: { [NEW_SESSION_PARAM]: "true" }
			});
		}
		function onAgentDuplicate(agentId) {
			const agent = allAgents.value.find((a) => a.id === agentId);
			if (!agent) return;
			if (!agent.schema) {
				toast.showMessage({
					title: locale.baseText("agents.duplicate.modal.unconfigured"),
					type: "info"
				});
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_DUPLICATE_MODAL_KEY,
				data: {
					projectId: agent.projectId,
					agentId: agent.id,
					name: agent.name,
					existingNames: allAgents.value.map((a) => a.name),
					onConfirm: async (newName) => {
						try {
							const duplicated = await duplicateAgent(rootStore.restApiContext, agent.projectId, agent.id, newName);
							agentTelemetry.trackDuplicatedAgent({
								sourceAgentId: agent.id,
								agentId: duplicated.id,
								projectId: agent.projectId
							});
							upsertProjectAgentsListCache(agent.projectId, duplicated);
							toast.showMessage({
								title: locale.baseText("agents.duplicate.modal.success"),
								type: "success"
							});
							onSelectAgent(duplicated.id, agent.projectId);
						} catch (error) {
							toast.showError(error, locale.baseText("agents.duplicate.modal.error"));
							throw error;
						}
					}
				}
			});
		}
		function onAgentPublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentUnpublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentDeleted(agentId) {
			allAgents.value = allAgents.value.filter((a) => a.id !== agentId);
			totalAgents.value = Math.max(0, totalAgents.value - 1);
			if (allAgents.value.length === 0 && currentPage.value > 1) currentPage.value -= 1;
			fetchAgents();
		}
		async function onSearchUpdated(search) {
			filters.value = {
				...filters.value,
				search
			};
			currentPage.value = 1;
			if (search) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.INPUT.SEARCH,
				trailing: true
			});
			else await fetchAgents();
		}
		async function setPaginationAndSort(payload) {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = AGENTS_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.API.RESOURCE_SEARCH,
				trailing: true
			});
		}
		function onCreateAgentClick() {
			createAgent("button", projectId.value ?? projectsStore.personalProject?.id ?? "");
		}
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				filters: filters.value,
				"onUpdate:filters": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
				"resource-key": "agents",
				type: "list-paginated",
				resources: allAgents.value,
				initialize: fetchAgents,
				loading: false,
				"resources-refreshing": loading.value,
				disabled: false,
				"sort-fns": sortFns,
				"sort-options": [
					"lastUpdated",
					"lastCreated",
					"nameAsc",
					"nameDesc"
				],
				"type-props": { itemSize: 80 },
				"custom-page-size": unref(50),
				"total-items": totalAgents.value,
				"dont-perform-sorting-and-filtering": true,
				shareable: false,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"display-name": (agent) => agent.name,
				"tab-key": "agents",
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": setPaginationAndSort
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "agent" }, {
					default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				empty: withCtx(() => [createVNode(ResourcesListEmptyState_default, {
					"resource-key": "agents",
					"button-disabled": !unref(canCreateAgent),
					"onClick:button": onCreateAgentClick
				}, null, 8, ["button-disabled"])]),
				item: withCtx(({ item: data }) => [isAgentResource(data) ? (openBlock(), createBlock(AgentCard_default, {
					key: 0,
					class: "mb-2xs",
					agent: data,
					"project-id": data.projectId,
					onSelect: ($event) => onSelectAgent(data.id, data.projectId),
					onNewChat: onNewAgentChat,
					onPublished: onAgentPublished,
					onUnpublished: onAgentUnpublished,
					onDeleted: onAgentDeleted,
					onDuplicate: onAgentDuplicate
				}, null, 8, [
					"agent",
					"project-id",
					"onSelect"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"filters",
				"resources",
				"resources-refreshing",
				"custom-page-size",
				"total-items",
				"display-name"
			]);
		};
	}
});
//#endregion
export { AgentsListView_default as default };

import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { Bd as createElementBlock, Cd as init_runtime_dom_esm_bundler, Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Yo as useRoute, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, if as onBeforeUnmount, jd as withModifiers, jf as init_reactivity_esm_bundler, nf as nextTick, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, ui as require_debounce, zd as createCommentVNode, zf as ref, zo as require_dateformat } from "./vendor-zYfdu4Ed.js";
import { Ac as useAgentTelemetry, Aj as Checkbox_default, Bv as usePostHog, Fj as N8nHeading_default, Hv as useDebounce, IS as useSettingsStore, It as useMcp, Jm as NEW_SESSION_PARAM, Jp as useFavoritesStore, Kj as N8nCard_default, LS as useRootStore, Lt as useMCPStore, MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, OM as N8nIconButton_default, OS as useToast, Rn as toAgentListItem, Rx as AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT, SM as N8nTooltip_default, Uo as listAgentsPage, Vd as useDocumentTitle, Vv as getDebounceTime, Wo as listAgentsPageGlobal, Xr as useAgentPermissions, _S as DEBOUNCE_TIME, bM as N8nText_default, cM as N8nActionToggle_default, co as duplicateAgent, gg as useUIStore, hM as N8nBadge_default, hu as TimeAgo_default, ih as AGENT_BUILDER_VIEW, kM as N8nButton_default, kc as useCreateAgent, km as AGENT_DUPLICATE_MODAL_KEY, nd as useInstanceAiReady, qp as useProjectsStore, to as deleteAgent, vM as N8nChatInput_default, zM as useI18n } from "./app-BXv1VOvT.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-CIPoOafZ.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-zDZJM5XG.js";
import { t as useProjectPages } from "./useProjectPages-D05yScb3.js";
import { n as upsertProjectAgentsListCache, t as removeProjectAgentFromListCache } from "./useProjectAgentsList-Cbd3if7O.js";
import { t as ProjectHeader_default } from "./ProjectHeader-FAxxOupQ.js";
import { t as PublicationIndicator_default } from "./PublicationIndicator-Bj_Lfa_B.js";
import { t as useInsightsStore } from "./insights.store-CsCSQVlw.js";
import { t as InsightsSummary_default } from "./InsightsSummary-DHEFEJAh.js";
import "./src-C1BSsh-G.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-Dp6OGvsi.js";
import { t as hasAgentUnpublishedChanges } from "./agentPublication-B0tlGvRZ.js";
import { l as useAgentArchive, n as useAgentPublish, t as AgentTemplateList_default } from "./AgentTemplateList-CVUZ7gBh.js";
//#region src/experiments/agentsListEmptyStateTemplates/useAgentsListEmptyStateTemplatesExperiment.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
init_runtime_core_esm_bundler();
var AGENTS_LIST_EMPTY_STATE_TEMPLATES_VARIANTS = [AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.control, AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.test];
function isAgentsListEmptyStateTemplatesVariant(value) {
	return AGENTS_LIST_EMPTY_STATE_TEMPLATES_VARIANTS.some((variant) => variant === value);
}
function useAgentsListEmptyStateTemplatesExperiment() {
	const posthogStore = usePostHog();
	const instanceAiReady = useInstanceAiReady();
	const variant = computed(() => {
		if (!instanceAiReady.value) return void 0;
		const assigned = posthogStore.getVariant(AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.name);
		return isAgentsListEmptyStateTemplatesVariant(assigned) ? assigned : void 0;
	});
	const isFeatureEnabled = computed(() => variant.value === AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.test);
	function trackExposure() {
		if (!variant.value) return;
		posthogStore.trackExposure(AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.name);
	}
	return {
		isFeatureEnabled,
		variant,
		trackExposure
	};
}
//#endregion
//#region src/features/agents/components/AgentCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 0 };
var AgentCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		"archived",
		"unarchived",
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
		const { archive, unarchive } = useAgentArchive();
		const { canCreate, canUpdate, canDelete, canPublish, canUnpublish } = useAgentPermissions(() => props.projectId);
		const isPublished = computed(() => props.agent.activeVersionId !== null);
		const hasUnpublishedChanges = computed(() => hasAgentUnpublishedChanges(props.agent));
		const isUntitled = computed(() => props.agent.name === locale.baseText("agents.new.defaultName"));
		const isMcpEnabled = computed(() => settingsStore.isModuleActive("mcp") && !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
		const mcpToggleStatus = ref(null);
		const isAvailableInMCP = computed(() => mcpToggleStatus.value ?? props.agent.availableInMCP ?? false);
		watch([() => props.agent, () => props.agent.availableInMCP], () => {
			mcpToggleStatus.value = null;
		});
		const showMcpIndicator = computed(() => isMcpEnabled.value && isAvailableInMCP.value && !props.agent.isArchived);
		const favoriteStore = useFavoritesStore();
		const isFavorite = computed(() => favoriteStore.isFavorite(props.agent.id, "agent"));
		const archiveActions = computed(() => {
			if (!canDelete.value) return [];
			if (!props.agent.isArchived) return [{
				value: "archive",
				label: locale.baseText("menuActions.archive"),
				divided: true
			}];
			return [{
				value: "delete",
				label: locale.baseText("agents.list.actions.delete"),
				divided: true,
				destructive: true
			}, {
				value: "unarchive",
				label: locale.baseText("menuActions.unarchive")
			}];
		});
		const favoriteAction = computed(() => ({
			value: "toggleFavorite",
			label: locale.baseText(isFavorite.value ? "favorites.remove" : "favorites.add")
		}));
		const actions = computed(() => {
			if (props.agent.isArchived) return [favoriteAction.value, ...archiveActions.value];
			const items = [];
			items.push({
				...favoriteAction.value,
				divided: !isPublished.value ? !canPublish.value : !canUnpublish.value
			});
			if (canCreate.value) items.push({
				value: "duplicate",
				label: locale.baseText("agents.list.actions.duplicate")
			});
			if (isPublished.value && canUnpublish.value) items.push({
				value: "unpublish",
				label: locale.baseText("agents.list.actions.unpublish")
			});
			else if (!isPublished.value && canPublish.value) items.push({
				value: "publish",
				label: locale.baseText("agents.list.actions.publish")
			});
			if (isMcpEnabled.value && canUpdate.value) items.push({
				value: "toggleMCPAccess",
				label: locale.baseText(isAvailableInMCP.value ? "agents.list.actions.disableMCPAccess" : "agents.list.actions.enableMCPAccess"),
				divided: true
			});
			return [...items, ...archiveActions.value];
		});
		const showActions = computed(() => actions.value.length > 0);
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.agent.createdAt, `d mmmm${String(props.agent.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		async function deleteArchivedAgent() {
			if (await openAgentConfirmationModal({
				title: locale.baseText("agents.delete.modal.title", { interpolate: { name: props.agent.name } }),
				description: locale.baseText("agents.delete.modal.description", { interpolate: { name: props.agent.name } }),
				isDestructive: true,
				confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
				cancelButtonText: locale.baseText("generic.cancel")
			}) !== "confirm") return;
			await deleteAgent(rootStore.restApiContext, props.projectId, props.agent.id);
			removeProjectAgentFromListCache(props.projectId, props.agent.id);
			favoriteStore.removeFavoriteLocally(props.agent.id, "agent");
			emit("deleted", props.agent.id);
		}
		async function onAction(action) {
			if (action === "archive") {
				const updated = await archive(props.agent);
				if (updated) emit("archived", updated);
			} else if (action === "unarchive") {
				const updated = await unarchive(props.agent);
				if (updated) emit("unarchived", updated);
			} else if (action === "publish") {
				const updated = await publish(props.projectId, props.agent.id);
				if (updated) emit("published", updated);
			} else if (action === "unpublish") {
				const updated = await unpublish(props.projectId, props.agent.id, props.agent.name);
				if (updated) emit("unpublished", updated);
			} else if (action === "toggleFavorite") await favoriteStore.toggleFavorite(props.agent.id, "agent");
			else if (action === "toggleMCPAccess") await toggleMCPAccess(!isAvailableInMCP.value);
			else if (action === "delete") await deleteArchivedAgent();
			else if (action === "duplicate") emit("duplicate", props.agent.id);
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
				class: normalizeClass([_ctx.$style.cardLink, { [_ctx.$style.cardArchived]: __props.agent.isArchived }]),
				"data-test-id": "agent-card",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("select", __props.agent.id))
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: !isUntitled.value,
					color: isUntitled.value ? "text-light" : void 0,
					class: normalizeClass([_ctx.$style.cardHeading, {
						[_ctx.$style.untitledName]: isUntitled.value,
						[_ctx.$style.cardHeadingArchived]: __props.agent.isArchived
					}]),
					"data-test-id": "agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name) + " ", 1), !unref(canUpdate) ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.readonlyBadge),
						variant: "outline",
						"data-test-id": "agent-card-readonly-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.readonly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"bold",
					"color",
					"class"
				])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, [
					__props.agent.isArchived ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						size: "small",
						bold: "",
						class: "mr-2xs",
						"data-test-id": "agent-card-archived"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
						_: 1
					})) : isPublished.value ? (openBlock(), createBlock(PublicationIndicator_default, {
						key: 1,
						label: unref(locale).baseText(hasUnpublishedChanges.value ? "agents.list.changesToPublish" : "agents.list.published"),
						variant: hasUnpublishedChanges.value ? "warning" : "success",
						"data-state": hasUnpublishedChanges.value ? "changes-to-publish" : "published",
						"data-test-id": "agent-card-publish-indicator"
					}, null, 8, [
						"label",
						"variant",
						"data-state"
					])) : createCommentVNode("", true),
					!__props.agent.isArchived ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						content: unref(locale).baseText("agents.list.actions.newTest")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "flask-conical",
							variant: "ghost",
							size: "medium",
							"aria-label": unref(locale).baseText("agents.list.actions.newTest"),
							"data-test-id": "agent-card-new-chat",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("new-chat", __props.agent.id, __props.projectId))
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true),
					showActions.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
						key: 3,
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
}), [["__cssModules", { "$style": {
	cardLink: "_cardLink_myxpi_113",
	cardHeading: "_cardHeading_myxpi_119",
	untitledName: "_untitledName_myxpi_127",
	cardHeadingArchived: "_cardHeadingArchived_myxpi_131",
	cardArchived: "_cardArchived_myxpi_135",
	readonlyBadge: "_readonlyBadge_myxpi_141",
	cardDescription: "_cardDescription_myxpi_145",
	mcpIndicator: "_mcpIndicator_myxpi_155",
	cardActions: "_cardActions_myxpi_160"
} }]]);
//#endregion
//#region src/features/agents/components/AgentsListIntro.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentsListIntro_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentsListIntro",
	props: { disabled: { type: Boolean } },
	emits: [
		"create-blank",
		"submit",
		"select"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const draft = ref("");
		const chatInputRef = ref(null);
		let isUnmounted = false;
		function focusComposer() {
			if (isUnmounted || props.disabled) return;
			chatInputRef.value?.focusInput();
		}
		onMounted(() => {
			nextTick(() => focusComposer());
		});
		onBeforeUnmount(() => {
			isUnmounted = true;
		});
		function onComposerBlur() {
			nextTick(() => focusComposer());
		}
		function onSubmit() {
			const text = draft.value.trim();
			if (!text || props.disabled) return;
			emit("submit", text);
		}
		function onSelectTemplate(template) {
			if (props.disabled) return;
			emit("select", template);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.intro),
				"data-test-id": "agents-list-intro"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIcon_default), {
						icon: "bot",
						size: "xxlarge",
						color: "text-light"
					}),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.templates.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.templates.subtitle")), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.composerContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.createBlank) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					disabled: __props.disabled,
					"data-test-id": "agents-list-intro-create-blank",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("create-blank"))
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "pencil" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.list.intro.createBlank")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2), createVNode(unref(N8nChatInput_default), {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					modelValue: draft.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draft.value = $event),
					layout: "multiline",
					autofocus: true,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("agents.list.intro.placeholder"),
					"input-test-id": "agents-list-intro-input",
					onBlur: onComposerBlur,
					onSubmit
				}, null, 8, [
					"modelValue",
					"disabled",
					"placeholder"
				])], 2),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.templatesLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.list.intro.templatesLabel")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(AgentTemplateList_default, { onSelect: onSelectTemplate })
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	intro: "_intro_4uvb4_1",
	header: "_header_4uvb4_11",
	createBlank: "_createBlank_4uvb4_20",
	composerContainer: "_composerContainer_4uvb4_29",
	templatesLabel: "_templatesLabel_4uvb4_33"
} }]]);
//#endregion
//#region src/features/agents/views/AgentsListView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/views/AgentsListView.vue
var AgentsListView_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsListView",
	setup(__props) {
		function isAgentListItem(value) {
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
		const { isFeatureEnabled: templatesExperimentEnabled, variant: templatesVariant, trackExposure: trackTemplatesExposure } = useAgentsListEmptyStateTemplatesExperiment();
		const showTemplatesIntro = computed(() => templatesExperimentEnabled.value);
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const { canCreate: canCreateAgent } = useAgentPermissions(() => projectId.value ?? homeProject.value?.id);
		const allAgents = ref([]);
		/** The shared list layout only accepts resource-typed rows; the wrapper is added at render time. */
		const agentRows = computed(() => allAgents.value.map((agent) => ({
			...agent,
			resourceType: "agent"
		})));
		const filters = ref({
			search: "",
			homeProject: "",
			showArchived: route.query.showArchived === "true"
		});
		const currentPage = ref(1);
		const pageSize = ref(50);
		const currentSort = ref("updatedAt:desc");
		const totalAgents = ref(0);
		const loading = ref(true);
		const projectId = computed(() => route.params.projectId);
		watch(() => !loading.value && allAgents.value.length === 0 && !filters.value.search && templatesVariant.value !== void 0, (surfaceVisible) => {
			if (surfaceVisible) trackTemplatesExposure();
		});
		const sortFns = {
			lastUpdated: (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
			lastCreated: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			nameAsc: (a, b) => a.name.localeCompare(b.name),
			nameDesc: (a, b) => b.name.localeCompare(a.name)
		};
		function buildListFilter() {
			const filter = {
				...filters.value.search ? { query: filters.value.search } : {},
				...filters.value.showArchived === true ? { includeArchived: true } : {}
			};
			return Object.keys(filter).length > 0 ? filter : void 0;
		}
		async function fetchAgents() {
			const shouldDelayLoading = allAgents.value.length > 0;
			const delayedLoading = (0, import_debounce.default)(() => {
				loading.value = true;
			}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
			if (shouldDelayLoading) delayedLoading();
			else loading.value = true;
			try {
				const fetchOptions = {
					offset: (currentPage.value - 1) * pageSize.value,
					limit: pageSize.value,
					sortBy: currentSort.value,
					filter: buildListFilter()
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
			if (!agent.hasConfig) {
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
			const item = toAgentListItem(updated);
			allAgents.value = allAgents.value.map((a) => a.id === item.id ? item : a);
			fetchAgents();
		}
		function onAgentUnpublished(updated) {
			const item = toAgentListItem(updated);
			allAgents.value = allAgents.value.map((a) => a.id === item.id ? item : a);
			fetchAgents();
		}
		function onAgentDeleted(agentId) {
			allAgents.value = allAgents.value.filter((a) => a.id !== agentId);
			totalAgents.value = Math.max(0, totalAgents.value - 1);
			if (allAgents.value.length === 0 && currentPage.value > 1) currentPage.value -= 1;
			fetchAgents();
		}
		function onAgentArchived(updated) {
			if (filters.value.showArchived === true) {
				onAgentUnpublished(updated);
				return;
			}
			onAgentDeleted(updated.id);
		}
		watch(() => filters.value.showArchived === true, async (showArchived) => {
			const query = { ...route.query };
			if (showArchived) query.showArchived = "true";
			else delete query.showArchived;
			await router.replace({ query });
			currentPage.value = 1;
			await fetchAgents();
		});
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
		function targetProjectIdForCreate() {
			return projectId.value ?? projectsStore.personalProject?.id ?? "";
		}
		function onCreateAgentClick() {
			createAgent("button", targetProjectIdForCreate());
		}
		function onCreateBlank() {
			createAgent("empty_state_blank", targetProjectIdForCreate());
		}
		function onCreateFromPrompt(text) {
			createAgent("empty_state_prompt", targetProjectIdForCreate(), {
				kind: "prompt",
				text
			});
		}
		function onCreateFromTemplate(template) {
			createAgent("empty_state_template", targetProjectIdForCreate(), {
				kind: "template",
				templateId: template.id
			});
		}
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
			if (projectPages.isOverviewSubPage && insightsStore.isSummaryEnabled) insightsStore.weeklySummary.execute();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				filters: filters.value,
				"onUpdate:filters": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
				"resource-key": "agents",
				type: "list-paginated",
				resources: agentRows.value,
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
					showFiltersDropdown: true,
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
				empty: withCtx(() => [showTemplatesIntro.value ? (openBlock(), createBlock(AgentsListIntro_default, {
					key: 0,
					disabled: !unref(canCreateAgent),
					onCreateBlank,
					onSubmit: onCreateFromPrompt,
					onSelect: onCreateFromTemplate
				}, null, 8, ["disabled"])) : (openBlock(), createBlock(ResourcesListEmptyState_default, {
					key: 1,
					"resource-key": "agents",
					"button-disabled": !unref(canCreateAgent),
					"onClick:button": onCreateAgentClick
				}, null, 8, ["button-disabled"]))]),
				filters: withCtx(({ setKeyValue }) => [createVNode(unref(Checkbox_default), {
					label: unref(locale).baseText("agents.list.filters.showArchived"),
					"model-value": filters.value.showArchived === true,
					"data-test-id": "agents-show-archived-checkbox",
					"onUpdate:modelValue": ($event) => setKeyValue("showArchived", $event)
				}, null, 8, [
					"label",
					"model-value",
					"onUpdate:modelValue"
				])]),
				item: withCtx(({ item: data }) => [isAgentListItem(data) ? (openBlock(), createBlock(AgentCard_default, {
					key: 0,
					class: "mb-2xs",
					agent: data,
					"project-id": data.projectId,
					onSelect: ($event) => onSelectAgent(data.id, data.projectId),
					onNewChat: onNewAgentChat,
					onPublished: onAgentPublished,
					onUnpublished: onAgentUnpublished,
					onDeleted: onAgentDeleted,
					onArchived: onAgentArchived,
					onUnarchived: onAgentUnpublished,
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

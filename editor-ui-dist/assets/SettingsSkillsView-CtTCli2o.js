import { Ad as createElementBlock, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Sd as withModifiers, Tf as ref, Ud as mergeModels, Yd as onMounted, ap as toDisplayString, ep as normalizeClass, is as useRouter, jd as createSlots, kd as createCommentVNode, nd as useDebounceFn, pf as withCtx, rs as useRoute, sf as useModel, tf as renderSlot } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, DE as N8nIcon_default, EE as N8nButton_default, Ey as VIEWS, FE as useI18n, Gm as AGENT_SKILL_MODAL_KEY, Is as TimeAgo_default, Ng as getDebounceTime, PT as N8nHeading_default, Rg as TELEMETRY_EVENT, TE as N8nIconButton_default, Tw as N8nUserInfo_default, Ty as useToast, Vr as isSkillNameTakenError, Yf as useDocumentTitle, a as canWriteInstanceSkillScope, aT as SettingsPageHeader_default, b as PREFERENCES_PAGE_SIZES, bw as N8nDataTableServer_default, dm as useProjectsStore, hy as DEBOUNCE_TIME, jy as useUsersStore, ky as useTelemetry, lh as AGENT_BUILDER_VIEW, lm as splitName, oE as N8nActionToggle_default, oT as SettingsLayout_default, pE as N8nBadge_default, qh as useUIStore, rw as useMessage, s as canWriteProjectSkillScope, uE as DropdownMenu_default, v as PREFERENCES_DEFAULT_PAGE_SIZE, vE as N8nText_default, wE as Input_default } from "./app-CqwplyU_.js";
import { t as useSkillsStore } from "./skills.store-CRa0gj4k.js";
//#region src/features/settings/context/components/SkillAgentsCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var HIDDEN_AGENTS_ITEM = "hidden-agents";
var SkillAgentsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkillAgentsCell",
	props: { skill: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const skillsStore = useSkillsStore();
		const { showError } = useToast();
		const usage = ref(null);
		const loading = ref(false);
		/** A draft and a published version of the same agent count once, as `usedByAgents` does. */
		const agents = computed(() => {
			const byId = /* @__PURE__ */ new Map();
			for (const agent of [...usage.value?.drafts ?? [], ...usage.value?.pins ?? []]) if (!byId.has(agent.agentId)) byId.set(agent.agentId, agent);
			return byId;
		});
		const items = computed(() => {
			const list = [...agents.value].map(([id, agent]) => ({
				id,
				label: agent.agentName,
				icon: {
					type: "icon",
					value: "bot"
				}
			}));
			const hidden = usage.value?.hiddenAgents ?? 0;
			if (hidden > 0) list.push({
				id: HIDDEN_AGENTS_ITEM,
				label: i18n.baseText("settings.context.skills.agents.hidden", {
					interpolate: { count: hidden },
					adjustToNumber: hidden
				}),
				disabled: true
			});
			return list;
		});
		/** The list row has the count only, so the names load when the menu first opens. */
		async function onOpenChange(open) {
			if (!open || usage.value || loading.value) return;
			loading.value = true;
			try {
				usage.value = (await skillsStore.fetchSkill(props.skill.id)).usedBy;
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.agents"));
			} finally {
				loading.value = false;
			}
		}
		async function onSelect(agentId) {
			const agent = agents.value.get(agentId);
			if (!agent) return;
			await router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agent.projectId,
					agentId
				}
			});
		}
		return (_ctx, _cache) => {
			return props.skill.usedByAgents === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-light",
				"data-test-id": "skill-agents-none"
			}, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" — ", -1)])]),
				_: 1
			})) : (openBlock(), createElementBlock("span", {
				key: 1,
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
			}, [createVNode(unref(DropdownMenu_default), {
				items: items.value,
				loading: loading.value,
				"loading-item-count": Math.min(props.skill.usedByAgents, 3),
				modal: false,
				placement: "bottom-start",
				"content-test-id": "skill-agents-menu",
				"onUpdate:modelValue": onOpenChange,
				onSelect
			}, {
				trigger: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.trigger),
					"aria-label": unref(i18n).baseText("settings.context.skills.agents.label"),
					"data-test-id": "skill-agents-trigger"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.skill.usedByAgents), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "small",
					color: "text-light"
				})], 10, _hoisted_1$1)]),
				_: 1
			}, 8, [
				"items",
				"loading",
				"loading-item-count"
			])]));
		};
	}
});
var SkillAgentsCell_vue_vue_type_style_index_0_lang_module_default = { trigger: "_trigger_1sa5x_1" };
var SkillAgentsCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkillAgentsCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkillAgentsCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/skills.utils.ts
/** How the badge and the modal name the scope of a skill. */
function useSkillScopeDisplay() {
	const i18n = useI18n();
	const projectsStore = useProjectsStore();
	function projectLabel(projectId, projectName, projectType) {
		if (projectId === projectsStore.personalProject?.id) return i18n.baseText("settings.context.skills.scope.personalProject");
		if (projectType === "personal" && projectName) {
			const { name, email } = splitName(projectName);
			return name ?? email ?? projectName;
		}
		return projectName ?? i18n.baseText("settings.context.skills.scope.project");
	}
	function scopeDisplay(skill) {
		switch (skill.scope) {
			case "instance": return {
				icon: "globe",
				label: i18n.baseText("settings.context.skills.scope.instance")
			};
			case "agent": return {
				icon: "bot",
				label: skill.agentName ? i18n.baseText("settings.context.skills.scope.agent", { interpolate: { name: skill.agentName } }) : i18n.baseText("settings.context.skills.scope.agentFallback")
			};
			case "project":
				if (!skill.projectId) return {
					icon: "layers",
					label: i18n.baseText("settings.context.skills.scope.project")
				};
				return {
					icon: skill.projectType === "personal" ? "user" : "layers",
					label: projectLabel(skill.projectId, skill.projectName, skill.projectType)
				};
		}
	}
	return { scopeDisplay };
}
//#endregion
//#region src/features/settings/context/components/SkillScopeBadge.vue?vue&type=script&setup=true&lang.ts
var SkillScopeBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkillScopeBadge",
	props: { skill: {} },
	setup(__props) {
		const props = __props;
		const { scopeDisplay } = useSkillScopeDisplay();
		const display = computed(() => scopeDisplay(props.skill));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), {
				variant: "outline",
				class: normalizeClass(_ctx.$style.badge),
				"data-test-id": "skill-scope-badge"
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nIcon_default), {
					icon: display.value.icon,
					size: "small"
				}, null, 8, ["icon"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(display.value.label), 3)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SkillScopeBadge_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_26osi_1",
	content: "_content_26osi_5",
	label: "_label_26osi_12"
};
var SkillScopeBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkillScopeBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkillScopeBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/components/SkillsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "skills-table" };
var SkillsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkillsTable",
	props: /* @__PURE__ */ mergeModels({
		skills: {},
		itemsLength: {},
		loading: { type: Boolean },
		showEmpty: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"open",
		"delete",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const i18n = useI18n();
		const usersStore = useUsersStore();
		/** The backend refuses to delete a skill that an agent uses, so the action is off before the user tries. */
		function canDeleteNow(skill) {
			return skill.canDelete && skill.usedByAgents === 0;
		}
		function deleteHint(skill) {
			if (canDeleteNow(skill)) return void 0;
			if (!skill.canDelete) return i18n.baseText("settings.context.skills.readOnly");
			return i18n.baseText("settings.context.skills.delete.inUse", {
				interpolate: { count: skill.usedByAgents },
				adjustToNumber: skill.usedByAgents
			});
		}
		function actionsFor(skill) {
			return [{
				value: "edit",
				label: i18n.baseText(skill.canEdit ? "settings.context.skills.actions.edit" : "settings.context.skills.actions.view")
			}, {
				value: "delete",
				label: i18n.baseText("settings.context.skills.actions.delete"),
				disabled: !canDeleteNow(skill),
				tooltip: deleteHint(skill),
				destructive: true
			}];
		}
		function onAction(skill, action) {
			if (action === "edit") emit("open", skill);
			else emit("delete", skill);
		}
		function onRowClick(_event, payload) {
			emit("open", payload.item);
		}
		const headers = computed(() => [
			{
				title: i18n.baseText("settings.context.skills.columns.skill"),
				key: "name",
				width: 300,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.skills.columns.scope"),
				key: "scope",
				width: 220,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.skills.columns.agents"),
				key: "usedByAgents",
				width: 110,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.skills.columns.createdBy"),
				key: "createdBy",
				width: 220,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.skills.columns.updatedAt"),
				key: "updatedAt",
				width: 130,
				disableSort: true,
				resize: false
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 64,
				disableSort: true,
				resize: false,
				value: () => void 0
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nDataTableServer_default), {
				page: tableOptions.value.page,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => tableOptions.value.itemsPerPage = $event),
				headers: headers.value,
				items: props.skills,
				"items-length": props.itemsLength,
				loading: props.loading,
				"page-sizes": unref(PREFERENCES_PAGE_SIZES),
				"row-props": { class: _ctx.$style.row },
				"onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event)),
				"onClick:row": onRowClick
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skillCell) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-dark",
					"data-test-id": "skill-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
					_: 2
				}, 1032, ["class"])], 2)]),
				[`item.scope`]: withCtx(({ item }) => [createVNode(SkillScopeBadge_default, { skill: item }, null, 8, ["skill"])]),
				[`item.usedByAgents`]: withCtx(({ item }) => [createVNode(SkillAgentsCell_default, { skill: item }, null, 8, ["skill"])]),
				[`item.createdBy`]: withCtx(({ item }) => [item.createdBy ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.creator),
					"data-test-id": "skill-created-by"
				}, [createVNode(unref(N8nUserInfo_default), {
					"first-name": item.createdBy.firstName,
					"last-name": item.createdBy.lastName,
					email: item.createdBy.email,
					"is-current-user": item.createdBy.id === unref(usersStore).currentUserId
				}, null, 8, [
					"first-name",
					"last-name",
					"email",
					"is-current-user"
				])], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light",
					"data-test-id": "skill-created-by-none"
				}, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" — ", -1)])]),
					_: 1
				}))]),
				[`item.updatedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					"data-test-id": "skill-updated-at"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, { date: item.updatedAt }, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.actions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(unref(N8nActionToggle_default), {
					actions: actionsFor(item),
					"icon-orientation": "vertical",
					"data-test-id": "skill-actions",
					onAction: (action) => onAction(item, action)
				}, null, 8, ["actions", "onAction"])], 2)]),
				_: 2
			}, [props.showEmpty ? {
				name: "cover",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading",
				"page-sizes",
				"row-props"
			])]);
		};
	}
});
var SkillsTable_vue_vue_type_style_index_0_lang_module_default = {
	skillCell: "_skillCell_1in3e_1",
	creator: "_creator_1in3e_8",
	description: "_description_1in3e_13",
	actions: "_actions_1in3e_19",
	row: "_row_1in3e_24"
};
var SkillsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkillsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkillsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/views/SettingsSkillsView.vue?vue&type=script&setup=true&lang.ts
var INSTANCE_SCOPE = "instance";
var PROJECT_SCOPE_PREFIX = "project:";
var ALL_SCOPES = "all";
var SettingsSkillsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSkillsView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const uiStore = useUIStore();
		const projectsStore = useProjectsStore();
		const skillsStore = useSkillsStore();
		const telemetry = useTelemetry();
		const { showError, showMessage } = useToast();
		const { scopeDisplay } = useSkillScopeDisplay();
		const tableOptions = ref({
			page: 0,
			itemsPerPage: PREFERENCES_DEFAULT_PAGE_SIZE,
			sortBy: []
		});
		const search = ref("");
		const scopeFilter = ref(ALL_SCOPES);
		const loadFailed = ref(false);
		const isFiltered = computed(() => search.value.trim() !== "" || scopeFilter.value !== ALL_SCOPES);
		const showEmptyState = computed(() => !skillsStore.loading && !loadFailed.value && !isFiltered.value && skillsStore.count === 0);
		const scopeFilterItems = computed(() => [
			[ALL_SCOPES, "settings.context.skills.filter.all"],
			["instance", "settings.context.skills.filter.instance"],
			["project", "settings.context.skills.filter.project"],
			["agent", "settings.context.skills.filter.agent"]
		].map(([id, key]) => ({
			id,
			label: i18n.baseText(key),
			checked: scopeFilter.value === id
		})));
		function listQuery(page, itemsPerPage) {
			const term = search.value.trim();
			return {
				skip: page * itemsPerPage,
				take: itemsPerPage,
				...term ? { search: term } : {},
				...scopeFilter.value !== ALL_SCOPES ? { scope: scopeFilter.value } : {}
			};
		}
		/**
		* Where a new skill can live: the instance, the personal project and the team projects
		* that the user may write to. An agent skill is made from inside its agent, not here.
		*/
		const scopeOptions = computed(() => {
			const options = [];
			if (canWriteInstanceSkillScope()) options.push({
				value: INSTANCE_SCOPE,
				label: i18n.baseText("settings.context.skills.scope.instance"),
				icon: "globe"
			});
			const personalProject = projectsStore.personalProject;
			if (personalProject && canWriteProjectSkillScope(personalProject.id)) options.push({
				value: `${PROJECT_SCOPE_PREFIX}${personalProject.id}`,
				label: i18n.baseText("settings.context.skills.scope.personalProject"),
				icon: "user"
			});
			for (const project of projectsStore.myProjects) {
				if (project.type !== "team" || !canWriteProjectSkillScope(project.id)) continue;
				options.push({
					value: `${PROJECT_SCOPE_PREFIX}${project.id}`,
					label: project.name ?? project.id,
					icon: "layers"
				});
			}
			return options;
		});
		/** Settings creates and moves skills only to a project or the instance, never to one agent. */
		function parseScope(value) {
			if (value.startsWith(PROJECT_SCOPE_PREFIX)) return {
				scope: "project",
				projectId: value.slice(8)
			};
			return { scope: "instance" };
		}
		async function load() {
			const { page = 0, itemsPerPage = PREFERENCES_DEFAULT_PAGE_SIZE } = tableOptions.value;
			try {
				await skillsStore.fetchSkills(listQuery(page, itemsPerPage));
				loadFailed.value = false;
				const lastPage = Math.max(0, Math.ceil(skillsStore.count / itemsPerPage) - 1);
				if (page > lastPage) {
					tableOptions.value = {
						...tableOptions.value,
						page: lastPage
					};
					await skillsStore.fetchSkills(listQuery(lastPage, itemsPerPage));
				}
			} catch (error) {
				loadFailed.value = true;
				showError(error, i18n.baseText("settings.context.skills.error.load"));
			}
		}
		async function onOptionsUpdate(options) {
			tableOptions.value = options;
			await load();
		}
		/** A new filter starts at the first page. */
		async function resetPage() {
			tableOptions.value = {
				...tableOptions.value,
				page: 0
			};
			await load();
		}
		const onSearch = useDebounceFn(resetPage, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		async function onScopeFilter(value) {
			scopeFilter.value = value;
			await resetPage();
		}
		function openModal(data) {
			uiStore.openModalWithData({
				name: AGENT_SKILL_MODAL_KEY,
				data
			});
		}
		/** Starts at the SKILL.md upload step, which also offers "Add manually". */
		function openCreateModal() {
			const options = scopeOptions.value;
			if (options.length === 0) return;
			openModal({
				scopeOptions: options,
				initialScope: options[0].value,
				existingSkillNames: [],
				getDefaultName: async (scopeValue) => await skillsStore.fetchNewSkillName({
					...parseScope(scopeValue),
					name: i18n.baseText("agents.builder.skills.defaultName")
				}),
				onConfirm: async ({ skill, scope, method }) => await onCreate(skill, scope ?? options[0].value, method)
			});
		}
		/**
		* The row is the feedback for a create or a save, as on the preferences page. The list
		* keeps the search and the scope filter, so a skill they hide gets a message instead.
		*/
		function confirmIfHidden(skillId, key) {
			if (skillsStore.skills.some((item) => item.id === skillId)) return;
			showMessage({
				title: i18n.baseText(key === "created" ? "settings.context.skills.create.hidden" : "settings.context.skills.save.hidden"),
				type: "success"
			});
		}
		/**
		* A refused save keeps the modal open, so the user keeps what they typed. A taken name
		* shows on the name field, any other error in a toast.
		*/
		function saveFailed(error) {
			if (isSkillNameTakenError(error)) return {
				saved: false,
				nameError: i18n.baseText("settings.context.skills.error.nameTaken")
			};
			showError(error, i18n.baseText("settings.context.skills.error.save"));
			return { saved: false };
		}
		async function onCreate(skill, scopeValue, method) {
			let createdId;
			try {
				createdId = (await skillsStore.createSkill({
					...parseScope(scopeValue),
					skill,
					...method ? { method } : {}
				})).id;
			} catch (error) {
				return saveFailed(error);
			}
			await load();
			confirmIfHidden(createdId, "created");
		}
		/** The value of the scope picker for a saved skill. An agent skill has no picker value of its own. */
		function scopeValueOf(skill) {
			if (skill.scope === "project" && skill.projectId) return `${PROJECT_SCOPE_PREFIX}${skill.projectId}`;
			return skill.scope;
		}
		/**
		* Why the scope of a saved skill cannot change, if it cannot. The backend refuses a move
		* while an agent uses the skill, and a move needs the delete permission where the skill is,
		* because it takes the skill out of that scope.
		*/
		function scopeLock(detail) {
			if (detail.usedByAgents > 0) return { scopeLockedReason: i18n.baseText("settings.context.skills.modal.scope.inUse", {
				interpolate: { count: detail.usedByAgents },
				adjustToNumber: detail.usedByAgents
			}) };
			if (!detail.canDelete) return { scopeLockedReason: i18n.baseText("settings.context.skills.modal.scope.noDelete") };
			return {};
		}
		async function openEditModal(item) {
			try {
				const detail = await skillsStore.fetchSkill(item.id);
				telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_OPENED_SKILL, {
					skill_id: detail.id,
					scope: detail.scope,
					...detail.projectId ? { project_id: detail.projectId } : {},
					read_only: !detail.canEdit
				});
				const currentValue = scopeValueOf(detail);
				const options = scopeOptions.value.some((option) => option.value === currentValue) ? scopeOptions.value : [{
					value: currentValue,
					...scopeDisplay(detail)
				}, ...scopeOptions.value];
				openModal({
					skill: detail.skill,
					skillId: detail.id,
					readOnly: !detail.canEdit,
					scopeOptions: options,
					initialScope: currentValue,
					...scopeLock(detail),
					existingSkillNames: [],
					onConfirm: async ({ skill, scope }) => await onSave(detail.id, skill, detail.skillHash, scope !== currentValue ? scope : void 0)
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.loadOne"));
			}
		}
		/** Saves the next version. There are no drafts: what the modal shows is what gets saved. */
		/** `newScope` is set when the user picked another scope: the save also moves the skill. */
		async function onSave(id, skill, baseSkillHash, newScope) {
			let created;
			try {
				({created} = await skillsStore.saveSkill(id, {
					name: skill.name,
					description: skill.description,
					instructions: skill.instructions,
					references: skill.references ?? [],
					baseSkillHash,
					...newScope ? parseScope(newScope) : {}
				}));
			} catch (error) {
				return saveFailed(error);
			}
			if (created || newScope !== void 0) {
				await load();
				confirmIfHidden(id, "saved");
			} else showMessage({
				title: i18n.baseText("settings.context.skills.save.noChanges"),
				type: "info"
			});
		}
		async function onDelete(skill) {
			if (await message.confirm(i18n.baseText("settings.context.skills.delete.confirm.message"), i18n.baseText("settings.context.skills.delete.confirm.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("settings.context.skills.delete.confirm.button"),
				cancelButtonText: i18n.baseText("settings.context.skills.delete.cancel")
			}) !== "confirm") return;
			try {
				await skillsStore.deleteSkill(skill.id);
				showMessage({
					title: i18n.baseText("settings.context.skills.delete.success"),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.delete"));
			}
			await load();
		}
		async function goBack() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT });
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.skills.title"));
			await Promise.all([load(), projectsStore.getMyProjects().catch(() => void 0)]);
			if (!loadFailed.value) telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_VIEWED_SKILLS, { count: skillsStore.count });
			const { skillId, create } = route.query;
			if (typeof skillId === "string") await openEditModal({ id: skillId });
			else if (create === "true") openCreateModal();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.context.skills.back"),
				"data-test-id": "settings-skills-view",
				onBack: goBack
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.context.skills.title"),
						description: unref(i18n).baseText("settings.context.skills.description"),
						"show-docs-link": false
					}, null, 8, ["title", "description"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
						createVNode(unref(Input_default), {
							modelValue: search.value,
							"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => search.value = $event), unref(onSearch)],
							class: normalizeClass(_ctx.$style.search),
							placeholder: unref(i18n).baseText("settings.context.skills.search.placeholder"),
							clearable: "",
							"data-test-id": "skills-search"
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"modelValue",
							"class",
							"placeholder",
							"onUpdate:modelValue"
						]),
						createVNode(unref(DropdownMenu_default), {
							items: scopeFilterItems.value,
							placement: "bottom-start",
							"content-test-id": "skills-scope-filter-menu",
							onSelect: onScopeFilter
						}, {
							trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.filterTrigger) }, [createVNode(unref(N8nIconButton_default), {
								variant: "outline",
								icon: "funnel",
								"aria-label": unref(i18n).baseText("settings.context.skills.filter.label"),
								"data-test-id": "skills-scope-filter"
							}, null, 8, ["aria-label"]), scopeFilter.value !== "all" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.filterDot),
								"data-test-id": "skills-scope-filter-active"
							}, null, 2)) : createCommentVNode("", true)], 2)]),
							_: 1
						}, 8, ["items"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.spacer) }, null, 2),
						scopeOptions.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							label: unref(i18n).baseText("settings.context.skills.actions.create"),
							"data-test-id": "skills-create-button",
							onClick: openCreateModal
						}, null, 8, ["label"])) : createCommentVNode("", true)
					], 2),
					createVNode(SkillsTable_default, {
						"table-options": tableOptions.value,
						"onUpdate:tableOptions": _cache[1] || (_cache[1] = ($event) => tableOptions.value = $event),
						skills: unref(skillsStore).skills,
						"items-length": unref(skillsStore).count,
						loading: unref(skillsStore).loading,
						"show-empty": showEmptyState.value,
						onOpen: openEditModal,
						onDelete,
						"onUpdate:options": onOptionsUpdate
					}, {
						empty: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.empty),
							"data-test-id": "skills-empty-state"
						}, [
							createVNode(unref(N8nHeading_default), {
								tag: "h2",
								size: "medium",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.empty.title")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.empty.description")), 1)]),
								_: 1
							}),
							scopeOptions.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								label: unref(i18n).baseText("settings.context.skills.actions.create"),
								"data-test-id": "skills-empty-create-button",
								onClick: openCreateModal
							}, null, 8, ["label"])) : createCommentVNode("", true)
						], 2)]),
						_: 1
					}, 8, [
						"table-options",
						"skills",
						"items-length",
						"loading",
						"show-empty"
					])
				]),
				_: 1
			}, 8, ["class", "back-label"]);
		};
	}
});
var SettingsSkillsView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_yh9bj_2",
	toolbar: "_toolbar_yh9bj_9",
	spacer: "_spacer_yh9bj_16",
	search: "_search_yh9bj_20",
	filterTrigger: "_filterTrigger_yh9bj_24",
	filterDot: "_filterDot_yh9bj_30",
	empty: "_empty_yh9bj_41"
};
var SettingsSkillsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSkillsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSkillsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsSkillsView_default as default };

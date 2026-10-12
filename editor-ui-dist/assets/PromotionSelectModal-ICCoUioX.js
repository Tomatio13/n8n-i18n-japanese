import { Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Hd as nextTick, Kd as onMounted, Nd as defineComponent, Qd as renderSlot, Sf as ref, Td as createBlock, Wd as onBeforeUnmount, Yd as openBlock, Zd as renderList, Zf as normalizeClass, _f as isRef, bd as Fragment, cf as watch, jd as createVNode, np as toDisplayString, of as useTemplateRef, uf as withCtx, wd as createBaseVNode, wf as shallowRef, yd as withModifiers, yf as onScopeDispose } from "./vendor-C0K-pJCd.js";
import { $C as Input_default, Cy as getResourcePermissions, DC as N8nCallout_default, Ef as createPublicProject, G_ as useSettingsStore, Ip as VARIABLE_MODAL_KEY, Jx as Dialog_default, K_ as useRootStore, R_ as useToast, S_ as EnterpriseEditionFeature, Uf as createPublicCredential, W_ as useUsersStore, Yx as DialogTitle_default, Zp as CREDENTIAL_EDIT_MODAL_KEY, Zx as DialogDescription_default, au as Modal_default, aw as _plugin_vue_export_helper_default, cv as ResponseError, hf as useEnvironmentsStore, ko as TimeAgo_default, nw as N8nIcon_default, qC as N8nText_default, qx as DialogFooter_default, rf as useCredentialsStore, sC as Checkbox_default, tw as N8nButton_default, uw as useI18n, wp as useUIStore, xC as createEventBus, yf as useProjectsStore, zx as useMessage } from "./app-Gcu_WcI0.js";
import { t as promotionEventBus } from "./promotions.eventBus-DFinOWPI.js";
import { r as continueApplyPromotion, t as applyPromotion } from "./promotionsSettings.api-c0PHTYSP.js";
import { t as getPromotableChanges } from "./promotions.api-Cb0UqGxv.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionChanges.ts
function usePromotionChanges(projectId, direction = "promote") {
	const rootStore = useRootStore();
	const changes = ref([]);
	const commitSha = ref(null);
	const isLoading = ref(false);
	const error = ref(null);
	const searchQuery = ref("");
	const lastRefreshedAt = ref(null);
	const selectedIds = ref(/* @__PURE__ */ new Set());
	const filteredChanges = computed(() => {
		if (!searchQuery.value) return changes.value;
		const term = searchQuery.value.toLowerCase();
		return changes.value.filter((c) => c.name.toLowerCase().includes(term));
	});
	const selectedCount = computed(() => selectedIds.value.size);
	const allSelected = computed(() => filteredChanges.value.length > 0 && filteredChanges.value.every((c) => selectedIds.value.has(c.id)));
	const someSelected = computed(() => filteredChanges.value.some((c) => selectedIds.value.has(c.id)) && !allSelected.value);
	function reconcileSelection() {
		const availableIds = new Set(changes.value.map((c) => c.id));
		selectedIds.value = new Set([...selectedIds.value].filter((id) => availableIds.has(id)));
	}
	async function fetchChanges() {
		if (isLoading.value) return;
		isLoading.value = true;
		error.value = null;
		try {
			const result = await getPromotableChanges(rootStore.restApiContext, projectId, direction);
			changes.value = result.changes;
			commitSha.value = result.commitSha;
			reconcileSelection();
			lastRefreshedAt.value = (/* @__PURE__ */ new Date()).toISOString();
		} catch (e) {
			error.value = e instanceof Error ? e : new Error(String(e));
		} finally {
			isLoading.value = false;
		}
	}
	function toggleSelected(id) {
		const next = new Set(selectedIds.value);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		selectedIds.value = next;
	}
	function toggleSelectAll() {
		const next = new Set(selectedIds.value);
		if (allSelected.value) for (const c of filteredChanges.value) next.delete(c.id);
		else for (const c of filteredChanges.value) next.add(c.id);
		selectedIds.value = next;
	}
	return {
		changes,
		commitSha,
		filteredChanges,
		isLoading,
		error,
		searchQuery,
		lastRefreshedAt,
		selectedIds,
		selectedCount,
		allSelected,
		someSelected,
		fetchChanges,
		toggleSelected,
		toggleSelectAll
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionBindings.ts
function promotionBindingKey(binding) {
	if (binding.kind === "credential") return JSON.stringify([binding.kind, binding.sourceId]);
	return JSON.stringify([
		binding.kind,
		binding.name,
		binding.scope.kind,
		binding.scope.kind === "project" ? binding.scope.project.id : null
	]);
}
function matchesCreation(binding, created) {
	if (!created.id || promotionBindingKey(binding) !== promotionBindingKey(created)) return false;
	if (binding.kind === "credential" && created.kind === "credential") return created.id === binding.sourceId && created.credentialType === binding.credentialType && created.projectId === binding.ownerProject.id;
	return binding.kind === "variable" && created.kind === "variable";
}
function usePromotionBindings() {
	const rootStore = useRootStore();
	const originalResult = shallowRef();
	const preflight = shallowRef();
	const knownBindings = shallowRef(/* @__PURE__ */ new Map());
	const missingKeys = shallowRef(/* @__PURE__ */ new Set());
	const accessByKey = shallowRef(/* @__PURE__ */ new Map());
	const createdBindings = shallowRef(/* @__PURE__ */ new Map());
	const isSubmitting = ref(false);
	const isCreating = ref(false);
	const isFinished = ref(false);
	const sourceChanged = ref(false);
	const error = shallowRef(null);
	let session = 0;
	let expectedSource;
	let connectionId;
	function statusOf(key, projectId) {
		if (missingKeys.value.has(key)) return "missing";
		if (accessByKey.value.get(key)?.has(projectId)) return "access";
		return "resolved";
	}
	const groups = computed(() => {
		const projects = /* @__PURE__ */ new Map();
		for (const [key, binding] of knownBindings.value) for (const consumer of binding.consumers) {
			let group = projects.get(consumer.project.id);
			if (!group) {
				group = {
					project: consumer.project,
					workflows: []
				};
				projects.set(consumer.project.id, group);
			}
			const row = {
				key,
				binding,
				status: statusOf(key, consumer.project.id),
				created: createdBindings.value.get(key)
			};
			for (const workflow of consumer.workflows) {
				let workflowGroup = group.workflows.find((entry) => entry.workflow.id === workflow.id);
				if (!workflowGroup) {
					workflowGroup = {
						workflow,
						rows: []
					};
					group.workflows.push(workflowGroup);
				}
				if (!workflowGroup.rows.some((entry) => entry.key === row.key)) workflowGroup.rows.push(row);
			}
		}
		return Array.from(projects.values());
	});
	const unresolvedCount = computed(() => missingKeys.value.size + accessByKey.value.size + (preflight.value?.conflicts.length ?? 0));
	const isBusy = computed(() => isSubmitting.value || isCreating.value);
	const canContinue = computed(() => !!originalResult.value && unresolvedCount.value === 0 && !isBusy.value && !sourceChanged.value && !isFinished.value);
	const savedResources = computed(() => Array.from(createdBindings.value.values()));
	function reconcile(result) {
		preflight.value = result.preflight;
		const next = new Map(knownBindings.value);
		for (const binding of result.preflight.missingBindings) next.set(promotionBindingKey(binding), binding);
		knownBindings.value = next;
		missingKeys.value = new Set(result.preflight.missingBindings.map(promotionBindingKey));
		accessByKey.value = new Map(result.preflight.accessRequirements.map((access) => [JSON.stringify([access.kind, access.sourceId]), new Set(access.consumers.map((consumer) => consumer.project.id))]));
	}
	function start(result) {
		session++;
		originalResult.value = result;
		connectionId = result.connectionId;
		expectedSource = {
			configId: result.configId,
			...result.git
		};
		knownBindings.value = /* @__PURE__ */ new Map();
		createdBindings.value = /* @__PURE__ */ new Map();
		isSubmitting.value = false;
		isCreating.value = false;
		isFinished.value = false;
		sourceChanged.value = false;
		error.value = null;
		reconcile(result);
	}
	function end() {
		session++;
		originalResult.value = void 0;
	}
	async function createBinding(key, create) {
		const binding = knownBindings.value.get(key);
		if (!originalResult.value || !binding || !missingKeys.value.has(key) || isBusy.value || sourceChanged.value || isFinished.value) return;
		const currentSession = session;
		isCreating.value = true;
		error.value = null;
		try {
			const created = await create(binding);
			if (currentSession !== session || !created) return;
			if (!matchesCreation(binding, created)) {
				error.value = { kind: "creationMismatch" };
				return;
			}
			createdBindings.value = new Map(createdBindings.value).set(key, created);
			const next = new Set(missingKeys.value);
			next.delete(key);
			missingKeys.value = next;
		} catch {} finally {
			if (currentSession === session) isCreating.value = false;
		}
	}
	async function continueApply() {
		if (!canContinue.value || !connectionId || !expectedSource) return;
		const currentSession = session;
		isSubmitting.value = true;
		error.value = null;
		try {
			const result = await continueApplyPromotion(rootStore.publicApiContext, connectionId, { expectedSource: { ...expectedSource } });
			if (currentSession !== session) return;
			if (result.status === "blocked") reconcile(result);
			if (result.status === "source-changed") sourceChanged.value = true;
			if (result.status === "applied") isFinished.value = true;
			return result;
		} catch (cause) {
			if (currentSession === session) error.value = {
				kind: "continue",
				cause
			};
			return;
		} finally {
			if (currentSession === session) isSubmitting.value = false;
		}
	}
	return {
		originalResult,
		preflight,
		groups,
		unresolvedCount,
		savedResources,
		isBusy,
		isSubmitting,
		isCreating,
		sourceChanged,
		error,
		canContinue,
		start,
		end,
		createBinding,
		continueApply
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionBindingsDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = { scope: "col" };
var _hoisted_4 = { scope: "col" };
var _hoisted_5 = { scope: "col" };
var _hoisted_6 = { "aria-live": "polite" };
var _hoisted_7 = { key: 0 };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { key: 4 };
var PromotionBindingsDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionBindingsDialog",
	props: {
		open: { type: Boolean },
		blockedResult: {},
		createBinding: { type: Function }
	},
	emits: [
		"update:open",
		"applied",
		"preflight-updated",
		"source-changed",
		"close-requested"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = useTemplateRef("title");
		const bindings = usePromotionBindings();
		const { preflight, groups, unresolvedCount, savedResources, isBusy, isSubmitting, isCreating, sourceChanged, error, canContinue } = bindings;
		watch(() => props.open, (open) => {
			if (open) bindings.start(props.blockedResult);
			else bindings.end();
		}, { immediate: true });
		watch(preflight, (value) => {
			if (value) emit("preflight-updated", value);
		}, {
			immediate: true,
			flush: "sync"
		});
		onBeforeUnmount(bindings.end);
		const errorDetail = computed(() => error.value?.kind === "continue" && error.value.cause instanceof Error ? error.value.cause.message : void 0);
		function close() {
			if (!props.open || isBusy.value) return;
			emit("close-requested", savedResources.value);
			emit("update:open", false);
		}
		function preventBusyDismissal(event) {
			if (isBusy.value) event.preventDefault();
		}
		function preventEscapeDismissal(event) {
			const dialog = title.value?.closest("[role=\"dialog\"]");
			if (isBusy.value || !(event.target instanceof Node) || !dialog?.contains(event.target)) event.preventDefault();
		}
		function focusTitle(event) {
			event.preventDefault();
			nextTick(() => title.value?.focus());
		}
		function destinationScope(binding) {
			if (binding.kind === "credential") return binding.ownerProject.name;
			return binding.scope.kind === "global" ? i18n.baseText("promotions.bindings.global") : binding.scope.project.name;
		}
		function consumerNames(consumers) {
			return consumers.map((consumer) => i18n.baseText("promotions.bindings.consumers", { interpolate: {
				project: consumer.project.name,
				workflows: consumer.workflows.map((workflow) => workflow.name).join(", ")
			} })).join("; ");
		}
		async function create(key, event) {
			const trigger = event.currentTarget;
			const row = trigger instanceof HTMLElement ? trigger.closest("tr") : null;
			await bindings.createBinding(key, props.createBinding);
			await nextTick();
			if (!props.open || !row?.isConnected) return;
			if (trigger instanceof HTMLButtonElement && trigger.isConnected && !trigger.disabled) trigger.focus();
			else row.focus();
		}
		async function continueApply() {
			const result = await bindings.continueApply();
			if (result?.status === "applied") {
				emit("applied", result);
				emit("update:open", false);
			} else if (result?.status === "source-changed") emit("source-changed", result);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "fit",
				"show-close-button": !unref(isBusy),
				"trap-focus": !unref(isCreating),
				"disable-outside-pointer-events": !unref(isCreating),
				onOpenAutoFocus: focusTitle,
				"onUpdate:open": close,
				onEscapeKeyDown: preventEscapeDismissal,
				onInteractOutside: preventBusyDismissal
			}, {
				default: withCtx(() => [createBaseVNode("form", {
					class: normalizeClass(_ctx.$style.form),
					onSubmit: withModifiers(continueApply, ["prevent"])
				}, [
					createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "ghost",
						size: "small",
						icon: "arrow-left",
						"icon-only": "",
						"aria-label": unref(i18n).baseText("promotions.bindings.back"),
						disabled: unref(isBusy),
						onClick: close
					}, null, 8, ["aria-label", "disabled"]), createBaseVNode("div", null, [createVNode(unref(DialogTitle_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("h2", {
							ref_key: "title",
							ref: title,
							class: normalizeClass(_ctx.$style.title),
							tabindex: "-1"
						}, toDisplayString(unref(i18n).baseText("promotions.bindings.title")), 3)]),
						_: 1
					}), createVNode(unref(DialogDescription_default), { class: normalizeClass(_ctx.$style.subtitle) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.subtitle")), 1)]),
						_: 1
					}, 8, ["class"])])], 2),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.body),
						"data-test-id": "promotion-bindings-body"
					}, [
						renderSlot(_ctx.$slots, "notices"),
						createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, toDisplayString(unref(i18n).baseText("promotions.bindings.description")), 3),
						unref(sourceChanged) ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.sourceChanged")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						unref(error) ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 1,
							theme: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.bindings.error.${unref(error).kind}`)) + " ", 1), errorDetail.value ? (openBlock(), createElementBlock("p", _hoisted_1$1, toDisplayString(errorDetail.value), 1)) : createCommentVNode("", true)]),
							_: 1
						})) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(unref(groups), (group) => {
							return openBlock(), createElementBlock("section", {
								key: group.project.id,
								class: normalizeClass(_ctx.$style.project)
							}, [unref(groups).length > 1 ? (openBlock(), createElementBlock("h3", {
								key: 0,
								class: normalizeClass(_ctx.$style.projectName)
							}, toDisplayString(group.project.name), 3)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.workflows, (entry) => {
								return openBlock(), createElementBlock("section", { key: entry.workflow.id }, [createBaseVNode("h4", { class: normalizeClass(_ctx.$style.workflow) }, [createVNode(unref(N8nIcon_default), {
									icon: "workflow",
									size: "small"
								}), createBaseVNode("span", null, toDisplayString(entry.workflow.name), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createBaseVNode("table", {
									class: normalizeClass(_ctx.$style.table),
									"aria-label": entry.workflow.name
								}, [
									createBaseVNode("colgroup", null, [
										createBaseVNode("col", { class: normalizeClass(_ctx.$style.sourceColumn) }, null, 2),
										createBaseVNode("col", { class: normalizeClass(_ctx.$style.destinationColumn) }, null, 2),
										createBaseVNode("col", { class: normalizeClass(_ctx.$style.statusColumn) }, null, 2)
									]),
									createBaseVNode("thead", null, [createBaseVNode("tr", null, [
										createBaseVNode("th", _hoisted_3, toDisplayString(unref(i18n).baseText("promotions.bindings.source")), 1),
										createBaseVNode("th", _hoisted_4, toDisplayString(unref(i18n).baseText("promotions.bindings.destination")), 1),
										createBaseVNode("th", _hoisted_5, toDisplayString(unref(i18n).baseText("promotions.bindings.status")), 1)
									])]),
									createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(entry.rows, (row) => {
										return openBlock(), createElementBlock("tr", {
											key: row.key,
											tabindex: "-1"
										}, [
											createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sourceItem) }, [createVNode(unref(N8nIcon_default), {
												icon: row.binding.kind === "credential" ? "key-round" : "json",
												size: "small",
												"aria-hidden": "false",
												"aria-label": unref(i18n).baseText(`promotions.bindings.kind.${row.binding.kind}`)
											}, null, 8, ["icon", "aria-label"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, toDisplayString(row.binding.name), 3)], 2)]),
											createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.destination) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.destinationItem, row.status === "missing" && _ctx.$style.pendingItem]) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, toDisplayString(row.status === "missing" ? unref(i18n).baseText("promotions.bindings.notCreated") : row.created?.name ?? row.binding.name), 3), row.status === "missing" ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												icon: "circle-alert",
												size: "small"
											})) : createCommentVNode("", true)], 2), row.status === "missing" ? (openBlock(), createBlock(unref(N8nButton_default), {
												key: 0,
												type: "button",
												variant: "outline",
												size: "small",
												icon: "plus",
												"icon-only": "",
												disabled: unref(isBusy) || unref(sourceChanged),
												"aria-label": unref(i18n).baseText("promotions.bindings.createNamed", { interpolate: { name: row.binding.name } }),
												onClick: ($event) => create(row.key, $event)
											}, null, 8, [
												"disabled",
												"aria-label",
												"onClick"
											])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.scope) }, toDisplayString(destinationScope(row.binding)), 3)]),
											createBaseVNode("td", _hoisted_6, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.status, row.status === "resolved" ? _ctx.$style.resolved : _ctx.$style.pending]) }, [createVNode(unref(N8nIcon_default), {
												icon: row.status === "resolved" ? "circle-check" : "circle-alert",
												size: "small"
											}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(`promotions.bindings.status.${row.status}`)), 1)], 2)])
										]);
									}), 128))])
								], 10, _hoisted_2)], 2)]);
							}), 128))], 2);
						}), 128)),
						unref(preflight)?.accessRequirements.length ? (openBlock(), createElementBlock("section", {
							key: 2,
							class: normalizeClass(_ctx.$style.notices)
						}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.access.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preflight).accessRequirements, (item) => {
							return openBlock(), createBlock(unref(N8nCallout_default), {
								key: item.sourceId,
								theme: "warning"
							}, {
								default: withCtx(() => [
									createBaseVNode("strong", null, toDisplayString(item.name), 1),
									createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("promotions.bindings.access.description")), 1),
									createBaseVNode("p", null, toDisplayString(consumerNames(item.consumers)), 1)
								]),
								_: 2
							}, 1024);
						}), 128))], 2)) : createCommentVNode("", true),
						unref(preflight)?.conflicts.length ? (openBlock(), createElementBlock("section", {
							key: 3,
							class: normalizeClass(_ctx.$style.notices)
						}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.conflicts.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preflight).conflicts, (item, index) => {
							return openBlock(), createBlock(unref(N8nCallout_default), {
								key: index,
								theme: "warning"
							}, {
								default: withCtx(() => [
									createBaseVNode("strong", null, toDisplayString(item.kind === "project" ? item.project.name : item.name), 1),
									createBaseVNode("p", null, toDisplayString(unref(i18n).baseText(`promotions.bindings.conflicts.${item.code}`)), 1),
									item.kind !== "project" ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(consumerNames(item.consumers)), 1)) : (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(item.workflows.map((workflow) => workflow.name).join(", ")), 1))
								]),
								_: 2
							}, 1024);
						}), 128))], 2)) : createCommentVNode("", true),
						unref(preflight)?.accessRequirements.length || unref(preflight)?.conflicts.length ? (openBlock(), createElementBlock("p", _hoisted_9, toDisplayString(unref(i18n).baseText("promotions.bindings.restart")), 1)) : createCommentVNode("", true),
						unref(preflight)?.warnings.length ? (openBlock(), createElementBlock("section", {
							key: 5,
							class: normalizeClass(_ctx.$style.notices)
						}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.warnings.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preflight).warnings, (item, index) => {
							return openBlock(), createBlock(unref(N8nCallout_default), {
								key: index,
								theme: "info"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.warnings.variableShadowed", { interpolate: { name: item.name } })) + " ", 1), createBaseVNode("p", null, toDisplayString(consumerNames(item.consumers)), 1)]),
								_: 2
							}, 1024);
						}), 128))], 2)) : createCommentVNode("", true)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [unref(savedResources).length ? (openBlock(), createElementBlock("p", {
						key: 0,
						class: normalizeClass(_ctx.$style.savedResources)
					}, toDisplayString(unref(i18n).baseText("promotions.bindings.savedResources")), 3)) : createCommentVNode("", true), createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.actions) }, {
						default: withCtx(() => [
							createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.count),
								role: "status"
							}, toDisplayString(unref(i18n).baseText("promotions.bindings.unresolvedCount", {
								adjustToNumber: unref(unresolvedCount),
								interpolate: { count: unref(unresolvedCount) }
							})), 3),
							createVNode(unref(N8nButton_default), {
								type: "button",
								variant: "outline",
								size: "small",
								disabled: unref(isBusy),
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.close")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							createVNode(unref(N8nButton_default), {
								type: "submit",
								size: "small",
								disabled: !unref(canContinue),
								loading: unref(isSubmitting)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.continue")), 1)]),
								_: 1
							}, 8, ["disabled", "loading"])
						]),
						_: 1
					}, 8, ["class"])], 2)
				], 34)]),
				_: 3
			}, 8, [
				"open",
				"show-close-button",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
});
var PromotionBindingsDialog_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_1s4ch_1",
	header: "_header_1s4ch_10",
	subtitle: "_subtitle_1s4ch_19",
	title: "_title_1s4ch_25",
	body: "_body_1s4ch_29",
	description: "_description_1s4ch_42",
	project: "_project_1s4ch_47",
	notices: "_notices_1s4ch_48",
	projectName: "_projectName_1s4ch_54",
	workflow: "_workflow_1s4ch_60",
	tableContainer: "_tableContainer_1s4ch_72",
	table: "_table_1s4ch_72",
	sourceColumn: "_sourceColumn_1s4ch_100",
	destinationColumn: "_destinationColumn_1s4ch_101",
	statusColumn: "_statusColumn_1s4ch_105",
	sourceItem: "_sourceItem_1s4ch_109",
	destination: "_destination_1s4ch_101",
	destinationItem: "_destinationItem_1s4ch_111",
	status: "_status_1s4ch_105",
	name: "_name_1s4ch_133",
	pendingItem: "_pendingItem_1s4ch_148",
	scope: "_scope_1s4ch_153",
	pending: "_pending_1s4ch_148",
	resolved: "_resolved_1s4ch_168",
	footer: "_footer_1s4ch_177",
	savedResources: "_savedResources_1s4ch_183",
	actions: "_actions_1s4ch_190",
	count: "_count_1s4ch_194"
};
var PromotionBindingsDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionBindingsDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionBindingsDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionBindingCreation.ts
function usePromotionBindingCreation(result, onProjectCreated) {
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const projectsStore = useProjectsStore();
	const credentialsStore = useCredentialsStore();
	const environmentsStore = useEnvironmentsStore();
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const toast = useToast();
	const createdProjects = shallowRef(/* @__PURE__ */ new Map());
	const knownProjectIds = /* @__PURE__ */ new Set();
	let preflight = result.preflight;
	function updatePreflight(value) {
		preflight = value;
		for (const project of value.missingProjects) knownProjectIds.delete(project.id);
	}
	let active = false;
	let disposed = false;
	let finish;
	async function loadProject(id) {
		const project = await projectsStore.fetchProject(id);
		await projectsStore.getMyProjects();
		return project;
	}
	async function ensureProject(id, resource) {
		const missing = preflight.missingProjects.find((project) => project.id === id);
		if (missing && !knownProjectIds.has(id)) try {
			const project = await createPublicProject(rootStore.publicApiContext, missing);
			knownProjectIds.add(id);
			const metadata = {
				id: project.id,
				name: project.name
			};
			createdProjects.value = new Map(createdProjects.value).set(project.id, metadata);
			onProjectCreated(metadata);
		} catch (error) {
			if (error instanceof ResponseError && error.httpStatusCode && error.httpStatusCode < 500 && error.httpStatusCode !== 409) throw error;
		}
		const project = await loadProject(id);
		knownProjectIds.add(id);
		if (project.type !== "team" || !getResourcePermissions(project.scopes)[resource].create) throw new Error(i18n.baseText("promotions.bindings.destinationDenied"));
		return project;
	}
	function bindingProject(binding) {
		if (binding.kind === "credential") return binding.ownerProject;
		return binding.scope.kind === "project" ? binding.scope.project : void 0;
	}
	async function prepareDestination(project) {
		if (!project) return {};
		const missing = preflight.missingProjects.find((item) => item.id === project.id);
		if (!missing || knownProjectIds.has(project.id)) return { destination: {
			kind: "resolved",
			project: await loadProject(project.id)
		} };
		return {
			destination: {
				kind: "pending",
				id: project.id,
				name: missing.name,
				permissions: { create: projectsStore.canCreateProjects && projectsStore.hasPermissionToCreateProjects }
			},
			notice: () => {
				const created = createdProjects.value.get(project.id);
				return i18n.baseText(created ? "promotions.bindings.projectSetup.retained" : "promotions.bindings.projectSetup.beforeSave", { interpolate: { projectName: created?.name ?? missing.name } });
			}
		};
	}
	async function assertEditorAvailable(binding) {
		if (binding.kind === "credential") {
			await credentialsStore.fetchCredentialTypes(false);
			if (!credentialsStore.getCredentialTypeByName(binding.credentialType)) throw new Error(i18n.baseText("credentialEdit.typeUnavailable"));
			return;
		}
		if (!settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) throw new Error(i18n.baseText("promotions.bindings.variablesUnavailable"));
		await environmentsStore.fetchAllVariables();
	}
	function openCredentialEditor(binding, setup, session) {
		uiStore.openNewCredential(binding.credentialType, false, true, void 0, void 0, void 0, void 0, {
			...setup,
			initialName: binding.name,
			initialData: binding.expressionData,
			appendToBody: true,
			hideAskAssistant: true,
			usageScope: "project",
			onInitializeError: session.fail,
			createCredential: async (details, projectId) => {
				session.checkActive();
				await ensureProject(projectId, "credential");
				session.checkActive();
				const credential = await createPublicCredential(rootStore.publicApiContext, {
					id: binding.sourceId,
					name: details.name,
					description: details.description,
					type: binding.credentialType,
					data: details.data ?? {},
					projectId,
					isResolvable: false
				});
				session.checkActive();
				session.save({
					kind: "credential",
					sourceId: binding.sourceId,
					id: credential.id,
					name: credential.name,
					credentialType: credential.type,
					projectId
				});
				return credential.id;
			}
		});
	}
	function openVariableEditor(binding, setup, session) {
		const project = bindingProject(binding);
		const options = {
			...setup,
			mode: "new",
			initialValues: {
				key: binding.name,
				value: ""
			},
			fixedKey: true,
			projectId: project?.id ?? null,
			appendToBody: true,
			onCreate: async (values) => {
				session.checkActive();
				if (project) await ensureProject(project.id, "projectVariable");
				session.checkActive();
				const variable = await environmentsStore.createVariable({
					key: binding.name,
					value: values.value,
					projectId: project?.id ?? null
				});
				session.checkActive();
				session.save({
					kind: "variable",
					id: variable.id,
					name: variable.key,
					scope: variable.project ? {
						kind: "project",
						project: variable.project
					} : { kind: "global" }
				});
				return variable;
			}
		};
		uiStore.openModalWithData({
			name: VARIABLE_MODAL_KEY,
			data: options
		});
	}
	const createBinding = async (binding) => {
		if (active || disposed) throw new Error(i18n.baseText("promotions.bindings.editorBusy"));
		active = true;
		try {
			const setup = await prepareDestination(bindingProject(binding));
			await assertEditorAvailable(binding);
			if (disposed) return null;
			const modalName = binding.kind === "credential" ? CREDENTIAL_EDIT_MODAL_KEY : VARIABLE_MODAL_KEY;
			if (uiStore.modalsById[modalName]?.open) throw new Error(i18n.baseText("promotions.bindings.editorBusy"));
			return await new Promise((resolve, reject) => {
				let saved = null;
				let settled = false;
				let stopWatching;
				const settle = (error) => {
					if (settled) return;
					settled = true;
					stopWatching?.();
					finish = void 0;
					if (error) reject(error);
					else resolve(saved);
				};
				finish = () => {
					settle();
					uiStore.closeModal(modalName);
				};
				const session = {
					checkActive: () => {
						if (settled || disposed) throw new Error(i18n.baseText("promotions.bindings.editorClosed"));
					},
					save: (value) => {
						saved = value;
					},
					fail: (error) => {
						if (settled || disposed) return;
						settle(error);
						uiStore.closeModal(modalName);
					}
				};
				try {
					if (binding.kind === "credential") openCredentialEditor(binding, setup, session);
					else openVariableEditor(binding, setup, session);
					stopWatching = watch(() => uiStore.modalsById[modalName]?.open, (open) => {
						if (!open) settle();
					});
				} catch (error) {
					settle(error);
				}
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("promotions.bindings.error.setup"));
			throw error;
		} finally {
			active = false;
		}
	};
	onScopeDispose(() => {
		disposed = true;
		finish?.();
	});
	return {
		createBinding,
		updatePreflight,
		createdProjects: computed(() => Array.from(createdProjects.value.values()))
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionBindingsFlow.vue
var PromotionBindingsFlow_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionBindingsFlow",
	props: {
		open: { type: Boolean },
		blockedResult: {}
	},
	emits: [
		"update:open",
		"applied",
		"source-changed",
		"close-requested",
		"project-created"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { createBinding, createdProjects, updatePreflight } = usePromotionBindingCreation(props.blockedResult, (project) => emit("project-created", project));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PromotionBindingsDialog_default, {
				open: __props.open,
				"blocked-result": __props.blockedResult,
				"create-binding": unref(createBinding),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => emit("update:open", $event)),
				onPreflightUpdated: unref(updatePreflight),
				onApplied: _cache[1] || (_cache[1] = ($event) => emit("applied", $event)),
				onSourceChanged: _cache[2] || (_cache[2] = ($event) => emit("source-changed", $event)),
				onCloseRequested: _cache[3] || (_cache[3] = ($event) => emit("close-requested", $event))
			}, {
				notices: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(createdProjects), (project) => {
					return openBlock(), createBlock(unref(N8nCallout_default), {
						key: project.id,
						theme: "info"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.projectSetup.retained", { interpolate: { projectName: project.name } })), 1)]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			}, 8, [
				"open",
				"blocked-result",
				"create-binding",
				"onPreflightUpdated"
			]);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionSelectModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var PromotionSelectModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionSelectModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const rootStore = useRootStore();
		const message = useMessage();
		const toast = useToast();
		const modalBus = createEventBus();
		const { direction } = props.data;
		const isIncoming = direction === "apply";
		const isApplying = ref(false);
		const blockedResult = shallowRef();
		const { changes, commitSha, filteredChanges, isLoading, error, searchQuery, lastRefreshedAt, selectedIds, selectedCount, allSelected, someSelected, fetchChanges, toggleSelected, toggleSelectAll } = usePromotionChanges(props.data.projectId, direction);
		const title = i18n.baseText(isIncoming ? "promotions.modal.incoming.title" : "promotions.modal.title");
		const emptyTitle = i18n.baseText(isIncoming ? "promotions.modal.incoming.empty" : "promotions.modal.empty");
		const emptyDescription = i18n.baseText(isIncoming ? "promotions.modal.incoming.empty.description" : "promotions.modal.empty.description");
		const hasNoSearchResults = computed(() => !isLoading.value && !error.value && changes.value.length > 0 && filteredChanges.value.length === 0);
		function getStatusLabel(status) {
			return i18n.baseText(`promotions.modal.status.${status}`);
		}
		function getDependencyLabel(count) {
			if (count === 0) return i18n.baseText("promotions.modal.noDependencies");
			if (count === 1) return i18n.baseText("promotions.modal.dependency");
			return i18n.baseText("promotions.modal.dependencies", { interpolate: { count: String(count) } });
		}
		function resolveUserName(userId) {
			if (!userId) return null;
			const user = usersStore.usersById[userId];
			if (!user) return null;
			return [user.firstName, user.lastName].filter(Boolean).join(" ") || null;
		}
		function getChangedByLabel(userId) {
			const name = resolveUserName(userId);
			if (!name) return "";
			return i18n.baseText("promotions.modal.changedBy", { interpolate: { name } });
		}
		function getPromoteButtonLabel() {
			if (selectedCount.value === 1) return i18n.baseText("promotions.modal.promoteSingle");
			return i18n.baseText("promotions.modal.promote", { interpolate: { count: String(selectedCount.value) } });
		}
		function isSelected(id) {
			return selectedIds.value.has(id);
		}
		function onClose() {
			uiStore.closeModal(props.modalName);
		}
		async function onRefresh() {
			await fetchChanges();
		}
		async function announceApplied() {
			const { projectId } = props.data;
			try {
				const project = await projectsStore.fetchProject(projectId);
				promotionEventBus.emit("applied", {
					projectId,
					project
				});
			} catch (error) {
				if (error instanceof ResponseError && error.httpStatusCode === 404) {
					toast.showMessage({
						title: i18n.baseText("promotions.applied.projectRemoved"),
						type: "info"
					});
					promotionEventBus.emit("projectRemoved", { projectId });
					return;
				}
				promotionEventBus.emit("applied", { projectId });
			}
		}
		async function onApplied(result) {
			const { workflows } = result.counts;
			const notPublished = workflows.publishing.failed + workflows.publishing.blocked;
			const summary = i18n.baseText("promotions.modal.incoming.applied.message", { interpolate: {
				created: String(workflows.created),
				updated: String(workflows.updated),
				archived: String(workflows.archived),
				deleted: String(workflows.deleted)
			} });
			toast.showMessage({
				title: i18n.baseText("promotions.modal.incoming.applied.title"),
				message: notPublished ? `${summary} ${i18n.baseText("promotions.modal.incoming.applied.notPublished", { interpolate: { count: String(notPublished) } })}` : summary,
				type: notPublished ? "warning" : "success"
			});
			onClose();
			await announceApplied();
		}
		async function onSourceChanged() {
			blockedResult.value = void 0;
			await fetchChanges();
			toast.showMessage({
				title: i18n.baseText("promotions.modal.incoming.paused.title"),
				message: i18n.baseText("promotions.modal.incoming.paused.source-changed"),
				type: "warning"
			});
		}
		/** Applies the whole branch. The selection is kept for the selective apply that follows. */
		async function onApplyAll() {
			const { apply } = props.data;
			if (!apply) return;
			if (await message.confirm(i18n.baseText("promotions.modal.incoming.confirm.message"), i18n.baseText("promotions.modal.incoming.confirm.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("promotions.modal.incoming.confirm.confirmButtonText"),
				cancelButtonText: i18n.baseText("promotions.modal.close")
			}) !== "confirm") return;
			isApplying.value = true;
			try {
				const expectedSource = commitSha.value ? {
					configId: apply.configId,
					branchName: apply.branchName,
					commitSha: commitSha.value
				} : void 0;
				const result = await applyPromotion(rootStore.publicApiContext, apply.connectionId, expectedSource && { expectedSource });
				if (result.status === "applied") {
					await onApplied(result);
					return;
				}
				if (result.status === "blocked") {
					blockedResult.value = result;
					return;
				}
				toast.showMessage({
					title: i18n.baseText("promotions.modal.incoming.paused.title"),
					message: i18n.baseText("promotions.modal.incoming.paused.source-changed"),
					type: "warning"
				});
			} catch (applyError) {
				toast.showError(applyError, i18n.baseText("promotions.modal.incoming.applyError"));
			} finally {
				isApplying.value = false;
			}
			await fetchChanges();
		}
		onMounted(async () => {
			await fetchChanges();
		});
		return (_ctx, _cache) => {
			return !blockedResult.value ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				"before-close": () => !isApplying.value,
				name: __props.modalName,
				title: unref(title),
				"event-bus": unref(modalBus),
				width: "640px",
				height: "80vh",
				"max-height": "680px",
				"custom-class": "promotion-modal"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
					createVNode(unref(Checkbox_default), {
						"model-value": unref(allSelected),
						indeterminate: unref(someSelected),
						"data-test-id": "promotion-select-all",
						"onUpdate:modelValue": unref(toggleSelectAll)
					}, null, 8, [
						"model-value",
						"indeterminate",
						"onUpdate:modelValue"
					]),
					createVNode(unref(Input_default), {
						modelValue: unref(searchQuery),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
						placeholder: unref(i18n).baseText("promotions.modal.search.placeholder"),
						size: "small",
						clearable: "",
						"data-test-id": "promotion-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, null, 8, [
						"modelValue",
						"placeholder",
						"class"
					]),
					unref(lastRefreshedAt) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.lastRefreshed),
						"data-test-id": "promotion-last-refreshed"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.lastRefreshed")) + " ", 1), createVNode(TimeAgo_default, {
							date: unref(lastRefreshedAt),
							live: ""
						}, null, 8, ["date"])]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						icon: "refresh-cw",
						"data-test-id": "promotion-refresh",
						disabled: unref(isLoading),
						onClick: onRefresh
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.refresh")), 1)]),
						_: 1
					}, 8, ["disabled"])
				], 2), unref(isLoading) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.loading")), 1)]),
					_: 1
				})], 2)) : unref(error) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.empty),
					"data-test-id": "promotion-error"
				}, [
					createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.error")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.error.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						"data-test-id": "promotion-retry",
						onClick: onRefresh
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.retry")), 1)]),
						_: 1
					})
				], 2)) : unref(changes).length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyTitle)), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(emptyDescription)), 1)]),
					_: 1
				})], 2)) : hasNoSearchResults.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.empty),
					"data-test-id": "promotion-no-results"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.noResults")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.listContainer)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredChanges), (change, index) => {
					return openBlock(), createElementBlock("div", {
						key: change.id,
						class: normalizeClass([
							_ctx.$style.row,
							isSelected(change.id) && _ctx.$style.rowSelected,
							index === 0 && _ctx.$style.rowFirst,
							index === unref(filteredChanges).length - 1 && _ctx.$style.rowLast
						]),
						"data-test-id": "promotion-change-row",
						onClick: ($event) => unref(toggleSelected)(change.id)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": isSelected(change.id),
						"onUpdate:modelValue": ($event) => unref(toggleSelected)(change.id),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, null, 8, ["model-value", "onUpdate:modelValue"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowHeader) }, [createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(change.name), 1)]),
						_: 2
					}, 1024), createBaseVNode("span", {
						class: normalizeClass([
							_ctx.$style.statusLabel,
							change.status === "archived" && _ctx.$style.statusArchived,
							change.status === "deleted" && _ctx.$style.statusDeleted
						]),
						"data-test-id": "promotion-change-status"
					}, toDisplayString(getStatusLabel(change.status)), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowMeta) }, [
						getChangedByLabel(change.updatedBy) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getChangedByLabel(change.updatedBy)), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						getChangedByLabel(change.updatedBy) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("·", -1)])]),
							_: 1
						})) : createCommentVNode("", true),
						change.updatedAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, { date: change.updatedAt }, null, 8, ["date"])]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						change.dependencyCount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("·", -1)])]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getDependencyLabel(change.dependencyCount)), 1)]),
							_: 2
						}, 1024)], 64)) : createCommentVNode("", true)
					], 2)], 2)], 10, _hoisted_1);
				}), 128))], 2)], 2))], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [isIncoming && unref(selectedCount) > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.incoming.selected", { interpolate: { count: String(unref(selectedCount)) } })), 1)]),
					_: 1
				})) : !isIncoming ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.previewOnly")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.close")), 1)]),
					_: 1
				}), isIncoming ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					loading: isApplying.value,
					disabled: unref(isLoading) || !!unref(error),
					"data-test-id": "promotion-apply-all",
					onClick: onApplyAll
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.incoming.applyAll")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					disabled: "",
					"data-test-id": "promotion-submit"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(getPromoteButtonLabel()), 1)]),
					_: 1
				}))], 2)], 2)]),
				_: 1
			}, 8, [
				"before-close",
				"name",
				"title",
				"event-bus"
			])) : (openBlock(), createBlock(PromotionBindingsFlow_default, {
				key: 1,
				open: true,
				"blocked-result": blockedResult.value,
				"onUpdate:open": _cache[2] || (_cache[2] = (open) => {
					if (!open) blockedResult.value = void 0;
				}),
				onApplied,
				onSourceChanged
			}, null, 8, ["blocked-result"]));
		};
	}
});
var PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default = {
	content: "_content_se213_14",
	toolbar: "_toolbar_se213_22",
	searchInput: "_searchInput_se213_32",
	lastRefreshed: "_lastRefreshed_se213_37",
	loading: "_loading_se213_42",
	empty: "_empty_se213_49",
	listContainer: "_listContainer_se213_58",
	list: "_list_se213_58",
	row: "_row_se213_74",
	rowFirst: "_rowFirst_se213_91",
	rowLast: "_rowLast_se213_95",
	rowSelected: "_rowSelected_se213_99",
	rowContent: "_rowContent_se213_103",
	rowHeader: "_rowHeader_se213_110",
	statusLabel: "_statusLabel_se213_117",
	statusArchived: "_statusArchived_se213_122",
	statusDeleted: "_statusDeleted_se213_126",
	rowMeta: "_rowMeta_se213_130",
	footer: "_footer_se213_136",
	footerLeft: "_footerLeft_se213_142",
	footerRight: "_footerRight_se213_147"
};
var PromotionSelectModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionSelectModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default }]]);
//#endregion
export { PromotionSelectModal_default as default };

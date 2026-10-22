import { $d as nextTick, Ad as withModifiers, Af as onScopeDispose, Fd as createBaseVNode, Ff as shallowRef, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, _f as useTemplateRef, cf as renderList, cp as normalizeClass, jd as Fragment, lf as renderSlot, of as openBlock, pp as toDisplayString, tf as onBeforeUnmount, xf as withCtx, yf as watch } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, Bp as createPublicProject, Cv as EnterpriseEditionFeature, DT as N8nIcon_default, Db as getResourcePermissions, ET as N8nButton_default, FT as useI18n, Kv as useSettingsStore, Np as useProjectsStore, Zw as N8nCallout_default, _p as useCredentialsStore, ch as useUIStore, gC as DialogTitle_default, hC as Dialog_default, hy as ResponseError, jh as CREDENTIAL_EDIT_MODAL_KEY, kp as useEnvironmentsStore, mC as DialogFooter_default, qv as useRootStore, rm as createPublicCredential, vC as DialogDescription_default, yh as VARIABLE_MODAL_KEY, zv as useToast } from "./app-TXEjHrLJ.js";
import { a as continueApplyPromotion, i as continueApplyProjectSelection } from "./promotionsSettings.api-DF3RPbz5.js";
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
var isDestructiveChange = (conflict) => conflict.code === "destructive-change";
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
	let continueTarget;
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
	const destructiveChanges = computed(() => preflight.value?.conflicts.filter(isDestructiveChange) ?? []);
	const hardConflicts = computed(() => preflight.value?.conflicts.filter((conflict) => !isDestructiveChange(conflict)) ?? []);
	const mode = computed(() => {
		if (hardConflicts.value.length || preflight.value?.accessRequirements.length) return "blocked";
		if (destructiveChanges.value.length && knownBindings.value.size === 0) return "review";
		return "bindings";
	});
	const unresolvedCount = computed(() => missingKeys.value.size + accessByKey.value.size + hardConflicts.value.length);
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
	function start(result, target) {
		session++;
		originalResult.value = result;
		connectionId = result.connectionId;
		continueTarget = target;
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
		if (!canContinue.value || !connectionId || !expectedSource || !continueTarget) return;
		const currentSession = session;
		isSubmitting.value = true;
		error.value = null;
		try {
			const confirmDestructiveChanges = destructiveChanges.value.length > 0 || void 0;
			const result = continueTarget.kind === "selection" ? await continueApplyProjectSelection(rootStore.publicApiContext, continueTarget.projectId, {
				workflowIds: continueTarget.workflowIds,
				expectedSource: { ...expectedSource },
				confirmDestructiveChanges
			}) : await continueApplyPromotion(rootStore.publicApiContext, connectionId, {
				expectedSource: { ...expectedSource },
				confirmDestructiveChanges
			});
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
		destructiveChanges,
		hardConflicts,
		mode,
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
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 1 };
var _hoisted_4 = { key: 4 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { key: 0 };
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = { scope: "col" };
var _hoisted_9 = { scope: "col" };
var _hoisted_10 = { scope: "col" };
var _hoisted_11 = { "aria-live": "polite" };
var LISTED_COLUMNS_LIMIT = 5;
var PromotionBindingsDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionBindingsDialog",
	props: {
		open: { type: Boolean },
		blockedResult: {},
		createBinding: { type: Function },
		continueWith: {}
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
		const { preflight, groups, destructiveChanges, hardConflicts, mode, unresolvedCount, savedResources, isBusy, isSubmitting, isCreating, sourceChanged, error, canContinue } = bindings;
		watch(() => props.open, (open) => {
			if (open) bindings.start(props.blockedResult, props.continueWith);
			else bindings.end();
		}, { immediate: true });
		watch(preflight, (value) => {
			if (value) emit("preflight-updated", value);
		}, {
			immediate: true,
			flush: "sync"
		});
		onBeforeUnmount(bindings.end);
		const header = computed(() => {
			if (mode.value === "bindings") return {
				title: i18n.baseText("promotions.bindings.title"),
				subtitle: i18n.baseText("promotions.bindings.subtitle")
			};
			return {
				title: i18n.baseText(`promotions.bindings.${mode.value}.title`),
				subtitle: i18n.baseText(`promotions.bindings.${mode.value}.subtitle`)
			};
		});
		const visibleGroups = computed(() => mode.value === "bindings" ? groups.value : []);
		const destructiveSummary = computed(() => i18n.baseText(mode.value === "blocked" ? "promotions.bindings.destructive.description" : "promotions.bindings.destructive.confirmDescription", { adjustToNumber: destructiveChanges.value.length }));
		function destructiveColumns(changes) {
			const columns = changes.flatMap((change) => change.kind === "remove-column" || change.kind === "change-column-type" ? change.column : []);
			const list = columns.slice(0, LISTED_COLUMNS_LIMIT).join(", ");
			const hidden = columns.length - LISTED_COLUMNS_LIMIT;
			return hidden > 0 ? i18n.baseText("promotions.bindings.destructive.columnsMore", { interpolate: {
				list,
				count: hidden
			} }) : i18n.baseText("promotions.bindings.destructive.columns", { interpolate: { list } });
		}
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
			else if (result?.status === "blocked") {
				await nextTick();
				title.value?.focus();
			}
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
					class: normalizeClass([_ctx.$style.form, unref(mode) !== "bindings" && _ctx.$style.compact]),
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
						}, toDisplayString(header.value.title), 3)]),
						_: 1
					}), createVNode(unref(DialogDescription_default), { class: normalizeClass(_ctx.$style.subtitle) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(header.value.subtitle), 1)]),
						_: 1
					}, 8, ["class"])])], 2),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.body),
						"data-test-id": "promotion-bindings-body"
					}, [
						renderSlot(_ctx.$slots, "notices"),
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
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.bindings.error.${unref(error).kind}`)) + " ", 1), errorDetail.value ? (openBlock(), createElementBlock("p", _hoisted_1, toDisplayString(errorDetail.value), 1)) : createCommentVNode("", true)]),
							_: 1
						})) : createCommentVNode("", true),
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
						unref(hardConflicts).length ? (openBlock(), createElementBlock("section", {
							key: 3,
							class: normalizeClass(_ctx.$style.notices)
						}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.conflicts.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hardConflicts), (item, index) => {
							return openBlock(), createBlock(unref(N8nCallout_default), {
								key: index,
								theme: "warning"
							}, {
								default: withCtx(() => [
									createBaseVNode("strong", null, toDisplayString(item.kind === "project" ? item.project.name : item.name), 1),
									createBaseVNode("p", null, toDisplayString(unref(i18n).baseText(`promotions.bindings.conflicts.${item.code}`)), 1),
									item.kind !== "project" ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(consumerNames(item.consumers)), 1)) : (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(item.workflows.map((workflow) => workflow.name).join(", ")), 1))
								]),
								_: 2
							}, 1024);
						}), 128))], 2)) : createCommentVNode("", true),
						unref(mode) === "blocked" ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(unref(i18n).baseText("promotions.bindings.restart")), 1)) : createCommentVNode("", true),
						unref(destructiveChanges).length ? (openBlock(), createElementBlock("section", {
							key: 5,
							class: normalizeClass(_ctx.$style.notices)
						}, [
							unref(mode) !== "review" ? (openBlock(), createElementBlock("h3", _hoisted_5, toDisplayString(unref(i18n).baseText("promotions.bindings.destructive.title")), 1)) : createCommentVNode("", true),
							createBaseVNode("p", null, toDisplayString(destructiveSummary.value), 1),
							(openBlock(true), createElementBlock(Fragment, null, renderList(unref(destructiveChanges), (item) => {
								return openBlock(), createBlock(unref(N8nCallout_default), {
									key: item.id,
									theme: "warning",
									iconless: ""
								}, {
									default: withCtx(() => [createBaseVNode("strong", null, toDisplayString(item.name), 1), createBaseVNode("p", null, toDisplayString(destructiveColumns(item.changes)), 1)]),
									_: 2
								}, 1024);
							}), 128))
						], 2)) : createCommentVNode("", true),
						unref(mode) === "bindings" ? (openBlock(), createElementBlock("div", {
							key: 6,
							class: normalizeClass(_ctx.$style.notices)
						}, [unref(destructiveChanges).length ? (openBlock(), createElementBlock("h3", _hoisted_6, toDisplayString(unref(i18n).baseText("promotions.bindings.bindingsSection.title")), 1)) : createCommentVNode("", true), createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, toDisplayString(unref(i18n).baseText("promotions.bindings.description")), 3)], 2)) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(visibleGroups.value, (group) => {
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
										createBaseVNode("th", _hoisted_8, toDisplayString(unref(i18n).baseText("promotions.bindings.source")), 1),
										createBaseVNode("th", _hoisted_9, toDisplayString(unref(i18n).baseText("promotions.bindings.destination")), 1),
										createBaseVNode("th", _hoisted_10, toDisplayString(unref(i18n).baseText("promotions.bindings.status")), 1)
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
											createBaseVNode("td", _hoisted_11, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.status, row.status === "resolved" ? _ctx.$style.resolved : _ctx.$style.pending]) }, [createVNode(unref(N8nIcon_default), {
												icon: row.status === "resolved" ? "circle-check" : "circle-alert",
												size: "small"
											}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(`promotions.bindings.status.${row.status}`)), 1)], 2)])
										]);
									}), 128))])
								], 10, _hoisted_7)], 2)]);
							}), 128))], 2);
						}), 128)),
						unref(preflight)?.warnings.length ? (openBlock(), createElementBlock("section", {
							key: 7,
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
							unref(mode) === "bindings" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.count),
								role: "status"
							}, toDisplayString(unref(i18n).baseText("promotions.bindings.unresolvedCount", {
								adjustToNumber: unref(unresolvedCount),
								interpolate: { count: unref(unresolvedCount) }
							})), 3)) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								type: "button",
								variant: unref(mode) === "blocked" ? "solid" : "outline",
								size: "small",
								disabled: unref(isBusy),
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.close")), 1)]),
								_: 1
							}, 8, ["variant", "disabled"]),
							unref(mode) !== "blocked" ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 1,
								type: "submit",
								size: "small",
								variant: unref(destructiveChanges).length ? "destructive" : "solid",
								disabled: !unref(canContinue),
								loading: unref(isSubmitting)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(destructiveChanges).length ? "promotions.bindings.applyDataTableChanges" : "promotions.bindings.continue")), 1)]),
								_: 1
							}, 8, [
								"variant",
								"disabled",
								"loading"
							])) : createCommentVNode("", true)
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
	form: "_form_h370p_1",
	compact: "_compact_h370p_10",
	header: "_header_h370p_15",
	subtitle: "_subtitle_h370p_24",
	title: "_title_h370p_30",
	body: "_body_h370p_34",
	description: "_description_h370p_47",
	project: "_project_h370p_52",
	notices: "_notices_h370p_53",
	projectName: "_projectName_h370p_59",
	workflow: "_workflow_h370p_65",
	tableContainer: "_tableContainer_h370p_77",
	table: "_table_h370p_77",
	sourceColumn: "_sourceColumn_h370p_105",
	destinationColumn: "_destinationColumn_h370p_106",
	statusColumn: "_statusColumn_h370p_110",
	sourceItem: "_sourceItem_h370p_114",
	destination: "_destination_h370p_106",
	destinationItem: "_destinationItem_h370p_116",
	status: "_status_h370p_110",
	name: "_name_h370p_138",
	pendingItem: "_pendingItem_h370p_153",
	scope: "_scope_h370p_158",
	pending: "_pending_h370p_153",
	resolved: "_resolved_h370p_173",
	footer: "_footer_h370p_182",
	savedResources: "_savedResources_h370p_188",
	actions: "_actions_h370p_195",
	count: "_count_h370p_199"
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
		blockedResult: {},
		continueWith: {}
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
				"continue-with": __props.continueWith,
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
				"continue-with",
				"onPreflightUpdated"
			]);
		};
	}
});
//#endregion
export { PromotionBindingsFlow_default as t };

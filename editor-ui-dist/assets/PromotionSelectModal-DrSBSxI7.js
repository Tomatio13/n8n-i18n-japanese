import { Ad as createElementBlock, Cd as Fragment, Dd as createBaseVNode, Df as shallowRef, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Sd as withModifiers, Tf as ref, Yd as onMounted, ap as toDisplayString, bf as isRef, ef as renderList, ep as normalizeClass, kd as createCommentVNode, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, EE as N8nButton_default, FE as useI18n, GT as createEventBus, Is as TimeAgo_default, Ny as useRootStore, Pd as Modal_default, Ty as useToast, dm as useProjectsStore, dx as parsePromotionsWorkflowsMovedCrossProjectMeta, jy as useUsersStore, kT as Checkbox_default, mT as NewBadge_default, qh as useUIStore, rw as useMessage, tb as ResponseError, vE as N8nText_default, wE as Input_default } from "./app-CJdBXMVa.js";
import { t as promotionEventBus } from "./promotions.eventBus-Dg7HZDjL.js";
import { t as applyProjectSelection } from "./promotionsSettings.api-CY1KiOHe.js";
import { n as promoteProjectSelection, t as getPromotableChanges } from "./promotions.api--HdVp8AZ.js";
import { t as PromotionBindingsFlow_default } from "./PromotionBindingsFlow-CcIWT4GQ.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionChanges.ts
function usePromotionChanges(projectId, direction = "promote") {
	const rootStore = useRootStore();
	const changes = ref([]);
	const commitSha = ref(null);
	const source = ref(null);
	const isLoading = ref(false);
	const isSubmitting = ref(false);
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
		if (isLoading.value || isSubmitting.value) return;
		isLoading.value = true;
		error.value = null;
		try {
			const result = await getPromotableChanges(rootStore.restApiContext, projectId, direction);
			changes.value = result.changes;
			commitSha.value = result.commitSha;
			source.value = result.source;
			reconcileSelection();
			lastRefreshedAt.value = (/* @__PURE__ */ new Date()).toISOString();
		} catch (e) {
			error.value = e instanceof Error ? e : new Error(String(e));
		} finally {
			isLoading.value = false;
		}
	}
	function toggleSelected(id) {
		if (isSubmitting.value) return;
		const next = new Set(selectedIds.value);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		selectedIds.value = next;
	}
	function toggleSelectAll() {
		if (isSubmitting.value) return;
		const next = new Set(selectedIds.value);
		if (allSelected.value) for (const c of filteredChanges.value) next.delete(c.id);
		else for (const c of filteredChanges.value) next.add(c.id);
		selectedIds.value = next;
	}
	async function submitSelection() {
		if (selectedCount.value === 0 || isSubmitting.value) return null;
		isSubmitting.value = true;
		try {
			return await promoteProjectSelection(rootStore.publicApiContext, projectId, { workflowIds: [...selectedIds.value] });
		} finally {
			isSubmitting.value = false;
		}
	}
	return {
		changes,
		commitSha,
		source,
		filteredChanges,
		isLoading,
		isSubmitting,
		error,
		searchQuery,
		lastRefreshedAt,
		selectedIds,
		selectedCount,
		allSelected,
		someSelected,
		fetchChanges,
		submitSelection,
		toggleSelected,
		toggleSelectAll
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/promoteErrorMessage.ts
function resolveWorkflowTitles(workflowIds, changes) {
	const nameById = new Map(changes.map((change) => [change.id, change.name]));
	return workflowIds.map((id) => nameById.get(id) ?? id).join(", ");
}
/** User-facing promote failure text; undefined falls back to the API error message. */
function getPromoteErrorMessage(error, changes, i18n) {
	if (!(error instanceof ResponseError)) return;
	const movedMeta = parsePromotionsWorkflowsMovedCrossProjectMeta(error.meta);
	if (movedMeta) return i18n.baseText("promotions.modal.promoteError.workflowsMovedCrossProject", { interpolate: { workflows: resolveWorkflowTitles(movedMeta.workflowIds, changes) } });
}
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
		const blockedWorkflowIds = shallowRef([]);
		const { changes, commitSha, source, filteredChanges, isLoading, isSubmitting, error, searchQuery, lastRefreshedAt, selectedIds, selectedCount, allSelected, someSelected, fetchChanges, submitSelection, toggleSelected, toggleSelectAll } = usePromotionChanges(props.data.projectId, direction);
		const isSelectionLocked = computed(() => isSubmitting.value || isApplying.value);
		function onToggleSelected(id) {
			if (isSelectionLocked.value) return;
			toggleSelected(id);
		}
		function onToggleSelectAll() {
			if (isSelectionLocked.value) return;
			toggleSelectAll();
		}
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
		function getApplySelectedButtonLabel() {
			if (selectedCount.value === 1) return i18n.baseText("promotions.modal.incoming.applySelectedSingle");
			return i18n.baseText("promotions.modal.incoming.applySelected", { interpolate: { count: String(selectedCount.value) } });
		}
		function isSelected(id) {
			return selectedIds.value.has(id);
		}
		const isPromoteDisabled = computed(() => isSubmitting.value || isLoading.value || !!error.value || changes.value.length === 0 || selectedCount.value === 0);
		function beforeClose() {
			if (isSubmitting.value) return false;
			return true;
		}
		function onClose() {
			if (beforeClose() === false) return;
			uiStore.closeModal(props.modalName);
		}
		function getPromoteSuccessMessage(branchName) {
			if (branchName.startsWith("n8n-promotion/")) return i18n.baseText("promotions.modal.toast.success.messageNewBranch");
			return i18n.baseText("promotions.modal.toast.success.message", { interpolate: { branch: branchName } });
		}
		async function onPromote() {
			if (isPromoteDisabled.value) return;
			try {
				const result = await submitSelection();
				if (!result) return;
				promotionEventBus.emit("promoted", { projectId: props.data.projectId });
				toast.showMessage({
					title: i18n.baseText("promotions.modal.toast.success.title"),
					message: getPromoteSuccessMessage(result.git.branchName),
					type: "success"
				});
				onClose();
			} catch (promoteError) {
				const title = i18n.baseText("promotions.modal.promoteError");
				const promoteFailureMessage = getPromoteErrorMessage(promoteError, changes.value, i18n);
				if (promoteFailureMessage) toast.showMessage({
					title,
					message: promoteFailureMessage,
					type: "error",
					duration: 0
				}, false);
				else toast.showError(promoteError, title);
			}
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
			const interpolate = {
				created: String(workflows.created),
				updated: String(workflows.updated),
				archived: String(workflows.archived),
				deleted: String(workflows.deleted),
				notPublished: String(notPublished)
			};
			toast.showMessage({
				title: i18n.baseText("promotions.modal.incoming.applied.title"),
				message: i18n.baseText(notPublished ? "promotions.modal.incoming.applied.messageNotPublished" : "promotions.modal.incoming.applied.message", { interpolate }),
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
		/** Applies only the selected workflows. Unselected content on the instance is left as is. */
		async function onApplySelected() {
			if (await message.confirm(i18n.baseText("promotions.modal.incoming.confirmSelected.message"), i18n.baseText("promotions.modal.incoming.confirmSelected.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("promotions.modal.incoming.confirmSelected.confirmButtonText"),
				cancelButtonText: i18n.baseText("promotions.modal.close")
			}) !== "confirm") return;
			isApplying.value = true;
			const workflowIds = Array.from(selectedIds.value);
			try {
				const expectedSource = commitSha.value && source.value ? {
					...source.value,
					commitSha: commitSha.value
				} : void 0;
				const result = await applyProjectSelection(rootStore.publicApiContext, props.data.projectId, {
					workflowIds,
					expectedSource
				});
				if (result.status === "applied") {
					await onApplied(result);
					return;
				}
				if (result.status === "blocked") {
					blockedWorkflowIds.value = workflowIds;
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
				"before-close": () => !isApplying.value && !unref(isSubmitting),
				name: __props.modalName,
				title: unref(title),
				"event-bus": unref(modalBus),
				"show-close": !isApplying.value && !unref(isSubmitting),
				"close-on-click-modal": !isApplying.value && !unref(isSubmitting),
				"close-on-press-escape": !isApplying.value && !unref(isSubmitting),
				width: "640px",
				height: "80vh",
				"max-height": "680px",
				"custom-class": "promotion-modal"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
					createVNode(unref(Checkbox_default), {
						"model-value": unref(allSelected),
						indeterminate: unref(someSelected),
						disabled: isSelectionLocked.value,
						"data-test-id": "promotion-select-all",
						"onUpdate:modelValue": onToggleSelectAll
					}, null, 8, [
						"model-value",
						"indeterminate",
						"disabled"
					]),
					createVNode(unref(Input_default), {
						modelValue: unref(searchQuery),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
						placeholder: unref(i18n).baseText("promotions.modal.search.placeholder"),
						size: "small",
						clearable: "",
						disabled: unref(isSubmitting),
						"data-test-id": "promotion-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, null, 8, [
						"modelValue",
						"placeholder",
						"disabled",
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
						variant: "outline",
						size: "small",
						icon: "refresh-cw",
						"data-test-id": "promotion-refresh",
						disabled: unref(isLoading) || unref(isSubmitting),
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
						variant: "outline",
						size: "small",
						"data-test-id": "promotion-retry",
						disabled: unref(isSubmitting),
						onClick: onRefresh
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.retry")), 1)]),
						_: 1
					}, 8, ["disabled"])
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
							isSelectionLocked.value && _ctx.$style.rowDisabled,
							index === 0 && _ctx.$style.rowFirst,
							index === unref(filteredChanges).length - 1 && _ctx.$style.rowLast
						]),
						"data-test-id": "promotion-change-row",
						onClick: ($event) => onToggleSelected(change.id)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": isSelected(change.id),
						disabled: isSelectionLocked.value,
						"onUpdate:modelValue": ($event) => onToggleSelected(change.id),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, null, 8, [
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowHeader) }, [createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(change.name), 1)]),
						_: 2
					}, 1024), change.status === "new" ? (openBlock(), createBlock(unref(NewBadge_default), {
						key: 0,
						text: getStatusLabel(change.status),
						"data-test-id": "promotion-change-status"
					}, null, 8, ["text"])) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass([
							_ctx.$style.statusLabel,
							change.status === "archived" && _ctx.$style.statusArchived,
							change.status === "deleted" && _ctx.$style.statusDeleted
						]),
						"data-test-id": "promotion-change-status"
					}, toDisplayString(getStatusLabel(change.status)), 3))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowMeta) }, [
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
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [unref(selectedCount) > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.incoming.selected", { interpolate: { count: String(unref(selectedCount)) } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					disabled: unref(isSubmitting),
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.close")), 1)]),
					_: 1
				}, 8, ["disabled"]), isIncoming ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					loading: isApplying.value,
					disabled: unref(isLoading) || !!unref(error) || unref(selectedCount) === 0,
					"data-test-id": "promotion-apply-selected",
					onClick: onApplySelected
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(getApplySelectedButtonLabel()), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					"data-test-id": "promotion-submit",
					disabled: isPromoteDisabled.value,
					loading: unref(isSubmitting),
					onClick: onPromote
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(getPromoteButtonLabel()), 1)]),
					_: 1
				}, 8, ["disabled", "loading"]))], 2)], 2)]),
				_: 1
			}, 8, [
				"before-close",
				"name",
				"title",
				"event-bus",
				"show-close",
				"close-on-click-modal",
				"close-on-press-escape"
			])) : (openBlock(), createBlock(PromotionBindingsFlow_default, {
				key: 1,
				open: true,
				"blocked-result": blockedResult.value,
				"continue-with": {
					kind: "selection",
					projectId: props.data.projectId,
					workflowIds: blockedWorkflowIds.value
				},
				"onUpdate:open": _cache[2] || (_cache[2] = (open) => {
					if (!open) blockedResult.value = void 0;
				}),
				onApplied,
				onSourceChanged
			}, null, 8, ["blocked-result", "continue-with"]));
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

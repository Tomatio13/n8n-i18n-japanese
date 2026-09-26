import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, jt as isRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-cuvvA3pI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-CClPzxgq.js";
import { t as Input_default } from "./Input-DBFTN7SV.js";
import { t as Checkbox_default } from "./Checkbox-VYYDn0iI.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
import { t as createEventBus } from "./event-bus-oFXuRr9B.js";
import { t as useRootStore } from "./useRootStore-CVbOmixR.js";
import { t as useUsersStore } from "./users.store-Bf1IoNrc.js";
import { n as useUIStore } from "./ui.store-DfWIxg_D.js";
import { t as Modal_default } from "./Modal-CBx-GVjR.js";
import { t as TimeAgo_default } from "./TimeAgo-wLY3nuwB.js";
import { t as getPromotableChanges } from "./promotions.api-Qsu7Os2q.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionChanges.ts
function usePromotionChanges(projectId) {
	const rootStore = useRootStore();
	const changes = ref([]);
	const isLoading = ref(false);
	const error = ref(null);
	const searchQuery = ref("");
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
			changes.value = await getPromotableChanges(rootStore.restApiContext, projectId);
			reconcileSelection();
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
		filteredChanges,
		isLoading,
		error,
		searchQuery,
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
		const i18n = useI18n();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const modalBus = createEventBus();
		const { changes, filteredChanges, isLoading, error, searchQuery, selectedIds, selectedCount, allSelected, someSelected, fetchChanges, toggleSelected, toggleSelectAll } = usePromotionChanges(props.data.projectId);
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
		onMounted(async () => {
			await fetchChanges();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				title: unref(i18n).baseText("promotions.modal.title"),
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.empty")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.empty.description")), 1)]),
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
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("·", -1)])]),
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
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("·", -1)])]),
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
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.previewOnly")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.close")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					disabled: "",
					"data-test-id": "promotion-submit"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(getPromoteButtonLabel()), 1)]),
					_: 1
				})], 2)], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
var PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default = {
	content: "_content_13s1t_14",
	toolbar: "_toolbar_13s1t_22",
	searchInput: "_searchInput_13s1t_32",
	loading: "_loading_13s1t_37",
	empty: "_empty_13s1t_44",
	listContainer: "_listContainer_13s1t_53",
	list: "_list_13s1t_53",
	row: "_row_13s1t_69",
	rowFirst: "_rowFirst_13s1t_86",
	rowLast: "_rowLast_13s1t_90",
	rowSelected: "_rowSelected_13s1t_94",
	rowContent: "_rowContent_13s1t_98",
	rowHeader: "_rowHeader_13s1t_105",
	statusLabel: "_statusLabel_13s1t_112",
	statusArchived: "_statusArchived_13s1t_117",
	statusDeleted: "_statusDeleted_13s1t_121",
	rowMeta: "_rowMeta_13s1t_125",
	footer: "_footer_13s1t_131",
	footerLeft: "_footerLeft_13s1t_137",
	footerRight: "_footerRight_13s1t_142"
};
var PromotionSelectModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionSelectModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default }]]);
//#endregion
export { PromotionSelectModal_default as default };

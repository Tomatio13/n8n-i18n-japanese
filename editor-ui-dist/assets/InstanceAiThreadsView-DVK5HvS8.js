import { $d as resolveComponent, Ad as createTextVNode, Af as unref, Dd as createElementBlock, Ed as createCommentVNode, Hd as nextTick, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zd as renderList, Zf as normalizeClass, _f as isRef, as as useRouter, bd as Fragment, df as withDirectives, gd as vModelText, jd as createVNode, np as toDisplayString, uf as withCtx, vd as withKeys, wd as createBaseVNode, yd as withModifiers } from "./vendor-BdZVA4Px.js";
import { $C as Input_default, Go as formatTimeAgo, IC as N8nActionDropdown_default, R_ as useToast, _a as useInstanceAiStore, aw as _plugin_vue_export_helper_default, dC as N8nHeading_default, ea as clearPendingThreadHandoff, ew as N8nIconButton_default, go as INSTANCE_AI_THREAD_VIEW, nw as N8nIcon_default, od as useDocumentTitle, qC as N8nText_default, tw as N8nButton_default, uw as useI18n } from "./app-BLs7xE53.js";
import { t as PageViewLayout_default } from "./PageViewLayout-JQixJG5C.js";
import { t as useInstanceAiThreadHistory } from "./useInstanceAiThreadHistory-B0hOvUmT.js";
//#region src/features/ai/instanceAi/InstanceAiThreadsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onKeydown", "onBlur"];
var InstanceAiThreadsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadsView",
	setup(__props) {
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		useDocumentTitle().set(i18n.baseText("instanceAi.sidebar.chatHistory"));
		const { history, search, listRef, sentinelRef, loadMore } = useInstanceAiThreadHistory();
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const renameInput = ref(null);
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		function startRename(thread) {
			editingThreadId.value = thread.id;
			editingTitle.value = thread.title;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		function setRenameInput(element) {
			renameInput.value = element instanceof HTMLInputElement ? element : null;
		}
		async function confirmRename(thread) {
			if (editingThreadId.value !== thread.id) return;
			editingThreadId.value = null;
			const title = editingTitle.value.trim();
			if (!title || title === thread.title) return;
			try {
				await store.renameThread(thread.id, title);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("instanceAi.threads.renameSuccess")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.threads.renameError"));
			}
		}
		async function handleThreadAction(action, thread) {
			if (action === "rename") startRename(thread);
			if (action === "delete" && await store.deleteThread(thread.id)) clearPendingThreadHandoff(thread.id);
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createBlock(PageViewLayout_default, {
				"full-width": "",
				"data-test-id": "instance-ai-threads-view"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.page) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIconButton_default), {
						icon: "arrow-left",
						variant: "ghost",
						"aria-label": unref(i18n).baseText("instanceAi.threads.backToAssistant"),
						onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push({ name: unref("InstanceAi") }))
					}, null, 8, ["aria-label"]),
					createVNode(unref(N8nHeading_default), {
						class: normalizeClass(_ctx.$style.heading),
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.chatHistory")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(Input_default), {
						modelValue: unref(search),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(search) ? search.value = $event : null),
						class: normalizeClass(_ctx.$style.search),
						size: "small",
						clearable: "",
						maxlength: 500,
						placeholder: unref(i18n).baseText("instanceAi.threads.searchPlaceholder"),
						"data-test-id": "instance-ai-threads-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: "small"
						})]),
						_: 1
					}, 8, [
						"modelValue",
						"class",
						"placeholder"
					]),
					createVNode(unref(N8nButton_default), {
						size: "small",
						icon: "plus",
						onClick: _cache[2] || (_cache[2] = ($event) => unref(router).push({ name: unref("InstanceAi") }))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.thread.new")), 1)]),
						_: 1
					})
				], 2), createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					class: normalizeClass(_ctx.$style.list)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(history).threads, (thread) => {
					return openBlock(), createElementBlock("div", {
						key: thread.id,
						class: normalizeClass(_ctx.$style.row),
						"data-test-id": "instance-ai-history-thread"
					}, [editingThreadId.value === thread.id ? withDirectives((openBlock(), createElementBlock("input", {
						key: 0,
						ref_for: true,
						ref: setRenameInput,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => editingTitle.value = $event),
						class: normalizeClass(_ctx.$style.renameInput),
						type: "text",
						maxlength: "255",
						onKeydown: [withKeys(($event) => confirmRename(thread), ["enter"]), _cache[4] || (_cache[4] = withKeys(($event) => editingThreadId.value = null, ["escape"]))],
						onBlur: ($event) => confirmRename(thread)
					}, null, 42, _hoisted_1)), [[vModelText, editingTitle.value]]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(_component_RouterLink, {
							to: {
								name: unref(INSTANCE_AI_THREAD_VIEW),
								params: { threadId: thread.id }
							},
							class: normalizeClass(_ctx.$style.link),
							title: thread.title,
							onDblclick: withModifiers(($event) => startRename(thread), ["prevent"])
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								class: normalizeClass(_ctx.$style.icon),
								icon: "message-circle",
								size: "medium"
							}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.title),
								size: "medium"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(thread.title), 1)]),
								_: 2
							}, 1032, ["class"])]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title",
							"onDblclick"
						]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatTimeAgo)(thread.updatedAt)), 1)]),
							_: 2
						}, 1024),
						createVNode(unref(N8nActionDropdown_default), {
							items: threadActions,
							class: normalizeClass(_ctx.$style.actions),
							placement: "bottom-end",
							onSelect: ($event) => handleThreadAction($event, thread)
						}, {
							activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "ellipsis-vertical",
								"aria-label": unref(i18n).baseText("instanceAi.threads.actions")
							}, null, 8, ["aria-label"])]),
							_: 1
						}, 8, ["class", "onSelect"])
					], 64))], 2);
				}), 128)), unref(history).loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)) : unref(history).error ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.status),
					role: "alert"
				}, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"data-test-id": "instance-ai-threads-retry",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 2)) : unref(history).hasMore ? (openBlock(), createElementBlock("div", {
					key: 2,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel)
				}, null, 2)) : unref(history).threads.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.status)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(history).search ? "instanceAi.threads.noSearchResults" : "instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2)], 2)]),
				_: 1
			});
		};
	}
});
var InstanceAiThreadsView_vue_vue_type_style_index_0_lang_module_default = {
	page: "_page_1s7fz_1",
	header: "_header_1s7fz_11",
	heading: "_heading_1s7fz_18",
	search: "_search_1s7fz_23",
	list: "_list_1s7fz_27",
	row: "_row_1s7fz_33",
	actions: "_actions_1s7fz_43",
	link: "_link_1s7fz_47",
	icon: "_icon_1s7fz_57",
	title: "_title_1s7fz_62",
	renameInput: "_renameInput_1s7fz_78",
	status: "_status_1s7fz_92",
	sentinel: "_sentinel_1s7fz_100"
};
var InstanceAiThreadsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiThreadsView_default as default };

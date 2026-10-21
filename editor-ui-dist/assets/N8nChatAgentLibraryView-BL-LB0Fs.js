import { Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, cp as normalizeClass, jd as Fragment, of as openBlock, pp as toDisplayString, ud as useDebounceFn, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, DT as N8nIcon_default, FT as useI18n, Kh as getDebounceTime, Pw as N8nEmptyState_default, Zr as useAgentsN8nChatVariant, kv as DEBOUNCE_TIME, vT as N8nText_default, wT as Input_default, zw as N8nPagination_default } from "./app-Bl9bQlKQ.js";
import { t as N8nChatPageLayout_default } from "./N8nChatPageLayout-DyFUF2S3.js";
import { r as useN8nChatAgents, t as N8nChatAgentGrid_default } from "./N8nChatAgentGrid-Bn6t5mu1.js";
//#region src/features/agents/n8nChatPage/N8nChatAgentLibraryView.vue?vue&type=script&setup=true&lang.ts
var N8nChatAgentLibraryView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatAgentLibraryView",
	setup(__props) {
		const i18n = useI18n();
		const searchInput = ref("");
		const query = ref("");
		const page = ref(1);
		const pageSize = ref(50);
		const PAGE_SIZE_OPTIONS = [
			10,
			25,
			50,
			100
		];
		const { agents, count, isLoading, loadFailed, retry } = useN8nChatAgents({
			query,
			page,
			pageSize
		});
		const onSearch = useDebounceFn((value) => {
			const trimmed = value.trim();
			if (trimmed === query.value) return;
			query.value = trimmed;
			page.value = 1;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchInput.value = value;
			onSearch(value);
		}
		const hasSearch = computed(() => query.value.length > 0);
		const showPagination = computed(() => count.value > 0);
		const { isVariantB } = useAgentsN8nChatVariant();
		const includeAssistant = computed(() => isVariantB.value && !hasSearch.value && page.value === 1);
		const showEmptyState = computed(() => !includeAssistant.value && !isLoading.value && !loadFailed.value && count.value === 0);
		function onPageSizeChange(size) {
			pageSize.value = size;
			page.value = 1;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(N8nChatPageLayout_default, null, {
				default: withCtx(() => [
					createVNode(unref(N8nText_default), {
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.n8nChatPage.library.title")), 1)]),
						_: 1
					}),
					createVNode(unref(Input_default), {
						"model-value": searchInput.value,
						placeholder: unref(i18n).baseText("agents.n8nChatPage.library.search.placeholder"),
						maxlength: unref(128),
						size: "medium",
						clearable: "",
						"data-testid": "n8n-chat-library-search",
						"onUpdate:modelValue": onSearchInput
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"model-value",
						"placeholder",
						"maxlength"
					]),
					showEmptyState.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 0,
						"data-testid": "n8n-chat-library-empty",
						icon: {
							type: "icon",
							value: "bot"
						},
						heading: hasSearch.value ? unref(i18n).baseText("agents.n8nChatPage.library.empty.noResults.title") : unref(i18n).baseText("agents.n8nChatPage.library.empty.noAgents.title")
					}, null, 8, ["heading"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [!unref(loadFailed) || includeAssistant.value ? (openBlock(), createBlock(N8nChatAgentGrid_default, {
						key: 0,
						agents: unref(loadFailed) ? [] : unref(agents),
						loading: !unref(loadFailed) && unref(isLoading),
						"include-assistant": includeAssistant.value,
						source: "library"
					}, null, 8, [
						"agents",
						"loading",
						"include-assistant"
					])) : createCommentVNode("", true), unref(loadFailed) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 1,
						"data-testid": "n8n-chat-library-error",
						icon: {
							type: "icon",
							value: "circle-alert"
						},
						heading: unref(i18n).baseText("agents.n8nChatPage.library.loadFailed.title"),
						"button-text": unref(i18n).baseText("generic.retry"),
						"onClick:button": unref(retry)
					}, null, 8, [
						"heading",
						"button-text",
						"onClick:button"
					])) : createCommentVNode("", true)], 64)),
					showPagination.value ? (openBlock(), createBlock(unref(N8nPagination_default), {
						key: 2,
						page: page.value,
						"onUpdate:page": _cache[0] || (_cache[0] = ($event) => page.value = $event),
						class: normalizeClass(_ctx.$style.pagination),
						"items-per-page": pageSize.value,
						total: unref(count),
						"page-sizes": PAGE_SIZE_OPTIONS,
						"data-test-id": "n8n-chat-agent-library-pagination",
						"onUpdate:itemsPerPage": onPageSizeChange
					}, null, 8, [
						"page",
						"class",
						"items-per-page",
						"total"
					])) : createCommentVNode("", true)
				]),
				_: 1
			});
		};
	}
});
var N8nChatAgentLibraryView_vue_vue_type_style_index_0_lang_module_default = { pagination: "_pagination_14wbs_1" };
var N8nChatAgentLibraryView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatAgentLibraryView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatAgentLibraryView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nChatAgentLibraryView_default as default };

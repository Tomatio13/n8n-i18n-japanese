import { Af as onScopeDispose, Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Tf as getCurrentScope, Vd as createTextVNode, Vf as unref, Wd as defineComponent, cf as renderList, cp as normalizeClass, es as RouterLink, jd as Fragment, of as openBlock, pp as toDisplayString, xf as withCtx, yf as watch, zf as toValue } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, FT as useI18n, Yr as useAgentTelemetry, Zo as INSTANCE_AI_VIEW, dm as AGENT_N8N_CHAT_VIEW, gr as AgentPersonalisationIcon_default, qv as useRootStore, vT as N8nText_default, yc as listN8nChatAgents, zv as useToast } from "./app-Bl9bQlKQ.js";
import { t as SkeletonAgentCard_default } from "./SkeletonAgentCard-BxmUtqgB.js";
//#region src/features/agents/n8nChatPage/composables/useN8nChatAgents.ts
/**
* Loads one page of the n8n Chat agent library, ranked by the user's own usage.
* Refetches whenever `query`, `page` or `pageSize` change, and drops a stale response via a
* request counter (no AbortController hook on `makeRestApiRequest`).
*/
function useN8nChatAgents(options) {
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const agents = ref([]);
	const count = ref(0);
	const isLoading = ref(false);
	const loadFailed = ref(false);
	let requestVersion = 0;
	if (getCurrentScope()) onScopeDispose(() => requestVersion++);
	async function fetchAgents() {
		const version = ++requestVersion;
		isLoading.value = true;
		loadFailed.value = false;
		const query = toValue(options.query).slice(0, 128);
		const page = toValue(options.page);
		const pageSize = toValue(options.pageSize);
		try {
			const result = await listN8nChatAgents(rootStore.restApiContext, {
				query,
				skip: (page - 1) * pageSize,
				take: pageSize,
				sortBy: "usage:desc"
			});
			if (version !== requestVersion) return;
			agents.value = result.data;
			count.value = result.count;
		} catch (error) {
			if (version !== requestVersion) return;
			agents.value = [];
			count.value = 0;
			loadFailed.value = true;
			toast.showError(error, i18n.baseText("agents.n8nChatPage.library.loadError"));
		} finally {
			if (version === requestVersion) isLoading.value = false;
		}
	}
	function retry() {
		fetchAgents();
	}
	watch([
		() => toValue(options.query),
		() => toValue(options.page),
		() => toValue(options.pageSize)
	], () => {
		fetchAgents();
	}, { immediate: true });
	return {
		agents,
		count,
		isLoading,
		loadFailed,
		retry
	};
}
//#endregion
//#region src/features/agents/n8nChatPage/composables/useN8nAssistantIdentity.ts
var N8N_ASSISTANT_PERSONALISATION = {
	icon: "sparkles",
	gradient: {
		from: "var(--assistant--color--highlight-1)",
		to: "var(--assistant--color--highlight-3)",
		angle: 135,
		fromStop: 0,
		toStop: 100
	}
};
/** How n8n Assistant shows up next to agents in the n8n Chat picker and library. */
function useN8nAssistantIdentity() {
	const i18n = useI18n();
	return {
		name: computed(() => i18n.baseText("instanceAi.view.title")),
		description: computed(() => i18n.baseText("agents.n8nChatPage.picker.assistantDescription")),
		personalisation: N8N_ASSISTANT_PERSONALISATION
	};
}
//#endregion
//#region src/features/agents/n8nChatPage/components/N8nChatAgentCard.vue?vue&type=script&setup=true&lang.ts
var N8nChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatAgentCard",
	props: {
		agent: {},
		source: {}
	},
	setup(__props) {
		const props = __props;
		const assistant = useN8nAssistantIdentity();
		const agentTelemetry = useAgentTelemetry();
		const to = computed(() => props.agent ? {
			name: AGENT_N8N_CHAT_VIEW,
			params: { agentId: props.agent.id }
		} : { name: INSTANCE_AI_VIEW });
		const name = computed(() => props.agent?.name ?? assistant.name.value);
		const description = computed(() => props.agent ? props.agent.description : assistant.description.value);
		function onClick() {
			if (!props.agent) return;
			agentTelemetry.trackSelectedN8nChatAgent({
				agentId: props.agent.id,
				source: props.source
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RouterLink), {
				to: to.value,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "n8n-chat-agent-card",
				onClick
			}, {
				default: withCtx(() => [createVNode(AgentPersonalisationIcon_default, {
					personalisation: __props.agent ? __props.agent.personalisation : unref(assistant).personalisation,
					size: 40
				}, null, 8, ["personalisation"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					bold: "",
					class: normalizeClass(_ctx.$style.title),
					"data-test-id": "n8n-chat-agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(name.value), 1)]),
					_: 1
				}, 8, ["class"]), description.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "n8n-chat-agent-card-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["to", "class"]);
		};
	}
});
var N8nChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_15hfg_3",
	content: "_content_15hfg_22",
	title: "_title_15hfg_30",
	description: "_description_15hfg_36"
};
var N8nChatAgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/n8nChatPage/components/N8nChatAgentGrid.vue?vue&type=script&setup=true&lang.ts
var SKELETON_CARD_COUNT = 6;
var N8nChatAgentGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatAgentGrid",
	props: {
		agents: {},
		loading: {
			type: Boolean,
			default: false
		},
		source: {},
		includeAssistant: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.grid),
				"data-test-id": "n8n-chat-agent-grid"
			}, [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(SKELETON_CARD_COUNT, (i) => {
				return createVNode(SkeletonAgentCard_default, {
					key: i,
					"show-action-button": false,
					class: normalizeClass(_ctx.$style.skeletonCard)
				}, null, 8, ["class"]);
			}), 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.includeAssistant ? (openBlock(), createBlock(N8nChatAgentCard_default, {
				key: 0,
				agent: null,
				source: __props.source
			}, null, 8, ["source"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.agents, (agent) => {
				return openBlock(), createBlock(N8nChatAgentCard_default, {
					key: agent.id,
					agent,
					source: __props.source
				}, null, 8, ["agent", "source"]);
			}), 128))], 64))], 2);
		};
	}
});
var N8nChatAgentGrid_vue_vue_type_style_index_0_lang_module_default = {
	grid: "_grid_hp5sa_113",
	skeletonCard: "_skeletonCard_hp5sa_124"
};
var N8nChatAgentGrid_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatAgentGrid_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatAgentGrid_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useN8nAssistantIdentity as n, useN8nChatAgents as r, N8nChatAgentGrid_default as t };

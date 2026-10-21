import { Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Pd as computed, Rd as createElementBlock, Vf as unref, Wd as defineComponent, as as onBeforeRouteLeave, cp as normalizeClass, cs as useRouter, of as openBlock, pp as toDisplayString, rf as onMounted, ss as useRoute, uf as resolveComponent } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, Bv as VIEWS, DT as N8nIcon_default, FT as useI18n, vf as useDocumentTitle, yr as useAgentReturnContextStore } from "./app-Bl9bQlKQ.js";
//#region src/features/agents/components/BackToWorkflowBanner.vue?vue&type=script&setup=true&lang.ts
var BackToWorkflowBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BackToWorkflowBanner",
	emits: ["back"],
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "agent-back-to-workflow",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("back"))
			}, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "large"
			}), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agents.backToWorkflow")), 3)], 2);
		};
	}
});
var BackToWorkflowBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_1rzmt_2",
	label: "_label_1rzmt_32"
};
var BackToWorkflowBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BackToWorkflowBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BackToWorkflowBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentView.vue?vue&type=script&setup=true&lang.ts
var AgentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentView",
	setup(__props) {
		const documentTitle = useDocumentTitle();
		const locale = useI18n();
		const route = useRoute();
		const router = useRouter();
		const returnContext = useAgentReturnContextStore();
		const routeAgentId = computed(() => {
			const id = route.params.agentId;
			return Array.isArray(id) ? id[0] : id;
		});
		const showBackBanner = computed(() => !!returnContext.context && returnContext.context.agentId === routeAgentId.value);
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		onBeforeRouteLeave(() => {
			returnContext.clear();
		});
		async function onBackToWorkflow() {
			const ctx = returnContext.context;
			if (!ctx) return;
			returnContext.clear();
			if (ctx.returnPath) {
				returnContext.setPendingArtifactReturn({
					workflowId: ctx.workflowId,
					...ctx.nodeId ? { nodeId: ctx.nodeId } : {}
				});
				try {
					if (await router.push({ path: ctx.returnPath })) returnContext.consumePendingArtifactReturn();
				} catch (error) {
					returnContext.consumePendingArtifactReturn();
					throw error;
				}
				return;
			}
			await router.push({
				name: VIEWS.WORKFLOW,
				params: {
					workflowId: ctx.workflowId,
					...ctx.nodeId ? { nodeId: ctx.nodeId } : {}
				}
			});
		}
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.agentView) }, [showBackBanner.value ? (openBlock(), createBlock(BackToWorkflowBanner_default, {
				key: 0,
				onBack: onBackToWorkflow
			})) : createCommentVNode("", true), createVNode(_component_RouterView)], 2);
		};
	}
});
var AgentView_vue_vue_type_style_index_0_lang_module_default = { agentView: "_agentView_1rlmu_2" };
var AgentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentView_default as default };

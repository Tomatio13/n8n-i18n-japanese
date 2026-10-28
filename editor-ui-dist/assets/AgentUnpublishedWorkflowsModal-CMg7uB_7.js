import { Ad as createElementBlock, Cd as Fragment, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, ap as toDisplayString, ef as renderList, ep as normalizeClass, is as useRouter, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, DE as N8nIcon_default, EE as N8nButton_default, Ey as VIEWS, FE as useI18n, qh as useUIStore, vE as N8nText_default } from "./app-CqwplyU_.js";
import { t as AgentModal_default } from "./AgentModal-DXjXjfJT.js";
//#region src/features/agents/components/AgentUnpublishedWorkflowsModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var AgentUnpublishedWorkflowsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentUnpublishedWorkflowsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const router = useRouter();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		function workflowHref(workflow) {
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflow.workflowId ?? "" }
			});
			return href;
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.publish.modal.unpublishedWorkflows.title"),
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-unpublished-workflows-modal",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					"data-testid": "agent-unpublished-workflows-got-it",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.gotIt")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.unpublishedWorkflows.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("ul", {
					class: normalizeClass(_ctx.$style.list),
					"data-testid": "agent-unpublished-workflows-list"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.workflows, (workflow) => {
					return openBlock(), createElementBlock("li", { key: workflow.workflowId ?? workflow.name }, [workflow.workflowId ? (openBlock(), createElementBlock("a", {
						key: 0,
						class: normalizeClass(_ctx.$style.link),
						href: workflowHref(workflow),
						target: "_blank",
						rel: "noopener",
						"data-testid": "agent-unpublished-workflow-link"
					}, toDisplayString(workflow.name), 11, _hoisted_1)) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(workflow.name), 1)]),
						_: 2
					}, 1024))]);
				}), 128))], 2)], 2)]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
});
var AgentUnpublishedWorkflowsModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_ngao9_1",
	header: "_header_ngao9_7",
	icon: "_icon_ngao9_14",
	list: "_list_ngao9_18",
	link: "_link_ngao9_26"
};
var AgentUnpublishedWorkflowsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentUnpublishedWorkflowsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentUnpublishedWorkflowsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentUnpublishedWorkflowsModal_default as default };

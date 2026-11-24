import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, bM as N8nText_default, gg as useUIStore, kM as N8nButton_default, kS as VIEWS, zM as useI18n } from "./app-BJz3tlB7.js";
import { t as AgentModal_default } from "./AgentModal-DBJFpxXa.js";
//#region src/features/agents/components/AgentUnpublishedWorkflowsModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["href"];
var AgentUnpublishedWorkflowsModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	content: "_content_ngao9_1",
	header: "_header_ngao9_7",
	icon: "_icon_ngao9_14",
	list: "_list_ngao9_18",
	link: "_link_ngao9_26"
} }]]);
//#endregion
export { AgentUnpublishedWorkflowsModal_default as default };

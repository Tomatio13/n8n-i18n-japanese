import { $d as init_runtime_core_esm_bundler, Df as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Rd as computed, Vd as createCommentVNode, Yf as unref, ff as openBlock, gp as normalizeClass, ns as useRoute, rp as init_shared_esm_bundler, rs as useRouter, xp as toDisplayString } from "./vendor-BtpAr53w.js";
import { A_ as useUIStore, Ek as N8nButton_default, FO as N8nHeading_default, Fk as useI18n, Sm as injectWorkflowDocumentStore, Tx as VIEWS, _k as N8nText_default, fm as injectWorkflowExecutionStateStore, kk as _plugin_vue_export_helper_default, ul as useInjectWorkflowId } from "./app-BkXgJgpY.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-TWaXrDX-.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = {
	key: 0,
	"data-test-id": "workflow-execution-no-trigger-content"
};
var _hoisted_2 = {
	key: 1,
	"data-test-id": "workflow-execution-no-content"
};
var WorkflowExecutionsLandingPage_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsLandingPage",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const workflowId = useInjectWorkflowId();
		const uiStore = useUIStore();
		const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const executionCount = computed(() => workflowExecutionStateStore.value.currentWorkflowExecutions.length);
		const containsTrigger = computed(() => workflowDocumentStore.value.workflowTriggerNodes.length > 0);
		function onSetupFirstStep() {
			const resolvedWorkflowId = workflowId.value || route.params.workflowId;
			uiStore.addFirstStepOnLoad = true;
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: resolvedWorkflowId },
				query: { ...route.query }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["workflow-executions-container", _ctx.$style.container]) }, [executionCount.value === 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.messageContainer, _ctx.$style.noExecutionsMessage])
			}, [!containsTrigger.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.heading")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.message")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "outline",
					class: "mt-l",
					size: "large",
					onClick: onSetupFirstStep
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.buttonText")), 1)]),
					_: 1
				})
			])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "xlarge",
				color: "text-dark",
				class: "mb-2xs"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.heading")), 1)]),
				_: 1
			}), createVNode(WorkflowExecutionsInfoAccordion_default)]))], 2)) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_1nhzu_1",
	messageContainer: "_messageContainer_1nhzu_12",
	icon: "_icon_1nhzu_22"
} }]]);
//#endregion
export { WorkflowExecutionsLandingPage_default as default };

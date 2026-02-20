import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CtoBMdwA.js";
import { Hn as N8nButton_default, Vn as N8nText_default, zn as N8nHeading_default } from "./src-48Q0ykJg.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-DNWsAGoL.js";
import "./icon-CWP9Nnio.js";
import "./overlay-DXQNuKHG.js";
import "./empty-Dn9EY6Kk.js";
import "./useMessage-C83YEEls.js";
import { Fi as useUIStore, o as useWorkflowsStore } from "./useTelemetry-BYARpW-Z.js";
import "./useToast-CgKfmIUZ.js";
import "./sanitize-html-CuoIj2me.js";
import "./CalendarDate-DxkU3CHY.js";
import { Io as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-CvLls3vA.js";
import "./merge-B86hLe6a.js";
import "./_baseOrderBy-8nn1Vi_3.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-C-rqaNOB.js";
import "./useExternalHooks-BUhY3XSH.js";
import "./useStyles-B70NtkBU.js";
import "./npsSurvey.store-QP5vRPCY.js";
import "./cloudPlan.store-BP4Vnkol.js";
import "./templates.store-K9aHFQFc.js";
import "./focusPanel.store-DKsEsJxB.js";
import "./useWorkflowSaving-DElfB0X7.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-B56tSw1e.js";
var _hoisted_1 = {
	key: 0,
	"data-test-id": "workflow-execution-no-trigger-content"
};
var _hoisted_2 = {
	key: 1,
	"data-test-id": "workflow-execution-no-content"
};
var WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsLandingPage",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const executionCount = computed(() => workflowsStore.currentWorkflowExecutions.length);
		const containsTrigger = computed(() => workflowsStore.workflowTriggerNodes.length > 0);
		function onSetupFirstStep() {
			uiStore.addFirstStepOnLoad = true;
			const workflowRoute = getWorkflowRoute();
			router.push(workflowRoute);
		}
		function getWorkflowRoute() {
			const workflowId = workflowsStore.workflowId || route.params.name;
			if (workflowId === "__EMPTY__") return {
				name: VIEWS.NEW_WORKFLOW,
				params: {}
			};
			else return {
				name: VIEWS.WORKFLOW,
				params: { name: workflowId }
			};
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
					class: "mt-l",
					type: "tertiary",
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
});
var WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ofdn_123",
	messageContainer: "_messageContainer_1ofdn_133",
	icon: "_icon_1ofdn_144"
};
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowExecutionsLandingPage_default as default };

import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DiguV1k7.js";
import "./src-BELAPDSn.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-DPEdOi9X.js";
import { t as BaseLayout_default } from "./BaseLayout-BIVecLIa.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-MwmOH9ul.js";
import "./merge-DuN0a3S0.js";
import "./_baseOrderBy-BLvkq7eK.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-DISrHC6a.js";
import "./versions.store-iHrMZdf_.js";
import "./usePageRedirectionHelper-CZmp_i86.js";
import "./useClipboard-CGm-zmO7.js";
import "./executions.store-BjcMU4J3.js";
import "./assistant.store-U0a2JnWb.js";
import "./chatPanel.store-B1Q289Q9.js";
import "./RunData-4ENDYndC.js";
import "./NDVEmptyState-Dr6tDFcC.js";
import "./externalSecrets.ee.store-ClHveOvw.js";
import "./uniqBy-WEvfWp2t.js";
import "./usePinnedData-CkDplZad.js";
import "./nodeIcon-BbMRm6DN.js";
import "./canvas.utils-KUS4JPVu.js";
import "./canvas.eventBus-LyvhbGSo.js";
import "./useCanvasOperations-Cwhozbke.js";
import "./setupPanel.store-B12LVbAI.js";
import "./nodeTransforms-CWmxETBr.js";
import "./templateTransforms-YdlZDvMY.js";
import "./RunDataHtml-RZY2ii5C.js";
import "./NodeIcon-lCPUmtgK.js";
import "./useRunWorkflow-BqckBokG.js";
import "./pushConnection.store-fTFS3dsf.js";
import "./vue-json-pretty-DeuIAVUR.js";
import "./collaboration.store-DXw__kyN.js";
import "./dateFormatter-4A6YpNNs.js";
import "./useExecutionHelpers-BOcJYGjB.js";
import "./KeyboardShortcutTooltip-BT63fRvB.js";
import "./folders.store-tn9Uwakg.js";
import "./useKeybindings-F9N2ZMKn.js";
import "./chatHubPanel.store-CZHsrPKp.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-BivUFghH.js";
import "./useLogsTreeExpand-DZzdXQx6.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-MDkBunfc.js";
import "./AnimatedSpinner-Z9Amm9vK.js";
import "./useResizablePanel-C9mOikGe.js";
import "./aiTemplatesStarterCollection.store-qX8gU9xp.js";
import "./readyToRunWorkflows.store-CcqJALrG.js";
import "./useExecutionDebugging-BlAELuQ-.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const workflowState = useWorkflowState();
		provide(WorkflowStateKey, workflowState);
		const { initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		useProvideWorkflowId();
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
		});
		onBeforeUnmount(() => {
			cleanupPostMessages();
			cleanupInitialization();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };

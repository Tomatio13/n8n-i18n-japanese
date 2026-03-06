import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-CUByFFvW.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-BRK6cGVZ.js";
import "./merge-Dc2_Qf1D.js";
import "./_baseOrderBy-Bjp9p9x6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DOjvR_hm.js";
import "./versions.store-Ci-NqzyI.js";
import "./usePageRedirectionHelper-Csc19I3r.js";
import "./useClipboard-BIxA4nej.js";
import "./executions.store-BBOGt0Qj.js";
import "./assistant.store-BNhRls5p.js";
import "./chatPanel.store-BeMYjF2p.js";
import "./RunData-DxTshM0y.js";
import "./NDVEmptyState-CV5Z6xrq.js";
import "./externalSecrets.ee.store-BIe3IF23.js";
import "./uniqBy-DFtw1KRC.js";
import "./usePinnedData-CsmzgB7l.js";
import "./nodeIcon-piEXbpBd.js";
import "./canvas.utils-Dl7tYANC.js";
import "./nodeCreator.store-Dn8v6GSm.js";
import "./useCanvasOperations-BaVwkc4x.js";
import "./folders.store-BjHVtN0W.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-aq-etMse.js";
import "./useRunWorkflow-urfIkOcJ.js";
import "./pushConnection.store-Cxf6RoD0.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CwcGt48M.js";
import "./dateFormatter-BzEmQqaR.js";
import "./useExecutionHelpers-DlnAIgJq.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./useKeybindings-DHlk5RTf.js";
import "./useLogsTreeExpand-D-F3N62E.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-CQjc2M3F.js";
import "./AnimatedSpinner-Cj3YjKfn.js";
import "./useResizablePanel-DcCpJuWc.js";
import "./aiTemplatesStarterCollection.store-Dsk2T25n.js";
import "./readyToRunWorkflows.store-BTUmJkqr.js";
import "./useExecutionDebugging-3g-FrOcK.js";
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
		const { workflowId, initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
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

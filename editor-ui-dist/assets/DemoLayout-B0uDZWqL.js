import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-LQ34688M.js";
import "./src-CIy3RA1U.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-n3Mg-2Tf.js";
import { t as BaseLayout_default } from "./BaseLayout-BIVecLIa.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-CSSZK8sm.js";
import "./merge-BDPAvSx5.js";
import "./_baseOrderBy-DezvQaYy.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-D9WyiVgI.js";
import "./versions.store-BkwImiyR.js";
import "./usePageRedirectionHelper-Dg_RxYl8.js";
import "./useClipboard-BzWoj3d8.js";
import "./executions.store-Djl2tj4F.js";
import "./assistant.store-D7S0uxj2.js";
import "./chatPanel.store-COinEhFZ.js";
import "./RunData-CsIpGn79.js";
import "./NDVEmptyState-CeUWIeqT.js";
import "./externalSecrets.ee.store-DKhNi2YF.js";
import "./uniqBy-p-_6700d.js";
import "./usePinnedData-CSTrcrtx.js";
import "./nodeIcon-C4zsDtH3.js";
import "./canvas.utils-C2HyL0A8.js";
import "./canvas.eventBus-Q0g3ff2Y.js";
import "./useCanvasOperations-D253BUcq.js";
import "./setupPanel.store-B1Ix3atm.js";
import "./nodeTransforms-ClHJgqva.js";
import "./templateTransforms-BiZ3JcTy.js";
import "./RunDataHtml-RZY2ii5C.js";
import "./NodeIcon-CYWtd79V.js";
import "./useRunWorkflow-CSE7fKEc.js";
import "./pushConnection.store-y-u00Iqi.js";
import "./vue-json-pretty-DeuIAVUR.js";
import "./collaboration.store-zFkVho86.js";
import "./dateFormatter-BCLLi1Ob.js";
import "./useExecutionHelpers-vkpGML3L.js";
import "./KeyboardShortcutTooltip-Bo9DRaLf.js";
import "./folders.store-DLJl_d03.js";
import "./useKeybindings-CX_BEvnV.js";
import "./chatHubPanel.store-7686pVzJ.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-l5dwo8d5.js";
import "./useLogsTreeExpand-BCmMFoNE.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Dmh-OL69.js";
import "./AnimatedSpinner-Z9Amm9vK.js";
import "./useResizablePanel-ClsYq_Wq.js";
import "./aiTemplatesStarterCollection.store-UC6yJhLc.js";
import "./readyToRunWorkflows.store-DLwut22u.js";
import "./useExecutionDebugging-tmJguvQh.js";
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

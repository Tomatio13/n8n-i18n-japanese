import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-CVjD7lfb.js";
import "./src-DI71_LGY.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-BMJ9fc-u.js";
import { t as BaseLayout_default } from "./BaseLayout-BTa12_-N.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-BVqqmrz5.js";
import "./merge-DEVXSdfC.js";
import "./_baseOrderBy-CrD5hJjV.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-BCW--JMK.js";
import "./versions.store-bVafcXwz.js";
import "./usePageRedirectionHelper-DZaBxv6F.js";
import "./useClipboard-BnsvPsrl.js";
import "./executions.store-HTiT_ST0.js";
import "./assistant.store-BVLAgpQe.js";
import "./chatPanel.store-B-I15BX3.js";
import "./RunData-CRr07ZWG.js";
import "./NDVEmptyState-B6nBXpLy.js";
import "./externalSecrets.ee.store-C2C0n6oQ.js";
import "./uniqBy-BeSvTiel.js";
import "./usePinnedData-DeK1lmat.js";
import "./nodeIcon-ByXH4W6J.js";
import "./canvas.utils-HRVIUNJr.js";
import "./canvas.eventBus-C7jRWIn-.js";
import "./useCanvasOperations-hI6y40Pq.js";
import "./setupPanel.store-CbWq_6AQ.js";
import "./nodeTransforms-BHqkOPk4.js";
import "./templateTransforms-BwT8lyVB.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-B7_ESjJa.js";
import "./useRunWorkflow-D847FUsJ.js";
import "./pushConnection.store-DbUjm6Hn.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BRde1xoF.js";
import "./dateFormatter-BUaskkNs.js";
import "./useExecutionHelpers-DzzfRmIq.js";
import "./KeyboardShortcutTooltip-Dd_kVmej.js";
import "./folders.store-DkAmDC_6.js";
import "./useKeybindings-Dxb-cuC_.js";
import "./chatHubPanel.store-zViGHYZH.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-CV3JxVSd.js";
import "./useLogsTreeExpand-B3bHBmKs.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-B3gdHR4-.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-C97UaER9.js";
import "./aiTemplatesStarterCollection.store-BeskWdVM.js";
import "./readyToRunWorkflows.store-CTI99WAV.js";
import "./useExecutionDebugging-D2bky8Cq.js";
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

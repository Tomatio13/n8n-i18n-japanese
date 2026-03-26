import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Ch3NFYOu.js";
import "./src-Dj1o0Sx_.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Bo1lfJ-T.js";
import { t as BaseLayout_default } from "./BaseLayout-BTa12_-N.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-BDR7DE8A.js";
import "./merge-ClaqV-bg.js";
import "./_baseOrderBy-DOkG05Fo.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-CAe5tQHW.js";
import "./versions.store-7T_49RX_.js";
import "./usePageRedirectionHelper-w6lziXy3.js";
import "./useClipboard-CVK1N1X2.js";
import "./executions.store-B5tyQf-V.js";
import "./assistant.store-CeoO8klV.js";
import "./chatPanel.store-Bnc6cLtY.js";
import "./RunData-CBv1PK3S.js";
import "./NDVEmptyState-DJByL6W7.js";
import "./externalSecrets.ee.store-Ca7UHxqE.js";
import "./uniqBy-Ko11A-v6.js";
import "./usePinnedData-CiRYLxBq.js";
import "./nodeIcon-CApuvsKH.js";
import "./canvas.utils-kRFVuaXO.js";
import "./canvas.eventBus-2WT9Tzqe.js";
import "./useCanvasOperations-diHidSKf.js";
import "./setupPanel.store-BPKyINOA.js";
import "./nodeTransforms-1-N6dxA6.js";
import "./templateTransforms-D5SvqQmN.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-Ce4yDrfb.js";
import "./useRunWorkflow-Ih7N5h9V.js";
import "./pushConnection.store-i9_Sn9MF.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-Cp-FAS2N.js";
import "./dateFormatter-C885tidC.js";
import "./useExecutionHelpers-CQA3Lmzk.js";
import "./KeyboardShortcutTooltip-Y07OHolq.js";
import "./folders.store-BYctvGlf.js";
import "./useKeybindings-BtVPckYb.js";
import "./chatHubPanel.store-CXq7AjcC.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-Cpck3plI.js";
import "./useLogsTreeExpand-C485eR0Z.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-pg4afWZT.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-B5JT_nEZ.js";
import "./aiTemplatesStarterCollection.store-DLkbJfAt.js";
import "./readyToRunWorkflows.store-Y915InJB.js";
import "./useExecutionDebugging-Cks2O6en.js";
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

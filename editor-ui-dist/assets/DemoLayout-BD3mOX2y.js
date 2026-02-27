import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CSyjmPrE.js";
import "./src-CFZC-GtF.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-Aq4wLzuB.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-Dh9fnPxX.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-BktMx8Ff.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BFHEf0Zz.js";
import "./versions.store--OkzS96N.js";
import "./usePageRedirectionHelper-xE07TxvV.js";
import "./useClipboard-fbRjDT3F.js";
import "./executions.store-D5QFA2R5.js";
import "./assistant.store-CHHuFM-l.js";
import "./chatPanel.store-B-yHmIuu.js";
import "./RunData-BhiKzGWw.js";
import "./NDVEmptyState-CCwunJsX.js";
import "./externalSecrets.ee.store-Bxi7WDiP.js";
import "./uniqBy-oIDPqxB0.js";
import "./usePinnedData-CTKyW5_E.js";
import "./nodeIcon-Dnm8u4n8.js";
import "./canvas.utils-U1Tywk11.js";
import "./nodeCreator.store-CByM8xU0.js";
import "./useCanvasOperations-Lt3CfUMi.js";
import "./folders.store-D-fumZqU.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-CxMw_BXD.js";
import "./useRunWorkflow-C4DIlHJc.js";
import "./pushConnection.store-CF0FpA7i.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CKA9BZPW.js";
import "./dateFormatter-Cjb_HP6Y.js";
import "./useExecutionHelpers-ByeC-abG.js";
import "./KeyboardShortcutTooltip-BaWd6i79.js";
import "./useKeybindings-CEZTlTxK.js";
import "./useLogsTreeExpand-CR29mo71.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-dljVwrLF.js";
import "./AnimatedSpinner-Cj3YjKfn.js";
import "./useResizablePanel-BTeEfGin.js";
import "./aiTemplatesStarterCollection.store-DpsEgtI1.js";
import "./readyToRunWorkflows.store-xTP6u5TH.js";
import "./useExecutionDebugging-BMrKEkYl.js";
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
		const { workflowId, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
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

import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DAfQkYUW.js";
import "./src-CVRo-0o8.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DbrQquUN.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-HkX3ruPP.js";
import "./merge-D06_YRZ7.js";
import "./_baseOrderBy-CRlYhHsD.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cock4s9P.js";
import "./versions.store-BwXbVFx_.js";
import "./usePageRedirectionHelper-DMI9uvCf.js";
import "./useClipboard-ClwZn4tC.js";
import "./executions.store-C274gC-V.js";
import "./assistant.store-Bk9cb3Vu.js";
import "./chatPanel.store-BKpTYRPD.js";
import "./RunData-CBWZdrrs.js";
import "./NDVEmptyState-CIYaMOvI.js";
import "./externalSecrets.ee.store-DZ6Ck8-U.js";
import "./uniqBy-CCJrGKA3.js";
import "./usePinnedData-Bhf0OXJU.js";
import "./nodeIcon-BOKecWPr.js";
import "./canvas.utils-BfXwNBic.js";
import "./canvas.eventBus-DTHvFt3f.js";
import "./useCanvasOperations-CE_D5JOc.js";
import "./folders.store-BpQQrRFR.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-Gry9n8Ml.js";
import "./useRunWorkflow-C2BrulBx.js";
import "./pushConnection.store-DkwO8pAy.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-nd3Pm7eP.js";
import "./dateFormatter-B9NdTL4J.js";
import "./useExecutionHelpers-CdhPqI36.js";
import "./KeyboardShortcutTooltip-BpidOSDc.js";
import "./useKeybindings-BuA1w5E4.js";
import "./useLogsTreeExpand-BrjZNYqN.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-1QYTe1wB.js";
import "./AnimatedSpinner-CdqG9wlt.js";
import "./useResizablePanel-CbWUWK6F.js";
import "./aiTemplatesStarterCollection.store-CDlyX9yw.js";
import "./readyToRunWorkflows.store-RGANAIla.js";
import "./useExecutionDebugging-dmj0GPCi.js";
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

import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-C5QWCjzq.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-DzqTl39N.js";
import "./merge-Dc2_Qf1D.js";
import "./_baseOrderBy-Cl_o1Fh3.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-6RVCe0AU.js";
import "./versions.store-Ien8N42r.js";
import "./usePageRedirectionHelper-7Itx6rTo.js";
import "./useClipboard-BK1Pd03B.js";
import "./executions.store-BG-kTHx5.js";
import "./assistant.store-BTs-hcEP.js";
import "./chatPanel.store-BcNZJg29.js";
import "./RunData-bu6Mv_by.js";
import "./NDVEmptyState-CV5Z6xrq.js";
import "./externalSecrets.ee.store-C3oPZ_z4.js";
import "./uniqBy-D9e1RfA7.js";
import "./usePinnedData-Bge4aqsz.js";
import "./nodeIcon-CncaEMVz.js";
import "./canvas.utils-Ce-IUDWQ.js";
import "./nodeCreator.store-Ds4dZmzd.js";
import "./useCanvasOperations-DdUORCeT.js";
import "./folders.store-qtaGkoLd.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-CXZQclSt.js";
import "./useRunWorkflow-Bn4WKYL8.js";
import "./pushConnection.store-Cg2_Ih1t.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DYXo3q4H.js";
import "./dateFormatter-BzEmQqaR.js";
import "./useExecutionHelpers-BSpWuiEA.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./useKeybindings-BDyCsLdJ.js";
import "./useLogsTreeExpand-yzCC7D1a.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DXcvaSZD.js";
import "./AnimatedSpinner-Cj3YjKfn.js";
import "./useResizablePanel-DcCpJuWc.js";
import "./aiTemplatesStarterCollection.store-B4AL3dNB.js";
import "./readyToRunWorkflows.store-DsJ8eAvJ.js";
import "./useExecutionDebugging-fvgIy_oK.js";
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

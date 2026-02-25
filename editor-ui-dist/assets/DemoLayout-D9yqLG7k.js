import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CSyjmPrE.js";
import "./src-C2W0vRuD.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-BbMERaHH.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-DNTAyC0r.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-D3I5tAuy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCh9I0_n.js";
import "./versions.store-BE8_L2fa.js";
import "./usePageRedirectionHelper-N67eQ-sy.js";
import "./useClipboard-Cbpyeuax.js";
import "./executions.store-CvIJWJwP.js";
import "./assistant.store-d4EG0XuQ.js";
import "./chatPanel.store-BR9wUcHR.js";
import "./RunData-CTymG4Sp.js";
import "./NDVEmptyState-2SuFyx0D.js";
import "./useEnvFeatureFlag-Cu975E_j.js";
import "./externalSecrets.ee.store-Dr0RdPp2.js";
import "./uniqBy-CSVtGXMS.js";
import "./usePinnedData-BvEFdZ4_.js";
import "./nodeIcon-Cqat_ELy.js";
import "./canvas.utils-AtXIYApq.js";
import "./nodeCreator.store-Cb4Ay_03.js";
import "./useCanvasOperations-C9TNNcsm.js";
import "./folders.store-DS8lAp5P.js";
import "./RunDataHtml-CI3ozo_R.js";
import "./NodeIcon-DyxIf7nP.js";
import "./useRunWorkflow-qZOMLYMI.js";
import "./pushConnection.store-CEH3cNbj.js";
import "./vue-json-pretty-D4sAEHLG.js";
import "./collaboration.store-BadCm_XX.js";
import "./dateFormatter-DI7xmTxm.js";
import "./useExecutionHelpers-CqswqKYM.js";
import "./KeyboardShortcutTooltip-DgZQQH9B.js";
import "./useKeybindings-C2poeKow.js";
import "./useLogsTreeExpand-I033OXSP.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DbfrEfQI.js";
import "./AnimatedSpinner-CdqG9wlt.js";
import "./useResizablePanel-CAKglgJP.js";
import "./aiTemplatesStarterCollection.store-geBmav5x.js";
import "./readyToRunWorkflows.store-aHEbmEYx.js";
import "./useExecutionDebugging-BhZ1kYdU.js";
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

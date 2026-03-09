import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DgUIxOeF.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-BAAsiVuv.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-C99Jw64_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-D1niGPQt.js";
import "./versions.store-CFE28L9I.js";
import "./usePageRedirectionHelper-DK6tYii0.js";
import "./useClipboard-Bk7FVHYY.js";
import "./executions.store-BfPMkr04.js";
import "./assistant.store-DuZNsptK.js";
import "./chatPanel.store-DGW6uPAg.js";
import "./RunData-Du3I_ozH.js";
import "./NDVEmptyState-CSutalFL.js";
import "./externalSecrets.ee.store-nqUbnXIw.js";
import "./uniqBy-Dwq2kKjS.js";
import "./usePinnedData-CstxA2i0.js";
import "./nodeIcon-mUbR0l1d.js";
import "./canvas.utils-CVZRoVR0.js";
import "./canvas.eventBus-HKUh_QUg.js";
import "./useCanvasOperations-CoIb0L0s.js";
import "./folders.store-DWdLyRek.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-D6PCe5az.js";
import "./useRunWorkflow-DJbVmciN.js";
import "./pushConnection.store-CMt2BOCR.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DGVJH3qg.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-Bb7JRrDd.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./useKeybindings-C_Ai64eE.js";
import "./useLogsTreeExpand-BUG39-M5.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-HWtOB3KD.js";
import "./AnimatedSpinner-CdqG9wlt.js";
import "./useResizablePanel-BGYPNjOq.js";
import "./aiTemplatesStarterCollection.store-a9CDrSfa.js";
import "./readyToRunWorkflows.store-BbcktG07.js";
import "./useExecutionDebugging-D8NxI6oE.js";
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

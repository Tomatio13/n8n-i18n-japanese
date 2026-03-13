import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-6ntFqKUX.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DXe0k24C.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-DFqwcbaV.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-la78pIJR.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-V2WUQKxb.js";
import "./versions.store-DZ4NZOu-.js";
import "./usePageRedirectionHelper-CL9GbdYo.js";
import "./useClipboard-CPOP3Smf.js";
import "./executions.store-B4X62cQH.js";
import "./assistant.store-CnKXnp-m.js";
import "./chatPanel.store-DcEtx9gk.js";
import "./RunData-Cp8Fiqix.js";
import "./NDVEmptyState-CxvjZmfT.js";
import "./externalSecrets.ee.store-Xo0vHFs2.js";
import "./uniqBy-xIoJOKnG.js";
import "./usePinnedData-C8B6rpzL.js";
import "./nodeIcon-tudKUNxb.js";
import "./canvas.utils-76suIWXt.js";
import "./canvas.eventBus-Cn4sEiWY.js";
import "./useCanvasOperations-CXH5RkXF.js";
import "./folders.store-EXw-AG0G.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-BfCXDNRI.js";
import "./useRunWorkflow-BjtfX5Y3.js";
import "./pushConnection.store-DGlC9n1z.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DS2jdo5S.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-DhdHyFs3.js";
import "./KeyboardShortcutTooltip-oQq0l-oc.js";
import "./useKeybindings-B8yvWeLb.js";
import "./useLogsTreeExpand-BuaE_kZW.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-KZ9nCqAO.js";
import "./AnimatedSpinner-CdqG9wlt.js";
import "./useResizablePanel-BGYPNjOq.js";
import "./aiTemplatesStarterCollection.store-CfdigzOr.js";
import "./readyToRunWorkflows.store-DGAb4czL.js";
import "./useExecutionDebugging-COmCQit9.js";
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

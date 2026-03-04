import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DhQma29k.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-CoM3n6o2.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-CggIhTiT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BY19fKVi.js";
import "./versions.store-WZ7vc4XT.js";
import "./usePageRedirectionHelper-BkhmjY_L.js";
import "./useClipboard-CrnGYIjr.js";
import "./executions.store-BCpxqH0c.js";
import "./assistant.store-CtvO3HBF.js";
import "./chatPanel.store-AoYX1jbC.js";
import "./RunData-BxkpIWoe.js";
import "./NDVEmptyState-CSutalFL.js";
import "./externalSecrets.ee.store-jECFPXjq.js";
import "./uniqBy-CJNrte_y.js";
import "./usePinnedData-DFXzxF_S.js";
import "./nodeIcon-DFjgBYDz.js";
import "./canvas.utils-DZe7ySh-.js";
import "./canvas.eventBus-CMrk0zzM.js";
import "./useCanvasOperations-QSYtNGim.js";
import "./folders.store-DPFn7eIX.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./NodeIcon-BMv-hvx4.js";
import "./useRunWorkflow-By5JvrXR.js";
import "./pushConnection.store-Bc4LrtKI.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DeyLbOQe.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-D832lgtx.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./useKeybindings-BCPZKgqt.js";
import "./useLogsTreeExpand-D9i8eByC.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BplxvrM4.js";
import "./AnimatedSpinner-CdqG9wlt.js";
import "./useResizablePanel-BGYPNjOq.js";
import "./aiTemplatesStarterCollection.store-u_G_LEce.js";
import "./readyToRunWorkflows.store-Cav_aZ6s.js";
import "./useExecutionDebugging-BOgMxPhJ.js";
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

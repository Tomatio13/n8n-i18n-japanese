import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ut as useRouter } from "./src-CBLW-85O.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-DtBFw7S1.js";
import { t as BaseLayout_default } from "./BaseLayout-BbNvmkye.js";
import { Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-BW536hrR.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-Cht7wNMg.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-pXtbbXuw.js";
import { t as usePushConnection } from "./usePushConnection-CzvS7vqH.js";
//#endregion
//#region src/features/execution/logs/components/DemoFooter.vue
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
//#endregion
//#region src/app/layouts/DemoLayout.vue
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
		const pushConnection = usePushConnection({
			router: useRouter(),
			workflowState
		});
		workflowState.setActiveExecutionId(null);
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
			pushConnection.initialize();
		});
		onBeforeUnmount(() => {
			pushConnection.terminate();
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
//#endregion
export { DemoLayout_default as default };

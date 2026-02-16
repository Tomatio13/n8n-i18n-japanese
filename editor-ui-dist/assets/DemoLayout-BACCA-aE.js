import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DhtZe8m7.js";
import { Oi as useRoute } from "./src-8opT_E6w.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-B9V9zygR.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Tc as WorkflowIdKey } from "./constants-DGgMTWMV.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-BUvu0sm6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVZ4qHCe.js";
import "./useClipboard-C47kOUlb.js";
import "./executions.store-DoT8xh9y.js";
import "./assistant.store-BGLjynfZ.js";
import "./chatPanel.store-BJU2zwG8.js";
import "./RunData-lq-X3CQT.js";
import "./NDVEmptyState-D0qajxYr.js";
import "./useEnvFeatureFlag-BZQ4GcjJ.js";
import "./externalSecrets.ee.store-CbzK8l4P.js";
import "./uniqBy-MaJ6gJ1B.js";
import "./usePinnedData-CfWiTzdo.js";
import "./nodeIcon-DV5lFQym.js";
import "./canvas.utils-Dgz6PP46.js";
import "./nodeCreator.store--Ox5RxRJ.js";
import "./useCanvasOperations-CbCN7Apa.js";
import "./folders.store-CcqQIazA.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-BVgWlP81.js";
import "./useRunWorkflow-B1GUiIy8.js";
import "./pushConnection.store-dDPC5s5A.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-BeTy0cl2.js";
import "./dateFormatter-j0tG5TGq.js";
import "./useExecutionHelpers-Baw4a-DB.js";
import "./KeyboardShortcutTooltip-gMxlSUm7.js";
import "./useKeybindings-SQdR76rw.js";
import "./useLogsTreeExpand-EGvRsuyo.js";
import { t as LogsPanel_default } from "./LogsPanel-BMpXMciK.js";
import "./AnimatedSpinner-Cb_h9KnX.js";
import "./useResizablePanel-KMtw9vwo.js";
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
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
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

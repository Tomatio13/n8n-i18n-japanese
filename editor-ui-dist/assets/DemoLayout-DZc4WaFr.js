import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-zX7-ncGV.js";
import { bi as useRoute } from "./src-BxIxEuXR.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-HpAttO-b.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Cc as WorkflowIdKey } from "./constants-B2I274sD.js";
import "./merge-CR1omtPY.js";
import "./_baseOrderBy-CHtV50OT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BtH4umh1.js";
import "./useClipboard-D92Y1Oda.js";
import "./executions.store-CSDxVPGC.js";
import "./assistant.store-DSP0BcEC.js";
import "./chatPanel.store-BDdLhY9a.js";
import "./RunData-hOm0FtIP.js";
import "./NDVEmptyState-C6ub9xXq.js";
import "./useEnvFeatureFlag-C_gWW7T2.js";
import "./externalSecrets.ee.store-CCQaCpZE.js";
import "./uniqBy-DtH79YRc.js";
import "./usePinnedData-DHU3YrPX.js";
import "./nodeIcon-CZlmr5IU.js";
import "./canvas.utils-gUirE7wD.js";
import "./nodeCreator.store-R76tUdmx.js";
import "./useCanvasOperations-DQumjSui.js";
import "./folders.store-CoCfZdb2.js";
import "./RunDataHtml-Cmcej_h-.js";
import "./NodeIcon-CjsFcL6q.js";
import "./useRunWorkflow-BYh2DaYJ.js";
import "./pushConnection.store-DLIKpgAb.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-CrjD5Vsh.js";
import "./dateFormatter-BnslyH47.js";
import "./useExecutionHelpers-DyccOZwA.js";
import "./KeyboardShortcutTooltip-BkAPKPqg.js";
import "./useKeybindings-BhkRElfY.js";
import "./useLogsTreeExpand-CcW7GC1K.js";
import { t as LogsPanel_default } from "./LogsPanel-ZvUWiCq0.js";
import "./AnimatedSpinner-DxUVUX0q.js";
import "./useResizablePanel-BpvS4-gr.js";
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

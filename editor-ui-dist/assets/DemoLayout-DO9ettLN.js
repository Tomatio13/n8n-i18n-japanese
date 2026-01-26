import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-CmrnzXZf.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-CrI_QF4Z.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DW-GgiaW.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-B9ufCQ6j.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BO8y4IzP.js";
import "./useClipboard-CX3NST2L.js";
import "./executions.store-DaksiLR8.js";
import "./assistant.store-B-8HX3S4.js";
import "./chatPanel.store-BFWoBLPn.js";
import "./RunData-CYmRMZnC.js";
import "./NDVEmptyState-OxwoWmt_.js";
import "./externalSecrets.ee.store-CzTjlpr1.js";
import "./uniqBy-Dq0A5AjK.js";
import "./usePinnedData-D5OUeR68.js";
import "./nodeIcon-DFa5tLl-.js";
import "./canvas.utils-CKeyZeSM.js";
import "./nodeCreator.store-3x61b_QN.js";
import "./useCanvasOperations-CEvj8vLj.js";
import "./folders.store-DnayHep8.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-DrIN63m-.js";
import "./useRunWorkflow-C7GsqUdl.js";
import "./pushConnection.store-CG71QHgH.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-Cxt5QurH.js";
import "./dateFormatter-BlYfq1NR.js";
import "./useExecutionHelpers-HV9nsmKM.js";
import "./KeyboardShortcutTooltip-DRvrT0mf.js";
import "./useKeybindings-Cjd27HxK.js";
import "./useLogsTreeExpand-CnsUo_x0.js";
import { t as LogsPanel_default } from "./LogsPanel-BHU1iDm6.js";
import "./AnimatedSpinner-B14F4UpF.js";
import "./ChatFile-BG-ZKNtd.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-Bos3oYaY.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-BiTSVjy6.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CvBCoQnq.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-CA-ldP4w.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B_GWpbEm.js";
import "./useClipboard-DmeNOhyf.js";
import "./executions.store-DUsjPvqM.js";
import "./assistant.store-BfMvCoqc.js";
import "./chatPanel.store-CLyUMba4.js";
import "./RunData-Bz7WfT08.js";
import "./NDVEmptyState-BhL60ozT.js";
import "./externalSecrets.ee.store-CdsC4jhm.js";
import "./uniqBy-BzmqL7ff.js";
import "./usePinnedData-vNNXXVKV.js";
import "./nodeIcon-DLd041iD.js";
import "./canvas.utils-DRPwc9gc.js";
import "./nodeCreator.store-C_oNCFgC.js";
import "./useCanvasOperations-CsIew-bJ.js";
import "./folders.store-B-GIJZGK.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-BjIflDKD.js";
import "./useRunWorkflow-DLIKw_Ll.js";
import "./pushConnection.store-BFfSQ_B2.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-CfCTAn5d.js";
import "./dateFormatter-BlYfq1NR.js";
import "./useExecutionHelpers-CFI0ICSM.js";
import "./KeyboardShortcutTooltip-BEFQOjMt.js";
import "./useKeybindings-BgKtN68w.js";
import "./useLogsTreeExpand-D8GlJwE0.js";
import { t as LogsPanel_default } from "./LogsPanel-B1jKue1P.js";
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

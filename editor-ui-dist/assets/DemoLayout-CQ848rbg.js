import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import { Ci as useRoute } from "./src-12jI_oWL.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-CZakb1us.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Tc as WorkflowIdKey } from "./constants-BRkGKd9e.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-CtcXV8Wq.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BUjIzaVZ.js";
import "./useClipboard-BEDCiksJ.js";
import "./executions.store-DVqC2FHh.js";
import "./assistant.store-CAtXR9cz.js";
import "./chatPanel.store-wJQCqtps.js";
import "./RunData-DoEFDjgs.js";
import "./NDVEmptyState-CY1cukHh.js";
import "./useEnvFeatureFlag-2I0THNjj.js";
import "./externalSecrets.ee.store-BsKfvCb4.js";
import "./uniqBy-CBKC9cCA.js";
import "./usePinnedData-DG_Ywk-r.js";
import "./nodeIcon-DktDbJuT.js";
import "./canvas.utils-BkkBE4OM.js";
import "./nodeCreator.store-DvpMIXUP.js";
import "./useCanvasOperations-CxSyi-uU.js";
import "./folders.store-CCVfzbS1.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-DLoy0rS7.js";
import "./useRunWorkflow-CF6jjT49.js";
import "./pushConnection.store-IatD1GaQ.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-jS0cTddZ.js";
import "./dateFormatter-D2g3PkKx.js";
import "./useExecutionHelpers-ByXTaa33.js";
import "./KeyboardShortcutTooltip-C5bMa2iw.js";
import "./useKeybindings-C0glB04d.js";
import "./useLogsTreeExpand-B0pdiNwh.js";
import { t as LogsPanel_default } from "./LogsPanel-DosQa-Tk.js";
import "./AnimatedSpinner-Cb_h9KnX.js";
import "./useResizablePanel-cVWmFBBY.js";
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

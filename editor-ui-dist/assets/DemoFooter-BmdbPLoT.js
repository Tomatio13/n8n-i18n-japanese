import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-B_K3eSCc.js";
import "./src-BvNUCnVa.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DoMGc5TW.js";
import "./icon-CK3ijqYT.js";
import "./overlay-BQqSXA-Z.js";
import "./empty-Dn9EY6Kk.js";
import "./useMessage-LbzThh0c.js";
import { o as useWorkflowsStore } from "./useTelemetry-g0679zS3.js";
import "./useToast-CsUXQdC8.js";
import "./sanitize-html-CuGdF3xj.js";
import "./CalendarDate-DxkU3CHY.js";
import "./constants-CaCsIb1D.js";
import "./merge-CN7D2NBB.js";
import "./assistant.store-CNjVjH1f.js";
import "./_baseOrderBy-DPXOv1ix.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-DvYwTHuw.js";
import "./useExternalHooks-D4-jcuhh.js";
import "./useStyles-B70NtkBU.js";
import "./chatPanel.store-3ZeGhbHh.js";
import "./npsSurvey.store-Fd_0gLsd.js";
import "./cloudPlan.store-DcOnnb25.js";
import "./templates.store-CaCww2BW.js";
import "./focusPanel.store-DVuK4mCJ.js";
import "./useWorkflowSaving-BVvrw2xF.js";
import "./retry-D_w5K02Q.js";
import "./executions.store-BAOiu9sS.js";
import "./useRunWorkflow-7xBf2EEn.js";
import "./usePinnedData-CzwihYv9.js";
import "./nodeCreator.store-B1mwE0uP.js";
import "./nodeIcon-BD7upMjh.js";
import "./useClipboard-C9B4bxS5.js";
import "./useCanvasOperations-CqC7V5bT.js";
import { t as LogsPanel_default } from "./LogsPanel-BWITy9yK.js";
import "./folders.store-BfYQzm48.js";
import "./NodeIcon-CZB56ViA.js";
import "./KeyboardShortcutTooltip-BftNPSPe.js";
import "./isEmpty-Nna_m6XK.js";
import "./NDVEmptyState-DGwe2Bv5.js";
import "./externalSecrets.ee.store-BbLZ3kQJ.js";
import "./uniqBy-qaeIuTaU.js";
import "./RunDataHtml-zsgJ7Xa-.js";
import "./VueMarkdown-LuCPIdoS.js";
import "./schemaPreview.store-Ba8qM50y.js";
import "./FileSaver.min-BeIVWwkF.js";
import "./vue-json-pretty-D3luVDto.js";
import "./dateFormatter-B9Stw7RG.js";
import "./useExecutionHelpers-B_MZccYP.js";
import "./fileUtils-8poQRhcx.js";
import "./useKeybindings-C1CaAJlU.js";
import "./core-DntzLlqD.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-BHMnauNE.js";
import "./core-CHHLv5cF.js";
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
export { DemoFooter_default as default };

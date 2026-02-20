import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-CtoBMdwA.js";
import "./src-48Q0ykJg.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DNWsAGoL.js";
import "./icon-CWP9Nnio.js";
import "./overlay-DXQNuKHG.js";
import "./empty-Dn9EY6Kk.js";
import "./useMessage-C83YEEls.js";
import { o as useWorkflowsStore } from "./useTelemetry-BYARpW-Z.js";
import "./useToast-CgKfmIUZ.js";
import "./sanitize-html-CuoIj2me.js";
import "./CalendarDate-DxkU3CHY.js";
import "./constants-CvLls3vA.js";
import "./merge-B86hLe6a.js";
import "./assistant.store-Cr6aey-y.js";
import "./_baseOrderBy-8nn1Vi_3.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-C-rqaNOB.js";
import "./useExternalHooks-BUhY3XSH.js";
import "./useStyles-B70NtkBU.js";
import "./chatPanel.store-CtO0go3l.js";
import "./npsSurvey.store-QP5vRPCY.js";
import "./cloudPlan.store-BP4Vnkol.js";
import "./templates.store-K9aHFQFc.js";
import "./focusPanel.store-DKsEsJxB.js";
import "./useWorkflowSaving-DElfB0X7.js";
import "./retry-D_w5K02Q.js";
import "./executions.store-4vkq4cq5.js";
import "./useRunWorkflow-MWzH4KVf.js";
import "./usePinnedData-B_7rNuMW.js";
import "./nodeCreator.store-NlKJfWJ9.js";
import "./nodeIcon-AVCiN6vI.js";
import "./useClipboard-CvYt0nml.js";
import "./useCanvasOperations-B1Omm6Ke.js";
import { t as LogsPanel_default } from "./LogsPanel-Cm9AOoBN.js";
import "./folders.store-Dbxh8_89.js";
import "./NodeIcon-D_v9u5Iw.js";
import "./KeyboardShortcutTooltip-DHvlX_Kk.js";
import "./isEmpty-1ONQ4Nrn.js";
import "./NDVEmptyState-Cyag5lCS.js";
import "./externalSecrets.ee.store-k-6ajvLU.js";
import "./uniqBy-Bq3o-ltb.js";
import "./RunDataHtml-CzVg70qL.js";
import "./VueMarkdown-Dsf1Di8A.js";
import "./schemaPreview.store-BboNaDnm.js";
import "./FileSaver.min-BeIVWwkF.js";
import "./vue-json-pretty-D3luVDto.js";
import "./dateFormatter-CVL5BLGF.js";
import "./useExecutionHelpers-BncEntfO.js";
import "./fileUtils-8poQRhcx.js";
import "./useKeybindings-BrhA6TVM.js";
import "./core-DntzLlqD.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-CEVVdYrC.js";
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

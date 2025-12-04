import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-BMGgHHHp.js";
import "./src-BSkvokO5.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-wYLRGs-P.js";
import "./icon-BGaF1xBv.js";
import "./overlay-Co2-tWNx.js";
import "./empty-C2SrrehM.js";
import "./useMessage-CWDydoBV.js";
import { o as useWorkflowsStore } from "./useTelemetry-B4fed6NY.js";
import "./useToast-CSbjPKgy.js";
import "./sanitize-html-CWrjF493.js";
import "./path-browserify-CcVVPqSM.js";
import "./constants-CIzUKvWA.js";
import "./merge-ByL9uZD4.js";
import "./assistant.store-BQbXbglV.js";
import "./_baseOrderBy-CcXOJa87.js";
import "./dateformat-CaoB5ai3.js";
import "./useDebounce-DzfI1qra.js";
import "./useExternalHooks-CNbERUg2.js";
import "./useStyles-CEyEF3kW.js";
import "./chatPanel.store-Ch05Y2q_.js";
import "./npsSurvey.store-CvQgHw5l.js";
import "./cloudPlan.store-DXnayw7m.js";
import "./templates.store-BxOFML5C.js";
import "./focusPanel.store-B9KAbBuY.js";
import "./useWorkflowSaving-BfTmzjW0.js";
import "./retry-CR7m--lR.js";
import "./executions.store-DTfAUpwt.js";
import "./useRunWorkflow-B9ItD3Bj.js";
import "./usePinnedData-jLHGG09j.js";
import "./nodeCreator.store-Bzl27mKH.js";
import "./nodeIcon-DFnw7yy2.js";
import "./useClipboard-CqFoKj-c.js";
import "./useCanvasOperations-BcUlCnD4.js";
import { t as LogsPanel_default } from "./LogsPanel-Boa1E_rQ.js";
import "./folders.store-rKHc0JDl.js";
import "./NodeIcon-DLMCyggf.js";
import "./KeyboardShortcutTooltip-B6I8gPmN.js";
import "./isEmpty-CvzqpswM.js";
import "./NDVEmptyState-BPAH9f6A.js";
import "./externalSecrets.ee.store-CKApMOap.js";
import "./uniqBy-BGxZulnx.js";
import "./RunDataHtml-CZ1DLOFI.js";
import "./VueMarkdown-q2d3dalp.js";
import "./schemaPreview.store-DBxmdK8O.js";
import "./FileSaver.min-GQam_zZ1.js";
import "./vue-json-pretty-BpJFPvhQ.js";
import "./dateFormatter-Dk60RvMF.js";
import "./useExecutionHelpers-D41Oyqi_.js";
import "./fileUtils-B4-lTzu6.js";
import "./useKeybindings-C8YCABBt.js";
import "./core-D2WrUCyb.js";
import "./ChatFile-8ik4bOn3.js";
import "./xml-Un9514Es.js";
import "./AnimatedSpinner-BJqCUvNO.js";
import "./useLogsTreeExpand-Dd6y71aB.js";
import "./core-Dkg9YGht.js";
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

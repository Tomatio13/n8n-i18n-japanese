import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-B_K3eSCc.js";
import "./src-D_sDtzKO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DoMGc5TW.js";
import "./icon-CK3ijqYT.js";
import "./overlay-BsSg0nMY.js";
import "./empty-C2SrrehM.js";
import "./useMessage-CUiXXVXl.js";
import { o as useWorkflowsStore } from "./useTelemetry-DbMZzDze.js";
import "./useToast-BX2QyowK.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-DAQ2jmGy.js";
import "./merge-DgUGqCbI.js";
import "./assistant.store-BnCrHdxb.js";
import "./_baseOrderBy-38VhIe05.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-D1zghKNQ.js";
import "./useExternalHooks-C7DfhZwL.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-6MrCQC2Q.js";
import "./npsSurvey.store-C16iKG_8.js";
import "./cloudPlan.store-TWltbipF.js";
import "./templates.store-EHJTQEcs.js";
import "./focusPanel.store-BSDOJdXF.js";
import "./useWorkflowSaving-Gov7Orkp.js";
import "./retry-CalJieID.js";
import "./executions.store-C1GmZx88.js";
import "./useRunWorkflow-ChNZa-tY.js";
import "./usePinnedData-Cb7gsqk6.js";
import "./nodeCreator.store-EPjmcw1Y.js";
import "./nodeIcon-eh-vHa4e.js";
import "./useClipboard-BkXcQZ8V.js";
import "./useCanvasOperations-PGC9Ojve.js";
import { t as LogsPanel_default } from "./LogsPanel-DjcxS66_.js";
import "./folders.store-BVPpJ2gN.js";
import "./NodeIcon-CrQhjgA_.js";
import "./KeyboardShortcutTooltip-Dba0W4k2.js";
import "./isEmpty-D2BnWQ6j.js";
import "./NDVEmptyState-CKfwmd0s.js";
import "./externalSecrets.ee.store-BAqrgwrx.js";
import "./uniqBy-zwM91mlo.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-Co3zmYjS.js";
import "./schemaPreview.store-CJ0R62Om.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-C9t4p2-k.js";
import "./useExecutionHelpers-BO_GgeSK.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-BCmy9Ub8.js";
import "./core-B834MECE.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-ZU0Vdaz5.js";
import "./core-DG57UilA.js";
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

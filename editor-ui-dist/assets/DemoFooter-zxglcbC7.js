import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-B_K3eSCc.js";
import "./src-BnzyDAtJ.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DR9nQYb9.js";
import "./icon-3J2KqNjC.js";
import "./overlay-JVRz5Z87.js";
import "./empty-C2SrrehM.js";
import "./useMessage-33zPoG86.js";
import { o as useWorkflowsStore } from "./useTelemetry-CaRpph28.js";
import "./useToast-7p3aPJCC.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-CiLxMmB3.js";
import "./merge-DgUGqCbI.js";
import "./assistant.store-V_NzWVQ4.js";
import "./_baseOrderBy-C1lYf1dp.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-CNSqq1fm.js";
import "./useExternalHooks-D3qOtkb5.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-CZgJpwpA.js";
import "./npsSurvey.store-DUoNFuRR.js";
import "./cloudPlan.store-BZovxJ5X.js";
import "./templates.store-D6f-cU7-.js";
import "./focusPanel.store-DLssZU6x.js";
import "./useWorkflowSaving-VlRf_lRF.js";
import "./retry-CalJieID.js";
import "./executions.store-j5AJcNZl.js";
import "./useRunWorkflow-BNKP9vU-.js";
import "./usePinnedData-CYfGSNBc.js";
import "./nodeCreator.store-DRImM7hq.js";
import "./nodeIcon-BTE62qcl.js";
import "./useClipboard-C52O4TFq.js";
import "./useCanvasOperations-BEj3dSBX.js";
import { t as LogsPanel_default } from "./LogsPanel-D-A9RRK9.js";
import "./folders.store-CSKDDO7j.js";
import "./NodeIcon-CmlByoc7.js";
import "./KeyboardShortcutTooltip-CAk4_4QE.js";
import "./isEmpty-CXWahYku.js";
import "./NDVEmptyState-DNd6WSQ6.js";
import "./externalSecrets.ee.store-D_p3BJoV.js";
import "./uniqBy-rZv31qEv.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-CfoA2W9C.js";
import "./schemaPreview.store-TNZ2O8Sr.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-C9t4p2-k.js";
import "./useExecutionHelpers-AaMzDUsA.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-Dr6uC-XT.js";
import "./core-B834MECE.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-BGtiY-dm.js";
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

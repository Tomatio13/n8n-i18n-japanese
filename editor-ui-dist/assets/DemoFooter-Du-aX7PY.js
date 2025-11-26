import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import "./_MapCache-YY5H5Elo.js";
import "./src-BVivsRgW.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Ck6UaU_n.js";
import "./icon-DH_JWezv.js";
import "./overlay-BdWVY4Ta.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-DNQ4LcXc.js";
import { o as useWorkflowsStore } from "./useTelemetry-BeI6sUZT.js";
import "./useToast-BoMuAjRw.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-pWZn2DpD.js";
import "./merge-BmJ4zzsI.js";
import "./assistant.store-DQt6zThN.js";
import "./useRootStore-Ab0OGVtg.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CJ52CxJT.js";
import "./useExternalHooks-C-vdU9Vl.js";
import "./useStyles-CBQs-v7u.js";
import "./chatPanel.store-DhL4Yv3B.js";
import "./npsSurvey.store-DwsmH-on.js";
import "./cloudPlan.store-lg1jOtcz.js";
import "./templates.store-DAEmxsl6.js";
import "./focusPanel.store-DhUimei-.js";
import "./useWorkflowSaving-DitTh6N9.js";
import "./retry-BJSZoz93.js";
import "./executions.store-gudTPA6V.js";
import "./useRunWorkflow-CPvsgTZp.js";
import "./usePinnedData-DFgW4Ojm.js";
import "./nodeCreator.store-TGvg-mgZ.js";
import "./nodeIcon-B8FgLCnT.js";
import "./useClipboard-H2laeQe6.js";
import "./useCanvasOperations-DoSOqdHL.js";
import { t as LogsPanel_default } from "./LogsPanel-CwewkiRg.js";
import "./folders.store-la2X2Gb7.js";
import "./NodeIcon-Cd7TKL2d.js";
import "./KeyboardShortcutTooltip-pfuihK7n.js";
import "./isEmpty-Ca6z1JXi.js";
import "./NDVEmptyState-CTCUDLX3.js";
import "./externalSecrets.ee.store-BbYLCRYU.js";
import "./uniqBy-BLJcVDUw.js";
import "./RunDataHtml-CisE_tGx.js";
import "./VueMarkdown-BFftfAWF.js";
import "./schemaPreview.store-anN8dsNX.js";
import "./FileSaver.min-BPb-Xpdg.js";
import "./vue-json-pretty-D3IgtKs5.js";
import "./dateFormatter-4GwYIqgh.js";
import "./useExecutionHelpers-CuC0D65p.js";
import "./useKeybindings-0M_iKDy4.js";
import "./core-CP5FY4aX.js";
import "./xml-D4a2k3Fn.js";
import "./AnimatedSpinner-D4nYWC6B.js";
import "./useLogsTreeExpand-BHTBrMHl.js";
import "./core-TJWGyxJz.js";
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

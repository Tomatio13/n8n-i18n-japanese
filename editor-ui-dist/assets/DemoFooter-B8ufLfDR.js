import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-BlLZ6mUD.js";
import "./src-DvMAV7a1.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DwVApnO8.js";
import "./overlay-iiDIkHWl.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-D36M2qzO.js";
import { v as useWorkflowsStore } from "./builder.store-73YTVd9M.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-CbzZCrin.js";
import "./merge-BprNJBm8.js";
import "./_baseOrderBy-BFDPXEj6.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CsTcKCpb.js";
import "./assistant.store-Cr6r_O8f.js";
import "./chatPanel.store-MuoTwmxM.js";
import "./npsSurvey.store-b166c4AR.js";
import "./cloudPlan.store-x72TMLMD.js";
import "./templates.store-DiPA3Grn.js";
import "./focusPanel.store-BrANJlQo.js";
import "./useWorkflowSaving-D4a9k1o0.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-Cqvtof-o.js";
import "./useRunWorkflow-DD2QJwIM.js";
import "./usePinnedData-Iqv8DyKP.js";
import "./nodeCreator.store-ai5_doLV.js";
import "./nodeIcon-B0u_14nU.js";
import "./useClipboard-B9j0YQVp.js";
import "./useCanvasOperations-CQJElCae.js";
import { t as LogsPanel_default } from "./LogsPanel-DxBxP91f.js";
import "./folders.store-BsqS4U-P.js";
import "./NodeIcon-BA594y_5.js";
import "./KeyboardShortcutTooltip-DTkl8Nn0.js";
import "./isEmpty-D0h4hJWy.js";
import "./NDVEmptyState-C1_-Olzb.js";
import "./externalSecrets.ee.store-2qYwHljm.js";
import "./uniqBy-BpimifHT.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-L8sHfmZH.js";
import "./schemaPreview.store-BYQqxrHe.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-DOBkbIZe.js";
import "./useExecutionHelpers-HwyhtOUh.js";
import "./useKeybindings-CegCGKHh.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./core-CXk6RNMV.js";
import "./ChatFile-BbL40HHy.js";
import "./xml-ByhzxXn2.js";
import "./AnimatedSpinner-D6Q37maL.js";
import "./useLogsTreeExpand-CBv74rw0.js";
import "./core-W21PI-3x.js";
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

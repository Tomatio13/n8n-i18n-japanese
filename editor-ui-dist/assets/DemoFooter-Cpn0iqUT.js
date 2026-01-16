import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CLd8BZI_.js";
import "./src-D5b29BcA.js";
import "./truncate-1b_i1toh.js";
import { s as useWorkflowsStore } from "./users.store-BXq-1Drd.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-C3NfDzlD.js";
import "./merge-DMhdvQm-.js";
import "./_baseOrderBy-NPY2nW94.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-fdudcP9g.js";
import "./useClipboard-BevQEhaI.js";
import "./executions.store-CLtdJ8-w.js";
import "./assistant.store-53oahqR0.js";
import "./chatPanel.store-Jmy7gt_r.js";
import "./RunData-CpNM2Qf8.js";
import "./NDVEmptyState-CQvBO7y0.js";
import "./externalSecrets.ee.store-Dbf1HeIS.js";
import "./usePinnedData-CT6uF8WO.js";
import "./nodeCreator.store-CmI4jjVW.js";
import "./canvas.utils-DfJ7VMCP.js";
import "./nodeIcon-Cy_GnHaC.js";
import "./useCanvasOperations-Bd2uv25g.js";
import { t as LogsPanel_default } from "./LogsPanel-xd3agayp.js";
import "./folders.store-DVPZdXpr.js";
import "./pushConnection.store-C7GW3XjY.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-Bg9CSZdK.js";
import "./useRunWorkflow-rnQaSWDC.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-O-ZRI2-y.js";
import "./dateFormatter-nje1WgRk.js";
import "./useExecutionHelpers-Bpi6lA9x.js";
import "./KeyboardShortcutTooltip-BVrX5_Js.js";
import "./useKeybindings-BKwr8GwT.js";
import "./ChatFile-DjaiCo_F.js";
import "./AnimatedSpinner-35_rgwwY.js";
import "./useLogsTreeExpand-BF_AvMS-.js";
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

import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CLd8BZI_.js";
import "./src-D5b29BcA.js";
import "./truncate-1b_i1toh.js";
import { s as useWorkflowsStore } from "./users.store-CV1_uUYd.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-DCd0ZCi1.js";
import "./merge-DMhdvQm-.js";
import "./_baseOrderBy-CXPsUDRR.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-fdudcP9g.js";
import "./useClipboard-DK2XoKi9.js";
import "./executions.store-CgJ8P1r5.js";
import "./assistant.store-sweoTHkl.js";
import "./chatPanel.store-DBnLqt9r.js";
import "./RunData-D8eIJ6Lk.js";
import "./NDVEmptyState-CQvBO7y0.js";
import "./externalSecrets.ee.store-MGoEQprA.js";
import "./usePinnedData-BhjdrtJt.js";
import "./nodeCreator.store-D5-Eo0p1.js";
import "./canvas.utils-B6NAPmnP.js";
import "./nodeIcon-DxyZT_tP.js";
import "./useCanvasOperations-Cn2U9Mlo.js";
import { t as LogsPanel_default } from "./LogsPanel-DkfzGaMA.js";
import "./folders.store-Bmd_mbmF.js";
import "./pushConnection.store-BPGpg0CL.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-D2uRJFQz.js";
import "./useRunWorkflow-BB13XN0m.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-Dcy_GyhN.js";
import "./dateFormatter-nje1WgRk.js";
import "./useExecutionHelpers-DGySIple.js";
import "./KeyboardShortcutTooltip-BVrX5_Js.js";
import "./useKeybindings-D6wX_BPw.js";
import "./ChatFile-DjaiCo_F.js";
import "./AnimatedSpinner-35_rgwwY.js";
import "./useLogsTreeExpand-P17b6zXz.js";
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

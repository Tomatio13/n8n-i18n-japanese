import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-m5Ncuhis.js";
import "./src-oj8Yh-1s.js";
import "./truncate-DUg0RUz-.js";
import { s as useWorkflowsStore } from "./users.store-DT_y7y2t.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-085fQwMT.js";
import "./merge-B_dSS6iU.js";
import "./_baseOrderBy-BItCifbo.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-0EW4YcbG.js";
import "./useClipboard-g-ru4T08.js";
import "./executions.store-BAdc9Fjy.js";
import "./assistant.store-JHzkIXy-.js";
import "./chatPanel.store-ErsqnSDb.js";
import "./RunData-Cesd0HPT.js";
import "./NDVEmptyState-DnFFl9AA.js";
import "./externalSecrets.ee.store-CD_eEgVZ.js";
import "./usePinnedData-CjC5RV3D.js";
import "./nodeCreator.store-DAQEVu8o.js";
import "./canvas.utils-DX3EQy7y.js";
import "./nodeIcon-BK7kBj7d.js";
import "./useCanvasOperations-BQxhAWWq.js";
import { t as LogsPanel_default } from "./LogsPanel-jRcHBaq6.js";
import "./folders.store-CNrW5sxs.js";
import "./pushConnection.store-CL0kpa73.js";
import "./RunDataHtml-BJQ-r0fS.js";
import "./NodeIcon-DZMn1OAu.js";
import "./useRunWorkflow-qyYHH2H2.js";
import "./vue-json-pretty-BCv7Q2GE.js";
import "./collaboration.store-EdgHf9ny.js";
import "./dateFormatter-s7U15-Ev.js";
import "./useExecutionHelpers-Ce6DoxwL.js";
import "./KeyboardShortcutTooltip-Dq__bF1c.js";
import "./useKeybindings-DtfKGztG.js";
import "./ChatFile-BJXcjtPD.js";
import "./AnimatedSpinner-x9IXy_kT.js";
import "./useLogsTreeExpand-CecbXVvP.js";
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

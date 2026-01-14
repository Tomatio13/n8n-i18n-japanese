import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-hRR_540s.js";
import "./src-D5LifnGV.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Cam0Yz48.js";
import { N as useWorkflowsStore } from "./builder.store-CiADMrU4.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-B5TT899s.js";
import "./merge-CdJz6LD3.js";
import "./_baseOrderBy-wuohcpGG.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DLjRs23H.js";
import "./assistant.store-DKUWDLr1.js";
import "./chatPanel.store-C0WBzg88.js";
import "./retry-B-tGcWte.js";
import "./executions.store-FaUBUHtU.js";
import "./useRunWorkflow-DzWNpTJX.js";
import "./usePinnedData-C2pAKKoT.js";
import "./nodeCreator.store-DPlaSUvu.js";
import "./nodeIcon-OQKH3PhZ.js";
import "./useCanvasOperations-BPcYE9Qd.js";
import { t as LogsPanel_default } from "./LogsPanel-BFfqqnVi.js";
import "./folders.store-D4zkYcAp.js";
import "./NodeIcon-B6fzANze.js";
import "./KeyboardShortcutTooltip-Cv3y3u-n.js";
import "./useClipboard-CO5YkzHy.js";
import "./RunData-BKwXuaXf.js";
import "./NDVEmptyState-CrDvKn7A.js";
import "./externalSecrets.ee.store-CcbhGM4z.js";
import "./uniqBy-CHm52U2G.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-CbpGJ5dV.js";
import "./schemaPreview.store-ckduz9ji.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-BqaZG50U.js";
import "./useExecutionHelpers-ByiSozNR.js";
import "./useKeybindings-DNyMebVq.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-Dtf_b24Y.js";
import "./xml-B6veOr9z.js";
import "./AnimatedSpinner-wiGFgffA.js";
import "./useLogsTreeExpand-C0DGqH-p.js";
import "./core-DMlb8Dc7.js";
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

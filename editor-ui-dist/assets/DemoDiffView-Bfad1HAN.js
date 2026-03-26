import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-Ch3NFYOu.js";
import "./src-Dj1o0Sx_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-w11rzPYZ.js";
import "./users.store-Bo1lfJ-T.js";
import "./ParameterInputList-BinUq84C.js";
import "./constants-BDR7DE8A.js";
import "./merge-ClaqV-bg.js";
import { r as useRootStore } from "./_baseOrderBy-DOkG05Fo.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-CAe5tQHW.js";
import "./dataTable.store-Bi2tGtrC.js";
import "./useClipboard-CVK1N1X2.js";
import "./executions.store-B5tyQf-V.js";
import "./assistant.store-CeoO8klV.js";
import "./chatPanel.store-Bnc6cLtY.js";
import "./RunData-CBv1PK3S.js";
import "./NDVEmptyState-DJByL6W7.js";
import "./externalSecrets.ee.store-Ca7UHxqE.js";
import "./uniqBy-Ko11A-v6.js";
import "./communityNodes.store-Bzsr1Wwg.js";
import "./usePinnedData-CiRYLxBq.js";
import "./nodeIcon-CApuvsKH.js";
import "./canvas.utils-kRFVuaXO.js";
import "./canvas.eventBus-2WT9Tzqe.js";
import "./useCanvasOperations-diHidSKf.js";
import "./setupPanel.store-BPKyINOA.js";
import "./nodeTransforms-1-N6dxA6.js";
import "./templateTransforms-D5SvqQmN.js";
import "./ContactAdministratorToInstall-rIjJZuyO.js";
import "./useQuickConnect-CBOAluM2.js";
import "./semver-B3ASx-AX.js";
import "./CredentialIcon-B-DEEhAu.js";
import "./useDynamicCredentials-BqAWcZzd.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-D08esJSo.js";
import "./NodeIcon-Ce4yDrfb.js";
import "./VirtualSchema-BVOLNtIv.js";
import "./useCalloutHelpers-Bicv1K52.js";
import "./useTelemetryContext-CYrgQ0f7.js";
import "./useRunWorkflow-Ih7N5h9V.js";
import "./pushConnection.store-i9_Sn9MF.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-Cp-FAS2N.js";
import "./dateFormatter-C885tidC.js";
import "./useExecutionHelpers-CQA3Lmzk.js";
import "./useFreeAiCredits-DMHdWKKJ.js";
import "./NodeSettings-M74jeC_g.js";
import "./CommunityNodeUpdateInfo-xUDyZFWw.js";
import "./KeyboardShortcutTooltip-Y07OHolq.js";
import "./vue-w5775Ang.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DcjZvv88.js";
import "./useCanvasMapping-AyYtohQH.js";
import "./useKeybindings-BtVPckYb.js";
import "./useNodeCreatorShortcutCoachmark-C5j1kcsO.js";
import "./useActions-DD5ya4jV.js";
import "./chatHubPanel.store-CXq7AjcC.js";
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		function isValidWorkflow(obj) {
			if (obj === void 0 || obj === null) return true;
			return typeof obj === "object" && "nodes" in obj && "connections" in obj;
		}
		function emitPostMessageReady() {
			if (window.parent) window.parent.postMessage(JSON.stringify({
				command: "n8nReady",
				version: rootStore.versionCli
			}), "*");
		}
		async function onPostMessageReceived(messageEvent) {
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(messageEvent.data);
				if (json && json.command === "openDiff") {
					if (!isValidWorkflow(json.oldWorkflow) || !isValidWorkflow(json.newWorkflow)) return;
					sourceWorkflow.value = json.oldWorkflow ?? void 0;
					targetWorkflow.value = json.newWorkflow ?? void 0;
					tidyUpEnabled.value = json.tidyUp === true;
				}
			} catch (e) {}
		}
		onMounted(() => {
			window.addEventListener("message", onPostMessageReceived);
			emitPostMessageReady();
		});
		onUnmounted(() => {
			window.removeEventListener("message", onPostMessageReceived);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.demoDiffView) }, [sourceWorkflow.value || targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 0,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": unref(i18n).baseText("workflowDiff.label.before"),
				"target-label": unref(i18n).baseText("workflowDiff.label.after"),
				"tidy-up": tidyUpEnabled.value
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"tidy-up"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.waitingState)
			}, [createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("workflowDiff.waitingForData")), 1)], 2))], 2);
		};
	}
});
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView: "_demoDiffView_t8kr6_125",
	waitingState: "_waitingState_t8kr6_132"
};
var DemoDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
export { DemoDiffView_default as default };

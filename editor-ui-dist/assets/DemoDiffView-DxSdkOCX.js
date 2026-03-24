import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-DiguV1k7.js";
import "./src-BELAPDSn.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-AR025Hak.js";
import "./users.store-DPEdOi9X.js";
import "./ParameterInputList-8zrjWR-A.js";
import "./constants-MwmOH9ul.js";
import "./merge-DuN0a3S0.js";
import { r as useRootStore } from "./_baseOrderBy-BLvkq7eK.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-DISrHC6a.js";
import "./dataTable.store-BphK6TNc.js";
import "./useClipboard-CGm-zmO7.js";
import "./executions.store-BjcMU4J3.js";
import "./assistant.store-U0a2JnWb.js";
import "./chatPanel.store-B1Q289Q9.js";
import "./RunData-4ENDYndC.js";
import "./NDVEmptyState-Dr6tDFcC.js";
import "./externalSecrets.ee.store-ClHveOvw.js";
import "./uniqBy-WEvfWp2t.js";
import "./communityNodes.store-e5yqjKiR.js";
import "./usePinnedData-CkDplZad.js";
import "./nodeIcon-BbMRm6DN.js";
import "./canvas.utils-KUS4JPVu.js";
import "./canvas.eventBus-LyvhbGSo.js";
import "./useCanvasOperations-Cwhozbke.js";
import "./setupPanel.store-B12LVbAI.js";
import "./nodeTransforms-CWmxETBr.js";
import "./templateTransforms-YdlZDvMY.js";
import "./ContactAdministratorToInstall-quPSeYTD.js";
import "./useQuickConnect-CN8FDOaX.js";
import "./semver-CKcPx4tm.js";
import "./CredentialIcon-k8R_lbZi.js";
import "./DropdownMenu-DCD1GyCf.js";
import "./useDynamicCredentials-CrIG-T4O.js";
import "./RunDataHtml-RZY2ii5C.js";
import "./Draggable-D6yQ5MPF.js";
import "./NodeIcon-lCPUmtgK.js";
import "./VirtualSchema-zE_jFFPA.js";
import "./useCalloutHelpers-DoZFuE09.js";
import "./useTelemetryContext-DVP9JJly.js";
import "./useRunWorkflow-BqckBokG.js";
import "./pushConnection.store-fTFS3dsf.js";
import "./vue-json-pretty-DeuIAVUR.js";
import "./collaboration.store-DXw__kyN.js";
import "./dateFormatter-4A6YpNNs.js";
import "./useExecutionHelpers-BOcJYGjB.js";
import "./useFreeAiCredits-BEWd5R0F.js";
import "./NodeSettings-Pqi9TZ62.js";
import "./CommunityNodeUpdateInfo-orPeU_vB.js";
import "./KeyboardShortcutTooltip-BT63fRvB.js";
import "./vue-BcuSR-v8.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CHoYpZri.js";
import "./useCanvasMapping-B0POunBm.js";
import "./useKeybindings-F9N2ZMKn.js";
import "./useNodeCreatorShortcutCoachmark-UmE1Ad1r.js";
import "./useActions-3L6LW8lO.js";
import "./chatHubPanel.store-CZHsrPKp.js";
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

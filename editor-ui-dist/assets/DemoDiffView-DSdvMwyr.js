import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DHG94n07.js";
import "./users.store-C5QWCjzq.js";
import "./ParameterInputList-Dsq7YcOk.js";
import "./constants-DzqTl39N.js";
import "./merge-Dc2_Qf1D.js";
import { r as useRootStore } from "./_baseOrderBy-Cl_o1Fh3.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-6RVCe0AU.js";
import "./dataTable.store-DuPjmIQn.js";
import "./useClipboard-BK1Pd03B.js";
import "./executions.store-BG-kTHx5.js";
import "./assistant.store-BTs-hcEP.js";
import "./chatPanel.store-BcNZJg29.js";
import "./RunData-bu6Mv_by.js";
import "./NDVEmptyState-CV5Z6xrq.js";
import "./externalSecrets.ee.store-C3oPZ_z4.js";
import "./uniqBy-D9e1RfA7.js";
import "./communityNodes.store-lXheJyy7.js";
import "./usePinnedData-Bge4aqsz.js";
import "./nodeIcon-CncaEMVz.js";
import "./canvas.utils-Ce-IUDWQ.js";
import "./nodeCreator.store-Ds4dZmzd.js";
import "./useCanvasOperations-DdUORCeT.js";
import "./folders.store-qtaGkoLd.js";
import "./ContactAdministratorToInstall-9642QMuM.js";
import "./useQuickConnect-BqS6fbgp.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-scvZjehq.js";
import "./useDynamicCredentials-BdXk67gq.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-ChLj0kJG.js";
import "./NodeIcon-CXZQclSt.js";
import "./VirtualSchema-DfOx_deC.js";
import "./useCalloutHelpers-Cj_0vh4t.js";
import "./useTelemetryContext-DX5KTzKT.js";
import "./useRunWorkflow-Bn4WKYL8.js";
import "./pushConnection.store-Cg2_Ih1t.js";
import "./nodeTransforms-D5gCSTRc.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DYXo3q4H.js";
import "./dateFormatter-BzEmQqaR.js";
import "./useExecutionHelpers-BSpWuiEA.js";
import "./useFreeAiCredits-1CrPTTSN.js";
import "./NodeSettings-CtUe28XC.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./vue-D3XvnnDD.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DpO7TFmM.js";
import "./useCanvasMapping-CJPw8LcM.js";
import "./useKeybindings-BDyCsLdJ.js";
import "./QuickConnectBanner-BfrlX1KY.js";
import "./useActions-Czpf-aKR.js";
import "./setupPanel.store-KKai1lxL.js";
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

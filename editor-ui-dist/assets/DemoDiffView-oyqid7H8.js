import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-CSyjmPrE.js";
import "./src-C2W0vRuD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-C5bbpkRa.js";
import "./users.store-BbMERaHH.js";
import "./ParameterInputList-D2_hUYBw.js";
import "./constants-DNTAyC0r.js";
import "./merge-DWlhEcHQ.js";
import { r as useRootStore } from "./_baseOrderBy-D3I5tAuy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCh9I0_n.js";
import "./dataTable.store-Cz69U0CH.js";
import "./useClipboard-Cbpyeuax.js";
import "./executions.store-CvIJWJwP.js";
import "./assistant.store-d4EG0XuQ.js";
import "./chatPanel.store-BR9wUcHR.js";
import "./RunData-CTymG4Sp.js";
import "./NDVEmptyState-2SuFyx0D.js";
import "./useEnvFeatureFlag-Cu975E_j.js";
import "./externalSecrets.ee.store-Dr0RdPp2.js";
import "./uniqBy-CSVtGXMS.js";
import "./communityNodes.store-B51P6PEW.js";
import "./usePinnedData-BvEFdZ4_.js";
import "./nodeIcon-Cqat_ELy.js";
import "./canvas.utils-AtXIYApq.js";
import "./nodeCreator.store-Cb4Ay_03.js";
import "./useCanvasOperations-C9TNNcsm.js";
import "./folders.store-DS8lAp5P.js";
import "./ContactAdministratorToInstall-CJf9WiEs.js";
import "./useQuickConnect-lP9LvyZf.js";
import "./semver-48hMcQDf.js";
import "./CredentialIcon-NZSabQgg.js";
import "./useDynamicCredentials-Cgse0ZnQ.js";
import "./RunDataHtml-CI3ozo_R.js";
import "./Draggable-CejidFg4.js";
import "./NodeIcon-DyxIf7nP.js";
import "./VirtualSchema-BrwaPIi1.js";
import "./useCalloutHelpers-C64UODvF.js";
import "./useTelemetryContext-B0Q2O7MM.js";
import "./useRunWorkflow-qZOMLYMI.js";
import "./pushConnection.store-CEH3cNbj.js";
import "./nodeTransforms-06dYP1c_.js";
import "./vue-json-pretty-D4sAEHLG.js";
import "./collaboration.store-BadCm_XX.js";
import "./dateFormatter-DI7xmTxm.js";
import "./useExecutionHelpers-CqswqKYM.js";
import "./useFreeAiCredits-BbKw95Vd.js";
import "./NodeSettings-eFQS0owz.js";
import "./KeyboardShortcutTooltip-DgZQQH9B.js";
import "./vue-CemWrOhc.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DYArPu-W.js";
import "./useCanvasMapping-5JHHUwB5.js";
import "./useKeybindings-C2poeKow.js";
import "./QuickConnectBanner-B-FfJK-x.js";
import "./useActions-C_a0FKzN.js";
import "./setupPanel.store-DycYLlYF.js";
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

import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DHG94n07.js";
import "./users.store-CUByFFvW.js";
import "./ParameterInputList-2Qb6M-qV.js";
import "./constants-BRK6cGVZ.js";
import "./merge-Dc2_Qf1D.js";
import { r as useRootStore } from "./_baseOrderBy-Bjp9p9x6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DOjvR_hm.js";
import "./dataTable.store-D1Ou9l1p.js";
import "./useClipboard-BIxA4nej.js";
import "./executions.store-BBOGt0Qj.js";
import "./assistant.store-BNhRls5p.js";
import "./chatPanel.store-BeMYjF2p.js";
import "./RunData-DxTshM0y.js";
import "./NDVEmptyState-CV5Z6xrq.js";
import "./externalSecrets.ee.store-BIe3IF23.js";
import "./uniqBy-DFtw1KRC.js";
import "./communityNodes.store-X_XIlJN6.js";
import "./usePinnedData-CsmzgB7l.js";
import "./nodeIcon-piEXbpBd.js";
import "./canvas.utils-Dl7tYANC.js";
import "./nodeCreator.store-Dn8v6GSm.js";
import "./useCanvasOperations-BaVwkc4x.js";
import "./folders.store-BjHVtN0W.js";
import "./ContactAdministratorToInstall-9ZBm8W9-.js";
import "./useQuickConnect-DiUQZU5m.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-g_PC7wwz.js";
import "./useDynamicCredentials-W6u0IZYW.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-BgB-81jU.js";
import "./NodeIcon-aq-etMse.js";
import "./VirtualSchema-BxcxOg-I.js";
import "./useCalloutHelpers-UHkAnVTd.js";
import "./useTelemetryContext-DvuU9rqP.js";
import "./useRunWorkflow-urfIkOcJ.js";
import "./pushConnection.store-Cxf6RoD0.js";
import "./nodeTransforms-BA_BMtiH.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CwcGt48M.js";
import "./dateFormatter-BzEmQqaR.js";
import "./useExecutionHelpers-DlnAIgJq.js";
import "./useFreeAiCredits-BhCpooq8.js";
import "./NodeSettings-BOEnw7R6.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./vue-D3XvnnDD.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-C1aoHcTn.js";
import "./useCanvasMapping-n3UISYwy.js";
import "./useKeybindings-DHlk5RTf.js";
import "./QuickConnectBanner-B6quQqFx.js";
import "./useActions-BG3bYV56.js";
import "./setupPanel.store-Dbpq0hJ3.js";
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

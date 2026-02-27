import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-CSyjmPrE.js";
import "./src-CFZC-GtF.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CDhW1tHX.js";
import "./users.store-Aq4wLzuB.js";
import "./ParameterInputList-OylrjPeO.js";
import "./constants-Dh9fnPxX.js";
import "./merge-DWlhEcHQ.js";
import { r as useRootStore } from "./_baseOrderBy-BktMx8Ff.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BFHEf0Zz.js";
import "./dataTable.store-CDKCUuwD.js";
import "./useClipboard-fbRjDT3F.js";
import "./executions.store-D5QFA2R5.js";
import "./assistant.store-CHHuFM-l.js";
import "./chatPanel.store-B-yHmIuu.js";
import "./RunData-BhiKzGWw.js";
import "./NDVEmptyState-CCwunJsX.js";
import "./externalSecrets.ee.store-Bxi7WDiP.js";
import "./uniqBy-oIDPqxB0.js";
import "./communityNodes.store-CBGXnTOO.js";
import "./usePinnedData-CTKyW5_E.js";
import "./nodeIcon-Dnm8u4n8.js";
import "./canvas.utils-U1Tywk11.js";
import "./nodeCreator.store-CByM8xU0.js";
import "./useCanvasOperations-Lt3CfUMi.js";
import "./folders.store-D-fumZqU.js";
import "./ContactAdministratorToInstall-CwiJkZ7G.js";
import "./useQuickConnect-k6LYrjw2.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-Df3fOMBJ.js";
import "./useDynamicCredentials-CU758jsx.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-BiRsAGDf.js";
import "./NodeIcon-CxMw_BXD.js";
import "./VirtualSchema-CybMefa-.js";
import "./useCalloutHelpers-BLLHObxd.js";
import "./useTelemetryContext-BQt_g1vy.js";
import "./useRunWorkflow-C4DIlHJc.js";
import "./pushConnection.store-CF0FpA7i.js";
import "./nodeTransforms-BJMGNKXH.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CKA9BZPW.js";
import "./dateFormatter-Cjb_HP6Y.js";
import "./useExecutionHelpers-ByeC-abG.js";
import "./useFreeAiCredits-B5e0EOsz.js";
import "./NodeSettings-Daz-R5G2.js";
import "./KeyboardShortcutTooltip-BaWd6i79.js";
import "./vue-D3XvnnDD.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BnizpN_c.js";
import "./useCanvasMapping-BMO9fVz9.js";
import "./useKeybindings-CEZTlTxK.js";
import "./QuickConnectBanner-2pCrXwa1.js";
import "./useActions-CDJVAA5o.js";
import "./setupPanel.store-BxSGgTDy.js";
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

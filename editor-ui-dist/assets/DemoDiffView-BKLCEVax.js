import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DAfQkYUW.js";
import "./src-CVRo-0o8.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CxT-NhwF.js";
import "./users.store-DbrQquUN.js";
import "./ParameterInputList-DNuS28TJ.js";
import "./constants-HkX3ruPP.js";
import "./merge-D06_YRZ7.js";
import { r as useRootStore } from "./_baseOrderBy-CRlYhHsD.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cock4s9P.js";
import "./dataTable.store-CUEVchpM.js";
import "./useClipboard-ClwZn4tC.js";
import "./executions.store-C274gC-V.js";
import "./assistant.store-Bk9cb3Vu.js";
import "./chatPanel.store-BKpTYRPD.js";
import "./RunData-CBWZdrrs.js";
import "./NDVEmptyState-CIYaMOvI.js";
import "./externalSecrets.ee.store-DZ6Ck8-U.js";
import "./uniqBy-CCJrGKA3.js";
import "./communityNodes.store-iVW_NENV.js";
import "./usePinnedData-Bhf0OXJU.js";
import "./nodeIcon-BOKecWPr.js";
import "./canvas.utils-BfXwNBic.js";
import "./canvas.eventBus-DTHvFt3f.js";
import "./useCanvasOperations-CE_D5JOc.js";
import "./folders.store-BpQQrRFR.js";
import "./ContactAdministratorToInstall-BU-cldsK.js";
import "./useQuickConnect-BNFzLfvU.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-BPDtCsPE.js";
import "./useDynamicCredentials-CP83jlrA.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-5AaPWgSa.js";
import "./NodeIcon-Gry9n8Ml.js";
import "./VirtualSchema-SpE18_18.js";
import "./useCalloutHelpers-ZIMeuTLJ.js";
import "./useTelemetryContext-Vhpc2T6o.js";
import "./useRunWorkflow-C2BrulBx.js";
import "./pushConnection.store-DkwO8pAy.js";
import "./nodeTransforms-DN41GDDX.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-nd3Pm7eP.js";
import "./dateFormatter-B9NdTL4J.js";
import "./useExecutionHelpers-CdhPqI36.js";
import "./useFreeAiCredits-WjMqDv1r.js";
import "./NodeSettings-BfXzKVcm.js";
import "./CommunityNodeUpdateInfo-Bu8rxFrJ.js";
import "./KeyboardShortcutTooltip-BpidOSDc.js";
import "./vue-CemWrOhc.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-6zLDqMhy.js";
import "./useCanvasMapping-DVw2c64o.js";
import "./useKeybindings-BuA1w5E4.js";
import "./useNodeCreatorShortcutCoachmark-BDyO-l6W.js";
import "./useActions-C4zufdMz.js";
import "./setupPanel.store-5DRtzTB2.js";
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

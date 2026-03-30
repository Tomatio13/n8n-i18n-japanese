import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-LQ34688M.js";
import "./src-CIy3RA1U.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Ci6Crxzp.js";
import "./users.store-n3Mg-2Tf.js";
import "./ParameterInputList-B-zsSa1J.js";
import "./constants-CSSZK8sm.js";
import "./merge-BDPAvSx5.js";
import { r as useRootStore } from "./_baseOrderBy-DezvQaYy.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-D9WyiVgI.js";
import "./dataTable.store-DCKtS1yX.js";
import "./useClipboard-BzWoj3d8.js";
import "./executions.store-Djl2tj4F.js";
import "./assistant.store-D7S0uxj2.js";
import "./chatPanel.store-COinEhFZ.js";
import "./RunData-CsIpGn79.js";
import "./NDVEmptyState-CeUWIeqT.js";
import "./externalSecrets.ee.store-DKhNi2YF.js";
import "./uniqBy-p-_6700d.js";
import "./communityNodes.store-B3lnVkK7.js";
import "./usePinnedData-CSTrcrtx.js";
import "./nodeIcon-C4zsDtH3.js";
import "./canvas.utils-C2HyL0A8.js";
import "./canvas.eventBus-Q0g3ff2Y.js";
import "./useCanvasOperations-D253BUcq.js";
import "./setupPanel.store-B1Ix3atm.js";
import "./nodeTransforms-ClHJgqva.js";
import "./templateTransforms-BiZ3JcTy.js";
import "./ContactAdministratorToInstall-CB4NYJ2b.js";
import "./useQuickConnect-CjScB7I1.js";
import "./semver-CKcPx4tm.js";
import "./CredentialIcon-DV59l9k0.js";
import "./DropdownMenu-DCD1GyCf.js";
import "./useDynamicCredentials-dkC2SvZs.js";
import "./RunDataHtml-RZY2ii5C.js";
import "./Draggable-BSd5TxL9.js";
import "./NodeIcon-CYWtd79V.js";
import "./VirtualSchema-DJtbRrGI.js";
import "./useCalloutHelpers-CceO_bBX.js";
import "./useTelemetryContext-CdI6z__X.js";
import "./useRunWorkflow-CSE7fKEc.js";
import "./pushConnection.store-y-u00Iqi.js";
import "./vue-json-pretty-DeuIAVUR.js";
import "./collaboration.store-zFkVho86.js";
import "./dateFormatter-BCLLi1Ob.js";
import "./useExecutionHelpers-vkpGML3L.js";
import "./useFreeAiCredits-EVyhX8sD.js";
import "./NodeSettings-Bk0NiAFe.js";
import "./CommunityNodeUpdateInfo-BkFo_1hU.js";
import "./KeyboardShortcutTooltip-Bo9DRaLf.js";
import "./vue-BcuSR-v8.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DEyL14dc.js";
import "./useCanvasMapping-DZFUS5pP.js";
import "./useKeybindings-CX_BEvnV.js";
import "./useNodeCreatorShortcutCoachmark-DrPf34SS.js";
import "./useActions-DDiuWstA.js";
import "./chatHubPanel.store-7686pVzJ.js";
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

import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-B3dj9TjY.js";
import "./users.store-DgUIxOeF.js";
import "./ParameterInputList-DjYykO5Z.js";
import "./constants-BAAsiVuv.js";
import "./merge-DXu1hBe8.js";
import { r as useRootStore } from "./_baseOrderBy-C99Jw64_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-D1niGPQt.js";
import "./dataTable.store-DEjO0ydB.js";
import "./useClipboard-Bk7FVHYY.js";
import "./executions.store-BfPMkr04.js";
import "./assistant.store-DuZNsptK.js";
import "./chatPanel.store-DGW6uPAg.js";
import "./RunData-Du3I_ozH.js";
import "./NDVEmptyState-CSutalFL.js";
import "./externalSecrets.ee.store-nqUbnXIw.js";
import "./uniqBy-Dwq2kKjS.js";
import "./communityNodes.store-BwgKTcdn.js";
import "./usePinnedData-CstxA2i0.js";
import "./nodeIcon-mUbR0l1d.js";
import "./canvas.utils-CVZRoVR0.js";
import "./canvas.eventBus-HKUh_QUg.js";
import "./useCanvasOperations-CoIb0L0s.js";
import "./folders.store-DWdLyRek.js";
import "./ContactAdministratorToInstall-n76Vn2Ca.js";
import "./useQuickConnect-B-BEl2GF.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-T4k8c4dr.js";
import "./useDynamicCredentials-uq-xEfvB.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-AEgPX_Mi.js";
import "./NodeIcon-D6PCe5az.js";
import "./VirtualSchema-CitJ5dQQ.js";
import "./useCalloutHelpers-BMXwbFXJ.js";
import "./useTelemetryContext-CfnyxdfK.js";
import "./useRunWorkflow-DJbVmciN.js";
import "./pushConnection.store-CMt2BOCR.js";
import "./nodeTransforms-6Jer1hpn.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DGVJH3qg.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-Bb7JRrDd.js";
import "./useFreeAiCredits-DSkVXkyV.js";
import "./NodeSettings-DFXH9RL7.js";
import "./CommunityNodeUpdateInfo-DX2eanSq.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./vue-CemWrOhc.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-vpDgsvXZ.js";
import "./useCanvasMapping-Cf06WwwU.js";
import "./useKeybindings-C_Ai64eE.js";
import "./useNodeCreatorShortcutCoachmark-Ct4kOb4h.js";
import "./useActions-usMIfrT8.js";
import "./setupPanel.store-v5B-OkC1.js";
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

import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-B3dj9TjY.js";
import "./users.store-DhQma29k.js";
import "./ParameterInputList-8fTqsoOC.js";
import "./constants-CoM3n6o2.js";
import "./merge-DXu1hBe8.js";
import { r as useRootStore } from "./_baseOrderBy-CggIhTiT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BY19fKVi.js";
import "./dataTable.store-C7ahCnzK.js";
import "./useClipboard-CrnGYIjr.js";
import "./executions.store-BCpxqH0c.js";
import "./assistant.store-CtvO3HBF.js";
import "./chatPanel.store-AoYX1jbC.js";
import "./RunData-BxkpIWoe.js";
import "./NDVEmptyState-CSutalFL.js";
import "./externalSecrets.ee.store-jECFPXjq.js";
import "./uniqBy-CJNrte_y.js";
import "./communityNodes.store-CrLrB_Tb.js";
import "./usePinnedData-DFXzxF_S.js";
import "./nodeIcon-DFjgBYDz.js";
import "./canvas.utils-DZe7ySh-.js";
import "./canvas.eventBus-CMrk0zzM.js";
import "./useCanvasOperations-QSYtNGim.js";
import "./folders.store-DPFn7eIX.js";
import "./ContactAdministratorToInstall-BTZRm2KY.js";
import "./useQuickConnect-96XjUJ45.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-CtLqPqmE.js";
import "./useDynamicCredentials-Cm4szkDK.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-D9xB6y9Q.js";
import "./NodeIcon-BMv-hvx4.js";
import "./VirtualSchema-BvykikwM.js";
import "./useCalloutHelpers-9unPbEA9.js";
import "./useTelemetryContext-C1UeENGN.js";
import "./useRunWorkflow-By5JvrXR.js";
import "./pushConnection.store-Bc4LrtKI.js";
import "./nodeTransforms-Wcw5Cud4.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DeyLbOQe.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-D832lgtx.js";
import "./useFreeAiCredits-C1EPFrNG.js";
import "./NodeSettings-BAr1oYDC.js";
import "./CommunityNodeUpdateInfo-DgoDOoSE.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./vue-CemWrOhc.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BpEDCBCE.js";
import "./useCanvasMapping-5tF62ppy.js";
import "./useKeybindings-BCPZKgqt.js";
import "./useNodeCreatorShortcutCoachmark-CRi-Pi3t.js";
import "./useActions-7z0Nw3d7.js";
import "./setupPanel.store-DcPGolja.js";
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

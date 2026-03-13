import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-84FHPy_f.js";
import "./src-6ntFqKUX.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-zK8lOuEW.js";
import "./users.store-DXe0k24C.js";
import "./ParameterInputList-BAldmY0t.js";
import "./constants-DFqwcbaV.js";
import "./merge-DXu1hBe8.js";
import { r as useRootStore } from "./_baseOrderBy-la78pIJR.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-V2WUQKxb.js";
import "./dataTable.store-BXZ8xI5e.js";
import "./useClipboard-CPOP3Smf.js";
import "./executions.store-B4X62cQH.js";
import "./assistant.store-CnKXnp-m.js";
import "./chatPanel.store-DcEtx9gk.js";
import "./RunData-Cp8Fiqix.js";
import "./NDVEmptyState-CxvjZmfT.js";
import "./externalSecrets.ee.store-Xo0vHFs2.js";
import "./uniqBy-xIoJOKnG.js";
import "./communityNodes.store-C94us22k.js";
import "./usePinnedData-C8B6rpzL.js";
import "./nodeIcon-tudKUNxb.js";
import "./canvas.utils-76suIWXt.js";
import "./canvas.eventBus-Cn4sEiWY.js";
import "./useCanvasOperations-CXH5RkXF.js";
import "./folders.store-EXw-AG0G.js";
import "./ContactAdministratorToInstall-bZ_gUpQr.js";
import "./useQuickConnect-DTveEq8J.js";
import "./semver-NNW3wp0m.js";
import "./CredentialIcon-CzVZU8i-.js";
import "./useDynamicCredentials-DqVsfeLC.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-yJDPy13g.js";
import "./NodeIcon-BfCXDNRI.js";
import "./VirtualSchema-CeRnSTxa.js";
import "./useCalloutHelpers-DRCcpjhF.js";
import "./useTelemetryContext-B7HPcvYt.js";
import "./useRunWorkflow-BjtfX5Y3.js";
import "./pushConnection.store-DGlC9n1z.js";
import "./nodeTransforms-b1Ru2bx3.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DS2jdo5S.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-DhdHyFs3.js";
import "./useFreeAiCredits-Dkpkus6B.js";
import "./NodeSettings-mH0ptLON.js";
import "./CommunityNodeUpdateInfo-CdYj6J3q.js";
import "./KeyboardShortcutTooltip-oQq0l-oc.js";
import "./vue-CemWrOhc.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DXB7yC4W.js";
import "./useCanvasMapping-0TYCiU3w.js";
import "./useKeybindings-B8yvWeLb.js";
import "./useNodeCreatorShortcutCoachmark-iz0vEKSn.js";
import "./useActions-Ci5jd-1U.js";
import "./setupPanel.store-BntOd1R7.js";
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

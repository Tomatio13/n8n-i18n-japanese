import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-CVjD7lfb.js";
import "./src-DI71_LGY.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-ahyAbW59.js";
import "./users.store-BMJ9fc-u.js";
import "./ParameterInputList-BK4wRrNM.js";
import "./constants-BVqqmrz5.js";
import "./merge-DEVXSdfC.js";
import { r as useRootStore } from "./_baseOrderBy-CrD5hJjV.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-BCW--JMK.js";
import "./dataTable.store-BPntPlM6.js";
import "./useClipboard-BnsvPsrl.js";
import "./executions.store-HTiT_ST0.js";
import "./assistant.store-BVLAgpQe.js";
import "./chatPanel.store-B-I15BX3.js";
import "./RunData-CRr07ZWG.js";
import "./NDVEmptyState-B6nBXpLy.js";
import "./externalSecrets.ee.store-C2C0n6oQ.js";
import "./uniqBy-BeSvTiel.js";
import "./communityNodes.store-CbZhqsMr.js";
import "./usePinnedData-DeK1lmat.js";
import "./nodeIcon-ByXH4W6J.js";
import "./canvas.utils-HRVIUNJr.js";
import "./canvas.eventBus-C7jRWIn-.js";
import "./useCanvasOperations-hI6y40Pq.js";
import "./setupPanel.store-CbWq_6AQ.js";
import "./nodeTransforms-BHqkOPk4.js";
import "./templateTransforms-BwT8lyVB.js";
import "./ContactAdministratorToInstall-Nz1znKb_.js";
import "./useQuickConnect-BeLXzNIX.js";
import "./semver-B3ASx-AX.js";
import "./CredentialIcon-DDim1dA6.js";
import "./useDynamicCredentials-CdgXtuyk.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-CUyj-UaG.js";
import "./NodeIcon-B7_ESjJa.js";
import "./VirtualSchema-yxeWAEQ8.js";
import "./useCalloutHelpers-C5YK_hh5.js";
import "./useTelemetryContext-DKhQuV9F.js";
import "./useRunWorkflow-D847FUsJ.js";
import "./pushConnection.store-DbUjm6Hn.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BRde1xoF.js";
import "./dateFormatter-BUaskkNs.js";
import "./useExecutionHelpers-DzzfRmIq.js";
import "./useFreeAiCredits-DjDaJWv5.js";
import "./NodeSettings-BByBpZ9y.js";
import "./CommunityNodeUpdateInfo-BvceKCdx.js";
import "./KeyboardShortcutTooltip-Dd_kVmej.js";
import "./vue-w5775Ang.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-7VImT3fk.js";
import "./useCanvasMapping-Bbw05WIQ.js";
import "./useKeybindings-Dxb-cuC_.js";
import "./useNodeCreatorShortcutCoachmark-DZIfzdyq.js";
import "./useActions-ZCMqYEMR.js";
import "./chatHubPanel.store-zViGHYZH.js";
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

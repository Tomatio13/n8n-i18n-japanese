import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Bf as ref, Hd as createElementBlock, Jd as defineComponent, Mf as init_reactivity_esm_bundler, Yf as unref, ff as openBlock, gp as normalizeClass, lf as onMounted, rp as init_shared_esm_bundler, uf as onUnmounted, xp as toDisplayString, zd as createBaseVNode } from "./vendor-BtpAr53w.js";
import { Fk as useI18n, Jr as WorkflowDiffView_default, Mx as useRootStore, kk as _plugin_vue_export_helper_default } from "./app-BVbtMUlG.js";
import { t as isPostMessageOriginAllowed } from "./postMessageUtils-DPmJbbGi.js";
//#region src/app/views/DemoDiffView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var DemoDiffView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		/**
		* Validates that an object has the minimum required workflow structure.
		* Allows undefined (for partial diffs) but rejects malformed objects.
		*/
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
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"") || !isPostMessageOriginAllowed(messageEvent.origin)) return;
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
}), [["__cssModules", { "$style": {
	demoDiffView: "_demoDiffView_ec5lk_1",
	waitingState: "_waitingState_ec5lk_8"
} }]]);
//#endregion
export { DemoDiffView_default as default };

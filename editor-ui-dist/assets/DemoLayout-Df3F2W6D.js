import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import { bi as useRoute } from "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-BCBAY9og.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Cc as WorkflowIdKey } from "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./useClipboard-BAfCKzMZ.js";
import "./executions.store-CO2hx5Gg.js";
import "./assistant.store-sjM2oY5A.js";
import "./chatPanel.store-BMqBIo2S.js";
import "./RunData-D4I2DNno.js";
import "./NDVEmptyState-DJ_8-4Ru.js";
import "./useEnvFeatureFlag-B_zxRwW-.js";
import "./externalSecrets.ee.store-BcKq7Euv.js";
import "./uniqBy-BgY0DScU.js";
import "./usePinnedData-0-M3_ZPL.js";
import "./nodeIcon-C7zoa3Xe.js";
import "./canvas.utils-BWHiMN1b.js";
import "./nodeCreator.store-DIHxRw20.js";
import "./useCanvasOperations-DMSc6e7l.js";
import "./folders.store-Cl8_B2y2.js";
import "./RunDataHtml-Cmcej_h-.js";
import "./NodeIcon-CdiH7zEn.js";
import "./useRunWorkflow-Dt0Hvedj.js";
import "./pushConnection.store-CCTSaZcC.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Do7EwzD8.js";
import "./dateFormatter-8i1oKwqN.js";
import "./useExecutionHelpers-BQVc3ybI.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./useKeybindings-DdHRPSWD.js";
import "./useLogsTreeExpand-BK7A-NI9.js";
import { t as LogsPanel_default } from "./LogsPanel-cVyR9YP_.js";
import "./AnimatedSpinner-DxUVUX0q.js";
import "./useResizablePanel-CkbYf3qx.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };

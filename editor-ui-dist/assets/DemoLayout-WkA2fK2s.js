import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import { bi as useRoute } from "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-DYjj3Bkk.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Cc as WorkflowIdKey } from "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./useClipboard-BAfCKzMZ.js";
import "./executions.store-D_TPVsS-.js";
import "./assistant.store-Cd7rCwlE.js";
import "./chatPanel.store-DPXKlEYd.js";
import "./RunData-Dx8e2XaJ.js";
import "./NDVEmptyState-DJ_8-4Ru.js";
import "./useEnvFeatureFlag-8RB0l6Cw.js";
import "./externalSecrets.ee.store-mDQtPzxS.js";
import "./uniqBy-BgY0DScU.js";
import "./usePinnedData-Cgn6ilKn.js";
import "./nodeIcon-CY5LzAkw.js";
import "./canvas.utils-bZ_xh70e.js";
import "./nodeCreator.store-aUOwu19h.js";
import "./useCanvasOperations-DSlPCBPP.js";
import "./folders.store-DmPoI1nu.js";
import "./RunDataHtml-Cmcej_h-.js";
import "./NodeIcon-reQ3kBK4.js";
import "./useRunWorkflow-C_tdx4B5.js";
import "./pushConnection.store-CSjuodzU.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BWLRMkPF.js";
import "./dateFormatter-8i1oKwqN.js";
import "./useExecutionHelpers-Uk8Bsw7M.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./useKeybindings-CbxH1dZJ.js";
import "./useLogsTreeExpand-BtekZIMS.js";
import { t as LogsPanel_default } from "./LogsPanel-CqAncUvI.js";
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

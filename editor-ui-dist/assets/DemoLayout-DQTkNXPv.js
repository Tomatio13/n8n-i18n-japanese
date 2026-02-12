import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import { bi as useRoute } from "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-wbbCoWla.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Cc as WorkflowIdKey } from "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./useClipboard-BAfCKzMZ.js";
import "./executions.store-XrJiPOdL.js";
import "./assistant.store-4_34qzKv.js";
import "./chatPanel.store-CHcZerCm.js";
import "./RunData-BAf42Uti.js";
import "./NDVEmptyState-DJ_8-4Ru.js";
import "./useEnvFeatureFlag-Bp6U8-kU.js";
import "./externalSecrets.ee.store-YsDeSpf6.js";
import "./uniqBy-BgY0DScU.js";
import "./usePinnedData-CY1mdOKX.js";
import "./nodeIcon-C13-IGvg.js";
import "./canvas.utils-DWv8Ep5o.js";
import "./nodeCreator.store-C38XhxZX.js";
import "./useCanvasOperations-C0G4p9y3.js";
import "./folders.store-Cpe0H0az.js";
import "./RunDataHtml-Cmcej_h-.js";
import "./NodeIcon-BwwFd6_Z.js";
import "./useRunWorkflow-CfNbQ7He.js";
import "./pushConnection.store-7KBq5NPE.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-CKXaVro6.js";
import "./dateFormatter-8i1oKwqN.js";
import "./useExecutionHelpers-CADkvoZk.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./useKeybindings-BTDAia6Z.js";
import "./useLogsTreeExpand-BpC3skz2.js";
import { t as LogsPanel_default } from "./LogsPanel-BcYuTrij.js";
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

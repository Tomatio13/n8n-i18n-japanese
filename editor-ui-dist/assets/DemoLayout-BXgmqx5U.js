import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Chqi9vET.js";
import { bi as useRoute } from "./src-B_7PrR_B.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-D6NNy8B9.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { xc as WorkflowIdKey } from "./constants-CBTLcudZ.js";
import "./merge-Dmma2sos.js";
import "./_baseOrderBy-DsaU_Ltw.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-uyY_iAs4.js";
import "./useClipboard-DyOUPKgj.js";
import "./executions.store-BGRmt-Y2.js";
import "./assistant.store-DsH-nQR0.js";
import "./chatPanel.store-C06TJtkC.js";
import "./RunData-D5Vbyyy3.js";
import "./NDVEmptyState-CBrYYMTP.js";
import "./useEnvFeatureFlag-CAsA-u2y.js";
import "./externalSecrets.ee.store-Cgsu8uSe.js";
import "./uniqBy-KrmwglcY.js";
import "./usePinnedData-CLR_J8jR.js";
import "./nodeIcon-fzxVerOj.js";
import "./canvas.utils-CdoUkqsI.js";
import "./nodeCreator.store-hLUFFoge.js";
import "./useCanvasOperations-DQFYmQkv.js";
import "./folders.store-CAZgHAbo.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-CV3pXV1v.js";
import "./useRunWorkflow-B5L8jJb2.js";
import "./pushConnection.store-Cs3AmEi0.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-IeFD-FJG.js";
import "./dateFormatter-Bbvbt1Zw.js";
import "./useExecutionHelpers-C4ss_BtQ.js";
import "./KeyboardShortcutTooltip-CG4bms-K.js";
import "./useKeybindings-Crzv09tl.js";
import "./useLogsTreeExpand-ooIiElCe.js";
import { t as LogsPanel_default } from "./LogsPanel-DnN22_9W.js";
import "./AnimatedSpinner-DUVVMwji.js";
import "./ChatFile-CEsmMQgm.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import { Ci as useRoute } from "./src-BRXawENP.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-vQVV4dQN.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Tc as WorkflowIdKey } from "./constants-BpapHTSQ.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-ByWFxls0.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-xtdD2fLT.js";
import "./useClipboard-BvP-u6Uc.js";
import "./executions.store-DynBiySL.js";
import "./assistant.store-95rg_D77.js";
import "./chatPanel.store-C6pIBgc_.js";
import "./RunData-tOOHHjiK.js";
import "./NDVEmptyState-D6aly2Qh.js";
import "./useEnvFeatureFlag-CJsiknFn.js";
import "./externalSecrets.ee.store-BOFUliv-.js";
import "./uniqBy-BLa_lMKD.js";
import "./usePinnedData-D8oNoUZY.js";
import "./nodeIcon-BWGCqJOZ.js";
import "./canvas.utils-D68_piNx.js";
import "./nodeCreator.store-B0v59kvd.js";
import "./useCanvasOperations-DZGOk_Y0.js";
import "./folders.store-CyBJIEUP.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-Dd5K2LDe.js";
import "./useRunWorkflow-CnTFH0kQ.js";
import "./pushConnection.store-BD9lD0iX.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-kGTcVMH-.js";
import "./dateFormatter-D2g3PkKx.js";
import "./useExecutionHelpers-BTfRJUYj.js";
import "./KeyboardShortcutTooltip-xopvg4Tp.js";
import "./useKeybindings-BdfGMwKa.js";
import "./useLogsTreeExpand-CSUkwHXq.js";
import { t as LogsPanel_default } from "./LogsPanel-8Ai__Tm7.js";
import "./AnimatedSpinner-Cb_h9KnX.js";
import "./useResizablePanel-cVWmFBBY.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Cn5DLdg7.js";
import { Ci as useRoute } from "./src-kZ1r5Wha.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-DqUPlrG3.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Ec as WorkflowIdKey } from "./constants-DsDharXz.js";
import "./merge-hHzgyaGO.js";
import "./_baseOrderBy-CsW5-cXA.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cx_bbelL.js";
import "./useClipboard-BMtnAz8B.js";
import "./executions.store-BPvby0wJ.js";
import "./assistant.store-DyYod5Cc.js";
import "./chatPanel.store-B1dUrqso.js";
import "./RunData-ALbyDAHe.js";
import "./NDVEmptyState-BCphyfEB.js";
import "./useEnvFeatureFlag-DhHByJRI.js";
import "./externalSecrets.ee.store-DMZtMDsw.js";
import "./uniqBy-Cyyr9YXG.js";
import "./usePinnedData-3TpREMY_.js";
import "./nodeIcon-Cuf5-et5.js";
import "./canvas.utils-CwHdGP1p.js";
import "./nodeCreator.store-CzAfQ5YX.js";
import "./useCanvasOperations-CZCsywfo.js";
import "./folders.store-0YEXy6UN.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-DcoBQP7l.js";
import "./useRunWorkflow-CMnyGd0M.js";
import "./pushConnection.store-DZY08lmC.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-CAl7fnIc.js";
import "./dateFormatter-C9Avww8j.js";
import "./useExecutionHelpers-B5CENTAn.js";
import "./KeyboardShortcutTooltip-CiK8DYmF.js";
import "./useKeybindings-DYd6b2zd.js";
import "./useLogsTreeExpand-Ch8JiMNO.js";
import { t as LogsPanel_default } from "./LogsPanel-DCe-vVfr.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-BiuHKl3M.js";
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

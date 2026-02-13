import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Ct6p3xKn.js";
import { yi as useRoute } from "./src-DuGormCI.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-AbL4SQmk.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { xc as WorkflowIdKey } from "./constants-Bd1ZtBWa.js";
import "./merge-D4SF-xu2.js";
import "./_baseOrderBy-1mqBccLb.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-ClefIYI_.js";
import "./useClipboard-D-toU5nU.js";
import "./executions.store-C6PKGvuy.js";
import "./assistant.store-8u055S-u.js";
import "./chatPanel.store-DlbwXnkN.js";
import "./RunData-jtCoJkwf.js";
import "./NDVEmptyState-DBm52Sch.js";
import "./useEnvFeatureFlag-pFK6MgI2.js";
import "./externalSecrets.ee.store-NdGVE6gr.js";
import "./uniqBy-BJE-J22c.js";
import "./usePinnedData-B00YK5qY.js";
import "./nodeIcon-CW3KsyEc.js";
import "./canvas.utils-cwkY3J8Z.js";
import "./nodeCreator.store-CO_HWkWf.js";
import "./useCanvasOperations-D1DeCq0d.js";
import "./folders.store-B1wMWfFE.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-BFCo9qrC.js";
import "./useRunWorkflow-BWwI3G5D.js";
import "./pushConnection.store-BpagqExV.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-kvMvYOAE.js";
import "./dateFormatter-Daqtm6-m.js";
import "./useExecutionHelpers-WLgmjyXA.js";
import "./KeyboardShortcutTooltip-BzJtBTqp.js";
import "./useKeybindings-DYFPUzk8.js";
import "./useLogsTreeExpand-CfTtOjUa.js";
import { t as LogsPanel_default } from "./LogsPanel-u6iJx4H_.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DzvtSRAp.js";
import "./src-foU9rMrs.js";
import { s as useWorkflowsStore } from "./users.store-D4HoXPob.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-DJbdJ0QD.js";
import "./merge-CYj4-Mn8.js";
import "./_baseOrderBy-CVzuiWS2.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dd1QbJRS.js";
import "./useClipboard-CCbBkWhe.js";
import "./executions.store-8vD-Z3Eq.js";
import "./assistant.store-Dzt2e_fx.js";
import "./chatPanel.store-iqTl5VPY.js";
import "./RunData-BWqsW9pW.js";
import "./NDVEmptyState-BF3rXORX.js";
import "./externalSecrets.ee.store-BFuWjPrm.js";
import "./usePinnedData-CaZOLvRN.js";
import "./nodeCreator.store-BOJSUzop.js";
import "./canvas.utils-BUzQMjUB.js";
import "./nodeIcon-DzTVP7n2.js";
import "./useCanvasOperations-B0VcXV6D.js";
import "./folders.store-Bb3MJQic.js";
import "./RunDataHtml-DGlavcBP.js";
import "./NodeIcon-DkASzwEb.js";
import "./useRunWorkflow-B5dSGUwR.js";
import "./pushConnection.store-yNha9cr2.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-ByfIWEz5.js";
import "./dateFormatter-BIW0XCyV.js";
import "./useExecutionHelpers-BbZyE3wO.js";
import "./KeyboardShortcutTooltip-By1vldds.js";
import "./useKeybindings-cThyx0Xd.js";
import "./useLogsTreeExpand-Cd1_lxiQ.js";
import { t as LogsPanel_default } from "./LogsPanel-DinTkI50.js";
import "./AnimatedSpinner-c8zqcsLs.js";
import "./ChatFile-CK6UREaX.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DzvtSRAp.js";
import "./src-foU9rMrs.js";
import { s as useWorkflowsStore } from "./users.store-B8MNpFK1.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-Bpgtcge2.js";
import "./merge-CYj4-Mn8.js";
import "./_baseOrderBy-DTKFAGkB.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dd1QbJRS.js";
import "./useClipboard-C-pTJhwf.js";
import "./executions.store-PrdRCCNL.js";
import "./assistant.store-C9xn6dX4.js";
import "./chatPanel.store-vK2pp-Bg.js";
import "./RunData-DUI6r-IL.js";
import "./NDVEmptyState-BF3rXORX.js";
import "./externalSecrets.ee.store-CftxRrAi.js";
import "./usePinnedData-PlMsHJow.js";
import "./nodeCreator.store-BwkmFccP.js";
import "./canvas.utils-hsCHu1W4.js";
import "./nodeIcon-CoN3fMZa.js";
import "./useCanvasOperations-Luny4UNe.js";
import "./folders.store-BRdsrPKC.js";
import "./RunDataHtml-DGlavcBP.js";
import "./NodeIcon-BLfujgfP.js";
import "./useRunWorkflow-B5djDJFA.js";
import "./pushConnection.store-BBFjmIhu.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-CVxICzp9.js";
import "./dateFormatter-BIW0XCyV.js";
import "./useExecutionHelpers-DiB2fIfr.js";
import "./KeyboardShortcutTooltip-By1vldds.js";
import "./useKeybindings-CjGKMSpm.js";
import "./useLogsTreeExpand-DlhL6zjw.js";
import { t as LogsPanel_default } from "./LogsPanel-CEbg0vhg.js";
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

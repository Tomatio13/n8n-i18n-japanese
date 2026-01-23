import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BSabmsGd.js";
import "./src-9dBEqjNT.js";
import { s as useWorkflowsStore } from "./users.store-CRuM-6OK.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-jSlGi3TV.js";
import "./merge-WwnMky1z.js";
import "./_baseOrderBy-DymvjUPt.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CD300VZO.js";
import "./useClipboard-0rBYtOiK.js";
import "./executions.store-CjGoegy9.js";
import "./assistant.store-CE1QhfgD.js";
import "./chatPanel.store-DN7jZ0xJ.js";
import "./RunData-OizzpTJs.js";
import "./NDVEmptyState-Ve6HhDB7.js";
import "./externalSecrets.ee.store-C44qViT1.js";
import "./usePinnedData-DDLJY1l7.js";
import "./nodeCreator.store-DrJWiNBr.js";
import "./canvas.utils-B46ithaJ.js";
import "./nodeIcon-BtE0OHHC.js";
import "./useCanvasOperations-DTJDjav-.js";
import "./folders.store-DRgjTwd-.js";
import "./RunDataHtml-DGlavcBP.js";
import "./NodeIcon-Bc5skNxK.js";
import "./useRunWorkflow-z6fPDDE1.js";
import "./pushConnection.store-ZdhxeBrz.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-CULLK6ED.js";
import "./dateFormatter-BH-p4pcy.js";
import "./useExecutionHelpers-BbwSkOdi.js";
import "./KeyboardShortcutTooltip-uPUQC9r8.js";
import "./useKeybindings-tIWBZJ0t.js";
import "./useLogsTreeExpand-s-Df6gjq.js";
import { t as LogsPanel_default } from "./LogsPanel-BYx9pEUS.js";
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

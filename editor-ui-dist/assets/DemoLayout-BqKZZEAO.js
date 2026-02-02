import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-Bos3oYaY.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-ENbfVdIF.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CvBCoQnq.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-CA-ldP4w.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B_GWpbEm.js";
import "./useClipboard-DmeNOhyf.js";
import "./executions.store-yu-L6r0w.js";
import "./assistant.store-9Ehh5pAe.js";
import "./chatPanel.store-CA9F_2Lk.js";
import "./RunData-DfjvCaxf.js";
import "./NDVEmptyState-BhL60ozT.js";
import "./externalSecrets.ee.store-CrWsoOud.js";
import "./uniqBy-BzmqL7ff.js";
import "./usePinnedData-CCqucAmS.js";
import "./nodeIcon-Ds2urgra.js";
import "./canvas.utils-CvVSnQ0m.js";
import "./nodeCreator.store-C2UqsdLp.js";
import "./useCanvasOperations-CFi33sXy.js";
import "./folders.store-Bnz4VSvn.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-CBwc-iaM.js";
import "./useRunWorkflow-B0KEqKb4.js";
import "./pushConnection.store-nZyQCWus.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BXDMbc4k.js";
import "./dateFormatter-BlYfq1NR.js";
import "./useExecutionHelpers-Bo6m_kB1.js";
import "./KeyboardShortcutTooltip-BEFQOjMt.js";
import "./useKeybindings-C0Dj-Pn9.js";
import "./useLogsTreeExpand-UIbVVd5c.js";
import { t as LogsPanel_default } from "./LogsPanel-YahaEASZ.js";
import "./AnimatedSpinner-B14F4UpF.js";
import "./ChatFile-BG-ZKNtd.js";
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

import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-COg3e4iR.js";
import "./src-4Li-ik4N.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-CQGw0kft.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CT-YZ9bK.js";
import "./merge-CTN8nyh-.js";
import "./_baseOrderBy-E6t6L7ha.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCFM_e-O.js";
import "./useClipboard-D7CZakAl.js";
import "./executions.store-DiGKvlH1.js";
import "./assistant.store-D9CiEtDd.js";
import "./chatPanel.store-BEDJvQzM.js";
import "./RunData-Bt8nvp2T.js";
import "./NDVEmptyState-QPmuhDIc.js";
import "./externalSecrets.ee.store-nuIRmJuF.js";
import "./uniqBy-CSzsExG8.js";
import "./usePinnedData-CMuKyoXX.js";
import "./nodeIcon-Bd0uYPU6.js";
import "./canvas.utils-DnKYOV4z.js";
import "./nodeCreator.store-DrCayKcm.js";
import "./useCanvasOperations-BYo3XOB-.js";
import "./folders.store-p27SoyU9.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-C31urYh1.js";
import "./useRunWorkflow-DOF5357Q.js";
import "./pushConnection.store-WDQG9Gb-.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-EDTRmS6s.js";
import "./dateFormatter-CElzffQb.js";
import "./useExecutionHelpers-D3cuo_03.js";
import "./KeyboardShortcutTooltip-fze3uGV2.js";
import "./useKeybindings-CNRAe8iL.js";
import "./useLogsTreeExpand-Bnw_2lBw.js";
import { t as LogsPanel_default } from "./LogsPanel-iIyzpQ__.js";
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

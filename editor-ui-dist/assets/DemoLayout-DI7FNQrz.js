import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DhtZe8m7.js";
import { Oi as useRoute } from "./src-YlGrrRzd.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-9FuVvOZm.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Tc as WorkflowIdKey } from "./constants-aHH2jIHR.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-B_jkD7Ds.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CHJGvtdO.js";
import "./useClipboard-BlIIV_YG.js";
import "./executions.store-DG98TmfZ.js";
import "./assistant.store-BCyS-VA9.js";
import "./chatPanel.store-DAE6tObJ.js";
import "./RunData-nC3ezZ5i.js";
import "./NDVEmptyState-QRDUUJMS.js";
import "./useEnvFeatureFlag-DKH44jQh.js";
import "./externalSecrets.ee.store-C0Zu7mVn.js";
import "./uniqBy-BKkVo6cE.js";
import "./usePinnedData-agI83Ird.js";
import "./nodeIcon-CaaSXgH5.js";
import "./canvas.utils-CRaczIF0.js";
import "./nodeCreator.store-HLfh0SHP.js";
import "./useCanvasOperations-DfKmVdSp.js";
import "./folders.store-Bk5vq3bk.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-BR3YCm5s.js";
import "./useRunWorkflow-DmKWYJ1K.js";
import "./pushConnection.store-D-eAV_8X.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-uHxDpP1Z.js";
import "./dateFormatter-j0tG5TGq.js";
import "./useExecutionHelpers-DB7T4OB2.js";
import "./KeyboardShortcutTooltip-io4bkSYG.js";
import "./useKeybindings-uj2qVW_4.js";
import "./useLogsTreeExpand-Dhl1RZ0L.js";
import { t as LogsPanel_default } from "./LogsPanel-Dcvix0ay.js";
import "./AnimatedSpinner-Cb_h9KnX.js";
import "./useResizablePanel-KMtw9vwo.js";
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

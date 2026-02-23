import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import { Ci as useRoute } from "./src-12jI_oWL.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-83LQdkMX.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Tc as WorkflowIdKey } from "./constants-B4E1u5vz.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-hkUbIXlT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DSYjQOnm.js";
import "./useClipboard-B_I1f666.js";
import "./executions.store-CAkKyRTs.js";
import "./assistant.store-CXYcpn2w.js";
import "./chatPanel.store-D3r4N4rq.js";
import "./RunData-C4xvXpdR.js";
import "./NDVEmptyState-CY1cukHh.js";
import "./useEnvFeatureFlag-BLZsME3h.js";
import "./externalSecrets.ee.store-BwkPzLfV.js";
import "./uniqBy-CieGWpfi.js";
import "./usePinnedData-8KazTd2Z.js";
import "./nodeIcon-kSr7r2xi.js";
import "./canvas.utils-DtXn1vXs.js";
import "./nodeCreator.store-CSDT-NxO.js";
import "./useCanvasOperations-D2Con9LA.js";
import "./folders.store-BrBcy4iT.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-Dvu5Z0M5.js";
import "./useRunWorkflow-DaBeoY_W.js";
import "./pushConnection.store-DumVNXRZ.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-RtquKe0R.js";
import "./dateFormatter-D2g3PkKx.js";
import "./useExecutionHelpers-BoqdewXF.js";
import "./KeyboardShortcutTooltip-C5bMa2iw.js";
import "./useKeybindings-B4rM4d7s.js";
import "./useLogsTreeExpand-BYZFe3C0.js";
import { t as LogsPanel_default } from "./LogsPanel-DyC6MTua.js";
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

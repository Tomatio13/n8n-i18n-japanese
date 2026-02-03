import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Chqi9vET.js";
import { bi as useRoute } from "./src-B_7PrR_B.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-uS_xAEOX.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { xc as WorkflowIdKey } from "./constants-CBTLcudZ.js";
import "./merge-Dmma2sos.js";
import "./_baseOrderBy-DsaU_Ltw.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-uyY_iAs4.js";
import "./useClipboard-DyOUPKgj.js";
import "./executions.store-b7ZFsK0T.js";
import "./assistant.store-v1YeIDp3.js";
import "./chatPanel.store-BGc5ZkTm.js";
import "./RunData-DK1Npvmn.js";
import "./NDVEmptyState-CBrYYMTP.js";
import "./useEnvFeatureFlag-Cb1bdQCe.js";
import "./externalSecrets.ee.store-DyC_GqxB.js";
import "./uniqBy-KrmwglcY.js";
import "./usePinnedData-DT3UhwZg.js";
import "./nodeIcon-BFMVNZUp.js";
import "./canvas.utils-Y52smqRi.js";
import "./nodeCreator.store-DOexCT-Z.js";
import "./useCanvasOperations-BQgil-1V.js";
import "./folders.store-Dn01TA8J.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-DAJJYNZk.js";
import "./useRunWorkflow-CXeHrLpH.js";
import "./pushConnection.store-CKFuEeOD.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BdmfU-3Y.js";
import "./dateFormatter-Bbvbt1Zw.js";
import "./useExecutionHelpers-Cw93kz2J.js";
import "./KeyboardShortcutTooltip-CG4bms-K.js";
import "./useKeybindings-DxWHl7f_.js";
import "./useLogsTreeExpand-DcqNA2gk.js";
import { t as LogsPanel_default } from "./LogsPanel-eMpTYyJc.js";
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

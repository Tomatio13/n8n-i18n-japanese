import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Ct6p3xKn.js";
import { yi as useRoute } from "./src-DuGormCI.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-BOsECLHo.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { xc as WorkflowIdKey } from "./constants-Bd1ZtBWa.js";
import "./merge-D4SF-xu2.js";
import "./_baseOrderBy-1mqBccLb.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-ClefIYI_.js";
import "./useClipboard-D-toU5nU.js";
import "./executions.store-C-5pwspm.js";
import "./assistant.store-8thxqxyU.js";
import "./chatPanel.store-P1iEPz7L.js";
import "./RunData-BAtgGasr.js";
import "./NDVEmptyState-DBm52Sch.js";
import "./useEnvFeatureFlag-DKKUbUq-.js";
import "./externalSecrets.ee.store-DwtnL8A-.js";
import "./uniqBy-BJE-J22c.js";
import "./usePinnedData-BWLAEMBc.js";
import "./nodeIcon-D6BYWQH9.js";
import "./canvas.utils-FegsdY8J.js";
import "./nodeCreator.store-NLAkgo_j.js";
import "./useCanvasOperations-DAWjiE_a.js";
import "./folders.store-C4ZFl9EK.js";
import "./RunDataHtml-CvDLCi8U.js";
import "./NodeIcon-CIRzh7WB.js";
import "./useRunWorkflow-DK_rbA_b.js";
import "./pushConnection.store-B61973eF.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BuQ2EM0q.js";
import "./dateFormatter-Daqtm6-m.js";
import "./useExecutionHelpers-Djyc0CuQ.js";
import "./KeyboardShortcutTooltip-BzJtBTqp.js";
import "./useKeybindings-D-cIgeGh.js";
import "./useLogsTreeExpand-DjcVTrue.js";
import { t as LogsPanel_default } from "./LogsPanel-Cg52ose-.js";
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

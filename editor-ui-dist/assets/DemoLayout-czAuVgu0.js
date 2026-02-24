import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Cn5DLdg7.js";
import { Ci as useRoute } from "./src-DQArgksh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-D-Hq9v-2.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import { Ec as WorkflowIdKey } from "./constants-CUlzSMjf.js";
import "./merge-hHzgyaGO.js";
import "./_baseOrderBy-DXX9_Q98.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DjgpP57e.js";
import "./useClipboard-C-5LML_H.js";
import "./executions.store-CHGI4d9p.js";
import "./assistant.store-CN-nbdtJ.js";
import "./chatPanel.store-CT8qCc9k.js";
import "./RunData-8_f84ZUK.js";
import "./NDVEmptyState-DklkhKx9.js";
import "./useEnvFeatureFlag-CFNYXHHQ.js";
import "./externalSecrets.ee.store-CXTWkE90.js";
import "./uniqBy-hzMBq7er.js";
import "./usePinnedData-CgC4_NqP.js";
import "./nodeIcon-BFSIunEy.js";
import "./canvas.utils-Bgf-15lF.js";
import "./nodeCreator.store-yOCzFK7h.js";
import "./useCanvasOperations-Ch6EriCm.js";
import "./folders.store-Yg9-DpcH.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./NodeIcon-BWQ87NjW.js";
import "./useRunWorkflow-DI8w9rWu.js";
import "./pushConnection.store-CMBXdKpg.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-nxwI5W6r.js";
import "./dateFormatter-C9Avww8j.js";
import "./useExecutionHelpers-jfFSn-hv.js";
import "./KeyboardShortcutTooltip-C6P8n4-r.js";
import "./useKeybindings-C00CXXIh.js";
import "./useLogsTreeExpand-G9qf0Eoa.js";
import { t as LogsPanel_default } from "./LogsPanel-Bdff6My2.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-BiuHKl3M.js";
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

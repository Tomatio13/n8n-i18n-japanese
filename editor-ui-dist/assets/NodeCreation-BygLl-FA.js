const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-BHlloxSb.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-DEMmv7aL.js","assets/preload-helper-CR0ecmWK.js","assets/icon-bktrs2EQ.js","assets/vue.runtime.esm-bundler-DDuXT-9r.js","assets/chunk-6z4oVpB-.js","assets/truncate-Zm7rqMgr.js","assets/_MapCache-CaP4mhI9.js","assets/sanitize-html-BuXr7o4T.js","assets/empty-BuGRxzl4.js","assets/path-browserify-DsmB_HMK.js","assets/en-BYTsM8fR.js","assets/src-B3UiHJ-Q.css","assets/nodeCreator.store-NDXvxWTK.js","assets/constants-yBDcqULv.js","assets/merge-BONzxfgw.js","assets/useTelemetry-DMMCGp2b.js","assets/dateformat-D7TIhVd4.js","assets/useDebounce-BDOVCaxX.js","assets/useExternalHooks-zp0_PYje.js","assets/templates.store-CPIqYFhQ.js","assets/cloudPlan.store-DVjbdiNL.js","assets/nodeIcon-iL6AFnZi.js","assets/exports-9spWG404.js","assets/useToast-C1ZpPbXg.js","assets/useCanvasOperations-ezw-xmOV.js","assets/useClipboard-Bo6m_x4c.js","assets/usePinnedData-CyQ835zq.js","assets/folders.store-BcQ6Wp6V.js","assets/executions.store-CQlrw6PV.js","assets/focusPanel.store-CSnLUdy8.js","assets/semver-DsJndgBW.js","assets/assistant.store-CRW9xRe7.js","assets/ItemsRenderer-D_u7YvJT.js","assets/useActions-C1rIlN5M.js","assets/NodeIcon-BBzZc2Cr.js","assets/NodeIcon-C-Ise6x6.css","assets/ItemsRenderer-B89wKDHQ.css","assets/chatPanel.store-kodFX1JM.js","assets/CommunityNodeUpdateInfo-CkLR1y8I.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-C-oYFkbs.css"])))=>i.map(i=>d[i]);
import { D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CaP4mhI9.js";
import { Nn as N8nButton_default, bt as N8nIconButton_default, ft as N8nTooltip_default, st as AskAssistantIcon_default } from "./src-DEMmv7aL.js";
import "./en-BYTsM8fR.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Zm7rqMgr.js";
import "./icon-bktrs2EQ.js";
import "./overlay-Dp9PTQlx.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-B0Giqa4b.js";
import { Li as useUIStore, t as useTelemetry, v as getMidCanvasPosition } from "./useTelemetry-DMMCGp2b.js";
import "./useToast-C1ZpPbXg.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Mt as DEFAULT_STICKY_HEIGHT, Nt as DEFAULT_STICKY_WIDTH, Ri as STICKY_NODE_TYPE, Rr as NODE_CREATOR_OPEN_SOURCES } from "./constants-yBDcqULv.js";
import "./merge-BONzxfgw.js";
import { i as useBuilderStore, t as useAssistantStore } from "./assistant.store-CRW9xRe7.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BDOVCaxX.js";
import "./useExternalHooks-zp0_PYje.js";
import { t as useChatPanelStore } from "./chatPanel.store-kodFX1JM.js";
import "./npsSurvey.store-B7_iNEDS.js";
import "./cloudPlan.store-DVjbdiNL.js";
import "./templates.store-CPIqYFhQ.js";
import { t as useFocusPanelStore } from "./focusPanel.store-CSnLUdy8.js";
import "./useWorkflowSaving-41NACxPy.js";
import "./useRunWorkflow-DOPS0LWf.js";
import "./executions.store-CQlrw6PV.js";
import "./usePinnedData-CyQ835zq.js";
import "./nodeCreator.store-NDXvxWTK.js";
import "./nodeIcon-iL6AFnZi.js";
import "./useClipboard-Bo6m_x4c.js";
import "./useCanvasOperations-ezw-xmOV.js";
import "./folders.store-BcQ6Wp6V.js";
import "./NodeIcon-BBzZc2Cr.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-CqWoJrGF.js";
import "./versions.store-BiGAlubj.js";
import "./usePageRedirectionHelper-UBkr_KXQ.js";
import "./dataTable.store-CqCrYCu5.js";
import "./useBugReporting-BQ-oFo-Y.js";
import "./uniqBy-aD1YpiVl.js";
import "./ProjectIcon-B42VbGbe.js";
import "./CredentialIcon-3qNhRpjE.js";
import "./FileSaver.min-D8bnhVIu.js";
import "./sortByProperty-qz-1s69w.js";
import "./useRecentResources-BSQkVw3h.js";
import { t as useActions } from "./useActions-C1rIlN5M.js";
import { t as useCommandBar } from "./useCommandBar-C20i3N2V.js";
import "./useWorkflowActivate-Fy78XZUn.js";
var NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreation",
	props: {
		nodeViewScale: {},
		createNodeActive: {
			type: Boolean,
			default: false
		},
		focusPanelActive: { type: Boolean }
	},
	emits: [
		"addNodes",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-BHlloxSb.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const { isEnabled: isCommandBarEnabled } = useCommandBar();
		const { getAddedNodesAndConnections } = useActions();
		function openNodeCreator() {
			emit("toggleNodeCreator", {
				source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
				createNodeActive: true
			});
		}
		function addStickyNote() {
			if (document.activeElement) document.activeElement.blur();
			const offset = [...uiStore.nodeViewOffsetPosition];
			const position = getMidCanvasPosition(props.nodeViewScale, offset);
			position[0] -= 240 / 2;
			position[1] -= 160 / 2;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function closeNodeCreator(hasAddedNodes = false) {
			if (props.createNodeActive) emit("toggleNodeCreator", {
				createNodeActive: false,
				hasAddedNodes
			});
			emit("close");
		}
		function nodeTypeSelected(value) {
			emit("addNodes", getAddedNodesAndConnections(value));
			closeNodeCreator(true);
		}
		function toggleFocusPanel() {
			focusPanelStore.toggleFocusPanel();
			telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
				source: "canvasButton",
				parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
			});
		}
		async function onAskAssistantButtonClick() {
			if (builderStore.isAIBuilderEnabled) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded
			});
		}
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!_ctx.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "plus",
						type: "tertiary",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 0,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "search",
						type: "tertiary",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						type: "tertiary",
						icon: "sticky-note",
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openFocusPanel"),
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						size: "large",
						icon: "panel-right",
						class: normalizeClass(_ctx.focusPanelActive ? _ctx.$style.activeButton : ""),
						active: _ctx.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["class", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "tertiary",
						size: "large",
						square: "",
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: _ctx.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_13o6j_123",
	icon: "_icon_13o6j_134",
	activeButton: "_activeButton_13o6j_143"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };

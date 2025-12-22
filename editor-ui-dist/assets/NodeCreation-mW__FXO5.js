const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-C8FpL1jo.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-D2eAHqUn.js","assets/preload-helper-CR0ecmWK.js","assets/truncate-CgrKzQs8.js","assets/_MapCache-C16tFX_5.js","assets/vue.runtime.esm-bundler-tP5dCd7J.js","assets/chunk-6z4oVpB-.js","assets/CalendarDate-zWqgZMlk.js","assets/sanitize-html-Cc45ZKm8.js","assets/empty-BuGRxzl4.js","assets/path-browserify-BtCDmZ3_.js","assets/en-CF30SCh2.js","assets/src-CWWagUhy.css","assets/nodeCreator.store-rXIBkQ9v.js","assets/constants-G5Vkztf0.js","assets/merge-Cct2Tso6.js","assets/builder.store-BLAleF9k.js","assets/_baseOrderBy-DWwx0cJy.js","assets/dateformat-CM9k0--B.js","assets/useDebounce-CA5UjP42.js","assets/nodeIcon-Ya_GSJ4X.js","assets/exports-hpMZaOPT.js","assets/useCanvasOperations-Cw4rD9nh.js","assets/useClipboard-DbIQKG0a.js","assets/usePinnedData-CBIw3DIN.js","assets/folders.store-DmFJZk7_.js","assets/executions.store-8vYg4w9J.js","assets/semver-axDZsr1X.js","assets/banners.store-CjHm60cC.js","assets/banners-UK5wWFEI.css","assets/assistant.store-DBrM6voM.js","assets/NodeIcon-CymdBTFw.js","assets/NodeIcon-BDxr0f30.css","assets/ItemsRenderer-BrRsX5oP.js","assets/useActions-pteDhovA.js","assets/ItemsRenderer-DkobJF9f.css","assets/chatPanel.store-C81u7qSL.js","assets/CommunityNodeUpdateInfo-kKGFLkZ9.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-OSIpRI6S.css"])))=>i.map(i=>d[i]);
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { vt as useI18n } from "./_MapCache-C16tFX_5.js";
import { Sn as N8nButton_default, ft as AskAssistantIcon_default, ht as N8nTooltip_default, xt as N8nIconButton_default } from "./src-D2eAHqUn.js";
import "./en-CF30SCh2.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-CgrKzQs8.js";
import { K as getMidCanvasPosition, O as useTelemetry, oa as useUIStore, r as useFocusPanelStore, t as useBuilderStore } from "./builder.store-BLAleF9k.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import { St as NODE_CREATOR_OPEN_SOURCES, U as DEFAULT_STICKY_HEIGHT, W as DEFAULT_STICKY_WIDTH, sr as STICKY_NODE_TYPE } from "./constants-G5Vkztf0.js";
import "./merge-Cct2Tso6.js";
import "./_baseOrderBy-DWwx0cJy.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-CA5UjP42.js";
import { t as useAssistantStore } from "./assistant.store-DBrM6voM.js";
import { t as useChatPanelStore } from "./chatPanel.store-C81u7qSL.js";
import "./retry-dP46utx2.js";
import "./executions.store-8vYg4w9J.js";
import "./useRunWorkflow-CIVBNJI-.js";
import "./usePinnedData-CBIw3DIN.js";
import "./nodeCreator.store-rXIBkQ9v.js";
import "./nodeIcon-Ya_GSJ4X.js";
import "./useClipboard-DbIQKG0a.js";
import "./useCanvasOperations-Cw4rD9nh.js";
import "./folders.store-DmFJZk7_.js";
import "./NodeIcon-CymdBTFw.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-ByrbuR6b.js";
import "./versions.store-BO0IztR2.js";
import "./usePageRedirectionHelper-Cur7hWre.js";
import "./dataTable.store-DQgRNY1o.js";
import { t as useCommandBar } from "./useCommandBar-DFimh03u.js";
import "./uniqBy-DpCjsa99.js";
import "./ProjectIcon-CxwfIaKg.js";
import "./CredentialIcon-gbYS7f2_.js";
import "./sortByProperty-CV1aCzkS.js";
import "./constants-DLTaaipl.js";
import "./useRecentResources-CkBQfmH3.js";
import { t as useActions } from "./useActions-pteDhovA.js";
import "./chat.store-BnYiJ-FU.js";
import "./fileUtils-D_SiS8no.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-C8FpL1jo.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])));
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

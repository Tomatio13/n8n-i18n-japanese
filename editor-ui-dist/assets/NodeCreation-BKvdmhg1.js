const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-BPMuhWds.js","assets/_plugin-vue_export-helper-CRUgzHrM.js","assets/chunk-CC9Q-vWm.js","assets/src-DkMzRRJg.js","assets/get-BhjKx_h8.js","assets/_MapCache-jyC_fKGz.js","assets/vue.runtime.esm-bundler-Bs4WIMNP.js","assets/CalendarDate-BSqfMJxT.js","assets/core-CJOCkybX.js","assets/sanitize-html-BaqGdh_E.js","assets/__vite-browser-external-DqWp3dHg.js","assets/en-tsO72ocl.js","assets/src-BtmEz3LD.css","assets/src-BCW48wog.js","assets/exports-DnBplKZy.js","assets/workflowDocument.store-CX7TViRg.js","assets/constants-5VeHwMFI.js","assets/merge-B_Vivo5r.js","assets/expression-runtime-stub-X9-C4MqC.js","assets/useRootStore-M4h-ssz5.js","assets/settings.store-B6Qnl8ES.js","assets/_baseOrderBy-Bhii9_xc.js","assets/useDebounce-DiVDqkKU.js","assets/useDocumentTitle-DOmopqHA.js","assets/users.store-Bsf8gJFS.js","assets/workflowsList.store-D0rASZPD.js","assets/dateformat-BcDx-k02.js","assets/canvas.eventBus-LkS-Ax9K.js","assets/_virtual_node-popularity-data-C8iI-4KM.js","assets/useExternalHooks-BYzMZQ2h.js","assets/nodeIcon-YTvb9rzU.js","assets/templates.store-il31D49n.js","assets/cloudPlan.store-C7R8gOB2.js","assets/utils-Di7mVkD9.js","assets/banners.store-By4sgY9g.js","assets/banners-CXsyom4e.css","assets/NodeIcon-CEVgyP4K.js","assets/NodeIcon-D6NjxeP8.css","assets/useAiGateway-BCE7iq91.js","assets/builder.store-B6AJRcGo.js","assets/useMessage-BvzNy6Rx.js","assets/overlay-CGpxYo2z.js","assets/useToast-CY2Cv363.js","assets/useStyles-KGrmo28r.js","assets/FileSaver.min-Bs2nEdoL.js","assets/dist-BG_JstLy.js","assets/useCodeDiff-F2RipTTv.js","assets/event-bus-DZhLDAGE.js","assets/useNodeHelpers-8RDc6x1Y.js","assets/useLoadingService-B6ZriRj3.js","assets/usePrivateCredentials-uTa21oYZ.js","assets/focusPanel.store-Cd-xS2-M.js","assets/useCalloutHelpers-qjTn0LHR.js","assets/usePinnedData-C4JKV0G9.js","assets/chatPanel.store-DPuUvQrS.js","assets/assistant.store-DUZYdD5L.js","assets/CommunityNodeUpdateInfo-BzF0ujKo.js","assets/semver-sqXC74a1.js","assets/communityNodes.store-DTfB6iEC.js","assets/CommunityNodeUpdateInfo-BKXtPPI4.css","assets/useQuickConnect-CZbHY3hh.js","assets/useCredentialOAuth-MvWsWfxm.js","assets/ContactAdministratorToInstall-DkoAtIwa.js","assets/useCanvasOperations-CfQonowv.js","assets/core-DZaWAmXN.js","assets/core-Dlqu9U4a.js","assets/xml-0N5lgmt8.js","assets/VueMarkdown-C_-twSOz.js","assets/executions.store-BL4i-bDk.js","assets/setupPanel.store-duMGuqtK.js","assets/templateTransforms-iuZDbPMc.js","assets/useCanvasOperations-BGIelHPw.css","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-C_uxiBN8.js","assets/shield-alt-DKZGJGhK.js","assets/NodeCreator-sYDcv9PQ.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as useI18n } from "./src-BCW48wog.js";
import { Ja as N8nButton_default, Oi as AskAssistantIcon_default, V as N8nPopover_default, Wi as N8nIconButton_default, zi as N8nTooltip_default } from "./src-DkMzRRJg.js";
import { d as __vitePreload } from "./get-BhjKx_h8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CRUgzHrM.js";
import { _t as NODE_CREATOR_OPEN_SOURCES, lr as STICKY_NODE_TYPE } from "./constants-5VeHwMFI.js";
import { Hr as getMidCanvasPosition, Pt as useWorkflowId } from "./workflowDocument.store-CX7TViRg.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-Bsf8gJFS.js";
import { t as useFocusPanelStore } from "./focusPanel.store-Cd-xS2-M.js";
import { t as useAssistantStore } from "./assistant.store-DUZYdD5L.js";
import { t as useChatPanelStore } from "./chatPanel.store-DPuUvQrS.js";
import { t as useSetupPanelStore } from "./setupPanel.store-duMGuqtK.js";
import { t as useEditorContext } from "./useEditorContext-nyeOItQn.js";
import { n as useInstanceAiEditorCapability } from "./useInstanceAiEditorCapability-CWWkuYsg.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BM2PAB8C.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-CN4FAB5b.js";
import { t as useActions } from "./useActions-C_uxiBN8.js";
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "node-creator-shortcut-coachmark__header" };
var _hoisted_2 = { class: "node-creator-shortcut-coachmark__title" };
var _hoisted_3 = { class: "node-creator-shortcut-coachmark__body" };
var _hoisted_4 = { class: "node-creator-shortcut-coachmark__footer" };
//#endregion
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue
var NodeCreatorShortcutCoachmark_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreatorShortcutCoachmark",
	props: { visible: { type: Boolean } },
	emits: ["dismiss"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: __props.visible,
				"show-arrow": true,
				"enable-scrolling": false,
				"suppress-auto-focus": true,
				side: "left",
				align: "center",
				"side-offset": 8,
				"z-index": 2200,
				"content-class": "node-creator-shortcut-coachmark"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				content: withCtx(() => [
					createBaseVNode("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.title")), 1)]),
					createBaseVNode("p", _hoisted_3, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.body")), 1),
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nButton_default), {
						size: "small",
						label: unref(i18n).baseText("nodeCreator.shortcutCoachmark.gotIt"),
						class: "node-creator-shortcut-coachmark__button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("dismiss"))
					}, null, 8, ["label"])])
				]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/views/NodeCreation.vue?vue&type=script&setup=true&lang.ts
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-BPMuhWds.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const chatPanelStore = useChatPanelStore();
		const workflowId = useWorkflowId();
		const { getAddedNodesAndConnections } = useActions();
		const { shouldShowCoachmark, onDismissCoachmark } = useNodeCreatorShortcutCoachmark();
		const sidePanelTooltip = computed(() => {
			if (setupPanelStore.isFeatureEnabled) return i18n.baseText("nodeView.openSidePanel");
			return i18n.baseText("nodeView.openFocusPanel");
		});
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
		const { aiAssistant, aiBuilder, instanceAi } = useEditorContext();
		const instanceAiCapability = useInstanceAiEditorCapability();
		async function onInstanceAiCanvasActionClick() {
			await instanceAiCapability.openWorkflow?.("canvas_action_button");
		}
		async function onAskAssistantButtonClick() {
			if (aiBuilder.value) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded,
				workflowId: workflowId.value
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
			return openBlock(), createElementBlock(Fragment, null, [!__props.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(NodeCreatorShortcutCoachmark_default, {
					visible: unref(shouldShowCoachmark),
					onDismiss: unref(onDismissCoachmark)
				}, {
					default: withCtx(() => [createVNode(KeyboardShortcutTooltip_default, {
						label: unref(i18n).baseText("nodeView.openNodesPanel"),
						shortcut: { keys: ["N"] },
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "subtle",
							size: "large",
							icon: "plus",
							"aria-label": unref(i18n).baseText("nodeView.openNodesPanel"),
							"data-test-id": "node-creator-plus-button",
							onClick: openNodeCreator
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"])]),
					_: 1
				}, 8, ["visible", "onDismiss"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "search",
						"aria-label": unref(i18n).baseText("nodeView.openCommandBar"),
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "sticky-note",
						"aria-label": unref(i18n).baseText("nodeView.addStickyHint"),
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: sidePanelTooltip.value,
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "panel-right",
						"aria-label": sidePanelTooltip.value,
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["aria-label", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).isEditableCanvasView && unref(instanceAi) && !!unref(instanceAiCapability).openWorkflow ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"icon-only": "",
					size: "large",
					"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
					class: normalizeClass({ [_ctx.$style.icon]: true }),
					"data-test-id": "instance-ai-canvas-action-button",
					onClick: onInstanceAiCanvasActionClick
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
					_: 1
				}, 8, ["aria-label", "class"])) : createCommentVNode("", true),
				unref(chatPanelStore).isEditableCanvasView && (unref(aiAssistant) || unref(aiBuilder)) && !unref(instanceAi) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						iconOnly: "",
						size: "large",
						"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["aria-label", "class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: __props.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_mt5fk_125",
	icon: "_icon_mt5fk_136"
};
var NodeCreation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeCreation_default as default };

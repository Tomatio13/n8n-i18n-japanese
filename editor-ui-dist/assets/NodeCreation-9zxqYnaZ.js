const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-BjvLkLDH.js","assets/rolldown-runtime-EITvVbkG.js","assets/vendor-zYfdu4Ed.js","assets/vendor-CB64RKTG.css","assets/app-BXv1VOvT.js","assets/app-dNJMURUy.css","assets/AgentPersonalisationIcon-oTN_1sE5.js","assets/AgentPersonalisationIcon-BBonwVeH.css","assets/CommunityNodeUpdateInfo-DpeNKxjb.js","assets/communityNodes.utils-CNYllCay.js","assets/CommunityNodeUpdateInfo-DpSWEC6d.css","assets/useActions-CoWM4OKh.js","assets/useInstallNode-wq_ybBM5.js","assets/ContactAdministratorToInstall-D-vbGu_D.js","assets/ContactAdministratorToInstall-Og65k0c9.css","assets/GatewayCreditsPromotion-BjDtyAFr.js","assets/GatewayCreditsPromotion-DS4daa6B.css","assets/verified-BEs6PvJl.js","assets/McpRegistrySuggestionFooter-CBobtWrU.js","assets/McpRegistrySuggestionFooter-D0P6EEwl.css","assets/useIntersectionObserver-C0UtYisv.js","assets/useIntersectionObserver-ByDQkaEW.js","assets/NodeCreator-CxGgIYcj.css"])))=>i.map(i=>d[i]);
import { Bd as createElementBlock, Gd as defineAsyncComponent, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Pd as Suspense, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, nf as nextTick, np as init_shared_esm_bundler, pf as renderSlot, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { $u as useFocusPanelStore, Cp as useWorkflowId, FM as __vitePreload, IS as useSettingsStore, Jr as useChatPanelStore, KA as N8nPopover_default, MM as N8nIcon_default, MS as useTelemetry, NM as _plugin_vue_export_helper_default, Nl as useNodeCreatorStore, Ny as isNodeCreatorOpenFromConnection, OM as N8nIconButton_default, Oh as getMidCanvasPosition, Oy as NODE_CREATOR_OPEN_SOURCES, SM as N8nTooltip_default, Vr as useInstanceAiEditorCapability, Yc as useSetupPanelStore, Yr as useAssistantStore, Zj as N8nButtonList_default, _d as useEditorContext, af as useNodeTypesStore, gg as useUIStore, kM as N8nButton_default, tn as KeyboardShortcutTooltip_default, ub as STICKY_NODE_TYPE, zM as useI18n } from "./app-BXv1VOvT.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-DZRvII4Y.js";
import { t as useActions } from "./useActions-CoWM4OKh.js";
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
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
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var NodeCreation_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		"addEmptyGroup",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-BjvLkLDH.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const chatPanelStore = useChatPanelStore();
		const workflowId = useWorkflowId();
		const settingsStore = useSettingsStore();
		const nodeCreatorStore = useNodeCreatorStore();
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
			position[0] -= 120;
			position[1] -= 80;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function addEmptyGroup() {
			if (document.activeElement) document.activeElement.blur();
			emit("addEmptyGroup", isNodeCreatorOpenFromConnection(nodeCreatorStore.openSource));
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
		function emptyGroupSelected() {
			addEmptyGroup();
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
			return openBlock(), createElementBlock(Fragment, null, [!__props.createNodeActive ? (openBlock(), createBlock(unref(N8nButtonList_default), {
				key: 0,
				orientation: "vertical",
				variant: "toolbar",
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, {
				default: withCtx(() => [
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
								variant: "ghost",
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
					!unref(settingsStore).isCanvasOnly ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
						key: 0,
						label: unref(i18n).baseText("nodeView.openCommandBar"),
						shortcut: {
							keys: ["k"],
							metaKey: true
						},
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							size: "large",
							icon: "search",
							"aria-label": unref(i18n).baseText("nodeView.openCommandBar"),
							"data-test-id": "command-bar-button",
							onClick: openCommandBar
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"])) : createCommentVNode("", true),
					!unref(nodeTypesStore).isNodeTypeUnavailable(unref("n8n-nodes-base.stickyNote")) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
						key: 1,
						label: unref(i18n).baseText("nodeView.addStickyHint"),
						shortcut: {
							keys: ["s"],
							shiftKey: true
						},
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							size: "large",
							icon: "sticky-note",
							"aria-label": unref(i18n).baseText("nodeView.addStickyHint"),
							"data-test-id": "add-sticky-button",
							onClick: addStickyNote
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"])) : createCommentVNode("", true),
					createVNode(KeyboardShortcutTooltip_default, {
						label: sidePanelTooltip.value,
						shortcut: {
							keys: ["f"],
							shiftKey: true
						},
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							size: "large",
							icon: "panel-right",
							"aria-label": sidePanelTooltip.value,
							active: __props.focusPanelActive,
							"data-test-id": "toggle-focus-panel-button",
							onClick: toggleFocusPanel
						}, null, 8, ["aria-label", "active"])]),
						_: 1
					}, 8, ["label"]),
					unref(chatPanelStore).isEditableCanvasView && unref(instanceAi) && !!unref(instanceAiCapability).openWorkflow ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						placement: "left",
						content: unref(i18n).baseText("aiAssistant.openInAssistant")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							size: "large",
							icon: "n8n-assistant",
							"aria-label": unref(i18n).baseText("aiAssistant.openInAssistant"),
							"data-test-id": "instance-ai-canvas-action-button",
							onClick: onInstanceAiCanvasActionClick
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true),
					unref(chatPanelStore).isEditableCanvasView && (unref(aiAssistant) || unref(aiBuilder)) && !unref(instanceAi) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						placement: "left"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							iconOnly: "",
							size: "large",
							"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
							class: normalizeClass(_ctx.$style.icon),
							"data-test-id": "ask-assistant-canvas-action-button",
							onClick: onAskAssistantButtonClick
						}, {
							default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
								icon: "n8n-assistant",
								size: 18
							})])]),
							_: 1
						}, 8, ["aria-label", "class"])]),
						_: 1
					})) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: __props.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onEmptyGroupSelected: emptyGroupSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
}), [["__cssModules", { "$style": {
	nodeButtonsWrapper: "_nodeButtonsWrapper_15mgv_1",
	icon: "_icon_15mgv_14"
} }]]);
//#endregion
export { NodeCreation_default as default };

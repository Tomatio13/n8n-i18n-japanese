import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as useI18n$1 } from "./useI18n-DgnxfwbU.js";
import { t as AssistantIcon_default } from "./AssistantIcon-Bev249bk.js";
import { L as AssistantText_default } from "./RunData-CY1dKXUr.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { A as useStorage } from "./dist-C4pFh3bs.js";
import { c as useForwardExpose, n as Primitive } from "./VisuallyHidden-RKvjG2uY.js";
import { a as DropdownMenuLabel_default, c as DropdownMenuRoot_default, i as DropdownMenuPortal_default, o as DropdownMenuItem_default, r as DropdownMenuTrigger_default, s as DropdownMenuContent_default, t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { o as useEditorContext, t as useBuilderStore } from "./builder.store-Doqbxxx1.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { Cn as useNDVStore, O as injectWorkflowDocumentStore, Pi as useExecutionDataStore, ji as createExecutionDataId, jn as useProjectsStore, pn as useWorkflowId, y as useWorkflowExecutionStateStore } from "./workflows.store-CW4k8Pkp.js";
import { t as MainHeader_default } from "./MainHeader-Cts0bKUu.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-8PnMHIm-.js";
import { t as BaseLayout_default } from "./BaseLayout-DV22UNmE.js";
import { Ha as v4 } from "./src-DVqjY0nx.js";
import { t as useSettingsStore } from "./settings.store-CWApP-Zs.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { Hi as LOCAL_STORAGE_FLOATING_CHAT_WINDOW, It as CHAT_TRIGGER_NODE_TYPE } from "./constants-BFgNRWjM.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-L91cqPL5.js";
import { t as useStyles } from "./useStyles-Dmn5t5ud.js";
import { t as PopOutWindowKey } from "./injectionKeys-rzNZrECH.js";
import { t as useClipboard } from "./useClipboard-Bh6NMnjs.js";
import { t as useAssistantStore } from "./assistant.store-BLuxOaxl.js";
import { t as useChatPanelStore } from "./chatPanel.store-Cf40f1zM.js";
import { t as InstanceAiEditorCapabilityKey } from "./useInstanceAiEditorCapability-CVdm8PQN.js";
import { t as usePushConnectionStore } from "./pushConnection.store-B8Zqm2b8.js";
import { h as INSTANCE_AI_SOURCE_QUERY, p as INSTANCE_AI_PROJECT_ID_QUERY, y as INSTANCE_AI_VIEW } from "./constants-DMeWsGm9.js";
import { n as useInstanceAiStore } from "./instanceAi.store-Do7APGd5.js";
import { E as useInstanceAiHandoff, i as buildInstanceAiCredentialQuestion, r as buildInstanceAiCredentialHandoffContext } from "./useInstanceAiHandoff-AZawTMGj.js";
import { t as useChatHubPanelStore } from "./chatHubPanel.store-DUnxM51t.js";
import { t as useChatStore } from "./chat.store-6UfhN0mX.js";
import { c as flattenModel, f as groupConversationsByDate } from "./chat.utils-KcSSv5ND.js";
import { t as LoadingView_default } from "./LoadingView-D7CgSmq4.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-BMAwPTX5.js";
import { t as AppSidebar_default } from "./AppSidebar-B5oXe7V9.js";
import { n as LogsPanel_default, r as usePopOutWindow } from "./useExecutionDebugging-B84icwGJ.js";
import { t as useWorkflowInitialization } from "./useWorkflowInitialization-CscYW7bu.js";
import { n as usePostMessageHandler } from "./usePostMessageHandler-s_wbEMOT.js";
import { i as useChatSession, n as ChatPrompt_default, r as ChatMessage_default, t as ChatGreetings_default } from "./ChatGreetings-BtBImjFQ.js";
import { t as useFileDrop } from "./useFileDrop-DPMtJnxN.js";
//#region ../@n8n/design-system/src/components/AskAssistantButton/AskAssistantButton.vue?vue&type=script&setup=true&lang.ts
var AskAssistantButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskAssistantButton",
	props: {
		unreadCount: {},
		type: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n$1();
		const hovering = ref(false);
		const props = __props;
		const emit = __emit;
		const onClick = (e) => emit("click", e);
		function onMouseEnter() {
			hovering.value = true;
		}
		function onMouseLeave() {
			hovering.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: normalizeClass(_ctx.$style.button),
				onMouseenter: onMouseEnter,
				onMouseleave: onMouseLeave,
				onClick
			}, [props.unreadCount ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.num)
			}, toDisplayString(props.unreadCount), 3)) : (openBlock(), createBlock(AssistantIcon_default, {
				key: 1,
				size: "large",
				theme: hovering.value ? "blank" : "default"
			}, null, 8, ["theme"])), withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("div", null, [createVNode(AssistantText_default, { text: __props.type === "builder" ? unref(t)("assistantChat.builder.name") : unref(t)("askAssistantButton.askAssistant") }, null, 8, ["text"])])], 2), [[vShow, hovering.value]])], 34);
		};
	}
});
var AskAssistantButton_vue_vue_type_style_index_0_lang_module_default = {
	button: "_button_1mxil_1",
	num: "_num_1mxil_21",
	text: "_text_1mxil_33"
};
//#endregion
//#region ../@n8n/design-system/src/components/AskAssistantButton/index.ts
var AskAssistantButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskAssistantButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskAssistantButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Menu/MenuGroup.js
var MenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "MenuGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuGroup.js
var DropdownMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuGroup_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/AskAssistantAvatar/AssistantAvatar.vue?vue&type=script&setup=true&lang.ts
var AssistantAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AssistantAvatar",
	props: { size: { default: "small" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, _ctx.$style[__props.size]]) }, [createVNode(AssistantIcon_default, {
				size: __props.size,
				theme: "blank"
			}, null, 8, ["size"])], 2);
		};
	}
});
var AssistantAvatar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1nxhd_1",
	small: "_small_1nxhd_9",
	mini: "_mini_1nxhd_14"
};
//#endregion
//#region ../@n8n/design-system/src/components/AskAssistantAvatar/index.ts
var AskAssistantAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AssistantAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AssistantAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nFloatingWindow/FloatingWindow.vue?vue&type=script&setup=true&lang.ts
var FloatingWindow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FloatingWindow",
	props: {
		width: { default: 560 },
		height: { default: 700 },
		minWidth: { default: 400 },
		minHeight: { default: 300 },
		initialPosition: { default: void 0 }
	},
	emits: [
		"close",
		"resize",
		"move",
		"header-double-click"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const x = ref(0);
		const y = ref(0);
		const currentWidth = ref(0);
		const currentHeight = ref(0);
		const isDragging = ref(false);
		let dragOffsetX = 0;
		let dragOffsetY = 0;
		const isResizing = ref(false);
		let resizeEdge = "s";
		let resizeStartX = 0;
		let resizeStartY = 0;
		let resizeStartPosX = 0;
		let resizeStartPosY = 0;
		let resizeStartWidth = 0;
		let resizeStartHeight = 0;
		const isInteracting = ref(false);
		function clampPosition(posX, posY, w, h) {
			const maxX = window.innerWidth - w;
			const maxY = window.innerHeight - h;
			return {
				x: Math.max(0, Math.min(posX, maxX)),
				y: Math.max(0, Math.min(posY, maxY))
			};
		}
		function centerInViewport() {
			const pos = clampPosition((window.innerWidth - currentWidth.value) / 2, (window.innerHeight - currentHeight.value) / 2, currentWidth.value, currentHeight.value);
			x.value = pos.x;
			y.value = pos.y;
		}
		function resetPosition(position, size) {
			currentWidth.value = size.width;
			currentHeight.value = size.height;
			const pos = clampPosition(position.x, position.y, currentWidth.value, currentHeight.value);
			x.value = pos.x;
			y.value = pos.y;
			emit("resize", {
				width: currentWidth.value,
				height: currentHeight.value
			});
			emit("move", {
				x: x.value,
				y: y.value
			});
		}
		function onHeaderDoubleClick() {
			emit("header-double-click");
		}
		function onHeaderMouseDown(event) {
			if (event.button !== 0) return;
			isDragging.value = true;
			isInteracting.value = true;
			dragOffsetX = event.clientX - x.value;
			dragOffsetY = event.clientY - y.value;
			document.addEventListener("mousemove", onDragMouseMove);
			document.addEventListener("mouseup", onDragMouseUp);
		}
		function onDragMouseMove(event) {
			if (!isDragging.value) return;
			const pos = clampPosition(event.clientX - dragOffsetX, event.clientY - dragOffsetY, currentWidth.value, currentHeight.value);
			x.value = pos.x;
			y.value = pos.y;
		}
		function onDragMouseUp() {
			isDragging.value = false;
			isInteracting.value = false;
			emit("move", {
				x: x.value,
				y: y.value
			});
			document.removeEventListener("mousemove", onDragMouseMove);
			document.removeEventListener("mouseup", onDragMouseUp);
		}
		function onResizeMouseDown(edge, event) {
			if (event.button !== 0) return;
			event.preventDefault();
			resizeEdge = edge;
			isResizing.value = true;
			isInteracting.value = true;
			resizeStartX = event.clientX;
			resizeStartY = event.clientY;
			resizeStartPosX = x.value;
			resizeStartPosY = y.value;
			resizeStartWidth = currentWidth.value;
			resizeStartHeight = currentHeight.value;
			document.addEventListener("mousemove", onResizeMouseMove);
			document.addEventListener("mouseup", onResizeMouseUp);
		}
		function onResizeMouseMove(event) {
			if (!isResizing.value) return;
			const dx = event.clientX - resizeStartX;
			const dy = event.clientY - resizeStartY;
			let newX = resizeStartPosX;
			let newY = resizeStartPosY;
			let newW = resizeStartWidth;
			let newH = resizeStartHeight;
			if (resizeEdge.includes("e")) newW = Math.max(props.minWidth, resizeStartWidth + dx);
			else if (resizeEdge.includes("w")) {
				const maxShrink = resizeStartWidth - props.minWidth;
				const clampedDx = Math.min(dx, maxShrink);
				newW = resizeStartWidth - clampedDx;
				newX = resizeStartPosX + clampedDx;
			}
			if (resizeEdge.includes("s")) newH = Math.max(props.minHeight, resizeStartHeight + dy);
			else if (resizeEdge === "n" || resizeEdge === "ne" || resizeEdge === "nw") {
				const maxShrink = resizeStartHeight - props.minHeight;
				const clampedDy = Math.min(dy, maxShrink);
				newH = resizeStartHeight - clampedDy;
				newY = resizeStartPosY + clampedDy;
			}
			if (newX < 0) {
				newW += newX;
				newX = 0;
			}
			if (newY < 0) {
				newH += newY;
				newY = 0;
			}
			if (newX + newW > window.innerWidth) newW = window.innerWidth - newX;
			if (newY + newH > window.innerHeight) newH = window.innerHeight - newY;
			newW = Math.max(props.minWidth, newW);
			newH = Math.max(props.minHeight, newH);
			x.value = newX;
			y.value = newY;
			currentWidth.value = newW;
			currentHeight.value = newH;
		}
		function onResizeMouseUp() {
			isResizing.value = false;
			isInteracting.value = false;
			emit("resize", {
				width: currentWidth.value,
				height: currentHeight.value
			});
			emit("move", {
				x: x.value,
				y: y.value
			});
			document.removeEventListener("mousemove", onResizeMouseMove);
			document.removeEventListener("mouseup", onResizeMouseUp);
		}
		onMounted(() => {
			currentWidth.value = props.width;
			currentHeight.value = props.height;
			if (props.initialPosition) {
				const pos = clampPosition(props.initialPosition.x, props.initialPosition.y, currentWidth.value, currentHeight.value);
				x.value = pos.x;
				y.value = pos.y;
			} else centerInViewport();
		});
		onBeforeUnmount(() => {
			document.removeEventListener("mousemove", onDragMouseMove);
			document.removeEventListener("mouseup", onDragMouseUp);
			document.removeEventListener("mousemove", onResizeMouseMove);
			document.removeEventListener("mouseup", onResizeMouseUp);
		});
		__expose({ resetPosition });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.floatingWindow, { [_ctx.$style.interacting]: isInteracting.value }]),
				style: normalizeStyle({
					width: `${currentWidth.value}px`,
					height: `${currentHeight.value}px`,
					minWidth: `${props.minWidth}px`,
					minHeight: `${props.minHeight}px`,
					top: `${y.value}px`,
					left: `${x.value}px`
				}),
				"data-test-id": "floating-window"
			}, [
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeN]),
					onMousedown: _cache[0] || (_cache[0] = ($event) => onResizeMouseDown("n", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeS]),
					onMousedown: _cache[1] || (_cache[1] = ($event) => onResizeMouseDown("s", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeE]),
					onMousedown: _cache[2] || (_cache[2] = ($event) => onResizeMouseDown("e", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeW]),
					onMousedown: _cache[3] || (_cache[3] = ($event) => onResizeMouseDown("w", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeNE]),
					onMousedown: _cache[4] || (_cache[4] = ($event) => onResizeMouseDown("ne", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeNW]),
					onMousedown: _cache[5] || (_cache[5] = ($event) => onResizeMouseDown("nw", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeSE]),
					onMousedown: _cache[6] || (_cache[6] = ($event) => onResizeMouseDown("se", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.resizeHandle, _ctx.$style.resizeSW]),
					onMousedown: _cache[7] || (_cache[7] = ($event) => onResizeMouseDown("sw", $event))
				}, null, 34),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.header),
					onMousedown: onHeaderMouseDown,
					onDblclick: onHeaderDoubleClick
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [renderSlot(_ctx.$slots, "header-icon"), renderSlot(_ctx.$slots, "header")], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.headerRight),
					onMousedown: _cache[9] || (_cache[9] = withModifiers(() => {}, ["stop"]))
				}, [renderSlot(_ctx.$slots, "header-actions"), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "medium",
					"aria-label": "Close",
					"data-test-id": "floating-window-close",
					onClick: _cache[8] || (_cache[8] = ($event) => emit("close"))
				})], 34)], 34),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)
			], 6);
		};
	}
});
var FloatingWindow_vue_vue_type_style_index_0_lang_module_default = {
	floatingWindow: "_floatingWindow_9usf5_1",
	interacting: "_interacting_9usf5_12",
	header: "_header_9usf5_16",
	headerLeft: "_headerLeft_9usf5_31",
	headerRight: "_headerRight_9usf5_38",
	content: "_content_9usf5_45",
	resizeHandle: "_resizeHandle_9usf5_50",
	resizeN: "_resizeN_9usf5_55",
	resizeS: "_resizeS_9usf5_63",
	resizeE: "_resizeE_9usf5_71",
	resizeW: "_resizeW_9usf5_79",
	resizeNE: "_resizeNE_9usf5_87",
	resizeNW: "_resizeNW_9usf5_95",
	resizeSE: "_resizeSE_9usf5_103",
	resizeSW: "_resizeSW_9usf5_111"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nFloatingWindow/index.ts
var N8nFloatingWindow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FloatingWindow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FloatingWindow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useLayoutProps.ts
function useLayoutProps() {
	const route = useRoute();
	return { layoutProps: computed(() => {
		return route.meta.layoutProps ?? {};
	}) };
}
//#endregion
//#region src/features/ai/assistant/components/Chat/AskAssistantFloatingButton.vue?vue&type=script&setup=true&lang.ts
var AskAssistantFloatingButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskAssistantFloatingButton",
	setup(__props) {
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const settingsStore = useSettingsStore();
		const workflowId = useWorkflowId();
		const i18n = useI18n();
		const { APP_Z_INDEXES } = useStyles();
		const { instanceAi } = useEditorContext();
		const lastUnread = computed(() => {
			const msg = assistantStore.lastUnread;
			if (msg?.type === "block") return msg.title;
			if (msg?.type === "text") return msg.content;
			if (msg?.type === "code-diff") return msg.description;
			return "";
		});
		const allowSendingParameterValues = computed(() => settingsStore.settings.ai.allowSendingParameterValues);
		const onClick = async () => {
			if (builderStore.isAIBuilderEnabled && allowSendingParameterValues.value) if (chatPanelStore.isOpen && chatPanelStore.isBuilderModeActive) chatPanelStore.close();
			else await chatPanelStore.open({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded,
				workflowId: workflowId.value
			});
		};
		return (_ctx, _cache) => {
			return !unref(instanceAi) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "ask-assistant-floating-button"
			}, [createVNode(unref(N8nTooltip_default), {
				"z-index": unref(APP_Z_INDEXES).ASK_ASSISTANT_FLOATING_BUTTON_TOOLTIP,
				placement: "top",
				visible: !!lastUnread.value,
				"popper-class": _ctx.$style.tooltip
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(lastUnread.value), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.assistant) }, [createVNode(unref(AskAssistantAvatar_default), { size: "mini" }), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("aiAssistant.name")), 1)], 2)]),
				default: withCtx(() => [createVNode(unref(AskAssistantButton_default), {
					"unread-count": unref(assistantStore).unreadCount,
					onClick
				}, null, 8, ["unread-count"])]),
				_: 1
			}, 8, [
				"z-index",
				"visible",
				"popper-class"
			])], 2)) : createCommentVNode("", true);
		};
	}
});
var AskAssistantFloatingButton_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_12pg9_1",
	tooltip: "_tooltip_12pg9_8",
	assistant: "_assistant_12pg9_14",
	text: "_text_12pg9_24"
};
var AskAssistantFloatingButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskAssistantFloatingButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskAssistantFloatingButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatSessionDropdown.vue?vue&type=script&setup=true&lang.ts
var CanvasChatSessionDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasChatSessionDropdown",
	props: {
		sessionId: {},
		sessionTitle: {},
		workflowId: {}
	},
	emits: ["select-session"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const chatStore = useChatStore();
		const popOutWindow = inject(PopOutWindowKey, ref());
		const isInPopOut = computed(() => !!popOutWindow.value);
		const portalTarget = computed(() => popOutWindow.value?.document.body);
		const isOpen = ref(false);
		const isLoading = ref(false);
		const hasFetchedForWorkflow = ref(false);
		const contentRef = ref(null);
		const workflowSessions = computed(() => {
			return (chatStore.sessions.ids ?? []).reduce((acc, id) => {
				const s = chatStore.sessions.byId[id];
				if (s && s.workflowId === props.workflowId && s.type === "manual") acc.push(s);
				return acc;
			}, []);
		});
		const groupedSessions = computed(() => groupConversationsByDate(workflowSessions.value));
		const hasNoSessions = computed(() => workflowSessions.value.length === 0 && !isLoading.value);
		async function handleOpenChange(open) {
			isOpen.value = open;
			if (open && !hasFetchedForWorkflow.value) {
				isLoading.value = true;
				try {
					await chatStore.fetchSessions(true, { type: "manual" });
					hasFetchedForWorkflow.value = true;
				} finally {
					isLoading.value = false;
				}
			}
		}
		function handleSelectSession(sessionId) {
			emit("select-session", sessionId);
			isOpen.value = false;
		}
		function formatSessionLabel(session) {
			return session.id;
		}
		watch(() => props.workflowId, () => {
			isOpen.value = false;
			hasFetchedForWorkflow.value = false;
		});
		watch(isOpen, (open, _oldValue, onCleanup) => {
			const target = portalTarget.value;
			if (!target || !open) return;
			const targetDoc = target.ownerDocument;
			if (!targetDoc || targetDoc === document) return;
			let handler;
			const timerId = setTimeout(() => {
				handler = (e) => {
					if ((contentRef.value?.$el)?.contains(e.target)) return;
					setTimeout(() => {
						if (isOpen.value) isOpen.value = false;
					}, 0);
				};
				targetDoc.addEventListener("pointerdown", handler);
			}, 0);
			onCleanup(() => {
				clearTimeout(timerId);
				if (handler) targetDoc.removeEventListener("pointerdown", handler);
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenuRoot_default), {
				modal: !isInPopOut.value,
				open: isOpen.value,
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), {
					class: normalizeClass([_ctx.$style.trigger, { [_ctx.$style.open]: isOpen.value }]),
					title: unref(i18n).baseText("chatHub.canvas.session.tooltip.sessionId", { interpolate: { sessionId: props.sessionId } }),
					"data-test-id": "canvas-chat-session-dropdown"
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.triggerText)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.sessionTitle), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: "small",
						class: normalizeClass(_ctx.$style.chevron)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["class", "title"]), createVNode(unref(DropdownMenuPortal_default), normalizeProps(guardReactiveProps(portalTarget.value ? { to: portalTarget.value } : {})), {
					default: withCtx(() => [createVNode(unref(DropdownMenuContent_default), {
						ref_key: "contentRef",
						ref: contentRef,
						class: normalizeClass(_ctx.$style.content),
						"side-offset": 4,
						align: "start",
						"avoid-collisions": true
					}, {
						default: withCtx(() => [isLoading.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.emptyState)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("…", -1)])]),
							_: 1
						})], 2)) : hasNoSessions.value ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.emptyState)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.canvas.session.noSessions")), 1)]),
							_: 1
						})], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(groupedSessions.value, (group) => {
							return openBlock(), createBlock(unref(DropdownMenuGroup_default), {
								key: group.group,
								class: normalizeClass(_ctx.$style.group)
							}, {
								default: withCtx(() => [createVNode(unref(DropdownMenuLabel_default), { class: normalizeClass(_ctx.$style.groupLabel) }, {
									default: withCtx(() => [createTextVNode(toDisplayString(group.group), 1)]),
									_: 2
								}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.sessions, (session) => {
									return openBlock(), createBlock(unref(DropdownMenuItem_default), {
										key: session.id,
										class: normalizeClass([_ctx.$style.sessionItem, { [_ctx.$style.active]: session.id === props.sessionId }]),
										onSelect: ($event) => handleSelectSession(session.id)
									}, {
										default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionTitle) }, toDisplayString(formatSessionLabel(session)), 3)]),
										_: 2
									}, 1032, ["class", "onSelect"]);
								}), 128))]),
								_: 2
							}, 1032, ["class"]);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 16)]),
				_: 1
			}, 8, ["modal", "open"]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatSessionDropdown.vue?vue&type=style&index=0&lang.module.scss
var trigger = "_trigger_13c04_266";
var triggerText = "_triggerText_13c04_282";
var chevron = "_chevron_13c04_288";
var open = "_open_13c04_292";
var content = "_content_13c04_296";
var popoverIn = "_popoverIn_13c04_1";
var emptyState = "_emptyState_13c04_332";
var group = "_group_13c04_337";
var groupLabel = "_groupLabel_13c04_341";
var sessionItem = "_sessionItem_13c04_349";
var active = "_active_13c04_367";
var sessionTitle = "_sessionTitle_13c04_371";
var shimmer = "_shimmer_13c04_1";
var spin = "_spin_13c04_1";
var opacityPulse = "_opacityPulse_13c04_1";
var fadeIn = "_fadeIn_13c04_1";
var collapsibleSlideDown = "_collapsibleSlideDown_13c04_1";
var collapsibleSlideUp = "_collapsibleSlideUp_13c04_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_13c04_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_13c04_1";
var blurSwapIn = "_blurSwapIn_13c04_1";
var blurSwapOut = "_blurSwapOut_13c04_1";
var pulseGlow = "_pulseGlow_13c04_1";
var pulseGlowDelayed = "_pulseGlowDelayed_13c04_1";
var fade = "_fade_13c04_1";
var fadeInUp = "_fadeInUp_13c04_1";
var fadeInDown = "_fadeInDown_13c04_1";
var fadeInLeft = "_fadeInLeft_13c04_1";
var fadeInRight = "_fadeInRight_13c04_1";
var fadeOut = "_fadeOut_13c04_1";
var fadeOutDown = "_fadeOutDown_13c04_1";
var fadeOutUp = "_fadeOutUp_13c04_1";
var fadeOutLeft = "_fadeOutLeft_13c04_1";
var fadeOutRight = "_fadeOutRight_13c04_1";
var ping = "_ping_13c04_1";
var blinkBackground = "_blinkBackground_13c04_1";
var typingBlink = "_typingBlink_13c04_1";
var CanvasChatSessionDropdown_vue_vue_type_style_index_0_lang_module_default = {
	trigger,
	triggerText,
	chevron,
	open,
	content,
	popoverIn,
	emptyState,
	group,
	groupLabel,
	sessionItem,
	active,
	sessionTitle,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_13c04_1",
	opacityPulse,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var CanvasChatSessionDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasChatSessionDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasChatSessionDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatHubPanel.vue?vue&type=script&setup=true&lang.ts
var CanvasChatHubPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasChatHubPanel",
	props: { floating: {
		type: Boolean,
		default: false
	} },
	emits: ["close", "pop-out"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const chatStore = useChatStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const chatHubPanelStore = useChatHubPanelStore();
		const telemetry = useTelemetry();
		const clipboard = useClipboard();
		const toast = useToast();
		const canPopOut = computed(() => window.parent === window);
		const isPoppedOut = computed(() => chatHubPanelStore.isPoppedOut);
		const sessionId = ref(v4());
		const editingMessageId = ref();
		const inputRef = useTemplateRef("inputRef");
		const scrollableRef = useTemplateRef("scrollable");
		const allNodes = computed(() => workflowDocumentStore?.value?.allNodes ?? []);
		const chatTriggerNode = computed(() => allNodes.value.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE));
		const agentDisplayName = computed(() => {
			const triggerName = chatTriggerNode.value?.parameters?.agentName;
			if (typeof triggerName === "string" && triggerName.trim()) return triggerName.trim();
			return workflowDocumentStore?.value?.name || "Workflow";
		});
		const workflowAgent = computed(() => {
			const workflowId = workflowDocumentStore.value.workflowId;
			if (!workflowId) return null;
			const params = chatTriggerNode.value?.parameters;
			const agentIcon = params?.agentIcon;
			const agent = chatStore.getAgent({
				provider: "n8n",
				workflowId
			}, {
				name: agentDisplayName.value,
				icon: agentIcon ?? null
			});
			const options = params?.options;
			const agentDescription = params?.agentDescription;
			const description = typeof agentDescription === "string" && agentDescription.trim() ? agentDescription.trim() : null;
			const suggestedPrompts = (params?.suggestedPrompts)?.prompts?.filter((p) => typeof p.text === "string" && p.text.trim().length > 0).map((p) => ({
				text: p.text,
				...p.icon ? { icon: p.icon } : {}
			}));
			return {
				...agent,
				...description !== null ? { description } : {},
				...suggestedPrompts?.length ? { suggestedPrompts } : {},
				...options ? { metadata: {
					...agent.metadata,
					allowFileUploads: options.allowFileUploads === true,
					allowedFilesMimeTypes: typeof options.allowedFilesMimeTypes === "string" ? options.allowedFilesMimeTypes : agent.metadata.allowedFilesMimeTypes
				} } : {}
			};
		});
		const { chatMessages, isResponding, isNewSession, messagingState, arrivedState, scrollToBottom, loadSession } = useChatSession({
			sessionId,
			scrollableRef
		});
		const canAcceptFiles = computed(() => workflowAgent.value?.metadata.allowFileUploads ?? false);
		function onFilesDropped(files) {
			inputRef.value?.addAttachments(files);
		}
		const fileDrop = useFileDrop(canAcceptFiles, onFilesDropped);
		const sessionIdText = computed(() => i18n.baseText("chat.window.session.id", { interpolate: { id: `${sessionId.value.slice(0, 5)}...` } }));
		async function copySessionId() {
			await clipboard.copy(sessionId.value);
			toast.showMessage({
				title: i18n.baseText("generic.copiedToClipboard"),
				message: "",
				type: "success"
			});
		}
		function handleNewSession() {
			telemetry.track("User clicked new chat button", { source: "canvas" });
			sessionId.value = v4();
		}
		async function handleSelectSession(selectedSessionId) {
			sessionId.value = selectedSessionId;
			try {
				await loadSession(selectedSessionId);
			} catch {
				sessionId.value = v4();
			}
		}
		watch(() => workflowDocumentStore.value.workflowId, () => {
			sessionId.value = v4();
		});
		async function onSubmit(message, attachments) {
			if (!message.trim() || isResponding.value || !workflowAgent.value) return;
			await chatStore.sendMessage(sessionId.value, message, workflowAgent.value, {}, attachments, workflowDocumentStore.value.workflowId);
			inputRef.value?.reset();
		}
		async function onStop() {
			await chatStore.stopStreamingMessage(sessionId.value);
		}
		async function handleRegenerateMessage(message) {
			if (isResponding.value || message.type !== "ai" || !workflowAgent.value) return;
			editingMessageId.value = void 0;
			await chatStore.regenerateMessage(sessionId.value, message.id, workflowAgent.value, {}, workflowDocumentStore.value.workflowId);
		}
		function handleStartEditMessage(messageId) {
			editingMessageId.value = messageId;
		}
		function handleCancelEditMessage() {
			editingMessageId.value = void 0;
		}
		async function handleEditMessage(content, keptAttachmentIndices, newFiles) {
			if (!editingMessageId.value || isResponding.value || !workflowAgent.value) return;
			await chatStore.editMessage(sessionId.value, editingMessageId.value, content, workflowAgent.value, {}, keptAttachmentIndices, newFiles, workflowDocumentStore.value.workflowId);
			editingMessageId.value = void 0;
		}
		function handleSelectPrompt(prompt) {
			if (workflowAgent.value) telemetry.track("User clicked chat hub suggested prompt", {
				...flattenModel(workflowAgent.value.model),
				source: "canvas"
			});
			inputRef.value?.setText(prompt);
			inputRef.value?.focus();
		}
		function focusInput() {
			inputRef.value?.focus();
		}
		__expose({
			focusInput,
			sessionId,
			sessionIdText,
			handleNewSession,
			handleSelectSession,
			copySessionId
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.panel, {
					[_ctx.$style.poppedOut]: isPoppedOut.value,
					[_ctx.$style.floating]: props.floating,
					[_ctx.$style.isDraggingFile]: unref(fileDrop).isDragging.value
				}]),
				onDragenter: _cache[3] || (_cache[3] = (...args) => unref(fileDrop).handleDragEnter && unref(fileDrop).handleDragEnter(...args)),
				onDragleave: _cache[4] || (_cache[4] = (...args) => unref(fileDrop).handleDragLeave && unref(fileDrop).handleDragLeave(...args)),
				onDragover: _cache[5] || (_cache[5] = (...args) => unref(fileDrop).handleDragOver && unref(fileDrop).handleDragOver(...args)),
				onDrop: _cache[6] || (_cache[6] = (...args) => unref(fileDrop).handleDrop && unref(fileDrop).handleDrop(...args)),
				onPaste: _cache[7] || (_cache[7] = (...args) => unref(fileDrop).handlePaste && unref(fileDrop).handlePaste(...args))
			}, [
				unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropOverlay)
				}, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.dropOverlay")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				!props.floating ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.header)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [
					createVNode(ChatAgentAvatar_default, {
						agent: workflowAgent.value,
						size: "sm"
					}, null, 8, ["agent"]),
					createVNode(unref(N8nText_default), {
						size: "medium",
						bold: true,
						class: normalizeClass(_ctx.$style.headerTitleText)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(agentDisplayName.value), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.previewBadge) }, toDisplayString(unref(i18n).baseText("chatHub.canvas.previewBadge")), 3)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [
					createVNode(CanvasChatSessionDropdown_default, {
						"session-id": sessionId.value,
						"session-title": sessionIdText.value,
						"workflow-id": unref(workflowDocumentStore).workflowId,
						onSelectSession: handleSelectSession
					}, null, 8, [
						"session-id",
						"session-title",
						"workflow-id"
					]),
					createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
						content: withCtx(() => [
							createTextVNode(toDisplayString(sessionId.value) + " ", 1),
							_cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("chat.window.session.id.copy")), 1)
						]),
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "copy",
							variant: "ghost",
							size: "small",
							"data-test-id": "canvas-chat-session-id",
							onClick: copySessionId
						})]),
						_: 1
					}),
					createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chat.window.session.resetSession")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "undo-2",
							variant: "ghost",
							size: "small",
							"data-test-id": "canvas-chat-hub-new-session",
							onClick: handleNewSession
						})]),
						_: 1
					}),
					canPopOut.value && !isPoppedOut.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "bottom"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.panel.actions.popOut")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "external-link",
							variant: "ghost",
							size: "small",
							"data-test-id": "canvas-chat-hub-pop-out",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("pop-out"))
						})]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "small",
						"data-test-id": "canvas-chat-hub-close",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
					})
				], 2)], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nScrollArea_default), {
					type: "scroll",
					"enable-vertical-scroll": true,
					"enable-horizontal-scroll": false,
					"as-child": "",
					class: normalizeClass(_ctx.$style.scrollArea)
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						ref: "scrollable",
						class: normalizeClass({
							[_ctx.$style.scrollable]: true,
							[_ctx.$style.isNewSession]: unref(isNewSession)
						})
					}, [unref(isNewSession) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.greetingsWrapper)
					}, [createVNode(ChatGreetings_default, {
						"selected-agent": workflowAgent.value,
						onSelectPrompt: handleSelectPrompt
					}, null, 8, ["selected-agent"])], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						role: "log",
						"aria-live": "polite",
						class: normalizeClass(_ctx.$style.messageList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chatMessages), (message) => {
						return openBlock(), createBlock(ChatMessage_default, {
							key: message.id,
							message,
							compact: false,
							"is-editing": editingMessageId.value === message.id,
							"is-edit-submitting": unref(chatStore).streaming?.revisionOfMessageId === message.id,
							"has-session-streaming": unref(isResponding),
							"cached-agent-display-name": workflowAgent.value?.name ?? null,
							"cached-agent-icon": workflowAgent.value?.icon ?? null,
							"accepted-mime-types": workflowAgent.value?.metadata.allowedFilesMimeTypes ?? "",
							onStartEdit: ($event) => handleStartEditMessage(message.id),
							onCancelEdit: handleCancelEditMessage,
							onUpdate: handleEditMessage,
							onRegenerate: handleRegenerateMessage
						}, null, 8, [
							"message",
							"is-editing",
							"is-edit-submitting",
							"has-session-streaming",
							"cached-agent-display-name",
							"cached-agent-icon",
							"accepted-mime-types",
							"onStartEdit"
						]);
					}), 128))], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.promptContainer) }, [!unref(arrivedState).bottom && !unref(isNewSession) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "subtle",
						icon: "arrow-down",
						class: normalizeClass(_ctx.$style.scrollToBottomButton),
						title: unref(i18n).baseText("chatHub.chat.scrollToBottom"),
						onClick: _cache[2] || (_cache[2] = ($event) => unref(scrollToBottom)(true))
					}, null, 8, ["class", "title"])) : createCommentVNode("", true), createVNode(ChatPrompt_default, {
						ref_key: "inputRef",
						ref: inputRef,
						class: normalizeClass(_ctx.$style.prompt),
						"selected-model": workflowAgent.value,
						"checked-tool-ids": [],
						"messaging-state": unref(messagingState),
						"is-tools-selectable": false,
						"is-new-session": unref(isNewSession),
						"show-credits-claimed-callout": false,
						"show-dynamic-credentials-missing-callout": false,
						compact: props.floating,
						"accepted-mime-types": workflowAgent.value?.metadata.allowedFilesMimeTypes ?? "",
						placeholder: unref(i18n).baseText("chatHub.chat.prompt.placeholder.sendPreview"),
						"ai-credits-quota": "0",
						onSubmit,
						onStop
					}, null, 8, [
						"class",
						"selected-model",
						"messaging-state",
						"is-new-session",
						"compact",
						"accepted-mime-types",
						"placeholder"
					])], 2)], 2)]),
					_: 1
				}, 8, ["class"])
			], 34);
		};
	}
});
var CanvasChatHubPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1v99q_1",
	poppedOut: "_poppedOut_1v99q_9",
	floating: "_floating_1v99q_12",
	header: "_header_1v99q_17",
	headerTitle: "_headerTitle_1v99q_28",
	headerTitleText: "_headerTitleText_1v99q_35",
	headerActions: "_headerActions_1v99q_41",
	previewBadge: "_previewBadge_1v99q_49",
	scrollArea: "_scrollArea_1v99q_60",
	scrollable: "_scrollable_1v99q_65",
	isNewSession: "_isNewSession_1v99q_74",
	promptContainer: "_promptContainer_1v99q_77",
	prompt: "_prompt_1v99q_77",
	greetingsWrapper: "_greetingsWrapper_1v99q_84",
	messageList: "_messageList_1v99q_91",
	scrollToBottomButton: "_scrollToBottomButton_1v99q_117",
	isDraggingFile: "_isDraggingFile_1v99q_125",
	dropOverlay: "_dropOverlay_1v99q_129"
};
var CanvasChatHubPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasChatHubPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasChatHubPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatFloatingMenu.vue
var CanvasChatFloatingMenu_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasChatFloatingMenu",
	props: {
		sessionId: {},
		workflowId: {},
		canPopOut: { type: Boolean }
	},
	emits: [
		"select-session",
		"copy-session-id",
		"new-session",
		"pop-out"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const chatStore = useChatStore();
		const popOutWindow = inject(PopOutWindowKey, ref());
		const isInPopOut = computed(() => !!popOutWindow.value);
		const portalTarget = computed(() => popOutWindow.value?.document.body);
		const isLoading = ref(false);
		const hasFetchedForWorkflow = ref(false);
		const workflowSessions = computed(() => {
			return (chatStore.sessions.ids ?? []).reduce((acc, id) => {
				const s = chatStore.sessions.byId[id];
				if (s && s.workflowId === props.workflowId && s.type === "manual") acc.push(s);
				return acc;
			}, []);
		});
		const sessionChildren = computed(() => {
			const grouped = groupConversationsByDate(workflowSessions.value);
			if (grouped.length === 0 && !isLoading.value) return [{
				id: "__no-sessions__",
				label: i18n.baseText("chatHub.canvas.session.noSessions"),
				disabled: true
			}];
			const items = [];
			for (let i = 0; i < grouped.length; i++) {
				const group = grouped[i];
				items.push({
					id: `__group-${i}__`,
					label: group.group,
					disabled: true,
					divided: i > 0
				});
				for (const session of group.sessions) items.push({
					id: session.id,
					label: session.id,
					checked: session.id === props.sessionId
				});
			}
			return items;
		});
		const menuItems = computed(() => {
			const items = [
				{
					id: "sessions",
					label: i18n.baseText("chatHub.canvas.menu.sessions"),
					icon: {
						type: "icon",
						value: "history"
					},
					children: sessionChildren.value,
					loading: isLoading.value
				},
				{
					id: "copy-session-id",
					label: i18n.baseText("chatHub.canvas.menu.copySessionId"),
					icon: {
						type: "icon",
						value: "copy"
					},
					divided: true
				},
				{
					id: "new-session",
					label: i18n.baseText("chatHub.canvas.menu.newSession"),
					icon: {
						type: "icon",
						value: "undo-2"
					}
				}
			];
			if (props.canPopOut) items.push({
				id: "pop-out",
				label: i18n.baseText("chatHub.canvas.menu.popOut"),
				icon: {
					type: "icon",
					value: "external-link"
				}
			});
			return items;
		});
		async function handleSubMenuToggle(itemId, open) {
			if (itemId === "sessions" && open && !hasFetchedForWorkflow.value) {
				hasFetchedForWorkflow.value = true;
				isLoading.value = true;
				try {
					await chatStore.fetchSessions(true, { type: "manual" });
				} finally {
					isLoading.value = false;
				}
			}
		}
		function handleSelect(value) {
			switch (value) {
				case "copy-session-id":
					emit("copy-session-id");
					break;
				case "new-session":
					emit("new-session");
					break;
				case "pop-out":
					setTimeout(() => {
						document.activeElement?.blur?.();
						emit("pop-out");
					});
					break;
				default:
					if (value !== "__no-sessions__") emit("select-session", value);
					break;
			}
		}
		watch(() => props.workflowId, () => {
			hasFetchedForWorkflow.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				"portal-target": portalTarget.value,
				modal: !isInPopOut.value,
				placement: "bottom-end",
				"data-test-id": "canvas-chat-floating-menu",
				onSelect: handleSelect,
				"onSubmenu:toggle": handleSubMenuToggle
			}, null, 8, [
				"items",
				"portal-target",
				"modal"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatFloatingWindow.vue?vue&type=script&setup=true&lang.ts
var CANVAS_MARGIN = 16;
var CHAT_HUB_DEFAULT_WIDTH = 560;
var CHAT_HUB_DEFAULT_HEIGHT = 700;
var CanvasChatFloatingWindow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasChatFloatingWindow",
	emits: ["close", "pop-out"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const chatHubPanelStore = useChatHubPanelStore();
		const isPoppedOut = computed(() => chatHubPanelStore.isPoppedOut);
		const canvasChatHubRef = ref();
		const floatingWindowRef = useTemplateRef("floatingWindowRef");
		const canPopOut = computed(() => window.parent === window);
		const floatingWindowState = useStorage(LOCAL_STORAGE_FLOATING_CHAT_WINDOW, {});
		function getCanvasOrigin() {
			const canvasEl = document.getElementById("canvas");
			if (canvasEl) {
				const rect = canvasEl.getBoundingClientRect();
				return {
					x: rect.left,
					y: rect.top
				};
			}
			return {
				x: 0,
				y: 0
			};
		}
		const floatingWindowPosition = computed(() => {
			if (floatingWindowState.value.x !== void 0 && floatingWindowState.value.y !== void 0) return {
				x: floatingWindowState.value.x,
				y: floatingWindowState.value.y
			};
			const origin = getCanvasOrigin();
			return {
				x: origin.x + CANVAS_MARGIN,
				y: origin.y + CANVAS_MARGIN
			};
		});
		const floatingWindowWidth = computed(() => floatingWindowState.value.width ?? CHAT_HUB_DEFAULT_WIDTH);
		const floatingWindowHeight = computed(() => floatingWindowState.value.height ?? CHAT_HUB_DEFAULT_HEIGHT);
		function onFloatingWindowMove(pos) {
			floatingWindowState.value = {
				...floatingWindowState.value,
				x: pos.x,
				y: pos.y
			};
		}
		function onFloatingWindowResize(size) {
			floatingWindowState.value = {
				...floatingWindowState.value,
				width: size.width,
				height: size.height
			};
		}
		function onResetPosition() {
			if (isPoppedOut.value) return;
			floatingWindowState.value = {};
			const origin = getCanvasOrigin();
			floatingWindowRef.value?.resetPosition({
				x: origin.x + CANVAS_MARGIN,
				y: origin.y + CANVAS_MARGIN
			}, {
				width: CHAT_HUB_DEFAULT_WIDTH,
				height: CHAT_HUB_DEFAULT_HEIGHT
			});
		}
		watch(() => canvasChatHubRef.value, async (ref) => {
			if (ref) {
				await nextTick();
				ref.focusInput();
			}
		});
		function focusInput() {
			canvasChatHubRef.value?.focusInput();
		}
		__expose({
			focusInput,
			canvasChatHubRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nFloatingWindow_default), {
				ref_key: "floatingWindowRef",
				ref: floatingWindowRef,
				width: floatingWindowWidth.value,
				height: floatingWindowHeight.value,
				"min-width": 400,
				"min-height": 300,
				"initial-position": floatingWindowPosition.value,
				class: normalizeClass({ [_ctx.$style.poppedOut]: isPoppedOut.value }),
				"data-test-id": "canvas-chat-floating-window",
				onClose: _cache[5] || (_cache[5] = ($event) => emit("close")),
				onMove: onFloatingWindowMove,
				onResize: onFloatingWindowResize,
				onHeaderDoubleClick: onResetPosition
			}, {
				"header-icon": withCtx(() => [createVNode(ChatAgentAvatar_default, {
					agent: null,
					size: "sm"
				})]),
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "medium",
					bold: true,
					class: normalizeClass(_ctx.$style.headerTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.canvas.floatingTitle")), 1)]),
					_: 1
				}, 8, ["class"])]),
				"header-actions": withCtx(() => [canvasChatHubRef.value?.sessionId ? (openBlock(), createBlock(CanvasChatFloatingMenu_default, {
					key: 0,
					"session-id": canvasChatHubRef.value.sessionId,
					"workflow-id": unref(workflowDocumentStore).workflowId,
					"can-pop-out": canPopOut.value && !isPoppedOut.value,
					onSelectSession: canvasChatHubRef.value.handleSelectSession,
					onCopySessionId: _cache[0] || (_cache[0] = ($event) => canvasChatHubRef.value.copySessionId()),
					onNewSession: _cache[1] || (_cache[1] = ($event) => canvasChatHubRef.value.handleNewSession()),
					onPopOut: _cache[2] || (_cache[2] = ($event) => emit("pop-out"))
				}, null, 8, [
					"session-id",
					"workflow-id",
					"can-pop-out",
					"onSelectSession"
				])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(CanvasChatHubPanel_default, {
					ref_key: "canvasChatHubRef",
					ref: canvasChatHubRef,
					floating: true,
					onClose: _cache[3] || (_cache[3] = ($event) => emit("close")),
					onPopOut: _cache[4] || (_cache[4] = ($event) => emit("pop-out"))
				}, null, 512)]),
				_: 1
			}, 8, [
				"width",
				"height",
				"initial-position",
				"class"
			]);
		};
	}
});
var CanvasChatFloatingWindow_vue_vue_type_style_index_0_lang_module_default = {
	headerTitle: "_headerTitle_1pkqr_1",
	poppedOut: "_poppedOut_1pkqr_7"
};
var CanvasChatFloatingWindow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasChatFloatingWindow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasChatFloatingWindow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CanvasChatOverlay.vue?vue&type=script&setup=true&lang.ts
var CanvasChatOverlay_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CanvasChatOverlay",
	setup(__props, { expose: __expose }) {
		const route = useRoute();
		const chatHubPanelStore = useChatHubPanelStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const canvasChatFloatingWindowRef = ref();
		const popOutContainer = useTemplateRef("popOutContainer");
		const popOutContent = useTemplateRef("popOutContent");
		const isPoppedOut = computed(() => chatHubPanelStore.isPoppedOut);
		const isVisible = computed(() => chatHubPanelStore.isOpen);
		const hasBeenOpened = ref(false);
		watch(isVisible, (val) => {
			if (val) {
				hasBeenOpened.value = true;
				nextTick(() => {
					canvasChatFloatingWindowRef.value?.focusInput();
				});
			}
		}, { immediate: true });
		usePopOutWindow({
			title: computed(() => `Chat - ${workflowDocumentStore.value.name || "Workflow"}`),
			initialWidth: 560,
			initialHeight: 700,
			container: popOutContainer,
			content: popOutContent,
			shouldPopOut: computed(() => isPoppedOut.value && chatHubPanelStore.isOpen),
			onRequestClose: () => {
				chatHubPanelStore.close();
			}
		});
		watch(() => route.meta.nodeView, (isNodeView) => {
			if (!isNodeView && isPoppedOut.value) chatHubPanelStore.close();
		});
		function onClose() {
			chatHubPanelStore.close();
		}
		function onPopOut() {
			chatHubPanelStore.popOut();
		}
		function focusInput() {
			canvasChatFloatingWindowRef.value?.focusInput();
		}
		__expose({ focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "popOutContainer",
				ref: popOutContainer,
				class: normalizeClass(_ctx.$style.popOutContainer)
			}, [createBaseVNode("div", {
				ref_key: "popOutContent",
				ref: popOutContent,
				class: normalizeClass([_ctx.$style.popOutContent, { [_ctx.$style.poppedOut]: isPoppedOut.value }])
			}, [hasBeenOpened.value ? withDirectives((openBlock(), createBlock(CanvasChatFloatingWindow_default, {
				key: 0,
				ref_key: "canvasChatFloatingWindowRef",
				ref: canvasChatFloatingWindowRef,
				onClose,
				onPopOut
			}, null, 512)), [[vShow, isVisible.value]]) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var CanvasChatOverlay_vue_vue_type_style_index_0_lang_module_default = {
	popOutContainer: "_popOutContainer_oga57_1",
	popOutContent: "_popOutContent_oga57_5",
	poppedOut: "_poppedOut_oga57_8"
};
var CanvasChatOverlay_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasChatOverlay_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasChatOverlay_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiHandoffCapability.ts
/**
* The standalone editor's `InstanceAiEditorCapability` (behavior; visibility is the
* `instanceAi` `EditorFeature`). `openWorkflow` hands the current workflow (+ shown
* execution) to Instance AI in the same tab — an unsaved canvas falls back to home.
* `openCredential` opens a new tab with just the credential question. Provide the
* result from an editor host (e.g. `WorkflowLayout`).
*/
function useInstanceAiHandoffCapability() {
	const instanceAiStore = useInstanceAiStore();
	const documentStore = injectWorkflowDocumentStore();
	const workflowsListStore = useWorkflowsListStore();
	const projectsStore = useProjectsStore();
	const route = useRoute();
	const router = useRouter();
	const telemetry = useTelemetry();
	const { startThread, openWorkflowThread } = useInstanceAiHandoff();
	/**
	* The execution currently shown in the editor: the debug route's execution,
	* a live/just-finished run, or the displayed past run — in that order.
	*/
	function resolveEditorExecutionId() {
		const routeExecutionId = route.params.executionId;
		if (typeof routeExecutionId === "string" && routeExecutionId !== "") return routeExecutionId;
		const executionState = useWorkflowExecutionStateStore(documentStore.value.documentId);
		if (typeof executionState.activeExecutionId === "string") return executionState.activeExecutionId;
		if (typeof executionState.displayedExecutionId === "string") return executionState.displayedExecutionId;
	}
	/**
	* `initializeWorkspaceForNewWorkflow` seeds homeProject from the current project, so
	* this holds for an unsaved canvas too. Sharing-unlicensed instances omit homeProject
	* from the workflow response, so fall back to the personal project (their only one).
	*/
	function resolveEditorProjectId() {
		return documentStore.value.homeProject?.id ?? projectsStore.personalProject?.id;
	}
	/**
	* Whether the editor's workflow exists on the backend — a new workflow has a
	* temporary id before it's saved, so the id alone isn't enough.
	*/
	function persistedWorkflow() {
		const workflowId = documentStore.value.workflowId;
		const projectId = resolveEditorProjectId();
		return !!workflowId && !!workflowsListStore.getWorkflowById(workflowId)?.id && workflowId && projectId ? {
			workflowId,
			projectId
		} : null;
	}
	/**
	* Hand the editor's (persisted) workflow off to a new thread: attach it (+ the
	* shown execution), seed both for the artifact, and — when there is a real
	* ask (failed execution) — send `message` as the opening turn. A plain hand-
	* off opens the thread without an LLM greeting; the workflow rides the user's
	* first prompt.
	*/
	async function handOffWorkflow(message, source, workflowId, projectId, newTab = false) {
		const doc = documentStore.value;
		const executionId = resolveEditorExecutionId();
		const attachment = {
			type: "workflow",
			id: workflowId,
			name: doc.name || void 0,
			...executionId ? { executionId } : {}
		};
		const executionSnapshot = executionId ? useExecutionDataStore(createExecutionDataId(executionId)).getExecutionSnapshot() : null;
		const executionFailed = executionSnapshot?.status === "error" || executionSnapshot?.status === "crashed";
		const openingMessage = message || (executionFailed ? "The execution failed. Look into what went wrong and help me fix it." : "");
		const ndvStore = useNDVStore(documentStore.value.documentId);
		if (ndvStore.activeNode) {
			ndvStore.unsetActiveNodeName();
			await nextTick();
		}
		const prepare = (threadId) => {
			instanceAiStore.getOrCreateRuntime(threadId, projectId).setPendingHandoff({
				workflowId,
				workflow: doc.getSnapshot(),
				execution: executionSnapshot?.workflowId === workflowId ? executionSnapshot : void 0
			});
		};
		const launch = {
			source,
			origin: "internal",
			sourceContext: {
				workflowId,
				...executionId ? { executionId } : {}
			}
		};
		if (openingMessage) await startThread(projectId, openingMessage, {
			kind: "prefill",
			prefillType: "handoff_execution_error"
		}, launch, [attachment], prepare, { newTab });
		else await openWorkflowThread(projectId, attachment, launch, prepare);
		telemetry.track("Instance AI opened from editor", {
			source,
			workflow_id: workflowId,
			execution_id: executionId ?? null
		});
	}
	async function openWorkflow(source) {
		const persisted = persistedWorkflow();
		if (!persisted) {
			const projectId = resolveEditorProjectId();
			telemetry.track("Instance AI opened from editor", {
				source,
				workflow_id: null,
				execution_id: null
			});
			await router.push({
				name: INSTANCE_AI_VIEW,
				query: {
					[INSTANCE_AI_SOURCE_QUERY]: source,
					...projectId ? { [INSTANCE_AI_PROJECT_ID_QUERY]: projectId } : {}
				}
			});
			return;
		}
		await handOffWorkflow("", source, persisted.workflowId, persisted.projectId);
	}
	async function openCredential(credential, source) {
		const question = buildInstanceAiCredentialQuestion(credential);
		const projectId = resolveEditorProjectId();
		if (!projectId) {
			await router.push({
				name: INSTANCE_AI_VIEW,
				query: { [INSTANCE_AI_SOURCE_QUERY]: source }
			});
			return false;
		}
		await startThread(projectId, question, {
			kind: "prefill",
			prefillType: "handoff_credential_setup"
		}, {
			source,
			origin: "internal"
		}, void 0, void 0, {
			newTab: true,
			context: buildInstanceAiCredentialHandoffContext(credential)
		});
		telemetry.track("Instance AI opened from editor", {
			source,
			workflow_id: null,
			execution_id: null
		});
		return false;
	}
	return {
		openWorkflow,
		openCredential
	};
}
//#endregion
//#region src/app/components/app/AppHeader.vue
var AppHeader_default = /* @__PURE__ */ defineComponent({
	__name: "AppHeader",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MainHeader_default);
		};
	}
});
//#endregion
//#region src/app/layouts/WorkflowLayout.vue
var WorkflowLayout_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowLayout",
	setup(__props) {
		const { layoutProps } = useLayoutProps();
		const assistantStore = useAssistantStore();
		const chatHubPanelStore = useChatHubPanelStore();
		const pushConnectionStore = usePushConnectionStore();
		const isCanvasOnly = useSettingsStore().isCanvasOnly;
		const { isLoading, workflowId, currentWorkflowDocumentStore, isOnboardingRoute, isDebugRoute, initializeData, initializeWorkflow, handleDebugModeRoute, cleanup } = useWorkflowInitialization();
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({ currentWorkflowDocumentStore });
		provide(InstanceAiEditorCapabilityKey, useInstanceAiHandoffCapability());
		onMounted(async () => {
			pushConnectionStore.pushConnect();
			setupPostMessages();
			await initializeData();
			await initializeWorkflow();
		});
		watch(workflowId, async (newId, oldId) => {
			if (newId !== oldId && newId) await initializeWorkflow(true);
		}, { flush: "post" });
		watch(isDebugRoute, async (isDebug, wasDebug) => {
			if (isDebug && !wasDebug && !isLoading.value) await handleDebugModeRoute();
		}, { flush: "post" });
		onBeforeUnmount(() => {
			pushConnectionStore.pushDisconnect();
			cleanupPostMessages();
			cleanup();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, createSlots({
				header: withCtx(() => [createVNode(AppHeader_default)]),
				default: withCtx(() => [unref(isLoading) || !unref(currentWorkflowDocumentStore) && !unref(isOnboardingRoute) ? (openBlock(), createBlock(LoadingView_default, { key: 0 })) : (openBlock(), createBlock(_component_RouterView, { key: 1 }))]),
				_: 2
			}, [
				!unref(isCanvasOnly) ? {
					name: "sidebar",
					fn: withCtx(() => [createVNode(AppSidebar_default)]),
					key: "0"
				} : void 0,
				unref(layoutProps).logs ? {
					name: "footer",
					fn: withCtx(() => [createVNode(LogsPanel_default)]),
					key: "1"
				} : void 0,
				!unref(isCanvasOnly) ? {
					name: "overlays",
					fn: withCtx(() => [unref(assistantStore).isFloatingButtonShown ? (openBlock(), createBlock(AskAssistantFloatingButton_default, { key: 0 })) : createCommentVNode("", true), unref(chatHubPanelStore).isFloatingChatEnabled ? (openBlock(), createBlock(CanvasChatOverlay_default, { key: 1 })) : createCommentVNode("", true)]),
					key: "2"
				} : void 0
			]), 1024);
		};
	}
});
//#endregion
export { WorkflowLayout_default as default };

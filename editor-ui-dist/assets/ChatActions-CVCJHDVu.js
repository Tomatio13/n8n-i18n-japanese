import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, Vt as toRef, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, n as Transition, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-Btya3Jb4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-CClPzxgq.js";
import { t as N8nIcon_default } from "./N8nIcon-CgWQM0v1.js";
import { t as N8nIconButton_default } from "./N8nIconButton-lwlzJlc2.js";
import { O as useSpeechSynthesis, d as useClipboard } from "./dist-DHr3MfZO.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DD_DX1R3.js";
//#region ../@n8n/design-system/src/components/N8nChatActions/ChatActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var COPY_FEEDBACK_DURATION_MS = 2e3;
var ChatActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nChatActions",
	__name: "ChatActions",
	props: {
		showRating: {
			type: Boolean,
			default: false
		},
		onRating: {},
		content: {},
		showCopy: {
			type: Boolean,
			default: true
		},
		copyLabel: {},
		copyTestId: {},
		onCopy: {},
		showReadAloud: {
			type: Boolean,
			default: true
		},
		readAloudLabel: {},
		stopReadingLabel: {},
		readAloudTestId: {},
		onReadAloud: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const props = __props;
		const clipboard = useClipboard({ legacy: true });
		const showCopiedFeedback = ref(false);
		const showRatingButtons = ref(true);
		const showRatingSuccess = ref(false);
		let copyFeedbackTimer;
		const speech = useSpeechSynthesis(toRef(props, "content"), {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const wasStoppedByUser = ref(false);
		const isReadingAloud = speech.isPlaying;
		const canReadAloud = computed(function getCanReadAloud() {
			return props.showReadAloud && speech.isSupported.value;
		});
		const readAloudActionLabel = computed(function getReadAloudActionLabel() {
			return isReadingAloud.value ? props.stopReadingLabel ?? t("assistantChat.stopReading") : props.readAloudLabel ?? t("assistantChat.readAloud");
		});
		async function copyMessage() {
			try {
				await clipboard.copy(props.content);
				props.onCopy?.({
					text: props.content,
					status: "success"
				});
				showCopiedFeedback.value = true;
				clearTimeout(copyFeedbackTimer);
				copyFeedbackTimer = setTimeout(function hideCopiedFeedback() {
					showCopiedFeedback.value = false;
				}, COPY_FEEDBACK_DURATION_MS);
			} catch {
				props.onCopy?.({
					text: props.content,
					status: "error"
				});
			}
		}
		function rateMessage(rating) {
			showRatingButtons.value = false;
			props.onRating?.({ rating });
			showRatingSuccess.value = true;
		}
		function readMessageAloud() {
			if (isReadingAloud.value) {
				wasStoppedByUser.value = true;
				speech.stop();
				props.onReadAloud?.({
					text: props.content,
					status: "stopped"
				});
				return;
			}
			wasStoppedByUser.value = false;
			speech.speak();
			props.onReadAloud?.({
				text: props.content,
				status: "started"
			});
		}
		watch(function getSpeechStatus() {
			return speech.status.value;
		}, function reportCompletedSpeech(status) {
			if (status === "end" && !wasStoppedByUser.value) props.onReadAloud?.({
				text: props.content,
				status: "ended"
			});
		});
		watch(function getContent() {
			return props.content;
		}, function stopChangedContent() {
			if (isReadingAloud.value) speech.stop();
		});
		onBeforeUnmount(function cleanUpActions() {
			clearTimeout(copyFeedbackTimer);
			if (isReadingAloud.value) speech.stop();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				role: "group",
				"aria-label": unref(t)("assistantChat.messageActions")
			}, [
				__props.showCopy ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: showCopiedFeedback.value ? unref(t)("assistantChat.copied") : __props.copyLabel ?? unref(t)("assistantChat.copy"),
					placement: "bottom"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"icon-only": "",
						"aria-label": showCopiedFeedback.value ? unref(t)("assistantChat.copied") : __props.copyLabel ?? unref(t)("assistantChat.copy"),
						"data-test-id": __props.copyTestId,
						onClick: copyMessage
					}, {
						icon: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconSwap) }, [createVNode(Transition, {
							"enter-active-class": _ctx.$style.swapEnterActive,
							"leave-active-class": _ctx.$style.swapLeaveActive
						}, {
							default: withCtx(() => [showCopiedFeedback.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: "check",
								icon: "check",
								size: "medium"
							})) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: "copy",
								icon: "copy",
								size: "medium"
							}))]),
							_: 1
						}, 8, ["enter-active-class", "leave-active-class"])], 2)]),
						_: 1
					}, 8, ["aria-label", "data-test-id"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				canReadAloud.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: readAloudActionLabel.value,
					placement: "bottom"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: unref(isReadingAloud) ? "volume-x" : "volume-2",
						variant: "ghost",
						size: "small",
						"icon-size": "medium",
						"aria-label": readAloudActionLabel.value,
						"aria-pressed": unref(isReadingAloud),
						"data-test-id": __props.readAloudTestId,
						onClick: readMessageAloud
					}, null, 8, [
						"icon",
						"aria-label",
						"aria-pressed",
						"data-test-id"
					])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				__props.showRating && showRatingButtons.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					content: unref(t)("assistantChat.rating.thumbsUp"),
					placement: "bottom"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						size: "small",
						icon: "thumbs-up",
						"icon-size": "medium",
						"aria-label": unref(t)("assistantChat.rating.thumbsUp"),
						"data-test-id": "message-thumbs-up-button",
						onClick: _cache[0] || (_cache[0] = ($event) => rateMessage("up"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				__props.showRating && showRatingButtons.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					content: unref(t)("assistantChat.rating.thumbsDown"),
					placement: "bottom"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						size: "small",
						icon: "thumbs-down",
						"icon-size": "medium",
						"aria-label": unref(t)("assistantChat.rating.thumbsDown"),
						"data-test-id": "message-thumbs-down-button",
						onClick: _cache[1] || (_cache[1] = ($event) => rateMessage("down"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				showRatingSuccess.value ? (openBlock(), createElementBlock("p", {
					key: 4,
					class: normalizeClass(_ctx.$style.success)
				}, toDisplayString(unref(t)("assistantChat.rating.success")), 3)) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default")
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nChatActions/ChatActions.vue?vue&type=style&index=0&lang.module.scss
var actions = "_actions_jhsp0_266";
var iconSwap = "_iconSwap_jhsp0_272";
var swapEnterActive = "_swapEnterActive_jhsp0_280";
var blurSwapIn = "_blurSwapIn_jhsp0_1";
var swapLeaveActive = "_swapLeaveActive_jhsp0_289";
var blurSwapOut = "_blurSwapOut_jhsp0_1";
var success = "_success_jhsp0_299";
var shimmer = "_shimmer_jhsp0_1";
var spin = "_spin_jhsp0_1";
var opacityPulse = "_opacityPulse_jhsp0_1";
var popoverIn = "_popoverIn_jhsp0_1";
var fadeIn = "_fadeIn_jhsp0_1";
var collapsibleSlideDown = "_collapsibleSlideDown_jhsp0_1";
var collapsibleSlideUp = "_collapsibleSlideUp_jhsp0_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_jhsp0_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_jhsp0_1";
var pulseGlow = "_pulseGlow_jhsp0_1";
var pulseGlowDelayed = "_pulseGlowDelayed_jhsp0_1";
var fade = "_fade_jhsp0_1";
var fadeInUp = "_fadeInUp_jhsp0_1";
var fadeInDown = "_fadeInDown_jhsp0_1";
var fadeInLeft = "_fadeInLeft_jhsp0_1";
var fadeInRight = "_fadeInRight_jhsp0_1";
var fadeOut = "_fadeOut_jhsp0_1";
var fadeOutDown = "_fadeOutDown_jhsp0_1";
var fadeOutUp = "_fadeOutUp_jhsp0_1";
var fadeOutLeft = "_fadeOutLeft_jhsp0_1";
var fadeOutRight = "_fadeOutRight_jhsp0_1";
var ping = "_ping_jhsp0_1";
var blinkBackground = "_blinkBackground_jhsp0_1";
var typingBlink = "_typingBlink_jhsp0_1";
var ChatActions_vue_vue_type_style_index_0_lang_module_default = {
	actions,
	iconSwap,
	swapEnterActive,
	blurSwapIn,
	swapLeaveActive,
	blurSwapOut,
	success,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_jhsp0_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
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
var ChatActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatActions_default as t };

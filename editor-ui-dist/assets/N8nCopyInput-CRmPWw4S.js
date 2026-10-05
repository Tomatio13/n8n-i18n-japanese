import { $ as openBlock, C as createBaseVNode, Gt as unref, It as ref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, n as Transition, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-DgnxfwbU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { d as useClipboard } from "./dist-C4pFh3bs.js";
import { t as Input_default } from "./Input-DZHU7J3z.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
//#region ../@n8n/design-system/src/components/N8nCopyInput/CopyInput.vue?vue&type=script&setup=true&lang.ts
var CopyInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCopyInput",
	__name: "CopyInput",
	props: {
		value: {},
		displayValue: { default: void 0 },
		size: { default: "large" },
		copyLabel: { default: void 0 },
		copiedLabel: { default: void 0 },
		feedbackDurationMs: { default: 2e3 }
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { t } = useI18n();
		const emit = __emit;
		const clipboard = useClipboard({ legacy: true });
		const showCopiedFeedback = ref(false);
		let feedbackTimer;
		onBeforeUnmount(() => clearTimeout(feedbackTimer));
		async function onCopyClick() {
			await clipboard.copy(props.value);
			emit("copy", props.value);
			showCopiedFeedback.value = true;
			clearTimeout(feedbackTimer);
			feedbackTimer = setTimeout(() => {
				showCopiedFeedback.value = false;
			}, props.feedbackDurationMs);
		}
		const buttonSize = computed(() => {
			switch (props.size) {
				case "mini":
				case "small": return "small";
				case "large":
				case "xlarge": return "large";
				default: return "medium";
			}
		});
		const copyButtonLabel = computed(() => showCopiedFeedback.value ? props.copiedLabel ?? t("generic.copiedToClipboard") : props.copyLabel ?? t("generic.copy"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Input_default), {
				"model-value": __props.displayValue ?? __props.value,
				size: __props.size,
				readonly: "",
				class: normalizeClass(_ctx.$style.copyInput)
			}, {
				append: withCtx(() => [createVNode(unref(N8nTooltip_default), { content: copyButtonLabel.value }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						size: buttonSize.value,
						icon: "copy",
						"aria-label": copyButtonLabel.value,
						"data-test-id": "copy-input-button",
						class: normalizeClass(_ctx.$style.button),
						onClick: onCopyClick
					}, {
						icon: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconSwap) }, [createVNode(Transition, {
							"enter-active-class": _ctx.$style.swapEnterActive,
							"leave-active-class": _ctx.$style.swapLeaveActive
						}, {
							default: withCtx(() => [showCopiedFeedback.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: "check",
								icon: "check",
								size: buttonSize.value
							}, null, 8, ["size"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: "copy",
								icon: "copy",
								size: buttonSize.value
							}, null, 8, ["size"]))]),
							_: 1
						}, 8, ["enter-active-class", "leave-active-class"])], 2)]),
						_: 1
					}, 8, [
						"size",
						"aria-label",
						"class"
					])]),
					_: 1
				}, 8, ["content"])]),
				_: 1
			}, 8, [
				"model-value",
				"size",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCopyInput/CopyInput.vue?vue&type=style&index=0&lang.module.scss
var copyInput = "_copyInput_mwrim_269";
var disabled = "_disabled_mwrim_283";
var button = "_button_mwrim_293";
var iconSwap = "_iconSwap_mwrim_305";
var swapEnterActive = "_swapEnterActive_mwrim_313";
var blurSwapIn = "_blurSwapIn_mwrim_1";
var swapLeaveActive = "_swapLeaveActive_mwrim_322";
var blurSwapOut = "_blurSwapOut_mwrim_1";
var shimmer = "_shimmer_mwrim_1";
var spin = "_spin_mwrim_1";
var opacityPulse = "_opacityPulse_mwrim_1";
var popoverIn = "_popoverIn_mwrim_1";
var fadeIn = "_fadeIn_mwrim_1";
var collapsibleSlideDown = "_collapsibleSlideDown_mwrim_1";
var collapsibleSlideUp = "_collapsibleSlideUp_mwrim_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_mwrim_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_mwrim_1";
var pulseGlow = "_pulseGlow_mwrim_1";
var pulseGlowDelayed = "_pulseGlowDelayed_mwrim_1";
var fade = "_fade_mwrim_1";
var fadeInUp = "_fadeInUp_mwrim_1";
var fadeInDown = "_fadeInDown_mwrim_1";
var fadeInLeft = "_fadeInLeft_mwrim_1";
var fadeInRight = "_fadeInRight_mwrim_1";
var fadeOut = "_fadeOut_mwrim_1";
var fadeOutDown = "_fadeOutDown_mwrim_1";
var fadeOutUp = "_fadeOutUp_mwrim_1";
var fadeOutLeft = "_fadeOutLeft_mwrim_1";
var fadeOutRight = "_fadeOutRight_mwrim_1";
var ping = "_ping_mwrim_1";
var blinkBackground = "_blinkBackground_mwrim_1";
var typingBlink = "_typingBlink_mwrim_1";
var CopyInput_vue_vue_type_style_index_0_lang_module_default = {
	copyInput,
	disabled,
	button,
	iconSwap,
	swapEnterActive,
	blurSwapIn,
	swapLeaveActive,
	blurSwapOut,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_mwrim_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nCopyInput/index.ts
var N8nCopyInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCopyInput_default as t };

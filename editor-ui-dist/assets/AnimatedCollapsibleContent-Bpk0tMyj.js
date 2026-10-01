import { $ as openBlock, Gt as unref, N as defineComponent, bt as withCtx, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { n as CollapsibleContent_default } from "./CollapsibleTrigger-BW0-2suh.js";
//#region ../@n8n/design-system/src/components/N8nAnimatedCollapsibleContent/AnimatedCollapsibleContent.vue?vue&type=script&setup=true&lang.ts
/**
* When set, the height slide is paired with an opacity fade and a subtle blur
* that mimics motion blur — the same motion as N8nSettingsRow's expand region.
*/
var AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AnimatedCollapsibleContent",
	props: { blur: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleContent_default), { class: normalizeClass([_ctx.$style.content, __props.blur && _ctx.$style.blurred]) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAnimatedCollapsibleContent/AnimatedCollapsibleContent.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_4fxfn_267";
var collapsibleSlideDown = "_collapsibleSlideDown_4fxfn_1";
var collapsibleSlideUp = "_collapsibleSlideUp_4fxfn_1";
var blurred = "_blurred_4fxfn_292";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_4fxfn_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_4fxfn_1";
var shimmer = "_shimmer_4fxfn_1";
var spin = "_spin_4fxfn_1";
var opacityPulse = "_opacityPulse_4fxfn_1";
var popoverIn = "_popoverIn_4fxfn_1";
var fadeIn = "_fadeIn_4fxfn_1";
var blurSwapIn = "_blurSwapIn_4fxfn_1";
var blurSwapOut = "_blurSwapOut_4fxfn_1";
var pulseGlow = "_pulseGlow_4fxfn_1";
var pulseGlowDelayed = "_pulseGlowDelayed_4fxfn_1";
var fade = "_fade_4fxfn_1";
var fadeInUp = "_fadeInUp_4fxfn_1";
var fadeInDown = "_fadeInDown_4fxfn_1";
var fadeInLeft = "_fadeInLeft_4fxfn_1";
var fadeInRight = "_fadeInRight_4fxfn_1";
var fadeOut = "_fadeOut_4fxfn_1";
var fadeOutDown = "_fadeOutDown_4fxfn_1";
var fadeOutUp = "_fadeOutUp_4fxfn_1";
var fadeOutLeft = "_fadeOutLeft_4fxfn_1";
var fadeOutRight = "_fadeOutRight_4fxfn_1";
var ping = "_ping_4fxfn_1";
var blinkBackground = "_blinkBackground_4fxfn_1";
var typingBlink = "_typingBlink_4fxfn_1";
var AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default = {
	content,
	collapsibleSlideDown,
	collapsibleSlideUp,
	blurred,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_4fxfn_1",
	opacityPulse,
	popoverIn,
	fadeIn,
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
var AnimatedCollapsibleContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AnimatedCollapsibleContent_default as t };

import { Fd as createBaseVNode, Ld as createCommentVNode, Rd as createElementBlock, Wd as defineComponent, cp as normalizeClass, of as openBlock } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default } from "./app-Bl9bQlKQ.js";
//#region src/features/ai/chatHub/components/SkeletonAgentCard.vue?vue&type=script&setup=true&lang.ts
var SkeletonAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SkeletonAgentCard",
	props: { showActionButton: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, null, 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.title]) }, null, 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.description]) }, null, 2)], 2),
				__props.showActionButton ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.actionButton])
				}, null, 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/SkeletonAgentCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1wlg9_276";
var skeleton = "_skeleton_1wlg9_286";
var avatar = "_avatar_1wlg9_302";
var content = "_content_1wlg9_319";
var title = "_title_1wlg9_327";
var description = "_description_1wlg9_332";
var actionButton = "_actionButton_1wlg9_337";
var shimmer = "_shimmer_1wlg9_1";
var spin = "_spin_1wlg9_1";
var opacityPulse = "_opacityPulse_1wlg9_1";
var popoverIn = "_popoverIn_1wlg9_1";
var fadeIn = "_fadeIn_1wlg9_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1wlg9_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1wlg9_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1wlg9_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1wlg9_1";
var blurSwapIn = "_blurSwapIn_1wlg9_1";
var blurSwapOut = "_blurSwapOut_1wlg9_1";
var pulseGlow = "_pulseGlow_1wlg9_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1wlg9_1";
var fade = "_fade_1wlg9_1";
var fadeInUp = "_fadeInUp_1wlg9_1";
var fadeInDown = "_fadeInDown_1wlg9_1";
var fadeInLeft = "_fadeInLeft_1wlg9_1";
var fadeInRight = "_fadeInRight_1wlg9_1";
var fadeOut = "_fadeOut_1wlg9_1";
var fadeOutDown = "_fadeOutDown_1wlg9_1";
var fadeOutUp = "_fadeOutUp_1wlg9_1";
var fadeOutLeft = "_fadeOutLeft_1wlg9_1";
var fadeOutRight = "_fadeOutRight_1wlg9_1";
var ping = "_ping_1wlg9_1";
var blinkBackground = "_blinkBackground_1wlg9_1";
var typingBlink = "_typingBlink_1wlg9_1";
var SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	skeleton,
	"skeleton-pulse": "_skeleton-pulse_1wlg9_1",
	avatar,
	content,
	title,
	description,
	actionButton,
	shimmer,
	spin,
	opacityPulse,
	popoverIn,
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
var SkeletonAgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkeletonAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SkeletonAgentCard_default as t };

import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as Primitive } from "./Primitive-hgYYLm7y.js";
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=script&setup=true&lang.ts
var Loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Loading",
	props: {
		animated: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: true
		},
		rows: { default: 1 },
		cols: { default: 0 },
		shrinkLast: {
			type: Boolean,
			default: true
		},
		variant: { default: "p" }
	},
	setup(__props) {
		const props = __props;
		const isLastRowShrunk = computed(() => props.shrinkLast && props.rows > 1);
		const showH1Layout = computed(() => props.variant === "h1" && !props.cols);
		const showPLayout = computed(() => props.variant === "p" && !props.cols);
		const showCustomLayout = computed(() => props.variant === "custom" && !props.cols);
		const showColsLayout = computed(() => props.cols > 0);
		const showDefaultLayout = computed(() => !showH1Layout.value && !showPLayout.value && !showCustomLayout.value && !showColsLayout.value);
		function isLastRow(index, total) {
			return index === total - 1;
		}
		return (_ctx, _cache) => {
			return __props.loading ? (openBlock(), createBlock(unref(Primitive), {
				key: 0,
				as: "div",
				class: normalizeClass([
					"n8n-loading",
					`n8n-loading-${__props.variant}`,
					"el-skeleton",
					_ctx.$style.loading
				]),
				"aria-hidden": "true"
			}, {
				default: withCtx(() => [showColsLayout.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.cols, (i) => {
					return openBlock(), createElementBlock("div", {
						key: `col-${i}`,
						class: normalizeClass([
							_ctx.$style.item,
							_ctx.$style[__props.variant],
							{ [_ctx.$style.animated]: __props.animated }
						])
					}, null, 2);
				}), 128)) : showH1Layout.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `h1-${index}`,
						class: normalizeClass({ [_ctx.$style.h1Last]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.h1,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showPLayout.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `p-${index}`,
						class: normalizeClass({ [_ctx.$style.pLast]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.p,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showCustomLayout.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.custom,
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : showDefaultLayout.value ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style[__props.variant],
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=style&index=0&lang.module.scss
var loading = "_loading_l7vmx_266";
var rowContainer = "_rowContainer_l7vmx_270";
var item = "_item_l7vmx_275";
var animated = "_animated_l7vmx_280";
var p = "_p_l7vmx_290";
var h1 = "_h1_l7vmx_295";
var h3 = "_h3_l7vmx_300";
var text = "_text_l7vmx_304";
var caption = "_caption_l7vmx_309";
var button = "_button_l7vmx_313";
var image = "_image_l7vmx_319";
var circle = "_circle_l7vmx_324";
var rect = "_rect_l7vmx_330";
var custom = "_custom_l7vmx_335";
var h1Last = "_h1Last_l7vmx_340";
var pLast = "_pLast_l7vmx_344";
var shimmer = "_shimmer_l7vmx_1";
var spin = "_spin_l7vmx_1";
var opacityPulse = "_opacityPulse_l7vmx_1";
var popoverIn = "_popoverIn_l7vmx_1";
var fadeIn = "_fadeIn_l7vmx_1";
var collapsibleSlideDown = "_collapsibleSlideDown_l7vmx_1";
var collapsibleSlideUp = "_collapsibleSlideUp_l7vmx_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_l7vmx_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_l7vmx_1";
var blurSwapIn = "_blurSwapIn_l7vmx_1";
var blurSwapOut = "_blurSwapOut_l7vmx_1";
var pulseGlow = "_pulseGlow_l7vmx_1";
var pulseGlowDelayed = "_pulseGlowDelayed_l7vmx_1";
var fade = "_fade_l7vmx_1";
var fadeInUp = "_fadeInUp_l7vmx_1";
var fadeInDown = "_fadeInDown_l7vmx_1";
var fadeInLeft = "_fadeInLeft_l7vmx_1";
var fadeInRight = "_fadeInRight_l7vmx_1";
var fadeOut = "_fadeOut_l7vmx_1";
var fadeOutDown = "_fadeOutDown_l7vmx_1";
var fadeOutUp = "_fadeOutUp_l7vmx_1";
var fadeOutLeft = "_fadeOutLeft_l7vmx_1";
var fadeOutRight = "_fadeOutRight_l7vmx_1";
var ping = "_ping_l7vmx_1";
var blinkBackground = "_blinkBackground_l7vmx_1";
var typingBlink = "_typingBlink_l7vmx_1";
var Loading_vue_vue_type_style_index_0_lang_module_default = {
	loading,
	rowContainer,
	item,
	animated,
	"skeleton-pulse": "_skeleton-pulse_l7vmx_1",
	p,
	h1,
	h3,
	text,
	caption,
	button,
	image,
	circle,
	rect,
	custom,
	h1Last,
	pLast,
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
var Loading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Loading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Loading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Loading_default as t };

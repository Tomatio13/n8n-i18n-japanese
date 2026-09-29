import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { T as useResizeObserver } from "./dist-C4pFh3bs.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as ActionPill_default } from "./ActionPill-0SYNYi7E.js";
import { n as N8nRoute_default } from "./N8nLink-o_9DNe7b.js";
import { t as N8nTag_default } from "./N8nTag-CeAjXGTK.js";
import { t as PreviewTag_default } from "./PreviewTag-CISVp_-U.js";
//#region ../@n8n/design-system/src/components/N8nMenuItem/MenuItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var MenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MenuItem",
	props: {
		item: {},
		active: { type: Boolean },
		empty: { type: Boolean },
		compact: { type: Boolean },
		level: {},
		open: { type: Boolean },
		ariaLabel: {},
		scrollLabelOnOverflow: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const menuItemTextViewport = ref(null);
		const menuItemText = ref(null);
		const labelOverflows = ref(false);
		useResizeObserver([menuItemTextViewport, menuItemText], () => {
			const viewport = menuItemTextViewport.value;
			labelOverflows.value = viewport !== null && viewport.scrollWidth > viewport.clientWidth;
		});
		const isLabelOverflowing = computed(() => Boolean(props.scrollLabelOnOverflow) && labelOverflows.value);
		const to = computed(() => {
			if (props.item.disabled) return;
			if (props.item.route) return props.item.route.to;
			if (props.item.link) return props.item.link.href;
		});
		const handleClick = () => {
			if (props.item.disabled) return;
			emit("click");
		};
		const icon = computed(() => {
			if (typeof props.item.icon === "object" && props.item.icon?.type === "icon") return props.item.icon.value;
			if (typeof props.item.icon === "string") return props.item.icon;
		});
		const iconColor = computed(() => {
			if (typeof props.item.icon === "string") return;
			return props.item.icon?.color;
		});
		const tooltipDisabled = computed(() => {
			return !props.compact && !(props.item.disabled && props.item.disabledReason);
		});
		const tooltipContent = computed(() => {
			if (props.item.disabled && props.item.disabledReason) return props.item.disabledReason;
			if (props.compact) return props.item.label;
		});
		const tooltipPlacement = computed(() => {
			return props.item.disabled && props.item.disabledReason ? "top" : "right";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-test-id": __props.item.id,
				class: normalizeClass(_ctx.$style.menuItemWrapper)
			}, [createVNode(unref(N8nTooltip_default), {
				placement: tooltipPlacement.value,
				disabled: tooltipDisabled.value,
				"show-after": 500
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(tooltipContent.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nRoute_default), {
					id: __props.item.id,
					to: to.value,
					role: "menuitem",
					class: normalizeClass([_ctx.$style.menuItem, {
						[_ctx.$style.active]: __props.active,
						[_ctx.$style.compact]: __props.compact,
						[_ctx.$style.disabled]: __props.item.disabled,
						[_ctx.$style.clipOverflowLabel]: props.scrollLabelOnOverflow
					}]),
					"aria-label": props.ariaLabel ?? props.item.label,
					"aria-disabled": __props.item.disabled,
					"data-test-id": "menu-item",
					onClick: handleClick
				}, {
					default: withCtx(() => [
						__props.item.icon ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.menuItemIcon, { [_ctx.$style.notification]: __props.item.notification }])
						}, [__props.item.icon && typeof __props.item.icon === "object" && __props.item.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.menuItemEmoji)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.item.icon.value), 1)]),
							_: 1
						}, 8, ["class"])) : icon.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							color: iconColor.value,
							icon: icon.value
						}, null, 8, ["color", "icon"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.menuItemLabel) }, [
							!__props.compact ? (openBlock(), createElementBlock("div", {
								key: 0,
								ref_key: "menuItemTextViewport",
								ref: menuItemTextViewport,
								class: normalizeClass([_ctx.$style.menuItemTextViewport, {
									[_ctx.$style.scrollLabelOnOverflow]: props.scrollLabelOnOverflow,
									[_ctx.$style.labelOverflowing]: isLabelOverflowing.value
								}])
							}, [createVNode(unref(N8nText_default), {
								ref_key: "menuItemText",
								ref: menuItemText,
								class: normalizeClass(_ctx.$style.menuItemText),
								color: __props.item.disabled ? "text-light" : "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.item.label), 1)]),
								_: 1
							}, 8, ["class", "color"])], 2)) : createCommentVNode("", true),
							!__props.compact && __props.item.preview ? (openBlock(), createBlock(PreviewTag_default, { key: 1 })) : createCommentVNode("", true),
							!__props.compact && __props.item.new ? (openBlock(), createBlock(unref(N8nTag_default), {
								key: 2,
								clickable: false,
								text: "New",
								class: normalizeClass(_ctx.$style.newTag)
							}, null, 8, ["class"])) : createCommentVNode("", true),
							!__props.compact && __props.item.creditsTag ? (openBlock(), createBlock(ActionPill_default, {
								key: 3,
								size: "small",
								text: __props.item.creditsTag
							}, null, 8, ["text"])) : createCommentVNode("", true)
						], 2),
						__props.item.children && !__props.compact ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "chevron-right",
							color: "text-light"
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"id",
					"to",
					"class",
					"aria-label",
					"aria-disabled"
				])]),
				_: 1
			}, 8, ["placement", "disabled"])], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nMenuItem/MenuItem.vue?vue&type=style&index=0&lang.module.scss
var menuItemWrapper = "_menuItemWrapper_6njxv_386";
var menuItem = "_menuItem_6njxv_386";
var disabled = "_disabled_6njxv_408";
var menuItemIcon = "_menuItemIcon_6njxv_408";
var active = "_active_6njxv_411";
var compact = "_compact_6njxv_418";
var clipOverflowLabel = "_clipOverflowLabel_6njxv_431";
var menuItemTextViewport = "_menuItemTextViewport_6njxv_435";
var menuItemText = "_menuItemText_6njxv_435";
var scrollLabelOnOverflow = "_scrollLabelOnOverflow_6njxv_452";
var labelOverflowing = "_labelOverflowing_6njxv_469";
var revealLeftOverflowFade = "_revealLeftOverflowFade_6njxv_1";
var notification = "_notification_6njxv_519";
var menuItemEmoji = "_menuItemEmoji_6njxv_530";
var menuItemLabel = "_menuItemLabel_6njxv_539";
var newTag = "_newTag_6njxv_548";
var shimmer = "_shimmer_6njxv_1";
var spin = "_spin_6njxv_1";
var opacityPulse = "_opacityPulse_6njxv_1";
var popoverIn = "_popoverIn_6njxv_1";
var fadeIn = "_fadeIn_6njxv_1";
var collapsibleSlideDown = "_collapsibleSlideDown_6njxv_1";
var collapsibleSlideUp = "_collapsibleSlideUp_6njxv_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_6njxv_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_6njxv_1";
var blurSwapIn = "_blurSwapIn_6njxv_1";
var blurSwapOut = "_blurSwapOut_6njxv_1";
var pulseGlow = "_pulseGlow_6njxv_1";
var pulseGlowDelayed = "_pulseGlowDelayed_6njxv_1";
var fade = "_fade_6njxv_1";
var fadeInUp = "_fadeInUp_6njxv_1";
var fadeInDown = "_fadeInDown_6njxv_1";
var fadeInLeft = "_fadeInLeft_6njxv_1";
var fadeInRight = "_fadeInRight_6njxv_1";
var fadeOut = "_fadeOut_6njxv_1";
var fadeOutDown = "_fadeOutDown_6njxv_1";
var fadeOutUp = "_fadeOutUp_6njxv_1";
var fadeOutLeft = "_fadeOutLeft_6njxv_1";
var fadeOutRight = "_fadeOutRight_6njxv_1";
var ping = "_ping_6njxv_1";
var blinkBackground = "_blinkBackground_6njxv_1";
var typingBlink = "_typingBlink_6njxv_1";
var MenuItem_vue_vue_type_style_index_0_lang_module_default = {
	menuItemWrapper,
	menuItem,
	disabled,
	menuItemIcon,
	active,
	compact,
	clipOverflowLabel,
	menuItemTextViewport,
	menuItemText,
	scrollLabelOnOverflow,
	labelOverflowing,
	revealLeftOverflowFade,
	notification,
	menuItemEmoji,
	menuItemLabel,
	newTag,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_6njxv_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nMenuItem/index.ts
var N8nMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nMenuItem_default as t };

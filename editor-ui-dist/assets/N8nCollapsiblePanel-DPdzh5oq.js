import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-CgWQM0v1.js";
import { n as CollapsibleContent_default, r as CollapsibleRoot_default, t as CollapsibleTrigger_default } from "./CollapsibleTrigger-BAuh6X9C.js";
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/CollapsiblePanel.vue?vue&type=script&setup=true&lang.ts
var CollapsiblePanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollapsiblePanel",
	props: {
		title: { default: "" },
		modelValue: {
			type: Boolean,
			default: true
		},
		showActionsOnHover: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disableAnimation: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isOpen = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value)
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				disabled: __props.disabled,
				"unmount-on-hide": false,
				class: normalizeClass(_ctx.$style.collapsiblePanel)
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.trigger) }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: 14,
						class: normalizeClass([_ctx.$style.chevron, { [_ctx.$style.chevronOpen]: isOpen.value }])
					}, null, 8, ["class"]), __props.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.title)
					}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("", true)]),
					_: 3
				}, 8, ["class"]), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.actions, { [_ctx.$style.actionsAlwaysVisible]: !__props.showActionsOnHover }])
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2), createVNode(unref(CollapsibleContent_default), { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.noAnimation]: __props.disableAnimation }]) }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["class"])]),
				_: 3
			}, 8, [
				"open",
				"disabled",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/CollapsiblePanel.vue?vue&type=style&index=0&lang.module.scss
var collapsiblePanel = "_collapsiblePanel_j26aa_266";
var chevron = "_chevron_j26aa_282";
var chevronOpen = "_chevronOpen_j26aa_290";
var header = "_header_j26aa_294";
var trigger = "_trigger_j26aa_302";
var title = "_title_j26aa_317";
var actions = "_actions_j26aa_326";
var actionsAlwaysVisible = "_actionsAlwaysVisible_j26aa_338";
var dangerAction = "_dangerAction_j26aa_345";
var content = "_content_j26aa_365";
var collapsibleSlideDown = "_collapsibleSlideDown_j26aa_1";
var collapsibleSlideUp = "_collapsibleSlideUp_j26aa_1";
var noAnimation = "_noAnimation_j26aa_391";
var shimmer = "_shimmer_j26aa_1";
var spin = "_spin_j26aa_1";
var opacityPulse = "_opacityPulse_j26aa_1";
var popoverIn = "_popoverIn_j26aa_1";
var fadeIn = "_fadeIn_j26aa_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_j26aa_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_j26aa_1";
var blurSwapIn = "_blurSwapIn_j26aa_1";
var blurSwapOut = "_blurSwapOut_j26aa_1";
var pulseGlow = "_pulseGlow_j26aa_1";
var pulseGlowDelayed = "_pulseGlowDelayed_j26aa_1";
var fade = "_fade_j26aa_1";
var fadeInUp = "_fadeInUp_j26aa_1";
var fadeInDown = "_fadeInDown_j26aa_1";
var fadeInLeft = "_fadeInLeft_j26aa_1";
var fadeInRight = "_fadeInRight_j26aa_1";
var fadeOut = "_fadeOut_j26aa_1";
var fadeOutDown = "_fadeOutDown_j26aa_1";
var fadeOutUp = "_fadeOutUp_j26aa_1";
var fadeOutLeft = "_fadeOutLeft_j26aa_1";
var fadeOutRight = "_fadeOutRight_j26aa_1";
var ping = "_ping_j26aa_1";
var blinkBackground = "_blinkBackground_j26aa_1";
var typingBlink = "_typingBlink_j26aa_1";
var CollapsiblePanel_vue_vue_type_style_index_0_lang_module_default = {
	collapsiblePanel,
	chevron,
	chevronOpen,
	header,
	trigger,
	title,
	actions,
	actionsAlwaysVisible,
	dangerAction,
	content,
	collapsibleSlideDown,
	collapsibleSlideUp,
	noAnimation,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_j26aa_1",
	opacityPulse,
	popoverIn,
	fadeIn,
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
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/index.ts
var N8nCollapsiblePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollapsiblePanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollapsiblePanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCollapsiblePanel_default as t };

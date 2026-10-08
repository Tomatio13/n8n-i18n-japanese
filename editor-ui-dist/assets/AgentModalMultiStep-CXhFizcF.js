import { Cd as computed, Hd as nextTick, Nd as defineComponent, Od as createSlots, Qd as renderSlot, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, cf as watch, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { aw as _plugin_vue_export_helper_default } from "./app-BLs7xE53.js";
import { t as AgentModal_default } from "./AgentModal-Cz26tHux.js";
//#region src/features/agents/components/modals/AgentModalMultiStep.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-step"];
var AgentModalMultiStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentModalMultiStep",
	props: {
		open: { type: Boolean },
		step: {},
		title: {},
		editableTitle: {
			type: Boolean,
			default: false
		},
		titlePlaceholder: { default: "" },
		titleMaxLength: { default: 128 },
		titleError: { default: "" },
		showBack: {
			type: Boolean,
			default: false
		},
		showFooter: {
			type: Boolean,
			default: void 0
		},
		showCancel: {
			type: Boolean,
			default: true
		},
		busy: {
			type: Boolean,
			default: false
		},
		size: { default: "2xlarge" },
		stacked: {
			type: Boolean,
			default: false
		},
		trapFocus: {
			type: Boolean,
			default: true
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"update:open",
		"update:title",
		"back",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isPickerStep = computed(() => props.step === "select" || props.step === "list");
		const stepChanged = ref(false);
		watch(() => props.step, async () => {
			stepChanged.value = false;
			await nextTick();
			stepChanged.value = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: __props.open,
				title: __props.title,
				"editable-title": __props.editableTitle,
				"title-placeholder": __props.titlePlaceholder,
				"title-max-length": __props.titleMaxLength,
				"title-error": __props.titleError,
				"show-back": __props.showBack,
				"show-footer": __props.showFooter,
				"show-cancel": __props.showCancel,
				"body-scrollable": !isPickerStep.value,
				busy: __props.busy,
				size: __props.size,
				stacked: __props.stacked,
				"trap-focus": __props.trapFocus,
				"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
				onInteractOutside: _cache[0] || (_cache[0] = ($event) => emit("interactOutside", $event)),
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event)),
				"onUpdate:title": _cache[2] || (_cache[2] = ($event) => emit("update:title", $event)),
				onBack: _cache[3] || (_cache[3] = ($event) => emit("back"))
			}, createSlots({
				headerActions: withCtx(() => [renderSlot(_ctx.$slots, "headerActions")]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.step, stepChanged.value && _ctx.$style.stepChanged]),
					"data-step": __props.step
				}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1)]),
				_: 2
			}, [
				_ctx.$slots.footerLeft ? {
					name: "footerLeft",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footerLeft")]),
					key: "0"
				} : void 0,
				_ctx.$slots.footerBeforeCancel ? {
					name: "footerBeforeCancel",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footerBeforeCancel")]),
					key: "1"
				} : void 0,
				_ctx.$slots.footerActions ? {
					name: "footerActions",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footerActions")]),
					key: "2"
				} : void 0,
				_ctx.$slots.footer ? {
					name: "footer",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
					key: "3"
				} : void 0
			]), 1032, [
				"open",
				"title",
				"editable-title",
				"title-placeholder",
				"title-max-length",
				"title-error",
				"show-back",
				"show-footer",
				"show-cancel",
				"body-scrollable",
				"busy",
				"size",
				"stacked",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/modals/AgentModalMultiStep.vue?vue&type=style&index=0&lang.module.scss
var step = "_step_1asah_276";
var stepChanged = "_stepChanged_1asah_283";
var fadeIn = "_fadeIn_1asah_1";
var shimmer = "_shimmer_1asah_1";
var spin = "_spin_1asah_1";
var opacityPulse = "_opacityPulse_1asah_1";
var popoverIn = "_popoverIn_1asah_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1asah_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1asah_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1asah_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1asah_1";
var blurSwapIn = "_blurSwapIn_1asah_1";
var blurSwapOut = "_blurSwapOut_1asah_1";
var pulseGlow = "_pulseGlow_1asah_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1asah_1";
var fade = "_fade_1asah_1";
var fadeInUp = "_fadeInUp_1asah_1";
var fadeInDown = "_fadeInDown_1asah_1";
var fadeInLeft = "_fadeInLeft_1asah_1";
var fadeInRight = "_fadeInRight_1asah_1";
var fadeOut = "_fadeOut_1asah_1";
var fadeOutDown = "_fadeOutDown_1asah_1";
var fadeOutUp = "_fadeOutUp_1asah_1";
var fadeOutLeft = "_fadeOutLeft_1asah_1";
var fadeOutRight = "_fadeOutRight_1asah_1";
var ping = "_ping_1asah_1";
var blinkBackground = "_blinkBackground_1asah_1";
var typingBlink = "_typingBlink_1asah_1";
var AgentModalMultiStep_vue_vue_type_style_index_0_lang_module_default = {
	step,
	stepChanged,
	fadeIn,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1asah_1",
	opacityPulse,
	popoverIn,
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
var AgentModalMultiStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentModalMultiStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentModalMultiStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentModalMultiStep_default as t };

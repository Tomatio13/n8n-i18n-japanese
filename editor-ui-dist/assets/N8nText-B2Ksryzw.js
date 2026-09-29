import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=script&setup=true&lang.ts
var Text_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nText",
	__name: "Text",
	props: {
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {},
		compact: {
			type: Boolean,
			default: false
		},
		tag: { default: "span" }
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.compact) applied.push("compact");
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-text", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_1txi9_1";
var regular = "_regular_1txi9_5";
var compact = "_compact_1txi9_88";
var primary = "_primary_1txi9_92";
var secondary = "_secondary_1txi9_96";
var danger = "_danger_1txi9_116";
var success = "_success_1txi9_120";
var warning = "_warning_1txi9_124";
var Text_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-xlarge": "_size-xlarge_1txi9_9",
	"size-large": "_size-large_1txi9_14",
	"size-medium": "_size-medium_1txi9_19",
	"size-small": "_size-small_1txi9_24",
	"size-xsmall": "_size-xsmall_1txi9_29",
	"step-4xs": "_step-4xs_1txi9_34",
	"step-3xs": "_step-3xs_1txi9_40",
	"step-2xs": "_step-2xs_1txi9_46",
	"step-xs": "_step-xs_1txi9_52",
	"step-sm": "_step-sm_1txi9_58",
	"step-md": "_step-md_1txi9_64",
	"step-lg": "_step-lg_1txi9_70",
	"step-xl": "_step-xl_1txi9_76",
	"step-2xl": "_step-2xl_1txi9_82",
	compact,
	primary,
	secondary,
	"text-dark": "_text-dark_1txi9_100",
	"text-base": "_text-base_1txi9_104",
	"text-light": "_text-light_1txi9_108",
	"text-xlight": "_text-xlight_1txi9_112",
	danger,
	success,
	warning,
	"foreground-dark": "_foreground-dark_1txi9_128",
	"foreground-xdark": "_foreground-xdark_1txi9_132",
	"align-left": "_align-left_1txi9_136",
	"align-right": "_align-right_1txi9_140",
	"align-center": "_align-center_1txi9_144"
};
var Text_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Text_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Text_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/index.ts
var N8nText_default = Text_default;
//#endregion
export { Text_default as n, N8nText_default as t };

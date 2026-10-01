import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=script&setup=true&lang.ts
var Heading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nHeading",
	__name: "Heading",
	props: {
		tag: { default: "span" },
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {}
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-heading", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_qsoec_1";
var regular = "_regular_qsoec_5";
var primary = "_primary_qsoec_88";
var danger = "_danger_qsoec_108";
var Heading_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-2xlarge": "_size-2xlarge_qsoec_9",
	"size-xlarge": "_size-xlarge_qsoec_14",
	"size-large": "_size-large_qsoec_19",
	"size-medium": "_size-medium_qsoec_24",
	"size-small": "_size-small_qsoec_29",
	"step-4xs": "_step-4xs_qsoec_34",
	"step-3xs": "_step-3xs_qsoec_40",
	"step-2xs": "_step-2xs_qsoec_46",
	"step-xs": "_step-xs_qsoec_52",
	"step-sm": "_step-sm_qsoec_58",
	"step-md": "_step-md_qsoec_64",
	"step-lg": "_step-lg_qsoec_70",
	"step-xl": "_step-xl_qsoec_76",
	"step-2xl": "_step-2xl_qsoec_82",
	primary,
	"text-dark": "_text-dark_qsoec_92",
	"text-base": "_text-base_qsoec_96",
	"text-light": "_text-light_qsoec_100",
	"text-xlight": "_text-xlight_qsoec_104",
	danger,
	"align-left": "_align-left_qsoec_112",
	"align-right": "_align-right_qsoec_116",
	"align-center": "_align-center_qsoec_120"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nHeading/index.ts
var N8nHeading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Heading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Heading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nHeading_default as t };

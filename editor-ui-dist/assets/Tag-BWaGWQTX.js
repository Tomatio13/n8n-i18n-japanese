import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, N as defineComponent, U as mergeProps, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/components/N8nTag/Tag.vue?vue&type=script&setup=true&lang.ts
var Tag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTag",
	__name: "Tag",
	props: {
		text: {},
		clickable: {
			type: Boolean,
			default: true
		},
		size: { default: "sm" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", mergeProps({ class: [
				"n8n-tag",
				_ctx.$style.tag,
				_ctx.$style[__props.size],
				{ [_ctx.$style.clickable]: __props.clickable }
			] }, _ctx.$attrs), [_ctx.$slots["tag"] ? renderSlot(_ctx.$slots, "tag", { key: 0 }) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.text)
			}, toDisplayString(__props.text), 3))], 16);
		};
	}
});
var Tag_vue_vue_type_style_index_0_lang_module_default = {
	tag: "_tag_7avbr_1",
	clickable: "_clickable_7avbr_18",
	text: "_text_7avbr_26",
	sm: "_sm_7avbr_34",
	md: "_md_7avbr_40",
	lg: "_lg_7avbr_46"
};
var Tag_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tag_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Tag_default as t };

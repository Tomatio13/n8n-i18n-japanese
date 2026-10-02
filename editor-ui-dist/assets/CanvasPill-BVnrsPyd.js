import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, c as useCssModule, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/components/CanvasPill/CanvasPill.vue?vue&type=script&setup=true&lang.ts
var CanvasPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCanvasPill",
	__name: "CanvasPill",
	setup(__props) {
		const $style = useCssModule();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).pill) }, [renderSlot(_ctx.$slots, "icon"), createBaseVNode("span", { class: normalizeClass(unref($style).text) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var CanvasPill_vue_vue_type_style_index_0_lang_module_default = {
	pill: "_pill_1puzo_1",
	text: "_text_1puzo_17"
};
//#endregion
//#region ../@n8n/design-system/src/components/CanvasPill/index.ts
var CanvasPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CanvasPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CanvasPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CanvasPill_default as t };

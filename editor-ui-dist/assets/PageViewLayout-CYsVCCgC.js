import { Ad as createElementBlock, Dd as createBaseVNode, Id as defineComponent, Qd as openBlock, ep as normalizeClass, tf as renderSlot } from "./vendor-DtL-V0ia.js";
import { DE as _plugin_vue_export_helper_default } from "./app-BdR1u3Ua.js";
//#region src/app/components/layouts/PageViewLayout.vue?vue&type=script&setup=true&lang.ts
var PageViewLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PageViewLayout",
	props: { fullWidth: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, __props.fullWidth ? _ctx.$style.fullWidth : ""]) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_172vb_113",
	fullWidth: "_fullWidth_172vb_129",
	content: "_content_172vb_134"
};
var PageViewLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PageViewLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PageViewLayout_default as t };

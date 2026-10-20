import { Fd as createBaseVNode, Hd as createVNode, Ld as createCommentVNode, Rd as createElementBlock, Vf as unref, Wd as defineComponent, cp as normalizeClass, cs as useRouter, lf as renderSlot, of as openBlock, pp as toDisplayString } from "./vendor-BVSPIsYM.js";
import { AT as _plugin_vue_export_helper_default, DT as N8nIcon_default, FT as useI18n } from "./app-Ne537q-x.js";
//#region src/app/components/GoBackButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var GoBackButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GoBackButton",
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const navigateTo = () => {
			router.back();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				onClick: navigateTo
			}, [createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style.icon),
				icon: "arrow-left"
			}, null, 8, ["class"]), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(unref(i18n).baseText("template.buttons.goBackButton"))
			}, null, 10, _hoisted_1)], 2);
		};
	}
});
var GoBackButton_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1vvl9_1",
	icon: "_icon_1vvl9_6",
	text: "_text_1vvl9_7"
};
var GoBackButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GoBackButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GoBackButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=script&setup=true&lang.ts
var TemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesView",
	props: {
		goBackEnabled: {
			type: Boolean,
			default: false
		},
		fullWidth: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.template, { [_ctx.$style.fullWidth]: __props.fullWidth }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [__props.goBackEnabled ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.goBack) }, [createVNode(GoBackButton_default)], 2), renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "content")])], 2)], 2);
		};
	}
});
var TemplatesView_vue_vue_type_style_index_0_lang_module_default = {
	template: "_template_12t5v_1",
	fullWidth: "_fullWidth_12t5v_13",
	container: "_container_12t5v_18",
	header: "_header_12t5v_22",
	goBack: "_goBack_12t5v_28"
};
var TemplatesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesView_default as t };

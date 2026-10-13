import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, fp as toDisplayString, os as useRouter, sp as normalizeClass } from "./vendor-C1jTjpo6.js";
import { Cw as _plugin_vue_export_helper_default, OC as N8nHeading_default, Ow as useI18n, Y_ as VIEWS, bw as N8nIcon_default, dw as N8nText_default, yw as N8nButton_default } from "./app-C5zIGyiz.js";
//#region src/app/views/ErrorView.vue?vue&type=script&setup=true&lang.ts
var ErrorView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ErrorView",
	props: {
		messageKey: {},
		errorCode: {},
		redirectTextKey: {},
		redirectPage: {}
	},
	setup(__props) {
		const router = useRouter();
		const props = __props;
		const i18n = useI18n();
		function onButtonClick() {
			router.push({ name: props.redirectPage ?? VIEWS.HOMEPAGE });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.message) }, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.messageKey)), 1)]),
					_: 1
				})]), createBaseVNode("div", null, [__props.errorCode ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.errorCode) + " " + toDisplayString(unref(i18n).baseText("error")), 1)]),
					_: 1
				})) : createCommentVNode("", true)])], 2),
				createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText(__props.redirectTextKey),
					onClick: onButtonClick
				}, null, 8, ["label"])
			], 2);
		};
	}
});
var ErrorView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ubbw_1",
	icon: "_icon_1ubbw_10",
	message: "_message_1ubbw_17"
};
var ErrorView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ErrorView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ErrorView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ErrorView_default as default };

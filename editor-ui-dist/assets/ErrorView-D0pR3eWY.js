import { Ad as createElementBlock, Dd as createBaseVNode, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, ap as toDisplayString, ep as normalizeClass, is as useRouter, kd as createCommentVNode, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, DE as N8nIcon_default, EE as N8nButton_default, Ey as VIEWS, FE as useI18n, PT as N8nHeading_default, vE as N8nText_default } from "./app-CqwplyU_.js";
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

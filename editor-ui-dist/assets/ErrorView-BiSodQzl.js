import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Vd as createCommentVNode, Yf as unref, ff as openBlock, gp as normalizeClass, rp as init_shared_esm_bundler, rs as useRouter, xp as toDisplayString, zd as createBaseVNode } from "./vendor-BtpAr53w.js";
import { Ek as N8nButton_default, FO as N8nHeading_default, Fk as useI18n, Ok as N8nIcon_default, Tx as VIEWS, _k as N8nText_default, kk as _plugin_vue_export_helper_default } from "./app-BVbtMUlG.js";
//#region src/app/views/ErrorView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ErrorView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	container: "_container_1ubbw_1",
	icon: "_icon_1ubbw_10",
	message: "_message_1ubbw_17"
} }]]);
//#endregion
export { ErrorView_default as default };

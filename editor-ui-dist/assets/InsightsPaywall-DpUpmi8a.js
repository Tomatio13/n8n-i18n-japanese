import { Ad as createTextVNode, Af as unref, Dd as createElementBlock, Nd as defineComponent, Yd as openBlock, Zf as normalizeClass, jd as createVNode, np as toDisplayString, uf as withCtx } from "./vendor-BdZVA4Px.js";
import { P_ as useBasePageRedirectionHelper, aw as _plugin_vue_export_helper_default, nw as N8nIcon_default, qC as N8nText_default, tw as N8nButton_default, uw as useI18n } from "./app-BLs7xE53.js";
//#region ../../modules/insights/frontend/src/components/InsightsPaywall.vue?vue&type=script&setup=true&lang.ts
var InsightsPaywall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsPaywall",
	setup(__props) {
		const pageRedirectionHelper = useBasePageRedirectionHelper();
		const i18n = useI18n();
		const goToUpgrade = async () => {
			await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.callout) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "lock",
					size: "xlarge"
				}),
				createVNode(unref(N8nText_default), {
					bold: "",
					tag: "h4",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "solid",
					"native-type": "button",
					size: "large",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
var InsightsPaywall_vue_vue_type_style_index_0_lang_module_default = { callout: "_callout_1rf5j_1" };
var InsightsPaywall_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsPaywall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsPaywall_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsPaywall_default as default };

import { D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-BGBKpT5S.js";
import { Fn as N8nText_default, In as N8nButton_default, Rn as N8nIcon_default } from "./src-Cl0xZtCE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Dc79aML5.js";
import "./icon-C8yfF1LY.js";
import "./empty-BuGRxzl4.js";
import "./useTelemetry-BxbCYDca.js";
import "./useToast-CKD06lpn.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-B1JYxPAR.js";
import "./merge-Db6rb1_m.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BRhQZVIC.js";
import "./useExternalHooks-ChElZw8W.js";
import "./cloudPlan.store-x1IpiElw.js";
import "./versions.store-DyddKRXT.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Cn-LYQLi.js";
var InsightsPaywall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsPaywall",
	setup(__props) {
		const pageRedirectionHelper = usePageRedirectionHelper();
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
					type: "primary",
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
var InsightsPaywall_vue_vue_type_style_index_0_lang_module_default = { callout: "_callout_9szlr_123" };
var InsightsPaywall_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsPaywall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsPaywall_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsPaywall_default as default };

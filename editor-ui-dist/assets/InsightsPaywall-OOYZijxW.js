import { $ as openBlock, A as createTextVNode, E as createElementBlock, N as defineComponent, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-Ch3NFYOu.js";
import { $i as N8nIcon_default, Qi as N8nButton_default, Zi as N8nText_default } from "./src-Dj1o0Sx_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Bo1lfJ-T.js";
import "./constants-BDR7DE8A.js";
import "./merge-ClaqV-bg.js";
import "./_baseOrderBy-DOkG05Fo.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-CAe5tQHW.js";
import "./versions.store-7T_49RX_.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-w6lziXy3.js";
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
var InsightsPaywall_vue_vue_type_style_index_0_lang_module_default = { callout: "_callout_xkt71_125" };
var InsightsPaywall_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsPaywall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsPaywall_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsPaywall_default as default };

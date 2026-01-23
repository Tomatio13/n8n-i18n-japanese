import { Cn as toDisplayString, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-B_K3eSCc.js";
import { Hn as N8nButton_default, Vn as N8nText_default, Wn as N8nIcon_default } from "./src-BvNUCnVa.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DoMGc5TW.js";
import "./icon-CK3ijqYT.js";
import "./empty-Dn9EY6Kk.js";
import "./useTelemetry-g0679zS3.js";
import "./useToast-CsUXQdC8.js";
import "./sanitize-html-CuGdF3xj.js";
import "./CalendarDate-DxkU3CHY.js";
import "./constants-CaCsIb1D.js";
import "./merge-CN7D2NBB.js";
import "./_baseOrderBy-DPXOv1ix.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-DvYwTHuw.js";
import "./useExternalHooks-D4-jcuhh.js";
import "./useStyles-B70NtkBU.js";
import "./cloudPlan.store-DcOnnb25.js";
import "./versions.store-DEm11EPR.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-dj_oEVFN.js";
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

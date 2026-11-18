import { $d as init_runtime_core_esm_bundler, Df as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Yf as unref, ff as openBlock, lf as onMounted, rp as init_shared_esm_bundler, xp as toDisplayString, zd as createBaseVNode } from "./vendor-BtpAr53w.js";
import { FO as N8nHeading_default, Fk as useI18n, hm as useDocumentTitle } from "./app-Dp0u0Hpe.js";
import { t as LogStreamingPaywall_default } from "./LogStreamingPaywall-C76rXqIW.js";
//#region src/features/integrations/logStreaming.ee/views/LogStreamingPlaceholderView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "mb-2xl" };
//#endregion
//#region src/features/integrations/logStreaming.ee/views/LogStreamingPlaceholderView.vue
var LogStreamingPlaceholderView_default = /* @__PURE__ */ defineComponent({
	__name: "LogStreamingPlaceholderView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.log-streaming.heading")), 1)]),
				_: 1
			})]), createVNode(LogStreamingPaywall_default)]);
		};
	}
});
//#endregion
export { LogStreamingPlaceholderView_default as default };

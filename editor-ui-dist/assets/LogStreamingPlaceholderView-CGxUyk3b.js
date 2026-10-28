import { Ad as createElementBlock, Dd as createBaseVNode, Id as defineComponent, Nd as createTextVNode, Nf as unref, Pd as createVNode, Qd as openBlock, Yd as onMounted, ap as toDisplayString, pf as withCtx } from "./vendor-z-loPfiR.js";
import { FE as useI18n, PT as N8nHeading_default, Yf as useDocumentTitle } from "./app-CqwplyU_.js";
import { t as LogStreamingPaywall_default } from "./LogStreamingPaywall-l6KDXXzK.js";
//#region src/features/integrations/logStreaming.ee/views/LogStreamingPlaceholderView.vue?vue&type=script&setup=true&lang.ts
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

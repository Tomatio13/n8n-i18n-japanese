import { Fd as createBaseVNode, Hd as createVNode, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, of as openBlock, pp as toDisplayString, rf as onMounted, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { FT as useI18n, Fw as N8nHeading_default, vf as useDocumentTitle } from "./app-Bl9bQlKQ.js";
import { t as LogStreamingPaywall_default } from "./LogStreamingPaywall-BuXeTjrO.js";
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

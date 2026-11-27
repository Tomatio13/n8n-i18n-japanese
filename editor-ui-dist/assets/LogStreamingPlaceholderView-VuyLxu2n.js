import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Fj as N8nHeading_default, Vd as useDocumentTitle, zM as useI18n } from "./app-BXv1VOvT.js";
import { t as LogStreamingPaywall_default } from "./LogStreamingPaywall-Dy_IxdWm.js";
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

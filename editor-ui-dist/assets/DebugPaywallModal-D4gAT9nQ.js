import { Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, Oj as N8nLink_default, bM as N8nText_default, kM as N8nButton_default, zM as useI18n } from "./app-BXv1VOvT.js";
import { t as Modal_default } from "./Modal-BbWUppWK.js";
//#region src/features/execution/executions/components/DebugPaywallModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var DebugPaywallModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DebugPaywallModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "500px",
				title: props.data.title,
				name: props.modalName
			}, {
				content: withCtx(() => [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.debug.paywall.content")) + " ", 1),
						_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
						_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("executionsList.debug.paywall.subContent")) + " ", 1),
						createVNode(unref(N8nLink_default), {
							to: unref(i18n).baseText("executionsList.debug.paywall.link.url"),
							"new-window": ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.debug.paywall.link.text")), 1)]),
							_: 1
						}, 8, ["to"])
					]),
					_: 1
				})]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), { onClick: props.data.footerButtonAction }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.seePlans")), 1)]),
					_: 1
				}, 8, ["onClick"])], 2)]),
				_: 1
			}, 8, ["title", "name"]);
		};
	}
}), [["__cssModules", { "$style": { footer: "_footer_dpaca_1" } }]]);
//#endregion
export { DebugPaywallModal_default as default };

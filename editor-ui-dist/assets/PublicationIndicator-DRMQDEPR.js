import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Ud as defineComponent, Vd as createVNode, Zd as mergeProps, af as openBlock, bf as withCtx, fp as toDisplayString } from "./vendor-LwB6jUFW.js";
import { RS as N8nStatusDot_default, Sw as _plugin_vue_export_helper_default, aw as N8nBadge_default, fw as N8nTooltip_default } from "./app-Ddu-psGf.js";
//#region src/app/components/PublicationIndicator.vue?vue&type=script&setup=true&lang.ts
/**
* "Published" chip shown on list cards. Attributes such as `data-test-id`
* and `data-state` land on the chip element itself, also inside the tooltip.
*/
var PublicationIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PublicationIndicator",
	props: {
		label: {},
		variant: { default: "success" },
		tooltip: { default: null }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top",
				"as-child": ""
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.tooltip), 1)]),
				default: withCtx(() => [createVNode(unref(N8nBadge_default), mergeProps(_ctx.$attrs, {
					class: _ctx.$style.indicator,
					tabindex: "0"
				}), {
					leading: withCtx(() => [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"])]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.label), 1)]),
					_: 1
				}, 16, ["class"])]),
				_: 1
			})) : (openBlock(), createBlock(unref(N8nBadge_default), mergeProps({ key: 1 }, _ctx.$attrs, { class: _ctx.$style.indicator }), {
				leading: withCtx(() => [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"])]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.label), 1)]),
				_: 1
			}, 16, ["class"]));
		};
	}
});
var PublicationIndicator_vue_vue_type_style_index_0_lang_module_default = { indicator: "_indicator_6a55n_3" };
var PublicationIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PublicationIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PublicationIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PublicationIndicator_default as t };

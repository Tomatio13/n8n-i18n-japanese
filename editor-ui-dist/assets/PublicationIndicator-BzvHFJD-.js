import { Ad as createTextVNode, Af as unref, Nd as defineComponent, Td as createBlock, Vd as mergeProps, Yd as openBlock, jd as createVNode, np as toDisplayString, uf as withCtx } from "./vendor-C0K-pJCd.js";
import { CS as N8nStatusDot_default, HC as N8nBadge_default, YC as N8nTooltip_default, aw as _plugin_vue_export_helper_default } from "./app-Gcu_WcI0.js";
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

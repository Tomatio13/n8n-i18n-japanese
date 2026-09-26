import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, U as mergeProps, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DD_DX1R3.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
import { t as N8nStatusDot_default } from "./N8nStatusDot-DM0CsJL9.js";
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
				default: withCtx(() => [createBaseVNode("div", mergeProps(_ctx.$attrs, {
					class: _ctx.$style.indicator,
					tabindex: "0"
				}), [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				})], 16)]),
				_: 1
			})) : (openBlock(), createElementBlock("div", mergeProps({ key: 1 }, _ctx.$attrs, { class: _ctx.$style.indicator }), [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"]), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
				_: 1
			})], 16));
		};
	}
});
var PublicationIndicator_vue_vue_type_style_index_0_lang_module_default = { indicator: "_indicator_18qwi_1" };
var PublicationIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PublicationIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PublicationIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PublicationIndicator_default as t };

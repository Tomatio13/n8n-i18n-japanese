import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
import { t as McpClientLogoCards_default } from "./McpClientLogoCards-Bq9PSuTA.js";
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpEmptyStateCard",
	props: {
		title: {},
		description: {},
		surface: {
			type: Boolean,
			default: false
		},
		dataTestId: { default: void 0 }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.card, __props.surface && _ctx.$style.surface]),
				"data-test-id": __props.dataTestId
			}, [
				createVNode(McpClientLogoCards_default, { class: normalizeClass(_ctx.$style.cards) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				})], 2),
				_ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1plsi_1";
var surface = "_surface_1plsi_14";
var cards = "_cards_1plsi_33";
var copy = "_copy_1plsi_37";
var actions = "_actions_1plsi_44";
var McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	"mcp-reveal-in": "_mcp-reveal-in_1plsi_1",
	surface,
	cards,
	copy,
	actions
};
var McpEmptyStateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpEmptyStateCard_default as t };

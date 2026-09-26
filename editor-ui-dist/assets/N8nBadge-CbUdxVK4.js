import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
//#region ../@n8n/design-system/src/components/N8nBadge/Badge.vue?vue&type=script&setup=true&lang.ts
var Badge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nBadge",
	__name: "Badge",
	props: {
		theme: { default: "default" },
		size: { default: "small" },
		bold: {
			type: Boolean,
			default: false
		},
		showBorder: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["n8n-badge", {
				[_ctx.$style[__props.theme]]: true,
				[_ctx.$style.border]: __props.showBorder
			}]) }, [createVNode(unref(N8nText_default), {
				size: __props.size,
				bold: __props.bold,
				compact: true
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["size", "bold"])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nBadge/Badge.vue?vue&type=style&index=0&lang.module.scss
var badge = "_badge_burzn_1";
var border = "_border_burzn_8";
var success = "_success_burzn_19 _badge_burzn_1";
var warning = "_warning_burzn_26 _badge_burzn_1";
var danger = "_danger_burzn_33 _badge_burzn_1";
var primary = "_primary_burzn_40 _badge_burzn_1";
var secondary = "_secondary_burzn_49 _badge_burzn_1";
var tertiary = "_tertiary_burzn_56 _badge_burzn_1";
var Badge_vue_vue_type_style_index_0_lang_module_default = {
	badge,
	border,
	"default": "_default_burzn_12 _badge_burzn_1",
	success,
	warning,
	danger,
	primary,
	secondary,
	tertiary
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nBadge/index.ts
var N8nBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Badge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Badge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nBadge_default as t };

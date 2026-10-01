import { $ as openBlock, E as createElementBlock, N as defineComponent, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/components/N8nStatusDot/StatusDot.vue?vue&type=script&setup=true&lang.ts
var StatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nStatusDot",
	__name: "StatusDot",
	props: {
		variant: { default: "success" },
		pulse: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style[__props.variant], { [_ctx.$style.pulse]: __props.pulse }]),
				"aria-hidden": "true"
			}, null, 2);
		};
	}
});
var StatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1tqwy_1",
	success: "_success_1tqwy_11 _dot_1tqwy_1",
	warning: "_warning_1tqwy_15 _dot_1tqwy_1",
	danger: "_danger_1tqwy_20 _dot_1tqwy_1",
	pulse: "_pulse_1tqwy_25",
	statusDotPulse: "_statusDotPulse_1tqwy_1"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nStatusDot/index.ts
var N8nStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nStatusDot_default as t };

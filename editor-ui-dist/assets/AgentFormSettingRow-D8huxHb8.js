import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Vd as createCommentVNode, Yf as unref, ff as openBlock, gp as normalizeClass, hf as renderSlot, rp as init_shared_esm_bundler, xp as toDisplayString, zd as createBaseVNode } from "./vendor-BtpAr53w.js";
import { _k as N8nText_default, kk as _plugin_vue_export_helper_default } from "./app-BVbtMUlG.js";
//#region src/features/agents/components/AgentFormSettingRow.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = ["for"];
var AgentFormSettingRow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentFormSettingRow",
	props: {
		controlId: {},
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("label", { for: __props.controlId }, [createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-dark",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			})], 8, _hoisted_1), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	row: "_row_mfit1_1",
	info: "_info_mfit1_8",
	action: "_action_mfit1_15"
} }]]);
//#endregion
export { AgentFormSettingRow_default as t };

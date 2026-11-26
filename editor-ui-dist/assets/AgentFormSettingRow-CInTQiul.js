import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pf as renderSlot, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, bM as N8nText_default } from "./app-B_io1t1X.js";
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

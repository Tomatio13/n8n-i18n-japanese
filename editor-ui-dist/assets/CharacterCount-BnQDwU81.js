import { Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, bM as N8nText_default, zM as useI18n } from "./app-BJz3tlB7.js";
//#region src/app/components/CharacterCount.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var CharacterCount_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CharacterCount",
	props: {
		value: {},
		max: {},
		showWhenEmpty: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return __props.value || __props.showWhenEmpty ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.characterCount)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.characterCount", { interpolate: {
					count: String(__props.value.length),
					max: String(__props.max)
				} })), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": { characterCount: "_characterCount_alw37_1" } }]]);
//#endregion
export { CharacterCount_default as t };

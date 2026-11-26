import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, bM as N8nText_default } from "./app-B_io1t1X.js";
//#region src/features/collaboration/projects/components/ProjectIcon.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ProjectIcon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ProjectIcon",
	props: {
		icon: {},
		size: { default: "medium" },
		round: {
			type: Boolean,
			default: false
		},
		borderLess: {
			type: Boolean,
			default: false
		},
		color: { default: "text-base" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.container,
				_ctx.$style[props.size],
				{
					[_ctx.$style.round]: props.round,
					[_ctx.$style.borderless]: props.borderLess
				}
			]) }, [__props.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.icon.value,
				class: normalizeClass(_ctx.$style.icon),
				color: __props.icon.color ?? __props.color
			}, null, 8, [
				"icon",
				"class",
				"color"
			])) : __props.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				color: "text-light",
				class: normalizeClass(_ctx.$style.emoji)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.icon.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_nhfjm_1",
	round: "_round_nhfjm_8",
	borderless: "_borderless_nhfjm_11",
	mini: "_mini_nhfjm_15",
	icon: "_icon_nhfjm_19",
	emoji: "_emoji_nhfjm_22",
	small: "_small_nhfjm_26",
	medium: "_medium_nhfjm_34",
	large: "_large_nhfjm_42"
} }]]);
//#endregion
export { ProjectIcon_default as t };

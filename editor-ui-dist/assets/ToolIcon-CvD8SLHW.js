import { Ad as createElementBlock, Id as defineComponent, Nf as unref, Od as createBlock, Qd as openBlock, Vd as inject, ep as normalizeClass, if as resolveDynamicComponent } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, DE as N8nIcon_default, uT as N8nNodeIcon_default } from "./app-CJdBXMVa.js";
import { a as TOOL_ICON_AVATAR_RENDERER_KEY } from "./ToolCredentialPicker-CtBkQEim.js";
//#region src/features/shared/toolsConnection/ToolIcon.vue?vue&type=script&setup=true&lang.ts
var INNER_SIZE = 20;
var AVATAR_SIZE = 40;
var ToolIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolIcon",
	props: {
		source: { default: null },
		fallbackIcon: { default: "toolbox" }
	},
	setup(__props) {
		const avatarRenderer = inject(TOOL_ICON_AVATAR_RENDERER_KEY, null);
		return (_ctx, _cache) => {
			return __props.source?.type === "avatar" && unref(avatarRenderer) ? (openBlock(), createBlock(resolveDynamicComponent(unref(avatarRenderer)), {
				key: 0,
				personalisation: __props.source.personalisation,
				size: AVATAR_SIZE
			}, null, 8, ["personalisation"])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.wrapper),
				"aria-hidden": "true"
			}, [__props.source && __props.source.type !== "avatar" ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
				key: 0,
				type: __props.source.type,
				src: __props.source.type === "file" ? __props.source.src : void 0,
				name: __props.source.type === "icon" ? __props.source.name : void 0,
				color: __props.source.type === "icon" ? __props.source.color : void 0,
				size: INNER_SIZE
			}, null, 8, [
				"type",
				"src",
				"name",
				"color"
			])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: __props.fallbackIcon,
				size: INNER_SIZE,
				class: normalizeClass(_ctx.$style.fallback)
			}, null, 8, ["icon", "class"]))], 2));
		};
	}
});
var ToolIcon_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_12ruk_1",
	fallback: "_fallback_12ruk_13"
};
var ToolIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ToolIcon_default as t };

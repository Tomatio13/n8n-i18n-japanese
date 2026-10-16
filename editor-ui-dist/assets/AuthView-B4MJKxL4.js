import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, Zd as mergeProps, af as openBlock, bf as withCtx, cf as renderSlot, fp as toDisplayString, sp as normalizeClass } from "./vendor-LwB6jUFW.js";
import { Sw as _plugin_vue_export_helper_default, dC as N8nLogo_default, tv as useSettingsStore, uw as N8nText_default, vC as N8nFormBox_default } from "./app-6hFiMIk3.js";
//#region src/features/core/auth/views/AuthView.vue?vue&type=script&setup=true&lang.ts
var AuthView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AuthView",
	props: {
		form: { default: void 0 },
		formLoading: {
			type: Boolean,
			default: false
		},
		subtitle: { default: void 0 }
	},
	emits: [
		"update",
		"submit",
		"secondaryClick"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onUpdate = (e) => {
			emit("update", e);
		};
		const onSubmit = (data) => {
			emit("submit", data);
		};
		const onSecondaryClick = () => {
			emit("secondaryClick");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nLogo_default), {
					size: "large",
					"release-channel": unref(releaseChannel)
				}, null, 8, ["release-channel"]),
				__props.subtitle ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.formContainer) }, [renderSlot(_ctx.$slots, "default", {}, () => [__props.form ? (openBlock(), createBlock(unref(N8nFormBox_default), mergeProps({ key: 0 }, __props.form, {
					"data-test-id": "auth-form",
					"button-loading": __props.formLoading,
					onSecondaryClick,
					onSubmit,
					onUpdate
				}), null, 16, ["button-loading"])) : createCommentVNode("", true)])], 2)
			], 2);
		};
	}
});
var AuthView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1l1y2_5",
	textContainer: "_textContainer_1l1y2_15",
	formContainer: "_formContainer_1l1y2_19"
};
var AuthView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AuthView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AuthView_default as t };

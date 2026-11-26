import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pf as renderSlot, tf as mergeProps, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { IS as useSettingsStore, NM as _plugin_vue_export_helper_default, bM as N8nText_default, fj as N8nLogo_default, xj as N8nFormBox_default } from "./app-B_io1t1X.js";
//#region src/features/core/auth/views/AuthView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AuthView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
					"submit-button-variant": "brand",
					onSecondaryClick,
					onSubmit,
					onUpdate
				}), null, 16, ["button-loading"])) : createCommentVNode("", true)])], 2)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_1l1y2_5",
	textContainer: "_textContainer_1l1y2_15",
	formContainer: "_formContainer_1l1y2_19"
} }]]);
//#endregion
export { AuthView_default as t };

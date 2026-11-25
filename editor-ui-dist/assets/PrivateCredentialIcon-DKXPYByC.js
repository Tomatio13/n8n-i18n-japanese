import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, tf as mergeProps, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, SM as N8nTooltip_default, zM as useI18n } from "./app-CkjcdAxY.js";
//#region src/features/resolvers/components/PrivateCredentialIcon.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { key: 0 };
var PrivateCredentialIcon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PrivateCredentialIcon",
	props: {
		tooltip: {
			type: Boolean,
			default: true
		},
		tooltipTitle: { default: void 0 },
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const body = computed(() => props.tooltipText ?? i18n.baseText("credentials.private.tooltip"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				disabled: !__props.tooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.tooltipTitle ? (openBlock(), createElementBlock("strong", _hoisted_1, toDisplayString(__props.tooltipTitle), 1)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(body.value), 1)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), mergeProps(_ctx.$attrs, {
					"data-test-id": "private-credential-icon",
					icon: "user-round-key"
				}), null, 16)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
}), [["__cssModules", { "$style": { content: "_content_1jsio_1" } }]]);
//#endregion
export { PrivateCredentialIcon_default as t };

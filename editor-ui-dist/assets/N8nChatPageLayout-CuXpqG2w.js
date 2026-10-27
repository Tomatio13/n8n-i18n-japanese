import { Ad as createElementBlock, Cd as Fragment, Dd as createBaseVNode, Id as defineComponent, Nd as createTextVNode, Nf as unref, Pd as createVNode, Qd as openBlock, ap as toDisplayString, ep as normalizeClass, kd as createCommentVNode, rs as useRouter, tf as renderSlot } from "./vendor-DtL-V0ia.js";
import { Cs as INSTANCE_AI_VIEW, DE as _plugin_vue_export_helper_default, ME as useI18n, wE as N8nIcon_default } from "./app-BdR1u3Ua.js";
//#region src/features/agents/n8nChatPage/components/N8nChatPageLayout.vue?vue&type=script&setup=true&lang.ts
/**
* `fill`: the agent chat view's content (the chat panel) manages its own
* internal scroll and centering, so the page must not also scroll or cap its
* width. `false` (default) is the library's plain scrollable, centered column.
*/
var N8nChatPageLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatPageLayout",
	props: { fill: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		function goBack() {
			router.push({ name: INSTANCE_AI_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.page, { [_ctx.$style.fill]: __props.fill }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topRow) }, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.backLink),
				"data-testid": "n8n-chat-back",
				onClick: goBack
			}, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "small"
			}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.back")), 1)], 2), _ctx.$slots.leading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.divider),
				"aria-hidden": "true"
			}, null, 2), renderSlot(_ctx.$slots, "leading")], 64)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.fill]: __props.fill }]) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var N8nChatPageLayout_vue_vue_type_style_index_0_lang_module_default = {
	page: "_page_1tew7_1",
	fill: "_fill_1tew7_10",
	topRow: "_topRow_1tew7_14",
	backLink: "_backLink_1tew7_21",
	divider: "_divider_1tew7_36",
	content: "_content_1tew7_42"
};
var N8nChatPageLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatPageLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatPageLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nChatPageLayout_default as t };

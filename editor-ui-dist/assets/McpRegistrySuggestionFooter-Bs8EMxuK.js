import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, fp as toDisplayString, sp as normalizeClass } from "./vendor-LwB6jUFW.js";
import { Sm as usePostHog, Sw as _plugin_vue_export_helper_default, ih as SUGGEST_SERVICE_FORM_URL_REMOTE_CONFIG_KEY, uw as N8nText_default } from "./app-Ddu-psGf.js";
//#region src/app/components/SuggestionFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var SuggestionFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestionFooter",
	props: {
		prompt: {},
		action: {},
		url: {}
	},
	setup(__props) {
		const props = __props;
		const suggestionUrl = computed(() => {
			if (!props.url) return void 0;
			try {
				return new URL(props.url).protocol === "https:" ? props.url : void 0;
			} catch {
				return;
			}
		});
		return (_ctx, _cache) => {
			return suggestionUrl.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.footer),
				"data-test-id": "suggest-tool-footer"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.prompt), 1)]),
				_: 1
			}), createBaseVNode("a", {
				class: normalizeClass([_ctx.$style.link, "ignore-key-press-node-creator"]),
				href: suggestionUrl.value,
				target: "_blank",
				rel: "noopener noreferrer"
			}, toDisplayString(__props.action), 11, _hoisted_1)], 2)) : createCommentVNode("", true);
		};
	}
});
var SuggestionFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer: "_footer_1fd9m_2",
	link: "_link_1fd9m_10"
};
var SuggestionFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestionFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestionFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/McpRegistrySuggestionFooter.vue
var McpRegistrySuggestionFooter_default = /* @__PURE__ */ defineComponent({
	__name: "McpRegistrySuggestionFooter",
	props: {
		prompt: {},
		action: {}
	},
	setup(__props) {
		const posthogStore = usePostHog();
		const suggestionUrl = computed(() => {
			const payload = posthogStore.getFeatureFlagPayload(SUGGEST_SERVICE_FORM_URL_REMOTE_CONFIG_KEY);
			return typeof payload === "string" ? payload : void 0;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(SuggestionFooter_default, {
				prompt: __props.prompt,
				action: __props.action,
				url: suggestionUrl.value
			}, null, 8, [
				"prompt",
				"action",
				"url"
			]);
		};
	}
});
//#endregion
export { SuggestionFooter_default as n, McpRegistrySuggestionFooter_default as t };

import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { xt as SUGGEST_SERVICE_FORM_URL_REMOTE_CONFIG_KEY } from "./constants-xJAwzpHs.js";
import { t as usePostHog } from "./posthog.store-y0wHoxUE.js";
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

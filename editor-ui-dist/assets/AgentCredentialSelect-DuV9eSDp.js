import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { to as AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES } from "./src-idT_fqaK.js";
import { t as CredentialIcon_default } from "./CredentialIcon-Ddj4Wzvw.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-COhAtPwb.js";
//#region src/features/agents/model-providers.ts
/**
* Presentation only. The provider's credential types live in
* `AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES` (`@n8n/api-types`) so the backend's
* n8n Connect gate and this picker cannot drift apart.
*/
var AGENT_MODEL_PROVIDER_DEFINITIONS = {
	openai: { displayName: "OpenAI" },
	anthropic: { displayName: "Anthropic" },
	google: { displayName: "Google" },
	"azure-openai": { displayName: "Azure OpenAI" },
	"aws-bedrock": {
		displayName: "AWS Bedrock",
		isAggregator: true
	},
	xai: { displayName: "xAI" },
	groq: { displayName: "Groq" },
	openrouter: {
		displayName: "OpenRouter",
		isAggregator: true
	},
	deepseek: { displayName: "DeepSeek" },
	cohere: { displayName: "Cohere" },
	mistral: { displayName: "Mistral" },
	vercel: {
		displayName: "Vercel AI Gateway",
		isAggregator: true
	},
	nvidia: { displayName: "NVIDIA" },
	moonshotai: { displayName: "Moonshot" },
	alibaba: { displayName: "Qwen Cloud" },
	minimax: { displayName: "MiniMax" }
};
function getProviderCredentialTypes(provider) {
	return AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES[provider];
}
//#endregion
//#region src/features/agents/components/model-selector/ModelSelectorTriggerIcon.vue
var ModelSelectorTriggerIcon_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelectorTriggerIcon",
	props: { credentialTypeName: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.credentialTypeName ? (openBlock(), createBlock(CredentialIcon_default, {
				key: 0,
				"credential-type-name": __props.credentialTypeName,
				size: 18
			}, null, 8, ["credential-type-name"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "bot",
				size: "medium"
			}));
		};
	}
});
//#endregion
//#region src/features/agents/components/model-selector/ModelSelectorItemLeadingIcon.vue
var ModelSelectorItemLeadingIcon_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelectorItemLeadingIcon",
	props: { item: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.item.data?.leadingIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.item.data.leadingIcon,
				size: "large"
			}, null, 8, ["icon"])) : __props.item.data?.credentialType ? (openBlock(), createBlock(CredentialIcon_default, {
				key: 1,
				"credential-type-name": __props.item.data.credentialType,
				size: 16
			}, null, 8, ["credential-type-name"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/model-selector/menuItemId.ts
/**
* Model selector dropdown item ids encode `provider::action::value`, e.g.
* "openai::model::gpt-5-mini" or "anthropic::credential::abc123".
*/
function buildMenuItemId(provider, action, value) {
	return `${provider}::${action}::${encodeURIComponent(value)}`;
}
function parseMenuItemId(id) {
	const [provider, action, rawValue] = id.split("::");
	if (!provider || !action || !rawValue) return null;
	return {
		provider,
		action,
		value: decodeURIComponent(rawValue)
	};
}
//#endregion
//#region src/features/agents/components/AgentCredentialSelect.vue?vue&type=script&setup=true&lang.ts
var AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		size: { default: "small" }
	},
	emits: ["update:modelValue", "create"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialOptions = computed(() => [...props.credentials].sort((a, b) => {
			const byName = a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
			return byName === 0 ? a.id.localeCompare(b.id) : byName;
		}).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credential.typeDisplayName,
			homeProject: credential.homeProject
		})));
		function onCredentialSelected(credentialId) {
			emit("update:modelValue", credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CredentialsDropdown_default, {
				class: normalizeClass(_ctx.$style[props.size]),
				"credential-options": credentialOptions.value,
				"selected-credential-id": __props.modelValue ?? null,
				permissions: __props.credentialPermissions,
				placeholder: __props.placeholder,
				loading: __props.loading,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				onCredentialSelected,
				onNewCredential: _cache[0] || (_cache[0] = ($event) => emit("create"))
			}, null, 8, [
				"class",
				"credential-options",
				"selected-credential-id",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
var AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default = {
	xlarge: "_xlarge_1611f_1",
	large: "_large_1611f_6",
	medium: "_medium_1611f_11",
	small: "_small_1611f_16",
	mini: "_mini_1611f_21"
};
var AgentCredentialSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ModelSelectorTriggerIcon_default as a, ModelSelectorItemLeadingIcon_default as i, buildMenuItemId as n, AGENT_MODEL_PROVIDER_DEFINITIONS as o, parseMenuItemId as r, getProviderCredentialTypes as s, AgentCredentialSelect_default as t };

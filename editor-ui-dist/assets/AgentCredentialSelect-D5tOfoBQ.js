import { Id as computed, Kd as defineComponent, Rd as createBlock, Zd as init_runtime_core_esm_bundler, hp as normalizeClass, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default } from "./app-CkjcdAxY.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-DaVNuuLI.js";
//#region src/features/agents/components/AgentCredentialSelect.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var AgentCredentialSelect_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		size: { default: "small" },
		managedOption: {}
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
				"managed-option": __props.managedOption,
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
				"managed-option",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	xlarge: "_xlarge_1611f_1",
	large: "_large_1611f_6",
	medium: "_medium_1611f_11",
	small: "_small_1611f_16",
	mini: "_mini_1611f_21"
} }]]);
//#endregion
export { AgentCredentialSelect_default as t };

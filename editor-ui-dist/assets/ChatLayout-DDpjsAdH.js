import { $a as nullType, Ad as createElementBlock, Ed as computed, Id as defineComponent, Nu as useLocalStorage, Qd as openBlock, Tf as ref, df as watch, ep as normalizeClass, is as useRouter, ku as useEventListener, no as recordType, ro as stringType, tf as renderSlot, to as objectType } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, Bt as isLlmProviderModel, Ib as chatHubProviderSchema, My as useSettingsStore, Nb as agentIconOrEmojiSchema, Pb as chatHubConversationModelSchema, Yp as useCredentialsStore, _n as CHAT_VIEW, dm as useProjectsStore, dv as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, jb as PROVIDER_CREDENTIAL_TYPE_MAP, lE as useDeviceSupport, qh as useUIStore, zt as isLlmProvider } from "./app-CJdBXMVa.js";
//#region src/features/ai/chatHub/chat.types.ts
var credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
var chatHubConversationModelWithCachedDisplayNameSchema = chatHubConversationModelSchema.and(objectType({
	cachedDisplayName: stringType().optional(),
	cachedIcon: agentIconOrEmojiSchema.optional()
})).transform((value) => ({
	...value,
	cachedDisplayName: value.cachedDisplayName || (isLlmProviderModel(value) ? value.model : "")
}));
//#endregion
//#region src/features/ai/chatHub/composables/useChatCredentials.ts
/**
* Composable for managing chat credentials including auto-selection and user selection.
*/
function useChatCredentials(userId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const settingsStore = useSettingsStore();
	const projectStore = useProjectsStore();
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: (value) => {
				try {
					return credentialsMapSchema.parse(JSON.parse(value));
				} catch (error) {
					return {};
				}
			},
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map((provider) => {
		if (!isLlmProvider(provider)) return [provider, null];
		const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
		if (!credentialType) return [provider, null];
		const availableCredentials = credentialsStore.getCredentialsByType(credentialType);
		const settings = settingsStore.moduleSettings?.["chat-hub"]?.providers[provider];
		if (settings?.credentialId && availableCredentials.some((c) => c.id === settings.credentialId)) return [provider, settings.credentialId];
		return [provider, availableCredentials.toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
	})));
	const credentialsByProvider = computed(() => isCredentialsReady.value ? chatHubProviderSchema.options.reduce((acc, provider) => {
		const cred = selectedCredentials.value[provider] ?? null;
		acc[provider] = cred && credentialsStore.allCredentials.some((c) => c.id === cred) ? cred : autoSelectCredentials.value[provider];
		return acc;
	}, {}) : null);
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => projectStore.personalProject, async (personalProject) => {
		if (personalProject) {
			await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchUsableCredentials({ projectId: personalProject.id })]);
			isInitialized.value = true;
		}
	}, { immediate: true });
	return {
		credentialsByProvider,
		selectCredential
	};
}
//#endregion
//#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=script&setup=true&lang.ts
var ChatLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		const router = useRouter();
		const uiStore = useUIStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: CHAT_VIEW,
					force: true
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ChatLayout_vue_vue_type_style_index_0_lang_module_default = { component: "_component_1ujic_1" };
var ChatLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useChatCredentials as n, chatHubConversationModelWithCachedDisplayNameSchema as r, ChatLayout_default as t };

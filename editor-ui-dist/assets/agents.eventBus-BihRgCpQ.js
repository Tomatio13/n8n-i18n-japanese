import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, Ut as toValue, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-DxZTq86C.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { W as useDebounceFn, x as useLocalStorage } from "./dist-C4pFh3bs.js";
import { t as Input_default } from "./Input-DZHU7J3z.js";
import { t as VisuallyHidden_default$1 } from "./VisuallyHidden-RKvjG2uY.js";
import { t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { t as N8nInputNumber_default } from "./N8nInputNumber-B0z3OaC0.js";
import { t as Switch_default } from "./Switch-Bc3wwG2d.js";
import { n as truncateBeforeLast } from "./truncate-Bon5m7NJ.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nCallout_default } from "./N8nCallout-1EEnGTrv.js";
import { n as useDropdownSearch } from "./useAgentConfig-DtpUnH01.js";
import { t as AiModelSelectorDropdown_default } from "./AiModelSelectorDropdown-DXWMlpyh.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { c as useRoute } from "./vue-router-DPnGeMd9.js";
import { Hn as N8nSegmentControl_default } from "./expressions-CZ343j_6.js";
import { Ft as useCredentialsStore, H as useNodeTypesStore, Mt as useAiGatewayStore, jn as useProjectsStore, xn as injectNDVStore } from "./workflows.store-D-csz4jD.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-Bx7HkGpy.js";
import { t as useRootStore } from "./useRootStore-DZGHRGYJ.js";
import { Ft as getResourcePermissions, Yt as AI_GATEWAY_MANAGED_TAG, eo as AGENT_MODEL_PROVIDERS, et as ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS, it as resolvePromptCaching, no as AGENT_MODEL_STRING_REGEX, nt as NATIVE_WEB_SEARCH_PROVIDER_TOOLS, ro as isAgentModelProvider, rt as PROVIDER_CAPABILITIES, tt as NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER } from "./src-idT_fqaK.js";
import { t as useSettingsStore } from "./settings.store-eyxr9QVd.js";
import { t as useUsersStore } from "./users.store-BtKBI9mf.js";
import { n as useToast } from "./useToast-Btn7qL6F.js";
import { Ar as AGENT_TOOLS_MODAL_KEY, Dr as AGENT_SKILL_MODAL_KEY, Or as AGENT_SUB_AGENTS_MODAL_KEY, ji as LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS, jr as AGENT_TOOL_CONFIG_MODAL_KEY } from "./constants-CKEgyzi2.js";
import { n as DEBOUNCE_TIME } from "./durations-DueaJvoh.js";
import { t as getDebounceTime } from "./useDebounce-DRI3mMad.js";
import { n as useUIStore } from "./ui.store-DrBfSuCE.js";
import { t as useAiGateway } from "./useAiGateway-C5e1krmf.js";
import { t as NodeIcon_default } from "./NodeIcon-DqZBdCHb.js";
import { a as createAgentSkill, b as getModelCatalog, x as getProviderModels } from "./useAgentApi-B2v0LyuE.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-BlcoRO22.js";
import { a as ModelSelectorTriggerIcon_default, i as ModelSelectorItemLeadingIcon_default, n as buildMenuItemId, o as AGENT_MODEL_PROVIDER_DEFINITIONS, r as parseMenuItemId, s as getProviderCredentialTypes, t as AgentCredentialSelect_default } from "./AgentCredentialSelect-DuV9eSDp.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-5Dsh7llE.js";
import { i as resolveAgentValidationIssueMessageKey, n as isWarningIssue, r as getAgentValidationIssueInterpolation } from "./validationIssues-D6iSFKRE.js";
import { n as mcpServerToNode, s as toolRefToNode } from "./useMcpServerAdapter-D9dsafdi.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-CjugiBDl.js";
import { n as AgentChipButton_default, t as normalizeAgentSkillForSave } from "./agentSkill-DYEMIwS7.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nVisuallyHidden/VisuallyHidden.vue
var VisuallyHidden_default = /* @__PURE__ */ defineComponent({
	__name: "VisuallyHidden",
	props: { asChild: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VisuallyHidden_default$1), { "as-child": __props.asChild }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child"]);
		};
	}
});
//#endregion
//#region src/app/components/FreeAiCreditsCallout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 2 };
var LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
var N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
//#endregion
//#region src/app/components/FreeAiCreditsCallout.vue
var FreeAiCreditsCallout_default = /* @__PURE__ */ defineComponent({
	__name: "FreeAiCreditsCallout",
	props: {
		credentialTypeName: {},
		telemetrySource: { default: "freeAiCreditsCallout" }
	},
	emits: ["claimed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const NODES_WITH_OPEN_AI_API_CREDENTIAL = [
			`${LANGCHAIN_NODES_PREFIX}openAi`,
			`${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`,
			`${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`,
			`${N8N_NODES_PREFIX}openAi`
		];
		const ndvStore = injectNDVStore();
		const i18n = useI18n();
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, showSuccessCallout, claimCredits } = useFreeAiCredits();
		const isEditingOpenAiCredential = computed(() => props.credentialTypeName && props.credentialTypeName === "openAiApi");
		const activeNodeHasOpenAiApiCredential = computed(() => ndvStore.value.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.value.activeNode.type));
		const isRelevantContext = computed(() => activeNodeHasOpenAiApiCredential.value || isEditingOpenAiCredential.value);
		const showCallout = computed(() => userCanClaimOpenAiCredits.value && isRelevantContext.value);
		const showSuccess = computed(() => showSuccessCallout.value && isRelevantContext.value);
		const onClaimCreditsClicked = async () => {
			if (await claimCredits(props.telemetrySource)) emit("claimed");
		};
		return (_ctx, _cache) => {
			return showCallout.value && !showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				icon: "circle-alert",
				class: "mt-xs"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
					loading: unref(claimingCredits),
					onClick: onClaimCreditsClicked
				}, null, 8, ["label", "loading"])]),
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", { interpolate: { credits: unref(aiCreditsQuota) } })) + " ", 1)]),
				_: 1
			})) : showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "success",
				icon: "circle-check",
				class: "mt-xs"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title", { interpolate: { credits: unref(aiCreditsQuota) } })), 1)]),
					_: 1
				})]),
				_: 1
			})) : (openBlock(), createElementBlock("div", _hoisted_1$4));
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentPanelHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["id"];
var AgentPanelHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPanelHeader",
	props: {
		title: {},
		description: {},
		headerId: {},
		headerVisibility: { default: "visible" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(__props.headerVisibility === "visually-hidden" && !_ctx.$slots.actions ? _ctx.$style.headingOnly : _ctx.$style.row) }, [__props.headerVisibility === "visually-hidden" ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
				key: 0,
				"as-child": ""
			}, {
				default: withCtx(() => [createBaseVNode("h3", { id: __props.headerId }, toDisplayString(__props.title), 9, _hoisted_1$3)]),
				_: 1
			})) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.copy)
			}, [createVNode(unref(N8nText_default), {
				id: __props.headerId,
				tag: "h3",
				step: "sm",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["id"]), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2)), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.actions)
			}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
	headingOnly: "_headingOnly_1v47s_1",
	row: "_row_1v47s_5",
	copy: "_copy_1v47s_11",
	actions: "_actions_1v47s_23"
};
var AgentPanelHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-labelledby"];
var AgentPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPanel",
	props: {
		header: {},
		description: { default: void 0 },
		headerVisibility: { default: "visible" },
		containerClass: {}
	},
	setup(__props) {
		const props = __props;
		const headerId = useId();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass([_ctx.$style.panelContainer, props.containerClass]),
				"aria-labelledby": unref(headerId)
			}, [_ctx.$slots.header ? renderSlot(_ctx.$slots, "header", {
				key: 0,
				headerId: unref(headerId)
			}) : (openBlock(), createBlock(AgentPanelHeader_default, {
				key: 1,
				"header-id": unref(headerId),
				title: props.header,
				"header-visibility": props.headerVisibility,
				description: props.description
			}, createSlots({ _: 2 }, [_ctx.$slots["header-actions"] ? {
				name: "actions",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "header-actions")]),
				key: "0"
			} : void 0]), 1032, [
				"header-id",
				"title",
				"header-visibility",
				"description"
			])), renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$2);
		};
	}
});
var AgentPanel_vue_vue_type_style_index_0_lang_module_default = { panelContainer: "_panelContainer_v2k9n_1" };
var AgentPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentProjectId.ts
/**
* Resolves the project an agent belongs to, with a single source of truth:
* an explicit override (e.g. a `projectId` prop) → the route param →
* the user's personal project → empty string.
*
* Centralising this avoids each component re-deriving the project id with
* subtly different fallbacks (which previously caused project-scoped views to
* fall back to personal-project data).
*/
function useAgentProjectId(override) {
	const route = useRoute();
	const projectsStore = useProjectsStore();
	return computed(() => toValue(override) ?? route.params.projectId ?? projectsStore.personalProject?.id ?? "");
}
var agent_panel_module_default = {
	disabled: "_disabled_ec9ag_1",
	dataEntryLabel: "_dataEntryLabel_ec9ag_6",
	dataEntrySubLabel: "_dataEntrySubLabel_ec9ag_12"
};
//#endregion
//#region src/features/agents/composables/useAgentModelCredentials.ts
function parseStoredCredentials(value) {
	try {
		const raw = JSON.parse(value);
		if (typeof raw !== "object" || raw === null) return {};
		const credentials = {};
		for (const [provider, credentialId] of Object.entries(raw)) {
			if (!isAgentModelProvider(provider)) continue;
			if (typeof credentialId !== "string" && credentialId !== null) continue;
			credentials[provider] = credentialId;
		}
		return credentials;
	} catch {
		return {};
	}
}
function useAgentModelCredentials(userId, projectId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const aiGatewayStore = useAiGatewayStore();
	const settingsStore = useSettingsStore();
	function supportsManagedCredits(provider) {
		if (!settingsStore.isAiGatewayEnabled) return false;
		return getProviderCredentialTypes(provider).some((credentialType) => aiGatewayStore.canServeCredentialType(credentialType));
	}
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: parseStoredCredentials,
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	function getCredentialsForProvider(provider) {
		const credentialsById = /* @__PURE__ */ new Map();
		for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
		return [...credentialsById.values()].toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
	}
	const credentialsByProvider = computed(() => {
		if (!isCredentialsReady.value) return null;
		const credentials = {};
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentials = getCredentialsForProvider(provider);
			const selectedCredentialId = selectedCredentials.value[provider] ?? null;
			credentials[provider] = selectedCredentialId === "__AI_GATEWAY_MANAGED__" && supportsManagedCredits(provider) ? AI_GATEWAY_MANAGED_TAG : selectedCredentialId && providerCredentials.some((credential) => credential.id === selectedCredentialId) ? selectedCredentialId : supportsManagedCredits(provider) ? AI_GATEWAY_MANAGED_TAG : providerCredentials[0]?.id ?? null;
		}
		return credentials;
	});
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => toValue(projectId), async (id) => {
		if (!id) return;
		await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchUsableCredentials({ projectId: id })]);
		isInitialized.value = true;
	}, { immediate: true });
	return {
		credentialsByProvider,
		getCredentialsForProvider,
		selectCredential
	};
}
//#endregion
//#region src/features/agents/composables/useModelCatalog.ts
var catalogByProject = ref({});
var fetchPromises = /* @__PURE__ */ new Map();
var loadingProjects = ref(/* @__PURE__ */ new Set());
var verifiedModelsByKey = ref({});
var verifiedDefaultModelsByKey = ref({});
var unavailableByKey = ref({});
var verifiedFetchesInFlight = /* @__PURE__ */ new Set();
var verificationStatusByKey = ref({});
function createEmptyModelsResponse() {
	const response = {};
	for (const provider of AGENT_MODEL_PROVIDERS) response[provider] = { models: [] };
	return response;
}
function toAgentModel(provider, model) {
	return {
		provider,
		model: model.id,
		name: model.name,
		description: null,
		createdAt: model.releaseDate ?? null,
		metadata: {
			functionCalling: model.toolCall,
			available: true
		}
	};
}
function useModelCatalog() {
	const rootStore = useRootStore();
	const activeProjectId = ref(null);
	const catalog = computed(() => activeProjectId.value ? catalogByProject.value[activeProjectId.value] ?? {} : {});
	const isLoading = computed(() => activeProjectId.value ? loadingProjects.value.has(activeProjectId.value) : false);
	async function ensureLoaded(projectId) {
		activeProjectId.value = projectId;
		if (catalogByProject.value[projectId]) return;
		let fetchPromise = fetchPromises.get(projectId);
		if (!fetchPromise) {
			loadingProjects.value.add(projectId);
			fetchPromise = getModelCatalog(rootStore.restApiContext, projectId).then((result) => {
				catalogByProject.value = {
					...catalogByProject.value,
					[projectId]: result
				};
			}).catch(() => {
				fetchPromises.delete(projectId);
			}).finally(() => {
				loadingProjects.value.delete(projectId);
			});
			fetchPromises.set(projectId, fetchPromise);
		}
		await fetchPromise;
	}
	function getModelsForProvider(provider) {
		const p = catalog.value[provider];
		if (!p) return [];
		return Object.values(p.models).sort((a, b) => a.name.localeCompare(b.name));
	}
	/**
	* Kick off (once per project+provider+credential) the fetch of the
	* provider-verified model list. Idempotent and guarded, so it is safe to
	* trigger from `getModelsForPicker` — when the response lands, the reactive
	* map updates and computeds re-evaluate with the verified list.
	*/
	function ensureVerifiedModels(projectId, provider, providerCredentialId) {
		const key = `${projectId}|${provider}|${providerCredentialId}`;
		if (key in verifiedModelsByKey.value || verifiedFetchesInFlight.has(key)) return;
		verifiedFetchesInFlight.add(key);
		verificationStatusByKey.value = {
			...verificationStatusByKey.value,
			[key]: "loading"
		};
		getProviderModels(rootStore.restApiContext, projectId, provider, providerCredentialId).then((result) => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: result.verified ? result.models : null
			};
			verifiedDefaultModelsByKey.value = {
				...verifiedDefaultModelsByKey.value,
				[key]: result.defaultModelId ?? null
			};
			unavailableByKey.value = {
				...unavailableByKey.value,
				[key]: result.unavailable === true
			};
			verificationStatusByKey.value = {
				...verificationStatusByKey.value,
				[key]: "resolved"
			};
		}).catch(() => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: null
			};
			verificationStatusByKey.value = {
				...verificationStatusByKey.value,
				[key]: "failed"
			};
		}).finally(() => {
			verifiedFetchesInFlight.delete(key);
		});
	}
	function getVerificationStatus(projectId, provider, credentialId) {
		return verificationStatusByKey.value[`${projectId}|${provider}|${credentialId}`] ?? "idle";
	}
	function getModelsForPicker(credentials) {
		const response = createEmptyModelsResponse();
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentialId = credentials?.[provider];
			if (!providerCredentialId) continue;
			let models;
			let unavailable = false;
			const projectId = activeProjectId.value;
			if (projectId) {
				ensureVerifiedModels(projectId, provider, providerCredentialId);
				const key = `${projectId}|${provider}|${providerCredentialId}`;
				models = verifiedModelsByKey.value[key] ?? void 0;
				unavailable = unavailableByKey.value[key] === true;
			}
			if (!models) {
				const providerInfo = catalog.value[provider];
				if (!providerInfo) continue;
				models = Object.values(providerInfo.models);
			}
			response[provider] = {
				models: models.map((model) => toAgentModel(provider, model)).sort((a, b) => a.name.localeCompare(b.name)),
				...unavailable ? { unavailable: true } : {}
			};
		}
		return response;
	}
	function getDefaultModelForPicker(credentials, provider) {
		const credentialId = credentials?.[provider];
		const projectId = activeProjectId.value;
		if (!credentialId || !projectId) return null;
		ensureVerifiedModels(projectId, provider, credentialId);
		const defaultModelId = verifiedDefaultModelsByKey.value[`${projectId}|${provider}|${credentialId}`];
		if (!defaultModelId) return null;
		return getModelsForPicker(credentials)[provider]?.models.find((model) => model.model === defaultModelId) ?? null;
	}
	return {
		catalog,
		isLoading,
		ensureLoaded,
		getVerificationStatus,
		getModelsForProvider,
		getModelsForPicker,
		getDefaultModelForPicker
	};
}
//#endregion
//#region src/features/agents/utils/model-string.ts
/**
* Model identifier helpers. The canonical storage format is `"<provider>/<name>"`.
* Centralised here because multiple callers (Agent info panel, memory panel,
* sub-agents panel) used to roll their own and drifted on naming + edge cases.
*/
/** Split `"<provider>/<name>"` on the first `/`. Returns null when malformed. */
function parseModelString(model) {
	if (!AGENT_MODEL_STRING_REGEX.test(model)) return null;
	const slashIndex = model.indexOf("/");
	return {
		provider: model.slice(0, slashIndex),
		name: model.slice(slashIndex + 1)
	};
}
/** Build the canonical string. Pass-through for already-string inputs. */
function modelToString(raw) {
	if (!raw) return "";
	if (typeof raw === "string") return raw;
	return `${raw.provider ?? ""}/${raw.name ?? ""}`;
}
/** Read just the provider, accepting either string or object form. */
function parseProvider(raw) {
	if (!raw) return "";
	if (typeof raw === "object") return raw.provider ?? "";
	return parseModelString(raw)?.provider ?? "";
}
/**
* Normalise provider-specific id quirks. Currently only Google's `"models/"`
* prefix is stripped — other providers pass through unchanged.
*/
function sanitizeModelId(provider, modelId) {
	if (provider === "google") return modelId.replace(/^models\//, "");
	return modelId;
}
//#endregion
//#region src/features/agents/utils/nativeWebSearch.ts
function isFallbackWebSearchProvider(provider) {
	return provider === "brave" || provider === "searxng";
}
function stripNativeWebSearchProviderTools(providerTools) {
	if (!providerTools) return void 0;
	const next = { ...providerTools };
	for (const key of NATIVE_WEB_SEARCH_PROVIDER_TOOLS) delete next[key];
	return next;
}
function getWebSearchMethod(config, hasNativeWebSearch) {
	const configuredProvider = config?.config?.webSearch?.provider;
	if (isFallbackWebSearchProvider(configuredProvider)) return configuredProvider;
	return hasNativeWebSearch ? "native" : "brave";
}
function getNativeWebSearchArgs(config, providerTool) {
	if (!providerTool) return {};
	if (providerTool === "anthropic.web_search") {
		const matchingTool = ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS.find((tool) => config?.providerTools?.[tool]);
		return { ...matchingTool ? config?.providerTools?.[matchingTool] : {} };
	}
	return { ...config?.providerTools?.[providerTool] ?? {} };
}
function getDefaultNativeWebSearchArgs(providerTool) {
	const defaults = Object.values(NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER).find((defaultsByProvider) => defaultsByProvider.toolName === providerTool);
	return defaults ? { ...defaults.args } : {};
}
function withNativeWebSearchConfig(config, enabled, providerTool, args = {}) {
	const providerTools = { ...stripNativeWebSearchProviderTools(config?.providerTools) ?? {} };
	const changes = { config: {
		...config?.config ?? {},
		webSearch: enabled ? {
			enabled: true,
			provider: "native"
		} : { enabled: false }
	} };
	if (enabled && providerTool) providerTools[providerTool] = {
		...getDefaultNativeWebSearchArgs(providerTool),
		...args
	};
	if (config?.providerTools || enabled && providerTool) changes.providerTools = providerTools;
	return changes;
}
function withWebSearchConfig(config, enabled, method, providerTool, args = {}, credential = "") {
	if (!enabled) return {
		config: {
			...config?.config ?? {},
			webSearch: { enabled: false }
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
	if (method === "native" && providerTool) return withNativeWebSearchConfig(config, true, providerTool, args);
	const webSearch = method === "native" ? { enabled: false } : {
		enabled: true,
		provider: method,
		...credential && { credential }
	};
	return {
		config: {
			...config?.config ?? {},
			webSearch
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
}
function normalizeWebSearchForModelChange(config, nextProviderTool) {
	const webSearch = config?.config?.webSearch;
	if (!webSearch) return config?.providerTools ? { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} } : {};
	const method = getWebSearchMethod(config, Boolean(nextProviderTool));
	if (isFallbackWebSearchProvider(webSearch.provider)) return withWebSearchConfig(config, webSearch.enabled, method, nextProviderTool, {}, webSearch.credential);
	if (!webSearch.enabled) return withWebSearchConfig(config, false, "native", nextProviderTool);
	return nextProviderTool ? withNativeWebSearchConfig(config, true, nextProviderTool) : withWebSearchConfig(config, false, "native", nextProviderTool);
}
//#endregion
//#region src/features/agents/utils/promptCaching.ts
/**
* Prompt caching is mandatory for supported providers (OpenAI/Anthropic): it
* always resolves to `{ enabled: true }` for a newly selected supported
* provider (the user cannot disable it), preserves an explicit Anthropic TTL
* across the switch, and strips the field entirely when the newly selected
* provider doesn't support it.
*
* `currentSubConfig` should be the agent's `config.config`, already merged
* with any other in-flight normalization (e.g. web search) for the same
* model change, so this composes without one normalizer clobbering another.
*/
function normalizePromptCachingForModelChange(currentSubConfig, nextPromptCachingCapability) {
	const current = currentSubConfig?.promptCaching;
	const resolved = resolvePromptCaching(current, nextPromptCachingCapability);
	if (!resolved) {
		if (!current) return {};
		const { promptCaching: _promptCaching, ...restConfig } = currentSubConfig ?? {};
		return { config: Object.keys(restConfig).length > 0 ? restConfig : void 0 };
	}
	return { config: {
		...currentSubConfig ?? {},
		promptCaching: resolved
	} };
}
//#endregion
//#region src/features/agents/utils/reasoning.ts
function normalizeReasoningForModelChange(currentSubConfig, supportsReasoning) {
	if (supportsReasoning !== false || currentSubConfig?.reasoning === void 0) return {};
	const { reasoning: _reasoning, ...restConfig } = currentSubConfig;
	return { config: Object.keys(restConfig).length > 0 ? restConfig : void 0 };
}
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue?vue&type=script&setup=true&lang.ts
var MAX_MODEL_NAME_CHARS = 45;
var MAX_SEARCH_RESULTS_PER_PROVIDER = 10;
var FREE_OPENAI_CREDITS_PROVIDER = "openai";
var FREE_OPENAI_CREDITS_MODEL = "gpt-5-mini";
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue
var AgentModelSelector_default = /* @__PURE__ */ defineComponent({
	__name: "AgentModelSelector",
	props: {
		selectedModel: {},
		credentials: {},
		modelsByProvider: {},
		isLoading: { type: Boolean },
		projectId: {},
		warnMissingCredentials: {
			type: Boolean,
			default: false
		},
		boundCredentialId: { default: null },
		disabled: {
			type: Boolean,
			default: false
		},
		credentialModalAppendToBody: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"change",
		"selectCredential",
		"configureCredential"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownRef");
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const aiGateway = useAiGateway();
		const { ensureLoaded, getDefaultModelForPicker, getVerificationStatus } = useModelCatalog();
		const pendingDefaultCredential = ref(null);
		const forceModelOptionsDisabled = ref(false);
		const isResolvingDefaultModel = computed(() => pendingDefaultCredential.value !== null || forceModelOptionsDisabled.value);
		const aiGatewayBalancePill = computed(() => {
			const balance = aiGateway.balance.value;
			if (balance === void 0) return void 0;
			const depleted = balance <= 0;
			return {
				text: depleted ? i18n.baseText("aiGateway.wallet.noCredits") : i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(balance).toFixed(2)}` } }),
				type: depleted ? "danger" : "default"
			};
		});
		onMounted(() => {
			aiGateway.fetchConfig();
			if (aiGateway.isEnabled.value) aiGateway.fetchWallet();
		});
		const selectedCredentialId = computed(() => __props.selectedModel ? __props.credentials?.[__props.selectedModel.provider] : void 0);
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, claimCreditsAndGetCredential } = useFreeAiCredits({ hasOpenAiCredential: computed(() => Boolean(__props.credentials?.[FREE_OPENAI_CREDITS_PROVIDER])) });
		const selectedCredential = computed(() => selectedCredentialId.value ? credentialsStore.getCredentialById(selectedCredentialId.value) : null);
		const isManagedCredential = computed(() => selectedCredentialId.value === AI_GATEWAY_MANAGED_TAG);
		const selectedCredentialName = computed(() => isManagedCredential.value ? i18n.baseText("aiGateway.credentialMode.n8nConnect.title") : selectedCredential.value?.name);
		const isCredentialsMissing = computed(() => __props.credentials !== null && !isManagedCredential.value && __props.warnMissingCredentials && Boolean(__props.selectedModel?.provider) && !(__props.boundCredentialId && credentialsStore.getCredentialById(__props.boundCredentialId)));
		const selectedLabel = computed(() => __props.selectedModel?.name ?? i18n.baseText("agents.modelSelector.defaultLabel"));
		const triggerCredentialTypeName = computed(() => __props.selectedModel ? getProviderCredentialTypes(__props.selectedModel.provider)[0] : null);
		const projectForPermissions = computed(() => {
			if (__props.projectId) {
				if (projectsStore.currentProject?.id === __props.projectId) return projectsStore.currentProject;
				if (projectsStore.personalProject?.id === __props.projectId) return projectsStore.personalProject;
				return projectsStore.myProjects.find((project) => project.id === __props.projectId) ?? null;
			}
			return projectsStore.currentProject ?? projectsStore.personalProject;
		});
		const createCredentialProjectId = computed(() => projectForPermissions.value?.id ?? __props.projectId ?? projectsStore.personalProject?.id);
		const canCreateCredentials = computed(() => {
			return !!getResourcePermissions(projectForPermissions.value?.scopes).credential.create;
		});
		function getCredentialTypeDisplayName(credentialType) {
			return credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType;
		}
		function getCredentialsForProvider(provider) {
			const credentialsById = /* @__PURE__ */ new Map();
			for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
			return [...credentialsById.values()].toSorted((a, b) => a.name.localeCompare(b.name));
		}
		const canUseFreeOpenAiCredits = computed(() => __props.credentials !== null && canCreateCredentials.value && userCanClaimOpenAiCredits.value);
		const freeOpenAiCreditsDescription = computed(() => i18n.baseText("agents.modelSelector.freeCredits.description", { interpolate: { credits: aiCreditsQuota.value } }));
		function providerToMenuItem(provider) {
			const definition = AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
			const credentialOptions = getCredentialsForProvider(provider);
			const selectedProviderCredentialId = __props.credentials?.[provider] ?? null;
			const models = __props.modelsByProvider[provider]?.models ?? [];
			const modelsUnavailable = __props.modelsByProvider[provider]?.unavailable === true;
			const credentialTypes = getProviderCredentialTypes(provider);
			const isAiGatewayManagedSelected = selectedProviderCredentialId === AI_GATEWAY_MANAGED_TAG;
			const hasProviderCredential = isAiGatewayManagedSelected || selectedProviderCredentialId !== null && credentialOptions.some((credential) => credential.id === selectedProviderCredentialId);
			const credentialItems = credentialOptions.map((credential) => ({
				id: buildMenuItemId(provider, "select", credential.id),
				label: credential.name,
				disabled: false,
				checked: __props.selectedModel?.provider === provider && selectedProviderCredentialId === credential.id,
				keepOpen: true,
				data: { provider }
			}));
			const createCredentialItems = canCreateCredentials.value ? credentialTypes.length === 1 ? [{
				id: buildMenuItemId(provider, "configure", credentialTypes[0]),
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					leadingIcon: "plus"
				}
			}] : [{
				id: `${provider}::configure`,
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					leadingIcon: "plus"
				},
				children: credentialTypes.map((credentialType) => ({
					id: buildMenuItemId(provider, "configure", credentialType),
					label: getCredentialTypeDisplayName(credentialType),
					disabled: false,
					data: {
						provider,
						leadingIcon: "plus"
					}
				}))
			}] : [];
			const gatewayServedCredentialType = aiGateway.isEnabled.value ? credentialTypes.find((credentialType) => aiGateway.canServeCredentialType(credentialType)) : void 0;
			const isAiGatewayManagedAvailable = isAiGatewayManagedSelected || gatewayServedCredentialType !== void 0;
			const n8nCreditsItems = isAiGatewayManagedAvailable ? [{
				id: buildMenuItemId(provider, "n8nConnect", gatewayServedCredentialType ?? credentialTypes[0]),
				label: i18n.baseText("aiGateway.credentialMode.n8nConnect.title"),
				disabled: false,
				checked: isAiGatewayManagedSelected,
				keepOpen: true,
				data: {
					provider,
					actionPill: aiGatewayBalancePill.value
				}
			}] : [];
			const freeOpenAiCreditsItems = provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? [{
				id: buildMenuItemId(FREE_OPENAI_CREDITS_PROVIDER, "freeCredits", FREE_OPENAI_CREDITS_MODEL),
				icon: {
					type: "icon",
					value: "sparkles"
				},
				label: i18n.baseText("agents.modelSelector.freeCredits.label"),
				disabled: claimingCredits.value,
				data: {
					provider,
					credentialType: credentialTypes[0],
					leadingIcon: "sparkles",
					description: freeOpenAiCreditsDescription.value,
					descriptionTooltipTeleported: false
				}
			}] : [];
			const modelItems = hasProviderCredential ? models.map((model) => ({
				id: buildMenuItemId(provider, "model", model.model),
				label: truncateBeforeLast(model.name, MAX_MODEL_NAME_CHARS),
				disabled: isResolvingDefaultModel.value,
				checked: __props.selectedModel?.provider === provider && __props.selectedModel.model === model.model,
				data: {
					provider,
					loading: isResolvingDefaultModel.value,
					description: model.description ?? void 0,
					descriptionTooltipTeleported: false,
					fullName: `${model.name} ${model.model}`,
					credentialType: credentialTypes[0]
				}
			})) : [];
			const statusItems = !hasProviderCredential ? [] : __props.isLoading ? [{
				id: `${provider}::loading`,
				label: i18n.baseText("generic.loadingEllipsis"),
				disabled: true
			}] : modelItems.length === 0 ? [{
				id: `${provider}::empty`,
				label: i18n.baseText(modelsUnavailable ? "agents.modelSelector.modelsUnavailable" : "agents.modelSelector.noModels"),
				disabled: true
			}] : [];
			const connectItems = [
				...freeOpenAiCreditsItems,
				...n8nCreditsItems,
				...credentialItems,
				...createCredentialItems
			];
			const connectHeader = connectItems.length ? [{
				id: `${provider}::header::connect`,
				label: i18n.baseText("agents.modelSelector.connectTo", { interpolate: { provider: definition.displayName } }),
				header: true,
				disabled: true
			}] : [];
			const modelsSection = [...modelItems, ...statusItems];
			const modelsHeader = modelsSection.length ? [{
				id: `${provider}::header::models`,
				label: i18n.baseText("agents.modelSelector.models"),
				header: true,
				disabled: true,
				divided: connectItems.length > 0
			}] : [];
			return {
				id: provider,
				label: definition.displayName,
				data: {
					provider,
					credentialType: credentialTypes[0],
					badgeLabel: provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? i18n.baseText("agents.modelSelector.freeCredits.badge") : void 0,
					actionPill: isAiGatewayManagedAvailable ? {
						text: i18n.baseText(aiGateway.creditsLabelKey.value),
						type: aiGateway.creditsLabelKey.value === "generic.freeCredits" ? "default" : "info"
					} : void 0
				},
				children: [
					...connectHeader,
					...connectItems,
					...modelsHeader,
					...modelsSection
				]
			};
		}
		function isAggregatorProvider(provider) {
			return "isAggregator" in AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
		}
		function isAiGatewayProvider(provider) {
			return aiGateway.isEnabled.value && getProviderCredentialTypes(provider).some((credentialType) => aiGateway.canServeCredentialType(credentialType));
		}
		const menu = computed(() => {
			const selectedProvider = __props.selectedModel?.provider ?? null;
			const aiGatewayProviders = [];
			const aggregatorProviders = [];
			const regularProviders = [];
			for (const provider of AGENT_MODEL_PROVIDERS) {
				if (provider === selectedProvider) continue;
				if (isAiGatewayProvider(provider)) aiGatewayProviders.push(provider);
				else if (isAggregatorProvider(provider)) aggregatorProviders.push(provider);
				else regularProviders.push(provider);
			}
			const menuItems = [];
			if (selectedProvider) {
				const item = providerToMenuItem(selectedProvider);
				menuItems.push({
					...item,
					data: {
						...item.data,
						connectedLabel: i18n.baseText("agents.modelSelector.connected")
					}
				});
			}
			if (aiGatewayProviders.length) {
				menuItems.push({
					id: "n8nConnect::header",
					label: i18n.baseText("agents.modelSelector.includedInN8n"),
					header: true,
					disabled: true
				});
				menuItems.push(...aiGatewayProviders.map(providerToMenuItem));
			}
			[...regularProviders, ...aggregatorProviders].forEach((provider, index) => {
				const item = providerToMenuItem(provider);
				menuItems.push(index === 0 && aiGatewayProviders.length ? {
					...item,
					divided: true
				} : item);
			});
			return menuItems;
		});
		function isSearchableItem(item) {
			return (item.id.includes("::model::") || item.id.includes("::freeCredits::")) && !item.disabled;
		}
		const { search: searchQuery, filteredItems: matchingModelItems, handleSearch } = useDropdownSearch(menu, {
			flatList: true,
			isSearchable: isSearchableItem,
			searchFields: (item) => [item.label, item.data?.fullName],
			mapResult: (item, path) => ({
				...item,
				divided: false,
				data: item.data ? {
					...item.data,
					parts: path.map((pathItem) => pathItem.label),
					descriptionTooltipTeleported: true
				} : void 0
			})
		});
		const filteredMenu = computed(() => {
			if (!searchQuery.value.trim()) return menu.value;
			return menu.value.flatMap((providerItem) => {
				const results = matchingModelItems.value.filter((item) => item.data?.provider === providerItem.id);
				if (results.length <= MAX_SEARCH_RESULTS_PER_PROVIDER) return results;
				return [...results.slice(0, MAX_SEARCH_RESULTS_PER_PROVIDER), {
					...providerItem,
					label: i18n.baseText("agents.modelSelector.moreModels", { interpolate: { provider: providerItem.label } }),
					children: results.slice(MAX_SEARCH_RESULTS_PER_PROVIDER),
					divided: false,
					data: {
						...providerItem.data,
						badgeLabel: void 0,
						actionPill: void 0
					}
				}];
			});
		});
		function selectCredentialAndResolveDefaultModel(provider, credentialId) {
			ensureLoaded(__props.projectId);
			emit("selectCredential", provider, credentialId);
			pendingDefaultCredential.value = {
				provider,
				credentialId
			};
		}
		function getPendingDefaultModelResolution() {
			const pending = pendingDefaultCredential.value;
			if (!pending) return null;
			return {
				pending,
				defaultModel: getDefaultModelForPicker({
					...__props.credentials ?? {},
					[pending.provider]: pending.credentialId
				}, pending.provider),
				status: getVerificationStatus(__props.projectId, pending.provider, pending.credentialId)
			};
		}
		function handleDefaultModelResolution(result) {
			if (!result || result.status === "idle" || result.status === "loading") return;
			if (pendingDefaultCredential.value?.provider !== result.pending.provider || pendingDefaultCredential.value.credentialId !== result.pending.credentialId) return;
			pendingDefaultCredential.value = null;
			if (result.status === "resolved" && result.defaultModel) emit("change", {
				provider: result.defaultModel.provider,
				model: result.defaultModel.model
			}, "auto");
		}
		watch(getPendingDefaultModelResolution, handleDefaultModelResolution);
		function openNewCredential(provider, credentialType) {
			if (!__props.disabled && canCreateCredentials.value) uiStore.openNewCredential(credentialType, false, false, createCredentialProjectId.value, void 0, void 0, void 0, {
				hideAskAssistant: true,
				onCredentialCreated: function selectCreatedCredential(credential) {
					selectCredentialAndResolveDefaultModel(provider, credential.id);
				},
				...__props.credentialModalAppendToBody ? { appendToBody: true } : {}
			});
		}
		async function onSelect(id) {
			if (__props.disabled) return;
			const parsed = parseMenuItemId(id);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return;
			const { provider: providerId, action, value } = parsed;
			if (action === "configure") {
				emit("configureCredential", providerId);
				openNewCredential(providerId, value);
				return;
			}
			if (action === "select") {
				selectCredentialAndResolveDefaultModel(providerId, value);
				return;
			}
			if (action === "n8nConnect") {
				selectCredentialAndResolveDefaultModel(providerId, AI_GATEWAY_MANAGED_TAG);
				return;
			}
			if (action === "freeCredits" && providerId === FREE_OPENAI_CREDITS_PROVIDER) {
				if (!canUseFreeOpenAiCredits.value) return;
				const credential = await claimCreditsAndGetCredential("agentBuilderModelSelector", createCredentialProjectId.value);
				if (!credential) return;
				selectCredentialAndResolveDefaultModel(providerId, credential.id);
				return;
			}
			if (action === "model") {
				pendingDefaultCredential.value = null;
				emit("change", {
					provider: providerId,
					model: value
				});
			}
		}
		function openDropdown() {
			if (!__props.disabled) dropdownRef.value?.open();
		}
		function setModelOptionsDisabled(disabled) {}
		__expose({
			open: openDropdown,
			setModelOptionsDisabled
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiModelSelectorDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: filteredMenu.value,
				"is-loading": __props.isLoading || isResolvingDefaultModel.value,
				"selected-label": selectedLabel.value,
				"selected-credential-name": selectedCredentialName.value,
				"credentials-missing": isCredentialsMissing.value,
				"no-match-label": unref(i18n).baseText("agents.modelSelector.noMatch"),
				disabled: __props.disabled,
				"data-test-id": "agent-model-selector",
				"credential-data-test-id": "agent-model-selector-credential",
				onSearch: unref(handleSearch),
				onSelect
			}, {
				"trigger-leading": withCtx(({ ui }) => [createVNode(ModelSelectorTriggerIcon_default, {
					"credential-type-name": triggerCredentialTypeName.value,
					class: normalizeClass(ui.class)
				}, null, 8, ["credential-type-name", "class"])]),
				"item-leading": withCtx(({ item, ui }) => [createVNode(ModelSelectorItemLeadingIcon_default, {
					item,
					class: normalizeClass(ui.class)
				}, null, 8, ["item", "class"])]),
				_: 1
			}, 8, [
				"items",
				"is-loading",
				"selected-label",
				"selected-credential-name",
				"credentials-missing",
				"no-match-label",
				"disabled",
				"onSearch"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentInfoPanel.vue?vue&type=script&setup=true&lang.ts
/**
* Combined editor for the core agent fields: name, model, and instructions.
* Credential selection is handled inside the model picker — no separate
* credential field.
*/
var _hoisted_1$1 = {
	key: 0,
	"data-testid": "agent-model-panel"
};
var AgentInfoPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentInfoPanel",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		},
		embedded: {
			type: Boolean,
			default: false
		},
		projectId: {},
		showModel: {
			type: Boolean,
			default: true
		},
		showInstructions: {
			type: Boolean,
			default: true
		},
		immediateUpdates: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const instructionsEditorId = useId();
		const usersStore = useUsersStore();
		const credentialsStore = useCredentialsStore();
		const { showError } = useToast();
		const { catalog, ensureLoaded, getModelsForPicker, getDefaultModelForPicker, isLoading } = useModelCatalog();
		const projectId = useAgentProjectId(() => props.projectId);
		const { credentialsByProvider, selectCredential } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectId);
		watch(projectId, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		const configProvider = computed(() => {
			const parsed = parseModelString(modelToString(props.config?.model));
			return parsed && isAgentModelProvider(parsed.provider) ? parsed.provider : null;
		});
		const effectiveCredentials = computed(() => {
			const base = credentialsByProvider.value;
			if (!base) return base;
			const provider = configProvider.value;
			const credential = props.config?.credential;
			if (!provider || !credential) return base;
			return {
				...base,
				[provider]: credential
			};
		});
		const pendingDefaultProvider = ref(null);
		const defaultModelHint = ref(false);
		const filteredAgents = computed(() => getModelsForPicker(effectiveCredentials.value));
		const selectedAgent = computed(() => {
			const modelStr = modelToString(props.config?.model);
			if (!modelStr) return null;
			const parsed = parseModelString(modelStr);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return null;
			const registryEntry = filteredAgents.value[parsed.provider]?.models.find((m) => m.model === parsed.name);
			if (registryEntry) return registryEntry;
			return {
				provider: parsed.provider,
				model: parsed.name,
				name: parsed.name,
				description: null,
				createdAt: null,
				metadata: {
					functionCalling: false,
					available: true
				}
			};
		});
		const azureEndpointType = ref("unknown");
		watch([configProvider, () => props.config?.credential], async ([provider, credentialId]) => {
			azureEndpointType.value = "unknown";
			if (provider !== "azure-openai" || !credentialId || credentialId === "__AI_GATEWAY_MANAGED__") return;
			try {
				const credential = await credentialsStore.getCredentialData({ id: credentialId });
				if (props.config?.credential !== credentialId) return;
				const data = credential && typeof credential.data === "object" ? credential.data : void 0;
				if (data?.endpointType === "classic" || data?.endpointType === "foundry") azureEndpointType.value = data.endpointType;
			} catch {}
		}, { immediate: true });
		const showDeploymentName = computed(() => {
			if (props.disabled || !props.showModel) return false;
			if (configProvider.value !== "azure-openai") return false;
			const credentialId = props.config?.credential;
			if (!credentialId || credentialId === "__AI_GATEWAY_MANAGED__") return false;
			if (!credentialsStore.getCredentialById(credentialId)) return false;
			return azureEndpointType.value !== "foundry";
		});
		const deploymentName = ref(props.config?.modelDeploymentName ?? "");
		const deploymentNameFocused = ref(false);
		watch(() => props.config?.modelDeploymentName ?? "", (value) => {
			if (deploymentNameFocused.value) return;
			if (value !== deploymentName.value) deploymentName.value = value;
			cancelDeploymentNameEmit();
		});
		let deploymentNameEmitTimer;
		function cancelDeploymentNameEmit() {
			if (deploymentNameEmitTimer === void 0) return;
			clearTimeout(deploymentNameEmitTimer);
			deploymentNameEmitTimer = void 0;
		}
		onBeforeUnmount(cancelDeploymentNameEmit);
		function scheduleDeploymentNameEmit(value) {
			cancelDeploymentNameEmit();
			deploymentNameEmitTimer = setTimeout(() => {
				deploymentNameEmitTimer = void 0;
				emit("update:config", { modelDeploymentName: value });
			}, getDebounceTime(DEBOUNCE_TIME.API.HEAVY_OPERATION));
		}
		function onDeploymentNameInput(value) {
			deploymentName.value = value;
			if (props.immediateUpdates) {
				cancelDeploymentNameEmit();
				emit("update:config", { modelDeploymentName: value });
				return;
			}
			scheduleDeploymentNameEmit(value);
		}
		function deriveDefaultDeploymentName(selection) {
			return (filteredAgents.value[selection.provider]?.models.find((m) => m.model === selection.model)?.name ?? selection.model).toLowerCase().replace(/\s+/g, "-");
		}
		function onModelChange(selection, source = "user") {
			const credentialId = effectiveCredentials.value?.[selection.provider];
			if (!credentialId) {
				showError(new Error(i18n.baseText("credentials.noResults")), i18n.baseText("error"));
				return;
			}
			const modelName = sanitizeModelId(selection.provider, selection.model);
			const model = `${selection.provider}/${modelName}`;
			const capabilities = PROVIDER_CAPABILITIES[selection.provider];
			const webSearchChanges = normalizeWebSearchForModelChange(props.config, capabilities?.webSearch ?? false);
			const webSearchConfig = "config" in webSearchChanges ? webSearchChanges.config : props.config?.config;
			const promptCachingChanges = normalizePromptCachingForModelChange(webSearchConfig, capabilities?.promptCaching ?? false);
			const reasoningChanges = normalizeReasoningForModelChange("config" in promptCachingChanges ? promptCachingChanges.config : webSearchConfig, catalog.value[selection.provider]?.models[modelName]?.reasoning);
			defaultModelHint.value = source === "auto";
			cancelDeploymentNameEmit();
			const deploymentNameChange = selection.provider === "azure-openai" && azureEndpointType.value !== "foundry" ? { modelDeploymentName: deriveDefaultDeploymentName(selection) } : {};
			if (deploymentNameChange.modelDeploymentName !== void 0) deploymentName.value = deploymentNameChange.modelDeploymentName;
			emit("update:config", {
				model,
				credential: credentialId,
				...webSearchChanges,
				...promptCachingChanges,
				...reasoningChanges,
				...deploymentNameChange
			}, source === "auto" ? { source: "auto" } : void 0);
		}
		watch(() => pendingDefaultProvider.value ? getDefaultModelForPicker(effectiveCredentials.value, pendingDefaultProvider.value) : null, (defaultModel) => {
			const currentModel = parseModelString(modelToString(props.config?.model));
			if (!defaultModel || props.disabled || currentModel?.provider === defaultModel.provider && currentModel.name === defaultModel.model) {
				pendingDefaultProvider.value = null;
				return;
			}
			pendingDefaultProvider.value = null;
			onModelChange(defaultModel, "auto");
		});
		const initialDefaultSeeded = ref(false);
		watch([effectiveCredentials, () => props.config], ([credentials, config]) => {
			if (initialDefaultSeeded.value || props.disabled) return;
			if (!credentials || !config || modelToString(config.model)) return;
			const provider = AGENT_MODEL_PROVIDERS.find((candidate) => credentials[candidate] && credentials[candidate] !== "__AI_GATEWAY_MANAGED__") ?? (credentials.openai === "__AI_GATEWAY_MANAGED__" ? "openai" : void 0);
			if (!provider) return;
			initialDefaultSeeded.value = true;
			pendingDefaultProvider.value = provider;
		}, { immediate: true });
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
			if (parseModelString(modelToString(props.config?.model))?.provider === provider && credentialId) emit("update:config", { credential: credentialId });
		}
		const instructions = ref(props.config?.instructions ?? "");
		watch(() => props.config?.instructions ?? "", (value) => {
			if (value !== instructions.value) instructions.value = value;
		});
		const emitInstructionsDebounced = useDebounceFn(() => {
			emit("update:config", { instructions: instructions.value });
		}, getDebounceTime(DEBOUNCE_TIME.API.HEAVY_OPERATION));
		function onInstructionsInput(value) {
			instructions.value = value;
			if (props.immediateUpdates) {
				emit("update:config", { instructions: value });
				return;
			}
			emitInstructionsDebounced();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentPanel_default, {
				header: unref(i18n).baseText("agents.builder.agent.title"),
				"header-visibility": "visually-hidden",
				"data-testid": "agent-info-panel",
				"container-class": _ctx.$style.containerClass
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panels) }, [
					props.showModel ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
							step: "sm",
							bold: "",
							class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.label")) + " ", 1), createVNode(unref(N8nText_default), {
								step: "sm",
								bold: "",
								color: "danger"
							}, {
								default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("*", -1)])]),
								_: 1
							})]),
							_: 1
						}, 8, ["class"]), createVNode(unref(N8nText_default), {
							step: "sm",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.description")), 1)]),
							_: 1
						})], 2),
						createVNode(AgentModelSelector_default, {
							disabled: props.disabled,
							"selected-model": selectedAgent.value,
							credentials: effectiveCredentials.value,
							"models-by-provider": filteredAgents.value,
							"is-loading": unref(isLoading),
							"project-id": unref(projectId),
							"warn-missing-credentials": true,
							"bound-credential-id": props.config?.credential ?? null,
							"data-testid": "agent-model-selector",
							onChange: onModelChange,
							onSelectCredential
						}, null, 8, [
							"disabled",
							"selected-model",
							"credentials",
							"models-by-provider",
							"is-loading",
							"project-id",
							"bound-credential-id"
						]),
						defaultModelHint.value && !props.disabled ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "info",
							slim: "",
							class: normalizeClass(_ctx.$style.defaultHint),
							"data-testid": "agent-default-model-hint"
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultHintBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.defaultHintText) }, [createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("agents.builder.agent.model.defaultSelected.title")), 1), createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.agent.model.defaultSelected.description")), 1)], 2), createVNode(unref(N8nIconButton_default), {
								icon: "x",
								variant: "ghost",
								size: "small",
								title: unref(i18n).baseText("agents.builder.agent.model.defaultSelected.dismiss"),
								"data-testid": "agent-default-model-hint-dismiss",
								onClick: _cache[0] || (_cache[0] = ($event) => defaultModelHint.value = false)
							}, null, 8, ["title"])], 2)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					], 2), showDeploymentName.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.field),
						"data-testid": "agent-deployment-name-field"
					}, [
						createBaseVNode("label", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
							step: "sm",
							bold: "",
							class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.deploymentName.label")), 1)]),
							_: 1
						}, 8, ["class"])], 2),
						createVNode(unref(Input_default), {
							"model-value": deploymentName.value,
							placeholder: unref(i18n).baseText("agents.builder.agent.model.deploymentName.placeholder"),
							disabled: props.disabled,
							"data-testid": "agent-deployment-name",
							onFocus: _cache[1] || (_cache[1] = ($event) => deploymentNameFocused.value = true),
							onBlur: _cache[2] || (_cache[2] = ($event) => deploymentNameFocused.value = false),
							"onUpdate:modelValue": onDeploymentNameInput
						}, null, 8, [
							"model-value",
							"placeholder",
							"disabled"
						]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.deploymentName.description")), 1)]),
							_: 1
						})
					], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true),
					props.showModel && props.showInstructions ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider),
						"aria-hidden": "true"
					}, null, 2)) : createCommentVNode("", true),
					props.showInstructions ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.field),
						"data-testid": "agent-instructions-panel"
					}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.label")) + " ", 1), createVNode(unref(N8nText_default), {
							step: "sm",
							bold: "",
							color: "danger"
						}, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("*", -1)])]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						step: "sm",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.description")), 1)]),
						_: 1
					})], 2), createVNode(unref(MarkdownEditor_default), {
						id: unref(instructionsEditorId),
						class: normalizeClass(_ctx.$style.instructionsDocument),
						"model-value": instructions.value,
						disabled: props.disabled,
						placeholder: unref(i18n).baseText("agents.builder.agent.instructions.placeholder"),
						"is-collapsible": "",
						"show-toolbar": "floating",
						variant: "ghost",
						"data-testid": "agent-instructions-document",
						"onUpdate:modelValue": onInstructionsInput
					}, null, 8, [
						"id",
						"class",
						"model-value",
						"disabled",
						"placeholder"
					])], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["header", "container-class"]);
		};
	}
});
var AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default = {
	panels: "_panels_x6z7e_2",
	instructionsDocument: "_instructionsDocument_x6z7e_15",
	field: "_field_x6z7e_25",
	label: "_label_x6z7e_31",
	defaultHint: "_defaultHint_x6z7e_38",
	defaultHintBody: "_defaultHintBody_x6z7e_42",
	defaultHintText: "_defaultHintText_x6z7e_49",
	divider: "_divider_x6z7e_54",
	containerClass: "_containerClass_x6z7e_61"
};
var AgentInfoPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentInfoPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentCapabilityIssueMessages.ts
function useAgentCapabilityIssueMessages(getValidationIssues) {
	const i18n = useI18n();
	function issueMessage(issue) {
		return i18n.baseText(resolveAgentValidationIssueMessageKey(issue), { interpolate: getAgentValidationIssueInterpolation(issue) });
	}
	function issueMessages(issues) {
		return [...new Set(issues.map(issueMessage))];
	}
	function groupIssueMessages(kind, keyOf, include = () => true) {
		const byKey = /* @__PURE__ */ new Map();
		for (const issue of getValidationIssues()) {
			if (issue.capability.kind !== kind || !include(issue)) continue;
			const key = keyOf(issue);
			if (key === void 0) continue;
			const existing = byKey.get(key);
			if (existing) existing.push(issue);
			else byKey.set(key, [issue]);
		}
		return new Map([...byKey].map(([key, issues]) => [key, issueMessages(issues)]));
	}
	return { groupIssueMessages };
}
function toUngroupedToolRow(row) {
	const item = {
		index: row.index,
		label: row.label,
		nodeType: row.nodeType,
		openTarget: row.openTarget,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons
	};
	return {
		index: row.index,
		label: row.label,
		typeLabel: row.typeLabel,
		nodeType: row.nodeType,
		fallbackIcon: row.fallbackIcon,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons,
		warning: row.warning,
		warningReasons: row.warningReasons,
		isGrouped: false,
		tool: item
	};
}
function toGroupedToolRow(group) {
	const [first] = group;
	return {
		index: first.index,
		label: `${group.length} ${first.typeLabel}`,
		typeLabel: first.typeLabel,
		nodeType: first.nodeType,
		fallbackIcon: first.fallbackIcon,
		invalid: group.some((row) => row.invalid),
		invalidReasons: [...new Set(group.flatMap((row) => row.invalidReasons))],
		warning: group.some((row) => row.warning),
		warningReasons: [...new Set(group.flatMap((row) => row.warningReasons))],
		isGrouped: true,
		tools: group.map((row) => ({
			index: row.index,
			label: row.label,
			nodeType: row.nodeType,
			openTarget: row.openTarget,
			invalid: row.invalid,
			invalidReasons: row.invalidReasons
		}))
	};
}
function buildToolRows(rows) {
	const groupedRows = [];
	const nodeGroups = /* @__PURE__ */ new Map();
	for (const row of rows) {
		/**
		* Only node tools with a resolved node type are eligible for grouping.
		* Workflow tools, custom tools, and unresolved node tools stay ungrouped
		* because this grouping logic relies on nodeType.name as the canonical key
		* and on the resolved node type for the grouped label/icon.
		*/
		if (row.toolType !== "node" || !row.nodeType) {
			groupedRows.push(toUngroupedToolRow(row));
			continue;
		}
		const group = nodeGroups.get(row.nodeType.name);
		if (group) {
			group.push(row);
			continue;
		}
		nodeGroups.set(row.nodeType.name, [row]);
	}
	for (const group of nodeGroups.values()) {
		if (group.length >= 2) {
			groupedRows.push(toGroupedToolRow(group));
			continue;
		}
		groupedRows.push(...group.map(toUngroupedToolRow));
	}
	return groupedRows.sort((left, right) => left.index - right.index);
}
//#endregion
//#region src/features/agents/components/AgentChipRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["inert"];
var AgentChipRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChipRow",
	props: {
		label: {},
		itemCount: {},
		addLabel: {},
		addButtonTestId: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		},
		showLabel: {
			type: Boolean,
			default: true
		}
	},
	emits: ["add"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.row),
				inert: props.disabled || void 0
			}, [props.showLabel && props.itemCount > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				bold: "",
				class: normalizeClass(_ctx.$style.label)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.label), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [renderSlot(_ctx.$slots, "default"), props.itemCount > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: props.addLabel,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "medium",
					"icon-only": "",
					"aria-label": props.addLabel,
					disabled: props.disabled,
					"data-testid": props.addButtonTestId,
					onClick: _cache[0] || (_cache[0] = ($event) => emit("add"))
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: 16,
						color: "text-light"
					})]),
					_: 1
				}, 8, [
					"aria-label",
					"disabled",
					"data-testid"
				])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyAddButton),
				variant: "ghost",
				size: "medium",
				disabled: props.disabled,
				"data-testid": props.addButtonTestId,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("add"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.addLabel), 1)]),
				_: 1
			}, 8, [
				"class",
				"disabled",
				"data-testid"
			]))], 2), _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.extra)
			}, [renderSlot(_ctx.$slots, "extra")], 2)) : createCommentVNode("", true)], 2)], 10, _hoisted_1);
		};
	}
});
var AgentChipRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_16ds0_1",
	label: "_label_16ds0_7",
	content: "_content_16ds0_14",
	chips: "_chips_16ds0_21",
	emptyAddButton: "_emptyAddButton_16ds0_29",
	extra: "_extra_16ds0_40"
};
var AgentChipRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChipRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChipRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSkillsSection.vue?vue&type=script&setup=true&lang.ts
var AgentSkillsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSkillsSection",
	props: {
		skills: {},
		disabled: {
			type: Boolean,
			default: false
		},
		showLabel: {
			type: Boolean,
			default: true
		},
		validationIssues: { default: () => [] }
	},
	emits: [
		"open-skill",
		"add-skill",
		"remove-skill"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { groupIssueMessages } = useAgentCapabilityIssueMessages(() => props.validationIssues);
		const skillIssueMessages = computed(() => groupIssueMessages("skill", (issue) => issue.capability.id));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentChipRow_default, {
				label: unref(i18n).baseText("agents.builder.skills.title"),
				"item-count": __props.skills.length,
				"add-label": unref(i18n).baseText("agents.builder.skills.add"),
				"add-button-test-id": "agent-capabilities-add-skill",
				disabled: props.disabled,
				"show-label": props.showLabel,
				onAdd: _cache[0] || (_cache[0] = ($event) => emit("add-skill"))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.skills, ({ id, skill }) => {
					return openBlock(), createElementBlock("div", {
						key: id,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(AgentChipButton_default, {
						icon: "book-open",
						invalid: (skillIssueMessages.value.get(id) ?? []).length > 0,
						"invalid-reasons": skillIssueMessages.value.get(id) ?? [],
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.skillChip),
						"data-testid": "agent-capabilities-skill-row",
						onClick: ($event) => emit("open-skill", id)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(skill.name || id), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					])], 2);
				}), 128))]),
				_: 1
			}, 8, [
				"label",
				"item-count",
				"add-label",
				"disabled",
				"show-label"
			]);
		};
	}
});
var AgentSkillsSection_vue_vue_type_style_index_0_lang_module_default = {
	chipGroup: "_chipGroup_2zv1u_1",
	skillChip: "_skillChip_2zv1u_9"
};
var AgentSkillsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSkillsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSkillsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentWebSearchSection.vue?vue&type=script&setup=true&lang.ts
var ANTHROPIC_WEB_SEARCH_DEFAULT_MAX_USES = 5;
var AgentWebSearchSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentWebSearchSection",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		},
		projectId: {}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const DEFAULT_CAPABILITIES = { webSearch: false };
		const searchContextSizeSegments = computed(function getSearchContextSizeSegments() {
			return [
				{
					label: i18n.baseText("agents.builder.advanced.webSearch.contextSize.low"),
					value: "low"
				},
				{
					label: i18n.baseText("agents.builder.advanced.webSearch.contextSize.medium"),
					value: "medium"
				},
				{
					label: i18n.baseText("agents.builder.advanced.webSearch.contextSize.high"),
					value: "high"
				}
			];
		});
		const provider = computed(() => parseProvider(props.config?.model));
		const capabilities = computed(() => PROVIDER_CAPABILITIES[provider.value] ?? DEFAULT_CAPABILITIES);
		const hasNativeWebSearch = computed(() => Boolean(capabilities.value.webSearch));
		const nativeWebSearchLabel = computed(() => isAgentModelProvider(provider.value) ? AGENT_MODEL_PROVIDER_DEFINITIONS[provider.value].displayName : provider.value);
		const webSearchMenuItems = computed(() => [
			{
				id: "off",
				label: i18n.baseText("agents.builder.advanced.webSearch.method.off"),
				checked: webSearchMethod.value === "off"
			},
			...capabilities.value.webSearch ? [{
				id: "native",
				label: nativeWebSearchLabel.value,
				checked: webSearchMethod.value === "native"
			}] : [],
			{
				id: "brave",
				label: i18n.baseText("agents.builder.advanced.webSearch.fallbackProvider.brave"),
				checked: webSearchMethod.value === "brave",
				divided: true
			},
			{
				id: "searxng",
				label: i18n.baseText("agents.builder.advanced.webSearch.fallbackProvider.searxng"),
				checked: webSearchMethod.value === "searxng"
			}
		]);
		const selectedWebSearchLabel = computed(() => webSearchMenuItems.value.find((item) => item.checked)?.label ?? "");
		const webSearchEnabled = ref(props.config?.config?.webSearch?.enabled === true);
		const webSearchMethod = ref(webSearchEnabled.value ? getWebSearchMethod(props.config, hasNativeWebSearch.value) : "off");
		const webSearchArgs = ref(getNativeWebSearchArgs(props.config, capabilities.value.webSearch));
		const webSearchMaxUses = ref("");
		const webSearchExternalAccess = ref(true);
		const webSearchContextSize = ref("medium");
		const fallbackWebSearchProvider = ref(props.config?.config?.webSearch?.provider === "searxng" ? "searxng" : "brave");
		const fallbackWebSearchCredential = ref(props.config?.config?.webSearch?.credential ?? "");
		function syncWebSearchOptions(args) {
			webSearchMaxUses.value = typeof args.maxUses === "number" ? String(args.maxUses) : String(ANTHROPIC_WEB_SEARCH_DEFAULT_MAX_USES);
			webSearchExternalAccess.value = typeof args.externalWebAccess === "boolean" ? args.externalWebAccess : true;
			webSearchContextSize.value = args.searchContextSize === "low" || args.searchContextSize === "medium" || args.searchContextSize === "high" ? args.searchContextSize : "medium";
		}
		syncWebSearchOptions(webSearchArgs.value);
		watch(() => props.config, (cfg) => {
			if (!cfg) return;
			webSearchEnabled.value = cfg.config?.webSearch?.enabled === true;
			webSearchMethod.value = webSearchEnabled.value ? getWebSearchMethod(cfg, hasNativeWebSearch.value) : "off";
			webSearchArgs.value = getNativeWebSearchArgs(cfg, capabilities.value.webSearch);
			fallbackWebSearchProvider.value = webSearchMethod.value === "searxng" ? "searxng" : "brave";
			fallbackWebSearchCredential.value = cfg.config?.webSearch?.credential ?? "";
			syncWebSearchOptions(webSearchArgs.value);
		}, { deep: true });
		const fallbackCredentialType = computed(() => webSearchMethod.value === "searxng" ? "searXngApi" : "braveSearchApi");
		const fallbackCredentials = computed(() => credentialsStore.allCredentials.filter((credential) => credential.type === fallbackCredentialType.value).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credentialsStore.getCredentialTypeByName(credential.type)?.displayName,
			homeProject: credential.homeProject
		})));
		const projectForPermissions = computed(() => {
			if (projectsStore.currentProject?.id === props.projectId) return projectsStore.currentProject;
			if (projectsStore.personalProject?.id === props.projectId) return projectsStore.personalProject;
			return projectsStore.myProjects.find((project) => project.id === props.projectId) ?? null;
		});
		const credentialPermissions = computed(() => {
			const permissions = getResourcePermissions(projectForPermissions.value?.scopes).credential;
			return {
				...permissions,
				create: !!permissions.create
			};
		});
		function buildWebSearchArgs() {
			const tool = capabilities.value.webSearch;
			if (!tool || webSearchMethod.value !== "native") return {};
			if (tool === "anthropic.web_search") {
				const maxUses = Number(webSearchMaxUses.value);
				return { ...Number.isFinite(maxUses) && maxUses > 0 && { maxUses } };
			}
			if (tool === "openai.web_search") return {
				externalWebAccess: webSearchExternalAccess.value,
				searchContextSize: webSearchContextSize.value
			};
			return {};
		}
		function emitWebSearchConfig() {
			if (!webSearchEnabled.value) return;
			const method = webSearchMethod.value === "off" ? "native" : webSearchMethod.value;
			emit("update:config", withWebSearchConfig(props.config, true, method, capabilities.value.webSearch, buildWebSearchArgs(), fallbackWebSearchCredential.value));
		}
		function onWebSearchOptionInput() {
			emitWebSearchConfig();
		}
		function onWebSearchContextSizeChange(value) {
			webSearchContextSize.value = value;
			onWebSearchOptionInput();
		}
		function onWebSearchMethodChange(value) {
			webSearchMethod.value = value;
			webSearchEnabled.value = value !== "off";
			const method = value === "off" ? "native" : value;
			const nextFallbackProvider = value === "brave" || value === "searxng" ? value : null;
			if (nextFallbackProvider && nextFallbackProvider !== fallbackWebSearchProvider.value) fallbackWebSearchCredential.value = "";
			if (nextFallbackProvider) fallbackWebSearchProvider.value = nextFallbackProvider;
			emit("update:config", withWebSearchConfig(props.config, webSearchEnabled.value, method, capabilities.value.webSearch, buildWebSearchArgs(), fallbackWebSearchCredential.value));
		}
		function onFallbackCredentialChange(value) {
			fallbackWebSearchCredential.value = value;
			emit("update:config", withWebSearchConfig(props.config, webSearchEnabled.value, webSearchMethod.value === "off" ? "native" : webSearchMethod.value, capabilities.value.webSearch, buildWebSearchArgs(), value));
		}
		function onCreateFallbackCredential() {
			if (props.disabled || !credentialPermissions.value.create) return;
			uiStore.openNewCredential(fallbackCredentialType.value, false, false, props.projectId, void 0, void 0, void 0, {
				hideAskAssistant: true,
				onCredentialCreated: (credential) => onFallbackCredentialChange(credential.id)
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.content),
				"data-testid": "agent-web-search-content"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingGroup) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
				step: "sm",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				step: "sm",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.hint")), 1)]),
				_: 1
			})], 2), createVNode(unref(DropdownMenu_default), {
				items: webSearchMenuItems.value,
				disabled: props.disabled,
				placement: "bottom-end",
				"data-testid": "agent-web-search-method",
				onSelect: onWebSearchMethodChange
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput)
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.dropdownTriggerLabel) }, toDisplayString(selectedWebSearchLabel.value), 3), createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: "small",
						color: "text-light"
					})]),
					_: 1
				}, 8, ["disabled", "class"])]),
				_: 1
			}, 8, ["items", "disabled"])], 2), webSearchEnabled.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.subSettings),
				"data-testid": "agent-web-search-settings"
			}, [
				webSearchMethod.value === "native" && capabilities.value.webSearch === "anthropic.web_search" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.row)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.maxUses.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.maxUses.hint")), 1)]),
					_: 1
				})], 2), createVNode(unref(N8nInputNumber_default), {
					"model-value": Number(webSearchMaxUses.value),
					min: 1,
					precision: 0,
					controls: false,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-web-search-max-uses",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => {
						webSearchMaxUses.value = String(v);
						onWebSearchOptionInput();
					})
				}, null, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2)) : createCommentVNode("", true),
				webSearchMethod.value === "native" && capabilities.value.webSearch === "openai.web_search" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.row)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.externalAccess.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.externalAccess.hint")), 1)]),
					_: 1
				})], 2), createVNode(unref(Switch_default), {
					"model-value": webSearchExternalAccess.value,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.switchControl),
					"data-testid": "agent-web-search-external-access",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => {
						webSearchExternalAccess.value = Boolean(v);
						onWebSearchOptionInput();
					})
				}, null, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2)) : createCommentVNode("", true),
				webSearchMethod.value === "native" && capabilities.value.webSearch === "openai.web_search" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.row)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.contextSize.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.contextSize.hint")), 1)]),
					_: 1
				})], 2), createVNode(unref(N8nSegmentControl_default), {
					"model-value": webSearchContextSize.value,
					options: searchContextSizeSegments.value,
					size: "default",
					disabled: props.disabled,
					"data-testid": "agent-web-search-context-size",
					"onUpdate:modelValue": onWebSearchContextSizeChange
				}, null, 8, [
					"model-value",
					"options",
					"disabled"
				])], 2)) : createCommentVNode("", true),
				webSearchMethod.value !== "native" ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.row)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.credential.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.credential.hint")), 1)]),
					_: 1
				})], 2), createVNode(AgentCredentialSelect_default, {
					"model-value": fallbackWebSearchCredential.value,
					credentials: fallbackCredentials.value,
					placeholder: unref(i18n).baseText("agents.builder.advanced.webSearch.credential.placeholder"),
					"credential-permissions": credentialPermissions.value,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.credentialSelect),
					"data-test-id": "agent-web-search-fallback-credential",
					"onUpdate:modelValue": onFallbackCredentialChange,
					onCreate: onCreateFallbackCredential
				}, null, 8, [
					"model-value",
					"credentials",
					"placeholder",
					"credential-permissions",
					"disabled",
					"class"
				])], 2)) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var AgentWebSearchSection_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1qtqc_2",
	settingGroup: "_settingGroup_1qtqc_9",
	row: "_row_1qtqc_15",
	rowLabel: "_rowLabel_1qtqc_23",
	subSettings: "_subSettings_1qtqc_31",
	shortInput: "_shortInput_1qtqc_40",
	dropdownTriggerLabel: "_dropdownTriggerLabel_1qtqc_46",
	credentialSelect: "_credentialSelect_1qtqc_52",
	switchControl: "_switchControl_1qtqc_57"
};
var AgentWebSearchSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentWebSearchSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentWebSearchSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentCapabilitiesSection.vue?vue&type=script&setup=true&lang.ts
var AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCapabilitiesSection",
	props: {
		config: {},
		tools: {},
		customTools: {},
		skills: {},
		disabled: {
			type: Boolean,
			default: false
		},
		projectId: {},
		agentId: {},
		isPublished: { type: Boolean },
		taskRefs: { default: () => [] },
		reloadKey: {},
		agentUnsaved: { type: Boolean },
		validationIssues: { default: () => [] },
		sections: { default: () => [
			"tools",
			"skills",
			"subAgents",
			"tasks"
		] }
	},
	emits: [
		"open-tool",
		"open-skill",
		"add-tool",
		"add-skill",
		"remove-tool",
		"remove-skill",
		"toggle-task",
		"tasks-changed",
		"update:config"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visibleSections = computed(() => new Set(props.sections));
		function showSection(section) {
			return visibleSections.value.has(section);
		}
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const { list: projectAgents, ensureLoaded: ensureProjectAgentsLoaded, refresh: refreshProjectAgents } = useProjectAgentsList(computed(() => props.projectId));
		const mcpServers = computed(() => props.config?.mcpServers ?? []);
		const selectedSubAgentRefs = computed(() => props.config?.subAgents?.agents ?? []);
		const selectedSubAgentIds = computed(() => selectedSubAgentRefs.value.map(({ agentId }) => agentId));
		const selectedSubAgentIdSet = computed(() => new Set(selectedSubAgentIds.value));
		const availableSubAgents = computed(() => (projectAgents.value ?? []).filter((agent) => agent.id !== props.agentId && !selectedSubAgentIdSet.value.has(agent.id)));
		const selectedSubAgents = computed(() => selectedSubAgentRefs.value.map(({ agentId, useWhen }) => {
			const agent = projectAgents.value?.find((candidate) => candidate.id === agentId);
			const validationReasons = subAgentIssueMessages.value.get(agentId) ?? [];
			const reasons = validationReasons.length > 0 || agent || projectAgents.value === null ? validationReasons : [i18n.baseText("agents.builder.validation.issue.subAgent.missingReference")];
			return {
				id: agentId,
				name: agent?.name ?? i18n.baseText("agents.builder.subAgents.unavailable"),
				useWhen: useWhen ?? "",
				invalid: reasons.length > 0,
				invalidReasons: reasons
			};
		}));
		const { groupIssueMessages } = useAgentCapabilityIssueMessages(() => props.validationIssues);
		const toolIssueMessages = computed(() => groupIssueMessages("tool", (issue) => issue.capability.index, (issue) => !isWarningIssue(issue)));
		const toolWarningMessages = computed(() => groupIssueMessages("tool", (issue) => issue.capability.index, isWarningIssue));
		const mcpServerIssueMessages = computed(() => groupIssueMessages("mcpServer", (issue) => issue.capability.id));
		const subAgentIssueMessages = computed(() => groupIssueMessages("subAgent", (issue) => issue.capability.id));
		async function ensureSubAgentNamesLoaded() {
			const agents = await ensureProjectAgentsLoaded();
			const loadedIds = new Set(agents.map((agent) => agent.id));
			if (selectedSubAgentIds.value.some((agentId) => !loadedIds.has(agentId))) await refreshProjectAgents();
		}
		onMounted(() => {
			if (showSection("subAgents")) ensureSubAgentNamesLoaded().catch(() => {});
		});
		watch([() => props.projectId, selectedSubAgentIds], () => {
			if (showSection("subAgents")) ensureSubAgentNamesLoaded().catch(() => {});
		});
		function toToolOpenTarget(tool) {
			if (tool.type === "custom") return {
				kind: "tool",
				toolType: "custom",
				id: tool.id
			};
			if (tool.type === "workflow") return {
				kind: "tool",
				toolType: "workflow",
				id: tool.workflow
			};
			return {
				kind: "tool",
				toolType: "node",
				id: tool.name
			};
		}
		const capabilityTools = computed(() => [...props.tools.map((tool, index) => ({
			kind: "tool",
			index,
			tool,
			openTarget: toToolOpenTarget(tool)
		})), ...mcpServers.value.map((server, index) => ({
			kind: "mcpServer",
			index: props.tools.length + index,
			server,
			openTarget: {
				kind: "mcpServer",
				serverName: server.name
			}
		}))]);
		function toolLabel(entry) {
			if (entry.kind === "mcpServer") return formatToolNameForDisplay(entry.server.name);
			const { tool, index } = entry;
			if (tool.type === "custom") return formatToolNameForDisplay((tool.id ? props.customTools?.[tool.id]?.descriptor.name : void 0) ?? tool.id ?? `${tool.type}-${index + 1}`);
			if (tool.type === "workflow") return formatToolNameForDisplay(tool.name ?? tool.workflow ?? `${tool.type}-${index + 1}`);
			return formatToolNameForDisplay(tool.name ?? `${tool.type}-${index + 1}`);
		}
		function toolIcon(entry) {
			if (entry.kind === "mcpServer") return "mcp";
			const { tool } = entry;
			if (tool.type === "workflow") return "workflow";
			if (tool.type === "custom") return "code";
			return "globe";
		}
		function toolNodeType(entry) {
			if (entry.kind === "mcpServer") {
				const preferredTypeName = entry.server.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
				return nodeTypesStore.getNodeType(preferredTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool") ?? null;
			}
			const { tool } = entry;
			const node = toolRefToNode(tool);
			if (!node) return null;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion) ?? null;
		}
		function toolTypeLabel(entry, nodeType = toolNodeType(entry)) {
			if (entry.kind === "mcpServer") return nodeType?.displayName ?? toolLabel(entry);
			const { tool } = entry;
			if (tool.type === "node") return nodeType?.displayName.replace(/ Tool$/, "") ?? toolLabel(entry);
			if (tool.type === "workflow") return i18n.baseText("agents.builder.tools.type.workflow");
			if (tool.type === "custom") return i18n.baseText("agents.builder.tools.type.custom");
			return toolLabel(entry);
		}
		function toolEntryReasons(entry) {
			if (entry.kind === "mcpServer") return mcpServerIssueMessages.value.get(entry.server.name) ?? [];
			return toolIssueMessages.value.get(entry.index) ?? [];
		}
		function buildCapabilityToolRows(entries) {
			return buildToolRows(entries.map((entry) => {
				const nodeType = toolNodeType(entry);
				const reasons = toolEntryReasons(entry);
				const warningReasons = entry.kind === "tool" ? toolWarningMessages.value.get(entry.index) ?? [] : [];
				return {
					index: entry.index,
					label: toolLabel(entry),
					typeLabel: toolTypeLabel(entry, nodeType),
					nodeType,
					fallbackIcon: toolIcon(entry),
					toolType: entry.kind === "tool" ? entry.tool.type : "mcpServer",
					openTarget: entry.openTarget,
					invalid: reasons.length > 0,
					invalidReasons: reasons,
					warning: warningReasons.length > 0,
					warningReasons
				};
			}));
		}
		const toolRows = computed(() => buildCapabilityToolRows(capabilityTools.value.filter((entry) => entry.kind === "mcpServer" || entry.tool.type !== "workflow")));
		const workflowRows = computed(() => buildCapabilityToolRows(capabilityTools.value.filter((entry) => entry.kind === "tool" && entry.tool.type === "workflow")).filter((row) => !row.isGrouped));
		const capabilityRowItemCounts = computed(() => ({
			tools: toolRows.value.length,
			workflows: workflowRows.value.length,
			skills: props.skills.length,
			subAgents: selectedSubAgents.value.length
		}));
		const orderedCapabilityRows = computed(() => {
			const rows = props.sections.flatMap((section) => {
				if (section === "tasks") return [];
				if (section === "tools") return ["tools", "workflows"];
				return [section];
			});
			return [...rows.filter((row) => capabilityRowItemCounts.value[row] > 0), ...rows.filter((row) => capabilityRowItemCounts.value[row] === 0)];
		});
		function toTargetKey(target) {
			if (target.kind === "mcpServer") return `mcpServer:${encodeURIComponent(target.serverName)}`;
			return `tool:${target.toolType}:${encodeURIComponent(target.id)}`;
		}
		function fromTargetKey(key) {
			const [scope, toolType, ...rest] = key.split(":");
			if (scope === "mcpServer") {
				const encodedServerName = toolType;
				if (!encodedServerName) return null;
				return {
					kind: "mcpServer",
					serverName: decodeURIComponent(encodedServerName)
				};
			}
			if (scope !== "tool") return null;
			if (toolType !== "node" && toolType !== "workflow" && toolType !== "custom") return null;
			const encodedId = rest.join(":");
			if (!encodedId) return null;
			return {
				kind: "tool",
				toolType,
				id: decodeURIComponent(encodedId)
			};
		}
		function toolMenuItems(tool) {
			if (!tool.isGrouped) return [];
			return tool.tools.map((item) => ({
				id: toTargetKey(item.openTarget),
				label: item.label,
				data: {
					nodeType: item.nodeType,
					openTarget: item.openTarget,
					invalid: item.invalid,
					invalidReasons: item.invalidReasons
				}
			}));
		}
		function onToolMenuSelect(key) {
			const target = fromTargetKey(key);
			if (!target) return;
			emit("open-tool", target);
		}
		function emitSubAgentRefs(agents) {
			emit("update:config", { subAgents: {
				...props.config?.subAgents ?? {},
				agents
			} });
		}
		function toSubAgentRef(agentId, useWhen) {
			return {
				agentId,
				...useWhen ? { useWhen } : {}
			};
		}
		async function openSubAgentsModal() {
			try {
				await ensureProjectAgentsLoaded();
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.subAgents.loadError"));
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					agents: availableSubAgents.value.map(({ id, name }) => ({
						id,
						name
					})),
					onConfirm: ({ agentId, useWhen }) => {
						if (selectedSubAgentIdSet.value.has(agentId)) return;
						emitSubAgentRefs([...selectedSubAgentRefs.value, toSubAgentRef(agentId, useWhen)]);
					}
				}
			});
		}
		function openExistingSubAgentModal(subAgent) {
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					selectedAgent: {
						id: subAgent.id,
						name: subAgent.name
					},
					agentHref: `/projects/${encodeURIComponent(props.projectId)}/agents/${encodeURIComponent(subAgent.id)}`,
					useWhen: subAgent.useWhen,
					invalidReasons: subAgent.invalidReasons,
					onConfirm: ({ agentId, useWhen }) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.map((ref) => ref.agentId === agentId ? toSubAgentRef(agentId, useWhen) : ref));
					},
					onRemove: (agentId) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.filter((ref) => ref.agentId !== agentId));
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.section),
				"data-testid": "agent-capabilities-section"
			}, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(orderedCapabilityRows.value, (section) => {
					return openBlock(), createElementBlock(Fragment, { key: section }, [section === "tools" ? (openBlock(), createBlock(AgentChipRow_default, {
						key: 0,
						label: unref(i18n).baseText("agents.builder.tools.title"),
						"item-count": toolRows.value.length,
						"add-label": unref(i18n).baseText("agents.builder.tools.add"),
						"add-button-test-id": "agent-capabilities-add-tool",
						disabled: props.disabled,
						onAdd: _cache[0] || (_cache[0] = ($event) => emit("add-tool", "tools"))
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(toolRows.value, (tool) => {
							return openBlock(), createElementBlock("div", {
								key: `tool-${tool.index}`,
								class: normalizeClass(_ctx.$style.chipGroup)
							}, [tool.isGrouped ? (openBlock(), createBlock(unref(DropdownMenu_default), {
								key: 0,
								items: toolMenuItems(tool),
								disabled: props.disabled,
								placement: "bottom-start",
								"data-testid": "agent-capabilities-tool-group",
								onSelect: onToolMenuSelect
							}, {
								trigger: withCtx(() => [createVNode(AgentChipButton_default, {
									invalid: tool.invalid,
									"invalid-reasons": tool.invalidReasons,
									warning: tool.warning,
									"warning-reasons": tool.warningReasons,
									disabled: props.disabled,
									class: normalizeClass(_ctx.$style.capabilityChip),
									"data-testid": "agent-capabilities-tool-row"
								}, {
									icon: withCtx(() => [createVNode(NodeIcon_default, {
										"node-type": tool.nodeType,
										size: 16
									}, null, 8, ["node-type"])]),
									default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.groupChipLabel) }, [createTextVNode(toDisplayString(tool.label) + " ", 1), createVNode(unref(N8nIcon_default), {
										icon: "chevron-down",
										size: 12,
										color: "text-light"
									})], 2)]),
									_: 2
								}, 1032, [
									"invalid",
									"invalid-reasons",
									"warning",
									"warning-reasons",
									"disabled",
									"class"
								])]),
								"item-leading": withCtx(({ item, ui }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
									key: 0,
									"node-type": item.data.nodeType,
									size: 16,
									class: normalizeClass(ui.class)
								}, null, 8, ["node-type", "class"])) : createCommentVNode("", true)]),
								"item-trailing": withCtx(({ item }) => [item.data?.invalid ? (openBlock(), createBlock(unref(N8nTooltip_default), {
									key: 0,
									disabled: (item.data.invalidReasons ?? []).length === 0,
									placement: "top"
								}, {
									content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.invalidReasons, (reason) => {
										return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
									}), 128))]),
									default: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "triangle-alert",
										size: 14,
										"data-testid": "agent-capabilities-tool-menu-invalid-icon"
									})]),
									_: 2
								}, 1032, ["disabled"])) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["items", "disabled"])) : tool.nodeType ? (openBlock(), createBlock(AgentChipButton_default, {
								key: 1,
								invalid: tool.invalid,
								"invalid-reasons": tool.invalidReasons,
								warning: tool.warning,
								"warning-reasons": tool.warningReasons,
								disabled: props.disabled,
								class: normalizeClass(_ctx.$style.capabilityChip),
								"data-testid": "agent-capabilities-tool-row",
								onClick: ($event) => emit("open-tool", tool.tool.openTarget)
							}, {
								icon: withCtx(() => [createVNode(NodeIcon_default, {
									"node-type": tool.nodeType,
									size: 16
								}, null, 8, ["node-type"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(tool.label), 1)]),
								_: 2
							}, 1032, [
								"invalid",
								"invalid-reasons",
								"warning",
								"warning-reasons",
								"disabled",
								"class",
								"onClick"
							])) : (openBlock(), createBlock(AgentChipButton_default, {
								key: 2,
								icon: tool.fallbackIcon,
								invalid: tool.invalid,
								"invalid-reasons": tool.invalidReasons,
								warning: tool.warning,
								"warning-reasons": tool.warningReasons,
								disabled: props.disabled,
								class: normalizeClass(_ctx.$style.capabilityChip),
								"data-testid": "agent-capabilities-tool-row",
								onClick: ($event) => emit("open-tool", tool.tool.openTarget)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(tool.label), 1)]),
								_: 2
							}, 1032, [
								"icon",
								"invalid",
								"invalid-reasons",
								"warning",
								"warning-reasons",
								"disabled",
								"class",
								"onClick"
							]))], 2);
						}), 128))]),
						_: 1
					}, 8, [
						"label",
						"item-count",
						"add-label",
						"disabled"
					])) : section === "workflows" ? (openBlock(), createBlock(AgentChipRow_default, {
						key: 1,
						label: unref(i18n).baseText("generic.workflows"),
						"item-count": workflowRows.value.length,
						"add-label": unref(i18n).baseText("workflows.add"),
						"add-button-test-id": "agent-capabilities-add-workflow",
						disabled: props.disabled,
						onAdd: _cache[1] || (_cache[1] = ($event) => emit("add-tool", "workflows"))
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(workflowRows.value, (workflow) => {
							return openBlock(), createElementBlock("div", {
								key: `workflow-${workflow.index}`,
								class: normalizeClass(_ctx.$style.chipGroup)
							}, [createVNode(AgentChipButton_default, {
								icon: workflow.fallbackIcon,
								invalid: workflow.invalid,
								"invalid-reasons": workflow.invalidReasons,
								warning: workflow.warning,
								"warning-reasons": workflow.warningReasons,
								disabled: props.disabled,
								class: normalizeClass(_ctx.$style.capabilityChip),
								"data-testid": "agent-capabilities-workflow-row",
								onClick: ($event) => emit("open-tool", workflow.tool.openTarget)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(workflow.label), 1)]),
								_: 2
							}, 1032, [
								"icon",
								"invalid",
								"invalid-reasons",
								"warning",
								"warning-reasons",
								"disabled",
								"class",
								"onClick"
							])], 2);
						}), 128))]),
						_: 1
					}, 8, [
						"label",
						"item-count",
						"add-label",
						"disabled"
					])) : section === "skills" ? (openBlock(), createBlock(AgentSkillsSection_default, {
						key: 2,
						skills: __props.skills,
						disabled: props.disabled,
						"validation-issues": props.validationIssues,
						onOpenSkill: _cache[2] || (_cache[2] = ($event) => emit("open-skill", $event)),
						onAddSkill: _cache[3] || (_cache[3] = ($event) => emit("add-skill"))
					}, null, 8, [
						"skills",
						"disabled",
						"validation-issues"
					])) : (openBlock(), createBlock(AgentChipRow_default, {
						key: 3,
						label: unref(i18n).baseText("agents.builder.subAgents.title"),
						"item-count": selectedSubAgents.value.length,
						"add-label": unref(i18n).baseText("agents.builder.subAgents.add"),
						"add-button-test-id": "agent-capabilities-add-sub-agent",
						disabled: props.disabled,
						onAdd: openSubAgentsModal
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(selectedSubAgents.value, (subAgent) => {
							return openBlock(), createElementBlock("div", {
								key: subAgent.id,
								class: normalizeClass(_ctx.$style.chipGroup)
							}, [createVNode(AgentChipButton_default, {
								icon: "bot",
								invalid: subAgent.invalid,
								"invalid-reasons": subAgent.invalidReasons,
								disabled: props.disabled,
								class: normalizeClass(_ctx.$style.capabilityChip),
								"data-testid": "agent-capabilities-sub-agent-row",
								onClick: ($event) => openExistingSubAgentModal(subAgent)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(subAgent.name), 1)]),
								_: 2
							}, 1032, [
								"invalid",
								"invalid-reasons",
								"disabled",
								"class",
								"onClick"
							])], 2);
						}), 128))]),
						_: 1
					}, 8, [
						"label",
						"item-count",
						"add-label",
						"disabled"
					]))], 64);
				}), 128)),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.divider),
					"aria-hidden": "true"
				}, null, 2),
				createVNode(AgentWebSearchSection_default, {
					config: props.config,
					disabled: props.disabled,
					"project-id": props.projectId,
					"onUpdate:config": _cache[4] || (_cache[4] = ($event) => emit("update:config", $event))
				}, null, 8, [
					"config",
					"disabled",
					"project-id"
				])
			], 2)]);
		};
	}
});
var AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_19bp6_1",
	chipGroup: "_chipGroup_19bp6_8",
	capabilityChip: "_capabilityChip_19bp6_17",
	groupChipLabel: "_groupChipLabel_19bp6_21",
	divider: "_divider_19bp6_27"
};
var AgentCapabilitiesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentCapabilitiesActions.ts
/**
* The set of capability-action handlers wired to `AgentCapabilitiesSection`
* (tools, skills, tasks, triggers). Extracted from `AgentBuilderView` so a
* second surface (the agent node's NDV) can reuse them with its own
* config-update funnel + telemetry adapter.
*/
function useAgentCapabilitiesActions(deps) {
	const { localConfig, agent, projectId, agentId, connectedTriggers, scheduleConfigUpdate, scheduleSkillSave, localSkills, supportsToolApproval, ensureAgentPersisted, validationIssues, telemetry } = deps;
	const locale = useI18n();
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const { showError, showMessage } = useToast();
	function onOpenAddToolModal(mode = "tools") {
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_TOOLS_MODAL_KEY,
			data: {
				mode,
				tools: localConfig.value?.tools ?? [],
				mcpServers: localConfig.value?.mcpServers ?? [],
				projectId: projectId.value,
				agentId: targetAgentId,
				supportsToolApproval,
				onConfirm: (payload) => {
					if (agentId.value !== targetAgentId) return;
					scheduleConfigUpdate({
						...payload.tools && { tools: payload.tools },
						...payload.mcpServers && { mcpServers: payload.mcpServers }
					});
				}
			}
		});
	}
	function onOpenToolFromList(target) {
		const tools = localConfig.value?.tools ?? [];
		const toolIndex = typeof target === "number" ? target : tools.findIndex((tool) => {
			if (target.kind !== "tool") return false;
			if (tool.type !== target.toolType) return false;
			if (tool.type === "node") return tool.name === target.id;
			if (tool.type === "workflow") return tool.workflow === target.id;
			return tool.id === target.id;
		});
		const tool = toolIndex >= 0 ? tools[toolIndex] : void 0;
		if (tool) {
			const customTool = tool.type === "custom" && tool.id ? agent.value?.tools?.[tool.id] : void 0;
			telemetry?.trackOpenedToolFromList?.(tool.type);
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef: tool,
					customTool,
					projectId: projectId.value,
					agentId: agentId.value,
					supportsToolApproval,
					validationIssues: validationIssues?.value.filter((issue) => issue.capability.kind === "tool" && issue.capability.index === toolIndex),
					existingToolNames: tools.map((toolRef, i) => i === toolIndex || toolRef.type === "custom" ? null : toolRef.name).filter((name) => !!name),
					onConfirm: (updatedTool) => {
						const nextTools = [...localConfig.value?.tools ?? []];
						nextTools[toolIndex] = updatedTool;
						scheduleConfigUpdate({ tools: nextTools });
					},
					onRemove: () => onRemoveTool(toolIndex)
				}
			});
			return;
		}
		const mcpServers = localConfig.value?.mcpServers ?? [];
		const mcpServerIndex = typeof target === "number" ? target - tools.length : target.kind === "mcpServer" ? mcpServers.findIndex((server) => server.name === target.serverName) : -1;
		const mcpServer = mcpServers[mcpServerIndex];
		if (!mcpServer) return;
		const preferredNodeTypeName = mcpServer.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
		const nodeType = nodeTypesStore.getNodeType(preferredNodeTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool");
		if (!nodeType) return;
		telemetry?.trackOpenedToolFromList?.("mcpServer");
		uiStore.openModalWithData({
			name: AGENT_TOOL_CONFIG_MODAL_KEY,
			data: {
				kind: "mcpServer",
				mcpServer,
				initialNode: mcpServerToNode(mcpServer, nodeType),
				projectId: projectId.value,
				agentId: agentId.value,
				supportsToolApproval,
				existingToolNames: mcpServers.filter((_, i) => i !== mcpServerIndex).map((server) => server.name),
				onConfirm: (updatedServer) => {
					const nextMcpServers = [...localConfig.value?.mcpServers ?? []];
					nextMcpServers[mcpServerIndex] = updatedServer;
					scheduleConfigUpdate({ mcpServers: nextMcpServers });
				},
				onRemove: () => {
					scheduleConfigUpdate({ mcpServers: (localConfig.value?.mcpServers ?? []).filter((_, i) => i !== mcpServerIndex) });
				}
			}
		});
	}
	const appliedSkills = computed(() => {
		const rawRefs = localConfig.value?.skills;
		const refs = Array.isArray(rawRefs) ? rawRefs : [];
		const bodies = localSkills?.bodies.value ?? agent.value?.skills ?? {};
		const seen = /* @__PURE__ */ new Set();
		const out = [];
		for (const skillRef of refs) {
			if (typeof skillRef?.id !== "string" || !skillRef.id || seen.has(skillRef.id)) continue;
			seen.add(skillRef.id);
			out.push({
				id: skillRef.id,
				skill: (Object.hasOwn(bodies, skillRef.id) ? bodies[skillRef.id] : void 0) ?? {
					name: skillRef.id,
					description: "",
					instructions: ""
				}
			});
		}
		return out;
	});
	function onOpenSkillFromList(id) {
		const skill = appliedSkills.value.find((s) => s.id === id)?.skill;
		if (!skill) return;
		telemetry?.trackOpenedSkillFromList?.(id);
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: projectId.value,
				agentId: targetAgentId,
				skill,
				skillId: id,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(id),
				onRemove: (skillId) => {
					if (agentId.value !== targetAgentId) return;
					onRemoveSkill(skillId);
				},
				onConfirm: ({ id: skillId, skill: updatedSkill }) => {
					if (!skillId) return;
					if (agentId.value !== targetAgentId) return;
					const sanitizedSkill = filterSkillAllowedTools(updatedSkill);
					if (localSkills) {
						if (hasDuplicateSkillName(sanitizedSkill.name, skillId)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.updateSkill(skillId, sanitizedSkill);
						return;
					}
					if (agent.value?.id !== targetAgentId) return;
					agent.value = {
						...agent.value,
						skills: {
							...agent.value.skills ?? {},
							[skillId]: sanitizedSkill
						}
					};
					scheduleSkillSave({
						skillId,
						skill: sanitizedSkill
					});
				}
			}
		});
	}
	function configuredToolOptions() {
		const tools = [];
		for (const tool of localConfig.value?.tools ?? []) if (tool.type === "custom") {
			const name = agent.value?.tools?.[tool.id]?.descriptor.name ?? tool.id;
			if (name) tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "code"
			});
		} else if (tool.type === "workflow") {
			const name = tool.name ?? tool.workflow;
			tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "workflow"
			});
		} else tools.push({
			name: tool.name,
			label: formatToolNameForDisplay(tool.name) || tool.name,
			icon: "globe"
		});
		for (const server of localConfig.value?.mcpServers ?? []) {
			if (!server.name) continue;
			tools.push({
				name: server.name,
				label: formatToolNameForDisplay(server.name) || server.name,
				icon: "mcp"
			});
		}
		return tools;
	}
	function configuredToolNames() {
		return new Set(configuredToolOptions().map((tool) => tool.name));
	}
	function filterSkillAllowedTools(skill) {
		return normalizeAgentSkillForSave(skill, configuredToolNames());
	}
	/** Names the skill modal validates against: every applied skill except the one being edited. */
	function appliedSkillNames(excludeId) {
		return appliedSkills.value.filter(({ id }) => id !== excludeId).map(({ skill }) => skill.name);
	}
	/**
	* Authoring-time mirror of the backend's `assertSkillNameIsUnique` for
	* local-skill hosts. The modal validates against `existingSkillNames` before closing
	*/
	function hasDuplicateSkillName(name, excludeId) {
		const normalized = name.trim().toLowerCase();
		return appliedSkillNames(excludeId).some((existing) => existing.trim().toLowerCase() === normalized);
	}
	function showDuplicateSkillNameError(name) {
		showMessage({
			title: locale.baseText("agents.builder.skills.duplicateName.error", { interpolate: { name: name.trim() } }),
			type: "error"
		});
	}
	function onRemoveTool(index) {
		const currentTools = localConfig.value?.tools ?? [];
		if (index < 0 || index >= currentTools.length) return;
		scheduleConfigUpdate({ tools: currentTools.filter((_, i) => i !== index) });
	}
	function onRemoveSkill(id) {
		scheduleConfigUpdate({ skills: (localConfig.value?.skills ?? []).filter((skillRef) => skillRef.id !== id) });
	}
	function onToggleTask(payload) {
		scheduleConfigUpdate({ tasks: (localConfig.value?.tasks ?? []).map((taskRef) => taskRef.id === payload.id ? {
			...taskRef,
			enabled: payload.enabled
		} : taskRef) });
	}
	function onOpenAddSkillModal() {
		telemetry?.trackOpenedAddSkillModal?.();
		const targetProjectId = projectId.value;
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: targetProjectId,
				agentId: targetAgentId,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(),
				onConfirm: ({ skill }) => {
					if (localSkills) {
						if (agentId.value !== targetAgentId) return;
						const sanitizedSkill = filterSkillAllowedTools(skill);
						if (hasDuplicateSkillName(sanitizedSkill.name)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.createSkill(sanitizedSkill);
						showMessage({
							title: locale.baseText("agents.builder.skills.added"),
							type: "success"
						});
						return;
					}
					(async () => {
						const sanitizedSkill = filterSkillAllowedTools(skill);
						let created;
						let skillHash;
						let versionId;
						let skillId;
						try {
							await ensureAgentPersisted?.();
							const result = await createAgentSkill(rootStore.restApiContext, targetProjectId, targetAgentId, sanitizedSkill);
							skillId = result.id;
							created = result.skill;
							skillHash = result.skillHash;
							versionId = result.versionId;
						} catch (error) {
							showError(error, locale.baseText("agents.builder.skills.create.error"));
							return;
						}
						if (agent.value?.id !== targetAgentId) return;
						agent.value = {
							...agent.value,
							versionId,
							skillHashes: {
								...agent.value.skillHashes ?? {},
								[skillId]: skillHash
							},
							skills: {
								...agent.value.skills ?? {},
								[skillId]: created
							}
						};
						scheduleConfigUpdate({ skills: [...localConfig.value?.skills ?? [], {
							type: "skill",
							id: skillId
						}] });
						showMessage({
							title: locale.baseText("agents.builder.skills.added"),
							type: "success"
						});
					})();
				}
			}
		});
	}
	function onConnectedTriggersUpdate(triggers) {
		connectedTriggers.value = triggers;
	}
	function onTriggerAdded(payload) {
		connectedTriggers.value = payload.triggers;
		telemetry?.trackTriggerAdded?.(payload);
	}
	return {
		appliedSkills,
		onOpenAddToolModal,
		onOpenToolFromList,
		onRemoveTool,
		onOpenAddSkillModal,
		onOpenSkillFromList,
		onRemoveSkill,
		onToggleTask,
		onConnectedTriggersUpdate,
		onTriggerAdded
	};
}
//#endregion
//#region src/features/agents/agents.eventBus.ts
var agentsEventBus = createEventBus();
//#endregion
export { FreeAiCreditsCallout_default as _, AgentChipRow_default as a, modelToString as c, sanitizeModelId as d, useModelCatalog as f, AgentPanel_default as g, useAgentProjectId as h, AgentSkillsSection_default as i, parseModelString as l, agent_panel_module_default as m, useAgentCapabilitiesActions as n, AgentInfoPanel_default as o, useAgentModelCredentials as p, AgentCapabilitiesSection_default as r, AgentModelSelector_default as s, agentsEventBus as t, parseProvider as u };

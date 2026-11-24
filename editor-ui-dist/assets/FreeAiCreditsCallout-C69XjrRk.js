import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Mp as injectNDVStore, Xj as N8nCallout_default, bM as N8nText_default, kM as N8nButton_default, zM as useI18n } from "./app-BJz3tlB7.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-DAapI7Kh.js";
//#region src/app/components/FreeAiCreditsCallout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { key: 2 };
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
					variant: "outline",
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
			})) : (openBlock(), createElementBlock("div", _hoisted_1));
		};
	}
});
//#endregion
export { FreeAiCreditsCallout_default as t };

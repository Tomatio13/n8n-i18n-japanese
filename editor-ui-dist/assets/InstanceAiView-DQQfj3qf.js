import { $o as RouterView, Ad as Fragment, Bd as createTextVNode, Bf as unref, Fd as createBlock, Fu as useEventListener, Id as createCommentVNode, Ku as useSessionStorage, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, as as useRoute, bf as withCtx, df as resolveDynamicComponent, fp as toDisplayString, nf as onMounted, os as useRouter, rf as onUnmounted, sf as renderList, sp as normalizeClass, vf as watch } from "./vendor-LwB6jUFW.js";
import { $x as useMessage, DC as N8nHeading_default, Dw as useI18n, Eo as isInstanceAiChatRoute, Fp as useUIStore, J_ as useToast, QS as SettingsRow_default, Q_ as useTelemetry, Sa as useInstanceAiStore, Sw as _plugin_vue_export_helper_default, XS as SettingsRowGroup_default, Y_ as VIEWS, ZS as SettingsRowConfigure_default, _d as claimDocumentTitle, eo as useInstanceAiSettingsStore, ev as useUsersStore, lC as PreviewBadge_default, mf as useCredentialsStore, nv as useRootStore, tv as useSettingsStore, tw as useDeviceSupport, uw as N8nText_default, vd as useDocumentTitle, vw as N8nButton_default, wo as INSTANCE_AI_VIEW, yw as N8nIcon_default } from "./app-6hFiMIk3.js";
import { i as INSTANCE_AI_SEARCH_PROVIDERS, n as InstanceAiOnboardingWizard_default, r as INSTANCE_AI_MODEL_PROVIDERS, t as useInstanceAiConfiguration } from "./useInstanceAiConfiguration-BqNGm54e.js";
import { t as useSetupPageViewTelemetry } from "./instanceAiSetup.telemetry-DYFMkr81.js";
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingIntro.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var InstanceAiOnboardingIntro_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiOnboardingIntro",
	props: {
		incomplete: { type: Boolean },
		connectModelOnly: { type: Boolean },
		returnVisit: { type: Boolean },
		modelValue: {},
		sandboxValue: {},
		searchValue: {}
	},
	emits: [
		"setup",
		"setupLater",
		"openStep",
		"turnOff"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.page),
				"data-test-id": __props.incomplete ? "assistant-setup-incomplete" : "assistant-setup-intro"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, __props.incomplete && _ctx.$style.wide]) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					size: 32,
					class: normalizeClass(_ctx.$style.heroIcon)
				}, null, 8, ["class"]),
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					bold: "",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.title")), 1)]),
					_: 1
				}, 8, ["class"]),
				!__props.incomplete ? (openBlock(), createBlock(unref(PreviewBadge_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.preview),
					size: "medium"
				}, null, 8, ["class"])) : createCommentVNode("", true),
				__props.incomplete ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					tag: "p",
					color: "text-base",
					size: "large",
					class: normalizeClass(_ctx.$style.lede)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.incomplete.lede")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!__props.incomplete ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.benefits)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "workflow",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.build")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "flask-conical",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.debug")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.help")), 1)]),
						_: 1
					})], 2)
				], 2)) : (openBlock(), createBlock(unref(SettingsRowGroup_default), {
					key: 3,
					class: normalizeClass(_ctx.$style.checklist)
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([
						{
							id: "model",
							title: unref(i18n).baseText("instanceAi.onboarding.model.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.model.description"),
							value: __props.modelValue
						},
						{
							id: "sandbox",
							title: unref(i18n).baseText("instanceAi.onboarding.sandbox.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.sandbox.description"),
							value: __props.sandboxValue
						},
						{
							id: "search",
							title: unref(i18n).baseText("instanceAi.onboarding.search.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.search.description"),
							value: __props.searchValue
						}
					], (item) => {
						return openBlock(), createBlock(unref(SettingsRow_default), {
							key: item.id,
							title: item.title,
							description: item.description,
							clickable: "",
							"data-test-id": `assistant-setup-checklist-${item.id}`,
							onClick: ($event) => emit("openStep", item.id)
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: item.value }, null, 8, ["value"])]),
							_: 2
						}, 1032, [
							"title",
							"description",
							"data-test-id",
							"onClick"
						]);
					}), 128))]),
					_: 1
				}, 8, ["class"])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					"data-test-id": __props.incomplete ? "assistant-finish-setup-cta" : "assistant-setup-cta",
					label: __props.incomplete ? unref(i18n).baseText("instanceAi.onboarding.finishSetup") : __props.connectModelOnly ? unref(i18n).baseText("instanceAi.onboarding.connectModel") : unref(i18n).baseText("instanceAi.onboarding.setUp"),
					onClick: _cache[0] || (_cache[0] = ($event) => emit("setup"))
				}, null, 8, ["data-test-id", "label"]), !__props.returnVisit ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					size: "medium",
					label: unref(i18n).baseText("instanceAi.onboarding.setUpLater"),
					"data-test-id": "assistant-set-up-later",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("setupLater"))
				}, null, 8, ["label"])) : createCommentVNode("", true)], 2),
				__props.returnVisit ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.turnOff)
				}, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					label: unref(i18n).baseText("instanceAi.onboarding.turnOff.action"),
					class: normalizeClass(_ctx.$style.turnOffButton),
					"data-test-id": "assistant-turn-off",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("turnOff"))
				}, null, 8, ["label", "class"])], 2)) : createCommentVNode("", true)
			], 2)], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingIntro.vue?vue&type=style&index=0&lang.module.scss
var page = "_page_8gtn4_276";
var content = "_content_8gtn4_285";
var fadeInUp = "_fadeInUp_8gtn4_1";
var wide = "_wide_8gtn4_303";
var heroIcon = "_heroIcon_8gtn4_307";
var title = "_title_8gtn4_311";
var preview = "_preview_8gtn4_315";
var lede = "_lede_8gtn4_319";
var benefits = "_benefits_8gtn4_323";
var benefit = "_benefit_8gtn4_323";
var checklist = "_checklist_8gtn4_343";
var actions = "_actions_8gtn4_349";
var turnOff = "_turnOff_8gtn4_358";
var turnOffButton = "_turnOffButton_8gtn4_369";
var shimmer = "_shimmer_8gtn4_1";
var spin = "_spin_8gtn4_1";
var opacityPulse = "_opacityPulse_8gtn4_1";
var popoverIn = "_popoverIn_8gtn4_1";
var fadeIn = "_fadeIn_8gtn4_1";
var collapsibleSlideDown = "_collapsibleSlideDown_8gtn4_1";
var collapsibleSlideUp = "_collapsibleSlideUp_8gtn4_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_8gtn4_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_8gtn4_1";
var blurSwapIn = "_blurSwapIn_8gtn4_1";
var blurSwapOut = "_blurSwapOut_8gtn4_1";
var pulseGlow = "_pulseGlow_8gtn4_1";
var pulseGlowDelayed = "_pulseGlowDelayed_8gtn4_1";
var fade = "_fade_8gtn4_1";
var fadeInDown = "_fadeInDown_8gtn4_1";
var fadeInLeft = "_fadeInLeft_8gtn4_1";
var fadeInRight = "_fadeInRight_8gtn4_1";
var fadeOut = "_fadeOut_8gtn4_1";
var fadeOutDown = "_fadeOutDown_8gtn4_1";
var fadeOutUp = "_fadeOutUp_8gtn4_1";
var fadeOutLeft = "_fadeOutLeft_8gtn4_1";
var fadeOutRight = "_fadeOutRight_8gtn4_1";
var ping = "_ping_8gtn4_1";
var blinkBackground = "_blinkBackground_8gtn4_1";
var typingBlink = "_typingBlink_8gtn4_1";
var InstanceAiOnboardingIntro_vue_vue_type_style_index_0_lang_module_default = {
	page,
	content,
	fadeInUp,
	wide,
	heroIcon,
	title,
	preview,
	lede,
	benefits,
	benefit,
	checklist,
	actions,
	turnOff,
	turnOffButton,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_8gtn4_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var InstanceAiOnboardingIntro_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiOnboardingIntro_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiOnboardingIntro_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/onboarding/useInstanceAiOnboarding.ts
function useInstanceAiOnboarding(configuration) {
	const open = ref(false);
	const step = ref("model");
	const editMode = ref(false);
	const sequence = computed(() => [
		"model",
		...configuration.sandboxConfigured.value ? [] : ["sandbox"],
		...configuration.searchEnvConfigured.value ? [] : ["search"],
		"done"
	]);
	function firstUnmetStep() {
		if (!configuration.modelConfigured.value) return "model";
		if (!configuration.sandboxConfigured.value) return "sandbox";
		if (!configuration.searchDecided.value && !configuration.searchEnvConfigured.value) return "search";
		return "done";
	}
	function start(target = firstUnmetStep(), editing = false) {
		step.value = target;
		editMode.value = editing;
		open.value = true;
	}
	function close() {
		open.value = false;
		editMode.value = false;
	}
	function advance() {
		if (editMode.value) {
			editMode.value = false;
			const nextStep = firstUnmetStep();
			if (nextStep === "done") step.value = nextStep;
			else open.value = false;
			return;
		}
		step.value = firstUnmetStep();
	}
	function back() {
		if (editMode.value) {
			step.value = "done";
			editMode.value = false;
			return;
		}
		const index = sequence.value.indexOf(step.value);
		step.value = sequence.value[Math.max(0, index - 1)] ?? "model";
	}
	return {
		open,
		step,
		editMode,
		sequence,
		firstUnmetStep,
		start,
		close,
		advance,
		back
	};
}
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingView.vue?vue&type=script&setup=true&lang.ts
var INTRO_SEEN_STORAGE_KEY = "instanceAi.onboarding.introSeen";
var InstanceAiOnboardingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiOnboardingView",
	emits: ["completed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const store = useInstanceAiSettingsStore();
		const credentialsStore = useCredentialsStore();
		const configuration = useInstanceAiConfiguration();
		const sandboxEnvConfigured = computed(() => store.settings?.sandboxEnvConfigured === true);
		const searchEnvConfigured = computed(() => store.settings?.searchEnvConfigured === true);
		const searchDecided = computed(() => configuration.searchState.value !== "notset");
		const onboarding = useInstanceAiOnboarding({
			modelConfigured: configuration.modelConfigured,
			sandboxConfigured: configuration.sandboxConfigured,
			searchDecided,
			searchEnvConfigured
		});
		const notSet = computed(() => i18n.baseText("instanceAi.onboarding.notSet"));
		const modelValue = computed(() => {
			if (!configuration.modelConfigured.value) return notSet.value;
			if (store.settings?.modelEnvConfigured) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			const provider = INSTANCE_AI_MODEL_PROVIDERS.find(({ credentialType, id }) => id !== "custom" && credentialType === configuration.modelCredential.value?.type)?.id;
			return provider && store.settings?.modelName ? `${provider}/${store.settings.modelName}` : store.settings?.modelName ?? notSet.value;
		});
		const sandboxValue = computed(() => {
			if (sandboxEnvConfigured.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (!configuration.sandboxConfigured.value) return notSet.value;
			return store.settings?.sandboxProvider === "daytona" ? "Daytona" : "n8n Sandbox";
		});
		const searchValue = computed(() => {
			if (configuration.searchState.value === "notset") return notSet.value;
			if (configuration.searchState.value === "disabled") return i18n.baseText("instanceAi.onboarding.disabled");
			if (configuration.searchState.value === "env") return i18n.baseText("instanceAi.onboarding.foundOnServer");
			const credentialType = configuration.searchCredential.value?.type;
			return INSTANCE_AI_SEARCH_PROVIDERS.find(({ credentialType: type }) => type === credentialType)?.label ?? i18n.baseText("instanceAi.onboarding.search.label");
		});
		const composeFastPath = computed(() => configuration.sandboxConfigured.value && searchEnvConfigured.value);
		const incomplete = computed(() => configuration.hasSetupProgress.value && !composeFastPath.value);
		function startAt(step) {
			onboarding.start(step ?? onboarding.firstUnmetStep());
		}
		function editStep(step) {
			onboarding.start(step, true);
		}
		function handleWizardOpenChange(open) {
			if (open) return;
			if (configuration.setupCompleted.value) {
				finish();
				return;
			}
			onboarding.close();
		}
		function finish() {
			if (!configuration.setupCompleted.value) {
				onboarding.close();
				return;
			}
			onboarding.close();
			emit("completed");
		}
		const returnVisit = ref(typeof localStorage !== "undefined" && localStorage.getItem(INTRO_SEEN_STORAGE_KEY) === "true");
		async function setUpLater() {
			await router.push({ name: VIEWS.HOMEPAGE });
		}
		async function turnOff() {
			if (await message.confirm(i18n.baseText("instanceAi.onboarding.turnOff.description"), {
				title: i18n.baseText("instanceAi.onboarding.turnOff.title"),
				confirmButtonText: i18n.baseText("instanceAi.onboarding.turnOff.confirm"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm" || !await store.persistEnabled(false, false)) return;
			toast.showMessage({
				title: i18n.baseText("instanceAi.onboarding.turnOff.toastTitle"),
				message: i18n.baseText("instanceAi.onboarding.turnOff.toastDescription"),
				type: "success"
			});
			await router.push({ name: VIEWS.HOMEPAGE });
		}
		useSetupPageViewTelemetry("onboarding");
		onMounted(async () => {
			if (typeof localStorage !== "undefined") localStorage.setItem(INTRO_SEEN_STORAGE_KEY, "true");
			await Promise.all([store.fetch(), credentialsStore.fetchCredentialTypes(false)]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [!unref(store).isLoading ? (openBlock(), createBlock(InstanceAiOnboardingIntro_default, {
				key: 0,
				incomplete: incomplete.value,
				"connect-model-only": composeFastPath.value,
				"return-visit": returnVisit.value,
				"model-value": modelValue.value,
				"sandbox-value": sandboxValue.value,
				"search-value": searchValue.value,
				onSetup: _cache[0] || (_cache[0] = ($event) => startAt()),
				onSetupLater: setUpLater,
				onOpenStep: editStep,
				onTurnOff: turnOff
			}, null, 8, [
				"incomplete",
				"connect-model-only",
				"return-visit",
				"model-value",
				"sandbox-value",
				"search-value"
			])) : createCommentVNode("", true), createVNode(InstanceAiOnboardingWizard_default, {
				open: unref(onboarding).open.value,
				step: unref(onboarding).step.value,
				"edit-mode": unref(onboarding).editMode.value,
				sequence: unref(onboarding).sequence.value,
				"model-value": modelValue.value,
				"sandbox-value": sandboxValue.value,
				"search-value": searchValue.value,
				"compose-fast-path": composeFastPath.value,
				"onUpdate:open": handleWizardOpenChange,
				onAdvance: unref(onboarding).advance,
				onBack: unref(onboarding).back,
				onEdit: editStep,
				onCompleted: finish
			}, null, 8, [
				"open",
				"step",
				"edit-mode",
				"sequence",
				"model-value",
				"sandbox-value",
				"search-value",
				"compose-fast-path",
				"onAdvance",
				"onBack"
			])], 2);
		};
	}
});
var InstanceAiOnboardingView_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1wg45_1" };
var InstanceAiOnboardingView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiOnboardingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiOnboardingView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiView.vue?vue&type=script&setup=true&lang.ts
var InstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiView",
	setup(__props) {
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const appSettingsStore = useSettingsStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const rootStore = useRootStore();
		const usersStore = useUsersStore();
		const telemetry = useTelemetry();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const setupCompletionState = computed(() => appSettingsStore.moduleSettings["instance-ai"]?.setupCompleted);
		const setupWasIncomplete = setupCompletionState.value === false;
		let setupWasObservedIncomplete = setupWasIncomplete;
		const onboardingCompletionPending = useSessionStorage("instanceAi.onboarding.completionPending", setupWasIncomplete);
		if (setupCompletionState.value === true) onboardingCompletionPending.value = false;
		else if (setupWasIncomplete) onboardingCompletionPending.value = true;
		const onboardingActive = ref(setupCompletionState.value !== true && (setupWasIncomplete || onboardingCompletionPending.value));
		const showOnboarding = computed(() => settingsStore.canManage && !settingsStore.isProxyEnabled && !settingsStore.isCloudManaged && onboardingActive.value);
		watch(setupCompletionState, (setupCompleted) => {
			if (setupCompleted === true) {
				onboardingCompletionPending.value = false;
				if (!setupWasObservedIncomplete) onboardingActive.value = false;
			} else if (setupCompleted === false) {
				setupWasObservedIncomplete = true;
				onboardingCompletionPending.value = true;
				onboardingActive.value = true;
			}
		});
		claimDocumentTitle();
		documentTitle.set(i18n.baseText("instanceAi.view.title"));
		function handleOnboardingCompleted() {
			onboardingCompletionPending.value = false;
			onboardingActive.value = false;
		}
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: INSTANCE_AI_VIEW,
					force: true
				});
			}
		});
		onMounted(() => {
			if (showOnboarding.value && route.name !== "InstanceAi") router.replace({ name: INSTANCE_AI_VIEW });
			usersStore.showPersonalizationSurvey();
			const previousRoute = router.options.history.state.back;
			const sourceUrl = typeof previousRoute === "string" ? previousRoute : document.referrer || null;
			telemetry.track("User viewed AI assistant", {
				instance_id: rootStore.instanceId,
				source_url: sourceUrl
			});
			store.loadThreads();
			store.fetchCredits();
			settingsStore.refreshModuleSettings().catch(() => {}).then(async () => await settingsStore.ensurePreferencesLoaded()).catch(() => {}).then(() => {
				const browserUseEnabled = settingsStore.isBrowserUseEnabledByAdmin;
				const computerUseEnabled = !settingsStore.isLocalGatewayDisabledByAdmin;
				if (!browserUseEnabled && !computerUseEnabled) return;
				settingsStore.startGatewayPushListener();
				if (browserUseEnabled) settingsStore.fetchBrowserStatus();
				if (computerUseEnabled && !settingsStore.isLocalGatewayDisabled) settingsStore.fetchGatewayStatus();
			});
		});
		watch(() => settingsStore.isLocalGatewayDisabled, (disabled) => {
			if (disabled) {
				if (settingsStore.isLocalGatewayDisabledByAdmin && !settingsStore.isBrowserUseEnabledByAdmin) settingsStore.stopGatewayPushListener();
			} else {
				settingsStore.startGatewayPushListener();
				settingsStore.fetchGatewayStatus();
				settingsStore.fetchBrowserStatus();
			}
		});
		onUnmounted(() => {
			if (!isInstanceAiChatRoute(route.name)) settingsStore.stopGatewayPushListener();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-container"
			}, [showOnboarding.value ? (openBlock(), createBlock(InstanceAiOnboardingView_default, {
				key: 0,
				onCompleted: handleOnboardingCompleted
			})) : (openBlock(), createBlock(unref(RouterView), { key: 1 }, {
				default: withCtx(({ Component }) => [(openBlock(), createBlock(resolveDynamicComponent(Component), { key: String(unref(route).params.threadId ?? "empty") }))]),
				_: 1
			}))], 2);
		};
	}
});
var InstanceAiView_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1bt6s_1" };
var InstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiView_default as default };

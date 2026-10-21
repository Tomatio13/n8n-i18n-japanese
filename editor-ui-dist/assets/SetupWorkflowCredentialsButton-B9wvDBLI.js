import { Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Pd as computed, Rd as createElementBlock, Vf as unref, Wd as defineComponent, cp as normalizeClass, of as openBlock, ss as useRoute, tf as onBeforeUnmount, xf as withCtx, yf as watch } from "./vendor-D9HlBS7Y.js";
import { $l as useSetupPanelStore, AT as _plugin_vue_export_helper_default, Af as doesNodeHaveAllCredentialsFilled, ET as N8nButton_default, FT as useI18n, Ff as useNodeTypesStore, Gh as usePostHog, Ld as useFocusPanelStore, Tf as injectWorkflowDocumentStore, bT as N8nTooltip_default, ch as useUIStore, f_ as SETUP_CREDENTIALS_MODAL_KEY, xv as TEMPLATE_SETUP_EXPERIENCE } from "./app-Bl9bQlKQ.js";
import { t as useReadyToRunStore } from "./readyToRun.store-DcIj6loN.js";
//#region src/features/workflows/templates/components/SetupWorkflowCredentialsButton.vue?vue&type=script&setup=true&lang.ts
var SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	props: { collapsible: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const readyToRunStore = useReadyToRunStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeTypesStore = useNodeTypesStore();
		const posthogStore = usePostHog();
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const route = useRoute();
		const label = computed(() => i18n.baseText("nodeView.setupTemplate"));
		const isTemplateImportRoute = computed(() => {
			return route.query.templateId !== void 0;
		});
		const isTemplateSetupCompleted = computed(() => {
			return !!workflowDocumentStore?.value?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = (workflowDocumentStore?.value?.allNodes ?? []).filter((node) => !node.disabled);
			if (!nodes.length) return true;
			return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
		});
		const isNewTemplatesSetupEnabled = computed(() => {
			return posthogStore.getVariant(TEMPLATE_SETUP_EXPERIENCE.name) === TEMPLATE_SETUP_EXPERIENCE.variant;
		});
		const isSetupPanelFeatureEnabled = computed(() => {
			return setupPanelStore.isFeatureEnabled;
		});
		const showButton = computed(() => {
			if (!!!workflowDocumentStore?.value?.meta?.templateId) return false;
			if (isSetupPanelFeatureEnabled.value) return (workflowDocumentStore?.value?.allNodes ?? []).length > 0 && !allCredentialsFilled.value;
			if (isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const isButtonDisabled = computed(() => {
			return isSetupPanelFeatureEnabled.value && focusPanelStore.focusPanelActive && focusPanelStore.selectedTab === "setup";
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowDocumentStore?.value?.addToMeta({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const openSetupPanel = () => {
			focusPanelStore.setSelectedTab("setup");
			focusPanelStore.openFocusPanel();
		};
		const openSetupModal = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		const handleTemplateSetup = () => {
			if (isSetupPanelFeatureEnabled.value) openSetupPanel();
			else openSetupModal();
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		const shouldAutoOpenSetup = computed(() => {
			const templateId = workflowDocumentStore?.value?.meta?.templateId;
			return isNewTemplatesSetupEnabled.value && !readyToRunStore.isReadyToRunTemplateId(templateId) && showButton.value && isTemplateImportRoute.value;
		});
		let hasAutoOpened = false;
		watch(shouldAutoOpenSetup, (shouldOpen) => {
			if (hasAutoOpened || !shouldOpen) return;
			hasAutoOpened = true;
			handleTemplateSetup();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createVNode(unref(N8nButton_default), {
				variant: "subtle",
				label: label.value,
				disabled: isButtonDisabled.value,
				class: normalizeClass({ [_ctx.$style.full]: __props.collapsible }),
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				onClick: _cache[0] || (_cache[0] = ($event) => handleTemplateSetup())
			}, null, 8, [
				"label",
				"disabled",
				"class"
			]), __props.collapsible ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: label.value,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"icon-only": "",
					"aria-label": label.value,
					disabled: isButtonDisabled.value,
					class: normalizeClass(_ctx.$style.compact),
					"data-test-id": "setup-credentials-button-compact",
					size: "large",
					icon: "package-open",
					onClick: _cache[1] || (_cache[1] = ($event) => handleTemplateSetup())
				}, null, 8, [
					"aria-label",
					"disabled",
					"class"
				])]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var SetupWorkflowCredentialsButton_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_q8v89_1",
	compact: "_compact_q8v89_5",
	full: "_full_q8v89_10"
};
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWorkflowCredentialsButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SetupWorkflowCredentialsButton_default as default };

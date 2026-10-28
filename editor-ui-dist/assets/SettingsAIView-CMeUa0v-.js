import { Ad as createElementBlock, Cd as Fragment, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Pd as createVNode, Qd as openBlock, Tf as ref, Yd as onMounted, ap as toDisplayString, ep as normalizeClass, kd as createCommentVNode, mf as withDirectives, pf as withCtx, rf as resolveDirective } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, Ed as useAssistantStore, FE as useI18n, My as useSettingsStore, PT as N8nHeading_default, Ty as useToast, Yf as useDocumentTitle, ZT as N8nCallout_default, kT as Checkbox_default, ky as useTelemetry, vE as N8nText_default } from "./app-CqwplyU_.js";
//#region src/features/ai/assistant/views/SettingsAIView.vue?vue&type=script&setup=true&lang.ts
var SettingsAIView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAIView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const settingsStore = useSettingsStore();
		const allowSendingSchema = ref(true);
		const isAssistantEnabled = computed(() => assistantStore.isAssistantEnabled);
		const isAskAiEnabled = computed(() => settingsStore.isAskAiEnabled);
		const allowSendingParameterValues = computed(() => settingsStore.isAiDataSharingEnabled);
		const aiSettingsDescription = computed(() => {
			if (isAssistantEnabled.value && isAskAiEnabled.value) return i18n.baseText("settings.ai.description.both");
			else if (isAssistantEnabled.value) return i18n.baseText("settings.ai.description.assistantOnly");
			else if (isAskAiEnabled.value) return i18n.baseText("settings.ai.description.askAiOnly");
			return i18n.baseText("settings.ai.description.both");
		});
		const onallowSendingParameterValuesChange = async (newValue) => {
			if (newValue !== true) return;
			try {
				await settingsStore.updateAiDataSharingSettings(newValue);
				toast.showMessage({
					title: i18n.baseText("settings.ai.updated.success"),
					type: "success"
				});
				telemetry.track("User changed AI Usage settings", { allow_sending_parameter_values: newValue });
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.ai.updated.error"));
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.ai"));
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "ai"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, null, 512), [[_directive_n8n_html, aiSettingsDescription.value]])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					modelValue: allowSendingSchema.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowSendingSchema.value = $event),
					disabled: true,
					label: unref(i18n).baseText("settings.ai.allowSendingSchema.label")
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingSchema.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [
					createVNode(unref(Checkbox_default), {
						"model-value": allowSendingParameterValues.value,
						disabled: allowSendingParameterValues.value,
						label: unref(i18n).baseText("settings.ai.allowSendingParameterValues.label"),
						"onUpdate:modelValue": onallowSendingParameterValuesChange
					}, null, 8, [
						"model-value",
						"disabled",
						"label"
					]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.checkboxDescription),
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nCallout_default), {
						class: normalizeClass(_ctx.$style.notice),
						theme: "warning",
						"data-test-id": "ai-data-sharing-deprecation-notice"
					}, {
						default: withCtx(() => [allowSendingParameterValues.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.deprecated.locked")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.deprecated")), 1)], 64)), !allowSendingParameterValues.value && !unref(settingsStore).isCloudDeployment ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.deprecated.envVar")), 1)], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["class"])
				], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.privacyNote) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.privacyNote.heading")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), { color: "text-base" }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.ai.privacyNote.content", { interpolate: { docsLink: "https://docs.n8n.io/manage-cloud/ai-assistant" } })]])], 2)
			], 2);
		};
	}
});
var SettingsAIView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_n2h8o_1",
	header: "_header_n2h8o_7",
	content: "_content_n2h8o_13",
	checkboxContainer: "_checkboxContainer_n2h8o_19",
	checkboxDescription: "_checkboxDescription_n2h8o_30",
	notice: "_notice_n2h8o_33",
	privacyNote: "_privacyNote_n2h8o_38"
};
var SettingsAIView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsAIView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAIView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsAIView_default as default };

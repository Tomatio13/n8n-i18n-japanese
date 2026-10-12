import { Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Kd as onMounted, Nd as defineComponent, Sf as ref, Yd as openBlock, Zf as normalizeClass, df as withDirectives, ef as resolveDirective, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-C0K-pJCd.js";
import { G_ as useSettingsStore, H_ as useTelemetry, R_ as useToast, Xl as useAssistantStore, aw as _plugin_vue_export_helper_default, dC as N8nHeading_default, od as useDocumentTitle, qC as N8nText_default, sC as Checkbox_default, uw as useI18n, zx as useMessage } from "./app-Gcu_WcI0.js";
//#region src/features/ai/assistant/views/SettingsAIView.vue?vue&type=script&setup=true&lang.ts
var SettingsAIView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAIView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
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
			if (typeof newValue !== "boolean") return;
			if (!newValue) {
				if (await message.confirm(i18n.baseText("settings.ai.confirm.message"), {
					title: i18n.baseText("settings.ai.confirm.title"),
					confirmButtonText: i18n.baseText("settings.ai.confirm.confirmButtonText"),
					cancelButtonText: i18n.baseText("generic.cancel")
				}) !== "confirm") return;
			}
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
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					"model-value": allowSendingParameterValues.value,
					label: unref(i18n).baseText("settings.ai.allowSendingParameterValues.label"),
					"onUpdate:modelValue": onallowSendingParameterValuesChange
				}, null, 8, ["model-value", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.privacyNote) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.privacyNote.heading")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), { color: "text-base" }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.ai.privacyNote.content", { interpolate: { docsLink: "https://docs.n8n.io/manage-cloud/ai-assistant" } })]])], 2)
			], 2);
		};
	}
});
var SettingsAIView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1dt1z_1",
	header: "_header_1dt1z_7",
	content: "_content_1dt1z_13",
	checkboxContainer: "_checkboxContainer_1dt1z_19",
	checkboxDescription: "_checkboxDescription_1dt1z_30",
	notice: "_notice_1dt1z_33",
	privacyNote: "_privacyNote_1dt1z_38"
};
var SettingsAIView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsAIView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAIView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsAIView_default as default };

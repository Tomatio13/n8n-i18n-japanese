import { Ad as createTextVNode, Af as unref, Cd as computed, Ed as createCommentVNode, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, jd as createVNode, np as toDisplayString, of as useTemplateRef, uf as withCtx, wd as createBaseVNode } from "./vendor-C0K-pJCd.js";
import { DC as N8nCallout_default, aw as _plugin_vue_export_helper_default, qC as N8nText_default, tw as N8nButton_default, uw as useI18n, wp as useUIStore, yx as AgentJsonConfigSchema } from "./app-Gcu_WcI0.js";
import { t as AgentModal_default } from "./AgentModal-DPr65EUE.js";
//#region src/features/agents/components/AgentJsonImportModal.vue?vue&type=script&setup=true&lang.ts
var AgentJsonImportModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentJsonImportModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const parsedConfig = ref(null);
		const errorMessage = ref("");
		const importing = ref(false);
		const fileInput = useTemplateRef("fileInput");
		function resetImportState() {
			parsedConfig.value = null;
			errorMessage.value = "";
			if (fileInput.value) fileInput.value.value = "";
		}
		function closeModal() {
			resetImportState();
			uiStore.closeModal(props.modalName);
		}
		async function onFileChange(event) {
			const input = event.target;
			if (!(input instanceof HTMLInputElement)) return;
			const file = input.files?.[0];
			parsedConfig.value = null;
			errorMessage.value = "";
			if (!file) return;
			try {
				const parsed = JSON.parse(await file.text());
				const result = AgentJsonConfigSchema.safeParse(parsed);
				if (!result.success) throw new Error("Invalid agent JSON");
				parsedConfig.value = result.data;
			} catch {
				errorMessage.value = i18n.baseText("agents.builder.importJsonModal.invalidJson");
			}
		}
		async function onConfirm() {
			if (!parsedConfig.value || importing.value) return;
			importing.value = true;
			try {
				await props.data.onConfirm(parsedConfig.value);
				closeModal();
			} finally {
				importing.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.builder.importJsonModal.title"),
				busy: importing.value,
				size: "large",
				"data-testid": "agent-json-import-modal",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("agents.builder.importJsonModal.import"),
					disabled: !parsedConfig.value || importing.value,
					loading: importing.value,
					"data-testid": "agent-json-import-confirm",
					onClick: onConfirm
				}, null, 8, [
					"label",
					"disabled",
					"loading"
				])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.importJsonModal.description")), 1)]),
						_: 1
					}),
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.fileField) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.importJsonModal.fileLabel")), 1)]),
						_: 1
					}), createBaseVNode("input", {
						ref_key: "fileInput",
						ref: fileInput,
						type: "file",
						accept: "application/json,.json",
						"data-testid": "agent-json-import-file-input",
						onChange: onFileChange
					}, null, 544)], 2),
					errorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "danger",
						"data-testid": "agent-json-import-error"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
});
var AgentJsonImportModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_u7zyb_1",
	fileField: "_fileField_u7zyb_7"
};
var AgentJsonImportModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentJsonImportModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentJsonImportModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentJsonImportModal_default as default };

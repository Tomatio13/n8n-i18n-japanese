import { Ad as createTextVNode, Af as unref, Cd as computed, Ed as createCommentVNode, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, cf as watch, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { $C as Input_default, aw as _plugin_vue_export_helper_default, qC as N8nText_default, tw as N8nButton_default, uw as useI18n, wp as useUIStore } from "./app-DPWSzjF9.js";
import { t as AgentModal_default } from "./AgentModal-B3-RPt2n.js";
//#region src/features/agents/components/AgentDuplicateModal.vue?vue&type=script&setup=true&lang.ts
var AgentDuplicateModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentDuplicateModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const name = ref("");
		const submitting = ref(false);
		const submitted = ref(false);
		const trimmedName = computed(() => name.value.trim());
		const isNameTaken = computed(() => trimmedName.value.length > 0 && props.data.existingNames.includes(trimmedName.value));
		const canConfirm = computed(() => trimmedName.value.length > 0 && !isNameTaken.value && !submitting.value);
		const nameError = computed(() => {
			if (!trimmedName.value) return i18n.baseText("agents.duplicate.modal.nameRequired");
			if (isNameTaken.value) return i18n.baseText("agents.duplicate.modal.button.nameTaken");
			return "";
		});
		const visibleNameError = computed(() => submitted.value || isNameTaken.value ? nameError.value : "");
		watch(() => props.data.agentId, () => {
			name.value = `${props.data.name} (copy)`;
		}, { immediate: true });
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onConfirm() {
			submitted.value = true;
			if (!canConfirm.value) return;
			submitting.value = true;
			try {
				await props.data.onConfirm(trimmedName.value);
				closeModal();
			} catch {} finally {
				submitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.duplicate.modal.name"),
				busy: submitting.value,
				size: "medium",
				"data-testid": "agent-duplicate-modal",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: submitting.value,
					loading: submitting.value,
					"data-testid": "agent-duplicate-confirm",
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.duplicate.modal.button.confirm")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(Input_default), {
					modelValue: name.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
					placeholder: unref(i18n).baseText("agents.duplicate.modal.enterName"),
					label: unref(i18n).baseText("agents.duplicate.modal.enterName"),
					required: true,
					"data-testid": "agent-duplicate-name-input",
					onEnter: onConfirm
				}, null, 8, [
					"modelValue",
					"placeholder",
					"label"
				]), visibleNameError.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.error),
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(visibleNameError.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
});
var AgentDuplicateModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1vzk7_1",
	error: "_error_1vzk7_7"
};
var AgentDuplicateModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentDuplicateModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentDuplicateModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentDuplicateModal_default as default };

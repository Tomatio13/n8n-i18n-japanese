import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as Input_default } from "./Input-DZHU7J3z.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nHeading_default } from "./N8nHeading-DvvN7aP6.js";
import { n as useUIStore } from "./ui.store-BwEJQe8R.js";
import { t as Modal_default } from "./Modal-DzjmVBuu.js";
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
		const name = ref("");
		const submitting = ref(false);
		const trimmedName = computed(() => name.value.trim());
		const isNameTaken = computed(() => trimmedName.value.length > 0 && props.data.existingNames.includes(trimmedName.value));
		const canConfirm = computed(() => trimmedName.value.length > 0 && !isNameTaken.value && !submitting.value);
		watch(() => props.data.agentId, () => {
			name.value = `${props.data.name} (copy)`;
		}, { immediate: true });
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onConfirm() {
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
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "420px",
				"data-testid": "agent-duplicate-modal",
				"close-on-click-modal": !submitting.value,
				"close-on-press-escape": !submitting.value,
				"show-close": !submitting.value
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.duplicate.modal.name")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(Input_default), {
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
				]), isNameTaken.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.error),
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.duplicate.modal.button.nameTaken")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					disabled: submitting.value,
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canConfirm.value,
					loading: submitting.value,
					"data-testid": "agent-duplicate-confirm",
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.duplicate.modal.button.confirm")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)]),
				_: 1
			}, 8, [
				"name",
				"close-on-click-modal",
				"close-on-press-escape",
				"show-close"
			]);
		};
	}
});
var AgentDuplicateModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_vd7p0_1",
	error: "_error_vd7p0_7",
	footer: "_footer_vd7p0_11"
};
var AgentDuplicateModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentDuplicateModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentDuplicateModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentDuplicateModal_default as default };

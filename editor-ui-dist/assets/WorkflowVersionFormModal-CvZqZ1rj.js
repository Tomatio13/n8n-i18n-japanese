import { Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, if as onBeforeUnmount, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, xf as useTemplateRef, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Fj as N8nHeading_default, NM as _plugin_vue_export_helper_default, Wj as createEventBus, gg as useUIStore, kM as N8nButton_default, zM as useI18n } from "./app-BJz3tlB7.js";
import { t as Modal_default } from "./Modal-UWXQ2H-M.js";
import { t as generateVersionLabelFromId } from "./useWorkflowVersionLabel-CtXH53ZI.js";
import "./utils-BVrQNRgW.js";
import { t as WorkflowVersionForm_default } from "./WorkflowVersionForm-CIL9PWSk.js";
//#region src/features/workflows/workflowHistory/components/WorkflowVersionFormModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var WorkflowVersionFormModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowVersionFormModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const modalEventBus = createEventBus();
		const uiStore = useUIStore();
		const versionForm = useTemplateRef("versionForm");
		const versionName = ref("");
		const description = ref("");
		const submitting = computed(() => props.data.submitting ?? false);
		function onModalOpened() {
			versionForm.value?.focusInput();
		}
		onMounted(() => {
			if (props.data.versionName) versionName.value = props.data.versionName;
			else if (props.data.versionId) versionName.value = generateVersionLabelFromId(props.data.versionId);
			if (props.data.description) description.value = props.data.description;
			modalEventBus.on("opened", onModalOpened);
		});
		onBeforeUnmount(() => {
			modalEventBus.off("opened", onModalOpened);
		});
		const closeModal = () => {
			uiStore.closeModal(props.modalName);
		};
		const onCancel = () => {
			props.data.eventBus.emit("cancel");
			closeModal();
		};
		const handleSubmit = () => {
			if (versionName.value.trim().length === 0) return;
			props.data.eventBus.emit("submit", {
				versionId: props.data.versionId,
				name: versionName.value,
				description: description.value
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "500px",
				"max-height": "85vh",
				name: __props.modalName,
				"event-bus": unref(modalEventBus),
				center: true,
				"before-close": onCancel
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), { size: "xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.data.modalTitle), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(WorkflowVersionForm_default, {
					ref_key: "versionForm",
					ref: versionForm,
					"version-name": versionName.value,
					"onUpdate:versionName": _cache[0] || (_cache[0] = ($event) => versionName.value = $event),
					description: description.value,
					"onUpdate:description": _cache[1] || (_cache[1] = ($event) => description.value = $event),
					"version-name-test-id": `${__props.modalName}-version-name-input`,
					"description-test-id": `${__props.modalName}-description-input`,
					onSubmit: handleSubmit
				}, null, 8, [
					"version-name",
					"description",
					"version-name-test-id",
					"description-test-id"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					disabled: submitting.value,
					label: unref(i18n).baseText("generic.cancel"),
					"data-test-id": `${__props.modalName}-cancel-button`,
					onClick: onCancel
				}, null, 8, [
					"disabled",
					"label",
					"data-test-id"
				]), createVNode(unref(N8nButton_default), {
					loading: submitting.value,
					disabled: versionName.value.trim().length === 0,
					label: __props.data.submitButtonLabel,
					"data-test-id": `${__props.modalName}-submit-button`,
					onClick: handleSubmit
				}, null, 8, [
					"loading",
					"disabled",
					"label",
					"data-test-id"
				])], 2)], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_1ykpc_1",
	actions: "_actions_1ykpc_7"
} }]]);
//#endregion
export { WorkflowVersionFormModal_default as default };

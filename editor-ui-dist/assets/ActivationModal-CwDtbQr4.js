import { Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zf as ref } from "./vendor-zYfdu4Ed.js";
import { AS as useStorage, Aj as Checkbox_default, Bb as WORKFLOW_ACTIVE_MODAL_KEY, Jb as WORKFLOW_SETTINGS_MODAL_KEY, Jd as injectWorkflowDocumentStore, NM as _plugin_vue_export_helper_default, Rl as useExecutionsStore, Zb as LOCAL_STORAGE_ACTIVATION_FLAG, af as useNodeTypesStore, bM as N8nText_default, fm as getActivatableTriggerNodes, gg as useUIStore, kM as N8nButton_default, kS as VIEWS, ym as getTriggerNodeServiceName, zM as useI18n } from "./app-BXv1VOvT.js";
import { t as Modal_default } from "./Modal-BbWUppWK.js";
//#region src/features/workflows/components/ActivationModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ActivationModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ActivationModal",
	setup(__props) {
		const checked = ref(false);
		const executionsStore = useExecutionsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const router = useRouter();
		const i18n = useI18n();
		const modalTitle = computed(() => i18n.baseText("activationModal.workflowPublished"));
		const triggerContent = computed(() => {
			const foundTriggers = getActivatableTriggerNodes(workflowDocumentStore.value.workflowTriggerNodes);
			if (!foundTriggers.length) return "";
			if (foundTriggers.length > 1) return i18n.baseText("activationModal.yourTriggersWillNowFire");
			const trigger = foundTriggers[0];
			const triggerNodeType = nodeTypesStore.getNodeType(trigger.type, trigger.typeVersion);
			if (triggerNodeType) {
				if (triggerNodeType.activationMessage) return triggerNodeType.activationMessage;
				const serviceName = getTriggerNodeServiceName(triggerNodeType);
				if (trigger.webhookId) return i18n.baseText("activationModal.yourWorkflowWillNowListenForEvents", { interpolate: { serviceName } });
				else if (triggerNodeType.polling) return i18n.baseText("activationModal.yourWorkflowWillNowRegularlyCheck", { interpolate: { serviceName } });
			}
			return i18n.baseText("activationModal.yourTriggerWillNowFire");
		});
		const showExecutionsList = async () => {
			const activeExecution = executionsStore.activeExecution;
			const currentWorkflow = workflowDocumentStore.value.workflowId;
			if (activeExecution) router.push({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: currentWorkflow,
					executionId: activeExecution.id
				}
			}).catch(() => {});
			else router.push({
				name: VIEWS.EXECUTION_HOME,
				params: { workflowId: currentWorkflow }
			}).catch(() => {});
			uiStore.closeModal(WORKFLOW_ACTIVE_MODAL_KEY);
		};
		const showSettings = async () => {
			uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
		};
		const handleCheckboxChange = (checkboxValue) => {
			const boolValue = typeof checkboxValue === "boolean" ? checkboxValue : Boolean(checkboxValue);
			checked.value = boolValue;
			useStorage(LOCAL_STORAGE_ACTIVATION_FLAG).value = boolValue.toString();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(WORKFLOW_ACTIVE_MODAL_KEY),
				title: modalTitle.value,
				width: "460px"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(triggerContent.value), 1)]),
					_: 1
				})]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.spaced) }, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [
						createVNode(unref(N8nText_default), { bold: true }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("activationModal.theseExecutionsWillNotShowUp")), 1)]),
							_: 1
						}),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("activationModal.butYouCanSeeThem")) + " ", 1),
						createBaseVNode("a", { onClick: showExecutionsList }, toDisplayString(unref(i18n).baseText("activationModal.executionList")), 1),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("activationModal.ifYouChooseTo")) + " ", 1),
						createBaseVNode("a", { onClick: showSettings }, toDisplayString(unref(i18n).baseText("activationModal.saveExecutions")), 1)
					]),
					_: 1
				})], 2)]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(Checkbox_default), {
					"model-value": checked.value,
					"onUpdate:modelValue": handleCheckboxChange
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
					_: 1
				}, 8, ["model-value"]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("activationModal.gotIt"),
					onClick: close
				}, null, 8, ["label", "onClick"])], 2)]),
				_: 1
			}, 8, ["name", "title"]);
		};
	}
}), [["__cssModules", { "$style": {
	spaced: "_spaced_1jt7i_1",
	footer: "_footer_1jt7i_5"
} }]]);
//#endregion
export { ActivationModal_default as default };

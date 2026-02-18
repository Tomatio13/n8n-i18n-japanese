import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DhtZe8m7.js";
import { c as DialogFooter_default, d as DialogHeader_default, f as DialogClose_default, g as N8nInlineTextEdit_default, l as Dialog_default, qi as N8nButton_default, u as DialogTitle_default } from "./src-YlGrrRzd.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DaSrkVXS.js";
import { r as useUIStore } from "./users.store-9FuVvOZm.js";
import "./ParameterInputList-CIIWAkEo.js";
import "./constants-aHH2jIHR.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-B_jkD7Ds.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CHJGvtdO.js";
import "./useClipboard-BlIIV_YG.js";
import "./executions.store-DG98TmfZ.js";
import "./assistant.store-BCyS-VA9.js";
import "./chatPanel.store-DAE6tObJ.js";
import "./RunData-nC3ezZ5i.js";
import "./NDVEmptyState-QRDUUJMS.js";
import "./useEnvFeatureFlag-DKH44jQh.js";
import "./externalSecrets.ee.store-C0Zu7mVn.js";
import "./uniqBy-BKkVo6cE.js";
import "./usePinnedData-agI83Ird.js";
import "./nodeIcon-CaaSXgH5.js";
import "./canvas.utils-CRaczIF0.js";
import "./nodeCreator.store-HLfh0SHP.js";
import "./useCanvasOperations-DfKmVdSp.js";
import "./folders.store-Bk5vq3bk.js";
import "./useQuickConnect-CVXJ99QR.js";
import "./CredentialIcon-tFVCLbOv.js";
import "./useDynamicCredentials-vwnmBqXG.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./Draggable-CzyE91_V.js";
import { t as NodeIcon_default } from "./NodeIcon-BR3YCm5s.js";
import "./VirtualSchema-BZQZ0d6l.js";
import "./useCalloutHelpers-CjS9WdIF.js";
import "./useTelemetryContext-CjTgVPB_.js";
import "./useRunWorkflow-DmKWYJ1K.js";
import "./pushConnection.store-D-eAV_8X.js";
import "./nodeTransforms-9zqTOu60.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-uHxDpP1Z.js";
import "./dateFormatter-j0tG5TGq.js";
import "./useExecutionHelpers-DB7T4OB2.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-ChDN8JKH.js";
var ToolSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const contentRef = ref(null);
		const isValid = ref(false);
		const nodeName = ref(props.data.node?.name ?? "");
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			const currentNode = contentRef.value?.node;
			if (!currentNode) return;
			props.data.onConfirm(currentNode);
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return __props.data.node ? (openBlock(), createBlock(unref(Dialog_default), {
				key: 0,
				open: true,
				size: "2xlarge",
				"onUpdate:open": closeDialog
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
							key: 0,
							"node-type": contentRef.value.nodeTypeDescription,
							size: 24,
							circle: true,
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(DialogTitle_default), { "as-child": "" }, {
							default: withCtx(() => [createVNode(unref(N8nInlineTextEdit_default), {
								"model-value": nodeName.value,
								"max-width": 400,
								class: normalizeClass(_ctx.$style.title),
								"onUpdate:modelValue": handleChangeName
							}, null, 8, ["model-value", "class"])]),
							_: 1
						})], 2)]),
						_: 1
					}),
					createBaseVNode("div", {
						"data-tool-settings-content": "",
						class: normalizeClass(_ctx.$style.contentWrapper)
					}, [createVNode(ToolSettingsContent_default, {
						ref_key: "contentRef",
						ref: contentRef,
						"initial-node": __props.data.node,
						"existing-tool-names": __props.data.existingToolNames,
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate
					}, null, 8, ["initial-node", "existing-tool-names"])], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "subtle",
								onClick: handleCancel
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
								_: 1
							})]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "solid",
							disabled: !isValid.value,
							onClick: handleConfirm
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					})
				]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_d1gc9_125",
	icon: "_icon_d1gc9_132",
	title: "_title_d1gc9_137",
	contentWrapper: "_contentWrapper_d1gc9_146"
};
var ToolSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsModal_default as default };

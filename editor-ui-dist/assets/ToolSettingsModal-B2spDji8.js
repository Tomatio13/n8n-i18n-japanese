import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DhtZe8m7.js";
import { c as DialogFooter_default, d as DialogHeader_default, f as DialogClose_default, g as N8nInlineTextEdit_default, l as Dialog_default, qi as N8nButton_default, u as DialogTitle_default } from "./src-8opT_E6w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DK3ZgC4M.js";
import { r as useUIStore } from "./users.store-B9V9zygR.js";
import "./ParameterInputList-D0UlBteB.js";
import "./constants-DGgMTWMV.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-BUvu0sm6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVZ4qHCe.js";
import "./useClipboard-C47kOUlb.js";
import "./executions.store-DoT8xh9y.js";
import "./assistant.store-BGLjynfZ.js";
import "./chatPanel.store-BJU2zwG8.js";
import "./RunData-lq-X3CQT.js";
import "./NDVEmptyState-D0qajxYr.js";
import "./useEnvFeatureFlag-BZQ4GcjJ.js";
import "./externalSecrets.ee.store-CbzK8l4P.js";
import "./uniqBy-MaJ6gJ1B.js";
import "./usePinnedData-CfWiTzdo.js";
import "./nodeIcon-DV5lFQym.js";
import "./canvas.utils-Dgz6PP46.js";
import "./nodeCreator.store--Ox5RxRJ.js";
import "./useCanvasOperations-CbCN7Apa.js";
import "./folders.store-CcqQIazA.js";
import "./useQuickConnect-Cyoz5yqL.js";
import "./CredentialIcon-BeT6S3sa.js";
import "./useDynamicCredentials-B3vNoXHs.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./Draggable-B3qppKKS.js";
import { t as NodeIcon_default } from "./NodeIcon-BVgWlP81.js";
import "./VirtualSchema-DhlK1_vd.js";
import "./useCalloutHelpers-XrKSbZ0p.js";
import "./useTelemetryContext-DZq51CMv.js";
import "./useRunWorkflow-B1GUiIy8.js";
import "./pushConnection.store-dDPC5s5A.js";
import "./nodeTransforms-CAjT6aq2.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-BeTy0cl2.js";
import "./dateFormatter-j0tG5TGq.js";
import "./useExecutionHelpers-Baw4a-DB.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DbTECeW1.js";
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

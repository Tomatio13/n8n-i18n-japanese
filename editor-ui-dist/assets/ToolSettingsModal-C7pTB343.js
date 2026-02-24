import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-Cn5DLdg7.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-DQArgksh.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CDatrUD2.js";
import { r as useUIStore } from "./users.store-D-Hq9v-2.js";
import "./ParameterInputList-IBFSWLkw.js";
import "./constants-CUlzSMjf.js";
import "./merge-hHzgyaGO.js";
import "./_baseOrderBy-DXX9_Q98.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DjgpP57e.js";
import { t as Modal_default } from "./Modal-BXp2Ts0x.js";
import "./useClipboard-C-5LML_H.js";
import "./executions.store-CHGI4d9p.js";
import "./assistant.store-CN-nbdtJ.js";
import "./chatPanel.store-CT8qCc9k.js";
import "./RunData-8_f84ZUK.js";
import "./NDVEmptyState-DklkhKx9.js";
import "./useEnvFeatureFlag-CFNYXHHQ.js";
import "./externalSecrets.ee.store-CXTWkE90.js";
import "./uniqBy-hzMBq7er.js";
import "./usePinnedData-CgC4_NqP.js";
import "./nodeIcon-BFSIunEy.js";
import "./canvas.utils-Bgf-15lF.js";
import "./nodeCreator.store-yOCzFK7h.js";
import "./useCanvasOperations-Ch6EriCm.js";
import "./folders.store-Yg9-DpcH.js";
import "./useQuickConnect-CWyanQkL.js";
import "./CredentialIcon-sBDLKPci.js";
import "./useDynamicCredentials-BvBLj9R9.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./Draggable-CMtjsuei.js";
import { t as NodeIcon_default } from "./NodeIcon-BWQ87NjW.js";
import "./VirtualSchema-BZqZTkZk.js";
import "./useCalloutHelpers-BhBj42MT.js";
import "./useTelemetryContext-DGNnsjAJ.js";
import "./useRunWorkflow-DI8w9rWu.js";
import "./pushConnection.store-CMBXdKpg.js";
import "./nodeTransforms-Fn6t_txZ.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-nxwI5W6r.js";
import "./dateFormatter-C9Avww8j.js";
import "./useExecutionHelpers-jfFSn-hv.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-BQjangSC.js";
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
			return __props.data.node ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": contentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createVNode(ToolSettingsContent_default, {
					ref_key: "contentRef",
					ref: contentRef,
					"initial-node": __props.data.node,
					"existing-tool-names": __props.data.existingToolNames,
					"onUpdate:valid": handleValidUpdate,
					"onUpdate:nodeName": handleNodeNameUpdate
				}, null, 8, ["initial-node", "existing-tool-names"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_148s1_125",
	icon: "_icon_148s1_132",
	title: "_title_148s1_137",
	footer: "_footer_148s1_146",
	contentWrapper: "_contentWrapper_148s1_152"
};
var ToolSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsModal_default as default };

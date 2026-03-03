import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DAfQkYUW.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-CVRo-0o8.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CxT-NhwF.js";
import { r as useUIStore } from "./users.store-DbrQquUN.js";
import "./ParameterInputList-DNuS28TJ.js";
import "./constants-HkX3ruPP.js";
import "./merge-D06_YRZ7.js";
import "./_baseOrderBy-CRlYhHsD.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cock4s9P.js";
import { t as Modal_default } from "./Modal-D2zMKQAk.js";
import "./useClipboard-ClwZn4tC.js";
import "./executions.store-C274gC-V.js";
import "./assistant.store-Bk9cb3Vu.js";
import "./chatPanel.store-BKpTYRPD.js";
import "./RunData-CBWZdrrs.js";
import "./NDVEmptyState-CIYaMOvI.js";
import "./externalSecrets.ee.store-DZ6Ck8-U.js";
import "./uniqBy-CCJrGKA3.js";
import "./usePinnedData-Bhf0OXJU.js";
import "./nodeIcon-BOKecWPr.js";
import "./canvas.utils-BfXwNBic.js";
import "./canvas.eventBus-DTHvFt3f.js";
import "./useCanvasOperations-CE_D5JOc.js";
import "./folders.store-BpQQrRFR.js";
import "./useQuickConnect-BNFzLfvU.js";
import "./CredentialIcon-BPDtCsPE.js";
import "./useDynamicCredentials-CP83jlrA.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-5AaPWgSa.js";
import { t as NodeIcon_default } from "./NodeIcon-Gry9n8Ml.js";
import "./VirtualSchema-SpE18_18.js";
import "./useCalloutHelpers-ZIMeuTLJ.js";
import "./useTelemetryContext-Vhpc2T6o.js";
import "./useRunWorkflow-C2BrulBx.js";
import "./pushConnection.store-DkwO8pAy.js";
import "./nodeTransforms-DN41GDDX.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-nd3Pm7eP.js";
import "./dateFormatter-B9NdTL4J.js";
import "./useExecutionHelpers-CdhPqI36.js";
import "./vue-CemWrOhc.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-BL0gK5EE.js";
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

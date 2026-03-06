import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DuBqvWDL.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-DZS95w0R.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DHG94n07.js";
import { r as useUIStore } from "./users.store-CUByFFvW.js";
import "./ParameterInputList-2Qb6M-qV.js";
import "./constants-BRK6cGVZ.js";
import "./merge-Dc2_Qf1D.js";
import "./_baseOrderBy-Bjp9p9x6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DOjvR_hm.js";
import { t as Modal_default } from "./Modal-CxUPaMaG.js";
import "./useClipboard-BIxA4nej.js";
import "./executions.store-BBOGt0Qj.js";
import "./assistant.store-BNhRls5p.js";
import "./chatPanel.store-BeMYjF2p.js";
import "./RunData-DxTshM0y.js";
import "./NDVEmptyState-CV5Z6xrq.js";
import "./externalSecrets.ee.store-BIe3IF23.js";
import "./uniqBy-DFtw1KRC.js";
import "./usePinnedData-CsmzgB7l.js";
import "./nodeIcon-piEXbpBd.js";
import "./canvas.utils-Dl7tYANC.js";
import "./nodeCreator.store-Dn8v6GSm.js";
import "./useCanvasOperations-BaVwkc4x.js";
import "./folders.store-BjHVtN0W.js";
import "./useQuickConnect-DiUQZU5m.js";
import "./CredentialIcon-g_PC7wwz.js";
import "./useDynamicCredentials-W6u0IZYW.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-BgB-81jU.js";
import { t as NodeIcon_default } from "./NodeIcon-aq-etMse.js";
import "./VirtualSchema-BxcxOg-I.js";
import "./useCalloutHelpers-UHkAnVTd.js";
import "./useTelemetryContext-DvuU9rqP.js";
import "./useRunWorkflow-urfIkOcJ.js";
import "./pushConnection.store-Cxf6RoD0.js";
import "./nodeTransforms-BA_BMtiH.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CwcGt48M.js";
import "./dateFormatter-BzEmQqaR.js";
import "./useExecutionHelpers-DlnAIgJq.js";
import "./vue-D3XvnnDD.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CRdHQa7g.js";
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

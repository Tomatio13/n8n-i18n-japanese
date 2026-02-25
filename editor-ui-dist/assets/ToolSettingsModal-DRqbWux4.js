import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-CSyjmPrE.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-C2W0vRuD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-C5bbpkRa.js";
import { r as useUIStore } from "./users.store-BbMERaHH.js";
import "./ParameterInputList-D2_hUYBw.js";
import "./constants-DNTAyC0r.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-D3I5tAuy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCh9I0_n.js";
import { t as Modal_default } from "./Modal-BD6wAIpU.js";
import "./useClipboard-Cbpyeuax.js";
import "./executions.store-CvIJWJwP.js";
import "./assistant.store-d4EG0XuQ.js";
import "./chatPanel.store-BR9wUcHR.js";
import "./RunData-CTymG4Sp.js";
import "./NDVEmptyState-2SuFyx0D.js";
import "./useEnvFeatureFlag-Cu975E_j.js";
import "./externalSecrets.ee.store-Dr0RdPp2.js";
import "./uniqBy-CSVtGXMS.js";
import "./usePinnedData-BvEFdZ4_.js";
import "./nodeIcon-Cqat_ELy.js";
import "./canvas.utils-AtXIYApq.js";
import "./nodeCreator.store-Cb4Ay_03.js";
import "./useCanvasOperations-C9TNNcsm.js";
import "./folders.store-DS8lAp5P.js";
import "./useQuickConnect-lP9LvyZf.js";
import "./CredentialIcon-NZSabQgg.js";
import "./useDynamicCredentials-Cgse0ZnQ.js";
import "./RunDataHtml-CI3ozo_R.js";
import "./Draggable-CejidFg4.js";
import { t as NodeIcon_default } from "./NodeIcon-DyxIf7nP.js";
import "./VirtualSchema-BrwaPIi1.js";
import "./useCalloutHelpers-C64UODvF.js";
import "./useTelemetryContext-B0Q2O7MM.js";
import "./useRunWorkflow-qZOMLYMI.js";
import "./pushConnection.store-CEH3cNbj.js";
import "./nodeTransforms-06dYP1c_.js";
import "./vue-json-pretty-D4sAEHLG.js";
import "./collaboration.store-BadCm_XX.js";
import "./dateFormatter-DI7xmTxm.js";
import "./useExecutionHelpers-CqswqKYM.js";
import "./vue-CemWrOhc.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-NdzkMWJ5.js";
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

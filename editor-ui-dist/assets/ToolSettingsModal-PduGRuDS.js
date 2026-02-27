import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-CSyjmPrE.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-CFZC-GtF.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CDhW1tHX.js";
import { r as useUIStore } from "./users.store-Aq4wLzuB.js";
import "./ParameterInputList-OylrjPeO.js";
import "./constants-Dh9fnPxX.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-BktMx8Ff.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BFHEf0Zz.js";
import { t as Modal_default } from "./Modal-D-mU4H9I.js";
import "./useClipboard-fbRjDT3F.js";
import "./executions.store-D5QFA2R5.js";
import "./assistant.store-CHHuFM-l.js";
import "./chatPanel.store-B-yHmIuu.js";
import "./RunData-BhiKzGWw.js";
import "./NDVEmptyState-CCwunJsX.js";
import "./externalSecrets.ee.store-Bxi7WDiP.js";
import "./uniqBy-oIDPqxB0.js";
import "./usePinnedData-CTKyW5_E.js";
import "./nodeIcon-Dnm8u4n8.js";
import "./canvas.utils-U1Tywk11.js";
import "./nodeCreator.store-CByM8xU0.js";
import "./useCanvasOperations-Lt3CfUMi.js";
import "./folders.store-D-fumZqU.js";
import "./useQuickConnect-k6LYrjw2.js";
import "./CredentialIcon-Df3fOMBJ.js";
import "./useDynamicCredentials-CU758jsx.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-BiRsAGDf.js";
import { t as NodeIcon_default } from "./NodeIcon-CxMw_BXD.js";
import "./VirtualSchema-CybMefa-.js";
import "./useCalloutHelpers-BLLHObxd.js";
import "./useTelemetryContext-BQt_g1vy.js";
import "./useRunWorkflow-C4DIlHJc.js";
import "./pushConnection.store-CF0FpA7i.js";
import "./nodeTransforms-BJMGNKXH.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-CKA9BZPW.js";
import "./dateFormatter-Cjb_HP6Y.js";
import "./useExecutionHelpers-ByeC-abG.js";
import "./vue-D3XvnnDD.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-ZT2PNmJU.js";
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

import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DJgxgo4K.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-12jI_oWL.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BYwzIsMX.js";
import { r as useUIStore } from "./users.store-CZakb1us.js";
import "./ParameterInputList-BlMz7Rhk.js";
import "./constants-BRkGKd9e.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-CtcXV8Wq.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BUjIzaVZ.js";
import { t as Modal_default } from "./Modal-D8pwIui9.js";
import "./useClipboard-BEDCiksJ.js";
import "./executions.store-DVqC2FHh.js";
import "./assistant.store-CAtXR9cz.js";
import "./chatPanel.store-wJQCqtps.js";
import "./RunData-DoEFDjgs.js";
import "./NDVEmptyState-CY1cukHh.js";
import "./useEnvFeatureFlag-2I0THNjj.js";
import "./externalSecrets.ee.store-BsKfvCb4.js";
import "./uniqBy-CBKC9cCA.js";
import "./usePinnedData-DG_Ywk-r.js";
import "./nodeIcon-DktDbJuT.js";
import "./canvas.utils-BkkBE4OM.js";
import "./nodeCreator.store-DvpMIXUP.js";
import "./useCanvasOperations-CxSyi-uU.js";
import "./folders.store-CCVfzbS1.js";
import "./useQuickConnect-BzknJzGz.js";
import "./CredentialIcon-CWJp0pl5.js";
import "./useDynamicCredentials-CSjT2yKw.js";
import "./RunDataHtml-BSBlX5HV.js";
import "./Draggable-Hx9JyO8W.js";
import { t as NodeIcon_default } from "./NodeIcon-DLoy0rS7.js";
import "./VirtualSchema-BKk98XTB.js";
import "./useCalloutHelpers-Bb0pTD3y.js";
import "./useTelemetryContext-B8KKLFwF.js";
import "./useRunWorkflow-CF6jjT49.js";
import "./pushConnection.store-IatD1GaQ.js";
import "./nodeTransforms-B-GGVDC4.js";
import "./vue-json-pretty-BqDI08J2.js";
import "./collaboration.store-jS0cTddZ.js";
import "./dateFormatter-D2g3PkKx.js";
import "./useExecutionHelpers-ByXTaa33.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-Dc0G4efu.js";
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

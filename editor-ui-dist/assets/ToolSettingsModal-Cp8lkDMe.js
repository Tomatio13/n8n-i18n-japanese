import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-84FHPy_f.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-6ntFqKUX.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-zK8lOuEW.js";
import { r as useUIStore } from "./users.store-DXe0k24C.js";
import "./ParameterInputList-BAldmY0t.js";
import "./constants-DFqwcbaV.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-la78pIJR.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-V2WUQKxb.js";
import { t as Modal_default } from "./Modal-DfH99UEx.js";
import "./useClipboard-CPOP3Smf.js";
import "./executions.store-B4X62cQH.js";
import "./assistant.store-CnKXnp-m.js";
import "./chatPanel.store-DcEtx9gk.js";
import "./RunData-Cp8Fiqix.js";
import "./NDVEmptyState-CxvjZmfT.js";
import "./externalSecrets.ee.store-Xo0vHFs2.js";
import "./uniqBy-xIoJOKnG.js";
import "./usePinnedData-C8B6rpzL.js";
import "./nodeIcon-tudKUNxb.js";
import "./canvas.utils-76suIWXt.js";
import "./canvas.eventBus-Cn4sEiWY.js";
import "./useCanvasOperations-CXH5RkXF.js";
import "./folders.store-EXw-AG0G.js";
import "./useQuickConnect-DTveEq8J.js";
import "./CredentialIcon-CzVZU8i-.js";
import "./useDynamicCredentials-DqVsfeLC.js";
import "./RunDataHtml-D2ER6SKT.js";
import "./Draggable-yJDPy13g.js";
import { t as NodeIcon_default } from "./NodeIcon-BfCXDNRI.js";
import "./VirtualSchema-CeRnSTxa.js";
import "./useCalloutHelpers-DRCcpjhF.js";
import "./useTelemetryContext-B7HPcvYt.js";
import "./useRunWorkflow-BjtfX5Y3.js";
import "./pushConnection.store-DGlC9n1z.js";
import "./nodeTransforms-b1Ru2bx3.js";
import "./vue-json-pretty-DWhRG3UP.js";
import "./collaboration.store-DS2jdo5S.js";
import "./dateFormatter-C1nDIJeS.js";
import "./useExecutionHelpers-DhdHyFs3.js";
import "./vue-CemWrOhc.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CSiPrn2F.js";
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

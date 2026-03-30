import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-LQ34688M.js";
import { h as N8nInlineTextEdit_default, ra as N8nButton_default } from "./src-CIy3RA1U.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Ci6Crxzp.js";
import { r as useUIStore } from "./users.store-n3Mg-2Tf.js";
import "./ParameterInputList-B-zsSa1J.js";
import "./constants-CSSZK8sm.js";
import "./merge-BDPAvSx5.js";
import "./_baseOrderBy-DezvQaYy.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-D9WyiVgI.js";
import { t as Modal_default } from "./Modal-By7hCV_Z.js";
import "./useClipboard-BzWoj3d8.js";
import "./executions.store-Djl2tj4F.js";
import "./assistant.store-D7S0uxj2.js";
import "./chatPanel.store-COinEhFZ.js";
import "./RunData-CsIpGn79.js";
import "./NDVEmptyState-CeUWIeqT.js";
import "./externalSecrets.ee.store-DKhNi2YF.js";
import "./uniqBy-p-_6700d.js";
import "./usePinnedData-CSTrcrtx.js";
import "./nodeIcon-C4zsDtH3.js";
import "./canvas.utils-C2HyL0A8.js";
import "./canvas.eventBus-Q0g3ff2Y.js";
import "./useCanvasOperations-D253BUcq.js";
import "./setupPanel.store-B1Ix3atm.js";
import "./nodeTransforms-ClHJgqva.js";
import "./templateTransforms-BiZ3JcTy.js";
import "./useQuickConnect-CjScB7I1.js";
import "./CredentialIcon-DV59l9k0.js";
import "./DropdownMenu-DCD1GyCf.js";
import "./useDynamicCredentials-dkC2SvZs.js";
import "./RunDataHtml-RZY2ii5C.js";
import "./Draggable-BSd5TxL9.js";
import { t as NodeIcon_default } from "./NodeIcon-CYWtd79V.js";
import "./VirtualSchema-DJtbRrGI.js";
import "./useCalloutHelpers-CceO_bBX.js";
import "./useTelemetryContext-CdI6z__X.js";
import "./useRunWorkflow-CSE7fKEc.js";
import "./pushConnection.store-y-u00Iqi.js";
import "./vue-json-pretty-DeuIAVUR.js";
import "./collaboration.store-zFkVho86.js";
import "./dateFormatter-BCLLi1Ob.js";
import "./useExecutionHelpers-vkpGML3L.js";
import "./vue-BcuSR-v8.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DrNdjXm7.js";
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

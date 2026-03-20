import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-CVjD7lfb.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-DI71_LGY.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-ahyAbW59.js";
import { r as useUIStore } from "./users.store-BMJ9fc-u.js";
import "./ParameterInputList-BK4wRrNM.js";
import "./constants-BVqqmrz5.js";
import "./merge-DEVXSdfC.js";
import "./_baseOrderBy-CrD5hJjV.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-BCW--JMK.js";
import { t as Modal_default } from "./Modal-CGL2aG6V.js";
import "./useClipboard-BnsvPsrl.js";
import "./executions.store-HTiT_ST0.js";
import "./assistant.store-BVLAgpQe.js";
import "./chatPanel.store-B-I15BX3.js";
import "./RunData-CRr07ZWG.js";
import "./NDVEmptyState-B6nBXpLy.js";
import "./externalSecrets.ee.store-C2C0n6oQ.js";
import "./uniqBy-BeSvTiel.js";
import "./usePinnedData-DeK1lmat.js";
import "./nodeIcon-ByXH4W6J.js";
import "./canvas.utils-HRVIUNJr.js";
import "./canvas.eventBus-C7jRWIn-.js";
import "./useCanvasOperations-hI6y40Pq.js";
import "./setupPanel.store-CbWq_6AQ.js";
import "./nodeTransforms-BHqkOPk4.js";
import "./templateTransforms-BwT8lyVB.js";
import "./useQuickConnect-BeLXzNIX.js";
import "./CredentialIcon-DDim1dA6.js";
import "./useDynamicCredentials-CdgXtuyk.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-CUyj-UaG.js";
import { t as NodeIcon_default } from "./NodeIcon-B7_ESjJa.js";
import "./VirtualSchema-yxeWAEQ8.js";
import "./useCalloutHelpers-C5YK_hh5.js";
import "./useTelemetryContext-DKhQuV9F.js";
import "./useRunWorkflow-D847FUsJ.js";
import "./pushConnection.store-DbUjm6Hn.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BRde1xoF.js";
import "./dateFormatter-BUaskkNs.js";
import "./useExecutionHelpers-DzzfRmIq.js";
import "./vue-w5775Ang.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CA0IBDNQ.js";
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

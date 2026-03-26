import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-Ch3NFYOu.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-Dj1o0Sx_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-w11rzPYZ.js";
import { r as useUIStore } from "./users.store-Bo1lfJ-T.js";
import "./ParameterInputList-BinUq84C.js";
import "./constants-BDR7DE8A.js";
import "./merge-ClaqV-bg.js";
import "./_baseOrderBy-DOkG05Fo.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-CAe5tQHW.js";
import { t as Modal_default } from "./Modal-BDufSY0K.js";
import "./useClipboard-CVK1N1X2.js";
import "./executions.store-B5tyQf-V.js";
import "./assistant.store-CeoO8klV.js";
import "./chatPanel.store-Bnc6cLtY.js";
import "./RunData-CBv1PK3S.js";
import "./NDVEmptyState-DJByL6W7.js";
import "./externalSecrets.ee.store-Ca7UHxqE.js";
import "./uniqBy-Ko11A-v6.js";
import "./usePinnedData-CiRYLxBq.js";
import "./nodeIcon-CApuvsKH.js";
import "./canvas.utils-kRFVuaXO.js";
import "./canvas.eventBus-2WT9Tzqe.js";
import "./useCanvasOperations-diHidSKf.js";
import "./setupPanel.store-BPKyINOA.js";
import "./nodeTransforms-1-N6dxA6.js";
import "./templateTransforms-D5SvqQmN.js";
import "./useQuickConnect-CBOAluM2.js";
import "./CredentialIcon-B-DEEhAu.js";
import "./useDynamicCredentials-BqAWcZzd.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-D08esJSo.js";
import { t as NodeIcon_default } from "./NodeIcon-Ce4yDrfb.js";
import "./VirtualSchema-BVOLNtIv.js";
import "./useCalloutHelpers-Bicv1K52.js";
import "./useTelemetryContext-CYrgQ0f7.js";
import "./useRunWorkflow-Ih7N5h9V.js";
import "./pushConnection.store-i9_Sn9MF.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-Cp-FAS2N.js";
import "./dateFormatter-C885tidC.js";
import "./useExecutionHelpers-CQA3Lmzk.js";
import "./vue-w5775Ang.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-WlG-y2Cs.js";
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

import { Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Cp as useWorkflowId, Jr as useChatPanelStore, MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, Pb as NEW_ASSISTANT_SESSION_MODAL, Yr as useAssistantStore, bM as N8nText_default, gM as AskAssistantText_default, gg as useUIStore, kM as N8nButton_default, zM as useI18n } from "./app-B_io1t1X.js";
import { t as Modal_default } from "./Modal-D1475wME.js";
//#region src/features/ai/assistant/components/Chat/NewAssistantSessionModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var NewAssistantSessionModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "NewAssistantSessionModal",
	props: {
		name: {},
		data: {}
	},
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const assistantStore = useAssistantStore();
		const chatPanelStore = useChatPanelStore();
		const workflowId = useWorkflowId();
		const props = __props;
		const close = () => {
			uiStore.closeModal(NEW_ASSISTANT_SESSION_MODAL);
		};
		const startNewSession = async () => {
			if ("errorHelp" in props.data.context) {
				await chatPanelStore.openWithErrorHelper(props.data.context.errorHelp);
				assistantStore.trackUserOpenedAssistant({
					source: "error",
					task: "error",
					has_existing_session: true,
					workflowId: workflowId.value
				});
			} else if ("credHelp" in props.data.context) await chatPanelStore.openWithCredHelp(props.data.context.credHelp.credType);
			close();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "460px",
				height: "250px",
				"data-test-id": "new-assistant-session-modal",
				name: unref(NEW_ASSISTANT_SESSION_MODAL),
				center: true,
				"append-to-body": true
			}, {
				header: withCtx(() => [
					createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.newSessionModal.title.part1")) + " ", 1),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.assistantIcon) }, [createVNode(unref(N8nIcon_default), {
						icon: "n8n-assistant",
						size: 12
					})], 2),
					createVNode(unref(AskAssistantText_default), {
						size: "xlarge",
						text: unref(i18n).baseText("aiAssistant.assistant")
					}, null, 8, ["text"]),
					createTextVNode(" " + toDisplayString(unref(i18n).baseText("aiAssistant.newSessionModal.title.part2")), 1)
				]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("p", null, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.newSessionModal.message")), 1)]),
					_: 1
				})]), createBaseVNode("p", null, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.newSessionModal.question")), 1)]),
					_: 1
				})])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					label: unref(i18n).baseText("generic.cancel"),
					onClick: close
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("aiAssistant.newSessionModal.confirm"),
					onClick: startNewSession
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_1pxfb_1",
	assistantIcon: "_assistantIcon_1pxfb_8",
	footer: "_footer_1pxfb_12"
} }]]);
//#endregion
export { NewAssistantSessionModal_default as default };

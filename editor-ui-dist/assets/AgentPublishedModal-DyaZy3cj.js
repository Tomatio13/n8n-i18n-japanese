import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, ap as toDisplayString, ep as normalizeClass, is as useRouter, kd as createCommentVNode, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, Dy as useStorage, EE as N8nButton_default, FE as useI18n, Qm as LOCAL_STORAGE_HIDE_AGENT_PUBLISHED_CONFIRMATION, Um as AGENT_N8N_CHAT_VIEW, Yr as useAgentProjectBreadcrumb, bi as useAgentTelemetry, kT as Checkbox_default, qh as useUIStore, vE as N8nText_default } from "./app-kkzDAG6o.js";
import { t as AgentModal_default } from "./AgentModal-lFs_5uzP.js";
//#region src/features/agents/components/AgentPublishedModal.vue?vue&type=script&setup=true&lang.ts
var AgentPublishedModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPublishedModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const uiStore = useUIStore();
		const { trackDismissedAgentPublishedModal } = useAgentTelemetry();
		const { projectName } = useAgentProjectBreadcrumb(computed(() => props.data.projectId));
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const checked = ref(false);
		function handleCheckboxChange(checkboxValue) {
			const boolValue = typeof checkboxValue === "boolean" ? checkboxValue : Boolean(checkboxValue);
			checked.value = boolValue;
			useStorage(LOCAL_STORAGE_HIDE_AGENT_PUBLISHED_CONFIRMATION).value = boolValue.toString();
		}
		function close(action) {
			trackDismissedAgentPublishedModal({
				agentId: props.data.agentId,
				dontShowAgain: checked.value,
				action,
				n8nChatLive: props.data.n8nChatLive
			});
			uiStore.closeModal(props.modalName);
		}
		function talkToAgent() {
			close("talk_to_agent");
			router.push({
				name: AGENT_N8N_CHAT_VIEW,
				params: { agentId: props.data.agentId }
			});
		}
		function onOpenChange(open) {
			if (!open) close("closed");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.publish.modal.title"),
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-published-modal",
				"onUpdate:open": onOpenChange
			}, {
				footerLeft: withCtx(() => [createVNode(unref(Checkbox_default), {
					"model-value": checked.value,
					"data-testid": "agent-published-modal-dont-show-again",
					"onUpdate:modelValue": handleCheckboxChange
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
					_: 1
				}, 8, ["model-value"])]),
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: props.data.n8nChatLive ? "ghost" : "solid",
					"data-testid": "agent-published-modal-got-it",
					onClick: _cache[0] || (_cache[0] = ($event) => close("got_it"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.gotIt")), 1)]),
					_: 1
				}, 8, ["variant"]), props.data.n8nChatLive ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					"data-testid": "agent-published-modal-talk-to-agent",
					onClick: talkToAgent
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.talkToAgent")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.description.readyToUse")), 1)]),
						_: 1
					}),
					props.data.n8nChatLive && unref(projectName) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						"data-testid": "agent-published-modal-n8n-chat"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.description.liveInN8nChat", { interpolate: { projectName: unref(projectName) } })), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.description.changesNotPublished")), 1)]),
						_: 1
					})
				], 2)]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
});
var AgentPublishedModal_vue_vue_type_style_index_0_lang_module_default = { content: "_content_113zd_1" };
var AgentPublishedModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPublishedModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPublishedModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentPublishedModal_default as default };

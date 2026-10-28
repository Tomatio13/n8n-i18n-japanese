import { Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, ap as toDisplayString, df as watch, ep as normalizeClass, pf as withCtx, tf as renderSlot } from "./vendor-z-loPfiR.js";
import { $m as N8N_CHAT_HINT_DISMISSED_STORAGE_KEYS, AE as _plugin_vue_export_helper_default, Dy as useStorage, EE as N8nButton_default, FE as useI18n, Qw as N8nPopover_default, bi as useAgentTelemetry, vE as N8nText_default } from "./app-CqwplyU_.js";
//#region src/features/agents/components/N8nChatHintPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var N8nChatHintPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatHintPopover",
	props: {
		hint: {},
		active: { type: Boolean },
		title: {},
		body: {},
		agentId: { default: void 0 },
		side: { default: "bottom" },
		align: { default: "start" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const dismissed = useStorage(N8N_CHAT_HINT_DISMISSED_STORAGE_KEYS[props.hint]);
		const open = computed(() => props.active && dismissed.value !== "true");
		let viewTracked = false;
		watch(open, (isOpen) => {
			if (!isOpen || viewTracked) return;
			viewTracked = true;
			agentTelemetry.trackViewedN8nChatHint({
				hint: props.hint,
				agentId: props.agentId
			});
		}, { immediate: true });
		function dismiss() {
			if (!open.value) return;
			dismissed.value = "true";
			agentTelemetry.trackDismissedN8nChatHint({
				hint: props.hint,
				agentId: props.agentId
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				side: props.side,
				align: props.align,
				"show-arrow": "",
				"enable-scrolling": false,
				"suppress-auto-focus": "",
				width: "calc(var(--spacing--5xl) + var(--spacing--3xl))"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.hint),
					"data-test-id": `n8n-chat-hint-${props.hint}`
				}, [
					createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.title), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.body), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						size: "small",
						variant: "outline",
						label: unref(i18n).baseText("agents.n8nChatHint.gotIt"),
						"data-test-id": `n8n-chat-hint-${props.hint}-got-it`,
						onClick: dismiss
					}, null, 8, ["label", "data-test-id"])
				], 10, _hoisted_1)]),
				_: 3
			}, 8, [
				"open",
				"side",
				"align"
			]);
		};
	}
});
var N8nChatHintPopover_vue_vue_type_style_index_0_lang_module_default = { hint: "_hint_1x8pa_1" };
var N8nChatHintPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatHintPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatHintPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nChatHintPopover_default as t };

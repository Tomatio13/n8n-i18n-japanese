import { Ad as createTextVNode, Af as unref, Cd as computed, Kd as onMounted, Nd as defineComponent, Sf as ref, Td as createBlock, Wd as onBeforeUnmount, Yd as openBlock, Zf as normalizeClass, as as useRouter, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { H_ as useTelemetry, L as MCP_JSON_NUDGE_MODAL_KEY, _m as TELEMETRY_EVENT, au as Modal_default, aw as _plugin_vue_export_helper_default, k as MCP_SETTINGS_VIEW, qC as N8nText_default, sC as Checkbox_default, tw as N8nButton_default, uw as useI18n, xC as createEventBus } from "./app-BLs7xE53.js";
import { t as useMcpJsonNudgeEligibility } from "./useMcpJsonNudgeEligibility-BLIsH3EJ.js";
import { t as McpClientLogoCards_default } from "./McpClientLogoCards-DRe6jY-U.js";
//#region src/experiments/mcpJsonNudge/components/McpJsonNudgeModal.vue?vue&type=script&setup=true&lang.ts
var McpJsonNudgeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpJsonNudgeModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const eligibility = useMcpJsonNudgeEligibility();
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const dontShowAgain = ref(false);
		const TITLE_KEY_BY_SURFACE = {
			export: "experiments.mcpJsonNudge.modal.export.title",
			import_file: "experiments.mcpJsonNudge.modal.import.title",
			import_url: "experiments.mcpJsonNudge.modal.import.title",
			copy: "experiments.mcpJsonNudge.modal.copy.title",
			paste: "experiments.mcpJsonNudge.modal.paste.title"
		};
		const title = computed(() => i18n.baseText(TITLE_KEY_BY_SURFACE[props.data.surface]));
		function onDontShowAgainChange(value) {
			dontShowAgain.value = value;
			if (value) {
				telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_OPTED_OUT, { surface: props.data.surface });
				eligibility.dismissForever();
			}
		}
		function onConnect(close) {
			closedByAction.value = true;
			telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_CONNECT_CLICKED, { surface: props.data.surface });
			router.push({ name: MCP_SETTINGS_VIEW });
			close();
		}
		function onSkip(close) {
			closedByAction.value = true;
			telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_SKIPPED, { surface: props.data.surface });
			props.data.onContinue?.();
			close();
		}
		function onModalClosed() {
			if (!closedByAction.value) {
				telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_DISMISSED, { surface: props.data.surface });
				props.data.onContinue?.();
			}
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(MCP_JSON_NUDGE_MODAL_KEY),
				title: title.value,
				width: "480px",
				"event-bus": unref(modalBus)
			}, {
				content: withCtx(() => [createVNode(McpClientLogoCards_default, { class: normalizeClass(_ctx.$style.logoCards) }, null, 8, ["class"]), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.mcpJsonNudge.modal.body")), 1)]),
					_: 1
				})]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(Checkbox_default), {
					"model-value": dontShowAgain.value,
					"data-test-id": "mcp-json-nudge-dont-show-again",
					"onUpdate:modelValue": onDontShowAgainChange
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
					_: 1
				}, 8, ["model-value"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("experiments.mcpJsonNudge.modal.skip"),
					"data-test-id": "mcp-json-nudge-skip-button",
					onClick: ($event) => onSkip(close)
				}, null, 8, ["label", "onClick"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: unref(i18n).baseText("experiments.mcpJsonNudge.modal.connect"),
					"data-test-id": "mcp-json-nudge-connect-button",
					onClick: ($event) => onConnect(close)
				}, null, 8, ["label", "onClick"])], 2)], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
var McpJsonNudgeModal_vue_vue_type_style_index_0_lang_module_default = {
	logoCards: "_logoCards_4cmib_2",
	footer: "_footer_4cmib_9",
	actions: "_actions_4cmib_16"
};
var McpJsonNudgeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpJsonNudgeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpJsonNudgeModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpJsonNudgeModal_default as default };

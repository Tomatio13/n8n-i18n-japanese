import "./rolldown-runtime-Bq5D3eIA.js";
import { Ad as createElementBlock, Cd as Fragment, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Tf as ref, Yd as onMounted, ap as toDisplayString, dd as Transition, df as watch, ef as renderList, ep as normalizeClass, fd as TransitionGroup, fs as ElSwitch, if as resolveDynamicComponent, jd as createSlots, kd as createCommentVNode, ld as I18nT, pf as withCtx, qd as onBeforeUnmount, rs as useRouter, tf as renderSlot, tu as CollapsibleRoot_default } from "./vendor-DtL-V0ia.js";
import { $w as SettingsRowConfigure_default, AT as N8nEmptyState_default, Ay as useRootStore, CE as N8nButton_default, DE as _plugin_vue_export_helper_default, Ey as useTelemetry, Fw as N8nTabs_default, Jf as useDocumentTitle, Jh as tryUse, Kh as mcpDiscoverySettings, ME as useI18n, Mw as N8nTimeAgo_default, QC as RadioGroupItem_default, Qw as SettingsRowGroup_default, Sy as useToast, Xw as SettingsSection_default, ZC as RadioGroup_default, _E as N8nTooltip_default, aa as getMcpClientCatalog, ca as useMCPStore, da as getClientBrand, eT as SettingsRow_default, gT as N8nInfoTip_default, hE as N8nText_default, ha as MCP_DOCS_PAGE_URL, ia as MCP_CLIENT_LOGO_CYCLE, jd as useClipboard, kw as AnimatedCollapsibleContent_default, ky as useSettingsStore, lE as N8nLoading_default, lw as DialogFooter_default, ma as MCP_CLIENTS_VIEW, mw as DialogClose_default, nT as SettingsPageHeader_default, oT as N8nNotice_default, pT as N8nMarkdown_default, pa as MCP_AGENTS_VIEW, pm as useRBACStore, qh as mcpExposeAllOffer, rT as SettingsLayout_default, sE as DropdownMenu_default, sa as useMcp, ua as getAccessSummary, uw as Dialog_default, va as MCP_WORKFLOWS_VIEW, wE as N8nIcon_default, xE as Input_default } from "./app-BdR1u3Ua.js";
import { n as RevokeOAuthClientConfirmModal_default, r as OAuthClientDetailsModal_default, t as useOAuthClientRevoke } from "./useOAuthClientRevoke-BRUz8KjP.js";
//#region ../../modules/mcp/frontend/src/components/MCPEmptyState.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var _hoisted_3 = { key: 2 };
var MCPEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPEmptyState",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["turnOnMcp"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const buttonDisabled = computed(() => props.disabled || props.loading);
		const emptyStateIcon = {
			type: "cards",
			center: "mcp",
			sides: MCP_CLIENT_LOGO_CYCLE
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				class: normalizeClass(_ctx.$style.emptyState),
				"data-test-id": "mcp-empty-state-container",
				icon: emptyStateIcon,
				heading: unref(i18n).baseText("settings.mcp.actionBox.heading"),
				description: unref(i18n).baseText("settings.mcp.emptyState.description")
			}, {
				additionalContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "medium",
					href: unref(MCP_DOCS_PAGE_URL),
					target: "_blank",
					"data-test-id": "mcp-empty-state-learn-more"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), {
						icon: "arrow-up-right",
						size: "small"
					})]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nTooltip_default), { disabled: !buttonDisabled.value }, {
					content: withCtx(() => [props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("generic.loading")) + "...", 1)) : props.managedByEnv ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(i18n).baseText("settings.mcp.managedByEnv.tooltip")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip")), 1))]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						disabled: buttonDisabled.value,
						"data-test-id": "enable-mcp-access-button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("turnOnMcp"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.actionBox.button.label")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, [
				"class",
				"heading",
				"description"
			]);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/components/MCPEmptyState.vue?vue&type=style&index=0&lang.module.scss
var emptyState = "_emptyState_j48oa_277";
var fadeInUp$1 = "_fadeInUp_j48oa_1";
var actions = "_actions_j48oa_293";
var shimmer$1 = "_shimmer_j48oa_1";
var spin$1 = "_spin_j48oa_1";
var opacityPulse$1 = "_opacityPulse_j48oa_1";
var popoverIn$1 = "_popoverIn_j48oa_1";
var fadeIn$1 = "_fadeIn_j48oa_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_j48oa_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_j48oa_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_j48oa_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_j48oa_1";
var blurSwapIn$1 = "_blurSwapIn_j48oa_1";
var blurSwapOut$1 = "_blurSwapOut_j48oa_1";
var pulseGlow$1 = "_pulseGlow_j48oa_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_j48oa_1";
var fade$1 = "_fade_j48oa_1";
var fadeInDown$1 = "_fadeInDown_j48oa_1";
var fadeInLeft$1 = "_fadeInLeft_j48oa_1";
var fadeInRight$1 = "_fadeInRight_j48oa_1";
var fadeOut$1 = "_fadeOut_j48oa_1";
var fadeOutDown$1 = "_fadeOutDown_j48oa_1";
var fadeOutUp$1 = "_fadeOutUp_j48oa_1";
var fadeOutLeft$1 = "_fadeOutLeft_j48oa_1";
var fadeOutRight$1 = "_fadeOutRight_j48oa_1";
var ping$1 = "_ping_j48oa_1";
var blinkBackground$1 = "_blinkBackground_j48oa_1";
var typingBlink$1 = "_typingBlink_j48oa_1";
var MCPEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	emptyState,
	fadeInUp: fadeInUp$1,
	actions,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_j48oa_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var MCPEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/redirect-uris.utils.ts
/** Validates a single OAuth redirect URI; returns the error kind or null when valid. */
function validateRedirectUri(uri) {
	let url;
	try {
		url = new URL(uri);
	} catch {
		return "invalidUrl";
	}
	if (url.protocol !== "http:" && url.protocol !== "https:") return "invalidProtocol";
	if (!(url.hostname === "localhost" || url.hostname === "127.0.0.1") && url.protocol !== "https:") return "httpsRequired";
	return null;
}
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpAllowedCallbackUrlsDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["data-test-id", "onClick"];
var McpAllowedCallbackUrlsDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAllowedCallbackUrlsDialog",
	props: {
		open: { type: Boolean },
		uris: {},
		saving: { type: Boolean }
	},
	emits: ["update:open", "save"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const mode = ref("all");
		let nextDraftId = 0;
		const createDraft = (value = "") => ({
			id: nextDraftId++,
			value
		});
		const drafts = ref([createDraft()]);
		function resetFromUris() {
			mode.value = props.uris.length > 0 ? "trusted" : "all";
			drafts.value = props.uris.length > 0 ? props.uris.map((uri) => createDraft(uri)) : [createDraft()];
		}
		watch([() => props.open, () => props.uris], ([open]) => {
			if (!open) return;
			resetFromUris();
		}, { immediate: true });
		const trimmedDrafts = computed(() => drafts.value.map((draft) => draft.value.trim()).filter((uri) => uri.length > 0));
		const validationError = computed(() => {
			if (mode.value !== "trusted") return null;
			for (const uri of trimmedDrafts.value) {
				const error = validateRedirectUri(uri);
				if (error) return i18n.baseText(`settings.mcp.allowedRedirectUris.validation.${error}`, { interpolate: { url: uri } });
			}
			return null;
		});
		const result = computed(() => mode.value === "all" ? [] : trimmedDrafts.value);
		const canSave = computed(() => {
			if (validationError.value) return false;
			if (mode.value === "trusted" && trimmedDrafts.value.length === 0) return false;
			return true;
		});
		const addUrl = () => {
			drafts.value.push(createDraft());
		};
		const removeUrl = (id) => {
			if (drafts.value.length === 1) {
				drafts.value[0].value = "";
				return;
			}
			drafts.value = drafts.value.filter((draft) => draft.id !== id);
		};
		const onCancel = () => emit("update:open", false);
		const onSave = () => emit("save", result.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				header: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.title"),
				description: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.description"),
				"data-test-id": "mcp-callback-urls-dialog",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(RadioGroup_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event),
					orientation: "vertical",
					class: normalizeClass(_ctx.$style.modes)
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(["all", "trusted"], (option) => {
						return createBaseVNode("div", {
							key: option,
							class: normalizeClass([_ctx.$style["mode-card"], mode.value === option && _ctx.$style["mode-card-active"]]),
							"data-test-id": `mcp-callback-urls-mode-${option}`,
							onClick: ($event) => mode.value = option
						}, [createVNode(unref(RadioGroupItem_default), {
							value: option,
							label: unref(i18n).baseText(`settings.mcp.callbackUrls.mode.${option}.label`),
							description: unref(i18n).baseText(`settings.mcp.callbackUrls.mode.${option}.description`)
						}, null, 8, [
							"value",
							"label",
							"description"
						])], 10, _hoisted_1$1);
					}), 64))]),
					_: 1
				}, 8, ["modelValue", "class"]), createVNode(unref(CollapsibleRoot_default), { open: mode.value === "trusted" }, {
					default: withCtx(() => [createVNode(unref(AnimatedCollapsibleContent_default), {
						class: normalizeClass(_ctx.$style["trusted-content"]),
						blur: "",
						"data-test-id": "mcp-callback-urls-trusted"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trusted) }, [
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-dark",
								bold: "",
								class: normalizeClass(_ctx.$style["trusted-label"])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.callbackUrls.trusted.label")), 1)]),
								_: 1
							}, 8, ["class"]),
							createVNode(TransitionGroup, {
								tag: "div",
								class: normalizeClass(_ctx.$style["url-list"]),
								"enter-from-class": _ctx.$style["slot-collapsed"],
								"enter-active-class": _ctx.$style["slot-animating"],
								"leave-active-class": _ctx.$style["slot-animating"],
								"leave-to-class": _ctx.$style["slot-collapsed"]
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(drafts.value, (draft) => {
									return openBlock(), createElementBlock("div", {
										key: draft.id,
										class: normalizeClass(_ctx.$style.slot),
										"data-test-id": "mcp-callback-url-row"
									}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["slot-clip"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["url-row"]) }, [createVNode(unref(Input_default), {
										modelValue: draft.value,
										"onUpdate:modelValue": ($event) => draft.value = $event,
										type: "text",
										placeholder: unref(i18n).baseText("settings.mcp.callbackUrls.trusted.placeholder"),
										"data-test-id": "mcp-callback-url-input"
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"placeholder"
									]), drafts.value.length > 1 || draft.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
										key: 0,
										variant: "ghost",
										size: "small",
										"icon-only": "",
										icon: "x",
										"aria-label": unref(i18n).baseText("generic.delete"),
										"data-test-id": "mcp-callback-url-remove",
										onClick: ($event) => removeUrl(draft.id)
									}, null, 8, ["aria-label", "onClick"])) : createCommentVNode("", true)], 2)], 2)], 2);
								}), 128))]),
								_: 1
							}, 8, [
								"class",
								"enter-from-class",
								"enter-active-class",
								"leave-active-class",
								"leave-to-class"
							]),
							createVNode(Transition, {
								"enter-from-class": _ctx.$style["slot-collapsed"],
								"enter-active-class": _ctx.$style["slot-animating"],
								"leave-active-class": _ctx.$style["slot-animating"],
								"leave-to-class": _ctx.$style["slot-collapsed"]
							}, {
								default: withCtx(() => [validationError.value ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.slot)
								}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["slot-clip"]) }, [createVNode(unref(N8nText_default), {
									size: "small",
									color: "danger",
									class: normalizeClass(_ctx.$style.error),
									"data-test-id": "mcp-callback-urls-error"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(validationError.value), 1)]),
									_: 1
								}, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)]),
								_: 1
							}, 8, [
								"enter-from-class",
								"enter-active-class",
								"leave-active-class",
								"leave-to-class"
							]),
							createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "small",
								icon: "plus",
								label: unref(i18n).baseText("settings.mcp.callbackUrls.trusted.addUrl"),
								"data-test-id": "mcp-callback-url-add",
								onClick: addUrl
							}, null, 8, ["label"])])
						], 2)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["open"])], 2), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: unref(i18n).baseText("generic.cancel"),
						onClick: onCancel
					}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
						variant: "solid",
						label: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.save"),
						disabled: !canSave.value,
						loading: __props.saving,
						"data-test-id": "mcp-callback-urls-save",
						onClick: onSave
					}, null, 8, [
						"label",
						"disabled",
						"loading"
					])]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"open",
				"header",
				"description"
			]);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpAllowedCallbackUrlsDialog.vue?vue&type=style&index=0&lang.module.scss
var body$1 = "_body_d6sfu_280";
var modes = "_modes_d6sfu_286";
var trusted = "_trusted_d6sfu_306";
var slot = "_slot_d6sfu_332";
var error = "_error_d6sfu_312";
var shimmer = "_shimmer_d6sfu_1";
var spin = "_spin_d6sfu_1";
var opacityPulse = "_opacityPulse_d6sfu_1";
var popoverIn = "_popoverIn_d6sfu_1";
var fadeIn = "_fadeIn_d6sfu_1";
var collapsibleSlideDown = "_collapsibleSlideDown_d6sfu_1";
var collapsibleSlideUp = "_collapsibleSlideUp_d6sfu_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_d6sfu_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_d6sfu_1";
var blurSwapIn = "_blurSwapIn_d6sfu_1";
var blurSwapOut = "_blurSwapOut_d6sfu_1";
var pulseGlow = "_pulseGlow_d6sfu_1";
var pulseGlowDelayed = "_pulseGlowDelayed_d6sfu_1";
var fade = "_fade_d6sfu_1";
var fadeInUp = "_fadeInUp_d6sfu_1";
var fadeInDown = "_fadeInDown_d6sfu_1";
var fadeInLeft = "_fadeInLeft_d6sfu_1";
var fadeInRight = "_fadeInRight_d6sfu_1";
var fadeOut = "_fadeOut_d6sfu_1";
var fadeOutDown = "_fadeOutDown_d6sfu_1";
var fadeOutUp = "_fadeOutUp_d6sfu_1";
var fadeOutLeft = "_fadeOutLeft_d6sfu_1";
var fadeOutRight = "_fadeOutRight_d6sfu_1";
var ping = "_ping_d6sfu_1";
var blinkBackground = "_blinkBackground_d6sfu_1";
var typingBlink = "_typingBlink_d6sfu_1";
var McpAllowedCallbackUrlsDialog_vue_vue_type_style_index_0_lang_module_default = {
	body: body$1,
	modes,
	"mode-card": "_mode-card_d6sfu_292",
	"mode-card-active": "_mode-card-active_d6sfu_299",
	"trusted-content": "_trusted-content_d6sfu_306",
	trusted,
	"trusted-label": "_trusted-label_d6sfu_320",
	"url-list": "_url-list_d6sfu_324",
	slot,
	"slot-collapsed": "_slot-collapsed_d6sfu_341",
	"slot-animating": "_slot-animating_d6sfu_347",
	"slot-clip": "_slot-clip_d6sfu_355",
	"url-row": "_url-row_d6sfu_312",
	error,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_d6sfu_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var McpAllowedCallbackUrlsDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpAllowedCallbackUrlsDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAllowedCallbackUrlsDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/ConnectionParameter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["for"];
var _hoisted_2 = ["id"];
var ConnectionParameter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionParameter",
	props: {
		id: {},
		label: {},
		value: {},
		valueLoading: {
			type: Boolean,
			default: false
		},
		infoTip: { default: void 0 },
		allowCopy: {
			type: Boolean,
			default: true
		}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const { copy, copied, isSupported } = useClipboard();
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const handleCopy = async (value) => {
			await copy(value);
			emit("copy", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["label-wrapper"]) }, [createBaseVNode("label", {
				class: normalizeClass(_ctx.$style.label),
				for: `connection-parameter-${props.id}`
			}, toDisplayString(props.label), 11, _hoisted_1), props.infoTip ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["info-tip"])
			}, [createVNode(unref(N8nInfoTip_default), {
				type: "tooltip",
				size: "small",
				enterable: false
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.infoTip), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
				id: `connection-parameter-${props.id}`,
				class: normalizeClass({
					[_ctx.$style["parameter-value"]]: true,
					[_ctx.$style["parameter-value--loading"]]: props.valueLoading
				}),
				"data-test-id": "connection-parameter-value"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["input-wrapper"]) }, [props.valueLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: props.valueLoading,
				variant: "h1",
				class: normalizeClass(_ctx.$style["parameter-skeleton"])
			}, null, 8, ["loading", "class"])) : (openBlock(), createBlock(unref(Input_default), {
				key: 1,
				modelValue: props.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => props.value = $event),
				type: "text",
				readonly: true
			}, null, 8, ["modelValue"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-button-wrapper"]) }, [renderSlot(_ctx.$slots, "customActions"), createVNode(unref(N8nTooltip_default), {
				disabled: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				"show-after": unref(100),
				placement: "bottom"
			}, {
				default: withCtx(() => [props.allowCopy && unref(isSupported) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					"icon-only": "",
					icon: unref(copied) ? "check" : "copy",
					class: normalizeClass(_ctx.$style["copy-button"]),
					disabled: props.valueLoading,
					onClick: _cache[1] || (_cache[1] = ($event) => handleCopy(props.value))
				}, null, 8, [
					"icon",
					"class",
					"disabled"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"disabled",
				"content",
				"show-after"
			])], 2)], 10, _hoisted_2)], 2);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/components/ConnectionParameter.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_149l3_1";
var label$1 = "_label_149l3_7";
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	"label-wrapper": "_label-wrapper_149l3_7",
	"info-tip": "_info-tip_149l3_12",
	label: label$1,
	"parameter-value": "_parameter-value_149l3_29",
	"parameter-value--loading": "_parameter-value--loading_149l3_40",
	"input-wrapper": "_input-wrapper_149l3_43",
	"parameter-skeleton": "_parameter-skeleton_149l3_69",
	"copy-button-wrapper": "_copy-button-wrapper_149l3_88",
	"copy-button": "_copy-button_149l3_88"
};
var ConnectionParameter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionParameter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionParameter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpConfigSnippet.vue?vue&type=script&setup=true&lang.ts
var McpConfigSnippet_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConfigSnippet",
	props: {
		value: {},
		language: {},
		disabled: { type: Boolean }
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { copy, copied, isSupported } = useClipboard();
		const code = computed(() => `\`\`\`${props.language ?? "json"}\n${props.value}\n\`\`\``);
		const handleCopy = async () => {
			await copy(props.value);
			emit("copy", props.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-config-snippet"
			}, [createVNode(unref(N8nMarkdown_default), { content: code.value }, null, 8, ["content"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-wrapper"]) }, [createVNode(unref(N8nTooltip_default), {
				placement: "bottom-end",
				disabled: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				"show-after": unref(100)
			}, {
				default: withCtx(() => [unref(isSupported) && !__props.disabled ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					"icon-only": "",
					icon: unref(copied) ? "check" : "copy",
					class: normalizeClass(_ctx.$style["copy-button"]),
					"data-test-id": "mcp-config-snippet-copy",
					onClick: handleCopy
				}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"disabled",
				"content",
				"show-after"
			])], 2)], 2);
		};
	}
});
var McpConfigSnippet_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1mh99_1",
	"copy-wrapper": "_copy-wrapper_1mh99_17",
	"copy-button": "_copy-button_1mh99_27"
};
var McpConfigSnippet_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConfigSnippet_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConfigSnippet_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpAccessTokenTab.vue?vue&type=script&setup=true&lang.ts
var McpAccessTokenTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAccessTokenTab",
	props: { serverUrl: {} },
	emits: ["copied"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const mcpStore = useMCPStore();
		const loadingApiKey = ref(true);
		const keyRotating = ref(false);
		const apiKey = computed(() => mcpStore.currentUserMCPKey);
		const connectionString = computed(() => {
			return `{
  "mcpServers": {
    "n8n-mcp": {
      "type": "http",
      "url": "${props.serverUrl}",
      "headers": {
        "Authorization": "Bearer ${apiKeyText.value}"
      }
    }
  }
}`;
		});
		const isKeyRedacted = computed(() => {
			return apiKey.value?.apiKey?.includes("******") ?? false;
		});
		const apiKeyText = computed(() => {
			if (keyRotating.value) return `<${i18n.baseText("generic.loading")}...>`;
			return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : apiKey.value?.apiKey;
		});
		const fetchApiKey = async () => {
			try {
				loadingApiKey.value = true;
				await mcpStore.getOrCreateApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.apiKey"));
			} finally {
				setTimeout(() => {
					loadingApiKey.value = false;
				}, 200);
			}
		};
		const rotateKey = async () => {
			try {
				keyRotating.value = true;
				await mcpStore.generateNewApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.rotating.apiKey"));
			} finally {
				setTimeout(() => {
					keyRotating.value = false;
				}, 200);
			}
		};
		const handleConnectionStringCopy = (value) => {
			emit("copied", "mcpJson", value);
		};
		const handleUrlCopy = (url) => {
			emit("copied", "serverUrl", url);
		};
		const handleAccessTokenCopy = () => {
			if (apiKey.value?.apiKey) emit("copied", "accessToken", apiKey.value.apiKey);
		};
		onMounted(async () => {
			if (!apiKey.value) await fetchApiKey();
			else loadingApiKey.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-access-token-tab"
			}, [createVNode(ConnectionParameter_default, {
				id: "oauth-server-url",
				label: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
				value: props.serverUrl,
				onCopy: handleUrlCopy
			}, null, 8, ["label", "value"]), loadingApiKey.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["loading-container"])
			}, [createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "h1",
				class: normalizeClass(_ctx.$style["url-skeleton"])
			}, null, 8, ["loading", "class"]), createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "button",
				class: normalizeClass(_ctx.$style["code-skeleton"])
			}, null, 8, ["loading", "class"])], 2)) : apiKey.value?.apiKey ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style["parameters-container"])
			}, [
				createVNode(ConnectionParameter_default, {
					id: "access-token",
					value: apiKey.value.apiKey,
					"value-loading": keyRotating.value,
					label: unref(i18n).baseText("settings.mcp.connectDialog.tab.accessToken"),
					"info-tip": unref(i18n).baseText("settings.mcp.instructions.apiKey.tip"),
					"allow-copy": !isKeyRedacted.value,
					onCopy: handleAccessTokenCopy
				}, {
					customActions: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("settings.mcp.instructions.rotateKey.tooltip"),
						"show-after": unref(100)
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							"icon-only": "",
							icon: "refresh-cw",
							disabled: keyRotating.value,
							onClick: rotateKey
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "show-after"])]),
					_: 1
				}, 8, [
					"value",
					"value-loading",
					"label",
					"info-tip",
					"allow-copy"
				]),
				!isKeyRedacted.value ? (openBlock(), createBlock(unref(N8nNotice_default), { key: 0 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.access.token.notice")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["json-container"]),
					"data-test-id": "mcp-access-token-json"
				}, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.connectDialog.jsonConfig")), 3), createVNode(McpConfigSnippet_default, {
					value: connectionString.value,
					disabled: keyRotating.value,
					onCopy: handleConnectionStringCopy
				}, null, 8, ["value", "disabled"])], 2)
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpAccessTokenTab.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1as3u_1";
var label = "_label_1as3u_32";
var McpAccessTokenTab_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"loading-container": "_loading-container_1as3u_6",
	"url-skeleton": "_url-skeleton_1as3u_12",
	"code-skeleton": "_code-skeleton_1as3u_17",
	"parameters-container": "_parameters-container_1as3u_22",
	"json-container": "_json-container_1as3u_28",
	label
};
var McpAccessTokenTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpAccessTokenTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAccessTokenTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpConnectClientDialog.vue?vue&type=script&setup=true&lang.ts
var McpConnectClientDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConnectClientDialog",
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const mcpStore = useMCPStore();
		const serverUrl = computed(() => mcpStore.serverUrl);
		const catalog = computed(() => getMcpClientCatalog(serverUrl.value));
		const clientsById = computed(() => new Map(catalog.value.flatMap((group) => group.clients.map((client) => [client.id, client]))));
		const activeMethod = ref("oauth");
		const methodTabs = computed(() => [{
			label: i18n.baseText("settings.mcp.connectDialog.method.oauth"),
			value: "oauth"
		}, {
			label: i18n.baseText("settings.mcp.connectDialog.method.apiKey"),
			value: "apiKey"
		}]);
		const activeClientId = ref("claude-ai");
		const activeClient = computed(() => clientsById.value.get(activeClientId.value));
		const clientMenuItems = computed(() => {
			const items = [];
			for (const group of catalog.value) {
				items.push({
					id: `header:${group.id}`,
					label: i18n.baseText(`settings.mcp.connectDialog.category.${group.id}`),
					disabled: true,
					divided: items.length > 0,
					data: { kind: "header" }
				});
				for (const client of group.clients) items.push({
					id: client.id,
					label: client.name,
					checked: client.id === activeClientId.value,
					data: {
						kind: "client",
						client
					}
				});
			}
			return items;
		});
		const onSelectClient = (id) => {
			if (clientMenuItems.value.find((menuItem) => menuItem.id === id)?.data?.kind !== "client") return;
			activeClientId.value = id;
			telemetry.track("User selected MCP client in connect dialog", { client: id });
		};
		const onOpenChange = (open) => {
			if (open) mcpStore.openConnectPopover();
			else {
				mcpStore.closeConnectPopover();
				mcpStore.resetCurrentUserMCPKey();
				activeMethod.value = "oauth";
			}
		};
		const trackCopy = (parameter) => {
			telemetry.track("User copied MCP connection parameter", {
				parameter,
				source: "connect-dialog"
			});
		};
		const handleTokenTabCopy = (type) => {
			trackCopy({
				serverUrl: "server-url",
				accessToken: "access-token",
				mcpJson: "mcp-json"
			}[type]);
		};
		const installTitle = computed(() => i18n.baseText("settings.mcp.connectDialog.install.title", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const installDescription = computed(() => i18n.baseText("settings.mcp.connectDialog.install.description", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const authenticateDescription = computed(() => activeClient.value?.authCommand ? i18n.baseText("settings.mcp.connectDialog.authenticate.description.command") : i18n.baseText("settings.mcp.connectDialog.authenticate.description.mcpCommand", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const oneClickDescription = computed(() => activeClient.value?.category === "web" ? i18n.baseText("settings.mcp.connectDialog.oneClick.description.web", { interpolate: { client: activeClient.value?.name ?? "" } }) : i18n.baseText("settings.mcp.connectDialog.oneClick.description.ide", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const addButtonLabel = computed(() => i18n.baseText("settings.mcp.connectDialog.oneClick.button", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const sharedConfigFileDescriptionKeys = {
			antigravity: "settings.mcp.connectDialog.configure.antigravity.description",
			devin: "settings.mcp.connectDialog.configure.devin.description"
		};
		const configureDescription = computed(() => i18n.baseText(sharedConfigFileDescriptionKeys[activeClient.value?.id ?? ""] ?? "settings.mcp.connectDialog.configure.description"));
		const serverUrlDescription = computed(() => i18n.baseText("settings.mcp.connectDialog.serverUrl.description", { interpolate: { client: activeClient.value?.name ?? "" } }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: unref(mcpStore).connectPopoverOpen,
				size: "large",
				header: unref(i18n).baseText("settings.mcp.connectDialog.title"),
				description: unref(i18n).baseText("settings.mcp.connectDialog.description"),
				"data-test-id": "mcp-connect-dialog",
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nTabs_default), {
					"model-value": activeMethod.value,
					options: methodTabs.value,
					class: normalizeClass(_ctx.$style.tabs),
					"data-test-id": "mcp-connect-method-tabs",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeMethod.value = $event)
				}, null, 8, [
					"model-value",
					"options",
					"class"
				]), activeMethod.value === "oauth" ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
					default: withCtx(() => [createVNode(unref(SettingsRow_default), {
						title: unref(i18n).baseText("settings.mcp.connectDialog.yourClient.title"),
						description: unref(i18n).baseText("settings.mcp.connectDialog.yourClient.description"),
						"show-divider": !!activeClient.value
					}, {
						action: withCtx(() => [createVNode(unref(DropdownMenu_default), {
							items: clientMenuItems.value,
							placement: "bottom-end",
							"max-height": "min(var(--reka-dropdown-menu-content-available-height), 30rem)",
							"extra-popper-class": _ctx.$style["picker-menu"],
							"data-test-id": "mcp-connect-client-picker",
							onSelect: onSelectClient
						}, {
							trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "medium",
								"aria-label": unref(i18n).baseText("settings.mcp.connectDialog.yourClient.title"),
								"data-test-id": "mcp-connect-client-picker-trigger"
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["picker-trigger"]) }, [
									activeClient.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
										key: 0,
										class: normalizeClass(_ctx.$style["brand-icon"])
									}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 1,
										icon: "mcp",
										size: "small",
										color: "text-light"
									})),
									createTextVNode(" " + toDisplayString(activeClient.value?.name) + " ", 1),
									createVNode(unref(N8nIcon_default), {
										icon: "chevron-down",
										size: "small"
									})
								], 2)]),
								_: 1
							}, 8, ["aria-label"])]),
							"item-leading": withCtx(({ item }) => [item.data?.kind === "client" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [item.data.client.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.data.client.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style["brand-icon"])
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								size: "large",
								color: "text-light"
							}))], 64)) : createCommentVNode("", true)]),
							"item-label": withCtx(({ item }) => [item.data?.kind === "header" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.category)
							}, toDisplayString(item.label), 3)) : (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								size: "medium",
								color: "text-dark",
								class: normalizeClass(_ctx.$style["client-label"])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["class"]))]),
							_: 1
						}, 8, ["items", "extra-popper-class"])]),
						_: 1
					}, 8, [
						"title",
						"description",
						"show-divider"
					]), activeClient.value?.category === "cli" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: installTitle.value,
							description: installDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								id: "mcp-install-command",
								class: normalizeClass(_ctx.$style["copy-field"]),
								label: "",
								value: activeClient.value.installCommand ?? "",
								onCopy: _cache[1] || (_cache[1] = ($event) => trackCopy("install-command"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.configure.titleAlt"),
							description: unref(i18n).baseText("settings.mcp.connectDialog.configure.descriptionAlt")
						}, {
							action: withCtx(() => [createVNode(McpConfigSnippet_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								value: activeClient.value.configSnippet ?? "",
								language: activeClient.value.id === "codex" ? "toml" : "json",
								onCopy: _cache[2] || (_cache[2] = ($event) => trackCopy("config"))
							}, null, 8, [
								"class",
								"value",
								"language"
							])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.authenticate.title"),
							description: authenticateDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								id: "mcp-auth-command",
								class: normalizeClass(_ctx.$style["copy-field"]),
								label: "",
								value: activeClient.value.authCommand ?? "/mcp",
								onCopy: _cache[3] || (_cache[3] = ($event) => trackCopy("auth-command"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : activeClient.value?.category === "web" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [activeClient.value.addUrl ? (openBlock(), createBlock(unref(SettingsRow_default), {
						key: 0,
						"show-divider": false,
						title: unref(i18n).baseText("settings.mcp.connectDialog.oneClick.title"),
						description: oneClickDescription.value
					}, {
						action: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							href: activeClient.value.addUrl,
							target: "_blank",
							"data-test-id": "mcp-connect-one-click"
						}, {
							default: withCtx(() => [activeClient.value.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style["brand-icon"])
							}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(addButtonLabel.value), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["title", "description"])) : createCommentVNode("", true), createVNode(unref(SettingsRow_default), {
						layout: "vertical",
						"show-divider": false,
						title: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
						description: serverUrlDescription.value
					}, {
						action: withCtx(() => [createVNode(ConnectionParameter_default, {
							id: "mcp-web-server-url",
							class: normalizeClass(_ctx.$style["copy-field"]),
							label: "",
							value: serverUrl.value,
							onCopy: _cache[4] || (_cache[4] = ($event) => trackCopy("server-url"))
						}, null, 8, ["class", "value"])]),
						_: 1
					}, 8, ["title", "description"])], 64)) : activeClient.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						activeClient.value.deepLink ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 0,
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.oneClick.title"),
							description: oneClickDescription.value
						}, {
							action: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "medium",
								href: activeClient.value.deepLink,
								"data-test-id": "mcp-connect-one-click"
							}, {
								default: withCtx(() => [activeClient.value.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
									key: 0,
									class: normalizeClass(_ctx.$style["brand-icon"])
								}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(addButtonLabel.value), 1)]),
								_: 1
							}, 8, ["href"])]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
							description: serverUrlDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								id: "mcp-server-url",
								class: normalizeClass(_ctx.$style["copy-field"]),
								label: "",
								value: serverUrl.value,
								onCopy: _cache[5] || (_cache[5] = ($event) => trackCopy("server-url"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.configure.title"),
							description: configureDescription.value
						}, {
							action: withCtx(() => [createVNode(McpConfigSnippet_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								value: activeClient.value.configSnippet ?? "",
								onCopy: _cache[6] || (_cache[6] = ($event) => trackCopy("config"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : createCommentVNode("", true)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style["token-setup"]),
					"data-test-id": "mcp-connect-token-setup"
				}, [createVNode(McpAccessTokenTab_default, {
					"server-url": serverUrl.value,
					onCopied: handleTokenTabCopy
				}, null, 8, ["server-url"])], 2))], 2)]),
				_: 1
			}, 8, [
				"open",
				"header",
				"description"
			]);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpConnectClientDialog.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_1f42f_3";
var tabs = "_tabs_1f42f_10";
var category = "_category_1f42f_36";
var McpConnectClientDialog_vue_vue_type_style_index_0_lang_module_default = {
	body,
	tabs,
	"picker-trigger": "_picker-trigger_1f42f_14",
	"picker-menu": "_picker-menu_1f42f_21",
	"client-label": "_client-label_1f42f_25",
	"brand-icon": "_brand-icon_1f42f_29",
	category,
	"copy-field": "_copy-field_1f42f_48",
	"token-setup": "_token-setup_1f42f_52"
};
var McpConnectClientDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConnectClientDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConnectClientDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpConnectedClientRow.vue?vue&type=script&setup=true&lang.ts
/**
* One of the current user's connected clients, previewed inline on the MCP
* settings overview. The row opens the client's details; the hover-revealed
* action starts the revoke flow.
*/
var McpConnectedClientRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConnectedClientRow",
	props: {
		client: {},
		scopeTools: {}
	},
	emits: ["click", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const brand = computed(() => getClientBrand(props.client.name));
		const typeLabel = computed(() => {
			const type = brand.value.type;
			if (!type) return null;
			return i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`);
		});
		const offeredScopes = computed(() => props.scopeTools ? Object.keys(props.scopeTools) : void 0);
		const accessSummary = computed(() => getAccessSummary(i18n, props.client, offeredScopes.value));
		const grantedAt = computed(() => new Date(props.client.grantedAt).toISOString());
		const metaKeypath = computed(() => typeLabel.value ? "settings.mcp.connectedClients.preview.meta" : "settings.mcp.connectedClients.preview.metaWithoutType");
		const revokeLabel = computed(() => i18n.baseText("settings.mcp.oAuthClients.table.action.revokeAccessFor", { interpolate: { name: props.client.name } }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsRow_default), {
				title: __props.client.name,
				"show-visual": "",
				clickable: "",
				"reveal-actions-on-hover": "",
				"data-test-id": "mcp-client-preview-row",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("click"))
			}, {
				visual: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.tile) }, [brand.value.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
					key: 0,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "mcp",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]))], 2)]),
				info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
					createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium",
						color: "text-dark",
						class: normalizeClass(_ctx.$style.line),
						"data-test-id": "mcp-client-preview-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.client.name), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.line)
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: metaKeypath.value,
							scope: "global",
							tag: "span"
						}, createSlots({
							timeAgo: withCtx(() => [createVNode(unref(N8nTimeAgo_default), {
								date: grantedAt.value,
								locale: unref(rootStore).defaultLocale
							}, null, 8, ["date", "locale"])]),
							_: 2
						}, [typeLabel.value ? {
							name: "type",
							fn: withCtx(() => [createTextVNode(toDisplayString(typeLabel.value), 1)]),
							key: "0"
						} : void 0]), 1032, ["keypath"])]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light",
						class: normalizeClass(_ctx.$style.line),
						"data-test-id": "mcp-client-preview-access"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(accessSummary.value), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				action: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					label: unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess"),
					"aria-label": revokeLabel.value,
					"data-test-id": "mcp-client-preview-revoke-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("revoke"))
				}, null, 8, ["label", "aria-label"])]),
				_: 1
			}, 8, ["title"]);
		};
	}
});
var McpConnectedClientRow_vue_vue_type_style_index_0_lang_module_default = {
	tile: "_tile_oqi6l_2",
	icon: "_icon_oqi6l_11",
	info: "_info_oqi6l_19",
	line: "_line_oqi6l_26"
};
var McpConnectedClientRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConnectedClientRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConnectedClientRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/McpStatusControl.vue?vue&type=script&setup=true&lang.ts
var McpStatusControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpStatusControl",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["disable"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const disabledTooltip = computed(() => props.managedByEnv ? i18n.baseText("settings.mcp.managedByEnv.tooltip") : i18n.baseText("settings.mcp.toggle.disabled.tooltip"));
		const menuItems = computed(() => [{
			id: "disable",
			label: i18n.baseText("settings.mcp.status.disable")
		}]);
		const onSelect = (id) => {
			if (id === "disable") emit("disable");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: disabledTooltip.value,
				disabled: !props.disabled,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: menuItems.value,
					placement: "bottom-end",
					disabled: props.disabled || props.loading,
					"data-test-id": "mcp-status-control",
					onSelect
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						disabled: props.disabled,
						loading: props.loading,
						"aria-label": unref(i18n).baseText("settings.mcp.status.ariaLabel"),
						"data-test-id": "mcp-status-control-trigger"
					}, {
						default: withCtx(() => [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.mcp.header.toggle.enabled")) + " ", 1),
							createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: "small"
							})
						]),
						_: 1
					}, 8, [
						"disabled",
						"loading",
						"aria-label"
					])]),
					"item-leading": withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "power",
						size: "large",
						color: "danger"
					})]),
					"item-label": withCtx(({ item }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: "danger",
						"data-test-id": "mcp-status-disable-item"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1024)]),
					_: 1
				}, 8, ["items", "disabled"])]),
				_: 1
			}, 8, ["content", "disabled"]);
		};
	}
});
var McpStatusControl_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_ex8jt_1",
	"mcp-status-pulse": "_mcp-status-pulse_ex8jt_1"
};
var McpStatusControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpStatusControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpStatusControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/SettingsMCPView.vue?vue&type=script&setup=true&lang.ts
var SettingsMCPView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPView",
	setup(__props) {
		const i18n = useI18n();
		const discoverySettings = tryUse(mcpDiscoverySettings);
		const discoveryOverrides = computed(() => discoverySettings?.overrides());
		const connectHintDismissed = ref(false);
		const toast = useToast();
		const documentTitle = useDocumentTitle({ releaseChannel: useSettingsStore().settings.releaseChannel });
		const mcp = useMcp();
		const router = useRouter();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const rbacStore = useRBACStore();
		const exposeAllOffer = tryUse(mcpExposeAllOffer);
		const isExposeAllOfferEnabled = computed(() => exposeAllOffer?.isEnabled() ?? false);
		const agentsEnabled = computed(() => settingsStore.isAgentsEnabled);
		const mcpStatusLoading = ref(false);
		const showDisableDialog = ref(false);
		const isLoadingClients = ref(true);
		const canManageMcpInstance = computed(() => rbacStore.hasScope("mcp:manage"));
		const canToggleMCP = computed(() => canManageMcpInstance.value && !mcpStore.mcpManagedByEnv);
		const exposedWorkflowsCount = ref(null);
		const autoExposeSaving = ref(false);
		const showCallbackUrlsDialog = ref(false);
		const savingCallbackUrls = ref(false);
		const onAutoExposeSwitchUpdate = (value) => {
			onToggleAutoExpose(value === true);
		};
		const onToggleAutoExpose = async (value) => {
			autoExposeSaving.value = true;
			try {
				const updated = await mcpStore.setAutoExposeNewWorkflows(value);
				mcp.trackAutoExposeToggled({
					enabled: updated,
					source: "settings"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.autoExpose.error.title"));
			} finally {
				autoExposeSaving.value = false;
			}
		};
		const showInstanceCapacityNotice = computed(() => canManageMcpInstance.value && mcpStore.instanceClientStats?.atCapacity === true);
		const instanceCapacityNoticeContent = computed(() => {
			const stats = mcpStore.instanceClientStats;
			if (!stats) return "";
			return i18n.baseText("settings.mcp.instanceCapacity.warning", { interpolate: {
				count: String(stats.count),
				limit: String(stats.limit)
			} });
		});
		const workflowsExposedValue = computed(() => exposedWorkflowsCount.value === null ? "—" : i18n.baseText("settings.mcp.workflowsExposed.count", {
			adjustToNumber: exposedWorkflowsCount.value,
			interpolate: { count: String(exposedWorkflowsCount.value) }
		}));
		const exposedAgentsCount = ref(null);
		const agentsExposedValue = computed(() => exposedAgentsCount.value === null ? "—" : i18n.baseText("settings.mcp.agentsExposed.count", {
			adjustToNumber: exposedAgentsCount.value,
			interpolate: { count: String(exposedAgentsCount.value) }
		}));
		const callbackUrlsValue = computed(() => mcpStore.allowedRedirectUris.length === 0 ? i18n.baseText("settings.mcp.callbackUrls.value.all") : i18n.baseText("settings.mcp.callbackUrls.value.count", {
			adjustToNumber: mcpStore.allowedRedirectUris.length,
			interpolate: { count: String(mcpStore.allowedRedirectUris.length) }
		}));
		const fetchExposedWorkflowsCount = async () => {
			try {
				exposedWorkflowsCount.value = (await mcpStore.fetchWorkflowsAvailableForMCP(1, 1)).count;
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			}
		};
		const fetchExposedAgentsCount = async () => {
			if (!agentsEnabled.value) return;
			try {
				exposedAgentsCount.value = (await mcpStore.fetchAgentsAvailableForMCP(1, 1)).count;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.agents.list.error.fetching"));
			}
		};
		const onToggleMCPAccess = async (enabled) => {
			try {
				mcpStatusLoading.value = true;
				const updated = await mcpStore.setMcpAccessEnabled(enabled);
				if (updated) await Promise.all([
					fetchExposedWorkflowsCount(),
					fetchExposedAgentsCount(),
					fetchConnectedClientsPreview()
				]);
				mcp.trackUserToggledMcpAccess(enabled);
				if (enabled && updated) exposeAllOffer?.offer(async () => {
					await Promise.all([fetchExposedWorkflowsCount(), fetchExposedAgentsCount()]);
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				mcpStatusLoading.value = false;
			}
		};
		const onConfirmDisable = async () => {
			showDisableDialog.value = false;
			await onToggleMCPAccess(false);
		};
		/**
		* Loads the user's own first clients for the inline preview, along with the
		* totals the "N clients have access" count renders. Only the user's own clients
		* are previewed here; other users' clients stay behind the clients page, which
		* gates them by permission.
		*/
		const fetchConnectedClientsPreview = async () => {
			isLoadingClients.value = true;
			try {
				await mcpStore.fetchOAuthClientsPreview();
				isLoadingClients.value = false;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const previewClients = computed(() => mcpStore.oauthClientsPreview);
		/** Instance-wide count when the user can see it, own count otherwise. */
		const connectedClientsTotal = computed(() => mcpStore.oauthClientTotals.all ?? mcpStore.oauthClientTotals.mine);
		const showViewAllRow = computed(() => previewClients.value.length === 0 || connectedClientsTotal.value > previewClients.value.length);
		const onConnectClient = () => {
			mcp.trackConnectClientClicked("settings");
			mcpStore.openConnectPopover();
		};
		const openClientsView = () => {
			const { mine, all } = mcpStore.oauthClientTotals;
			const tab = mine === 0 && (all ?? 0) > 0 ? "all" : "mine";
			router.push({
				name: MCP_CLIENTS_VIEW,
				query: { tab }
			});
		};
		const detailsClient = ref(null);
		const detailsOpen = ref(false);
		const openClientDetails = (client) => {
			detailsClient.value = client;
			detailsOpen.value = true;
		};
		const { revokeClient, revoking, isRevokingForOther, requestRevoke, cancelRevoke, confirmRevoke } = useOAuthClientRevoke({
			refreshList: false,
			onRevoked: fetchConnectedClientsPreview
		});
		const openWorkflowsView = () => {
			router.push({ name: MCP_WORKFLOWS_VIEW });
		};
		const openAgentsView = () => {
			router.push({ name: MCP_AGENTS_VIEW });
		};
		const loadRedirectUris = async () => {
			try {
				await mcpStore.fetchAllowedRedirectUris();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.loading"));
			}
		};
		const onSaveCallbackUrls = async (uris) => {
			try {
				savingCallbackUrls.value = true;
				await mcpStore.setAllowedRedirectUris(uris);
				showCallbackUrlsDialog.value = false;
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.allowedRedirectUris.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.saving"));
			} finally {
				savingCallbackUrls.value = false;
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			const fetches = [
				fetchExposedWorkflowsCount(),
				fetchExposedAgentsCount(),
				fetchConnectedClientsPreview()
			];
			if (canManageMcpInstance.value) {
				fetches.push(loadRedirectUris());
				fetches.push(mcpStore.getInstanceClientStats());
			}
			await Promise.all(fetches);
		});
		onBeforeUnmount(() => {
			mcpStore.clearOAuthClientsPreview();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.mcp.page.title"),
						description: discoveryOverrides.value?.description ?? unref(i18n).baseText("settings.mcp.page.description"),
						"docs-leading-text": discoveryOverrides.value?.docsLeadingText,
						"docs-url": unref(MCP_DOCS_PAGE_URL),
						"docs-label": unref(i18n).baseText("settings.mcp.page.docsLabel"),
						"data-test-id": "mcp-settings-header"
					}, null, 8, [
						"title",
						"description",
						"docs-leading-text",
						"docs-url",
						"docs-label"
					]),
					!unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(MCPEmptyState_default, {
						key: 0,
						disabled: !canToggleMCP.value,
						loading: mcpStatusLoading.value,
						"managed-by-env": unref(mcpStore).mcpManagedByEnv,
						onTurnOnMcp: _cache[0] || (_cache[0] = ($event) => onToggleMCPAccess(true))
					}, null, 8, [
						"disabled",
						"loading",
						"managed-by-env"
					])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						showInstanceCapacityNotice.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
							key: 0,
							theme: "warning",
							"data-test-id": "mcp-instance-capacity-notice",
							content: instanceCapacityNoticeContent.value
						}, null, 8, ["content"])) : createCommentVNode("", true),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.mcp.connectionDetails.title"),
							"data-test-id": "mcp-enabled-section"
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText("settings.mcp.status.title"),
									description: unref(i18n).baseText("settings.mcp.status.description")
								}, {
									action: withCtx(() => [createVNode(McpStatusControl_default, {
										disabled: !canToggleMCP.value,
										loading: mcpStatusLoading.value,
										"managed-by-env": unref(mcpStore).mcpManagedByEnv,
										onDisable: _cache[1] || (_cache[1] = ($event) => showDisableDialog.value = true)
									}, null, 8, [
										"disabled",
										"loading",
										"managed-by-env"
									])]),
									_: 1
								}, 8, ["title", "description"]), createVNode(unref(SettingsRow_default), {
									title: discoveryOverrides.value?.clientTitle ?? unref(i18n).baseText("settings.mcp.yourClient.title"),
									description: discoveryOverrides.value?.clientDescription ?? unref(i18n).baseText("settings.mcp.yourClient.description")
								}, {
									action: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(discoverySettings)?.connectHint ?? "span"), {
										dismissed: connectHintDismissed.value,
										"onUpdate:dismissed": _cache[2] || (_cache[2] = ($event) => connectHintDismissed.value = $event)
									}, {
										default: withCtx(() => [createVNode(unref(N8nButton_default), {
											variant: discoveryOverrides.value?.connectVariant ?? "outline",
											size: "medium",
											icon: "mcp",
											label: unref(i18n).baseText("settings.mcp.yourClient.connect"),
											"data-test-id": "mcp-connect-client-button",
											onClick: onConnectClient
										}, null, 8, ["variant", "label"])]),
										_: 1
									}, 40, ["dismissed"]))]),
									_: 1
								}, 8, ["title", "description"])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.mcp.access.title") }, {
							default: withCtx(() => [
								createVNode(unref(SettingsRowGroup_default), null, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.workflowsExposed.title"),
										description: unref(i18n).baseText("settings.mcp.workflowsExposed.description"),
										clickable: "",
										"data-test-id": "mcp-workflows-exposed-row",
										onClick: openWorkflowsView
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: workflowsExposedValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"]), canManageMcpInstance.value && isExposeAllOfferEnabled.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										title: unref(i18n).baseText("settings.mcp.autoExpose.title"),
										description: unref(i18n).baseText("settings.mcp.autoExpose.description")
									}, {
										action: withCtx(() => [createVNode(unref(ElSwitch), {
											"data-test-id": "mcp-auto-expose-toggle",
											"model-value": unref(mcpStore).autoExposeNewWorkflows,
											disabled: unref(mcpStore).mcpManagedByEnv,
											loading: autoExposeSaving.value,
											"onUpdate:modelValue": onAutoExposeSwitchUpdate
										}, null, 8, [
											"model-value",
											"disabled",
											"loading"
										])]),
										_: 1
									}, 8, ["title", "description"])) : createCommentVNode("", true)]),
									_: 1
								}),
								agentsEnabled.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.agentsExposed.title"),
										description: unref(i18n).baseText("settings.mcp.agentsExposed.description"),
										clickable: "",
										"data-test-id": "mcp-agents-exposed-row",
										onClick: openAgentsView
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: agentsExposedValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"])]),
									_: 1
								})) : createCommentVNode("", true),
								canManageMcpInstance.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.callbackUrls.title"),
										description: unref(i18n).baseText("settings.mcp.callbackUrls.description"),
										clickable: "",
										"data-test-id": "mcp-callback-urls-row",
										onClick: _cache[3] || (_cache[3] = ($event) => showCallbackUrlsDialog.value = true)
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: callbackUrlsValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"])]),
									_: 1
								})) : createCommentVNode("", true)
							]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.mcp.connectedClients.title") }, {
							default: withCtx(() => [previewClients.value.length > 0 ? (openBlock(), createBlock(unref(SettingsRowGroup_default), {
								key: 0,
								"data-test-id": "mcp-clients-preview"
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(previewClients.value, (client) => {
									return openBlock(), createBlock(McpConnectedClientRow_default, {
										key: client.id,
										client,
										"scope-tools": unref(mcpStore).oauthClientScopeTools,
										onClick: ($event) => openClientDetails(client),
										onRevoke: ($event) => unref(requestRevoke)(client)
									}, null, 8, [
										"client",
										"scope-tools",
										"onClick",
										"onRevoke"
									]);
								}), 128))]),
								_: 1
							})) : createCommentVNode("", true), showViewAllRow.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText("settings.mcp.connectedClients.viewAll.title"),
									description: isLoadingClients.value ? unref("—") : unref(i18n).baseText("settings.mcp.connectedClients.viewAll.description", {
										adjustToNumber: connectedClientsTotal.value,
										interpolate: { count: String(connectedClientsTotal.value) }
									}),
									clickable: "",
									"data-test-id": "mcp-clients-view-all-row",
									onClick: openClientsView
								}, {
									action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: unref(i18n).baseText("settings.mcp.connectedClients.viewAll.action") }, null, 8, ["value"])]),
									_: 1
								}, 8, ["title", "description"])]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["title"])
					], 64)),
					createVNode(unref(Dialog_default), {
						open: showDisableDialog.value,
						"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showDisableDialog.value = $event),
						size: "small",
						header: unref(i18n).baseText("settings.mcp.status.disableDialog.title"),
						description: unref(i18n).baseText("settings.mcp.status.disableDialog.description"),
						"data-test-id": "mcp-disable-dialog"
					}, {
						default: withCtx(() => [createVNode(unref(DialogFooter_default), null, {
							default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									label: unref(i18n).baseText("generic.cancel")
								}, null, 8, ["label"])]),
								_: 1
							}), createVNode(unref(N8nButton_default), {
								variant: "destructive",
								label: unref(i18n).baseText("settings.mcp.status.disableDialog.confirm"),
								"data-test-id": "mcp-disable-dialog-confirm",
								onClick: onConfirmDisable
							}, null, 8, ["label"])]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"open",
						"header",
						"description"
					]),
					createVNode(McpConnectClientDialog_default),
					createVNode(OAuthClientDetailsModal_default, {
						open: detailsOpen.value,
						"onUpdate:open": _cache[5] || (_cache[5] = ($event) => detailsOpen.value = $event),
						client: detailsClient.value,
						onRevoke: unref(requestRevoke)
					}, null, 8, [
						"open",
						"client",
						"onRevoke"
					]),
					createVNode(RevokeOAuthClientConfirmModal_default, {
						client: unref(revokeClient),
						open: !!unref(revokeClient),
						loading: unref(revoking),
						"revoking-for-other": !!unref(revokeClient) && unref(isRevokingForOther)(unref(revokeClient)),
						onConfirm: unref(confirmRevoke),
						onCancel: unref(cancelRevoke),
						"onUpdate:open": unref(cancelRevoke)
					}, null, 8, [
						"client",
						"open",
						"loading",
						"revoking-for-other",
						"onConfirm",
						"onCancel",
						"onUpdate:open"
					]),
					createVNode(McpAllowedCallbackUrlsDialog_default, {
						open: showCallbackUrlsDialog.value,
						"onUpdate:open": _cache[6] || (_cache[6] = ($event) => showCallbackUrlsDialog.value = $event),
						uris: unref(mcpStore).allowedRedirectUris,
						saving: savingCallbackUrls.value,
						onSave: onSaveCallbackUrls
					}, null, 8, [
						"open",
						"uris",
						"saving"
					])
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = { layout: "_layout_121n7_2" };
var SettingsMCPView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPView_default as default };

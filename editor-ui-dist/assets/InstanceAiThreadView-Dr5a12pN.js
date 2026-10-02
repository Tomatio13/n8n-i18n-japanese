import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Dt as getCurrentScope, E as createElementBlock, Gt as unref, Ht as toRefs, It as ref, Lt as shallowReactive, N as defineComponent, Nt as onScopeDispose, O as createSlots, Pt as reactive, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tt as provide, ut as useId, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n, t as addCredentialTranslation } from "./src-C397uuXA.js";
import { t as useI18n$1 } from "./useI18n-DgnxfwbU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { P as useWindowSize, W as useDebounceFn, g as useElementSize, i as onClickOutside, q as useTimeoutFn, t as StorageSerializers, w as usePreferredReducedMotion, x as useLocalStorage } from "./dist-C4pFh3bs.js";
import { c as useForwardExpose, j as createContext, m as useVModel, n as Primitive, o as useId$1, p as useResizeObserver } from "./VisuallyHidden-RKvjG2uY.js";
import { t as useDirection } from "./useDirection-DnkUaJJr.js";
import { t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { r as CollapsibleRoot_default, t as CollapsibleTrigger_default } from "./CollapsibleTrigger-BW0-2suh.js";
import { r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-BEnlQHTO.js";
import { t as RovingFocusGroup_default } from "./RovingFocusGroup-BJqi5ihv.js";
import { n as RovingFocusItem_default } from "./VisuallyHiddenInput-BBEm5yDp.js";
import { _ as ContextMenuTrigger_default, b as ContextMenuContent_default, u as useAgentCapabilitySummary, v as ContextMenuPortal_default, x as ContextMenuRoot_default, y as ContextMenuItem_default } from "./useWorkflowDocumentRenderData-mAuLfOZ8.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { a as useWorkflowSaveStore, u as findPlaceholderDetails } from "./builder.store-DW7JlSHZ.js";
import { t as N8nCallout_default } from "./N8nCallout-1EEnGTrv.js";
import { t as N8nLoading_default } from "./N8nLoading-DiHHd3tB.js";
import { t as NodeView_default } from "./NodeView-Bd8n1-Tb.js";
import { C as require_unset, O as NodeCredentials_default, S as setParameterValue, T as require_set, t as ParameterInputList_default } from "./ParameterInputList-B3Bm_y5F.js";
import { t as N8nCopyInput_default } from "./N8nCopyInput-CRmPWw4S.js";
import { t as N8nHeading_default } from "./N8nHeading-DvvN7aP6.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-o_9DNe7b.js";
import { a as collectActiveBuilderAgents, c as getDismissedContextKeys, d as useAgentMutationRefresh, f as useAgentEvalsFlag, i as ConfirmationFooter_default, l as handoffContextKey, n as AgentBuildingIndicator_default, o as agentPreviewContextIcon, p as useAgentEvalsStore, r as InstanceAiConversation_default, s as formatAgentPreviewContextLabel, t as AgentBuilderView_default, u as useBuildingArtifactIds } from "./AgentBuilderView-BR-jmETN.js";
import { Hn as N8nSegmentControl_default } from "./expressions-CZ343j_6.js";
import { t as N8nResizeWrapper_default } from "./N8nResizeWrapper-DXTN_QIe.js";
import { A as useExistingWorkflowDocumentStore, Cn as useNDVStore, D as disposeWorkflowDocumentStore, E as deriveHomeProject, Ft as useCredentialsStore, H as useNodeTypesStore, Mn as useSourceControlStore, Pi as useExecutionDataStore, Pt as listenForCredentialChanges, T as createWorkflowDocumentId, Wr as injectStrict, _ as disposeWorkflowExecutionStateStore, bn as disposeNDVStore, ir as getAppNameFromNodeName, j as useWorkflowDocumentStore, ji as createExecutionDataId, jn as useProjectsStore, rr as getAppNameFromCredType, t as useWorkflowsStore, y as useWorkflowExecutionStateStore } from "./workflows.store-BOmh9KrV.js";
import { t as MainHeader_default } from "./MainHeader-Nq_g4rAG.js";
import { t as AnimatedCollapsibleContent_default } from "./AnimatedCollapsibleContent-Bpk0tMyj.js";
import { t as require_get } from "./get-ZpYCHPPk.js";
import { t as Dialog_default } from "./Dialog-DZMllp5P.js";
import { t as isIconOrEmoji } from "./types-_l4mAPsK.js";
import { $n as ResponseError, fr as defineStore, t as useRootStore } from "./useRootStore-D173L1zv.js";
import { ht as require_isEqual } from "./expression-runtime-stub-B9SGt6Wr.js";
import { C as summarizeJsonValue, Ha as v4, Ni as nodeIssuesToString, Qn as require_cloneDeep, S as stepInstructions, Yt as AI_GATEWAY_MANAGED_TAG, Zt as GENERIC_AUTH_CREDENTIAL_TYPES, _ as parseOutputDisplayBlocks, _i as getNodeParametersIssues, b as parseSystemPromptForDisplay, cn as TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE, dr as isTerminalExecutionStatus, g as parseMessageBlocks, gi as getNodeParameters, h as parseInputExtras, m as formatDebugJson, rr as isRecord$1, ta as deepCopy, ui as displayParameter, v as parseOutputExtras, x as parseUsageSummary, y as parseStepSummary, zn as DOMAIN_RESTRICTION_FIELDS } from "./src-DVqjY0nx.js";
import { t as useSettingsStore } from "./settings.store-CvPjXzAs.js";
import { t as useUsersStore } from "./users.store-B-Ck61Zf.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { Da as WorkflowDocumentStoreKey, Gi as LOCAL_STORAGE_INSTANCE_AI_CHAT_PANEL_WIDTH_RATIO, Ki as LOCAL_STORAGE_INSTANCE_AI_SETUP_DISMISSED, Oa as WorkflowIdKey, Sa as ResourceLocatorDropdownTeleportedKey, Wi as LOCAL_STORAGE_INSTANCE_AI_ARTIFACT_PREVIEW_OPEN, ba as EditorEnabledFeaturesKey, kt as AI_GATEWAY_UNSUPPORTED_NODE_TYPES, o as BUILTIN_CREDENTIALS_DOCS_URL, qi as LOCAL_STORAGE_INSTANCE_AI_SETUP_ITEMS, xa as ExpressionLocalResolveContextSymbol, ya as CompactParameterHintsKey } from "./constants-BFgNRWjM.js";
import { n as DEBOUNCE_TIME } from "./durations-DueaJvoh.js";
import { a as TELEMETRY_EVENT } from "./src-v31X3Vyz.js";
import { t as getDebounceTime } from "./useDebounce-DRI3mMad.js";
import { s as getWorkflow, t as useWorkflowsListStore } from "./workflowsList.store-Ci26HGIx.js";
import { n as useUIStore } from "./ui.store-ClQOp9Tb.js";
import { n as useDocumentTitle } from "./useDocumentTitle-BHVkdM92.js";
import { _ as useCanvasStore, t as useNodeHelpers } from "./useNodeHelpers-BGjP3crg.js";
import { t as useExternalHooks } from "./useExternalHooks-UEUEJ2aq.js";
import { t as useDataTableStore } from "./dataTable.store-b1V5bgIH.js";
import { t as useClipboard } from "./useClipboard-Bh6NMnjs.js";
import { V as useAiSimulatedExecutionsStore, d as isChatNode, p as useLogsStore } from "./useCanvasOperations-D4Zbo3SQ.js";
import { n as useNodeCreatorStore, t as canvasEventBus } from "./canvas.eventBus-DnMgMtPk.js";
import { n as hasOAuthTokenData } from "./oauthCallback-FijTDLF_.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-B6Xs4MrD.js";
import { i as useQuickConnect } from "./useAgentScopeProjectId-DIyeAEJi.js";
import { t as ProjectIcon_default } from "./ProjectIcon-CrcpqWUO.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DNF4EelD.js";
import { t as InstanceAiEditorCapabilityKey } from "./useInstanceAiEditorCapability-CVdm8PQN.js";
import { t as useAiGateway } from "./useAiGateway-CA8KKNCg.js";
import { t as useAiGatewayTopUp } from "./useAiGatewayTopUp-CpIF7m_M.js";
import { t as NodeIcon_default } from "./NodeIcon-DwhTfzG9.js";
import { n as useRunWorkflowApi } from "./useRunWorkflow-rXyYaHno.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DoWo3325.js";
import { n as TemplatedAuthSimpleView_default, r as CredentialInputs_default, t as useCredentialForm } from "./useCredentialForm-CPNSg_jm.js";
import { i as deriveServiceName, s as listPlaceholderTitles } from "./templatedAuth.utils-C2sMESlN.js";
import { f as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, m as INSTANCE_AI_SETTINGS_VIEW, o as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, y as INSTANCE_AI_VIEW } from "./constants-DMeWsGm9.js";
import { n as useInstanceAiSetupPanelExperiment, t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-Bx6F9tHk.js";
import { C as isAgentEditingAgent, D as fetchThreadMessages, E as fetchThreadDebugRuns, O as fetchThreads, S as getLatestWorkflowUpdateResult, T as fetchRunDebug, _ as getLatestBuildResult, b as getLatestDeletedDataTableId, c as getAgentPreviewSessionFromThreadMetadata, d as getThreadDisplayTitle, h as getLatestAgentBuilderTarget, k as persistPendingAgent, l as getAgentPreviewViewFromThreadMetadata, m as getExecutionResultsByWorkflow, n as useInstanceAiStore, r as useThread, s as getAgentBuilderTargetFromThreadMetadata, t as provideThread, u as getPendingAgentTargetFromThreadMetadata, v as getLatestBuilderTarget, w as isAgentEditingWorkflow, x as getLatestWorkflowSetupResult, y as getLatestDataTableResult } from "./instanceAi.store-DDp9JlLC.js";
import { n as buildInstanceAiArtifactCredentialQuestion, r as buildInstanceAiCredentialHandoffContext, t as buildInstanceAiAgentPreviewHandoffContext } from "./useInstanceAiHandoff-B-WXpVCp.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-D-U6D1Fl.js";
import { t as useAgentReturnContextStore } from "./agentReturnContext.store-CZQt-5gG.js";
import { n as getNodeCredentialTypes, r as getNodeParametersIssues$1 } from "./setupPanel.utils-CB6OxczQ.js";
import { t as useCredentialTestInBackground } from "./useCredentialTestInBackground-BkhjoWz_.js";
import { t as useOpenWorkflowInAssistantStore } from "./openWorkflowInAssistant.store-DGtMLtYh.js";
import { t as useSidebarLayout } from "./useSidebarLayout-DpnuPUG3.js";
import { n as LogsPanel_default } from "./useExecutionDebugging-BwR1w4_L.js";
import { t as useWorkflowInitialization } from "./useWorkflowInitialization-DLDZ2R64.js";
import { o as InstanceAiViewHeader_default } from "./WorkflowBuilderUnavailableNotice-I-G0jT2V.js";
import { t as DataTableTable_default } from "./DataTableTable-CTmc72Py.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tabs/TabsRoot.js
var [injectTabsRootContext, provideTabsRootContext] = createContext("TabsRoot");
var TabsRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TabsRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		orientation: {
			type: String,
			required: false,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: false
		},
		activationMode: {
			type: String,
			required: false,
			default: "automatic"
		},
		modelValue: {
			type: null,
			required: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { orientation, unmountOnHide, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		useForwardExpose();
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const tabsList = ref();
		provideTabsRootContext({
			modelValue,
			changeModelValue: (value) => {
				modelValue.value = value;
			},
			orientation,
			dir,
			unmountOnHide,
			activationMode: props.activationMode,
			baseId: useId$1(void 0, "reka-tabs"),
			tabsList
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				dir: unref(dir),
				"data-orientation": unref(orientation),
				"as-child": _ctx.asChild,
				as: _ctx.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
				_: 3
			}, 8, [
				"dir",
				"data-orientation",
				"as-child",
				"as"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tabs/utils.js
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tabs/TabsIndicator.js
var TabsIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "TabsIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const context = injectTabsRootContext();
		useForwardExpose();
		const activeTab = ref();
		const indicatorStyle = ref({
			size: null,
			position: null
		});
		watch(() => [context.modelValue.value, context?.dir.value], async () => {
			await nextTick();
			updateIndicatorStyle();
		}, { immediate: true });
		useResizeObserver([context.tabsList, activeTab], updateIndicatorStyle);
		function updateIndicatorStyle() {
			activeTab.value = context.tabsList.value?.querySelector("[role=\"tab\"][data-state=\"active\"]");
			if (!activeTab.value) return;
			if (context.orientation.value === "horizontal") indicatorStyle.value = {
				size: activeTab.value.offsetWidth,
				position: activeTab.value.offsetLeft
			};
			else indicatorStyle.value = {
				size: activeTab.value.offsetHeight,
				position: activeTab.value.offsetTop
			};
		}
		return (_ctx, _cache) => {
			return typeof indicatorStyle.value.size === "number" ? (openBlock(), createBlock(unref(Primitive), mergeProps({ key: 0 }, props, { style: {
				"--reka-tabs-indicator-size": `${indicatorStyle.value.size}px`,
				"--reka-tabs-indicator-position": `${indicatorStyle.value.position}px`
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["style"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tabs/TabsList.js
var TabsList_default = /* @__PURE__ */ defineComponent({
	__name: "TabsList",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { loop } = toRefs(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const context = injectTabsRootContext();
		context.tabsList = currentElement;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusGroup_default), {
				"as-child": "",
				orientation: unref(context).orientation.value,
				dir: unref(context).dir.value,
				loop: unref(loop)
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "tablist",
					"as-child": _ctx.asChild,
					as: _ctx.as,
					"aria-orientation": unref(context).orientation.value
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as-child",
					"as",
					"aria-orientation"
				])]),
				_: 3
			}, 8, [
				"orientation",
				"dir",
				"loop"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tabs/TabsTrigger.js
var TabsTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "TabsTrigger",
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectTabsRootContext();
		const triggerId = computed(() => makeTriggerId(rootContext.baseId, props.value));
		const contentId = computed(() => makeContentId(rootContext.baseId, props.value));
		const isSelected = computed(() => props.value === rootContext.modelValue.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusItem_default), {
				"as-child": "",
				focusable: !_ctx.disabled,
				active: isSelected.value
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					id: triggerId.value,
					ref: unref(forwardRef),
					role: "tab",
					type: _ctx.as === "button" ? "button" : void 0,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-selected": isSelected.value ? "true" : "false",
					"aria-controls": contentId.value,
					"data-state": isSelected.value ? "active" : "inactive",
					disabled: _ctx.disabled,
					"data-disabled": _ctx.disabled ? "" : void 0,
					"data-orientation": unref(rootContext).orientation.value,
					onMousedown: _cache[0] || (_cache[0] = withModifiers((event) => {
						if (!_ctx.disabled && event.ctrlKey === false) unref(rootContext).changeModelValue(_ctx.value);
						else event.preventDefault();
					}, ["left"])),
					onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => unref(rootContext).changeModelValue(_ctx.value), ["enter", "space"])),
					onFocus: _cache[2] || (_cache[2] = () => {
						const isAutomaticActivation = unref(rootContext).activationMode !== "manual";
						if (!isSelected.value && !_ctx.disabled && isAutomaticActivation) unref(rootContext).changeModelValue(_ctx.value);
					})
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"id",
					"type",
					"as",
					"as-child",
					"aria-selected",
					"aria-controls",
					"data-state",
					"disabled",
					"data-disabled",
					"data-orientation"
				])]),
				_: 3
			}, 8, ["focusable", "active"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSetupPanel/SetupPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["aria-label"];
var _hoisted_2$4 = ["inert", "aria-hidden"];
var _hoisted_3$2 = [
	"id",
	"inert",
	"aria-hidden"
];
var _hoisted_4$1 = ["aria-labelledby"];
var _hoisted_5$1 = ["id"];
var SetupPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupPanel",
	props: {
		items: {},
		activeItemId: {},
		status: {},
		executeDisabled: { type: Boolean }
	},
	emits: [
		"update:activeItemId",
		"detailClosed",
		"execute",
		"update:overlapHeight"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n$1();
		const activeItem = computed(() => props.status === "executing" ? void 0 : props.items.find((item) => item.id === props.activeItemId && !item.disabled));
		const panel = useTemplateRef("panel");
		const overlay = useTemplateRef("overlay");
		const base = useTemplateRef("base");
		const { height: baseHeight } = useElementSize(base);
		const { height: overlayHeight } = useElementSize(overlay);
		watch([
			baseHeight,
			overlayHeight,
			activeItem
		], () => {
			if (activeItem.value && overlayHeight.value > 0) emit("update:overlapHeight", Math.max(0, overlayHeight.value - baseHeight.value));
		});
		onScopeDispose(() => emit("update:overlapHeight", 0));
		function onOverlayLeft() {
			if (activeItem.value) return;
			emit("update:overlapHeight", 0);
			emit("detailClosed");
		}
		function deactivateOverlay(element) {
			element.setAttribute("inert", "");
			element.setAttribute("aria-hidden", "true");
		}
		function activateOverlay(element) {
			element.removeAttribute("inert");
			element.removeAttribute("aria-hidden");
		}
		const titleId = useId();
		const expanded = ref(false);
		const showTerminal = computed(() => props.status && props.status !== "incomplete");
		const showChecklist = computed(() => Boolean(activeItem.value) || !showTerminal.value || expanded.value);
		const checklistId = useId();
		watch(() => props.status, (status) => {
			if (status !== "complete" && status !== "executing") return;
			if (!activeItem.value || status === "executing") expanded.value = false;
		}, { immediate: true });
		watch([activeItem, () => props.activeItemId], ([item, id], [previousItem]) => {
			if (id && !item) emit("update:activeItemId", void 0);
			if (previousItem && !props.items.length) onOverlayLeft();
		}, { immediate: true });
		watch(() => activeItem.value?.id, async (id, previousId) => {
			await nextTick();
			if (id) overlay.value?.querySelector("button")?.focus({ preventScroll: true });
			else if (previousId) {
				if (!showChecklist.value) {
					panel.value?.querySelector("[data-test-id=\"setup-panel-review\"]")?.focus({ preventScroll: true });
					return;
				}
				const buttons = Array.from(panel.value?.querySelectorAll("button[data-setup-item-id]:not(:disabled)") ?? []);
				(buttons.find((button) => button.dataset.setupItemId === previousId) ?? buttons[0] ?? panel.value?.querySelector("button:not(:disabled)"))?.focus({ preventScroll: true });
			}
		});
		return (_ctx, _cache) => {
			return __props.items.length ? (openBlock(), createElementBlock("section", {
				key: 0,
				ref_key: "panel",
				ref: panel,
				class: normalizeClass(_ctx.$style.panel),
				"aria-label": unref(t)("setupPanel.label")
			}, [createBaseVNode("div", {
				ref_key: "base",
				ref: base,
				class: normalizeClass([_ctx.$style.base, { [_ctx.$style.hidden]: activeItem.value }])
			}, [showTerminal.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.terminal),
				inert: Boolean(activeItem.value && showChecklist.value),
				"aria-hidden": activeItem.value && showChecklist.value ? true : void 0,
				"data-test-id": "setup-panel-terminal"
			}, [__props.status !== "complete" ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.status),
				role: "status"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: "small",
				class: normalizeClass(_ctx.$style.spinner)
			}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(t)(__props.status === "executing" ? "setupPanel.executing" : "setupPanel.validating")), 1)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				class: normalizeClass(_ctx.$style.review),
				"data-test-id": "setup-panel-review",
				"aria-expanded": expanded.value,
				"aria-controls": unref(checklistId),
				onClick: _cache[0] || (_cache[0] = ($event) => {
					expanded.value = !expanded.value;
					emit("update:activeItemId", void 0);
				})
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("setupPanel.setupComplete")) + " ", 1), createVNode(unref(N8nIcon_default), {
					icon: expanded.value ? "chevron-down" : "chevron-right",
					size: "small"
				}, null, 8, ["icon"])]),
				_: 1
			}, 8, [
				"class",
				"aria-expanded",
				"aria-controls"
			]), createVNode(unref(N8nButton_default), {
				size: "small",
				disabled: __props.executeDisabled,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("execute"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("setupPanel.execute")), 1)]),
				_: 1
			}, 8, ["disabled"])], 64))], 10, _hoisted_2$4)) : createCommentVNode("", true), createVNode(Transition, {
				"enter-active-class": _ctx.$style.enterActive,
				"leave-active-class": _ctx.$style.leaveActive,
				"enter-from-class": _ctx.$style.enterFrom,
				"leave-to-class": _ctx.$style.leaveTo
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.checklist) }, [createBaseVNode("div", { class: normalizeClass({ [_ctx.$style.listSpacing]: showTerminal.value }) }, [createBaseVNode("ul", {
					id: unref(checklistId),
					class: normalizeClass(_ctx.$style.rows),
					inert: Boolean(activeItem.value) || !showChecklist.value,
					"aria-hidden": activeItem.value || !showChecklist.value ? true : void 0
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
					return openBlock(), createElementBlock("li", { key: item.id }, [(openBlock(), createBlock(resolveDynamicComponent(item.hasAction ? "div" : "button"), {
						role: item.hasAction ? "group" : void 0,
						"aria-label": item.hasAction ? item.title : void 0,
						type: item.hasAction ? void 0 : "button",
						class: normalizeClass([_ctx.$style.row, { [_ctx.$style.actionRow]: item.hasAction }]),
						disabled: item.hasAction ? void 0 : item.disabled,
						"data-test-id": "setup-panel-row",
						"data-setup-item-id": item.id,
						onClick: ($event) => !item.hasAction && emit("update:activeItemId", item.id)
					}, {
						default: withCtx(() => [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.icon) }, [item.completed ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 0,
								icon: "status-completed",
								size: "large",
								color: "success"
							})) : renderSlot(_ctx.$slots, "icon", {
								key: 1,
								item
							})], 2),
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(item.title), 3),
							item.hasAction ? renderSlot(_ctx.$slots, "action", {
								key: 0,
								item
							}) : !item.completed && item.subtitle ? (openBlock(), createElementBlock("span", {
								key: 1,
								class: normalizeClass(_ctx.$style.subtitle)
							}, toDisplayString(item.subtitle), 3)) : createCommentVNode("", true),
							item.completed ? (openBlock(), createElementBlock("span", {
								key: 2,
								class: normalizeClass(_ctx.$style.complete)
							}, toDisplayString(unref(t)("setupPanel.complete")), 3)) : createCommentVNode("", true),
							!item.hasAction ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 3,
								icon: "chevron-right",
								size: "small",
								class: normalizeClass(_ctx.$style.chevron)
							}, null, 8, ["class"])) : createCommentVNode("", true)
						]),
						_: 2
					}, 1032, [
						"role",
						"aria-label",
						"type",
						"class",
						"disabled",
						"data-setup-item-id",
						"onClick"
					]))]);
				}), 128))], 10, _hoisted_3$2)], 2)], 2), [[vShow, showChecklist.value]])]),
				_: 3
			}, 8, [
				"enter-active-class",
				"leave-active-class",
				"enter-from-class",
				"leave-to-class"
			])], 2), createVNode(Transition, {
				"enter-active-class": _ctx.$style.enterActive,
				"leave-active-class": _ctx.$style.leaveActive,
				"enter-from-class": _ctx.$style.enterFrom,
				"leave-to-class": _ctx.$style.leaveTo,
				onBeforeEnter: activateOverlay,
				onBeforeLeave: deactivateOverlay,
				onLeaveCancelled: activateOverlay,
				onAfterLeave: onOverlayLeft
			}, {
				default: withCtx(() => [activeItem.value && showChecklist.value ? (openBlock(), createElementBlock("div", {
					key: activeItem.value.id,
					ref_key: "overlay",
					ref: overlay,
					class: normalizeClass(_ctx.$style.overlay),
					role: "dialog",
					"aria-labelledby": unref(titleId),
					"data-test-id": "setup-panel-overlay",
					onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => emit("update:activeItemId", void 0), ["stop"]), ["esc"]))
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.overlayContent) }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"icon-only": "",
						"aria-label": unref(t)("setupPanel.back"),
						"data-test-id": "setup-panel-back",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("update:activeItemId", void 0))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-left",
							size: "small"
						})]),
						_: 1
					}, 8, ["aria-label"]),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.icon) }, [activeItem.value.completed ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "status-completed",
						size: "large",
						color: "success"
					})) : renderSlot(_ctx.$slots, "icon", {
						key: 1,
						item: activeItem.value
					})], 2),
					createBaseVNode("span", {
						id: unref(titleId),
						class: normalizeClass(_ctx.$style.title)
					}, toDisplayString(activeItem.value.title), 11, _hoisted_5$1)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.detail) }, [renderSlot(_ctx.$slots, "detail", { item: activeItem.value })], 2)], 2)], 42, _hoisted_4$1)) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"enter-active-class",
				"leave-active-class",
				"enter-from-class",
				"leave-to-class"
			])], 10, _hoisted_1$7)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSetupPanel/SetupPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$2 = "_panel_1gm33_266";
var base = "_base_1gm33_275";
var overlay = "_overlay_1gm33_276";
var checklist = "_checklist_1gm33_283";
var popoverIn$1 = "_popoverIn_1gm33_1";
var enterActive = "_enterActive_1gm33_297";
var leaveActive = "_leaveActive_1gm33_298";
var hidden = "_hidden_1gm33_310";
var enterFrom = "_enterFrom_1gm33_316";
var leaveTo = "_leaveTo_1gm33_317";
var listSpacing = "_listSpacing_1gm33_322";
var rows = "_rows_1gm33_326";
var terminal = "_terminal_1gm33_328";
var status = "_status_1gm33_344";
var review = "_review_1gm33_351";
var spinner = "_spinner_1gm33_358";
var spin$1 = "_spin_1gm33_358";
var overlayContent = "_overlayContent_1gm33_377";
var header$5 = "_header_1gm33_383";
var row = "_row_1gm33_326";
var actionRow = "_actionRow_1gm33_423";
var title$1 = "_title_1gm33_430";
var subtitle = "_subtitle_1gm33_441";
var icon$1 = "_icon_1gm33_449";
var complete = "_complete_1gm33_454";
var chevron = "_chevron_1gm33_458";
var detail$2 = "_detail_1gm33_463";
var shimmer$1 = "_shimmer_1gm33_1";
var opacityPulse$1 = "_opacityPulse_1gm33_1";
var fadeIn$1 = "_fadeIn_1gm33_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1gm33_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1gm33_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1gm33_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1gm33_1";
var blurSwapIn$1 = "_blurSwapIn_1gm33_1";
var blurSwapOut$1 = "_blurSwapOut_1gm33_1";
var pulseGlow$1 = "_pulseGlow_1gm33_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1gm33_1";
var fade$1 = "_fade_1gm33_1";
var fadeInUp$1 = "_fadeInUp_1gm33_1";
var fadeInDown$1 = "_fadeInDown_1gm33_1";
var fadeInLeft$1 = "_fadeInLeft_1gm33_1";
var fadeInRight$1 = "_fadeInRight_1gm33_1";
var fadeOut$1 = "_fadeOut_1gm33_1";
var fadeOutDown$1 = "_fadeOutDown_1gm33_1";
var fadeOutUp$1 = "_fadeOutUp_1gm33_1";
var fadeOutLeft$1 = "_fadeOutLeft_1gm33_1";
var fadeOutRight$1 = "_fadeOutRight_1gm33_1";
var ping$1 = "_ping_1gm33_1";
var blinkBackground$1 = "_blinkBackground_1gm33_1";
var typingBlink$1 = "_typingBlink_1gm33_1";
var SetupPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$2,
	base,
	overlay,
	checklist,
	popoverIn: popoverIn$1,
	enterActive,
	leaveActive,
	hidden,
	enterFrom,
	leaveTo,
	listSpacing,
	rows,
	terminal,
	status,
	review,
	spinner,
	spin: spin$1,
	overlayContent,
	header: header$5,
	row,
	actionRow,
	title: title$1,
	subtitle,
	icon: icon$1,
	complete,
	chevron,
	detail: detail$2,
	shimmer: shimmer$1,
	"skeleton-pulse": "_skeleton-pulse_1gm33_1",
	opacityPulse: opacityPulse$1,
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
	fadeInUp: fadeInUp$1,
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
var SetupPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nSetupConnection/SetupConnection.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["title"];
var SetupConnection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupConnection",
	props: {
		connected: { type: Boolean },
		valueLabel: {},
		value: {},
		actionLabel: {},
		actionVariant: {},
		actions: {},
		actionDisabled: { type: Boolean },
		loading: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["action", "select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.connection) }, [__props.connected ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.field)
			}, [
				__props.valueLabel ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.label)
				}, toDisplayString(__props.valueLabel), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.saved) }, [
					createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						size: "small",
						class: normalizeClass(_ctx.$style.success)
					}, null, 8, ["class"]),
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.value),
						title: __props.value
					}, toDisplayString(__props.value || unref(t)("setupPanel.connected")), 11, _hoisted_1$6),
					__props.actions.length ? (openBlock(), createBlock(DropdownMenu_default, {
						key: 0,
						items: __props.actions,
						disabled: __props.disabled || __props.loading,
						modal: false,
						placement: "bottom-end",
						onSelect: _cache[0] || (_cache[0] = ($event) => emit("select", $event))
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: __props.disabled || __props.loading,
							"aria-label": unref(t)("setupPanel.changeConnection")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "pencil",
								size: "small"
							})]),
							_: 1
						}, 8, ["disabled", "aria-label"])]),
						_: 1
					}, 8, ["items", "disabled"])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.success),
					role: "status"
				}, toDisplayString(unref(t)("setupPanel.credentialSelected")), 3)
			], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				renderSlot(_ctx.$slots, "default"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [_ctx.$slots["action-leading"] ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actionLeading)
				}, [renderSlot(_ctx.$slots, "action-leading")], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.actions.length ? (openBlock(), createBlock(DropdownMenu_default, {
					key: 0,
					items: __props.actions,
					disabled: __props.disabled || __props.loading,
					modal: false,
					placement: "bottom-end",
					onSelect: _cache[1] || (_cache[1] = ($event) => emit("select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						variant: "ghost",
						"icon-only": "",
						disabled: __props.disabled || __props.loading,
						"aria-label": unref(t)("setupPanel.moreOptions")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "ellipsis",
							size: "small"
						})]),
						_: 1
					}, 8, ["disabled", "aria-label"])]),
					_: 1
				}, 8, ["items", "disabled"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					size: "small",
					variant: __props.actionVariant,
					disabled: __props.disabled || __props.actionDisabled || __props.loading,
					loading: __props.loading,
					onClick: _cache[2] || (_cache[2] = ($event) => emit("action"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.actionLabel), 1)]),
					_: 1
				}, 8, [
					"variant",
					"disabled",
					"loading"
				])], 2)], 2),
				renderSlot(_ctx.$slots, "footer")
			], 64))], 2);
		};
	}
});
var SetupConnection_vue_vue_type_style_index_0_lang_module_default = {
	connection: "_connection_1u3on_1",
	field: "_field_1u3on_9",
	label: "_label_1u3on_15",
	saved: "_saved_1u3on_19",
	value: "_value_1u3on_30",
	actions: "_actions_1u3on_39",
	footer: "_footer_1u3on_45",
	actionLeading: "_actionLeading_1u3on_52",
	success: "_success_1u3on_58"
};
var SetupConnection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupConnection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupConnection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useIsAgentWorking.ts
/**
* Whether the agent is busy anywhere in this thread — the lock signal shared by
* every artifact preview, so user edits can't race agent mutations.
*
* Thread-wide rather than per-artifact: keying off tool calls that name a
* resource id left long stretches unlocked. Hydration counts as busy, since an
* in-flight run isn't known until thread status resolves after a reload.
*
* `isAwaitingConfirmation` is deliberately unused — it can linger on
* confirmations left unresolved by a finished run. A live confirmation keeps
* `activeRunId` set, so `isStreaming` already covers that case.
*
* Pass `runtime` from the component that *provides* the thread — it can't
* inject what it provides, and forking this logic there would leave two copies
* to keep in sync. Everything below it just calls this with no argument.
*/
function useIsAgentWorking(runtime) {
	const thread = runtime ?? useThread();
	return computed(() => thread.isHydratingThread || thread.isStreaming || thread.isSendingMessage || collectActiveBuilderAgents(thread.messages).length > 0);
}
//#endregion
//#region src/features/ai/instanceAi/useCanvasPreview.ts
var ARTIFACT_ICON_MAP = {
	workflow: "workflow",
	"data-table": "table",
	agent: "robot"
};
function useCanvasPreview({ thread, initialAgentId, previewOpenState, onPreviewOpenChange }) {
	const activeTabId = ref();
	const isPreviewOpen = ref(previewOpenState?.() ?? false);
	const linkedAgentTarget = ref();
	function setPreviewOpen(open, persist = true) {
		if (isPreviewOpen.value === open) return;
		isPreviewOpen.value = open;
		if (persist) onPreviewOpenChange?.(open);
	}
	watch(() => previewOpenState?.(), (open) => {
		if (typeof open === "boolean") setPreviewOpen(open, false);
	}, { immediate: true });
	const buildingArtifactIds = useBuildingArtifactIds(thread);
	const isAgentWorking = useIsAgentWorking(thread);
	const userTabId = ref();
	watch(isAgentWorking, (working) => {
		if (!working) userTabId.value = void 0;
	});
	const allArtifactTabs = computed(() => {
		const result = [];
		const linkedAgent = linkedAgentTarget.value;
		for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table" || entry.type === "agent") result.push({
			id: entry.id,
			type: entry.type,
			name: entry.name,
			icon: ARTIFACT_ICON_MAP[entry.type] ?? "file",
			projectId: entry.projectId ?? (entry.type === "agent" && linkedAgent?.agentId === entry.id ? linkedAgent.projectId : void 0),
			pending: entry.pending,
			building: buildingArtifactIds.value.has(entry.id)
		});
		if (linkedAgent && !result.some((tab) => tab.id === linkedAgent.agentId)) {
			const indexedAgent = [...thread.resourceNameIndex.values()].find((entry) => entry.type === "agent" && entry.id === linkedAgent.agentId);
			result.push({
				id: linkedAgent.agentId,
				type: "agent",
				name: indexedAgent?.name ?? linkedAgent.agentId,
				icon: ARTIFACT_ICON_MAP.agent,
				projectId: indexedAgent?.projectId ?? linkedAgent.projectId,
				building: buildingArtifactIds.value.has(linkedAgent.agentId)
			});
		}
		return result;
	});
	const activeWorkflowId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "workflow" ? tab.id : null;
	});
	const activeDataTableId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.id : null;
	});
	const activeDataTableProjectId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.projectId ?? null : null;
	});
	const activeAgentId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" ? tab.id : null;
	});
	const activeAgentProjectId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" ? tab.projectId ?? null : null;
	});
	const activeAgentPending = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" && tab.pending === true;
	});
	const executionResultsByWorkflow = computed(() => {
		const results = /* @__PURE__ */ new Map();
		for (const message of thread.messages) {
			if (!message.agentTree) continue;
			for (const [workflowId, result] of getExecutionResultsByWorkflow(message.agentTree)) results.set(workflowId, result);
		}
		return results;
	});
	const activeWorkflowExecutionResult = computed(() => {
		const workflowId = activeWorkflowId.value;
		return workflowId ? executionResultsByWorkflow.value.get(workflowId) : void 0;
	});
	const dataTableRefreshKey = ref(0);
	const isPreviewVisible = computed(() => isPreviewOpen.value && activeTabId.value !== void 0);
	const firstAttachedArtifactId = computed(() => {
		for (const message of thread.messages) for (const attachment of message.attachments ?? []) if (attachment.type === "workflow" || attachment.type === "agent") return attachment.id;
	});
	const pendingAgentTabId = computed(() => allArtifactTabs.value.find((tab) => tab.pending)?.id);
	const initialAgentTabId = computed(() => {
		const agentId = initialAgentId?.();
		if (!agentId) return void 0;
		return allArtifactTabs.value.find((tab) => tab.type === "agent" && tab.id === agentId)?.id;
	});
	const initialArtifactId = computed(() => firstAttachedArtifactId.value ?? pendingAgentTabId.value ?? initialAgentTabId.value ?? thread.pendingWorkflowAttachment?.id);
	watch(initialArtifactId, (id) => {
		if (!id || activeTabId.value !== void 0) return;
		activeTabId.value = id;
		if (previewOpenState?.() !== false) setPreviewOpen(true, false);
	}, { immediate: true });
	watch([
		() => previewOpenState?.(),
		allArtifactTabs,
		() => thread.isHydratingThread,
		initialArtifactId
	], ([open, tabs, isHydrating, initialId]) => {
		if (isHydrating) return;
		if (open === true && activeTabId.value === void 0 && tabs[0]) activeTabId.value = tabs.some((tab) => tab.id === initialId) ? initialId : tabs[0].id;
	}, { immediate: true });
	function selectTab(tabId) {
		activeTabId.value = tabId;
		userTabId.value = isAgentWorking.value ? tabId : void 0;
		setPreviewOpen(true);
	}
	function closePreview() {
		userTabId.value = void 0;
		setPreviewOpen(false);
	}
	function showAgentArtifact(tabId) {
		if (!(userTabId.value !== void 0 && userTabId.value === activeTabId.value)) activeTabId.value = tabId;
		setPreviewOpen(true);
	}
	/**
	* Open or switch the preview to a workflow.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openWorkflowPreview(workflowId) {
		if (activeTabId.value === workflowId && isPreviewOpen.value) return false;
		selectTab(workflowId);
		return true;
	}
	/**
	* Open or switch the preview to a data table.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openDataTablePreview(dataTableId, _projectId) {
		if (activeTabId.value === dataTableId && isPreviewOpen.value) return false;
		selectTab(dataTableId);
		return true;
	}
	/**
	* Open or switch the preview to an agent.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openAgentPreview(agentId, projectId) {
		linkedAgentTarget.value = {
			agentId,
			projectId
		};
		if (activeTabId.value === agentId && isPreviewOpen.value) return false;
		selectTab(agentId);
		return true;
	}
	watch(allArtifactTabs, (tabs) => {
		if (activeTabId.value === void 0 || tabs.length === 0) return;
		if (!tabs.some((t) => t.id === activeTabId.value)) activeTabId.value = tabs[0].id;
	});
	const workflowRefreshKey = ref(0);
	const latestBuildResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestBuildResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestBuildResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestBuildResult.value.workflowId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	}, { flush: "sync" });
	const latestBuilderTarget = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const target = getLatestBuilderTarget(msg.agentTree);
				if (target) return target;
			}
		}
		return null;
	});
	watch(() => latestBuilderTarget.value?.agentId, (agentId) => {
		if (!agentId || !latestBuilderTarget.value) return;
		if (thread.isHydratingThread) return;
		showAgentArtifact(latestBuilderTarget.value.workflowId);
	}, { flush: "sync" });
	const latestAgentBuilderTarget = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const target = getLatestAgentBuilderTarget(msg.agentTree);
				if (target) return target;
			}
		}
		return null;
	});
	watch(() => latestAgentBuilderTarget.value?.agentId, (agentId) => {
		if (!agentId || !latestAgentBuilderTarget.value) return;
		if (thread.isHydratingThread) return;
		showAgentArtifact(latestAgentBuilderTarget.value.targetAgentId);
	}, { flush: "sync" });
	const latestSetupResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowSetupResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestSetupResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestSetupResult.value) return;
		const targetId = latestSetupResult.value.workflowId;
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	});
	const latestUpdateResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowUpdateResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestUpdateResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestUpdateResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestUpdateResult.value.workflowId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	}, { flush: "sync" });
	const latestDataTableResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestDataTableResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestDataTableResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestDataTableResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestDataTableResult.value.dataTableId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) dataTableRefreshKey.value++;
	}, { flush: "sync" });
	watch(computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const id = getLatestDeletedDataTableId(msg.agentTree);
				if (id) return id;
			}
		}
		return null;
	}), (deletedId) => {
		if (deletedId && deletedId === activeTabId.value) {
			const remaining = allArtifactTabs.value.filter((t) => t.id !== deletedId);
			activeTabId.value = remaining.length > 0 ? remaining[0].id : void 0;
			if (!activeTabId.value) setPreviewOpen(false);
		}
	});
	useAgentMutationRefresh(thread);
	return {
		activeTabId,
		allArtifactTabs,
		activeWorkflowId,
		activeDataTableId,
		activeDataTableProjectId,
		activeAgentId,
		activeAgentProjectId,
		activeAgentPending,
		activeWorkflowExecutionResult,
		dataTableRefreshKey,
		isPreviewVisible,
		workflowRefreshKey,
		selectTab,
		closePreview,
		openWorkflowPreview,
		openDataTablePreview,
		openAgentPreview
	};
}
//#endregion
//#region src/features/ai/instanceAi/useTransitionGate.ts
function useTransitionGate(options = {}) {
	const isEnabled = ref(false);
	let renderToken = 0;
	function enableAfterStableRender() {
		const currentRenderToken = ++renderToken;
		nextTick(() => {
			nextTick(() => {
				if (currentRenderToken === renderToken && !(options.isBlocked?.() ?? false)) isEnabled.value = true;
			});
		});
	}
	function suppress() {
		renderToken += 1;
		isEnabled.value = false;
	}
	function suppressUntilStableRender() {
		isEnabled.value = false;
		enableAfterStableRender();
	}
	return {
		isEnabled,
		enableAfterStableRender,
		suppress,
		suppressUntilStableRender
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiDebug.store.ts
var useInstanceAiDebugStore = defineStore("instanceAiDebug", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const threads = ref([]);
	const selectedThreadId = ref(null);
	const threadMessages = ref([]);
	const isLoadingThreads = ref(false);
	const isLoadingMessages = ref(false);
	const selectedRunId = ref(null);
	const runDebug = ref(null);
	const threadDebugRuns = ref([]);
	const isLoadingRunDebug = ref(false);
	const isLoadingThreadDebugRuns = ref(false);
	async function loadThreads() {
		isLoadingThreads.value = true;
		try {
			threads.value = (await fetchThreads(rootStore.restApiContext)).threads;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingThreads.value = false;
		}
	}
	async function selectThread(threadId) {
		selectedThreadId.value = threadId;
		await loadMessages();
	}
	async function loadMessages(page) {
		if (!selectedThreadId.value) return;
		isLoadingMessages.value = true;
		try {
			threadMessages.value = (await fetchThreadMessages(rootStore.restApiContext, selectedThreadId.value, 50, page)).messages;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingMessages.value = false;
		}
	}
	async function loadThreadDebugRuns(threadId) {
		isLoadingThreadDebugRuns.value = true;
		try {
			threadDebugRuns.value = (await fetchThreadDebugRuns(rootStore.restApiContext, threadId)).runs;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingThreadDebugRuns.value = false;
		}
	}
	async function loadRunDebug(runId) {
		selectedRunId.value = runId;
		isLoadingRunDebug.value = true;
		try {
			runDebug.value = await fetchRunDebug(rootStore.restApiContext, runId);
		} catch {
			runDebug.value = null;
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingRunDebug.value = false;
		}
	}
	async function refreshRunDebug(threadId, preferredRunId) {
		await loadThreadDebugRuns(threadId);
		const selectedRunIdForThread = threadDebugRuns.value.some((run) => run.runId === selectedRunId.value) ? selectedRunId.value : null;
		const runId = preferredRunId ?? selectedRunIdForThread ?? threadDebugRuns.value.at(-1)?.runId ?? null;
		if (runId) await loadRunDebug(runId);
		else {
			selectedRunId.value = null;
			runDebug.value = null;
		}
	}
	function reset() {
		threads.value = [];
		selectedThreadId.value = null;
		threadMessages.value = [];
		isLoadingThreads.value = false;
		isLoadingMessages.value = false;
		selectedRunId.value = null;
		runDebug.value = null;
		threadDebugRuns.value = [];
		isLoadingRunDebug.value = false;
		isLoadingThreadDebugRuns.value = false;
	}
	return {
		threads,
		selectedThreadId,
		threadMessages,
		isLoadingThreads,
		isLoadingMessages,
		selectedRunId,
		runDebug,
		threadDebugRuns,
		isLoadingRunDebug,
		isLoadingThreadDebugRuns,
		loadThreads,
		selectThread,
		loadMessages,
		loadRunDebug,
		refreshRunDebug,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugJsonPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["open"];
var InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugJsonPanel",
	props: {
		value: {},
		label: {},
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const preview = computed(() => summarizeJsonValue(props.value));
		const formatted = computed(() => formatDebugJson(props.value));
		const summaryLabel = computed(() => props.label ?? i18n.baseText("instanceAi.debug.runDebug.json"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("details", {
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(summaryLabel.value), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(preview.value), 3)], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.json) }, toDisplayString(formatted.value), 3)], 10, _hoisted_1$5);
		};
	}
});
var InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_nwc9j_2",
	summary: "_summary_nwc9j_9",
	summaryLabel: "_summaryLabel_nwc9j_32",
	preview: "_preview_nwc9j_39",
	json: "_json_nwc9j_51"
};
var InstanceAiDebugJsonPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugWorkflowCodeSnapshot.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["open"];
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugWorkflowCodeSnapshot",
	props: {
		snapshot: {},
		variant: { default: "card" },
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const summaryPreview = computed(() => {
			const parts = [
				formatStatus(props.snapshot.success),
				props.snapshot.source,
				formatCharCount(props.snapshot.code.length)
			];
			if (props.snapshot.workflowId) parts.push(props.snapshot.workflowId);
			return parts.join(" · ");
		});
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function formatStatus(success) {
			return success ? i18n.baseText("instanceAi.debug.runDebug.success") : i18n.baseText("instanceAi.debug.runDebug.failed");
		}
		return (_ctx, _cache) => {
			return __props.variant === "inline" ? (openBlock(), createElementBlock("details", {
				key: 0,
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(summaryPreview.value), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2)], 10, _hoisted_1$4)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.cardRoot)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2));
		};
	}
});
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_4ei3e_2",
	summary: "_summary_4ei3e_9",
	summaryLabel: "_summaryLabel_4ei3e_32",
	preview: "_preview_4ei3e_39",
	body: "_body_4ei3e_51",
	cardRoot: "_cardRoot_4ei3e_60",
	metaBlock: "_metaBlock_4ei3e_66",
	metaLabel: "_metaLabel_4ei3e_73",
	statusChip: "_statusChip_4ei3e_79",
	statusSuccess: "_statusSuccess_4ei3e_86",
	statusFailed: "_statusFailed_4ei3e_91",
	code: "_code_4ei3e_96"
};
var InstanceAiDebugWorkflowCodeSnapshot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/utils/workflow-code-match.ts
var WORKFLOW_CODE_TOOL_NAMES = new Set(["build-workflow"]);
function isWorkflowCodeToolName(name) {
	return name !== void 0 && WORKFLOW_CODE_TOOL_NAMES.has(name);
}
function extractBuildWorkflowToolCallIds(output) {
	if (!output || !Array.isArray(output.toolResults)) return [];
	const ids = [];
	for (const toolResult of output.toolResults) {
		if (!isRecord$1(toolResult)) continue;
		if (!isWorkflowCodeToolName(typeof toolResult.toolName === "string" && toolResult.toolName || typeof toolResult.name === "string" && toolResult.name || void 0)) continue;
		if (typeof toolResult.toolCallId === "string") ids.push(toolResult.toolCallId);
	}
	return ids;
}
function mapWorkflowSnapshotsByToolCallId(steps, workflowCode) {
	const map = /* @__PURE__ */ new Map();
	for (const snapshot of workflowCode) if (snapshot.toolCallId) map.set(snapshot.toolCallId, snapshot);
	const orderedToolCallIds = steps.slice().sort((left, right) => left.stepNumber - right.stepNumber).flatMap((step) => extractBuildWorkflowToolCallIds(step.output));
	let snapshotIndex = 0;
	for (const toolCallId of orderedToolCallIds) {
		if (map.has(toolCallId)) continue;
		while (snapshotIndex < workflowCode.length && workflowCode[snapshotIndex]?.toolCallId && map.has(workflowCode[snapshotIndex]?.toolCallId ?? "")) snapshotIndex++;
		const snapshot = workflowCode[snapshotIndex];
		if (!snapshot) break;
		map.set(toolCallId, snapshot);
		snapshotIndex++;
	}
	return map;
}
function getToolCallIdFromMetadata(metadata) {
	if (!isRecord$1(metadata) || typeof metadata.toolCallId !== "string") return;
	return metadata.toolCallId;
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugMessageBody.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugMessageBody",
	props: {
		segments: {},
		workflowSnapshotsByToolCallId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function getWorkflowSnapshot(segment) {
			if (!isWorkflowCodeToolName(segment.name) || !props.workflowSnapshotsByToolCallId) return;
			const toolCallId = getToolCallIdFromMetadata(segment.metadata);
			if (!toolCallId) return;
			return props.workflowSnapshotsByToolCallId.get(toolCallId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.segments, (segment, index) => {
				return openBlock(), createElementBlock(Fragment, { key: `${segment.type}-${index}` }, [segment.type === "text" ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.text)
				}, toDisplayString(segment.text), 3)) : segment.type === "reasoning" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.reasoning")), 3)], 2), createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(segment.text), 3)], 2)) : segment.type === "tool-call" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolCall")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameLabel) }, toDisplayString(segment.name), 3)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolInput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : segment.type === "tool-result" ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolResult")), 3), segment.name ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.nameLabel)
					}, toDisplayString(segment.name), 3)) : createCommentVNode("", true)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolOutput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					getWorkflowSnapshot(segment) ? (openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
						key: 1,
						variant: "inline",
						snapshot: getWorkflowSnapshot(segment)
					}, null, 8, ["snapshot"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 2,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 4,
					value: segment.payload,
					label: segment.label ?? unref(i18n).baseText("instanceAi.debug.runDebug.json")
				}, null, 8, ["value", "label"]))], 64);
			}), 128))], 2);
		};
	}
});
var InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_ga0gj_1",
	text: "_text_ga0gj_7",
	inlineBlock: "_inlineBlock_ga0gj_16",
	inlineHeader: "_inlineHeader_ga0gj_22",
	kindLabel: "_kindLabel_ga0gj_28",
	nameLabel: "_nameLabel_ga0gj_33"
};
var InstanceAiDebugMessageBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepDetail.vue?vue&type=script&setup=true&lang.ts
var InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepDetail",
	props: {
		input: {},
		output: {},
		runSteps: {},
		workflowCode: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const i18n = useI18n();
		const outputSectionRef = ref(null);
		const parsedSystemPrompt = computed(() => parseSystemPromptForDisplay(stepInstructions(props.input)));
		const systemBlocks = computed(() => parsedSystemPrompt.value.systemBlocks);
		const systemObservations = computed(() => parsedSystemPrompt.value.observations);
		const messageBlocks = computed(() => parseMessageBlocks(props.input?.messages));
		const inputExtras = computed(() => parseInputExtras(props.input));
		const outputDisplayBlocks = computed(() => parseOutputDisplayBlocks(props.output));
		const usageSummary = computed(() => parseUsageSummary(props.output?.usage));
		const outputExtras = computed(() => parseOutputExtras(props.output));
		const workflowSnapshotsByToolCallId = computed(() => mapWorkflowSnapshotsByToolCallId(props.runSteps ?? [], props.workflowCode ?? []));
		const finishReason = computed(() => typeof props.output?.finishReason === "string" ? props.output.finishReason : void 0);
		const systemCharCount = computed(() => systemBlocks.value.reduce((total, block) => total + block.content.length, 0));
		const hasInputContent = computed(() => systemBlocks.value.length > 0 || Boolean(systemObservations.value) || messageBlocks.value.length > 0 || Boolean(inputExtras.value));
		const hasOutputContent = computed(() => outputDisplayBlocks.value.length > 0 || Boolean(outputExtras.value) || Boolean(usageSummary.value));
		const showSystemDetails = computed(() => systemBlocks.value.length > 0);
		function getCardClass(role) {
			const normalized = role.toLowerCase();
			if (normalized.includes("system")) return "cardSystem";
			if (normalized === "reasoning") return "cardMuted";
			if (normalized === "user") return "cardUser";
			if (normalized === "assistant") return "cardAssistant";
			if (normalized === "tool") return "cardTool";
			return "cardMuted";
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function scrollToOutput(container) {
			if (!outputSectionRef.value) {
				container.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			const containerTop = container.getBoundingClientRect().top;
			const sectionTop = outputSectionRef.value.getBoundingClientRect().top;
			container.scrollTo({
				top: container.scrollTop + (sectionTop - containerTop),
				behavior: "smooth"
			});
		}
		__expose({ scrollToOutput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				__props.input ? (openBlock(), createElementBlock("section", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.input")), 1)]),
					_: 1
				}, 8, ["class"]), hasInputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					showSystemDetails.value ? (openBlock(), createElementBlock("details", {
						key: 0,
						class: normalizeClass([
							_ctx.$style.card,
							_ctx.$style.cardSystem,
							_ctx.$style.expandableCard
						])
					}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "system", 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(systemCharCount.value)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(systemBlocks.value, (block, index) => {
						return openBlock(), createElementBlock(Fragment, { key: `system-${index}` }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 64);
					}), 128))], 2)], 2)) : createCommentVNode("", true),
					systemObservations.value ? (openBlock(), createElementBlock("article", {
						key: 1,
						class: normalizeClass([_ctx.$style.card, _ctx.$style.cardObservations])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "observations", 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(systemObservations.value), 3)], 2)], 2)) : createCommentVNode("", true),
					messageBlocks.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.stackLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.messages")), 1)]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(messageBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `message-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128))], 64)) : createCommentVNode("", true),
					inputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 3,
						value: inputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.inputExtras")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.output ? (openBlock(), createElementBlock("section", {
					key: 1,
					ref_key: "outputSectionRef",
					ref: outputSectionRef,
					"data-test-id": "instance-ai-llm-step-output",
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.output")), 1)]),
					_: 1
				}, 8, ["class"]), finishReason.value || usageSummary.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.statsBar)
				}, [finishReason.value ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.statChip)
				}, toDisplayString(finishReason.value), 3)) : createCommentVNode("", true), usageSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(usageSummary.value.label), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), hasOutputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(outputDisplayBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `output-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128)),
					usageSummary.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: usageSummary.value.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.usage")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					outputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: outputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.outputMetadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				!__props.input && !__props.output ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.emptyState)
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_xknaj_2",
	section: "_section_xknaj_8",
	sectionHeader: "_sectionHeader_xknaj_19",
	sectionTitle: "_sectionTitle_xknaj_27",
	statsBar: "_statsBar_xknaj_31",
	statChip: "_statChip_xknaj_38",
	stack: "_stack_xknaj_46",
	stackLabel: "_stackLabel_xknaj_52",
	card: "_card_xknaj_56",
	expandableCard: "_expandableCard_xknaj_63",
	cardHeader: "_cardHeader_xknaj_63",
	headerMeta: "_headerMeta_xknaj_70",
	cardSystem: "_cardSystem_xknaj_80",
	cardObservations: "_cardObservations_xknaj_84",
	cardUser: "_cardUser_xknaj_88",
	cardAssistant: "_cardAssistant_xknaj_92",
	cardTool: "_cardTool_xknaj_96",
	cardMuted: "_cardMuted_xknaj_100",
	cardBody: "_cardBody_xknaj_118",
	roleLabel: "_roleLabel_xknaj_125",
	metaLabel: "_metaLabel_xknaj_132",
	text: "_text_xknaj_137",
	emptyState: "_emptyState_xknaj_146"
};
var InstanceAiLlmStepDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiRunWorkflowCodeSection.vue?vue&type=script&setup=true&lang.ts
var InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiRunWorkflowCodeSection",
	props: {
		snapshots: {},
		showDivider: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass([_ctx.$style.section, __props.showDivider && _ctx.$style.sectionDivider]) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "small",
				bold: "",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.sectionTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.stack) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.snapshots, (snapshot, index) => {
				return openBlock(), createElementBlock("details", {
					key: `${snapshot.capturedAt}-${index}`,
					class: normalizeClass([
						_ctx.$style.card,
						_ctx.$style.cardWorkflow,
						_ctx.$style.expandableCard
					]),
					"data-test-id": "instance-ai-run-workflow-code-snapshot"
				}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(snapshot.source), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(snapshot.code.length)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createVNode(InstanceAiDebugWorkflowCodeSnapshot_default, { snapshot }, null, 8, ["snapshot"])], 2)], 2);
			}), 128))], 2)], 2);
		};
	}
});
var InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_aaqs2_2",
	sectionDivider: "_sectionDivider_aaqs2_8",
	sectionTitle: "_sectionTitle_aaqs2_13",
	stack: "_stack_aaqs2_17",
	card: "_card_aaqs2_23",
	expandableCard: "_expandableCard_aaqs2_30",
	cardHeader: "_cardHeader_aaqs2_30",
	headerMeta: "_headerMeta_aaqs2_37",
	cardWorkflow: "_cardWorkflow_aaqs2_47",
	cardBody: "_cardBody_aaqs2_68",
	roleLabel: "_roleLabel_aaqs2_72",
	metaLabel: "_metaLabel_aaqs2_79"
};
var InstanceAiRunWorkflowCodeSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepsModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["onClick"];
var _hoisted_2$3 = ["onClick"];
var InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepsModal",
	props: { open: { type: Boolean } },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const debugStore = useInstanceAiDebugStore();
		const currentThread = useThread();
		const selectedStepNumber = ref(null);
		const detailPaneRef = ref(null);
		const stepDetailRef = ref(null);
		const steps = computed(() => debugStore.runDebug?.steps ?? []);
		const runWorkflowCode = computed(() => debugStore.runDebug?.workflowCode ?? []);
		const selectedRunId = computed(() => debugStore.selectedRunId);
		const selectedStep = computed(() => {
			if (selectedStepNumber.value === null) return void 0;
			return steps.value.find((step) => step.stepNumber === selectedStepNumber.value);
		});
		const stepSummaries = computed(() => steps.value.map((step) => ({
			stepNumber: step.stepNumber,
			summary: parseStepSummary(step.input, step.output)
		})));
		watch(() => props.open, (isOpen) => {
			if (!isOpen) {
				selectedStepNumber.value = null;
				return;
			}
			selectedStepNumber.value = steps.value[0]?.stepNumber ?? null;
		});
		watch(() => steps.value, (nextSteps) => {
			if (!props.open || nextSteps.length === 0) {
				selectedStepNumber.value = null;
				return;
			}
			if (selectedStepNumber.value === null || !nextSteps.some((step) => step.stepNumber === selectedStepNumber.value)) selectedStepNumber.value = nextSteps[0]?.stepNumber ?? null;
		});
		function handleOpenChange(open) {
			emit("update:open", open);
		}
		function selectStep(stepNumber) {
			selectedStepNumber.value = stepNumber;
		}
		async function scrollDetailToOutput() {
			await nextTick();
			if (!detailPaneRef.value || !stepDetailRef.value) return;
			stepDetailRef.value.scrollToOutput(detailPaneRef.value);
		}
		watch([selectedStep, () => debugStore.isLoadingRunDebug], ([step, isLoading]) => {
			if (!props.open || !step || isLoading) return;
			scrollDetailToOutput();
		});
		async function selectRun(runId) {
			if (runId === selectedRunId.value) return;
			await debugStore.loadRunDebug(runId);
			selectedStepNumber.value = debugStore.runDebug?.steps[0]?.stepNumber ?? null;
		}
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatStepCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.stepCount", { interpolate: { count: String(count) } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "cover",
				"data-test-id": "instance-ai-llm-steps-modal",
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shell) }, [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitleRow) }, [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.stepsModalTitle")), 1)]),
							_: 1
						}), steps.value.length > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.stepCount)
						}, toDisplayString(formatStepCount(steps.value.length)), 3)) : createCommentVNode("", true)], 2), selectedRunId.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.runId)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(selectedRunId.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["class"]),
					unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.layout)
					}, [
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.runsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.runs")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(unref(debugStore).threadDebugRuns.length), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run, index) => {
							return openBlock(), createElementBlock("button", {
								key: run.runId,
								type: "button",
								class: normalizeClass([_ctx.$style.runButton, selectedRunId.value === run.runId && _ctx.$style.runButtonSelected]),
								"data-test-id": "instance-ai-llm-steps-modal-run",
								onClick: ($event) => selectRun(run.runId)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.runNumber) }, toDisplayString(index + 1), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRowRight) }, [run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.currentBadge)
								}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style.runIdShort) }, toDisplayString(run.runId.slice(0, 12)), 3)], 2)], 2),
								run.label ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.runLabel)
								}, toDisplayString(run.label), 3)) : createCommentVNode("", true),
								createBaseVNode("span", { class: normalizeClass(_ctx.$style.runMeta) }, toDisplayString(formatStepCount(run.stepCount)) + " · " + toDisplayString(formatTimestamp(run.startedAt)), 3)
							], 10, _hoisted_1$3);
						}), 128))], 2)], 2),
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.stepsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(steps.value.length), 3)], 2), steps.value.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.sidebarEmpty)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noSteps")), 3)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.stepList)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(stepSummaries.value, ({ stepNumber, summary }) => {
							return openBlock(), createElementBlock("button", {
								key: stepNumber,
								type: "button",
								class: normalizeClass([_ctx.$style.stepButton, selectedStepNumber.value === stepNumber && _ctx.$style.stepButtonSelected]),
								onClick: ($event) => selectStep(stepNumber)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.stepTopRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.stepNumber) }, toDisplayString(stepNumber + 1), 3), summary.finishReason ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.finishReason)
								}, toDisplayString(summary.finishReason), 3)) : createCommentVNode("", true)], 2),
								summary.toolNames.length > 0 ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.stepTools)
								}, toDisplayString(summary.toolNames.join(", ")), 3)) : summary.messagePreview ? (openBlock(), createElementBlock("span", {
									key: 1,
									class: normalizeClass(_ctx.$style.stepPreview)
								}, toDisplayString(summary.messagePreview), 3)) : createCommentVNode("", true),
								summary.usageLabel ? (openBlock(), createElementBlock("span", {
									key: 2,
									class: normalizeClass(_ctx.$style.stepUsage)
								}, toDisplayString(summary.usageLabel), 3)) : createCommentVNode("", true)
							], 10, _hoisted_2$3);
						}), 128))], 2))], 2),
						createBaseVNode("div", {
							ref_key: "detailPaneRef",
							ref: detailPaneRef,
							class: normalizeClass(_ctx.$style.detail)
						}, [unref(debugStore).isLoadingRunDebug ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loadingState)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "spinner",
							color: "primary",
							spin: "",
							size: "small"
						})], 2)) : selectedStep.value || runWorkflowCode.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.detailContent)
						}, [selectedStep.value ? (openBlock(), createBlock(InstanceAiLlmStepDetail_default, {
							key: 0,
							ref_key: "stepDetailRef",
							ref: stepDetailRef,
							input: selectedStep.value.input,
							output: selectedStep.value.output,
							"run-steps": steps.value,
							"workflow-code": runWorkflowCode.value
						}, null, 8, [
							"input",
							"output",
							"run-steps",
							"workflow-code"
						])) : createCommentVNode("", true), runWorkflowCode.value.length > 0 ? (openBlock(), createBlock(InstanceAiRunWorkflowCodeSection_default, {
							key: 1,
							snapshots: runWorkflowCode.value,
							"show-divider": Boolean(selectedStep.value)
						}, null, 8, ["snapshots", "show-divider"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.emptyState)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3))], 2)
					], 2)),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						onClick: _cache[0] || (_cache[0] = ($event) => handleOpenChange(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
						_: 1
					})], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default = {
	shell: "_shell_duc5r_1",
	header: "_header_duc5r_11",
	headerMain: "_headerMain_duc5r_17",
	headerTitleRow: "_headerTitleRow_duc5r_21",
	runId: "_runId_duc5r_28",
	stepCount: "_stepCount_duc5r_34",
	layout: "_layout_duc5r_40",
	sidebar: "_sidebar_duc5r_50",
	sidebarHeader: "_sidebarHeader_duc5r_60",
	sidebarCount: "_sidebarCount_duc5r_72",
	runList: "_runList_duc5r_77",
	stepList: "_stepList_duc5r_78",
	sidebarEmpty: "_sidebarEmpty_duc5r_87",
	runButton: "_runButton_duc5r_93",
	stepButton: "_stepButton_duc5r_94",
	runButtonSelected: "_runButtonSelected_duc5r_114",
	stepButtonSelected: "_stepButtonSelected_duc5r_115",
	runTopRow: "_runTopRow_duc5r_125",
	stepTopRow: "_stepTopRow_duc5r_126",
	runTopRowRight: "_runTopRowRight_duc5r_134",
	runNumber: "_runNumber_duc5r_142",
	stepNumber: "_stepNumber_duc5r_143",
	currentBadge: "_currentBadge_duc5r_161",
	runIdShort: "_runIdShort_duc5r_169",
	runLabel: "_runLabel_duc5r_178",
	runMeta: "_runMeta_duc5r_188",
	finishReason: "_finishReason_duc5r_189",
	stepTools: "_stepTools_duc5r_190",
	stepPreview: "_stepPreview_duc5r_191",
	stepUsage: "_stepUsage_duc5r_192",
	detail: "_detail_duc5r_204",
	detailContent: "_detailContent_duc5r_215",
	loadingState: "_loadingState_duc5r_221",
	emptyState: "_emptyState_duc5r_229",
	footer: "_footer_duc5r_236"
};
var InstanceAiLlmStepsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-state"];
var _hoisted_2$2 = ["onClick"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["onClick"];
var InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const currentThread = useThread();
		const debugStore = useInstanceAiDebugStore();
		const isRunDebugEnabled = computed(() => settingsStore.moduleSettings["instance-ai"]?.runDebugEnabled === true);
		const activeTab = ref("events");
		const expandedIndex = ref(null);
		const showLlmStepsModal = ref(false);
		const eventListRef = useTemplateRef("eventList");
		const events = computed(() => currentThread.debugEvents);
		const expandedMessageIndex = ref(null);
		function toggleEvent(index) {
			expandedIndex.value = expandedIndex.value === index ? null : index;
		}
		function toggleMessage(index) {
			expandedMessageIndex.value = expandedMessageIndex.value === index ? null : index;
		}
		async function handleSelectDebugRun(runId) {
			if (activeTab.value === "llmSteps") {
				await debugStore.loadRunDebug(runId);
				if (debugStore.runDebug?.runId === runId) showLlmStepsModal.value = true;
				return;
			}
			debugStore.loadRunDebug(runId);
		}
		function getTypeBadgeClass(type) {
			if (type.includes("error")) return "error";
			if (type.includes("finish")) return "finish";
			if (type.includes("start") || type.includes("spawn")) return "start";
			if (type.includes("tool")) return "tool";
			if (type.includes("text") || type.includes("reasoning")) return "text";
			if (type.includes("confirmation")) return "confirm";
			return "default";
		}
		function getRoleBadgeClass(role) {
			if (role === "user") return "start";
			if (role === "assistant") return "tool";
			if (role === "system") return "confirm";
			return "default";
		}
		function formatTime(iso) {
			try {
				return new Date(iso).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return iso;
			}
		}
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatDateTime(iso) {
			try {
				const d = new Date(iso);
				return `${d.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric"
				})} ${d.toLocaleTimeString("en-US", {
					hour12: false,
					hour: "2-digit",
					minute: "2-digit"
				})}`;
			} catch {
				return iso;
			}
		}
		async function refreshRunDebugData() {
			await debugStore.refreshRunDebug(currentThread.id, currentThread.activeRunId);
		}
		function contentPreview(content) {
			if (typeof content === "string") return content.length > 100 ? content.slice(0, 100) + "..." : content;
			const str = JSON.stringify(content);
			return str.length > 100 ? str.slice(0, 100) + "..." : str;
		}
		async function handleCopyTrace() {
			const trace = currentThread.copyFullTrace();
			await navigator.clipboard.writeText(trace);
		}
		watch(() => events.value.length, () => {
			nextTick(() => {
				if (eventListRef.value) eventListRef.value.scrollTop = eventListRef.value.scrollHeight;
			});
		});
		watch(activeTab, (tab) => {
			if (tab === "threads" && debugStore.threads.length === 0) debugStore.loadThreads();
			if (isRunDebugEnabled.value && (tab === "llmSteps" || tab === "workflowCode")) refreshRunDebugData();
		});
		watch(isRunDebugEnabled, (enabled) => {
			if (!enabled && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) {
				activeTab.value = "events";
				showLlmStepsModal.value = false;
			}
		});
		watch(() => currentThread.isStreaming, (isStreaming, wasStreaming) => {
			if (isRunDebugEnabled.value && wasStreaming && !isStreaming && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) refreshRunDebugData();
		});
		function handleSelectThread(threadId) {
			expandedMessageIndex.value = null;
			debugStore.selectThread(threadId);
		}
		function handleRefreshThreads() {
			debugStore.loadThreads();
		}
		const toolCallTimings = computed(() => {
			const timings = [];
			for (const msg of currentThread.messages) {
				if (!msg.agentTree) continue;
				const nodes = [msg.agentTree, ...msg.agentTree.children];
				for (const node of nodes) for (const tc of node.toolCalls) if (tc.startedAt && tc.completedAt) {
					const ms = new Date(tc.completedAt).getTime() - new Date(tc.startedAt).getTime();
					timings.push({
						name: tc.toolName,
						duration: ms < 1e3 ? `${ms}ms` : `${(ms / 1e3).toFixed(1)}s`,
						toolCallId: tc.toolCallId
					});
				}
			}
			return timings;
		});
		onMounted(() => {
			if (activeTab.value === "threads") debugStore.loadThreads();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: "bug",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.debug.title")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [activeTab.value === "events" ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton),
					onClick: handleCopyTrace
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.copyTrace")), 3)) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabBar) }, [
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "events" && _ctx.$style.tabActive]),
						onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "events")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.events")), 3),
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "threads" && _ctx.$style.tabActive]),
						onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "threads")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.threads")), 3),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "llmSteps" && _ctx.$style.tabActive]),
						onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "llmSteps")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")), 3)) : createCommentVNode("", true),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 1,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "workflowCode" && _ctx.$style.tabActive]),
						onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "workflowCode")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3)) : createCommentVNode("", true)
				], 2),
				activeTab.value === "events" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusBar) }, [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.statusDot),
							"data-state": unref(currentThread).sseState
						}, null, 10, _hoisted_1$2),
						createBaseVNode("span", null, "SSE: " + toDisplayString(unref(currentThread).sseState), 1),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventCount) }, toDisplayString(events.value.length) + " events", 3)
					], 2),
					toolCallTimings.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.timingSection)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.timingTitle) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.timing")), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(toolCallTimings.value, (timing) => {
						return openBlock(), createElementBlock("div", {
							key: timing.toolCallId,
							class: normalizeClass(_ctx.$style.timingRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingName) }, toDisplayString(timing.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingDuration) }, toDisplayString(timing.duration), 3)], 2);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref: "eventList",
						class: normalizeClass(_ctx.$style.eventList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (entry, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: normalizeClass(_ctx.$style.eventRow),
							onClick: ($event) => toggleEvent(index)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.eventHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(entry.timestamp)), 3), createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getTypeBadgeClass(entry.event.type)]]) }, toDisplayString(entry.event.type), 3)], 2), expandedIndex.value === index ? (openBlock(), createElementBlock("pre", {
							key: 0,
							class: normalizeClass(_ctx.$style.eventPayload)
						}, toDisplayString(unref(formatDebugJson)(entry.event)), 3)) : createCommentVNode("", true)], 10, _hoisted_2$2);
					}), 128))], 2)
				], 64)) : createCommentVNode("", true),
				activeTab.value === "threads" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.title")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: handleRefreshThreads
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreads ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threads.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noThreads")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threads, (thread) => {
						return openBlock(), createElementBlock("div", {
							key: thread.id,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedThreadId === thread.id && _ctx.$style.threadRowSelected]),
							onClick: ($event) => handleSelectThread(thread.id)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title || thread.id.slice(0, 8)), 3), thread.id === unref(currentThread).id ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatDateTime(thread.updatedAt)), 3)], 10, _hoisted_3$1);
					}), 128))], 2)),
					unref(debugStore).selectedThreadId ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.messages")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailContent) }, [unref(debugStore).isLoadingMessages ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadMessages.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noMessages")), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(debugStore).threadMessages, (msg, mIdx) => {
						return openBlock(), createElementBlock("div", {
							key: msg.id,
							class: normalizeClass(_ctx.$style.messageRow),
							onClick: ($event) => toggleMessage(mIdx)
						}, [
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messageHeader) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getRoleBadgeClass(msg.role)]]) }, toDisplayString(msg.role), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(msg.createdAt)), 3)], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messagePreview) }, toDisplayString(contentPreview(msg.content)), 3),
							expandedMessageIndex.value === mIdx ? (openBlock(), createElementBlock("pre", {
								key: 0,
								class: normalizeClass(_ctx.$style.eventPayload)
							}, toDisplayString(unref(formatDebugJson)(msg.content)), 3)) : createCommentVNode("", true)
						], 10, _hoisted_4);
					}), 128))], 2)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.selectRun")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: refreshRunDebugData
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreadDebugRuns ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run) => {
						return openBlock(), createElementBlock("div", {
							key: run.runId,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedRunId === run.runId && _ctx.$style.threadRowSelected]),
							"data-test-id": "instance-ai-debug-run-row",
							onClick: ($event) => handleSelectDebugRun(run.runId)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.runMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(run.runId.slice(0, 12)), 3), run.label ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.runLabel)
						}, toDisplayString(run.label), 3)) : createCommentVNode("", true)], 2), run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatTimestamp(run.startedAt)), 3)], 10, _hoisted_5);
					}), 128))], 2)),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "llmSteps" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : createCommentVNode("", true),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).runDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [unref(debugStore).runDebug.workflowCode.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noWorkflowCode")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style.threadDetailContent, _ctx.$style.workflowSnapshotList])
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).runDebug.workflowCode, (snapshot, wIdx) => {
						return openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
							key: `${snapshot.capturedAt}-${wIdx}`,
							snapshot,
							variant: "inline"
						}, null, 8, ["snapshot"]);
					}), 128))], 2))], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value ? (openBlock(), createBlock(InstanceAiLlmStepsModal_default, {
					key: 3,
					open: showLlmStepsModal.value,
					"onUpdate:open": _cache[5] || (_cache[5] = ($event) => showLlmStepsModal.value = $event)
				}, null, 8, ["open"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_1k2oi_1";
var header$3 = "_header_1k2oi_14";
var headerTitle$1 = "_headerTitle_1k2oi_22";
var headerActions = "_headerActions_1k2oi_30";
var copyButton = "_copyButton_1k2oi_36";
var tabBar = "_tabBar_1k2oi_50";
var tab$1 = "_tab_1k2oi_50";
var tabActive = "_tabActive_1k2oi_72";
var statusBar = "_statusBar_1k2oi_78";
var statusDot = "_statusDot_1k2oi_88";
var eventCount = "_eventCount_1k2oi_101";
var timingSection = "_timingSection_1k2oi_105";
var timingTitle = "_timingTitle_1k2oi_110";
var timingRow = "_timingRow_1k2oi_119";
var timingName = "_timingName_1k2oi_126";
var timingDuration = "_timingDuration_1k2oi_131";
var eventList = "_eventList_1k2oi_136";
var eventRow = "_eventRow_1k2oi_142";
var eventHeader = "_eventHeader_1k2oi_151";
var eventTime = "_eventTime_1k2oi_157";
var eventType = "_eventType_1k2oi_162";
var error = "_error_1k2oi_169";
var finish = "_finish_1k2oi_174";
var start = "_start_1k2oi_179";
var tool = "_tool_1k2oi_184";
var text = "_text_1k2oi_189";
var confirm = "_confirm_1k2oi_194";
var eventPayload = "_eventPayload_1k2oi_204";
var threadListHeader = "_threadListHeader_1k2oi_220";
var sectionLabel = "_sectionLabel_1k2oi_228";
var loadingState = "_loadingState_1k2oi_236";
var emptyState$1 = "_emptyState_1k2oi_244";
var threadList = "_threadList_1k2oi_220";
var threadRow = "_threadRow_1k2oi_257";
var threadRowSelected = "_threadRowSelected_1k2oi_266";
var threadRowMain = "_threadRowMain_1k2oi_273";
var runMeta = "_runMeta_1k2oi_280";
var runLabel = "_runLabel_1k2oi_288";
var threadTitle = "_threadTitle_1k2oi_296";
var currentBadge = "_currentBadge_1k2oi_305";
var threadTime = "_threadTime_1k2oi_313";
var threadDetailHeader = "_threadDetailHeader_1k2oi_318";
var threadDetailContent = "_threadDetailContent_1k2oi_323";
var workflowSnapshotList = "_workflowSnapshotList_1k2oi_329";
var messageRow = "_messageRow_1k2oi_336";
var messageHeader = "_messageHeader_1k2oi_345";
var messagePreview = "_messagePreview_1k2oi_352";
var InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$3,
	headerTitle: headerTitle$1,
	headerActions,
	copyButton,
	tabBar,
	tab: tab$1,
	tabActive,
	statusBar,
	statusDot,
	eventCount,
	timingSection,
	timingTitle,
	timingRow,
	timingName,
	timingDuration,
	eventList,
	eventRow,
	eventHeader,
	eventTime,
	eventType,
	error,
	finish,
	start,
	tool,
	text,
	confirm,
	"default": "_default_1k2oi_199",
	eventPayload,
	threadListHeader,
	sectionLabel,
	loadingState,
	emptyState: emptyState$1,
	threadList,
	threadRow,
	threadRowSelected,
	threadRowMain,
	runMeta,
	runLabel,
	threadTitle,
	currentBadge,
	threadTime,
	threadDetailHeader,
	threadDetailContent,
	workflowSnapshotList,
	messageRow,
	messageHeader,
	messagePreview
};
var InstanceAiDebugPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = [
	"href",
	"title",
	"aria-label",
	"onClick"
];
var _hoisted_2$1 = ["title"];
var InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiArtifactsPanel",
	setup(__props) {
		const projectsStore = useProjectsStore();
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const thread = useThread();
		const project = computed(() => {
			if (!thread.projectId && thread.hydrationStatus !== "ready") return void 0;
			const match = projectsStore.myProjects.find((p) => p.id === thread.projectId);
			if (!match) return {
				name: i18n.baseText("instanceAi.artifactsPanel.unknownProject"),
				icon: {
					type: "icon",
					value: "circle-help"
				}
			};
			const isPersonal = match.type === "personal";
			const icon = isIconOrEmoji(match.icon) ? match.icon : {
				type: "icon",
				value: "layers"
			};
			return {
				name: isPersonal ? i18n.baseText("instanceAi.artifactsPanel.personalSpace") : match.name,
				icon: isPersonal ? {
					type: "icon",
					value: "user"
				} : icon
			};
		});
		const openPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		const openAgentPreview = inject("openAgentPreview", void 0);
		const pendingComposerContext = inject("pendingComposerContext", void 0);
		const dismissPendingComposerContext = inject("dismissPendingComposerContext", void 0);
		function handleArtifactClick(artifact, e) {
			if (artifact.type === "agent" && artifact.pending) e.preventDefault();
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			if (artifact.type === "workflow" && artifact.id) {
				if (!openPreview) return;
				e.preventDefault();
				openPreview(artifact.id);
			} else if (artifact.type === "data-table" && artifact.id) {
				if (!artifact.projectId || !openDataTablePreview) return;
				e.preventDefault();
				openDataTablePreview(artifact.id, artifact.projectId);
			} else if (artifact.type === "agent" && artifact.id) {
				if (!artifact.projectId || !openAgentPreview) return;
				e.preventDefault();
				openAgentPreview(artifact.id, artifact.projectId);
			}
		}
		const tasks = computed(() => thread.currentTasks);
		const visibleTasks = computed(() => tasks.value?.tasks ?? []);
		const hasTasks = computed(() => visibleTasks.value.length > 0);
		const statusIconMap = {
			todo: {
				icon: "circle",
				spin: false,
				className: "todoIcon"
			},
			in_progress: {
				icon: "spinner",
				spin: true,
				className: "inProgressIcon"
			},
			done: {
				icon: "check",
				spin: false,
				className: "doneIcon"
			},
			failed: {
				icon: "circle-x",
				spin: false,
				className: "failedIcon"
			},
			cancelled: {
				icon: "ban",
				spin: false,
				className: "cancelledIcon"
			}
		};
		const buildingArtifactIds = useBuildingArtifactIds();
		const artifacts = computed(() => {
			const result = [];
			for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table" || entry.type === "agent") result.push(entry);
			return result;
		});
		const artifactIconMap = {
			workflow: "workflow",
			"data-table": "table",
			agent: "robot"
		};
		function artifactHref(artifact) {
			if (artifact.type === "workflow") return `/workflow/${artifact.id}`;
			if (artifact.type === "data-table") return artifact.projectId ? `/projects/${artifact.projectId}/datatables/${artifact.id}` : "/data-tables";
			if (artifact.type === "agent") {
				if (artifact.pending) return "#";
				return artifact.projectId ? `/projects/${artifact.projectId}/agents/${artifact.id}` : "/home/agents";
			}
			return "#";
		}
		function openArtifactLabel(name) {
			return i18n.baseText("instanceAi.artifactsPanel.openArtifact", { interpolate: { name } });
		}
		function contextEntryFor(context) {
			const key = handoffContextKey(context);
			if (context.source === "setup-panel-execute") return void 0;
			if (context.source === "agent-preview") return {
				key,
				icon: agentPreviewContextIcon(context.agentIcon),
				name: formatAgentPreviewContextLabel(context, (textKey, options) => i18n.baseText(textKey, options), thread.producedArtifacts.get(context.agentId)?.name),
				subtitle: i18n.baseText("instanceAi.artifactsPanel.context.addedToContext")
			};
			return {
				key,
				icon: "key-round",
				name: context.credential.displayName,
				subtitle: i18n.baseText("instanceAi.artifactsPanel.context.credentialModal")
			};
		}
		const contextEntries = computed(() => {
			const entries = [];
			const seen = /* @__PURE__ */ new Set();
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			const pending = pendingComposerContext?.value;
			const pendingEntry = pending ? contextEntryFor(pending) : void 0;
			if (pendingEntry) {
				seen.add(pendingEntry.key);
				entries.push(pendingEntry);
			}
			for (const message of [...thread.messages].reverse()) {
				if (message.role !== "user" || !message.context) continue;
				const key = handoffContextKey(message.context);
				if (seen.has(key) || dismissedKeys.has(key)) continue;
				const entry = contextEntryFor(message.context);
				if (!entry) continue;
				seen.add(key);
				entries.push(entry);
			}
			return entries;
		});
		async function dismissContext(key) {
			const pending = pendingComposerContext?.value;
			if (pending && handoffContextKey(pending) === key) {
				dismissPendingComposerContext?.(key);
				return;
			}
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			dismissedKeys.add(key);
			await store.updateThreadMetadata(thread.id, { dismissedContextKeys: [...dismissedKeys] });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "instance-ai-artifacts-sidebar"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.group),
				"data-test-id": "instance-ai-artifacts-sidebar-group"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.project")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.artifactList) }, [project.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.artifactRow])
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(ProjectIcon_default, {
					icon: project.value.icon,
					size: "small",
					"border-less": ""
				}, null, 8, ["icon"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(project.value.name), 3)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.artifactRow),
					"data-test-id": "instance-ai-artifacts-project-loading"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.artifactIconWrap, _ctx.$style.iconSkeleton]) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameSkeleton) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2))], 2)], 2),
				contextEntries.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.context.title")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contextList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(contextEntries.value, (entry) => {
					return openBlock(), createElementBlock("div", {
						key: entry.key,
						class: normalizeClass(_ctx.$style.contextRow),
						"data-test-id": "instance-ai-context-row"
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(unref(N8nIcon_default), {
							icon: entry.icon,
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon)
						}, null, 8, ["icon", "class"])], 2),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextText) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextName) }, toDisplayString(entry.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextSubtitle) }, toDisplayString(entry.subtitle), 3)], 2),
						createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.contextDismiss),
							"aria-label": unref(i18n).baseText("instanceAi.artifactsPanel.context.dismiss"),
							title: unref(i18n).baseText("instanceAi.artifactsPanel.context.dismiss"),
							"data-test-id": "instance-ai-context-dismiss",
							onClick: ($event) => dismissContext(entry.key)
						}, null, 8, [
							"class",
							"aria-label",
							"title",
							"onClick"
						])
					], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.title")), 1)]),
					_: 1
				}, 8, ["class"])], 2), artifacts.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.artifactList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(artifacts.value, (artifact) => {
					return openBlock(), createElementBlock("a", {
						key: artifact.id,
						href: artifactHref(artifact),
						class: normalizeClass([_ctx.$style.artifactRow, artifact.archived && _ctx.$style.artifactRowArchived]),
						title: artifact.name,
						"aria-label": openArtifactLabel(artifact.name),
						onClick: ($event) => handleArtifactClick(artifact, $event)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [unref(buildingArtifactIds).has(artifact.id) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							spin: "",
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon),
							"data-test-id": "instance-ai-artifact-building-spinner"
						}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: artifactIconMap[artifact.type] ?? "file",
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon)
						}, null, 8, ["icon", "class"]))], 2),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(artifact.name), 3),
						artifact.archived ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.archivedBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.archived")), 3)) : createCommentVNode("", true)
					], 10, _hoisted_1$1);
				}), 128))], 2)) : unref(thread).hydrationStatus !== "ready" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.artifactList),
					"data-test-id": "instance-ai-artifacts-list-loading"
				}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.artifactRow, _ctx.$style.artifactRowSkeleton]) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.artifactIconWrap, _ctx.$style.artifactIconSkeleton]) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameSkeleton) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.emptyState)
				}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.noArtifacts")), 1)], 2))], 2),
				hasTasks.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.tasks")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleTasks.value, (task) => {
					return openBlock(), createElementBlock("div", {
						key: task.id,
						class: normalizeClass([
							_ctx.$style.task,
							task.status === "done" ? _ctx.$style.doneTask : "",
							task.status === "failed" ? _ctx.$style.failedTask : "",
							task.status === "cancelled" ? _ctx.$style.cancelledTask : ""
						])
					}, [createVNode(unref(N8nIcon_default), {
						icon: statusIconMap[task.status].icon,
						class: normalizeClass(_ctx.$style[statusIconMap[task.status].className]),
						spin: statusIconMap[task.status].spin,
						size: "medium"
					}, null, 8, [
						"icon",
						"class",
						"spin"
					]), createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.taskDescription),
						title: task.description
					}, toDisplayString(task.description), 11, _hoisted_2$1)], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1plbn_1",
	group: "_group_1plbn_11",
	section: "_section_1plbn_19",
	sectionHeader: "_sectionHeader_1plbn_40",
	sectionTitle: "_sectionTitle_1plbn_49",
	artifactList: "_artifactList_1plbn_54",
	contextList: "_contextList_1plbn_59",
	contextRow: "_contextRow_1plbn_64",
	contextText: "_contextText_1plbn_71",
	contextName: "_contextName_1plbn_78",
	contextSubtitle: "_contextSubtitle_1plbn_87",
	contextDismiss: "_contextDismiss_1plbn_96",
	artifactRow: "_artifactRow_1plbn_101",
	artifactIconWrap: "_artifactIconWrap_1plbn_123",
	artifactIcon: "_artifactIcon_1plbn_123",
	artifactName: "_artifactName_1plbn_134",
	iconSkeleton: "_iconSkeleton_1plbn_146",
	nameSkeleton: "_nameSkeleton_1plbn_151",
	artifactRowSkeleton: "_artifactRowSkeleton_1plbn_158",
	artifactIconSkeleton: "_artifactIconSkeleton_1plbn_162",
	artifactRowArchived: "_artifactRowArchived_1plbn_167",
	archivedBadge: "_archivedBadge_1plbn_174",
	emptyState: "_emptyState_1plbn_184",
	taskList: "_taskList_1plbn_195",
	task: "_task_1plbn_195",
	doneTask: "_doneTask_1plbn_210",
	failedTask: "_failedTask_1plbn_215",
	cancelledTask: "_cancelledTask_1plbn_219",
	taskDescription: "_taskDescription_1plbn_223",
	todoIcon: "_todoIcon_1plbn_232",
	inProgressIcon: "_inProgressIcon_1plbn_236",
	doneIcon: "_doneIcon_1plbn_240",
	failedIcon: "_failedIcon_1plbn_247",
	cancelledIcon: "_cancelledIcon_1plbn_251"
};
var InstanceAiArtifactsPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiFixWithAiPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiFixWithAiPanel",
	props: {
		nodeName: {},
		errorMessage: {},
		failedCount: { default: 1 }
	},
	emits: ["fix-with-ai", "dismiss"],
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isErrorDetailsOpen = ref(false);
		const title = computed(() => props.failedCount > 1 ? i18n.baseText("instanceAi.fixWithAi.notice.title.multiple", { interpolate: { count: props.failedCount } }) : i18n.baseText("instanceAi.fixWithAi.notice.title.single", { interpolate: { nodeName: props.nodeName } }));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				role: "alert",
				"data-test-id": "instance-ai-fix-with-ai-panel"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-x",
					size: "medium",
					class: normalizeClass(_ctx.$style.headerIcon)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					bold: "",
					tag: "span",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(CollapsibleRoot_default), {
					open: isErrorDetailsOpen.value,
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isErrorDetailsOpen.value = $event)
				}, {
					default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.toggle),
							"data-test-id": "instance-ai-fix-with-ai-error-toggle"
						}, [createVNode(unref(N8nIcon_default), {
							icon: isErrorDetailsOpen.value ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"]), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.errorDetails")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}), createVNode(unref(AnimatedCollapsibleContent_default), null, {
						default: withCtx(() => [createBaseVNode("pre", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("code", null, toDisplayString(__props.errorMessage), 1)], 2)]),
						_: 1
					})]),
					_: 1
				}, 8, ["open"])], 2),
				createVNode(ConfirmationFooter_default, {
					layout: "row-end",
					bordered: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						"data-test-id": "instance-ai-fix-with-ai-dismiss",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("dismiss"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.notice.dismiss")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						icon: "sparkles",
						"data-test-id": "instance-ai-fix-with-ai-button",
						onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("fix-with-ai"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.button")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2);
		};
	}
});
var InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_oab9l_1",
	header: "_header_oab9l_10",
	headerIcon: "_headerIcon_oab9l_18",
	title: "_title_oab9l_23",
	body: "_body_oab9l_28",
	toggle: "_toggle_oab9l_32",
	codeBlock: "_codeBlock_oab9l_48"
};
var InstanceAiFixWithAiPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/setupPanel/composables/useWorkflowSetupItems.ts
/**
* A legacy credential name must be replaced with a stored credential reference.
*/
function isBoundCredential(assigned) {
	return typeof assigned !== "string" && (Boolean(assigned?.id) || assigned?.__aiGatewayManaged === true);
}
/**
* Derives service-keyed setup items (`InstanceAiSetupItem`) for a workflow.
* Unlike `useWorkflowSetupState` (the canvas setup wizard), it takes an
* explicit workflowId instead of the editor's injected document store, holds
* no UI state, and derives done-ness on demand so out-of-band changes — e.g.
* a credential created from the credentials page — reflect immediately.
*
* Node state comes from the live document store while a canvas host has one
* hydrated, and from the saved workflow (fetched here) otherwise, so the
* derivation also works on a refreshed thread with no canvas mounted. Pass
* `paused` while the agent is editing to defer workflow reads. Credential
* reads continue so connections can start during the build.
*/
function useWorkflowSetupItems(workflowId, options = {}) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const oauth = useCredentialOAuth();
	const oauthConnections = shallowReactive(/* @__PURE__ */ new Map());
	const workflowsListStore = useWorkflowsListStore();
	const workflowsStore = useWorkflowsStore();
	const credentialsLoadedForWorkflow = ref();
	const credentialsAvailable = computed(() => {
		const id = toValue(workflowId);
		return id !== void 0 && credentialsLoadedForWorkflow.value === id && credentialsStore.hasUsableCredentialsForScope({ workflowId: id });
	});
	/**
	* The canvas host's live document store, if any. Resolved fresh so a host
	* dispose+recreate cycle reactively swaps this to the live instance instead
	* of pinning a disposed one. Never instantiates the (heavyweight) store.
	*/
	const documentStore = computed(() => {
		const id = toValue(workflowId);
		return id ? useExistingWorkflowDocumentStore(createWorkflowDocumentId(id)) : void 0;
	});
	/**
	* The saved workflow as fetched by this composable. Deliberately not read
	* back from `workflowsById`: list pages seed that cache with `nodes: []`
	* placeholders, which would read as an empty (but "available") workflow.
	*/
	const fetchedWorkflow = ref();
	const isRefreshingWorkflow = ref(false);
	let workflowFetchVersion = 0;
	onScopeDispose(() => {
		workflowFetchVersion++;
		oauthConnections.clear();
	});
	async function refreshWorkflow({ force = false } = {}) {
		const id = toValue(workflowId);
		if (!id || !force && (toValue(options.paused) || documentStore.value?.hydrated)) return;
		const requestVersion = ++workflowFetchVersion;
		const isCurrentRequest = () => requestVersion === workflowFetchVersion && toValue(workflowId) === id && (force || !toValue(options.paused) && !documentStore.value?.hydrated);
		if (!isCurrentRequest()) return;
		isRefreshingWorkflow.value = true;
		try {
			for (let attempt = 0; attempt < 2 && isCurrentRequest(); attempt++) try {
				const workflow = await workflowsListStore.fetchWorkflow(id);
				if (isCurrentRequest()) fetchedWorkflow.value = workflow;
				return;
			} catch {}
		} finally {
			if (requestVersion === workflowFetchVersion) isRefreshingWorkflow.value = false;
		}
	}
	const workflowProjectId = computed(() => {
		if (documentStore.value?.hydrated) return documentStore.value.homeProject?.id;
		const workflow = fetchedWorkflow.value;
		return workflow?.id === toValue(workflowId) && workflow ? deriveHomeProject(workflow)?.id : void 0;
	});
	watch(() => [
		toValue(workflowId),
		toValue(options.paused) === true,
		documentStore.value?.hydrated === true
	], ([id, paused, hydrated]) => {
		if (!id) return;
		nodeTypesStore.loadNodeTypesIfNotLoaded().catch(() => {});
		refreshUsableSlice();
		if (!paused && !hydrated) refreshWorkflow();
	}, { immediate: true });
	function refreshUsableSlice() {
		const id = toValue(workflowId);
		if (id) credentialsStore.fetchUsableCredentials({ workflowId: id }).then(() => {
			if (toValue(workflowId) === id) credentialsLoadedForWorkflow.value = id;
		}).catch(() => {});
	}
	listenForCredentialChanges({
		store: credentialsStore,
		onCredentialCreated: refreshUsableSlice,
		onCredentialUpdated: refreshUsableSlice,
		onCredentialDeleted: refreshUsableSlice
	});
	workflowsStore.$onAction(({ name, args, after }) => {
		if (name !== "updateWorkflow" || args[0] !== toValue(workflowId)) return;
		after((saved) => {
			if (saved.id !== toValue(workflowId)) return;
			workflowFetchVersion++;
			fetchedWorkflow.value = saved;
			isRefreshingWorkflow.value = false;
		});
	});
	/** Live canvas nodes when a host hydrated a document store, else the fetched save's. */
	const workflowNodes = computed(() => {
		const docStore = documentStore.value;
		const id = toValue(workflowId);
		if (toValue(options.paused) && fetchedWorkflow.value?.id === id) return fetchedWorkflow.value?.nodes;
		if (docStore?.hydrated) return docStore.allNodes;
		return id && fetchedWorkflow.value?.id === id ? fetchedWorkflow.value.nodes : void 0;
	});
	watch(computed(() => {
		return [...new Set((workflowNodes.value ?? []).flatMap((node) => Object.values(node.credentials ?? {}).map((credential) => credential.id)))].flatMap((id) => {
			const credential = getBoundCredential(id);
			return credential && !credential.isResolvable && oauth.isOAuthCredentialType(credential.type) ? [{
				id: credential.id,
				key: JSON.stringify([
					toValue(workflowId),
					credential.type,
					credential.updatedAt,
					[...credential.scopes ?? []].sort()
				])
			}] : [];
		});
	}), async (credentials) => {
		const ids = new Set(credentials.map(({ id }) => id));
		for (const id of oauthConnections.keys()) if (!ids.has(id)) oauthConnections.delete(id);
		await Promise.all(credentials.map(async ({ id, key }) => {
			const cached = oauthConnections.get(id);
			if (cached?.key === key && cached.status !== "error") return;
			const connection = {
				key,
				status: "loading"
			};
			oauthConnections.set(id, connection);
			let status = "error";
			try {
				const loaded = await credentialsStore.getCredentialData({ id });
				const data = loaded?.data;
				if (data && typeof data === "object") status = Boolean(data.grantType && !["authorizationCode", "pkce"].includes(String(data.grantType))) || hasOAuthTokenData(loaded) ? "connected" : "disconnected";
				else status = "unknown";
			} catch {}
			if (oauthConnections.get(id) === connection) oauthConnections.set(id, {
				key,
				status
			});
		}));
	}, { immediate: true });
	/**
	* Node state is available from a hydrated canvas store or the fetched
	* workflow. Node types must be in too: deriving without them drops
	* type-defined credentials and reads parameters as issue-free, so items
	* would falsely show as done.
	*/
	const isWorkflowAvailable = computed(() => nodeTypesStore.allNodeTypes.length > 0 && workflowNodes.value !== void 0);
	const nodesByName = computed(() => {
		const byName = /* @__PURE__ */ new Map();
		for (const node of workflowNodes.value ?? []) byName.set(node.name, node);
		return byName;
	});
	function getPendingParameterNames(node) {
		const names = new Set(Object.keys(getNodeParametersIssues$1(nodeTypesStore, node)));
		for (const [name, value] of Object.entries(node.parameters)) if (findPlaceholderDetails(value).length > 0) names.add(name);
		return names;
	}
	const nodesRequiringSetup = computed(() => {
		return (workflowNodes.value ?? []).filter((node) => !node.disabled).map((node) => ({
			node,
			credentialTypes: getNodeCredentialTypes(nodeTypesStore, node),
			parameterNames: getPendingParameterNames(node)
		})).filter(({ credentialTypes, parameterNames }) => credentialTypes.length > 0 || parameterNames.size > 0);
	});
	/**
	* Parameter rows this composable has seen raise issues, kept so resolving
	* them renders a checked row instead of dropping it (credential rows get
	* this for free — they derive from workflow structure, not issue state).
	* Session-scoped memory, cleared when the target workflow changes.
	*/
	const settledParameterItems = /* @__PURE__ */ new Map();
	watch(() => toValue(workflowId), () => settledParameterItems.clear());
	/**
	* Items keyed like the agent's durable `setup-items` events
	* (`${workflowId}:${kind}:${key}`), so event rows and derived rows
	* reconcile to the same identity. Credential items are per credential
	* type, fanned out to the nodes using it via `nodeBindings` — except
	* generic auth types, where one credential of the type serves many
	* services so nodes can't share a row (or a done state): those are one
	* item per node, with the node name in the id.
	*/
	const derivedCredentialItems = computed(() => {
		const id = toValue(workflowId);
		if (!id || !isWorkflowAvailable.value) return [];
		const items = [];
		const bindingsByCredentialType = /* @__PURE__ */ new Map();
		for (const { node, credentialTypes } of nodesRequiringSetup.value) for (const credentialType of credentialTypes) {
			const bindings = bindingsByCredentialType.get(credentialType) ?? [];
			bindings.push({ nodeName: node.name });
			bindingsByCredentialType.set(credentialType, bindings);
		}
		for (const [credentialType, nodeBindings] of bindingsByCredentialType) {
			const appDisplayName = credentialsStore.getCredentialTypeByName(credentialType)?.displayName;
			if (GENERIC_AUTH_CREDENTIAL_TYPES.has(credentialType)) {
				for (const binding of nodeBindings) items.push({
					id: `${id}:credential:${credentialType}:${binding.nodeName}`,
					kind: "credential",
					credentialType,
					appDisplayName,
					nodeBindings: [binding]
				});
				continue;
			}
			items.push({
				id: `${id}:credential:${credentialType}`,
				kind: "credential",
				credentialType,
				appDisplayName,
				nodeBindings
			});
		}
		return items;
	});
	const derivedItems = computed(() => {
		const id = toValue(workflowId);
		if (!id || !isWorkflowAvailable.value) return [];
		const items = [...derivedCredentialItems.value];
		for (const { node, parameterNames: pendingNames } of nodesRequiringSetup.value) {
			const parameterNames = [...pendingNames];
			if (parameterNames.length === 0) continue;
			const item = {
				id: `${id}:parameters:${node.name}`,
				kind: "parameters",
				nodeName: node.name,
				parameterNames
			};
			settledParameterItems.set(item.id, item);
			items.push(item);
		}
		for (const item of settledParameterItems.values()) {
			if (items.some((existing) => existing.id === item.id)) continue;
			const node = nodesByName.value.get(item.nodeName);
			if (!node || node.disabled) continue;
			items.push(item);
		}
		return items;
	});
	function getBoundCredential(credentialId) {
		const id = toValue(workflowId);
		return credentialId ? (id && credentialsStore.hasUsableCredentialsForScope({ workflowId: id }) ? credentialsStore.getUsableCredentialById(credentialId) : void 0) ?? credentialsStore.getCredentialById(credentialId) : void 0;
	}
	function isCredentialConfigured(assigned) {
		if (!isBoundCredential(assigned)) return false;
		const credential = getBoundCredential(typeof assigned !== "string" ? assigned?.id : void 0);
		if (credential && !credential.isResolvable && oauth.isOAuthCredentialType(credential.type)) {
			const status = oauthConnections.get(credential.id)?.status;
			return status === "connected" || status === "unknown";
		}
		return !credential?.isResolvable || credential.connectedByMe !== false;
	}
	/** Completion requires a binding on every node, not merely an available account. */
	function isItemDone(item, readNode = getNodeByName) {
		if (item.kind === "credential") {
			const nodeNames = (item.nodeBindings ?? []).map((binding) => binding.nodeName);
			return nodeNames.length > 0 && nodeNames.every((nodeName) => isCredentialConfigured(readNode(nodeName)?.credentials?.[item.credentialType]));
		}
		const node = readNode(item.nodeName);
		if (!node) return false;
		const pendingNames = getPendingParameterNames(node);
		return item.parameterNames.every((parameterName) => {
			const root = parameterName.split(/[.[\]]/)[0] ?? parameterName;
			return !pendingNames.has(root);
		});
	}
	/** The workflow node behind an item, for detail views that host node inputs. */
	function getNodeByName(nodeName) {
		return nodesByName.value.get(nodeName);
	}
	return {
		credentialsAvailable,
		isWorkflowAvailable,
		workflowProjectId,
		derivedItems,
		derivedCredentialItems,
		isItemDone,
		isCredentialConfigured,
		isRefreshingWorkflow,
		getNodeByName,
		refreshWorkflow
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelState.ts
function completeCredentialContext(item, fallback) {
	if (item.kind !== "credential" || fallback?.kind !== "credential" || item.id !== fallback.id || item.credentialType !== fallback.credentialType) return item;
	return {
		...item,
		nodeBindings: item.nodeBindings?.length ? item.nodeBindings : fallback.nodeBindings,
		setupHint: item.setupHint ?? fallback.setupHint,
		reason: item.reason ?? fallback.reason,
		appDisplayName: item.appDisplayName ?? fallback.appDisplayName
	};
}
/**
* Row state for the Instance AI setup panel: merges the thread's durable
* `setup-items` events with the derivation from the workflow document into a
* single row list, reconciling which feed is authoritative.
*/
function useSetupPanelState(options) {
	const { thread } = options;
	/**
	* Detects an in-flight agent edit of this workflow. Blocks nothing — it
	* only picks the row source (agent events over deriving from a mid-mutation
	* workflow) and pauses the derivation's refetches until the edit settles.
	*/
	const isAgentBuilding = computed(() => {
		const id = toValue(options.workflowId);
		if (!id) return false;
		return thread.messages.some((message) => message.agentTree && isAgentEditingWorkflow(message.agentTree, id));
	});
	const derivation = useWorkflowSetupItems(options.workflowId, { paused: () => isAgentBuilding.value });
	const eventItems = computed(() => {
		const id = toValue(options.workflowId);
		if (!id || !Object.hasOwn(thread.setupItemsByWorkflowId, id)) return [];
		return thread.setupItemsByWorkflowId[id];
	});
	const credentialContext = shallowReactive(/* @__PURE__ */ new Map());
	watch([() => toValue(options.workflowId), eventItems], ([id, items], [previousId]) => {
		if (id !== previousId) credentialContext.clear();
		for (const item of items) if (item.kind === "credential") credentialContext.set(item.id, completeCredentialContext(item, credentialContext.get(item.id)));
	}, {
		immediate: true,
		flush: "sync"
	});
	watch([eventItems, isAgentBuilding], ([items, building]) => {
		if (building && items.length > 0) derivation.refreshWorkflow({ force: true });
	}, {
		immediate: true,
		flush: "sync"
	});
	/**
	* Reconciliation: while the agent edits the workflow, its events are the
	* row source (the workflow document lags behind the agent's changes); at
	* rest the derivation is ground truth — from the live canvas store when a
	* host has one hydrated, else from the saved workflow the derivation
	* fetches itself. Events still cover that fetch being in flight, e.g.
	* right after a thread refresh.
	*/
	const rowSource = computed(() => !isAgentBuilding.value && derivation.isWorkflowAvailable.value ? "derived" : "events");
	const rows = computed(() => {
		if (rowSource.value === "events") {
			const derivedById = new Map(derivation.derivedCredentialItems.value.map((item) => [item.id, item]));
			const announcedIds = new Set(eventItems.value.map((item) => item.id));
			const stillRequired = derivation.derivedCredentialItems.value.filter((item) => credentialContext.has(item.id) && !announcedIds.has(item.id));
			return [...eventItems.value, ...stillRequired].map((event) => {
				const item = completeCredentialContext(completeCredentialContext(event, derivedById.get(event.id)), credentialContext.get(event.id));
				return {
					item,
					isDone: derivation.isItemDone(item)
				};
			});
		}
		const derived = derivation.derivedItems.value;
		const derivedIds = new Set(derived.map((item) => item.id));
		const settledEventItems = eventItems.value.filter((item) => item.kind === "parameters" && !derivedIds.has(item.id) && derivation.isItemDone(item));
		return [...derived, ...settledEventItems].map((derivedItem) => {
			const item = completeCredentialContext(derivedItem, credentialContext.get(derivedItem.id));
			return {
				item,
				isDone: derivation.isItemDone(item)
			};
		});
	});
	return {
		credentialsAvailable: derivation.credentialsAvailable,
		isRefreshingWorkflow: derivation.isRefreshingWorkflow,
		rows,
		rowSource,
		isAgentBuilding,
		getNodeByName: derivation.getNodeByName,
		workflowProjectId: derivation.workflowProjectId,
		refreshWorkflow: derivation.refreshWorkflow,
		isItemDone: derivation.isItemDone,
		isCredentialConfigured: derivation.isCredentialConfigured
	};
}
//#endregion
//#region ../../@n8n/utils/src/promise/deferred-promise.ts
function createDeferredPromise() {
	const deferred = {};
	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelExecution.ts
function useSetupPanelExecution(options) {
	const rootStore = useRootStore();
	const { getTelemetryPayload } = useInstanceAiSetupPanelExperiment();
	const workflowsStore = useWorkflowsStore();
	const { runWorkflowApi } = useRunWorkflowApi();
	const nodeTypesStore = useNodeTypesStore();
	const pushStore = usePushConnectionStore();
	const logsStore = useLogsStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const runningWorkflows = reactive(/* @__PURE__ */ new Set());
	const isRunning = computed(() => runningWorkflows.has(toValue(options.workflowId) ?? ""));
	let disposed = false;
	const cancelWaits = /* @__PURE__ */ new Map();
	if (getCurrentScope()) onScopeDispose(() => {
		disposed = true;
		for (const cancelWait of cancelWaits.values()) cancelWait();
	});
	async function executeWorkflow() {
		const workflowId = toValue(options.workflowId);
		if (!workflowId || runningWorkflows.has(workflowId) || disposed) return;
		if (!pushStore.isConnected) throw new Error(i18n.baseText("workflowRun.noActiveConnectionToTheServer"));
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		if (executionState.isWorkflowRunning) return;
		runningWorkflows.add(workflowId);
		let cleanup = () => {};
		try {
			const workflow = await getWorkflow(rootStore.restApiContext, workflowId);
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
			if (disposed || toValue(options.workflowId) !== workflowId || executionState.isWorkflowRunning) return;
			const triggers = workflow.nodes.filter((node) => !node.disabled && nodeTypesStore.isTriggerNode(node.type));
			const trigger = triggers.find((node) => node.name === executionState.selectedTriggerNodeName) ?? triggers[0];
			if (!trigger) throw new Error(i18n.baseText("nodeView.canvasAddButton.addATriggerNodeBeforeExecuting"));
			logsStore.toggleOpen(true);
			if (isChatNode(trigger)) {
				toast.showMessage({
					title: i18n.baseText("aiAssistant.builder.toast.title"),
					message: i18n.baseText("aiAssistant.builder.toast.description"),
					type: "info"
				});
				return;
			}
			const testContext = {
				...getTelemetryPayload(),
				test_request_id: v4(),
				session_id: rootStore.pushRef,
				source: "instance_ai_setup_panel",
				workflow_id: workflowId,
				thread_id: options.thread.id
			};
			let agentExecutionId;
			for (const message of options.thread.messages) if (message.agentTree) agentExecutionId = getExecutionResultsByWorkflow(message.agentTree).get(workflowId)?.executionId ?? agentExecutionId;
			const completed = createDeferredPromise();
			const finished = /* @__PURE__ */ new Map();
			let executionId;
			let startedId;
			let waitingForWebhook = false;
			let settled = false;
			const finish = (id, status) => {
				if (settled) return;
				settled = true;
				telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_TEST_FINISHED, {
					...testContext,
					execution_id: id,
					status
				});
				completed.resolve(id ? {
					workflowId,
					executionId: id,
					status
				} : void 0);
			};
			const observeId = (id) => {
				executionId = id;
				if (executionState.activeExecutionId === null) executionState.setActiveExecutionId(id);
				options.thread.rememberManualExecution(workflowId, id, agentExecutionId);
				const status = finished.get(id);
				if (status) finish(id, status);
			};
			const readStatus = async () => {
				if (!executionId || settled || disposed) return;
				try {
					const execution = await workflowsStore.fetchExecutionDataById(executionId);
					if (disposed || execution?.workflowId !== workflowId || execution.id !== executionId) return;
					if (execution && isTerminalExecutionStatus(execution.status)) finish(execution.id, execution.status);
				} catch {}
			};
			const removeListener = pushStore.addEventListener((event) => {
				if (event.type === "testWebhookDeleted" && event.data.workflowId === workflowId && !event.data.executionId && waitingForWebhook && !executionId) {
					finish(void 0, "canceled");
					return;
				}
				if (event.type === "testWebhookReceived" && event.data.workflowId === workflowId) {
					startedId = event.data.executionId;
					if (waitingForWebhook && !executionId) observeId(startedId);
				}
				if (event.type === "executionStarted" && event.data.workflowId === workflowId && event.data.source !== "instance_ai") {
					startedId = event.data.executionId;
					if (waitingForWebhook && !executionId) observeId(startedId);
				}
				if (event.type !== "executionFinished" || event.data.workflowId !== workflowId || !isTerminalExecutionStatus(event.data.status)) return;
				finished.set(event.data.executionId, event.data.status);
				if (event.data.executionId === executionId) finish(executionId, event.data.status);
			});
			const stopReconnectWatch = watch(() => pushStore.isConnected, (connected) => {
				if (connected) readStatus();
			});
			cleanup = () => {
				removeListener();
				stopReconnectWatch();
			};
			cancelWaits.set(workflowId, () => {
				cleanup();
				completed.resolve(void 0);
			});
			telemetry.track(TELEMETRY_EVENT.WORKFLOW.USER_REQUESTED_WORKFLOW_TEST, testContext);
			const response = await runWorkflowApi({
				workflowId,
				triggerToStartFrom: { name: trigger.name }
			}, executionState.documentId).catch((error) => {
				telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_TEST_FINISHED, {
					...testContext,
					status: "request_failed"
				});
				throw error;
			});
			if (disposed) {
				if (executionState.activeExecutionId === null) {
					executionState.setActiveExecutionId(void 0);
					executionState.setExecutionWaitingForWebhook(false);
				}
				return;
			}
			waitingForWebhook = response.waitingForWebhook === true;
			executionState.setExecutionWaitingForWebhook(waitingForWebhook);
			if (response.executionId) observeId(response.executionId);
			else if (waitingForWebhook && startedId) observeId(startedId);
			else if (!waitingForWebhook) throw new Error(i18n.baseText("instanceAi.setupPanel.executeError"));
			readStatus();
			const result = await completed.promise;
			cleanup();
			if (!result && executionState.activeExecutionId === null || result && !useExistingWorkflowDocumentStore(executionState.documentId)?.hydrated && executionState.activeExecutionId === result.executionId) executionState.setActiveExecutionId(void 0);
			executionState.setExecutionWaitingForWebhook(false);
			if (disposed) return;
			if (!result) return;
			const notified = await options.thread.sendMessage(i18n.baseText("instanceAi.setupPanel.executedMessage", { interpolate: { executionId: result.executionId } }), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_setup_panel_execute"
				},
				pushRef: rootStore.pushRef
			});
			return {
				...result,
				notified
			};
		} finally {
			cleanup();
			cancelWaits.delete(workflowId);
			runningWorkflows.delete(workflowId);
		}
	}
	return {
		executeWorkflow,
		isRunning
	};
}
//#endregion
//#region src/features/ai/instanceAi/setupPanelGroups.ts
/** Group service fields with their credential and collect unrelated fields in Details. */
function groupSetupPanelRows(rows, options) {
	const groups = rows.filter((row) => row.item.kind === "credential").map((credential) => ({
		id: credential.item.id,
		credential,
		parameters: []
	}));
	const details = {
		id: `${options.workflowId}:details`,
		parameters: []
	};
	for (const row of rows.filter((entry) => entry.item.kind === "parameters")) {
		const service = groups.find((group) => group.credential?.item.nodeBindings?.some((binding) => binding.nodeName === row.item.nodeName));
		if (service) {
			service.parameters.push(row);
			continue;
		}
		const node = options.getNodeByName(row.item.nodeName);
		const categories = (node ? options.getNodeType(node) : null)?.codex?.categories;
		const isRss = node?.type === "n8n-nodes-base.rssFeedRead" || node?.type === `n8n-nodes-base.rssFeedReadTrigger`;
		if (node && (isRss || categories?.length && !categories.includes("Core Nodes"))) groups.push({
			id: row.item.id,
			node,
			parameters: [row]
		});
		else details.parameters.push(row);
	}
	if (details.parameters.length) groups.push(details);
	return groups;
}
//#endregion
//#region src/features/ai/instanceAi/setupPanelParameterChanges.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_set = /* @__PURE__ */ __toESM(require_set(), 1);
var import_unset = /* @__PURE__ */ __toESM(require_unset(), 1);
function isRecord(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** Keep assignment targets stable if an agent reorders the collection. */
function resolvePath(parameters, path) {
	const resolved = [];
	for (const part of path) {
		if (typeof part === "string") {
			resolved.push(part);
			continue;
		}
		const collection = (0, import_get.default)(parameters, resolved);
		if (!Array.isArray(collection)) return void 0;
		const index = collection.findIndex((entry) => isRecord(entry) && entry.id === part.id);
		if (index === -1) return void 0;
		resolved.push(String(index));
	}
	return resolved;
}
function getSetupParameterValue(parameters, path) {
	const resolved = resolvePath(parameters, path);
	return resolved ? (0, import_get.default)(parameters, resolved) : void 0;
}
/** Compare the edited values with their baseline before a write can be queued. */
function getSetupParameterChanges(before, after, path = []) {
	if ((0, import_isEqual.default)(before, after)) return [];
	if (isRecord(before) && isRecord(after)) return [...new Set([...Object.keys(before), ...Object.keys(after)])].flatMap((key) => getSetupParameterChanges(before[key], after[key], [...path, key]));
	if (Array.isArray(before) && Array.isArray(after) && before.length === after.length) {
		if (before.every((entry, index) => {
			const next = after[index];
			return !isRecord(entry) || !isRecord(next) || entry.id === next.id;
		})) return before.flatMap((entry, index) => {
			const part = isRecord(entry) && typeof entry.id === "string" ? { id: entry.id } : String(index);
			return getSetupParameterChanges(entry, after[index], [...path, part]);
		});
	}
	return [{
		path,
		value: (0, import_cloneDeep.default)(after)
	}];
}
function applySetupParameterChanges(parameters, changes) {
	const updated = deepCopy(parameters);
	for (const change of changes) {
		const path = resolvePath(updated, change.path);
		if (!path?.length) continue;
		if (change.value === void 0) (0, import_unset.default)(updated, path);
		else (0, import_set.default)(updated, path, deepCopy(change.value));
	}
	return updated;
}
/** A newer parent edit replaces all older edits below it. */
function mergeSetupParameterChanges(previous, latest) {
	return [...previous.filter((previousChange) => !latest.some((change) => change.path.every((part, index) => (0, import_isEqual.default)(part, previousChange.path[index])))), ...latest];
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelActions.ts
function resolveSetupCredentialItem(item, nodes, nodeTypeProvider) {
	if (item.nodeBindings?.length || GENERIC_AUTH_CREDENTIAL_TYPES.has(item.credentialType)) return item;
	return {
		...item,
		nodeBindings: nodes.filter((node) => !node.disabled && getNodeCredentialTypes(nodeTypeProvider, node).includes(item.credentialType)).map((node) => ({ nodeName: node.name }))
	};
}
/**
* Re-applies the delta onto freshly fetched nodes. Mutates the given array's
* nodes in place (the caller owns a per-request fetch result).
*/
function applyDeltaToNodes(nodes, delta) {
	const nodesByName = new Map(nodes.map((node) => [node.name, node]));
	let changed = false;
	let sawTarget = false;
	for (const { item, credential } of delta.credentialBinds) for (const binding of item.nodeBindings ?? []) {
		const node = nodesByName.get(binding.nodeName);
		if (!node) continue;
		sawTarget = true;
		const current = node.credentials?.[item.credentialType];
		if (typeof current !== "string" && current?.id === credential.id && current?.__aiGatewayManaged === true === (credential.__aiGatewayManaged === true)) continue;
		node.credentials = {
			...node.credentials,
			[item.credentialType]: { ...credential }
		};
		changed = true;
	}
	for (const { nodeName, changes } of delta.parameterApplies) {
		if (changes.length === 0) continue;
		const node = nodesByName.get(nodeName);
		if (!node) continue;
		sawTarget = true;
		const parameters = applySetupParameterChanges(node.parameters, changes);
		if ((0, import_isEqual.default)(parameters, node.parameters)) continue;
		node.parameters = parameters;
		changed = true;
	}
	if (changed) return "changed";
	return sawTarget ? "noop" : "dropped";
}
/**
* Setup panel apply paths (T6 of setup panel v2): bind credentials and submit
* parameter values through the normal versionId/checksum-guarded workflow
* PATCH.
*
* The agent lock rule: no user-initiated workflow write while the agent is
* editing. Writes requested mid-build queue up (latest wins per item/node)
* and flush once `isAgentBuilding` settles — one attempt, then the queue is
* dropped and done-ness re-derives from the saved workflow.
*/
function useSetupPanelActions(options) {
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const nodeHelpers = useNodeHelpers();
	const activeApplyCount = ref(0);
	const isApplying = computed(() => activeApplyCount.value > 0);
	const pendingCredentialBinds = shallowReactive(/* @__PURE__ */ new Map());
	const pendingParameterApplies = shallowReactive(/* @__PURE__ */ new Map());
	const applyingDeltas = shallowReactive(/* @__PURE__ */ new Map());
	/**
	* The workflow the queued writes were captured for. A build settling and a
	* re-anchor can land in the same flush (the settle watcher runs first), so
	* the flush checks ownership instead of trusting the current anchor.
	*/
	let queuedWorkflowId;
	/** Queued writes awaiting the agent lock release. */
	const pendingApplyCount = computed(() => pendingCredentialBinds.size + pendingParameterApplies.size);
	function getPendingCredential(itemId, nodeName) {
		const workflowId = toValue(options.workflowId);
		const scopedId = nodeName ? `${itemId}:${nodeName}` : itemId;
		const queued = pendingCredentialBinds.get(scopedId) ?? pendingCredentialBinds.get(itemId);
		if (queuedWorkflowId === workflowId && queued) return queued.credential;
		for (const [delta, targetId] of [...applyingDeltas].reverse()) {
			if (targetId !== workflowId) continue;
			const bind = delta.credentialBinds.find(({ item }) => item.id === scopedId) ?? delta.credentialBinds.find(({ item }) => item.id === itemId);
			if (bind) return bind.credential;
		}
	}
	function getPendingParameterChanges(nodeName) {
		const workflowId = toValue(options.workflowId);
		const queued = pendingParameterApplies.get(nodeName) ?? [];
		let changes = [];
		for (const [delta, targetId] of applyingDeltas) {
			if (targetId !== workflowId) continue;
			for (const apply of delta.parameterApplies) if (apply.nodeName === nodeName) changes = mergeSetupParameterChanges(changes, apply.changes);
		}
		return mergeSetupParameterChanges(changes, queuedWorkflowId === workflowId ? queued : []);
	}
	/** Puts a delta back into the queues, keeping any newer entries queued meanwhile. */
	function requeueDelta(workflowId, delta) {
		if (toValue(options.workflowId) !== workflowId) return;
		queuedWorkflowId = workflowId;
		for (const bind of delta.credentialBinds) if (!pendingCredentialBinds.has(bind.item.id)) pendingCredentialBinds.set(bind.item.id, bind);
		for (const { nodeName, changes } of delta.parameterApplies) {
			const existing = pendingParameterApplies.get(nodeName) ?? [];
			pendingParameterApplies.set(nodeName, mergeSetupParameterChanges(changes, existing));
		}
	}
	/**
	* Mirrors an applied delta into a live canvas document, if a host has one
	* hydrated: the derivation reads the document's nodes while it exists, and
	* the document's next save would otherwise clobber the bind (its nodes) or
	* version-conflict (its stale versionId/checksum).
	*
	* The delta merges into the document's own nodes (not the server copy) so
	* unsaved local edits survive. That includes the field the delta itself
	* wrote: a document value that already diverged from the pre-PATCH server
	* value is a newer local edit — it stays, and wins on the document's next
	* save. Mirror writes carry already-saved state, so they do not mark the
	* editor dirty, and the touched nodes' issues are recomputed so stale
	* warnings clear right away.
	*/
	function syncHydratedDocument(workflowId, delta, baseline, updated) {
		const documentStore = useExistingWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		if (!documentStore?.hydrated) return;
		const updatedNodeNames = new Set(updated.nodes.map((node) => node.name));
		const touchedNodeNames = /* @__PURE__ */ new Set();
		for (const { item, credential } of delta.credentialBinds) for (const binding of item.nodeBindings ?? []) {
			if (!updatedNodeNames.has(binding.nodeName)) continue;
			const docNode = documentStore.getNodeByName(binding.nodeName);
			if (!docNode) continue;
			const base = baseline.get(binding.nodeName);
			const current = docNode.credentials?.[item.credentialType];
			if (!(0, import_isEqual.default)(current, base?.credentials?.[item.credentialType])) continue;
			documentStore.updateNodeProperties({
				name: binding.nodeName,
				properties: { credentials: {
					...docNode.credentials,
					[item.credentialType]: { ...credential }
				} }
			}, { markDirty: false });
			touchedNodeNames.add(binding.nodeName);
		}
		for (const { nodeName, changes } of delta.parameterApplies) {
			if (!updatedNodeNames.has(nodeName)) continue;
			const docNode = documentStore.getNodeByName(nodeName);
			if (!docNode) continue;
			const base = baseline.get(nodeName);
			const mirrorChanges = changes.filter((change) => (0, import_isEqual.default)(getSetupParameterValue(docNode.parameters, change.path), getSetupParameterValue(base?.parameters ?? {}, change.path)));
			if (mirrorChanges.length === 0) continue;
			documentStore.updateNodeProperties({
				name: nodeName,
				properties: { parameters: applySetupParameterChanges(docNode.parameters, mirrorChanges) }
			}, { markDirty: false });
			touchedNodeNames.add(nodeName);
		}
		for (const nodeName of touchedNodeNames) {
			const node = documentStore.getNodeByName(nodeName);
			if (!node) continue;
			documentStore.setNodeIssue({
				node: nodeName,
				type: "credentials",
				value: nodeHelpers.getNodeCredentialIssues(node)?.credentials ?? null
			});
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			if (!nodeType) continue;
			documentStore.setNodeIssue({
				node: nodeName,
				type: "parameters",
				value: getNodeParametersIssues(nodeType.properties, node, nodeType)?.parameters ?? null
			});
			const workflowObject = documentStore.getWorkflowObjectAccessorSnapshot();
			documentStore.setNodeIssue({
				node: nodeName,
				type: "input",
				value: nodeHelpers.getNodeInputIssues(workflowObject, node, nodeType)?.input ?? null
			});
		}
		documentStore.setVersionData({
			versionId: updated.versionId,
			name: documentStore.versionData?.name ?? null,
			description: documentStore.versionData?.description ?? null
		});
		if (updated.checksum) documentStore.setChecksum(updated.checksum);
	}
	/**
	* The guarded write: fetch the saved workflow, re-apply the delta onto its
	* nodes, PATCH with the fetched versionId + checksum. A version conflict
	* (another writer landed in between) refetches, re-applies and retries
	* once; a second conflict gives up.
	*/
	async function patchWorkflowNodes(workflowId, delta) {
		activeApplyCount.value++;
		applyingDeltas.set(delta, workflowId);
		try {
			for (let attempt = 0; attempt < 2; attempt++) {
				let fresh;
				try {
					fresh = await getWorkflow(rootStore.restApiContext, workflowId);
				} catch {
					return "error";
				}
				if (!fresh.checksum) return "error";
				const nodes = fresh.nodes;
				if (delta.credentialBinds.some((bind) => !bind.item.nodeBindings?.length)) try {
					await nodeTypesStore.loadNodeTypesIfNotLoaded();
				} catch {
					return "error";
				}
				const resolvedDelta = {
					...delta,
					credentialBinds: delta.credentialBinds.map((bind) => ({
						...bind,
						item: resolveSetupCredentialItem(bind.item, nodes, nodeTypesStore)
					}))
				};
				const baseline = new Map(nodes.map((node) => [node.name, {
					credentials: { ...node.credentials },
					parameters: { ...node.parameters }
				}]));
				const outcome = applyDeltaToNodes(nodes, resolvedDelta);
				if (outcome !== "changed") {
					if (outcome === "noop") options.onSaved?.(fresh);
					return outcome;
				}
				if (toValue(options.workflowId) !== workflowId) return "dropped";
				if (toValue(options.isAgentBuilding)) {
					requeueDelta(workflowId, delta);
					return "queued";
				}
				try {
					const updated = await workflowsStore.updateWorkflow(workflowId, {
						nodes,
						versionId: fresh.versionId,
						expectedChecksum: fresh.checksum
					});
					syncHydratedDocument(workflowId, resolvedDelta, baseline, updated);
					options.onSaved?.(updated);
					return "applied";
				} catch (error) {
					if (!(error instanceof ResponseError && error.httpStatusCode === 409)) return "error";
				}
			}
			return "conflict";
		} finally {
			applyingDeltas.delete(delta);
			activeApplyCount.value--;
		}
	}
	/**
	* Binds a credential to every node the item covers. While the agent builds,
	* the bind queues instead (latest wins per item) — this is also the
	* mid-build create path: creating a credential registers its bind here and
	* the flush lands it once the lock releases.
	*/
	async function bindCredential(item, credential) {
		if (toValue(options.isAgentBuilding)) {
			queuedWorkflowId = toValue(options.workflowId);
			pendingCredentialBinds.set(item.id, {
				item,
				credential
			});
			return "queued";
		}
		const workflowId = toValue(options.workflowId);
		if (!workflowId) return "error";
		return await patchWorkflowNodes(workflowId, {
			credentialBinds: [{
				item,
				credential
			}],
			parameterApplies: []
		});
	}
	/** Use a baseline to preserve unedited fields inside each submitted root. */
	async function applyParameterValues(nodeName, values, baseline = {}) {
		return await applyParameterBatch([{
			nodeName,
			values,
			baseline
		}]);
	}
	/** Confirm all visible node fields in one guarded workflow update. */
	async function applyParameterBatch(submissions) {
		const parameterApplies = submissions.map(({ nodeName, values, baseline }) => ({
			nodeName,
			changes: getSetupParameterChanges(baseline, {
				...baseline,
				...values
			})
		}));
		if (toValue(options.isAgentBuilding)) {
			queuedWorkflowId = toValue(options.workflowId);
			for (const { nodeName, changes } of parameterApplies) {
				const existing = pendingParameterApplies.get(nodeName) ?? [];
				pendingParameterApplies.set(nodeName, mergeSetupParameterChanges(existing, changes));
			}
			return "queued";
		}
		const workflowId = toValue(options.workflowId);
		if (!workflowId) return "error";
		return await patchWorkflowNodes(workflowId, {
			credentialBinds: [],
			parameterApplies
		});
	}
	/**
	* Lands every queued write in one guarded PATCH. One attempt — leftovers
	* drop. Returns the apply outcome, or undefined when there was nothing to
	* flush or the lock is still held.
	*/
	async function flushPendingApplies() {
		if (toValue(options.isAgentBuilding)) return void 0;
		if (pendingApplyCount.value === 0) return void 0;
		const workflowId = toValue(options.workflowId);
		if (!workflowId || workflowId !== queuedWorkflowId) {
			pendingCredentialBinds.clear();
			pendingParameterApplies.clear();
			return "dropped";
		}
		const delta = {
			credentialBinds: [...pendingCredentialBinds.values()],
			parameterApplies: [...pendingParameterApplies.entries()].map(([nodeName, changes]) => ({
				nodeName,
				changes
			}))
		};
		pendingCredentialBinds.clear();
		pendingParameterApplies.clear();
		return await patchWorkflowNodes(workflowId, delta);
	}
	watch(() => toValue(options.isAgentBuilding), (building, wasBuilding) => {
		const workflowId = toValue(options.workflowId);
		if (wasBuilding && !building && workflowId) flushPendingApplies().then((result) => {
			if (result) options.onFlushResult?.(result, workflowId);
		});
	});
	watch(() => toValue(options.workflowId), () => {
		pendingCredentialBinds.clear();
		pendingParameterApplies.clear();
	});
	return {
		bindCredential,
		applyParameterValues,
		applyParameterBatch,
		flushPendingApplies,
		pendingApplyCount,
		getPendingCredential,
		getPendingParameterChanges,
		isApplying
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelTelemetry.ts
function createTelemetryState() {
	return {
		owners: shallowReactive(/* @__PURE__ */ new Set()),
		shownRows: /* @__PURE__ */ new Set(),
		snapshots: /* @__PURE__ */ new Map(),
		connectionAttempts: /* @__PURE__ */ new Map(),
		visibleWorkflowId: ref()
	};
}
var states = /* @__PURE__ */ new WeakMap();
function useSetupPanelTelemetry(options) {
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const nodeTypesStore = useNodeTypesStore();
	const { getTelemetryPayload } = useInstanceAiSetupPanelExperiment();
	const state = states.get(options.thread) ?? createTelemetryState();
	states.set(options.thread, state);
	const owner = Symbol();
	state.owners.add(owner);
	const isOwner = () => [...state.owners].at(-1) === owner;
	const { shownRows, snapshots, connectionAttempts } = state;
	const context = () => ({
		...getTelemetryPayload(),
		session_id: rootStore.pushRef,
		workflow_id: toValue(options.workflowId),
		thread_id: options.thread.id
	});
	function getItems(setupItems, readNode = options.getNodeByName) {
		return setupItems.flatMap((item) => {
			if (item.kind === "credential") return (item.nodeBindings ?? []).flatMap((binding) => {
				const node = readNode(binding.nodeName);
				return node ? [{
					node_id: node.id,
					node_type: node.type,
					kind: "credential",
					credential_type: item.credentialType,
					completed: options.isItemDone({
						...item,
						nodeBindings: [binding]
					}, readNode)
				}] : [];
			});
			const node = readNode(item.nodeName);
			return node ? item.parameterNames.map((name) => ({
				node_id: node.id,
				node_type: node.type,
				kind: "parameter",
				parameter_name: name,
				completed: options.isItemDone({
					...item,
					parameterNames: [name]
				}, readNode)
			})) : [];
		});
	}
	function trackSaved(workflow) {
		if (!state.owners.has(owner) || workflow.id !== toValue(options.workflowId)) return;
		const nodes = new Map(workflow.nodes.map((node) => [node.name, node]));
		const announced = Object.hasOwn(options.thread.setupItemsByWorkflowId, workflow.id) ? options.thread.setupItemsByWorkflowId[workflow.id] : [];
		const savedRequirements = [...new Map([...announced.map((item) => [item.id, item]), ...toValue(options.rows).map(({ item }) => [item.id, item])]).values()].map((item) => item.kind === "credential" ? resolveSetupCredentialItem(item, workflow.nodes, nodeTypesStore) : item);
		const readNode = (name) => nodes.get(name);
		const items = getItems(savedRequirements, readNode);
		if (items.length === 0) return;
		telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_SAVED, {
			...context(),
			instance_id: rootStore.instanceId,
			source: "instance_ai_setup_panel",
			items,
			setup_complete: !toValue(options.isAgentBuilding) && items.every((item) => item.completed)
		});
	}
	function getChatTelemetryContext() {
		const groups = toValue(options.groups);
		if (!isOwner() || !toValue(options.ready) || groups.length === 0) return void 0;
		return {
			...context(),
			pending_credential_count: groups.filter((group) => group.credential && !group.credential.isDone).length,
			pending_parameter_count: groups.reduce((count, group) => count + group.parameters.reduce((total, row) => total + (row.isDone ? 0 : row.item.parameterNames.length), 0), 0)
		};
	}
	function trackDismissed(reason) {
		if (!state.visibleWorkflowId.value) return;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_DISMISSED, {
			...context(),
			workflow_id: state.visibleWorkflowId.value,
			reason
		});
		state.visibleWorkflowId.value = void 0;
	}
	watch(() => [
		toValue(options.workflowId),
		toValue(options.rows),
		toValue(options.groups),
		toValue(options.ready),
		[...toValue(options.shownItemIds)],
		isOwner()
	], ([workflowId, rows, groups, ready, shownItemIds, ownsTracking]) => {
		if (!ownsTracking) return;
		if (state.visibleWorkflowId.value && state.visibleWorkflowId.value !== workflowId) trackDismissed("navigation");
		if (!ready) return;
		const key = JSON.stringify(rows.map((row) => ({
			id: row.item.id,
			done: row.isDone,
			shown: shownItemIds.includes(row.item.id),
			parameters: row.item.kind === "parameters" ? [...row.item.parameterNames].sort() : void 0
		})).sort((a, b) => a.id.localeCompare(b.id)));
		if (snapshots.get(workflowId) !== key) {
			snapshots.set(workflowId, key);
			const credentials = rows.filter((row) => row.item.kind === "credential");
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_STATE_OBSERVED, {
				...context(),
				credential_count: credentials.length,
				pending_credential_count: credentials.filter((row) => !row.isDone).length,
				pending_parameter_count: rows.reduce((count, row) => count + (row.item.kind === "parameters" && !row.isDone ? row.item.parameterNames.length : 0), 0),
				already_connected_count: credentials.filter((row) => row.isDone && !shownItemIds.includes(row.item.id)).length
			});
		}
		if (groups.length) state.visibleWorkflowId.value = workflowId;
		else trackDismissed("items_removed");
		for (const group of groups) {
			const rowKey = `${workflowId}:${group.id}`;
			if (shownRows.has(rowKey)) continue;
			shownRows.add(rowKey);
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_ITEM_SHOWN, {
				...context(),
				kind: group.credential ? "credential" : group.node ? "parameters" : "details",
				credential_type: group.credential?.item.credentialType,
				parameter_count: group.parameters.reduce((count, row) => count + row.item.parameterNames.length, 0),
				items: getItems([...group.credential ? [group.credential.item] : [], ...group.parameters.map(({ item }) => item)]).map(({ completed, ...item }) => item)
			});
		}
	}, { immediate: true });
	function trackConnectionStarted(item, method) {
		if (!isOwner()) return;
		connectionAttempts.set(item.id, {
			method,
			workflowId: toValue(options.workflowId)
		});
		telemetry.track(TELEMETRY_EVENT.CREDENTIALS.USER_STARTED_CREDENTIAL_CONNECTION, {
			...context(),
			source: "instance_ai_setup_panel",
			credential_type: item.credentialType,
			method
		});
	}
	function trackConnectionCompleted(item, credentialId, result) {
		const attempt = connectionAttempts.get(item.id);
		if (!attempt || result !== "applied" && result !== "noop" && result !== "queued") return;
		connectionAttempts.delete(item.id);
		telemetry.track(TELEMETRY_EVENT.CREDENTIALS.USER_COMPLETED_CREDENTIAL_CONNECTION, {
			...context(),
			workflow_id: attempt.workflowId,
			source: "instance_ai_setup_panel",
			credential_type: item.credentialType,
			credential_id: credentialId,
			method: attempt.method,
			binding_state: result
		});
	}
	onScopeDispose(() => {
		state.owners.delete(owner);
		if (state.owners.size === 0) {
			trackDismissed("navigation");
			states.delete(options.thread);
		}
	});
	return {
		trackConnectionStarted,
		trackConnectionCompleted,
		trackDismissed,
		trackSaved,
		getChatTelemetryContext
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelDocument.ts
/** Give existing credential and parameter controls a disposable local document. */
function useSetupPanelDocument(options) {
	const documentId = computed(() => createWorkflowDocumentId(toValue(options.workflowId) ?? "instance-ai-setup-panel", toValue(options.itemId)));
	const document = computed(() => useWorkflowDocumentStore(documentId.value));
	watch([documentId, () => toValue(options.node)], ([_id, node]) => document.value.setNodes(node ? [deepCopy(node)] : []), {
		immediate: true,
		deep: true
	});
	function dispose(id) {
		disposeNDVStore(useNDVStore(id));
		disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(id));
		disposeWorkflowDocumentStore(useWorkflowDocumentStore(id));
	}
	watch(documentId, (_id, previous) => dispose(previous));
	onScopeDispose(() => dispose(documentId.value));
	provide(ExpressionLocalResolveContextSymbol, computed(() => {
		const node = toValue(options.node);
		return node ? {
			localResolve: true,
			nodeName: node.name,
			additionalKeys: {}
		} : void 0;
	}));
	provide(WorkflowDocumentStoreKey, document);
}
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupPanelDetail.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSetupPanelDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupPanelDetail",
	props: {
		item: {},
		node: {},
		workflowId: {},
		projectId: {},
		pendingChanges: {}
	},
	emits: ["update:hasChanges"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		provide(CompactParameterHintsKey, true);
		const parametersItem = computed(() => props.item);
		const parameterChanges = ref([...props.pendingChanges ?? []]);
		const touchedParameters = ref(/* @__PURE__ */ new Set());
		onScopeDispose(() => emit("update:hasChanges", false));
		const displayParameters = computed(() => applySetupParameterChanges(props.node.parameters, mergeSetupParameterChanges(props.pendingChanges ?? [], parameterChanges.value)));
		const hasChanges = computed(() => !(0, import_isEqual.default)(applySetupParameterChanges(props.node.parameters, props.pendingChanges ?? []), displayParameters.value));
		watch(hasChanges, (value) => emit("update:hasChanges", value));
		const parameterRoots = computed(() => new Set([...(parametersItem.value?.parameterNames ?? []).map((name) => name.split(/[.[\]]/)[0] ?? name), ...parameterChanges.value.map((change) => change.path[0])]));
		watch(() => props.node.parameters, (saved) => {
			parameterChanges.value = parameterChanges.value.filter((change) => !(0, import_isEqual.default)(getSetupParameterValue(saved, change.path), change.value));
		}, { deep: true });
		function onParameterValueChanged(update) {
			if (!parametersItem.value) return;
			const parameterName = update.name.replace(/^parameters\./, "");
			if (!parameterRoots.value.has(parameterName.split(/[.[\]]/)[0])) return;
			const next = deepCopy(displayParameters.value);
			setParameterValue(next, parameterName, update.value);
			parameterChanges.value = mergeSetupParameterChanges(parameterChanges.value, getSetupParameterChanges(displayParameters.value, next));
		}
		function getSubmission() {
			for (const parameter of parameterDefinitions.value) touchedParameters.value.add(parameter.name);
			const item = parametersItem.value;
			if (!item || !hasChanges.value) return;
			const values = {};
			for (const change of parameterChanges.value) {
				const root = change.path[0];
				if (typeof root === "string") values[root] = displayParameters.value[root];
			}
			return {
				nodeName: item.nodeName,
				values,
				baseline: applySetupParameterChanges(props.node.parameters, props.pendingChanges ?? [])
			};
		}
		__expose({ getSubmission });
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.node.type, props.node.typeVersion));
		const parameterDefinitions = computed(() => {
			if (!parametersItem.value || !nodeType.value) return [];
			return nodeType.value.properties.filter((property) => parameterRoots.value.has(property.name));
		});
		const hiddenIssuesInputs = computed(() => parameterDefinitions.value.filter((parameter) => !touchedParameters.value.has(parameter.name)).map((parameter) => parameter.name));
		const assignmentCollectionEditableValueIndices = computed(() => {
			const result = {};
			for (const parameter of nodeType.value?.properties ?? []) {
				if (parameter.type !== "assignmentCollection") continue;
				const indices = /* @__PURE__ */ new Set();
				for (const detail of findPlaceholderDetails(props.node.parameters[parameter.name])) {
					if (detail.path[0] !== "assignments" || detail.path[2] !== "value") continue;
					const match = /^\[(\d+)\]$/.exec(detail.path[1] ?? "");
					if (match?.[1]) indices.add(Number.parseInt(match[1], 10));
				}
				const value = displayParameters.value[parameter.name];
				if (value && typeof value === "object" && "assignments" in value && Array.isArray(value.assignments)) for (const change of parameterChanges.value) {
					if (change.path[0] !== parameter.name || change.path[1] !== "assignments") continue;
					const target = change.path[2];
					const index = typeof target === "object" ? value.assignments.findIndex((assignment) => assignment !== null && typeof assignment === "object" && "id" in assignment && assignment.id === target.id) : Number(target);
					if (Number.isInteger(index) && index >= 0) indices.add(index);
				}
				result[parameter.name] = [...indices];
			}
			return result;
		});
		const displayNode = computed(() => ({
			...props.node,
			parameters: nodeType.value ? getNodeParameters(nodeType.value.properties, displayParameters.value, true, true, props.node, nodeType.value) ?? displayParameters.value : displayParameters.value
		}));
		useSetupPanelDocument({
			workflowId: () => props.workflowId,
			itemId: () => props.item.id,
			node: displayNode
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.body),
				"data-test-id": "instance-ai-setup-panel-detail"
			}, [parametersItem.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parameterDefinitions.value,
				"node-values": { parameters: displayNode.value.parameters },
				node: displayNode.value,
				path: "parameters",
				"hide-delete": true,
				"remove-first-parameter-margin": true,
				"remove-last-parameter-margin": true,
				"options-overrides": {
					hideExpressionSelector: true,
					hideFocusPanelButton: true
				},
				"hidden-issues-inputs": hiddenIssuesInputs.value,
				"assignment-collection-editable-value-indices": assignmentCollectionEditableValueIndices.value,
				onValueChanged: onParameterValueChanged,
				onParameterBlur: _cache[0] || (_cache[0] = ($event) => touchedParameters.value.add($event))
			}, null, 8, [
				"parameters",
				"node-values",
				"node",
				"hidden-issues-inputs",
				"assignment-collection-editable-value-indices"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiSetupPanelDetail_vue_vue_type_style_index_0_lang_module_default = { body: "_body_1790x_1" };
var InstanceAiSetupPanelDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupPanelDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupPanelDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupCredential.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSetupCredential_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupCredential",
	props: {
		item: {},
		node: {},
		pendingCredential: {},
		nodes: {},
		workflowId: {},
		projectId: {},
		helpDisabled: { type: Boolean },
		allowPerNode: { type: Boolean }
	},
	emits: [
		"bindCredential",
		"connectStarted",
		"askForHelp",
		"setCredentialsPerNode",
		"update:busy",
		"update:hasChanges"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const toast = useToast();
		const telemetry = useTelemetry();
		const externalHooks = useExternalHooks();
		const credentialsStore = useCredentialsStore();
		const oauth = useCredentialOAuth();
		const quickConnect = useQuickConnect();
		const gateway = useAiGateway();
		const { openTopUp } = useAiGatewayTopUp();
		const initialized = ref(false);
		const initializationFailed = ref(false);
		const busy = ref(false);
		const reopenAuthorization = ref();
		const createNew = ref(false);
		const hasDraft = ref(false);
		watch(busy, (value) => emit("update:busy", value));
		watch(() => hasDraft.value || createNew.value, (value) => emit("update:hasChanges", value));
		const chooseExisting = ref(false);
		const oauthConnection = ref();
		const oauthMode = ref("unknown");
		const loadingOAuth = ref(false);
		const mode = ref("credits");
		const modeChanged = ref(false);
		let active = true;
		useSetupPanelDocument({
			workflowId: () => props.workflowId,
			itemId: () => props.item.id,
			node: () => props.node
		});
		const form = useCredentialForm({
			mode: "new",
			activeId: () => props.item.credentialType,
			contextNode: () => props.node ?? null,
			projectId: () => props.projectId,
			setupHint: () => props.item.setupHint
		});
		form.setCredentialPropertyDefaults();
		const isOAuth = form.isOAuthType;
		const isTemplated = computed(() => props.item.credentialType === TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE);
		const canQuickConnect = computed(() => isOAuth.value && oauth.canOAuthCredentialQuickConnect(props.item.credentialType) || Boolean(!oauth.isOAuthCredentialType(props.item.credentialType) && props.node && quickConnect.getQuickConnectOption(props.item.credentialType, props.node.type)));
		const serviceName = computed(() => deriveServiceName(props.item.setupHint) ?? getAppNameFromNodeName(getAppNameFromCredType(props.item.appDisplayName ?? form.credentialType.value?.displayName ?? props.item.credentialType)));
		const binding = computed(() => {
			if (props.pendingCredential) return props.pendingCredential;
			const value = props.node?.credentials?.[props.item.credentialType];
			return value && typeof value !== "string" ? value : void 0;
		});
		const connected = computed(() => !createNew.value && !hasDraft.value && Boolean(binding.value?.id || binding.value?.__aiGatewayManaged) && !loadingOAuth.value && !needsAuthorization.value);
		const usableCredentials = computed(() => credentialsStore.hasUsableCredentialsForScope({ workflowId: props.workflowId }) ? credentialsStore.getUsableCredentialByType(props.item.credentialType) : []);
		const storedCredential = computed(() => binding.value?.id ? usableCredentials.value.find(({ id }) => id === binding.value?.id) ?? credentialsStore.getCredentialById(binding.value.id) : void 0);
		const usesCustomOAuth = computed(() => oauthMode.value === "custom");
		const selectedOAuthId = computed(() => !createNew.value && !hasDraft.value && isOAuth.value ? binding.value?.id : void 0);
		watch([
			selectedOAuthId,
			() => storedCredential.value?.updatedAt,
			() => storedCredential.value?.connectedByMe
		], async ([id], _previous, onCleanup) => {
			let stale = false;
			onCleanup(() => {
				stale = true;
			});
			oauthConnection.value = void 0;
			oauthMode.value = "unknown";
			loadingOAuth.value = Boolean(id);
			if (!id) return;
			try {
				const credential = await credentialsStore.getCredentialData({ id });
				if (stale) return;
				const data = credential?.data;
				if (credential?.isResolvable) oauthConnection.value = credential.connectedByMe;
				if (data && typeof data === "object") {
					if (!credential?.isResolvable) oauthConnection.value = Boolean(data.grantType && !["authorizationCode", "pkce"].includes(String(data.grantType))) || hasOAuthTokenData(credential);
					oauthMode.value = Boolean(data.clientId && data.clientSecret || data.consumerKey && data.consumerSecret) || !form.managedOAuthAvailable.value ? "custom" : "managed";
				}
			} catch {} finally {
				if (!stale) loadingOAuth.value = false;
			}
		}, { immediate: true });
		const needsAuthorization = computed(() => Boolean(selectedOAuthId.value) && oauthConnection.value === false);
		const showExistingPicker = computed(() => chooseExisting.value || storedCredential.value?.isResolvable || !connected.value && !needsAuthorization.value && !createNew.value && !hasDraft.value && usableCredentials.value.length > 0);
		const gatewayAvailable = computed(() => gateway.isEnabled.value && gateway.isCredentialTypeSupported(props.item.credentialType) && props.nodes.length > 0 && props.nodes.every((node) => {
			const { operation, resource } = node.parameters;
			return !AI_GATEWAY_UNSUPPORTED_NODE_TYPES.includes(node.type) && gateway.isNodeTypeVersionSupported(node.type, node.typeVersion) && (typeof operation !== "string" || !operation || gateway.isActionSupported(node.type, typeof resource === "string" ? resource : void 0, operation));
		}));
		watch([
			gatewayAvailable,
			gateway.balance,
			usableCredentials
		], ([available, balance, credentials]) => {
			if (available && !modeChanged.value && !connected.value) mode.value = (balance ?? 0) > 0 || credentials.length === 0 ? "credits" : "own";
		}, { immediate: true });
		const inlineFields = computed(() => {
			const fields = form.credentialProperties.value.filter((property) => property.type !== "hidden" && property.type !== "notice" && !property.typeOptions?.copyButton && !(props.item.credentialType === "googlePalmApi" && property.name === "host" && (form.credentialData.value.host ?? property.default) === property.default) && !DOMAIN_RESTRICTION_FIELDS.some(({ name }) => name === property.name));
			const required = fields.filter((property) => property.required);
			const inputs = required.length ? required : fields.filter((property) => !property.default);
			return inputs.length <= 2 ? inputs : [];
		});
		const fieldTitles = computed(() => isTemplated.value ? listPlaceholderTitles(form.credentialData.value) : inlineFields.value.map((property) => property.displayName));
		const useAdvancedForm = computed(() => !canQuickConnect.value && fieldTitles.value.length === 0);
		const advancedIsPrimary = computed(() => isTemplated.value && useAdvancedForm.value);
		const valueLabel = computed(() => binding.value?.__aiGatewayManaged ? i18n.baseText("instanceAi.setupPanel.connectedWith") : isOAuth.value ? i18n.baseText("instanceAi.setupPanel.account") : i18n.baseText("instanceAi.setupPanel.credential"));
		const balanceLabel = computed(() => gateway.balance.value === void 0 ? "" : gateway.balance.value <= 0 ? i18n.baseText("aiGateway.wallet.noCredits") : i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(gateway.balance.value).toFixed(2)}` } }));
		const value = computed(() => binding.value?.__aiGatewayManaged ? [i18n.baseText("generic.n8nCredits"), balanceLabel.value].filter(Boolean).join(" · ") : isOAuth.value ? storedCredential.value?.connectedAccountIdentifier ?? storedCredential.value?.name ?? binding.value?.name : storedCredential.value?.name ?? binding.value?.name);
		const useCredits = computed(() => gatewayAvailable.value && mode.value === "credits");
		const actionLabel = computed(() => needsAuthorization.value ? i18n.baseText("credentialEdit.oAuthButton.connectMyAccount") : useCredits.value ? i18n.baseText("instanceAi.setupPanel.useCredits") : advancedIsPrimary.value ? i18n.baseText("instanceAi.setupPanel.advancedSetup") : canQuickConnect.value || useAdvancedForm.value ? i18n.baseText("instanceAi.setupPanel.connect") : isOAuth.value ? i18n.baseText("instanceAi.setupPanel.saveAndSignIn") : i18n.baseText("generic.save"));
		const actionDisabled = computed(() => !initialized.value || loadingOAuth.value);
		const redirectUrl = computed(() => {
			const urls = rootStore.OAuthCallbackUrls;
			if (form.parentTypes.value.includes("oAuth1Api") || props.item.credentialType === "oAuth1Api") return "oauth1" in urls && typeof urls.oauth1 === "string" ? urls.oauth1 : "";
			return "oauth2" in urls && typeof urls.oauth2 === "string" ? urls.oauth2 : "";
		});
		const documentationUrl = computed(() => {
			const url = props.item.setupHint?.docsUrl ?? form.credentialType.value?.documentationUrl;
			if (!url) return "";
			return /^https?:\/\//.test(url) ? url : `${BUILTIN_CREDENTIALS_DOCS_URL}${url}/`;
		});
		const modeOptions = computed(() => [{
			value: "credits",
			label: i18n.baseText("generic.n8nCredits")
		}, {
			value: "own",
			label: i18n.baseText("instanceAi.setupPanel.useOwnKey")
		}]);
		const perNodeActions = computed(() => props.allowPerNode && connected.value ? [{
			id: "per-node",
			label: i18n.baseText("instanceAi.setupPanel.setCredentialsPerNode")
		}] : []);
		const actions = computed(() => {
			const existing = usableCredentials.value.some((credential) => !connected.value || credential.id !== binding.value?.id) ? [{
				id: "existing",
				label: i18n.baseText("instanceAi.setupPanel.useExisting")
			}] : [];
			if (!connected.value && useCredits.value) return existing;
			if (needsAuthorization.value) return [{
				id: "edit",
				label: i18n.baseText("instanceAi.setupPanel.editCredential")
			}, ...existing];
			if (connected.value && binding.value?.__aiGatewayManaged) return [
				{
					id: "replace",
					label: i18n.baseText("instanceAi.setupPanel.useOwnKey")
				},
				{
					id: "manage",
					label: i18n.baseText("instanceAi.setupPanel.manageCredits")
				},
				...perNodeActions.value
			];
			return [
				...connected.value ? [{
					id: "replace",
					label: i18n.baseText(isOAuth.value ? usesCustomOAuth.value ? "instanceAi.setupPanel.connectWithOAuth" : "instanceAi.setupPanel.switchAccount" : "instanceAi.setupPanel.replaceKey")
				}, {
					id: "edit",
					label: i18n.baseText("instanceAi.setupPanel.editCredential")
				}] : advancedIsPrimary.value ? [] : [{
					id: "advanced",
					label: i18n.baseText("instanceAi.setupPanel.advancedSetup")
				}],
				...existing,
				...perNodeActions.value
			];
		});
		const helpLabel = computed(() => {
			const fieldName = inlineFields.value.length === 1 ? inlineFields.value[0].name : void 0;
			return i18n.baseText(fieldName === "apiKey" ? "instanceAi.setupPanel.helpFindApiKey" : fieldName === "accessToken" ? "instanceAi.setupPanel.helpFindAccessToken" : "instanceAi.setupPanel.helpSetUp");
		});
		function askForHelp() {
			if (props.helpDisabled || busy.value) return;
			const selectedMode = selectedOAuthId.value ? oauthMode.value : form.isManagedOAuthMode.value ? "managed" : "custom";
			const selectedConnection = selectedOAuthId.value ? oauthConnection.value : false;
			emit("askForHelp", {
				id: binding.value?.id ?? void 0,
				credentialType: props.item.credentialType,
				displayName: serviceName.value,
				nodeName: props.node?.name,
				nodeType: props.node?.type,
				placeholderTitles: isOAuth.value ? void 0 : fieldTitles.value,
				documentationUrl: documentationUrl.value || void 0,
				oauthRedirectUrl: isOAuth.value ? redirectUrl.value : void 0,
				setupContext: isOAuth.value ? [
					i18n.baseText("instanceAi.setupPanel.helpOAuthState", { interpolate: {
						mode: selectedMode,
						state: selectedConnection === void 0 ? "unknown" : selectedConnection ? "connected" : "disconnected"
					} }),
					!needsAuthorization.value && fieldTitles.value.length ? i18n.baseText("instanceAi.setupPanel.helpVisibleFields", { interpolate: { fields: fieldTitles.value.join(", ") } }) : "",
					i18n.baseText(canQuickConnect.value ? "instanceAi.setupPanel.helpManagedOAuthAvailable" : "instanceAi.setupPanel.helpManagedOAuthUnavailable")
				].filter(Boolean).join(" ") : void 0
			});
		}
		function emitBinding(id, submittedData) {
			if (!active) return;
			createNew.value = false;
			hasDraft.value = submittedData !== void 0 && !(0, import_isEqual.default)(formData(), submittedData);
			chooseExisting.value = false;
			emit("bindCredential", props.item, id);
		}
		function onCredentialSelected(update) {
			const credential = update.properties.credentials?.[props.item.credentialType];
			if (!credential || typeof credential === "string") return;
			emit("connectStarted", "existing");
			if (credential.__aiGatewayManaged) emitBinding(AI_GATEWAY_MANAGED_TAG);
			else if (credential.id) emitBinding(credential.id);
		}
		function formData() {
			const data = { ...form.credentialData.value };
			delete data.homeProject;
			delete data.sharedWithProjects;
			return data;
		}
		function onDataChange(update) {
			if (!form.onDataChange(update)) return;
			hasDraft.value = true;
			if (reopenAuthorization.value) {
				reopenAuthorization.value = void 0;
				oauth.cancelAuthorize();
			}
		}
		async function saveKey() {
			const workflowId = props.workflowId;
			const details = {
				id: "",
				name: form.credentialName.value,
				type: props.item.credentialType,
				data: deepCopy(formData())
			};
			const credential = await credentialsStore.createNewCredential(details, props.projectId, void 0, { skipStoreUpdate: true });
			await externalHooks.run("credential.saved", {
				credential_type: credential.type,
				credential_id: credential.id,
				is_new: true
			});
			telemetry.track("User created credentials", {
				credential_type: credential.type,
				credential_id: credential.id,
				workflow_id: props.workflowId
			});
			if (form.isCredentialTestable.value) {
				await form.testCredential({
					...details,
					id: credential.id
				});
				if (!form.testedSuccessfully.value) {
					await credentialsStore.deleteCredential({ id: credential.id });
					return;
				}
			}
			credentialsStore.upsertCredential(credential);
			if (!active || props.workflowId !== workflowId) return;
			await credentialsStore.fetchUsableCredentials({ workflowId }).catch(() => {});
			emitBinding(credential.id, details.data);
		}
		async function connect() {
			if (reopenAuthorization.value) {
				reopenAuthorization.value();
				return;
			}
			if (busy.value || actionDisabled.value) return;
			if (!needsAuthorization.value && !useCredits.value && !canQuickConnect.value && !useAdvancedForm.value) {
				form.showValidationWarning.value = true;
				if (!form.requiredPropertiesFilled.value) return;
			}
			busy.value = true;
			form.authError.value = "";
			try {
				if (needsAuthorization.value && storedCredential.value) {
					emit("connectStarted", "oauth");
					const credential = await oauth.authorizeExistingCredential(storedCredential.value, {
						workflowId: props.workflowId,
						onAuthorizationStarted: (reopen) => {
							reopenAuthorization.value = reopen;
						}
					});
					if (credential) {
						oauthConnection.value = true;
						emitBinding(credential.id);
					}
				} else if (useCredits.value) {
					emit("connectStarted", "gateway");
					emitBinding(AI_GATEWAY_MANAGED_TAG);
				} else if (useAdvancedForm.value) onMenuAction("advanced");
				else if (isOAuth.value) {
					emit("connectStarted", "oauth");
					const submittedData = canQuickConnect.value ? void 0 : deepCopy(formData());
					const credential = await oauth.createAndAuthorize(props.item.credentialType, props.node?.type, {
						projectId: props.projectId,
						workflowId: props.workflowId,
						data: submittedData,
						name: form.credentialName.value || void 0,
						onAuthorizationStarted: (reopen) => {
							reopenAuthorization.value = reopen;
						}
					});
					if (credential) emitBinding(credential.id, submittedData);
				} else if (canQuickConnect.value && props.node) {
					emit("connectStarted", "api_key");
					const credential = await quickConnect.connect({
						credentialTypeName: props.item.credentialType,
						nodeType: props.node.type,
						serviceName: serviceName.value,
						source: "credential_type",
						projectId: props.projectId,
						workflowId: props.workflowId
					});
					if (credential) emitBinding(credential.id);
				} else {
					emit("connectStarted", "api_key");
					await saveKey();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			} finally {
				reopenAuthorization.value = void 0;
				busy.value = false;
			}
		}
		function onMenuAction(id) {
			if (id === "per-node") {
				emit("setCredentialsPerNode");
				return;
			}
			if (id === "existing") {
				chooseExisting.value = true;
				return;
			}
			if (id === "manage") {
				openTopUp({
					source: "credential_selector",
					credentialType: props.item.credentialType
				});
				return;
			}
			if (id === "edit" && binding.value?.id) {
				uiStore.openExistingCredential(binding.value.id, { workflowId: props.workflowId });
				return;
			}
			if (id === "replace") {
				mode.value = "own";
				modeChanged.value = true;
				if (isOAuth.value && canQuickConnect.value) connect();
				else {
					createNew.value = true;
					if (!hasDraft.value) {
						initialized.value = false;
						initialize();
					}
				}
				return;
			}
			emit("connectStarted", "advanced");
			uiStore.openNewCredential(props.item.credentialType, false, true, props.projectId, void 0, props.node?.name, props.node, {
				closeOnSave: true,
				credentialSetupHint: props.item.setupHint,
				workflowId: props.workflowId,
				onCredentialCreated: (credential) => emitBinding(credential.id)
			});
		}
		async function initialize() {
			initializationFailed.value = false;
			try {
				uiStore.activeCredentialType = props.item.credentialType;
				const initialization = form.initialize();
				const type = props.item.credentialType;
				const locale = rootStore.defaultLocale;
				if (locale !== "en" && !i18n.exists(`n8n-nodes-base.credentials.${type}`)) {
					const translation = await credentialsStore.getCredentialTranslation(type).catch(() => void 0);
					if (translation) addCredentialTranslation({ [type]: translation }, locale);
				}
				await initialization;
				initialized.value = true;
			} catch (error) {
				initializationFailed.value = true;
				if (active) toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			}
		}
		if (binding.value?.id || binding.value?.__aiGatewayManaged) initialized.value = true;
		else initialize();
		watch(() => props.item.setupHint, (hint) => {
			if (hint && !connected.value) initialize();
		});
		onMounted(() => {
			Promise.all([gateway.fetchConfig(), gateway.fetchWallet()]).catch(() => {});
		});
		onScopeDispose(() => {
			active = false;
			emit("update:busy", false);
			emit("update:hasChanges", false);
			oauth.cancelAuthorize();
			quickConnect.cancelConnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.form) }, [
				showExistingPicker.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.node ? (openBlock(), createBlock(NodeCredentials_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.existing),
					node: __props.node,
					"override-cred-type": __props.item.credentialType,
					"project-id": __props.projectId,
					"workflow-id": __props.workflowId,
					"credential-setup-hint": __props.item.setupHint,
					"credentials-field-label": unref(i18n).baseText("instanceAi.setupPanel.credential"),
					standalone: "",
					"hide-issues": "",
					"skip-auto-select": "",
					onCredentialSelected,
					onConnectionStarted: _cache[0] || (_cache[0] = ($event) => emit("connectStarted", "oauth")),
					onConnectionCompleted: _cache[1] || (_cache[1] = ($event) => emitBinding($event))
				}, createSlots({ _: 2 }, [perNodeActions.value.length ? {
					name: "label-postfix",
					fn: withCtx(() => [createVNode(unref(DropdownMenu_default), {
						items: perNodeActions.value,
						modal: false,
						placement: "bottom-end",
						onSelect: onMenuAction
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: busy.value,
							"aria-label": unref(i18n).baseText("node.moreActions")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "pencil",
								size: "small"
							})]),
							_: 1
						}, 8, ["disabled", "aria-label"])]),
						_: 1
					}, 8, ["items"])]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"node",
					"override-cred-type",
					"project-id",
					"workflow-id",
					"credential-setup-hint",
					"credentials-field-label"
				])) : (openBlock(), createBlock(CredentialsDropdown_default, {
					key: 1,
					teleported: "",
					"credential-options": usableCredentials.value.map(({ id, name, homeProject }) => ({
						id,
						name,
						homeProject,
						typeDisplayName: unref(form).credentialType.value?.displayName
					})),
					"selected-credential-id": null,
					permissions: unref(form).credentialPermissions.value,
					onCredentialSelected: _cache[2] || (_cache[2] = ($event) => {
						emit("connectStarted", "existing");
						emitBinding($event);
					}),
					onNewCredential: _cache[3] || (_cache[3] = ($event) => onMenuAction("advanced"))
				}, null, 8, ["credential-options", "permissions"])), chooseExisting.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: "ghost",
					size: "small",
					onClick: _cache[4] || (_cache[4] = ($event) => chooseExisting.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 64)) : (openBlock(), createBlock(unref(SetupConnection_default), {
					key: 1,
					connected: connected.value && !reopenAuthorization.value,
					"value-label": valueLabel.value,
					value: value.value,
					"action-label": actionLabel.value,
					actions: reopenAuthorization.value ? [] : actions.value,
					"action-disabled": actionDisabled.value,
					loading: loadingOAuth.value || busy.value && !reopenAuthorization.value,
					onAction: connect,
					onSelect: onMenuAction
				}, {
					"action-leading": withCtx(() => [useCredits.value && balanceLabel.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						step: "xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(balanceLabel.value), 1)]),
						_: 1
					})) : !useCredits.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.help),
						disabled: __props.helpDisabled || busy.value,
						onClick: askForHelp
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "sparkles",
							size: "small"
						}), createTextVNode(" " + toDisplayString(helpLabel.value), 1)]),
						_: 1
					}, 8, ["class", "disabled"])) : createCommentVNode("", true)]),
					default: withCtx(() => [
						gatewayAvailable.value ? (openBlock(), createBlock(unref(N8nSegmentControl_default), {
							key: 0,
							"model-value": mode.value,
							options: modeOptions.value,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => {
								mode.value = $event;
								modeChanged.value = true;
							})
						}, null, 8, ["model-value", "options"])) : createCommentVNode("", true),
						useCredits.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							class: normalizeClass(_ctx.$style.hint)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.creditsDescription")), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						needsAuthorization.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(value.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						!loadingOAuth.value && !needsAuthorization.value && !useCredits.value && !canQuickConnect.value && !useAdvancedForm.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [unref(isOAuth) && redirectUrl.value ? (openBlock(), createElementBlock("label", {
							key: 0,
							class: normalizeClass(_ctx.$style.redirect)
						}, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.redirectUrl")) + " ", 1), createVNode(unref(N8nCopyInput_default), {
							class: normalizeClass(_ctx.$style.redirectInput),
							value: redirectUrl.value,
							"copy-label": unref(i18n).baseText("instanceAi.setupPanel.copyRedirectUrl"),
							size: "small"
						}, null, 8, [
							"class",
							"value",
							"copy-label"
						])], 2)) : createCommentVNode("", true), isTemplated.value ? (openBlock(), createBlock(TemplatedAuthSimpleView_default, {
							key: 1,
							compact: "",
							"credential-data": unref(form).credentialData.value,
							"show-validation-warnings": unref(form).showValidationWarning.value,
							onUpdate: onDataChange
						}, null, 8, ["credential-data", "show-validation-warnings"])) : (openBlock(), createBlock(CredentialInputs_default, {
							key: 2,
							compact: "",
							"credential-type": __props.item.credentialType,
							"credential-properties": inlineFields.value,
							"credential-data": unref(form).credentialData.value,
							"documentation-url": documentationUrl.value,
							"show-validation-warnings": unref(form).showValidationWarning.value,
							onUpdate: onDataChange
						}, null, 8, [
							"credential-type",
							"credential-properties",
							"credential-data",
							"documentation-url",
							"show-validation-warnings"
						]))], 64)) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"connected",
					"value-label",
					"value",
					"action-label",
					"actions",
					"action-disabled",
					"loading"
				])),
				unref(form).authError.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					theme: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(form).authError.value), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				initializationFailed.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 3,
					variant: "ghost",
					size: "small",
					onClick: initialize
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiSetupCredential_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_m1fmg_1",
	redirect: "_redirect_m1fmg_7",
	hint: "_hint_m1fmg_15",
	help: "_help_m1fmg_19",
	existing: "_existing_m1fmg_24",
	redirectInput: "_redirectInput_m1fmg_28"
};
var InstanceAiSetupCredential_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupCredential_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupCredential_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSetupPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupPanel",
	props: {
		workflowId: {},
		projectId: {}
	},
	emits: ["update:overlapHeight"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		provide(ResourceLocatorDropdownTeleportedKey, true);
		const i18n = useI18n();
		const toast = useToast();
		const thread = useThread();
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const projectsStore = useProjectsStore();
		const usersStore = useUsersStore();
		const rootStore = useRootStore();
		const oauth = useCredentialOAuth();
		const connectingItemId = ref();
		const reopenAuthorization = ref();
		let active = true;
		onScopeDispose(() => {
			active = false;
			oauth.cancelAuthorize();
		});
		const { testCredentialInBackground } = useCredentialTestInBackground();
		const { rows, rowSource, credentialsAvailable, isRefreshingWorkflow, isAgentBuilding, getNodeByName: getSavedNodeByName, refreshWorkflow, workflowProjectId, isItemDone, isCredentialConfigured } = useSetupPanelState({
			thread,
			workflowId: () => props.workflowId
		});
		const fetchedProject = ref();
		const credentialProjectId = computed(() => workflowProjectId.value ?? props.projectId ?? (fetchedProject.value?.workflowId === props.workflowId ? fetchedProject.value.projectId : void 0));
		watch(() => workflowProjectId.value || props.projectId ? void 0 : props.workflowId, async (id) => {
			if (!id || fetchedProject.value?.workflowId === id) return;
			try {
				const workflow = await getWorkflow(rootStore.restApiContext, id);
				if (props.workflowId === id) fetchedProject.value = {
					workflowId: id,
					projectId: deriveHomeProject(workflow)?.id
				};
			} catch {}
		}, { immediate: true });
		const isCredentialProjectReady = computed(() => projectsStore.myProjects.some((project) => project.id === credentialProjectId.value));
		watch(credentialProjectId, async (id) => {
			if (id && !isCredentialProjectReady.value) await projectsStore.getMyProjects().catch(() => {});
		}, { immediate: true });
		const actions = useSetupPanelActions({
			workflowId: () => props.workflowId,
			isAgentBuilding,
			onFlushResult: notifyApplyResult,
			onSaved: (workflow) => panelTelemetry.trackSaved(workflow)
		});
		function getNodeByName(name, includePendingParameters = true) {
			const node = getSavedNodeByName(name);
			if (!node) return void 0;
			let credentials = node.credentials;
			for (const { item } of rows.value) {
				if (item.kind !== "credential" || !item.nodeBindings?.some((binding) => binding.nodeName === name)) continue;
				const pending = actions.getPendingCredential(item.id, name);
				if (pending) credentials = {
					...credentials,
					[item.credentialType]: pending
				};
			}
			const changes = includePendingParameters ? actions.getPendingParameterChanges(name) : [];
			if (credentials === node.credentials && changes.length === 0) return node;
			return {
				...node,
				credentials,
				parameters: changes.length ? applySetupParameterChanges(node.parameters, changes) : node.parameters
			};
		}
		const displayedRows = computed(() => rows.value.map((row) => {
			if (row.item.kind === "credential") return actions.getPendingCredential(row.item.id) || row.item.nodeBindings?.some(({ nodeName }) => actions.getPendingCredential(row.item.id, nodeName)) ? {
				...row,
				isDone: isItemDone(row.item, getNodeByName)
			} : row;
			return actions.getPendingParameterChanges(row.item.nodeName).length ? {
				...row,
				isDone: isItemDone(row.item, getNodeByName)
			} : row;
		}));
		const execution = useSetupPanelExecution({
			thread,
			workflowId: () => props.workflowId
		});
		const selectedItemId = ref();
		const setupDismissedKey = computed(() => LOCAL_STORAGE_INSTANCE_AI_SETUP_DISMISSED(usersStore.currentUserId ?? "", thread.id, props.workflowId));
		const setupDismissed = useLocalStorage(setupDismissedKey, false, { writeDefaults: false });
		watch(() => props.workflowId, () => {
			selectedItemId.value = void 0;
			oauth.cancelAuthorize();
			clearDetailState();
			lastDetailId = void 0;
		});
		function nodeType(node) {
			return nodeTypesStore.getNodeType(node.type, node.typeVersion);
		}
		const shownItemIds = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_SETUP_ITEMS(usersStore.currentUserId ?? "", thread.id, props.workflowId), [], {
			writeDefaults: false,
			flush: "sync"
		});
		const credentialsReady = computed(() => credentialsAvailable.value && !isRefreshingWorkflow.value);
		watch([rows, credentialsReady], ([currentRows, ready]) => {
			const added = currentRows.filter((row) => !row.isDone && (row.item.kind === "parameters" || ready) && !shownItemIds.value.includes(row.item.id));
			if (added.length) shownItemIds.value = [...shownItemIds.value, ...added.map((row) => row.item.id)];
		}, {
			immediate: true,
			flush: "sync"
		});
		const groups = computed(() => groupSetupPanelRows(displayedRows.value, {
			workflowId: props.workflowId,
			getNodeByName,
			getNodeType: nodeType
		}).filter((group) => {
			const items = [...group.credential ? [group.credential] : [], ...group.parameters];
			return items.some((row) => shownItemIds.value.includes(row.item.id)) || items.some((row) => !row.isDone && (row.item.kind === "parameters" || credentialsReady.value));
		}));
		const panelTelemetry = useSetupPanelTelemetry({
			workflowId: () => props.workflowId,
			thread,
			rows,
			groups,
			shownItemIds,
			getNodeByName: getSavedNodeByName,
			isItemDone,
			isAgentBuilding,
			ready: () => !setupDismissed.value && credentialsReady.value && (rowSource.value === "derived" || rows.value.length > 0)
		});
		__expose({ getChatTelemetryContext: panelTelemetry.getChatTelemetryContext });
		const selectedGroup = computed(() => groups.value.find((group) => group.id === selectedItemId.value));
		const selectedNodes = computed(() => (selectedGroup.value?.credential?.item.nodeBindings ?? []).flatMap((binding) => {
			const node = getNodeByName(binding.nodeName);
			return node ? [node] : [];
		}));
		function groupById(id) {
			return groups.value.find((group) => group.id === id);
		}
		function groupNodeType(id) {
			const node = groupById(id)?.node;
			return node ? nodeType(node) : null;
		}
		function groupName(group) {
			const item = group.credential?.item;
			if (item) return deriveServiceName(item.setupHint) ?? getAppNameFromNodeName(getAppNameFromCredType(item.appDisplayName ?? credentialsStore.getCredentialTypeByName(item.credentialType)?.displayName ?? item.credentialType));
			return group.node ? getAppNameFromNodeName(nodeType(group.node)?.displayName ?? group.node.name) : i18n.baseText("instanceAi.setupPanel.details");
		}
		const panelItems = computed(() => groups.value.map((group) => {
			const pending = [];
			if (group.credential && !group.credential.isDone) pending.push(i18n.baseText("instanceAi.setupPanel.connection"));
			for (const row of group.parameters) {
				if (row.isDone) continue;
				const node = getNodeByName(row.item.nodeName);
				const properties = node ? nodeType(node)?.properties : void 0;
				for (const name of row.item.parameterNames) {
					const root = name.split(/[.[\]]/)[0];
					pending.push(properties?.find((property) => property.name === root)?.displayName ?? name);
				}
			}
			return {
				id: group.id,
				title: groupName(group),
				hasAction: Boolean(group.credential && !group.credential.isDone && oauth.isOAuthCredentialType(group.credential.item.credentialType) && oauth.canOAuthCredentialQuickConnect(group.credential.item.credentialType) && (connectingItemId.value === group.id || credentialsStore.getUsableCredentialByType(group.credential.item.credentialType).length === 0)),
				completed: (!group.credential || group.credential.isDone) && group.parameters.every((row) => row.isDone),
				subtitle: pending.length ? i18n.baseText("instanceAi.setupPanel.needs", { interpolate: { items: [...new Set(pending)].join(", ") } }) : void 0,
				disabled: group.credential ? !isCredentialProjectReady.value || !credentialsAvailable.value || !credentialsStore.getCredentialTypeByName(group.credential.item.credentialType) : !group.parameters.some((row) => getNodeByName(row.item.nodeName))
			};
		}));
		watch(() => selectedItemId.value && panelItems.value.find((item) => item.id === selectedItemId.value && !item.disabled), (item) => {
			if (selectedItemId.value && !item) {
				selectedItemId.value = void 0;
				clearDetailState();
			}
		});
		const parameterEditors = computed(() => (selectedGroup.value?.parameters ?? []).flatMap((row) => {
			const node = getNodeByName(row.item.nodeName, false);
			return node ? [{
				item: row.item,
				node,
				pendingChanges: actions.getPendingParameterChanges(row.item.nodeName)
			}] : [];
		}));
		const perNodeGroups = shallowReactive(/* @__PURE__ */ new Set());
		const perNodeCredentials = computed(() => {
			const group = selectedGroup.value;
			if (!group?.credential || selectedNodes.value.length < 2) return false;
			if (perNodeGroups.has(group.id)) return true;
			const type = group.credential.item.credentialType;
			return new Set(selectedNodes.value.map((node) => {
				const credential = node.credentials?.[type];
				return credential?.__aiGatewayManaged ? AI_GATEWAY_MANAGED_TAG : credential?.id;
			})).size > 1;
		});
		const detailSections = computed(() => {
			const group = selectedGroup.value;
			if (!group) return [];
			const credential = group.credential?.item;
			const editors = parameterEditors.value.filter(({ item, node }) => {
				const type = nodeType(node);
				if (!type) return false;
				const values = getNodeParameters(type.properties, node.parameters, true, true, node, type) ?? node.parameters;
				return type.properties.some((property) => property.type !== "hidden" && item.parameterNames.some((name) => name.split(/[.[\]]/)[0] === property.name) && displayParameter(values, property, node, type));
			});
			const nodes = credential ? selectedNodes.value : editors.map((editor) => editor.node);
			return [...credential && !perNodeCredentials.value ? [{
				id: group.id,
				title: void 0,
				credential,
				nodes: selectedNodes.value,
				editors: [],
				showParameters: false
			}] : [], ...nodes.filter((node) => perNodeCredentials.value || editors.some((editor) => editor.node.name === node.name)).map((node) => ({
				id: `node:${node.name}`,
				title: nodes.length > 1 ? node.name : void 0,
				credential: credential && perNodeCredentials.value ? {
					...credential,
					id: `${credential.id}:${node.name}`,
					nodeBindings: [{ nodeName: node.name }]
				} : void 0,
				nodes: [node],
				editors: editors.filter((editor) => editor.node.name === node.name),
				showParameters: credential && perNodeCredentials.value ? isCredentialConfigured(node.credentials?.[credential.credentialType]) : !group.credential || group.credential.isDone
			}))].filter((section) => section.credential || section.showParameters && section.editors.length > 0);
		});
		const parameterEditorComponents = useTemplateRef("parameterEditorComponents");
		const showParameterConfirm = computed(() => detailSections.value.some((section) => section.showParameters && section.editors.length > 0));
		const isApplying = ref(false);
		const busyCredentials = shallowReactive(/* @__PURE__ */ new Set());
		const dirtyCredentials = shallowReactive(/* @__PURE__ */ new Set());
		const credentialBusy = computed(() => busyCredentials.size > 0);
		const credentialHasChanges = computed(() => dirtyCredentials.size > 0);
		const dirtyParameters = shallowReactive(/* @__PURE__ */ new Set());
		const requestingExecution = execution.isRunning;
		const isChatBusy = computed(() => thread.isStreaming || thread.isSendingMessage || thread.isAwaitingConfirmation);
		async function onAskForHelp(credential) {
			if (isChatBusy.value) return;
			await thread.sendMessage(buildInstanceAiArtifactCredentialQuestion(credential), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_credential_setup"
				},
				pushRef: rootStore.pushRef,
				handoffContext: buildInstanceAiCredentialHandoffContext(credential)
			});
		}
		const allRowsDone = computed(() => rows.value.length > 0 && rows.value.every((row) => row.isDone));
		const hasChanges = computed(() => credentialHasChanges.value || dirtyParameters.size > 0);
		const activeGroupComplete = computed(() => {
			const group = selectedGroup.value;
			return Boolean(group && (!group.credential || group.credential.isDone) && group.parameters.every((row) => row.isDone));
		});
		const canAutoClose = ref(false);
		const reducedMotion = usePreferredReducedMotion();
		let selectionVersion = 0;
		let lastDetailId;
		const readyToReturn = computed(() => canAutoClose.value && activeGroupComplete.value && !hasChanges.value && !isApplying.value && !actions.isApplying.value && !credentialBusy.value && !isRefreshingWorkflow.value && !connectingItemId.value);
		const { start: scheduleReturn, stop: cancelReturn } = useTimeoutFn(() => {
			if (readyToReturn.value) selectedItemId.value = void 0;
		}, computed(() => reducedMotion.value === "reduce" ? 0 : 650), { immediate: false });
		function clearDetailState() {
			busyCredentials.clear();
			dirtyCredentials.clear();
			dirtyParameters.clear();
		}
		function onDetailClosed() {
			if (selectedItemId.value) return;
			clearDetailState();
			lastDetailId = void 0;
		}
		watch(selectedItemId, (id) => {
			selectionVersion++;
			cancelReturn();
			canAutoClose.value = Boolean(id && !activeGroupComplete.value);
			if (id && id !== lastDetailId) {
				clearDetailState();
				lastDetailId = id;
			}
		}, { flush: "sync" });
		watch(readyToReturn, (ready) => {
			cancelReturn();
			if (ready) scheduleReturn();
		});
		function finishSubmission(result, version, workflowId) {
			if (active && props.workflowId === workflowId && version === selectionVersion && (result === "applied" || result === "noop" || result === "queued")) canAutoClose.value = true;
		}
		const terminalStatus = computed(() => {
			if (!allRowsDone.value || hasChanges.value) return "incomplete";
			if (requestingExecution.value) return "executing";
			if (isAgentBuilding.value) return "incomplete";
			if (rowSource.value !== "derived" || !credentialsReady.value || isApplying.value || actions.isApplying.value || actions.pendingApplyCount.value > 0 || credentialBusy.value || connectingItemId.value) return "validating";
			return "complete";
		});
		watch([
			() => rows.value.some((row) => !row.isDone),
			hasChanges,
			rowSource,
			credentialsReady,
			isAgentBuilding
		], ([pending, dirty, source, ready, building]) => {
			if (dirty || pending && (source === "derived" && ready || building)) setupDismissed.value = false;
		}, { immediate: true });
		async function onExecute() {
			if (terminalStatus.value !== "complete" || isChatBusy.value || requestingExecution.value) return;
			const workflowId = props.workflowId;
			const dismissedKey = setupDismissedKey.value;
			try {
				const result = await execution.executeWorkflow();
				if (!active || !result?.notified) return;
				if (props.workflowId !== workflowId) {
					localStorage.setItem(dismissedKey, "true");
					return;
				}
				if (allRowsDone.value && !isAgentBuilding.value && !hasChanges.value && !actions.isApplying.value && actions.pendingApplyCount.value === 0) {
					setupDismissed.value = true;
					panelTelemetry.trackDismissed("execution_finished");
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.setupPanel.executeError"));
			}
		}
		async function connectFromRow(id) {
			if (connectingItemId.value === id && reopenAuthorization.value) {
				reopenAuthorization.value();
				return;
			}
			const group = groupById(id);
			const item = group?.credential?.item;
			const projectId = credentialProjectId.value;
			if (!group || !item || !projectId || connectingItemId.value) return;
			const workflowId = props.workflowId;
			const nodeName = item.nodeBindings?.find((binding) => getNodeByName(binding.nodeName))?.nodeName;
			const node = nodeName ? getNodeByName(nodeName) : void 0;
			const bind = async (credentialId) => {
				if (!active || props.workflowId !== workflowId) return;
				await onBindCredential(item, credentialId);
				if (active && props.workflowId === workflowId && groupById(id)?.parameters.some((row) => !row.isDone)) selectedItemId.value = id;
			};
			panelTelemetry.trackConnectionStarted(item, "oauth");
			connectingItemId.value = id;
			try {
				const credential = await oauth.createAndAuthorize(item.credentialType, node?.type, {
					projectId,
					workflowId,
					onAuthorizationStarted: (reopen) => {
						reopenAuthorization.value = reopen;
					}
				});
				if (credential) await bind(credential.id);
			} catch (error) {
				if (active) toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			} finally {
				reopenAuthorization.value = void 0;
				connectingItemId.value = void 0;
			}
		}
		async function notifyApplyResult(result, workflowId) {
			if (!active || props.workflowId !== workflowId) return;
			if (result === "error" || result === "conflict") toast.showMessage({
				title: i18n.baseText("instanceAi.setupPanel.applyError"),
				type: "error"
			});
			if (result === "applied" || result === "noop" || result === "dropped" || result === "conflict") await refreshWorkflow();
		}
		async function onBindCredential(item, credentialId) {
			const workflowId = props.workflowId;
			const version = selectedGroup.value?.credential?.item.credentialType === item.credentialType ? selectionVersion : void 0;
			if (credentialId === "__AI_GATEWAY_MANAGED__") {
				const result = await actions.bindCredential(item, {
					id: null,
					name: "",
					__aiGatewayManaged: true
				});
				await notifyApplyResult(result, workflowId);
				panelTelemetry.trackConnectionCompleted(item, null, result);
				finishSubmission(result, version, workflowId);
				return;
			}
			const credential = (credentialsStore.hasUsableCredentialsForScope({ workflowId }) ? credentialsStore.getUsableCredentialById(credentialId) : void 0) ?? credentialsStore.getCredentialById(credentialId);
			if (!credential) return;
			testCredentialInBackground(credential.id, credential.name, item.credentialType);
			const result = await actions.bindCredential(item, {
				id: credential.id,
				name: credential.name
			});
			await notifyApplyResult(result, workflowId);
			panelTelemetry.trackConnectionCompleted(item, credential.id, result);
			finishSubmission(result, version, workflowId);
		}
		async function onConfirmParameters() {
			if (isApplying.value || credentialBusy.value) return;
			const submissions = (parameterEditorComponents.value ?? []).flatMap((editor) => {
				const submission = editor.getSubmission();
				return submission ? [submission] : [];
			});
			if (!submissions.length) return;
			const workflowId = props.workflowId;
			const version = selectionVersion;
			isApplying.value = true;
			try {
				const result = await actions.applyParameterBatch(submissions);
				await notifyApplyResult(result, workflowId);
				finishSubmission(result, version, workflowId);
			} finally {
				isApplying.value = false;
			}
		}
		return (_ctx, _cache) => {
			return !unref(setupDismissed) ? (openBlock(), createBlock(unref(SetupPanel_default), {
				key: __props.workflowId,
				"active-item-id": selectedItemId.value,
				"onUpdate:activeItemId": _cache[0] || (_cache[0] = ($event) => selectedItemId.value = $event),
				items: panelItems.value,
				status: terminalStatus.value,
				"execute-disabled": isChatBusy.value || unref(requestingExecution),
				"data-test-id": "instance-ai-setup-panel",
				onExecute,
				onDetailClosed,
				"onUpdate:overlapHeight": _cache[1] || (_cache[1] = ($event) => emit("update:overlapHeight", $event))
			}, {
				action: withCtx(({ item }) => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "subtle",
					disabled: item.disabled || Boolean(connectingItemId.value && (connectingItemId.value !== item.id || !reopenAuthorization.value)),
					loading: connectingItemId.value === item.id && !reopenAuthorization.value,
					onClick: ($event) => connectFromRow(item.id)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.connect")), 1)]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"onClick"
				])]),
				icon: withCtx(({ item }) => [groupById(item.id)?.credential ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": groupById(item.id)?.credential?.item.credentialType ?? "",
					size: 16
				}, null, 8, ["credential-type-name"])) : groupById(item.id)?.node ? (openBlock(), createBlock(NodeIcon_default, {
					key: 1,
					"node-type": groupNodeType(item.id),
					size: 16
				}, null, 8, ["node-type"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 2,
					icon: "sliders-horizontal",
					size: "small"
				}))]),
				detail: withCtx(({ item }) => [selectedGroup.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.detail)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(detailSections.value, (section) => {
					return openBlock(), createElementBlock("section", {
						key: section.id,
						class: normalizeClass([_ctx.$style.section, { [_ctx.$style.divided]: section.title }])
					}, [
						section.title ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							tag: "h3",
							size: "medium",
							bold: "",
							class: normalizeClass(_ctx.$style.sectionTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(section.title), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						section.credential && credentialProjectId.value ? (openBlock(), createBlock(InstanceAiSetupCredential_default, {
							key: section.credential.id,
							item: section.credential,
							node: section.nodes[0],
							"pending-credential": unref(actions).getPendingCredential(section.credential.id),
							nodes: section.nodes,
							"workflow-id": __props.workflowId,
							"project-id": credentialProjectId.value,
							"help-disabled": isChatBusy.value,
							"allow-per-node": !perNodeCredentials.value && selectedNodes.value.length > 1,
							onSetCredentialsPerNode: ($event) => unref(perNodeGroups).add(item.id),
							onAskForHelp,
							onBindCredential: (credential, id) => selectedItemId.value === item.id && onBindCredential(credential, id),
							"onUpdate:busy": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(busyCredentials).add(section.id) : unref(busyCredentials).delete(section.id)),
							"onUpdate:hasChanges": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(dirtyCredentials).add(section.id) : unref(dirtyCredentials).delete(section.id)),
							onConnectStarted: ($event) => selectedItemId.value === item.id && unref(panelTelemetry).trackConnectionStarted(section.credential, $event)
						}, null, 8, [
							"item",
							"node",
							"pending-credential",
							"nodes",
							"workflow-id",
							"project-id",
							"help-disabled",
							"allow-per-node",
							"onSetCredentialsPerNode",
							"onBindCredential",
							"onUpdate:busy",
							"onUpdate:hasChanges",
							"onConnectStarted"
						])) : createCommentVNode("", true),
						section.showParameters ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(section.editors, (editor) => {
							return openBlock(), createElementBlock("div", { key: editor.item.id }, [createVNode(InstanceAiSetupPanelDetail_default, {
								ref_for: true,
								ref_key: "parameterEditorComponents",
								ref: parameterEditorComponents,
								item: editor.item,
								node: editor.node,
								"workflow-id": __props.workflowId,
								"project-id": credentialProjectId.value,
								"pending-changes": editor.pendingChanges,
								"onUpdate:hasChanges": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(dirtyParameters).add(editor.item.id) : unref(dirtyParameters).delete(editor.item.id))
							}, null, 8, [
								"item",
								"node",
								"workflow-id",
								"project-id",
								"pending-changes",
								"onUpdate:hasChanges"
							])]);
						}), 128)) : createCommentVNode("", true)
					], 2);
				}), 128)), showParameterConfirm.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [createVNode(unref(N8nButton_default), {
					size: "small",
					disabled: unref(dirtyParameters).size === 0 || isApplying.value || credentialBusy.value,
					loading: isApplying.value,
					"data-test-id": "instance-ai-setup-panel-confirm",
					onClick: onConfirmParameters
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(activeGroupComplete.value ? "generic.update" : "generic.confirm")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"active-item-id",
				"items",
				"status",
				"execute-disabled"
			])) : createCommentVNode("", true);
		};
	}
});
var InstanceAiSetupPanel_vue_vue_type_style_index_0_lang_module_default = {
	detail: "_detail_1vx8j_1",
	section: "_section_1vx8j_2",
	divided: "_divided_1vx8j_8",
	sectionTitle: "_sectionTitle_1vx8j_13",
	footer: "_footer_1vx8j_17"
};
var InstanceAiSetupPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiTestAgentPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiTestAgentPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiTestAgentPanel",
	emits: ["generate", "dismiss"],
	setup(__props) {
		/**
		* Post-setup suggestion to test the agent that was just built. Suggests rather
		* than imposes: the dismiss action is a peer of the CTA, not a close affordance
		* tucked in a corner.
		*/
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				"data-test-id": "instance-ai-test-agent-panel"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.head) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrap) }, [createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					size: "medium"
				})], 2), createVNode(unref(N8nText_default), {
					bold: "",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nText_default), {
					step: "xs",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.description")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.options) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					"data-test-id": "instance-ai-test-agent-generate",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("generate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.generate")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"data-test-id": "instance-ai-test-agent-dismiss",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("dismiss"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.dismiss")), 1)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
var InstanceAiTestAgentPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1j9b6_4",
	head: "_head_1j9b6_19",
	iconWrap: "_iconWrap_1j9b6_25",
	options: "_options_1j9b6_32"
};
var InstanceAiTestAgentPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiTestAgentPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiTestAgentPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/ManualEditorButton.vue
var ManualEditorButton_default = /* @__PURE__ */ defineComponent({
	__name: "ManualEditorButton",
	props: {
		tabs: {},
		activeTabId: {}
	},
	setup(__props) {
		const props = __props;
		const store = useOpenWorkflowInAssistantStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const workflowId = computed(() => {
			const tab = props.tabs.find((t) => t.id === props.activeTabId);
			return tab?.type === "workflow" ? tab.id : null;
		});
		async function handleClick() {
			if (workflowId.value === null) return;
			store.trackManualEditorOpened(workflowId.value, typeof route.params.threadId === "string" ? route.params.threadId : void 0);
			await router.push(`/workflow/${workflowId.value}`);
		}
		return (_ctx, _cache) => {
			return unref(store).isTreatment && workflowId.value !== null ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "subtle",
				size: "small",
				label: unref(i18n).baseText("experiments.openWorkflowInAssistant.manualEditor"),
				"data-test-id": "instance-ai-manual-editor-button",
				onClick: handleClick
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPreviewTabBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewTabBar",
	props: {
		tabs: {},
		activeTabId: {},
		isExpanded: {
			type: Boolean,
			default: false
		},
		isExpandDisabled: {
			type: Boolean,
			default: false
		},
		previewToggleLabel: { default: void 0 }
	},
	emits: ["togglePreview", "toggleExpanded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
		const tabListRef = ref(null);
		const sizeToggleLabel = computed(() => i18n.baseText(props.isExpanded ? "instanceAi.previewTabBar.collapse" : "instanceAi.previewTabBar.expand"));
		function handleToggleExpanded() {
			if (props.isExpandDisabled) return;
			emit("toggleExpanded");
		}
		function getTabListElement() {
			const tabList = tabListRef.value;
			if (tabList instanceof HTMLElement) return tabList;
			return tabList?.$el ?? null;
		}
		function scrollTabIntoView(tabId) {
			const tabList = getTabListElement();
			if (!tabList) return;
			const activeTab = Array.from(tabList.querySelectorAll("[data-tab-id]")).find((tab) => tab.dataset.tabId === tabId);
			if (!activeTab) return;
			const tabLeft = activeTab.offsetLeft;
			const tabRight = tabLeft + activeTab.offsetWidth;
			const visibleLeft = tabList.scrollLeft;
			const visibleRight = visibleLeft + tabList.clientWidth;
			const nextScrollLeft = tabLeft < visibleLeft ? tabLeft : tabRight > visibleRight ? tabRight - tabList.clientWidth : void 0;
			if (nextScrollLeft === void 0) return;
			if (typeof tabList.scrollTo === "function") tabList.scrollTo({
				left: nextScrollLeft,
				behavior: "smooth"
			});
			else tabList.scrollLeft = nextScrollLeft;
		}
		watch(() => props.activeTabId, (tabId) => {
			if (!tabId) return;
			nextTick(() => {
				scrollTabIntoView(tabId);
			});
		});
		function tabHref(tab) {
			if (tab.type === "workflow") return `/workflow/${tab.id}`;
			if (tab.type === "data-table") return tab.projectId ? `/projects/${tab.projectId}/datatables/${tab.id}` : "/home/datatables";
			if (tab.type === "agent") return tab.projectId ? `/projects/${tab.projectId}/agents/${tab.id}` : "/home/agents";
		}
		function handleOpenInEditor(tab) {
			const href = tabHref(tab);
			if (!href) return;
			window.open(href, "_blank", "noopener");
		}
		async function handleCopyLink(tab) {
			const href = tabHref(tab);
			if (!href) return;
			const url = new URL(href, window.location.origin).toString();
			await clipboard.copy(url);
			toast.showMessage({
				title: i18n.baseText("generic.copiedToClipboard"),
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [
				__props.previewToggleLabel ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "panel-right",
					variant: "ghost",
					size: "medium",
					"aria-label": __props.previewToggleLabel,
					title: __props.previewToggleLabel,
					"aria-pressed": true,
					"data-test-id": "instance-ai-artifacts-preview-toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("togglePreview"))
				}, null, 8, ["aria-label", "title"])) : createCommentVNode("", true),
				createVNode(unref(TabsList_default), {
					ref_key: "tabListRef",
					ref: tabListRef,
					"aria-label": unref(i18n).baseText("instanceAi.artifactsPanel.title"),
					class: normalizeClass(_ctx.$style.tabList)
				}, {
					default: withCtx(() => [createVNode(unref(TabsIndicator_default), { class: normalizeClass(_ctx.$style.tabsIndicator) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabsIndicatorBar) }, null, 2)]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
						return openBlock(), createBlock(unref(ContextMenuRoot_default), { key: tab.id }, {
							default: withCtx(() => [createVNode(unref(ContextMenuTrigger_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
									value: tab.id,
									"data-tab-id": tab.id,
									class: normalizeClass(_ctx.$style.tab)
								}, {
									default: withCtx(() => [tab.building ? (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 0,
										icon: "spinner",
										size: "large",
										spin: "",
										"data-test-id": "instance-ai-tab-building-spinner"
									})) : (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 1,
										icon: tab.icon,
										size: "large"
									}, null, 8, ["icon"])), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(tab.name), 3)]),
									_: 2
								}, 1032, [
									"value",
									"data-tab-id",
									"class"
								])]),
								_: 2
							}, 1024), createVNode(unref(ContextMenuPortal_default), null, {
								default: withCtx(() => [createVNode(unref(ContextMenuContent_default), { class: normalizeClass(_ctx.$style.contextMenu) }, {
									default: withCtx(() => [createVNode(unref(ContextMenuItem_default), {
										class: normalizeClass(_ctx.$style.contextMenuItem),
										onSelect: ($event) => handleOpenInEditor(tab)
									}, {
										default: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "external-link",
											size: "small"
										}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.openInEditor")), 1)]),
										_: 1
									}, 8, ["class", "onSelect"]), createVNode(unref(ContextMenuItem_default), {
										class: normalizeClass(_ctx.$style.contextMenuItem),
										onSelect: ($event) => handleCopyLink(tab)
									}, {
										default: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "link",
											size: "small"
										}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.copyLink")), 1)]),
										_: 1
									}, 8, ["class", "onSelect"])]),
									_: 2
								}, 1032, ["class"])]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024);
					}), 128))]),
					_: 1
				}, 8, ["aria-label", "class"]),
				createVNode(ManualEditorButton_default, {
					tabs: __props.tabs,
					"active-tab-id": __props.activeTabId
				}, null, 8, ["tabs", "active-tab-id"]),
				createVNode(unref(N8nIconButton_default), {
					icon: __props.isExpanded ? "minimize-2" : "maximize-2",
					variant: "ghost",
					size: "medium",
					disabled: __props.isExpandDisabled,
					"aria-label": sizeToggleLabel.value,
					title: __props.isExpandDisabled ? void 0 : sizeToggleLabel.value,
					"data-test-id": "instance-ai-preview-expand-toggle",
					onClick: handleToggleExpanded
				}, null, 8, [
					"icon",
					"disabled",
					"aria-label",
					"title"
				])
			], 2);
		};
	}
});
var InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_chzll_14",
	tabList: "_tabList_chzll_24",
	scrollfade: "_scrollfade_chzll_1",
	tab: "_tab_chzll_24",
	label: "_label_chzll_67",
	tabsIndicator: "_tabsIndicator_chzll_75",
	tabsIndicatorBar: "_tabsIndicatorBar_chzll_86",
	contextMenu: "_contextMenu_chzll_93",
	contextMenuItem: "_contextMenuItem_chzll_103"
};
var InstanceAiPreviewTabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/OpenWorkflowInAssistantNotification.vue?vue&type=script&setup=true&lang.ts
var OpenWorkflowInAssistantNotification_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OpenWorkflowInAssistantNotification",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useOpenWorkflowInAssistantStore();
		const i18n = useI18n();
		const router = useRouter();
		const visible = computed(() => store.isNotificationVisibleFor(props.threadId));
		async function onSettingsLink() {
			store.closeNotification("settings_link");
			store.requestSettingHighlight();
			await router.push({ name: INSTANCE_AI_SETTINGS_VIEW });
		}
		return (_ctx, _cache) => {
			return visible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.notification),
				"data-test-id": "open-in-assistant-notification"
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					color: "primary",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.text")) + " ", 1), createVNode(unref(N8nLink_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.settingsLink),
						"data-test-id": "open-in-assistant-notification-settings-link",
						onClick: onSettingsLink
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.settingsLink")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})], 2),
				createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.close),
					"aria-label": unref(i18n).baseText("generic.close"),
					"data-test-id": "open-in-assistant-notification-close",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(store).closeNotification("close"))
				}, null, 8, ["class", "aria-label"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					label: unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.neverShowAgain"),
					"data-test-id": "open-in-assistant-notification-never",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(store).neverShowAgain())
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.gotIt"),
					"data-test-id": "open-in-assistant-notification-got-it",
					onClick: _cache[2] || (_cache[2] = ($event) => unref(store).closeNotification("got_it"))
				}, null, 8, ["label"])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/OpenWorkflowInAssistantNotification.vue?vue&type=style&index=0&lang.module.scss
var notification = "_notification_1wbsv_1";
var icon = "_icon_1wbsv_29";
var content$2 = "_content_1wbsv_33";
var settingsLink = "_settingsLink_1wbsv_39";
var close = "_close_1wbsv_43";
var actions = "_actions_1wbsv_47";
var OpenWorkflowInAssistantNotification_vue_vue_type_style_index_0_lang_module_default = {
	notification,
	"slide-in": "_slide-in_1wbsv_1",
	icon,
	content: content$2,
	settingsLink,
	close,
	actions
};
var OpenWorkflowInAssistantNotification_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OpenWorkflowInAssistantNotification_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OpenWorkflowInAssistantNotification_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHostBody.vue?vue&type=script&setup=true&lang.ts
var WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHostBody",
	props: {
		workflowId: {},
		refreshKey: {},
		initialWorkflow: {},
		initialExecution: {}
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const currentWorkflowDocumentStore = injectStrict(WorkflowDocumentStoreKey);
		const canvasStore = useCanvasStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const workflowSaveStore = useWorkflowSaveStore();
		const { isLoading, initializeData, initializeWorkflow, openWorkflow, cleanup } = useWorkflowInitialization();
		/**
		* Display-only counterpart of the editor's debug-mode execution loading: shows
		* the hand-off execution snapshot on the canvas. Seeds its per-execution store
		* and marks it the displayed execution — no fetch, since the editor already had
		* the run data and handed it over. A live or pending run always wins — it owns
		* `activeExecutionId`, which we never touch here. Unlike the editor's
		* `applyExecutionData` it has no debug side effects (node matching, pin-data).
		*/
		function showInitialExecution() {
			if (!props.initialExecution) return;
			const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(props.workflowId));
			if (executionState.activeExecutionId !== void 0) return;
			const { id } = props.initialExecution;
			useExecutionDataStore(createExecutionDataId(id)).setExecution(props.initialExecution);
			executionState.setDisplayedExecutionId(id);
		}
		async function loadWorkflow(force) {
			if (!force && props.initialWorkflow) {
				await openWorkflow(props.initialWorkflow);
				isLoading.value = false;
			} else await initializeWorkflow(force);
			if (currentWorkflowDocumentStore.value) emit("workflow-loaded", props.workflowId);
		}
		onMounted(async () => {
			await initializeData();
			await loadWorkflow(false);
			showInitialExecution();
			emit("ready");
		});
		watch(() => [props.workflowId, props.refreshKey], async () => {
			await loadWorkflow(true);
		});
		onBeforeUnmount(() => {
			cleanup();
			nodeCreatorStore.isCreateNodeActive = false;
			canvasStore.setHasRangeSelection(false);
			canvasStore.newNodeInsertPosition = null;
			workflowSaveStore.reset();
		});
		function requestFitView() {
			canvasEventBus.emit("fitView");
		}
		__expose({ requestFitView });
		const isReady = computed(() => !isLoading.value && !!currentWorkflowDocumentStore.value);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-canvas-host"
			}, [isReady.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(MainHeader_default, { class: normalizeClass(_ctx.$style.header) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvas) }, [createVNode(NodeView_default)], 2),
				createVNode(LogsPanel_default, { class: normalizeClass(_ctx.$style.logs) }, null, 8, ["class"])
			], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_8mfox_1",
	header: "_header_8mfox_10",
	canvas: "_canvas_8mfox_14",
	logs: "_logs_8mfox_20",
	centerState: "_centerState_8mfox_24"
};
var WorkflowCanvasHostBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHost.vue
var WorkflowCanvasHost_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHost",
	props: {
		workflowId: {},
		refreshKey: { default: 0 },
		initialWorkflow: { default: void 0 },
		initialExecution: { default: void 0 }
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		provide(WorkflowIdKey, computed(() => props.workflowId));
		provide(WorkflowDocumentStoreKey, shallowRef(null));
		const bodyRef = shallowRef(null);
		function requestFitView() {
			bodyRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowCanvasHostBody_default, {
				ref_key: "bodyRef",
				ref: bodyRef,
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": __props.initialWorkflow,
				"initial-execution": __props.initialExecution,
				onReady: _cache[0] || (_cache[0] = ($event) => emit("ready")),
				onWorkflowLoaded: _cache[1] || (_cache[1] = (id) => emit("workflow-loaded", id))
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiWorkflowPreviewExecution.ts
function hasPinData(pinData) {
	return pinData !== void 0 && Object.keys(pinData).length > 0;
}
function normalizeExecutionPinData(execution) {
	const data = execution.data;
	const resultData = data?.resultData;
	const workflowPinData = execution.workflowData.pinData;
	if (!data || !resultData || !hasPinData(workflowPinData) || hasPinData(resultData.pinData)) return execution;
	return {
		...execution,
		data: {
			...data,
			resultData: {
				...resultData,
				pinData: workflowPinData
			}
		}
	};
}
function useInstanceAiWorkflowPreviewExecution(options) {
	const pushStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const logsStore = useLogsStore();
	const aiSimulatedExecutionsStore = useAiSimulatedExecutionsStore();
	const thread = useThread();
	const latestAgentExecution = shallowRef();
	const supersededAgentExecutionId = shallowRef(null);
	let latestExecutionLoadRequest = 0;
	function applyExecution(execution) {
		const workflowId = options.workflowId();
		if (execution.workflowId !== workflowId) return false;
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		const activeExecutionId = executionState.activeExecutionId;
		if (activeExecutionId === null) return false;
		if (typeof activeExecutionId === "string" && activeExecutionId !== execution.id) return false;
		executionState.setWorkflowExecutionData(normalizeExecutionPinData(execution));
		return true;
	}
	function hasManualExecution() {
		return thread.getRememberedManualExecution(options.workflowId()) !== void 0;
	}
	async function fetchPreviewExecution(executionId) {
		const request = ++latestExecutionLoadRequest;
		let execution;
		try {
			execution = await workflowsStore.fetchExecutionDataById(executionId);
		} catch {
			return;
		}
		if (request !== latestExecutionLoadRequest) return;
		if (!execution || execution.workflowId !== options.workflowId()) return;
		return normalizeExecutionPinData(execution);
	}
	function restoreLatestAgentExecution() {
		if (hasManualExecution()) return;
		const execution = latestAgentExecution.value;
		if (!execution) return;
		if (supersededAgentExecutionId.value === execution.id) return;
		applyExecution(execution);
	}
	async function showExecutionResult(executionResult) {
		if (!executionResult) return;
		if (executionResult.simulatedNodeNames?.length) aiSimulatedExecutionsStore.markSimulatedNodes(executionResult.executionId, executionResult.simulatedNodeNames);
		if (hasManualExecution()) return;
		if (supersededAgentExecutionId.value === executionResult.executionId) return;
		if (latestAgentExecution.value?.id === executionResult.executionId) {
			applyExecution(latestAgentExecution.value);
			return;
		}
		const execution = await fetchPreviewExecution(executionResult.executionId);
		if (!execution) return;
		latestAgentExecution.value = execution;
		if (supersededAgentExecutionId.value !== execution.id) applyExecution(execution);
	}
	async function restoreManualExecution(executionId) {
		const execution = await fetchPreviewExecution(executionId);
		if (execution) applyExecution(execution);
	}
	function restoreExecutionResult() {
		const manual = thread.getRememberedManualExecution(options.workflowId());
		if (manual && options.executionResult()?.executionId === manual.agentExecutionId) {
			restoreManualExecution(manual.executionId);
			return;
		}
		if (manual) thread.forgetManualExecution(options.workflowId());
		showExecutionResult(options.executionResult());
	}
	const removeExecutionStartedListener = pushStore.addEventListener((event) => {
		if (event.type !== "executionStarted") return;
		if (event.data.workflowId !== options.workflowId()) return;
		logsStore.toggleOpen(true);
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(options.workflowId()));
		if (event.data.source !== "instance_ai") {
			thread.rememberManualExecution(options.workflowId(), event.data.executionId, options.executionResult()?.executionId);
			supersededAgentExecutionId.value = options.executionResult()?.executionId ?? null;
			return;
		}
		thread.forgetManualExecution(options.workflowId());
		if (typeof executionState.activeExecutionId === "string" && executionState.activeExecutionId !== event.data.executionId) return;
		executionState.setActiveExecutionId(null);
	});
	const removeExecutionFinishedListener = pushStore.addEventListener((event) => {
		if (event.type !== "executionFinished") return;
		if (event.data.workflowId !== options.workflowId()) return;
		if (event.data.status !== "error" && event.data.status !== "crashed") return;
		if (event.data.source === "instance_ai") return;
		options.reportWorkflowFailures(event.data.executionId, event.data.workflowId);
	});
	watch(() => [options.workflowId(), options.executionResult()?.executionId], () => {
		showExecutionResult(options.executionResult());
	}, { immediate: true });
	watch(() => {
		const workflowId = options.workflowId();
		return [workflowId, useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId)).activeExecutionId];
	}, () => {
		restoreLatestAgentExecution();
	});
	onBeforeUnmount(() => {
		removeExecutionStartedListener();
		removeExecutionFinishedListener();
	});
	return { restoreExecutionResult };
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowPreview",
	props: {
		workflowId: {},
		initialNodeId: { default: void 0 },
		refreshKey: { default: 0 },
		executionResult: { default: void 0 }
	},
	emits: ["initial-node-id-consumed", "workflow-failures"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hostRef = useTemplateRef("host");
		function requestFitView() {
			hostRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		function collectNodeErrors(runData) {
			const errors = [];
			for (const [nodeName, tasks] of Object.entries(runData ?? {})) {
				const error = tasks?.at(-1)?.error;
				if (!error) continue;
				const description = error.description ? ` (${error.description})` : "";
				errors.push({
					nodeName,
					errorMessage: `${error.message ?? "Unknown error"}${description}`
				});
			}
			return errors;
		}
		function collectValidationIssues(workflowId) {
			const docStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
			const errors = [];
			for (const node of docStore.allNodes) {
				if (!node.issues) continue;
				const messages = nodeIssuesToString(node.issues, node);
				if (messages.length === 0) continue;
				errors.push({
					nodeName: node.name,
					errorMessage: messages.join(" ")
				});
			}
			return errors;
		}
		function reportWorkflowFailures(executionId, workflowId) {
			let errors = collectNodeErrors(useExecutionDataStore(createExecutionDataId(executionId)).executionRunData);
			if (errors.length === 0) errors = collectValidationIssues(workflowId);
			if (errors.length === 0) return;
			emit("workflow-failures", {
				workflowId,
				executionId,
				errors
			});
		}
		const { restoreExecutionResult } = useInstanceAiWorkflowPreviewExecution({
			workflowId: () => props.workflowId,
			executionResult: () => props.executionResult,
			reportWorkflowFailures
		});
		let pendingInitialNodeId = props.initialNodeId;
		function handleWorkflowLoaded(workflowId) {
			restoreExecutionResult();
			const nodeId = pendingInitialNodeId;
			pendingInitialNodeId = void 0;
			if (!nodeId) return;
			emit("initial-node-id-consumed");
			const documentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
			const node = documentStore.getNodeById(nodeId);
			if (!node) return;
			useNDVStore(documentStore.documentId).setActiveNodeName(node.name, "other");
		}
		const thread = useThread();
		const isAgentWorking = useIsAgentWorking();
		const settingsStore = useInstanceAiSettingsStore();
		const handoff = thread.consumePendingHandoff(props.workflowId);
		const initialWorkflow = handoff?.workflow;
		const initialExecution = handoff?.execution;
		const isAgentEditingThisWorkflow = computed(() => {
			for (const message of thread.messages) {
				if (!message.agentTree) continue;
				if (isAgentEditingWorkflow(message.agentTree, props.workflowId)) return true;
			}
			return false;
		});
		provide(EditorEnabledFeaturesKey, computed(() => ({
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			readOnly: isAgentWorking.value || isAgentEditingThisWorkflow.value,
			executionSuccessToasts: false,
			executionErrorToasts: false,
			executionButtonType: "secondary",
			credentialSetupWarnings: settingsStore.isInstanceAiSetupPanelEnabled
		})));
		const rootStore = useRootStore();
		provide(InstanceAiEditorCapabilityKey, { openCredential: async (credential) => {
			thread.sendMessage(buildInstanceAiArtifactCredentialQuestion(credential), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_credential_setup"
				},
				pushRef: rootStore.pushRef,
				handoffContext: buildInstanceAiCredentialHandoffContext(credential)
			});
			return true;
		} });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(WorkflowCanvasHost_default, {
				ref: "host",
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": unref(initialWorkflow),
				"initial-execution": unref(initialExecution),
				onWorkflowLoaded: handleWorkflowLoaded
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			])], 2);
		};
	}
});
var InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default = { content: "_content_x1wv5_1" };
var InstanceAiWorkflowPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/fixWithAi.ts
function buildFixWithAiPrompt(context) {
	const i18n = useI18n();
	if (context.errors.length === 1) {
		const { nodeName, errorMessage } = context.errors[0];
		if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.singleInWorkflow", { interpolate: {
			nodeName,
			errorMessage,
			workflowName: context.workflowName
		} });
		return i18n.baseText("instanceAi.fixWithAi.prompt.single", { interpolate: {
			nodeName,
			errorMessage
		} });
	}
	const errorList = context.errors.map(({ nodeName, errorMessage }) => i18n.baseText("instanceAi.fixWithAi.prompt.errorLine", { interpolate: {
		nodeName,
		errorMessage
	} })).join("\n");
	if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.multipleInWorkflow", { interpolate: {
		errorList,
		workflowName: context.workflowName
	} });
	return i18n.baseText("instanceAi.fixWithAi.prompt.multiple", { interpolate: { errorList } });
}
//#endregion
//#region src/features/ai/instanceAi/testAgentOffer.ts
/**
* Dismissal key for the "test your agent" suggestion, stored alongside the
* handoff-context keys in `dismissedContextKeys`. Scoped per agent so
* dismissing it for one agent doesn't suppress it for another built later in
* the same thread.
*/
function testAgentOfferKey(agentId) {
	return `test-agent:${agentId}`;
}
/**
* Whether an agent is set up enough to be worth testing.
*
* A model alone isn't enough — an agent with no tools and no skills has almost
* no behaviour to get wrong, so generated cases would only exercise the model's
* prose. Requiring one capability is what makes the suggestion land at the
* moment the design describes ("your agent is set up") rather than the moment
* the row was created.
*/
function isAgentWorthTesting(summary) {
	if (!summary?.model) return false;
	return summary.tools.length + summary.skills.length > 0;
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDataTablePreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDataTablePreview",
	props: {
		dataTableId: {},
		projectId: {},
		refreshKey: { default: 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const dataTableStore = useDataTableStore();
		const sourceControlStore = useSourceControlStore();
		const dataTable = ref(null);
		const isLoading = ref(false);
		const fetchError = ref(null);
		const isAgentWorking = useIsAgentWorking();
		const isReadOnly = computed(() => isAgentWorking.value || sourceControlStore.preferences.branchReadOnly);
		async function fetchDataTable(id, projectId) {
			const isRefresh = dataTable.value?.id === id;
			fetchError.value = null;
			if (!isRefresh) {
				isLoading.value = true;
				dataTable.value = null;
			}
			try {
				const result = await dataTableStore.fetchDataTableDetails(id, projectId);
				dataTable.value = result ?? null;
				if (!result) fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} catch {
				dataTable.value = null;
				fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} finally {
				isLoading.value = false;
			}
		}
		watch(() => [props.dataTableId, props.refreshKey], async ([id]) => {
			if (id && props.projectId) await fetchDataTable(id, props.projectId);
			else {
				dataTable.value = null;
				fetchError.value = null;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [
				fetchError.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(fetchError.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				dataTable.value ? (openBlock(), createBlock(DataTableTable_default, {
					key: `${props.refreshKey}-${isReadOnly.value}`,
					"data-table": dataTable.value,
					"read-only": isReadOnly.value
				}, null, 8, ["data-table", "read-only"])) : createCommentVNode("", true),
				isLoading.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "loader-circle",
					size: 80,
					spin: ""
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1347i_1",
	centerState: "_centerState_1347i_8"
};
var InstanceAiDataTablePreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiAgentPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiAgentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiAgentPreview",
	props: {
		projectId: {},
		agentId: {},
		previewSessionId: {},
		previewOpen: { type: Boolean },
		pending: { type: Boolean }
	},
	emits: ["preview-open-change", "assistant-handoff"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const thread = useThread();
		const instanceAiStore = useInstanceAiStore();
		const rootStore = useRootStore();
		/**
		* Props of an unmounted instance keep their last values, so a target comparison
		* alone cannot tell "still showing this artifact" from "torn down while the
		* request was in flight". Both must be false before a response touches shared
		* thread state.
		*/
		let mounted = true;
		onBeforeUnmount(() => {
			mounted = false;
		});
		const isAgentBuilding = computed(() => {
			for (const message of thread.messages) {
				if (!message.agentTree) continue;
				if (isAgentEditingAgent(message.agentTree, props.agentId)) return true;
			}
			return false;
		});
		async function syncAgentTarget(name) {
			const metadata = instanceAiStore.getThreadMetadata(thread.id);
			const target = getAgentBuilderTargetFromThreadMetadata(metadata);
			const pendingTarget = getPendingAgentTargetFromThreadMetadata(metadata);
			if (target?.agentId === props.agentId && target.projectId === props.projectId && target.name === name && !pendingTarget) return;
			await instanceAiStore.updateThreadMetadata(thread.id, {
				[INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: null,
				[INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
					agentId: props.agentId,
					projectId: props.projectId,
					name
				}
			});
		}
		/**
		* Persist the pending artifact: one request creates (or adopts, when the chat
		* already created it under the same id) the agent and replaces this thread's
		* pending marker with the bound target. The builder treats resolution as the
		* acknowledgement, so the binding is durable before it stops drafting.
		*/
		async function persistAgent(name) {
			const target = {
				projectId: props.projectId,
				agentId: props.agentId
			};
			const { agent, thread: updatedThread } = await persistPendingAgent(rootStore.restApiContext, thread.id, {
				...target,
				name
			});
			if (mounted && props.projectId === target.projectId && props.agentId === target.agentId) instanceAiStore.setThreadMetadata(thread.id, updatedThread.metadata);
			return agent;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createVNode(Transition, { name: "agent-building-indicator" }, {
				default: withCtx(() => [isAgentBuilding.value ? (openBlock(), createBlock(AgentBuildingIndicator_default, { key: 0 })) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(AgentBuilderView_default, {
				"artifact-mode": "",
				"artifact-project-id": props.projectId,
				"artifact-agent-id": props.agentId,
				"artifact-preview-session-id": props.previewSessionId,
				"artifact-preview-open": props.previewOpen,
				"artifact-agent-pending": props.pending,
				"artifact-editing-locked": isAgentBuilding.value,
				"artifact-persist-agent": persistAgent,
				onPreviewOpenChange: _cache[0] || (_cache[0] = ($event) => emit("preview-open-change", $event)),
				onAssistantHandoff: _cache[1] || (_cache[1] = ($event) => emit("assistant-handoff", $event)),
				onNameSaved: syncAgentTarget
			}, null, 8, [
				"artifact-project-id",
				"artifact-agent-id",
				"artifact-preview-session-id",
				"artifact-preview-open",
				"artifact-agent-pending",
				"artifact-editing-locked"
			])], 2);
		};
	}
});
var InstanceAiAgentPreview_vue_vue_type_style_index_0_lang_module_default = { root: "_root_1tkty_1" };
var InstanceAiAgentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiAgentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiAgentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiThreadView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-layout-animated"];
var _hoisted_2 = ["data-layout-transitions-enabled"];
var _hoisted_3 = ["data-expanded"];
var MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL = 900;
var MIN_SPLIT_PANEL_WIDTH = 400;
var DEFAULT_CHAT_PANEL_CONTENT_WIDTH = 800;
var AGENT_PREVIEW_CHAT_MIN_WIDTH = 320;
var AGENT_PREVIEW_CHAT_PREFERRED_WIDTH = 480;
var AGENT_PREVIEW_CHAT_MAX_RATIO = .5;
/** Keep the agent chat readable without using more than half of its preview panel. */
var InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadView",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const thread = provideThread(props.threadId);
		const rootStore = useRootStore();
		const i18n = useI18n();
		const router = useRouter();
		const { width: windowWidth } = useWindowSize();
		const { isCollapsed: isMainSidebarCollapsed, sidebarWidth: mainSidebarWidth } = useSidebarLayout();
		const toast = useToast();
		const conversationRef = useTemplateRef("conversation");
		const handoffContext = computed(() => conversationRef.value?.pendingComposerContext ?? null);
		function onThreadMissing() {
			if (router.currentRoute.value.params.threadId !== props.threadId) return;
			router.replace({ name: INSTANCE_AI_VIEW });
		}
		function onAgentAttachmentRestored(attachment) {
			preview.openAgentPreview(attachment.id, attachment.projectId);
		}
		const failedRun = ref(null);
		const dismissedExecutionId = ref(null);
		const isChatInProgress = computed(() => thread.isStreaming || thread.isSendingMessage || thread.isAwaitingConfirmation);
		const activeFixWithAiOffer = computed(() => {
			const run = failedRun.value;
			if (!run) return null;
			if (run.executionId === dismissedExecutionId.value) return null;
			if (isChatInProgress.value) return null;
			return {
				...run,
				workflowName: thread.producedArtifacts.get(run.workflowId)?.name
			};
		});
		const isAgentEvalsEnabled = useAgentEvalsFlag();
		const agentEvalsStore = useAgentEvalsStore();
		const isAgentWorking = useIsAgentWorking(thread);
		const agentBuilderTarget = computed(() => getAgentBuilderTargetFromThreadMetadata(store.getThreadMetadata(thread.id)));
		/**
		* The agent this thread would offer to test, before the checks that need its
		* capabilities. Resolves to null for the conditions we can decide without a
		* network call — flag off, nothing built, already dismissed — so the capability
		* summary is never fetched for a card the user will not be shown.
		*/
		const testAgentOfferCandidate = computed(() => {
			if (!isAgentEvalsEnabled.value) return null;
			const target = agentBuilderTarget.value;
			if (!target) return null;
			return new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id))).has(testAgentOfferKey(target.agentId)) ? null : target;
		});
		const offerAgentId = computed(() => testAgentOfferCandidate.value?.agentId ?? "");
		const { summary: offerAgentSummary } = useAgentCapabilitySummary(computed(() => testAgentOfferCandidate.value?.projectId ?? ""), offerAgentId);
		const activeTestAgentOffer = computed(() => {
			const target = testAgentOfferCandidate.value;
			if (!target) return null;
			if (isAgentWorking.value) return null;
			if (agentEvalsStore.isLoaded(target.agentId) && agentEvalsStore.getDatasets(target.agentId).length) return null;
			if (!isAgentWorthTesting(offerAgentSummary.value)) return null;
			return target;
		});
		const currentThreadTitle = computed(() => getThreadDisplayTitle(store.threads.find((t) => t.id === props.threadId), thread.messages));
		const isOnboardingChromeHidden = computed(() => store.isOnboardingChromeHidden(props.threadId));
		const documentTitle = useDocumentTitle();
		watch(currentThreadTitle, (title) => documentTitle.set(title ?? i18n.baseText("instanceAi.view.title")), { immediate: true });
		const persistedArtifactPreviewOpen = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_ARTIFACT_PREVIEW_OPEN(props.threadId), null, {
			serializer: StorageSerializers.boolean,
			writeDefaults: false,
			flush: "sync"
		});
		const preview = useCanvasPreview({
			thread,
			threadId: () => props.threadId,
			initialAgentId: () => getAgentBuilderTargetFromThreadMetadata(store.getThreadMetadata(props.threadId))?.agentId,
			previewOpenState: () => persistedArtifactPreviewOpen.value ?? void 0,
			onPreviewOpenChange: (open) => {
				persistedArtifactPreviewOpen.value = open;
			}
		});
		watch([() => preview.activeTabId.value, () => preview.isPreviewVisible.value], ([tabId, previewVisible]) => {
			thread.setActiveArtifactId(previewVisible ? tabId : void 0);
		}, { immediate: true });
		const setupPanelWorkflowId = computed(() => {
			if (!settingsStore.isInstanceAiSetupPanelEnabled) return void 0;
			const active = preview.activeWorkflowId.value;
			if (preview.activeTabId.value) return active ?? void 0;
			let latest;
			for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow") latest = entry.id;
			return latest ?? thread.latestSetupWorkflowId;
		});
		const setupPanelProjectId = computed(() => setupPanelWorkflowId.value ? thread.producedArtifacts.get(setupPanelWorkflowId.value)?.projectId : void 0);
		const setupOverlapHeight = ref(0);
		const setupPanelRef = useTemplateRef("setupPanel");
		onUnmounted(thread.registerSetupChatTelemetryContext(() => {
			const context = setupPanelRef.value?.getChatTelemetryContext();
			return context?.workflow_id === setupPanelWorkflowId.value ? context : void 0;
		}));
		const agentReturnContext = useAgentReturnContextStore().consumePendingArtifactReturn();
		const agentReturnWorkflowId = agentReturnContext?.workflowId;
		const agentReturnNodeId = ref(agentReturnContext?.nodeId);
		if (agentReturnWorkflowId) preview.openWorkflowPreview(agentReturnWorkflowId);
		function consumeAgentReturnNodeId() {
			agentReturnNodeId.value = void 0;
		}
		function openAgentChatPreview(agentId, projectId) {
			preview.openAgentPreview(agentId, projectId);
			isAgentPreviewDockOpen.value = true;
			return true;
		}
		const activeAgentPreviewSessionId = computed(() => {
			const context = handoffContext.value;
			if (context?.source === "agent-preview" && context.agentId === preview.activeAgentId.value) return context.threadId;
			const metadata = store.getThreadMetadata(props.threadId);
			const persisted = getAgentPreviewViewFromThreadMetadata(metadata) ?? getAgentPreviewSessionFromThreadMetadata(metadata);
			return persisted?.agentId === preview.activeAgentId.value ? persisted.threadId : void 0;
		});
		provide("openWorkflowPreview", preview.openWorkflowPreview);
		provide("openDataTablePreview", preview.openDataTablePreview);
		provide("openAgentPreview", preview.openAgentPreview);
		provide("openAgentChatPreview", openAgentChatPreview);
		provide("pendingComposerContext", handoffContext);
		provide("dismissPendingComposerContext", (key) => conversationRef.value?.dismissPendingComposerContext(key) ?? false);
		const showDebugPanel = ref(false);
		const isDebugEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true");
		const hasPreviewTabs = computed(() => preview.allArtifactTabs.value.length > 0);
		const isArtifactsPanelRevealed = ref(false);
		const isArtifactsPanelDismissedInLayout = ref(false);
		const artifactsPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const previewPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const isArtifactsPanelTransitionEnabled = artifactsPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitionEnabled = previewPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitioning = ref(false);
		const artifactsPreviewToggleLabel = computed(() => i18n.baseText(preview.isPreviewVisible.value ? "instanceAi.artifactsPanel.hidePreview" : "instanceAi.artifactsPanel.showPreview"));
		const artifactsPanelToggleLabel = computed(() => i18n.baseText(showArtifactsPanel.value ? "instanceAi.artifactsPanel.hidePanel" : "instanceAi.artifactsPanel.showPanel"));
		const artifactsPanelTransitionName = computed(() => isPreviewPanelTransitioning.value ? "artifacts-panel-preview" : "artifacts-panel-fade");
		function toggleArtifactsPreview() {
			if (preview.isPreviewVisible.value) {
				preview.closePreview();
				return;
			}
			const tabToOpen = preview.allArtifactTabs.value.find((tab) => tab.id === preview.activeTabId.value) ?? preview.allArtifactTabs.value[0];
			if (tabToOpen) preview.selectTab(tabToOpen.id);
		}
		function toggleArtifactsPanel() {
			if (!canShowArtifactsPanel.value || preview.isPreviewVisible.value) return;
			if (showArtifactsPanel.value) {
				if (isArtifactsPanelInLayout.value) {
					isArtifactsPanelDismissedInLayout.value = true;
					return;
				}
				isArtifactsPanelRevealed.value = false;
				return;
			}
			if (isArtifactsPanelInLayout.value) {
				isArtifactsPanelDismissedInLayout.value = false;
				return;
			}
			isArtifactsPanelRevealed.value = true;
		}
		function enablePanelTransitionsAfterStableRender() {
			artifactsPanelTransitionGate.enableAfterStableRender();
			previewPanelTransitionGate.enableAfterStableRender();
		}
		function suppressPanelTransitionsUntilStableRender() {
			artifactsPanelTransitionGate.suppressUntilStableRender();
			previewPanelTransitionGate.suppressUntilStableRender();
		}
		const { width: threadAreaWidth } = useElementSize(useTemplateRef("threadArea"));
		const mainSidebarOccupiedWidth = computed(() => isMainSidebarCollapsed.value ? 42 : mainSidebarWidth.value ?? 0);
		const availableWidthForPinnedArtifactsPanel = computed(() => windowWidth.value - mainSidebarOccupiedWidth.value);
		const isArtifactsPanelInLayout = computed(() => availableWidthForPinnedArtifactsPanel.value >= MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL);
		const canShowArtifactsPanel = computed(() => thread.hasMessages || preview.allArtifactTabs.value.length > 0 || Boolean(props.threadId) && thread.isHydratingThread);
		const showArtifactsPanel = computed(() => canShowArtifactsPanel.value && !isOnboardingChromeHidden.value && !preview.isPreviewVisible.value && (isArtifactsPanelInLayout.value ? !isArtifactsPanelDismissedInLayout.value : isArtifactsPanelRevealed.value));
		const showArtifactsPanelToggle = computed(() => canShowArtifactsPanel.value && !preview.isPreviewVisible.value);
		const reserveArtifactsPanelLayout = computed(() => showArtifactsPanel.value && isArtifactsPanelInLayout.value);
		const shouldAnimateArtifactsPanel = computed(() => isArtifactsPanelTransitionEnabled.value && isArtifactsPanelInLayout.value);
		const shouldSuppressContentLayoutTransitions = computed(() => !isPreviewPanelTransitionEnabled.value);
		const artifactsPanelSlotRef = useTemplateRef("artifactsPanelSlot");
		const isResizingPreview = ref(false);
		const isThreadAreaResizing = ref(false);
		const isPreviewExpanded = ref(false);
		const isAgentPreviewDockOpen = ref(false);
		const chatPanelWidthRatio = useLocalStorage(LOCAL_STORAGE_INSTANCE_AI_CHAT_PANEL_WIDTH_RATIO, -1, { writeDefaults: false });
		watch(() => store.composerFocusRequest, () => {
			isPreviewExpanded.value = false;
		});
		watch(preview.activeTabId, (activeTabId, previousActiveTabId) => {
			if (activeTabId !== previousActiveTabId) isAgentPreviewDockOpen.value = false;
		}, { flush: "sync" });
		const halfThreadAreaWidth = computed(() => Math.round(threadAreaWidth.value / 2));
		const previewMinWidth = computed(() => Math.min(MIN_SPLIT_PANEL_WIDTH, halfThreadAreaWidth.value));
		const previewMaxWidth = computed(() => Math.max(threadAreaWidth.value - MIN_SPLIT_PANEL_WIDTH, halfThreadAreaWidth.value));
		const previewPanelWidth = computed(() => {
			const ratio = chatPanelWidthRatio.value;
			const chatPanelWidth = ratio >= 0 && ratio <= 1 ? threadAreaWidth.value * ratio : DEFAULT_CHAT_PANEL_CONTENT_WIDTH;
			return Math.round(Math.min(Math.max(threadAreaWidth.value - chatPanelWidth, previewMinWidth.value), previewMaxWidth.value));
		});
		const isPreviewResizeEnabled = computed(() => !isPreviewExpanded.value && previewMinWidth.value < previewMaxWidth.value);
		const shouldAnimatePreviewLayout = computed(() => isPreviewPanelTransitionEnabled.value && !isResizingPreview.value && !isThreadAreaResizing.value);
		const agentPreviewChatColumnWidth = computed(() => {
			const maximumWidth = (isPreviewExpanded.value ? threadAreaWidth.value : previewPanelWidth.value) * AGENT_PREVIEW_CHAT_MAX_RATIO;
			return Math.round(Math.max(Math.min(AGENT_PREVIEW_CHAT_MIN_WIDTH, maximumWidth), Math.min(AGENT_PREVIEW_CHAT_PREFERRED_WIDTH, maximumWidth)));
		});
		/** Add custom width to Agent Preview chat when canvas area is full expanded. */
		const agentPreviewPanelStyle = computed(() => {
			const chatColumnWidth = { "--agent-preview-chat-column-width": `${agentPreviewChatColumnWidth.value}px` };
			return isPreviewExpanded.value ? chatColumnWidth : {
				...chatColumnWidth,
				width: `${previewPanelWidth.value}px`
			};
		});
		function togglePreviewExpanded() {
			isPreviewExpanded.value = !isPreviewExpanded.value;
		}
		function handleAgentPreviewDockOpenChange(open) {
			isAgentPreviewDockOpen.value = open;
		}
		function handlePreviewResize({ width }) {
			if (Math.round(width) === previewPanelWidth.value) return;
			chatPanelWidthRatio.value = (threadAreaWidth.value - width) / threadAreaWidth.value;
		}
		function handlePreviewPanelAfterEnter() {
			isPreviewPanelTransitioning.value = false;
			workflowPreviewRef.value?.requestFitView();
		}
		function handlePreviewPanelAfterLeave() {
			isPreviewPanelTransitioning.value = false;
			isPreviewExpanded.value = false;
		}
		watch(preview.isPreviewVisible, (visible, wasVisible) => {
			if (visible !== wasVisible) isPreviewPanelTransitioning.value = isPreviewPanelTransitionEnabled.value;
			if (!visible) isAgentPreviewDockOpen.value = false;
			else isArtifactsPanelRevealed.value = false;
		}, { flush: "sync" });
		const finishThreadAreaResize = useDebounceFn(() => {
			isThreadAreaResizing.value = false;
		}, getDebounceTime(DEBOUNCE_TIME.UI.RESIZE));
		watch(threadAreaWidth, (width, previousWidth) => {
			if (typeof previousWidth === "number" && previousWidth > 0 && width !== previousWidth && preview.isPreviewVisible.value) {
				isThreadAreaResizing.value = true;
				finishThreadAreaResize();
			}
		}, { immediate: true });
		watch(isArtifactsPanelInLayout, (isInLayout) => {
			isArtifactsPanelRevealed.value = false;
			if (isInLayout) isArtifactsPanelDismissedInLayout.value = false;
		});
		watch(canShowArtifactsPanel, (canShow) => {
			if (!canShow) {
				isArtifactsPanelRevealed.value = false;
				isArtifactsPanelDismissedInLayout.value = false;
			}
		});
		onClickOutside(artifactsPanelSlotRef, () => {
			if (isArtifactsPanelInLayout.value) return;
			isArtifactsPanelRevealed.value = false;
		}, { ignore: ["[data-test-id=\"instance-ai-artifacts-panel-toggle\"]", ".n8n-tooltip"] });
		watch(() => props.threadId, (threadId, previousThreadId) => {
			if (threadId !== previousThreadId) {
				isAgentPreviewDockOpen.value = false;
				suppressPanelTransitionsUntilStableRender();
			}
		});
		watch(() => thread.isHydratingThread, (isHydrating) => {
			if (isHydrating) {
				artifactsPanelTransitionGate.suppress();
				previewPanelTransitionGate.suppress();
				return;
			}
			suppressPanelTransitionsUntilStableRender();
		});
		onMounted(() => {
			enablePanelTransitionsAfterStableRender();
		});
		onUnmounted(() => {
			if (router.currentRoute.value.params.threadId !== props.threadId) {
				store.disposeRuntime(props.threadId);
				const offeredAgentId = agentBuilderTarget.value?.agentId;
				if (offeredAgentId) agentEvalsStore.clearEvalsFocus(offeredAgentId);
			}
		});
		const workflowPreviewRef = useTemplateRef("workflowPreview");
		function handleFixWithAiFromOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
			conversationRef.value?.resetScroll();
			thread.sendMessage(buildFixWithAiPrompt({
				workflowName: offer.workflowName,
				errors: offer.errors
			}), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_fix_with_ai"
				},
				pushRef: rootStore.pushRef
			});
		}
		function dismissFixWithAiOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
		}
		function handleWorkflowFailures(report) {
			failedRun.value = report;
		}
		function handleAgentPreviewAssistantHandoff(params) {
			if (params.agentId !== preview.activeAgentId.value || params.projectId !== preview.activeAgentProjectId.value) return;
			if (conversationRef.value?.isDirty()) {
				toast.showMessage({
					title: i18n.baseText("instanceAi.input.finishDraftBeforeHandoff.title"),
					message: i18n.baseText("instanceAi.input.finishDraftBeforeHandoff.message"),
					type: "warning"
				});
				return;
			}
			isAgentPreviewDockOpen.value = false;
			conversationRef.value?.applyHandoff(buildInstanceAiAgentPreviewHandoffContext(params), params.initialDraft);
		}
		/**
		* Reveal the agent artifact, then hand off to the builder to select its Evals
		* tab and generate. Generation deliberately stays in the builder: it already
		* owns the call, its loading flag and its error toast, so driving it from here
		* would be a second call site for the same operation.
		*/
		async function handleGenerateTestCasesFromOffer() {
			const target = activeTestAgentOffer.value;
			if (!target) return;
			agentEvalsStore.requestEvalsFocus(target.agentId, true);
			preview.openAgentPreview(target.agentId, target.projectId);
			await persistTestAgentOfferDismissal(target.agentId);
		}
		async function dismissTestAgentOffer() {
			const target = activeTestAgentOffer.value;
			if (!target) return;
			await persistTestAgentOfferDismissal(target.agentId);
		}
		async function persistTestAgentOfferDismissal(agentId) {
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			dismissedKeys.add(testAgentOfferKey(agentId));
			await store.updateThreadMetadata(thread.id, { dismissedContextKeys: [...dismissedKeys] });
		}
		function handleNewThreadClick() {
			router.push({ name: INSTANCE_AI_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "threadArea",
				class: normalizeClass([_ctx.$style.threadArea, { agentPreviewDockOpen: isAgentPreviewDockOpen.value }]),
				"data-test-id": "instance-ai-thread-area"
			}, [
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.chatArea, { [_ctx.$style.agentPreviewLayoutTransition]: shouldAnimatePreviewLayout.value }]),
					"data-layout-animated": shouldAnimatePreviewLayout.value,
					"data-test-id": "instance-ai-builder-chat"
				}, [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.builderChatHeader, { [_ctx.$style.chromeHidden]: isOnboardingChromeHidden.value }]),
					"data-test-id": "instance-ai-builder-chat-header"
				}, [createVNode(InstanceAiViewHeader_default, { "show-thread-history-label": !currentThreadTitle.value }, {
					title: withCtx(() => [currentThreadTitle.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h2",
						bold: "",
						size: "small",
						class: normalizeClass(_ctx.$style.headerTitle)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentThreadTitle.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), unref(thread).sseState === "reconnecting" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.reconnecting)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.view.reconnecting")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					actions: withCtx(() => [
						createVNode(unref(N8nTooltip_default), {
							content: unref(i18n).baseText("instanceAi.thread.new"),
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								icon: "message-circle-plus",
								variant: "ghost",
								size: "small",
								"icon-size": "large",
								"aria-label": unref(i18n).baseText("instanceAi.thread.new"),
								"data-test-id": "instance-ai-embed-new-thread",
								onClick: handleNewThreadClick
							}, null, 8, ["aria-label"])]),
							_: 1
						}, 8, ["content", "show-after"]),
						isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							icon: "bug",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							class: normalizeClass({ [_ctx.$style.activeButton]: showDebugPanel.value }),
							onClick: _cache[0] || (_cache[0] = ($event) => {
								showDebugPanel.value = !showDebugPanel.value;
								unref(store).debugMode = showDebugPanel.value;
							})
						}, null, 8, ["class"])) : createCommentVNode("", true),
						createVNode(unref(N8nTooltip_default), {
							content: artifactsPanelToggleLabel.value,
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(Transition, {
								name: "preview-toggle-opacity",
								css: unref(isArtifactsPanelTransitionEnabled)
							}, {
								default: withCtx(() => [showArtifactsPanelToggle.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									icon: "list",
									variant: "ghost",
									size: "small",
									"icon-size": "large",
									"data-test-id": "instance-ai-artifacts-panel-toggle",
									"aria-label": artifactsPanelToggleLabel.value,
									"aria-pressed": showArtifactsPanel.value,
									disabled: !canShowArtifactsPanel.value,
									onClick: toggleArtifactsPanel
								}, null, 8, [
									"aria-label",
									"aria-pressed",
									"disabled"
								])) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["css"])]),
							_: 1
						}, 8, ["content", "show-after"]),
						createVNode(unref(N8nTooltip_default), {
							content: artifactsPreviewToggleLabel.value,
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(Transition, {
								name: "preview-toggle-opacity",
								css: unref(isPreviewPanelTransitionEnabled)
							}, {
								default: withCtx(() => [!unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									icon: "panel-right",
									variant: "ghost",
									size: "small",
									"icon-size": "large",
									"data-test-id": "instance-ai-artifacts-preview-toggle",
									"aria-label": artifactsPreviewToggleLabel.value,
									"aria-pressed": unref(preview).isPreviewVisible.value,
									disabled: !hasPreviewTabs.value,
									onClick: toggleArtifactsPreview
								}, null, 8, [
									"aria-label",
									"aria-pressed",
									"disabled"
								])) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["css"])]),
							_: 1
						}, 8, ["content", "show-after"])
					]),
					_: 1
				}, 8, ["show-thread-history-label"])], 2), createBaseVNode("div", {
					class: normalizeClass([
						_ctx.$style.contentArea,
						{ [_ctx.$style.contentAreaWithPinnedArtifacts]: reserveArtifactsPanelLayout.value },
						{ [_ctx.$style.contentAreaWithoutLayoutTransitions]: shouldSuppressContentLayoutTransitions.value }
					]),
					"data-layout-transitions-enabled": unref(isPreviewPanelTransitionEnabled),
					"data-test-id": "instance-ai-content-area"
				}, [
					createVNode(InstanceAiConversation_default, {
						ref: "conversation",
						"above-input-overlap-height": setupPanelWorkflowId.value ? setupOverlapHeight.value : void 0,
						onThreadMissing,
						onAgentAttachmentRestored
					}, {
						"above-input": withCtx(() => [setupPanelWorkflowId.value ? (openBlock(), createBlock(InstanceAiSetupPanel_default, {
							key: 0,
							ref: "setupPanel",
							"workflow-id": setupPanelWorkflowId.value,
							"project-id": setupPanelProjectId.value,
							"onUpdate:overlapHeight": _cache[1] || (_cache[1] = ($event) => setupOverlapHeight.value = $event)
						}, null, 8, ["workflow-id", "project-id"])) : createCommentVNode("", true)]),
						"inline-offers": withCtx(() => [createVNode(Transition, { name: "confirmation-slide" }, {
							default: withCtx(() => [activeFixWithAiOffer.value ? (openBlock(), createBlock(InstanceAiFixWithAiPanel_default, {
								key: 0,
								"node-name": activeFixWithAiOffer.value.errors[0].nodeName,
								"error-message": activeFixWithAiOffer.value.errors[0].errorMessage,
								"failed-count": activeFixWithAiOffer.value.errors.length,
								onFixWithAi: handleFixWithAiFromOffer,
								onDismiss: dismissFixWithAiOffer
							}, null, 8, [
								"node-name",
								"error-message",
								"failed-count"
							])) : createCommentVNode("", true)]),
							_: 1
						}), createVNode(Transition, { name: "confirmation-slide" }, {
							default: withCtx(() => [activeTestAgentOffer.value ? (openBlock(), createBlock(InstanceAiTestAgentPanel_default, {
								key: 0,
								onGenerate: handleGenerateTestCasesFromOffer,
								onDismiss: dismissTestAgentOffer
							})) : createCommentVNode("", true)]),
							_: 1
						})]),
						_: 1
					}, 8, ["above-input-overlap-height"]),
					createVNode(Transition, {
						name: artifactsPanelTransitionName.value,
						css: shouldAnimateArtifactsPanel.value
					}, {
						default: withCtx(() => [showArtifactsPanel.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							ref: "artifactsPanelSlot",
							class: normalizeClass([_ctx.$style.artifactsPanelSlot, { [_ctx.$style.artifactsPanelSlotOverlay]: !reserveArtifactsPanelLayout.value }]),
							"data-test-id": "instance-ai-artifacts-sidebar-slot"
						}, [createVNode(InstanceAiArtifactsPanel_default)], 2)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["name", "css"]),
					showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
						key: 0,
						onClose: _cache[2] || (_cache[2] = ($event) => {
							showDebugPanel.value = false;
							unref(store).debugMode = false;
						})
					})) : createCommentVNode("", true)
				], 10, _hoisted_2)], 10, _hoisted_1),
				createVNode(Transition, {
					name: "preview-panel-slide",
					css: unref(isPreviewPanelTransitionEnabled),
					onAfterEnter: handlePreviewPanelAfterEnter,
					onAfterLeave: handlePreviewPanelAfterLeave
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.canvasArea, {
							[_ctx.$style.canvasAreaExpanded]: isPreviewExpanded.value,
							[_ctx.$style.agentPreviewLayoutTransition]: shouldAnimatePreviewLayout.value
						}]),
						style: normalizeStyle(agentPreviewPanelStyle.value),
						"data-expanded": isPreviewExpanded.value,
						"data-test-id": "instance-ai-preview-panel"
					}, [createVNode(unref(N8nResizeWrapper_default), {
						width: previewPanelWidth.value,
						"min-width": previewMinWidth.value,
						"max-width": previewMaxWidth.value,
						"supported-directions": ["left"],
						"is-resizing-enabled": isPreviewResizeEnabled.value,
						"grid-size": 8,
						onResize: handlePreviewResize,
						onResizestart: _cache[3] || (_cache[3] = ($event) => isResizingPreview.value = true),
						onResizeend: _cache[4] || (_cache[4] = ($event) => isResizingPreview.value = false)
					}, {
						default: withCtx(() => [createVNode(unref(TabsRoot_default), {
							"model-value": unref(preview).activeTabId.value,
							orientation: "horizontal",
							class: normalizeClass(_ctx.$style.previewPanel),
							"onUpdate:modelValue": unref(preview).selectTab
						}, {
							default: withCtx(() => [createVNode(InstanceAiPreviewTabBar_default, {
								tabs: unref(preview).allArtifactTabs.value,
								"active-tab-id": unref(preview).activeTabId.value,
								"is-expanded": isPreviewExpanded.value,
								"preview-toggle-label": artifactsPreviewToggleLabel.value,
								onTogglePreview: toggleArtifactsPreview,
								onToggleExpanded: togglePreviewExpanded
							}, null, 8, [
								"tabs",
								"active-tab-id",
								"is-expanded",
								"preview-toggle-label"
							]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewContent) }, [
								unref(preview).isPreviewVisible.value && unref(preview).activeWorkflowId.value ? (openBlock(), createBlock(InstanceAiWorkflowPreview_default, {
									key: unref(preview).activeWorkflowId.value,
									ref: "workflowPreview",
									class: normalizeClass([_ctx.$style.previewSlot, { [_ctx.$style.previewSlotHidden]: !!unref(preview).activeDataTableId.value }]),
									"workflow-id": unref(preview).activeWorkflowId.value,
									"initial-node-id": unref(preview).activeWorkflowId.value === unref(agentReturnWorkflowId) ? agentReturnNodeId.value : void 0,
									"refresh-key": unref(preview).workflowRefreshKey.value,
									"execution-result": unref(preview).activeWorkflowExecutionResult.value,
									onInitialNodeIdConsumed: consumeAgentReturnNodeId,
									onWorkflowFailures: handleWorkflowFailures
								}, null, 8, [
									"class",
									"workflow-id",
									"initial-node-id",
									"refresh-key",
									"execution-result"
								])) : createCommentVNode("", true),
								unref(preview).isPreviewVisible.value && unref(preview).activeDataTableId.value ? (openBlock(), createBlock(InstanceAiDataTablePreview_default, {
									key: 1,
									class: normalizeClass(_ctx.$style.previewSlot),
									"data-table-id": unref(preview).activeDataTableId.value,
									"project-id": unref(preview).activeDataTableProjectId.value,
									"refresh-key": unref(preview).dataTableRefreshKey.value
								}, null, 8, [
									"class",
									"data-table-id",
									"project-id",
									"refresh-key"
								])) : createCommentVNode("", true),
								unref(preview).isPreviewVisible.value && unref(preview).activeAgentId.value && unref(preview).activeAgentProjectId.value ? (openBlock(), createBlock(InstanceAiAgentPreview_default, {
									key: 2,
									class: normalizeClass(_ctx.$style.previewSlot),
									"agent-id": unref(preview).activeAgentId.value,
									"project-id": unref(preview).activeAgentProjectId.value,
									"preview-session-id": activeAgentPreviewSessionId.value,
									"preview-open": isAgentPreviewDockOpen.value,
									pending: unref(preview).activeAgentPending.value,
									onPreviewOpenChange: handleAgentPreviewDockOpenChange,
									onAssistantHandoff: handleAgentPreviewAssistantHandoff
								}, null, 8, [
									"class",
									"agent-id",
									"project-id",
									"preview-session-id",
									"preview-open",
									"pending"
								])) : createCommentVNode("", true)
							], 2)]),
							_: 1
						}, 8, [
							"model-value",
							"class",
							"onUpdate:modelValue"
						])]),
						_: 1
					}, 8, [
						"width",
						"min-width",
						"max-width",
						"is-resizing-enabled"
					])], 14, _hoisted_3), [[vShow, unref(preview).isPreviewVisible.value]])]),
					_: 1
				}, 8, ["css"]),
				createVNode(OpenWorkflowInAssistantNotification_default, { "thread-id": __props.threadId }, null, 8, ["thread-id"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/InstanceAiThreadView.vue?vue&type=style&index=0&lang.module.scss
var threadArea = "_threadArea_y810m_266";
var agentPreviewLayoutTransition = "_agentPreviewLayoutTransition_y810m_276";
var builderChatHeader = "_builderChatHeader_y810m_289";
var chromeHidden = "_chromeHidden_y810m_293";
var chatArea = "_chatArea_y810m_297";
var canvasArea = "_canvasArea_y810m_307";
var canvasAreaExpanded = "_canvasAreaExpanded_y810m_313";
var headerTitle = "_headerTitle_y810m_321";
var activeButton = "_activeButton_y810m_329";
var reconnecting = "_reconnecting_y810m_333";
var contentArea = "_contentArea_y810m_337";
var artifactsPanelSlot = "_artifactsPanelSlot_y810m_346";
var artifactsPanelSlotOverlay = "_artifactsPanelSlotOverlay_y810m_359";
var contentAreaWithPinnedArtifacts = "_contentAreaWithPinnedArtifacts_y810m_364";
var contentAreaWithoutLayoutTransitions = "_contentAreaWithoutLayoutTransitions_y810m_368";
var previewPanel = "_previewPanel_y810m_377";
var previewContent = "_previewContent_y810m_383";
var previewSlot = "_previewSlot_y810m_389";
var previewSlotHidden = "_previewSlotHidden_y810m_394";
var shimmer = "_shimmer_y810m_1";
var spin = "_spin_y810m_1";
var opacityPulse = "_opacityPulse_y810m_1";
var popoverIn = "_popoverIn_y810m_1";
var fadeIn = "_fadeIn_y810m_1";
var collapsibleSlideDown = "_collapsibleSlideDown_y810m_1";
var collapsibleSlideUp = "_collapsibleSlideUp_y810m_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_y810m_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_y810m_1";
var blurSwapIn = "_blurSwapIn_y810m_1";
var blurSwapOut = "_blurSwapOut_y810m_1";
var pulseGlow = "_pulseGlow_y810m_1";
var pulseGlowDelayed = "_pulseGlowDelayed_y810m_1";
var fade = "_fade_y810m_1";
var fadeInUp = "_fadeInUp_y810m_1";
var fadeInDown = "_fadeInDown_y810m_1";
var fadeInLeft = "_fadeInLeft_y810m_1";
var fadeInRight = "_fadeInRight_y810m_1";
var fadeOut = "_fadeOut_y810m_1";
var fadeOutDown = "_fadeOutDown_y810m_1";
var fadeOutUp = "_fadeOutUp_y810m_1";
var fadeOutLeft = "_fadeOutLeft_y810m_1";
var fadeOutRight = "_fadeOutRight_y810m_1";
var ping = "_ping_y810m_1";
var blinkBackground = "_blinkBackground_y810m_1";
var typingBlink = "_typingBlink_y810m_1";
var InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default = {
	threadArea,
	agentPreviewLayoutTransition,
	builderChatHeader,
	chromeHidden,
	chatArea,
	canvasArea,
	canvasAreaExpanded,
	headerTitle,
	activeButton,
	reconnecting,
	contentArea,
	artifactsPanelSlot,
	artifactsPanelSlotOverlay,
	contentAreaWithPinnedArtifacts,
	contentAreaWithoutLayoutTransitions,
	previewPanel,
	previewContent,
	previewSlot,
	previewSlotHidden,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_y810m_1",
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
var InstanceAiThreadView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiThreadView_default as default };

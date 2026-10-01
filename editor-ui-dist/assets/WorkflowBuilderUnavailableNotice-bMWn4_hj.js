import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Et as effectScope, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, U as mergeProps, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, ut as useId, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { U as until, _ as useEventListener, i as onClickOutside } from "./dist-C4pFh3bs.js";
import { t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nCallout_default } from "./N8nCallout-1EEnGTrv.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nTag_default } from "./N8nTag-CeAjXGTK.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-gnshpECI.js";
import { Mn as useSourceControlStore } from "./workflows.store-Dk7Mv1J3.js";
import { t as N8nSpinner_default } from "./N8nSpinner-DODfcFyE.js";
import { ln as base64EncodedSize } from "./src-CUD3lZBU.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { a as TELEMETRY_EVENT } from "./src-BqgdLFDF.js";
import { n as useUIStore, t as listenForModalChanges } from "./ui.store-BwEJQe8R.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BxQcGIMh.js";
import { t as convertFileToBinaryData } from "./fileUtils-D9uzpQDd.js";
import { _ as INSTANCE_AI_THREAD_VIEW, g as INSTANCE_AI_THREADS_VIEW, l as INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY, u as INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY, v as INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY, y as INSTANCE_AI_VIEW } from "./constants-DAtYIeWU.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BCfdO-Bu.js";
import { n as useInstanceAiStore, o as mergeNodeSets, p as instanceAiResponseNow } from "./instanceAi.store-BNItQgIN.js";
import { D as USER_TYPED_MESSAGE, c as clearPendingThreadHandoff } from "./useInstanceAiHandoff-CiNB1JV6.js";
import { n as CreditsSettingsDropdown_default } from "./CreditWarningBanner-YQqW2ziV.js";
import { i as ChatHistoryDropdown_default, n as AttachmentPreview_default, r as ChatInputBase_default, t as EXTENDED_PROMPT_MAX_LENGTH } from "./constants-D63J2sch.js";
import { t as useInstanceAiThreadHistory } from "./useInstanceAiThreadHistory-CtGrsApw.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-CFw1XLhJ.js";
import { n as useMcpServerConnect, r as useInstanceAiMcpTelemetry, t as iconForTool } from "./toolIcons-BwTqswjZ.js";
import { t as useInstanceAiMcpConnectionsExperiment } from "./instanceAiMcpConnections-CwhF8IAQ.js";
import { t as useInstanceAiComputerUseTelemetry } from "./instanceAiComputerUse.telemetry-c_N53ibX.js";
import { i as useInstanceAiBrowserUseTelemetry, r as useExtensionDirectConnect, t as beginConnectFlow } from "./useExtensionDirectConnect-Cz8IjuAA.js";
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["role"];
var _hoisted_2$1 = ["aria-label", "onBlur"];
var InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadList",
	props: {
		maxHeight: { default: void 0 },
		filter: {
			type: Function,
			default: void 0
		},
		navigate: {
			type: Boolean,
			default: true
		},
		activeThreadId: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"close",
		"select",
		"deleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const toast = useToast();
		const { history, search, sentinelRef, loadMore } = useInstanceAiThreadHistory();
		const menuOpen = ref(false);
		const menuContentId = useId();
		const historyDropdownRef = ref(null);
		const triggerRef = ref(null);
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const renameInput = ref(null);
		const activeThreadId = computed(() => props.activeThreadId ?? (typeof route.params.threadId === "string" ? route.params.threadId : void 0));
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		const filteredThreads = computed(() => props.filter ? history.value.threads.filter(props.filter) : history.value.threads);
		const menuItems = computed(() => filteredThreads.value.map((thread) => ({
			id: thread.id,
			label: thread.title,
			disabled: props.disabled,
			testId: "instance-ai-thread-item",
			data: {
				updatedAt: thread.updatedAt ?? thread.createdAt,
				actions: threadActions
			}
		})));
		const lastVisibleThreadId = computed(() => filteredThreads.value.at(-1)?.id);
		let restoreTriggerFocus = false;
		watch([() => history.value.threads.length, () => history.value.search], ([threadCount, searchTerm], [previousThreadCount]) => {
			if (!searchTerm || previousThreadCount !== 0 || threadCount === 0) return;
			nextTick(() => historyDropdownRef.value?.highlightFirstItem());
		});
		function handleMenuOpenChange(open) {
			menuOpen.value = open;
			if (open) {
				restoreTriggerFocus = false;
				return;
			}
			if (!restoreTriggerFocus) return;
			restoreTriggerFocus = false;
			nextTick(() => triggerRef.value?.querySelector("button")?.focus());
		}
		function closeMenu() {
			restoreTriggerFocus = true;
			handleMenuOpenChange(false);
		}
		useEventListener(document, "keydown", (event) => {
			if (!menuOpen.value || !(event.target instanceof HTMLElement)) return;
			const menu = event.target.closest("[data-menu-content]");
			if (menu?.id !== menuContentId) return;
			if (event.target === renameInput.value && (event.key === "Enter" || event.key === "Escape")) {
				event.preventDefault();
				event.stopPropagation();
				const threadId = editingThreadId.value;
				if (event.key === "Enter" && threadId) confirmRename(threadId);
				else cancelRename();
				nextTick(() => menu.querySelector("input[type=\"text\"]")?.focus());
				return;
			}
			if (event.key === "Escape") restoreTriggerFocus = true;
		}, { capture: true });
		async function handleDeleteThread(threadId) {
			const wasActive = threadId === activeThreadId.value;
			if (!await store.deleteThread(threadId)) return;
			clearPendingThreadHandoff(threadId);
			if (!wasActive) return;
			if (!props.navigate) {
				emit("deleted", true);
				return;
			}
			if (store.threads.length > 0) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId: store.threads[0].id }
			});
			else router.push({ name: INSTANCE_AI_VIEW });
		}
		function openAllThreads() {
			closeMenu();
			emit("close");
			router.push({ name: INSTANCE_AI_THREADS_VIEW });
		}
		function setRenameInput(element) {
			renameInput.value = element instanceof HTMLInputElement ? element : null;
		}
		function startRename(threadId) {
			if (props.disabled) return;
			const currentTitle = history.value.threads.find((thread) => thread.id === threadId)?.title;
			if (!currentTitle) return;
			editingThreadId.value = threadId;
			editingTitle.value = currentTitle;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		async function confirmRename(threadId) {
			if (editingThreadId.value !== threadId) return;
			editingThreadId.value = null;
			const title = editingTitle.value.trim();
			if (!title || title === history.value.threads.find((t) => t.id === threadId)?.title) return;
			try {
				await store.renameThread(threadId, title);
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.threads.renameError"));
			}
		}
		function cancelRename() {
			editingThreadId.value = null;
		}
		function handleThreadSelect(threadId) {
			if (props.disabled) return;
			restoreTriggerFocus = true;
			emit("select", threadId);
			if (props.navigate) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		function handleThreadAction(action, threadId) {
			if (props.disabled) return;
			if (action === "delete") handleDeleteThread(threadId);
			else if (action === "rename") startRename(threadId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatHistoryDropdown_default, {
				ref_key: "historyDropdownRef",
				ref: historyDropdownRef,
				"model-value": menuOpen.value,
				items: menuItems.value,
				loading: unref(history).loading && filteredThreads.value.length === 0,
				"max-height": props.maxHeight,
				"search-placeholder": unref(i18n).baseText("instanceAi.threads.searchPlaceholder"),
				"action-button-label": unref(i18n).baseText("instanceAi.threads.actions"),
				"editing-item-id": editingThreadId.value ?? void 0,
				"actions-disabled": __props.disabled,
				"item-double-click-enabled": "",
				"content-id": unref(menuContentId),
				"content-test-id": "instance-ai-thread-list",
				onSearch: _cache[3] || (_cache[3] = ($event) => search.value = $event),
				onSelect: handleThreadSelect,
				onAction: handleThreadAction,
				onItemDblclick: startRename,
				"onUpdate:modelValue": handleMenuOpenChange
			}, createSlots({
				loading: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)]),
				empty: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.empty),
					role: unref(history).error ? "alert" : "status",
					"data-test-id": "instance-ai-thread-list-empty"
				}, [unref(history).error ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 64)) : unref(history).hasMore && !unref(history).loading && !unref(history).error ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel),
					"data-test-id": "instance-ai-thread-sentinel"
				}, null, 2)) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(history).search ? "instanceAi.threads.noSearchResults" : "instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				}))], 10, _hoisted_1$3)]),
				"item-edit": withCtx(({ item, ui }) => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.renameContainer, ui.class]),
					onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
					onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
				}, [withDirectives(createBaseVNode("input", {
					ref: setRenameInput,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingTitle.value = $event),
					class: normalizeClass(_ctx.$style.renameInput),
					type: "text",
					maxlength: "255",
					"aria-label": unref(i18n).baseText("instanceAi.threads.rename"),
					onBlur: ($event) => confirmRename(item.id)
				}, null, 42, _hoisted_2$1), [[vModelText, editingTitle.value]])], 34)]),
				"item-trailing": withCtx(({ item }) => [item.id === lastVisibleThreadId.value && unref(history).hasMore && !unref(history).loading && !unref(history).error ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel),
					"data-test-id": "instance-ai-thread-sentinel"
				}, null, 2)) : createCommentVNode("", true)]),
				footer: withCtx(() => [filteredThreads.value.length > 0 && (unref(history).loading || unref(history).error || __props.navigate) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [filteredThreads.value.length > 0 && unref(history).loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)) : filteredThreads.value.length > 0 && unref(history).error ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.status),
					role: "alert"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 2)) : createCommentVNode("", true), __props.navigate ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: "ghost",
					icon: "list",
					"data-test-id": "instance-ai-view-all-threads",
					class: normalizeClass(_ctx.$style.viewAll),
					onClick: openAllThreads
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.viewAll")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [_ctx.$slots.trigger ? {
				name: "trigger",
				fn: withCtx(() => [createBaseVNode("span", {
					ref_key: "triggerRef",
					ref: triggerRef
				}, [renderSlot(_ctx.$slots, "trigger")], 512)]),
				key: "0"
			} : void 0]), 1032, [
				"model-value",
				"items",
				"loading",
				"max-height",
				"search-placeholder",
				"action-button-label",
				"editing-item-id",
				"actions-disabled",
				"content-id"
			]);
		};
	}
});
var InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default = {
	renameContainer: "_renameContainer_mgzdu_1",
	renameInput: "_renameInput_mgzdu_5",
	status: "_status_mgzdu_19",
	empty: "_empty_mgzdu_20",
	sentinel: "_sentinel_mgzdu_33",
	footer: "_footer_mgzdu_37",
	viewAll: "_viewAll_mgzdu_49"
};
var InstanceAiThreadList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiViewHeader.vue?vue&type=script&setup=true&lang.ts
var InstanceAiViewHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiViewHeader",
	props: {
		showThreadHistoryLabel: {
			type: Boolean,
			default: true
		},
		threadId: { default: void 0 },
		threadList: { default: void 0 }
	},
	emits: ["select", "deleted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const store = useInstanceAiStore();
		const sourceControlStore = useSourceControlStore();
		const i18n = useI18n();
		const route = useRoute();
		const { goToUpgrade } = usePageRedirectionHelper();
		const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
		const activeThreadId = computed(() => {
			if (props.threadId) return props.threadId;
			const id = route.params?.threadId;
			return typeof id === "string" ? id : void 0;
		});
		const threadCreditsUsed = computed(() => activeThreadId.value ? store.threadCreditsUsed(activeThreadId.value) : void 0);
		function handleThreadSelect(threadId) {
			emit("select", threadId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
				createVNode(InstanceAiThreadList_default, {
					"max-height": "calc(var(--spacing--5xl) + var(--spacing--4xl) + var(--spacing--3xl))",
					filter: __props.threadList?.filter,
					navigate: __props.threadList?.navigate,
					disabled: __props.threadList?.disabled,
					"active-thread-id": __props.threadId,
					onSelect: handleThreadSelect,
					onDeleted: _cache[0] || (_cache[0] = ($event) => emit("deleted", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						"as-child": "",
						content: unref(i18n).baseText("instanceAi.sidebar.chatHistory"),
						disabled: props.showThreadHistoryLabel,
						placement: "bottom",
						"show-after": unref(500)
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "small",
							icon: "history",
							"icon-size": "large",
							"icon-only": !props.showThreadHistoryLabel,
							class: normalizeClass(_ctx.$style.threadHistoryButton),
							"data-test-id": "instance-ai-sidebar-toggle",
							"aria-label": unref(i18n).baseText("instanceAi.sidebar.chatHistory")
						}, {
							default: withCtx(() => [props.showThreadHistoryLabel ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.threadHistoryLabel)
							}, toDisplayString(unref(i18n).baseText("instanceAi.sidebar.chatHistory")), 3)) : createCommentVNode("", true)]),
							_: 1
						}, 8, [
							"icon-only",
							"class",
							"aria-label"
						])]),
						_: 1
					}, 8, [
						"content",
						"disabled",
						"show-after"
					])]),
					_: 1
				}, 8, [
					"filter",
					"navigate",
					"disabled",
					"active-thread-id"
				]),
				renderSlot(_ctx.$slots, "title"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [unref(store).creditsRemaining !== void 0 ? (openBlock(), createBlock(CreditsSettingsDropdown_default, {
					key: 0,
					"credits-remaining": unref(store).creditsRemaining,
					"credits-quota": unref(store).creditsQuota,
					"credits-used": threadCreditsUsed.value,
					"is-low-credits": unref(store).isLowCredits,
					"button-size": "small",
					onUpgradeClick: _cache[1] || (_cache[1] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai"))
				}, null, 8, [
					"credits-remaining",
					"credits-quota",
					"credits-used",
					"is-low-credits"
				])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")], 2)
			], 2), isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				icon: "lock",
				class: normalizeClass(_ctx.$style.readOnlyBanner)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.instanceAi.notice")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 64);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiViewHeader.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_j68px_266";
var headerActions = "_headerActions_j68px_275";
var threadHistoryButton = "_threadHistoryButton_j68px_282";
var threadHistoryButtonCollapsed = "_threadHistoryButtonCollapsed_j68px_287";
var threadHistoryLabel = "_threadHistoryLabel_j68px_291";
var readOnlyBanner = "_readOnlyBanner_j68px_314";
var shimmer = "_shimmer_j68px_1";
var spin = "_spin_j68px_1";
var opacityPulse = "_opacityPulse_j68px_1";
var popoverIn = "_popoverIn_j68px_1";
var fadeIn = "_fadeIn_j68px_1";
var collapsibleSlideDown = "_collapsibleSlideDown_j68px_1";
var collapsibleSlideUp = "_collapsibleSlideUp_j68px_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_j68px_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_j68px_1";
var blurSwapIn = "_blurSwapIn_j68px_1";
var blurSwapOut = "_blurSwapOut_j68px_1";
var pulseGlow = "_pulseGlow_j68px_1";
var pulseGlowDelayed = "_pulseGlowDelayed_j68px_1";
var fade = "_fade_j68px_1";
var fadeInUp = "_fadeInUp_j68px_1";
var fadeInDown = "_fadeInDown_j68px_1";
var fadeInLeft = "_fadeInLeft_j68px_1";
var fadeInRight = "_fadeInRight_j68px_1";
var fadeOut = "_fadeOut_j68px_1";
var fadeOutDown = "_fadeOutDown_j68px_1";
var fadeOutUp = "_fadeOutUp_j68px_1";
var fadeOutLeft = "_fadeOutLeft_j68px_1";
var fadeOutRight = "_fadeOutRight_j68px_1";
var ping = "_ping_j68px_1";
var blinkBackground = "_blinkBackground_j68px_1";
var typingBlink = "_typingBlink_j68px_1";
var InstanceAiViewHeader_vue_vue_type_style_index_0_lang_module_default = {
	header,
	headerActions,
	threadHistoryButton,
	threadHistoryButtonCollapsed,
	threadHistoryLabel,
	readOnlyBanner,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_j68px_1",
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
var InstanceAiViewHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiViewHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiViewHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useCreditWarningBanner.ts
/**
* Shared credit-warning banner state used by every Instance AI view leaf.
* The banner becomes dismissible the moment credits drop below the warning
* threshold; subsequent push updates within the low-credits zone don't
* re-show a banner the user already dismissed.
*/
function useCreditWarningBanner(isLowCredits) {
	const dismissed = ref(false);
	watch(() => toValue(isLowCredits), (isLow, wasLow) => {
		if (isLow && !wasLow) dismissed.value = false;
	});
	const visible = computed(() => toValue(isLowCredits) && !dismissed.value);
	function dismiss() {
		dismissed.value = true;
	}
	return {
		visible,
		dismiss
	};
}
//#endregion
//#region src/features/ai/instanceAi/emptyStateSuggestions.ts
var isPromptSuggestion = (suggestion) => suggestion.type === "prompt";
var isMenuSuggestion = (suggestion) => suggestion.type === "menu";
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"data-test-id",
	"aria-expanded",
	"aria-haspopup",
	"disabled",
	"onClick",
	"onMouseenter",
	"onMouseleave",
	"onFocus",
	"onBlur"
];
var _hoisted_2 = ["aria-label", "disabled"];
var _hoisted_3 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestions",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"quick-examples-opened",
		"insert-suggestion"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const quickExamplesSuggestion = computed(() => props.suggestions.find(isMenuSuggestion) ?? null);
		const activePreviewPromptKey = ref(null);
		const isQuickExamplesOpen = ref(false);
		const rootRef = ref(null);
		let hoverTimer = null;
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function setPreview(promptKey) {
			activePreviewPromptKey.value = promptKey;
			emit("preview-change", promptKey);
		}
		function closeQuickExamples() {
			clearHoverTimer();
			isQuickExamplesOpen.value = false;
			setPreview(null);
		}
		function getTopLevelPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function getQuickExamplePosition(exampleId) {
			const quickExamples = quickExamplesSuggestion.value;
			if (!quickExamples) return 0;
			const index = quickExamples.examples.findIndex((example) => example.id === exampleId);
			return index >= 0 ? index + 1 : 0;
		}
		function insertSuggestion(payload) {
			if (props.disabled) return;
			closeQuickExamples();
			emit("insert-suggestion", payload);
		}
		function handleDocumentKeydown(event) {
			if (event.key === "Escape") closeQuickExamples();
		}
		onMounted(() => {
			document.addEventListener("keydown", handleDocumentKeydown);
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", handleDocumentKeydown);
			clearHoverTimer();
		});
		onClickOutside(rootRef, closeQuickExamples);
		function handleSuggestionEnter(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				setPreview(suggestion.promptKey);
			}, 300);
		}
		function handleSuggestionLeave(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionBlur(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionClick(suggestion) {
			clearHoverTimer();
			if (isPromptSuggestion(suggestion)) {
				insertSuggestion({
					promptKey: suggestion.promptKey,
					suggestionId: suggestion.id,
					suggestionKind: "prompt",
					position: getTopLevelPosition(suggestion.id),
					prefillType: "v1_opener"
				});
				return;
			}
			if (props.disabled) return;
			if (isQuickExamplesOpen.value) {
				closeQuickExamples();
				return;
			}
			setPreview(null);
			isQuickExamplesOpen.value = true;
			emit("quick-examples-opened", {
				suggestionId: suggestion.id,
				position: getTopLevelPosition(suggestion.id)
			});
		}
		function handleQuickExampleEnter(promptKey) {
			if (props.disabled) return;
			setPreview(promptKey);
		}
		function handleQuickExampleLeave() {
			if (props.disabled) return;
			setPreview(null);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.suggestions, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([
						_ctx.$style.suggestionButton,
						unref(isMenuSuggestion)(suggestion) && _ctx.$style.menuSuggestionButton,
						unref(isMenuSuggestion)(suggestion) && isQuickExamplesOpen.value && _ctx.$style.menuSuggestionButtonActive
					]),
					style: normalizeStyle({ animationDelay: `${index * 50}ms` }),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					"aria-expanded": unref(isMenuSuggestion)(suggestion) ? isQuickExamplesOpen.value : void 0,
					"aria-haspopup": unref(isMenuSuggestion)(suggestion) ? "dialog" : void 0,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: ($event) => handleSuggestionLeave(suggestion),
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: ($event) => handleSuggestionBlur(suggestion)
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: suggestion.icon,
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionIcon)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1),
					unref(isMenuSuggestion)(suggestion) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: isQuickExamplesOpen.value ? "chevron-up" : "chevron-down",
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionChevron)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)
				], 46, _hoisted_1$2);
			}), 128))], 2), createVNode(Transition, { name: "quick-examples-fade" }, {
				default: withCtx(() => [isQuickExamplesOpen.value && quickExamplesSuggestion.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.quickExamplesPanel),
					"data-test-id": "instance-ai-quick-examples-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: quickExamplesSuggestion.value.icon,
					size: 14
				}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(quickExamplesSuggestion.value.labelKey)), 1)], 2), createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.quickExamplesClose),
					"aria-label": unref(i18n).baseText("instanceAi.emptyState.quickExamples.close"),
					disabled: props.disabled,
					onClick: closeQuickExamples
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: 14
				})], 10, _hoisted_2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(quickExamplesSuggestion.value.examples, (example) => {
					return openBlock(), createElementBlock("button", {
						key: example.id,
						type: "button",
						class: normalizeClass([_ctx.$style.quickExampleButton, activePreviewPromptKey.value === example.promptKey && _ctx.$style.quickExampleButtonActive]),
						"data-test-id": `instance-ai-quick-example-${example.id}`,
						disabled: props.disabled,
						onClick: ($event) => insertSuggestion({
							promptKey: example.promptKey,
							suggestionId: example.id,
							suggestionKind: "quick_example",
							position: getQuickExamplePosition(example.id),
							prefillType: "v1_opener"
						}),
						onMouseenter: ($event) => handleQuickExampleEnter(example.promptKey),
						onMouseleave: handleQuickExampleLeave,
						onFocus: ($event) => handleQuickExampleEnter(example.promptKey),
						onBlur: handleQuickExampleLeave
					}, toDisplayString(unref(i18n).baseText(example.labelKey)), 43, _hoisted_3);
				}), 128))], 2)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_1o57f_11",
	suggestionRow: "_suggestionRow_1o57f_16",
	suggestionButton: "_suggestionButton_1o57f_24",
	suggestionSlideIn: "_suggestionSlideIn_1o57f_1",
	menuSuggestionButton: "_menuSuggestionButton_1o57f_54",
	menuSuggestionButtonActive: "_menuSuggestionButtonActive_1o57f_58",
	suggestionIcon: "_suggestionIcon_1o57f_65",
	suggestionChevron: "_suggestionChevron_1o57f_74",
	quickExamplesPanel: "_quickExamplesPanel_1o57f_79",
	quickExamplesHeader: "_quickExamplesHeader_1o57f_90",
	quickExamplesTitle: "_quickExamplesTitle_1o57f_99",
	quickExamplesClose: "_quickExamplesClose_1o57f_108",
	quickExamplesList: "_quickExamplesList_1o57f_127",
	quickExampleButton: "_quickExampleButton_1o57f_133",
	quickExampleButtonActive: "_quickExampleButtonActive_1o57f_150"
};
var InstanceAiPromptSuggestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useBrowserUseConnection.ts
/** Safety net only — the extension answers in milliseconds, or not at all. */
var EXTENSION_REPLY_TIMEOUT_MS = 5e3;
var inFlight = null;
/**
* The one way to get Browser Use connected. Whether the setup modal is needed, and whether
* the extension can connect on its own, is decided here — no call site has to.
*/
function useBrowserUseConnection() {
	const i18n = useI18n();
	const toast = useToast();
	const uiStore = useUIStore();
	const settingsStore = useInstanceAiSettingsStore();
	const telemetry = useInstanceAiBrowserUseTelemetry();
	const { status, isAttempting, attempt } = useExtensionDirectConnect();
	/** Resolves true once the browser is attached, false if the user backed out. */
	async function ensureConnected(source) {
		if (inFlight === null) {
			const endFlow = beginConnectFlow();
			inFlight = run(source).finally(() => {
				inFlight = null;
				endFlow();
			});
		}
		return await inFlight;
	}
	async function run(source) {
		if (settingsStore.browserConnected) return true;
		if (!isAttempting.value) {
			const connectUrl = await settingsStore.fetchBrowserConnectUrl();
			if (connectUrl) {
				telemetry.trackDirectConnectRequested();
				attempt(connectUrl);
			}
		}
		if (isAttempting.value) {
			await until(() => status.value !== "idle").toBe(true, {
				timeout: EXTENSION_REPLY_TIMEOUT_MS,
				throwOnTimeout: false
			});
			if (status.value === "connecting" && await waitForSilentConnect()) return announceConnected();
		}
		telemetry.trackModalOpened(source);
		uiStore.openModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		if (!await waitForConnectedOrDismissed()) return false;
		uiStore.closeModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		return announceConnected();
	}
	/** Not the modal's job: a remembered instance never opens it, so its toast would go unseen. */
	function announceConnected() {
		toast.showMessage({
			type: "success",
			title: i18n.baseText("instanceAi.browserUse.connected"),
			message: i18n.baseText("instanceAi.browserUse.connected.toastMessage")
		});
		return true;
	}
	/**
	* Bounded by the attempt landing on `failed`. Not bounded when the extension reports
	* success but the backend push never arrives — see the follow-up on adding a timeout.
	*/
	async function waitForSilentConnect() {
		await until(() => settingsStore.browserConnected || status.value === "failed").toBe(true, { throwOnTimeout: false });
		return settingsStore.browserConnected;
	}
	async function waitForConnectedOrDismissed() {
		if (settingsStore.browserConnected) return true;
		const listeners = effectScope(true);
		return await new Promise((resolve) => {
			listeners.run(() => {
				const settle = (connected) => {
					listeners.stop();
					resolve(connected);
				};
				watch(() => settingsStore.browserConnected, (connected) => connected && settle(true));
				listenForModalChanges({
					store: uiStore,
					onModalClosed: (name) => {
						if (name === "instanceAiBrowserUseSetup") settle(settingsStore.browserConnected);
					}
				});
			});
		});
	}
	return { ensureConnected };
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiInputMenuItems.ts
function useInstanceAiInputMenuItems(attachFiles) {
	const i18n = useI18n();
	const uiStore = useUIStore();
	const settingsStore = useInstanceAiSettingsStore();
	const mcpStore = useInstanceAiMcpStore();
	const { ignorePendingConnectResult } = useMcpServerConnect();
	const mcpTelemetry = useInstanceAiMcpTelemetry();
	const { ensureConnected: ensureBrowserConnected } = useBrowserUseConnection();
	const computerUseTelemetry = useInstanceAiComputerUseTelemetry();
	const { isFeatureEnabled: isMcpFeatureEnabled } = useInstanceAiMcpConnectionsExperiment();
	settingsStore.fetch();
	if (isMcpFeatureEnabled.value) mcpStore.fetchConnectionsLazy();
	const isMcpAvailable = computed(() => isMcpFeatureEnabled.value && settingsStore.settings?.mcpAccessEnabled === true);
	const isComputerUseAvailable = computed(() => settingsStore.isComputerUseAvailable);
	const isBrowserUseAvailable = computed(() => settingsStore.isBrowserUseAvailable);
	async function openComputerSetup() {
		if (settingsStore.isLocalGatewayDisabled) await settingsStore.persistLocalGatewayPreference(false);
		computerUseTelemetry.trackModalOpened(settingsStore.isGatewayConnected, "input_menu");
		uiStore.openModal(INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY);
	}
	function openToolsModal() {
		mcpTelemetry.trackToolsListOpened("input_menu");
		uiStore.openModal(INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY);
	}
	function createConnectionItem({ id, status, icon, connectLabel, connectedLabel, connectedTitle, connect, disconnect }) {
		if (status === "none" || status === "connecting") return {
			id,
			label: connectLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: {
				status,
				action: connect
			}
		};
		if (status === "disconnected") return {
			id,
			label: connectedLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: { status },
			children: [...connectedTitle ? [{
				id: `${id}-status`,
				label: connectedTitle,
				header: true
			}] : [], {
				id: `${id}-reconnect`,
				label: i18n.baseText("tools.connection.action.reconnect"),
				data: { action: connect }
			}]
		};
		return {
			id,
			label: connectedLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: { status },
			children: [{
				id: `${id}-status`,
				label: connectedTitle ?? i18n.baseText("instanceAi.inputMenu.status.connected"),
				header: true
			}, {
				id: `${id}-disconnect`,
				label: i18n.baseText("instanceAi.inputMenu.actions.disconnect"),
				data: { action: disconnect }
			}]
		};
	}
	const disconnectedConnectionCount = computed(() => {
		let count = 0;
		if (isMcpAvailable.value) count += mcpStore.connections.filter(({ status }) => status === "disconnected").length;
		if (isComputerUseAvailable.value && settingsStore.computerUseConnectionStatus === "disconnected") count++;
		if (isBrowserUseAvailable.value && settingsStore.browserUseConnectionStatus === "disconnected") count++;
		return count;
	});
	return {
		menuItems: computed(() => {
			const items = [{
				id: "attach-files",
				label: i18n.baseText("chatInputBase.button.attach"),
				icon: {
					type: "icon",
					value: "paperclip"
				},
				data: { action: attachFiles }
			}];
			if (isMcpAvailable.value) {
				const tools = mcpStore.connections.map((connection) => ({
					id: `mcp-${connection.id}`,
					label: connection.serverTitle,
					data: {
						status: connection.status,
						toolIcon: iconForTool(connection.serverIcons, uiStore.appliedTheme)
					},
					children: [
						{
							id: `mcp-${connection.id}-credential`,
							label: connection.credentialName,
							header: true
						},
						{
							id: `mcp-${connection.id}-setup`,
							label: i18n.baseText("instanceAi.inputMenu.actions.settings"),
							data: { action: () => {
								mcpTelemetry.trackSettingsOpened(connection.serverSlug, "input_menu");
								uiStore.openModalWithData({
									name: INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY,
									data: { connectionId: connection.id }
								});
							} }
						},
						{
							id: `mcp-${connection.id}-disconnect`,
							label: i18n.baseText(connection.status === "disconnected" ? "instanceAi.inputMenu.actions.remove" : "instanceAi.inputMenu.actions.disconnect"),
							divided: true,
							data: { action: async () => {
								ignorePendingConnectResult(connection.serverSlug);
								await mcpStore.disconnect(connection.id);
							} }
						}
					]
				}));
				const toolsStatus = tools.some(({ data }) => data?.status === "connecting") ? "connecting" : tools.some(({ data }) => data?.status === "disconnected") ? "disconnected" : tools.length > 0 ? "connected" : "none";
				const toolsChildren = tools.length > 0 ? [...tools, {
					id: "add-tool",
					label: i18n.baseText("instanceAi.inputMenu.tools.add"),
					icon: {
						type: "icon",
						value: "plus"
					},
					divided: true,
					data: { action: openToolsModal }
				}] : void 0;
				items.push({
					id: "tools",
					label: i18n.baseText(tools.length > 0 ? "instanceAi.inputMenu.tools.connected" : "instanceAi.inputMenu.tools.connect"),
					icon: {
						type: "icon",
						value: "plug"
					},
					data: tools.length > 0 ? { status: toolsStatus } : { action: openToolsModal },
					children: toolsChildren
				});
			}
			if (isComputerUseAvailable.value) items.push(createConnectionItem({
				id: "computer",
				status: settingsStore.computerUseConnectionStatus,
				icon: "laptop",
				connectLabel: i18n.baseText("instanceAi.inputMenu.computer.connect"),
				connectedLabel: i18n.baseText("instanceAi.inputMenu.computer.connected"),
				connectedTitle: settingsStore.gatewayHostIdentifier ?? void 0,
				connect: openComputerSetup,
				disconnect: settingsStore.disconnectComputerUse
			}));
			if (isBrowserUseAvailable.value) items.push(createConnectionItem({
				id: "browser",
				status: settingsStore.browserUseConnectionStatus,
				icon: "globe",
				connectLabel: i18n.baseText("instanceAi.inputMenu.browser.connect"),
				connectedLabel: i18n.baseText("instanceAi.inputMenu.browser.connected"),
				connectedTitle: settingsStore.browserUseConnectionStatus !== "none" ? i18n.baseText("instanceAi.inputMenu.browser.connectedTitle") : void 0,
				connect: async () => {
					await ensureBrowserConnected("input_menu");
				},
				disconnect: settingsStore.disconnectBrowserUse
			}));
			return items;
		}),
		disconnectedConnectionCount
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInputMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var InstanceAiInputMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiInputMenu",
	props: { disabled: {
		type: Boolean,
		default: false
	} },
	emits: ["attachFiles"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { menuItems, disconnectedConnectionCount } = useInstanceAiInputMenuItems(() => emit("attachFiles"));
		const tooltip = computed(() => {
			const count = disconnectedConnectionCount.value;
			if (count === 0) return i18n.baseText("instanceAi.inputMenu.open");
			if (count === 1) return i18n.baseText("instanceAi.inputMenu.connectionNeedsAttention");
			return i18n.baseText("instanceAi.inputMenu.connectionsNeedAttention", { interpolate: { count: String(count) } });
		});
		const STATUS_LABEL_KEYS = {
			connected: "instanceAi.inputMenu.status.connected",
			connecting: "instanceAi.inputMenu.status.connecting",
			disconnected: "instanceAi.inputMenu.status.disconnected"
		};
		function findMenuItem(items, id) {
			for (const item of items) {
				if (item.id === id) return item;
				const child = item.children ? findMenuItem(item.children, id) : void 0;
				if (child) return child;
			}
		}
		async function handleSelect(id) {
			await findMenuItem(menuItems.value, id)?.data?.action?.();
		}
		function trackInputPlusButtonClick() {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_CLICKED_AI_ASSISTANT_INPUT_PLUS_BUTTON, {});
		}
		function handleUpdateDropdownModelValue(open) {
			if (open) trackInputPlusButtonClick();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: tooltip.value,
				"content-class": _ctx.$style.triggerTooltip,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: unref(menuItems),
					placement: "top-start",
					disabled: props.disabled,
					"data-test-id": "instance-ai-input-menu",
					onSelect: handleSelect,
					"onUpdate:modelValue": handleUpdateDropdownModelValue
				}, {
					trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nIconButton_default), {
						icon: "plus",
						variant: "ghost",
						size: "medium",
						"icon-size": "large",
						disabled: props.disabled,
						"aria-label": tooltip.value
					}, null, 8, ["disabled", "aria-label"]), unref(disconnectedConnectionCount) > 0 ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.triggerStatusDot),
						"aria-hidden": "true"
					}, null, 2)) : createCommentVNode("", true)], 2)]),
					"item-leading": withCtx(({ item, ui }) => [item.data?.toolIcon ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
						key: 0,
						type: item.data.toolIcon.type,
						src: item.data.toolIcon.type === "file" ? item.data.toolIcon.src : void 0,
						name: item.data.toolIcon.type === "icon" ? item.data.toolIcon.name : void 0,
						size: 16,
						class: normalizeClass(ui.class)
					}, null, 8, [
						"type",
						"src",
						"name",
						"class"
					])) : item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: item.icon.value,
						size: "large",
						class: normalizeClass(ui.class)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
					"item-label": withCtx(({ item, ui }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: item.disabled ? "text-xlight" : "text-dark",
						class: normalizeClass([
							ui.class,
							_ctx.$style.itemLabel,
							!item.children?.length && _ctx.$style.itemLabelLeaf
						])
					}, {
						default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.label), 1), item.data?.status && item.data.status !== "none" && !(item.id === "tools" && item.data.status === "connected") ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.statusIndicator),
							"aria-label": unref(i18n).baseText(STATUS_LABEL_KEYS[item.data.status])
						}, [item.data.status === "connecting" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
							key: 0,
							size: "small"
						})) : item.data.status === "connected" ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "check",
							size: "small",
							class: normalizeClass([_ctx.$style.statusIcon, _ctx.$style.connected])
						}, null, 8, ["class"])) : item.id === "tools" ? (openBlock(), createElementBlock("span", {
							key: 2,
							class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.disconnectedDot])
						}, null, 2)) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 3,
							icon: "circle-x",
							size: "small",
							class: normalizeClass([_ctx.$style.statusIcon, _ctx.$style.disconnected])
						}, null, 8, ["class"]))], 10, _hoisted_1$1)) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["color", "class"])]),
					_: 1
				}, 8, ["items", "disabled"])]),
				_: 1
			}, 8, ["content", "content-class"]);
		};
	}
});
var InstanceAiInputMenu_vue_vue_type_style_index_0_lang_module_default = {
	triggerTooltip: "_triggerTooltip_8b3c3_1",
	trigger: "_trigger_8b3c3_1",
	triggerStatusDot: "_triggerStatusDot_8b3c3_11",
	itemLabel: "_itemLabel_8b3c3_24",
	itemLabelLeaf: "_itemLabelLeaf_8b3c3_31",
	statusDot: "_statusDot_8b3c3_35",
	statusIcon: "_statusIcon_8b3c3_42",
	statusIndicator: "_statusIndicator_8b3c3_46",
	connected: "_connected_8b3c3_56",
	disconnected: "_disconnected_8b3c3_60",
	disconnectedDot: "_disconnectedDot_8b3c3_64"
};
var InstanceAiInputMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiInputMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiInputMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiPromptSuggestions.telemetry.ts
var shownImpressionKeys = /* @__PURE__ */ new Set();
var resolveSuggestionCatalogVersion = (context) => context.suggestionCatalogVersion ?? "v1";
var createBasePayload = (context) => {
	const payload = {
		...context.telemetryPayload,
		suggestion_catalog_version: resolveSuggestionCatalogVersion(context)
	};
	if (context.threadId) payload.thread_id = context.threadId;
	return payload;
};
function createInstanceAiPromptSuggestionsTelemetry(telemetry, shownKeys = shownImpressionKeys) {
	return {
		trackSuggestionsShown(context) {
			const impressionKey = (context.threadId || "empty-state") + ":" + resolveSuggestionCatalogVersion(context);
			if (shownKeys.has(impressionKey)) return;
			shownKeys.add(impressionKey);
			telemetry.track("Instance AI prompt suggestions shown", createBasePayload(context));
		},
		trackQuickExamplesOpened(context) {
			telemetry.track("Instance AI quick examples opened", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				position: context.position
			});
		},
		trackSuggestionsCycled(context) {
			telemetry.track("Instance AI prompt suggestions cycled", {
				...context.telemetryPayload,
				suggestion_catalog_version: resolveSuggestionCatalogVersion(context),
				visible_suggestion_ids: context.visibleSuggestionIds,
				cycle_count: context.cycleCount
			});
		},
		trackSuggestionSelected(context) {
			telemetry.track("Instance AI prompt suggestion selected", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position
			});
		},
		trackSuggestionSubmitted(context) {
			telemetry.track("Instance AI prompt suggestion submitted", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position,
				prompt_modified: context.promptModified
			});
		}
	};
}
function useInstanceAiPromptSuggestionsTelemetry() {
	return createInstanceAiPromptSuggestionsTelemetry(useTelemetry());
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var DEFAULT_AUTOSIZE_ROWS = 3;
var DEFAULT_MAX_AUTOSIZE_ROWS = 6;
var TYPEWRITER_SPEED_MS = 9;
var InstanceAiInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiInput",
	props: {
		isStreaming: {
			type: Boolean,
			default: false
		},
		isSubmitting: {
			type: Boolean,
			default: false
		},
		isAwaitingConfirmation: {
			type: Boolean,
			default: false
		},
		isAwaitingPlanReview: {
			type: Boolean,
			default: false
		},
		currentThreadId: { default: "" },
		amendContext: { default: null },
		contextualSuggestion: { default: null },
		suggestions: {},
		isWorkflowBuilderAvailable: {
			type: Boolean,
			default: true
		},
		suggestionsComponent: {},
		suggestionsComponentProps: {},
		suggestionCatalogVersion: {},
		suggestionTelemetryPayload: {},
		placeholderKey: {},
		previewPromptKey: { default: null },
		fixedRows: { default: null },
		submitLabel: { default: void 0 },
		submitActiveRequiresFocus: {
			type: Boolean,
			default: false
		},
		contextChip: { default: null }
	},
	emits: [
		"submit",
		"stop",
		"dismiss-context-chip",
		"workflow-preview",
		"content-change"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const SUGGESTIONS_TRANSITION_DURATION = {
			enter: 450,
			leave: 320
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const promptSuggestionsTelemetry = useInstanceAiPromptSuggestionsTelemetry();
		const instanceAiStore = useInstanceAiStore();
		const inputText = ref("");
		const attachedFiles = ref([]);
		const attachedResources = ref([]);
		const chatInputRef = ref(null);
		const previewPrompt = ref(null);
		const selectedSuggestionDraft = ref(null);
		/**
		* What pre-filled the composer, so the submit can report who wrote the text.
		* Separate from `selectedSuggestionDraft`, which is scoped to the suggestion
		* experiment; this also covers template examples and hand-off drafts.
		*/
		const activePrefill = ref(null);
		const typedPreview = ref("");
		let typewriterTimer = null;
		function stopTypewriter() {
			if (typewriterTimer) {
				clearInterval(typewriterTimer);
				typewriterTimer = null;
			}
		}
		watch(() => props.previewPromptKey, (key) => {
			stopTypewriter();
			if (!key) {
				typedPreview.value = "";
				return;
			}
			const full = i18n.baseText(key);
			typedPreview.value = "";
			let i = 0;
			typewriterTimer = setInterval(() => {
				i += 1;
				typedPreview.value = full.slice(0, i);
				if (i >= full.length) stopTypewriter();
			}, TYPEWRITER_SPEED_MS);
		}, { immediate: true });
		onBeforeUnmount(stopTypewriter);
		function focus() {
			chatInputRef.value?.focus();
		}
		function appendText(text) {
			inputText.value += text;
		}
		function setText(text) {
			inputText.value = text;
		}
		function setTextIfEmpty(text) {
			if (!inputText.value.trim()) inputText.value = text;
		}
		/**
		* Put n8n-authored text in the composer. Pre-fills must come through here
		* rather than `setText` so the submit can attribute them; `setText` and
		* friends stay for restoring a draft the user wrote.
		*/
		function setPrefill(prefill) {
			inputText.value = prefill.text;
			activePrefill.value = { ...prefill };
		}
		function clearTextIfMatches(text) {
			if (inputText.value === text) inputText.value = "";
		}
		function isDirty() {
			return inputText.value.trim().length > 0 || hasAttachments.value;
		}
		__expose({
			focus,
			appendText,
			setText,
			setPrefill,
			setTextIfEmpty,
			clearTextIfMatches,
			isDirty,
			insertSuggestion: handleSuggestionInsert,
			submitSuggestion
		});
		const isBusy = computed(() => props.isAwaitingPlanReview ? props.isSubmitting : props.isStreaming || props.isSubmitting);
		const hasNonWhitespaceDraftText = computed(() => inputText.value.trim().length > 0);
		const isInputVisuallyEmpty = computed(() => inputText.value.length === 0);
		const hasAttachments = computed(() => attachedFiles.value.length > 0 || attachedResources.value.length > 0);
		const attachedEncodedBytes = computed(() => attachedFiles.value.reduce((sum, file) => sum + base64EncodedSize(file.size), 0));
		const isComposerDirty = computed(() => hasNonWhitespaceDraftText.value || hasAttachments.value);
		watch(isComposerDirty, (hasContent) => emit("content-change", hasContent));
		const isGatedBySetup = computed(() => props.isAwaitingConfirmation || !props.isWorkflowBuilderAvailable);
		const canSubmit = computed(() => canSubmitMessage(inputText.value.trim(), attachedFiles.value.length + attachedResources.value.length));
		const canShowSuggestions = computed(() => Boolean(props.suggestions?.length) && !props.isAwaitingPlanReview && !isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const resolvedSuggestionsComponent = computed(() => props.suggestionsComponent ?? InstanceAiPromptSuggestions_default);
		const resolvedSuggestionCatalogVersion = computed(() => props.suggestionCatalogVersion ?? "v1");
		const shouldTrackVisibleSuggestions = computed(() => canShowSuggestions.value);
		const placeholder = computed(() => {
			if (!props.isWorkflowBuilderAvailable) return i18n.baseText("instanceAi.input.workflowBuilderUnavailablePlaceholder");
			if (isGatedBySetup.value) return i18n.baseText("instanceAi.input.suspendedPlaceholder");
			if (props.isAwaitingPlanReview) return i18n.baseText("instanceAi.input.planReviewPlaceholder");
			if (props.previewPromptKey && isInputVisuallyEmpty.value) return typedPreview.value;
			if (previewPrompt.value && isInputVisuallyEmpty.value) return previewPrompt.value;
			if (props.amendContext) return i18n.baseText("instanceAi.input.amendPlaceholder", { interpolate: { role: props.amendContext.role } });
			if (props.contextualSuggestion) return props.contextualSuggestion;
			if (props.contextChip?.type === "agent-artifact" && props.contextChip.isNewAgent) return i18n.baseText("instanceAi.input.newAgentPlaceholder");
			return i18n.baseText(props.placeholderKey ?? "instanceAi.input.placeholder");
		});
		watch([
			shouldTrackVisibleSuggestions,
			resolvedSuggestionCatalogVersion,
			() => props.currentThreadId
		], ([shouldTrackSuggestions, suggestionCatalogVersion, threadId]) => {
			if (shouldTrackSuggestions) {
				promptSuggestionsTelemetry.trackSuggestionsShown({
					threadId: threadId || void 0,
					suggestionCatalogVersion,
					telemetryPayload: props.suggestionTelemetryPayload
				});
				return;
			}
			previewPrompt.value = null;
			emit("workflow-preview", null);
		}, { immediate: true });
		watch(inputText, (text) => {
			if (text.length === 0) {
				selectedSuggestionDraft.value = null;
				activePrefill.value = null;
			}
		});
		function emitSubmittedMessage(message, attachments, restoreDraft, authorship, responseStartedAtEpochMs) {
			previewPrompt.value = null;
			emit("submit", message, attachments, restoreDraft, authorship, responseStartedAtEpochMs);
		}
		/**
		* The composer is the only place that knows whether the text came from a
		* pre-fill, so it resolves authorship for every send that leaves it.
		*/
		function resolveAuthorship(message, prefill) {
			if (!prefill) return USER_TYPED_MESSAGE;
			return {
				kind: "prefill",
				prefillType: prefill.prefillType,
				...prefill.prefillId ? { prefillId: prefill.prefillId } : {},
				promptModified: message !== prefill.text.trim()
			};
		}
		function resetDraftComposer({ keepAttachments = false } = {}) {
			inputText.value = "";
			if (keepAttachments) return;
			attachedFiles.value = [];
			attachedResources.value = [];
		}
		/** The single submission gate — `canSubmit` is this predicate over the draft. */
		function canSubmitMessage(message, attachmentCount = 0) {
			if (isBusy.value || isGatedBySetup.value) return false;
			if (props.isAwaitingPlanReview) return message.length > 0;
			return message.length > 0 || attachmentCount > 0;
		}
		/**
		* Put failed plan feedback back. Only the text was submitted, so this cannot use
		* `isDirty()` as its guard: staged attachments keep that true even when the text
		* box is empty, which would block every restore.
		*/
		function restorePlanFeedbackDraft(message) {
			if (hasNonWhitespaceDraftText.value) return false;
			inputText.value = message;
			return true;
		}
		/**
		* Puts a submitted draft back after a refused send. Returns false when the user
		* has already typed something newer, so the caller knows the draft is gone.
		*
		* The pre-fill snapshot is restored with the text -- always after it, since an
		* empty assignment clears the pre-fill -- so retrying stays attributed to the
		* surface that wrote the draft rather than reporting as user-typed.
		*/
		function restoreSubmittedDraft(message, files, resources, prefill) {
			const restorePrefill = () => {
				activePrefill.value = prefill ? { ...prefill } : null;
			};
			if (isDirty()) {
				if (inputText.value.trim()) return false;
				inputText.value = message;
				restorePrefill();
				return true;
			}
			inputText.value = message;
			restorePrefill();
			attachedFiles.value = [...files];
			attachedResources.value = [...resources];
			return true;
		}
		/**
		* `prefill` is the snapshot its caller took when it read the message, not live
		* state: `handleSubmit` awaits file conversion in between, and the composer can
		* be edited during that await.
		*/
		function submitComposerMessage(message, attachments, prefill, responseStartedAtEpochMs = instanceAiResponseNow()) {
			if (!canSubmitMessage(message, attachments?.length ?? 0)) return;
			if (props.isAwaitingPlanReview) {
				emitSubmittedMessage(message, void 0, () => restorePlanFeedbackDraft(message), USER_TYPED_MESSAGE, responseStartedAtEpochMs);
				resetDraftComposer({ keepAttachments: true });
				return;
			}
			trackSelectedSuggestionSubmitted(message);
			const submittedFiles = [...attachedFiles.value];
			const submittedResources = [...attachedResources.value];
			emitSubmittedMessage(message, attachments, () => restoreSubmittedDraft(message, submittedFiles, submittedResources, prefill), resolveAuthorship(message, prefill), responseStartedAtEpochMs);
			resetDraftComposer();
		}
		function submitSuggestion(payload) {
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			submitComposerMessage(prompt, void 0, {
				text: prompt,
				prefillType: payload.prefillType,
				prefillId: payload.suggestionId
			});
		}
		async function handleSubmit() {
			const text = inputText.value.trim();
			const prefill = activePrefill.value;
			if (!canSubmitMessage(text, attachedFiles.value.length + attachedResources.value.length)) return;
			const responseStartedAtEpochMs = instanceAiResponseNow();
			if (props.isAwaitingPlanReview) {
				submitComposerMessage(text, void 0, null, responseStartedAtEpochMs);
				return;
			}
			const attachments = [...attachedFiles.value.length ? (await Promise.all(attachedFiles.value.map(convertFileToBinaryData))).map((b) => ({
				type: "file",
				data: b.data,
				mimeType: b.mimeType,
				fileName: b.fileName ?? "unnamed"
			})) : [], ...attachedResources.value];
			submitComposerMessage(text, attachments.length ? attachments : void 0, prefill, responseStartedAtEpochMs);
		}
		function removeResource(index) {
			attachedResources.value = attachedResources.value.filter((_, i) => i !== index);
		}
		watch(() => instanceAiStore.pendingComposerAttachments, (pending) => {
			if (pending.length === 0) return;
			const consumed = instanceAiStore.consumePendingAttachments();
			for (const attachment of consumed) {
				if (attachment.type === "file") continue;
				if (attachment.type === "nodes") {
					const existing = attachedResources.value.find((a) => a.type === "nodes" && a.workflowId === attachment.workflowId);
					if (existing) {
						existing.sets = mergeNodeSets(existing.sets, attachment.sets);
						continue;
					}
				}
				attachedResources.value = [...attachedResources.value, attachment];
			}
		}, {
			deep: true,
			immediate: true
		});
		function handleStop() {
			emit("stop");
		}
		function handleTabAutocomplete() {
			if (!inputText.value && props.contextualSuggestion) setPrefill({
				text: props.contextualSuggestion,
				prefillType: "contextual_followup"
			});
		}
		function handleFilesSelected(files) {
			attachedFiles.value.push(...files);
		}
		function handleFileRemove(file) {
			const idx = attachedFiles.value.indexOf(file);
			if (idx !== -1) attachedFiles.value.splice(idx, 1);
		}
		function getTelemetryContext(telemetryPayload) {
			return {
				threadId: props.currentThreadId || void 0,
				suggestionCatalogVersion: resolvedSuggestionCatalogVersion.value,
				telemetryPayload: {
					...props.suggestionTelemetryPayload,
					...telemetryPayload
				}
			};
		}
		function getSuggestionPrompt(payload) {
			return payload.prompt ?? i18n.baseText(payload.promptKey);
		}
		function getPreviewPromptText(preview) {
			if (!preview) return null;
			if (typeof preview === "string") return i18n.baseText(preview);
			return preview.prompt;
		}
		function trackSelectedSuggestionSubmitted(message) {
			const selectedSuggestion = selectedSuggestionDraft.value;
			if (!selectedSuggestion) return;
			promptSuggestionsTelemetry.trackSuggestionSubmitted({
				...getTelemetryContext(selectedSuggestion.telemetryPayload),
				suggestionId: selectedSuggestion.suggestionId,
				suggestionKind: selectedSuggestion.suggestionKind,
				position: selectedSuggestion.position,
				promptModified: message !== selectedSuggestion.originalPrompt
			});
		}
		function handleQuickExamplesOpened(payload) {
			if (payload.suggestionId !== "quick-examples") return;
			promptSuggestionsTelemetry.trackQuickExamplesOpened({
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				position: payload.position
			});
		}
		function trackSuggestionSelected(payload) {
			promptSuggestionsTelemetry.trackSuggestionSelected({
				...getTelemetryContext(payload.telemetryPayload),
				suggestionId: payload.suggestionId,
				suggestionKind: payload.suggestionKind,
				position: payload.position
			});
		}
		function handleSuggestionsCycled(payload) {
			promptSuggestionsTelemetry.trackSuggestionsCycled({
				...getTelemetryContext(payload.telemetryPayload),
				visibleSuggestionIds: payload.visibleSuggestionIds,
				cycleCount: payload.cycleCount
			});
		}
		async function handleSuggestionInsert(payload) {
			trackSuggestionSelected(payload);
			previewPrompt.value = null;
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			activePrefill.value = {
				text: prompt,
				prefillType: payload.prefillType,
				prefillId: payload.suggestionId
			};
			inputText.value = prompt;
			await nextTick();
			chatInputRef.value?.focus();
		}
		const resizable = computed(() => {
			if (props.fixedRows) return {
				minRows: props.fixedRows,
				maxRows: props.fixedRows
			};
			if (previewPrompt.value) return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_AUTOSIZE_ROWS
			};
			return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_MAX_AUTOSIZE_ROWS
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.composer) }, [
				createVNode(ChatInputBase_default, {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => inputText.value = $event),
					class: normalizeClass(_ctx.$style.inputWrapper),
					placeholder: placeholder.value,
					"is-streaming": props.isAwaitingPlanReview ? false : props.isStreaming,
					"can-submit": canSubmit.value,
					disabled: isGatedBySetup.value,
					autosize: resizable.value,
					"button-label": props.submitLabel,
					"active-requires-focus": props.submitActiveRequiresFocus,
					"max-length": unref(EXTENDED_PROMPT_MAX_LENGTH),
					"show-voice": "",
					"show-attach": !props.isAwaitingPlanReview,
					"show-attach-button": false,
					"attached-encoded-bytes": attachedEncodedBytes.value,
					onSubmit: handleSubmit,
					onStop: handleStop,
					onTab: handleTabAutocomplete,
					onFilesSelected: handleFilesSelected
				}, createSlots({
					attachments: withCtx(() => [
						props.contextChip ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.contextChip),
							"data-test-id": props.contextChip.testId ?? "instance-ai-handoff-context-chip"
						}, [createVNode(unref(N8nTag_default), {
							text: props.contextChip.label,
							clickable: false,
							size: "lg"
						}, {
							tag: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextChipContent) }, [createVNode(unref(N8nIcon_default), {
								icon: props.contextChip.icon ?? "robot",
								size: "medium",
								class: normalizeClass(_ctx.$style.contextChipIcon),
								"data-test-id": "instance-ai-handoff-context-chip-icon"
							}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextChipText) }, toDisplayString(props.contextChip.label), 3)], 2), createVNode(unref(N8nIconButton_default), {
								icon: "x",
								size: "xsmall",
								variant: "ghost",
								class: normalizeClass(_ctx.$style.contextChipClose),
								title: unref(i18n).baseText("generic.close"),
								"aria-label": unref(i18n).baseText("generic.close"),
								"data-test-id": "instance-ai-handoff-context-chip-dismiss",
								onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("dismiss-context-chip"), ["stop"]))
							}, null, 8, [
								"class",
								"title",
								"aria-label"
							])]),
							_: 1
						}, 8, ["text"])], 10, _hoisted_1)) : createCommentVNode("", true),
						attachedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.attachments)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedResources.value, (attachment, index) => {
							return openBlock(), createBlock(AttachmentPreview_default, {
								key: `res-${index}`,
								attachment,
								"is-removable": true,
								onRemoveResource: ($event) => removeResource(index),
								"onUpdate:attachment": ($event) => attachedResources.value[index] = $event
							}, null, 8, [
								"attachment",
								"onRemoveResource",
								"onUpdate:attachment"
							]);
						}), 128))], 2)) : createCommentVNode("", true),
						attachedFiles.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.attachments)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
							return openBlock(), createBlock(AttachmentPreview_default, {
								key: index,
								file,
								"is-removable": true,
								onRemove: handleFileRemove
							}, null, 8, ["file"]);
						}), 128))], 2)) : createCommentVNode("", true)
					]),
					_: 2
				}, [!props.isAwaitingPlanReview ? {
					name: "footer-start",
					fn: withCtx(() => [createVNode(InstanceAiInputMenu_default, {
						disabled: isBusy.value || isGatedBySetup.value,
						onAttachFiles: _cache[1] || (_cache[1] = ($event) => chatInputRef.value?.openFilePicker())
					}, null, 8, ["disabled"])]),
					key: "0"
				} : void 0]), 1032, [
					"modelValue",
					"class",
					"placeholder",
					"is-streaming",
					"can-submit",
					"disabled",
					"autosize",
					"button-label",
					"active-requires-focus",
					"max-length",
					"show-attach",
					"attached-encoded-bytes"
				]),
				renderSlot(_ctx.$slots, "footer"),
				createVNode(Transition, {
					name: "suggestions-fade",
					duration: SUGGESTIONS_TRANSITION_DURATION
				}, {
					default: withCtx(() => [canShowSuggestions.value && props.suggestions ? (openBlock(), createBlock(resolveDynamicComponent(resolvedSuggestionsComponent.value), mergeProps({
						key: 0,
						class: _ctx.$style.suggestions,
						suggestions: props.suggestions,
						disabled: isBusy.value || isGatedBySetup.value
					}, props.suggestionsComponentProps, {
						onPreviewChange: _cache[3] || (_cache[3] = ($event) => previewPrompt.value = getPreviewPromptText($event)),
						onQuickExamplesOpened: handleQuickExamplesOpened,
						onCycleSuggestions: handleSuggestionsCycled,
						onInsertSuggestion: handleSuggestionInsert,
						onWorkflowPreview: _cache[4] || (_cache[4] = ($event) => emit("workflow-preview", $event))
					}), null, 16, [
						"class",
						"suggestions",
						"disabled"
					])) : createCommentVNode("", true)]),
					_: 1
				})
			], 2);
		};
	}
});
var InstanceAiInput_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_1dujo_1",
	inputWrapper: "_inputWrapper_1dujo_9",
	suggestions: "_suggestions_1dujo_13",
	attachments: "_attachments_1dujo_17",
	contextChip: "_contextChip_1dujo_23",
	contextChipContent: "_contextChipContent_1dujo_30",
	contextChipIcon: "_contextChipIcon_1dujo_38",
	contextChipText: "_contextChipText_1dujo_42",
	contextChipClose: "_contextChipClose_1dujo_50"
};
var InstanceAiInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/WorkflowBuilderUnavailableNotice.vue?vue&type=script&setup=true&lang.ts
var WorkflowBuilderUnavailableNotice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowBuilderUnavailableNotice",
	setup(__props) {
		const i18n = useI18n();
		const settingsStore = useInstanceAiSettingsStore();
		const descriptionKey = computed(() => settingsStore.isSandboxEnabled ? "instanceAi.workflowBuilderUnavailable.serviceUrlDescription" : "instanceAi.workflowBuilderUnavailable.enableSandboxDescription");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				class: normalizeClass(_ctx.$style.notice),
				theme: "warning",
				"data-test-id": "instance-ai-workflow-builder-unavailable"
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.copy) }, [createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowBuilderUnavailable.title")), 1), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(descriptionKey.value)), 1)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var WorkflowBuilderUnavailableNotice_vue_vue_type_style_index_0_lang_module_default = {
	notice: "_notice_soy4g_1",
	copy: "_copy_soy4g_5"
};
var WorkflowBuilderUnavailableNotice_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowBuilderUnavailableNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowBuilderUnavailableNotice_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useCreditWarningBanner as a, useBrowserUseConnection as i, InstanceAiInput_default as n, InstanceAiViewHeader_default as o, useInstanceAiPromptSuggestionsTelemetry as r, WorkflowBuilderUnavailableNotice_default as t };

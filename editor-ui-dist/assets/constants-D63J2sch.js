import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, ft as useSlots, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, ut as useId, vn as normalizeClass, w as createBlock, y as Teleport } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as N8nIconButton_default } from "./N8nIconButton-C-j-1s-H.js";
import { O as useSpeechRecognition, _ as useEventListener } from "./dist-C4pFh3bs.js";
import { t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nChatInput_default } from "./N8nChatInput-Bcgdba-U.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-5esbSFgD.js";
import { H as useNodeTypesStore, T as createWorkflowDocumentId, j as useWorkflowDocumentStore } from "./workflows.store-Dk7Mv1J3.js";
import { _n as formatAttachmentSizeLimit, gn as exceedsAttachmentSizeLimit, ln as base64EncodedSize, vn as formatTotalAttachmentSizeLimit } from "./src-CUD3lZBU.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { Oa as WorkflowIdKey } from "./constants-xJAwzpHs.js";
import { t as NodeIcon_default } from "./NodeIcon-B0stnWPG.js";
import { w as isNodeChipRemovalKey } from "./constants-DAtYIeWU.js";
import { E as isFileAcceptedByAccept, d as getRelativeDate } from "./chat.utils-BNf9V-37.js";
import { t as ChatFile_default } from "./ChatFile-aXO9h4UQ.js";
import { t as useFileDrop } from "./useFileDrop-BDzqd1nl.js";
//#region src/features/ai/shared/components/ChatHistoryDropdown.vue?vue&type=script&setup=true&lang.ts
var DOUBLE_CLICK_DELAY = 300;
var ChatHistoryDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatHistoryDropdown",
	props: {
		items: {},
		searchPlaceholder: {},
		contentTestId: {},
		contentId: { default: void 0 },
		actionButtonLabel: {},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		dataTestId: { default: void 0 },
		maxHeight: { default: void 0 },
		loading: {
			type: Boolean,
			default: false
		},
		emptyText: { default: void 0 },
		editingItemId: { default: void 0 },
		actionsDisabled: {
			type: Boolean,
			default: false
		},
		itemDoubleClickEnabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:modelValue",
		"search",
		"select",
		"action",
		"item-dblclick"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const i18n = useI18n();
		const generatedContentId = useId();
		const contentId = computed(() => props.contentId ?? generatedContentId);
		const dropdownRef = ref(null);
		let pendingItemClick;
		const groupOrder = [
			"Today",
			"Yesterday",
			"This week",
			"Older"
		];
		const groupLabels = {
			Today: i18n.baseText("userActivity.today"),
			Yesterday: i18n.baseText("userActivity.yesterday"),
			"This week": i18n.baseText("instanceAi.sidebar.group.thisWeek"),
			Older: i18n.baseText("instanceAi.sidebar.group.older")
		};
		const groupedItems = computed(() => {
			const groups = /* @__PURE__ */ new Map();
			const undated = [];
			const now = /* @__PURE__ */ new Date();
			for (const item of props.items) {
				if (!item.data?.updatedAt) {
					undated.push(item);
					continue;
				}
				const relativeDate = getRelativeDate(now, item.data.updatedAt);
				const group = groupOrder.find((name) => name === relativeDate) ?? "Older";
				const items = groups.get(group) ?? [];
				items.push(item);
				groups.set(group, items);
			}
			return [...groupOrder.flatMap((group) => {
				const items = (groups.get(group) ?? []).sort((a, b) => Date.parse(b.data?.updatedAt ?? "") - Date.parse(a.data?.updatedAt ?? ""));
				return items.length > 0 ? [{
					id: `group-${group}`,
					label: groupLabels[group],
					header: true
				}, ...items] : [];
			}), ...undated];
		});
		const cancelPendingItemClick = () => {
			if (pendingItemClick) clearTimeout(pendingItemClick);
			pendingItemClick = void 0;
		};
		const handleItemClick = (event, item) => {
			if (!props.itemDoubleClickEnabled || item.disabled) return;
			event.stopPropagation();
			cancelPendingItemClick();
			if (event.detail > 1) return;
			pendingItemClick = setTimeout(() => {
				pendingItemClick = void 0;
				emit("select", item.id);
				dropdownRef.value?.close();
			}, DOUBLE_CLICK_DELAY);
		};
		const handleItemDoubleClick = (item) => {
			if (item.disabled) return;
			cancelPendingItemClick();
			emit("item-dblclick", item.id);
		};
		onBeforeUnmount(cancelPendingItemClick);
		useEventListener(document, "keydown", (event) => {
			if (!(event.target instanceof HTMLElement)) return;
			const menu = event.target.closest("[data-menu-content]");
			if (menu?.id !== contentId.value) return;
			if (event.key === "Tab") {
				const focusableElements = [...menu.querySelectorAll("*")].filter((element) => element.tabIndex >= 0 && !element.matches(":disabled, [aria-disabled=\"true\"]"));
				const currentIndex = focusableElements.indexOf(event.target);
				const nextIndex = currentIndex + (event.shiftKey ? -1 : 1);
				if (currentIndex >= 0 && focusableElements[nextIndex]) event.stopPropagation();
				return;
			}
			if (event.key === "Enter" && event.target.closest("button")) event.stopPropagation();
		}, { capture: true });
		const highlightFirstItem = () => {
			dropdownRef.value?.highlightFirstItem();
		};
		__expose({ highlightFirstItem });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				id: contentId.value,
				"model-value": props.modelValue,
				items: groupedItems.value,
				loading: props.loading,
				"max-height": props.maxHeight,
				"data-test-id": props.dataTestId,
				"content-test-id": props.contentTestId,
				"search-placeholder": props.searchPlaceholder,
				"empty-text": props.emptyText,
				"extra-popper-class": _ctx.$style.menuContent,
				width: "calc(var(--spacing--5xl) + var(--spacing--3xl) + var(--spacing--xl))",
				placement: "bottom-start",
				searchable: "",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", $event)),
				onSearch: _cache[2] || (_cache[2] = ($event) => emit("search", $event)),
				onSelect: _cache[3] || (_cache[3] = ($event) => emit("select", $event))
			}, createSlots({
				"item-label": withCtx(({ item, ui }) => [item.data && props.editingItemId === item.id ? renderSlot(_ctx.$slots, "item-edit", {
					key: 0,
					item,
					ui
				}) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass([ui.class, _ctx.$style.itemLabel]),
					title: item.label,
					size: "medium",
					color: item.disabled ? "text-xlight" : "text-dark",
					onClick: ($event) => handleItemClick($event, item),
					onDblclick: withModifiers(($event) => handleItemDoubleClick(item), ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1032, [
					"class",
					"title",
					"color",
					"onClick",
					"onDblclick"
				]))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data && (slots["item-trailing"] || item.data.actions?.length) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([ui.class, _ctx.$style.itemTrailing]),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [renderSlot(_ctx.$slots, "item-trailing", { item }), item.data.actions?.length ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 0,
					items: item.data.actions,
					class: normalizeClass(_ctx.$style.actionDropdown),
					placement: "bottom-start",
					disabled: props.actionsDisabled || item.disabled,
					onSelect: ($event) => emit("action", $event, item.id)
				}, {
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "ellipsis-vertical",
						disabled: props.actionsDisabled || item.disabled,
						"aria-label": props.actionButtonLabel
					}, null, 8, ["disabled", "aria-label"])]),
					_: 2
				}, 1032, [
					"items",
					"class",
					"disabled",
					"onSelect"
				])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [
				slots.trigger ? {
					name: "trigger",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
					key: "0"
				} : void 0,
				slots.loading ? {
					name: "loading",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "loading")]),
					key: "1"
				} : void 0,
				slots.empty ? {
					name: "empty",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
					key: "2"
				} : void 0,
				slots.footer ? {
					name: "footer",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
					key: "3"
				} : void 0
			]), 1032, [
				"id",
				"model-value",
				"items",
				"loading",
				"max-height",
				"data-test-id",
				"content-test-id",
				"search-placeholder",
				"empty-text",
				"extra-popper-class"
			]);
		};
	}
});
var ChatHistoryDropdown_vue_vue_type_style_index_0_lang_module_default = {
	menuContent: "_menuContent_zhgg1_1",
	itemLabel: "_itemLabel_zhgg1_5",
	itemTrailing: "_itemTrailing_zhgg1_13",
	actionDropdown: "_actionDropdown_zhgg1_19"
};
var ChatHistoryDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatHistoryDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatHistoryDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["accept"];
var ChatInputBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatInputBase",
	props: {
		modelValue: {},
		placeholder: { default: void 0 },
		isStreaming: { type: Boolean },
		canSubmit: { type: Boolean },
		disabled: { type: Boolean },
		showVoice: { type: Boolean },
		showAttach: { type: Boolean },
		showAttachButton: {
			type: Boolean,
			default: true
		},
		acceptedMimeTypes: { default: void 0 },
		attachedEncodedBytes: { default: 0 },
		autosize: {
			type: [Boolean, Object],
			default: () => ({
				minRows: 2,
				maxRows: 6
			})
		},
		buttonLabel: { default: void 0 },
		activeRequiresFocus: {
			type: Boolean,
			default: false
		},
		maxLength: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"submit",
		"stop",
		"tab",
		"files-selected"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const isFocused = ref(false);
		const fileDrop = useFileDrop(computed(() => Boolean(props.showAttach && !props.disabled && !props.isStreaming)), handleFiles, computed(() => (props.acceptedMimeTypes ?? "").split(",").map((type) => type.trim()).filter(Boolean)));
		const submitMuted = computed(() => props.activeRequiresFocus && !isFocused.value);
		const committedSpokenMessage = ref("");
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		watch(speechInput.result, (spoken) => {
			if (props.showVoice) {
				const prefix = committedSpokenMessage.value;
				emit("update:modelValue", prefix + (prefix.length > 0 ? " " : "") + spoken.trimStart());
			}
		});
		watch(speechInput.isFinal, (final) => {
			if (final && props.showVoice) committedSpokenMessage.value = props.modelValue;
		}, { flush: "post" });
		function handleMic() {
			committedSpokenMessage.value = props.modelValue;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function handleAttach() {
			fileInputRef.value?.click();
		}
		function focusInput(options) {
			inputRef.value?.focusInput(options);
		}
		/**
		* Keep the files the backend will accept and warn about the rest.
		*
		* Checked here only so the user finds out before uploading megabytes — the backend
		* enforces the same limits authoritatively. Both checks convert to the encoded size
		* first: the limits are denominated in base64 bytes, so comparing `File.size` against
		* them directly would admit files ~4/3 too large.
		*/
		function withinSizeLimit(files) {
			const oversized = files.filter((file) => exceedsAttachmentSizeLimit(file.size));
			if (oversized.length > 0) toast.showError(new Error(i18n.baseText("chat.attachment.tooLarge.message", { interpolate: {
				fileNames: oversized.map((file) => file.name).join(", "),
				limit: formatAttachmentSizeLimit()
			} })), i18n.baseText("chat.attachment.tooLarge.title"));
			let usedBytes = props.attachedEncodedBytes;
			const accepted = [];
			let droppedForBudget = false;
			for (const file of files) {
				if (exceedsAttachmentSizeLimit(file.size)) continue;
				const encoded = base64EncodedSize(file.size);
				if (usedBytes + encoded > 16777216) {
					droppedForBudget = true;
					continue;
				}
				usedBytes += encoded;
				accepted.push(file);
			}
			if (droppedForBudget) toast.showError(new Error(i18n.baseText("chat.attachment.totalTooLarge.message", { interpolate: { limit: formatTotalAttachmentSizeLimit() } })), i18n.baseText("chat.attachment.totalTooLarge.title"));
			return accepted;
		}
		function handleFiles(files) {
			const accepted = withinSizeLimit(files.filter((file) => isFileAcceptedByAccept(file.name, file.type, props.acceptedMimeTypes ?? "")));
			if (accepted.length > 0) emit("files-selected", accepted);
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			handleFiles(Array.from(files));
			target.value = "";
			focusInput();
		}
		function handleKeydown(e) {
			const isTextareaFocused = e.target?.tagName === "TEXTAREA";
			if (e.key === "Tab" && !e.shiftKey && isTextareaFocused) {
				e.preventDefault();
				emit("tab");
			}
		}
		function handleSubmit() {
			if (!props.canSubmit) return;
			speechInput.stop();
			emit("submit");
		}
		__expose({
			focus: focusInput,
			openFilePicker: handleAttach
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.inputWrapper, {
					[_ctx.$style.focusGatedSubmit]: __props.activeRequiresFocus,
					[_ctx.$style.submitMuted]: submitMuted.value
				}]),
				onDragenter: _cache[4] || (_cache[4] = (...args) => unref(fileDrop).handleDragEnter && unref(fileDrop).handleDragEnter(...args)),
				onDragleave: _cache[5] || (_cache[5] = (...args) => unref(fileDrop).handleDragLeave && unref(fileDrop).handleDragLeave(...args)),
				onDragover: _cache[6] || (_cache[6] = (...args) => unref(fileDrop).handleDragOver && unref(fileDrop).handleDragOver(...args)),
				onDrop: _cache[7] || (_cache[7] = (...args) => unref(fileDrop).handleDrop && unref(fileDrop).handleDrop(...args)),
				onPaste: _cache[8] || (_cache[8] = (...args) => unref(fileDrop).handlePaste && unref(fileDrop).handlePaste(...args)),
				onKeydownCapture: handleKeydown
			}, [
				unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropOverlay),
					"data-test-id": "chat-input-drop-overlay"
				}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatInputBase.dropOverlay")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				__props.showAttach ? (openBlock(), createElementBlock("input", {
					key: 1,
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: handleFileSelect
				}, null, 42, _hoisted_1$3)) : createCommentVNode("", true),
				createVNode(unref(N8nChatInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": __props.modelValue,
					placeholder: __props.placeholder,
					streaming: __props.isStreaming,
					disabled: __props.disabled,
					"submit-disabled": !__props.canSubmit,
					"button-label": props.buttonLabel,
					"send-button-test-id": "instance-ai-send-button",
					"stop-button-test-id": "instance-ai-stop-button",
					autosize: __props.autosize,
					layout: __props.autosize === false ? "single-line" : "multiline",
					"max-length": __props.maxLength,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
					onSubmit: handleSubmit,
					onStop: _cache[1] || (_cache[1] = ($event) => emit("stop")),
					onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
					onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
				}, {
					leading: withCtx(() => [renderSlot(_ctx.$slots, "header"), renderSlot(_ctx.$slots, "attachments")]),
					"left-actions": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
					"right-actions": withCtx(() => [__props.showAttach && __props.showAttachButton ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("chatInputBase.button.attach"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.disabled || __props.isStreaming,
							icon: "paperclip",
							"icon-size": "large",
							"data-test-id": "chat-input-attach-button",
							onClick: withModifiers(handleAttach, ["stop"])
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true), __props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						content: unref(i18n).baseText("chatInputBase.button.dictate"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.disabled || __props.isStreaming,
							icon: unref(speechInput).isListening.value ? "square" : "mic",
							class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
							"icon-size": "large",
							"data-test-id": "chat-input-voice-button",
							onClick: withModifiers(handleMic, ["stop"])
						}, null, 8, [
							"disabled",
							"icon",
							"class"
						])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					_: 3
				}, 8, [
					"model-value",
					"placeholder",
					"streaming",
					"disabled",
					"submit-disabled",
					"button-label",
					"autosize",
					"layout",
					"max-length"
				])
			], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_1mwrv_2",
	dropOverlay: "_dropOverlay_1mwrv_7",
	fileInput: "_fileInput_1mwrv_21",
	recording: "_recording_1mwrv_25",
	focusGatedSubmit: "_focusGatedSubmit_1mwrv_31",
	submitMuted: "_submitMuted_1mwrv_35"
};
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/NodeChip.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-test-id", "aria-label"];
var _hoisted_2$1 = ["aria-label"];
var _hoisted_3$1 = ["title"];
var NodeChip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeChip",
	props: {
		label: {},
		nodeType: {},
		testid: {},
		icon: {},
		removable: { type: Boolean },
		expanded: { type: [Boolean, null] }
	},
	emits: [
		"remove",
		"toggle-expand",
		"enter-panel"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootRef = useTemplateRef("root");
		__expose({ focus: () => rootRef.value?.focus() });
		function handleKeydown(event) {
			const isExpandable = props.expanded !== null && props.expanded !== void 0;
			if (event.key === "Enter" && isExpandable) {
				event.preventDefault();
				event.stopPropagation();
				emit("toggle-expand");
				return;
			}
			if (event.key === "Escape" && props.expanded === true) {
				event.preventDefault();
				event.stopPropagation();
				emit("toggle-expand");
				return;
			}
			if (event.key === "ArrowDown" && isExpandable) {
				event.preventDefault();
				event.stopPropagation();
				emit("enter-panel");
				return;
			}
			if (isNodeChipRemovalKey(event.key) && props.removable) {
				event.preventDefault();
				event.stopPropagation();
				emit("remove");
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				ref: "root",
				class: normalizeClass([_ctx.$style.chip, { [_ctx.$style.expandable]: __props.expanded != null }]),
				"data-test-id": __props.testid,
				tabindex: "0",
				role: "group",
				"aria-label": __props.label,
				onKeydown: handleKeydown,
				onClick: _cache[1] || (_cache[1] = ($event) => __props.expanded != null && emit("toggle-expand"))
			}, [__props.removable ? (openBlock(), createElementBlock("button", {
				key: 0,
				type: "button",
				class: normalizeClass([_ctx.$style.iconBtn, _ctx.$style.leadingBtn]),
				"data-test-id": "nodes-chip-remove",
				tabindex: "-1",
				"aria-label": unref(i18n).baseText("generic.delete"),
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("remove"), ["stop"]))
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.leadingRemove) }, [createVNode(unref(N8nIcon_default), {
				icon: "x",
				size: "large"
			})], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.leadingIcon) }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.icon,
				size: "small"
			}, null, 8, ["icon"])) : __props.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
				key: 1,
				"node-type": __props.nodeType,
				size: 12
			}, null, 8, ["node-type"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "crosshair",
				size: "small"
			}))], 2)], 10, _hoisted_2$1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.icon,
				size: "xsmall"
			}, null, 8, ["icon"])) : __props.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
				key: 1,
				"node-type": __props.nodeType,
				size: 12
			}, null, 8, ["node-type"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "crosshair",
				size: "xsmall"
			}))], 64)), createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.name),
				title: __props.label
			}, toDisplayString(__props.label), 11, _hoisted_3$1)], 42, _hoisted_1$2);
		};
	}
});
var NodeChip_vue_vue_type_style_index_0_lang_module_default = {
	chip: "_chip_175d0_1",
	expandable: "_expandable_175d0_18",
	name: "_name_175d0_22",
	iconBtn: "_iconBtn_175d0_30",
	leadingBtn: "_leadingBtn_175d0_46",
	leadingRemove: "_leadingRemove_175d0_57",
	leadingIcon: "_leadingIcon_175d0_58"
};
var NodeChip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeChip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeChip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/NodesAttachmentChips.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["onFocusout"];
var _hoisted_2 = ["onFocusout"];
var _hoisted_3 = ["aria-label", "onKeydown"];
var _hoisted_4 = ["aria-label", "onClick"];
var NODE_BUNDLE_THRESHOLD = 2;
var COLLAPSE_CHIP_THRESHOLD = 6;
var NodesAttachmentChips_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodesAttachmentChips",
	props: {
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: ["update:attachment", "remove-all"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const injectedWorkflowId = inject(WorkflowIdKey, computed(() => ""));
		const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(props.attachment.workflowId || injectedWorkflowId.value || "unknown")));
		function resolveAttachedNode(node) {
			const store = workflowDocumentStore.value;
			const workflowNode = store.getNodeById(node.id) ?? (node.name ? store.getNodeByName(node.name) : void 0) ?? null;
			const nodeType = workflowNode ? nodeTypesStore.getNodeType(workflowNode.type, workflowNode.typeVersion) : null;
			return {
				id: node.id,
				name: node.name ?? workflowNode?.name ?? "",
				nodeType,
				workflowNode
			};
		}
		const chips = computed(() => {
			return props.attachment.sets.map((set, setIndex) => {
				if (set.canvasGroupId) return {
					key: `set-${setIndex}`,
					testid: "nodes-chip-group",
					label: set.canvasGroupName || i18n.baseText("instanceAi.nodeContext.nodesBundle", { interpolate: { count: set.nodes.length } }),
					icon: "layers",
					setIndex
				};
				if (set.nodes.length >= NODE_BUNDLE_THRESHOLD) return {
					key: `set-${setIndex}`,
					testid: "nodes-chip-bundle",
					label: i18n.baseText("instanceAi.nodeContext.nodesBundle", { interpolate: { count: set.nodes.length } }),
					icon: "layers",
					setIndex,
					panel: set.nodes.map((node) => resolveAttachedNode(node))
				};
				const resolved = resolveAttachedNode(set.nodes[0]);
				return {
					key: `set-${setIndex}`,
					testid: "nodes-chip-node",
					label: resolved.name,
					nodeType: resolved.nodeType,
					setIndex
				};
			});
		});
		function removeSet(index) {
			const sets = props.attachment.sets.filter((_, i) => i !== index);
			if (expandedSetIndex.value !== null) {
				if (expandedSetIndex.value === index) expandedSetIndex.value = null;
				else if (expandedSetIndex.value > index) expandedSetIndex.value -= 1;
			}
			if (!sets.length) {
				emit("remove-all");
				return;
			}
			emit("update:attachment", {
				...props.attachment,
				sets
			});
		}
		function removeNode(setIndex, nodeIndex) {
			const nodes = props.attachment.sets[setIndex].nodes.filter((_, i) => i !== nodeIndex);
			if (!nodes.length) {
				removeSet(setIndex);
				return;
			}
			const sets = props.attachment.sets.map((s, i) => i === setIndex ? {
				...s,
				nodes,
				inputNode: void 0,
				outputNode: void 0
			} : s);
			emit("update:attachment", {
				...props.attachment,
				sets
			});
		}
		function removeChip(chip) {
			if (chip.nodeIndex !== void 0) removeNode(chip.setIndex, chip.nodeIndex);
			else removeSet(chip.setIndex);
		}
		function handlePanelRowKeydown(setIndex, nodeIndex, event) {
			if (isNodeChipRemovalKey(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				removeNode(setIndex, nodeIndex);
				focusPanelRowAfterRemoval(nodeIndex);
				return;
			}
			if (event.key === "ArrowDown" || event.key === "ArrowUp") {
				event.preventDefault();
				event.stopPropagation();
				const direction = event.key === "ArrowDown" ? 1 : -1;
				focusAdjacentPanelRow(event.currentTarget, direction);
				return;
			}
			if (event.key === "Escape") {
				event.preventDefault();
				event.stopPropagation();
				closePanel();
			}
		}
		function focusAdjacentPanelRow(currentRow, direction) {
			const rows = Array.from(currentRow.parentElement?.children ?? []);
			rows[rows.indexOf(currentRow) + direction]?.focus();
		}
		async function focusPanelRowAfterRemoval(removedIndex) {
			await nextTick();
			const rows = Array.from(panelRef.value?.querySelectorAll("[role=\"option\"]") ?? []);
			if (!rows.length) return;
			rows[Math.min(removedIndex, rows.length - 1)]?.focus();
		}
		function closePanel() {
			expandedSetIndex.value = null;
			openChipRef.value?.focus();
		}
		function handlePanelFocusOut(setIndex) {
			if (expandedSetIndex.value !== setIndex) return;
			setTimeout(() => {
				if (expandedSetIndex.value !== setIndex) return;
				const active = document.activeElement;
				if (openChipAnchor.value?.contains(active) || panelRef.value?.contains(active)) return;
				expandedSetIndex.value = null;
			}, 0);
		}
		const expandedSetIndex = ref(null);
		const panelRef = ref(null);
		const chipAnchors = /* @__PURE__ */ new Map();
		const openChipAnchor = ref(null);
		const chipRefs = /* @__PURE__ */ new Map();
		const openChipRef = ref(null);
		const panelStyle = ref({});
		function setChipAnchor(setIndex, el) {
			if (el) chipAnchors.set(setIndex, el);
			else chipAnchors.delete(setIndex);
		}
		function setChipRef(setIndex, instance) {
			if (instance) chipRefs.set(setIndex, instance);
			else chipRefs.delete(setIndex);
		}
		function positionPanel(setIndex) {
			const anchor = chipAnchors.get(setIndex) ?? null;
			openChipAnchor.value = anchor;
			openChipRef.value = chipRefs.get(setIndex) ?? null;
			if (!anchor) return;
			const rect = anchor.getBoundingClientRect();
			const maxHeight = Math.max(0, window.innerHeight - rect.bottom - 12);
			panelStyle.value = {
				top: `${rect.bottom + 4}px`,
				left: `${rect.left}px`,
				maxHeight: `${maxHeight}px`
			};
		}
		function toggleExpanded(index) {
			if (expandedSetIndex.value === index) {
				expandedSetIndex.value = null;
				return;
			}
			positionPanel(index);
			expandedSetIndex.value = index;
		}
		async function enterPanel(setIndex) {
			positionPanel(setIndex);
			expandedSetIndex.value = setIndex;
			await nextTick();
			panelRef.value?.querySelector("[role=\"option\"]")?.focus();
		}
		const isCollapsed = ref(false);
		const showCollapseToggle = computed(() => chips.value.length > COLLAPSE_CHIP_THRESHOLD);
		const totalNodeCount = computed(() => props.attachment.sets.reduce((sum, set) => sum + set.nodes.length, 0));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [isCollapsed.value ? (openBlock(), createBlock(NodeChip_default, {
				key: 0,
				testid: "nodes-chips-collapsed-summary",
				label: unref(i18n).baseText("instanceAi.nodeContext.nodesBundle", { interpolate: { count: totalNodeCount.value } }),
				icon: "layers",
				removable: __props.isRemovable,
				expanded: null,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove-all"))
			}, null, 8, ["label", "removable"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(chips.value, (chip) => {
				return openBlock(), createElementBlock("span", {
					key: chip.key,
					ref_for: true,
					ref: (el) => setChipAnchor(chip.setIndex, el),
					class: normalizeClass(_ctx.$style.chipAnchor),
					onFocusout: ($event) => handlePanelFocusOut(chip.setIndex)
				}, [createVNode(NodeChip_default, {
					ref_for: true,
					ref: (el) => setChipRef(chip.setIndex, el),
					label: chip.label,
					testid: chip.testid,
					icon: chip.icon,
					"node-type": chip.nodeType,
					removable: __props.isRemovable,
					expanded: chip.panel ? expandedSetIndex.value === chip.setIndex : null,
					onRemove: ($event) => removeChip(chip),
					onToggleExpand: ($event) => toggleExpanded(chip.setIndex),
					onEnterPanel: ($event) => enterPanel(chip.setIndex)
				}, null, 8, [
					"label",
					"testid",
					"icon",
					"node-type",
					"removable",
					"expanded",
					"onRemove",
					"onToggleExpand",
					"onEnterPanel"
				]), (openBlock(), createBlock(Teleport, { to: "body" }, [chip.panel && expandedSetIndex.value === chip.setIndex ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_for: true,
					ref: (el) => panelRef.value = el,
					class: normalizeClass(_ctx.$style.panel),
					style: normalizeStyle(panelStyle.value),
					"data-test-id": "nodes-chip-panel",
					onFocusout: ($event) => handlePanelFocusOut(chip.setIndex)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(chip.panel, (node, nodeIndex) => {
					return openBlock(), createElementBlock("div", {
						key: node.id,
						class: normalizeClass(_ctx.$style.panelRow),
						"data-test-id": "nodes-chip-panel-row",
						tabindex: "-1",
						role: "option",
						"aria-label": node.name,
						onKeydown: ($event) => handlePanelRowKeydown(chip.setIndex, nodeIndex, $event)
					}, [__props.isRemovable ? (openBlock(), createElementBlock("button", {
						key: 0,
						type: "button",
						class: normalizeClass(_ctx.$style.panelRemove),
						"data-test-id": "nodes-chip-panel-remove",
						tabindex: "-1",
						"aria-label": unref(i18n).baseText("generic.delete"),
						onClick: withModifiers(($event) => removeNode(chip.setIndex, nodeIndex), ["stop"])
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRemoveX) }, [createVNode(unref(N8nIcon_default), {
						icon: "x",
						size: "large"
					})], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRowLeadingIcon) }, [node.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": node.nodeType,
						node: node.workflowNode ?? void 0,
						size: 16
					}, null, 8, ["node-type", "node"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "crosshair",
						size: "large"
					}))], 2)], 10, _hoisted_4)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [node.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": node.nodeType,
						node: node.workflowNode ?? void 0,
						size: 16,
						class: normalizeClass(_ctx.$style.panelRowIcon)
					}, null, 8, [
						"node-type",
						"node",
						"class"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "crosshair",
						size: "xsmall"
					}))], 64)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRowName) }, toDisplayString(node.name), 3)], 42, _hoisted_3);
				}), 128))], 46, _hoisted_2)) : createCommentVNode("", true)]))], 42, _hoisted_1$1);
			}), 128)), showCollapseToggle.value ? (openBlock(), createElementBlock("button", {
				key: 2,
				type: "button",
				class: normalizeClass(_ctx.$style.collapseToggle),
				"data-test-id": "nodes-chips-collapse",
				onClick: _cache[1] || (_cache[1] = withModifiers(($event) => isCollapsed.value = !isCollapsed.value, ["stop"]))
			}, toDisplayString(isCollapsed.value ? unref(i18n).baseText("instanceAi.nodeContext.expand") : unref(i18n).baseText("instanceAi.nodeContext.collapse")), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
var NodesAttachmentChips_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_twx7u_1",
	chipAnchor: "_chipAnchor_twx7u_8",
	panel: "_panel_twx7u_12",
	panelRow: "_panelRow_twx7u_24",
	panelRowIcon: "_panelRowIcon_twx7u_37",
	panelRowName: "_panelRowName_twx7u_41",
	panelRemove: "_panelRemove_twx7u_50",
	panelRemoveX: "_panelRemoveX_twx7u_65",
	panelRowLeadingIcon: "_panelRowLeadingIcon_twx7u_66",
	collapseToggle: "_collapseToggle_twx7u_87"
};
var NodesAttachmentChips_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodesAttachmentChips_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodesAttachmentChips_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var AttachmentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AttachmentPreview",
	props: {
		file: {},
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: [
		"remove",
		"remove-resource",
		"update:attachment"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const loading = ref(true);
		const nodesAttachment = computed(() => props.attachment?.type === "nodes" ? props.attachment : void 0);
		const workflowAttachment = computed(() => props.attachment?.type === "workflow" ? props.attachment : void 0);
		const agentAttachment = computed(() => props.attachment?.type === "agent" ? props.attachment : void 0);
		const fileAttachment = computed(() => props.attachment?.type === "file" ? props.attachment : void 0);
		const mimeType = computed(() => props.file?.type ?? fileAttachment.value?.mimeType ?? "");
		const fileName = computed(() => props.file?.name ?? fileAttachment.value?.fileName ?? "");
		const isImage = computed(() => mimeType.value.startsWith("image/"));
		const objectUrl = computed(() => {
			if (props.file && isImage.value) return URL.createObjectURL(props.file);
			return null;
		});
		const thumbnailSrc = computed(() => {
			if (objectUrl.value) return objectUrl.value;
			if (fileAttachment.value && isImage.value) return `data:${fileAttachment.value.mimeType};base64,${fileAttachment.value.data}`;
			return null;
		});
		const fallbackFile = computed(() => {
			if (props.file) return props.file;
			if (fileAttachment.value) return new File([], fileAttachment.value.fileName, { type: fileAttachment.value.mimeType });
			return new File([], "unknown");
		});
		function handleLoad() {
			loading.value = false;
		}
		function handleRemove() {
			if (props.file) emit("remove", props.file);
		}
		onBeforeUnmount(() => {
			if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
		});
		return (_ctx, _cache) => {
			return nodesAttachment.value ? (openBlock(), createBlock(NodesAttachmentChips_default, {
				key: 0,
				attachment: nodesAttachment.value,
				"is-removable": __props.isRemovable ?? false,
				"onUpdate:attachment": _cache[0] || (_cache[0] = ($event) => emit("update:attachment", $event)),
				onRemoveAll: _cache[1] || (_cache[1] = ($event) => emit("remove-resource"))
			}, null, 8, ["attachment", "is-removable"])) : workflowAttachment.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.resourceChip),
				"data-test-id": "attachment-preview-resource"
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "small"
				}),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.resourceName) }, toDisplayString(workflowAttachment.value.name ?? "Workflow"), 3),
				workflowAttachment.value.executionId ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "play",
					size: "xsmall"
				})) : createCommentVNode("", true)
			], 2)) : agentAttachment.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.resourceChip),
				"data-test-id": "attachment-preview-resource"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "robot",
				size: "small"
			}), createBaseVNode("span", { class: normalizeClass(_ctx.$style.resourceName) }, toDisplayString(agentAttachment.value.name ?? "Agent"), 3)], 2)) : isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.thumbnailWrapper)
			}, [
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loadingSkeleton)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("img", {
					src: thumbnailSrc.value,
					alt: fileName.value,
					class: normalizeClass(_ctx.$style.thumbnail),
					onLoad: handleLoad
				}, null, 42, _hoisted_1),
				__props.isRemovable ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.removeBtn),
					"data-test-id": "attachment-preview-remove",
					onClick: withModifiers(handleRemove, ["stop"])
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)) : createCommentVNode("", true)
			], 2)) : props.file || fileAttachment.value ? (openBlock(), createBlock(ChatFile_default, {
				key: 4,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[2] || (_cache[2] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"])) : createCommentVNode("", true);
		};
	}
});
var AttachmentPreview_vue_vue_type_style_index_0_lang_module_default = {
	resourceChip: "_resourceChip_cqn15_1",
	resourceName: "_resourceName_cqn15_14",
	thumbnailWrapper: "_thumbnailWrapper_cqn15_21",
	thumbnail: "_thumbnail_cqn15_21",
	loadingSkeleton: "_loadingSkeleton_cqn15_38",
	removeBtn: "_removeBtn_cqn15_48"
};
var AttachmentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AttachmentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AttachmentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/constants.ts
/** Raised character limit for chat surfaces where users paste long, externally-drafted prompts (agent builder, instance AI). */
var EXTENDED_PROMPT_MAX_LENGTH = 25e3;
//#endregion
export { ChatHistoryDropdown_default as i, AttachmentPreview_default as n, ChatInputBase_default as r, EXTENDED_PROMPT_MAX_LENGTH as t };

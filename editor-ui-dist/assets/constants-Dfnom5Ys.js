import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, y as Teleport } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-cuvvA3pI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-CgWQM0v1.js";
import { t as N8nIconButton_default } from "./N8nIconButton-lwlzJlc2.js";
import { D as useSpeechRecognition } from "./dist-DHr3MfZO.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DD_DX1R3.js";
import { t as N8nChatInput_default } from "./N8nChatInput-Dh56hq7t.js";
import { H as useNodeTypesStore, T as createWorkflowDocumentId, j as useWorkflowDocumentStore } from "./workflows.store-fOIpEAUT.js";
import { dn as exceedsAttachmentSizeLimit, fn as formatAttachmentSizeLimit, on as base64EncodedSize, pn as formatTotalAttachmentSizeLimit } from "./src-saBS3VLT.js";
import { n as useToast } from "./useToast-Cvy_I-4R.js";
import { Ca as WorkflowIdKey } from "./constants-CyB1HP9v.js";
import { t as NodeIcon_default } from "./NodeIcon-Bpm3YSOB.js";
import { E as isNodeChipRemovalKey } from "./constants-oMejWYMJ.js";
import { t as ChatFile_default } from "./ChatFile-CEimYwDS.js";
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
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			const accepted = withinSizeLimit(Array.from(files));
			if (accepted.length > 0) emit("files-selected", accepted);
			target.value = "";
			focusInput();
		}
		function handlePaste(e) {
			if (!props.showAttach || !e.clipboardData?.files.length) return;
			const files = Array.from(e.clipboardData.files);
			if (files.length > 0) {
				e.preventDefault();
				const accepted = withinSizeLimit(files);
				if (accepted.length > 0) emit("files-selected", accepted);
			}
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
				onPaste: handlePaste,
				onKeydownCapture: handleKeydown
			}, [__props.showAttach ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				class: normalizeClass(_ctx.$style.fileInput),
				accept: __props.acceptedMimeTypes,
				multiple: "",
				onChange: handleFileSelect
			}, null, 42, _hoisted_1$3)) : createCommentVNode("", true), createVNode(unref(N8nChatInput_default), {
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
			])], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_w2kdo_2",
	fileInput: "_fileInput_w2kdo_6",
	recording: "_recording_w2kdo_10",
	focusGatedSubmit: "_focusGatedSubmit_w2kdo_16",
	submitMuted: "_submitMuted_w2kdo_20"
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
export { AttachmentPreview_default as n, ChatInputBase_default as r, EXTENDED_PROMPT_MAX_LENGTH as t };

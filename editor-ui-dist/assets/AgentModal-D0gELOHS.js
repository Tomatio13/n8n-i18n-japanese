import { $d as nextTick, Ad as withModifiers, Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, _f as useTemplateRef, cp as normalizeClass, gf as useSlots, iu as FocusScope_default, lf as renderSlot, of as openBlock, pp as toDisplayString, sf as provide, xf as withCtx } from "./vendor-BVSPIsYM.js";
import { AT as _plugin_vue_export_helper_default, DT as N8nIcon_default, ET as N8nButton_default, FT as useI18n, TT as N8nIconButton_default, Z_ as ParameterInputModalContextKey, _C as DialogHeader_default, gC as DialogTitle_default, hC as Dialog_default, mC as DialogFooter_default, vT as N8nText_default, xC as N8nInlineTextEdit_default } from "./app-Ne537q-x.js";
//#region src/features/agents/components/modals/AgentModal.vue?vue&type=script&setup=true&lang.ts
var AgentModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentModal",
	props: {
		open: { type: Boolean },
		title: {},
		editableTitle: {
			type: Boolean,
			default: false
		},
		titlePlaceholder: { default: "" },
		titleMaxLength: { default: 128 },
		titleError: { default: "" },
		showBack: {
			type: Boolean,
			default: false
		},
		showFooter: {
			type: Boolean,
			default: void 0
		},
		showCancel: {
			type: Boolean,
			default: true
		},
		bodyScrollable: {
			type: Boolean,
			default: true
		},
		bodyFlush: {
			type: Boolean,
			default: false
		},
		busy: {
			type: Boolean,
			default: false
		},
		size: { default: "2xlarge" },
		stacked: {
			type: Boolean,
			default: false
		},
		trapFocus: {
			type: Boolean,
			default: true
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"update:open",
		"update:title",
		"back",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const i18n = useI18n();
		const body = useTemplateRef("body");
		const parameterDialogs = ref(/* @__PURE__ */ new Set());
		provide(ParameterInputModalContextKey, {
			openDialogs: parameterDialogs,
			appendTo: "body"
		});
		const trapFocus = computed(() => props.trapFocus && parameterDialogs.value.size === 0);
		const hasFooter = computed(() => props.showFooter ?? Boolean(slots.footer || slots.footerLeft || slots.footerBeforeCancel || slots.footerActions));
		const dismissalBlocked = computed(() => props.busy || !trapFocus.value);
		function onOpenChange(open) {
			if (!open && dismissalBlocked.value) return;
			emit("update:open", open);
		}
		function close() {
			if (!dismissalBlocked.value) emit("update:open", false);
		}
		function onBack() {
			if (!dismissalBlocked.value) emit("back");
		}
		function onEscapeKeyDown(event) {
			const isOutsideDialog = event.target instanceof Node && !body.value?.closest("[role=\"dialog\"]")?.contains(event.target);
			if (dismissalBlocked.value || isOutsideDialog) event.preventDefault();
		}
		function onInteractOutside(event) {
			if (dismissalBlocked.value) event.preventDefault();
			emit("interactOutside", event);
		}
		function onOpenAutoFocus(event) {
			const autofocusTarget = body.value?.querySelector("[data-agent-modal-autofocus], input:not([type=\"hidden\"]):not([disabled]):not([tabindex=\"-1\"]), textarea:not([disabled]), select:not([disabled]), [contenteditable=\"true\"]") ?? body.value?.querySelector("button:not([disabled])");
			if (!autofocusTarget) return;
			event.preventDefault();
			nextTick(() => autofocusTarget.focus());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: props.open,
				size: props.size,
				stacked: props.stacked,
				"trap-focus": trapFocus.value,
				"disable-outside-pointer-events": props.disableOutsidePointerEvents && parameterDialogs.value.size === 0,
				"show-close-button": false,
				onEscapeKeyDown,
				onInteractOutside,
				onOpenAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [
							props.showBack ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 0,
								icon: "arrow-left",
								variant: "ghost",
								size: "small",
								disabled: dismissalBlocked.value,
								class: normalizeClass(_ctx.$style.backButton),
								"aria-label": unref(i18n).baseText("generic.back"),
								"data-testid": "agent-modal-back",
								onClick: onBack
							}, null, 8, [
								"disabled",
								"class",
								"aria-label"
							])) : createCommentVNode("", true),
							createVNode(unref(DialogTitle_default), { "as-child": "" }, {
								default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [props.editableTitle ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
									key: 0,
									"model-value": props.title,
									"max-length": props.titleMaxLength,
									"max-width": "100%",
									placeholder: props.titlePlaceholder,
									disabled: props.busy,
									class: normalizeClass(_ctx.$style.editableTitle),
									"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:title", $event))
								}, null, 8, [
									"model-value",
									"max-length",
									"placeholder",
									"disabled",
									"class"
								])) : (openBlock(), createElementBlock("span", {
									key: 1,
									class: normalizeClass(_ctx.$style.title)
								}, toDisplayString(props.title), 3)), props.editableTitle ? (openBlock(), createBlock(unref(N8nIcon_default), {
									key: 2,
									icon: "pencil",
									size: "small",
									class: normalizeClass(_ctx.$style.editIcon),
									"aria-hidden": "true"
								}, null, 8, ["class"])) : createCommentVNode("", true)], 2)]),
								_: 1
							}),
							_ctx.$slots.headerActions ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.headerActions)
							}, [renderSlot(_ctx.$slots, "headerActions")], 2)) : createCommentVNode("", true),
							createVNode(unref(N8nIconButton_default), {
								icon: "x",
								variant: "ghost",
								size: "small",
								disabled: dismissalBlocked.value,
								"aria-label": unref(i18n).baseText("generic.close"),
								"data-testid": "dialog-close-button",
								class: normalizeClass(_ctx.$style.closeButton),
								onClick: close
							}, null, 8, [
								"disabled",
								"aria-label",
								"class"
							])
						], 2), props.titleError ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "danger",
							class: normalizeClass([_ctx.$style.titleError, props.showBack && _ctx.$style.titleErrorWithBack])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.titleError), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)]),
						_: 3
					}, 8, ["class"]),
					!trapFocus.value ? (openBlock(), createBlock(unref(FocusScope_default), {
						key: 0,
						"as-child": "",
						onMountAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
						onUnmountAutoFocus: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"]))
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("span", {
							hidden: "",
							"aria-hidden": "true"
						}, null, -1)])]),
						_: 1
					})) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref_key: "body",
						ref: body,
						class: normalizeClass([
							_ctx.$style.body,
							!props.bodyScrollable && _ctx.$style.bodyNotScrollable,
							props.bodyFlush && _ctx.$style.bodyFlush
						]),
						"data-testid": "agent-modal-body"
					}, [renderSlot(_ctx.$slots, "default")], 2),
					hasFooter.value ? (openBlock(), createBlock(unref(DialogFooter_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.footer)
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "footer", {}, () => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLayout) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [renderSlot(_ctx.$slots, "footerLeft")], 2), createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.footerActions),
							"data-testid": "agent-modal-footer-actions"
						}, [
							renderSlot(_ctx.$slots, "footerBeforeCancel"),
							props.showCancel ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								disabled: dismissalBlocked.value,
								"data-testid": "agent-modal-cancel",
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
								_: 1
							}, 8, ["disabled"])) : createCommentVNode("", true),
							renderSlot(_ctx.$slots, "footerActions")
						], 2)], 2)])]),
						_: 3
					}, 8, ["class"])) : createCommentVNode("", true)
				]),
				_: 3
			}, 8, [
				"open",
				"size",
				"stacked",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
});
var AgentModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_7spbt_121",
	titleError: "_titleError_7spbt_129",
	titleErrorWithBack: "_titleErrorWithBack_7spbt_133",
	headerContent: "_headerContent_7spbt_137",
	backButton: "_backButton_7spbt_144",
	closeButton: "_closeButton_7spbt_145",
	titleGroup: "_titleGroup_7spbt_149",
	editIcon: "_editIcon_7spbt_160",
	title: "_title_7spbt_129",
	editableTitle: "_editableTitle_7spbt_170",
	headerActions: "_headerActions_7spbt_184",
	body: "_body_7spbt_196",
	bodyNotScrollable: "_bodyNotScrollable_7spbt_248",
	bodyFlush: "_bodyFlush_7spbt_252",
	footerLayout: "_footerLayout_7spbt_257",
	footerLeft: "_footerLeft_7spbt_265",
	footerActions: "_footerActions_7spbt_266"
};
var AgentModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentModal_default as t };

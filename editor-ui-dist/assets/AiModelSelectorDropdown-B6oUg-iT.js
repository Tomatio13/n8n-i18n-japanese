import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-Btya3Jb4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-CgWQM0v1.js";
import { t as Primitive } from "./Primitive-hgYYLm7y.js";
import { t as DropdownMenu_default } from "./DropdownMenu-CDGuJSyb.js";
import { n as truncateBeforeLast } from "./truncate-Bqpw8XCi.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DD_DX1R3.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
import { t as N8nBadge_default } from "./N8nBadge-CbUdxVK4.js";
import { t as ActionPill_default } from "./ActionPill-C7aCxoOu.js";
//#region ../@n8n/design-system/src/components/N8nAiModelSelectorDropdown/AiModelSelectorDropdown.vue?vue&type=script&setup=true&lang.ts
var MAX_SELECTED_NAME_CHARS = 30;
/**
* Model lists are long, so the provider sub-menus get twice the shared cap.
* Applies to every consumer of this dropdown, which is why it is set here
* rather than passed in per call site.
*/
var SUB_MENU_MAX_HEIGHT = "calc(var(--spacing--5xl) * 2)";
var AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiModelSelectorDropdown",
	props: {
		items: {},
		isLoading: {
			type: Boolean,
			default: false
		},
		selectedLabel: {},
		selectedCredentialName: {},
		credentialsMissing: {
			type: Boolean,
			default: false
		},
		credentialsMissingLabel: {},
		noMatchLabel: {},
		showBorder: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		dataTestId: {},
		credentialDataTestId: {}
	},
	emits: ["select", "search"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const dropdownRef = useTemplateRef("dropdownRef");
		const $style = useCssModule();
		const instance = getCurrentInstance();
		const { t } = useI18n();
		const resolvedCredentialsMissingLabel = computed(() => __props.credentialsMissingLabel ?? t("aiModelSelector.credentialsMissing"));
		const hasSearchListener = computed(() => Boolean(instance?.vnode.props?.onSearch));
		const searchListenerAttrs = computed(() => hasSearchListener.value && !__props.disabled ? { onSearch: (query) => emit("search", query) } : {});
		function handleSelect(id) {
			if (__props.disabled) return;
			emit("select", id);
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DropdownMenu_default, mergeProps({
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: __props.items,
				"empty-text": __props.noMatchLabel
			}, searchListenerAttrs.value, {
				placement: "bottom-start",
				teleported: "",
				searchable: "",
				width: "var(--reka-dropdown-menu-trigger-width)",
				"sub-menu-max-height": SUB_MENU_MAX_HEIGHT,
				onSelect: handleSelect
			}), {
				trigger: withCtx(() => [createVNode(unref(Primitive), {
					as: "button",
					class: normalizeClass([unref($style).dropdownButton, !__props.showBorder && unref($style).dropdownButtonBorderless]),
					disabled: __props.disabled,
					"data-test-id": __props.dataTestId
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).selected) }, [renderSlot(_ctx.$slots, "trigger-leading", { ui: { class: unref($style).icon } }), createBaseVNode("div", { class: normalizeClass(unref($style).selectedLabel) }, [
						createVNode(unref(N8nText_default), {
							bold: "",
							truncate: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedLabel, MAX_SELECTED_NAME_CHARS)), 1)]),
							_: 1
						}),
						__props.isLoading ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(unref($style).loading)
						}, null, 2)) : createCommentVNode("", true),
						__props.credentialsMissing && !__props.isLoading ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 1,
							theme: "danger",
							size: "small",
							class: normalizeClass(unref($style).credsBadge)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(resolvedCredentialsMissingLabel.value), 1)]),
							_: 1
						}, 8, ["class"])) : __props.selectedCredentialName && !__props.isLoading ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							bold: "",
							color: "text-light",
							"data-test-id": __props.credentialDataTestId
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedCredentialName, MAX_SELECTED_NAME_CHARS)), 1)]),
							_: 1
						}, 8, ["data-test-id"])) : createCommentVNode("", true)
					], 2)], 2), createVNode(unref(N8nIcon_default), {
						class: normalizeClass(unref($style).chevron),
						icon: "chevron-down",
						size: "medium"
					}, null, 8, ["class"])]),
					_: 3
				}, 8, [
					"class",
					"disabled",
					"data-test-id"
				])]),
				"item-leading": withCtx(({ item, ui }) => [renderSlot(_ctx.$slots, "item-leading", {
					item,
					ui: { class: ui.class }
				}), !item.data && item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: item.icon.value,
					class: normalizeClass(ui.class),
					color: "text-light",
					size: "large"
				}, null, 8, ["icon", "class"])) : !item.data && item.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass([unref($style).emoji, ui.class])
				}, toDisplayString(item.icon.value), 3)) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [item.data?.parts ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([unref($style).flattenedLabel, ui.class])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.parts, (part, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [index > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						class: normalizeClass(unref($style).separator)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "small"
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
						size: "medium",
						color: index === item.data.parts.length - 1 ? "text-dark" : "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(part), 1)]),
						_: 2
					}, 1032, ["color"])], 64);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([unref($style).labelWithBadge, ui.class])
				}, [
					item.data?.loading ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref($style).modelLoading),
						"aria-hidden": "true"
					}, null, 2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "medium",
						color: item.disabled ? "text-xlight" : "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1032, ["color"])),
					item.data?.badgeLabel ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 2,
						class: normalizeClass(unref($style).badge),
						theme: "secondary",
						size: "xsmall",
						"show-border": false
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.data.badgeLabel), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					item.data?.actionPill ? (openBlock(), createBlock(ActionPill_default, {
						key: 3,
						size: "small",
						type: item.data.actionPill.type ?? "default",
						text: item.data.actionPill.text
					}, null, 8, ["type", "text"])) : createCommentVNode("", true),
					item.data?.connectedLabel ? (openBlock(), createElementBlock("span", {
						key: 4,
						class: normalizeClass(unref($style).connected)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "check",
						size: "small",
						class: normalizeClass(unref($style).connectedIcon)
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.data.connectedLabel), 1)]),
						_: 2
					}, 1024)], 2)) : createCommentVNode("", true)
				], 2))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data?.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(truncateBeforeLast)(item.data.description, 320, 0),
					class: normalizeClass(ui.class),
					placement: "right",
					teleported: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "medium",
						color: "text-light",
						class: normalizeClass(unref($style).infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content", "class"])) : createCommentVNode("", true)]),
				_: 3
			}, 16, ["items", "empty-text"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiModelSelectorDropdown/AiModelSelectorDropdown.vue?vue&type=style&index=0&lang.module.scss
var dropdownButton = "_dropdownButton_2ogby_268";
var dropdownButtonBorderless = "_dropdownButtonBorderless_2ogby_299";
var selected = "_selected_2ogby_311";
var selectedLabel = "_selectedLabel_2ogby_322";
var chevron = "_chevron_2ogby_332";
var icon = "_icon_2ogby_336";
var infoIcon = "_infoIcon_2ogby_341";
var connected = "_connected_2ogby_346";
var connectedIcon = "_connectedIcon_2ogby_354";
var emoji = "_emoji_2ogby_358";
var flattenedLabel = "_flattenedLabel_2ogby_363";
var separator = "_separator_2ogby_372";
var labelWithBadge = "_labelWithBadge_2ogby_378";
var badge = "_badge_2ogby_391";
var credsBadge = "_credsBadge_2ogby_395";
var loading = "_loading_2ogby_400";
var modelLoading = "_modelLoading_2ogby_416";
var shimmer = "_shimmer_2ogby_1";
var spin = "_spin_2ogby_1";
var opacityPulse = "_opacityPulse_2ogby_1";
var popoverIn = "_popoverIn_2ogby_1";
var fadeIn = "_fadeIn_2ogby_1";
var collapsibleSlideDown = "_collapsibleSlideDown_2ogby_1";
var collapsibleSlideUp = "_collapsibleSlideUp_2ogby_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_2ogby_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_2ogby_1";
var blurSwapIn = "_blurSwapIn_2ogby_1";
var blurSwapOut = "_blurSwapOut_2ogby_1";
var pulseGlow = "_pulseGlow_2ogby_1";
var pulseGlowDelayed = "_pulseGlowDelayed_2ogby_1";
var fade = "_fade_2ogby_1";
var fadeInUp = "_fadeInUp_2ogby_1";
var fadeInDown = "_fadeInDown_2ogby_1";
var fadeInLeft = "_fadeInLeft_2ogby_1";
var fadeInRight = "_fadeInRight_2ogby_1";
var fadeOut = "_fadeOut_2ogby_1";
var fadeOutDown = "_fadeOutDown_2ogby_1";
var fadeOutUp = "_fadeOutUp_2ogby_1";
var fadeOutLeft = "_fadeOutLeft_2ogby_1";
var fadeOutRight = "_fadeOutRight_2ogby_1";
var ping = "_ping_2ogby_1";
var blinkBackground = "_blinkBackground_2ogby_1";
var typingBlink = "_typingBlink_2ogby_1";
var AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default = {
	dropdownButton,
	dropdownButtonBorderless,
	selected,
	selectedLabel,
	chevron,
	icon,
	infoIcon,
	connected,
	connectedIcon,
	emoji,
	flattenedLabel,
	separator,
	labelWithBadge,
	badge,
	credsBadge,
	loading,
	"skeleton-pulse": "_skeleton-pulse_2ogby_1",
	modelLoading,
	shimmer,
	spin,
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
var AiModelSelectorDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AiModelSelectorDropdown_default as t };

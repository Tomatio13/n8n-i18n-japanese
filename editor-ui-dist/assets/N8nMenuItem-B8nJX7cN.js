import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-CgWQM0v1.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DD_DX1R3.js";
import { t as N8nText_default } from "./N8nText-BHhlnsKC.js";
import { t as ActionPill_default } from "./ActionPill-C7aCxoOu.js";
import { n as N8nRoute_default } from "./N8nLink-BjFvjVuv.js";
import { t as N8nTag_default } from "./N8nTag-De3A2YZW.js";
import { t as PreviewTag_default } from "./PreviewTag-1chLVZ89.js";
//#region ../@n8n/design-system/src/components/N8nMenuItem/MenuItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var MenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MenuItem",
	props: {
		item: {},
		active: { type: Boolean },
		empty: { type: Boolean },
		compact: { type: Boolean },
		level: {},
		open: { type: Boolean },
		ariaLabel: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const to = computed(() => {
			if (props.item.disabled) return;
			if (props.item.route) return props.item.route.to;
			if (props.item.link) return props.item.link.href;
		});
		const handleClick = () => {
			if (props.item.disabled) return;
			emit("click");
		};
		const icon = computed(() => {
			if (typeof props.item.icon === "object" && props.item.icon?.type === "icon") return props.item.icon.value;
			if (typeof props.item.icon === "string") return props.item.icon;
		});
		const iconColor = computed(() => {
			if (typeof props.item.icon === "string") return;
			return props.item.icon?.color;
		});
		const tooltipDisabled = computed(() => {
			return !props.compact && !(props.item.disabled && props.item.disabledReason);
		});
		const tooltipContent = computed(() => {
			if (props.item.disabled && props.item.disabledReason) return props.item.disabledReason;
			if (props.compact) return props.item.label;
		});
		const tooltipPlacement = computed(() => {
			return props.item.disabled && props.item.disabledReason ? "top" : "right";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-test-id": __props.item.id,
				class: normalizeClass(_ctx.$style.menuItemWrapper)
			}, [createVNode(unref(N8nTooltip_default), {
				placement: tooltipPlacement.value,
				disabled: tooltipDisabled.value,
				"show-after": 500
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(tooltipContent.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nRoute_default), {
					id: __props.item.id,
					to: to.value,
					role: "menuitem",
					class: normalizeClass([_ctx.$style.menuItem, {
						[_ctx.$style.active]: __props.active,
						[_ctx.$style.compact]: __props.compact,
						[_ctx.$style.disabled]: __props.item.disabled
					}]),
					"aria-label": props.ariaLabel ?? props.item.label,
					"aria-disabled": __props.item.disabled,
					"data-test-id": "menu-item",
					onClick: handleClick
				}, {
					default: withCtx(() => [
						__props.item.icon ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.menuItemIcon, { [_ctx.$style.notification]: __props.item.notification }])
						}, [__props.item.icon && typeof __props.item.icon === "object" && __props.item.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.menuItemEmoji)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.item.icon.value), 1)]),
							_: 1
						}, 8, ["class"])) : icon.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							color: iconColor.value,
							icon: icon.value
						}, null, 8, ["color", "icon"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.menuItemLabel) }, [
							!__props.compact ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.menuItemText),
								color: __props.item.disabled ? "text-light" : "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.item.label), 1)]),
								_: 1
							}, 8, ["class", "color"])) : createCommentVNode("", true),
							!__props.compact && __props.item.preview ? (openBlock(), createBlock(PreviewTag_default, { key: 1 })) : createCommentVNode("", true),
							!__props.compact && __props.item.new ? (openBlock(), createBlock(unref(N8nTag_default), {
								key: 2,
								clickable: false,
								text: "New",
								class: normalizeClass(_ctx.$style.newTag)
							}, null, 8, ["class"])) : createCommentVNode("", true),
							!__props.compact && __props.item.creditsTag ? (openBlock(), createBlock(ActionPill_default, {
								key: 3,
								size: "small",
								text: __props.item.creditsTag
							}, null, 8, ["text"])) : createCommentVNode("", true)
						], 2),
						__props.item.children && !__props.compact ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "chevron-right",
							color: "text-light"
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"id",
					"to",
					"class",
					"aria-label",
					"aria-disabled"
				])]),
				_: 1
			}, 8, ["placement", "disabled"])], 10, _hoisted_1);
		};
	}
});
var MenuItem_vue_vue_type_style_index_0_lang_module_default = {
	menuItemWrapper: "_menuItemWrapper_1he2k_1",
	menuItem: "_menuItem_1he2k_1",
	disabled: "_disabled_1he2k_23",
	menuItemIcon: "_menuItemIcon_1he2k_23",
	active: "_active_1he2k_26",
	compact: "_compact_1he2k_33",
	menuItemText: "_menuItemText_1he2k_46",
	notification: "_notification_1he2k_67",
	menuItemEmoji: "_menuItemEmoji_1he2k_78",
	menuItemLabel: "_menuItemLabel_1he2k_87",
	newTag: "_newTag_1he2k_96"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nMenuItem/index.ts
var N8nMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nMenuItem_default as t };

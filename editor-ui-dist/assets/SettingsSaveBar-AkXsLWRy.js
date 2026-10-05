import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, n as Transition, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { T as useResizeObserver, _ as useEventListener } from "./dist-C4pFh3bs.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
//#region ../@n8n/design-system/src/components/N8nSettingsSaveBar/SettingsSaveBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var SettingsSaveBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsSaveBar",
	__name: "SettingsSaveBar",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		message: { default: "Unsaved changes" },
		saveLabel: { default: "Save settings" },
		discardLabel: { default: "Discard changes" },
		saving: {
			type: Boolean,
			default: false
		},
		saveDisabled: {
			type: Boolean,
			default: false
		},
		floating: {
			type: Boolean,
			default: false
		},
		saveShortcut: {
			type: Boolean,
			default: true
		}
	},
	emits: ["save", "discard"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const barElement = ref(null);
		const stuck = ref(false);
		function measureStuck() {
			const bar = barElement.value;
			const parent = bar?.parentElement;
			if (!props.floating || !bar || !parent) {
				stuck.value = false;
				return;
			}
			const parentStyle = getComputedStyle(parent);
			const flowBottom = parent.getBoundingClientRect().bottom - Number.parseFloat(parentStyle.paddingBottom) - Number.parseFloat(parentStyle.borderBottomWidth) - Number.parseFloat(getComputedStyle(bar).marginBottom);
			stuck.value = bar.getBoundingClientRect().bottom < flowBottom - 1;
		}
		watch([() => props.visible, () => props.floating], measureStuck, { flush: "post" });
		onMounted(measureStuck);
		useResizeObserver(computed(() => props.floating ? barElement.value?.parentElement : void 0), measureStuck);
		function onScroll(event) {
			const target = event.target;
			if (target instanceof Node && target !== document && !target.contains(barElement.value)) return;
			measureStuck();
		}
		useEventListener(window, "scroll", onScroll, {
			capture: true,
			passive: true
		});
		useEventListener(window, "resize", measureStuck, { passive: true });
		function onKeydown(event) {
			if (!props.saveShortcut || !props.visible || props.saving || props.saveDisabled) return;
			if (!((event.metaKey || event.ctrlKey) && (event.key === "s" || event.key === "S"))) return;
			event.preventDefault();
			emit("save");
		}
		useEventListener(window, "keydown", onKeydown);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, {
				name: "n8n-settings-save-bar",
				onAfterEnter: measureStuck
			}, {
				default: withCtx(() => [__props.visible ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "barElement",
					ref: barElement,
					class: normalizeClass([_ctx.$style.bar, {
						[_ctx.$style.floating]: __props.floating,
						[_ctx.$style.docked]: __props.floating && !stuck.value
					}]),
					role: "region",
					"aria-label": __props.message,
					"aria-live": "polite",
					"data-test-id": "settings-save-bar"
				}, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.status),
					"data-test-id": "settings-save-bar-status"
				}, [renderSlot(_ctx.$slots, "default", {}, () => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.statusIcon),
					"aria-hidden": "true"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					size: "medium"
				})], 2), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.statusMessage)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.message), 1)]),
					_: 1
				}, 8, ["class"])])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [renderSlot(_ctx.$slots, "actions", {}, () => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					label: __props.discardLabel,
					disabled: __props.saving,
					"data-test-id": "settings-save-bar-discard",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("discard"))
				}, null, 8, ["label", "disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: __props.saveLabel,
					loading: __props.saving,
					disabled: __props.saveDisabled,
					"data-test-id": "settings-save-bar-save",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("save"))
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])])], 2)], 10, _hoisted_1)) : createCommentVNode("", true)]),
				_: 3
			});
		};
	}
});
var SettingsSaveBar_vue_vue_type_style_index_0_lang_module_default = {
	bar: "_bar_obw5d_6",
	docked: "_docked_obw5d_70",
	floating: "_floating_obw5d_77",
	actions: "_actions_obw5d_101",
	status: "_status_obw5d_109",
	statusIcon: "_statusIcon_obw5d_117",
	statusMessage: "_statusMessage_obw5d_125"
};
var SettingsSaveBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSaveBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSaveBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsSaveBar_default as t };

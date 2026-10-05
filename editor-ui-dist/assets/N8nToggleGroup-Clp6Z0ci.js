import { $ as openBlock, C as createBaseVNode, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, lt as useAttrs, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { r as cn } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { n as isEqual, t as useFormControl } from "./useFormControl-DinLqj8h.js";
import { c as useForwardExpose, j as createContext, m as useVModel, n as Primitive } from "./VisuallyHidden-RKvjG2uY.js";
import { t as useDirection } from "./useDirection-DnkUaJJr.js";
import { t as isValueEqualOrExist } from "./isValueEqualOrExist-D5BKcQRr.js";
import { t as RovingFocusGroup_default } from "./RovingFocusGroup-BJqi5ihv.js";
import { n as RovingFocusItem_default, t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-BBEm5yDp.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useSingleOrMultipleValue.js
/**
* Validates the props and it makes sure that the types are coherent with each other
*
* 1. If type, defaultValue, and modelValue are all undefined, throw an error.
* 2. If modelValue and defaultValue are defined and not of the same type, throw an error.
* 3. If type is defined:
*    a. If type is 'single' and either modelValue or defaultValue is an array, log an error and return 'multiple'.
*    b. If type is 'multiple' and neither modelValue nor defaultValue is an array, log an error and return 'single'.
* 4. Return 'multiple' if modelValue is an array, else return 'single'.
*/
function validateProps({ type, defaultValue, modelValue }) {
	const value = modelValue || defaultValue;
	if (modelValue !== void 0 || defaultValue !== void 0) return Array.isArray(value) ? "multiple" : "single";
	else return type ?? "single";
}
function getDefaultType({ type, defaultValue, modelValue }) {
	if (type) return type;
	return validateProps({
		type,
		defaultValue,
		modelValue
	});
}
function getDefaultValue({ type, defaultValue }) {
	if (defaultValue !== void 0) return defaultValue;
	return type === "single" ? void 0 : [];
}
function useSingleOrMultipleValue(props, emits) {
	const type = computed(() => getDefaultType(props));
	const modelValue = useVModel(props, "modelValue", emits, {
		defaultValue: getDefaultValue(props),
		passive: props.modelValue === void 0,
		deep: true
	});
	function changeModelValue(value) {
		if (type.value === "single") modelValue.value = isEqual(value, modelValue.value) ? void 0 : value;
		else {
			const modelValueArray = Array.isArray(modelValue.value) ? [...modelValue.value || []] : [modelValue.value].filter(Boolean);
			if (isValueEqualOrExist(modelValueArray, value)) {
				const index = modelValueArray.findIndex((i) => isEqual(i, value));
				modelValueArray.splice(index, 1);
			} else modelValueArray.push(value);
			modelValue.value = modelValueArray;
		}
	}
	return {
		modelValue,
		changeModelValue,
		isSingle: computed(() => type.value === "single")
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ToggleGroup/ToggleGroupRoot.js
var [injectToggleGroupRootContext, provideToggleGroupRootContext] = createContext("ToggleGroupRoot");
var ToggleGroupRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ToggleGroupRoot",
	props: {
		rovingFocus: {
			type: Boolean,
			required: false,
			default: true
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		orientation: {
			type: String,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
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
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		type: {
			type: String,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { loop, rovingFocus, disabled, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const { forwardRef, currentElement } = useForwardExpose();
		const { modelValue, changeModelValue, isSingle } = useSingleOrMultipleValue(props, emits);
		const isFormControl = useFormControl(currentElement);
		provideToggleGroupRootContext({
			isSingle,
			modelValue,
			changeModelValue,
			dir,
			orientation: props.orientation,
			loop,
			rovingFocus,
			disabled
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(unref(rovingFocus) ? unref(RovingFocusGroup_default) : unref(Primitive)), {
				"as-child": "",
				orientation: unref(rovingFocus) ? _ctx.orientation : void 0,
				dir: unref(dir),
				loop: unref(rovingFocus) ? unref(loop) : void 0
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "group",
					"as-child": _ctx.asChild,
					as: _ctx.as
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(VisuallyHiddenInput_default, {
						key: 0,
						name: _ctx.name,
						required: _ctx.required,
						value: unref(modelValue)
					}, null, 8, [
						"name",
						"required",
						"value"
					])) : createCommentVNode("v-if", true)]),
					_: 3
				}, 8, ["as-child", "as"])]),
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Toggle/Toggle.js
var Toggle_default$1 = /* @__PURE__ */ defineComponent({
	__name: "Toggle",
	props: {
		defaultValue: {
			type: Boolean,
			required: false
		},
		modelValue: {
			type: [Boolean, null],
			required: false,
			default: void 0
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
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const toggleGroupContext = injectToggleGroupRootContext(null);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		function togglePressed() {
			modelValue.value = !modelValue.value;
		}
		const dataState = computed(() => {
			return modelValue.value ? "on" : "off";
		});
		const isFormControl = useFormControl(currentElement);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				type: _ctx.as === "button" ? "button" : void 0,
				"as-child": props.asChild,
				as: _ctx.as,
				"aria-pressed": unref(modelValue),
				"data-state": dataState.value,
				"data-disabled": _ctx.disabled ? "" : void 0,
				disabled: _ctx.disabled,
				onClick: togglePressed
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					disabled: _ctx.disabled,
					pressed: unref(modelValue),
					state: dataState.value
				}), unref(isFormControl) && _ctx.name && !unref(toggleGroupContext) ? (openBlock(), createBlock(VisuallyHiddenInput_default, {
					key: 0,
					type: "checkbox",
					name: _ctx.name,
					value: unref(modelValue),
					required: _ctx.required
				}, null, 8, [
					"name",
					"value",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 8, [
				"type",
				"as-child",
				"as",
				"aria-pressed",
				"data-state",
				"data-disabled",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ToggleGroup/ToggleGroupItem.js
var ToggleGroupItem_default = /* @__PURE__ */ defineComponent({
	__name: "ToggleGroupItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
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
		const rootContext = injectToggleGroupRootContext();
		const disabled = computed(() => rootContext.disabled?.value || props.disabled);
		const pressed = computed(() => isValueEqualOrExist(rootContext.modelValue.value, props.value));
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).rovingFocus.value ? unref(RovingFocusItem_default) : unref(Primitive)), {
				"as-child": "",
				focusable: !disabled.value,
				active: pressed.value
			}, {
				default: withCtx(() => [createVNode(unref(Toggle_default$1), mergeProps(props, {
					ref: unref(forwardRef),
					disabled: disabled.value,
					"model-value": pressed.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(rootContext).changeModelValue(_ctx.value))
				}), {
					default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
					_: 3
				}, 16, ["disabled", "model-value"])]),
				_: 3
			}, 8, ["focusable", "active"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nToggle/Toggle.vue?vue&type=script&setup=true&lang.ts
var Toggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Toggle",
	props: {
		modelValue: { type: [Boolean, null] },
		value: {},
		label: {},
		showTooltip: {
			type: Boolean,
			default: true
		},
		icon: {},
		name: {},
		required: { type: Boolean },
		variant: { default: "solid" },
		size: { default: "medium" },
		disabled: {
			type: Boolean,
			default: false
		},
		class: { type: [
			Array,
			Object,
			String,
			Number,
			null,
			Boolean
		] }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const attrs = useAttrs();
		const $style = useCssModule();
		const effectiveSize = computed(() => {
			if (props.size === "mini" || props.size === "xmini") return "xsmall";
			return props.size;
		});
		const effectiveVariant = computed(() => {
			if (props.variant === "highlight") return "ghost";
			if (props.variant === "highlight-fill") return "ghost";
			return props.variant;
		});
		const computedIconSize = computed(() => {
			if (effectiveSize.value === "xsmall") return "xsmall";
			return effectiveSize.value;
		});
		const classes = computed(() => cn("button", $style.toggle, $style[effectiveVariant.value], $style[effectiveSize.value], $style.iconOnly, props.disabled && $style.disabled, props.class));
		const uncontrolledPressed = ref(props.modelValue ?? false);
		const pressed = computed({
			get: () => props.modelValue === void 0 ? uncontrolledPressed.value : props.modelValue ?? false,
			set: (value) => {
				if (props.modelValue === void 0) uncontrolledPressed.value = value;
				emit("update:modelValue", value);
			}
		});
		return (_ctx, _cache) => {
			return __props.showTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: __props.label,
				disabled: __props.disabled
			}, {
				default: withCtx(() => [__props.value !== void 0 ? (openBlock(), createBlock(unref(ToggleGroupItem_default), mergeProps({ key: 0 }, unref(attrs), {
					value: __props.value,
					disabled: __props.disabled,
					class: classes.value,
					"aria-label": __props.label,
					"data-icon-only": "true"
				}), {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style)["toggle-inner"]) }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: __props.icon,
						size: computedIconSize.value
					}, null, 8, ["icon", "size"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2)]),
					_: 3
				}, 16, [
					"value",
					"disabled",
					"class",
					"aria-label"
				])) : (openBlock(), createBlock(unref(Toggle_default$1), mergeProps({ key: 1 }, unref(attrs), {
					modelValue: pressed.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pressed.value = $event),
					disabled: __props.disabled,
					name: __props.name,
					required: __props.required,
					class: classes.value,
					"aria-label": __props.label,
					"data-icon-only": "true"
				}), {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style)["toggle-inner"]) }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: __props.icon,
						size: computedIconSize.value
					}, null, 8, ["icon", "size"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2)]),
					_: 3
				}, 16, [
					"modelValue",
					"disabled",
					"name",
					"required",
					"class",
					"aria-label"
				]))]),
				_: 3
			}, 8, ["content", "disabled"])) : __props.value !== void 0 ? (openBlock(), createBlock(unref(ToggleGroupItem_default), mergeProps({ key: 1 }, unref(attrs), {
				value: __props.value,
				disabled: __props.disabled,
				class: classes.value,
				"aria-label": __props.label,
				"data-icon-only": "true"
			}), {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style)["toggle-inner"]) }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.icon,
					size: computedIconSize.value
				}, null, 8, ["icon", "size"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 16, [
				"value",
				"disabled",
				"class",
				"aria-label"
			])) : (openBlock(), createBlock(unref(Toggle_default$1), mergeProps({ key: 2 }, unref(attrs), {
				modelValue: pressed.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pressed.value = $event),
				disabled: __props.disabled,
				name: __props.name,
				required: __props.required,
				class: classes.value,
				"aria-label": __props.label,
				"data-icon-only": "true"
			}), {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style)["toggle-inner"]) }, [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.icon,
					size: computedIconSize.value
				}, null, 8, ["icon", "size"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 16, [
				"modelValue",
				"disabled",
				"name",
				"required",
				"class",
				"aria-label"
			]));
		};
	}
});
var Toggle_vue_vue_type_style_index_0_lang_module_default = {
	toggle: "_toggle_jvqp2_3",
	xsmall: "_xsmall_jvqp2_55",
	small: "_small_jvqp2_61",
	medium: "_medium_jvqp2_67",
	large: "_large_jvqp2_73",
	xlarge: "_xlarge_jvqp2_79",
	solid: "_solid_jvqp2_85",
	subtle: "_subtle_jvqp2_100",
	outline: "_outline_jvqp2_128",
	ghost: "_ghost_jvqp2_143",
	destructive: "_destructive_jvqp2_150",
	success: "_success_jvqp2_174",
	disabled: "_disabled_jvqp2_201",
	iconOnly: "_iconOnly_jvqp2_209",
	"toggle-inner": "_toggle-inner_jvqp2_219"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nToggle/index.ts
var N8nToggle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Toggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Toggle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nToggleGroup/ToggleGroup.vue?vue&type=script&setup=true&lang.ts
var ToggleGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToggleGroup",
	props: {
		modelValue: {},
		defaultValue: {},
		type: { default: "single" },
		orientation: { default: "horizontal" },
		disabled: {
			type: Boolean,
			default: false
		},
		loop: {
			type: Boolean,
			default: true
		},
		rovingFocus: {
			type: Boolean,
			default: true
		},
		name: {},
		required: { type: Boolean },
		variant: { default: "solid" },
		size: { default: "medium" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ToggleGroupRoot_default), {
				class: normalizeClass(_ctx.$style.group),
				"model-value": __props.modelValue,
				"default-value": __props.defaultValue,
				type: __props.type,
				orientation: __props.orientation,
				disabled: __props.disabled,
				loop: __props.loop,
				"roving-focus": __props.rovingFocus,
				name: __props.name,
				required: __props.required,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					variant: __props.variant,
					size: __props.size,
					disabled: __props.disabled
				})]),
				_: 3
			}, 8, [
				"class",
				"model-value",
				"default-value",
				"type",
				"orientation",
				"disabled",
				"loop",
				"roving-focus",
				"name",
				"required"
			]);
		};
	}
});
var ToggleGroup_vue_vue_type_style_index_0_lang_module_default = { group: "_group_r00l7_1" };
//#endregion
//#region ../@n8n/design-system/src/components/N8nToggleGroup/index.ts
var N8nToggleGroup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToggleGroup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToggleGroup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nToggle_default as n, N8nToggleGroup_default as t };

import { $ as openBlock, E as createElementBlock, It as ref, N as defineComponent, S as computed, _ as Fragment, it as renderSlot, q as onBeforeUnmount, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
//#region ../@n8n/design-system/src/types/resize.ts
var directionsCursorMaps = {
	right: "col-resize",
	top: "row-resize",
	bottom: "row-resize",
	left: "col-resize",
	topLeft: "nw-resize",
	topRight: "ne-resize",
	bottomLeft: "sw-resize",
	bottomRight: "se-resize"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/ResizeWrapper.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-dir"];
var ResizeWrapper_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResizeWrapper",
	props: {
		isResizingEnabled: {
			type: Boolean,
			default: true
		},
		height: { default: 0 },
		width: { default: 0 },
		minHeight: { default: 0 },
		maxHeight: { default: Number.POSITIVE_INFINITY },
		minWidth: { default: 0 },
		maxWidth: { default: Number.POSITIVE_INFINITY },
		scale: { default: 1 },
		gridSize: { default: 20 },
		supportedDirections: { default: () => [] },
		window: { default: void 0 }
	},
	emits: [
		"resizestart",
		"resize",
		"resizeend"
	],
	setup(__props, { emit: __emit }) {
		function closestNumber(value, divisor) {
			const q = value / divisor;
			const n1 = divisor * q;
			const n2 = value * divisor > 0 ? divisor * (q + 1) : divisor * (q - 1);
			if (Math.abs(value - n1) < Math.abs(value - n2)) return n1;
			return n2;
		}
		function getSize(min, virtual, gridSize, max) {
			if (virtual <= 0) return min;
			const target = closestNumber(virtual, gridSize);
			if (target <= min) return min;
			if (target >= max) return max;
			return target;
		}
		const props = __props;
		const emit = __emit;
		const enabledDirections = computed(() => {
			const availableDirections = Object.keys(directionsCursorMaps);
			if (!props.isResizingEnabled) return [];
			if (props.supportedDirections.length === 0) return availableDirections;
			return props.supportedDirections;
		});
		const state = {
			dir: ref(""),
			dHeight: ref(0),
			dWidth: ref(0),
			vHeight: ref(0),
			vWidth: ref(0),
			x: ref(0),
			y: ref(0)
		};
		const activeDirection = computed(() => state.dir.value);
		const mouseMove = (event) => {
			event.preventDefault();
			event.stopPropagation();
			let dWidth = 0;
			let dHeight = 0;
			let top = false;
			let left = false;
			if (state.dir.value.includes("right")) dWidth = event.pageX - state.x.value;
			if (state.dir.value.includes("left")) {
				dWidth = state.x.value - event.pageX;
				left = true;
			}
			if (state.dir.value.includes("top")) {
				dHeight = state.y.value - event.pageY;
				top = true;
			}
			if (state.dir.value.includes("bottom")) dHeight = event.pageY - state.y.value;
			const deltaWidth = (dWidth - state.dWidth.value) / props.scale;
			const deltaHeight = (dHeight - state.dHeight.value) / props.scale;
			state.vHeight.value = state.vHeight.value + deltaHeight;
			state.vWidth.value = state.vWidth.value + deltaWidth;
			const height = getSize(props.minHeight, state.vHeight.value, props.gridSize, props.maxHeight);
			const width = getSize(props.minWidth, state.vWidth.value, props.gridSize, props.maxWidth);
			const dX = left && width !== props.width ? -1 * (width - props.width) : 0;
			const dY = top && height !== props.height ? -1 * (height - props.height) : 0;
			const x = event.x;
			const y = event.y;
			const direction = state.dir.value;
			emit("resize", {
				height,
				width,
				dX,
				dY,
				x,
				y,
				direction
			});
			state.dHeight.value = dHeight;
			state.dWidth.value = dWidth;
		};
		const cleanupResize = () => {
			if (state.dir.value === "") return false;
			const w = props.window ?? window;
			w.removeEventListener("mousemove", mouseMove);
			w.removeEventListener("mouseup", mouseUp);
			w.removeEventListener("blur", onBlur);
			document.body.style.cursor = "unset";
			document.body.classList.remove("n8n-resizing");
			state.dir.value = "";
			return true;
		};
		const onBlur = () => {
			if (cleanupResize()) emit("resizeend");
		};
		const mouseUp = (event) => {
			event.preventDefault();
			event.stopPropagation();
			if (cleanupResize()) emit("resizeend");
		};
		onBeforeUnmount(() => {
			cleanupResize();
		});
		const resizerMove = (event) => {
			event.preventDefault();
			event.stopPropagation();
			const targetResizer = event.target;
			if (targetResizer) state.dir.value = targetResizer.dataset.dir.toLocaleLowerCase();
			document.body.style.cursor = directionsCursorMaps[state.dir.value];
			document.body.classList.add("n8n-resizing");
			state.x.value = event.pageX;
			state.y.value = event.pageY;
			state.dWidth.value = 0;
			state.dHeight.value = 0;
			state.vHeight.value = props.height;
			state.vWidth.value = props.width;
			const w = props.window ?? window;
			w.addEventListener("mousemove", mouseMove);
			w.addEventListener("mouseup", mouseUp);
			w.addEventListener("blur", onBlur);
			emit("resizestart");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.resize) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(enabledDirections.value, (direction) => {
				return openBlock(), createElementBlock("div", {
					key: direction,
					"data-dir": direction,
					class: normalizeClass({
						[_ctx.$style.resizer]: true,
						[_ctx.$style[direction]]: true,
						[_ctx.$style.active]: activeDirection.value === direction.toLowerCase()
					}),
					"data-test-id": "resize-handle",
					onMousedown: resizerMove
				}, null, 42, _hoisted_1);
			}), 128)), renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ResizeWrapper_vue_vue_type_style_index_0_lang_module_default = {
	resize: "_resize_ur8oo_1",
	resizer: "_resizer_ur8oo_13",
	right: "_right_ur8oo_18",
	top: "_top_ur8oo_28",
	bottom: "_bottom_ur8oo_36",
	left: "_left_ur8oo_44",
	topLeft: "_topLeft_ur8oo_52",
	topRight: "_topRight_ur8oo_60",
	bottomLeft: "_bottomLeft_ur8oo_68",
	bottomRight: "_bottomRight_ur8oo_76",
	active: "_active_ur8oo_105"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/index.ts
var N8nResizeWrapper_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResizeWrapper_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResizeWrapper_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nResizeWrapper_default as t };

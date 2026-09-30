import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, Dt as getCurrentScope, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Nt as onScopeDispose, S as computed, Ut as toValue, Vt as toRef, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-DgnxfwbU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { x as useLocalStorage } from "./dist-C4pFh3bs.js";
import { t as Tooltip_default } from "./Tooltip-BiIAJ-pm.js";
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
//#region ../@n8n/design-system/src/composables/useResizablePanel.ts
var SNAP_DISTANCE = 30;
var directionSigns = {
	right: {
		x: 1,
		y: 0
	},
	left: {
		x: -1,
		y: 0
	},
	top: {
		x: 0,
		y: -1
	},
	bottom: {
		x: 0,
		y: 1
	},
	topLeft: {
		x: -1,
		y: -1
	},
	topRight: {
		x: 1,
		y: -1
	},
	bottomLeft: {
		x: -1,
		y: 1
	},
	bottomRight: {
		x: 1,
		y: 1
	}
};
function isDirection(value) {
	return value !== void 0 && Object.hasOwn(directionSigns, value);
}
function isResizeHandle(target) {
	return target !== null && "dataset" in target;
}
function resolveSize(getter, containerSize) {
	if (typeof getter === "number") return getter;
	return getter(containerSize);
}
function snapToGrid(value, gridSize) {
	if (gridSize <= 0) return value;
	return Math.round(value / gridSize) * gridSize;
}
function usePanelDimension(options, containerSize, isResizing, gridSize) {
	const persistedSize = options.localStorageKey ? useLocalStorage(options.localStorageKey, -1, { writeDefaults: false }) : ref(-1);
	/** This keeps the panel size proportionally to the container size, so it can be restored correctly on reload. */
	const proportion = ref(persistedSize.value);
	const pixels = ref();
	const dragSize = ref();
	let initialSize = 0;
	let dragStartSize = 0;
	const defaultSize = computed(function getDefaultSize() {
		if (options.size !== void 0) return toValue(options.size);
		return resolveSize(options.defaultSize ?? 0, containerSize.value);
	});
	const minSize = computed(function getMinSize() {
		return resolveSize(options.minSize ?? 0, containerSize.value);
	});
	const maxSize = computed(function getMaxSize() {
		return resolveSize(options.maxSize ?? (containerSize.value || Infinity), containerSize.value);
	});
	const rawSize = computed(function getRawSize() {
		/** Pointer movement can exceed the container bounds during a drag. */
		if (dragSize.value !== void 0) return dragSize.value;
		if (pixels.value !== void 0) return pixels.value;
		if (proportion.value < 0 || proportion.value > 1 || !Number.isFinite(proportion.value)) return defaultSize.value;
		if (containerSize.value <= 0) return defaultSize.value;
		return proportion.value * containerSize.value;
	});
	const isCollapsed = computed(function getIsCollapsed() {
		return isResizing.value && !!toValue(options.allowCollapse) && rawSize.value < SNAP_DISTANCE;
	});
	const isFullSize = computed(function getIsFullSize() {
		return isResizing.value && !!toValue(options.allowFullSize) && containerSize.value > 0 && rawSize.value > containerSize.value - SNAP_DISTANCE;
	});
	const size = computed(function getSize() {
		if (isCollapsed.value) return 0;
		if (isFullSize.value) return containerSize.value;
		let value = rawSize.value;
		if (options.snap && Math.abs(value - defaultSize.value) < SNAP_DISTANCE) value = defaultSize.value;
		return Math.max(minSize.value, Math.min(value, maxSize.value));
	});
	function setSize(value) {
		if (containerSize.value <= 0) {
			pixels.value = value;
			return;
		}
		proportion.value = value / containerSize.value;
		pixels.value = void 0;
	}
	function start(displayedSize = size.value) {
		initialSize = size.value;
		dragStartSize = displayedSize;
	}
	function resize(delta) {
		const previousSize = dragSize.value === void 0 ? dragStartSize : size.value;
		dragSize.value = snapToGrid(dragStartSize + delta, toValue(gridSize));
		return previousSize - size.value;
	}
	function finish() {
		if (dragSize.value === void 0) return;
		setSize(isCollapsed.value || isFullSize.value ? initialSize : size.value);
		dragSize.value = void 0;
		if (containerSize.value > 0) persistedSize.value = proportion.value;
	}
	function cancel() {
		dragSize.value = void 0;
	}
	function reset(value) {
		if (value === void 0 && !defaultSize.value) return;
		setSize(value ?? defaultSize.value);
		if (containerSize.value > 0) persistedSize.value = proportion.value;
	}
	watch(persistedSize, function syncPersistedSize(value) {
		if (isResizing.value) return;
		proportion.value = value;
		pixels.value = void 0;
	});
	watch(containerSize, function convertPixelsToProportion(value) {
		if (value > 0 && pixels.value !== void 0) setSize(pixels.value);
	});
	watch(function getExternalSize() {
		return toValue(options.size);
	}, function syncExternalSize(value) {
		if (value === void 0 || isResizing.value || value === size.value) return;
		setSize(value);
	});
	return {
		size,
		isCollapsed,
		isFullSize,
		start,
		resize,
		finish,
		cancel,
		reset
	};
}
function useContainerSize(container) {
	const width = ref(0);
	const height = ref(0);
	watch(function getContainer() {
		return toValue(container);
	}, function observeContainer(element, _, onCleanup) {
		if (!element) {
			width.value = 0;
			height.value = 0;
			return;
		}
		const observedElement = element;
		function measureContainer() {
			width.value = observedElement.offsetWidth;
			height.value = observedElement.offsetHeight;
		}
		const observer = new ResizeObserver(measureContainer);
		observer.observe(observedElement);
		measureContainer();
		onCleanup(function stopObserving() {
			observer.disconnect();
		});
	}, { immediate: true });
	return {
		width,
		height
	};
}
function useResizablePanel(options) {
	const container = useContainerSize(options.container);
	const isResizing = ref(false);
	const activeDirection = ref();
	const width = usePanelDimension(options.width ?? {}, container.width, isResizing, options.gridSize ?? 0);
	const height = usePanelDimension(options.height ?? {}, container.height, isResizing, options.gridSize ?? 0);
	let callbacks = {};
	let targetWindow;
	let startX = 0;
	let startY = 0;
	let pendingEvent;
	let animationFrame;
	function applyResize(event) {
		pendingEvent = void 0;
		animationFrame = void 0;
		const direction = activeDirection.value;
		if (!direction) return;
		const signs = directionSigns[direction];
		const scale = toValue(options.scale) ?? 1;
		const deltaX = (event.clientX - startX) * signs.x / scale;
		const deltaY = (event.clientY - startY) * signs.y / scale;
		if (!isResizing.value && deltaX === 0 && deltaY === 0) return;
		isResizing.value = true;
		const widthChange = signs.x ? width.resize(deltaX) : 0;
		const heightChange = signs.y ? height.resize(deltaY) : 0;
		callbacks.onResize?.({
			width: width.size.value,
			height: height.size.value,
			dX: signs.x < 0 ? widthChange : 0,
			dY: signs.y < 0 ? heightChange : 0,
			x: event.clientX,
			y: event.clientY,
			direction
		});
	}
	function flushPendingResize() {
		if (animationFrame !== void 0) targetWindow?.cancelAnimationFrame(animationFrame);
		if (pendingEvent) applyResize(pendingEvent);
	}
	function onMouseMove(event) {
		event.preventDefault();
		event.stopPropagation();
		pendingEvent = event;
		if (animationFrame !== void 0) return;
		/** Throttle with requestAnimationFrame to avoid excessive resize events we can't render */
		animationFrame = targetWindow?.requestAnimationFrame(function resizeOnFrame() {
			if (pendingEvent) applyResize(pendingEvent);
		});
	}
	function removeListeners() {
		if (!targetWindow) return;
		targetWindow.removeEventListener("mousemove", onMouseMove);
		targetWindow.removeEventListener("mouseup", onMouseUp);
		targetWindow.removeEventListener("blur", finishResize);
		if (animationFrame !== void 0) targetWindow.cancelAnimationFrame(animationFrame);
		targetWindow.document.body.style.cursor = "";
		targetWindow.document.body.classList.remove("n8n-resizing");
		animationFrame = void 0;
		pendingEvent = void 0;
	}
	function cleanupResize() {
		removeListeners();
		width.cancel();
		height.cancel();
		isResizing.value = false;
		activeDirection.value = void 0;
		callbacks = {};
		targetWindow = void 0;
	}
	/** Important: Let caller read collapse/full size BEFORE finishing the resize */
	function finishResize() {
		if (!activeDirection.value) return;
		try {
			flushPendingResize();
			removeListeners();
			callbacks.onResizeEnd?.();
		} finally {
			width.finish();
			height.finish();
			cleanupResize();
		}
	}
	function onMouseUp(event) {
		event.preventDefault();
		event.stopPropagation();
		finishResize();
	}
	function resetSize(size = {}) {
		width.reset(size.width);
		height.reset(size.height);
	}
	/** Return a cleanup function for this drag only. */
	function startResize(event, handlers = {}) {
		const target = event.currentTarget;
		if (!isResizeHandle(target)) return;
		const direction = target.dataset.dir;
		if (!isDirection(direction)) return;
		cleanupResize();
		event.preventDefault();
		event.stopPropagation();
		width.start(handlers.displayedSize?.width);
		height.start(handlers.displayedSize?.height);
		const dragCallbacks = { ...handlers };
		callbacks = dragCallbacks;
		targetWindow = handlers.window ?? target.ownerDocument.defaultView ?? window;
		startX = event.clientX;
		startY = event.clientY;
		activeDirection.value = direction;
		targetWindow.document.body.style.cursor = directionsCursorMaps[direction];
		targetWindow.document.body.classList.add("n8n-resizing");
		targetWindow.addEventListener("mousemove", onMouseMove);
		targetWindow.addEventListener("mouseup", onMouseUp);
		targetWindow.addEventListener("blur", finishResize);
		callbacks.onResizeStart?.();
		return function cancelDrag() {
			if (callbacks === dragCallbacks) cleanupResize();
		};
	}
	if (getCurrentScope()) onScopeDispose(cleanupResize);
	const isCollapsedComputed = computed(function getIsCollapsed() {
		return width.isCollapsed.value || height.isCollapsed.value;
	});
	const isFullSizeComputed = computed(function getIsFullSize() {
		return width.isFullSize.value || height.isFullSize.value;
	});
	const isResizingComputed = computed(function getIsResizing() {
		return isResizing.value;
	});
	const activeDirectionComputed = computed(function getActiveDirection() {
		return activeDirection.value;
	});
	return {
		width: width.size,
		height: height.size,
		isCollapsed: isCollapsedComputed,
		isFullSize: isFullSizeComputed,
		isWidthCollapsed: width.isCollapsed,
		isHeightCollapsed: height.isCollapsed,
		isWidthFullSize: width.isFullSize,
		isHeightFullSize: height.isFullSize,
		isResizing: isResizingComputed,
		activeDirection: activeDirectionComputed,
		startResize,
		resetSize,
		cleanupResize
	};
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/ResizeWrapper.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-dir", "onDblclick"];
var TOOLTIP_DELAY = 750;
var ResizeWrapper_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResizeWrapper",
	props: {
		resizer: {},
		isResizingEnabled: {
			type: Boolean,
			default: true
		},
		height: { default: 0 },
		width: { default: 0 },
		defaultHeight: {},
		defaultWidth: {},
		minHeight: { default: 0 },
		maxHeight: { default: Number.POSITIVE_INFINITY },
		minWidth: { default: 0 },
		maxWidth: { default: Number.POSITIVE_INFINITY },
		scale: { default: 1 },
		gridSize: { default: 20 },
		supportedDirections: { default: function getSupportedDirections() {
			return [];
		} },
		window: { default: void 0 },
		allowCollapse: {
			type: Boolean,
			default: false
		},
		allowFullWidth: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"resizestart",
		"resize",
		"resizeend"
	],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const props = __props;
		const emit = __emit;
		const enabledDirections = computed(function getEnabledDirections() {
			const availableDirections = Object.keys(directionsCursorMaps);
			if (!props.isResizingEnabled) return [];
			if (props.supportedDirections.length === 0) return availableDirections;
			return props.supportedDirections;
		});
		const tooltipPlacements = {
			right: "right",
			left: "left",
			top: "top",
			bottom: "bottom",
			topLeft: "left-start",
			topRight: "right-start",
			bottomLeft: "left-end",
			bottomRight: "right-end"
		};
		function getTooltipPlacement(direction) {
			return tooltipPlacements[direction];
		}
		const resizeWrapper = useTemplateRef("resizeWrapper");
		const resizer = props.resizer ?? useResizablePanel({
			width: {
				size: toRef(props, "width"),
				allowCollapse: toRef(props, "allowCollapse"),
				allowFullSize: toRef(props, "allowFullWidth"),
				minSize: function getMinWidth() {
					return props.minWidth;
				},
				maxSize: function getMaxWidth() {
					return props.maxWidth;
				}
			},
			height: {
				size: toRef(props, "height"),
				allowCollapse: toRef(props, "allowCollapse"),
				allowFullSize: toRef(props, "allowFullWidth"),
				minSize: function getMinHeight() {
					return props.minHeight;
				},
				maxSize: function getMaxHeight() {
					return props.maxHeight;
				}
			},
			scale: toRef(props, "scale"),
			gridSize: toRef(props, "gridSize")
		});
		const { activeDirection } = resizer;
		let cancelDrag;
		onBeforeUnmount(function cancelWrapperDrag() {
			cancelDrag?.();
		});
		function startResize(event) {
			const element = resizeWrapper.value;
			if (!element) return;
			cancelDrag = resizer.startResize(event, {
				window: props.window,
				displayedSize: {
					width: element.offsetWidth,
					height: element.offsetHeight
				},
				onResizeStart: function emitResizeStart() {
					emit("resizestart");
				},
				onResize: function emitResize(data) {
					emit("resize", data);
				},
				onResizeEnd: function emitResizeEnd() {
					emit("resizeend");
				}
			});
		}
		function resetSize(event, direction) {
			if (!props.resizer && props.defaultWidth === void 0 && props.defaultHeight === void 0) return;
			resizer.resetSize({
				width: props.defaultWidth,
				height: props.defaultHeight
			});
			emit("resize", {
				width: resizer.width.value,
				height: resizer.height.value,
				dX: 0,
				dY: 0,
				x: event.clientX,
				y: event.clientY,
				direction
			});
		}
		function getIsAtDirectionLimit(direction) {
			const resizesWidth = direction !== "top" && direction !== "bottom";
			const resizesHeight = direction !== "left" && direction !== "right";
			const isAtMin = resizesWidth && (resizer.isWidthCollapsed.value || resizer.width.value <= props.minWidth) || resizesHeight && (resizer.isHeightCollapsed.value || resizer.height.value <= props.minHeight);
			const isAtMax = resizesWidth && (resizer.isWidthFullSize.value || resizer.width.value >= props.maxWidth) || resizesHeight && (resizer.isHeightFullSize.value || resizer.height.value >= props.maxHeight);
			if (isAtMin) return "min";
			if (isAtMax) return "max";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "resizeWrapper",
				ref: resizeWrapper,
				class: normalizeClass(_ctx.$style.resize)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(enabledDirections.value, (direction) => {
				return openBlock(), createBlock(Tooltip_default, {
					key: direction,
					placement: getTooltipPlacement(direction),
					"show-after": TOOLTIP_DELAY,
					"as-child": ""
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.tooltipLabel) }, toDisplayString(unref(t)("resizeWrapper.resize")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.dragShortcut) }, toDisplayString(unref(t)("resizeWrapper.drag")), 3)], 2)]),
					default: withCtx(() => [createBaseVNode("div", {
						"data-dir": direction,
						class: normalizeClass({
							[_ctx.$style.resizer]: true,
							[_ctx.$style[direction]]: true,
							[_ctx.$style.active]: unref(activeDirection) === direction,
							[_ctx.$style.atMinLimit]: getIsAtDirectionLimit(direction) === "min",
							[_ctx.$style.atMaxLimit]: getIsAtDirectionLimit(direction) === "max"
						}),
						"data-test-id": "resize-handle",
						onMousedown: startResize,
						onDblclick: ($event) => resetSize($event, direction)
					}, null, 42, _hoisted_1)]),
					_: 2
				}, 1032, ["placement"]);
			}), 128)), renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ResizeWrapper_vue_vue_type_style_index_0_lang_module_default = {
	tooltipContent: "_tooltipContent_467qg_1",
	tooltipLabel: "_tooltipLabel_467qg_7",
	dragShortcut: "_dragShortcut_467qg_12",
	resize: "_resize_467qg_22",
	resizer: "_resizer_467qg_34",
	right: "_right_467qg_39",
	top: "_top_467qg_49",
	bottom: "_bottom_467qg_57",
	left: "_left_467qg_65",
	topLeft: "_topLeft_467qg_73",
	topRight: "_topRight_467qg_81",
	bottomLeft: "_bottomLeft_467qg_89",
	bottomRight: "_bottomRight_467qg_97",
	active: "_active_467qg_125",
	atMinLimit: "_atMinLimit_467qg_153",
	atMaxLimit: "_atMaxLimit_467qg_154"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/index.ts
var N8nResizeWrapper_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResizeWrapper_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResizeWrapper_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useResizablePanel as n, N8nResizeWrapper_default as t };

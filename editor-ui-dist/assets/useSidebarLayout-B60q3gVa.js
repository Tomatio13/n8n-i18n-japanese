import { Mf as ref, Nd as computed } from "./vendor-LwB6jUFW.js";
import { Fp as useUIStore } from "./app-6hFiMIk3.js";
function useSidebarLayout() {
	const uiStore = useUIStore();
	const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed ?? false);
	const sidebarWidth = computed({
		get: () => {
			const width = uiStore.sidebarWidth;
			if (!Number.isFinite(width)) return 200;
			return Math.min(Math.max(width, 200), 500);
		},
		set: (width) => {
			uiStore.sidebarWidth = width;
		}
	});
	const toggleCollapse = () => {
		uiStore.toggleSidebarMenuCollapse();
	};
	const isResizing = ref(false);
	function onResizeStart() {
		isResizing.value = true;
	}
	function onResize(event) {
		if (isCollapsed.value && event.x > 100) {
			toggleCollapse();
			return;
		}
		if (isCollapsed.value) return;
		if (event.x < 100 && !isCollapsed.value) {
			toggleCollapse();
			return;
		}
		sidebarWidth.value = event.width;
	}
	function onResizeEnd() {
		isResizing.value = false;
	}
	return {
		isCollapsed,
		toggleCollapse,
		sidebarWidth,
		isResizing,
		onResizeStart,
		onResize,
		onResizeEnd
	};
}
//#endregion
export { useSidebarLayout as t };

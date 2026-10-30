import { Ed as computed, Id as defineComponent, Od as createBlock, Pd as createVNode, Qd as openBlock, Yd as onMounted, df as watch, jd as createSlots, nf as resolveComponent, pf as withCtx, qd as onBeforeUnmount, rs as useRoute } from "./vendor-z-loPfiR.js";
import { Ll as usePushConnectionStore, ZC as BaseLayout_default, _o as useInstanceAiStore, zu as useLogsStore } from "./app-CJdBXMVa.js";
import { t as AppSidebar_default } from "./AppSidebar-BxdIuE64.js";
//#region src/app/layouts/InstanceAiLayout.vue?vue&type=script&setup=true&lang.ts
var isLogsPanelOpenInArtifact = false;
//#endregion
//#region src/app/layouts/InstanceAiLayout.vue
var InstanceAiLayout_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLayout",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const logsStore = useLogsStore();
		const route = useRoute();
		const instanceAiStore = useInstanceAiStore();
		const showSidebar = computed(() => !instanceAiStore.isOnboardingChromeHidden(String(route.params.threadId ?? "")));
		logsStore.toggleOpen(isLogsPanelOpenInArtifact);
		watch(() => logsStore.isOpen, (isOpen) => {
			isLogsPanelOpenInArtifact = isOpen;
		}, { flush: "sync" });
		onMounted(() => {
			pushConnectionStore.pushConnect();
		});
		onBeforeUnmount(() => {
			pushConnectionStore.pushDisconnect();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, createSlots({
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 2
			}, [showSidebar.value ? {
				name: "sidebar",
				fn: withCtx(() => [createVNode(AppSidebar_default)]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
//#endregion
export { InstanceAiLayout_default as default };

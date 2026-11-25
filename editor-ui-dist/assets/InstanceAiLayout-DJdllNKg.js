import { Cf as watch, Id as computed, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Vd as createSlots, Wd as createVNode, Yo as useRoute, Zd as init_runtime_core_esm_bundler, if as onBeforeUnmount, mf as resolveComponent, sf as onMounted, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Qr as useInstanceAiStore, Vc as usePushConnectionStore, Vk as BaseLayout_default, cl as useLogsStore } from "./app-CkjcdAxY.js";
import { t as AppSidebar_default } from "./AppSidebar-BMDx6DYg.js";
//#region src/app/layouts/InstanceAiLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
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

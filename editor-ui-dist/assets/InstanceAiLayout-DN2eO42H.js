import { $d as resolveComponent, Cd as computed, Kd as onMounted, Nd as defineComponent, Od as createSlots, Td as createBlock, Wd as onBeforeUnmount, Yd as openBlock, is as useRoute, jd as createVNode, uf as withCtx } from "./vendor-BdZVA4Px.js";
import { Nx as BaseLayout_default, _a as useInstanceAiStore, cc as usePushConnectionStore } from "./app-DPWSzjF9.js";
import { t as AppSidebar_default } from "./AppSidebar-DNbPTAsp.js";
//#endregion
//#region src/app/layouts/InstanceAiLayout.vue
var InstanceAiLayout_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLayout",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const route = useRoute();
		const instanceAiStore = useInstanceAiStore();
		const showSidebar = computed(() => !instanceAiStore.isOnboardingChromeHidden(String(route.params.threadId ?? "")));
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

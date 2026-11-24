import { Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Zd as init_runtime_core_esm_bundler, mf as resolveComponent, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Vk as BaseLayout_default } from "./app-BJz3tlB7.js";
import { t as AppSidebar_default } from "./AppSidebar-D2I_eEvt.js";
//#region src/app/layouts/DefaultLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/app/layouts/DefaultLayout.vue
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DefaultLayout_default as default };

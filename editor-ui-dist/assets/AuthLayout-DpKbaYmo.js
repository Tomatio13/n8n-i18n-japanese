import { Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Zd as init_runtime_core_esm_bundler, mf as resolveComponent, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Vk as BaseLayout_default } from "./app-CkjcdAxY.js";
//#region src/app/layouts/AuthLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/app/layouts/AuthLayout.vue
var AuthLayout_default = /* @__PURE__ */ defineComponent({
	__name: "AuthLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { AuthLayout_default as default };

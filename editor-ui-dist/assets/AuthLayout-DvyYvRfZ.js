import { $d as resolveComponent, Nd as defineComponent, Td as createBlock, Yd as openBlock, jd as createVNode, uf as withCtx } from "./vendor-BdZVA4Px.js";
import { Nx as BaseLayout_default } from "./app-BLs7xE53.js";
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

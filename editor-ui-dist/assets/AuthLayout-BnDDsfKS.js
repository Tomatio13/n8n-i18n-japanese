import { Fd as createBlock, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, lf as resolveComponent } from "./vendor-LwB6jUFW.js";
import { qx as BaseLayout_default } from "./app-Ddu-psGf.js";
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

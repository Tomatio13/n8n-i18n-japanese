import { Hd as createVNode, Id as createBlock, Wd as defineComponent, of as openBlock, uf as resolveComponent, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { $S as BaseLayout_default } from "./app-TXEjHrLJ.js";
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

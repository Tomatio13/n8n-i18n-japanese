import { Id as defineComponent, Od as createBlock, Pd as createVNode, Qd as openBlock, nf as resolveComponent, pf as withCtx } from "./vendor-z-loPfiR.js";
import { ZC as BaseLayout_default } from "./app-CJdBXMVa.js";
import { t as AppSidebar_default } from "./AppSidebar-BxdIuE64.js";
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

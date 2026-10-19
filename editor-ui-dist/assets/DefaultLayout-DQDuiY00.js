import { Fd as createBlock, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, lf as resolveComponent } from "./vendor-LwB6jUFW.js";
import { qx as BaseLayout_default } from "./app-6hFiMIk3.js";
import { t as AppSidebar_default } from "./AppSidebar-C_qNvMtA.js";
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

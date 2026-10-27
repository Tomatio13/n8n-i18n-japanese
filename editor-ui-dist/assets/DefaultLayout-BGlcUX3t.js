import { Id as defineComponent, Od as createBlock, Pd as createVNode, Qd as openBlock, nf as resolveComponent, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { JC as BaseLayout_default } from "./app-BdR1u3Ua.js";
import { t as AppSidebar_default } from "./AppSidebar-CUvxCRHQ.js";
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

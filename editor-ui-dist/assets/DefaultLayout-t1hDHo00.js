import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DhQma29k.js";
import "./MainSidebarHeader-DOoAHOPf.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CoM3n6o2.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-CggIhTiT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BY19fKVi.js";
import "./versions.store-WZ7vc4XT.js";
import "./usePageRedirectionHelper-BkhmjY_L.js";
import "./useBugReporting-BKkZqsr6.js";
import "./canvas.utils-DZe7ySh-.js";
import "./folders.store-DPFn7eIX.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./sourceControl.eventBus-Co29kTQ0.js";
import "./useKeybindings-BCPZKgqt.js";
import "./useGlobalEntityCreation-CM3hmjuA.js";
import "./useSettingsItems-Bx04rtDK.js";
import { t as AppSidebar_default } from "./AppSidebar-CgUoGnGi.js";
import "./readyToRun.store-BQB-MJK3.js";
import "./resourceCenter.store-ZgVfufGJ.js";
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
export { DefaultLayout_default as default };

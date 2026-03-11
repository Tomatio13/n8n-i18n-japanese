import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-6ntFqKUX.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DXe0k24C.js";
import "./MainSidebarHeader-LphHIfMR.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DFqwcbaV.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-la78pIJR.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-V2WUQKxb.js";
import "./versions.store-DZ4NZOu-.js";
import "./usePageRedirectionHelper-CL9GbdYo.js";
import "./useBugReporting-CawQ6acH.js";
import "./canvas.utils-76suIWXt.js";
import "./folders.store-EXw-AG0G.js";
import "./KeyboardShortcutTooltip-oQq0l-oc.js";
import "./sourceControl.eventBus-CSlANPVm.js";
import "./useKeybindings-B8yvWeLb.js";
import "./useGlobalEntityCreation-C5WUTXPa.js";
import "./useSettingsItems-CNMhPdKj.js";
import { t as AppSidebar_default } from "./AppSidebar-8qjBmQZX.js";
import "./readyToRun.store-CcpX4Fh2.js";
import "./resourceCenter.store-BPHjNYBr.js";
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

import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-COg3e4iR.js";
import "./src-4Li-ik4N.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-CQGw0kft.js";
import "./MainSidebarHeader-DD_p1mLx.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CT-YZ9bK.js";
import "./merge-CTN8nyh-.js";
import "./_baseOrderBy-E6t6L7ha.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCFM_e-O.js";
import "./versions.store-A0rZkU5O.js";
import "./usePageRedirectionHelper-CjLnK5-x.js";
import "./useBugReporting-lNKTJsih.js";
import "./canvas.utils-DnKYOV4z.js";
import "./folders.store-p27SoyU9.js";
import "./KeyboardShortcutTooltip-fze3uGV2.js";
import "./sourceControl.eventBus-DCvpxAK1.js";
import "./useKeybindings-CNRAe8iL.js";
import "./useGlobalEntityCreation--VgBaCYs.js";
import "./useSettingsItems-BxEuIY8L.js";
import { t as AppSidebar_default } from "./AppSidebar-DbhmXdbd.js";
import "./readyToRun.store-BWvfv6pz.js";
import "./resourceCenter.store-DIx__AVI.js";
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

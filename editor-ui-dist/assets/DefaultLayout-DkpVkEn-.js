import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CSyjmPrE.js";
import "./src-C2W0vRuD.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BbMERaHH.js";
import "./MainSidebarHeader-CYugvT2h.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DNTAyC0r.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-D3I5tAuy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DCh9I0_n.js";
import "./versions.store-BE8_L2fa.js";
import "./usePageRedirectionHelper-N67eQ-sy.js";
import "./useBugReporting-COa7r0pp.js";
import "./canvas.utils-AtXIYApq.js";
import "./folders.store-DS8lAp5P.js";
import "./KeyboardShortcutTooltip-DgZQQH9B.js";
import "./sourceControl.eventBus-EBEEB4Zx.js";
import "./useKeybindings-C2poeKow.js";
import "./useGlobalEntityCreation-BxsDqcpD.js";
import "./useSettingsItems-DDtp5mi5.js";
import { t as AppSidebar_default } from "./AppSidebar-3d6wlabM.js";
import "./readyToRun.store-CN7JF0_e.js";
import "./resourceCenter.store-DOOUfBbO.js";
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

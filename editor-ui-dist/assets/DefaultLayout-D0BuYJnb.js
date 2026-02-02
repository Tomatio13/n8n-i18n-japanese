import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-Bos3oYaY.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-ENbfVdIF.js";
import "./MainSidebarHeader-RrX9li7G.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CvBCoQnq.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-CA-ldP4w.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B_GWpbEm.js";
import "./versions.store-BmWF4YSI.js";
import "./usePageRedirectionHelper-Oa2Mlhc_.js";
import "./useBugReporting-Bc_n8QQb.js";
import "./canvas.utils-CvVSnQ0m.js";
import "./folders.store-Bnz4VSvn.js";
import "./KeyboardShortcutTooltip-BEFQOjMt.js";
import "./sourceControl.eventBus-D3A6vL0b.js";
import "./useKeybindings-C0Dj-Pn9.js";
import "./useGlobalEntityCreation-BophEbzH.js";
import "./useSettingsItems-DmDrZ0a5.js";
import { t as AppSidebar_default } from "./AppSidebar-D_qdH2EG.js";
import "./readyToRun.store-DWKIShZL.js";
import "./resourceCenter.store-Dzy3FdVi.js";
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

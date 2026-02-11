import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-zX7-ncGV.js";
import "./src-BxIxEuXR.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-HpAttO-b.js";
import "./MainSidebarHeader-3WLIWRpj.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-B2I274sD.js";
import "./merge-CR1omtPY.js";
import "./_baseOrderBy-CHtV50OT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BtH4umh1.js";
import "./versions.store-BJH5M19s.js";
import "./usePageRedirectionHelper-DGKlFvuM.js";
import "./useBugReporting-BJuGlrAR.js";
import "./canvas.utils-gUirE7wD.js";
import "./folders.store-CoCfZdb2.js";
import "./KeyboardShortcutTooltip-BkAPKPqg.js";
import "./sourceControl.eventBus-DIAVdD4c.js";
import "./useKeybindings-BhkRElfY.js";
import "./useGlobalEntityCreation-Ds_ZGreB.js";
import "./useSettingsItems-PjdzhhlR.js";
import { t as AppSidebar_default } from "./AppSidebar-BnbfsLlV.js";
import "./readyToRun.store-C9UxV_nh.js";
import "./resourceCenter.store-B1R6BPrX.js";
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

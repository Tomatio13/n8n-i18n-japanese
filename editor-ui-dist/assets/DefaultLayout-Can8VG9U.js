import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-Bos3oYaY.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-BiTSVjy6.js";
import "./MainSidebarHeader-Cm9aY5x8.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CvBCoQnq.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-CA-ldP4w.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B_GWpbEm.js";
import "./versions.store-DPZaT2oX.js";
import "./usePageRedirectionHelper-Jov3V_bX.js";
import "./useBugReporting-Bb_0330r.js";
import "./canvas.utils-DRPwc9gc.js";
import "./folders.store-B-GIJZGK.js";
import "./KeyboardShortcutTooltip-BEFQOjMt.js";
import "./sourceControl.eventBus-D3A6vL0b.js";
import "./useKeybindings-BgKtN68w.js";
import "./useGlobalEntityCreation-Gzv_2PfB.js";
import "./useSettingsItems-jl6_Q9eF.js";
import { t as AppSidebar_default } from "./AppSidebar-xWu5E4xT.js";
import "./readyToRun.store-nLJiXJax.js";
import "./resourceCenter.store-Bl7uvzM1.js";
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

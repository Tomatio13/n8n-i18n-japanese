import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-74QeOTmX.js";
import "./src-CmrnzXZf.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-CrI_QF4Z.js";
import "./MainSidebarHeader-Ca7zZhaH.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DW-GgiaW.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-B9ufCQ6j.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BO8y4IzP.js";
import "./versions.store-CQ_DsCVR.js";
import "./usePageRedirectionHelper-CDHnOsmn.js";
import "./useBugReporting-DdnHral5.js";
import "./canvas.utils-CKeyZeSM.js";
import "./folders.store-DnayHep8.js";
import "./KeyboardShortcutTooltip-DRvrT0mf.js";
import "./sourceControl.eventBus-C1-ogU2N.js";
import "./useKeybindings-Cjd27HxK.js";
import "./useGlobalEntityCreation-CMamLIR7.js";
import "./useSettingsItems-6Q-d5FSc.js";
import { t as AppSidebar_default } from "./AppSidebar-Bbnh227a.js";
import "./readyToRun.store-B8MU7KDv.js";
import "./resourceCenter.store-DBb4yNdX.js";
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

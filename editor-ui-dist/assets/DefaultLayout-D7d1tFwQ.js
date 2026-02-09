import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Ct6p3xKn.js";
import "./src-DuGormCI.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-BOsECLHo.js";
import "./MainSidebarHeader-CRnKRH1g.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-Bd1ZtBWa.js";
import "./merge-D4SF-xu2.js";
import "./_baseOrderBy-1mqBccLb.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-ClefIYI_.js";
import "./versions.store-DZZaNODa.js";
import "./usePageRedirectionHelper-BY6Ij1YI.js";
import "./useBugReporting-DgjE2kFb.js";
import "./canvas.utils-FegsdY8J.js";
import "./folders.store-C4ZFl9EK.js";
import "./KeyboardShortcutTooltip-BzJtBTqp.js";
import "./sourceControl.eventBus-CtnRZkD1.js";
import "./useKeybindings-D-cIgeGh.js";
import "./useGlobalEntityCreation-fw7VLlH3.js";
import "./useSettingsItems-BOh_iygr.js";
import { t as AppSidebar_default } from "./AppSidebar-BvpWOVRY.js";
import "./readyToRun.store-BpxzmYzI.js";
import "./resourceCenter.store-ClxHybtL.js";
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

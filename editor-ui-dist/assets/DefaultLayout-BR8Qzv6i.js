import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DhtZe8m7.js";
import "./src-YlGrrRzd.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-9FuVvOZm.js";
import "./MainSidebarHeader-BQqYNwpz.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-aHH2jIHR.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-B_jkD7Ds.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CHJGvtdO.js";
import "./versions.store-Bo3PoM3u.js";
import "./usePageRedirectionHelper-BqzxtHme.js";
import "./useBugReporting-LtW6Gauy.js";
import "./canvas.utils-CRaczIF0.js";
import "./folders.store-Bk5vq3bk.js";
import "./KeyboardShortcutTooltip-io4bkSYG.js";
import "./sourceControl.eventBus-wdT7GPlb.js";
import "./useKeybindings-uj2qVW_4.js";
import "./useGlobalEntityCreation-CY4aUxSs.js";
import "./useSettingsItems-CBSQ-O7M.js";
import { t as AppSidebar_default } from "./AppSidebar-CRHrdBqD.js";
import "./readyToRun.store-nzTuqxnV.js";
import "./resourceCenter.store-D-CyDhin.js";
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

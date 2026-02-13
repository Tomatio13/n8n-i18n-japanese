import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Ct6p3xKn.js";
import "./src-DuGormCI.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-AbL4SQmk.js";
import "./MainSidebarHeader-BKGvwtNn.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-Bd1ZtBWa.js";
import "./merge-D4SF-xu2.js";
import "./_baseOrderBy-1mqBccLb.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-ClefIYI_.js";
import "./versions.store-BBkd8RgE.js";
import "./usePageRedirectionHelper-BIMk8vAp.js";
import "./useBugReporting-DrVFu1to.js";
import "./canvas.utils-cwkY3J8Z.js";
import "./folders.store-B1wMWfFE.js";
import "./KeyboardShortcutTooltip-BzJtBTqp.js";
import "./sourceControl.eventBus-CtnRZkD1.js";
import "./useKeybindings-DYFPUzk8.js";
import "./useGlobalEntityCreation-C1kFXzlC.js";
import "./useSettingsItems-BQgJzAuv.js";
import { t as AppSidebar_default } from "./AppSidebar-B-lcMYI-.js";
import "./readyToRun.store-moTr316h.js";
import "./resourceCenter.store-Dx1DUuOQ.js";
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

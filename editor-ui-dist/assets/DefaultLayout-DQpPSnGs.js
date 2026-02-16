import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DhtZe8m7.js";
import "./src-8opT_E6w.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-B9V9zygR.js";
import "./MainSidebarHeader-C-PX6u27.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DGgMTWMV.js";
import "./merge-CSgw7s9f.js";
import "./_baseOrderBy-BUvu0sm6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVZ4qHCe.js";
import "./versions.store-Bitso3Ts.js";
import "./usePageRedirectionHelper-DIPuQU4B.js";
import "./useBugReporting-CrymalDv.js";
import "./canvas.utils-Dgz6PP46.js";
import "./folders.store-CcqQIazA.js";
import "./KeyboardShortcutTooltip-gMxlSUm7.js";
import "./sourceControl.eventBus-CQUjdDRd.js";
import "./useKeybindings-SQdR76rw.js";
import "./useGlobalEntityCreation-DEhziZVl.js";
import "./useSettingsItems-BmLVfpmx.js";
import { t as AppSidebar_default } from "./AppSidebar-atuuepry.js";
import "./readyToRun.store-SAjE0gkn.js";
import "./resourceCenter.store-DIP3BqnX.js";
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

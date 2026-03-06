import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CUByFFvW.js";
import "./MainSidebarHeader-C9ntAV92.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-BRK6cGVZ.js";
import "./merge-Dc2_Qf1D.js";
import "./_baseOrderBy-Bjp9p9x6.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DOjvR_hm.js";
import "./versions.store-Ci-NqzyI.js";
import "./usePageRedirectionHelper-Csc19I3r.js";
import "./useBugReporting-BzWbrZWT.js";
import "./canvas.utils-Dl7tYANC.js";
import "./folders.store-BjHVtN0W.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./sourceControl.eventBus-B2KH0Iq4.js";
import "./useKeybindings-DHlk5RTf.js";
import "./useGlobalEntityCreation-DL9rxOYJ.js";
import "./useSettingsItems-Dry3iXo-.js";
import { t as AppSidebar_default } from "./AppSidebar-BSZTN74F.js";
import "./readyToRun.store-CIE2jBrc.js";
import "./resourceCenter.store-BdLfEMts.js";
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

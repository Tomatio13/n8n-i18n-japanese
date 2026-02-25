import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import "./src-12jI_oWL.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CZakb1us.js";
import "./MainSidebarHeader-DY7Wf-Hf.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-BRkGKd9e.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-CtcXV8Wq.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BUjIzaVZ.js";
import "./versions.store-CpATC_I0.js";
import "./usePageRedirectionHelper-C8UdLiND.js";
import "./useBugReporting-twGFHsel.js";
import "./canvas.utils-BkkBE4OM.js";
import "./folders.store-CCVfzbS1.js";
import "./KeyboardShortcutTooltip-C5bMa2iw.js";
import "./sourceControl.eventBus-BoV0MuGw.js";
import "./useKeybindings-C0glB04d.js";
import "./useGlobalEntityCreation-CVAf9goq.js";
import "./useSettingsItems-D0iPcMcT.js";
import { t as AppSidebar_default } from "./AppSidebar-C7xQnQ70.js";
import "./readyToRun.store-LFqgrly0.js";
import "./resourceCenter.store-Cs4O_n8i.js";
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

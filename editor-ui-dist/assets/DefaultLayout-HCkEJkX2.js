import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-DYjj3Bkk.js";
import "./MainSidebarHeader-BpEly9-F.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./versions.store-DiPr171Y.js";
import "./usePageRedirectionHelper-Cwr4SiTb.js";
import "./useBugReporting-DhqbStws.js";
import "./canvas.utils-bZ_xh70e.js";
import "./folders.store-DmPoI1nu.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./sourceControl.eventBus-CW9OSFK7.js";
import "./useKeybindings-CbxH1dZJ.js";
import "./useGlobalEntityCreation-DLBnuLiO.js";
import "./useSettingsItems-Dgz2TUYz.js";
import { t as AppSidebar_default } from "./AppSidebar-BJIBKKc2.js";
import "./readyToRun.store-D0cxWoBI.js";
import "./resourceCenter.store-tT9S5mxK.js";
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

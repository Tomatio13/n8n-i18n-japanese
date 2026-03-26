import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Ch3NFYOu.js";
import "./src-Dj1o0Sx_.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Bo1lfJ-T.js";
import "./MainSidebarHeader-D5GpY46e.js";
import { t as BaseLayout_default } from "./BaseLayout-BTa12_-N.js";
import "./constants-BDR7DE8A.js";
import "./merge-ClaqV-bg.js";
import "./_baseOrderBy-DOkG05Fo.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-CAe5tQHW.js";
import "./versions.store-7T_49RX_.js";
import "./usePageRedirectionHelper-w6lziXy3.js";
import "./useBugReporting-Cl4--Bn6.js";
import "./canvas.utils-kRFVuaXO.js";
import "./KeyboardShortcutTooltip-Y07OHolq.js";
import "./folders.store-BYctvGlf.js";
import "./sourceControl.eventBus-00a7NZCn.js";
import "./useKeybindings-BtVPckYb.js";
import "./useGlobalEntityCreation-Ch3CBUGe.js";
import "./useSettingsItems-DGo56Rkf.js";
import { t as AppSidebar_default } from "./AppSidebar-DjPcVjpN.js";
import "./readyToRun.store-D3RmF1QU.js";
import "./resourceCenter.store-6nOhlROH.js";
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

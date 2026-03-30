import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-LQ34688M.js";
import "./src-CIy3RA1U.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-n3Mg-2Tf.js";
import "./MainSidebarHeader-CT0qW7jP.js";
import { t as BaseLayout_default } from "./BaseLayout-BIVecLIa.js";
import "./constants-CSSZK8sm.js";
import "./merge-BDPAvSx5.js";
import "./_baseOrderBy-DezvQaYy.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-D9WyiVgI.js";
import "./versions.store-BkwImiyR.js";
import "./usePageRedirectionHelper-Dg_RxYl8.js";
import "./useBugReporting-DUqRbL2U.js";
import "./canvas.utils-C2HyL0A8.js";
import "./KeyboardShortcutTooltip-Bo9DRaLf.js";
import "./folders.store-DLJl_d03.js";
import "./sourceControl.eventBus-CCRUcZKd.js";
import "./useKeybindings-CX_BEvnV.js";
import "./useGlobalEntityCreation--KlVqtnS.js";
import "./useSettingsItems-BtaHRva8.js";
import { t as AppSidebar_default } from "./AppSidebar-YEVTttzf.js";
import "./readyToRun.store-sGr_z5kj.js";
import "./resourceCenter.store-C6sp4BrO.js";
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

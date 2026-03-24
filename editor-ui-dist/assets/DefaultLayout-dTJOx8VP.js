import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DiguV1k7.js";
import "./src-BELAPDSn.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DPEdOi9X.js";
import "./MainSidebarHeader-Blr7zlZf.js";
import { t as BaseLayout_default } from "./BaseLayout-BIVecLIa.js";
import "./constants-MwmOH9ul.js";
import "./merge-DuN0a3S0.js";
import "./_baseOrderBy-BLvkq7eK.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-DISrHC6a.js";
import "./versions.store-iHrMZdf_.js";
import "./usePageRedirectionHelper-CZmp_i86.js";
import "./useBugReporting-CRbxd4_s.js";
import "./canvas.utils-KUS4JPVu.js";
import "./KeyboardShortcutTooltip-BT63fRvB.js";
import "./folders.store-tn9Uwakg.js";
import "./sourceControl.eventBus-CoU-yGkp.js";
import "./useKeybindings-F9N2ZMKn.js";
import "./useGlobalEntityCreation-DsyWiiGC.js";
import "./useSettingsItems-Do4HQRLg.js";
import { t as AppSidebar_default } from "./AppSidebar-RVzmg8Ew.js";
import "./readyToRun.store-DmhRFH7L.js";
import "./resourceCenter.store-DoazVwyM.js";
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

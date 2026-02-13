import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-BCBAY9og.js";
import "./MainSidebarHeader-CKWnnrhv.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./versions.store-BRHbOsst.js";
import "./usePageRedirectionHelper-mJo3lt8w.js";
import "./useBugReporting-qSziDEYz.js";
import "./canvas.utils-BWHiMN1b.js";
import "./folders.store-Cl8_B2y2.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./sourceControl.eventBus-CW9OSFK7.js";
import "./useKeybindings-DdHRPSWD.js";
import "./useGlobalEntityCreation-DyPm6we2.js";
import "./useSettingsItems-B56ohiy8.js";
import { t as AppSidebar_default } from "./AppSidebar-i5HCAbDh.js";
import "./readyToRun.store-BxB9M775.js";
import "./resourceCenter.store-wCI5505j.js";
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

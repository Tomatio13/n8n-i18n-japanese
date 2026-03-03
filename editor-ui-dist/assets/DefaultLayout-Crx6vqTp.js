import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DAfQkYUW.js";
import "./src-CVRo-0o8.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DbrQquUN.js";
import "./MainSidebarHeader-fsQF4d-8.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-HkX3ruPP.js";
import "./merge-D06_YRZ7.js";
import "./_baseOrderBy-CRlYhHsD.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cock4s9P.js";
import "./versions.store-BwXbVFx_.js";
import "./usePageRedirectionHelper-DMI9uvCf.js";
import "./useBugReporting-D3F9W1jI.js";
import "./canvas.utils-BfXwNBic.js";
import "./folders.store-BpQQrRFR.js";
import "./KeyboardShortcutTooltip-BpidOSDc.js";
import "./sourceControl.eventBus-DmbGpAKH.js";
import "./useKeybindings-BuA1w5E4.js";
import "./useGlobalEntityCreation-DB7YIuuH.js";
import "./useSettingsItems-C1Zhvw6I.js";
import { t as AppSidebar_default } from "./AppSidebar-NQI3W9vJ.js";
import "./readyToRun.store-CdpBnIel.js";
import "./resourceCenter.store-CjUa7XU-.js";
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

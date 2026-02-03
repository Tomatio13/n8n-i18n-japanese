import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Chqi9vET.js";
import "./src-B_7PrR_B.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-uS_xAEOX.js";
import "./MainSidebarHeader-BemupKoZ.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CBTLcudZ.js";
import "./merge-Dmma2sos.js";
import "./_baseOrderBy-DsaU_Ltw.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-uyY_iAs4.js";
import "./versions.store-BEY5LkKf.js";
import "./usePageRedirectionHelper-1gqASQ48.js";
import "./useBugReporting-C1bd7r40.js";
import "./canvas.utils-Y52smqRi.js";
import "./folders.store-Dn01TA8J.js";
import "./KeyboardShortcutTooltip-CG4bms-K.js";
import "./sourceControl.eventBus-BjxZfZZm.js";
import "./useKeybindings-DxWHl7f_.js";
import "./useGlobalEntityCreation-CVED2-JH.js";
import "./useSettingsItems-DaFifwTP.js";
import { t as AppSidebar_default } from "./AppSidebar-BT-QsFq1.js";
import "./readyToRun.store-laf0JB7x.js";
import "./resourceCenter.store-DODBWQXg.js";
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

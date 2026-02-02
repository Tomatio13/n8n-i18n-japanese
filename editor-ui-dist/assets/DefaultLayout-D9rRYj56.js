import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Chqi9vET.js";
import "./src-B_7PrR_B.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-D6NNy8B9.js";
import "./MainSidebarHeader-Cf1Jdr_x.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CBTLcudZ.js";
import "./merge-Dmma2sos.js";
import "./_baseOrderBy-DsaU_Ltw.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-uyY_iAs4.js";
import "./versions.store-D0Kt0Xp6.js";
import "./usePageRedirectionHelper-joqXb2TG.js";
import "./useBugReporting-j2-31lxA.js";
import "./canvas.utils-CdoUkqsI.js";
import "./folders.store-CAZgHAbo.js";
import "./KeyboardShortcutTooltip-CG4bms-K.js";
import "./sourceControl.eventBus-BjxZfZZm.js";
import "./useKeybindings-Crzv09tl.js";
import "./useGlobalEntityCreation-ykR8VQv3.js";
import "./useSettingsItems-CBW2pj_4.js";
import { t as AppSidebar_default } from "./AppSidebar-D9vNvDck.js";
import "./readyToRun.store-B7wegrNh.js";
import "./resourceCenter.store-WIOEPdHI.js";
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

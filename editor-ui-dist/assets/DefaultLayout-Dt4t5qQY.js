import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BmeovZbI.js";
import "./src-CUZffS9i.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-wbbCoWla.js";
import "./MainSidebarHeader-DtGQAEpt.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DbJWXRN7.js";
import "./merge-DEi7SsIl.js";
import "./_baseOrderBy-BcXciKNk.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DQPdiyoG.js";
import "./versions.store-C0XhHZcP.js";
import "./usePageRedirectionHelper-BPebdPxO.js";
import "./useBugReporting-DMW3A1UZ.js";
import "./canvas.utils-DWv8Ep5o.js";
import "./folders.store-Cpe0H0az.js";
import "./KeyboardShortcutTooltip-BtEXkv2t.js";
import "./sourceControl.eventBus-CW9OSFK7.js";
import "./useKeybindings-BTDAia6Z.js";
import "./useGlobalEntityCreation-CtGZ36w1.js";
import "./useSettingsItems-CHBCWvAE.js";
import { t as AppSidebar_default } from "./AppSidebar-D-lV_2x4.js";
import "./readyToRun.store-DpKAIZhl.js";
import "./resourceCenter.store-B7uqs1Ic.js";
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

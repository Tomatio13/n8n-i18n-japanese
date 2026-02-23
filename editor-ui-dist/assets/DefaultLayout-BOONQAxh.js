import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import "./src-12jI_oWL.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-83LQdkMX.js";
import "./MainSidebarHeader-D2f4f311.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-B4E1u5vz.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-hkUbIXlT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DSYjQOnm.js";
import "./versions.store-DpJ2SQIi.js";
import "./usePageRedirectionHelper-DcWZdv3e.js";
import "./useBugReporting-BPHO-vYO.js";
import "./canvas.utils-DtXn1vXs.js";
import "./folders.store-BrBcy4iT.js";
import "./KeyboardShortcutTooltip-C5bMa2iw.js";
import "./sourceControl.eventBus-BoV0MuGw.js";
import "./useKeybindings-B4rM4d7s.js";
import "./useGlobalEntityCreation-Cp_6OcQW.js";
import "./useSettingsItems-Dlq_gi56.js";
import { t as AppSidebar_default } from "./AppSidebar-BbdoOngI.js";
import "./readyToRun.store-Ctr2s5gZ.js";
import "./resourceCenter.store-CToE7BlD.js";
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

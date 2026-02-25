import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DJgxgo4K.js";
import "./src-BRXawENP.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-vQVV4dQN.js";
import "./MainSidebarHeader-EPzTKb78.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-BpapHTSQ.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-ByWFxls0.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-xtdD2fLT.js";
import "./versions.store-D70P0COG.js";
import "./usePageRedirectionHelper-cNkgYcrb.js";
import "./useBugReporting-D9apFPGs.js";
import "./canvas.utils-D68_piNx.js";
import "./folders.store-CyBJIEUP.js";
import "./KeyboardShortcutTooltip-xopvg4Tp.js";
import "./sourceControl.eventBus-CaDvyG-t.js";
import "./useKeybindings-BdfGMwKa.js";
import "./useGlobalEntityCreation-DsMXk5rs.js";
import "./useSettingsItems-CldHCFXt.js";
import { t as AppSidebar_default } from "./AppSidebar-DD6M8wtZ.js";
import "./readyToRun.store-CPTdRzsE.js";
import "./resourceCenter.store-BtzzJAOT.js";
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

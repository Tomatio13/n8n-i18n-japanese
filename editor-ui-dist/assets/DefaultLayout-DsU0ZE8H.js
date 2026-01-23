import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BSabmsGd.js";
import "./src-9dBEqjNT.js";
import "./users.store-CRuM-6OK.js";
import "./sanitize-html-Bm7Ej2cW.js";
import "./MainSidebarHeader-af4AGDpk.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-jSlGi3TV.js";
import "./merge-WwnMky1z.js";
import "./_baseOrderBy-DymvjUPt.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CD300VZO.js";
import "./versions.store-CbqlMDGG.js";
import "./usePageRedirectionHelper-DLIH9NoM.js";
import "./useBugReporting-hBbFrxT4.js";
import "./canvas.utils-B46ithaJ.js";
import "./KeyboardShortcutTooltip-uPUQC9r8.js";
import "./sourceControl.eventBus-DWGixBTm.js";
import "./useKeybindings-tIWBZJ0t.js";
import "./personalizedTemplatesV3.store-BHOwJ-dP.js";
import "./useGlobalEntityCreation-DrD2eeJb.js";
import "./useSettingsItems-Ca3QdeX6.js";
import { t as AppSidebar_default } from "./AppSidebar-CPg_Mna3.js";
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

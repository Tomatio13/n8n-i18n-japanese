import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-84FHPy_f.js";
import "./src-_eK_1rXK.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DgUIxOeF.js";
import "./MainSidebarHeader-D0TZY57g.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-BAAsiVuv.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-C99Jw64_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-D1niGPQt.js";
import "./versions.store-CFE28L9I.js";
import "./usePageRedirectionHelper-DK6tYii0.js";
import "./useBugReporting-CcG3Kt69.js";
import "./canvas.utils-CVZRoVR0.js";
import "./folders.store-DWdLyRek.js";
import "./KeyboardShortcutTooltip-DJPW-bsj.js";
import "./sourceControl.eventBus-Co29kTQ0.js";
import "./useKeybindings-C_Ai64eE.js";
import "./useGlobalEntityCreation-DNsftRJH.js";
import "./useSettingsItems-CkdFvOSK.js";
import { t as AppSidebar_default } from "./AppSidebar-BPrrsjtu.js";
import "./readyToRun.store-BTeg1nMZ.js";
import "./resourceCenter.store-D4GMOZqD.js";
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

import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DzvtSRAp.js";
import "./src-foU9rMrs.js";
import "./users.store-D4HoXPob.js";
import "./sanitize-html-Bm7Ej2cW.js";
import "./MainSidebarHeader-CkFYR6dm.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-DJbdJ0QD.js";
import "./merge-CYj4-Mn8.js";
import "./_baseOrderBy-CVzuiWS2.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dd1QbJRS.js";
import "./versions.store-DM1my5zS.js";
import "./usePageRedirectionHelper-C_v4d-lR.js";
import "./useBugReporting-XhJGBSRt.js";
import "./canvas.utils-BUzQMjUB.js";
import "./KeyboardShortcutTooltip-By1vldds.js";
import "./sourceControl.eventBus-mG1QUGLo.js";
import "./useKeybindings-cThyx0Xd.js";
import "./personalizedTemplatesV3.store-92H9UIbR.js";
import "./useGlobalEntityCreation-BT4Py1Jb.js";
import "./useSettingsItems-CwALxaN5.js";
import { t as AppSidebar_default } from "./AppSidebar-iRhpP_LT.js";
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

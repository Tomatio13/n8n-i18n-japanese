import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Cn5DLdg7.js";
import "./src-kZ1r5Wha.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DqUPlrG3.js";
import "./MainSidebarHeader-DwbOhl1Q.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DsDharXz.js";
import "./merge-hHzgyaGO.js";
import "./_baseOrderBy-CsW5-cXA.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cx_bbelL.js";
import "./versions.store-BI0xHRtC.js";
import "./usePageRedirectionHelper-BRuNwETu.js";
import "./useBugReporting-B8jfE_TT.js";
import "./canvas.utils-CwHdGP1p.js";
import "./folders.store-0YEXy6UN.js";
import "./KeyboardShortcutTooltip-CiK8DYmF.js";
import "./sourceControl.eventBus-Dhk7AEun.js";
import "./useKeybindings-DYd6b2zd.js";
import "./useGlobalEntityCreation-CFBmU1Mz.js";
import "./useSettingsItems-75ZiqIyk.js";
import { t as AppSidebar_default } from "./AppSidebar-Bu-ts9OA.js";
import "./readyToRun.store-C5mDuT5X.js";
import "./resourceCenter.store-qPGs-h3q.js";
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

import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Cn5DLdg7.js";
import "./src-DQArgksh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-D-Hq9v-2.js";
import "./MainSidebarHeader-DRptNY9H.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-CUlzSMjf.js";
import "./merge-hHzgyaGO.js";
import "./_baseOrderBy-DXX9_Q98.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DjgpP57e.js";
import "./versions.store-Db8gpkao.js";
import "./usePageRedirectionHelper-7JAveQlD.js";
import "./useBugReporting-BPP7eJ1x.js";
import "./canvas.utils-Bgf-15lF.js";
import "./folders.store-Yg9-DpcH.js";
import "./KeyboardShortcutTooltip-C6P8n4-r.js";
import "./sourceControl.eventBus-gJ6YAYUO.js";
import "./useKeybindings-C00CXXIh.js";
import "./useGlobalEntityCreation-Z694ic6Z.js";
import "./useSettingsItems-pULW0K3W.js";
import { t as AppSidebar_default } from "./AppSidebar-Dsrjvio-.js";
import "./readyToRun.store-CBDYKWWI.js";
import "./resourceCenter.store-B-X5MrIV.js";
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

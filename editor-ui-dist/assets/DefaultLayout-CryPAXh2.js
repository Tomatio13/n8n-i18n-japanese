import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-CVjD7lfb.js";
import "./src-DI71_LGY.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BMJ9fc-u.js";
import "./MainSidebarHeader-B5xkqcYm.js";
import { t as BaseLayout_default } from "./BaseLayout-BTa12_-N.js";
import "./constants-BVqqmrz5.js";
import "./merge-DEVXSdfC.js";
import "./_baseOrderBy-CrD5hJjV.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-BCW--JMK.js";
import "./versions.store-bVafcXwz.js";
import "./usePageRedirectionHelper-DZaBxv6F.js";
import "./useBugReporting-GYTD9L6h.js";
import "./canvas.utils-HRVIUNJr.js";
import "./KeyboardShortcutTooltip-Dd_kVmej.js";
import "./folders.store-DkAmDC_6.js";
import "./sourceControl.eventBus-fFj83-Vm.js";
import "./useKeybindings-Dxb-cuC_.js";
import "./useGlobalEntityCreation-e5374XvS.js";
import "./useSettingsItems-BYCM9zxW.js";
import { t as AppSidebar_default } from "./AppSidebar-Du3vNPhu.js";
import "./readyToRun.store-CoVyd4XG.js";
import "./resourceCenter.store-DSJQdaA4.js";
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

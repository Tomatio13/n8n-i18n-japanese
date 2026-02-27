import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CSyjmPrE.js";
import "./src-CFZC-GtF.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Aq4wLzuB.js";
import "./MainSidebarHeader-8F2zrbID.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-Dh9fnPxX.js";
import "./merge-DWlhEcHQ.js";
import "./_baseOrderBy-BktMx8Ff.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BFHEf0Zz.js";
import "./versions.store--OkzS96N.js";
import "./usePageRedirectionHelper-xE07TxvV.js";
import "./useBugReporting-BWah-y84.js";
import "./canvas.utils-U1Tywk11.js";
import "./folders.store-D-fumZqU.js";
import "./KeyboardShortcutTooltip-BaWd6i79.js";
import "./sourceControl.eventBus-BqnTo8lI.js";
import "./useKeybindings-CEZTlTxK.js";
import "./useGlobalEntityCreation-CV1HcCx6.js";
import "./useSettingsItems-C51mzxX_.js";
import { t as AppSidebar_default } from "./AppSidebar-BSTBI8V3.js";
import "./readyToRun.store-DG6CBJBi.js";
import "./resourceCenter.store-CAUIh8pk.js";
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

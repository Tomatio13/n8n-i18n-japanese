import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DuBqvWDL.js";
import "./src-DZS95w0R.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-C5QWCjzq.js";
import "./MainSidebarHeader-jtVI10RU.js";
import { t as BaseLayout_default } from "./BaseLayout-D-wQuNCi.js";
import "./constants-DzqTl39N.js";
import "./merge-Dc2_Qf1D.js";
import "./_baseOrderBy-Cl_o1Fh3.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-6RVCe0AU.js";
import "./versions.store-Ien8N42r.js";
import "./usePageRedirectionHelper-7Itx6rTo.js";
import "./useBugReporting-D-KohCWz.js";
import "./canvas.utils-Ce-IUDWQ.js";
import "./folders.store-qtaGkoLd.js";
import "./KeyboardShortcutTooltip-Bgmq5ijU.js";
import "./sourceControl.eventBus-B2KH0Iq4.js";
import "./useKeybindings-BDyCsLdJ.js";
import "./useGlobalEntityCreation-CI2EdW9r.js";
import "./useSettingsItems-QFAleOU5.js";
import { t as AppSidebar_default } from "./AppSidebar-CBA3HroV.js";
import "./readyToRun.store-D4nzHbEa.js";
import "./resourceCenter.store-BJKf-C-w.js";
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

import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DzvtSRAp.js";
import "./src-foU9rMrs.js";
import "./users.store-B8MNpFK1.js";
import "./sanitize-html-Bm7Ej2cW.js";
import "./MainSidebarHeader-DM5o5SDR.js";
import { t as BaseLayout_default } from "./BaseLayout-yNhTBi6_.js";
import "./constants-Bpgtcge2.js";
import "./merge-CYj4-Mn8.js";
import "./_baseOrderBy-DTKFAGkB.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dd1QbJRS.js";
import "./versions.store-Bte5Prpe.js";
import "./usePageRedirectionHelper-C15q25NR.js";
import "./useBugReporting-BcVhmDRR.js";
import "./canvas.utils-hsCHu1W4.js";
import "./KeyboardShortcutTooltip-By1vldds.js";
import "./sourceControl.eventBus-mG1QUGLo.js";
import "./useKeybindings-CjGKMSpm.js";
import "./personalizedTemplatesV3.store-BkCEkPXW.js";
import "./useGlobalEntityCreation-BJf_ECeM.js";
import "./useSettingsItems-D88Q3EGT.js";
import { t as AppSidebar_default } from "./AppSidebar-But0NUh0.js";
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

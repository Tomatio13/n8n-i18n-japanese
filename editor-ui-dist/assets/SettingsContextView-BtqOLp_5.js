import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, X as onMounted, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as PreviewTag_default } from "./PreviewTag-CISVp_-U.js";
import { t as SettingsLayout_default } from "./SettingsLayout-CP9bXVix.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-BXLEIkk3.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-eIo8piUF.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-Sc_ClrxG.js";
import { t as VIEWS } from "./views-DQZApcH_.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import "./constants-BFgNRWjM.js";
import { n as useDocumentTitle } from "./useDocumentTitle-BHVkdM92.js";
import { t as useContextStore } from "./context.store-Dv6dRfxz.js";
//#region src/features/settings/context/views/SettingsContextView.vue?vue&type=script&setup=true&lang.ts
var SettingsContextView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsContextView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const contextStore = useContextStore();
		const { showError } = useToast();
		const preferenceCount = computed(() => i18n.baseText("settings.context.preferences.count", {
			interpolate: { count: contextStore.count },
			adjustToNumber: contextStore.count
		}));
		async function openPreferences() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT_PREFERENCES });
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.title"));
			try {
				await contextStore.fetchPreferenceCount();
			} catch (error) {
				showError(error, i18n.baseText("settings.context.preferences.error.load"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "settings-context-view"
			}, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("settings.context.title"),
					description: unref(i18n).baseText("settings.context.description"),
					"show-docs-link": false
				}, {
					titleTrailing: withCtx(() => [createVNode(unref(PreviewTag_default), { size: "medium" })]),
					_: 1
				}, 8, ["title", "description"]), createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [
						createVNode(unref(SettingsRow_default), {
							clickable: "",
							title: unref(i18n).baseText("settings.context.preferences.title"),
							description: unref(i18n).baseText("settings.context.preferences.subtitle"),
							"data-test-id": "settings-context-preferences-row",
							onClick: openPreferences
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: preferenceCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.comingSoon"),
							"data-test-id": "settings-context-skills-row"
						}, null, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							title: unref(i18n).baseText("settings.context.sources.title"),
							description: unref(i18n).baseText("settings.context.comingSoon"),
							"data-test-id": "settings-context-sources-row"
						}, null, 8, ["title", "description"])
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var SettingsContextView_vue_vue_type_style_index_0_lang_module_default = { layout: "_layout_121n7_2" };
var SettingsContextView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsContextView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsContextView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsContextView_default as default };

import { Bf as unref, Fd as createBlock, Nd as computed, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, nf as onMounted, os as useRouter, sp as normalizeClass } from "./vendor-C1jTjpo6.js";
import { Dw as useI18n, J_ as useToast, QS as SettingsRow_default, Sw as _plugin_vue_export_helper_default, XS as SettingsRowGroup_default, Y_ as VIEWS, ZS as SettingsRowConfigure_default, eC as SettingsPageHeader_default, lC as PreviewBadge_default, tC as SettingsLayout_default, vd as useDocumentTitle } from "./app-C-V9N0hV.js";
import { t as useContextStore } from "./context.store-CjWOPajU.js";
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
					titleTrailing: withCtx(() => [createVNode(unref(PreviewBadge_default), { size: "medium" })]),
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

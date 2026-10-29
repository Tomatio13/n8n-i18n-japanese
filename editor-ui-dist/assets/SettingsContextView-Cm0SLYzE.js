import { Ed as computed, Id as defineComponent, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Yd as onMounted, ep as normalizeClass, is as useRouter, kd as createCommentVNode, pf as withCtx } from "./vendor-z-loPfiR.js";
import { AE as _plugin_vue_export_helper_default, Ey as VIEWS, FE as useI18n, Ty as useToast, Yf as useDocumentTitle, aT as SettingsPageHeader_default, hT as PreviewBadge_default, l as isContextPreferencesEnabled, nT as SettingsRowConfigure_default, oT as SettingsLayout_default, rT as SettingsRow_default, tT as SettingsRowGroup_default, u as isContextSkillsEnabled } from "./app-kkzDAG6o.js";
import { t as useContextStore } from "./context.store-DDqmFPsi.js";
import { t as useSkillsStore } from "./skills.store-BNS5Ud9V.js";
//#region src/features/settings/context/views/SettingsContextView.vue?vue&type=script&setup=true&lang.ts
var SettingsContextView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsContextView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const contextStore = useContextStore();
		const skillsStore = useSkillsStore();
		const preferencesEnabled = isContextPreferencesEnabled();
		const skillsEnabled = isContextSkillsEnabled();
		const { showError } = useToast();
		const preferenceCount = computed(() => i18n.baseText("settings.context.preferences.count", {
			interpolate: { count: contextStore.count },
			adjustToNumber: contextStore.count
		}));
		const skillCount = computed(() => i18n.baseText("settings.context.skills.count", {
			interpolate: { count: skillsStore.count },
			adjustToNumber: skillsStore.count
		}));
		async function openSkills() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT_SKILLS });
		}
		async function openPreferences() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT_PREFERENCES });
		}
		/** Each row reports its own failure: it would otherwise show a zero as though it were real. */
		async function loadCount(fetchCount, errorKey) {
			try {
				await fetchCount();
			} catch (error) {
				showError(error, i18n.baseText(errorKey));
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.title"));
			await Promise.all([preferencesEnabled && loadCount(async () => await contextStore.fetchPreferenceCount(), "settings.context.preferences.error.load"), skillsEnabled && loadCount(async () => await skillsStore.fetchSkillCount(), "settings.context.skills.error.load")]);
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
					titleTrailing: withCtx(() => [createVNode(unref(PreviewBadge_default), { size: "xsmall" })]),
					_: 1
				}, 8, ["title", "description"]), createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [
						unref(preferencesEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 0,
							clickable: "",
							title: unref(i18n).baseText("settings.context.preferences.title"),
							description: unref(i18n).baseText("settings.context.preferences.subtitle"),
							"data-test-id": "settings-context-preferences-row",
							onClick: openPreferences
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: preferenceCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						unref(skillsEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 1,
							clickable: "",
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.skills.subtitle"),
							"data-test-id": "settings-context-skills-row",
							onClick: openSkills
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: skillCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"])) : (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 2,
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.comingSoon"),
							"data-test-id": "settings-context-skills-row"
						}, null, 8, ["title", "description"])),
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

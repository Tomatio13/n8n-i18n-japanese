import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withCtx, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Rd as computed, Yf as unref, ff as openBlock, gp as normalizeClass, lf as onMounted, rp as init_shared_esm_bundler, rs as useRouter } from "./vendor-BtpAr53w.js";
import { Fk as useI18n, Tx as VIEWS, aO as SettingsPageHeader_default, an as isContextSkillsEnabled, hm as useDocumentTitle, kk as _plugin_vue_export_helper_default, mO as PreviewBadge_default, nO as SettingsRowConfigure_default, oO as SettingsLayout_default, rO as SettingsRow_default, tO as SettingsRowGroup_default, wx as useToast } from "./app-Dp0u0Hpe.js";
import { t as useContextStore } from "./context.store-B1R_iFws.js";
import { t as useSkillsStore } from "./skills.store-BNAp9aJM.js";
//#region src/features/settings/context/views/SettingsContextView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SettingsContextView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SettingsContextView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const contextStore = useContextStore();
		const skillsStore = useSkillsStore();
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
			await Promise.all([loadCount(async () => await contextStore.fetchPreferenceCount(), "settings.context.preferences.error.load"), skillsEnabled && loadCount(async () => await skillsStore.fetchSkillCount(), "settings.context.skills.error.load")]);
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
						unref(skillsEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 0,
							clickable: "",
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.skills.subtitle"),
							"data-test-id": "settings-context-skills-row",
							onClick: openSkills
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: skillCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"])) : (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 1,
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
}), [["__cssModules", { "$style": { layout: "_layout_121n7_2" } }]]);
//#endregion
export { SettingsContextView_default as default };

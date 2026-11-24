import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { $A as SettingsRow_default, NM as _plugin_vue_export_helper_default, OS as useToast, Vd as useDocumentTitle, XA as SettingsRowConfigure_default, YA as SettingsRowGroup_default, kS as VIEWS, nj as SettingsLayout_default, tj as SettingsPageHeader_default, uj as PreviewBadge_default, ys as isContextSkillsEnabled, zM as useI18n } from "./app-BJz3tlB7.js";
import { t as useContextStore } from "./context.store-CEy-Xa2A.js";
import { t as useSkillsStore } from "./skills.store-CrQT-awm.js";
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
					default: withCtx(() => [createVNode(unref(SettingsRow_default), {
						clickable: "",
						title: unref(i18n).baseText("settings.context.preferences.title"),
						description: unref(i18n).baseText("settings.context.preferences.subtitle"),
						"data-test-id": "settings-context-preferences-row",
						onClick: openPreferences
					}, {
						action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: preferenceCount.value }, null, 8, ["value"])]),
						_: 1
					}, 8, ["title", "description"]), unref(skillsEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
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
					}, null, 8, ["title", "description"]))]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": { layout: "_layout_121n7_2" } }]]);
//#endregion
export { SettingsContextView_default as default };

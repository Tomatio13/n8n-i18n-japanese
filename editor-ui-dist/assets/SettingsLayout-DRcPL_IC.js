import { $d as resolveComponent, Ad as createTextVNode, Af as unref, Dd as createElementBlock, Kd as onMounted, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zd as renderList, Zf as normalizeClass, as as useRouter, bd as Fragment, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { Dc as useAiGateway, KS as N8nMenuItem_default, K_ as useRootStore, Nx as BaseLayout_default, aC as N8nLink_default, aw as _plugin_vue_export_helper_default, mp as isRouteLocationRaw, nw as N8nIcon_default, qC as N8nText_default, uw as useI18n, wp as useUIStore, z_ as VIEWS } from "./app-DPWSzjF9.js";
import { t as useSettingsItems } from "./useSettingsItems-Cp2pwvRd.js";
//#region src/app/components/SettingsSidebar.vue?vue&type=script&setup=true&lang.ts
var SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const { settingsItems, handleSettingsItemSelect } = useSettingsItems();
		const { fetchWallet, isEnabled } = useAiGateway();
		onMounted(() => {
			if (isEnabled.value) fetchWallet();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.returnButton),
					"data-test-id": "settings-back",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("return"))
				}, [createBaseVNode("i", null, [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]), createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingsItems), (item) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: item.id,
						item,
						onClick: ($event) => unref(handleSettingsItemSelect)(item.id)
					}, null, 8, ["item", "onClick"]);
				}), 128))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionContainer) }, [createVNode(unref(N8nLink_default), {
					size: "small",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(uiStore).openModal(unref("about")))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.version")) + " " + toDisplayString(unref(rootStore).versionCli), 1)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
var SettingsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1q5hr_1",
	returnButton: "_returnButton_1q5hr_10",
	items: "_items_1q5hr_21",
	versionContainer: "_versionContainer_1q5hr_27"
};
var SettingsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/layouts/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
var SettingsLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsLayout",
	setup(__props) {
		const router = useRouter();
		const previousRoute = ref();
		function onReturn() {
			const resolvedSettingsRoute = router.resolve({ name: VIEWS.SETTINGS });
			const resolvedPreviousRoute = isRouteLocationRaw(previousRoute.value) ? router.resolve(previousRoute.value) : null;
			const backRoute = !resolvedPreviousRoute || resolvedPreviousRoute.path.startsWith(resolvedSettingsRoute.path) ? { name: VIEWS.HOMEPAGE } : resolvedPreviousRoute;
			router.push(backRoute);
		}
		onMounted(() => {
			previousRoute.value = router.options.history.state.back;
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(SettingsSidebar_default, { onReturn })]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(_component_RouterView)], 2)], 2)]),
				_: 1
			});
		};
	}
});
var SettingsLayout_vue_vue_type_style_index_0_lang_module_default = {
	contentContainer: "_contentContainer_87jwj_1",
	content: "_content_87jwj_1"
};
var SettingsLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLayout_default as default };

import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, jf as init_reactivity_esm_bundler, mf as resolveComponent, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Dr as useAiGateway, LS as useRootStore, MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, Qh as isRouteLocationRaw, Vk as BaseLayout_default, bM as N8nText_default, cj as N8nMenuItem_default, gg as useUIStore, kM as N8nButton_default, kS as VIEWS, xA as N8nScrollArea_default, zM as useI18n } from "./app-B_io1t1X.js";
import { t as useSettingsItems } from "./useSettingsItems-UwJy3Xtt.js";
//#region src/app/components/SettingsSidebar.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["data-test-id"];
var SettingsSidebar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const { settingsSections, handleSettingsItemSelect } = useSettingsItems();
		const { fetchWallet, isEnabled } = useAiGateway();
		onMounted(() => {
			if (isEnabled.value) fetchWallet();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.returnBar) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.returnButton),
				"data-test-id": "settings-back",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("return"))
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.arrowIcon) }, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "small"
			})], 2), createVNode(unref(N8nText_default), { bold: "" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)]),
				_: 1
			})], 2)], 2), createVNode(unref(N8nScrollArea_default), {
				"edge-fade": "y",
				class: normalizeClass(_ctx.$style.scrollArea),
				"data-test-id": "settings-sidebar-scroll"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingsSections), (section) => {
					return openBlock(), createElementBlock("div", {
						key: section.id,
						class: normalizeClass(_ctx.$style.section),
						"data-test-id": `settings-section-${section.id}`
					}, [section.title ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						tag: "div",
						size: "small",
						bold: "",
						color: "text-light",
						class: normalizeClass(_ctx.$style.sectionTitle)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(section.title), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
						return openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: item.id,
							item,
							onClick: ($event) => unref(handleSettingsItemSelect)(item.id)
						}, null, 8, ["item", "onClick"]);
					}), 128))], 10, _hoisted_1);
				}), 128))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionContainer) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					label: `${unref(i18n).baseText("settings.version")} ${unref(rootStore).versionCli}`,
					"data-test-id": "settings-sidebar-version",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(uiStore).openModal(unref("about")))
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_6bhjl_1",
	scrollArea: "_scrollArea_6bhjl_13",
	returnBar: "_returnBar_6bhjl_17",
	returnButton: "_returnButton_6bhjl_23",
	arrowIcon: "_arrowIcon_6bhjl_33",
	items: "_items_6bhjl_44",
	section: "_section_6bhjl_50",
	sectionTitle: "_sectionTitle_6bhjl_58",
	versionContainer: "_versionContainer_6bhjl_63"
} }]]);
//#endregion
//#region src/app/layouts/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var SettingsLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	contentContainer: "_contentContainer_87jwj_1",
	content: "_content_87jwj_1"
} }]]);
//#endregion
export { SettingsLayout_default as default };

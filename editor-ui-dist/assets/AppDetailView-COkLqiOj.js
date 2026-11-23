import { $d as init_runtime_core_esm_bundler, Bf as ref, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Rd as computed, ff as openBlock, gp as normalizeClass, lf as onMounted, ns as useRoute, rp as init_shared_esm_bundler, rs as useRouter } from "./vendor-BtpAr53w.js";
import { B_ as createAppAssistantHandoff, Fk as useI18n, H_ as use, Mx as useRootStore, Rn as PROJECT_APPS, Tx as VIEWS, aS as ResponseError, kk as _plugin_vue_export_helper_default, wn as getApp, wx as useToast } from "./app-BkXgJgpY.js";
import { t as AppView_default } from "./AppView-DCrHJsOQ.js";
//#region ../../modules/apps/frontend/src/views/AppDetailView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = {
	key: 1,
	"data-test-id": "app-assistant-handoff"
};
var AppDetailView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppDetailView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const rootStore = useRootStore();
		const toast = useToast();
		const i18n = useI18n();
		const assistant = use(createAppAssistantHandoff)();
		const projectId = computed(() => String(route.params.projectId));
		const appId = computed(() => String(route.params.appId));
		const showEditor = ref(!assistant.available.value);
		const section = computed({
			get: () => typeof route.query.section === "string" ? route.query.section : "preview",
			set: (value) => {
				router.replace({ query: {
					...route.query,
					section: value === "preview" ? void 0 : value
				} });
			}
		});
		onMounted(async () => {
			if (showEditor.value) return;
			const originRoute = router.currentRoute.value;
			let app;
			try {
				app = await getApp(rootStore.restApiContext, projectId.value, appId.value);
			} catch (error) {
				if (router.currentRoute.value !== originRoute) return;
				if (error instanceof ResponseError) {
					if (error.httpStatusCode === 404) {
						await router.replace({
							name: PROJECT_APPS,
							params: { projectId: projectId.value }
						});
						return;
					}
					if (error.httpStatusCode === 403) {
						await router.replace({
							name: VIEWS.PROJECTS_WORKFLOWS,
							params: { projectId: projectId.value }
						});
						return;
					}
				}
				toast.showError(error, i18n.baseText("apps.detail.loadError"));
				await router.replace({
					name: PROJECT_APPS,
					params: { projectId: projectId.value }
				});
				return;
			}
			if (router.currentRoute.value !== originRoute) return;
			if (!await assistant.openApp({
				projectId: projectId.value,
				appId: appId.value,
				appName: app.name
			}) && router.currentRoute.value === originRoute) showEditor.value = true;
		});
		function onDeleted() {
			router.push({
				name: PROJECT_APPS,
				params: { projectId: projectId.value }
			});
		}
		return (_ctx, _cache) => {
			return showEditor.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.page)
			}, [createVNode(AppView_default, {
				section: section.value,
				"onUpdate:section": _cache[0] || (_cache[0] = ($event) => section.value = $event),
				"project-id": projectId.value,
				"app-id": appId.value,
				onDeleted
			}, null, 8, [
				"section",
				"project-id",
				"app-id"
			])], 2)) : (openBlock(), createElementBlock("div", _hoisted_1));
		};
	}
}), [["__cssModules", { "$style": { page: "_page_dz58o_1" } }]]);
//#endregion
export { AppDetailView_default as default };

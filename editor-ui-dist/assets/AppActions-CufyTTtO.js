import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { Jk as useMessage, LS as useRootStore, OS as useToast, YC as ResponseError, cM as N8nActionToggle_default, nc as getAppPermissions, zM as useI18n, zs as deleteApp } from "./app-B_io1t1X.js";
//#region ../../modules/apps/frontend/src/components/AppActions.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/apps/frontend/src/components/AppActions.vue
var AppActions_default = /* @__PURE__ */ defineComponent({
	__name: "AppActions",
	props: { app: {} },
	emits: ["deleted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const rootStore = useRootStore();
		const canDelete = computed(() => getAppPermissions(props.app.projectId).canDelete);
		const actions = computed(() => [{
			label: i18n.baseText("generic.delete"),
			value: "delete"
		}]);
		async function onAction(action) {
			if (action !== "delete") return;
			if (await message.confirm(i18n.baseText("apps.delete.message", { interpolate: { name: props.app.name } }), i18n.baseText("apps.delete.title"), {
				confirmButtonText: i18n.baseText("generic.delete"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				type: "warning"
			}) !== "confirm") return;
			try {
				await deleteApp(rootStore.restApiContext, props.app.projectId, props.app.id);
				emit("deleted", props.app.id);
			} catch (error) {
				if (error instanceof ResponseError && error.httpStatusCode === 404) {
					emit("deleted", props.app.id);
					return;
				}
				toast.showError(error, i18n.baseText("apps.delete.error"));
			}
		}
		return (_ctx, _cache) => {
			return canDelete.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				actions: actions.value,
				theme: "dark",
				"data-test-id": "app-actions",
				onAction
			}, null, 8, ["actions"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { AppActions_default as t };

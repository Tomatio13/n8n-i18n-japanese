import { Id as computed, Lf as reactive, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { LS as useRootStore, Nn as getErrorMessage, PS as useUsersStore, RT as getResourcePermissions } from "./app-B_io1t1X.js";
import { i as connectPromotionCheckout } from "./useInstancePromotionConnection-DWtPjRyN.js";
//#region ../../modules/promotions/frontend/src/composables/usePromotionCheckout.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** The API does not store connect errors, so they live until the page reloads. */
var connectErrors = reactive(/* @__PURE__ */ new Map());
function usePromotionCheckout() {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const permissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).promotions);
	const canConnect = computed(() => !!permissions.value.connect);
	async function connect(environmentId) {
		try {
			await connectPromotionCheckout(rootStore.publicApiContext, environmentId);
			connectErrors.delete(environmentId);
			return true;
		} catch (error) {
			connectErrors.set(environmentId, getErrorMessage(error));
			return false;
		}
	}
	return {
		connectErrors,
		permissions,
		canConnect,
		connect
	};
}
//#endregion
export { usePromotionCheckout as t };

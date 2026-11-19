import { $d as init_runtime_core_esm_bundler, Mf as init_reactivity_esm_bundler, Rd as computed, Rf as reactive } from "./vendor-BtpAr53w.js";
import { Ax as useUsersStore, Mx as useRootStore, fl as getErrorMessage, kC as getResourcePermissions } from "./app-Dp0u0Hpe.js";
import { i as connectPromotionCheckout } from "./useInstancePromotionConnection-DOC-zo3C.js";
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

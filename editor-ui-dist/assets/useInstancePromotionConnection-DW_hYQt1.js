import { Cd as computed, Sf as ref } from "./vendor-C0K-pJCd.js";
import { K_ as useRootStore } from "./app-Gcu_WcI0.js";
import { u as fetchPromotionConnections } from "./promotionsSettings.api-c0PHTYSP.js";
//#region src/features/integrations/promotions.ee/composables/useInstancePromotionConnection.ts
var instanceConnection;
function invalidateInstancePromotionConnection() {
	instanceConnection = void 0;
}
/** The instance connection and which directions it has, so callers only ask for those. */
function useInstancePromotionConnection() {
	const rootStore = useRootStore();
	const connection = ref(null);
	async function load() {
		instanceConnection ??= fetchPromotionConnections(rootStore.publicApiContext, { scope: "instance" }).then((connections) => connections[0] ?? null).catch(() => {
			invalidateInstancePromotionConnection();
			return null;
		});
		connection.value = await instanceConnection;
	}
	return {
		connection,
		hasPromoteConfig: computed(() => connection.value?.configs.promote !== void 0),
		hasApplyConfig: computed(() => connection.value?.configs.apply !== void 0),
		load
	};
}
//#endregion
export { useInstancePromotionConnection as n, invalidateInstancePromotionConnection as t };

import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ut as useRouter } from "./src-JoIeR4B0.js";
import { Bt as useWorkflowSaving, Q as useAiGatewayStore } from "./users.store-KlxjJSFe.js";
import { t as useSettingsStore } from "./settings.store-DUGrXCMZ.js";
//#region src/app/composables/useAiGateway.ts
function useAiGateway() {
	const settingsStore = useSettingsStore();
	const { saveCurrentWorkflow } = useWorkflowSaving({ router: useRouter() });
	const aiGatewayStore = useAiGatewayStore();
	const creditsRemaining = computed(() => aiGatewayStore.creditsRemaining);
	const creditsQuota = computed(() => aiGatewayStore.creditsQuota);
	const fetchError = computed(() => aiGatewayStore.fetchError);
	const isEnabled = computed(() => settingsStore.isAiGatewayEnabled);
	async function fetchCredits() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchCredits();
	}
	const isCredentialTypeSupported = (credentialType) => aiGatewayStore.isCredentialTypeSupported(credentialType);
	async function fetchConfig() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchConfig();
	}
	async function saveAfterToggle() {
		await saveCurrentWorkflow({}, false, false, true);
	}
	return {
		isEnabled,
		creditsRemaining,
		creditsQuota,
		fetchError,
		fetchConfig,
		fetchCredits,
		isCredentialTypeSupported,
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };

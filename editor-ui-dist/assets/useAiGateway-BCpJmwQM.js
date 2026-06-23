import { S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { _t as useRouter } from "./src-Q_JVDhH3.js";
import { X as useAiGatewayStore } from "./workflowDocument.store-Cj75TPAQ.js";
import { t as useSettingsStore } from "./settings.store-DuNxS6fL.js";
import { r as useWorkflowSaving } from "./builder.store-CzQ_ZK_t.js";
//#region src/app/composables/useAiGateway.ts
function useAiGateway() {
	const settingsStore = useSettingsStore();
	const { saveCurrentWorkflow } = useWorkflowSaving({ router: useRouter() });
	const aiGatewayStore = useAiGatewayStore();
	const balance = computed(() => aiGatewayStore.balance);
	const budget = computed(() => aiGatewayStore.budget);
	const fetchError = computed(() => aiGatewayStore.fetchError);
	const isEnabled = computed(() => settingsStore.isAiGatewayEnabled);
	async function fetchWallet() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchWallet();
	}
	const isCredentialTypeSupported = (credentialType) => aiGatewayStore.isCredentialTypeSupported(credentialType);
	const isActionSupported = (nodeName, resource, operation) => aiGatewayStore.isActionSupported(nodeName, resource, operation);
	const isNodeTypeVersionSupported = (nodeName, typeVersion) => aiGatewayStore.isNodeTypeVersionSupported(nodeName, typeVersion);
	async function fetchConfig() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchConfig();
	}
	async function saveAfterToggle() {
		await saveCurrentWorkflow({}, false, false, true);
	}
	return {
		isEnabled,
		balance,
		budget,
		fetchError,
		fetchConfig,
		fetchWallet,
		isCredentialTypeSupported,
		isActionSupported,
		isNodeTypeVersionSupported,
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };

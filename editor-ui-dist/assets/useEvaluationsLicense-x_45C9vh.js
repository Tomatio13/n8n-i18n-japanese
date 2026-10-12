import { Cd as computed } from "./vendor-C0K-pJCd.js";
import { Ic as useUsageStore } from "./app-Gcu_WcI0.js";
//#region src/features/ai/evaluation.ee/composables/useEvaluationsLicense.ts
var licensePromise = null;
function useEvaluationsLicense() {
	const usageStore = useUsageStore();
	const isLicensed = computed(() => usageStore.workflowsWithEvaluationsLimit !== 0);
	const isResolved = computed(() => usageStore.hasLoadedLicense);
	async function ensureLicenseLoaded() {
		if (!licensePromise) licensePromise = usageStore.getLicenseInfo().catch(() => {
			licensePromise = null;
		});
		await licensePromise;
	}
	return {
		isLicensed,
		isResolved,
		ensureLicenseLoaded
	};
}
//#endregion
export { useEvaluationsLicense as t };

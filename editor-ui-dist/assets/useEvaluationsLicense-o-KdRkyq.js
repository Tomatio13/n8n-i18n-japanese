import { Ed as computed } from "./vendor-z-loPfiR.js";
import { mu as useUsageStore } from "./app-CqwplyU_.js";
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

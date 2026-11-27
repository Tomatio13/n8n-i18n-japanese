import { Id as computed, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { IS as useSettingsStore, lS as EnterpriseEditionFeature } from "./app-BXv1VOvT.js";
//#region src/features/workflow-reviews/composables/useWorkflowReviewsFeature.ts
init_runtime_core_esm_bundler();
var useWorkflowReviewsFeature = () => {
	const settingsStore = useSettingsStore();
	const isWorkflowReviewsAvailable = computed(() => {
		return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowReviews] ?? false;
	});
	return {
		isWorkflowReviewsAvailable,
		isWorkflowReviewsEnabled: computed(() => {
			return isWorkflowReviewsAvailable.value && settingsStore.settings.workflowReviews?.enabled === true;
		})
	};
};
//#endregion
export { useWorkflowReviewsFeature as t };

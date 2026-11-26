import { Cf as watch, Id as computed, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, lo as defineStore, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Ap as useWorkflowsListStore, Bk as STORES, Bv as usePostHog, IS as useSettingsStore, Kv as TELEMETRY_EVENT, MS as useTelemetry, Qx as PERSONALIZED_TEMPLATES_V3, ed as useTemplatesStore, jS as useCloudPlanStore, kS as VIEWS } from "./app-B_io1t1X.js";
//#region src/experiments/personalizedTemplatesV3/stores/personalizedTemplatesV3.store.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var usePersonalizedTemplatesV3Store = defineStore(STORES.PERSONALIZED_TEMPLATES_V3, () => {
	const telemetry = useTelemetry();
	const posthogStore = usePostHog();
	const cloudPlanStore = useCloudPlanStore();
	const settingsStore = useSettingsStore();
	const templatesStore = useTemplatesStore();
	const workflowsListStore = useWorkflowsListStore();
	const INTERACTION_STORAGE_KEY = "n8n-personalizedTemplatesV3-hasInteracted";
	const hasInteractedWithTemplateRecommendations = ref(localStorage.getItem(INTERACTION_STORAGE_KEY) === "true");
	const isFeatureEnabled = () => {
		const isLocalhost = window.location.hostname === "localhost";
		return posthogStore.getVariant(PERSONALIZED_TEMPLATES_V3.name) === PERSONALIZED_TEMPLATES_V3.variant && (isLocalhost || cloudPlanStore.userIsTrialing);
	};
	const hasChosenHubSpot = computed(() => {
		const selectedApps = cloudPlanStore.selectedApps;
		if (!selectedApps?.length) return false;
		return selectedApps.includes("n8n-nodes-base.hubspot") || selectedApps.includes("n8n-nodes-base.hubspotTrigger");
	});
	const shouldShowTemplateTooltip = computed(() => {
		const allWorkflows = workflowsListStore.allWorkflows;
		return isFeatureEnabled() && hasChosenHubSpot.value && allWorkflows.length > 0 && !hasInteractedWithTemplateRecommendations.value;
	});
	function getHubSpotData() {
		return { templates: [
			8966,
			8967,
			8968,
			8969,
			8970,
			8971
		] };
	}
	async function getTemplateData(templateId) {
		return await templatesStore.fetchTemplateById(templateId.toString());
	}
	function getTemplateRoute(id) {
		return {
			name: VIEWS.TEMPLATE,
			params: { id }
		};
	}
	function trackPersonalizationCardClick() {
		telemetry.track("User clicked on personalization card");
	}
	function trackPersonalizationModalView() {
		telemetry.track("User viewed personalization modal");
	}
	function trackPersonalizationTooltipView() {
		telemetry.track("User viewed personalization tooltip");
	}
	function trackPersonalizationTooltipDismiss() {
		telemetry.track("User dismissed personalization tooltip");
	}
	function trackTemplateClickFromModal(templateId) {
		telemetry.track("User clicked on template from modal", { templateId });
	}
	function trackTemplatesRepoClickFromModal() {
		telemetry.track("User clicked on templates repo from modal");
	}
	function markTemplateRecommendationInteraction() {
		hasInteractedWithTemplateRecommendations.value = true;
		localStorage.setItem(INTERACTION_STORAGE_KEY, "true");
	}
	const trackExperimentParticipation = async () => {
		if (settingsStore.isCloudDeployment && !cloudPlanStore.state.initialized) try {
			await cloudPlanStore.initialize();
		} catch (error) {
			console.warn("Could not load cloud plan data for experiment tracking:", error);
			return;
		}
		if (!hasChosenHubSpot.value) return;
		const variant = posthogStore.getVariant(PERSONALIZED_TEMPLATES_V3.name);
		if (variant) telemetry.track(TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT, {
			name: PERSONALIZED_TEMPLATES_V3.name,
			variant
		});
	};
	let hasTrackedExperiment = false;
	watch(hasChosenHubSpot, (hasHubSpot) => {
		if (hasHubSpot && !hasTrackedExperiment) {
			hasTrackedExperiment = true;
			trackExperimentParticipation();
		}
	}, { immediate: true });
	return {
		isFeatureEnabled,
		hasChosenHubSpot,
		shouldShowTemplateTooltip,
		getHubSpotData,
		getTemplateData,
		getTemplateRoute,
		trackPersonalizationCardClick,
		trackPersonalizationModalView,
		trackPersonalizationTooltipView,
		trackPersonalizationTooltipDismiss,
		trackTemplateClickFromModal,
		trackTemplatesRepoClickFromModal,
		markTemplateRecommendationInteraction
	};
});
//#endregion
export { usePersonalizedTemplatesV3Store as t };

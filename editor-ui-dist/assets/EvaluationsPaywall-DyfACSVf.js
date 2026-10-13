import { Bf as unref, Fd as createBlock, Nd as computed, Ud as defineComponent, af as openBlock } from "./vendor-C1jTjpo6.js";
import { DC as N8nEmptyState_default, Fp as useUIStore, Kp as COMMUNITY_PLUS_ENROLLMENT_MODAL, Ow as useI18n, Sm as usePostHog, __ as EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT, tv as useSettingsStore } from "./app-C5zIGyiz.js";
//#region src/experiments/evaluationsWizardSidepanel/useEvaluationsWizardSidepanelExperiment.ts
function useEvaluationsWizardSidepanelExperiment() {
	const posthogStore = usePostHog();
	const settingsStore = useSettingsStore();
	return { isFeatureEnabled: computed(() => settingsStore.settings.evaluation?.configEvalsEnabled === true || posthogStore.getVariant(EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.name) === EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.variant) };
}
//#endregion
//#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue
var EvaluationsPaywall_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsPaywall",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const goToUpgrade = async () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				"data-test-id": "evaluations-unlicensed",
				heading: unref(i18n).baseText("evaluations.paywall.title"),
				description: unref(i18n).baseText("evaluations.paywall.description"),
				"button-text": unref(i18n).baseText("evaluations.paywall.cta"),
				onClick: goToUpgrade
			}, null, 8, [
				"heading",
				"description",
				"button-text"
			]);
		};
	}
});
//#endregion
export { useEvaluationsWizardSidepanelExperiment as n, EvaluationsPaywall_default as t };

import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Bg as COMMUNITY_PLUS_ENROLLMENT_MODAL, Bv as usePostHog, Gx as EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT, IS as useSettingsStore, Pj as N8nEmptyState_default, gg as useUIStore, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/experiments/evaluationsWizardSidepanel/useEvaluationsWizardSidepanelExperiment.ts
init_runtime_core_esm_bundler();
function useEvaluationsWizardSidepanelExperiment() {
	const posthogStore = usePostHog();
	const settingsStore = useSettingsStore();
	return { isFeatureEnabled: computed(() => settingsStore.settings.evaluation?.configEvalsEnabled === true || posthogStore.getVariant(EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.name) === EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.variant) };
}
//#endregion
//#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
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

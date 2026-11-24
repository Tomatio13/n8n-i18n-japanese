import { Id as computed, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { Bv as usePostHog, Vx as ASSISTANT_SKILLS_EXPERIMENT } from "./app-BJz3tlB7.js";
//#region src/experiments/assistantSkills/useAssistantSkillsExperiment.ts
init_runtime_core_esm_bundler();
function useAssistantSkillsExperiment() {
	const posthog = usePostHog();
	return { isEnabled: computed(() => posthog.isFeatureEnabled(ASSISTANT_SKILLS_EXPERIMENT.name)) };
}
//#endregion
export { useAssistantSkillsExperiment as t };

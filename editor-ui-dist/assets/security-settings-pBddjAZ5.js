import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { j as useEnvFeatureFlag } from "./workflows.store-9WUiQWtP.js";
import "./useRootStore-Bbon-W6O.js";
import "./settings.store-C07h5tXp.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };

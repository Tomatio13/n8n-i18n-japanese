import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { j as useEnvFeatureFlag } from "./workflows.store-CLBRr_CW.js";
import "./useRootStore-CFRBJyjZ.js";
import "./settings.store-B-TZTTyf.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };

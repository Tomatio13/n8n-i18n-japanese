import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { B as useEnvFeatureFlag } from "./workflows.store-D-csz4jD.js";
import { t as useSettingsStore } from "./settings.store-eyxr9QVd.js";
//#region src/features/shared/promotions/usePromotionsEnabled.ts
/**
* Gates all workflow-promotion surfaces. Enabled only when the `promotions`
* module is active and the `N8N_ENV_FEAT_PROMOTIONS` rollout flag is on.
*/
var usePromotionsEnabled = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("promotions") && check.value("PROMOTIONS")) };
};
//#endregion
//#region src/features/integrations/promotions.ee/promotions.constants.ts
var PROMOTION_SELECT_MODAL_KEY = "promotionSelect";
var PROMOTIONS_SETTINGS_VIEW = "PromotionsSettings";
//#endregion
export { PROMOTION_SELECT_MODAL_KEY as n, usePromotionsEnabled as r, PROMOTIONS_SETTINGS_VIEW as t };

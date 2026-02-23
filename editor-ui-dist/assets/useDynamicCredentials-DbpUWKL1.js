import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { xs as useSettingsStore } from "./users.store-DYjj3Bkk.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-8RB0l6Cw.js";
const useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
export { useDynamicCredentials as t };

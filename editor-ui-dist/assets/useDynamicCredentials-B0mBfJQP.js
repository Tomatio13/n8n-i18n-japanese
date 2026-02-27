import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Ts as useSettingsStore } from "./users.store-DqUPlrG3.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-DhHByJRI.js";
const useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
export { useDynamicCredentials as t };

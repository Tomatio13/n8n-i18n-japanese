import { Bd as createElementBlock, Id as computed, Kd as defineComponent, Zd as init_runtime_core_esm_bundler, pf as renderSlot, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { IS as useSettingsStore } from "./app-B_io1t1X.js";
//#region src/app/components/EnterpriseEdition.ee.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/app/components/EnterpriseEdition.ee.vue
var EnterpriseEdition_ee_default = /* @__PURE__ */ defineComponent({
	__name: "EnterpriseEdition.ee",
	props: { features: { default: () => [] } },
	setup(__props) {
		const props = __props;
		const settingsStore = useSettingsStore();
		const canAccess = computed(() => props.features.reduce((acc, feature) => acc && !!settingsStore.isEnterpriseFeatureEnabled[feature], true));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [canAccess.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : renderSlot(_ctx.$slots, "fallback", { key: 1 })]);
		};
	}
});
//#endregion
export { EnterpriseEdition_ee_default as t };

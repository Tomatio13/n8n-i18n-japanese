import { Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Qd as openBlock, ap as toDisplayString, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { ME as useI18n, uE as N8nBadge_default } from "./app-BdR1u3Ua.js";
//#endregion
//#region src/features/settings/migrationReport/components/ImpactTag.vue
var ImpactTag_default = /* @__PURE__ */ defineComponent({
	name: "ImpactTag",
	__name: "ImpactTag",
	props: { impact: {} },
	setup(__props) {
		const i18n = useI18n();
		const labels = computed(() => ({
			upgradeBlocked: i18n.baseText("settings.migrationReport.impact.upgradeBlocked"),
			executionsFail: i18n.baseText("settings.migrationReport.impact.executionsFail"),
			behaviorChanges: i18n.baseText("settings.migrationReport.impact.behaviorChanges"),
			capabilityRemoved: i18n.baseText("settings.migrationReport.impact.capabilityRemoved")
		}));
		const badgeVariants = {
			upgradeBlocked: "danger",
			executionsFail: "danger",
			behaviorChanges: "warning",
			capabilityRemoved: "outline"
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), {
				variant: badgeVariants[__props.impact],
				"data-test-id": "migration-rule-impact-tag"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(labels.value[__props.impact]), 1)]),
				_: 1
			}, 8, ["variant"]);
		};
	}
});
//#endregion
export { ImpactTag_default as t };

import { Id as createBlock, Pd as computed, Vd as createTextVNode, Vf as unref, Wd as defineComponent, of as openBlock, pp as toDisplayString, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { FT as useI18n, pT as N8nBadge_default } from "./app-TXEjHrLJ.js";
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

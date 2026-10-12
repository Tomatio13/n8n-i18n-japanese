import { Ad as createTextVNode, Af as unref, Nd as defineComponent, Td as createBlock, Yd as openBlock, np as toDisplayString, uf as withCtx } from "./vendor-C0K-pJCd.js";
import { HC as N8nBadge_default } from "./app-Gcu_WcI0.js";
//#endregion
//#region src/features/settings/migrationReport/components/SeverityTag.vue
var SeverityTag_default = /* @__PURE__ */ defineComponent({
	name: "SeverityTag",
	__name: "SeverityTag",
	props: { severity: {} },
	setup(__props) {
		const tagsI18n = {
			critical: "Critical",
			medium: "Medium",
			low: "Low"
		};
		const badgeVariants = {
			critical: "danger",
			medium: "warning",
			low: "outline"
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), { variant: badgeVariants[__props.severity] }, {
				default: withCtx(() => [createTextVNode(toDisplayString(tagsI18n[__props.severity]), 1)]),
				_: 1
			}, 8, ["variant"]);
		};
	}
});
//#endregion
export { SeverityTag_default as t };

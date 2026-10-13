import { J_ as useToast, Ow as useI18n, Pd as useNodeTypesStore, Wd as getNodeItemRestriction, sf as describeNodeTypeRestriction } from "./app-C5zIGyiz.js";
//#region src/features/shared/nodeCreator/composables/useRestrictedNodeWarning.ts
/** For flows that cannot show the restriction inline, such as a picker that closes on Save. */
function useRestrictedNodeWarning() {
	const toast = useToast();
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	function warnIfRestricted(nodeTypeName) {
		const restriction = getNodeItemRestriction(nodeTypeName);
		if (!restriction) return false;
		const displayName = nodeTypesStore.getNodeType(nodeTypeName)?.displayName ?? nodeTypeName;
		toast.showMessage({
			type: "warning",
			title: i18n.baseText("typeAvailabilityPolicies.restrictedNode.title"),
			message: describeNodeTypeRestriction(displayName, restriction.scope)
		});
		return true;
	}
	return { warnIfRestricted };
}
//#endregion
export { useRestrictedNodeWarning as t };

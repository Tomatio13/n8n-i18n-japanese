import { Ax as useUsersStore, U as MCP_JSON_NUDGE_CALLOUT, qa as useMCPStore } from "./app-Dp0u0Hpe.js";
//#region src/experiments/mcpJsonNudge/composables/useMcpJsonNudgeEligibility.ts
var IMPRESSION_CAP = 2;
function useMcpJsonNudgeEligibility() {
	const mcpStore = useMCPStore();
	const usersStore = useUsersStore();
	function canShow() {
		const impressions = usersStore.currentUser?.settings?.mcpJsonNudge?.impressions ?? 0;
		return !mcpStore.mcpAccessEnabled && impressions < IMPRESSION_CAP && !usersStore.isCalloutDismissed("MCP_JSON_NUDGE");
	}
	async function recordImpression() {
		const impressions = (usersStore.currentUser?.settings?.mcpJsonNudge?.impressions ?? 0) + 1;
		if (usersStore.currentUser?.settings) usersStore.currentUser.settings.mcpJsonNudge = { impressions };
		await usersStore.updateUserSettings({ mcpJsonNudge: { impressions } });
	}
	async function dismissForever() {
		usersStore.setCalloutDismissed(MCP_JSON_NUDGE_CALLOUT);
		await usersStore.updateUserSettings({ dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[MCP_JSON_NUDGE_CALLOUT]: true
		} });
	}
	return {
		canShow,
		recordImpression,
		dismissForever
	};
}
//#endregion
export { useMcpJsonNudgeEligibility as t };

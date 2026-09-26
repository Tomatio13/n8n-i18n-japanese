import { t as useSettingsStore } from "./settings.store-BY2qTSjy.js";
import { t as useUsersStore } from "./users.store-Bf1IoNrc.js";
import { t as useTelemetry } from "./useTelemetry-30Afudd_.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-BHuKVrqp.js";
import { t as useVersionsStore } from "./versions.store-DvpcOUyV.js";
//#region ../@n8n/frontend-constants/src/urls.ts
/** Public n8n pricing page — the upgrade destination for non-cloud deployments. */
var N8N_PRICING_PAGE_URL = "https://n8n.io/pricing";
//#endregion
//#region ../@n8n/stores/src/registries/upgradeRedirectGuard.ts
/**
* The guard `useBasePageRedirectionHelper` consults when a caller supplies none.
*
* A module package cannot reach the shell, so it cannot pass the app's guard (the
* AI-builder streaming confirmation) itself. The shell registers that guard here
* once at init; a module then calls the base composable with no argument and gets
* the same confirmation an in-shell caller gets.
*
* The fallback proceeds, so a test or a boot path that registers nothing behaves
* as it did before any guard existed.
*/
var registered;
var proceed = async () => await Promise.resolve(true);
function setDefaultUpgradeRedirectGuard(guard) {
	registered = guard;
}
function getDefaultUpgradeRedirectGuard() {
	return registered ?? proceed;
}
//#endregion
//#region ../@n8n/stores/src/composables/useBasePageRedirectionHelper.ts
/**
* Injectable page-redirection composable. The app-facing `usePageRedirectionHelper`
* wraps this and supplies the guard, which keeps this base free of any feature
* dependency. A caller that cannot reach the shell — a module package — omits it
* and gets the guard the shell registered (see `registries/upgradeRedirectGuard`).
*
* It lives in `@n8n/stores` rather than `@n8n/composables` because its body is
* store orchestration end to end — all four stores it reads are in this package,
* and `@n8n/composables` sits *below* the stores tier (see that package's
* `packageBoundary.test.ts`), so it cannot reach them.
*/
function useBasePageRedirectionHelper({ guard } = {}) {
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const versionsStore = useVersionsStore();
	const telemetry = useTelemetry();
	const settingsStore = useSettingsStore();
	const canAutoLoginToCloudDashboard = () => usersStore.isInstanceOwner && settingsStore.isCloudDeployment;
	/**
	* `open` reserves the tab in the click so later navigation is not treated as a popup.
	*/
	const goToCloudDashboard = async ({ redirectionPath, mode = "redirect" }) => {
		if (!canAutoLoginToCloudDashboard()) return false;
		if (mode === "redirect") {
			location.href = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath });
			return true;
		}
		const tab = window.open("", "_blank");
		if (tab) tab.opener = null;
		try {
			const link = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath });
			if (tab) tab.location.href = link;
			else location.href = link;
		} catch (error) {
			tab?.close();
			throw error;
		}
		return true;
	};
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /manage page where they can upgrade to a new n8n version.
	* Otherwise, it redirect them to our docs.
	*/
	const goToVersions = async () => {
		if (!canAutoLoginToCloudDashboard()) {
			window.open(versionsStore.infoUrl, "_blank", "noopener");
			return;
		}
		await goToCloudDashboard({ redirectionPath: "/manage" });
	};
	const goToDashboard = async () => {
		await goToCloudDashboard({ redirectionPath: "/dashboard" });
	};
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /account/change-plan page where they upgrade/downgrade the current plan.
	* Otherwise, it redirect them our website.
	*/
	const goToUpgrade = async (source, utm_campaign, mode = "open") => {
		if (!await (guard ?? getDefaultUpgradeRedirectGuard())()) return;
		const { usageLeft, trialDaysLeft, userIsTrialing } = cloudPlanStore;
		const { executionsLeft, workflowsLeft } = usageLeft;
		const deploymentType = settingsStore.deploymentType;
		telemetry.track("User clicked upgrade CTA", {
			source,
			isTrial: userIsTrialing,
			deploymentType,
			trialDaysLeft,
			executionsLeft,
			workflowsLeft
		});
		const upgradeLink = await generateUpgradeLink(source, utm_campaign);
		if (mode === "open") window.open(upgradeLink, "_blank");
		else location.href = upgradeLink;
	};
	const generateUpgradeLink = async (source, utm_campaign) => {
		let upgradeLink = N8N_PRICING_PAGE_URL;
		if (canAutoLoginToCloudDashboard()) upgradeLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/account/change-plan" });
		const url = new URL(upgradeLink);
		if (utm_campaign) url.searchParams.set("utm_campaign", utm_campaign);
		if (source) url.searchParams.set("source", source);
		return url.toString();
	};
	return {
		goToCloudDashboard,
		goToDashboard,
		goToVersions,
		goToUpgrade
	};
}
//#endregion
export { setDefaultUpgradeRedirectGuard as n, useBasePageRedirectionHelper as t };

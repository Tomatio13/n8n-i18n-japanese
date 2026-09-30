import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { C as useNow } from "./dist-C4pFh3bs.js";
import { t as useSettingsStore } from "./settings.store-CWApP-Zs.js";
import { t as useUsersStore } from "./users.store-B7NlP6UW.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Va-a2c32.js";
import { t as useVersionsStore } from "./versions.store-Bc-m9eWm.js";
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
//#region ../@n8n/stores/src/composables/useCloudUbbActive.ts
/**
* GA date for the assistant Cloud UBB rollout. After this instant every cloud
* deployment is treated as UBB-active without a per-instance license flag;
* before it, activation is opt-in through `feat:aiAssistantCloudUbbEntitlement`.
*/
var ASSISTANT_CLOUD_UBB_GA_DATE = /* @__PURE__ */ new Date("2026-10-01T00:00:00Z");
/**
* Whether Cloud UBB is the balance authority for this instance's assistant.
* True when the license carries `feat:aiAssistantCloudUbbEntitlement`, or once
* we pass the GA cutoff. Extracted from `useAssistantTopUpEligibility` so
* consumers that only care about the wallet's shape — the credit banner text,
* or anything else that renders wallet figures — don't inherit its cloud-owner /
* non-trial / non-capped gates.
*/
function useCloudUbbActive() {
	const settingsStore = useSettingsStore();
	const now = useNow({ interval: 6e4 });
	return { isActive: computed(() => {
		return now.value.getTime() >= ASSISTANT_CLOUD_UBB_GA_DATE.getTime() || settingsStore.isAiAssistantCloudUbbEnabled;
	}) };
}
//#endregion
//#region ../@n8n/stores/src/composables/useAssistantTopUpEligibility.ts
/**
* Whether a click on an assistant credit CTA should route to the Cloud
* usage/top-up page instead of the plan-change page. Eligibility is limited to
* cloud instance owners on a paid, non-activation-capped state; trials keep the
* plan-upgrade path.
*/
function useAssistantTopUpEligibility() {
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const { isActive: isCloudUbbActive } = useCloudUbbActive();
	return { isEligible: computed(() => {
		if (!settingsStore.isCloudDeployment) return false;
		if (!usersStore.isInstanceOwner) return false;
		if (cloudPlanStore.userIsTrialing) return false;
		if (settingsStore.moduleSettings?.["instance-ai"]?.activationCapped) return false;
		return isCloudUbbActive.value;
	}) };
}
//#endregion
//#region ../@n8n/stores/src/composables/useBasePageRedirectionHelper.ts
/** Sources whose "upgrade" CTA is really a top-up for eligible cloud accounts. */
var ASSISTANT_UPGRADE_SOURCES = new Set(["ai-builder-sidebar", "instance-ai"]);
/** Cloud dashboard path that carries the assistant top-up UI. */
var ASSISTANT_TOP_UP_REDIRECT_PATH = "/manage/assistant";
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
	const { isEligible: isAssistantTopUpEligible } = useAssistantTopUpEligibility();
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
		if (canAutoLoginToCloudDashboard()) {
			const redirectionPath = ASSISTANT_UPGRADE_SOURCES.has(source) && isAssistantTopUpEligible.value ? ASSISTANT_TOP_UP_REDIRECT_PATH : "/account/change-plan";
			upgradeLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath });
		}
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
export { setDefaultUpgradeRedirectGuard as i, useAssistantTopUpEligibility as n, useCloudUbbActive as r, useBasePageRedirectionHelper as t };

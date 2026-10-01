import { On as splitName, jn as useProjectsStore } from "./workflows.store-Dk7Mv1J3.js";
import { Ft as getResourcePermissions, co as CONTEXT_PREFERENCES_FLAG, lo as aiPreferenceScopeOf, so as CONTEXT_PREFERENCES_ENABLED_VARIANT } from "./src-CUD3lZBU.js";
import { t as useUsersStore } from "./users.store-DAMxyXw2.js";
import { t as usePostHog } from "./posthog.store-y0wHoxUE.js";
//#region src/features/settings/context/context.utils.ts
/**
* Multivariate flag: only `variant` enables the surface.
* Local override: `window.featureFlags.override('111_context_preferences', 'variant')`
*/
function isContextPreferencesEnabled() {
	return usePostHog().isVariantEnabled(CONTEXT_PREFERENCES_FLAG, CONTEXT_PREFERENCES_ENABLED_VARIANT);
}
var FLAG_WAIT_TIMEOUT_MS = 3e3;
/** Waits for a pending client-side flag evaluation before a deep link fails closed. */
async function isContextPreferencesEnabledOnceEvaluated() {
	const posthog = usePostHog();
	if (posthog.hasPendingFeatureFlags()) {
		let timeoutId;
		await Promise.race([posthog.waitForFeatureFlags(), new Promise((resolve) => {
			timeoutId = window.setTimeout(resolve, FLAG_WAIT_TIMEOUT_MS);
		})]);
		if (timeoutId !== void 0) window.clearTimeout(timeoutId);
	}
	return isContextPreferencesEnabled();
}
function preferenceScope(row) {
	return aiPreferenceScopeOf(row);
}
function preferenceAudience(row, currentUserId) {
	switch (preferenceScope(row)) {
		case "instance": return { kind: "instance" };
		case "user": return {
			kind: "user",
			own: row.userId === currentUserId,
			user: row.user
		};
		case "project":
			if (row.project?.type === "personal") {
				const { name, email } = splitName(row.project.name);
				return {
					kind: "personalProject",
					own: row.projectId === useProjectsStore().personalProject?.id,
					ownerName: name ?? email ?? row.project.name
				};
			}
			return {
				kind: "project",
				name: row.project?.name ?? null
			};
	}
}
function preferenceUserName(user) {
	if (!user) return "";
	return [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email || "";
}
/** The API reports row scopes in the `aiPreference` namespace whatever granted them. */
function toPreferencePermissions(row) {
	const permissions = getResourcePermissions(row.scopes).aiPreference;
	return {
		update: permissions?.update === true,
		delete: permissions?.delete === true
	};
}
function canWriteProjectScope(projectId) {
	if (!projectId) return false;
	return getResourcePermissions(useProjectsStore().myProjects.find((candidate) => candidate.id === projectId)?.scopes).projectAiPreference?.create === true;
}
function canWriteInstanceScope() {
	const { currentUser } = useUsersStore();
	return getResourcePermissions(currentUser?.globalScopes).aiPreference?.create === true;
}
//#endregion
export { preferenceAudience as a, toPreferencePermissions as c, isContextPreferencesEnabledOnceEvaluated as i, canWriteProjectScope as n, preferenceScope as o, isContextPreferencesEnabled as r, preferenceUserName as s, canWriteInstanceScope as t };

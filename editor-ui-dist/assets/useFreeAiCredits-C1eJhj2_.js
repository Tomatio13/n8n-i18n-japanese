import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-Cn5DLdg7.js";
import { Kt as useProjectsStore, Rt as useTelemetry, Ts as useSettingsStore, br as useToast, rt as useCredentialsStore, t as useUsersStore } from "./users.store-DqUPlrG3.js";
import { ko as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-DsDharXz.js";
function useFreeAiCredits() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const claimingCredits = ref(false);
	const isAiCreditsEnabled = computed(() => settingsStore.isAiCreditsEnabled);
	const aiCreditsQuota = computed(() => settingsStore.aiCreditsQuota);
	const userHasOpenAiCredentialAlready = computed(() => credentialsStore.allCredentials.some((credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE));
	const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
	const userCanClaimOpenAiCredits = computed(() => isAiCreditsEnabled.value && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value);
	async function claimCredits(source) {
		if (!userCanClaimOpenAiCredits.value) return false;
		claimingCredits.value = true;
		try {
			await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
			if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
			telemetry.track("User claimed OpenAI credits", { source });
			return true;
		} catch (e) {
			toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
			return false;
		} finally {
			claimingCredits.value = false;
		}
	}
	return {
		isAiCreditsEnabled,
		aiCreditsQuota,
		userCanClaimOpenAiCredits,
		claimingCredits,
		claimCredits
	};
}
export { useFreeAiCredits as t };

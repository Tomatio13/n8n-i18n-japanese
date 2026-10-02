import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { Ft as useCredentialsStore, jn as useProjectsStore, t as useWorkflowsStore } from "./workflows.store-BOmh9KrV.js";
import { t as useRootStore } from "./useRootStore-D173L1zv.js";
import { Un as createResultError, Wn as createResultOk, ji as mergeNodeProperties, ui as displayParameter } from "./src-DVqjY0nx.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { i as waitForOAuthCallback, n as hasOAuthTokenData, t as getTrustedOAuthOrigins } from "./oauthCallback-FijTDLF_.js";
//#region src/features/credentials/composables/useCredentialOAuth.ts
/**
* Composable for OAuth credential type detection and authorization.
* Used by NodeCredentials for the quick connect OAuth flow.
*/
function useCredentialOAuth() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const oauthAbortController = ref(null);
	const pendingCredentialId = ref(null);
	/**
	* Get parent types for a credential type (e.g., googleSheetsOAuth2Api extends googleOAuth2Api extends oAuth2Api).
	*/
	function getParentTypes(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const type = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (type?.extends === void 0) return [];
		const types = [];
		for (const typeName of type.extends) {
			types.push(typeName);
			types.push(...getParentTypes(typeName, visited));
		}
		return types;
	}
	/**
	* Check if a credential type is an OAuth type (extends oAuth2Api or oAuth1Api).
	*/
	function isOAuthCredentialType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "oAuth2Api" || credentialTypeName === "oAuth1Api" || parentTypes.includes("oAuth2Api") || parentTypes.includes("oAuth1Api");
	}
	/**
	* Check if a credential type is Google OAuth (extends googleOAuth2Api).
	*/
	function isGoogleOAuthType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "googleOAuth2Api" || parentTypes.includes("googleOAuth2Api");
	}
	/**
	* Check if an OAuth credential type has all required fields managed/overwritten.
	* This indicates the credential can be used with quick connect (just OAuth flow, no manual config).
	* Reuses logic patterns from CredentialEdit.vue (credentialProperties + requiredPropertiesFilled).
	*/
	function canOAuthCredentialQuickConnect(credentialTypeName) {
		if (!isOAuthCredentialType(credentialTypeName)) return false;
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return false;
		if (credentialType.__skipManagedCreation) return false;
		const overwrittenProperties = credentialType.__overwrittenProperties ?? [];
		const nonOverwrittenConfigurableProperties = getManuallyConfigurableProperties(credentialType).filter((prop) => !overwrittenProperties.includes(prop.name));
		if (nonOverwrittenConfigurableProperties.length === 0) return true;
		if (overwrittenProperties.length === 0) return false;
		return nonOverwrittenConfigurableProperties.every((prop) => prop.required !== true || prop.type !== "string" && prop.type !== "number");
	}
	/**
	* Returns properties the user must fill in. Walks the extends chain so
	* inherited fields (e.g. `clientId`/`clientSecret` from `oAuth2Api`) are
	* considered, and applies `displayOptions` against the effective defaults
	* — matching the credential edit modal's `credentialProperties` /
	* `displayCredentialParameter` logic.
	*/
	function getManuallyConfigurableProperties(credentialType) {
		const mergedProperties = getMergedCredentialProperties(credentialType.name);
		const defaults = {};
		for (const prop of mergedProperties) defaults[prop.name] = prop.default;
		return mergedProperties.filter((prop) => {
			if (prop.type === "hidden" || prop.type === "notice") return false;
			return displayParameter(defaults, prop, null, null);
		});
	}
	function getMergedCredentialProperties(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return [];
		if (credentialType.extends === void 0) return credentialType.properties;
		const merged = [];
		for (const parentName of credentialType.extends) mergeNodeProperties(merged, getMergedCredentialProperties(parentName, visited));
		mergeNodeProperties(merged, credentialType.properties);
		return merged;
	}
	function hasManualCredentialInputFields(credentialType) {
		return getManuallyConfigurableProperties(credentialType).length > 0;
	}
	async function getOAuthAuthorizationUrl(credential) {
		const parentTypes = getParentTypes(credential.type);
		try {
			if (credential.type === "oAuth2Api" || parentTypes.includes("oAuth2Api")) return createResultOk(await credentialsStore.oAuth2Authorize(credential));
			if (credential.type === "oAuth1Api" || parentTypes.includes("oAuth1Api")) return createResultOk(await credentialsStore.oAuth1Authorize(credential));
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title"));
			return createResultError("api-error");
		}
		return createResultError("no-url");
	}
	function isValidHttpUrl(url) {
		try {
			const parsed = new URL(url);
			return ["http:", "https:"].includes(parsed.protocol);
		} catch {
			return false;
		}
	}
	function showOAuthUrlError() {
		toast.showError(new Error(i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.message")), i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.title"));
	}
	function showPopupBlockedError() {
		toast.showError(new Error(i18n.baseText("credentialEdit.credentialEdit.showError.oauthPopupBlocked.message")), i18n.baseText("credentialEdit.credentialEdit.showError.oauthPopupBlocked.title"));
	}
	function openOAuthPopup(url, signal) {
		const popup = window.open(url, "OAuth Authorization", "scrollbars=no,resizable=yes,status=no,titlebar=no,location=no,toolbar=no,menubar=no,width=500,height=700");
		signal?.addEventListener("abort", () => {
			popup?.close();
		});
		return popup;
	}
	async function isConnected(credentialId) {
		try {
			return hasOAuthTokenData(await credentialsStore.getCredentialData({ id: credentialId }));
		} catch {
			return false;
		}
	}
	/**
	* Authorize OAuth credentials by opening a popup and listening for callback.
	* Returns true if OAuth was successful, false if cancelled or failed.
	*
	* Must be called synchronously from the click handler (or be given a popup
	* that was opened synchronously from it, see `options.popup`).
	*/
	async function authorize(credential, signal, options = {}) {
		const popupWindow = options.popup?.window ?? openOAuthPopup("about:blank", signal);
		if (!popupWindow) {
			showPopupBlockedError();
			return false;
		}
		const popup = options.popup ?? { window: popupWindow };
		const canVerifyConnected = !credential.isResolvable && !await isConnected(credential.id);
		let outcome;
		while (true) {
			const urlResult = await getOAuthAuthorizationUrl(credential);
			if (!urlResult.ok) {
				popup.window.close();
				if (urlResult.error === "no-url") showOAuthUrlError();
				return false;
			}
			if (!isValidHttpUrl(urlResult.result)) {
				popup.window.close();
				showOAuthUrlError();
				return false;
			}
			popup.window.location.href = urlResult.result;
			const retryController = new AbortController();
			popup.onReopen = () => retryController.abort();
			try {
				outcome = await waitForOAuthCallback({
					popup: popup.window,
					trustedOrigins: getTrustedOAuthOrigins(rootStore.urlBaseEditor),
					signal: signal ? AbortSignal.any([signal, retryController.signal]) : retryController.signal,
					verifyConnected: canVerifyConnected ? async () => await isConnected(credential.id) : void 0,
					abortOnPopupClose: options.abortOnPopupClose
				});
			} finally {
				popup.onReopen = void 0;
			}
			if ((outcome === "timeout" || outcome === "aborted") && canVerifyConnected && await isConnected(credential.id)) outcome = "success";
			if (!retryController.signal.aborted || signal?.aborted || outcome !== "aborted") break;
		}
		popup.window.close();
		if (outcome === "success") toast.showMessage({
			title: i18n.baseText("nodeCredentials.oauth.accountConnected"),
			type: "success"
		});
		else if (outcome !== "aborted") toast.showMessage({
			title: i18n.baseText("nodeCredentials.oauth.accountConnectionFailed"),
			type: "error"
		});
		return outcome === "success";
	}
	/**
	* Authorize a credential that was just created. Keeps it out of the store
	* until OAuth succeeds and removes it when authorization is not completed.
	*/
	/**
	* Publishes a credential the user just connected. `upsertCredential` only reaches
	* the flat map, so the picker — which reads the scope-narrowed slice — would not
	* offer the credential until the next scoped fetch. Ask the server rather than
	* inserting locally: only it can say whether the credential is usable here.
	*/
	async function publishConnectedCredential(credential, scope) {
		credentialsStore.upsertCredential(credential);
		if (scope) await credentialsStore.fetchUsableCredentials(scope);
		else await credentialsStore.refreshUsableCredentials();
	}
	async function authorizeNewCredential(credential, options = {}) {
		const controller = new AbortController();
		oauthAbortController.value = controller;
		let success = false;
		try {
			success = await authorize(credential, controller.signal, options);
			if (success) await publishConnectedCredential(credential);
			return success;
		} finally {
			oauthAbortController.value = null;
			if (!success) await credentialsStore.deleteCredential({ id: credential.id }).catch(() => {});
		}
	}
	/**
	* Create a new OAuth credential and run the full authorization flow.
	* Returns the credential on success, null on failure (cleans up automatically).
	*/
	async function connectCredential(credentialTypeName, nodeType, options = {}, existingCredential) {
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return null;
		const controller = new AbortController();
		oauthAbortController.value = controller;
		const initialPopup = openOAuthPopup("about:blank", controller.signal);
		if (!initialPopup) {
			showPopupBlockedError();
			oauthAbortController.value = null;
			return null;
		}
		const popup = { window: initialPopup };
		let authorizationFinished = false;
		options.onAuthorizationStarted?.(() => {
			if (authorizationFinished || controller.signal.aborted) return;
			try {
				if (!popup.window.closed) {
					popup.window.focus();
					return;
				}
			} catch {}
			const reopenedPopup = openOAuthPopup("about:blank", controller.signal);
			if (!reopenedPopup) {
				showPopupBlockedError();
				return;
			}
			popup.window = reopenedPopup;
			popup.onReopen?.();
			reopenedPopup.focus();
		});
		const data = { ...options.data };
		const allowedHttpRequestDomainsProperty = credentialType.properties.find((prop) => prop.name === "allowedHttpRequestDomains");
		if (!allowedHttpRequestDomainsProperty || allowedHttpRequestDomainsProperty.type !== "hidden") data.allowedHttpRequestDomains ??= "none";
		let credential;
		try {
			const name = existingCredential?.name ?? options.name ?? await credentialsStore.getNewCredentialName({
				credentialTypeName,
				fallbackName: credentialType.displayName
			});
			credential = existingCredential ?? await credentialsStore.createNewCredential({
				id: "",
				name,
				type: credentialTypeName,
				data
			}, options.projectId ?? projectsStore.currentProject?.id, void 0, { skipStoreUpdate: true });
			if (!existingCredential) telemetry.track("User created credentials", {
				credential_type: credential.type,
				credential_id: credential.id,
				workflow_id: options.workflowId ?? workflowsStore.workflowId
			});
		} catch (error) {
			popup.window.close();
			oauthAbortController.value = null;
			toast.showError(error, i18n.baseText("nodeCredentials.showMessage.title"));
			return null;
		}
		pendingCredentialId.value = existingCredential ? null : credential.id;
		const success = await authorize(credential, controller.signal, { popup }).finally(() => {
			authorizationFinished = true;
		});
		oauthAbortController.value = null;
		pendingCredentialId.value = null;
		const trackProperties = {
			credential_type: credentialTypeName,
			workflow_id: options.workflowId ?? workflowsStore.workflowId ?? null,
			credential_id: credential.id,
			is_complete: true,
			is_new: !existingCredential,
			is_valid: success,
			uses_external_secrets: false
		};
		if (nodeType) trackProperties.node_type = nodeType;
		if (!existingCredential) telemetry.track("User saved credentials", trackProperties);
		if (success) {
			await publishConnectedCredential(credential, options.credentialFetchScope ?? (options.workflowId ? { workflowId: options.workflowId } : void 0));
			return credential;
		}
		if (!existingCredential) credentialsStore.deleteCredential({ id: credential.id });
		return null;
	}
	async function createAndAuthorize(credentialTypeName, nodeType, options = {}) {
		return await connectCredential(credentialTypeName, nodeType, options);
	}
	async function authorizeExistingCredential(credential, options = {}) {
		return await connectCredential(credential.type, void 0, options, credential);
	}
	/**
	* Cancel any in-progress OAuth authorization and clean up the pending credential.
	*/
	function cancelAuthorize() {
		if (oauthAbortController.value) oauthAbortController.value.abort();
		const credentialId = pendingCredentialId.value;
		if (!credentialId) return;
		isConnected(credentialId).then((connected) => {
			if (connected) credentialsStore.fetchAllCredentials();
			else credentialsStore.deleteCredential({ id: credentialId });
		});
	}
	return {
		getParentTypes,
		isOAuthCredentialType,
		isGoogleOAuthType,
		canOAuthCredentialQuickConnect,
		hasManualCredentialInputFields,
		authorize,
		authorizeNewCredential,
		createAndAuthorize,
		authorizeExistingCredential,
		cancelAuthorize
	};
}
//#endregion
export { useCredentialOAuth as t };

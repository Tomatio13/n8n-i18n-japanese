import { Et as effectScope, Lt as shallowReactive } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-C397uuXA.js";
import { Ft as useCredentialsStore, Pt as listenForCredentialChanges } from "./workflows.store-bhmLKy6g.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { u as TIME } from "./durations-DueaJvoh.js";
import { a as TELEMETRY_EVENT } from "./src-v31X3Vyz.js";
import { n as useUIStore, t as listenForModalChanges } from "./ui.store-ClQOp9Tb.js";
import { t as camelCase } from "./dist-DXulaIPr.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-PSdYTGCH.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-uFZt9nUe.js";
//#region src/features/ai/instanceAi/instanceAiMcp.telemetry.ts
function useInstanceAiMcpTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackToolsListOpened(source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.TOOLS_LIST_OPENED, { source });
		},
		trackSettingsOpened(serverSlug, source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_SETTINGS_OPENED, {
				server_slug: serverSlug,
				source
			});
		},
		trackFirstCredentialConnectionStart(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_FIRST_CREDENTIAL_CONNECTION_STARTED, { server_slug: serverSlug });
		},
		trackCredentialDropdownOpened(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_CREDENTIAL_DROPDOWN_OPENED, { server_slug: serverSlug });
		},
		trackExistingCredentialSelected(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_EXISTING_CREDENTIAL_SELECTED, { server_slug: serverSlug });
		},
		trackNewCredentialConnectionStart(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_NEW_CREDENTIAL_CONNECTION_STARTED, { server_slug: serverSlug });
		},
		trackToolFilterSettingsUpdated(serverSlug, inclusionMode) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_TOOL_FILTER_SETTINGS_UPDATED, {
				server_slug: serverSlug,
				inclusion_mode: inclusionMode
			});
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useMcpServerConnect.ts
var QUICK_CONNECT_LOCK = 2 * TIME.SECOND;
var connectAttemptsByServerSlug = /* @__PURE__ */ new Map();
var oauthLockedServerSlugs = shallowReactive(/* @__PURE__ */ new Set());
var credentialRequestLockedServerSlugs = shallowReactive(/* @__PURE__ */ new Set());
/**
* The credential half of connecting an MCP server, shared by the tools
* connection modal and the inline chat card. Connection state itself stays in
* `useInstanceAiMcpStore`; this only drives the flow that fills it.
*/
function useMcpServerConnect() {
	const mcpStore = useInstanceAiMcpStore();
	const uiStore = useUIStore();
	const credentialsStore = useCredentialsStore();
	const toast = useToast();
	const { canOAuthCredentialQuickConnect, createAndAuthorize } = useCredentialOAuth();
	/**
	* Patches the existing connection instead of creating a second one — the
	* backend allows only one per server. Null when nothing changed or failed.
	*/
	async function connectWithCredential(serverSlug, credentialId) {
		credentialRequestLockedServerSlugs.add(serverSlug);
		try {
			const existing = mcpStore.connections.find((c) => c.serverSlug === serverSlug);
			if (existing?.credentialId === credentialId) return null;
			const connection = existing ? await mcpStore.updateConnection(existing.id, { credentialId }) : await mcpStore.connect({
				serverSlug,
				credentialId
			});
			if (!connection) return null;
			toast.showMessage({
				type: "success",
				title: i18n.baseText(existing ? "instanceAi.mcp.success.changeCredential" : "instanceAi.mcp.success.connect")
			});
			return connection.id;
		} finally {
			credentialRequestLockedServerSlugs.delete(serverSlug);
		}
	}
	/**
	* Connects a server the user has no credential for yet: OAuth types needing no
	* manual input are authorized in place, the rest go through the credential edit
	* modal. Resolves once the user is done, with null if they backed out.
	*/
	async function connectServer(server) {
		const activeAttempt = connectAttemptsByServerSlug.get(server.slug);
		if (activeAttempt) {
			if (!isConnectLocked(server.slug) && activeAttempt.state.reopen) {
				activeAttempt.state.acceptCredential = true;
				activeAttempt.state.reopen();
				lockConnect(server.slug, activeAttempt);
			}
			return await activeAttempt.promise;
		}
		const isQuickConnect = (server.credentialTypes?.length ?? 0) <= 1 && canOAuthCredentialQuickConnect(server.credentialType);
		const state = {
			acceptCredential: true,
			reopen: void 0,
			unlockTimer: void 0
		};
		const promise = (isQuickConnect ? connectViaOAuth(server, state) : connectViaCredentialModal(server)).finally(() => {
			if (state.unlockTimer) clearTimeout(state.unlockTimer);
			connectAttemptsByServerSlug.delete(server.slug);
			oauthLockedServerSlugs.delete(server.slug);
		});
		const attempt = {
			promise,
			state
		};
		connectAttemptsByServerSlug.set(server.slug, attempt);
		if (isQuickConnect) lockConnect(server.slug, attempt);
		return await promise;
	}
	function lockConnect(serverSlug, attempt) {
		const { state } = attempt;
		if (state.unlockTimer) clearTimeout(state.unlockTimer);
		oauthLockedServerSlugs.add(serverSlug);
		state.unlockTimer = setTimeout(() => {
			oauthLockedServerSlugs.delete(serverSlug);
			state.unlockTimer = void 0;
		}, QUICK_CONNECT_LOCK);
	}
	async function connectViaOAuth(server, state) {
		const credential = await createAndAuthorize(server.credentialType, void 0, { onAuthorizationStarted: (reopen) => {
			state.reopen = reopen;
		} }).finally(() => {
			state.reopen = void 0;
		});
		if (!credential || !state.acceptCredential) return null;
		return await connectWithCredential(server.slug, credential.id);
	}
	function isConnectLocked(serverSlug) {
		return oauthLockedServerSlugs.has(serverSlug) || credentialRequestLockedServerSlugs.has(serverSlug);
	}
	function ignorePendingConnectResult(serverSlug) {
		const attempt = connectAttemptsByServerSlug.get(serverSlug);
		if (attempt) {
			attempt.state.acceptCredential = false;
			if (attempt.state.unlockTimer) clearTimeout(attempt.state.unlockTimer);
			attempt.state.unlockTimer = void 0;
		}
		oauthLockedServerSlugs.delete(serverSlug);
	}
	function registryContextNode(server) {
		return {
			id: server.slug,
			name: server.slug,
			type: `@n8n/mcp-registry.${camelCase(server.slug)}`,
			typeVersion: 1.1,
			position: [0, 0],
			parameters: {}
		};
	}
	/**
	* Opens the credential edit modal for the server and connects whatever
	* credential the user created there once they close it. Nothing is listening
	* outside an attempt, so unrelated credential edits stay free.
	*/
	async function connectViaCredentialModal(server) {
		return await new Promise((settle) => {
			let createdCredentialId = null;
			const credentialTypes = server.credentialTypes ?? [server.credentialType];
			const listeners = effectScope(true);
			listeners.run(() => {
				listenForCredentialChanges({
					store: credentialsStore,
					onCredentialCreated: (credential) => {
						if (credentialTypes.includes(credential.type)) createdCredentialId = credential.id;
					}
				});
				listenForModalChanges({
					store: uiStore,
					onModalClosed: (modalName) => {
						if (modalName !== "editCredential") return;
						listeners.stop();
						if (createdCredentialId === null) {
							settle(null);
							return;
						}
						connectWithCredential(server.slug, createdCredentialId).catch(() => null).then(settle);
					}
				});
			});
			try {
				if (credentialTypes.length > 1) {
					const contextNode = registryContextNode(server);
					uiStore.openNewCredential(server.credentialType, true, false, void 0, void 0, contextNode.name, contextNode);
				} else uiStore.openNewCredential(server.credentialType);
			} catch (error) {
				listeners.stop();
				throw error;
			}
		});
	}
	/**
	* The adapter `ToolCredentialPicker` injects. Only the "create a new
	* credential" leg differs per surface, so callers pass just that.
	*/
	function openExistingCredential(credentialId) {
		if (!mcpStore.connections.some((connection) => connection.credentialId === credentialId)) {
			uiStore.openExistingCredential(credentialId);
			return;
		}
		const listeners = effectScope(true);
		listeners.run(() => {
			listenForModalChanges({
				store: uiStore,
				onModalClosed: (modalName) => {
					if (modalName !== "editCredential") return;
					listeners.stop();
					for (const connection of mcpStore.connections) if (connection.credentialId === credentialId) mcpStore.fetchConnectionTools(connection.id);
				}
			});
		});
		try {
			uiStore.openExistingCredential(credentialId);
		} catch (error) {
			listeners.stop();
			throw error;
		}
	}
	function createCredentialAdapter(openNewCredential) {
		return {
			getCredentialsByType: (authType) => credentialsStore.getCredentialsByType(authType).map((credential) => ({
				id: credential.id,
				name: credential.name,
				type: credential.type
			})),
			openNewCredential,
			openExistingCredential
		};
	}
	return {
		connectServer,
		connectWithCredential,
		createCredentialAdapter,
		ignorePendingConnectResult,
		isConnectLocked
	};
}
//#endregion
//#region src/features/ai/instanceAi/toolIcons.ts
function pickIconForTheme(icons, appliedTheme) {
	if (icons.length === 0) return null;
	const themed = icons.find((i) => i.theme === appliedTheme);
	if (themed) return themed.src;
	return (icons.find((i) => i.theme === void 0) ?? icons[0]).src;
}
function iconForTool(icons, appliedTheme) {
	const src = pickIconForTheme(icons, appliedTheme);
	return src ? {
		type: "file",
		src
	} : {
		type: "icon",
		name: "mcp"
	};
}
//#endregion
export { useMcpServerConnect as n, useInstanceAiMcpTelemetry as r, iconForTool as t };

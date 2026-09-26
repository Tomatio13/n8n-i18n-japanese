import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useRootStore } from "./useRootStore-CVbOmixR.js";
import { F as updateAgentConfig, h as getAgentConfig } from "./useAgentApi-3ObpWoL4.js";
//#region src/features/agents/composables/useAgentConfig.ts
function useAgentConfig() {
	const rootStore = useRootStore();
	const config = ref(null);
	const configHash = ref();
	const loading = ref(false);
	const ownBases = /* @__PURE__ */ new Set();
	let ownLatest = null;
	let latestKey = null;
	function keyFor(projectId, agentId) {
		return `${projectId}:${agentId}`;
	}
	/**
	* Repoint the active (project, agent) pair without fetching: any in-flight
	* fetch/update for the previous pair resolves as stale, and the previous
	* pair's config is dropped so watchers stop serving it. Used on agent
	* switch BEFORE flushing the previous agent's pending save — otherwise that
	* save's response would land as current and repopulate the working copy
	* with the old agent's data.
	*/
	function repoint(projectId, agentId) {
		latestKey = keyFor(projectId, agentId);
		config.value = null;
		configHash.value = void 0;
		loading.value = false;
	}
	async function fetchConfig(projectId, agentId) {
		const key = keyFor(projectId, agentId);
		latestKey = key;
		loading.value = true;
		try {
			const fresh = await getAgentConfig(rootStore.restApiContext, projectId, agentId);
			if (latestKey === key) {
				config.value = fresh.config;
				configHash.value = fresh.configHash;
			}
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	/**
	* `baseConfigHash` is the server hash the edit was made against. Callers
	* that debounce saves must capture it at edit time: a refresh landing in
	* between would otherwise lend the stale snapshot the fresh hash and let it
	* pass the backend's conflict check. A base captured while one of this
	* composable's own saves was in flight is advanced to that save's result.
	* An unknown hash is sent as `null`, so the server rejects the write unless
	* the agent really has no config yet.
	*/
	async function updateConfig(projectId, agentId, data, baseConfigHash = configHash.value ?? null) {
		const key = keyFor(projectId, agentId);
		if (configHash.value !== ownLatest) ownBases.clear();
		else if (ownBases.has(baseConfigHash)) baseConfigHash = ownLatest;
		const result = await updateAgentConfig(rootStore.restApiContext, projectId, agentId, data, baseConfigHash);
		const stale = latestKey !== key;
		if (!stale) {
			config.value = result.config;
			configHash.value = result.configHash;
			ownBases.add(baseConfigHash);
			ownLatest = result.configHash;
		}
		return {
			versionId: result.versionId,
			stale
		};
	}
	return {
		config,
		configHash,
		loading,
		repoint,
		fetchConfig,
		updateConfig
	};
}
//#endregion
export { useAgentConfig as t };

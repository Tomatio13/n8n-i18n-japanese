import { Id as computed, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Ho as listAgents, LS as useRootStore, Rn as toAgentListItem } from "./app-B_io1t1X.js";
//#region src/features/agents/composables/useProjectAgentsList.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var caches = /* @__PURE__ */ new Map();
function getEntry(projectId) {
	let entry = caches.get(projectId);
	if (!entry) {
		entry = {
			list: ref(null),
			inFlight: null
		};
		caches.set(projectId, entry);
	}
	return entry;
}
function useProjectAgentsList(projectId) {
	const rootStore = useRootStore();
	const list = computed(() => {
		const id = projectId.value;
		return id ? getEntry(id).list.value : null;
	});
	async function ensureLoaded() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		if (entry.list.value) return entry.list.value;
		if (!entry.inFlight) entry.inFlight = listAgents(rootStore.restApiContext, id).then((result) => {
			entry.list.value = result;
			entry.inFlight = null;
			return result;
		}).catch((err) => {
			entry.inFlight = null;
			throw err;
		});
		return await entry.inFlight;
	}
	async function refresh() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		entry.list.value = null;
		return await ensureLoaded();
	}
	return {
		list,
		ensureLoaded,
		refresh
	};
}
function upsertProjectAgentsListCache(projectId, agent) {
	if (!projectId) return;
	const entry = getEntry(projectId);
	const current = entry.list.value;
	if (!current) return;
	const item = toAgentListItem(agent);
	if (current.findIndex((candidate) => candidate.id === item.id) === -1) {
		entry.list.value = [item, ...current];
		return;
	}
	entry.list.value = current.map((candidate) => candidate.id === item.id ? item : candidate);
}
function removeProjectAgentFromListCache(projectId, agentId) {
	if (!projectId) return;
	const entry = getEntry(projectId);
	const current = entry.list.value;
	if (!current) return;
	entry.list.value = current.filter((agent) => agent.id !== agentId);
}
//#endregion
export { upsertProjectAgentsListCache as n, useProjectAgentsList as r, removeProjectAgentFromListCache as t };

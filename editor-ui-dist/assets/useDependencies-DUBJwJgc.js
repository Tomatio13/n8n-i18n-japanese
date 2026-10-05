import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { nr as makeRestApiRequest, t as useRootStore } from "./useRootStore-D173L1zv.js";
//#region src/app/api/workflow-dependencies.ts
async function getResourceDependencyCounts(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/counts", {
		resourceIds,
		resourceType
	});
}
async function getResourceDependencies(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/details", {
		resourceIds,
		resourceType
	});
}
//#endregion
//#region src/app/composables/useDependencies.ts
var dependenciesMap = ref({});
var countsMap = ref({});
var emptyCounts = () => ({
	agentUsage: 0,
	credentialId: 0,
	dataTableId: 0,
	errorWorkflow: 0,
	errorWorkflowParent: 0,
	workflowCall: 0,
	workflowParent: 0
});
var BATCH_SIZE = 100;
function toBatches(resourceIds) {
	const batches = [];
	for (let i = 0; i < resourceIds.length; i += BATCH_SIZE) batches.push(resourceIds.slice(i, i + BATCH_SIZE));
	return batches;
}
var cacheKey = (resourceType, resourceId) => `${resourceType}:${resourceId}`;
var requestCounter = 0;
var countsRequestGeneration = {};
var detailsRequestGeneration = {};
function claimGeneration(generations, keys) {
	const generation = ++requestCounter;
	for (const key of keys) generations[key] = generation;
	return generation;
}
function useDependencies() {
	const rootStore = useRootStore();
	/** Fetch lightweight dependency counts for resource cards (no name resolution). */
	async function fetchDependencyCounts(resourceIds, resourceType) {
		await Promise.all(toBatches(resourceIds).map(async (batch) => {
			const generation = claimGeneration(countsRequestGeneration, batch.map((id) => cacheKey(resourceType, id)));
			try {
				const result = await getResourceDependencyCounts(rootStore.restApiContext, batch, resourceType);
				for (const id of batch) {
					const key = cacheKey(resourceType, id);
					if (countsRequestGeneration[key] !== generation) continue;
					countsMap.value[key] = result[id] ?? emptyCounts();
				}
			} catch {}
		}));
	}
	/** Fetch full resolved dependencies for any resource type. */
	async function fetchDependencies(resourceIds, resourceType) {
		await Promise.all(toBatches(resourceIds).map(async (batch) => {
			const generation = claimGeneration(detailsRequestGeneration, batch.map((id) => cacheKey(resourceType, id)));
			try {
				const result = await getResourceDependencies(rootStore.restApiContext, batch, resourceType);
				for (const id of batch) {
					const key = cacheKey(resourceType, id);
					if (detailsRequestGeneration[key] !== generation) continue;
					dependenciesMap.value[key] = result[id] ?? {
						dependencies: [],
						inaccessibleCount: 0
					};
				}
			} catch {}
		}));
	}
	function getDependencies(resourceId, resourceType) {
		return dependenciesMap.value[cacheKey(resourceType, resourceId)];
	}
	function getDependencyCounts(resourceId, resourceType) {
		return countsMap.value[cacheKey(resourceType, resourceId)];
	}
	function getTotalCount(resourceId, resourceType) {
		const counts = countsMap.value[cacheKey(resourceType, resourceId)];
		if (!counts) return 0;
		return Object.values(counts).reduce((sum, n) => sum + n, 0);
	}
	function hasDependencies(resourceId, resourceType) {
		const entry = dependenciesMap.value[cacheKey(resourceType, resourceId)];
		if (entry !== void 0) return entry.dependencies.length > 0 || entry.inaccessibleCount > 0;
		return getTotalCount(resourceId, resourceType) > 0;
	}
	function clearCache() {
		dependenciesMap.value = {};
		countsMap.value = {};
	}
	return {
		fetchDependencyCounts,
		fetchDependencies,
		getDependencies,
		getDependencyCounts,
		getTotalCount,
		hasDependencies,
		clearCache
	};
}
//#endregion
export { useDependencies as t };

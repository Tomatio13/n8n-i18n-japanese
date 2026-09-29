import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { a as executionFilterToQueryFilter, c as getDefaultExecutionFilters, jn as useProjectsStore, m as unflattenExecutionData } from "./workflows.store-D-csz4jD.js";
import { fr as defineStore, nr as makeRestApiRequest, t as useRootStore } from "./useRootStore-DZGHRGYJ.js";
import { t as compareExecutionListItems } from "./src-idT_fqaK.js";
import { t as useSettingsStore } from "./settings.store-eyxr9QVd.js";
//#region src/features/execution/executions/executions.store.ts
var useExecutionsStore = defineStore("executions", () => {
	const rootStore = useRootStore();
	const projectsStore = useProjectsStore();
	const settingsStore = useSettingsStore();
	const loading = ref(false);
	const initialLoadComplete = ref(false);
	const itemsPerPage = ref(10);
	const activeExecution = ref(null);
	const filters = ref(getDefaultExecutionFilters());
	const executionsFilters = computed(() => {
		const filter = executionFilterToQueryFilter(filters.value);
		if (projectsStore.currentProjectId) filter.projectId = projectsStore.currentProjectId;
		return filter;
	});
	const currentExecutionsFilters = computed(() => ({ ...filters.value.workflowId !== "all" ? { workflowId: filters.value.workflowId } : {} }));
	const autoRefresh = ref(true);
	const autoRefreshTimeout = ref(null);
	const autoRefreshDelay = ref(4 * 1e3);
	const executionsById = ref({});
	const executionsCount = ref(0);
	const hasMoreExecutions = ref(true);
	const nextCursor = ref(null);
	let loadedPages = 0;
	let activeFilterKey;
	const concurrentExecutionsCount = ref(0);
	const executions = computed(() => {
		const data = Object.values(executionsById.value);
		data.sort(compareExecutionListItems);
		return data;
	});
	const executionsByWorkflowId = computed(() => executions.value.reduce((acc, execution) => {
		if (!acc[execution.workflowId]) acc[execution.workflowId] = [];
		acc[execution.workflowId].push(execution);
		return acc;
	}, {}));
	const currentExecutionsById = ref({});
	const startedAtSortFn = (a, b) => new Date(b.startedAt ?? b.createdAt).getTime() - new Date(a.startedAt ?? a.createdAt).getTime();
	/**
	* Prioritize `running` over `new` executions, then sort by start timestamp.
	*/
	const statusThenStartedAtSortFn = (a, b) => {
		if (a.status && b.status) {
			const statusPriority = {
				running: 1,
				new: 2
			};
			const statusComparison = statusPriority[a.status] - statusPriority[b.status];
			if (statusComparison !== 0) return statusComparison;
		}
		return startedAtSortFn(a, b);
	};
	const sortFn = settingsStore.isConcurrencyEnabled ? statusThenStartedAtSortFn : startedAtSortFn;
	const currentExecutions = computed(() => {
		const data = Object.values(currentExecutionsById.value);
		data.sort(sortFn);
		return data;
	});
	const currentExecutionsByWorkflowId = computed(() => currentExecutions.value.reduce((acc, execution) => {
		if (!acc[execution.workflowId]) acc[execution.workflowId] = [];
		acc[execution.workflowId].push(execution);
		return acc;
	}, {}));
	const allExecutions = computed(() => [...currentExecutions.value, ...executions.value]);
	function addExecution(execution) {
		executionsById.value = {
			...executionsById.value,
			[execution.id]: {
				...execution,
				mode: execution.mode
			}
		};
	}
	function addCurrentExecution(execution) {
		currentExecutionsById.value[execution.id] = {
			...execution,
			mode: execution.mode
		};
	}
	function removeExecution(id) {
		const { [id]: _, ...rest } = executionsById.value;
		executionsById.value = rest;
	}
	function setFilters(value) {
		filters.value = value;
	}
	async function initialize(workflowId) {
		if (workflowId) filters.value.workflowId = workflowId;
		await fetchExecutions();
		await startAutoRefreshInterval(workflowId);
	}
	/** One page of executions, straight from the server. Leaves the loaded list alone. */
	async function fetchExecutionsPage(filter, cursor) {
		return await makeRestApiRequest(rootStore.restApiContext, "GET", "/executions", {
			filter,
			cursor,
			limit: itemsPerPage.value
		});
	}
	async function loadExecutionsPage(filter, page) {
		const filterKey = JSON.stringify(filter);
		if (activeFilterKey !== filterKey) {
			executionsById.value = {};
			currentExecutionsById.value = {};
			nextCursor.value = null;
			loadedPages = 0;
			activeFilterKey = filterKey;
			page = "first";
		}
		const cursor = page === "more" ? nextCursor.value : null;
		if (page === "more" && !cursor) return void 0;
		loading.value = true;
		try {
			const data = await fetchExecutionsPage(filter, cursor ?? void 0);
			if (activeFilterKey !== filterKey) return data;
			if (page !== "more") currentExecutionsById.value = {};
			data.results.forEach((execution) => {
				if (["new", "running"].includes(execution.status)) {
					delete executionsById.value[execution.id];
					addCurrentExecution(execution);
				} else {
					delete currentExecutionsById.value[execution.id];
					addExecution(execution);
				}
			});
			if (page !== "refresh" || loadedPages <= 1) {
				nextCursor.value = data.nextCursor;
				hasMoreExecutions.value = data.nextCursor !== null;
			}
			if (page === "first") loadedPages = 1;
			if (page === "more") loadedPages += 1;
			if (page !== "more") executionsCount.value = data.count;
			concurrentExecutionsCount.value = data.concurrentExecutionsCount;
			return data;
		} finally {
			loading.value = false;
			initialLoadComplete.value = true;
		}
	}
	/** Load the first page, replacing the pages loaded so far. */
	async function fetchExecutions(filter = executionsFilters.value) {
		return await loadExecutionsPage(filter, "first");
	}
	/** Append the page after the last one loaded. Does nothing at the end of the list. */
	async function loadMoreExecutions(filter = executionsFilters.value) {
		return await loadExecutionsPage(filter, "more");
	}
	/** Reload the first page, keeping the pages already loaded below it. */
	async function refreshExecutions(filter = executionsFilters.value) {
		return await loadExecutionsPage(filter, "refresh");
	}
	async function fetchExecution(id, queryParams) {
		const response = await makeRestApiRequest(rootStore.restApiContext, "GET", `/executions/${id}`, queryParams);
		return response ? unflattenExecutionData(response) : void 0;
	}
	async function loadAutoRefresh(workflowId) {
		const autoRefreshExecutionFilters = {
			...executionsFilters.value,
			...workflowId ? { workflowId } : {}
		};
		autoRefreshTimeout.value = setTimeout(async () => {
			if (autoRefresh.value) {
				await refreshExecutions(autoRefreshExecutionFilters);
				startAutoRefreshInterval(workflowId);
			}
		}, autoRefreshDelay.value);
	}
	async function startAutoRefreshInterval(workflowId) {
		stopAutoRefreshInterval();
		await loadAutoRefresh(workflowId);
	}
	function stopAutoRefreshInterval() {
		if (autoRefreshTimeout.value) {
			clearTimeout(autoRefreshTimeout.value);
			autoRefreshTimeout.value = null;
		}
	}
	async function annotateExecution(id, data) {
		const updatedExecution = await makeRestApiRequest(rootStore.restApiContext, "PATCH", `/executions/${id}`, data);
		addExecution(updatedExecution);
		if (updatedExecution.id === activeExecution.value?.id) activeExecution.value = updatedExecution;
	}
	async function stopManyExecutions(filter) {
		return await makeRestApiRequest(rootStore.restApiContext, "POST", "/executions/stopMany", { filter: {
			...filter,
			workflowId: filters.value.workflowId
		} });
	}
	async function stopCurrentExecution(executionId) {
		return await makeRestApiRequest(rootStore.restApiContext, "POST", `/executions/${executionId}/stop`);
	}
	async function retryExecution(id, loadWorkflow) {
		return await makeRestApiRequest(rootStore.restApiContext, "POST", `/executions/${id}/retry`, loadWorkflow ? { loadWorkflow: true } : void 0);
	}
	async function deleteExecutions(sendData) {
		await makeRestApiRequest(rootStore.restApiContext, "POST", "/executions/delete", sendData);
		if (sendData.ids) sendData.ids.forEach(removeExecution);
		if (sendData.deleteBefore) {
			const deleteBefore = new Date(sendData.deleteBefore);
			allExecutions.value.forEach((execution) => {
				if (new Date(execution.startedAt ?? execution.createdAt) < deleteBefore) removeExecution(execution.id);
			});
		}
	}
	function resetData() {
		executionsById.value = {};
		currentExecutionsById.value = {};
		executionsCount.value = 0;
		concurrentExecutionsCount.value = 0;
		hasMoreExecutions.value = true;
		nextCursor.value = null;
		loadedPages = 0;
		activeFilterKey = void 0;
	}
	function reset() {
		itemsPerPage.value = 10;
		filters.value = getDefaultExecutionFilters();
		autoRefresh.value = true;
		initialLoadComplete.value = false;
		resetData();
		stopAutoRefreshInterval();
	}
	return {
		loading,
		initialLoadComplete,
		annotateExecution,
		executionsById,
		executions,
		executionsCount,
		hasMoreExecutions,
		nextCursor,
		concurrentExecutionsCount,
		executionsByWorkflowId,
		currentExecutions,
		currentExecutionsByWorkflowId,
		activeExecution,
		fetchExecutions,
		loadMoreExecutions,
		refreshExecutions,
		fetchExecutionsPage,
		fetchExecution,
		autoRefresh,
		autoRefreshTimeout,
		startAutoRefreshInterval,
		stopAutoRefreshInterval,
		initialize,
		filters,
		setFilters,
		executionsFilters,
		currentExecutionsFilters,
		allExecutions,
		stopCurrentExecution,
		retryExecution,
		deleteExecutions,
		addExecution,
		resetData,
		reset,
		itemsPerPage,
		stopManyExecutions
	};
});
//#endregion
export { useExecutionsStore as t };

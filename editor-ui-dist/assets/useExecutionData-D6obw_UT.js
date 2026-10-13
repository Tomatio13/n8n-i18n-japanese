import { Nd as computed } from "./vendor-C1jTjpo6.js";
import { hd as injectWorkflowExecutionStateStore } from "./app-C5zIGyiz.js";
//#region src/features/execution/executions/composables/useExecutionData.ts
function useExecutionData({ node }) {
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const workflowExecution = computed(() => workflowExecutionStateStore.value.activeExecution);
	const workflowRunData = computed(() => workflowExecutionStateStore.value.activeExecutionRunData);
	const nodeRunData = computed(() => node.value ? workflowRunData.value?.[node.value.name] ?? null : null);
	return {
		workflowExecution,
		workflowRunData,
		nodeRunData,
		hasNodeRun: computed(() => nodeRunData.value !== null)
	};
}
//#endregion
export { useExecutionData as t };

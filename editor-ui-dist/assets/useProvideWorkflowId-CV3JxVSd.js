import { S as computed, tt as provide } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { gt as useRoute } from "./src-DI71_LGY.js";
import { ms as VIEWS, zc as WorkflowIdKey } from "./constants-BVqqmrz5.js";
function useProvideWorkflowId() {
	const route = useRoute();
	const workflowId = computed(() => {
		if (route.name === VIEWS.DEMO) return "demo";
		const name = route.params.name;
		return (Array.isArray(name) ? name[0] : name) ?? "";
	});
	provide(WorkflowIdKey, workflowId);
	return workflowId;
}
export { useProvideWorkflowId as t };

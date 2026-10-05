import { S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { Mn as useSourceControlStore, jn as useProjectsStore } from "./workflows.store-bhmLKy6g.js";
import { Ft as getResourcePermissions } from "./src-DVqjY0nx.js";
import { t as useUsersStore } from "./users.store-B-Ck61Zf.js";
//#region src/features/agents/composables/useAgentPermissions.ts
function useAgentPermissions(projectId) {
	const projectsStore = useProjectsStore();
	const usersStore = useUsersStore();
	const sourceControlStore = useSourceControlStore();
	const projectScopes = computed(() => getResourcePermissions(projectsStore.myProjects?.find((p) => p.id === toValue(projectId))?.scopes).agent);
	const globalScopes = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).agent);
	const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
	const hasScope = (key) => Boolean(globalScopes.value[key] ?? projectScopes.value[key]);
	const pick = (key) => computed(() => !isReadOnly.value && hasScope(key));
	return {
		canCreate: pick("create"),
		canUpdate: pick("update"),
		canDelete: pick("delete"),
		canPublish: pick("publish"),
		canUnpublish: pick("unpublish"),
		canExecute: computed(() => hasScope("execute"))
	};
}
//#endregion
export { useAgentPermissions as t };

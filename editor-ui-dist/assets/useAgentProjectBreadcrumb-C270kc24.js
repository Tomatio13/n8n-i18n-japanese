import { Id as computed, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { Kg as DEFAULT_PROJECT_ICON, qp as useProjectsStore, tA as isIconOrEmoji, zM as useI18n } from "./app-BXv1VOvT.js";
//#region src/features/agents/composables/useAgentProjectBreadcrumb.ts
init_runtime_core_esm_bundler();
function useAgentProjectBreadcrumb(projectId) {
	const projectsStore = useProjectsStore();
	const i18n = useI18n();
	const isPersonalProject = computed(() => projectsStore.personalProject?.id === projectId.value);
	const project = computed(() => {
		if (isPersonalProject.value) return projectsStore.personalProject;
		if (projectsStore.currentProject?.id === projectId.value) return projectsStore.currentProject;
		return projectsStore.myProjects.find((item) => item.id === projectId.value);
	});
	return {
		projectName: computed(() => isPersonalProject.value ? i18n.baseText("projects.menu.personal") : project.value?.name ?? null),
		projectIcon: computed(() => {
			if (isPersonalProject.value) return {
				type: "icon",
				value: "user"
			};
			return isIconOrEmoji(project.value?.icon) ? project.value.icon : DEFAULT_PROJECT_ICON;
		})
	};
}
//#endregion
export { useAgentProjectBreadcrumb as t };

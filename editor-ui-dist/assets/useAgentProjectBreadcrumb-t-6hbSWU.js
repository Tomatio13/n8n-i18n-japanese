import { Pd as computed } from "./vendor-D9HlBS7Y.js";
import { FT as useI18n, Np as useProjectsStore, Sh as DEFAULT_PROJECT_ICON, dC as isIconOrEmoji } from "./app-TXEjHrLJ.js";
//#region src/features/agents/composables/useAgentProjectBreadcrumb.ts
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

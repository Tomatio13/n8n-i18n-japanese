import { Id as computed, Kf as toValue, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { Yf as useTypeAvailability, af as useNodeTypesStore, qp as useProjectsStore, sp as useNodeTypeRestriction } from "./app-BJz3tlB7.js";
//#region src/features/ai/chatHub/composables/useChatToolRestriction.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** Loads the policy that applies to chat tools. */
function useChatToolPolicy() {
	const projectsStore = useProjectsStore();
	return useTypeAvailability(() => projectsStore.personalProject?.id);
}
/** Loads the policy that applies to chat tools and reports whether `nodeType` is restricted. */
function useChatToolRestriction(nodeType) {
	const nodeTypesStore = useNodeTypesStore();
	useChatToolPolicy();
	const { isRestricted, restriction } = useNodeTypeRestriction(nodeType);
	return {
		isRestricted,
		restriction,
		typeName: computed(() => {
			const name = toValue(nodeType);
			if (!name) return "";
			return nodeTypesStore.getNodeType(name)?.displayName ?? name;
		})
	};
}
//#endregion
export { useChatToolRestriction as n, useChatToolPolicy as t };

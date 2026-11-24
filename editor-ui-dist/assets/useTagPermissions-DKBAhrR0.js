import { Id as computed, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { Xp as hasPermission } from "./app-BJz3tlB7.js";
//#region src/features/shared/tags/useTagPermissions.ts
init_runtime_core_esm_bundler();
function useTagPermissions() {
	const canList = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:list" } }));
	const canCreate = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:create" } }));
	const canUpdate = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:update" } }));
	const canDelete = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:delete" } }));
	return {
		canList,
		canCreate,
		canUpdate,
		canDelete,
		canManage: computed(() => canCreate.value || canUpdate.value || canDelete.value)
	};
}
function useAnnotationTagPermissions() {
	const canCreate = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:create" } }));
	const canUpdate = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:update" } }));
	const canDelete = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:delete" } }));
	return {
		canCreate,
		canUpdate,
		canDelete,
		canManage: computed(() => canCreate.value || canUpdate.value || canDelete.value)
	};
}
//#endregion
export { useTagPermissions as n, useAnnotationTagPermissions as t };

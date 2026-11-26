import { Xp as hasPermission } from "./app-B_io1t1X.js";
//#region src/app/composables/useUserHelpers.ts
function useUserHelpers(router) {
	const canUserAccessRouteByName = (name) => {
		const resolvedRoute = router.resolve({ name });
		return canUserAccessRoute(resolvedRoute);
	};
	const canUserAccessRoute = (route) => {
		const middleware = route.meta?.middleware;
		const middlewareOptions = route.meta?.middlewareOptions;
		if (!middleware) return true;
		return hasPermission(middleware, middlewareOptions);
	};
	return { canUserAccessRouteByName };
}
//#endregion
export { useUserHelpers as t };

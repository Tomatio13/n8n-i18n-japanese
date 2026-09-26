import { er as makeRestApiRequest } from "./useRootStore-CVbOmixR.js";
//#region src/features/integrations/promotions.ee/promotions.api.ts
async function getPromotableChanges(context, projectId) {
	return await makeRestApiRequest(context, "GET", `/promotions/${projectId}/changes`);
}
//#endregion
export { getPromotableChanges as t };

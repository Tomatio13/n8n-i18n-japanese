import { nr as makeRestApiRequest } from "./useRootStore-DZGHRGYJ.js";
//#region src/features/integrations/promotions.ee/promotions.api.ts
async function getPromotableChanges(context, projectId, direction = "promote") {
	return await makeRestApiRequest(context, "GET", `/promotions/${projectId}/changes/${direction}`);
}
//#endregion
export { getPromotableChanges as t };

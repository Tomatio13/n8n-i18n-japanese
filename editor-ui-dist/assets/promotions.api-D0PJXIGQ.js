import { bv as makeRestApiRequest, xv as request } from "./app-C-V9N0hV.js";
//#region src/features/integrations/promotions.ee/promotions.api.ts
async function getPromotableChanges(context, projectId, direction = "promote") {
	return await makeRestApiRequest(context, "GET", `/promotions/${projectId}/changes/${direction}`);
}
async function promoteProjectSelection(context, projectId, payload) {
	return await request({
		method: "POST",
		baseURL: context.baseUrl,
		endpoint: `/promotions/projects/${projectId}/promote`,
		data: payload
	});
}
//#endregion
export { promoteProjectSelection as n, getPromotableChanges as t };

import { xv as request } from "./app-6hFiMIk3.js";
//#region src/features/integrations/promotions.ee/promotionsSettings.api.ts
var promotionsApiRoot = "/promotions";
async function fetchAllPages(fetchPage) {
	const items = [];
	let cursor;
	do {
		const page = await fetchPage(cursor);
		items.push(...page.data);
		cursor = page.nextCursor ?? void 0;
	} while (cursor);
	return items;
}
var fetchPromotionProviders = async (context) => await fetchAllPages(async (cursor) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers`,
	data: { cursor }
}));
/** Fetches the provider with its SSH public key. */
var fetchPromotionProvider = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`
});
var createPromotionProvider = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers`,
	data: payload
});
var updatePromotionProvider = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`,
	data: payload
});
var deletePromotionProvider = async (context, id) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/providers/${id}`
	});
};
var fetchPromotionConnections = async (context, filter = {}) => await fetchAllPages(async (cursor) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections`,
	data: {
		...filter,
		cursor
	}
}));
/** Fetches live checkout state with the stored connection fields. */
var fetchPromotionConnection = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${id}`
});
var createPromotionConnection = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections`,
	data: payload
});
var updatePromotionConnection = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${id}`,
	data: payload
});
var upsertPromotionApplyConfig = async (context, connectionId, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/apply`,
	data: payload
});
var upsertPromotionPromoteConfig = async (context, connectionId, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/promote`,
	data: payload
});
var deletePromotionConfig = async (context, connectionId, direction) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/${direction}`
	});
};
/** Clones one direction into local storage on the instance. Safe to repeat. */
var clonePromotionCheckout = async (context, connectionId, direction) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/${direction}/clone`
});
/** Removes one direction's local checkout. Keeps the config and its credentials. */
var disconnectPromotionCheckout = async (context, connectionId, direction) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/${direction}/disconnect`
});
/** Promotes the whole instance through its instance connection. */
var promotePackage = async (context, connectionId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/promote`,
	data: payload
});
var applyPromotion = async (context, connectionId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/apply`,
	data: payload
});
/** Resumes an apply that paused on unresolved bindings, once they are created. */
var continueApplyPromotion = async (context, connectionId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/apply/continue`,
	data: payload
});
//#endregion
export { upsertPromotionPromoteConfig as _, createPromotionProvider as a, disconnectPromotionCheckout as c, fetchPromotionProvider as d, fetchPromotionProviders as f, upsertPromotionApplyConfig as g, updatePromotionProvider as h, createPromotionConnection as i, fetchPromotionConnection as l, updatePromotionConnection as m, clonePromotionCheckout as n, deletePromotionConfig as o, promotePackage as p, continueApplyPromotion as r, deletePromotionProvider as s, applyPromotion as t, fetchPromotionConnections as u };

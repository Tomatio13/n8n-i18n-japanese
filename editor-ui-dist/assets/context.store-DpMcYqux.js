import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { fr as defineStore, nr as makeRestApiRequest, t as useRootStore } from "./useRootStore-DZGHRGYJ.js";
//#region src/features/settings/context/context.api.ts
var ENDPOINT = "/ai-preferences";
async function getPreferences(context, query = {}) {
	return await makeRestApiRequest(context, "GET", ENDPOINT, query);
}
async function getPreferenceCount(context) {
	return (await makeRestApiRequest(context, "GET", `${ENDPOINT}/count`)).count;
}
async function createPreference(context, payload) {
	return await makeRestApiRequest(context, "POST", ENDPOINT, payload);
}
async function updatePreference(context, id, payload) {
	return await makeRestApiRequest(context, "PATCH", `${ENDPOINT}/${id}`, payload);
}
async function deletePreference(context, id) {
	await makeRestApiRequest(context, "DELETE", `${ENDPOINT}/${id}`);
}
//#endregion
//#region src/features/settings/context/context.store.ts
var useContextStore = defineStore("context", () => {
	const rootStore = useRootStore();
	const preferences = ref([]);
	const count = ref(0);
	const loading = ref(false);
	let latestListRead = 0;
	let latestCountRead = 0;
	async function fetchPreferences(query = {}) {
		const listRead = ++latestListRead;
		const countRead = ++latestCountRead;
		loading.value = true;
		try {
			const response = await getPreferences(rootStore.restApiContext, query);
			if (listRead === latestListRead) preferences.value = response.data;
			if (countRead === latestCountRead) count.value = response.count;
			return response;
		} finally {
			if (listRead === latestListRead) loading.value = false;
		}
	}
	async function fetchPreferenceCount() {
		const countRead = ++latestCountRead;
		const total = await getPreferenceCount(rootStore.restApiContext);
		if (countRead === latestCountRead) count.value = total;
		return total;
	}
	async function createPreference$1(payload) {
		return await createPreference(rootStore.restApiContext, payload);
	}
	async function updatePreference$1(id, payload) {
		return await updatePreference(rootStore.restApiContext, id, payload);
	}
	async function deletePreference$1(id) {
		await deletePreference(rootStore.restApiContext, id);
	}
	/** Deletes every row it can and reports the failures. */
	async function deletePreferences(ids) {
		const results = await Promise.allSettled(ids.map(async (id) => await deletePreference(rootStore.restApiContext, id)));
		const result = {
			deleted: [],
			failed: []
		};
		results.forEach((outcome, index) => {
			const id = ids[index];
			if (outcome.status === "fulfilled") result.deleted.push(id);
			else result.failed.push({
				id,
				error: outcome.reason
			});
		});
		return result;
	}
	return {
		preferences,
		count,
		loading,
		fetchPreferences,
		fetchPreferenceCount,
		createPreference: createPreference$1,
		updatePreference: updatePreference$1,
		deletePreference: deletePreference$1,
		deletePreferences
	};
});
//#endregion
export { useContextStore as t };

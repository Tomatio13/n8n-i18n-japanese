import { Tf as ref, fo as defineStore } from "./vendor-z-loPfiR.js";
import { Ny as useRootStore, nb as makeRestApiRequest } from "./app-CqwplyU_.js";
//#region src/features/settings/context/skills.api.ts
var ENDPOINT = "/skills";
async function getSkills(context, query = {}) {
	return await makeRestApiRequest(context, "GET", ENDPOINT, { ...query });
}
/** A name that no skill in the scope has yet: the requested name, or the name with a number. */
async function getNewSkillName(context, query) {
	return (await makeRestApiRequest(context, "GET", `${ENDPOINT}/new-name`, { ...query })).name;
}
async function getSkill(context, id) {
	return await makeRestApiRequest(context, "GET", `${ENDPOINT}/${id}`);
}
async function createSkill(context, payload) {
	return await makeRestApiRequest(context, "POST", ENDPOINT, payload);
}
/** Saves the next version. Answers `created: false` when the content matches the latest one. */
async function saveSkill(context, id, payload) {
	return await makeRestApiRequest(context, "PATCH", `${ENDPOINT}/${id}`, payload);
}
async function deleteSkill(context, id) {
	await makeRestApiRequest(context, "DELETE", `${ENDPOINT}/${id}`);
}
//#endregion
//#region src/features/settings/context/skills.store.ts
/** The skills list in Settings > Context > Skills. */
var useSkillsStore = defineStore("contextSkills", () => {
	const rootStore = useRootStore();
	const skills = ref([]);
	const count = ref(0);
	const loading = ref(false);
	let latestRead = 0;
	async function fetchSkills(query = {}) {
		const read = ++latestRead;
		loading.value = true;
		try {
			const response = await getSkills(rootStore.restApiContext, query);
			if (read === latestRead) {
				skills.value = response.data;
				count.value = response.count;
			}
			return response;
		} finally {
			if (read === latestRead) loading.value = false;
		}
	}
	/** The overview card needs the total only, so it asks for a single row. */
	async function fetchSkillCount() {
		await fetchSkills({ take: 1 });
	}
	/** A default name that no skill in the scope has yet. */
	async function fetchNewSkillName(query) {
		return await getNewSkillName(rootStore.restApiContext, query);
	}
	async function fetchSkill(id) {
		return await getSkill(rootStore.restApiContext, id);
	}
	async function createSkill$1(payload) {
		return await createSkill(rootStore.restApiContext, payload);
	}
	async function saveSkill$1(id, payload) {
		return await saveSkill(rootStore.restApiContext, id, payload);
	}
	async function deleteSkill$1(id) {
		await deleteSkill(rootStore.restApiContext, id);
	}
	return {
		skills,
		count,
		loading,
		fetchSkills,
		fetchSkillCount,
		fetchSkill,
		fetchNewSkillName,
		createSkill: createSkill$1,
		saveSkill: saveSkill$1,
		deleteSkill: deleteSkill$1
	};
});
//#endregion
export { useSkillsStore as t };

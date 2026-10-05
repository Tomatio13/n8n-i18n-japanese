import { A as useStorage$1 } from "./dist-C4pFh3bs.js";
//#region ../@n8n/composables/src/useStorage.ts
function useStorage(key) {
	const data = useStorage$1(key, null, void 0, { writeDefaults: false });
	if (data.value === "undefined") data.value = null;
	return data;
}
//#endregion
export { useStorage as t };

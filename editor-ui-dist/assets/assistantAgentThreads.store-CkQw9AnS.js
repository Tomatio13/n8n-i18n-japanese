import { Id as computed, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, lo as defineStore, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Fo as getSystemAgentThread, LS as useRootStore, OS as useToast, QC as makeRestApiRequest, Qo as renameSystemAgentThread, RM as i18n, Xi as ASSISTANT_AGENT_ID, Yo as listSystemAgentThreads, na as forgetAssistantAgentThread, oo as deleteSystemAgentThread, sa as rememberAssistantAgentThread } from "./app-BXv1VOvT.js";
//#region src/features/ai/instanceAi/assistantAgent/assistantAgentTabs.api.ts
async function fetchAssistantAgentThreadTabs(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/assistant/threads/${threadId}/tabs`);
}
async function fetchAssistantAgentThreadCredits(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/assistant/threads/${threadId}/credits`);
}
async function saveAssistantAgentThreadTabs(context, threadId, state) {
	return await makeRestApiRequest(context, "PUT", `/assistant/threads/${threadId}/tabs`, state);
}
//#endregion
//#region src/features/ai/instanceAi/assistantAgent/assistantAgentThreads.store.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** The thread with its title from a rename in this session, if any. */
function withRenamedTitle(thread, renamedTitles) {
	const title = renamedTitles.get(thread.id);
	return title === void 0 ? thread : {
		...thread,
		title
	};
}
/** How many Assistant agent threads the sidebar's recent chats load. */
var ASSISTANT_AGENT_RECENT_THREADS_LIMIT = 10;
/** Page size of the Assistant agent threads in the chat history. */
var ASSISTANT_AGENT_HISTORY_PAGE_SIZE = 30;
/**
* The user's own Assistant agent threads for the recent chats. The chat history
* pages through them with {@link usePagedAssistantAgentThreads}. Every thread
* that it loads is remembered as an Assistant agent thread, so opening it needs
* no lookup.
*/
var useAssistantAgentThreadsStore = defineStore("assistantAgentThreads", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const recentThreads = ref([]);
	const openedThreads = ref([]);
	/** Ids deleted in this session, so every mounted list filters the row out. */
	const deletedThreadIds = ref(/* @__PURE__ */ new Set());
	/**
	* Titles renamed in this session, so every mounted list shows the new title. A
	* response that a rename overtook can still hold the old title.
	*/
	const renamedTitles = ref(/* @__PURE__ */ new Map());
	/** The credit total of each thread, from its load and the credit pushes. */
	const creditsUsed = ref(/* @__PURE__ */ new Map());
	const threadsById = computed(() => new Map([...openedThreads.value, ...recentThreads.value].filter((thread) => !deletedThreadIds.value.has(thread.id)).map((thread) => [thread.id, withRenamedTitle(thread, renamedTitles.value)])));
	/** Every known thread, newest `updatedAt` first. */
	const knownThreads = computed(() => [...threadsById.value.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
	function remember(threads) {
		for (const thread of threads) if (!deletedThreadIds.value.has(thread.id)) rememberAssistantAgentThread(thread.id, thread.projectId);
	}
	let requestVersion = 0;
	async function fetchRecent(limit = 10) {
		const version = ++requestVersion;
		try {
			const result = await listSystemAgentThreads(rootStore.restApiContext, ASSISTANT_AGENT_ID, { limit });
			if (version !== requestVersion) return;
			remember(result.data);
			recentThreads.value = result.data;
		} catch (error) {
			if (version !== requestVersion) return;
			console.error("Failed to load Assistant agent threads", error);
		}
	}
	/** Adds a thread that the recent list does not hold, for example one opened by URL. */
	function addOpenedThread(thread) {
		if (threadsById.value.has(thread.id) || deletedThreadIds.value.has(thread.id)) return;
		remember([thread]);
		openedThreads.value.push(thread);
	}
	/** Loads and adds a thread that the store does not hold yet. */
	async function loadThread(threadId) {
		if (threadsById.value.has(threadId)) return;
		try {
			addOpenedThread(await getSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, threadId));
		} catch (error) {
			console.error("Failed to load Assistant agent thread", error);
		}
	}
	async function deleteThread(thread) {
		try {
			await deleteSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, thread.id);
		} catch (error) {
			toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			return false;
		}
		recentThreads.value = recentThreads.value.filter((t) => t.id !== thread.id);
		openedThreads.value = openedThreads.value.filter((t) => t.id !== thread.id);
		deletedThreadIds.value.add(thread.id);
		creditsUsed.value.delete(thread.id);
		forgetAssistantAgentThread(thread.id);
		return true;
	}
	const renameVersions = /* @__PURE__ */ new Map();
	/** Shows the new title at once, and restores the old one when the request fails. */
	async function renameThread(threadId, title) {
		const previous = renamedTitles.value.get(threadId);
		const version = (renameVersions.get(threadId) ?? 0) + 1;
		renameVersions.set(threadId, version);
		renamedTitles.value.set(threadId, title);
		try {
			await renameSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, threadId, title);
		} catch (error) {
			if (renameVersions.get(threadId) === version) {
				if (previous === void 0) renamedTitles.value.delete(threadId);
				else renamedTitles.value.set(threadId, previous);
			}
			throw error;
		}
	}
	/** The credit total of a thread, or `undefined` before its first claim. */
	function threadCreditsUsed(threadId) {
		return creditsUsed.value.get(threadId);
	}
	/**
	* Keeps the larger total. A total only grows, so a load that a push overtook
	* cannot show an older total.
	*/
	function setThreadCreditsUsed(threadId, total) {
		const current = creditsUsed.value.get(threadId);
		if (current === void 0 || total > current) creditsUsed.value.set(threadId, total);
	}
	/** Loads the stored credit total of a thread, so the total shows after a reload. */
	async function loadThreadCredits(threadId) {
		try {
			const { creditsUsed: total } = await fetchAssistantAgentThreadCredits(rootStore.restApiContext, threadId);
			if (total !== null) setThreadCreditsUsed(threadId, total);
		} catch (error) {
			console.error("Failed to load Assistant agent thread credits", error);
		}
	}
	return {
		recentThreads,
		openedThreads,
		threadsById,
		knownThreads,
		deletedThreadIds,
		renamedTitles,
		remember,
		fetchRecent,
		addOpenedThread,
		loadThread,
		deleteThread,
		renameThread,
		threadCreditsUsed,
		setThreadCreditsUsed,
		loadThreadCredits
	};
});
//#endregion
export { fetchAssistantAgentThreadTabs as a, withRenamedTitle as i, ASSISTANT_AGENT_RECENT_THREADS_LIMIT as n, saveAssistantAgentThreadTabs as o, useAssistantAgentThreadsStore as r, ASSISTANT_AGENT_HISTORY_PAGE_SIZE as t };

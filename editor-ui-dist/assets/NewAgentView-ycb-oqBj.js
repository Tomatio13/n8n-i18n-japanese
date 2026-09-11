import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-CoanCUx7.js";
import { c as useRoute, l as useRouter } from "./vue-router-DY0KoU4O.js";
import { ua as v4 } from "./src-Ce0s6Kmn.js";
import { n as useToast } from "./useToast-nYQtasik.js";
import { Pr as PROJECT_AGENTS, gr as AGENT_BUILDER_VIEW, mr as AGENTS_LIST_VIEW } from "./constants-Dtz0vbsL.js";
import { n as useInstanceAiReady } from "./useInstanceAiAvailability-EY2Ne0n7.js";
import { d as INSTANCE_AI_PENDING_AGENT_ID_STATE, f as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, g as INSTANCE_AI_THREAD_VIEW } from "./constants-CRI_Begh.js";
import { n as useInstanceAiStore } from "./instanceAi.store-Bo-dnaWK.js";
import { h as stashPendingAgentAttachment } from "./useInstanceAiHandoff-dwlWbF3m.js";
import { t as generateNanoId } from "./generate-nano-id-Z3FMdoF-.js";
//#endregion
//#region src/features/agents/views/NewAgentView.vue
var NewAgentView_default = /* @__PURE__ */ defineComponent({
	__name: "NewAgentView",
	setup(__props) {
		const MINTED_AGENT_ID = /^[0-9A-Za-z]{16}$/;
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const toast = useToast();
		const instanceAiReady = useInstanceAiReady();
		const instanceAiStore = useInstanceAiStore();
		/**
		* Opens an unpersisted agent draft in Instance AI when available, or directly
		* in the manual builder otherwise. Both paths persist only after the first
		* configuration change and use the id minted by the entry point.
		*/
		onMounted(async () => {
			const projectId = route.query.projectId;
			if (typeof projectId !== "string" || !projectId) {
				const errorMessage = i18n.baseText("agentSelector.createAgentFailed");
				toast.showError(new Error(errorMessage), errorMessage);
				await router.replace({ name: AGENTS_LIST_VIEW });
				return;
			}
			const clickedAgentId = history.state[INSTANCE_AI_PENDING_AGENT_ID_STATE];
			const agentId = typeof clickedAgentId === "string" && MINTED_AGENT_ID.test(clickedAgentId) ? clickedAgentId : generateNanoId();
			try {
				if (!instanceAiReady.value) {
					await router.replace({
						name: AGENT_BUILDER_VIEW,
						params: {
							projectId,
							agentId
						},
						state: { [INSTANCE_AI_PENDING_AGENT_ID_STATE]: agentId }
					});
					return;
				}
				const threadId = v4();
				await instanceAiStore.syncThread(threadId, projectId, {
					source: "agent_builder_page",
					origin: "internal",
					sourceContext: { agentId }
				});
				await instanceAiStore.updateThreadMetadata(threadId, { [INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: {
					projectId,
					agentId
				} });
				stashPendingAgentAttachment(threadId, {
					type: "agent",
					id: agentId,
					name: i18n.baseText("agents.new.defaultName"),
					projectId,
					pending: true
				});
				await router.replace({
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSelector.createAgentFailed"));
				await router.replace({
					name: PROJECT_AGENTS,
					params: { projectId }
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { NewAgentView_default as default };

import "./rolldown-runtime-Bq5D3eIA.js";
import { $d as resolveComponent, Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Ef as toRef, Fs as ElRadio, Hd as nextTick, Ic as HoverCardTrigger_default, Iu as useSessionStorage, Kd as onMounted, Lc as HoverCardPortal_default, Nd as defineComponent, Od as createSlots, Of as toValue, Qa as literalType, Qd as renderSlot, Ql as CollapsibleRoot_default, Rc as HoverCardContent_default, Rd as inject, Sf as ref, Td as createBlock, Vd as mergeProps, W as VueMarkdown, Wa as arrayType, Wd as onBeforeUnmount, Xa as enumType, Xl as CollapsibleTrigger_default, Yd as openBlock, Zd as renderList, Zf as normalizeClass, as as useRouter, bd as Fragment, bf as reactive, cd as Transition, cf as watch, du as createReusableTemplate, ed as useIntervalFn, io as stringType, is as useRoute, jd as createVNode, mf as getCurrentScope, no as objectType, np as toDisplayString, of as useTemplateRef, qd as onUnmounted, tf as resolveDynamicComponent, to as numberType, uf as withCtx, wd as createBaseVNode, xu as useDocumentVisibility, yf as onScopeDispose, zc as HoverCardRoot_default, zu as useStorage } from "./vendor-BdZVA4Px.js";
import { $C as Input_default, CC as N8nCard_default, DC as N8nCallout_default, D_ as TIME, Er as resolveToolNameForDisplay, Ex as isDraftIntegration, Fx as MarkdownEditor_default, G_ as useSettingsStore, Gh as TOOL_CALL_STATE, Gx as isIconOrEmoji, Hh as OPEN_PREVIEW_PARAM, Is as updateAgentQueuedMessage, JC as ChatActions_default, Jh as AGENT_SESSION_DETAIL_VIEW, K_ as useRootStore, Kh as AGENT_BUILDER_VIEW, Lr as useAgentTelemetry, PC as useDropdownSearch, Qv as WORKFLOW_WAIT_SUSPEND_TYPE, R_ as useToast, Ss as getChatMessages, Sx as SUB_AGENT_TASK_DIFFICULTIES, To as KeyboardShortcutTooltip_default, Tr as isCompactToolName, Uo as convertToDisplayDate, Vh as NEW_SESSION_PARAM, Vr as useProjectAgentsList, Wh as CHAT_MESSAGE_STATUS, XC as truncate$1, YC as N8nTooltip_default, Yv as APPROVAL_TOOL_NAME, Zv as WAIT_TOOL_NAME, _C as N8nOption_default, _s as getAgentBackgroundJobs, aC as N8nLink_default, as as cancelAgentChatExecution, aw as _plugin_vue_export_helper_default, cc as usePushConnectionStore, ci as useKeybindings, cy as emptyChildTrace, eb as isRecord, ew as N8nIconButton_default, ey as N8N_CHAT_ACTION_TOOL_NAME, fS as AiActivityStepGroup_default, gc as resolveFileMimeType, gm as scrubSecretsInText, ir as AgentPersonalisationIcon_default, iy as richMessageSchema, js as removeAgentQueuedMessage, mC as N8nSelect_default, mS as AiActivityStepChevron_default, mc as convertFileToBinaryData, nw as N8nIcon_default, os as cancelAgentChatRun, oy as PROVIDER_CAPABILITIES, pS as AnimatedCollapsibleContent_default, qC as N8nText_default, qh as AGENT_PREVIEW_VIEW, ru as useClipboard, ry as richCardComponentSchema, ss as clearTestChatMessages, sy as applyForwardedChildChunk, tw as N8nButton_default, uS as AiActivityStep_default, uw as useI18n, vs as getAgentChatQueue, ws as getTestChatMessages, yS as N8nSwitch_default, yf as useProjectsStore, zC as DropdownMenu_default, zh as CONTINUE_SESSION_ID_PARAM, zp as DEFAULT_PROJECT_ICON, zx as useMessage } from "./app-DPWSzjF9.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-DxNy4zTA.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-DyOt7p9m.js";
import { a as ChatInputBase_default, n as AttachmentPreview_default, o as ChatHistoryDropdown_default, t as EXTENDED_PROMPT_MAX_LENGTH } from "./constants-CsKFZlMm.js";
import { t as formatBytes } from "./bytes-B9Bx-TZz.js";
//#region src/features/agents/composables/useAgentProjectBreadcrumb.ts
function useAgentProjectBreadcrumb(projectId) {
	const projectsStore = useProjectsStore();
	const i18n = useI18n();
	const isPersonalProject = computed(() => projectsStore.personalProject?.id === projectId.value);
	const project = computed(() => {
		if (isPersonalProject.value) return projectsStore.personalProject;
		if (projectsStore.currentProject?.id === projectId.value) return projectsStore.currentProject;
		return projectsStore.myProjects.find((item) => item.id === projectId.value);
	});
	return {
		projectName: computed(() => isPersonalProject.value ? i18n.baseText("projects.menu.personal") : project.value?.name ?? null),
		projectIcon: computed(() => {
			if (isPersonalProject.value) return {
				type: "icon",
				value: "user"
			};
			return isIconOrEmoji(project.value?.icon) ? project.value.icon : DEFAULT_PROJECT_ICON;
		})
	};
}
//#endregion
//#region src/features/agents/composables/agentTelemetry.utils.ts
/**
* Internal helper used to compute a stable 16-char hex `config_version` join
* key. Not a privacy mechanism — agent payloads carry the raw config fields.
*/
async function sha256Hex16(input) {
	const bytes = new TextEncoder().encode(input);
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}
function toolIdentifier(ref) {
	if (ref.type === "custom") return ref.id ?? "";
	if (ref.type === "workflow") return ref.name ?? ref.workflow ?? "";
	return ref.name ?? ref.node?.nodeType ?? "";
}
function toolIdentifiersFromConfig(config) {
	return (config?.tools ?? []).map(toolIdentifier).filter(Boolean).sort();
}
function skillIdentifiersFromConfig(config) {
	return (config?.skills ?? []).map((ref) => ref.id).filter(Boolean).sort();
}
function taskIdentifiersFromConfig(config) {
	return Array.from(new Set((config?.tasks ?? []).map((ref) => ref.id).filter(Boolean))).sort();
}
async function buildAgentConfigFingerprint(config, connectedTriggers, additionalConfiguredTriggers = []) {
	const instructions = config?.instructions ?? "";
	const tools = toolIdentifiersFromConfig(config);
	const skills = skillIdentifiersFromConfig(config);
	const tasks = taskIdentifiersFromConfig(config);
	const configuredTriggers = new Set([...(config?.integrations ?? []).filter((integration) => !isDraftIntegration(integration)).map((integration) => integration.type), ...additionalConfiguredTriggers]);
	const triggers = connectedTriggers.filter((trigger) => configuredTriggers.has(trigger)).sort();
	const vectorStores = (config?.vectorStores ?? []).map((store) => `${store.provider}:${store.name}`).sort();
	const memory = config?.memory ? {
		enabled: config.memory.enabled,
		storage: config.memory.storage
	} : null;
	const model = config?.model ?? null;
	return {
		instructions,
		tools,
		skills,
		tasks,
		triggers,
		vector_stores: vectorStores,
		memory,
		model,
		config_version: await sha256Hex16(JSON.stringify({
			instructions,
			tools,
			skills,
			tasks,
			triggers,
			vector_stores: vectorStores,
			memory,
			model
		}))
	};
}
function deriveAgentStatus(agent) {
	if (!agent?.activeVersionId) return "draft";
	return agent.versionId === agent.activeVersionId ? "production" : "draft";
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderSession.ts
/**
* Max chars for session-name display in the preview breadcrumb dropdown trigger
* and its menu rows. Long titles otherwise crowd the header actions.
*/
var SESSION_TITLE_MAX_CHARS = 64;
/**
* Owns the preview chat-session state:
*
* - `continueSessionId` — set via the URL query string for shareable deep-links
*   into a specific session. Takes precedence when route backing is enabled.
* - `activeChatSessionId` — the in-tab session selection. Used exclusively
*   when route backing is disabled and as a fallback otherwise.
*
* Plus the session-picker dropdown menu and titles, all driven off the
* `agentSessionsStore` thread list.
*/
function useAgentBuilderSession(options) {
	const selection = useSessionSelection(options.routeBacked);
	return {
		...selection,
		...useSessionMetadata(options, selection.effectiveSessionId),
		...useSessionDeletion(options, selection)
	};
}
function useSessionSelection(routeBacked) {
	const route = useRoute();
	const router = useRouter();
	const activeChatSessionId = ref(null);
	const ephemeralSessionId = ref(null);
	const locallyMintedSessionId = ref(null);
	const { continueSessionId, pendingRouteSessionId } = useSessionRoute(routeBacked, activeChatSessionId, ephemeralSessionId, locallyMintedSessionId);
	const effectiveSessionId = computed(() => (routeBacked.value ? pendingRouteSessionId.value ?? continueSessionId.value : void 0) ?? activeChatSessionId.value ?? void 0);
	const currentSessionIsEphemeral = computed(() => ephemeralSessionId.value !== null && ephemeralSessionId.value === effectiveSessionId.value);
	const currentSessionIsLocallyMinted = computed(() => locallyMintedSessionId.value !== null && locallyMintedSessionId.value === effectiveSessionId.value);
	function selectSession(id, ephemeral = id === ephemeralSessionId.value) {
		activeChatSessionId.value = id;
		ephemeralSessionId.value = ephemeral ? id : null;
		locallyMintedSessionId.value = ephemeral ? id : null;
		if (!routeBacked.value) return;
		pendingRouteSessionId.value = id;
		const query = {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		};
		if (ephemeral) delete query[NEW_SESSION_PARAM];
		router.replace({ query });
	}
	function setSessionInUrl(id) {
		selectSession(id);
	}
	function clearContinueSessionParam() {
		if (!routeBacked.value) return;
		const { [CONTINUE_SESSION_ID_PARAM]: _dropped, ...rest } = route.query;
		router.replace({ query: rest });
	}
	function onSessionPick(id) {
		if (id === "__empty__") return;
		selectSession(id);
	}
	function onNewChat() {
		selectSession(crypto.randomUUID(), true);
	}
	function markSessionCreated(sessionId) {
		if (ephemeralSessionId.value === sessionId) ephemeralSessionId.value = null;
	}
	return {
		activeChatSessionId,
		continueSessionId,
		effectiveSessionId,
		currentSessionIsEphemeral,
		currentSessionIsLocallyMinted,
		setSessionInUrl,
		clearContinueSessionParam,
		onSessionPick,
		onNewChat,
		markSessionCreated
	};
}
function useSessionRoute(routeBacked, activeChatSessionId, ephemeralSessionId, locallyMintedSessionId) {
	const route = useRoute();
	const pendingRouteSessionId = ref(null);
	const continueSessionId = computed(() => {
		const raw = route.query[CONTINUE_SESSION_ID_PARAM];
		const value = Array.isArray(raw) ? raw[0] : raw;
		return typeof value === "string" && value.length > 0 ? value : void 0;
	});
	watch([routeBacked, continueSessionId], ([isRouteBacked, routeSessionId]) => {
		if (!isRouteBacked) {
			pendingRouteSessionId.value = null;
			return;
		}
		if (routeSessionId && routeSessionId !== locallyMintedSessionId.value) {
			ephemeralSessionId.value = null;
			locallyMintedSessionId.value = null;
		}
		if (pendingRouteSessionId.value !== null) pendingRouteSessionId.value = null;
		if (routeSessionId) activeChatSessionId.value = routeSessionId;
	}, { immediate: true });
	watch(activeChatSessionId, (sessionId) => {
		if (sessionId === null) {
			pendingRouteSessionId.value = null;
			ephemeralSessionId.value = null;
			locallyMintedSessionId.value = null;
		} else {
			if (locallyMintedSessionId.value !== null && sessionId !== locallyMintedSessionId.value) {
				ephemeralSessionId.value = null;
				locallyMintedSessionId.value = null;
			}
			if (routeBacked.value && sessionId !== continueSessionId.value) pendingRouteSessionId.value = sessionId;
		}
	});
	return {
		continueSessionId,
		pendingRouteSessionId
	};
}
function useSessionMetadata({ projectId, agentId }, effectiveSessionId) {
	const sessionsStore = useAgentSessionsStore();
	const i18n = useI18n();
	const threadTitleOf = useThreadTitle();
	const previewThreads = computed(() => sessionsStore.previewThreads.filter((thread) => thread.canContinueInPreview && thread.projectId === projectId.value && thread.agentId === agentId.value));
	const isCurrentSession = (thread) => thread?.id === effectiveSessionId.value && thread?.projectId === projectId.value && thread?.agentId === agentId.value;
	const currentSession = computed((previous) => previewThreads.value.find(isCurrentSession) ?? sessionsStore.threads.find(isCurrentSession) ?? (isCurrentSession(previous) ? previous : void 0));
	return {
		previewThreads,
		currentSession,
		currentSessionHasMessages: computed(() => Boolean(currentSession.value)),
		currentSessionTitle: computed(() => {
			if (!effectiveSessionId.value) return "";
			if (!currentSession.value) return i18n.baseText("agents.builder.chat.newChat.label");
			return truncate$1(threadTitleOf(currentSession.value), SESSION_TITLE_MAX_CHARS);
		}),
		sessionMenu: computed(() => previewThreads.value.map((thread) => ({
			id: thread.id,
			title: threadTitleOf(thread),
			label: truncate$1(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS),
			updatedAt: thread.updatedAt
		})))
	};
}
function useSessionDeletion({ projectId, agentId }, { effectiveSessionId, onNewChat }) {
	const sessionsStore = useAgentSessionsStore();
	const i18n = useI18n();
	const message = useMessage();
	const toast = useToast();
	const isDeletingSession = ref(false);
	let isDisposed = false;
	if (getCurrentScope()) onScopeDispose(() => isDisposed = true);
	async function deleteSession(sessionId) {
		if (isDisposed || isDeletingSession.value || !sessionId) return false;
		const targetProjectId = projectId.value;
		const targetAgentId = agentId.value;
		if (!targetProjectId || !targetAgentId) return false;
		const isTargetCurrent = () => !isDisposed && projectId.value === targetProjectId && agentId.value === targetAgentId;
		isDeletingSession.value = true;
		try {
			if (await message.confirm(i18n.baseText("agentSessions.deleteConfirm.message"), i18n.baseText("agentSessions.deleteConfirm.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("agentSessions.deleteConfirm.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm" || !isTargetCurrent()) return false;
			await sessionsStore.deleteThread(targetProjectId, targetAgentId, sessionId);
			if (!isTargetCurrent()) return false;
			toast.showMessage({
				title: i18n.baseText("agentSessions.showMessage.deleted"),
				type: "success"
			});
			if (effectiveSessionId.value === sessionId) onNewChat();
			return true;
		} catch (error) {
			if (isTargetCurrent()) toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			return false;
		} finally {
			isDeletingSession.value = false;
		}
	}
	return {
		isDeletingSession,
		deleteSession
	};
}
//#endregion
//#region src/features/agents/utils/relative-time.ts
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
/**
* Returns a short, recognisable description of when something happened:
*
*   - within 5s   → "just now"
*   - within 1m   → "Ns ago"
*   - within 1h   → "Nm ago"
*   - within 24h  → "Nh ago"
*   - calendar day = previous local day → "Yesterday"
*   - older       → short locale date, e.g. "Oct 3" / "3 Oct"
*
* The shared `app/components/TimeAgo.vue` (timeago.js-based) also exists, but
* it walks the full seconds→years ladder with no "Yesterday" step and never
* falls back to an absolute date — wrong shape for a chat-history list where
* old sessions should drop to a date so the dropdown stays scannable.
*/
function formatRelativeTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = date instanceof Date ? date : new Date(date);
	const diff = now.getTime() - past.getTime();
	if (diff < 5 * SECOND) return i18n.justNow;
	if (diff < MINUTE) return i18n.secondsAgo(Math.floor(diff / SECOND));
	if (diff < HOUR) return i18n.minutesAgo(Math.floor(diff / MINUTE));
	if (isSameLocalDay(past, now)) return i18n.hoursAgo(Math.floor(diff / HOUR));
	if (isYesterdayLocal(past, now)) return i18n.yesterday;
	return past.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function isSameLocalDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isYesterdayLocal(past, now) {
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	return isSameLocalDay(past, yesterday);
}
/**
* Label for a ChatGPT-style timestamp divider above a chat message:
*
*   - same local day      → "Today at {time}"
*   - previous local day  → "Yesterday at {time}"
*   - older                → "{weekday}, {month} {day} at {time}"
*
* Time and date formatting are left to the viewer's locale (12h/24h, date order).
*/
function formatChatDividerTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = new Date(date);
	const time = past.toLocaleTimeString(void 0, {
		hour: "2-digit",
		minute: "2-digit"
	});
	if (isSameLocalDay(past, now)) return i18n.today(time);
	if (isYesterdayLocal(past, now)) return i18n.yesterday(time);
	const dateLabel = past.toLocaleDateString(void 0, {
		weekday: "short",
		month: "short",
		day: "numeric"
	});
	return i18n.date(dateLabel, time);
}
function useChatDividerTimestamp() {
	const i18n = useI18n();
	const strings = {
		today: (time) => i18n.baseText("agents.chat.timestamp.today", { interpolate: { time } }),
		yesterday: (time) => i18n.baseText("agents.chat.timestamp.yesterday", { interpolate: { time } }),
		date: (date, time) => i18n.baseText("agents.chat.timestamp.date", { interpolate: {
			date,
			time
		} })
	};
	return (date) => formatChatDividerTimestamp(date, strings);
}
function useRelativeTimestamp() {
	const i18n = useI18n();
	const strings = {
		justNow: i18n.baseText("agents.relativeTime.justNow"),
		secondsAgo: (n) => i18n.baseText("agents.relativeTime.secondsAgo", { interpolate: { count: String(n) } }),
		minutesAgo: (n) => i18n.baseText("agents.relativeTime.minutesAgo", { interpolate: { count: String(n) } }),
		hoursAgo: (n) => i18n.baseText("agents.relativeTime.hoursAgo", { interpolate: { count: String(n) } }),
		yesterday: i18n.baseText("agents.relativeTime.yesterday")
	};
	return (date) => formatRelativeTimestamp(date, strings);
}
//#endregion
//#region src/features/ai/shared/thinking.utils.ts
/** First sentence of streamed markdown-like text, for thinking status lines. */
function firstSentence(content) {
	const plain = content.replace(/[*_`#]/g, "").trim();
	const match = plain.match(/^.*?[.!?](?=\s|$)/s);
	return (match ? match[0] : plain).trim();
}
//#endregion
//#region src/features/ai/shared/components/AiReasoningBlock.vue?vue&type=script&setup=true&lang.ts
var AiReasoningBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiReasoningBlock",
	props: {
		entry: {},
		streaming: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const label = computed(() => firstSentence(props.entry.content) || i18n.baseText("ai.reasoning"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiActivityStep_default), {
				label: label.value,
				loading: props.streaming
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningPanel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningScroll) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.reasoningContent) }, toDisplayString(props.entry.content), 3)], 2)], 2)]),
				_: 1
			}, 8, ["label", "loading"]);
		};
	}
});
var AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default = {
	reasoningPanel: "_reasoningPanel_1yb61_1",
	reasoningScroll: "_reasoningScroll_1yb61_10",
	reasoningContent: "_reasoningContent_1yb61_20"
};
var AiReasoningBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiReasoningBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useSubAgentNames.ts
/**
* Resolves sub-agent ids → friendly names for delegate labels. Wraps the
* cached/deduped project agents list and loads it lazily — only once the caller
* signals (via `isNeeded`) that the current content actually contains
* delegations. Shared by the chat tool step and the session timeline.
*/
function useSubAgentNames(projectId, isNeeded) {
	const { list, ensureLoaded } = useProjectAgentsList(projectId);
	const subAgentNameById = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const agent of list.value ?? []) map.set(agent.id, agent.name);
		return map;
	});
	watch([isNeeded, projectId], ([needed, id]) => {
		if (needed && id) ensureLoaded().catch(() => {});
	}, { immediate: true });
	return { subAgentNameById };
}
//#endregion
//#region src/features/ai/shared/agentsChat/delegateTool.ts
/**
* Name of the SDK tool a parent agent calls to hand a task to a sub-agent.
* Mirrors `DELEGATE_SUB_AGENT_TOOL_NAME` in `@n8n/agents` (not FE-importable),
* so the chat can special-case the tool call and render it as an expandable
* tool step.
*/
var DELEGATE_SUB_AGENT_TOOL_NAME = "delegate_subagent";
/** Mirrors `DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE` in `@n8n/agents`. */
var DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE = "agents.chat.delegate.childSuspendUnsupported";
var delegateInputSchema = objectType({
	subAgentId: stringType().min(1),
	taskName: stringType().optional(),
	difficulty: enumType(SUB_AGENT_TASK_DIFFICULTIES).optional()
});
var delegateOutputSchema = objectType({
	status: enumType([
		"completed",
		"failed",
		"suspended"
	]).optional(),
	answer: stringType().optional(),
	error: stringType().optional(),
	model: stringType().optional()
});
var SUB_AGENT_DIFFICULTY_I18N_KEY = {
	low: "agents.chat.difficulty.low",
	medium: "agents.chat.difficulty.medium",
	high: "agents.chat.difficulty.high"
};
function isDelegateSubAgentTool(toolName) {
	return toolName === DELEGATE_SUB_AGENT_TOOL_NAME;
}
/** Parse a delegate tool-call input; returns `undefined` when it isn't an object. */
function parseDelegateInput(input) {
	const result = delegateInputSchema.safeParse(input);
	return result.success ? result.data : void 0;
}
/**
* Parse a delegate tool-call output; returns `undefined` when it isn't an object
* (e.g. a rejected tool call whose output is the raw error string).
*/
function parseDelegateOutput(output) {
	const result = delegateOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function getDelegateDifficulty(input) {
	return parseDelegateInput(input)?.difficulty;
}
/** One-line localized difficulty label for a delegate tool call. */
function getDelegateDifficultySummary(input, i18n) {
	const difficulty = getDelegateDifficulty(input);
	return difficulty ? i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]) : void 0;
}
/** Localize a delegate tool error when it is a known i18n key. */
function formatDelegateError(error, i18n) {
	if (i18n && error === "agents.chat.delegate.childSuspendUnsupported") return i18n.baseText(DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE);
	return error;
}
/**
* True when a `delegate_subagent` call resolved with a failed result. Such a
* call settles successfully at the tool layer, so its step must be flipped to an
* error state explicitly (both live and on reload).
*/
function isFailedDelegateOutput(toolName, output) {
	if (!isDelegateSubAgentTool(toolName)) return false;
	return parseDelegateOutput(output)?.status === "failed";
}
/** Humanize a snake/kebab task name, e.g. `research_api` → `Research api`. */
function humanizeTaskName(taskName) {
	const normalized = taskName?.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	return normalized.charAt(0).toLocaleUpperCase() + normalized.slice(1);
}
/** Friendly label for a raw sub-agent id (delegate hints, todo delegateHint, etc.). */
function resolveSubAgentIdForDisplay(subAgentId, nameById) {
	if (subAgentId === "inline") return humanizeTaskName("inline");
	const resolved = nameById.get(subAgentId)?.trim();
	if (resolved) return resolved;
	return humanizeTaskName(subAgentId) || subAgentId;
}
function resolveSubAgentName(input, nameById) {
	const parsed = parseDelegateInput(input);
	const resolved = parsed?.subAgentId && parsed.subAgentId !== "inline" ? nameById.get(parsed.subAgentId)?.trim() : void 0;
	if (resolved) return resolved;
	return humanizeTaskName(parsed?.taskName);
}
/**
* Format a delegate label: `Sub-agent · <name>` when a name resolved, otherwise
* the bare `Sub-agent` fallback. Takes the i18n instance (rather than resolving
* keys at the call site) so the chat, timeline row, and detail panel stay in
* sync.
*/
function delegateLabel(i18n, name) {
	return name ? i18n.baseText("agents.chat.delegate.label", { interpolate: { name } }) : i18n.baseText("agents.chat.delegate.labelFallback");
}
//#endregion
//#region src/features/agents/utils/write-todos-tool.ts
/**
* Name of the SDK tool the parent agent calls to maintain a structured task list.
* Mirrors `WRITE_TODOS_TOOL_NAME` in `@n8n/agents` (not FE-importable).
*/
var WRITE_TODOS_TOOL_NAME = "write_todos";
var todoStatusSchema = enumType([
	"pending",
	"in_progress",
	"completed",
	"blocked",
	"cancelled"
]);
var todoDifficultySchema = enumType(SUB_AGENT_TASK_DIFFICULTIES);
var todoItemSchema = objectType({
	id: stringType().min(1),
	content: stringType().min(1),
	status: todoStatusSchema,
	difficulty: todoDifficultySchema.optional(),
	delegateHint: objectType({
		subAgentId: stringType().optional(),
		expectedOutput: stringType().optional()
	}).optional()
});
var writeTodosOutputSchema = objectType({
	status: literalType("ok"),
	todoCount: numberType(),
	todos: arrayType(todoItemSchema)
});
var writeTodosFailedOutputSchema = objectType({
	status: literalType("failed"),
	error: stringType()
});
var STATUS_I18N_KEY = {
	in_progress: "agents.chat.writeTodos.status.inProgress",
	pending: "agents.chat.writeTodos.status.pending",
	completed: "agents.chat.writeTodos.status.completed",
	blocked: "agents.chat.writeTodos.status.blocked",
	cancelled: "agents.chat.writeTodos.status.cancelled"
};
var STATUS_ORDER = [
	"in_progress",
	"pending",
	"completed",
	"blocked",
	"cancelled"
];
function isWriteTodosTool(toolName) {
	return toolName === WRITE_TODOS_TOOL_NAME;
}
function parseWriteTodosOutput(output) {
	const result = writeTodosOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function parseWriteTodosFailedOutput(output) {
	const result = writeTodosFailedOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function formatWriteTodosErrorText(output) {
	const failed = parseWriteTodosFailedOutput(output);
	if (failed) {
		const error = failed.error.trim();
		return error.length > 0 ? error : void 0;
	}
	if (typeof output === "string") {
		const trimmed = output.trim();
		return trimmed.length > 0 ? trimmed : void 0;
	}
}
function writeTodosLabel(i18n) {
	return i18n.baseText("agents.chat.writeTodos.label");
}
function countIncompleteTodos(todos) {
	return todos.filter((todo) => todo.status !== "completed").length;
}
function writeTodosSummaryLabel(i18n, incompleteTodoCount) {
	if (incompleteTodoCount === 0) return i18n.baseText("agents.chat.writeTodos.summary.done");
	const key = incompleteTodoCount === 1 ? "agents.chat.writeTodos.summary.one" : "agents.chat.writeTodos.summary.other";
	return i18n.baseText(key, { interpolate: { count: String(incompleteTodoCount) } });
}
function writeTodosStatusLabel(i18n, status) {
	return i18n.baseText(STATUS_I18N_KEY[status]);
}
function writeTodosDifficultyLabel(i18n, difficulty) {
	return i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]);
}
function formatTodoItem(todo, i18n, subAgentNameById) {
	const hints = [];
	if (todo.difficulty) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.difficulty")}: ${writeTodosDifficultyLabel(i18n, todo.difficulty)}`);
	if (todo.delegateHint?.subAgentId) {
		const displayName = resolveSubAgentIdForDisplay(todo.delegateHint.subAgentId, subAgentNameById ?? /* @__PURE__ */ new Map());
		hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.subAgent")}: ${displayName}`);
	}
	if (todo.delegateHint?.expectedOutput) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.expectedOutput")}: ${todo.delegateHint.expectedOutput}`);
	const suffix = hints.length > 0 ? ` _(${hints.join("; ")})_` : "";
	return `- ${todo.content}${suffix}`;
}
/** Format parsed write_todos output as Markdown for the expandable details panel. */
function formatWriteTodosMarkdown(output, i18n, subAgentNameById) {
	const errorText = formatWriteTodosErrorText(output);
	if (errorText) return errorText;
	const parsed = parseWriteTodosOutput(output);
	if (!parsed || !i18n || parsed.todos.length === 0) return void 0;
	const sections = [];
	for (const status of STATUS_ORDER) {
		const items = parsed.todos.filter((todo) => todo.status === status);
		if (items.length === 0) continue;
		sections.push(`**${writeTodosStatusLabel(i18n, status)}**`);
		sections.push(items.map((todo) => formatTodoItem(todo, i18n, subAgentNameById)).join("\n"));
	}
	return sections.join("\n\n");
}
//#endregion
//#region src/features/agents/utils/tool-call-details.ts
function isSettledState(state) {
	return state === TOOL_CALL_STATE.DONE || state === TOOL_CALL_STATE.ERROR;
}
function formatDelegateDetails(output, i18n) {
	const parsed = parseDelegateOutput(output);
	if (!parsed) return void 0;
	const answer = parsed.answer?.trim();
	if (answer) return answer;
	const error = parsed.error?.trim();
	if (error) return formatDelegateError(error, i18n);
}
function formatExpandableDetails(toolName, output, i18n, subAgentNameById) {
	if (isDelegateSubAgentTool(toolName)) return formatDelegateDetails(output, i18n);
	if (isWriteTodosTool(toolName)) return formatWriteTodosMarkdown(output, i18n, subAgentNameById);
}
/**
* Returns Markdown/text for the expandable tool-call details panel.
* Only `delegate_subagent` and `write_todos` have purpose-built detail views;
* other tools are not expandable until their UX is designed.
*/
function getToolCallDetails(tc, i18n, subAgentNameById) {
	if (!isSettledState(tc.state)) return void 0;
	return formatExpandableDetails(tc.tool, tc.output, i18n, subAgentNameById);
}
//#endregion
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
var AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: {
		toolCalls: {},
		projectId: {},
		canFixWithAssistant: { type: Boolean },
		executionId: {}
	},
	emits: ["fixWithAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const showFix = computed(() => Boolean(props.canFixWithAssistant && props.executionId));
		const fixableFailures = computed(() => {
			if (!showFix.value) return [];
			const failures = [];
			for (const toolCall of props.toolCalls) {
				if (toolCall.state !== TOOL_CALL_STATE.ERROR) continue;
				const error = toolStepError(toolCall)?.trim();
				if (!error) continue;
				failures.push({
					toolCallId: toolCall.toolCallId,
					toolName: toolCall.tool,
					toolDisplayName: toolStepLabel(toolCall),
					error,
					...toolCall.startTime !== void 0 ? { startedAt: toolCall.startTime } : {},
					...toolCall.endTime !== void 0 ? { endedAt: toolCall.endTime } : {}
				});
			}
			return failures;
		});
		const fixableErrorTexts = computed(() => {
			return [...new Set(fixableFailures.value.map(({ error }) => error))];
		});
		function toolCallsNeedSubAgentNames(toolCalls) {
			return toolCalls.some((tc) => {
				if (isDelegateSubAgentTool(tc.tool)) return true;
				if (!isWriteTodosTool(tc.tool)) return false;
				return parseWriteTodosOutput(tc.output)?.todos.some((todo) => Boolean(todo.delegateHint?.subAgentId)) ?? false;
			});
		}
		const { subAgentNameById } = useSubAgentNames(toRef(() => props.projectId ?? ""), () => toolCallsNeedSubAgentNames(props.toolCalls));
		function getToolDisplayName(toolName, output) {
			return resolveToolNameForDisplay(toolName, i18n, output);
		}
		function toolStepLabel(tc, isCompact = false) {
			if (isDelegateSubAgentTool(tc.tool)) return i18n.baseText("agents.chat.delegate.labelFallback");
			if (isWriteTodosTool(tc.tool)) return writeTodosLabel(i18n);
			return getToolDisplayName(tc.tool, isCompact ? tc.output : void 0);
		}
		function toolStepMetadata(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return [resolveSubAgentName(tc.input, subAgentNameById.value), getDelegateDifficultySummary(tc.input, i18n)].filter((part) => Boolean(part));
			if (isWriteTodosTool(tc.tool)) {
				const parsed = parseWriteTodosOutput(tc.output);
				if (parsed) return [writeTodosSummaryLabel(i18n, countIncompleteTodos(parsed.todos))];
			}
			if (tc.displaySummary) return [tc.displaySummary];
			return [];
		}
		function hasToolData(tc) {
			return tc.input !== void 0 || tc.output !== void 0;
		}
		/** Render a delegated child's live steps through this same component, so they look
		*  identical to the parent's own tool steps. */
		function childToolCalls(steps) {
			return steps.map((step) => ({
				tool: step.toolName,
				toolCallId: step.toolCallId,
				state: step.running ? TOOL_CALL_STATE.RUNNING : TOOL_CALL_STATE.DONE
			}));
		}
		/** Traces recorded before empty segments were dropped can still carry reasoning
		*  the provider never revealed, which would render as blank rows. */
		function childReasoningSegments(childProgress) {
			return childProgress.reasoningSegments.filter((segment) => segment.content.length > 0);
		}
		function formatToolData(value) {
			if (typeof value === "string") return value;
			return JSON.stringify(value, null, 2) ?? String(value);
		}
		function isEmptyToolErrorPayload(value) {
			if (value === void 0 || value === null) return true;
			if (typeof value === "string") return value.trim().length === 0;
			if (typeof value === "object" && !Array.isArray(value)) return Object.keys(value).length === 0;
			return false;
		}
		function toolStepView(tc) {
			const isCompact = tc.state === TOOL_CALL_STATE.DONE && isCompactToolName(tc.tool, tc.output);
			const details = isCompact ? "" : getToolCallDetails(tc, i18n, subAgentNameById.value) ?? "";
			const metadata = toolStepMetadata(tc);
			const hasChildProgress = Boolean(tc.childProgress);
			return {
				label: [toolStepLabel(tc, isCompact), ...metadata].join(" · "),
				details,
				hasRawData: !isCompact && details.length === 0 && hasToolData(tc) && !hasChildProgress,
				expandable: !isCompact && (details.length > 0 || hasToolData(tc) || hasChildProgress)
			};
		}
		function toolStepError(tc) {
			if (tc.state !== TOOL_CALL_STATE.ERROR) return void 0;
			if (isEmptyToolErrorPayload(tc.output)) return i18n.baseText("agents.chat.toolError.generic");
			return formatToolData(tc.output);
		}
		function emitFixWithAssistant() {
			if (fixableFailures.value.length === 0) return;
			emit("fixWithAssistant", fixableFailures.value);
		}
		function isToolStepLoading(tc) {
			return tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING || tc.state === TOOL_CALL_STATE.SUSPENDED;
		}
		function groupLabel() {
			return i18n.baseText("instanceAi.activitySummary.toolCalls", {
				adjustToNumber: props.toolCalls.length,
				interpolate: { count: String(props.toolCalls.length) }
			});
		}
		function hasActiveToolCall() {
			return props.toolCalls.some((tc) => tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING);
		}
		return (_ctx, _cache) => {
			const _component_AgentChatToolSteps = resolveComponent("AgentChatToolSteps", true);
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.toolSteps) }, [__props.toolCalls.length > 1 ? (openBlock(), createBlock(unref(AiActivityStepGroup_default), {
				key: 0,
				label: groupLabel(),
				size: "small",
				loading: hasActiveToolCall()
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.toolCalls, (tc) => {
					return openBlock(), createElementBlock(Fragment, { key: tc.toolCallId }, [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createBlock(unref(AiActivityStep_default), {
							key: `${tc.toolCallId}-${view.label}`,
							label: view.label,
							loading: isToolStepLoading(tc),
							error: toolStepError(tc),
							"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
							"has-content": view.expandable
						}, {
							default: withCtx(() => [
								tc.childProgress ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.childProgress),
									"data-test-id": "agent-chat-delegate-child-progress"
								}, [
									tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
										key: 0,
										"tool-calls": childToolCalls(tc.childProgress.steps),
										"project-id": __props.projectId
									}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
										return openBlock(), createBlock(AiReasoningBlock_default, {
											key: segment.id,
											entry: segment,
											streaming: segment.endTime === void 0
										}, null, 8, ["entry", "streaming"]);
									}), 128)),
									tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
										key: 1,
										"model-value": tc.childProgress.text,
										readonly: "",
										variant: "ghost",
										"show-toolbar": "never",
										"max-height": "240px",
										class: normalizeClass(_ctx.$style.answer)
									}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
								], 2)) : createCommentVNode("", true),
								view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": view.details,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
								view.hasRawData ? (openBlock(), createElementBlock("div", {
									key: 2,
									class: normalizeClass(_ctx.$style.toolDataList)
								}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
							]),
							_: 2
						}, 1032, [
							"label",
							"loading",
							"error",
							"hide-error-callout",
							"has-content"
						]);
					}), 128))], 64);
				}), 128))]),
				_: 1
			}, 8, ["label", "loading"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.toolCalls, (tc) => {
				return openBlock(), createBlock(unref(AiActivityStep_default), {
					key: tc.toolCallId,
					label: toolStepView(tc).label,
					loading: isToolStepLoading(tc),
					error: toolStepError(tc),
					"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
					"has-content": toolStepView(tc).expandable
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createElementBlock(Fragment, { key: view.label }, [
							tc.childProgress ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.childProgress),
								"data-test-id": "agent-chat-delegate-child-progress"
							}, [
								tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
									key: 0,
									"tool-calls": childToolCalls(tc.childProgress.steps),
									"project-id": __props.projectId
								}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
								(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
									return openBlock(), createBlock(AiReasoningBlock_default, {
										key: segment.id,
										entry: segment,
										streaming: segment.endTime === void 0
									}, null, 8, ["entry", "streaming"]);
								}), 128)),
								tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": tc.childProgress.text,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
							], 2)) : createCommentVNode("", true),
							view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
								key: 1,
								"model-value": view.details,
								readonly: "",
								variant: "ghost",
								"show-toolbar": "never",
								"max-height": "240px",
								class: normalizeClass(_ctx.$style.answer)
							}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
							view.hasRawData ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style.toolDataList)
							}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
						], 64);
					}), 128))]),
					_: 2
				}, 1032, [
					"label",
					"loading",
					"error",
					"hide-error-callout",
					"has-content"
				]);
			}), 128)), fixableErrorTexts.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "danger",
				"data-test-id": "agent-chat-tool-fix-with-assistant-callout"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "subtle",
					"data-test-id": "agent-chat-tool-fix-with-assistant",
					onClick: emitFixWithAssistant
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "sparkles",
						size: "small"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.fixWithAssistant")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [fixableErrorTexts.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(fixableErrorTexts.value[0]), 1)], 64)) : (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.errorList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixableErrorTexts.value, (error) => {
					return openBlock(), createElementBlock("li", { key: error }, toDisplayString(error), 1);
				}), 128))], 2))]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default = {
	toolSteps: "_toolSteps_brv5u_2",
	errorList: "_errorList_brv5u_6",
	childProgress: "_childProgress_brv5u_15",
	answer: "_answer_brv5u_28",
	toolDataList: "_toolDataList_brv5u_38",
	toolDataSection: "_toolDataSection_brv5u_46",
	toolDataLabel: "_toolDataLabel_brv5u_54",
	toolDataContent: "_toolDataContent_brv5u_62"
};
var AgentChatToolSteps_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSessionHistoryDropdown.vue
var AgentSessionHistoryDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionHistoryDropdown",
	props: {
		sessionOptions: {},
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		isDeletingSession: {
			type: Boolean,
			default: false
		}
	},
	emits: ["select", "delete"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sessionsStore = useAgentSessionsStore();
		const deleteActions = [{
			id: "delete",
			label: i18n.baseText("agentSessions.delete"),
			icon: "trash-2",
			variant: "destructive"
		}];
		const { search, filteredItems, handleSearch } = useDropdownSearch(computed(() => props.sessionOptions.map((option) => ({
			id: option.id,
			label: option.label ?? option.title,
			disabled: option.disabled,
			data: {
				fullTitle: option.title,
				updatedAt: option.updatedAt,
				actions: !option.disabled && props.canDeleteSession ? deleteActions : void 0
			}
		}))), {
			isSearchable: (item) => !item.disabled,
			searchFields: (item) => [item.label, item.data?.fullTitle]
		});
		const emptyText = computed(() => i18n.baseText(search.value.trim() ? "agents.builder.chat.sessionPicker.noMatch" : "agents.builder.chat.sessionPicker.empty"));
		function requestDeletion(actionId, sessionId) {
			if (actionId !== "delete" || !props.canDeleteSession || props.isDeletingSession) return;
			emit("delete", sessionId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatHistoryDropdown_default, {
				items: unref(filteredItems),
				"search-placeholder": unref(i18n).baseText("agents.builder.chat.sessionPicker.searchPlaceholder"),
				"empty-text": emptyText.value,
				loading: unref(sessionsStore).loading,
				"action-button-label": unref(i18n).baseText("agentSessions.actions"),
				"actions-disabled": props.isDeletingSession,
				"content-test-id": "agent-preview-session-list",
				"data-test-id": "agent-preview-session-switcher",
				onSearch: unref(handleSearch),
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("select", $event)),
				onAction: requestDeletion
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
				_: 3
			}, 8, [
				"items",
				"search-placeholder",
				"empty-text",
				"loading",
				"action-button-label",
				"actions-disabled",
				"onSearch"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/shared/agentsChat/n8nChatInteraction.ts
/**
* Single-operation integration action tool input — any `<platform>_action`
* tool's `{ action, input: { message: { text?, card? } } }` shape, with the
* message validated against the SAME `richMessageSchema` the backend tool
* boundary uses (`@n8n/api-types/agents/rich-card.schema.ts`). Batch inputs
* (`actions: [...]`) never suspend and don't match this schema; they fall
* back to raw JSON rendering.
*/
var actionToolInputSchema = objectType({
	action: stringType(),
	input: objectType({ message: richMessageSchema }).passthrough()
}).passthrough();
/** Resume payload shape shared with the platform card path (component-mapper / bridge). */
var n8nChatResumeValueSchema = objectType({
	type: enumType(["button", "select"]),
	value: stringType(),
	id: stringType().optional()
}).passthrough();
var INTERACTIVE_COMPONENT_TYPES = new Set([
	"button",
	"select",
	"radio_select"
]);
/**
* Mirrors the backend's shouldAwaitResponse: explicit flag or interactive components.
*
* @see shouldAwaitResponse in packages/cli/src/modules/agents/integrations/integration-tool-execution.ts
*/
function isAwaitingCard(card) {
	if (card.awaitResponse === true) return true;
	return card.components.some((component) => INTERACTIVE_COMPONENT_TYPES.has(component.type) || component.type === "section" && component.button !== void 0);
}
/**
* Parse any integration action tool input (slack_action, chat_action, …)
* into its renderable card, or undefined when it carries none. Used for the
* live n8n chat cards and for session-log card previews of every integration.
*/
function parseIntegrationActionCard(input) {
	const parsed = actionToolInputSchema.safeParse(input);
	if (!parsed.success) return void 0;
	const { message } = parsed.data.input;
	if (!message.card) return void 0;
	return {
		text: message.text,
		card: message.card
	};
}
/** Parse a persisted/live chat_action tool input into a renderable card, or undefined. */
function parseN8nChatActionInput(input) {
	return parseIntegrationActionCard(input);
}
/**
* Suspend payload of a workflow tool parked on a Wait node — the same card the
* chat platforms render, so it goes through the same card renderer here.
*
* @see buildWaitCard in packages/cli/src/modules/agents/tools/workflow-tool-factory.ts
*/
var waitSuspendPayloadSchema = objectType({
	type: literalType(WORKFLOW_WAIT_SUSPEND_TYPE),
	title: stringType(),
	components: arrayType(richCardComponentSchema).min(1)
});
/** Parse a Wait-node suspend payload into a renderable card, or undefined. */
function parseWaitSuspendPayload(payload) {
	const parsed = waitSuspendPayloadSchema.safeParse(payload);
	if (!parsed.success) return void 0;
	return { card: {
		title: parsed.data.title,
		components: parsed.data.components
	} };
}
/**
* Human-readable label for a card's resume value: the clicked button's label
* or the chosen option's label, falling back to the raw value. Used for the
* tool-step summary once an answered card clears from the chat.
*/
function cardChoiceLabel(card, resume) {
	if (resume.type === "button") {
		for (const component of card.components) {
			const candidates = component.type === "button" ? [component] : component.type === "section" && component.button ? [component.button] : [];
			for (const button of candidates) if (button.value === resume.value) return button.label ?? button.text ?? resume.value;
		}
		return resume.value;
	}
	for (const component of card.components) {
		if (component.type !== "select" && component.type !== "radio_select") continue;
		if (resume.id !== void 0 && component.id !== void 0 && component.id !== resume.id) continue;
		const option = component.options.find((candidate) => candidate.value === resume.value);
		if (option) return option.label;
	}
	return resume.value;
}
//#endregion
//#region src/features/ai/shared/agentsChat/interactiveSummary.ts
/**
* Build a one-line human-readable label for a resolved interactive tool call.
* Used by `AgentChatToolSteps` to show the user's answer beside the tool name
* (e.g. "→ n8n_chat_action · Approve & Send") so resolved cards leave a compact
* trace in scrollback instead of vanishing.
*
* Returns `undefined` for non-interactive tools or when the output isn't
* shaped as expected — callers fall back to rendering just the tool name.
*/
function summariseToolCall(toolName, output, input) {
	if (!isRecord(output)) return void 0;
	if (toolName === "chat_action") {
		const resume = n8nChatResumeValueSchema.safeParse(output);
		if (!resume.success) return void 0;
		const parsed = parseN8nChatActionInput(input);
		if (!parsed) return resume.data.value;
		return cardChoiceLabel(parsed.card, resume.data);
	}
}
//#endregion
//#region src/features/ai/shared/agentsChat/messageMappers.ts
function syncLegacyInteractive(message) {
	const interactives = message.interactives;
	if (!interactives?.length) {
		delete message.interactive;
		return;
	}
	message.interactive = interactives.find((payload) => payload.resolvedAt === void 0) ?? interactives[0];
}
function getMessageInteractives(message) {
	if (message.interactives?.length) return message.interactives;
	return message.interactive ? [message.interactive] : [];
}
function setMessageInteractives(message, interactives) {
	if (interactives.length === 0) {
		delete message.interactives;
		delete message.interactive;
		return;
	}
	message.interactives = interactives;
	syncLegacyInteractive(message);
}
function upsertMessageInteractive(message, interactive) {
	const interactives = [...getMessageInteractives(message)];
	const index = interactives.findIndex((payload) => payload.toolCallId === interactive.toolCallId);
	if (index === -1) interactives.push(interactive);
	else interactives[index] = interactive;
	setMessageInteractives(message, interactives);
}
function getMessageInteractive(message, toolCallId) {
	return getMessageInteractives(message).find((payload) => payload.toolCallId === toolCallId);
}
function findOpenInteractive(messages) {
	for (const message of messages) {
		const open = getMessageInteractives(message).find((payload) => payload.resolvedAt === void 0);
		if (open) return open;
	}
}
/**
* The open interactive on the last turn, which is the one that owns the chat
* input and any steering. A parked run is always the tail of the transcript, so
* an unresolved card further up belongs to a turn the conversation already moved
* past — `findOpenInteractive` returns those too, and acting on them would
* answer or cancel the wrong tool call.
*/
function findTailOpenInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0);
}
/**
* The open interactive on the last turn that a steering message is allowed to
* cancel. A waiting card is never one: the workflow resumes it by itself, so
* cancelling it because the user typed would abandon a run they never asked to
* stop and leave the sub-workflow finishing into a checkpoint nobody reads.
* Stopping a wait is a deliberate act — the card's own button, or Stop.
*/
function findTailSteerableInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0 && payload.toolName !== "wait");
}
/** True when a suspend payload is the approval tool's renderable input. */
function isApprovalSuspendInput(value) {
	return parseApprovalInput(value) !== void 0;
}
function parseApprovalInput(value) {
	if (!isRecord(value)) return void 0;
	if (value.type !== "approval") return void 0;
	if (typeof value.toolName !== "string" || value.toolName.length === 0) return void 0;
	return {
		type: "approval",
		toolName: value.toolName,
		...typeof value.displayName === "string" && value.displayName.length > 0 && { displayName: value.displayName },
		args: value.args,
		...value.details !== void 0 && { details: value.details }
	};
}
function preserveApprovalDetails(next, previous) {
	const nextApproval = parseApprovalInput(next);
	const previousApproval = parseApprovalInput(previous);
	if (!nextApproval || nextApproval.details !== void 0 || previousApproval?.details === void 0) return next;
	return {
		...nextApproval,
		details: previousApproval.details
	};
}
function isDeclinedToolOutput(value) {
	return isRecord(value) && value.declined === true;
}
/**
* Given a tool call belonging to one of the interactive tools still rendered
* in agents chat (`approval`, `chat_action`) — or a workflow tool parked on a
* Wait node — reconstruct an `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present.
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*/
function rebuildInteractiveFromHistory(tc) {
	const approvalInput = parseApprovalInput(tc.suspendPayload) ?? parseApprovalInput(tc.input);
	if (approvalInput) {
		const resolved = tc.output !== void 0;
		return {
			toolCallId: tc.toolCallId,
			...resolved && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: APPROVAL_TOOL_NAME,
			input: approvalInput,
			...resolved && tc.canceled !== true && !isDelegateSubAgentTool(tc.tool) && { resolvedValue: { approved: !isDeclinedToolOutput(tc.output) } }
		};
	}
	const waitInput = parseWaitSuspendPayload(tc.suspendPayload);
	if (waitInput) {
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: WAIT_TOOL_NAME,
			input: waitInput,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
		};
	}
	if (tc.tool === "chat_action") {
		const input = parseN8nChatActionInput(tc.input);
		if (!input) return void 0;
		if (tc.output === void 0 && !isAwaitingCard(input.card)) return void 0;
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: N8N_CHAT_ACTION_TOOL_NAME,
			input,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
		};
	}
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive, we attach a reconstructed
* `InteractivePayload` so the UI re-renders the card in either its open
* (awaiting user) or resolved (disabled) state.
*/
function convertDbMessages(dbMessages) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === "user" ? "user" : msg.role === "assistant" ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const thinkingSegments = [];
		const toolCalls = [];
		const renderParts = [];
		const interactives = [];
		const attachments = [];
		let status;
		const failed = msg.executionStatus === "error" || msg.executionStatus === "interrupted";
		if (failed) status = CHAT_MESSAGE_STATUS.ERROR;
		else if (msg.executionStatus === "running") status = CHAT_MESSAGE_STATUS.STREAMING;
		for (const [partIndex, part] of msg.content.entries()) if (part.type === "text" && part.text) {
			text += part.text;
			renderParts.push({
				type: "text",
				text: part.text
			});
		} else if (part.type === "file" && part.fileId) attachments.push({
			fileId: part.fileId,
			fileName: part.fileName ?? "attachment",
			mimeType: part.mimeType ?? "application/octet-stream",
			sizeBytes: part.sizeBytes
		});
		else if (part.type === "reasoning" && part.text) {
			thinking += part.text;
			thinkingSegments.push({
				id: `${msg.id}:reasoning:${partIndex}`,
				content: part.text,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime }
			});
		} else if (part.type === "tool-call" && part.toolName) {
			let state;
			let output;
			const canceled = part.canceled === true;
			if (part.state === "resolved") {
				output = part.output;
				if (canceled) state = TOOL_CALL_STATE.CANCELLED;
				else if (isFailedDelegateOutput(part.toolName, part.output)) state = TOOL_CALL_STATE.ERROR;
				else state = TOOL_CALL_STATE.DONE;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else if (failed) {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else {
				state = TOOL_CALL_STATE.RUNNING;
				output = void 0;
			}
			const toolCall = {
				tool: part.toolName,
				toolCallId: part.toolCallId ?? "",
				input: part.input,
				...output !== void 0 && { output },
				...canceled && { canceled },
				state,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime },
				...part.suspendPayload !== void 0 && { suspendPayload: part.suspendPayload },
				...part.childTrace && { childProgress: part.childTrace },
				displaySummary: summariseToolCall(part.toolName, output, part.input)
			};
			toolCalls.push(toolCall);
			const rebuilt = rebuildInteractiveFromHistory(toolCall);
			if (!rebuilt) continue;
			if (rebuilt.resolvedAt === void 0 && !failed && msg.executionStatus !== "running") {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				status = CHAT_MESSAGE_STATUS.AWAITING_USER;
			}
			interactives.push(rebuilt);
			renderParts.push({
				type: "interactive",
				toolCallId: rebuilt.toolCallId
			});
		}
		const createdAt = msg.createdAt ? Date.parse(msg.createdAt) : NaN;
		const chatMessage = {
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			...msg.author && { author: msg.author },
			...renderParts.length > 0 && { renderParts },
			thinking: thinking || void 0,
			...thinkingSegments.length > 0 && { thinkingSegments },
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...attachments.length > 0 && { attachments },
			...status && { status },
			...msg.executionId ? { executionId: msg.executionId } : {},
			...role === "assistant" && msg.backgroundTaskSignal ? { backgroundJobSignal: msg.backgroundTaskSignal } : {},
			...Number.isFinite(createdAt) && { createdAt }
		};
		setMessageInteractives(chatMessage, interactives);
		result.push(chatMessage);
		if (msg.executionError) result.push({
			id: `${chatMessage.id}:error`,
			role: "assistant",
			content: msg.executionError,
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.ERROR,
			...msg.executionId ? { executionId: msg.executionId } : {}
		});
	}
	return result;
}
/**
* Reconcile unfinished tool calls and interactive cards with the suspensions
* still open on the backend. The sidecar comes from chat history
* (`openSuspensions`) — raw persisted messages don't carry runIds or enough
* information to distinguish a live suspension from an interrupted run.
*
* Mutates `chat` in place (history-load happens before reactivity wraps the
* messages, so this is safe and avoids an extra deep clone) and returns it
* for ergonomic chaining.
*/
function applyOpenSuspensions(chat, suspensions) {
	const byToolCallId = new Map(suspensions.map((s) => [s.toolCallId, s]));
	for (const msg of chat) {
		let hasOpenToolCall = false;
		for (const toolCall of msg.toolCalls ?? []) {
			if (toolCall.state === TOOL_CALL_STATE.DONE || toolCall.state === TOOL_CALL_STATE.ERROR || toolCall.state === TOOL_CALL_STATE.CANCELLED) continue;
			const suspension = byToolCallId.get(toolCall.toolCallId);
			if (suspension) {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				toolCall.runId = suspension.runId;
				if (suspension.suspendPayload !== void 0) toolCall.suspendPayload = preserveApprovalDetails(suspension.suspendPayload, toolCall.suspendPayload);
				const rebuilt = rebuildInteractiveFromHistory(toolCall);
				if (rebuilt) {
					rebuilt.runId = suspension.runId;
					upsertMessageInteractive(msg, rebuilt);
				}
				hasOpenToolCall = true;
			} else if (msg.status === CHAT_MESSAGE_STATUS.ERROR) toolCall.state = TOOL_CALL_STATE.ERROR;
			else if (msg.status !== CHAT_MESSAGE_STATUS.STREAMING) {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
			}
		}
		const interactives = getMessageInteractives(msg);
		const retained = [];
		for (const interactive of interactives) {
			if (interactive.resolvedAt !== void 0) {
				retained.push(interactive);
				continue;
			}
			const suspension = byToolCallId.get(interactive.toolCallId);
			if (suspension) {
				interactive.runId = suspension.runId;
				retained.push(interactive);
			}
		}
		setMessageInteractives(msg, retained);
		if (hasOpenToolCall) msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
		else if (msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = msg.toolCalls?.some((tc) => tc.state === TOOL_CALL_STATE.ERROR) ? CHAT_MESSAGE_STATUS.ERROR : CHAT_MESSAGE_STATUS.SUCCESS;
	}
	return chat;
}
//#endregion
//#region src/features/ai/shared/agentsChat/thinking.ts
function getMessageThinkingSegments(message) {
	if (message.thinkingSegments?.length) return message.thinkingSegments.filter((segment) => segment.content.trim().length > 0);
	if (!message.thinking?.trim()) return [];
	return [{
		id: `${message.id}:reasoning`,
		content: message.thinking
	}];
}
function getThinkingDurationSec(segments) {
	let startTime;
	let endTime;
	for (const segment of segments) {
		if (segment.startTime !== void 0) startTime = startTime === void 0 ? segment.startTime : Math.min(startTime, segment.startTime);
		if (segment.endTime !== void 0) endTime = endTime === void 0 ? segment.endTime : Math.max(endTime, segment.endTime);
	}
	if (startTime === void 0 || endTime === void 0 || endTime < startTime) return void 0;
	return Math.max(1, Math.round((endTime - startTime) / 1e3));
}
//#endregion
//#region src/features/agents/composables/useAgentExecutionUpdates.ts
/**
* Call `onUpdate` when the backend records a turn for this agent. The push is an
* invalidation signal, not the data, so the callback has to re-read.
*
* Connects the shared push client but never disconnects it — the editor has one
* connection, and tearing it down here would cut off everything else on it.
*/
function useAgentExecutionUpdates(target, onUpdate, onInvalidate) {
	const pushStore = usePushConnectionStore();
	function matches(event) {
		if (event.type !== "agentExecutionUpdated") return false;
		if (event.data.projectId !== target.projectId.value) return false;
		if (event.data.agentId !== target.agentId.value) return false;
		const threadId = target.threadId?.value;
		return !threadId || event.data.threadId === threadId;
	}
	let inFlight;
	let queued = false;
	let disposed = false;
	function run() {
		if (disposed) return;
		if (inFlight) {
			queued = true;
			return;
		}
		inFlight = Promise.resolve().then(async () => {
			if (!disposed) await onUpdate();
		}).catch(() => {}).finally(() => {
			inFlight = void 0;
			if (queued) {
				queued = false;
				run();
			}
		});
	}
	const removeListener = pushStore.addEventListener((event) => {
		if (matches(event)) {
			onInvalidate?.();
			run();
		}
	});
	pushStore.pushConnect();
	onScopeDispose(() => {
		disposed = true;
		removeListener();
	});
	return run;
}
//#endregion
//#region src/features/agents/composables/useAgentChatStream.ts
var STOP_ACCEPTANCE_TIMEOUT_MS = 30 * TIME.SECOND;
var MAX_WAITING_STREAMS = 2;
function getApprovalDecision(value) {
	if (!isRecord(value) || typeof value.approved !== "boolean") return void 0;
	return value.approved;
}
function warningKey(warning) {
	return JSON.stringify([
		warning.code ?? "",
		warning.server ?? "",
		warning.message
	]);
}
function useAgentChatStream(params) {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showError } = useToast();
	const messages = ref([]);
	const isStreamOpen = ref(false);
	const isSubmitting = ref(false);
	const queuedMessages = ref([]);
	const removingQueueIds = ref(/* @__PURE__ */ new Set());
	const streams = /* @__PURE__ */ new Map();
	let queueVersion = 0;
	let submissionVersion = 0;
	const activeExecutionId = ref(null);
	const acceptedSessionId = ref();
	const isRecovering = ref(false);
	const isStreaming = computed(() => isStreamOpen.value || activeExecutionId.value !== null || isRecovering.value);
	const isCancelling = ref(false);
	let stopTargetId;
	const abortController = ref(null);
	const streamSettlements = /* @__PURE__ */ new WeakMap();
	const historyLoaded = ref(false);
	const isLoadingHistory = ref(false);
	const pushStore = usePushConnectionStore();
	const visibility = useDocumentVisibility();
	let disposed = false;
	let historyVersion = 0;
	let streamVersion = 0;
	let refreshAfterStream = false;
	let retryCount = 0;
	let retryTimer;
	let stopAcceptanceTimer;
	let acknowledgedSessionId;
	const targetKey = () => JSON.stringify([
		params.projectId.value,
		params.agentId.value,
		params.continueSessionId?.value
	]);
	function acknowledgeSessionCreation(sessionId = params.continueSessionId?.value) {
		if (!sessionId || params.newSession?.value !== true || sessionId !== params.continueSessionId?.value || sessionId === acknowledgedSessionId) return;
		acknowledgedSessionId = sessionId;
		params.onSessionCreated?.(sessionId);
	}
	/**
	* Set when the backend rejects the stream because the agent itself is
	* misconfigured (missing instructions / model / credential). Cleared when the
	* next execution starts so users can retry without a manual dismiss.
	*/
	const fatalError = ref(null);
	/**
	* Non-fatal warnings emitted during a run (e.g. an MCP server that failed to
	* connect, so its tools were skipped). The run continues; these are shown to
	* the user as a warning callout. Visible warnings clear when the next execution starts;
	* explicitly dismissed warnings stay hidden for this composable instance.
	*/
	const warnings = ref([]);
	const dismissedWarningKeys = /* @__PURE__ */ new Set();
	const messagingState = computed(() => {
		if (!isStreaming.value) return "idle";
		const lastMsg = messages.value[messages.value.length - 1];
		if (!lastMsg || lastMsg.role === "user") return "waitingFirstChunk";
		return "receiving";
	});
	async function refreshHistory({ clearOnNotFound = false, silent = false } = {}) {
		if (disposed) return false;
		const continueId = params.continueSessionId?.value ?? acceptedSessionId.value;
		const target = targetKey();
		const version = ++historyVersion;
		const streamAtStart = streamVersion;
		const isCurrent = () => !disposed && target === targetKey() && version === historyVersion;
		try {
			let dbMessages;
			let openSuspensions = [];
			let runningExecutionId;
			if (continueId) {
				const envelope = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
				runningExecutionId = envelope.activeExecutionId;
			} else {
				const envelope = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
				runningExecutionId = envelope.activeExecutionId;
			}
			if (!isCurrent()) return false;
			if (continueId) acknowledgeSessionCreation(continueId);
			retryCount = 0;
			clearTimeout(retryTimer);
			if (!isStreamOpen.value && streamAtStart === streamVersion) {
				messages.value = applyOpenSuspensions(convertDbMessages(dbMessages), openSuspensions);
				isRecovering.value = false;
				if (runningExecutionId !== void 0) activeExecutionId.value = runningExecutionId;
				if (isCancelling.value) reconcileStop();
			} else if (isStreamOpen.value) refreshAfterStream = true;
			else refreshHistoryFromPush();
			return true;
		} catch (error) {
			if (!isCurrent()) return false;
			if (error?.httpStatusCode === 404) {
				if (!isStreamOpen.value && streamAtStart === streamVersion && !activeExecutionId.value) {
					isRecovering.value = false;
					isCancelling.value = false;
				}
				if (clearOnNotFound && !activeExecutionId.value && !isStreamOpen.value && streamAtStart === streamVersion) messages.value = [];
				return clearOnNotFound;
			} else if (!silent) showError(error, locale.baseText("agents.chat.loadHistory.error"));
			if (retryCount < 2) {
				clearTimeout(retryTimer);
				retryTimer = setTimeout(() => refreshHistoryFromPush(), TIME.SECOND * 2 ** retryCount++);
			}
			return false;
		}
	}
	async function loadHistory() {
		if (historyLoaded.value) return;
		isLoadingHistory.value = true;
		isRecovering.value = true;
		const queue = refreshQueue();
		const loaded = await refreshHistory({ clearOnNotFound: true });
		await queue;
		historyLoaded.value = true;
		isLoadingHistory.value = false;
		if (loaded && (messages.value.length > 0 || !isStreaming.value)) params.onHistoryLoaded?.(messages.value.length);
	}
	const refreshHistoryFromPush = useAgentExecutionUpdates({
		projectId: params.projectId,
		agentId: params.agentId,
		...params.continueSessionId ? { threadId: params.continueSessionId } : {}
	}, async () => {
		await refreshQueue();
		if (isStreamOpen.value) {
			refreshAfterStream = true;
			return;
		}
		await refreshHistory({ silent: true });
	}, () => {
		historyVersion++;
		retryCount = 0;
		clearTimeout(retryTimer);
	});
	async function refreshQueue() {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || disposed) return;
		const target = targetKey();
		const version = ++queueVersion;
		try {
			const result = await getAgentChatQueue(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId);
			if (!disposed && target === targetKey() && version === queueVersion) queuedMessages.value = result.items;
		} catch (error) {
			if (!disposed && target === targetKey() && version === queueVersion) showError(error, locale.baseText("agents.chat.queue.loadError"));
		}
	}
	async function updateQueuedMessage(queueId, message) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || disposed) return "failed";
		const target = targetKey();
		try {
			await updateAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId, { message });
			if (disposed || target !== targetKey()) return "failed";
			queueVersion++;
			queuedMessages.value = queuedMessages.value.map((item) => item.id === queueId ? {
				...item,
				message: message.trim()
			} : item);
			return "updated";
		} catch (error) {
			if (disposed || target !== targetKey()) return "failed";
			const status = isRecord(error) ? error.httpStatusCode : void 0;
			if (status === 404 || status === 409) return "unavailable";
			showError(error, locale.baseText("agents.chat.queue.editError"));
			return "failed";
		} finally {
			if (!disposed && target === targetKey()) refreshHistoryFromPush();
		}
	}
	async function removeQueuedMessage(queueId) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || removingQueueIds.value.has(queueId)) return;
		const target = targetKey();
		removingQueueIds.value.add(queueId);
		try {
			await removeAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId);
			if (disposed || target !== targetKey()) return;
			queueVersion++;
			queuedMessages.value = queuedMessages.value.filter((item) => item.id !== queueId);
			for (const [controller, session] of streams) if (session.queueId === queueId && !session.executionId) controller.abort();
		} catch (error) {
			if (!disposed && target === targetKey()) showError(error, locale.baseText("agents.chat.queue.removeError"));
		} finally {
			if (target === targetKey()) {
				removingQueueIds.value.delete(queueId);
				refreshHistoryFromPush();
			}
		}
	}
	const removeQueueListener = pushStore.addEventListener((event) => {
		if (event.type === "agentMessageQueueUpdated" && event.data.projectId === params.projectId.value && event.data.agentId === params.agentId.value && event.data.threadId === (params.continueSessionId?.value ?? acceptedSessionId.value)) {
			queueVersion++;
			refreshHistoryFromPush();
		}
	});
	function refresh() {
		retryCount = 0;
		clearTimeout(retryTimer);
		refreshHistoryFromPush();
	}
	watch(() => pushStore.isConnected, (connected) => {
		if (connected) refresh();
	});
	watch(visibility, (value) => {
		if (value === "visible") refresh();
	});
	watch(targetKey, () => {
		detachStream();
		messages.value = [];
		queuedMessages.value = [];
		removingQueueIds.value.clear();
		queueVersion++;
		activeExecutionId.value = null;
		acceptedSessionId.value = void 0;
		isRecovering.value = true;
		isCancelling.value = false;
		stopTargetId = void 0;
		historyVersion++;
		streamVersion++;
		refresh();
	});
	onScopeDispose(() => {
		disposed = true;
		removeQueueListener();
		detachStream();
		clearTimeout(retryTimer);
	});
	async function clearHistory() {
		try {
			await clearTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
			messages.value = [];
		} catch (error) {
			showError(error, locale.baseText("agents.chat.clearHistory.error"));
		}
	}
	/**
	* Lazily mint a ChatMessage when the next text/reasoning/tool event needs
	* one. The id is FE-issued (used as a v-for key) — the wire format no
	* longer carries a server-minted messageId.
	*/
	function ensureCurrent(session) {
		if (session.current) return session.current;
		const msg = reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.STREAMING,
			executionId: session.executionId
		});
		messages.value.push(msg);
		session.current = msg;
		session.minted.add(msg);
		return msg;
	}
	function ensureReasoningSegment(session, id) {
		const existing = session.openReasoning.get(id);
		if (existing) return existing;
		const msg = ensureCurrent(session);
		const segment = reactive({
			id,
			content: "",
			startTime: session.reasoningStartedAt.get(id) ?? Date.now()
		});
		msg.thinkingSegments = [...msg.thinkingSegments ?? [], segment];
		session.openReasoning.set(id, segment);
		return segment;
	}
	function settleReasoning(session, id, endTime = Date.now()) {
		const segment = session.openReasoning.get(id);
		if (segment) segment.endTime = endTime;
		session.openReasoning.delete(id);
		session.reasoningStartedAt.delete(id);
	}
	function settleOpenReasoning(session) {
		const endTime = Date.now();
		for (const id of session.openReasoning.keys()) settleReasoning(session, id, endTime);
		session.reasoningStartedAt.clear();
	}
	/**
	* Find a ToolCall by its `toolCallId`, walking from the latest ChatMessage
	* backwards. Tool results / execution-start events arrive in fresh LLM
	* iterations after the tool-call message has been closed by `finish-step`,
	* so we cannot rely on the cursor — only the natural id.
	*/
	function findToolCallById(toolCallId) {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const m = messages.value[i];
			const found = m.toolCalls?.find((t) => t.toolCallId === toolCallId);
			if (found) return {
				msg: m,
				tc: found
			};
		}
		return null;
	}
	function findOpenSuspension() {
		const interactive = findTailOpenInteractive(messages.value) ?? findOpenInteractive(messages.value);
		if (interactive?.runId) return {
			runId: interactive.runId,
			toolCallId: interactive.toolCallId
		};
		for (const message of messages.value) {
			const toolCall = message.toolCalls?.find((tc) => tc.state === TOOL_CALL_STATE.SUSPENDED && tc.runId);
			if (toolCall?.runId) return {
				runId: toolCall.runId,
				toolCallId: toolCall.toolCallId
			};
		}
	}
	function markMessageSuccessIfSettled(msg) {
		if (msg.status !== CHAT_MESSAGE_STATUS.AWAITING_USER && msg.status !== CHAT_MESSAGE_STATUS.STREAMING) return;
		if (!getMessageInteractives(msg).some((payload) => payload.resolvedAt === void 0) && !msg.toolCalls?.some(isToolCallInFlight)) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
	}
	function isToolCallInFlight(toolCall) {
		return toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING || toolCall.state === TOOL_CALL_STATE.SUSPENDED;
	}
	function markRunCancelled(runId) {
		for (const message of messages.value) {
			if (!message.toolCalls?.some((toolCall) => toolCall.runId === runId)) continue;
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) {
				if (toolCall.runId !== runId && !isToolCallInFlight(toolCall)) continue;
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
				const interactive = getMessageInteractive(message, toolCall.toolCallId);
				if (interactive) upsertMessageInteractive(message, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function dropOrphanMintedBubbles(session) {
		for (const msg of session.minted) if (!msg.content && (msg.toolCalls?.length ?? 0) === 0 && getMessageThinkingSegments(msg).length === 0) {
			messages.value = messages.value.filter((m) => m !== msg);
			session.minted.delete(msg);
		}
	}
	function markInFlightStateFailed(session) {
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING || msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = CHAT_MESSAGE_STATUS.ERROR;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall)) toolCall.state = TOOL_CALL_STATE.ERROR;
			setMessageInteractives(msg, getMessageInteractives(msg).filter((interactive) => interactive.resolvedAt !== void 0));
		}
	}
	/**
	* Settle tool calls left `pending`/`running` after the stream ended (their
	* terminal events never arrived). Used by `stopGenerating` to recover the
	* desync where the chat is idle and responsive but tool steps keep pulsing.
	* Suspended tools are left untouched — they have a `runId` and are still
	* resolvable through the normal resume/cancel flow.
	*/
	function settleStaleInFlightToolCalls() {
		for (const message of messages.value) {
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) if (toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING) {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function handleEvent(event, session) {
		if (session.controller.signal.aborted) return { done: true };
		if (session.executionId && abortController.value !== session.controller) {
			finalizeStream(session);
			return { done: true };
		}
		if (event.type !== "error") acknowledgeSessionCreation();
		switch (event.type) {
			case "message-queued":
				session.queueId = event.queueId;
				acceptedSessionId.value = event.sessionId;
				detachExcessWaitingStreams();
				session.onAccepted?.();
				session.onAccepted = void 0;
				queueVersion++;
				refreshHistoryFromPush();
				break;
			case "execution-started":
				if (session.userMessage) {
					const inputMessageId = event.inputMessageIds?.[0];
					if (inputMessageId) session.userMessage.id = inputMessageId;
					for (const [controller, earlier] of streams) {
						if (controller === session.controller) break;
						if (earlier.userMessage) controller.abort();
					}
				}
				abortController.value = session.controller;
				isStreamOpen.value = true;
				streamVersion++;
				fatalError.value = null;
				warnings.value = [];
				if (session.userMessage) {
					if (!messages.value.some((message) => message.role === "user" && message.executionId === event.executionId)) messages.value.push({
						...session.userMessage,
						content: event.message ?? session.userMessage.content,
						executionId: event.executionId
					});
				}
				queueVersion++;
				queuedMessages.value = queuedMessages.value.filter((item) => item.id !== session.queueId);
				refreshQueue();
				clearTimeout(stopAcceptanceTimer);
				session.executionId = event.executionId;
				activeExecutionId.value = event.executionId;
				acceptedSessionId.value = event.sessionId;
				session.onAccepted?.();
				session.onAccepted = void 0;
				if (isCancelling.value) reconcileStop();
				break;
			case "start-step":
			case "finish-step":
				session.current = void 0;
				break;
			case "text-start":
			case "text-end": break;
			case "reasoning-start":
				session.reasoningStartedAt.set(event.id, Date.now());
				break;
			case "text-delta": {
				const msg = ensureCurrent(session);
				msg.content += event.delta;
				break;
			}
			case "reasoning-delta": {
				const msg = ensureCurrent(session);
				const segment = ensureReasoningSegment(session, event.id);
				segment.content += event.delta;
				msg.thinking = (msg.thinking ?? "") + event.delta;
				break;
			}
			case "reasoning-end":
				settleReasoning(session, event.id);
				break;
			case "tool-input-start": {
				const msg = ensureCurrent(session);
				if (msg.content && !msg.content.endsWith("\n")) msg.content += "\n";
				msg.toolCalls = msg.toolCalls ?? [];
				if (!msg.toolCalls.find((t) => t.toolCallId === event.toolCallId)) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					state: TOOL_CALL_STATE.PENDING
				});
				break;
			}
			case "tool-input-delta": break;
			case "tool-call": {
				const msg = ensureCurrent(session);
				msg.toolCalls = msg.toolCalls ?? [];
				const existing = msg.toolCalls.find((t) => t.toolCallId === event.toolCallId);
				if (!existing) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					input: event.input,
					state: TOOL_CALL_STATE.PENDING,
					displaySummary: summariseToolCall(event.toolName, void 0, event.input)
				});
				else {
					existing.input = event.input;
					existing.displaySummary = summariseToolCall(existing.tool, existing.output, existing.input);
					if (existing.state !== TOOL_CALL_STATE.RUNNING && existing.state !== TOOL_CALL_STATE.DONE && existing.state !== TOOL_CALL_STATE.CANCELLED) existing.state = TOOL_CALL_STATE.PENDING;
				}
				break;
			}
			case "tool-execution-start": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					found.tc.startTime = event.startTime;
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.CANCELLED) found.tc.state = TOOL_CALL_STATE.RUNNING;
				}
				break;
			}
			case "tool-execution-end": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.SUSPENDED) found.tc.state = event.isError ? TOOL_CALL_STATE.ERROR : TOOL_CALL_STATE.DONE;
					found.tc.endTime = event.endTime;
				}
				break;
			}
			case "tool-result": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					const toolResultEvent = event;
					found.tc.output = event.output;
					const failed = event.isError || isFailedDelegateOutput(found.tc.tool, event.output);
					found.tc.state = failed ? TOOL_CALL_STATE.ERROR : toolResultEvent.canceled === true ? TOOL_CALL_STATE.CANCELLED : TOOL_CALL_STATE.DONE;
					found.tc.canceled = toolResultEvent.canceled === true;
					found.tc.displaySummary = summariseToolCall(found.tc.tool, event.output, found.tc.input);
					const currentInteractive = getMessageInteractive(found.msg, event.toolCallId);
					const updated = rebuildInteractiveFromHistory(found.tc);
					if (updated && currentInteractive?.resolvedAt === void 0) upsertMessageInteractive(found.msg, updated);
					markMessageSuccessIfSettled(found.msg);
				}
				break;
			}
			case "tool-call-suspended": {
				const { payload } = event;
				const found = findToolCallById(payload.toolCallId);
				const suspendIsRenderableInput = isApprovalSuspendInput(payload.input);
				let msg;
				let tc;
				if (found) {
					msg = found.msg;
					tc = found.tc;
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					tc.canceled = false;
					tc.output = void 0;
					tc.endTime = void 0;
					tc.displaySummary = void 0;
					tc.runId = payload.runId;
					tc.suspendPayload = payload.input;
				} else {
					msg = ensureCurrent(session);
					tc = {
						tool: payload.toolName,
						toolCallId: payload.toolCallId,
						state: TOOL_CALL_STATE.SUSPENDED,
						runId: payload.runId,
						...suspendIsRenderableInput ? { input: payload.input } : { suspendPayload: payload.input }
					};
					msg.toolCalls = [...msg.toolCalls ?? [], tc];
				}
				const interactive = rebuildInteractiveFromHistory({
					...tc,
					output: void 0
				});
				if (interactive) {
					interactive.runId = payload.runId;
					upsertMessageInteractive(msg, interactive);
					msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
				}
				session.terminalEventReceived = true;
				break;
			}
			case "subagent-chunk": {
				const found = findToolCallById(event.parentToolCallId);
				if (!found) break;
				found.tc.childProgress ??= emptyChildTrace();
				applyForwardedChildChunk(found.tc.childProgress, event.chunk);
				break;
			}
			case "message": break;
			case "warning": {
				const warning = {
					message: event.message,
					...event.server !== void 0 && { server: event.server },
					...event.code !== void 0 && { code: event.code }
				};
				if (!dismissedWarningKeys.has(warningKey(warning))) warnings.value.push(warning);
				break;
			}
			case "error":
				session.errorEmitted = true;
				if (event.errorCode === "turn_already_running") {
					session.busy = true;
					isCancelling.value = false;
					stopTargetId = void 0;
					isRecovering.value = true;
					return { done: true };
				}
				settleOpenReasoning(session);
				dropOrphanMintedBubbles(session);
				markInFlightStateFailed(session);
				if (event.errorCode === "agent_misconfigured") fatalError.value = {
					message: event.message,
					missing: event.missing ?? []
				};
				else if (session.userMessage && !session.executionId) showError(new Error(event.message), locale.baseText("agents.chat.queue.sendError"));
				else messages.value.push(reactive({
					id: crypto.randomUUID(),
					role: "assistant",
					content: event.message,
					toolCalls: [],
					status: CHAT_MESSAGE_STATUS.ERROR
				}));
				session.terminalEventReceived = true;
				break;
			case "done":
				if (event.executionId === activeExecutionId.value) activeExecutionId.value = null;
				settleOpenReasoning(session);
				if (event.executionId) for (const msg of session.minted) msg.executionId = event.executionId;
				session.terminalEventReceived = true;
				return { done: true };
			default: break;
		}
	}
	function detachExcessWaitingStreams() {
		let waiting = 0;
		for (const [controller, session] of streams) {
			if (!session.queueId || session.executionId || controller.signal.aborted) continue;
			if (++waiting > MAX_WAITING_STREAMS) controller.abort();
		}
	}
	async function consumeStream(response, session, signal) {
		if (!response.body) return;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		try {
			readerLoop: while (true) {
				const { done, value } = await reader.read();
				if (done || signal.aborted || disposed || session.target !== targetKey()) break;
				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";
				for (const line of lines) {
					if (!line.startsWith("data: ")) continue;
					const raw = line.slice(6);
					let event;
					try {
						event = JSON.parse(raw);
					} catch {
						continue;
					}
					if (handleEvent(event, session)?.done) break readerLoop;
				}
			}
		} finally {
			reader.releaseLock();
		}
	}
	function finalizeStream(session) {
		settleOpenReasoning(session);
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall) && toolCall.state !== TOOL_CALL_STATE.SUSPENDED) toolCall.state = TOOL_CALL_STATE.DONE;
		}
	}
	async function postAndConsume(url, body, onAccepted, userMessage) {
		const controller = new AbortController();
		const session = {
			controller,
			userMessage,
			target: targetKey(),
			onAccepted,
			errorEmitted: false,
			terminalEventReceived: false,
			minted: /* @__PURE__ */ new Set(),
			reasoningStartedAt: /* @__PURE__ */ new Map(),
			openReasoning: /* @__PURE__ */ new Map()
		};
		streams.set(controller, session);
		if (!userMessage) {
			isStreamOpen.value = true;
			streamVersion++;
			abortController.value = controller;
		}
		let settleStream;
		streamSettlements.set(controller, new Promise((resolve) => {
			settleStream = resolve;
		}));
		const isCurrent = () => !disposed && session.target === targetKey();
		try {
			const browserId = localStorage.getItem("n8n-browserId") ?? "";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"browser-id": browserId
				},
				credentials: "include",
				body: JSON.stringify(body),
				signal: controller.signal
			});
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (!response.ok || !response.body) {
				handleEvent({
					type: "error",
					message: response.statusText || "Failed to reach agent"
				}, session);
				return { outcome: "failed" };
			}
			await consumeStream(response, session, controller.signal);
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (session.busy) return { outcome: "busy" };
			if (!session.terminalEventReceived) {
				if (session.userMessage && !session.queueId && !session.executionId) showError(/* @__PURE__ */ new Error("Stream closed before acceptance"), locale.baseText("agents.chat.queue.sendError"));
				if (abortController.value === controller) isRecovering.value = true;
				return { outcome: "detached" };
			}
			finalizeStream(session);
			if (!session.errorEmitted) session.onAccepted?.();
			return { outcome: session.errorEmitted ? "failed" : "completed" };
		} catch (error) {
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (session.errorEmitted) return { outcome: "failed" };
			if (session.userMessage && !session.queueId && !session.executionId) showError(error, locale.baseText("agents.chat.queue.sendError"));
			if (abortController.value === controller) isRecovering.value = true;
			return { outcome: "detached" };
		} finally {
			streams.delete(controller);
			if (abortController.value === controller) {
				if (session.terminalEventReceived && session.executionId === activeExecutionId.value) activeExecutionId.value = null;
				clearTimeout(stopAcceptanceTimer);
				abortController.value = null;
				isStreamOpen.value = false;
			}
			streamSettlements.delete(controller);
			settleStream?.();
			if (isCurrent()) {
				if (session.executionId) streamVersion++;
				if (session.userMessage || session.executionId || refreshAfterStream || isRecovering.value) {
					refreshAfterStream = false;
					refreshHistoryFromPush();
				} else if (isCancelling.value && !activeExecutionId.value) isCancelling.value = false;
			}
		}
	}
	async function streamChat(message, files, onAccepted, userMessage) {
		const target = targetKey();
		const { baseUrl } = rootStore.restApiContext;
		const url = `${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat`;
		const body = { message };
		const sessionId = params.continueSessionId?.value ?? acceptedSessionId.value;
		const newSession = params.newSession?.value === true && sessionId !== acknowledgedSessionId;
		if (sessionId) {
			body.sessionId = sessionId;
			if (newSession) body.newSession = true;
		}
		if (files?.length) body.attachments = await Promise.all(files.map(async (file) => {
			const encoded = await convertFileToBinaryData(file);
			return {
				fileName: file.name,
				mimeType: encoded.mimeType || "application/octet-stream",
				data: encoded.data
			};
		}));
		if (disposed || target !== targetKey()) return { outcome: "aborted" };
		const result = await postAndConsume(url, body, onAccepted, userMessage);
		if (newSession && params.newSession?.value === true && sessionId && sessionId === params.continueSessionId?.value && sessionId !== acknowledgedSessionId) await refreshHistory({ silent: true });
		return result;
	}
	/**
	* Resume a suspended interaction via `chat/resume`, re-entering the same
	* SSE handler. The `runId` is required — it comes from the original
	* `tool-call-suspended` chunk (live) or from the `openSuspensions` sidecar
	* applied during history reload.
	*
	* The UI updates optimistically, then reconciles with persisted history if
	* the resume fails, falling back to the previous card state if history is unavailable.
	*/
	async function resume(payload, onAccepted) {
		if (isStreaming.value || isCancelling.value) return "busy";
		const isCancellation = "cancelled" in payload;
		const text = isCancellation ? payload.text.trim() : "";
		if (isCancellation && !text) return "busy";
		const found = findToolCallById(payload.toolCallId);
		const snapshot = found ? {
			tc: found.tc,
			prevState: found.tc.state,
			prevOutput: found.tc.output,
			prevCanceled: found.tc.canceled,
			prevSummary: found.tc.displaySummary,
			msg: found.msg,
			prevStatus: found.msg.status,
			prevInteractive: found.msg.interactive,
			prevInteractives: found.msg.interactives ? [...found.msg.interactives] : void 0
		} : null;
		let optimisticUserMessageId;
		if (found) {
			if (isCancellation) {
				found.tc.state = TOOL_CALL_STATE.CANCELLED;
				found.tc.canceled = true;
				const interactive = getMessageInteractive(found.msg, payload.toolCallId);
				if (interactive) upsertMessageInteractive(found.msg, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			} else {
				found.tc.state = TOOL_CALL_STATE.DONE;
				found.tc.canceled = false;
				found.tc.output = payload.resumeData;
				found.tc.displaySummary = summariseToolCall(found.tc.tool, payload.resumeData, found.tc.input);
				const updated = rebuildInteractiveFromHistory(found.tc);
				if (updated?.toolName === "approval") {
					const approved = getApprovalDecision(payload.resumeData);
					if (approved !== void 0) updated.resolvedValue = { approved };
				}
				if (updated) upsertMessageInteractive(found.msg, updated);
			}
			markMessageSuccessIfSettled(found.msg);
		}
		const resumeData = isCancellation ? {
			_type: "agent.cancellation",
			message: text
		} : payload.resumeData;
		if (isCancellation) {
			optimisticUserMessageId = crypto.randomUUID();
			fatalError.value = null;
			messages.value.push({
				id: optimisticUserMessageId,
				role: "user",
				content: text,
				status: "success",
				createdAt: Date.now()
			});
		}
		const { baseUrl } = rootStore.restApiContext;
		const { outcome } = await postAndConsume(`${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat/resume`, {
			runId: payload.runId,
			toolCallId: payload.toolCallId,
			resumeData
		}, onAccepted);
		let reconciled = false;
		if (outcome === "failed" || outcome === "busy") reconciled = await refreshHistory();
		if ((outcome === "failed" || outcome === "busy") && !reconciled && !activeExecutionId.value && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.canceled = snapshot.prevCanceled;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			if (snapshot.prevInteractives) setMessageInteractives(snapshot.msg, snapshot.prevInteractives);
			else if (snapshot.prevInteractive) setMessageInteractives(snapshot.msg, [snapshot.prevInteractive]);
			else setMessageInteractives(snapshot.msg, []);
		}
		if (optimisticUserMessageId && (outcome === "busy" || outcome === "failed" && !reconciled && !activeExecutionId.value)) messages.value = messages.value.filter((m) => m.id !== optimisticUserMessageId);
		return outcome === "busy" ? "busy" : "sent";
	}
	async function cancelAndSteer(text, onAccepted) {
		const openInteractive = findTailSteerableInteractive(messages.value);
		if (!openInteractive?.runId) return "busy";
		return await resume({
			runId: openInteractive.runId,
			toolCallId: openInteractive.toolCallId,
			cancelled: true,
			text
		}, onAccepted);
	}
	async function sendMessage(text, files, onAccepted) {
		const trimmed = text.trim();
		if (!trimmed && !files?.length || isSubmitting.value || isLoadingHistory.value) return "busy";
		isSubmitting.value = true;
		const submission = ++submissionVersion;
		const target = targetKey();
		const userMessage = {
			id: crypto.randomUUID(),
			role: "user",
			content: trimmed,
			status: "success",
			createdAt: Date.now(),
			attachments: files?.map((file) => ({
				fileName: file.name,
				mimeType: resolveFileMimeType(file.name, file.type) || "application/octet-stream",
				sizeBytes: file.size,
				file
			}))
		};
		return await new Promise((resolve) => {
			let released = false;
			const release = (outcome = "sent") => {
				if (released) return;
				released = true;
				if (submission === submissionVersion) isSubmitting.value = false;
				resolve(outcome);
			};
			streamChat(trimmed, files, () => {
				onAccepted?.();
				release();
			}, userMessage).then(({ outcome }) => {
				release(outcome === "busy" ? "busy" : "sent");
			}).catch((error) => {
				if (!disposed && target === targetKey()) showError(error, locale.baseText("agents.chat.queue.sendError"));
			}).finally(release);
		});
	}
	function dismissFatalError() {
		fatalError.value = null;
	}
	function dismissWarning(index) {
		const warning = warnings.value[index];
		if (!warning) return;
		const dismissedKey = warningKey(warning);
		dismissedWarningKeys.add(dismissedKey);
		warnings.value = warnings.value.filter((item) => warningKey(item) !== dismissedKey);
	}
	function detachStream() {
		clearTimeout(stopAcceptanceTimer);
		abortController.value = null;
		isStreamOpen.value = false;
		isSubmitting.value = false;
		submissionVersion++;
		for (const controller of streams.keys()) controller.abort();
	}
	function retainStopUntilAcceptance() {
		isCancelling.value = true;
		const controller = abortController.value;
		if (!controller) return;
		stopAcceptanceTimer = setTimeout(() => {
			if (controller !== abortController.value || !isCancelling.value || activeExecutionId.value) return;
			isRecovering.value = true;
			detachStream();
		}, STOP_ACCEPTANCE_TIMEOUT_MS);
	}
	function reconcileStop() {
		const executionId = activeExecutionId.value;
		if (!executionId || stopTargetId && stopTargetId !== executionId) {
			isCancelling.value = false;
			stopTargetId = void 0;
			return;
		}
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (threadId) requestExecutionStop(executionId, threadId);
	}
	async function requestExecutionStop(executionId, threadId) {
		if (stopTargetId === executionId) return;
		stopTargetId = executionId;
		const target = targetKey();
		try {
			const { cancelRequested } = await cancelAgentChatExecution(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, executionId);
			if (!cancelRequested && target === targetKey() && stopTargetId === executionId) {
				isCancelling.value = false;
				stopTargetId = void 0;
			}
		} catch (error) {
			if (!disposed && target === targetKey() && stopTargetId === executionId) {
				isCancelling.value = false;
				stopTargetId = void 0;
				showError(error, locale.baseText("agents.chat.stop.error"));
			}
		} finally {
			if (!disposed && target === targetKey()) refreshHistoryFromPush();
		}
	}
	async function stopGenerating() {
		if (isCancelling.value) return;
		const executionId = activeExecutionId.value;
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (executionId && threadId) {
			isCancelling.value = true;
			await requestExecutionStop(executionId, threadId);
			return;
		}
		const openSuspension = findOpenSuspension();
		if (!openSuspension) {
			if (isStreaming.value) retainStopUntilAcceptance();
			else settleStaleInFlightToolCalls();
			return;
		}
		isCancelling.value = true;
		const controller = abortController.value;
		const settlement = controller ? streamSettlements.get(controller) : void 0;
		try {
			const { cancelled } = await cancelAgentChatRun(rootStore.restApiContext, params.projectId.value, params.agentId.value, openSuspension.runId);
			if (cancelled) markRunCancelled(openSuspension.runId);
			else await refreshHistory();
		} catch (error) {
			await refreshHistory();
			showError(error, locale.baseText("agents.chat.stop.error"));
		} finally {
			controller?.abort();
			await settlement;
			isCancelling.value = false;
		}
	}
	return {
		queuedMessages,
		removingQueueIds,
		removeQueuedMessage,
		updateQueuedMessage,
		isSubmitting,
		isLoadingHistory,
		messages,
		isStreaming,
		activeExecutionId,
		isCancelling,
		messagingState,
		fatalError,
		warnings,
		loadHistory,
		refresh,
		clearHistory,
		sendMessage,
		stopGenerating,
		detachStream,
		resume,
		cancelAndSteer,
		dismissFatalError,
		dismissWarning
	};
}
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=script&setup=true&lang.ts
var AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatEmptyState",
	props: { agentConfig: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.emptyState) }, [
				createVNode(AgentPersonalisationIcon_default, {
					personalisation: __props.agentConfig?.personalisation,
					class: normalizeClass(_ctx.$style.icon),
					size: 64
				}, null, 8, ["personalisation", "class"]),
				createVNode(unref(N8nText_default), {
					tag: "h3",
					step: "xl",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agentConfig?.name), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.emptyState.description")), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=style&index=0&lang.module.scss
var emptyState = "_emptyState_nlfoj_276";
var fadeInUp$5 = "_fadeInUp_nlfoj_1";
var icon = "_icon_nlfoj_302";
var shimmer$5 = "_shimmer_nlfoj_1";
var spin$5 = "_spin_nlfoj_1";
var opacityPulse$5 = "_opacityPulse_nlfoj_1";
var popoverIn$5 = "_popoverIn_nlfoj_1";
var fadeIn$5 = "_fadeIn_nlfoj_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_nlfoj_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_nlfoj_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_nlfoj_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_nlfoj_1";
var blurSwapIn$5 = "_blurSwapIn_nlfoj_1";
var blurSwapOut$5 = "_blurSwapOut_nlfoj_1";
var pulseGlow$5 = "_pulseGlow_nlfoj_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_nlfoj_1";
var fade$5 = "_fade_nlfoj_1";
var fadeInDown$5 = "_fadeInDown_nlfoj_1";
var fadeInLeft$5 = "_fadeInLeft_nlfoj_1";
var fadeInRight$5 = "_fadeInRight_nlfoj_1";
var fadeOut$5 = "_fadeOut_nlfoj_1";
var fadeOutDown$5 = "_fadeOutDown_nlfoj_1";
var fadeOutUp$5 = "_fadeOutUp_nlfoj_1";
var fadeOutLeft$5 = "_fadeOutLeft_nlfoj_1";
var fadeOutRight$5 = "_fadeOutRight_nlfoj_1";
var ping$5 = "_ping_nlfoj_1";
var blinkBackground$5 = "_blinkBackground_nlfoj_1";
var typingBlink$5 = "_typingBlink_nlfoj_1";
var AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	emptyState,
	fadeInUp: fadeInUp$5,
	icon,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_nlfoj_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var AgentChatEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/displayGroups.ts
function isGroupable(message) {
	return message.role === "assistant" && !!message.toolCalls?.length && !message.content.trim();
}
function isAssistantGroup(group) {
	return group.kind === "toolRun" || group.kind === "message" && group.message.role === "assistant";
}
function executionIdForGroup(group) {
	return group.kind === "toolRun" ? group.executionId : group.message.executionId;
}
/** Keep one reasoning block at the tail of each assistant run, below its final output. */
function moveThinkingToRunTail(groups) {
	let run = [];
	let executionId;
	const flush = () => {
		if (run.length === 0) return;
		const segments = run.flatMap((group) => group.thinkingSegments);
		for (const group of run) group.thinkingSegments = [];
		run[run.length - 1].thinkingSegments = segments;
		run = [];
		executionId = void 0;
	};
	for (const group of groups) {
		if (!isAssistantGroup(group)) {
			flush();
			continue;
		}
		const groupExecutionId = executionIdForGroup(group);
		if (executionId !== void 0 && groupExecutionId !== void 0 && executionId !== groupExecutionId) flush();
		run.push(group);
		executionId ??= groupExecutionId;
	}
	flush();
}
/**
* Whether `message` may join an open toolRun. Same-turn live streams often
* lack executionId until `done`; those still fold. Distinct defined ids
* (suspended vs resumed HITL executions) must stay separate so Fix CTA
* handoff uses the turn that owns the errored tool.
*/
function canAppendToToolRun(last, message) {
	if (last.finalMessage) return false;
	if (last.executionId !== void 0 && message.executionId !== void 0 && last.executionId !== message.executionId) return false;
	return true;
}
/**
* Merge two records of the same tool call: messages are now stored both when a
* stream suspends and again on completion, so history can carry the same
* toolCallId twice (open, then resolved). Ported from master's undrained-stream
* fix (#32119).
*/
function mergeToolCall(previous, next) {
	const merged = {
		...previous,
		...next,
		input: next.input ?? previous.input,
		startTime: previous.startTime ?? next.startTime,
		endTime: next.endTime ?? previous.endTime,
		canceled: next.canceled ?? previous.canceled
	};
	return {
		...merged,
		displaySummary: summariseToolCall(merged.tool, merged.output, merged.input)
	};
}
function appendToolCalls(existing, next) {
	const merged = [...existing];
	const indexByToolCallId = /* @__PURE__ */ new Map();
	for (const [index, toolCall] of merged.entries()) if (toolCall.toolCallId) indexByToolCallId.set(toolCall.toolCallId, index);
	for (const toolCall of next) {
		if (!toolCall.toolCallId) {
			merged.push(toolCall);
			continue;
		}
		const index = indexByToolCallId.get(toolCall.toolCallId);
		if (index === void 0) {
			indexByToolCallId.set(toolCall.toolCallId, merged.length);
			merged.push(toolCall);
			continue;
		}
		merged[index] = mergeToolCall(merged[index], toolCall);
	}
	return merged;
}
function appendInteractivePayloads(existing, next) {
	let merged = existing;
	for (const payload of next) {
		const index = merged.findIndex((existingPayload) => existingPayload.toolCallId === payload.toolCallId);
		if (index === -1) merged = [...merged, payload];
		else merged = merged.map((existingPayload, i) => i === index ? payload : existingPayload);
	}
	return merged;
}
function buildDisplayGroups(messages) {
	const groups = [];
	for (const message of messages) {
		if (message.role === "assistant" && message.backgroundJobSignal) {
			groups.push({
				kind: "backgroundJobSignal",
				id: `${message.executionId ?? message.id}:background-job-signal`,
				signal: message.backgroundJobSignal
			});
			if (!message.content && !message.toolCalls?.length && !getMessageThinkingSegments(message).length && !getMessageInteractives(message).length && !message.attachments?.length) continue;
		}
		if (isGroupable(message)) {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls ?? []);
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				last.executionId ??= message.executionId;
				continue;
			}
			groups.push({
				kind: "toolRun",
				id: message.id,
				thinkingSegments: getMessageThinkingSegments(message),
				active: message.status === "streaming",
				awaitingInput: message.status === "awaitingUser",
				toolCalls: [...message.toolCalls ?? []],
				interactives: getMessageInteractives(message),
				...message.executionId ? { executionId: message.executionId } : {}
			});
			continue;
		}
		if (message.role === "assistant") {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.finalMessage = message;
				last.executionId ??= message.executionId;
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				if (message.toolCalls?.length) last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls);
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				continue;
			}
		}
		groups.push({
			kind: "message",
			id: message.id,
			message,
			thinkingSegments: message.role === "assistant" ? getMessageThinkingSegments(message) : []
		});
	}
	moveThinkingToRunTail(groups);
	return groups;
}
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["aria-expanded"];
var AiThinkingBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiThinkingBlock",
	props: {
		segments: {},
		active: { type: Boolean },
		awaitingInput: {
			type: Boolean,
			default: false
		},
		activityLabel: { default: void 0 },
		durationSec: { default: void 0 },
		testId: { default: "ai-thinking-block" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const userToggled = ref(null);
		const expanded = computed(() => userToggled.value ?? false);
		watch(() => props.active, () => {
			userToggled.value = null;
		});
		const nowMs = ref(Date.now());
		const activeSinceMs = ref(null);
		const settledElapsedSec = ref(0);
		let ticker = null;
		const elapsedSec = computed(() => {
			const live = activeSinceMs.value === null ? 0 : Math.max(0, Math.floor((nowMs.value - activeSinceMs.value) / 1e3));
			return settledElapsedSec.value + live;
		});
		const isCounting = computed(() => props.active && !props.awaitingInput);
		watch(isCounting, (counting) => {
			if (counting) {
				nowMs.value = Date.now();
				activeSinceMs.value = Date.now();
				ticker ??= setInterval(() => {
					nowMs.value = Date.now();
				}, 1e3);
				return;
			}
			settledElapsedSec.value = props.awaitingInput ? 0 : elapsedSec.value;
			activeSinceMs.value = null;
			if (ticker) {
				clearInterval(ticker);
				ticker = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (ticker) clearInterval(ticker);
		});
		function formatDuration(totalSec) {
			if (totalSec < 60) return `${totalSec}s`;
			return `${Math.floor(totalSec / 60)}m ${totalSec % 60}s`;
		}
		const elapsedLabel = computed(() => {
			return elapsedSec.value >= 1 ? formatDuration(elapsedSec.value) : void 0;
		});
		const title = computed(() => {
			if (!props.active) {
				const observed = settledElapsedSec.value >= 1 ? settledElapsedSec.value : void 0;
				const duration = props.durationSec === void 0 ? observed : observed === void 0 ? props.durationSec : Math.max(props.durationSec, observed);
				return {
					key: "done",
					text: duration === void 0 ? i18n.baseText("ai.thinking.doneFallback") : i18n.baseText("ai.thinking.done", { interpolate: { duration: formatDuration(duration) } })
				};
			}
			if (props.awaitingInput) return {
				key: "waiting",
				text: i18n.baseText("ai.thinking.waitingForInput")
			};
			for (let index = props.segments.length - 1; index >= 0; index--) {
				const sentence = firstSentence(props.segments[index].content);
				if (sentence) return {
					key: `segment-${index}`,
					text: sentence
				};
			}
			return {
				key: "active",
				text: i18n.baseText("ai.thinking.active")
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: expanded.value,
				"data-test-id": props.testId,
				"onUpdate:open": _cache[0] || (_cache[0] = (value) => userToggled.value = value)
			}, {
				default: withCtx(() => [
					createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.header),
							"aria-expanded": expanded.value,
							"data-test-id": "thinking-block-header"
						}, [
							createVNode(Transition, {
								name: "thinking-title",
								mode: "out-in"
							}, {
								default: withCtx(() => [(openBlock(), createElementBlock("span", {
									key: title.value.key,
									class: normalizeClass(_ctx.$style.title)
								}, toDisplayString(title.value.text), 3))]),
								_: 1
							}),
							expanded.value && isCounting.value && elapsedLabel.value ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.headerElapsed)
							}, toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true),
							createVNode(unref(AiActivityStepChevron_default), { open: expanded.value }, null, 8, ["open"])
						], 10, _hoisted_1$6)]),
						_: 1
					}),
					props.active && !props.awaitingInput && !expanded.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.subline),
						"data-test-id": "thinking-block-subline"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sublineLabel) }, toDisplayString(props.activityLabel ?? unref(i18n).baseText("ai.thinking.active")), 3), elapsedLabel.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sublineElapsed)
					}, " · " + toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					createVNode(unref(AnimatedCollapsibleContent_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2)]),
						_: 3
					})
				]),
				_: 3
			}, 8, ["open", "data-test-id"]);
		};
	}
});
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=style&index=1&lang.module.scss
var header$1 = "_header_blcow_276";
var title$3 = "_title_blcow_295";
var headerElapsed = "_headerElapsed_blcow_303";
var sublineElapsed = "_sublineElapsed_blcow_304";
var subline = "_subline_blcow_304";
var sublineLabel = "_sublineLabel_blcow_319";
var shimmer$4 = "_shimmer_blcow_1";
var content$1 = "_content_blcow_346";
var spin$4 = "_spin_blcow_1";
var opacityPulse$4 = "_opacityPulse_blcow_1";
var popoverIn$4 = "_popoverIn_blcow_1";
var fadeIn$4 = "_fadeIn_blcow_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_blcow_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_blcow_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_blcow_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_blcow_1";
var blurSwapIn$4 = "_blurSwapIn_blcow_1";
var blurSwapOut$4 = "_blurSwapOut_blcow_1";
var pulseGlow$4 = "_pulseGlow_blcow_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_blcow_1";
var fade$4 = "_fade_blcow_1";
var fadeInUp$4 = "_fadeInUp_blcow_1";
var fadeInDown$4 = "_fadeInDown_blcow_1";
var fadeInLeft$4 = "_fadeInLeft_blcow_1";
var fadeInRight$4 = "_fadeInRight_blcow_1";
var fadeOut$4 = "_fadeOut_blcow_1";
var fadeOutDown$4 = "_fadeOutDown_blcow_1";
var fadeOutUp$4 = "_fadeOutUp_blcow_1";
var fadeOutLeft$4 = "_fadeOutLeft_blcow_1";
var fadeOutRight$4 = "_fadeOutRight_blcow_1";
var ping$4 = "_ping_blcow_1";
var blinkBackground$4 = "_blinkBackground_blcow_1";
var typingBlink$4 = "_typingBlink_blcow_1";
var AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default = {
	header: header$1,
	title: title$3,
	headerElapsed,
	sublineElapsed,
	subline,
	sublineLabel,
	shimmer: shimmer$4,
	content: content$1,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_blcow_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var AiThinkingBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiThinkingBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-8a894310"]]);
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=script&setup=true&lang.ts
var memoriesCountLabelKey = "agents.builder.quickActions.memoriesUsed.count";
var keyMemoryLabelKey = "agents.builder.quickActions.memoriesUsed.keyMemory";
var AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMemoryUsed",
	props: { memories: {} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const memories = computed(() => props.memories);
		const isOpen = ref(false);
		function onOpenChange(open) {
			isOpen.value = open;
			emit("update:open", open);
		}
		function splitKeyMemory(text) {
			return text.split(/(?<=[.!?])\s+/).filter((part) => part.length > 0);
		}
		return (_ctx, _cache) => {
			return memories.value.length > 0 ? (openBlock(), createBlock(unref(HoverCardRoot_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": [_cache[0] || (_cache[0] = ($event) => isOpen.value = $event), onOpenChange],
				"open-delay": 400,
				"close-delay": 0
			}, {
				default: withCtx(() => [createVNode(unref(HoverCardTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(memoriesCountLabelKey, {
						adjustToNumber: memories.value.length,
						interpolate: { count: String(memories.value.length) }
					})), 1)], 2)]),
					_: 1
				}), createVNode(unref(HoverCardPortal_default), null, {
					default: withCtx(() => [createVNode(unref(HoverCardContent_default), {
						side: "bottom",
						align: "end",
						"side-offset": 8,
						class: normalizeClass([_ctx.$style.popoverContent, _ctx.$style.panel])
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(memories.value, (memory) => {
							return openBlock(), createElementBlock("div", {
								key: memory.id,
								class: normalizeClass(_ctx.$style.memorySection)
							}, [createVNode(unref(N8nText_default), {
								step: "sm",
								bold: "",
								class: normalizeClass(_ctx.$style.label)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(keyMemoryLabelKey)), 1)]),
								_: 1
							}, 8, ["class"]), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.keyMemoryList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(splitKeyMemory(memory.keyMemory), (sentence, sentenceIndex) => {
								return openBlock(), createElementBlock("li", { key: `${memory.id}-${sentenceIndex}` }, [createVNode(unref(N8nText_default), {
									step: "sm",
									tag: "p",
									class: normalizeClass(_ctx.$style.keyMemory)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(sentence), 1)]),
									_: 2
								}, 1032, ["class"])]);
							}), 128))], 2)], 2);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_1fehd_277";
var popoverIn$3 = "_popoverIn_1fehd_1";
var panel$1 = "_panel_1fehd_346";
var trigger = "_trigger_1fehd_358";
var keyMemoryList = "_keyMemoryList_1fehd_370";
var memorySection = "_memorySection_1fehd_383";
var keyMemory = "_keyMemory_1fehd_370";
var shimmer$3 = "_shimmer_1fehd_1";
var spin$3 = "_spin_1fehd_1";
var opacityPulse$3 = "_opacityPulse_1fehd_1";
var fadeIn$3 = "_fadeIn_1fehd_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1fehd_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1fehd_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1fehd_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1fehd_1";
var blurSwapIn$3 = "_blurSwapIn_1fehd_1";
var blurSwapOut$3 = "_blurSwapOut_1fehd_1";
var pulseGlow$3 = "_pulseGlow_1fehd_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1fehd_1";
var fade$3 = "_fade_1fehd_1";
var fadeInUp$3 = "_fadeInUp_1fehd_1";
var fadeInDown$3 = "_fadeInDown_1fehd_1";
var fadeInLeft$3 = "_fadeInLeft_1fehd_1";
var fadeInRight$3 = "_fadeInRight_1fehd_1";
var fadeOut$3 = "_fadeOut_1fehd_1";
var fadeOutDown$3 = "_fadeOutDown_1fehd_1";
var fadeOutUp$3 = "_fadeOutUp_1fehd_1";
var fadeOutLeft$3 = "_fadeOutLeft_1fehd_1";
var fadeOutRight$3 = "_fadeOutRight_1fehd_1";
var ping$3 = "_ping_1fehd_1";
var blinkBackground$3 = "_blinkBackground_1fehd_1";
var typingBlink$3 = "_typingBlink_1fehd_1";
var AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	popoverIn: popoverIn$3,
	panel: panel$1,
	trigger,
	keyMemoryList,
	memorySection,
	keyMemory,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1fehd_1",
	opacityPulse: opacityPulse$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var AgentChatMemoryUsed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/utils/background-job-labels.ts
var BACKGROUND_JOB_STATUS_LABEL_KEYS = {
	completed: "agents.chat.backgroundTasks.status.completed",
	failed: "agents.chat.backgroundTasks.status.failed",
	cancelled: "agents.chat.backgroundTasks.status.cancelled"
};
function backgroundJobTimelineLabelKey(key) {
	switch (key) {
		case "background-task-signal": return "agents.chat.backgroundTasks.resultsReceived";
		case "background-task-completed": return BACKGROUND_JOB_STATUS_LABEL_KEYS.completed;
		case "background-task-failed": return BACKGROUND_JOB_STATUS_LABEL_KEYS.failed;
		case "background-task-cancelled": return BACKGROUND_JOB_STATUS_LABEL_KEYS.cancelled;
		default: return;
	}
}
function backgroundJobResultLabel(job, i18n) {
	return i18n.baseText("agents.chat.backgroundTasks.result", { interpolate: {
		title: job.title,
		status: i18n.baseText(BACKGROUND_JOB_STATUS_LABEL_KEYS[job.status])
	} });
}
//#endregion
//#region src/features/agents/components/AgentChatBackgroundJobSignal.vue?vue&type=script&setup=true&lang.ts
var AgentChatBackgroundJobSignal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatBackgroundJobSignal",
	props: { signal: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiActivityStep_default), {
				label: unref(i18n).baseText("agents.chat.backgroundTasks.resultsReceived"),
				"wrap-content": "",
				"data-testid": "agent-chat-background-job-signal"
			}, {
				default: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.jobs) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.signal.tasks, (job) => {
					return openBlock(), createElementBlock("li", {
						key: job.id,
						class: normalizeClass(_ctx.$style.job)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(job.title), 1)]),
						_: 2
					}, 1032, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.outcome) }, [createVNode(unref(N8nIcon_default), {
						icon: job.status === "completed" ? "circle-check" : "circle-x",
						class: normalizeClass(_ctx.$style.statusIcon),
						"data-status": job.status,
						size: "small"
					}, null, 8, [
						"icon",
						"class",
						"data-status"
					]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(BACKGROUND_JOB_STATUS_LABEL_KEYS)[job.status])), 1)]),
						_: 2
					}, 1024)], 2)], 2);
				}), 128))], 2)]),
				_: 1
			}, 8, ["label"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatBackgroundJobSignal.vue?vue&type=style&index=0&lang.module.scss
var jobs = "_jobs_1m5va_276";
var job = "_job_1m5va_276";
var title$2 = "_title_1m5va_291";
var outcome = "_outcome_1m5va_295";
var statusIcon = "_statusIcon_1m5va_302";
var fadeIn$2 = "_fadeIn_1m5va_1";
var shimmer$2 = "_shimmer_1m5va_1";
var spin$2 = "_spin_1m5va_1";
var opacityPulse$2 = "_opacityPulse_1m5va_1";
var popoverIn$2 = "_popoverIn_1m5va_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1m5va_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1m5va_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1m5va_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1m5va_1";
var blurSwapIn$2 = "_blurSwapIn_1m5va_1";
var blurSwapOut$2 = "_blurSwapOut_1m5va_1";
var pulseGlow$2 = "_pulseGlow_1m5va_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1m5va_1";
var fade$2 = "_fade_1m5va_1";
var fadeInUp$2 = "_fadeInUp_1m5va_1";
var fadeInDown$2 = "_fadeInDown_1m5va_1";
var fadeInLeft$2 = "_fadeInLeft_1m5va_1";
var fadeInRight$2 = "_fadeInRight_1m5va_1";
var fadeOut$2 = "_fadeOut_1m5va_1";
var fadeOutDown$2 = "_fadeOutDown_1m5va_1";
var fadeOutUp$2 = "_fadeOutUp_1m5va_1";
var fadeOutLeft$2 = "_fadeOutLeft_1m5va_1";
var fadeOutRight$2 = "_fadeOutRight_1m5va_1";
var ping$2 = "_ping_1m5va_1";
var blinkBackground$2 = "_blinkBackground_1m5va_1";
var typingBlink$2 = "_typingBlink_1m5va_1";
var AgentChatBackgroundJobSignal_vue_vue_type_style_index_0_lang_module_default = {
	jobs,
	job,
	title: title$2,
	outcome,
	statusIcon,
	fadeIn: fadeIn$2,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1m5va_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var AgentChatBackgroundJobSignal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatBackgroundJobSignal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatBackgroundJobSignal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue
var AgentChatMessageActions_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageActions",
	props: {
		content: {},
		canSendToAssistant: { type: Boolean }
	},
	emits: ["sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ChatActions_default), {
				content: props.content,
				"data-test-id": "agent-chat-message-actions",
				"copy-test-id": "agent-chat-message-copy",
				"read-aloud-test-id": "agent-chat-message-read-aloud"
			}, {
				default: withCtx(() => [__props.canSendToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300,
					content: unref(i18n).baseText("agents.builder.preview.sendToAssistant")
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "square-arrow-out-up-right",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-send-to-assistant",
						"aria-label": unref(i18n).baseText("agents.builder.preview.sendToAssistant"),
						onClick: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageAttachments.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["title"];
var _hoisted_2$2 = [
	"href",
	"title",
	"onClick"
];
var _hoisted_3$2 = [
	"src",
	"alt",
	"onError"
];
var AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageAttachments",
	props: {
		attachments: {},
		projectId: {},
		agentId: {}
	},
	setup(__props) {
		const props = __props;
		const rootStore = useRootStore();
		const i18n = useI18n();
		const unavailableKeys = reactive(/* @__PURE__ */ new Set());
		const objectUrlsByFile = /* @__PURE__ */ new Map();
		function objectUrlFor(file) {
			let url = objectUrlsByFile.get(file);
			if (!url) {
				url = URL.createObjectURL(file);
				objectUrlsByFile.set(file, url);
			}
			return url;
		}
		function downloadUrl(attachment) {
			if (!attachment.fileId) return void 0;
			const { baseUrl } = rootStore.restApiContext;
			return `${baseUrl}/projects/${encodeURIComponent(props.projectId)}/agents/v2/${encodeURIComponent(props.agentId)}/chat/attachments/${encodeURIComponent(attachment.fileId)}`;
		}
		function isImage(attachment) {
			return attachment.mimeType.startsWith("image/");
		}
		const items = computed(() => props.attachments.map((attachment, index) => {
			const href = downloadUrl(attachment);
			let imageSrc;
			if (isImage(attachment)) {
				if (href) imageSrc = href;
				else if (attachment.file) imageSrc = objectUrlFor(attachment.file);
			}
			return {
				key: attachment.fileId ?? `local-${index}`,
				attachment,
				imageSrc,
				href
			};
		}));
		onBeforeUnmount(() => {
			for (const url of objectUrlsByFile.values()) URL.revokeObjectURL(url);
			objectUrlsByFile.clear();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.attachments),
				"data-testid": "agent-chat-message-attachments"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.key }, [unavailableKeys.has(item.key) ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.fileChip, _ctx.$style.unavailable]),
					title: item.attachment.fileName,
					"data-testid": "agent-chat-attachment-unavailable"
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: "small"
					}),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileSize) }, toDisplayString(unref(i18n).baseText("agents.chat.attachments.unavailable")), 3)
				], 10, _hoisted_1$5)) : item.imageSrc ? (openBlock(), createElementBlock("a", {
					key: 1,
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					class: normalizeClass([_ctx.$style.thumbnailLink, { [_ctx.$style.notClickable]: !item.href }]),
					title: item.attachment.fileName,
					onClick: ($event) => !item.href && $event.preventDefault()
				}, [createBaseVNode("img", {
					src: item.imageSrc,
					alt: item.attachment.fileName,
					class: normalizeClass(_ctx.$style.thumbnail),
					onError: ($event) => item.href && unavailableKeys.add(item.key)
				}, null, 42, _hoisted_3$2)], 10, _hoisted_2$2)) : (openBlock(), createBlock(resolveDynamicComponent(item.href ? "a" : "span"), {
					key: 2,
					href: item.href,
					download: item.href ? item.attachment.fileName : void 0,
					class: normalizeClass(_ctx.$style.fileChip),
					title: item.attachment.fileName
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nIcon_default), {
							icon: "paperclip",
							size: "small"
						}),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
						item.attachment.sizeBytes !== void 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.fileSize)
						}, toDisplayString(unref(formatBytes)(item.attachment.sizeBytes)), 3)) : createCommentVNode("", true)
					]),
					_: 2
				}, 1032, [
					"href",
					"download",
					"class",
					"title"
				]))], 64);
			}), 128))], 2);
		};
	}
});
var AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default = {
	attachments: "_attachments_1w7v2_1",
	thumbnailLink: "_thumbnailLink_1w7v2_9",
	notClickable: "_notClickable_1w7v2_19",
	thumbnail: "_thumbnail_1w7v2_9",
	fileChip: "_fileChip_1w7v2_30",
	fileName: "_fileName_1w7v2_44",
	fileSize: "_fileSize_1w7v2_51",
	unavailable: "_unavailable_1w7v2_56"
};
var AgentChatMessageAttachments_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/utils/agentPreviewUrl.ts
var AGENT_PREVIEW_PATH = /^\/projects\/([^/]+)\/agents\/([^/]+)\/preview\/?$/;
var AGENT_BUILDER_PATH = /^\/projects\/([^/]+)\/agents\/([^/]+)\/?$/;
var ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+.-]*:/i;
function decodePathSegment(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
function buildAgentPreviewHref(projectId, agentId, queryParams) {
	const searchParams = new URLSearchParams(queryParams);
	searchParams.set(OPEN_PREVIEW_PARAM, "true");
	return `/projects/${encodeURIComponent(projectId)}/agents/${encodeURIComponent(agentId)}?${searchParams.toString()}`;
}
function resolveAgentPreviewLink(href, origin = window.location.origin) {
	const isRootRelative = href.startsWith("/") && !href.startsWith("//");
	const isAbsolute = ABSOLUTE_URL_PATTERN.test(href);
	if (!isRootRelative && !isAbsolute) return void 0;
	try {
		const url = new URL(href, origin);
		if (url.origin !== origin) return void 0;
		const match = AGENT_PREVIEW_PATH.exec(url.pathname) ?? (url.searchParams.get("openPreview") === "true" ? AGENT_BUILDER_PATH.exec(url.pathname) : null);
		if (!match) return void 0;
		const searchParams = new URLSearchParams(url.search);
		searchParams.set(OPEN_PREVIEW_PARAM, "true");
		return {
			projectId: decodePathSegment(match[1]),
			agentId: decodePathSegment(match[2]),
			href: `/projects/${match[1]}/agents/${match[2]}?${searchParams.toString()}`
		};
	} catch {
		return;
	}
}
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=script&setup=true&lang.ts
var AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMarkdownChunk",
	props: { source: {} },
	setup(__props) {
		const router = useRouter();
		const openAgentChatPreview = inject("openAgentChatPreview", void 0);
		function handleLinkClick(event) {
			if (!(event.target instanceof Element)) return;
			const link = event.target.closest("a");
			if (!link) return;
			const href = link.getAttribute("href");
			if (!href) return;
			const previewTarget = resolveAgentPreviewLink(href);
			if (!previewTarget) return;
			link.setAttribute("href", previewTarget.href);
			if (openAgentChatPreview) {
				event.preventDefault();
				openAgentChatPreview(previewTarget.agentId, previewTarget.projectId);
				return;
			}
			if (event.metaKey || event.ctrlKey) return;
			event.preventDefault();
			router.push(previewTarget.href);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VueMarkdown), {
				source: __props.source,
				class: normalizeClass(_ctx.$style.markdown),
				onClick: handleLinkClick
			}, null, 8, ["source", "class"]);
		};
	}
});
var AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = { markdown: "_markdown_4nfy1_1" };
var AgentMarkdownChunk_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_lj3nf_276";
var typingBlink$1 = "_typingBlink_lj3nf_1";
var shimmer$1 = "_shimmer_lj3nf_1";
var spin$1 = "_spin_lj3nf_1";
var opacityPulse$1 = "_opacityPulse_lj3nf_1";
var popoverIn$1 = "_popoverIn_lj3nf_1";
var fadeIn$1 = "_fadeIn_lj3nf_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_lj3nf_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_lj3nf_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_lj3nf_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_lj3nf_1";
var blurSwapIn$1 = "_blurSwapIn_lj3nf_1";
var blurSwapOut$1 = "_blurSwapOut_lj3nf_1";
var pulseGlow$1 = "_pulseGlow_lj3nf_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_lj3nf_1";
var fade$1 = "_fade_lj3nf_1";
var fadeInUp$1 = "_fadeInUp_lj3nf_1";
var fadeInDown$1 = "_fadeInDown_lj3nf_1";
var fadeInLeft$1 = "_fadeInLeft_lj3nf_1";
var fadeInRight$1 = "_fadeInRight_lj3nf_1";
var fadeOut$1 = "_fadeOut_lj3nf_1";
var fadeOutDown$1 = "_fadeOutDown_lj3nf_1";
var fadeOutUp$1 = "_fadeOutUp_lj3nf_1";
var fadeOutLeft$1 = "_fadeOutLeft_lj3nf_1";
var fadeOutRight$1 = "_fadeOutRight_lj3nf_1";
var ping$1 = "_ping_lj3nf_1";
var blinkBackground$1 = "_blinkBackground_lj3nf_1";
var AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink: typingBlink$1,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_lj3nf_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1
};
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "agent-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var AgentTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/interactionRegistry.ts
function findInteractionRenderer(payload, renderers) {
	return renderers.find((renderer) => renderer.matches(payload));
}
//#endregion
//#region src/features/ai/shared/agentsChat/components/InteractionRenderer.vue
var InteractionRenderer_default = /* @__PURE__ */ defineComponent({
	__name: "InteractionRenderer",
	props: {
		payload: {},
		renderers: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderer = computed(() => findInteractionRenderer(props.payload, props.renderers));
		const rendererProps = computed(() => {
			if (!renderer.value?.getProps) return { payload: props.payload };
			return renderer.value.getProps(props.payload);
		});
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return renderer.value ? (openBlock(), createBlock(resolveDynamicComponent(renderer.value.component), mergeProps({ key: 0 }, rendererProps.value, {
				disabled: __props.disabled,
				onSubmit
			}), null, 16, ["disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = {
	key: 0,
	"data-testid": "agent-approval-tool-details"
};
var ApprovalCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalCard",
	props: {
		input: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toolLabel = computed(() => props.input.displayName ?? props.input.toolName);
		const detailsText = computed(() => {
			const details = props.input.details ?? props.input.args;
			if (details === void 0) return "";
			try {
				return JSON.stringify(details, null, 2) ?? "";
			} catch {
				return String(details);
			}
		});
		function submit(approved) {
			if (props.disabled) return;
			emit("submit", { approved });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "agent-approval-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.description", { interpolate: { toolName: toolLabel.value } })), 1)]),
						_: 1
					}, 8, ["class"]),
					detailsText.value ? (openBlock(), createElementBlock("details", _hoisted_1$4, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.detailsSummary) }, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.viewToolDetails")), 1)]),
						_: 1
					})], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.args) }, toDisplayString(detailsText.value), 3)])) : createCommentVNode("", true),
					__props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.resolved)
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.resolvedValue.approved ? "circle-check" : "circle-x",
						size: "small",
						color: __props.resolvedValue.approved ? "success" : "danger"
					}, null, 8, ["icon", "color"]), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.resolvedValue.approved ? "agents.chat.approval.approved" : "agents.chat.approval.rejected")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						size: "medium",
						disabled: __props.disabled,
						"data-testid": "agent-approval-approve",
						onClick: _cache[0] || (_cache[0] = ($event) => submit(true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.approve")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						disabled: __props.disabled,
						"data-testid": "agent-approval-reject",
						onClick: _cache[1] || (_cache[1] = ($event) => submit(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.reject")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ApprovalCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_rsc2y_1",
	disabled: "_disabled_rsc2y_7",
	cardBody: "_cardBody_rsc2y_11",
	resolved: "_resolved_rsc2y_17",
	actions: "_actions_rsc2y_18",
	title: "_title_rsc2y_24",
	description: "_description_rsc2y_25",
	args: "_args_rsc2y_33",
	detailsSummary: "_detailsSummary_rsc2y_46"
};
var ApprovalCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApprovalCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApprovalCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["src", "alt"];
var N8nChatActionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatActionCard",
	props: {
		input: {},
		resolvedValue: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const blocks = computed(() => {
			const result = [];
			for (const component of props.input.card.components) if (component.type === "button") {
				const last = result[result.length - 1];
				if (last?.kind === "buttons") last.buttons.push(component);
				else result.push({
					kind: "buttons",
					buttons: [component]
				});
			} else result.push({
				kind: "component",
				component
			});
			return result;
		});
		const fallbackSummary = computed(() => {
			if (props.input.card.title || props.input.card.message) return void 0;
			const text = props.input.text?.trim();
			return text ? text : void 0;
		});
		/**
		* Map the card's button style to a design-system button variant, mirroring
		* how the platform mappers treat them: `primary` = emphasized, `danger` =
		* destructive, `default`/unset = neutral.
		*/
		function buttonVariant(btn) {
			if (btn.style === "primary") return "solid";
			if (btn.style === "danger") return "destructive";
			return "outline";
		}
		function submitButton(btn) {
			if (props.disabled) return;
			emit("submit", {
				type: "button",
				value: btn.value
			});
		}
		function submitOption(component, value) {
			if (props.disabled) return;
			emit("submit", {
				type: "select",
				...component.id && { id: component.id },
				value
			});
		}
		function isButtonSelected(btn) {
			return props.resolvedValue?.type === "button" && props.resolvedValue.value === btn.value;
		}
		function isOptionSelected(component, value) {
			return props.resolvedValue?.type === "select" && props.resolvedValue.value === value && (props.resolvedValue.id === void 0 || props.resolvedValue.id === component.id);
		}
		/** Chosen value for a select/radio_select group: the resolved answer, if any. */
		function selectedOptionValue(component) {
			return component.options.find((option) => isOptionSelected(component, option.value))?.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-testid": "n8n-chat-action-card"
			}, [
				__props.input.card.title ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.title), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				__props.input.card.message ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.message),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.message), 1)]),
					_: 1
				}, 8, ["class"])) : fallbackSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(fallbackSummary.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(blocks.value, (block, blockIdx) => {
					return openBlock(), createElementBlock(Fragment, { key: blockIdx }, [block.kind === "buttons" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.buttonRow),
						"data-testid": "n8n-chat-card-button-row"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.buttons, (button, buttonIdx) => {
						return openBlock(), createBlock(unref(N8nButton_default), {
							key: buttonIdx,
							size: "small",
							variant: buttonVariant(button),
							disabled: __props.disabled && !isButtonSelected(button),
							"data-testid": "n8n-chat-card-button",
							onClick: ($event) => submitButton(button)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(button.label ?? button.text ?? button.value), 1)]),
							_: 2
						}, 1032, [
							"variant",
							"disabled",
							"onClick"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [block.component.type === "section" && (block.component.text || block.component.button) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, [block.component.text ? (openBlock(), createBlock(unref(N8nText_default), { key: 0 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.text), 1)]),
						_: 2
					}, 1024)) : createCommentVNode("", true), block.component.button ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionButton),
						size: "small",
						variant: buttonVariant(block.component.button),
						disabled: __props.disabled && !isButtonSelected(block.component.button),
						"data-testid": "n8n-chat-card-section-button",
						onClick: ($event) => submitButton(block.component.button)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.button.label ?? block.component.button.text ?? block.component.button.value), 1)]),
						_: 2
					}, 1032, [
						"class",
						"variant",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)], 2)) : block.component.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : block.component.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
						return openBlock(), createBlock(unref(ElRadio), {
							key: option.value,
							class: normalizeClass(_ctx.$style.radio),
							"model-value": selectedOptionValue(block.component) ?? "",
							label: option.value,
							disabled: __props.disabled,
							"data-testid": "n8n-chat-card-radio",
							"onUpdate:modelValue": ($event) => submitOption(block.component, option.value)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(option.label), 1), option.description ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(option.description), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, [
							"class",
							"model-value",
							"label",
							"disabled",
							"onUpdate:modelValue"
						]);
					}), 128))], 2)) : block.component.type === "select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nSelect_default), {
						"model-value": selectedOptionValue(block.component),
						size: "small",
						disabled: __props.disabled,
						placeholder: block.component.placeholder,
						"data-testid": "n8n-chat-card-select",
						"onUpdate:modelValue": ($event) => submitOption(block.component, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								value: option.value,
								label: option.label
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"placeholder",
						"onUpdate:modelValue"
					])], 2)) : block.component.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.fields ?? block.component.items ?? [], (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : block.component.type === "image" && block.component.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: block.component.url,
						alt: block.component.alt ?? block.component.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$3)) : createCommentVNode("", true)], 64))], 64);
				}), 128))
			], 2);
		};
	}
});
var N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1wrhr_2",
	title: "_title_1wrhr_11",
	message: "_message_1wrhr_15",
	section: "_section_1wrhr_19",
	sectionButton: "_sectionButton_1wrhr_26",
	divider: "_divider_1wrhr_30",
	buttonRow: "_buttonRow_1wrhr_36",
	selectGroup: "_selectGroup_1wrhr_42",
	selectLabel: "_selectLabel_1wrhr_48",
	radio: "_radio_1wrhr_52",
	fieldsGroup: "_fieldsGroup_1wrhr_56",
	fieldRow: "_fieldRow_1wrhr_62",
	image: "_image_1wrhr_67"
};
var N8nChatActionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatActionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/InteractiveCard.vue
var InteractiveCard_default = /* @__PURE__ */ defineComponent({
	__name: "InteractiveCard",
	props: { payload: {} },
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/**
		* Disabled when the card is already resolved OR when it's still open but has
		* no `runId` to resume against. The latter happens when a stale interactive
		* card from the open checkpoint can't be matched to a backend suspension —
		* normally an after-effect of expired or pruned checkpoint state.
		*/
		const disabled = computed(() => !!props.payload.resolvedAt || !props.payload.runId);
		const interactiveRenderers = [
			{
				key: "approval",
				component: ApprovalCard_default,
				matches: (payload) => payload.toolName === APPROVAL_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "approval") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "chat_action",
				component: N8nChatActionCard_default,
				matches: (payload) => payload.toolName === N8N_CHAT_ACTION_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "chat_action") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "wait",
				component: N8nChatActionCard_default,
				matches: (payload) => payload.toolName === WAIT_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "wait") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			}
		];
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InteractionRenderer_default, {
				payload: __props.payload,
				renderers: interactiveRenderers,
				disabled: disabled.value,
				onSubmit
			}, null, 8, ["payload", "disabled"]);
		};
	}
});
//#endregion
//#region src/features/agents/utils/fix-with-assistant.ts
var MAX_FIX_WITH_ASSISTANT_DRAFT_LENGTH = Math.min(16e3, EXTENDED_PROMPT_MAX_LENGTH);
var MAX_ERROR_LENGTH = 4e3;
var MAX_ERROR_DETAILS_TOTAL_LENGTH = 1e4;
var MAX_METADATA_VALUE_LENGTH = 160;
var MAX_TOOL_CALLS_PER_ERROR = 8;
var UNTRUSTED_DATA_CLOSE_TAG_PATTERN = /<\/untrusted_data/gi;
var SERVICE_CONTEXT_TAG_PATTERN = /<(\/?(?:thread-context|thread-artifacts|current-date-time|project-context))/gi;
var INVISIBLE_UNICODE_PATTERN = /[\u200B-\u200F\u2028-\u202F\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB\u00AD\u034F\u061C\u180E\u{E0001}\u{E0020}-\u{E007F}]/gu;
function truncate(value, maxLength, suffix) {
	if (value.length <= maxLength) return {
		value,
		truncated: false
	};
	const contentLength = Math.max(0, maxLength - suffix.length);
	return {
		value: `${value.slice(0, contentLength).trimEnd()}${suffix}`,
		truncated: true
	};
}
/** Neutralises prompt-injection markers before a value is embedded in a draft. */
function sanitizeDiagnosticText(value) {
	return value.replace(/<!--[\s\S]*?-->/g, "").replace(INVISIBLE_UNICODE_PATTERN, "").replace(UNTRUSTED_DATA_CLOSE_TAG_PATTERN, "&lt;/untrusted_data").replace(SERVICE_CONTEXT_TAG_PATTERN, "&lt;$1");
}
function metadataValue(value) {
	return truncate(sanitizeDiagnosticText(value).replaceAll(/\s+/g, " ").trim(), MAX_METADATA_VALUE_LENGTH, "…").value;
}
function formatTimestamp(timestamp) {
	if (timestamp === void 0 || !Number.isFinite(timestamp)) return void 0;
	const date = new Date(timestamp);
	if (Number.isNaN(date.getTime())) return void 0;
	return date.toISOString();
}
function groupFailures(failures) {
	const byError = /* @__PURE__ */ new Map();
	for (const failure of failures) {
		const error = scrubSecretsInText(sanitizeDiagnosticText(failure.error.trim()));
		if (!error) continue;
		const group = byError.get(error);
		if (group) {
			if (!failure.toolCallId || !group.failures.some(({ toolCallId }) => toolCallId === failure.toolCallId)) group.failures.push(failure);
		} else byError.set(error, {
			error,
			failures: [failure]
		});
	}
	return [...byError.values()];
}
function buildToolCallDiagnostic(failure) {
	const startedAt = formatTimestamp(failure.startedAt);
	const endedAt = formatTimestamp(failure.endedAt);
	const durationMs = failure.startedAt !== void 0 && failure.endedAt !== void 0 && Number.isFinite(failure.startedAt) && Number.isFinite(failure.endedAt) && failure.endedAt >= failure.startedAt ? failure.endedAt - failure.startedAt : void 0;
	return {
		toolDisplayName: metadataValue(failure.toolDisplayName || failure.toolName),
		toolName: metadataValue(failure.toolName),
		toolCallId: metadataValue(failure.toolCallId),
		...startedAt ? { startedAt } : {},
		...endedAt ? { endedAt } : {},
		...durationMs !== void 0 ? { durationMs } : {}
	};
}
function buildFailureDiagnostic(group, maxErrorLength) {
	const displayedFailures = group.failures.slice(0, MAX_TOOL_CALLS_PER_ERROR);
	const omittedToolCallCount = group.failures.length - displayedFailures.length;
	const error = truncate(group.error.replaceAll("\r\n", "\n"), maxErrorLength, "…");
	const diagnostic = {
		error: error.value,
		toolCalls: displayedFailures.map(buildToolCallDiagnostic)
	};
	if (error.truncated) diagnostic.errorTruncated = true;
	if (omittedToolCallCount > 0) diagnostic.omittedToolCallCount = omittedToolCallCount;
	return diagnostic;
}
function buildDiagnosticContext(context) {
	return {
		projectId: metadataValue(context.projectId),
		agentId: metadataValue(context.agentId),
		...context.agentName ? { agentName: metadataValue(context.agentName) } : {},
		sessionId: metadataValue(context.threadId),
		...context.sessionTitle ? { sessionTitle: metadataValue(context.sessionTitle) } : {},
		...context.sessionNumber !== void 0 ? { sessionNumber: context.sessionNumber } : {},
		executionId: metadataValue(context.executionId)
	};
}
function buildDiagnosticPayload(context, failures, omittedErrorCount, allErrorDetailsUnavailable) {
	return {
		context,
		failures,
		...omittedErrorCount > 0 ? { omittedErrorCount } : {},
		...allErrorDetailsUnavailable ? { errorDetailsUnavailable: true } : {}
	};
}
var BODY_SENTINEL = "__N8N_ASSISTANT_DRAFT_BODY__";
/**
* Put caller-supplied text into an assistant draft template. The body goes in
* via a sentinel so `baseText` can never interpolate it a second time, and via
* a replacer function so `$&` and `$1` in it stay literal.
*/
function renderAssistantDraft(i18n, templateKey, placeholder, body) {
	return i18n.baseText(templateKey, { interpolate: { [placeholder]: BODY_SENTINEL } }).replaceAll(BODY_SENTINEL, () => body);
}
function renderPrompt(payload, i18n) {
	return renderAssistantDraft(i18n, "agents.builder.preview.fixWithAssistantPrompt.template", "diagnostics", [
		"<untrusted_data source=\"agent-preview-tool-errors\">",
		JSON.stringify(payload, null, 2),
		"</untrusted_data>"
	].join("\n"));
}
function buildAgentFixWithAssistantPrompt(context, i18n) {
	const groups = groupFailures(context.failures);
	const maxErrorLength = Math.min(MAX_ERROR_LENGTH, Math.max(250, Math.floor(MAX_ERROR_DETAILS_TOTAL_LENGTH / Math.max(groups.length, 1))));
	const diagnosticContext = buildDiagnosticContext(context);
	const failureDiagnostics = [];
	let omittedErrorCount = 0;
	for (const [index, group] of groups.entries()) {
		const failure = buildFailureDiagnostic(group, maxErrorLength);
		const remainingErrorCount = groups.length - index - 1;
		if (renderPrompt(buildDiagnosticPayload(diagnosticContext, [...failureDiagnostics, failure], remainingErrorCount, false), i18n).length > MAX_FIX_WITH_ASSISTANT_DRAFT_LENGTH) {
			omittedErrorCount = groups.length - index;
			break;
		}
		failureDiagnostics.push(failure);
	}
	return renderPrompt(buildDiagnosticPayload(diagnosticContext, failureDiagnostics, omittedErrorCount, groups.length === 0), i18n);
}
//#endregion
//#region src/features/agents/utils/agent-change-request.ts
/**
* Detects preview-chat messages that ask the agent to change itself. The
* preview chat only runs the agent — configuration changes belong to the AI
* Assistant — so a match surfaces a hand-off note next to the message.
*
* ponytail: English keyword heuristic. Swap for a classifier if it misses too
* much, e.g. for non-English messages.
*/
/** Setup nouns that read as the agent's own even without "your". */
var CORE_ASPECT = "instructions?|system prompts?|tools?|skills?|integrations?|channels?|guardrails?|mcp(?: servers?)?|sub-?agents?|vector stores?|evals?|evaluations?|knowledge(?: base)?|triggers?|schedules?|credentials?|models?|persona(?:lity)?";
/** Everyday words — they only mean the agent's setup when tied to the agent. */
var OWNED_ASPECT = `${CORE_ASPECT}|names?|prompts?|behaviou?rs?|settings?|configuration|config|descriptions?|icons?|rules?|temperature|memor(?:y|ies)`;
var CHANGE_VERB = "add|adjust|attach|change|configure|connect|delete|disable|drop|edit|enable|give|hook up|improve|install|modify|remove|rename|replace|set up|setup|swap|tweak|update";
/** Apostrophes included so "the agent's description" counts as two words, not three. */
var WORD = "[\\w']+";
/** Keeps someone else's things out: "improve my sales skills" is not a setup change. */
var NOT_THEIRS = "(?!(?:my|his|her|its|our|their)\\b)";
var AGENT_POSSESSIVE = "(?:your|yourself|(?:the|this) agent(?:'s)?)";
var ASPECT_PHRASE = `(?:(?:${CORE_ASPECT})|${AGENT_POSSESSIVE}\\s+(?:${WORD}\\s+){0,2}(?:${OWNED_ASPECT}))`;
/**
* A change verb and part of the setup, close together, in either order:
* "add a tool", "connect a Slack channel", "your instructions need an update".
* They have to be near each other, or a stray verb turns a plain question
* ("summarise your knowledge base") into a change request.
*/
var CHANGE_REQUEST_RE = new RegExp(`\\b(?:(?:${CHANGE_VERB})\\b(?:\\s+${NOT_THEIRS}${WORD}){0,3}\\s+${NOT_THEIRS}${ASPECT_PHRASE}|${AGENT_POSSESSIVE}\\s+(?:${WORD}\\s+){0,3}(?:${OWNED_ASPECT})\\b(?:\\s+${WORD}){0,3}\\s+(?:${CHANGE_VERB}))\\b`, "i");
/** Bounded to what the hand-off would actually send, so a pasted log stays cheap. */
var MAX_CHANGE_REQUEST_LENGTH = 4e3;
function looksLikeAgentChangeRequest(text) {
	return CHANGE_REQUEST_RE.test(text.slice(0, MAX_CHANGE_REQUEST_LENGTH));
}
/**
* Draft that hands a preview-chat change request to the AI Assistant. The user
* wrote this sentence themselves and sees it in the composer, so it goes across
* as plain text — no fencing, no "treat this as data" preamble. It is still
* scrubbed, because a pasted secret should not travel to another surface.
*/
function buildAgentChangeRequestPrompt(changeRequest, i18n) {
	return renderAssistantDraft(i18n, "agents.builder.preview.editRequest.prompt.template", "request", scrubSecretsInText(sanitizeDiagnosticText(changeRequest.trim())).slice(0, MAX_CHANGE_REQUEST_LENGTH));
}
//#endregion
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=script&setup=true&lang.ts
var SCROLL_STICK_THRESHOLD_PX = 80;
/**
* True when the user is (or was last) near the bottom of the chat and wants
* incoming stream chunks to keep scrolling into view. Flipped to false when
* the user scrolls up away from the bottom, and back to true when they
* scroll back down or send a new message.
*/
var AgentChatMessageList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageList",
	props: {
		messages: {},
		messagingState: {},
		projectId: {},
		agentId: {},
		sessionId: {},
		canSendToAssistant: { type: Boolean }
	},
	emits: ["resume", "sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const canSendToAssistant = computed(() => Boolean(props.canSendToAssistant && props.agentId && props.sessionId));
		function onFixWithAssistant(group, failures) {
			if (group.kind === "backgroundJobSignal") return;
			const executionId = group.kind === "toolRun" ? group.executionId : group.message.executionId;
			if (!executionId || failures.length === 0) return;
			emit("sendToAssistant", {
				executionId,
				failures
			});
		}
		function onInteractiveSubmit(payload, resumeData) {
			if (!payload.runId) return;
			emit("resume", {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			});
		}
		function isIntegrationActionSuspend(value) {
			return isRecord(value) && value.type === "integration_action";
		}
		/**
		* Returns a display name for the external platform a tool call is waiting on,
		* or `undefined` when the tool call either isn't suspended or renders its own
		* interactive card. n8n_chat_action carries the integration_action sidecar
		* but is excluded explicitly because it renders its own interactive card in
		* the chat.
		*/
		function externalWaitPlatform(tc) {
			if (tc.state !== TOOL_CALL_STATE.SUSPENDED) return void 0;
			if (tc.tool === "chat_action") return void 0;
			if (!isIntegrationActionSuspend(tc.suspendPayload)) return void 0;
			const base = tc.tool.replace(/_action$/, "").replace(/_\d+$/, "");
			return base.charAt(0).toUpperCase() + base.slice(1);
		}
		/**
		* Open cards always render. Once resolved, answered interactive cards clear
		* from the chat (both approval and n8n chat cards collapse into their
		* tool-step summary) — but display-only n8n chat cards persist: they are
		* content, and being born resolved they would otherwise never render at all.
		*/
		function shouldRenderInteractive(payload) {
			if (!payload.resolvedAt) return !!payload.runId;
			return payload.toolName === "chat_action" && !isAwaitingCard(payload.input.card);
		}
		function getRenderableInteractives(message) {
			return getMessageInteractives(message).filter(shouldRenderInteractive);
		}
		function getMessageRenderItems(message) {
			const renderableInteractives = getRenderableInteractives(message);
			const renderableByToolCallId = new Map(renderableInteractives.map((payload) => [payload.toolCallId, payload]));
			if (!message.renderParts?.length) return [...message.content ? [{
				type: "text",
				key: "text",
				text: message.content
			}] : [], ...renderableInteractives.map((payload) => ({
				type: "interactive",
				key: `interactive-${payload.toolCallId}`,
				payload
			}))];
			const items = [];
			const renderedInteractiveIds = /* @__PURE__ */ new Set();
			for (const [index, part] of message.renderParts.entries()) {
				if (part.type === "text") {
					if (part.text) items.push({
						type: "text",
						key: `text-${index}`,
						text: part.text
					});
					continue;
				}
				const payload = renderableByToolCallId.get(part.toolCallId);
				if (!payload) continue;
				renderedInteractiveIds.add(payload.toolCallId);
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			for (const payload of renderableInteractives) {
				if (renderedInteractiveIds.has(payload.toolCallId)) continue;
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			return items;
		}
		const scrollRef = useTemplateRef("scrollRef");
		const displayGroups = computed(() => buildDisplayGroups(props.messages));
		const formatChatDividerTimestamp = useChatDividerTimestamp();
		/**
		* Divider label by group id: the first user message gets one, and so does any
		* later user message whose gap since the previous one exceeds the window above.
		* Messages without a `createdAt` (older history) are skipped and never become
		* the "previous" reference.
		*/
		const dividerLabels = computed(() => {
			const labels = /* @__PURE__ */ new Map();
			let previousUserCreatedAt;
			for (const group of displayGroups.value) {
				if (group.kind !== "message" || group.message.role !== "user") continue;
				const createdAt = group.message.createdAt;
				if (createdAt === void 0) continue;
				if (previousUserCreatedAt === void 0 || createdAt - previousUserCreatedAt > TIME.HOUR || !isSameLocalDay(new Date(createdAt), new Date(previousUserCreatedAt))) labels.set(group.id, formatChatDividerTimestamp(createdAt));
				previousUserCreatedAt = createdAt;
			}
			return labels;
		});
		const changeNoteDismissed = useSessionStorage(computed(function getChangeNoteDismissedKey() {
			return `N8N_AGENT_PREVIEW_CHANGE_NOTE_DISMISSED:${props.sessionId ?? ""}`;
		}), false);
		/**
		* Newest user message that reads as a request to change the agent itself. Only
		* the newest one carries the hand-off note, so a chat full of such asks doesn't
		* repeat the same banner.
		*/
		const changeRequestGroupId = computed(() => canSendToAssistant.value && !changeNoteDismissed.value ? displayGroups.value.findLast((group) => group.kind === "message" && group.message.role === "user" && looksLikeAgentChangeRequest(group.message.content))?.id : void 0);
		function onEditWithAssistant(changeRequest) {
			emit("sendToAssistant", { changeRequest });
		}
		function isThinkingActive(message) {
			return message.status === CHAT_MESSAGE_STATUS.STREAMING || message.status === CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function getAssistantGroupContent(group) {
			if (group.kind === "backgroundJobSignal") return "";
			if (group.kind === "toolRun") return group.finalMessage?.content ?? "";
			return group.message.role === "assistant" ? group.message.content : "";
		}
		function getAssistantRunContent(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return "";
			const lines = [];
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const content = getAssistantGroupContent(group).trim();
				if (content) lines.unshift(content);
			}
			return lines.join("\n\n");
		}
		function getRecallMemoryEntries(output) {
			if (!output || typeof output !== "object") return [];
			if (!("entries" in output) || !Array.isArray(output.entries)) return [];
			const entries = [];
			for (const [index, entry] of output.entries.entries()) {
				if (!entry || typeof entry !== "object") continue;
				if (!("content" in entry) || typeof entry.content !== "string") continue;
				const id = "id" in entry && typeof entry.id === "string" ? entry.id : "createdAt" in entry && typeof entry.createdAt === "string" ? entry.createdAt : `${entry.content}:${index}`;
				entries.push({
					id,
					content: entry.content
				});
			}
			return entries;
		}
		function parseMemoryOutput(output) {
			return getRecallMemoryEntries(output).map((entry) => ({
				id: entry.id,
				keyMemory: entry.content.trim(),
				evidence: []
			})).filter((memory) => memory.keyMemory.length > 0);
		}
		function isCompletedAssistantGroup(group) {
			if (group.kind === "backgroundJobSignal") return false;
			if (group.kind === "toolRun") return group.finalMessage !== void 0 && group.finalMessage.status !== CHAT_MESSAGE_STATUS.STREAMING && group.finalMessage.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
			return group.message.role === "assistant" && group.message.status !== CHAT_MESSAGE_STATUS.STREAMING && group.message.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function shouldShowAssistantFooter(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return false;
			const group = displayGroups.value[index];
			if (!isAssistantGroup(group) || !isCompletedAssistantGroup(group)) return false;
			const nextGroup = displayGroups.value[index + 1];
			return !nextGroup || !isAssistantGroup(nextGroup);
		}
		function getMemoriesUsedInAssistantRun(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return [];
			const memories = [];
			const memoryIds = /* @__PURE__ */ new Set();
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const toolCalls = group.kind === "toolRun" ? group.toolCalls : group.message.toolCalls ?? [];
				for (let j = toolCalls.length - 1; j >= 0; j--) {
					const toolCall = toolCalls[j];
					if (toolCall.tool !== "recall_memory") continue;
					const uniqueMemories = parseMemoryOutput(toolCall.output).filter((memory) => {
						if (memoryIds.has(memory.id)) return false;
						memoryIds.add(memory.id);
						return true;
					});
					memories.unshift(...uniqueMemories);
				}
			}
			return memories;
		}
		const openMemoryFooterGroupId = ref(null);
		function setMemoryFooterOpen(groupId, open) {
			openMemoryFooterGroupId.value = open ? groupId : openMemoryFooterGroupId.value === groupId ? null : openMemoryFooterGroupId.value;
		}
		const isStickToBottom = ref(true);
		function isNearBottom() {
			const el = scrollRef.value;
			if (!el) return true;
			return el.scrollHeight - el.scrollTop - el.clientHeight <= SCROLL_STICK_THRESHOLD_PX;
		}
		function onScroll() {
			isStickToBottom.value = isNearBottom();
		}
		function scrollToBottom() {
			nextTick(() => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (scrollRef.value) {
							scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
							isStickToBottom.value = true;
						}
					});
				});
			});
		}
		function autoScrollIfSticky() {
			if (isStickToBottom.value) scrollToBottom();
		}
		onMounted(() => {
			if (props.messages.length > 0) scrollToBottom();
		});
		watch(() => props.messages.length, (newLen, oldLen) => {
			if ((oldLen ?? 0) < newLen) {
				if (props.messages[newLen - 1]?.role === "user") {
					scrollToBottom();
					return;
				}
			}
			autoScrollIfSticky();
		}, { flush: "post" });
		watch(() => props.messagingState, autoScrollIfSticky, { flush: "post" });
		watch(() => {
			const last = props.messages[props.messages.length - 1];
			if (!last) return "";
			const thinking = getMessageThinkingSegments(last).map((segment) => segment.content).join("");
			return `${last.content}|${last.toolCalls?.length ?? 0}|${getMessageInteractives(last).length}|${thinking}`;
		}, autoScrollIfSticky, { flush: "post" });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollRef",
				ref: scrollRef,
				class: normalizeClass(_ctx.$style.messages),
				onScrollPassive: onScroll
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayGroups.value, (group) => {
				return openBlock(), createElementBlock(Fragment, { key: group.id }, [dividerLabels.value.has(group.id) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.timestampDivider),
					"data-testid": "agent-chat-timestamp-divider"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(dividerLabels.value.get(group.id)), 1)]),
					_: 2
				}, 1024)], 2)) : createCommentVNode("", true), group.kind === "backgroundJobSignal" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createVNode(AgentChatBackgroundJobSignal_default, {
					class: normalizeClass(_ctx.$style.content),
					signal: group.signal
				}, null, 8, ["class", "signal"])], 2)) : group.kind === "toolRun" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.toolCalls.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.toolCalls, (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.interactives.some(shouldRenderInteractive) ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.interactives)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.interactives.filter(shouldRenderInteractive), (payload) => {
						return openBlock(), createBlock(InteractiveCard_default, {
							key: payload.toolCallId,
							payload,
							onSubmit: ($event) => onInteractiveSubmit(payload, $event)
						}, null, 8, ["payload", "onSubmit"]);
					}), 128))], 2)) : createCommentVNode("", true),
					group.finalMessage?.content ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.finalMessage.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: group.finalMessage.content }, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 3,
						segments: group.thinkingSegments,
						active: group.active || group.awaitingInput,
						"awaiting-input": group.awaitingInput,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.active && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"]), getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					}, null, 8, ["content", "can-send-to-assistant"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					group.finalMessage?.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.finalMessage.content && !group.toolCalls.length && !group.thinkingSegments.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 5,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass([_ctx.$style.message, group.message.role === "user" ? _ctx.$style.user : _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.message.toolCalls?.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.message.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.message.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.message.toolCalls ?? [], (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.message.attachments?.length && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
						key: 1,
						attachments: group.message.attachments,
						"project-id": __props.projectId,
						"agent-id": __props.agentId
					}, null, 8, [
						"attachments",
						"project-id",
						"agent-id"
					])) : createCommentVNode("", true),
					group.message.role === "user" && group.message.author ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "xsmall",
						color: "text-light",
						class: normalizeClass(_ctx.$style.author),
						"data-testid": "agent-chat-message-author"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.message.author.name), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					group.message.role === "user" && group.message.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 4 }, renderList(getMessageRenderItems(group.message), (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.key }, [item.type === "text" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.message.status === "error" }])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: item.text }, null, 8, ["source"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.interactives)
						}, [createVNode(InteractiveCard_default, {
							payload: item.payload,
							onSubmit: ($event) => onInteractiveSubmit(item.payload, $event)
						}, null, 8, ["payload", "onSubmit"])], 2))], 64);
					}), 128)),
					group.id === changeRequestGroupId.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 5,
						theme: "info",
						icon: "wand-sparkles",
						slim: "",
						class: normalizeClass(_ctx.$style.changeRequestNote),
						"data-testid": "agent-preview-change-request-note"
					}, {
						actions: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.changeRequestDismiss),
							"aria-label": unref(i18n).baseText("generic.dismiss"),
							title: unref(i18n).baseText("generic.dismiss"),
							"data-testid": "agent-preview-change-request-dismiss",
							onClick: _cache[1] || (_cache[1] = ($event) => changeNoteDismissed.value = true)
						}, null, 8, [
							"class",
							"aria-label",
							"title"
						])]),
						trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "small",
							variant: "subtle",
							class: normalizeClass(_ctx.$style.changeRequestAction),
							"data-testid": "agent-preview-change-request-link",
							onClick: ($event) => onEditWithAssistant(group.message.content)
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "sparkles",
								size: "small"
							})]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.editRequest.action")), 1)]),
							_: 1
						}, 8, ["class", "onClick"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.editRequest.note")) + " ", 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 6,
						segments: group.thinkingSegments,
						active: isThinkingActive(group.message),
						"awaiting-input": group.message.status === unref(CHAT_MESSAGE_STATUS).AWAITING_USER,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 7,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onSendToAssistant: _cache[2] || (_cache[2] = ($event) => emit("sendToAssistant"))
					}, null, 8, ["content", "can-send-to-assistant"])) : createCommentVNode("", true), createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"])], 2)) : createCommentVNode("", true),
					group.message.role === "assistant" && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length && !unref(getMessageThinkingSegments)(group.message).length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 8,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
});
var AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default = {
	messages: "_messages_1u9jg_1",
	message: "_message_1u9jg_1",
	timestampDivider: "_timestampDivider_1u9jg_24",
	content: "_content_1u9jg_29",
	messageFooter: "_messageFooter_1u9jg_35",
	assistant: "_assistant_1u9jg_44",
	messageFooterVisible: "_messageFooterVisible_1u9jg_48",
	user: "_user_1u9jg_52",
	interactives: "_interactives_1u9jg_62",
	changeRequestNote: "_changeRequestNote_1u9jg_74",
	changeRequestDismiss: "_changeRequestDismiss_1u9jg_82",
	changeRequestAction: "_changeRequestAction_1u9jg_88",
	chatMessage: "_chatMessage_1u9jg_92",
	chatMessageUser: "_chatMessageUser_1u9jg_101",
	author: "_author_1u9jg_110",
	chatMessageError: "_chatMessageError_1u9jg_114",
	markdownContent: "_markdownContent_1u9jg_122",
	typingIndicator: "_typingIndicator_1u9jg_134"
};
var AgentChatMessageList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentBackgroundJobs.ts
var MAX_RETRIES = 2;
function useAgentBackgroundJobs(target) {
	const rootStore = useRootStore();
	const pushStore = usePushConnectionStore();
	const visibility = useDocumentVisibility();
	const group = ref({ tasks: [] });
	const jobs = computed(() => {
		const received = new Map(toValue(target.receivedJobs)?.map((job) => [job.id, job]));
		const current = group.value.tasks.map((job) => ({
			...job,
			status: received.get(job.id)?.status ?? job.status
		}));
		if (current.some((job) => job.status === "running")) return current;
		return group.value.pendingTaskIds?.some((id) => !received.has(id)) ? current : [];
	});
	const active = computed(() => toValue(target.active) && visibility.value === "visible");
	let generation = 0;
	let disposed = false;
	let inFlight;
	let queued = false;
	let scheduled = false;
	let retries = 0;
	let retryTimer;
	function clearRetry() {
		clearTimeout(retryTimer);
		retryTimer = void 0;
	}
	async function fetchJobs() {
		scheduled = false;
		const projectId = toValue(target.projectId);
		const agentId = toValue(target.agentId);
		const threadId = toValue(target.threadId);
		if (disposed || !active.value || !threadId) return;
		if (inFlight) {
			queued = true;
			return;
		}
		const requestGeneration = generation;
		const request = { generation: requestGeneration };
		inFlight = request;
		const isCurrent = () => !disposed && active.value && generation === requestGeneration && projectId === toValue(target.projectId) && agentId === toValue(target.agentId) && threadId === toValue(target.threadId);
		try {
			const result = await getAgentBackgroundJobs(rootStore.restApiContext, projectId, agentId, threadId);
			if (isCurrent()) {
				group.value = {
					...result,
					tasks: [...result.tasks].sort((a, b) => a.startedAt.localeCompare(b.startedAt) || a.id.localeCompare(b.id))
				};
				retries = 0;
			}
		} catch {
			if (isCurrent() && !queued && retries < MAX_RETRIES) retryTimer = setTimeout(() => {
				retryTimer = void 0;
				scheduleRefresh();
			}, TIME.SECOND * 2 ** retries++);
		} finally {
			if (inFlight === request) {
				inFlight = void 0;
				if (queued) {
					queued = false;
					scheduleRefresh();
				}
			}
		}
	}
	function scheduleRefresh() {
		if (disposed || !active.value || scheduled) return;
		clearRetry();
		scheduled = true;
		Promise.resolve().then(fetchJobs);
	}
	function refresh() {
		retries = 0;
		scheduleRefresh();
	}
	const removeListener = pushStore.addEventListener((event) => {
		if (event.type === "agentBackgroundTasksUpdated" && event.data.projectId === toValue(target.projectId) && event.data.agentId === toValue(target.agentId) && event.data.threadId === toValue(target.threadId)) refresh();
	});
	watch([
		() => toValue(target.projectId),
		() => toValue(target.agentId),
		() => toValue(target.threadId)
	], () => {
		generation++;
		inFlight = void 0;
		queued = false;
		group.value = { tasks: [] };
		clearRetry();
		refresh();
	}, { flush: "sync" });
	watch(active, (enabled) => {
		generation++;
		inFlight = void 0;
		queued = false;
		clearRetry();
		if (enabled) refresh();
	}, { immediate: true });
	watch(() => pushStore.isConnected, (connected) => {
		if (connected) refresh();
	});
	onScopeDispose(() => {
		disposed = true;
		clearRetry();
		removeListener();
	});
	return { jobs };
}
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"aria-label",
	"title",
	"data-status"
];
var _hoisted_2$1 = ["title"];
var _hoisted_3$1 = { key: 1 };
var AgentChatPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatPanel",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		projectId: {},
		agentId: {},
		mode: { default: "panel" },
		continueSessionId: { default: void 0 },
		newSession: {
			type: Boolean,
			default: false
		},
		agentConfig: {},
		agentStatus: {},
		connectedTriggers: {},
		canEditAgent: {
			type: Boolean,
			default: true
		},
		canSendToAssistant: {
			type: Boolean,
			default: false
		},
		beforeSend: {
			type: Function,
			default: void 0
		},
		inputDraft: { default: void 0 },
		backgroundJobsActive: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:streaming",
		"update:inputDraft",
		"continue-loaded",
		"session-created",
		"initial-consumed",
		"back",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const toast = useToast();
		const { messages, queuedMessages, removingQueueIds, removeQueuedMessage, updateQueuedMessage, isSubmitting, isLoadingHistory, isStreaming, refresh, isCancelling, messagingState, fatalError, warnings, loadHistory, sendMessage, stopGenerating, detachStream, resume, cancelAndSteer, dismissFatalError, dismissWarning } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			continueSessionId: toRef(props, "continueSessionId"),
			newSession: toRef(props, "newSession"),
			onHistoryLoaded: (count) => {
				if (props.continueSessionId) emit("continue-loaded", {
					sessionId: props.continueSessionId,
					count
				});
			},
			onSessionCreated: (sessionId) => emit("session-created", sessionId)
		});
		const queueEdit = ref();
		const queueRows = computed(() => {
			const edit = queueEdit.value;
			if (edit && !queuedMessages.value.some((item) => item.id === edit.item.id)) return [...queuedMessages.value, edit.item];
			return queuedMessages.value;
		});
		const [DefineQueueList, QueueList] = createReusableTemplate({ inheritAttrs: false });
		const canSaveQueueEdit = computed(() => {
			const edit = queueEdit.value;
			return edit && !edit.saving && !edit.unavailable && (edit.text.trim().length > 0 || !!edit.item.attachments?.length);
		});
		watch(queuedMessages, (items) => {
			if (queueEdit.value && !items.some((item) => item.id === queueEdit.value?.item.id)) queueEdit.value.unavailable = true;
		});
		function startQueueEdit(item) {
			queueEdit.value = {
				item,
				text: item.message,
				unavailable: false,
				saving: false
			};
		}
		async function saveQueueEdit() {
			const edit = queueEdit.value;
			if (!edit || !canSaveQueueEdit.value) return;
			edit.saving = true;
			const result = await updateQueuedMessage(edit.item.id, edit.text);
			if (queueEdit.value !== edit) return;
			edit.saving = false;
			if (result === "updated") queueEdit.value = void 0;
			else if (result === "unavailable") edit.unavailable = true;
		}
		function onQueueEditKeydown(event) {
			if (event.isComposing) return;
			if (event.key === "Escape") {
				event.preventDefault();
				event.stopPropagation();
				if (!queueEdit.value?.saving) queueEdit.value = void 0;
			} else if (event.key === "Enter" && !event.shiftKey) {
				event.preventDefault();
				event.stopPropagation();
				saveQueueEdit();
			}
		}
		const { jobs: backgroundJobs } = useAgentBackgroundJobs({
			projectId: () => props.projectId,
			agentId: () => props.agentId,
			threadId: () => props.continueSessionId,
			active: () => props.backgroundJobsActive,
			receivedJobs: () => messages.value.flatMap((message) => message.backgroundJobSignal?.tasks ?? [])
		});
		const backgroundRunningCount = computed(() => backgroundJobs.value.filter((job) => job.status === "running").length);
		const backgroundTitle = computed(() => {
			const count = backgroundRunningCount.value;
			if (count === 0) return locale.baseText("agents.chat.backgroundTasks.finished", { adjustToNumber: backgroundJobs.value.length });
			return locale.baseText("agents.chat.backgroundTasks.runningCount", {
				adjustToNumber: count,
				interpolate: { count }
			});
		});
		const backgroundTraceRoute = computed(() => ({
			name: AGENT_SESSION_DETAIL_VIEW,
			params: {
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.continueSessionId
			}
		}));
		const backgroundJobStatuses = computed(() => ({
			running: {
				icon: "loader-circle",
				label: locale.baseText("agents.chat.backgroundTasks.status.running")
			},
			completed: {
				icon: "circle-check",
				label: locale.baseText("agents.chat.backgroundTasks.status.completed")
			},
			failed: {
				icon: "circle-x",
				label: locale.baseText("agents.chat.backgroundTasks.status.failed")
			},
			cancelled: {
				icon: "circle-x",
				label: locale.baseText("agents.chat.backgroundTasks.status.cancelled")
			},
			waiting: {
				icon: "circle",
				label: locale.baseText("agents.chat.backgroundTasks.status.waiting")
			}
		}));
		const backgroundJobRows = computed(() => backgroundJobs.value.map((job) => ({
			...job,
			label: locale.baseText(job.kind === "workflow" ? "agents.chat.backgroundTasks.workflow" : "agents.chat.backgroundTasks.subagent", { interpolate: { title: job.title } }),
			indicator: backgroundJobStatuses.value[job.kind === "workflow" && job.status === "running" ? "waiting" : job.status]
		})));
		const now = ref(Date.now());
		const documentVisibility = useDocumentVisibility();
		const { pause: pauseTimer, resume: resumeTimer } = useIntervalFn(() => {
			now.value = Date.now();
		}, TIME.SECOND, { immediate: false });
		watch(() => props.backgroundJobsActive && backgroundRunningCount.value > 0 && documentVisibility.value === "visible", (active) => {
			if (active) {
				now.value = Date.now();
				resumeTimer();
			} else pauseTimer();
		}, { immediate: true });
		const backgroundElapsed = computed(() => {
			const startedAt = backgroundJobs.value[0]?.startedAt;
			const start = startedAt ? Date.parse(startedAt) : now.value;
			const end = backgroundRunningCount.value ? now.value : Math.max(...backgroundJobs.value.map((job) => Date.parse(job.settledAt ?? "") || now.value));
			const seconds = Number.isFinite(start) ? Math.max(0, Math.floor((end - start) / TIME.SECOND)) : 0;
			const minutes = Math.floor(seconds / 60);
			const remainder = String(seconds % 60).padStart(2, "0");
			return minutes < 60 ? `${minutes}:${remainder}` : `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}:${remainder}`;
		});
		const attachedFiles = ref([]);
		const chatInput = useTemplateRef("chatInput");
		const backgroundJobCard = useTemplateRef("backgroundJobCard");
		const showBackgroundJobs = computed(() => props.backgroundJobsActive && backgroundJobs.value.length > 0);
		function focusInput(options) {
			chatInput.value?.focus(options);
		}
		watch([
			showBackgroundJobs,
			() => props.projectId,
			() => props.agentId,
			() => props.continueSessionId,
			() => props.visible
		], async ([shown, ...target], [wasShown, ...previousTarget], onCleanup) => {
			if (shown || !wasShown || !props.visible || target.some((value, index) => value !== previousTarget[index]) || !backgroundJobCard.value?.contains(document.activeElement)) return;
			let cancelled = false;
			onCleanup(() => {
				cancelled = true;
			});
			await nextTick();
			if (cancelled || disposed || !props.visible || showBackgroundJobs.value || document.activeElement !== document.body) return;
			focusInput({ preventScroll: true });
		});
		const attachmentCapabilities = computed(() => {
			const provider = props.agentConfig?.model?.split("/")[0];
			return provider ? PROVIDER_CAPABILITIES[provider]?.attachments : void 0;
		});
		const showAttach = computed(() => {
			const capabilities = attachmentCapabilities.value;
			return !!capabilities && (capabilities.image || capabilities.pdf || capabilities.audio);
		});
		const acceptedMimeTypes = computed(() => {
			const capabilities = attachmentCapabilities.value;
			if (!capabilities) return void 0;
			return [
				capabilities.image ? "image/*" : null,
				capabilities.pdf ? "application/pdf" : null,
				capabilities.audio ? "audio/*" : null
			].filter((entry) => entry !== null).join(",");
		});
		function handleFilesSelected(files) {
			for (const file of files) {
				if (attachedFiles.value.length >= 10) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooMany", { interpolate: { limit: String(10) } })
					});
					break;
				}
				if (file.size > 10485760) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooLarge", { interpolate: {
							fileName: file.name,
							limit: String(10)
						} })
					});
					continue;
				}
				attachedFiles.value.push(file);
			}
		}
		function handleFileRemove(file) {
			attachedFiles.value = attachedFiles.value.filter((f) => f !== file);
		}
		const internalInputText = ref(props.inputDraft ?? "");
		const inputText = computed({
			get: () => props.inputDraft !== void 0 ? props.inputDraft : internalInputText.value,
			set: (value) => {
				if (props.inputDraft !== void 0) emit("update:inputDraft", value);
				else internalInputText.value = value;
			}
		});
		const hasDraft = computed(() => inputText.value.trim().length > 0 || attachedFiles.value.length > 0);
		const isPreparingToSend = ref(false);
		let disposed = false;
		let queuedExternalMessage;
		let submittingQueuedExternalMessage = false;
		const RUNTIME_ISSUE_PATH_PREFIXES = [
			{
				prefix: "tools.",
				key: "agents.chat.misconfigured.missing.tools"
			},
			{
				prefix: "mcpServers.",
				key: "agents.chat.misconfigured.missing.mcpServers"
			},
			{
				prefix: "subAgents.agents.",
				key: "agents.chat.misconfigured.missing.subAgents.agents"
			}
		];
		function humaniseMissingField(field) {
			if (field.startsWith("skill:")) return locale.baseText("agents.chat.misconfigured.missing.skill", { interpolate: { id: field.slice(6) } });
			const exactKey = `agents.chat.misconfigured.missing.${field}`;
			const exactTranslation = locale.baseText(exactKey);
			if (exactTranslation !== exactKey) return exactTranslation;
			for (const { prefix, key } of RUNTIME_ISSUE_PATH_PREFIXES) if (field.startsWith(prefix)) return locale.baseText(key);
			return field;
		}
		const missingFields = computed(() => {
			if (!fatalError.value) return "";
			return fatalError.value.missing.map(humaniseMissingField).join(", ");
		});
		/**
		* Only the last turn can hold the input. A parked run is always the tail of the
		* transcript, so anything after it — a resumed answer, a later turn — means that
		* suspension is history. Reading the tail rather than the first open card
		* anywhere keeps one abandoned card from wedging the chat for good, and keeps it
		* from hiding a real question on the current turn.
		*/
		const openInteractive = computed(() => findTailOpenInteractive(messages.value));
		const hasOpenInteraction = computed(() => openInteractive.value !== void 0);
		const hasOpenApproval = computed(() => openInteractive.value?.toolName === APPROVAL_TOOL_NAME);
		const hasOpenWaitCard = computed(() => openInteractive.value?.toolName === WAIT_TOOL_NAME);
		const hasOpenInteractiveQuestion = computed(() => hasOpenInteraction.value && !hasOpenApproval.value && !hasOpenWaitCard.value);
		const hasOpenSuspension = computed(() => messages.value[messages.value.length - 1]?.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.SUSPENDED && toolCall.runId) ?? false);
		const isSubmissionBlocked = computed(() => isPreparingToSend.value || isSubmitting.value || isLoadingHistory.value);
		const hasInFlightToolCalls = computed(() => messages.value.some((message) => message.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING)));
		const showStop = computed(() => !hasDraft.value && !isLoadingHistory.value && (isStreaming.value || isCancelling.value || hasOpenInteraction.value || hasOpenSuspension.value || hasInFlightToolCalls.value));
		const chatPlaceholder = computed(() => {
			if (hasOpenInteractiveQuestion.value) return locale.baseText("agents.chat.answerQuestionPlaceholder");
			const agentName = props.agentConfig?.name?.trim();
			return agentName ? locale.baseText("agents.chat.input.placeholder.withAgent", { interpolate: { agentName } }) : locale.baseText("agents.chat.input.placeholder");
		});
		watch(isStreaming, (v) => emit("update:streaming", v));
		watch(isSubmissionBlocked, (blocked) => {
			if (!blocked) submitQueuedExternalMessage();
		});
		watch(() => props.visible, (visible) => {
			if (visible) refresh();
		});
		watch(() => [
			props.projectId,
			props.agentId,
			props.continueSessionId
		], () => {
			queuedExternalMessage = void 0;
			queueEdit.value = void 0;
		});
		function consumeQueuedExternalMessage(message) {
			if (queuedExternalMessage !== message) return;
			queuedExternalMessage = void 0;
			emit("initial-consumed");
		}
		async function onSubmit() {
			const text = inputText.value.trim();
			const files = [...attachedFiles.value];
			if (!text && files.length === 0) return "rejected";
			if (isSubmissionBlocked.value) return "busy";
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			const isCurrentTarget = () => !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
			if (hasOpenInteractiveQuestion.value) {
				if (!text) return "rejected";
				return await cancelAndSteer(text, () => {
					if (!isCurrentTarget()) return;
					if (inputText.value.trim() === text) inputText.value = "";
					consumeQueuedExternalMessage(text);
				}) === "busy" ? "busy" : "sent";
			}
			isPreparingToSend.value = true;
			try {
				try {
					await props.beforeSend?.();
				} catch {
					return "rejected";
				}
				if (!isCurrentTarget()) return "rejected";
				const fingerprint = await buildAgentConfigFingerprint(props.agentConfig, props.connectedTriggers);
				if (!isCurrentTarget()) return "rejected";
				const sending = sendMessage(text, files.length > 0 ? files : void 0, () => {
					if (!isCurrentTarget()) return;
					agentTelemetry.trackSubmittedMessage({
						agentId: props.agentId,
						status: props.agentStatus,
						agentConfig: fingerprint
					});
					if (inputText.value.trim() === text) inputText.value = "";
					attachedFiles.value = attachedFiles.value.filter((file) => !files.includes(file));
					consumeQueuedExternalMessage(text);
				});
				isPreparingToSend.value = false;
				if (await sending === "busy") return "busy";
				return "sent";
			} finally {
				isPreparingToSend.value = false;
			}
		}
		function sendMessageFromOutside(message) {
			queuedExternalMessage = message;
			inputText.value = message;
			submitQueuedExternalMessage();
		}
		async function submitQueuedExternalMessage() {
			const message = queuedExternalMessage;
			if (!message || submittingQueuedExternalMessage || isSubmissionBlocked.value) return;
			submittingQueuedExternalMessage = true;
			let result = "rejected";
			try {
				inputText.value = message;
				result = await onSubmit();
			} finally {
				submittingQueuedExternalMessage = false;
			}
			if (result === "rejected" && queuedExternalMessage === message) queuedExternalMessage = void 0;
			if (queuedExternalMessage && queuedExternalMessage !== message && !isSubmissionBlocked.value) {
				await nextTick();
				submitQueuedExternalMessage();
			}
		}
		function getConversationMarkdown() {
			return messages.value.filter((message) => message.content.trim().length > 0).map((message) => {
				return `**${message.role === "user" ? "User" : "Agent"}:**\n\n${message.content.trim()}`;
			}).join("\n\n---\n\n");
		}
		__expose({
			focusInput,
			getConversationMarkdown,
			sendMessageFromOutside
		});
		onMounted(() => {
			loadHistory();
		});
		onBeforeUnmount(() => {
			disposed = true;
			detachStream();
		});
		return (_ctx, _cache) => {
			return __props.visible ? (openBlock(), createElementBlock("aside", {
				key: 0,
				class: normalizeClass([__props.mode === "inline" ? _ctx.$style.inlinePanel : _ctx.$style.panel])
			}, [
				unref(fatalError) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.errorBanner),
					slim: ""
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"icon-only": "",
							variant: "ghost",
							size: "xsmall",
							"aria-label": unref(locale).baseText("agents.chat.misconfigured.dismiss"),
							onClick: unref(dismissFatalError)
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "x",
								size: "xsmall",
								"aria-hidden": "true"
							})]),
							_: 1
						}, 8, ["aria-label", "onClick"])]),
						_: 1
					}, 8, ["content"])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.title")), 3), missingFields.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.errorBannerDetail)
					}, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.issuesPrefix")) + " " + toDisplayString(missingFields.value), 3)) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(warnings), (warning, index) => {
					return openBlock(), createElementBlock("div", {
						key: `${warning.code ?? "mcp"}-${index}`,
						class: normalizeClass(_ctx.$style.warningBanner)
					}, [createVNode(unref(N8nCallout_default), {
						theme: "warning",
						slim: "",
						"data-test-id": `agent-chat-warning-${index}`
					}, {
						trailingContent: withCtx(() => [createVNode(unref(N8nTooltip_default), {
							content: unref(locale).baseText("agents.chat.warning.dismiss"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								"icon-only": "",
								variant: "ghost",
								size: "xsmall",
								"aria-label": unref(locale).baseText("agents.chat.warning.dismiss"),
								onClick: ($event) => unref(dismissWarning)(index)
							}, {
								icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "x",
									size: "xsmall",
									"aria-hidden": "true"
								})]),
								_: 1
							}, 8, ["aria-label", "onClick"])]),
							_: 2
						}, 1032, ["content"])]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.warning.mcp.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerDetail) }, toDisplayString(warning.server ? unref(locale).baseText("agents.chat.warning.mcp.detail", { interpolate: {
							server: warning.server,
							error: warning.message
						} }) : warning.message), 3)], 2)]),
						_: 2
					}, 1032, ["data-test-id"])], 2);
				}), 128)),
				unref(messages).length === 0 && !unref(isStreaming) ? (openBlock(), createBlock(AgentChatEmptyState_default, {
					key: 1,
					"agent-config": __props.agentConfig
				}, null, 8, ["agent-config"])) : (openBlock(), createBlock(AgentChatMessageList_default, {
					key: 2,
					messages: unref(messages),
					"messaging-state": unref(messagingState),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"session-id": __props.continueSessionId,
					"can-send-to-assistant": __props.canSendToAssistant,
					onResume: unref(resume),
					onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"messages",
					"messaging-state",
					"project-id",
					"agent-id",
					"session-id",
					"can-send-to-assistant",
					"onResume"
				])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [showBackgroundJobs.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "backgroundJobCard",
					ref: backgroundJobCard,
					class: normalizeClass(_ctx.$style.backgroundJobs),
					"data-testid": "agent-background-jobs"
				}, [(openBlock(), createBlock(unref(AiActivityStepGroup_default), {
					key: __props.continueSessionId,
					label: backgroundTitle.value,
					"full-width": "",
					"content-position": "above"
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: backgroundRunningCount.value ? "loader-circle" : "circle",
						spin: backgroundRunningCount.value > 0,
						size: "small",
						class: normalizeClass({ [_ctx.$style.jobSpinner]: backgroundRunningCount.value > 0 }),
						"aria-hidden": "true"
					}, null, 8, [
						"icon",
						"spin",
						"class"
					])]),
					"header-trailing": withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.jobTimer),
						"aria-live": "off",
						"data-testid": "agent-background-jobs-timer"
					}, toDisplayString(backgroundElapsed.value), 3)]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.backgroundJobDetails) }, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.backgroundJobList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(backgroundJobRows.value, (job) => {
						return openBlock(), createElementBlock("li", { key: job.id }, [createBaseVNode("span", {
							role: "img",
							"aria-label": job.indicator.label,
							title: job.indicator.label,
							class: normalizeClass([_ctx.$style.jobStatus, { [_ctx.$style.jobWaiting]: job.indicator.icon === "circle" }]),
							"data-status": job.status
						}, [createVNode(unref(N8nIcon_default), {
							icon: job.indicator.icon,
							spin: job.indicator.icon === "loader-circle",
							size: "small",
							class: normalizeClass({ [_ctx.$style.jobSpinner]: job.indicator.icon === "loader-circle" })
						}, null, 8, [
							"icon",
							"spin",
							"class"
						])], 10, _hoisted_1$2), createBaseVNode("span", null, toDisplayString(job.label), 1)]);
					}), 128))], 2), __props.continueSessionId ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						to: backgroundTraceRoute.value,
						theme: "text",
						size: "small",
						underline: "",
						"data-testid": "agent-background-jobs-trace"
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.jobTraceLabel) }, [createVNode(unref(N8nIcon_default), {
							icon: "arrow-right",
							size: "small",
							"aria-hidden": "true"
						}), createTextVNode(" " + toDisplayString(unref(locale).baseText("agents.chat.backgroundTasks.viewTrace")), 1)], 2)]),
						_: 1
					}, 8, ["to"])) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["label"]))], 2)) : createCommentVNode("", true), createVNode(ChatInputBase_default, {
					ref_key: "chatInput",
					ref: chatInput,
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => inputText.value = $event),
					placeholder: chatPlaceholder.value,
					"is-streaming": false,
					"show-stop-button": showStop.value,
					"show-voice": "",
					"show-attach": showAttach.value,
					"accepted-mime-types": acceptedMimeTypes.value,
					"can-submit": !isSubmissionBlocked.value && hasDraft.value,
					disabled: isPreparingToSend.value,
					"data-testid": "chat-input",
					onSubmit,
					onStop: unref(stopGenerating),
					onFilesSelected: handleFilesSelected
				}, createSlots({
					"footer-start": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
					_: 2
				}, [queueRows.value.length ? {
					name: "header",
					fn: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.messageQueue),
						"data-testid": "agent-message-queue"
					}, [
						createVNode(unref(DefineQueueList), null, {
							default: withCtx(({ items }) => [createBaseVNode("ul", { class: normalizeClass([_ctx.$style.backgroundJobList, _ctx.$style.queueList]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(items, (item) => {
								return openBlock(), createElementBlock("li", {
									key: item.id,
									"data-testid": "agent-queued-message"
								}, [createBaseVNode("div", {
									class: normalizeClass(_ctx.$style.queuePreview),
									title: item.message
								}, [
									queueEdit.value?.item.id === item.id ? (openBlock(), createBlock(unref(Input_default), {
										key: 0,
										modelValue: queueEdit.value.text,
										"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => queueEdit.value.text = $event),
										type: "textarea",
										size: "small",
										autosize: {
											minRows: 1,
											maxRows: 6
										},
										readonly: queueEdit.value.unavailable || queueEdit.value.saving,
										"aria-label": unref(locale).baseText("agents.chat.queue.edit"),
										autofocus: "",
										onKeydown: onQueueEditKeydown
									}, null, 8, [
										"modelValue",
										"readonly",
										"aria-label"
									])) : item.message ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(item.message), 1)) : createCommentVNode("", true),
									queueEdit.value?.item.id === item.id && queueEdit.value.unavailable ? (openBlock(), createElementBlock("p", {
										key: 2,
										class: normalizeClass(_ctx.$style.queueEditNotice),
										role: "status"
									}, toDisplayString(unref(locale).baseText("agents.chat.queue.editUnavailable")), 3)) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(item.attachments, (attachment) => {
										return openBlock(), createElementBlock("span", { key: attachment.id }, toDisplayString(attachment.fileName), 1);
									}), 128))
								], 10, _hoisted_2$1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.queueActions) }, [queueEdit.value?.item.id === item.id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nTooltip_default), {
									content: unref(locale).baseText("agents.chat.queue.save"),
									disabled: !canSaveQueueEdit.value,
									placement: "top"
								}, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										"icon-only": "",
										variant: "ghost",
										size: "xsmall",
										disabled: !canSaveQueueEdit.value,
										"aria-label": unref(locale).baseText("agents.chat.queue.save"),
										onClick: saveQueueEdit
									}, {
										icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "check",
											size: "large",
											"aria-hidden": "true"
										})]),
										_: 1
									}, 8, ["disabled", "aria-label"])]),
									_: 1
								}, 8, ["content", "disabled"]), createVNode(unref(N8nTooltip_default), {
									content: unref(locale).baseText("agents.chat.queue.cancelEdit"),
									disabled: queueEdit.value.saving,
									placement: "top"
								}, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										"icon-only": "",
										variant: "ghost",
										size: "xsmall",
										disabled: queueEdit.value.saving,
										"aria-label": unref(locale).baseText("agents.chat.queue.cancelEdit"),
										onClick: _cache[2] || (_cache[2] = ($event) => queueEdit.value = void 0)
									}, {
										icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "x",
											size: "large",
											"aria-hidden": "true"
										})]),
										_: 1
									}, 8, ["disabled", "aria-label"])]),
									_: 1
								}, 8, ["content", "disabled"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nTooltip_default), {
									content: unref(locale).baseText("agents.chat.queue.edit"),
									disabled: !!queueEdit.value || unref(removingQueueIds).has(item.id),
									placement: "top"
								}, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										"icon-only": "",
										variant: "ghost",
										size: "xsmall",
										disabled: !!queueEdit.value || unref(removingQueueIds).has(item.id),
										"aria-label": unref(locale).baseText("agents.chat.queue.edit"),
										onClick: ($event) => startQueueEdit(item)
									}, {
										icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "pencil",
											size: "large",
											"aria-hidden": "true"
										})]),
										_: 1
									}, 8, [
										"disabled",
										"aria-label",
										"onClick"
									])]),
									_: 2
								}, 1032, ["content", "disabled"]), createVNode(unref(N8nTooltip_default), {
									content: unref(locale).baseText("agents.chat.queue.remove"),
									disabled: unref(removingQueueIds).has(item.id),
									placement: "top"
								}, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										"icon-only": "",
										variant: "ghost",
										size: "xsmall",
										disabled: unref(removingQueueIds).has(item.id),
										"aria-label": unref(locale).baseText("agents.chat.queue.remove"),
										onClick: ($event) => unref(removeQueuedMessage)(item.id)
									}, {
										icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "trash-2",
											size: "large",
											"aria-hidden": "true"
										})]),
										_: 1
									}, 8, [
										"disabled",
										"aria-label",
										"onClick"
									])]),
									_: 2
								}, 1032, ["content", "disabled"])], 64))], 2)]);
							}), 128))], 2)]),
							_: 1
						}),
						createVNode(unref(QueueList), { items: queueRows.value.slice(0, 2) }, null, 8, ["items"]),
						queueRows.value.length > 2 ? (openBlock(), createBlock(unref(AiActivityStepGroup_default), {
							key: __props.continueSessionId,
							label: unref(queuedMessages).length > 2 ? unref(locale).baseText("agents.chat.queue.title", {
								adjustToNumber: unref(queuedMessages).length - 2,
								interpolate: { count: unref(queuedMessages).length - 2 }
							}) : unref(locale).baseText("agents.chat.queue.edit"),
							"full-width": "",
							"content-position": "above"
						}, {
							default: withCtx(() => [createVNode(unref(QueueList), { items: queueRows.value.slice(2) }, null, 8, ["items"])]),
							_: 1
						}, 8, ["label"])) : createCommentVNode("", true)
					], 2)]),
					key: "0"
				} : void 0, attachedFiles.value.length > 0 ? {
					name: "attachments",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachmentsStrip) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: `${file.name}-${index}`,
							file,
							"is-removable": "",
							onRemove: handleFileRemove
						}, null, 8, ["file"]);
					}), 128))], 2)]),
					key: "1"
				} : void 0]), 1032, [
					"modelValue",
					"placeholder",
					"show-stop-button",
					"show-attach",
					"accepted-mime-types",
					"can-submit",
					"disabled",
					"onStop"
				])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=style&index=0&lang.module.scss
var panel = "_panel_1ot7f_276";
var inlinePanel = "_inlinePanel_1ot7f_285";
var inputArea = "_inputArea_1ot7f_294";
var backgroundJobs = "_backgroundJobs_1ot7f_305";
var messageQueue = "_messageQueue_1ot7f_306";
var backgroundJobDetails = "_backgroundJobDetails_1ot7f_332";
var backgroundJobList = "_backgroundJobList_1ot7f_342";
var queueList = "_queueList_1ot7f_362";
var queueActions = "_queueActions_1ot7f_385";
var queueEditNotice = "_queueEditNotice_1ot7f_391";
var queuePreview = "_queuePreview_1ot7f_396";
var jobStatus = "_jobStatus_1ot7f_408";
var fadeIn = "_fadeIn_1ot7f_1";
var jobWaiting = "_jobWaiting_1ot7f_427";
var jobTraceLabel = "_jobTraceLabel_1ot7f_431";
var jobSpinner = "_jobSpinner_1ot7f_437";
var jobTimer = "_jobTimer_1ot7f_442";
var attachmentsStrip = "_attachmentsStrip_1ot7f_448";
var errorBanner = "_errorBanner_1ot7f_455";
var errorBannerBody = "_errorBannerBody_1ot7f_460";
var errorBannerTitle = "_errorBannerTitle_1ot7f_468";
var errorBannerDetail = "_errorBannerDetail_1ot7f_472";
var warningBanner = "_warningBanner_1ot7f_477";
var warningBannerBody = "_warningBannerBody_1ot7f_482";
var warningBannerTitle = "_warningBannerTitle_1ot7f_490";
var warningBannerDetail = "_warningBannerDetail_1ot7f_494";
var shimmer = "_shimmer_1ot7f_1";
var spin = "_spin_1ot7f_1";
var opacityPulse = "_opacityPulse_1ot7f_1";
var popoverIn = "_popoverIn_1ot7f_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ot7f_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ot7f_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ot7f_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ot7f_1";
var blurSwapIn = "_blurSwapIn_1ot7f_1";
var blurSwapOut = "_blurSwapOut_1ot7f_1";
var pulseGlow = "_pulseGlow_1ot7f_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ot7f_1";
var fade = "_fade_1ot7f_1";
var fadeInUp = "_fadeInUp_1ot7f_1";
var fadeInDown = "_fadeInDown_1ot7f_1";
var fadeInLeft = "_fadeInLeft_1ot7f_1";
var fadeInRight = "_fadeInRight_1ot7f_1";
var fadeOut = "_fadeOut_1ot7f_1";
var fadeOutDown = "_fadeOutDown_1ot7f_1";
var fadeOutUp = "_fadeOutUp_1ot7f_1";
var fadeOutLeft = "_fadeOutLeft_1ot7f_1";
var fadeOutRight = "_fadeOutRight_1ot7f_1";
var ping = "_ping_1ot7f_1";
var blinkBackground = "_blinkBackground_1ot7f_1";
var typingBlink = "_typingBlink_1ot7f_1";
var AgentChatPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel,
	inlinePanel,
	inputArea,
	backgroundJobs,
	messageQueue,
	backgroundJobDetails,
	backgroundJobList,
	queueList,
	queueActions,
	queueEditNotice,
	queuePreview,
	jobStatus,
	fadeIn,
	jobWaiting,
	jobTraceLabel,
	jobSpinner,
	jobTimer,
	attachmentsStrip,
	errorBanner,
	errorBannerBody,
	errorBannerTitle,
	errorBannerDetail,
	warningBanner,
	warningBannerBody,
	warningBannerTitle,
	warningBannerDetail,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ot7f_1",
	opacityPulse,
	popoverIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var AgentChatPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=script&setup=true&lang.ts
var AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewChatPage",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		effectiveSessionId: {},
		newSession: {
			type: Boolean,
			default: false
		},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		beforeSend: {},
		layout: { default: "dock" }
	},
	emits: [
		"continue-loaded",
		"session-created",
		"open-build",
		"send-to-assistant",
		"initial-consumed"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const inputDraft = ref("");
		const chatPanel = useTemplateRef("chatPanel");
		function focusInput(options) {
			chatPanel.value?.focusInput(options);
		}
		function getConversationMarkdown() {
			return chatPanel.value?.getConversationMarkdown() ?? "";
		}
		watch([() => props.initialPrompt, chatPanel], ([prompt, panel]) => {
			if (!prompt || !panel) return;
			panel.sendMessageFromOutside(prompt);
		}, {
			immediate: true,
			flush: "post"
		});
		__expose({
			focusInput,
			getConversationMarkdown
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.layout === "page" ? "main" : "div"), {
				class: normalizeClass([_ctx.$style.previewPage, { [_ctx.$style.pageLayout]: __props.layout === "page" }]),
				"data-testid": "agent-preview-chat-page"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatFrame) }, [__props.initialized && __props.effectiveSessionId ? (openBlock(), createBlock(AgentChatPanel_default, {
					key: `preview-${__props.effectiveSessionId}`,
					ref_key: "chatPanel",
					ref: chatPanel,
					"input-draft": inputDraft.value,
					"onUpdate:inputDraft": _cache[0] || (_cache[0] = ($event) => inputDraft.value = $event),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					visible: __props.visible,
					"background-jobs-active": __props.visible,
					mode: "inline",
					"continue-session-id": __props.effectiveSessionId,
					"new-session": __props.newSession,
					"agent-config": __props.localConfig,
					"agent-status": unref(deriveAgentStatus)(__props.agent),
					"connected-triggers": __props.connectedTriggers,
					"can-send-to-assistant": __props.canSendToAssistant,
					"before-send": __props.beforeSend,
					onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
					onSessionCreated: _cache[2] || (_cache[2] = ($event) => emit("session-created", $event)),
					onInitialConsumed: _cache[3] || (_cache[3] = ($event) => emit("initial-consumed")),
					onOpenBuild: _cache[4] || (_cache[4] = ($event) => emit("open-build")),
					onSendToAssistant: _cache[5] || (_cache[5] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"input-draft",
					"project-id",
					"agent-id",
					"visible",
					"background-jobs-active",
					"continue-session-id",
					"new-session",
					"agent-config",
					"agent-status",
					"connected-triggers",
					"can-send-to-assistant",
					"before-send"
				])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default = {
	previewPage: "_previewPage_dda05_1",
	pageLayout: "_pageLayout_dda05_10",
	chatFrame: "_chatFrame_dda05_14"
};
var AgentPreviewChatPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentSessionLangSmithExport.ts
function useAgentSessionLangSmithExport() {
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const sessionsStore = useAgentSessionsStore();
	const clipboard = useClipboard();
	const { showError, showMessage } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const isExporting = ref(false);
	const isEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true" && settingsStore.moduleSettings.agents?.proxyEnabled === true);
	async function sendSession({ projectId, agentId, threadId }) {
		if (!isEnabled.value || isExporting.value) return;
		isExporting.value = true;
		try {
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agentSessions.langsmithExport.confirm.title"),
				description: i18n.baseText("agentSessions.langsmithExport.confirm.body"),
				confirmButtonText: i18n.baseText("agentSessions.langsmithExport.confirm.button"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			const { traceId } = await sessionsStore.exportThreadToLangSmith(projectId, agentId, threadId);
			await clipboard.copy(traceId).catch(() => {});
			showMessage({
				title: i18n.baseText("agentSessions.langsmithExport.success"),
				message: i18n.baseText("agentSessions.langsmithExport.successMessage", { interpolate: { traceId } }),
				type: "success"
			});
		} catch (error) {
			showError(error, i18n.baseText("agentSessions.langsmithExport.error"));
		} finally {
			isExporting.value = false;
		}
	}
	return {
		isEnabled,
		isExporting,
		sendSession
	};
}
//#endregion
//#region src/features/agents/components/AgentPreviewMoreMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 2 };
var COPY_LINK = "copy-link";
var COPY_CONVERSATION = "copy-conversation";
var OPEN_IN_NEW_TAB = "open-in-new-tab";
var TOGGLE_FULL_WIDTH = "toggle-full-width";
var EXPORT_SESSION = "export-session";
var DELETE_SESSION = "delete-session";
var AgentPreviewMoreMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewMoreMenu",
	props: {
		projectId: {},
		agentId: {},
		effectiveSessionId: {},
		hasSession: { type: Boolean },
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		isDeletingSession: {
			type: Boolean,
			default: false
		},
		isFullWidth: { type: Boolean },
		isLangSmithExportEnabled: { type: Boolean },
		isExporting: { type: Boolean },
		getConversationMarkdown: {}
	},
	emits: [
		"toggle-full-width",
		"export-session",
		"delete-session"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const clipboard = useClipboard();
		const toast = useToast();
		const sessionsStore = useAgentSessionsStore();
		const sessionMetadata = ref(null);
		const canLinkSession = computed(function canLinkSession() {
			return props.hasSession && Boolean(props.effectiveSessionId);
		});
		const menuItems = computed(() => [
			{
				id: COPY_LINK,
				label: i18n.baseText("agents.builder.preview.more.copyLink"),
				icon: {
					type: "icon",
					value: "link"
				},
				disabled: !canLinkSession.value
			},
			{
				id: COPY_CONVERSATION,
				label: i18n.baseText("agents.builder.preview.more.copyConversation"),
				icon: {
					type: "icon",
					value: "copy"
				},
				disabled: !props.hasSession
			},
			{
				id: OPEN_IN_NEW_TAB,
				label: i18n.baseText("agents.builder.preview.layout.openInNewTab"),
				icon: {
					type: "icon",
					value: "external-link"
				},
				disabled: !canLinkSession.value
			},
			{
				id: TOGGLE_FULL_WIDTH,
				label: i18n.baseText("agents.builder.preview.more.fullWidth"),
				icon: props.isFullWidth ? {
					type: "icon",
					value: "minimize-2"
				} : {
					type: "icon",
					value: "maximize-2"
				},
				keepOpen: true,
				checkbox: true,
				checked: props.isFullWidth
			},
			...props.isLangSmithExportEnabled && props.hasSession && props.effectiveSessionId ? [{
				id: EXPORT_SESSION,
				label: i18n.baseText("agentSessions.langsmithExport.button"),
				icon: {
					type: "icon",
					value: "bug"
				},
				disabled: props.isExporting
			}] : [],
			...props.canDeleteSession ? [{
				id: DELETE_SESSION,
				label: i18n.baseText("agentSessions.delete"),
				icon: {
					type: "icon",
					value: "trash"
				},
				divided: true,
				destructive: true,
				disabled: !props.hasSession || !props.effectiveSessionId || props.isDeletingSession
			}] : []
		]);
		const triggerLabel = computed(() => {
			const source = sessionMetadata.value?.source;
			if (!source || source === "chat" || source === "n8n_chat") return i18n.baseText("agentSessions.origin.preview");
			if (source === "instance-ai") return i18n.baseText("agentSessions.origin.instanceAi");
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const triggerIcon = computed(() => {
			switch (sessionMetadata.value?.source) {
				case "slack":
				case "telegram":
				case "linear":
				case "discord":
				case "teams":
				case "mcp":
				case "workflow":
				case "webhook": return sessionMetadata.value.source;
				case "instance-ai": return "sparkles";
				default: return "bolt-filled";
			}
		});
		const tokenSpendLabel = computed(() => {
			const metadata = sessionMetadata.value;
			if (!metadata) return "—";
			return `${(metadata.totalPromptTokens + metadata.totalCompletionTokens).toLocaleString()}t ($${metadata.totalCost.toFixed(4)})`;
		});
		const durationLabel = computed(() => {
			const duration = sessionMetadata.value?.totalDuration ?? 0;
			if (duration < 1e3) return `${duration}ms`;
			return `${(duration / 1e3).toFixed(1)}s`;
		});
		const lastMessageLabel = computed(() => {
			const updatedAt = sessionMetadata.value?.updatedAt;
			if (!updatedAt) return "—";
			const { date, time } = convertToDisplayDate(updatedAt);
			return `${date} ${time}`;
		});
		function getSessionRoute() {
			return router.resolve({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: props.projectId,
					agentId: props.agentId
				},
				query: {
					[CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId,
					[OPEN_PREVIEW_PARAM]: "true"
				}
			});
		}
		async function copyLink() {
			try {
				const url = new URL(getSessionRoute().href, window.location.origin).href;
				await clipboard.copy(url);
				toast.showMessage({
					title: i18n.baseText("agents.builder.preview.more.linkCopied"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.preview.more.copyLinkError"));
			}
		}
		async function copyConversation() {
			try {
				const conversation = props.getConversationMarkdown();
				if (!conversation) return;
				await clipboard.copy(conversation);
				toast.showMessage({
					title: i18n.baseText("agents.builder.preview.more.conversationCopied"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.preview.more.copyConversationError"));
			}
		}
		function selectMenuItem(itemId) {
			switch (itemId) {
				case COPY_LINK:
					if (!canLinkSession.value) return;
					copyLink();
					break;
				case COPY_CONVERSATION:
					copyConversation();
					break;
				case OPEN_IN_NEW_TAB: {
					if (!canLinkSession.value) return;
					const route = router.resolve({
						name: AGENT_PREVIEW_VIEW,
						params: {
							projectId: props.projectId,
							agentId: props.agentId
						},
						query: { [CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId }
					});
					window.open(route.href, "_blank", "noopener");
					break;
				}
				case TOGGLE_FULL_WIDTH:
					emit("toggle-full-width");
					break;
				case EXPORT_SESSION:
					if (props.hasSession && props.effectiveSessionId && !props.isExporting) emit("export-session");
					break;
				case DELETE_SESSION:
					if (props.canDeleteSession && props.hasSession && props.effectiveSessionId && !props.isDeletingSession) emit("delete-session");
					break;
			}
		}
		let metadataRequestId = 0;
		async function loadSessionMetadata() {
			const requestId = ++metadataRequestId;
			const sessionId = props.effectiveSessionId;
			if (!sessionId) {
				sessionMetadata.value = null;
				return;
			}
			try {
				const detail = await sessionsStore.getThreadDetail(props.projectId, props.agentId, sessionId);
				if (requestId === metadataRequestId) sessionMetadata.value = {
					...detail.thread,
					source: detail.executions.find(function hasSource(execution) {
						return execution.source !== null;
					})?.source
				};
			} catch {
				if (requestId === metadataRequestId) sessionMetadata.value = null;
			}
		}
		function onMenuOpenChange(isOpen) {
			if (isOpen) loadSessionMetadata();
		}
		watch([
			() => props.projectId,
			() => props.agentId,
			() => props.effectiveSessionId
		], function refreshSessionMetadata() {
			sessionMetadata.value = null;
			loadSessionMetadata();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "bottom",
				content: unref(i18n).baseText("agents.builder.preview.more.label")
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: menuItems.value,
					placement: "bottom-end",
					"extra-popper-class": _ctx.$style.moreMenu,
					onSelect: selectMenuItem,
					"onUpdate:modelValue": onMenuOpenChange
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "ellipsis",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.more.label"),
						"data-testid": "agent-preview-more-btn"
					}, null, 8, ["aria-label"])]),
					"item-trailing": withCtx(({ item }) => [item.id === TOGGLE_FULL_WIDTH ? (openBlock(), createBlock(unref(N8nSwitch_default), {
						key: 0,
						"model-value": props.isFullWidth,
						size: "small",
						tabindex: "-1",
						"aria-hidden": "true",
						class: normalizeClass(_ctx.$style.layoutSwitch)
					}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)]),
					footer: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.sessionMetadata) }, [
						triggerLabel.value ? (openBlock(), createElementBlock("li", _hoisted_1$1, [createVNode(unref(N8nIcon_default), {
							icon: triggerIcon.value,
							size: 12
						}, null, 8, ["icon"]), createTextVNode(toDisplayString(triggerLabel.value), 1)])) : createCommentVNode("", true),
						sessionMetadata.value ? (openBlock(), createElementBlock("li", _hoisted_2, toDisplayString(tokenSpendLabel.value) + " • " + toDisplayString(durationLabel.value), 1)) : createCommentVNode("", true),
						sessionMetadata.value?.updatedAt ? (openBlock(), createElementBlock("li", _hoisted_3, toDisplayString(unref(i18n).baseText("agents.builder.preview.more.lastMessageSent", { interpolate: { date: lastMessageLabel.value } })), 1)) : createCommentVNode("", true)
					], 2)]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
var AgentPreviewMoreMenu_vue_vue_type_style_index_0_lang_module_default = {
	moreMenu: "_moreMenu_11fp0_1",
	layoutSwitch: "_layoutSwitch_11fp0_5",
	sessionMetadata: "_sessionMetadata_11fp0_9"
};
var AgentPreviewMoreMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewMoreMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewMoreMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewDock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"aria-label",
	"aria-hidden",
	"inert",
	"data-preview-layout"
];
var PreviewLayout = /* @__PURE__ */ function(PreviewLayout) {
	PreviewLayout["Docked"] = "docked";
	PreviewLayout["Fullpage"] = "fullpage";
	return PreviewLayout;
}(PreviewLayout || {});
var AgentPreviewDock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewDock",
	props: {
		sessionTitle: {},
		sessionOptions: {},
		hasSession: { type: Boolean },
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		isOpen: { type: Boolean },
		effectiveSessionId: {},
		newSession: {
			type: Boolean,
			default: false
		},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		beforeSend: {},
		isDeletingSession: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"view-trace",
		"new-session",
		"delete-session",
		"session-select",
		"close",
		"continue-loaded",
		"session-created",
		"open-build",
		"send-to-assistant",
		"initial-consumed"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const dock = useTemplateRef("dock");
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const previewChatPage = useTemplateRef("previewChatPage");
		const storedLayout = useStorage("N8N_AGENT_PREVIEW_LAYOUT", PreviewLayout.Docked);
		const layout = computed(() => storedLayout.value === PreviewLayout.Fullpage ? PreviewLayout.Fullpage : PreviewLayout.Docked);
		function requestActiveSessionDeletion() {
			if (!props.canDeleteSession || !props.hasSession || !props.effectiveSessionId || props.isDeletingSession) return;
			emit("delete-session", props.effectiveSessionId);
		}
		function viewTrace() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			/** Dock the chat so it does not cover the session view after navigation. */
			storedLayout.value = PreviewLayout.Docked;
			emit("view-trace");
		}
		function exportSession() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			sendSession({
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.effectiveSessionId
			});
		}
		function createNewSession() {
			emit("new-session");
		}
		function close() {
			emit("close");
		}
		function getConversationMarkdown() {
			return previewChatPage.value?.getConversationMarkdown() ?? "";
		}
		function toggleFullWidth() {
			storedLayout.value = layout.value === PreviewLayout.Fullpage ? PreviewLayout.Docked : PreviewLayout.Fullpage;
		}
		watch([
			() => props.isOpen,
			() => props.initialized,
			() => props.effectiveSessionId
		], async function focusPreviewInput([isOpen, initialized, sessionId]) {
			if (!isOpen || !initialized || !sessionId) return;
			await nextTick();
			/** preventScroll makes sure that the content doesn't jump when transitioning */
			previewChatPage.value?.focusInput({ preventScroll: true });
		}, { flush: "post" });
		function isEscapeDisabled() {
			return !props.isOpen || dock.value?.contains(document.activeElement) !== true;
		}
		useKeybindings({
			"ctrl+shift+;": createNewSession,
			Escape: {
				disabled: isEscapeDisabled,
				run: close
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				ref_key: "dock",
				ref: dock,
				class: normalizeClass([_ctx.$style.dock, { [_ctx.$style.open]: props.isOpen }]),
				"aria-label": unref(i18n).baseText("agents.builder.preview.button"),
				"aria-hidden": !props.isOpen,
				inert: !props.isOpen,
				"data-preview-layout": layout.value,
				"data-testid": "agent-preview-dock"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.dockInner, { [_ctx.$style.fullpage]: layout.value === PreviewLayout.Fullpage }]) }, [createBaseVNode("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-preview-dock-header"
			}, [createVNode(AgentSessionHistoryDropdown_default, {
				"session-options": props.sessionOptions,
				"can-delete-session": props.canDeleteSession,
				"is-deleting-session": props.isDeletingSession,
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event)),
				onDelete: _cache[1] || (_cache[1] = ($event) => emit("delete-session", $event))
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.sessionTitle),
					"aria-label": unref(i18n).baseText("agentSessions.sessionName"),
					"data-testid": "agent-preview-session-title"
				}, {
					default: withCtx(() => [
						createVNode(AgentPersonalisationIcon_default, {
							personalisation: props.localConfig?.personalisation ?? props.agent?.schema?.personalisation,
							size: 20
						}, null, 8, ["personalisation"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionTitleLabel) }, toDisplayString(props.sessionTitle), 3),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							color: "text-light",
							size: 12
						})
					]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				_: 1
			}, 8, [
				"session-options",
				"can-delete-session",
				"is-deleting-session"
			]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agents.builder.preview.viewSession"),
					placement: "bottom",
					"show-after": unref(500),
					"data-testid": "agent-preview-view-session-tooltip"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "list-tree",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.viewSession"),
						"data-testid": "agent-preview-view-session-btn",
						onClick: viewTrace
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
					shortcut: {
						metaKey: true,
						shiftKey: true,
						keys: [";"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "message-circle-plus",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.chat.newChat.label"),
						"data-testid": "agent-preview-new-chat-btn",
						onClick: createNewSession
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(AgentPreviewMoreMenu_default, {
					"project-id": props.projectId,
					"agent-id": props.agentId,
					"effective-session-id": props.effectiveSessionId,
					"has-session": props.hasSession,
					"can-delete-session": props.canDeleteSession,
					"is-deleting-session": props.isDeletingSession,
					"is-full-width": layout.value === PreviewLayout.Fullpage,
					"is-lang-smith-export-enabled": unref(isLangSmithExportEnabled),
					"is-exporting": unref(isExporting),
					"get-conversation-markdown": getConversationMarkdown,
					onToggleFullWidth: toggleFullWidth,
					onExportSession: exportSession,
					onDeleteSession: requestActiveSessionDeletion
				}, null, 8, [
					"project-id",
					"agent-id",
					"effective-session-id",
					"has-session",
					"can-delete-session",
					"is-deleting-session",
					"is-full-width",
					"is-lang-smith-export-enabled",
					"is-exporting"
				]),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.preview.hide"),
					shortcut: {
						metaKey: false,
						shiftKey: false,
						keys: ["esc"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "chevrons-right",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.hide"),
						"data-testid": "agent-preview-close-btn",
						onClick: close
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"])
			], 2)], 2), createVNode(AgentPreviewChatPage_default, {
				ref_key: "previewChatPage",
				ref: previewChatPage,
				visible: props.isOpen,
				initialized: props.initialized,
				"project-id": props.projectId,
				"agent-id": props.agentId,
				agent: props.agent,
				"local-config": props.localConfig,
				"connected-triggers": props.connectedTriggers,
				"effective-session-id": props.effectiveSessionId,
				"new-session": props.newSession,
				"initial-prompt": props.initialPrompt,
				"can-send-to-assistant": props.canSendToAssistant,
				"before-send": props.beforeSend,
				onContinueLoaded: _cache[2] || (_cache[2] = ($event) => emit("continue-loaded", $event)),
				onSessionCreated: _cache[3] || (_cache[3] = ($event) => emit("session-created", $event)),
				onOpenBuild: _cache[4] || (_cache[4] = ($event) => emit("open-build")),
				onSendToAssistant: _cache[5] || (_cache[5] = ($event) => emit("send-to-assistant", $event)),
				onInitialConsumed: _cache[6] || (_cache[6] = ($event) => emit("initial-consumed"))
			}, null, 8, [
				"visible",
				"initialized",
				"project-id",
				"agent-id",
				"agent",
				"local-config",
				"connected-triggers",
				"effective-session-id",
				"new-session",
				"initial-prompt",
				"can-send-to-assistant",
				"before-send"
			])], 2)], 10, _hoisted_1);
		};
	}
});
var AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default = {
	dock: "_dock_qb2zb_1",
	fullpage: "_fullpage_qb2zb_13",
	dockInner: "_dockInner_qb2zb_17",
	open: "_open_qb2zb_30",
	header: "_header_qb2zb_46",
	sessionTitle: "_sessionTitle_qb2zb_54",
	sessionTitleLabel: "_sessionTitleLabel_qb2zb_63",
	actions: "_actions_qb2zb_78"
};
var AgentPreviewDock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewDock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { buildAgentConfigFingerprint as C, useAgentBuilderSession as S, useAgentProjectBreadcrumb as T, isDelegateSubAgentTool as _, buildAgentFixWithAssistantPrompt as a, AiReasoningBlock_default as b, AgentChatMessageAttachments_default as c, AiThinkingBlock_default as d, useAgentExecutionUpdates as f, delegateLabel as g, AgentChatToolSteps_default as h, buildAgentChangeRequestPrompt as i, backgroundJobResultLabel as l, AgentSessionHistoryDropdown_default as m, useAgentSessionLangSmithExport as n, buildAgentPreviewHref as o, parseIntegrationActionCard as p, AgentPreviewChatPage_default as r, resolveAgentPreviewLink as s, AgentPreviewDock_default as t, backgroundJobTimelineLabelKey as u, resolveSubAgentName as v, deriveAgentStatus as w, useRelativeTimestamp as x, useSubAgentNames as y };

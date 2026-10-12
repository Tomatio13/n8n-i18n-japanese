import { o as __toESM, t as __commonJSMin } from "./rolldown-runtime-Bq5D3eIA.js";
import { $f as normalizeStyle, $s as TabsRoot_default, $u as useDebounceFn, A as require_unset, Ad as createTextVNode, Af as unref, Al as ContextMenuRoot_default, Au as useLocalStorage, Cd as computed, Cf as shallowReactive, Dd as createElementBlock, Dl as ContextMenuPortal_default, Ed as createCommentVNode, Fo as require_get, Hd as nextTick, Kd as onMounted, M as require_set, Na as require_isEqual, Nd as defineComponent, Nu as usePreferredReducedMotion, Od as createSlots, Of as toValue, Ol as ContextMenuItem_default, Ql as CollapsibleRoot_default, Qs as TabsList_default, Rd as inject, Sf as ref, Td as createBlock, Tl as ContextMenuTrigger_default, Tu as useElementSize, Uu as useWindowSize, Wd as onBeforeUnmount, Xd as provide, Xl as CollapsibleTrigger_default, Yd as openBlock, Zd as renderList, Zf as normalizeClass, Zs as TabsTrigger_default, _d as vShow, as as useRouter, ba as require__isIterateeCall, bd as Fragment, bf as reactive, cd as Transition, cf as watch, cu as StorageSerializers, df as withDirectives, fu as onClickOutside, is as useRoute, ja as v4, jd as createVNode, ki as require_cloneDeep, kl as ContextMenuContent_default, mf as getCurrentScope, nd as useTimeoutFn, np as toDisplayString, of as useTemplateRef, po as defineStore, qd as onUnmounted, ri as require_toInteger, ti as require__baseSlice, uf as withCtx, wd as createBaseVNode, wf as shallowRef, yf as onScopeDispose } from "./vendor-C0K-pJCd.js";
import { $S as N8nHoverCard_default, $m as AI_GATEWAY_UNSUPPORTED_NODE_TYPES, AC as SetupPanel_default, Av as parseStepSummary, Ba as fetchRunDebug, Bb as nodeIssuesToString, Bc as useCredentialOAuth, Bf as getAppNameFromNodeName, Bl as useAiSimulatedExecutionsStore, Bt as useRecentWorkflowsStore, C as useOpenWorkflowInAssistantStore, Ca as getAgentPreviewViewFromThreadMetadata, Co as useCredentialForm, Cv as formatDebugJson, Cy as getResourcePermissions, DC as N8nCallout_default, Dc as useAiGateway, Dv as parseOutputExtras, Ec as useAiGatewayTopUp, Ev as parseOutputDisplayBlocks, Fa as getLatestWorkflowSetupResult, Fb as getNodeParameters, Fc as listPlaceholderTitles, Fg as LOCAL_STORAGE_INSTANCE_AI_SETUP_COACHMARK_SEEN, Fo as TemplatedAuthSimpleView_default, Fv as instanceAiSetupCredentialAppliedKey, G_ as useSettingsStore, Ga as persistPendingAgent, Gu as findPlaceholderDetails, Gx as isIconOrEmoji, H_ as useTelemetry, Ha as fetchThreadDebugRuns, Hc as hasOAuthTokenData, Ia as getLatestWorkflowUpdateResult, Ib as getNodeParametersIssues$1, Ig as LOCAL_STORAGE_INSTANCE_AI_SETUP_DISMISSED, Io as CredentialInputs_default, Iv as instanceAiSetupCredentialSelectionKey, Iy as GENERIC_AUTH_CREDENTIAL_TYPES, J as useCredentialTestInBackground, Ja as useInstanceAiSetupPanelExperiment, Jb as deepCopy, Jf as injectStrict, Jg as CompactParameterHintsKey, Ji as buildInstanceAiArtifactCredentialQuestion, Jx as Dialog_default, K_ as useRootStore, Ka as updateThreadMetadata, Ku as useWorkflowsStore, Ky as shouldAutoResolveCredential, La as isAgentEditingAgent, Lg as LOCAL_STORAGE_INSTANCE_AI_SETUP_ITEMS, Lu as useExternalHooks, Lv as readPendingInstanceAiSetupCredentialSelections, MS as N8nPopover_default, Ma as getLatestBuilderTarget, Mb as displayParameter, Mf as fetchDataTablesApi, Mi as ParameterInputList_default, Mu as useNodeHelpers, Mv as parseUsageSummary, Na as getLatestDataTableResult, Nc as CredentialIcon_default, Ng as LOCAL_STORAGE_INSTANCE_AI_ARTIFACT_PREVIEW_OPEN, Nv as stepInstructions, O_ as DEBOUNCE_TIME, Oa as getExecutionResultsByWorkflow, Oc as InstanceAiEditorCapabilityKey, Ov as parseStepCacheBreaks, Pa as getLatestDeletedDataTableId, Pc as deriveServiceName, Pg as LOCAL_STORAGE_INSTANCE_AI_CHAT_PANEL_WIDTH_RATIO, Pv as summarizeJsonValue, Py as AI_GATEWAY_MANAGED_TAG, R_ as useToast, Ra as isAgentEditingWorkflow, Rc as ProjectIcon_default, Ru as useCanvasStore, Sa as getAgentPreviewSessionFromThreadMetadata, Sd as useNodeTypesStore, Su as canvasEventBus, TS as N8nResizeWrapper_default, Ta as getThreadDisplayTitle, Tc as NodeCredentials_default, Tl as useNodeCreatorStore, Tv as parseMessageBlocks, Ua as fetchThreadMessages, VC as N8nLoading_default, Va as fetchThread, W_ as useUsersStore, Wa as fetchThreads, Xg as ExpressionLocalResolveContextSymbol, Xn as useAgentCapabilitySummary, Xx as DialogHeader_default, YC as N8nTooltip_default, Yg as EditorEnabledFeaturesKey, Yi as buildInstanceAiCredentialHandoffContext, Yx as DialogTitle_default, Yy as DOMAIN_RESTRICTION_FIELDS, Zg as ResourceLocatorDropdownTeleportedKey, _a as useInstanceAiStore, _m as TELEMETRY_EVENT, aC as N8nLink_default, al as useLogsStore, aw as _plugin_vue_export_helper_default, bm as BUILTIN_CREDENTIALS_DOCS_URL, cc as usePushConnectionStore, cv as ResponseError, cw as addCredentialTranslation, dC as N8nHeading_default, dd as deriveHomeProject, do as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, eb as isRecord$1, ec as setParameterValue, et as getNodeCredentialTypes, ew as N8nIconButton_default, fd as disposeWorkflowDocumentStore, fm as getDebounceTime, ga as provideThread, hd as useWorkflowDocumentStore, id as useWorkflowExecutionStateStore, ip as useExecutionDataStore, ja as getLatestBuildResult, jv as parseSystemPromptForDisplay, kC as SetupConnection_default, kS as N8nSegmentControl_default, ka as getLatestAgentBuilderTarget, ki as CredentialsDropdown_default, ko as TimeAgo_default, kv as parseStepConfig, lf as useWorkflowsListStore, md as useExistingWorkflowDocumentStore, n_ as WorkflowIdKey, nd as disposeWorkflowExecutionStateStore, nf as listenForCredentialChanges, nw as N8nIcon_default, od as useDocumentTitle, oo as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, pS as AnimatedCollapsibleContent_default, pf as useNDVStore, po as INSTANCE_AI_SETTINGS_VIEW, qC as N8nText_default, qa as useInstanceAiSettingsStore, qi as buildInstanceAiAgentPreviewHandoffContext, rf as useCredentialsStore, rl as isChatNode, ru as useClipboard, sc as useRunWorkflowApi, sr as useAgentReturnContextStore, su as useDataTableStore, t_ as WorkflowDocumentStoreKey, tm as getWorkflow, tp as createExecutionDataId, tt as getNodeParametersIssues, tw as N8nButton_default, ud as createWorkflowDocumentId, uf as disposeNDVStore, uw as useI18n, vC as N8nCopyInput_default, va as useThread, vo as INSTANCE_AI_VIEW, w_ as HOVER_DELAY, wa as getPendingAgentTargetFromThreadMetadata, wp as useUIStore, wu as useWorkflowSaveStore, wv as parseInputExtras, xa as getAgentBuilderTargetFromThreadMetadata, xb as isTerminalExecutionStatus, xd as useEnvFeatureFlag, xf as useSourceControlStore, yc as NodeIcon_default, yf as useProjectsStore, zC as DropdownMenu_default, zc as useQuickConnect, zf as getAppNameFromCredType, zy as TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE } from "./app-Gcu_WcI0.js";
import { t as useSidebarLayout } from "./useSidebarLayout-twz7ansX.js";
import { n as LogsPanel_default } from "./useExecutionDebugging-CArYEexZ.js";
import { t as useWorkflowInitialization } from "./useWorkflowInitialization-CYph1gRX.js";
import { t as MainHeader_default } from "./MainHeader-CtznFOeN.js";
import { t as NodeView_default } from "./NodeView-CgBjfHWI.js";
import { a as collectActiveBuilderAgents, c as getDismissedContextKeys, d as useAgentMutationRefresh, f as useAgentEvalsFlag, i as ConfirmationFooter_default, l as handoffContextKey, n as AgentBuildingIndicator_default, o as agentPreviewContextIcon, p as useAgentEvalsStore, r as InstanceAiConversation_default, s as formatAgentPreviewContextLabel, t as AgentBuilderView_default, u as useBuildingArtifactIds } from "./AgentBuilderView-yYqZML1p.js";
import { o as InstanceAiViewHeader_default } from "./WorkflowBuilderUnavailableNotice-Blow6_zN.js";
import { t as useIsAssistantAtMentionsEnabled } from "./useIsAssistantAtMentionsEnabled-ch9EQ_SC.js";
import { t as DataTableTable_default } from "./DataTableTable-tbxwv1JB.js";
//#region src/features/ai/instanceAi/composables/useIsAgentWorking.ts
/**
* Whether the agent is busy anywhere in this thread — the lock signal shared by
* every artifact preview, so user edits can't race agent mutations.
*
* Thread-wide rather than per-artifact: keying off tool calls that name a
* resource id left long stretches unlocked. Hydration counts as busy, since an
* in-flight run isn't known until thread status resolves after a reload.
*
* `isAwaitingConfirmation` is deliberately unused — it can linger on
* confirmations left unresolved by a finished run. A live confirmation keeps
* `activeRunId` set, so `isStreaming` already covers that case.
*
* Pass `runtime` from the component that *provides* the thread — it can't
* inject what it provides, and forking this logic there would leave two copies
* to keep in sync. Everything below it just calls this with no argument.
*/
function useIsAgentWorking(runtime) {
	const thread = runtime ?? useThread();
	return computed(() => thread.isHydratingThread || thread.isStreaming || thread.isSendingMessage || collectActiveBuilderAgents(thread.messages).length > 0);
}
//#endregion
//#region src/features/ai/instanceAi/useCanvasPreview.ts
var ARTIFACT_ICON_MAP = {
	workflow: "workflow",
	"data-table": "table",
	agent: "robot"
};
/**
* The artifact a message attachment refers to, if any. A nodes attachment refers
* to its parent workflow only when it carries the workflow name, which marks that
* workflow as a thread artifact.
*/
function getAttachedArtifactId(attachment) {
	if (attachment.type === "workflow" || attachment.type === "agent") return attachment.id;
	if (attachment.type === "nodes" && attachment.workflowName) return attachment.workflowId;
}
function useCanvasPreview({ thread, initialAgentId, previewOpenState, onPreviewOpenChange }) {
	const activeTabId = ref();
	const isPreviewOpen = ref(previewOpenState?.() ?? false);
	const linkedAgentTarget = ref();
	function setPreviewOpen(open, persist = true) {
		if (isPreviewOpen.value === open) return;
		isPreviewOpen.value = open;
		if (persist) onPreviewOpenChange?.(open);
	}
	watch(() => previewOpenState?.(), (open) => {
		if (typeof open === "boolean") setPreviewOpen(open, false);
	}, { immediate: true });
	const buildingArtifactIds = useBuildingArtifactIds(thread);
	const isAgentWorking = useIsAgentWorking(thread);
	const userTabId = ref();
	watch(isAgentWorking, (working) => {
		if (!working) userTabId.value = void 0;
	});
	const allArtifactTabs = computed(() => {
		const result = [];
		const linkedAgent = linkedAgentTarget.value;
		for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table" || entry.type === "agent") result.push({
			id: entry.id,
			type: entry.type,
			name: entry.name,
			icon: ARTIFACT_ICON_MAP[entry.type] ?? "file",
			projectId: entry.projectId ?? (entry.type === "agent" && linkedAgent?.agentId === entry.id ? linkedAgent.projectId : void 0),
			pending: entry.pending,
			building: buildingArtifactIds.value.has(entry.id)
		});
		if (linkedAgent && !result.some((tab) => tab.id === linkedAgent.agentId)) {
			const indexedAgent = [...thread.resourceNameIndex.values()].find((entry) => entry.type === "agent" && entry.id === linkedAgent.agentId);
			result.push({
				id: linkedAgent.agentId,
				type: "agent",
				name: indexedAgent?.name ?? linkedAgent.agentId,
				icon: ARTIFACT_ICON_MAP.agent,
				projectId: indexedAgent?.projectId ?? linkedAgent.projectId,
				building: buildingArtifactIds.value.has(linkedAgent.agentId)
			});
		}
		return result;
	});
	const activeWorkflowId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "workflow" ? tab.id : null;
	});
	const activeDataTableId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.id : null;
	});
	const activeDataTableProjectId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.projectId ?? null : null;
	});
	const activeAgentId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" ? tab.id : null;
	});
	const activeAgentProjectId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" ? tab.projectId ?? null : null;
	});
	const activeAgentPending = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "agent" && tab.pending === true;
	});
	const executionResultsByWorkflow = computed(() => {
		const results = /* @__PURE__ */ new Map();
		for (const message of thread.messages) {
			if (!message.agentTree) continue;
			for (const [workflowId, result] of getExecutionResultsByWorkflow(message.agentTree)) results.set(workflowId, result);
		}
		return results;
	});
	const activeWorkflowExecutionResult = computed(() => {
		const workflowId = activeWorkflowId.value;
		return workflowId ? executionResultsByWorkflow.value.get(workflowId) : void 0;
	});
	const dataTableRefreshKey = ref(0);
	const isPreviewVisible = computed(() => isPreviewOpen.value && activeTabId.value !== void 0 && allArtifactTabs.value.some((tab) => tab.id === activeTabId.value));
	const firstAttachedArtifactId = computed(() => {
		const tabIds = new Set(allArtifactTabs.value.map(({ id }) => id));
		for (const message of thread.messages) for (const attachment of message.attachments ?? []) {
			const artifactId = getAttachedArtifactId(attachment);
			if (artifactId && tabIds.has(artifactId)) return artifactId;
		}
	});
	const pendingAgentTabId = computed(() => allArtifactTabs.value.find((tab) => tab.pending)?.id);
	const initialAgentTabId = computed(() => {
		const agentId = initialAgentId?.();
		if (!agentId) return void 0;
		return allArtifactTabs.value.find((tab) => tab.type === "agent" && tab.id === agentId)?.id;
	});
	const initialArtifactId = computed(() => firstAttachedArtifactId.value ?? pendingAgentTabId.value ?? initialAgentTabId.value ?? thread.pendingWorkflowAttachment?.id);
	watch(initialArtifactId, (id) => {
		if (!id || activeTabId.value !== void 0) return;
		activeTabId.value = id;
		if (previewOpenState?.() !== false) setPreviewOpen(true, false);
	}, { immediate: true });
	watch([
		() => previewOpenState?.(),
		allArtifactTabs,
		() => thread.isHydratingThread,
		initialArtifactId
	], ([open, tabs, isHydrating, initialId]) => {
		if (isHydrating) return;
		if (open === true && activeTabId.value === void 0 && tabs[0]) activeTabId.value = tabs.some((tab) => tab.id === initialId) ? initialId : tabs[0].id;
	}, { immediate: true });
	function selectTab(tabId) {
		activeTabId.value = tabId;
		userTabId.value = isAgentWorking.value ? tabId : void 0;
		setPreviewOpen(true);
	}
	function closePreview() {
		userTabId.value = void 0;
		setPreviewOpen(false);
	}
	function showAgentArtifact(tabId) {
		if (!(userTabId.value !== void 0 && userTabId.value === activeTabId.value)) activeTabId.value = tabId;
		setPreviewOpen(true);
	}
	/**
	* Open or switch the preview to a workflow.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openWorkflowPreview(workflowId) {
		if (activeTabId.value === workflowId && isPreviewOpen.value) return false;
		selectTab(workflowId);
		return true;
	}
	/**
	* Open or switch the preview to a data table.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openDataTablePreview(dataTableId, _projectId) {
		if (activeTabId.value === dataTableId && isPreviewOpen.value) return false;
		selectTab(dataTableId);
		return true;
	}
	/**
	* Open or switch the preview to an agent.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openAgentPreview(agentId, projectId) {
		linkedAgentTarget.value = {
			agentId,
			projectId
		};
		if (activeTabId.value === agentId && isPreviewOpen.value) return false;
		selectTab(agentId);
		return true;
	}
	watch(allArtifactTabs, (tabs) => {
		if (activeTabId.value === void 0 || tabs.length === 0) return;
		if (!tabs.some((t) => t.id === activeTabId.value)) activeTabId.value = tabs[0].id;
	});
	const workflowRefreshKey = ref(0);
	const latestBuildResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestBuildResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestBuildResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestBuildResult.value.workflowId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	}, { flush: "sync" });
	const latestBuilderTarget = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const target = getLatestBuilderTarget(msg.agentTree);
				if (target) return target;
			}
		}
		return null;
	});
	watch(() => latestBuilderTarget.value?.agentId, (agentId) => {
		if (!agentId || !latestBuilderTarget.value) return;
		if (thread.isHydratingThread) return;
		showAgentArtifact(latestBuilderTarget.value.workflowId);
	}, { flush: "sync" });
	const latestAgentBuilderTarget = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const target = getLatestAgentBuilderTarget(msg.agentTree);
				if (target) return target;
			}
		}
		return null;
	});
	watch(() => {
		const target = latestAgentBuilderTarget.value;
		return target ? `${target.agentId}:${target.activity ?? ""}` : void 0;
	}, () => {
		const target = latestAgentBuilderTarget.value;
		if (!target) return;
		if (thread.isHydratingThread) return;
		if (target.activity === "exploring" || target.activity === "testing") return;
		showAgentArtifact(target.targetAgentId);
	}, { flush: "sync" });
	const latestSetupResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowSetupResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestSetupResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestSetupResult.value) return;
		const targetId = latestSetupResult.value.workflowId;
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	});
	const latestUpdateResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowUpdateResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestUpdateResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestUpdateResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestUpdateResult.value.workflowId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	}, { flush: "sync" });
	const latestDataTableResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestDataTableResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestDataTableResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestDataTableResult.value) return;
		if (thread.isHydratingThread) return;
		const targetId = latestDataTableResult.value.dataTableId;
		showAgentArtifact(targetId);
		if (activeTabId.value === targetId) dataTableRefreshKey.value++;
	}, { flush: "sync" });
	watch(computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const id = getLatestDeletedDataTableId(msg.agentTree);
				if (id) return id;
			}
		}
		return null;
	}), (deletedId) => {
		if (deletedId && deletedId === activeTabId.value) {
			const remaining = allArtifactTabs.value.filter((t) => t.id !== deletedId);
			activeTabId.value = remaining.length > 0 ? remaining[0].id : void 0;
			if (!activeTabId.value) setPreviewOpen(false);
		}
	});
	useAgentMutationRefresh(thread);
	return {
		activeTabId,
		allArtifactTabs,
		activeWorkflowId,
		activeDataTableId,
		activeDataTableProjectId,
		activeAgentId,
		activeAgentProjectId,
		activeAgentPending,
		activeWorkflowExecutionResult,
		dataTableRefreshKey,
		isPreviewVisible,
		workflowRefreshKey,
		selectTab,
		closePreview,
		openWorkflowPreview,
		openDataTablePreview,
		openAgentPreview
	};
}
//#endregion
//#region src/features/ai/instanceAi/useTransitionGate.ts
function useTransitionGate(options = {}) {
	const isEnabled = ref(false);
	let renderToken = 0;
	function enableAfterStableRender() {
		const currentRenderToken = ++renderToken;
		nextTick(() => {
			nextTick(() => {
				if (currentRenderToken === renderToken && !(options.isBlocked?.() ?? false)) isEnabled.value = true;
			});
		});
	}
	function suppress() {
		renderToken += 1;
		isEnabled.value = false;
	}
	function suppressUntilStableRender() {
		isEnabled.value = false;
		enableAfterStableRender();
	}
	return {
		isEnabled,
		enableAfterStableRender,
		suppress,
		suppressUntilStableRender
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiDebug.store.ts
var useInstanceAiDebugStore = defineStore("instanceAiDebug", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const threads = ref([]);
	const selectedThreadId = ref(null);
	const threadMessages = ref([]);
	const isLoadingThreads = ref(false);
	const isLoadingMessages = ref(false);
	const selectedRunId = ref(null);
	const runDebug = ref(null);
	const threadDebugRuns = ref([]);
	const isLoadingRunDebug = ref(false);
	const isLoadingThreadDebugRuns = ref(false);
	async function loadThreads() {
		isLoadingThreads.value = true;
		try {
			threads.value = (await fetchThreads(rootStore.restApiContext)).threads;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingThreads.value = false;
		}
	}
	async function selectThread(threadId) {
		selectedThreadId.value = threadId;
		await loadMessages();
	}
	async function loadMessages(page) {
		if (!selectedThreadId.value) return;
		isLoadingMessages.value = true;
		try {
			threadMessages.value = (await fetchThreadMessages(rootStore.restApiContext, selectedThreadId.value, 50, page)).messages;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingMessages.value = false;
		}
	}
	async function loadThreadDebugRuns(threadId) {
		isLoadingThreadDebugRuns.value = true;
		try {
			threadDebugRuns.value = (await fetchThreadDebugRuns(rootStore.restApiContext, threadId)).runs;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingThreadDebugRuns.value = false;
		}
	}
	async function loadRunDebug(runId) {
		selectedRunId.value = runId;
		isLoadingRunDebug.value = true;
		try {
			runDebug.value = await fetchRunDebug(rootStore.restApiContext, runId);
		} catch {
			runDebug.value = null;
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingRunDebug.value = false;
		}
	}
	async function refreshRunDebug(threadId, preferredRunId) {
		await loadThreadDebugRuns(threadId);
		const selectedRunIdForThread = threadDebugRuns.value.some((run) => run.runId === selectedRunId.value) ? selectedRunId.value : null;
		const runId = preferredRunId ?? selectedRunIdForThread ?? threadDebugRuns.value.at(-1)?.runId ?? null;
		if (runId) await loadRunDebug(runId);
		else {
			selectedRunId.value = null;
			runDebug.value = null;
		}
	}
	function reset() {
		threads.value = [];
		selectedThreadId.value = null;
		threadMessages.value = [];
		isLoadingThreads.value = false;
		isLoadingMessages.value = false;
		selectedRunId.value = null;
		runDebug.value = null;
		threadDebugRuns.value = [];
		isLoadingRunDebug.value = false;
		isLoadingThreadDebugRuns.value = false;
	}
	return {
		threads,
		selectedThreadId,
		threadMessages,
		isLoadingThreads,
		isLoadingMessages,
		selectedRunId,
		runDebug,
		threadDebugRuns,
		isLoadingRunDebug,
		isLoadingThreadDebugRuns,
		loadThreads,
		selectThread,
		loadMessages,
		loadRunDebug,
		refreshRunDebug,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugJsonPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["open"];
var InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugJsonPanel",
	props: {
		value: {},
		label: {},
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const preview = computed(() => summarizeJsonValue(props.value));
		const formatted = computed(() => formatDebugJson(props.value));
		const summaryLabel = computed(() => props.label ?? i18n.baseText("instanceAi.debug.runDebug.json"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("details", {
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(summaryLabel.value), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(preview.value), 3)], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.json) }, toDisplayString(formatted.value), 3)], 10, _hoisted_1$7);
		};
	}
});
var InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_nwc9j_2",
	summary: "_summary_nwc9j_9",
	summaryLabel: "_summaryLabel_nwc9j_32",
	preview: "_preview_nwc9j_39",
	json: "_json_nwc9j_51"
};
var InstanceAiDebugJsonPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugWorkflowCodeSnapshot.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["open"];
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugWorkflowCodeSnapshot",
	props: {
		snapshot: {},
		variant: { default: "card" },
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const summaryPreview = computed(() => {
			const parts = [
				formatStatus(props.snapshot.success),
				props.snapshot.source,
				formatCharCount(props.snapshot.code.length)
			];
			if (props.snapshot.workflowId) parts.push(props.snapshot.workflowId);
			return parts.join(" · ");
		});
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function formatStatus(success) {
			return success ? i18n.baseText("instanceAi.debug.runDebug.success") : i18n.baseText("instanceAi.debug.runDebug.failed");
		}
		return (_ctx, _cache) => {
			return __props.variant === "inline" ? (openBlock(), createElementBlock("details", {
				key: 0,
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(summaryPreview.value), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2)], 10, _hoisted_1$6)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.cardRoot)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2));
		};
	}
});
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_4ei3e_2",
	summary: "_summary_4ei3e_9",
	summaryLabel: "_summaryLabel_4ei3e_32",
	preview: "_preview_4ei3e_39",
	body: "_body_4ei3e_51",
	cardRoot: "_cardRoot_4ei3e_60",
	metaBlock: "_metaBlock_4ei3e_66",
	metaLabel: "_metaLabel_4ei3e_73",
	statusChip: "_statusChip_4ei3e_79",
	statusSuccess: "_statusSuccess_4ei3e_86",
	statusFailed: "_statusFailed_4ei3e_91",
	code: "_code_4ei3e_96"
};
var InstanceAiDebugWorkflowCodeSnapshot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/utils/cache-break.ts
var CAUSE_KEYS = {
	tools: "instanceAi.debug.runDebug.cacheBreakCause.tools",
	system: "instanceAi.debug.runDebug.cacheBreakCause.system",
	settings: "instanceAi.debug.runDebug.cacheBreakCause.settings",
	expired: "instanceAi.debug.runDebug.cacheBreakCause.expired",
	messages: "instanceAi.debug.runDebug.cacheBreakCause.messages"
};
function describeCacheBreak(i18n, cacheBreak) {
	return i18n.baseText("instanceAi.debug.runDebug.cacheBreakDetail", { interpolate: {
		lost: cacheBreak.lostTokens.toLocaleString(),
		expected: cacheBreak.expectedReadTokens.toLocaleString(),
		cause: i18n.baseText(CAUSE_KEYS[cacheBreak.cause], { interpolate: { minutes: String(cacheBreak.cacheTtlMinutes ?? "") } })
	} });
}
//#endregion
//#region src/features/ai/instanceAi/utils/workflow-code-match.ts
var WORKFLOW_CODE_TOOL_NAMES = new Set(["build-workflow"]);
function isWorkflowCodeToolName(name) {
	return name !== void 0 && WORKFLOW_CODE_TOOL_NAMES.has(name);
}
function extractBuildWorkflowToolCallIds(output) {
	if (!output || !Array.isArray(output.toolResults)) return [];
	const ids = [];
	for (const toolResult of output.toolResults) {
		if (!isRecord$1(toolResult)) continue;
		if (!isWorkflowCodeToolName(typeof toolResult.toolName === "string" && toolResult.toolName || typeof toolResult.name === "string" && toolResult.name || void 0)) continue;
		if (typeof toolResult.toolCallId === "string") ids.push(toolResult.toolCallId);
	}
	return ids;
}
function mapWorkflowSnapshotsByToolCallId(steps, workflowCode) {
	const map = /* @__PURE__ */ new Map();
	for (const snapshot of workflowCode) if (snapshot.toolCallId) map.set(snapshot.toolCallId, snapshot);
	const orderedToolCallIds = steps.slice().sort((left, right) => left.stepNumber - right.stepNumber).flatMap((step) => extractBuildWorkflowToolCallIds(step.output));
	let snapshotIndex = 0;
	for (const toolCallId of orderedToolCallIds) {
		if (map.has(toolCallId)) continue;
		while (snapshotIndex < workflowCode.length && workflowCode[snapshotIndex]?.toolCallId && map.has(workflowCode[snapshotIndex]?.toolCallId ?? "")) snapshotIndex++;
		const snapshot = workflowCode[snapshotIndex];
		if (!snapshot) break;
		map.set(toolCallId, snapshot);
		snapshotIndex++;
	}
	return map;
}
function getToolCallIdFromMetadata(metadata) {
	if (!isRecord$1(metadata) || typeof metadata.toolCallId !== "string") return;
	return metadata.toolCallId;
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugMessageBody.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugMessageBody",
	props: {
		segments: {},
		workflowSnapshotsByToolCallId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function getWorkflowSnapshot(segment) {
			if (!isWorkflowCodeToolName(segment.name) || !props.workflowSnapshotsByToolCallId) return;
			const toolCallId = getToolCallIdFromMetadata(segment.metadata);
			if (!toolCallId) return;
			return props.workflowSnapshotsByToolCallId.get(toolCallId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.segments, (segment, index) => {
				return openBlock(), createElementBlock(Fragment, { key: `${segment.type}-${index}` }, [segment.type === "text" ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.text)
				}, toDisplayString(segment.text), 3)) : segment.type === "reasoning" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.reasoning")), 3)], 2), createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(segment.text), 3)], 2)) : segment.type === "tool-call" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolCall")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameLabel) }, toDisplayString(segment.name), 3)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolInput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : segment.type === "tool-result" ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolResult")), 3), segment.name ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.nameLabel)
					}, toDisplayString(segment.name), 3)) : createCommentVNode("", true)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolOutput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					getWorkflowSnapshot(segment) ? (openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
						key: 1,
						variant: "inline",
						snapshot: getWorkflowSnapshot(segment)
					}, null, 8, ["snapshot"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 2,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 4,
					value: segment.payload,
					label: segment.label ?? unref(i18n).baseText("instanceAi.debug.runDebug.json")
				}, null, 8, ["value", "label"]))], 64);
			}), 128))], 2);
		};
	}
});
var InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_ga0gj_1",
	text: "_text_ga0gj_7",
	inlineBlock: "_inlineBlock_ga0gj_16",
	inlineHeader: "_inlineHeader_ga0gj_22",
	kindLabel: "_kindLabel_ga0gj_28",
	nameLabel: "_nameLabel_ga0gj_33"
};
var InstanceAiDebugMessageBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugStepConfig.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["title"];
var InstanceAiDebugStepConfig_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugStepConfig",
	props: { config: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toolsBySize = computed(() => [...props.config.tools].sort((a, b) => b.estimatedTokens - a.estimatedTokens));
		const largestToolTokens = computed(() => toolsBySize.value[0]?.estimatedTokens ?? 0);
		function formatTokens(tokens) {
			return tokens < 1e3 ? tokens.toString() : `${(tokens / 1e3).toFixed(1)}k`;
		}
		function estimatedTokensLabel(tokens) {
			return i18n.baseText("instanceAi.debug.runDebug.estimatedTokens", { interpolate: { count: formatTokens(tokens) } });
		}
		function barWidth(tokens) {
			return largestToolTokens.value > 0 ? `${tokens / largestToolTokens.value * 100}%` : "0%";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "instance-ai-llm-step-config"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.inputSettings")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [__props.config.settings.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.settings)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.config.settings, (setting) => {
				return openBlock(), createElementBlock("span", {
					key: setting.label,
					class: normalizeClass(_ctx.$style.settingChip),
					title: `${setting.label}: ${setting.value}`
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingLabel) }, toDisplayString(setting.label), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingValue) }, toDisplayString(setting.value), 3)], 10, _hoisted_1$5);
			}), 128))], 2)) : createCommentVNode("", true), __props.config.tools.length > 0 ? (openBlock(), createElementBlock("details", {
				key: 1,
				class: normalizeClass(_ctx.$style.tools)
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.toolsSummary) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolCount", { interpolate: { count: __props.config.tools.length.toString() } })), 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsTotal) }, toDisplayString(estimatedTokensLabel(__props.config.toolsEstimatedTokens)), 3)], 2), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.toolList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(toolsBySize.value, (tool) => {
				return openBlock(), createElementBlock("li", { key: tool.name }, [createBaseVNode("details", { class: normalizeClass(_ctx.$style.tool) }, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.toolSummary) }, [
					createBaseVNode("code", { class: normalizeClass(_ctx.$style.toolName) }, toDisplayString(tool.name), 3),
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.toolBar),
						"aria-hidden": "true"
					}, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.toolBarFill),
						style: normalizeStyle({ width: barWidth(tool.estimatedTokens) })
					}, null, 6)], 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolTokens) }, toDisplayString(estimatedTokensLabel(tool.estimatedTokens)), 3)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolBody) }, [tool.description ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.description)
				}, toDisplayString(tool.description), 3)) : createCommentVNode("", true), tool.inputSchema ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: tool.inputSchema,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.toolInputSchema")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2)]);
			}), 128))], 2)], 2)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var InstanceAiDebugStepConfig_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_8ohae_2",
	cardHeader: "_cardHeader_8ohae_10",
	roleLabel: "_roleLabel_8ohae_17",
	cardBody: "_cardBody_8ohae_24",
	settings: "_settings_8ohae_31",
	settingChip: "_settingChip_8ohae_37",
	settingLabel: "_settingLabel_8ohae_47",
	settingValue: "_settingValue_8ohae_52",
	tools: "_tools_8ohae_61",
	toolsSummary: "_toolsSummary_8ohae_67",
	toolSummary: "_toolSummary_8ohae_68",
	toolsTotal: "_toolsTotal_8ohae_97",
	tool: "_tool_8ohae_61",
	toolList: "_toolList_8ohae_108",
	toolName: "_toolName_8ohae_120",
	toolBar: "_toolBar_8ohae_130",
	toolBarFill: "_toolBarFill_8ohae_139",
	toolTokens: "_toolTokens_8ohae_146",
	toolBody: "_toolBody_8ohae_154",
	description: "_description_8ohae_161"
};
var InstanceAiDebugStepConfig_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugStepConfig_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugStepConfig_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugUsage.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDebugUsage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugUsage",
	props: {
		usage: {},
		cacheBreak: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const cacheBreakDescription = computed(() => props.cacheBreak ? describeCacheBreak(i18n, props.cacheBreak) : void 0);
		function formatTokens(tokens) {
			return tokens.toLocaleString();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "instance-ai-llm-step-usage"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.usage")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
				cacheBreakDescription.value ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.cacheBreak),
					"data-test-id": "instance-ai-llm-step-cache-break-detail"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.cacheBreakLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.cacheBreak")), 3), createTextVNode(" " + toDisplayString(cacheBreakDescription.value), 1)], 2)) : createCommentVNode("", true),
				__props.usage.rows.length > 0 ? (openBlock(), createElementBlock("table", {
					key: 1,
					class: normalizeClass(_ctx.$style.table)
				}, [createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.usage.rows, (row) => {
					return openBlock(), createElementBlock("tr", { key: row.label }, [
						createBaseVNode("th", {
							class: normalizeClass(_ctx.$style.rowLabel),
							scope: "row"
						}, toDisplayString(row.label), 3),
						createBaseVNode("td", { class: normalizeClass(_ctx.$style.tokens) }, toDisplayString(formatTokens(row.tokens)), 3),
						createBaseVNode("td", { class: normalizeClass(_ctx.$style.details) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(row.details, (detail) => {
							return openBlock(), createElementBlock("span", {
								key: detail.label,
								class: normalizeClass(_ctx.$style.detail)
							}, [createTextVNode(toDisplayString(detail.label) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.detailTokens) }, toDisplayString(formatTokens(detail.tokens)), 3)], 2);
						}), 128))], 2)
					]);
				}), 128))])], 2)) : createCommentVNode("", true),
				__props.usage.settings.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.settings)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.usage.settings, (setting) => {
					return openBlock(), createElementBlock("span", {
						key: setting.label,
						class: normalizeClass(_ctx.$style.settingChip)
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingLabel) }, toDisplayString(setting.label), 3), createTextVNode(" " + toDisplayString(setting.value), 1)], 2);
				}), 128))], 2)) : createCommentVNode("", true),
				createVNode(InstanceAiDebugJsonPanel_default, {
					value: __props.usage.metadata,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.usageRaw")
				}, null, 8, ["value", "label"])
			], 2)], 2);
		};
	}
});
var InstanceAiDebugUsage_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1egek_2",
	cardHeader: "_cardHeader_1egek_10",
	roleLabel: "_roleLabel_1egek_17",
	cardBody: "_cardBody_1egek_24",
	cacheBreak: "_cacheBreak_1egek_31",
	cacheBreakLabel: "_cacheBreakLabel_1egek_42",
	table: "_table_1egek_48",
	rowLabel: "_rowLabel_1egek_58",
	tokens: "_tokens_1egek_65",
	details: "_details_1egek_73",
	detail: "_detail_1egek_73",
	detailTokens: "_detailTokens_1egek_84",
	settings: "_settings_1egek_90",
	settingChip: "_settingChip_1egek_96",
	settingLabel: "_settingLabel_1egek_106"
};
var InstanceAiDebugUsage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugUsage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugUsage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepDetail.vue?vue&type=script&setup=true&lang.ts
var InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepDetail",
	props: {
		input: {},
		output: {},
		runSteps: {},
		workflowCode: {},
		cacheBreak: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const i18n = useI18n();
		const outputSectionRef = ref(null);
		const parsedSystemPrompt = computed(() => parseSystemPromptForDisplay(stepInstructions(props.input)));
		const systemBlocks = computed(() => parsedSystemPrompt.value.systemBlocks);
		const systemObservations = computed(() => parsedSystemPrompt.value.observations);
		const messageBlocks = computed(() => parseMessageBlocks(props.input?.messages));
		const inputExtras = computed(() => parseInputExtras(props.input));
		const stepConfig = computed(() => parseStepConfig(props.input));
		const outputDisplayBlocks = computed(() => parseOutputDisplayBlocks(props.output));
		const usageSummary = computed(() => parseUsageSummary(props.output?.usage));
		const outputExtras = computed(() => parseOutputExtras(props.output));
		const workflowSnapshotsByToolCallId = computed(() => mapWorkflowSnapshotsByToolCallId(props.runSteps ?? [], props.workflowCode ?? []));
		const finishReason = computed(() => typeof props.output?.finishReason === "string" ? props.output.finishReason : void 0);
		const systemCharCount = computed(() => systemBlocks.value.reduce((total, block) => total + block.content.length, 0));
		const hasInputContent = computed(() => systemBlocks.value.length > 0 || Boolean(systemObservations.value) || messageBlocks.value.length > 0 || Boolean(stepConfig.value) || Boolean(inputExtras.value));
		const hasOutputContent = computed(() => outputDisplayBlocks.value.length > 0 || Boolean(outputExtras.value) || Boolean(usageSummary.value));
		const showSystemDetails = computed(() => systemBlocks.value.length > 0);
		function getCardClass(role) {
			const normalized = role.toLowerCase();
			if (normalized.includes("system")) return "cardSystem";
			if (normalized === "reasoning") return "cardMuted";
			if (normalized === "user") return "cardUser";
			if (normalized === "assistant") return "cardAssistant";
			if (normalized === "tool") return "cardTool";
			return "cardMuted";
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function scrollToOutput(container) {
			if (!outputSectionRef.value) {
				container.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			const containerTop = container.getBoundingClientRect().top;
			const sectionTop = outputSectionRef.value.getBoundingClientRect().top;
			container.scrollTo({
				top: container.scrollTop + (sectionTop - containerTop),
				behavior: "smooth"
			});
		}
		__expose({ scrollToOutput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				__props.input ? (openBlock(), createElementBlock("section", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.input")), 1)]),
					_: 1
				}, 8, ["class"]), hasInputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					showSystemDetails.value ? (openBlock(), createElementBlock("details", {
						key: 0,
						class: normalizeClass([
							_ctx.$style.card,
							_ctx.$style.cardSystem,
							_ctx.$style.expandableCard
						])
					}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "system", 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(systemCharCount.value)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(systemBlocks.value, (block, index) => {
						return openBlock(), createElementBlock(Fragment, { key: `system-${index}` }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 64);
					}), 128))], 2)], 2)) : createCommentVNode("", true),
					systemObservations.value ? (openBlock(), createElementBlock("article", {
						key: 1,
						class: normalizeClass([_ctx.$style.card, _ctx.$style.cardObservations])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "observations", 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(systemObservations.value), 3)], 2)], 2)) : createCommentVNode("", true),
					messageBlocks.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.stackLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.messages")), 1)]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(messageBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `message-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128))], 64)) : createCommentVNode("", true),
					stepConfig.value ? (openBlock(), createBlock(InstanceAiDebugStepConfig_default, {
						key: 3,
						config: stepConfig.value
					}, null, 8, ["config"])) : createCommentVNode("", true),
					inputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 4,
						value: inputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.inputExtras")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.output ? (openBlock(), createElementBlock("section", {
					key: 1,
					ref_key: "outputSectionRef",
					ref: outputSectionRef,
					"data-test-id": "instance-ai-llm-step-output",
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.output")), 1)]),
					_: 1
				}, 8, ["class"]), finishReason.value || usageSummary.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.statsBar)
				}, [finishReason.value ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.statChip)
				}, toDisplayString(finishReason.value), 3)) : createCommentVNode("", true), usageSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(usageSummary.value.label), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), hasOutputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(outputDisplayBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `output-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128)),
					usageSummary.value ? (openBlock(), createBlock(InstanceAiDebugUsage_default, {
						key: 0,
						usage: usageSummary.value,
						"cache-break": __props.cacheBreak
					}, null, 8, ["usage", "cache-break"])) : createCommentVNode("", true),
					outputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: outputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.outputMetadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				!__props.input && !__props.output ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.emptyState)
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_xknaj_2",
	section: "_section_xknaj_8",
	sectionHeader: "_sectionHeader_xknaj_19",
	sectionTitle: "_sectionTitle_xknaj_27",
	statsBar: "_statsBar_xknaj_31",
	statChip: "_statChip_xknaj_38",
	stack: "_stack_xknaj_46",
	stackLabel: "_stackLabel_xknaj_52",
	card: "_card_xknaj_56",
	expandableCard: "_expandableCard_xknaj_63",
	cardHeader: "_cardHeader_xknaj_63",
	headerMeta: "_headerMeta_xknaj_70",
	cardSystem: "_cardSystem_xknaj_80",
	cardObservations: "_cardObservations_xknaj_84",
	cardUser: "_cardUser_xknaj_88",
	cardAssistant: "_cardAssistant_xknaj_92",
	cardTool: "_cardTool_xknaj_96",
	cardMuted: "_cardMuted_xknaj_100",
	cardBody: "_cardBody_xknaj_118",
	roleLabel: "_roleLabel_xknaj_125",
	metaLabel: "_metaLabel_xknaj_132",
	text: "_text_xknaj_137",
	emptyState: "_emptyState_xknaj_146"
};
var InstanceAiLlmStepDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiRunWorkflowCodeSection.vue?vue&type=script&setup=true&lang.ts
var InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiRunWorkflowCodeSection",
	props: {
		snapshots: {},
		showDivider: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass([_ctx.$style.section, __props.showDivider && _ctx.$style.sectionDivider]) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "small",
				bold: "",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.sectionTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.stack) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.snapshots, (snapshot, index) => {
				return openBlock(), createElementBlock("details", {
					key: `${snapshot.capturedAt}-${index}`,
					class: normalizeClass([
						_ctx.$style.card,
						_ctx.$style.cardWorkflow,
						_ctx.$style.expandableCard
					]),
					"data-test-id": "instance-ai-run-workflow-code-snapshot"
				}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(snapshot.source), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(snapshot.code.length)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createVNode(InstanceAiDebugWorkflowCodeSnapshot_default, { snapshot }, null, 8, ["snapshot"])], 2)], 2);
			}), 128))], 2)], 2);
		};
	}
});
var InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_aaqs2_2",
	sectionDivider: "_sectionDivider_aaqs2_8",
	sectionTitle: "_sectionTitle_aaqs2_13",
	stack: "_stack_aaqs2_17",
	card: "_card_aaqs2_23",
	expandableCard: "_expandableCard_aaqs2_30",
	cardHeader: "_cardHeader_aaqs2_30",
	headerMeta: "_headerMeta_aaqs2_37",
	cardWorkflow: "_cardWorkflow_aaqs2_47",
	cardBody: "_cardBody_aaqs2_68",
	roleLabel: "_roleLabel_aaqs2_72",
	metaLabel: "_metaLabel_aaqs2_79"
};
var InstanceAiRunWorkflowCodeSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepsModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["onClick"];
var _hoisted_2$3 = ["onClick"];
var _hoisted_3$2 = ["title"];
var InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepsModal",
	props: { open: { type: Boolean } },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const debugStore = useInstanceAiDebugStore();
		const currentThread = useThread();
		const selectedStepNumber = ref(null);
		const detailPaneRef = ref(null);
		const stepDetailRef = ref(null);
		const steps = computed(() => debugStore.runDebug?.steps ?? []);
		const runWorkflowCode = computed(() => debugStore.runDebug?.workflowCode ?? []);
		const selectedRunId = computed(() => debugStore.selectedRunId);
		const selectedStep = computed(() => {
			if (selectedStepNumber.value === null) return void 0;
			return steps.value.find((step) => step.stepNumber === selectedStepNumber.value);
		});
		const cacheBreaks = computed(() => parseStepCacheBreaks(steps.value));
		const stepSummaries = computed(() => steps.value.map((step, index) => {
			const cacheBreak = cacheBreaks.value[index];
			return {
				stepNumber: step.stepNumber,
				summary: parseStepSummary(step.input, step.output),
				cacheBreak,
				cacheBreakDescription: cacheBreak ? describeCacheBreak(i18n, cacheBreak) : void 0
			};
		}));
		const selectedCacheBreak = computed(() => {
			const index = steps.value.findIndex((step) => step.stepNumber === selectedStepNumber.value);
			return index >= 0 ? cacheBreaks.value[index] : void 0;
		});
		watch(() => props.open, (isOpen) => {
			if (!isOpen) {
				selectedStepNumber.value = null;
				return;
			}
			selectedStepNumber.value = steps.value[0]?.stepNumber ?? null;
		});
		watch(() => steps.value, (nextSteps) => {
			if (!props.open || nextSteps.length === 0) {
				selectedStepNumber.value = null;
				return;
			}
			if (selectedStepNumber.value === null || !nextSteps.some((step) => step.stepNumber === selectedStepNumber.value)) selectedStepNumber.value = nextSteps[0]?.stepNumber ?? null;
		});
		function handleOpenChange(open) {
			emit("update:open", open);
		}
		function selectStep(stepNumber) {
			selectedStepNumber.value = stepNumber;
		}
		async function scrollDetailToOutput() {
			await nextTick();
			if (!detailPaneRef.value || !stepDetailRef.value) return;
			stepDetailRef.value.scrollToOutput(detailPaneRef.value);
		}
		watch([selectedStep, () => debugStore.isLoadingRunDebug], ([step, isLoading]) => {
			if (!props.open || !step || isLoading) return;
			scrollDetailToOutput();
		});
		async function selectRun(runId) {
			if (runId === selectedRunId.value) return;
			await debugStore.loadRunDebug(runId);
			selectedStepNumber.value = debugStore.runDebug?.steps[0]?.stepNumber ?? null;
		}
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatCompactTokens(tokens) {
			return tokens < 1e3 ? tokens.toString() : `${(tokens / 1e3).toFixed(1)}k`;
		}
		function formatStepCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.stepCount", { interpolate: { count: String(count) } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "cover",
				"data-test-id": "instance-ai-llm-steps-modal",
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shell) }, [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitleRow) }, [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.stepsModalTitle")), 1)]),
							_: 1
						}), steps.value.length > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.stepCount)
						}, toDisplayString(formatStepCount(steps.value.length)), 3)) : createCommentVNode("", true)], 2), selectedRunId.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.runId)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(selectedRunId.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["class"]),
					unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.layout)
					}, [
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.runsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.runs")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(unref(debugStore).threadDebugRuns.length), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run, index) => {
							return openBlock(), createElementBlock("button", {
								key: run.runId,
								type: "button",
								class: normalizeClass([_ctx.$style.runButton, selectedRunId.value === run.runId && _ctx.$style.runButtonSelected]),
								"data-test-id": "instance-ai-llm-steps-modal-run",
								onClick: ($event) => selectRun(run.runId)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.runNumber) }, toDisplayString(index + 1), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRowRight) }, [run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.currentBadge)
								}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style.runIdShort) }, toDisplayString(run.runId.slice(0, 12)), 3)], 2)], 2),
								run.label ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.runLabel)
								}, toDisplayString(run.label), 3)) : createCommentVNode("", true),
								createBaseVNode("span", { class: normalizeClass(_ctx.$style.runMeta) }, toDisplayString(formatStepCount(run.stepCount)) + " · " + toDisplayString(formatTimestamp(run.startedAt)), 3)
							], 10, _hoisted_1$4);
						}), 128))], 2)], 2),
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.stepsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(steps.value.length), 3)], 2), steps.value.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.sidebarEmpty)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noSteps")), 3)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.stepList)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(stepSummaries.value, ({ stepNumber, summary, cacheBreak, cacheBreakDescription }) => {
							return openBlock(), createElementBlock("button", {
								key: stepNumber,
								type: "button",
								class: normalizeClass([
									_ctx.$style.stepButton,
									cacheBreak && _ctx.$style.stepButtonCacheBreak,
									selectedStepNumber.value === stepNumber && _ctx.$style.stepButtonSelected
								]),
								onClick: ($event) => selectStep(stepNumber)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.stepTopRow) }, [
									createBaseVNode("span", { class: normalizeClass([_ctx.$style.stepNumber, cacheBreak && _ctx.$style.stepNumberCacheBreak]) }, toDisplayString(stepNumber + 1), 3),
									summary.finishReason ? (openBlock(), createElementBlock("span", {
										key: 0,
										class: normalizeClass(_ctx.$style.finishReason)
									}, toDisplayString(summary.finishReason), 3)) : createCommentVNode("", true),
									cacheBreak ? (openBlock(), createElementBlock("span", {
										key: 1,
										class: normalizeClass(_ctx.$style.cacheBreakBadge),
										title: cacheBreakDescription,
										"data-test-id": "instance-ai-llm-step-cache-break"
									}, [
										createVNode(unref(N8nIcon_default), { icon: "triangle-alert" }),
										createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.cacheBreak")) + " ", 1),
										createBaseVNode("span", { class: normalizeClass(_ctx.$style.cacheBreakTokens) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.cacheBreakLostTokens", { interpolate: { count: formatCompactTokens(cacheBreak.lostTokens) } })), 3)
									], 10, _hoisted_3$2)) : createCommentVNode("", true)
								], 2),
								summary.toolNames.length > 0 ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.stepTools)
								}, toDisplayString(summary.toolNames.join(", ")), 3)) : summary.messagePreview ? (openBlock(), createElementBlock("span", {
									key: 1,
									class: normalizeClass(_ctx.$style.stepPreview)
								}, toDisplayString(summary.messagePreview), 3)) : createCommentVNode("", true),
								summary.usageLabel ? (openBlock(), createElementBlock("span", {
									key: 2,
									class: normalizeClass(_ctx.$style.stepUsage)
								}, toDisplayString(summary.usageLabel), 3)) : createCommentVNode("", true)
							], 10, _hoisted_2$3);
						}), 128))], 2))], 2),
						createBaseVNode("div", {
							ref_key: "detailPaneRef",
							ref: detailPaneRef,
							class: normalizeClass(_ctx.$style.detail)
						}, [unref(debugStore).isLoadingRunDebug ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loadingState)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "spinner",
							color: "primary",
							spin: "",
							size: "small"
						})], 2)) : selectedStep.value || runWorkflowCode.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.detailContent)
						}, [selectedStep.value ? (openBlock(), createBlock(InstanceAiLlmStepDetail_default, {
							key: 0,
							ref_key: "stepDetailRef",
							ref: stepDetailRef,
							input: selectedStep.value.input,
							output: selectedStep.value.output,
							"run-steps": steps.value,
							"workflow-code": runWorkflowCode.value,
							"cache-break": selectedCacheBreak.value
						}, null, 8, [
							"input",
							"output",
							"run-steps",
							"workflow-code",
							"cache-break"
						])) : createCommentVNode("", true), runWorkflowCode.value.length > 0 ? (openBlock(), createBlock(InstanceAiRunWorkflowCodeSection_default, {
							key: 1,
							snapshots: runWorkflowCode.value,
							"show-divider": Boolean(selectedStep.value)
						}, null, 8, ["snapshots", "show-divider"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.emptyState)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3))], 2)
					], 2)),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						onClick: _cache[0] || (_cache[0] = ($event) => handleOpenChange(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
						_: 1
					})], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default = {
	shell: "_shell_jbmdi_1",
	header: "_header_jbmdi_11",
	headerMain: "_headerMain_jbmdi_17",
	headerTitleRow: "_headerTitleRow_jbmdi_21",
	runId: "_runId_jbmdi_28",
	stepCount: "_stepCount_jbmdi_34",
	layout: "_layout_jbmdi_40",
	sidebar: "_sidebar_jbmdi_50",
	sidebarHeader: "_sidebarHeader_jbmdi_60",
	sidebarCount: "_sidebarCount_jbmdi_72",
	runList: "_runList_jbmdi_77",
	stepList: "_stepList_jbmdi_78",
	sidebarEmpty: "_sidebarEmpty_jbmdi_87",
	runButton: "_runButton_jbmdi_93",
	stepButton: "_stepButton_jbmdi_94",
	runButtonSelected: "_runButtonSelected_jbmdi_114",
	stepButtonSelected: "_stepButtonSelected_jbmdi_115",
	runTopRow: "_runTopRow_jbmdi_125",
	stepTopRow: "_stepTopRow_jbmdi_126",
	runTopRowRight: "_runTopRowRight_jbmdi_134",
	runNumber: "_runNumber_jbmdi_142",
	stepNumber: "_stepNumber_jbmdi_143",
	stepButtonCacheBreak: "_stepButtonCacheBreak_jbmdi_161",
	cacheBreakBadge: "_cacheBreakBadge_jbmdi_169",
	cacheBreakTokens: "_cacheBreakTokens_jbmdi_185",
	stepNumberCacheBreak: "_stepNumberCacheBreak_jbmdi_190",
	currentBadge: "_currentBadge_jbmdi_195",
	runIdShort: "_runIdShort_jbmdi_203",
	runLabel: "_runLabel_jbmdi_212",
	runMeta: "_runMeta_jbmdi_222",
	finishReason: "_finishReason_jbmdi_223",
	stepTools: "_stepTools_jbmdi_224",
	stepPreview: "_stepPreview_jbmdi_225",
	stepUsage: "_stepUsage_jbmdi_226",
	detail: "_detail_jbmdi_238",
	detailContent: "_detailContent_jbmdi_249",
	loadingState: "_loadingState_jbmdi_255",
	emptyState: "_emptyState_jbmdi_263",
	footer: "_footer_jbmdi_270"
};
var InstanceAiLlmStepsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-state"];
var _hoisted_2$2 = ["onClick"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["onClick"];
var InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const currentThread = useThread();
		const debugStore = useInstanceAiDebugStore();
		const isRunDebugEnabled = computed(() => settingsStore.moduleSettings["instance-ai"]?.runDebugEnabled === true);
		const activeTab = ref("events");
		const expandedIndex = ref(null);
		const showLlmStepsModal = ref(false);
		const eventListRef = useTemplateRef("eventList");
		const events = computed(() => currentThread.debugEvents);
		const expandedMessageIndex = ref(null);
		function toggleEvent(index) {
			expandedIndex.value = expandedIndex.value === index ? null : index;
		}
		function toggleMessage(index) {
			expandedMessageIndex.value = expandedMessageIndex.value === index ? null : index;
		}
		async function handleSelectDebugRun(runId) {
			if (activeTab.value === "llmSteps") {
				await debugStore.loadRunDebug(runId);
				if (debugStore.runDebug?.runId === runId) showLlmStepsModal.value = true;
				return;
			}
			debugStore.loadRunDebug(runId);
		}
		function getTypeBadgeClass(type) {
			if (type.includes("error")) return "error";
			if (type.includes("finish")) return "finish";
			if (type.includes("start") || type.includes("spawn")) return "start";
			if (type.includes("tool")) return "tool";
			if (type.includes("text") || type.includes("reasoning")) return "text";
			if (type.includes("confirmation")) return "confirm";
			return "default";
		}
		function getRoleBadgeClass(role) {
			if (role === "user") return "start";
			if (role === "assistant") return "tool";
			if (role === "system") return "confirm";
			return "default";
		}
		function formatTime(iso) {
			try {
				return new Date(iso).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return iso;
			}
		}
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatDateTime(iso) {
			try {
				const d = new Date(iso);
				return `${d.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric"
				})} ${d.toLocaleTimeString("en-US", {
					hour12: false,
					hour: "2-digit",
					minute: "2-digit"
				})}`;
			} catch {
				return iso;
			}
		}
		async function refreshRunDebugData() {
			await debugStore.refreshRunDebug(currentThread.id, currentThread.activeRunId);
		}
		function contentPreview(content) {
			if (typeof content === "string") return content.length > 100 ? content.slice(0, 100) + "..." : content;
			const str = JSON.stringify(content);
			return str.length > 100 ? str.slice(0, 100) + "..." : str;
		}
		async function handleCopyTrace() {
			const trace = currentThread.copyFullTrace();
			await navigator.clipboard.writeText(trace);
		}
		watch(() => events.value.length, () => {
			nextTick(() => {
				if (eventListRef.value) eventListRef.value.scrollTop = eventListRef.value.scrollHeight;
			});
		});
		watch(activeTab, (tab) => {
			if (tab === "threads" && debugStore.threads.length === 0) debugStore.loadThreads();
			if (isRunDebugEnabled.value && (tab === "llmSteps" || tab === "workflowCode")) refreshRunDebugData();
		});
		watch(isRunDebugEnabled, (enabled) => {
			if (!enabled && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) {
				activeTab.value = "events";
				showLlmStepsModal.value = false;
			}
		});
		watch(() => currentThread.isStreaming, (isStreaming, wasStreaming) => {
			if (isRunDebugEnabled.value && wasStreaming && !isStreaming && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) refreshRunDebugData();
		});
		function handleSelectThread(threadId) {
			expandedMessageIndex.value = null;
			debugStore.selectThread(threadId);
		}
		function handleRefreshThreads() {
			debugStore.loadThreads();
		}
		const toolCallTimings = computed(() => {
			const timings = [];
			for (const msg of currentThread.messages) {
				if (!msg.agentTree) continue;
				const nodes = [msg.agentTree, ...msg.agentTree.children];
				for (const node of nodes) for (const tc of node.toolCalls) if (tc.startedAt && tc.completedAt) {
					const ms = new Date(tc.completedAt).getTime() - new Date(tc.startedAt).getTime();
					timings.push({
						name: tc.toolName,
						duration: ms < 1e3 ? `${ms}ms` : `${(ms / 1e3).toFixed(1)}s`,
						toolCallId: tc.toolCallId
					});
				}
			}
			return timings;
		});
		onMounted(() => {
			if (activeTab.value === "threads") debugStore.loadThreads();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: "bug",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.debug.title")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [activeTab.value === "events" ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton),
					onClick: handleCopyTrace
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.copyTrace")), 3)) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabBar) }, [
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "events" && _ctx.$style.tabActive]),
						onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "events")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.events")), 3),
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "threads" && _ctx.$style.tabActive]),
						onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "threads")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.threads")), 3),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "llmSteps" && _ctx.$style.tabActive]),
						onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "llmSteps")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")), 3)) : createCommentVNode("", true),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 1,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "workflowCode" && _ctx.$style.tabActive]),
						onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "workflowCode")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3)) : createCommentVNode("", true)
				], 2),
				activeTab.value === "events" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusBar) }, [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.statusDot),
							"data-state": unref(currentThread).sseState
						}, null, 10, _hoisted_1$3),
						createBaseVNode("span", null, "SSE: " + toDisplayString(unref(currentThread).sseState), 1),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventCount) }, toDisplayString(events.value.length) + " events", 3)
					], 2),
					toolCallTimings.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.timingSection)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.timingTitle) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.timing")), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(toolCallTimings.value, (timing) => {
						return openBlock(), createElementBlock("div", {
							key: timing.toolCallId,
							class: normalizeClass(_ctx.$style.timingRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingName) }, toDisplayString(timing.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingDuration) }, toDisplayString(timing.duration), 3)], 2);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref: "eventList",
						class: normalizeClass(_ctx.$style.eventList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (entry, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: normalizeClass(_ctx.$style.eventRow),
							onClick: ($event) => toggleEvent(index)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.eventHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(entry.timestamp)), 3), createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getTypeBadgeClass(entry.event.type)]]) }, toDisplayString(entry.event.type), 3)], 2), expandedIndex.value === index ? (openBlock(), createElementBlock("pre", {
							key: 0,
							class: normalizeClass(_ctx.$style.eventPayload)
						}, toDisplayString(unref(formatDebugJson)(entry.event)), 3)) : createCommentVNode("", true)], 10, _hoisted_2$2);
					}), 128))], 2)
				], 64)) : createCommentVNode("", true),
				activeTab.value === "threads" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.title")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: handleRefreshThreads
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreads ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threads.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noThreads")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threads, (thread) => {
						return openBlock(), createElementBlock("div", {
							key: thread.id,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedThreadId === thread.id && _ctx.$style.threadRowSelected]),
							onClick: ($event) => handleSelectThread(thread.id)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title || thread.id.slice(0, 8)), 3), thread.id === unref(currentThread).id ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatDateTime(thread.updatedAt)), 3)], 10, _hoisted_3$1);
					}), 128))], 2)),
					unref(debugStore).selectedThreadId ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.messages")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailContent) }, [unref(debugStore).isLoadingMessages ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadMessages.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noMessages")), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(debugStore).threadMessages, (msg, mIdx) => {
						return openBlock(), createElementBlock("div", {
							key: msg.id,
							class: normalizeClass(_ctx.$style.messageRow),
							onClick: ($event) => toggleMessage(mIdx)
						}, [
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messageHeader) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getRoleBadgeClass(msg.role)]]) }, toDisplayString(msg.role), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(msg.createdAt)), 3)], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messagePreview) }, toDisplayString(contentPreview(msg.content)), 3),
							expandedMessageIndex.value === mIdx ? (openBlock(), createElementBlock("pre", {
								key: 0,
								class: normalizeClass(_ctx.$style.eventPayload)
							}, toDisplayString(unref(formatDebugJson)(msg.content)), 3)) : createCommentVNode("", true)
						], 10, _hoisted_4);
					}), 128))], 2)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.selectRun")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: refreshRunDebugData
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreadDebugRuns ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run) => {
						return openBlock(), createElementBlock("div", {
							key: run.runId,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedRunId === run.runId && _ctx.$style.threadRowSelected]),
							"data-test-id": "instance-ai-debug-run-row",
							onClick: ($event) => handleSelectDebugRun(run.runId)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.runMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(run.runId.slice(0, 12)), 3), run.label ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.runLabel)
						}, toDisplayString(run.label), 3)) : createCommentVNode("", true)], 2), run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatTimestamp(run.startedAt)), 3)], 10, _hoisted_5);
					}), 128))], 2)),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "llmSteps" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : createCommentVNode("", true),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).runDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [unref(debugStore).runDebug.workflowCode.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noWorkflowCode")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style.threadDetailContent, _ctx.$style.workflowSnapshotList])
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).runDebug.workflowCode, (snapshot, wIdx) => {
						return openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
							key: `${snapshot.capturedAt}-${wIdx}`,
							snapshot,
							variant: "inline"
						}, null, 8, ["snapshot"]);
					}), 128))], 2))], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value ? (openBlock(), createBlock(InstanceAiLlmStepsModal_default, {
					key: 3,
					open: showLlmStepsModal.value,
					"onUpdate:open": _cache[5] || (_cache[5] = ($event) => showLlmStepsModal.value = $event)
				}, null, 8, ["open"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_1k2oi_1";
var header$3 = "_header_1k2oi_14";
var headerTitle$1 = "_headerTitle_1k2oi_22";
var headerActions = "_headerActions_1k2oi_30";
var copyButton = "_copyButton_1k2oi_36";
var tabBar = "_tabBar_1k2oi_50";
var tab$1 = "_tab_1k2oi_50";
var tabActive = "_tabActive_1k2oi_72";
var statusBar = "_statusBar_1k2oi_78";
var statusDot = "_statusDot_1k2oi_88";
var eventCount = "_eventCount_1k2oi_101";
var timingSection = "_timingSection_1k2oi_105";
var timingTitle = "_timingTitle_1k2oi_110";
var timingRow = "_timingRow_1k2oi_119";
var timingName = "_timingName_1k2oi_126";
var timingDuration = "_timingDuration_1k2oi_131";
var eventList = "_eventList_1k2oi_136";
var eventRow = "_eventRow_1k2oi_142";
var eventHeader = "_eventHeader_1k2oi_151";
var eventTime = "_eventTime_1k2oi_157";
var eventType = "_eventType_1k2oi_162";
var error = "_error_1k2oi_169";
var finish = "_finish_1k2oi_174";
var start = "_start_1k2oi_179";
var tool = "_tool_1k2oi_184";
var text = "_text_1k2oi_189";
var confirm = "_confirm_1k2oi_194";
var eventPayload = "_eventPayload_1k2oi_204";
var threadListHeader = "_threadListHeader_1k2oi_220";
var sectionLabel = "_sectionLabel_1k2oi_228";
var loadingState = "_loadingState_1k2oi_236";
var emptyState$1 = "_emptyState_1k2oi_244";
var threadList = "_threadList_1k2oi_220";
var threadRow = "_threadRow_1k2oi_257";
var threadRowSelected = "_threadRowSelected_1k2oi_266";
var threadRowMain = "_threadRowMain_1k2oi_273";
var runMeta = "_runMeta_1k2oi_280";
var runLabel = "_runLabel_1k2oi_288";
var threadTitle = "_threadTitle_1k2oi_296";
var currentBadge = "_currentBadge_1k2oi_305";
var threadTime = "_threadTime_1k2oi_313";
var threadDetailHeader = "_threadDetailHeader_1k2oi_318";
var threadDetailContent = "_threadDetailContent_1k2oi_323";
var workflowSnapshotList = "_workflowSnapshotList_1k2oi_329";
var messageRow = "_messageRow_1k2oi_336";
var messageHeader = "_messageHeader_1k2oi_345";
var messagePreview = "_messagePreview_1k2oi_352";
var InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$3,
	headerTitle: headerTitle$1,
	headerActions,
	copyButton,
	tabBar,
	tab: tab$1,
	tabActive,
	statusBar,
	statusDot,
	eventCount,
	timingSection,
	timingTitle,
	timingRow,
	timingName,
	timingDuration,
	eventList,
	eventRow,
	eventHeader,
	eventTime,
	eventType,
	error,
	finish,
	start,
	tool,
	text,
	confirm,
	"default": "_default_1k2oi_199",
	eventPayload,
	threadListHeader,
	sectionLabel,
	loadingState,
	emptyState: emptyState$1,
	threadList,
	threadRow,
	threadRowSelected,
	threadRowMain,
	runMeta,
	runLabel,
	threadTitle,
	currentBadge,
	threadTime,
	threadDetailHeader,
	threadDetailContent,
	workflowSnapshotList,
	messageRow,
	messageHeader,
	messagePreview
};
var InstanceAiDebugPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"href",
	"title",
	"aria-label",
	"onClick"
];
var _hoisted_2$1 = ["title"];
var InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiArtifactsPanel",
	setup(__props) {
		const projectsStore = useProjectsStore();
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const thread = useThread();
		const project = computed(() => {
			if (!thread.projectId && thread.hydrationStatus !== "ready") return void 0;
			const match = projectsStore.myProjects.find((p) => p.id === thread.projectId);
			if (!match) return {
				name: i18n.baseText("instanceAi.artifactsPanel.unknownProject"),
				icon: {
					type: "icon",
					value: "circle-help"
				}
			};
			const isPersonal = match.type === "personal";
			const icon = isIconOrEmoji(match.icon) ? match.icon : {
				type: "icon",
				value: "layers"
			};
			return {
				name: isPersonal ? i18n.baseText("instanceAi.artifactsPanel.personalSpace") : match.name,
				icon: isPersonal ? {
					type: "icon",
					value: "user"
				} : icon
			};
		});
		const openPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		const openAgentPreview = inject("openAgentPreview", void 0);
		const pendingComposerContext = inject("pendingComposerContext", void 0);
		const dismissPendingComposerContext = inject("dismissPendingComposerContext", void 0);
		function handleArtifactClick(artifact, e) {
			if (artifact.type === "agent" && artifact.pending) e.preventDefault();
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			if (artifact.type === "workflow" && artifact.id) {
				if (!openPreview) return;
				e.preventDefault();
				openPreview(artifact.id);
			} else if (artifact.type === "data-table" && artifact.id) {
				if (!artifact.projectId || !openDataTablePreview) return;
				e.preventDefault();
				openDataTablePreview(artifact.id, artifact.projectId);
			} else if (artifact.type === "agent" && artifact.id) {
				if (!artifact.projectId || !openAgentPreview) return;
				e.preventDefault();
				openAgentPreview(artifact.id, artifact.projectId);
			}
		}
		const tasks = computed(() => thread.currentTasks);
		const visibleTasks = computed(() => tasks.value?.tasks ?? []);
		const hasTasks = computed(() => visibleTasks.value.length > 0);
		const statusIconMap = {
			todo: {
				icon: "circle",
				spin: false,
				className: "todoIcon"
			},
			in_progress: {
				icon: "spinner",
				spin: true,
				className: "inProgressIcon"
			},
			done: {
				icon: "check",
				spin: false,
				className: "doneIcon"
			},
			failed: {
				icon: "circle-x",
				spin: false,
				className: "failedIcon"
			},
			cancelled: {
				icon: "ban",
				spin: false,
				className: "cancelledIcon"
			}
		};
		const buildingArtifactIds = useBuildingArtifactIds();
		const artifacts = computed(() => {
			const result = [];
			for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table" || entry.type === "agent") result.push(entry);
			return result;
		});
		const artifactIconMap = {
			workflow: "workflow",
			"data-table": "table",
			agent: "robot"
		};
		function artifactHref(artifact) {
			if (artifact.type === "workflow") return `/workflow/${artifact.id}`;
			if (artifact.type === "data-table") return artifact.projectId ? `/projects/${artifact.projectId}/datatables/${artifact.id}` : "/data-tables";
			if (artifact.type === "agent") {
				if (artifact.pending) return "#";
				return artifact.projectId ? `/projects/${artifact.projectId}/agents/${artifact.id}` : "/home/agents";
			}
			return "#";
		}
		function openArtifactLabel(name) {
			return i18n.baseText("instanceAi.artifactsPanel.openArtifact", { interpolate: { name } });
		}
		function contextEntryFor(context) {
			const key = handoffContextKey(context);
			if (context.source === "setup-panel-execute") return void 0;
			if (context.source === "agent-preview") return {
				key,
				icon: agentPreviewContextIcon(context.agentIcon),
				name: formatAgentPreviewContextLabel(context, (textKey, options) => i18n.baseText(textKey, options), thread.producedArtifacts.get(context.agentId)?.name),
				subtitle: i18n.baseText("instanceAi.artifactsPanel.context.addedToContext")
			};
			return {
				key,
				icon: "key-round",
				name: context.credential.displayName,
				subtitle: i18n.baseText("instanceAi.artifactsPanel.context.credentialModal")
			};
		}
		const contextEntries = computed(() => {
			const entries = [];
			const seen = /* @__PURE__ */ new Set();
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			const pending = pendingComposerContext?.value;
			const pendingEntry = pending ? contextEntryFor(pending) : void 0;
			if (pendingEntry) {
				seen.add(pendingEntry.key);
				entries.push(pendingEntry);
			}
			for (const message of [...thread.messages].reverse()) {
				if (message.role !== "user" || !message.context) continue;
				const key = handoffContextKey(message.context);
				if (seen.has(key) || dismissedKeys.has(key)) continue;
				const entry = contextEntryFor(message.context);
				if (!entry) continue;
				seen.add(key);
				entries.push(entry);
			}
			return entries;
		});
		async function dismissContext(key) {
			const pending = pendingComposerContext?.value;
			if (pending && handoffContextKey(pending) === key) {
				dismissPendingComposerContext?.(key);
				return;
			}
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			dismissedKeys.add(key);
			await store.updateThreadMetadata(thread.id, { dismissedContextKeys: [...dismissedKeys] });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "instance-ai-artifacts-sidebar"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.group),
				"data-test-id": "instance-ai-artifacts-sidebar-group"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.project")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.artifactList) }, [project.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.artifactRow])
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(ProjectIcon_default, {
					icon: project.value.icon,
					size: "small",
					"border-less": ""
				}, null, 8, ["icon"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(project.value.name), 3)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.artifactRow),
					"data-test-id": "instance-ai-artifacts-project-loading"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.artifactIconWrap, _ctx.$style.iconSkeleton]) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameSkeleton) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2))], 2)], 2),
				contextEntries.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.context.title")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contextList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(contextEntries.value, (entry) => {
					return openBlock(), createElementBlock("div", {
						key: entry.key,
						class: normalizeClass(_ctx.$style.contextRow),
						"data-test-id": "instance-ai-context-row"
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(unref(N8nIcon_default), {
							icon: entry.icon,
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon)
						}, null, 8, ["icon", "class"])], 2),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextText) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextName) }, toDisplayString(entry.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextSubtitle) }, toDisplayString(entry.subtitle), 3)], 2),
						createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.contextDismiss),
							"aria-label": unref(i18n).baseText("instanceAi.artifactsPanel.context.dismiss"),
							title: unref(i18n).baseText("instanceAi.artifactsPanel.context.dismiss"),
							"data-test-id": "instance-ai-context-dismiss",
							onClick: ($event) => dismissContext(entry.key)
						}, null, 8, [
							"class",
							"aria-label",
							"title",
							"onClick"
						])
					], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.title")), 1)]),
					_: 1
				}, 8, ["class"])], 2), artifacts.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.artifactList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(artifacts.value, (artifact) => {
					return openBlock(), createElementBlock("a", {
						key: artifact.id,
						href: artifactHref(artifact),
						class: normalizeClass([_ctx.$style.artifactRow, artifact.archived && _ctx.$style.artifactRowArchived]),
						title: artifact.name,
						"aria-label": openArtifactLabel(artifact.name),
						onClick: ($event) => handleArtifactClick(artifact, $event)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [unref(buildingArtifactIds).has(artifact.id) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							spin: "",
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon),
							"data-test-id": "instance-ai-artifact-building-spinner"
						}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: artifactIconMap[artifact.type] ?? "file",
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon)
						}, null, 8, ["icon", "class"]))], 2),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(artifact.name), 3),
						artifact.archived ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.archivedBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.archived")), 3)) : createCommentVNode("", true)
					], 10, _hoisted_1$2);
				}), 128))], 2)) : unref(thread).hydrationStatus !== "ready" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.artifactList),
					"data-test-id": "instance-ai-artifacts-list-loading"
				}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.artifactRow, _ctx.$style.artifactRowSkeleton]) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.artifactIconWrap, _ctx.$style.artifactIconSkeleton]) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameSkeleton) }, [createVNode(unref(N8nLoading_default), { variant: "custom" })], 2)], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.emptyState)
				}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.noArtifacts")), 1)], 2))], 2),
				hasTasks.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.tasks")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleTasks.value, (task) => {
					return openBlock(), createElementBlock("div", {
						key: task.id,
						class: normalizeClass([
							_ctx.$style.task,
							task.status === "done" ? _ctx.$style.doneTask : "",
							task.status === "failed" ? _ctx.$style.failedTask : "",
							task.status === "cancelled" ? _ctx.$style.cancelledTask : ""
						])
					}, [createVNode(unref(N8nIcon_default), {
						icon: statusIconMap[task.status].icon,
						class: normalizeClass(_ctx.$style[statusIconMap[task.status].className]),
						spin: statusIconMap[task.status].spin,
						size: "medium"
					}, null, 8, [
						"icon",
						"class",
						"spin"
					]), createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.taskDescription),
						title: task.description
					}, toDisplayString(task.description), 11, _hoisted_2$1)], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1plbn_1",
	group: "_group_1plbn_11",
	section: "_section_1plbn_19",
	sectionHeader: "_sectionHeader_1plbn_40",
	sectionTitle: "_sectionTitle_1plbn_49",
	artifactList: "_artifactList_1plbn_54",
	contextList: "_contextList_1plbn_59",
	contextRow: "_contextRow_1plbn_64",
	contextText: "_contextText_1plbn_71",
	contextName: "_contextName_1plbn_78",
	contextSubtitle: "_contextSubtitle_1plbn_87",
	contextDismiss: "_contextDismiss_1plbn_96",
	artifactRow: "_artifactRow_1plbn_101",
	artifactIconWrap: "_artifactIconWrap_1plbn_123",
	artifactIcon: "_artifactIcon_1plbn_123",
	artifactName: "_artifactName_1plbn_134",
	iconSkeleton: "_iconSkeleton_1plbn_146",
	nameSkeleton: "_nameSkeleton_1plbn_151",
	artifactRowSkeleton: "_artifactRowSkeleton_1plbn_158",
	artifactIconSkeleton: "_artifactIconSkeleton_1plbn_162",
	artifactRowArchived: "_artifactRowArchived_1plbn_167",
	archivedBadge: "_archivedBadge_1plbn_174",
	emptyState: "_emptyState_1plbn_184",
	taskList: "_taskList_1plbn_195",
	task: "_task_1plbn_195",
	doneTask: "_doneTask_1plbn_210",
	failedTask: "_failedTask_1plbn_215",
	cancelledTask: "_cancelledTask_1plbn_219",
	taskDescription: "_taskDescription_1plbn_223",
	todoIcon: "_todoIcon_1plbn_232",
	inProgressIcon: "_inProgressIcon_1plbn_236",
	doneIcon: "_doneIcon_1plbn_240",
	failedIcon: "_failedIcon_1plbn_247",
	cancelledIcon: "_cancelledIcon_1plbn_251"
};
var InstanceAiArtifactsPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiFixWithAiPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiFixWithAiPanel",
	props: {
		nodeName: {},
		errorMessage: {},
		failedCount: { default: 1 }
	},
	emits: ["fix-with-ai", "dismiss"],
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isErrorDetailsOpen = ref(false);
		const title = computed(() => props.failedCount > 1 ? i18n.baseText("instanceAi.fixWithAi.notice.title.multiple", { interpolate: { count: props.failedCount } }) : i18n.baseText("instanceAi.fixWithAi.notice.title.single", { interpolate: { nodeName: props.nodeName } }));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				role: "alert",
				"data-test-id": "instance-ai-fix-with-ai-panel"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-x",
					size: "medium",
					class: normalizeClass(_ctx.$style.headerIcon)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					bold: "",
					tag: "span",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(CollapsibleRoot_default), {
					open: isErrorDetailsOpen.value,
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isErrorDetailsOpen.value = $event)
				}, {
					default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.toggle),
							"data-test-id": "instance-ai-fix-with-ai-error-toggle"
						}, [createVNode(unref(N8nIcon_default), {
							icon: isErrorDetailsOpen.value ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"]), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.errorDetails")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}), createVNode(unref(AnimatedCollapsibleContent_default), null, {
						default: withCtx(() => [createBaseVNode("pre", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("code", null, toDisplayString(__props.errorMessage), 1)], 2)]),
						_: 1
					})]),
					_: 1
				}, 8, ["open"])], 2),
				createVNode(ConfirmationFooter_default, {
					layout: "row-end",
					bordered: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						"data-test-id": "instance-ai-fix-with-ai-dismiss",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("dismiss"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.notice.dismiss")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						icon: "sparkles",
						"data-test-id": "instance-ai-fix-with-ai-button",
						onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("fix-with-ai"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.button")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2);
		};
	}
});
var InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_oab9l_1",
	header: "_header_oab9l_10",
	headerIcon: "_headerIcon_oab9l_18",
	title: "_title_oab9l_23",
	body: "_body_oab9l_28",
	toggle: "_toggle_oab9l_32",
	codeBlock: "_codeBlock_oab9l_48"
};
var InstanceAiFixWithAiPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/setupPanel/composables/useWorkflowSetupItems.ts
/**
* A legacy credential name must be replaced with a stored credential reference.
*/
function isBoundCredential(assigned) {
	return typeof assigned !== "string" && (Boolean(assigned?.id) || assigned?.__aiGatewayManaged === true);
}
/**
* Derives service-keyed setup items (`InstanceAiSetupItem`) for a workflow.
* Unlike `useWorkflowSetupState` (the canvas setup wizard), it takes an
* explicit workflowId instead of the editor's injected document store, holds
* no UI state, and derives done-ness on demand so out-of-band changes — e.g.
* a credential created from the credentials page — reflect immediately.
*
* Node state comes from the live document store while a canvas host has one
* hydrated, and from the saved workflow (fetched here) otherwise, so the
* derivation also works on a refreshed thread with no canvas mounted. Pass
* `paused` while the agent is editing to defer workflow reads. Credential
* reads continue so connections can start during the build.
*/
function useWorkflowSetupItems(workflowId, options = {}) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const oauth = useCredentialOAuth();
	const oauthConnections = shallowReactive(/* @__PURE__ */ new Map());
	const checkedCredentialIds = shallowReactive(/* @__PURE__ */ new Set());
	watch(() => toValue(workflowId), () => checkedCredentialIds.clear());
	const workflowsListStore = useWorkflowsListStore();
	const workflowsStore = useWorkflowsStore();
	const credentialsLoadedForWorkflow = ref();
	const credentialsAvailable = computed(() => {
		const id = toValue(workflowId);
		return id !== void 0 && credentialsLoadedForWorkflow.value === id && credentialsStore.hasUsableCredentialsForScope({ workflowId: id });
	});
	/**
	* The canvas host's live document store, if any. Resolved fresh so a host
	* dispose+recreate cycle reactively swaps this to the live instance instead
	* of pinning a disposed one. Never instantiates the (heavyweight) store.
	*/
	const documentStore = computed(() => {
		const id = toValue(workflowId);
		return id ? useExistingWorkflowDocumentStore(createWorkflowDocumentId(id)) : void 0;
	});
	/**
	* The saved workflow as fetched by this composable. Deliberately not read
	* back from `workflowsById`: list pages seed that cache with `nodes: []`
	* placeholders, which would read as an empty (but "available") workflow.
	*/
	const fetchedWorkflow = ref();
	const isRefreshingWorkflow = ref(false);
	let workflowFetchVersion = 0;
	onScopeDispose(() => {
		workflowFetchVersion++;
		oauthConnections.clear();
	});
	async function refreshWorkflow({ force = false } = {}) {
		const id = toValue(workflowId);
		if (!id || !force && (toValue(options.paused) || documentStore.value?.hydrated)) return;
		const requestVersion = ++workflowFetchVersion;
		const isCurrentRequest = () => requestVersion === workflowFetchVersion && toValue(workflowId) === id && (force || !toValue(options.paused) && !documentStore.value?.hydrated);
		if (!isCurrentRequest()) return;
		isRefreshingWorkflow.value = true;
		try {
			for (let attempt = 0; attempt < 2 && isCurrentRequest(); attempt++) try {
				const workflow = await workflowsListStore.fetchWorkflow(id);
				if (isCurrentRequest()) fetchedWorkflow.value = workflow;
				return;
			} catch {}
		} finally {
			if (requestVersion === workflowFetchVersion) isRefreshingWorkflow.value = false;
		}
	}
	const workflowProjectId = computed(() => {
		if (documentStore.value?.hydrated) return documentStore.value.homeProject?.id;
		const workflow = fetchedWorkflow.value;
		return workflow?.id === toValue(workflowId) && workflow ? deriveHomeProject(workflow)?.id : void 0;
	});
	watch(() => [
		toValue(workflowId),
		toValue(options.paused) === true,
		documentStore.value?.hydrated === true
	], ([id, paused, hydrated]) => {
		if (!id) return;
		nodeTypesStore.loadNodeTypesIfNotLoaded().catch(() => {});
		refreshUsableSlice();
		if (!paused && !hydrated) refreshWorkflow();
	}, { immediate: true });
	function refreshUsableSlice() {
		const id = toValue(workflowId);
		if (id) credentialsStore.fetchUsableCredentials({ workflowId: id }).then(() => {
			if (toValue(workflowId) === id) credentialsLoadedForWorkflow.value = id;
		}).catch(() => {});
	}
	listenForCredentialChanges({
		store: credentialsStore,
		onCredentialCreated: refreshUsableSlice,
		onCredentialUpdated: refreshUsableSlice,
		onCredentialDeleted: refreshUsableSlice
	});
	workflowsStore.$onAction(({ name, args, after }) => {
		if (name !== "updateWorkflow" || args[0] !== toValue(workflowId)) return;
		after((saved) => {
			if (saved.id !== toValue(workflowId)) return;
			workflowFetchVersion++;
			fetchedWorkflow.value = saved;
			isRefreshingWorkflow.value = false;
		});
	});
	/** Live canvas nodes when a host hydrated a document store, else the fetched save's. */
	const workflowNodes = computed(() => {
		const docStore = documentStore.value;
		const id = toValue(workflowId);
		if (toValue(options.paused) && fetchedWorkflow.value?.id === id) return fetchedWorkflow.value?.nodes;
		if (docStore?.hydrated) return docStore.allNodes;
		return id && fetchedWorkflow.value?.id === id ? fetchedWorkflow.value.nodes : void 0;
	});
	const boundCredentialIds = computed(() => new Set((workflowNodes.value ?? []).flatMap((node) => Object.values(node.credentials ?? {}).map((credential) => credential.id))));
	watch(boundCredentialIds, (ids) => {
		for (const id of checkedCredentialIds) if (ids.has(id)) checkedCredentialIds.delete(id);
	});
	const boundOAuthCredentials = computed(() => {
		return [...new Set([...boundCredentialIds.value, ...checkedCredentialIds])].flatMap((id) => {
			const credential = getBoundCredential(id);
			return credential && !credential.isResolvable && oauth.isOAuthCredentialType(credential.type) ? [{
				id: credential.id,
				key: JSON.stringify([
					toValue(workflowId),
					credential.type,
					credential.updatedAt,
					[...credential.scopes ?? []].sort()
				])
			}] : [];
		});
	});
	const isCheckingOAuthCredentials = computed(() => boundOAuthCredentials.value.some(({ id, key }) => {
		const connection = oauthConnections.get(id);
		return connection?.key !== key || connection.status === "loading";
	}));
	watch(boundOAuthCredentials, async (credentials) => {
		const ids = new Set(credentials.map(({ id }) => id));
		for (const id of oauthConnections.keys()) if (!ids.has(id)) oauthConnections.delete(id);
		await Promise.all(credentials.map(async ({ id, key }) => {
			const cached = oauthConnections.get(id);
			if (cached?.key === key && cached.status !== "error") return;
			const connection = {
				key,
				status: "loading"
			};
			oauthConnections.set(id, connection);
			const permissions = getResourcePermissions(getBoundCredential(id)?.scopes).credential;
			let status = permissions.read && !permissions.update ? "unknown" : "error";
			try {
				const loaded = await credentialsStore.getCredentialData({ id });
				const data = loaded?.data;
				if (data && typeof data === "object") status = Boolean(data.grantType && !["authorizationCode", "pkce"].includes(String(data.grantType))) || hasOAuthTokenData(loaded) ? "connected" : "disconnected";
			} catch {}
			if (oauthConnections.get(id) === connection) oauthConnections.set(id, {
				key,
				status
			});
		}));
	}, { immediate: true });
	/**
	* Node state is available from a hydrated canvas store or the fetched
	* workflow. Node types must be in too: deriving without them drops
	* type-defined credentials and reads parameters as issue-free, so items
	* would falsely show as done.
	*/
	const isWorkflowAvailable = computed(() => nodeTypesStore.allNodeTypes.length > 0 && workflowNodes.value !== void 0);
	const nodesByName = computed(() => {
		const byName = /* @__PURE__ */ new Map();
		for (const node of workflowNodes.value ?? []) byName.set(node.name, node);
		return byName;
	});
	function getPendingParameterNames(node) {
		const names = new Set(Object.keys(getNodeParametersIssues(nodeTypesStore, node)));
		for (const [name, value] of Object.entries(node.parameters)) if (findPlaceholderDetails(value).length > 0) names.add(name);
		return names;
	}
	const nodesRequiringSetup = computed(() => {
		return (workflowNodes.value ?? []).filter((node) => !node.disabled).map((node) => ({
			node,
			credentialTypes: getNodeCredentialTypes(nodeTypesStore, node),
			parameterNames: getPendingParameterNames(node)
		})).filter(({ credentialTypes, parameterNames }) => credentialTypes.length > 0 || parameterNames.size > 0);
	});
	/**
	* Parameter rows this composable has seen raise issues, kept so resolving
	* them renders a checked row instead of dropping it (credential rows get
	* this for free — they derive from workflow structure, not issue state).
	* Session-scoped memory, cleared when the target workflow changes.
	*/
	const settledParameterItems = /* @__PURE__ */ new Map();
	watch(() => toValue(workflowId), () => settledParameterItems.clear());
	/**
	* Items keyed like the agent's durable `setup-items` events
	* (`${workflowId}:${kind}:${key}`), so event rows and derived rows
	* reconcile to the same identity. Credential items are per credential
	* type, fanned out to the nodes using it via `nodeBindings` — except
	* generic auth types, where one credential of the type serves many
	* services so nodes can't share a row (or a done state): those are one
	* item per node, with the node name in the id.
	*/
	const derivedCredentialItems = computed(() => {
		const id = toValue(workflowId);
		if (!id || !isWorkflowAvailable.value) return [];
		const items = [];
		const bindingsByCredentialType = /* @__PURE__ */ new Map();
		for (const { node, credentialTypes } of nodesRequiringSetup.value) for (const credentialType of credentialTypes) {
			const bindings = bindingsByCredentialType.get(credentialType) ?? [];
			bindings.push({ nodeName: node.name });
			bindingsByCredentialType.set(credentialType, bindings);
		}
		for (const [credentialType, nodeBindings] of bindingsByCredentialType) {
			const appDisplayName = credentialsStore.getCredentialTypeByName(credentialType)?.displayName;
			if (GENERIC_AUTH_CREDENTIAL_TYPES.has(credentialType)) {
				for (const binding of nodeBindings) items.push({
					id: `${id}:credential:${credentialType}:${binding.nodeName}`,
					kind: "credential",
					credentialType,
					appDisplayName,
					nodeBindings: [binding]
				});
				continue;
			}
			items.push({
				id: `${id}:credential:${credentialType}`,
				kind: "credential",
				credentialType,
				appDisplayName,
				nodeBindings
			});
		}
		return items;
	});
	const derivedItems = computed(() => {
		const id = toValue(workflowId);
		if (!id || !isWorkflowAvailable.value) return [];
		const items = [...derivedCredentialItems.value];
		for (const { node, parameterNames: pendingNames } of nodesRequiringSetup.value) {
			const parameterNames = [...pendingNames];
			if (parameterNames.length === 0) continue;
			const item = {
				id: `${id}:parameters:${node.name}`,
				kind: "parameters",
				nodeName: node.name,
				parameterNames
			};
			settledParameterItems.set(item.id, item);
			items.push(item);
		}
		for (const item of settledParameterItems.values()) {
			if (items.some((existing) => existing.id === item.id)) continue;
			const node = nodesByName.value.get(item.nodeName);
			if (!node || node.disabled) continue;
			items.push(item);
		}
		return items;
	});
	function getBoundCredential(credentialId) {
		const id = toValue(workflowId);
		return credentialId ? (id && credentialsStore.hasUsableCredentialsForScope({ workflowId: id }) ? credentialsStore.getUsableCredentialById(credentialId) : void 0) ?? credentialsStore.getCredentialById(credentialId) : void 0;
	}
	function isCredentialConfigured(assigned) {
		if (!isBoundCredential(assigned)) return false;
		const credential = getBoundCredential(typeof assigned !== "string" ? assigned?.id : void 0);
		if (credential && !credential.isResolvable && oauth.isOAuthCredentialType(credential.type)) {
			if (!boundCredentialIds.value.has(credential.id)) checkedCredentialIds.add(credential.id);
			const status = oauthConnections.get(credential.id)?.status;
			return status === "connected" || status === "unknown";
		}
		return !credential?.isResolvable || credential.connectedByMe !== false;
	}
	/** Completion requires a binding on every node, not merely an available account. */
	function isItemDone(item, readNode = getNodeByName) {
		if (item.kind === "credential") {
			const nodeNames = (item.nodeBindings ?? []).map((binding) => binding.nodeName);
			return nodeNames.length > 0 && nodeNames.every((nodeName) => isCredentialConfigured(readNode(nodeName)?.credentials?.[item.credentialType]));
		}
		const node = readNode(item.nodeName);
		if (!node) return false;
		const pendingNames = getPendingParameterNames(node);
		return item.parameterNames.every((parameterName) => {
			const root = parameterName.split(/[.[\]]/)[0] ?? parameterName;
			return !pendingNames.has(root);
		});
	}
	/** The workflow node behind an item, for detail views that host node inputs. */
	function getNodeByName(nodeName) {
		return nodesByName.value.get(nodeName);
	}
	return {
		credentialsAvailable,
		workflowNodes,
		savedWorkflowChecksum: computed(() => fetchedWorkflow.value?.checksum),
		isCheckingOAuthCredentials,
		isWorkflowAvailable,
		hasWorkflowNodes: computed(() => (workflowNodes.value?.length ?? 0) > 0),
		workflowProjectId,
		derivedItems,
		derivedCredentialItems,
		isItemDone,
		isCredentialConfigured,
		isRefreshingWorkflow,
		getNodeByName,
		refreshWorkflow
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelState.ts
function completeCredentialContext(item, fallback) {
	if (item.kind !== "credential" || fallback?.kind !== "credential" || item.id !== fallback.id || item.credentialType !== fallback.credentialType) return item;
	return {
		...item,
		nodeBindings: item.nodeBindings?.length ? item.nodeBindings : fallback.nodeBindings,
		setupHint: item.setupHint ?? fallback.setupHint,
		reason: item.reason ?? fallback.reason,
		preferNew: item.preferNew ?? fallback.preferNew,
		appDisplayName: item.appDisplayName ?? fallback.appDisplayName
	};
}
/**
* Row state for the Instance AI setup panel: merges the thread's durable
* `setup-items` events with the derivation from the workflow document into a
* single row list, reconciling which feed is authoritative.
*/
function useSetupPanelState(options) {
	const { thread } = options;
	/**
	* Detects an in-flight agent edit of this workflow. Blocks nothing — it
	* only picks the row source (agent events over deriving from a mid-mutation
	* workflow) and pauses the derivation's refetches until the edit settles.
	*/
	const isAgentBuilding = computed(() => {
		const id = toValue(options.workflowId);
		if (!id) return false;
		return thread.messages.some((message) => message.agentTree && isAgentEditingWorkflow(message.agentTree, id));
	});
	const derivation = useWorkflowSetupItems(options.workflowId, { paused: () => isAgentBuilding.value });
	const eventItems = computed(() => {
		const id = toValue(options.workflowId);
		if (!id || !Object.hasOwn(thread.setupItemsByWorkflowId, id)) return [];
		return thread.setupItemsByWorkflowId[id];
	});
	const isAwaitingFirstBuild = computed(() => {
		const id = toValue(options.workflowId);
		let pending = false;
		let latestCompletedAt;
		function visit(node) {
			for (const call of node.toolCalls) {
				if (!isRecord$1(call.result) || call.result.success !== true || call.result.workflowId !== id) continue;
				const earlySetup = call.toolName === "credentials" && call.args.action === "setup" && call.result.preBuild === true;
				if (!earlySetup && !["build-workflow", "submit-workflow"].includes(call.toolName)) continue;
				if (latestCompletedAt && call.completedAt && call.completedAt < latestCompletedAt) continue;
				pending = earlySetup;
				latestCompletedAt = call.completedAt;
			}
			for (const child of node.children) visit(child);
		}
		for (const message of thread.messages) if (message.agentTree) visit(message.agentTree);
		return pending;
	});
	const credentialContext = shallowReactive(/* @__PURE__ */ new Map());
	watch([() => toValue(options.workflowId), eventItems], ([id, items], [previousId]) => {
		if (id !== previousId) credentialContext.clear();
		for (const item of items) if (item.kind === "credential") credentialContext.set(item.id, completeCredentialContext(item, credentialContext.get(item.id)));
	}, {
		immediate: true,
		flush: "sync"
	});
	watch([eventItems, isAgentBuilding], ([items, building]) => {
		if (building && items.length > 0) derivation.refreshWorkflow({ force: true });
	}, {
		immediate: true,
		flush: "sync"
	});
	/**
	* Reconciliation: while the agent edits the workflow, its events are the
	* row source (the workflow document lags behind the agent's changes); at
	* rest the derivation is ground truth — from the live canvas store when a
	* host has one hydrated, else from the saved workflow the derivation
	* fetches itself. Events still cover that fetch being in flight, e.g.
	* right after a thread refresh.
	*/
	const rowSource = computed(() => !isAgentBuilding.value && derivation.isWorkflowAvailable.value && (!isAwaitingFirstBuild.value || derivation.hasWorkflowNodes.value || eventItems.value.length === 0) ? "derived" : "events");
	const rows = computed(() => {
		if (rowSource.value === "events") {
			const derivedById = new Map(derivation.derivedCredentialItems.value.map((item) => [item.id, item]));
			const announcedIds = new Set(eventItems.value.map((item) => item.id));
			const stillRequired = derivation.derivedCredentialItems.value.filter((item) => credentialContext.has(item.id) && !announcedIds.has(item.id));
			return [...eventItems.value, ...stillRequired].map((event) => {
				const item = completeCredentialContext(completeCredentialContext(event, derivedById.get(event.id)), credentialContext.get(event.id));
				return {
					item,
					isDone: derivation.isItemDone(item)
				};
			});
		}
		const derived = derivation.derivedItems.value;
		const derivedIds = new Set(derived.map((item) => item.id));
		const settledEventItems = eventItems.value.filter((item) => item.kind === "parameters" && !derivedIds.has(item.id) && derivation.isItemDone(item));
		return [...derived, ...settledEventItems].map((derivedItem) => {
			const item = completeCredentialContext(derivedItem, credentialContext.get(derivedItem.id));
			return {
				item,
				isDone: derivation.isItemDone(item)
			};
		});
	});
	return {
		credentialsAvailable: derivation.credentialsAvailable,
		workflowNodes: derivation.workflowNodes,
		savedWorkflowChecksum: derivation.savedWorkflowChecksum,
		isCheckingOAuthCredentials: derivation.isCheckingOAuthCredentials,
		isRefreshingWorkflow: derivation.isRefreshingWorkflow,
		rows,
		rowSource,
		isAgentBuilding,
		isAwaitingFirstBuild,
		getNodeByName: derivation.getNodeByName,
		workflowProjectId: derivation.workflowProjectId,
		refreshWorkflow: derivation.refreshWorkflow,
		isItemDone: derivation.isItemDone,
		isCredentialConfigured: derivation.isCredentialConfigured
	};
}
//#endregion
//#region ../../@n8n/utils/src/promise/deferred-promise.ts
function createDeferredPromise() {
	const deferred = {};
	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelExecution.ts
function useSetupPanelExecution(options) {
	const rootStore = useRootStore();
	const { getTelemetryPayload } = useInstanceAiSetupPanelExperiment();
	const workflowsStore = useWorkflowsStore();
	const { runWorkflowApi } = useRunWorkflowApi();
	const nodeTypesStore = useNodeTypesStore();
	const pushStore = usePushConnectionStore();
	const logsStore = useLogsStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const runningWorkflows = reactive(/* @__PURE__ */ new Set());
	const isRunning = computed(() => runningWorkflows.has(toValue(options.workflowId) ?? ""));
	let disposed = false;
	const cancelWaits = /* @__PURE__ */ new Map();
	if (getCurrentScope()) onScopeDispose(() => {
		disposed = true;
		for (const cancelWait of cancelWaits.values()) cancelWait();
	});
	async function executeWorkflow() {
		const workflowId = toValue(options.workflowId);
		if (!workflowId || runningWorkflows.has(workflowId) || disposed) return;
		if (!pushStore.isConnected) throw new Error(i18n.baseText("workflowRun.noActiveConnectionToTheServer"));
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		if (executionState.isWorkflowRunning) return;
		runningWorkflows.add(workflowId);
		let cleanup = () => {};
		try {
			const workflow = await getWorkflow(rootStore.restApiContext, workflowId);
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
			if (disposed || toValue(options.workflowId) !== workflowId || executionState.isWorkflowRunning) return;
			const triggers = workflow.nodes.filter((node) => !node.disabled && nodeTypesStore.isTriggerNode(node.type));
			const trigger = triggers.find((node) => node.name === executionState.selectedTriggerNodeName) ?? triggers[0];
			if (!trigger) throw new Error(i18n.baseText("nodeView.canvasAddButton.addATriggerNodeBeforeExecuting"));
			logsStore.toggleOpen(true);
			if (isChatNode(trigger)) {
				toast.showMessage({
					title: i18n.baseText("aiAssistant.builder.toast.title"),
					message: i18n.baseText("aiAssistant.builder.toast.description"),
					type: "info"
				});
				return;
			}
			const testContext = {
				...getTelemetryPayload(),
				test_request_id: v4(),
				session_id: rootStore.pushRef,
				source: "instance_ai_setup_panel",
				workflow_id: workflowId,
				thread_id: options.thread.id
			};
			let agentExecutionId;
			for (const message of options.thread.messages) if (message.agentTree) agentExecutionId = getExecutionResultsByWorkflow(message.agentTree).get(workflowId)?.executionId ?? agentExecutionId;
			const completed = createDeferredPromise();
			const finished = /* @__PURE__ */ new Map();
			let executionId;
			let startedId;
			let waitingForWebhook = false;
			let settled = false;
			const finish = (id, status) => {
				if (settled) return;
				settled = true;
				telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_TEST_FINISHED, {
					...testContext,
					execution_id: id,
					status
				});
				completed.resolve(id ? {
					workflowId,
					executionId: id,
					status
				} : void 0);
			};
			const observeId = (id) => {
				executionId = id;
				if (executionState.activeExecutionId === null) executionState.setActiveExecutionId(id);
				options.thread.rememberManualExecution(workflowId, id, agentExecutionId);
				const status = finished.get(id);
				if (status) finish(id, status);
			};
			const readStatus = async () => {
				if (!executionId || settled || disposed) return;
				try {
					const execution = await workflowsStore.fetchExecutionDataById(executionId);
					if (disposed || execution?.workflowId !== workflowId || execution.id !== executionId) return;
					if (execution && isTerminalExecutionStatus(execution.status)) finish(execution.id, execution.status);
				} catch {}
			};
			const removeListener = pushStore.addEventListener((event) => {
				if (event.type === "testWebhookDeleted" && event.data.workflowId === workflowId && !event.data.executionId && waitingForWebhook && !executionId) {
					finish(void 0, "canceled");
					return;
				}
				if (event.type === "testWebhookReceived" && event.data.workflowId === workflowId) {
					startedId = event.data.executionId;
					if (waitingForWebhook && !executionId) observeId(startedId);
				}
				if (event.type === "executionStarted" && event.data.workflowId === workflowId && event.data.source !== "instance_ai") {
					startedId = event.data.executionId;
					if (waitingForWebhook && !executionId) observeId(startedId);
				}
				if (event.type !== "executionFinished" || event.data.workflowId !== workflowId || !isTerminalExecutionStatus(event.data.status)) return;
				finished.set(event.data.executionId, event.data.status);
				if (event.data.executionId === executionId) finish(executionId, event.data.status);
			});
			const stopReconnectWatch = watch(() => pushStore.isConnected, (connected) => {
				if (connected) readStatus();
			});
			cleanup = () => {
				removeListener();
				stopReconnectWatch();
			};
			cancelWaits.set(workflowId, () => {
				cleanup();
				completed.resolve(void 0);
			});
			telemetry.track(TELEMETRY_EVENT.WORKFLOW.USER_REQUESTED_WORKFLOW_TEST, testContext);
			const response = await runWorkflowApi({
				workflowId,
				triggerToStartFrom: { name: trigger.name }
			}, executionState.documentId).catch((error) => {
				telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_TEST_FINISHED, {
					...testContext,
					status: "request_failed"
				});
				throw error;
			});
			if (disposed) {
				if (executionState.activeExecutionId === null) {
					executionState.setActiveExecutionId(void 0);
					executionState.setExecutionWaitingForWebhook(false);
				}
				return;
			}
			waitingForWebhook = response.waitingForWebhook === true;
			executionState.setExecutionWaitingForWebhook(waitingForWebhook);
			if (response.executionId) observeId(response.executionId);
			else if (waitingForWebhook && startedId) observeId(startedId);
			else if (!waitingForWebhook) throw new Error(i18n.baseText("instanceAi.setupPanel.executeError"));
			readStatus();
			const result = await completed.promise;
			cleanup();
			if (!result && executionState.activeExecutionId === null || result && !useExistingWorkflowDocumentStore(executionState.documentId)?.hydrated && executionState.activeExecutionId === result.executionId) executionState.setActiveExecutionId(void 0);
			executionState.setExecutionWaitingForWebhook(false);
			if (disposed) return;
			if (!result) return;
			const notified = await options.thread.sendMessage(i18n.baseText("instanceAi.setupPanel.executedMessage", { interpolate: { executionId: result.executionId } }), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_setup_panel_execute"
				},
				pushRef: rootStore.pushRef
			});
			return {
				...result,
				notified
			};
		} finally {
			cleanup();
			cancelWaits.delete(workflowId);
			runningWorkflows.delete(workflowId);
		}
	}
	return {
		executeWorkflow,
		isRunning
	};
}
//#endregion
//#region src/features/ai/instanceAi/setupPanelGroups.ts
/** Group service fields with their credential and collect unrelated fields in Details. */
function groupSetupPanelRows(rows, options) {
	const groups = rows.filter((row) => row.item.kind === "credential").map((credential) => ({
		id: credential.item.id,
		credential,
		parameters: []
	}));
	const details = {
		id: `${options.workflowId}:details`,
		parameters: []
	};
	for (const row of rows.filter((entry) => entry.item.kind === "parameters")) {
		const service = groups.find((group) => group.credential?.item.nodeBindings?.some((binding) => binding.nodeName === row.item.nodeName));
		if (service) {
			service.parameters.push(row);
			continue;
		}
		const node = options.getNodeByName(row.item.nodeName);
		const categories = (node ? options.getNodeType(node) : null)?.codex?.categories;
		const isRss = node?.type === "n8n-nodes-base.rssFeedRead" || node?.type === `n8n-nodes-base.rssFeedReadTrigger`;
		if (node && (isRss || categories?.length && !categories.includes("Core Nodes"))) groups.push({
			id: row.item.id,
			node,
			parameters: [row]
		});
		else details.parameters.push(row);
	}
	if (details.parameters.length) groups.push(details);
	return groups;
}
//#endregion
//#region src/features/ai/instanceAi/setupPanelParameterChanges.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_set = /* @__PURE__ */ __toESM(require_set(), 1);
var import_unset = /* @__PURE__ */ __toESM(require_unset(), 1);
function isRecord(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** Keep assignment targets stable if an agent reorders the collection. */
function resolvePath(parameters, path) {
	const resolved = [];
	for (const part of path) {
		if (typeof part === "string") {
			resolved.push(part);
			continue;
		}
		const collection = (0, import_get.default)(parameters, resolved);
		if (!Array.isArray(collection)) return void 0;
		const index = collection.findIndex((entry) => isRecord(entry) && entry.id === part.id);
		if (index === -1) return void 0;
		resolved.push(String(index));
	}
	return resolved;
}
function getSetupParameterValue(parameters, path) {
	const resolved = resolvePath(parameters, path);
	return resolved ? (0, import_get.default)(parameters, resolved) : void 0;
}
/** Compare the edited values with their baseline before a write can be queued. */
function getSetupParameterChanges(before, after, path = []) {
	if ((0, import_isEqual.default)(before, after)) return [];
	if (isRecord(before) && isRecord(after)) return [...new Set([...Object.keys(before), ...Object.keys(after)])].flatMap((key) => getSetupParameterChanges(before[key], after[key], [...path, key]));
	if (Array.isArray(before) && Array.isArray(after) && before.length === after.length) {
		if (before.every((entry, index) => {
			const next = after[index];
			return !isRecord(entry) || !isRecord(next) || entry.id === next.id;
		})) return before.flatMap((entry, index) => {
			const part = isRecord(entry) && typeof entry.id === "string" ? { id: entry.id } : String(index);
			return getSetupParameterChanges(entry, after[index], [...path, part]);
		});
	}
	return [{
		path,
		value: (0, import_cloneDeep.default)(after)
	}];
}
function applySetupParameterChanges(parameters, changes) {
	const updated = deepCopy(parameters);
	for (const change of changes) {
		const path = resolvePath(updated, change.path);
		if (!path?.length) continue;
		if (change.value === void 0) (0, import_unset.default)(updated, path);
		else (0, import_set.default)(updated, path, deepCopy(change.value));
	}
	return updated;
}
/** A newer parent edit replaces all older edits below it. */
function mergeSetupParameterChanges(previous, latest) {
	return [...previous.filter((previousChange) => !latest.some((change) => change.path.every((part, index) => (0, import_isEqual.default)(part, previousChange.path[index])))), ...latest];
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelActions.ts
function resolveSetupCredentialItem(item, nodes, nodeTypeProvider) {
	if (!item.nodeBindings?.length && GENERIC_AUTH_CREDENTIAL_TYPES.has(item.credentialType)) return item;
	return {
		...item,
		nodeBindings: nodes.filter((node) => !node.disabled && (!item.nodeBindings?.length || item.nodeBindings.some(({ nodeName }) => nodeName === node.name)) && getNodeCredentialTypes(nodeTypeProvider, node).includes(item.credentialType)).map((node) => ({ nodeName: node.name }))
	};
}
/**
* Re-applies the delta onto freshly fetched nodes. Mutates the given array's
* nodes in place (the caller owns a per-request fetch result).
*/
function applyDeltaToNodes(nodes, delta) {
	const nodesByName = new Map(nodes.map((node) => [node.name, node]));
	let changed = false;
	let sawTarget = false;
	for (const { item, credential } of delta.credentialBinds) for (const binding of item.nodeBindings ?? []) {
		const node = nodesByName.get(binding.nodeName);
		if (!node) continue;
		sawTarget = true;
		const current = node.credentials?.[item.credentialType];
		if (typeof current !== "string" && current?.id === credential.id && current?.__aiGatewayManaged === true === (credential.__aiGatewayManaged === true)) continue;
		node.credentials = {
			...node.credentials,
			[item.credentialType]: { ...credential }
		};
		changed = true;
	}
	for (const { nodeName, changes } of delta.parameterApplies) {
		if (changes.length === 0) continue;
		const node = nodesByName.get(nodeName);
		if (!node) continue;
		sawTarget = true;
		const parameters = applySetupParameterChanges(node.parameters, changes);
		if ((0, import_isEqual.default)(parameters, node.parameters)) continue;
		node.parameters = parameters;
		changed = true;
	}
	if (changed) return "changed";
	return sawTarget ? "noop" : "dropped";
}
/** Save credential choices before applying setup values through a guarded workflow PATCH. */
function useSetupPanelActions(options) {
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const nodeHelpers = useNodeHelpers();
	const instanceAiStore = useInstanceAiStore();
	const credentialsStore = useCredentialsStore();
	const activeApplyCount = ref(0);
	const isApplying = computed(() => activeApplyCount.value > 0);
	const pendingCredentialBinds = shallowReactive(/* @__PURE__ */ new Map());
	const credentialSaves = /* @__PURE__ */ new Map();
	const pendingParameterApplies = shallowReactive(/* @__PURE__ */ new Map());
	const applyingDeltas = shallowReactive(/* @__PURE__ */ new Map());
	const savedCredentialBinds = computed(() => {
		const workflowId = toValue(options.workflowId);
		if (!workflowId) return [];
		return readPendingInstanceAiSetupCredentialSelections(instanceAiStore.getThreadMetadata(options.threadId), workflowId).map(({ itemId, selection }) => {
			const cached = pendingCredentialBinds.get(itemId);
			if (cached?.selectionId === selection.selectionId) return cached;
			const credential = credentialsStore.getUsableCredentialById(selection.credentialId) ?? credentialsStore.getCredentialById(selection.credentialId);
			return {
				item: {
					id: itemId,
					kind: "credential",
					credentialType: selection.credentialType,
					nodeBindings: selection.nodeNames?.map((nodeName) => ({ nodeName }))
				},
				credential: selection.credentialId === "__AI_GATEWAY_MANAGED__" ? {
					id: null,
					name: "",
					__aiGatewayManaged: true
				} : {
					id: selection.credentialId,
					name: credential?.name ?? ""
				},
				selectionId: selection.selectionId
			};
		});
	});
	async function persistMetadata(metadata) {
		await updateThreadMetadata(rootStore.restApiContext, options.threadId, metadata);
		instanceAiStore.setThreadMetadata(options.threadId, {
			...instanceAiStore.getThreadMetadata(options.threadId),
			...metadata
		});
	}
	async function markCredentialsApplied(delta) {
		if (delta.credentialBinds.length === 0) return;
		await persistMetadata(Object.fromEntries(delta.credentialBinds.map(({ item, selectionId }) => [instanceAiSetupCredentialAppliedKey(item.id, selectionId), true])));
		for (const { item, selectionId } of delta.credentialBinds) if (pendingCredentialBinds.get(item.id)?.selectionId === selectionId) pendingCredentialBinds.delete(item.id);
	}
	/** Parameter drafts belong to the workflow that queued them. */
	let queuedWorkflowId;
	function resolveCredentialBinds(binds, nodes) {
		return binds.map((bind) => ({
			...bind,
			item: resolveSetupCredentialItem(bind.item, nodes, nodeTypesStore)
		})).filter(({ item }) => item.nodeBindings?.length);
	}
	/** Choices for absent services stay saved without blocking the current workflow. */
	const pendingApplyCount = computed(() => {
		const nodes = toValue(options.workflowNodes);
		const binds = savedCredentialBinds.value;
		return (nodes ? resolveCredentialBinds(binds, nodes).length : binds.length) + pendingParameterApplies.size;
	});
	function getPendingCredential(itemId, nodeName) {
		const workflowId = toValue(options.workflowId);
		const scopedId = nodeName ? `${itemId}:${nodeName}` : itemId;
		const queued = savedCredentialBinds.value.find(({ item }) => item.id === scopedId) ?? savedCredentialBinds.value.find(({ item }) => item.id === itemId);
		if (queued) return queued.credential;
		for (const [delta, targetId] of [...applyingDeltas].reverse()) {
			if (targetId !== workflowId) continue;
			const bind = delta.credentialBinds.find(({ item }) => item.id === scopedId) ?? delta.credentialBinds.find(({ item }) => item.id === itemId);
			if (bind) return bind.credential;
		}
	}
	function getPendingParameterChanges(nodeName) {
		const workflowId = toValue(options.workflowId);
		const queued = pendingParameterApplies.get(nodeName) ?? [];
		let changes = [];
		for (const [delta, targetId] of applyingDeltas) {
			if (targetId !== workflowId) continue;
			for (const apply of delta.parameterApplies) if (apply.nodeName === nodeName) changes = mergeSetupParameterChanges(changes, apply.changes);
		}
		return mergeSetupParameterChanges(changes, queuedWorkflowId === workflowId ? queued : []);
	}
	/** Puts a delta back into the queues, keeping any newer entries queued meanwhile. */
	function requeueDelta(workflowId, delta) {
		if (toValue(options.workflowId) !== workflowId) return;
		queuedWorkflowId = workflowId;
		for (const bind of delta.credentialBinds) if (!pendingCredentialBinds.has(bind.item.id)) pendingCredentialBinds.set(bind.item.id, bind);
		for (const { nodeName, changes } of delta.parameterApplies) {
			const existing = pendingParameterApplies.get(nodeName) ?? [];
			pendingParameterApplies.set(nodeName, mergeSetupParameterChanges(changes, existing));
		}
	}
	/**
	* Mirrors an applied delta into a live canvas document, if a host has one
	* hydrated: the derivation reads the document's nodes while it exists, and
	* the document's next save would otherwise clobber the bind (its nodes) or
	* version-conflict (its stale versionId/checksum).
	*
	* The delta merges into the document's own nodes (not the server copy) so
	* unsaved local edits survive. That includes the field the delta itself
	* wrote: a document value that already diverged from the pre-PATCH server
	* value is a newer local edit — it stays, and wins on the document's next
	* save. Mirror writes carry already-saved state, so they do not mark the
	* editor dirty, and the touched nodes' issues are recomputed so stale
	* warnings clear right away.
	*/
	function syncHydratedDocument(workflowId, delta, baseline, updated) {
		const documentStore = useExistingWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		if (!documentStore?.hydrated) return;
		const updatedNodeNames = new Set(updated.nodes.map((node) => node.name));
		const touchedNodeNames = /* @__PURE__ */ new Set();
		for (const { item, credential } of delta.credentialBinds) for (const binding of item.nodeBindings ?? []) {
			if (!updatedNodeNames.has(binding.nodeName)) continue;
			const docNode = documentStore.getNodeByName(binding.nodeName);
			if (!docNode) continue;
			const base = baseline.get(binding.nodeName);
			const current = docNode.credentials?.[item.credentialType];
			if (!(0, import_isEqual.default)(current, base?.credentials?.[item.credentialType])) continue;
			documentStore.updateNodeProperties({
				name: binding.nodeName,
				properties: { credentials: {
					...docNode.credentials,
					[item.credentialType]: { ...credential }
				} }
			}, { markDirty: false });
			touchedNodeNames.add(binding.nodeName);
		}
		for (const { nodeName, changes } of delta.parameterApplies) {
			if (!updatedNodeNames.has(nodeName)) continue;
			const docNode = documentStore.getNodeByName(nodeName);
			if (!docNode) continue;
			const base = baseline.get(nodeName);
			const mirrorChanges = changes.filter((change) => (0, import_isEqual.default)(getSetupParameterValue(docNode.parameters, change.path), getSetupParameterValue(base?.parameters ?? {}, change.path)));
			if (mirrorChanges.length === 0) continue;
			documentStore.updateNodeProperties({
				name: nodeName,
				properties: { parameters: applySetupParameterChanges(docNode.parameters, mirrorChanges) }
			}, { markDirty: false });
			touchedNodeNames.add(nodeName);
		}
		for (const nodeName of touchedNodeNames) {
			const node = documentStore.getNodeByName(nodeName);
			if (!node) continue;
			documentStore.setNodeIssue({
				node: nodeName,
				type: "credentials",
				value: nodeHelpers.getNodeCredentialIssues(node)?.credentials ?? null
			});
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			if (!nodeType) continue;
			documentStore.setNodeIssue({
				node: nodeName,
				type: "parameters",
				value: getNodeParametersIssues$1(nodeType.properties, node, nodeType)?.parameters ?? null
			});
			const workflowObject = documentStore.getWorkflowObjectAccessorSnapshot();
			documentStore.setNodeIssue({
				node: nodeName,
				type: "input",
				value: nodeHelpers.getNodeInputIssues(workflowObject, node, nodeType)?.input ?? null
			});
		}
		documentStore.setVersionData({
			versionId: updated.versionId,
			name: documentStore.versionData?.name ?? null,
			description: documentStore.versionData?.description ?? null
		});
		if (updated.checksum) documentStore.setChecksum(updated.checksum);
	}
	/**
	* The guarded write: fetch the saved workflow, re-apply the delta onto its
	* nodes, PATCH with the fetched versionId + checksum. A version conflict
	* (another writer landed in between) refetches, re-applies and retries
	* once; a second conflict gives up.
	*/
	async function patchWorkflowNodes(workflowId, delta) {
		activeApplyCount.value++;
		applyingDeltas.set(delta, workflowId);
		try {
			if (delta.credentialBinds.length > 0) {
				const before = instanceAiStore.getThreadMetadata(options.threadId);
				const { thread } = await fetchThread(rootStore.restApiContext, options.threadId);
				const current = instanceAiStore.getThreadMetadata(options.threadId);
				instanceAiStore.setThreadMetadata(options.threadId, {
					...current,
					...Object.fromEntries(Object.entries(thread.metadata ?? {}).filter(([key]) => (0, import_isEqual.default)(before?.[key], current?.[key])))
				});
				const pendingIds = new Set(readPendingInstanceAiSetupCredentialSelections(instanceAiStore.getThreadMetadata(options.threadId), workflowId).map(({ selection }) => selection.selectionId));
				delta.credentialBinds = delta.credentialBinds.filter(({ selectionId }) => pendingIds.has(selectionId));
				if (delta.credentialBinds.length === 0 && delta.parameterApplies.length === 0) return "noop";
			}
			for (let attempt = 0; attempt < 2; attempt++) {
				let fresh;
				try {
					fresh = await getWorkflow(rootStore.restApiContext, workflowId);
				} catch {
					return "error";
				}
				if (!fresh.checksum) return "error";
				const nodes = fresh.nodes;
				if (nodes.length === 0 && delta.credentialBinds.length > 0) return "queued";
				if (delta.credentialBinds.length > 0) try {
					await nodeTypesStore.loadNodeTypesIfNotLoaded();
				} catch {
					return "error";
				}
				const resolvedDelta = {
					...delta,
					credentialBinds: resolveCredentialBinds(delta.credentialBinds, nodes)
				};
				const baseline = new Map(nodes.map((node) => [node.name, {
					credentials: { ...node.credentials },
					parameters: { ...node.parameters }
				}]));
				const outcome = applyDeltaToNodes(nodes, resolvedDelta);
				if (toValue(options.workflowId) !== workflowId) return "dropped";
				if (toValue(options.isAgentBuilding)) {
					requeueDelta(workflowId, delta);
					return "queued";
				}
				if (outcome !== "changed") {
					if (outcome === "noop") options.onSaved?.(fresh);
					await markCredentialsApplied(resolvedDelta);
					return outcome;
				}
				try {
					const updated = await workflowsStore.updateWorkflow(workflowId, {
						nodes,
						versionId: fresh.versionId,
						expectedChecksum: fresh.checksum
					});
					syncHydratedDocument(workflowId, resolvedDelta, baseline, updated);
					options.onSaved?.(updated);
					await markCredentialsApplied(resolvedDelta);
					return "applied";
				} catch (error) {
					if (!(error instanceof ResponseError && error.httpStatusCode === 409)) return "error";
				}
			}
			return "conflict";
		} catch {
			return "error";
		} finally {
			applyingDeltas.delete(delta);
			activeApplyCount.value--;
		}
	}
	/**
	* Binds a credential to every node the item covers. While the agent builds,
	* the bind queues instead (latest wins per item) — this is also the
	* mid-build create path: creating a credential registers its bind here and
	* the flush lands it once the lock releases.
	*/
	async function bindCredential(item, credential) {
		const workflowId = toValue(options.workflowId);
		if (!workflowId || !item.id.startsWith(`${workflowId}:credential:`)) return "error";
		const selection = {
			selectionId: crypto.randomUUID(),
			credentialType: item.credentialType,
			credentialId: credential.__aiGatewayManaged ? AI_GATEWAY_MANAGED_TAG : credential.id ?? "",
			nodeNames: item.nodeBindings?.length ? item.nodeBindings.map(({ nodeName }) => nodeName) : void 0
		};
		if (!selection.credentialId) return "error";
		const save = (credentialSaves.get(item.id) ?? Promise.resolve()).catch(() => {}).then(async () => await persistMetadata({ [instanceAiSetupCredentialSelectionKey(item.id)]: selection }));
		credentialSaves.set(item.id, save);
		try {
			await save;
		} catch {
			return "error";
		} finally {
			if (credentialSaves.get(item.id) === save) credentialSaves.delete(item.id);
		}
		const bind = {
			item,
			credential,
			selectionId: selection.selectionId
		};
		pendingCredentialBinds.set(item.id, bind);
		if (toValue(options.workflowId) !== workflowId) return "queued";
		if (toValue(options.isAgentBuilding)) return "queued";
		return await patchWorkflowNodes(workflowId, {
			credentialBinds: [bind],
			parameterApplies: []
		});
	}
	/** Use a baseline to preserve unedited fields inside each submitted root. */
	async function applyParameterValues(nodeName, values, baseline = {}) {
		return await applyParameterBatch([{
			nodeName,
			values,
			baseline
		}]);
	}
	/** Confirm all visible node fields in one guarded workflow update. */
	async function applyParameterBatch(submissions) {
		const parameterApplies = submissions.map(({ nodeName, values, baseline }) => ({
			nodeName,
			changes: getSetupParameterChanges(baseline, {
				...baseline,
				...values
			})
		}));
		if (toValue(options.isAgentBuilding)) {
			queuedWorkflowId = toValue(options.workflowId);
			for (const { nodeName, changes } of parameterApplies) {
				const existing = pendingParameterApplies.get(nodeName) ?? [];
				pendingParameterApplies.set(nodeName, mergeSetupParameterChanges(existing, changes));
			}
			return "queued";
		}
		const workflowId = toValue(options.workflowId);
		if (!workflowId) return "error";
		return await patchWorkflowNodes(workflowId, {
			credentialBinds: [],
			parameterApplies
		});
	}
	/** Apply queued values after the agent finishes. Failed credential choices stay saved. */
	async function flushPendingApplies() {
		if (toValue(options.isAgentBuilding)) return void 0;
		if (savedCredentialBinds.value.length === 0 && pendingParameterApplies.size === 0) return void 0;
		const workflowId = toValue(options.workflowId);
		if (!workflowId || [...applyingDeltas.values()].includes(workflowId)) return void 0;
		if (workflowId !== queuedWorkflowId) pendingParameterApplies.clear();
		const delta = {
			credentialBinds: savedCredentialBinds.value,
			parameterApplies: [...pendingParameterApplies.entries()].map(([nodeName, changes]) => ({
				nodeName,
				changes
			}))
		};
		pendingParameterApplies.clear();
		return await patchWorkflowNodes(workflowId, delta);
	}
	watch([
		() => toValue(options.workflowId),
		() => toValue(options.isAgentBuilding),
		() => toValue(options.savedWorkflowChecksum)
	], ([workflowId, building]) => {
		if (!building && workflowId) flushPendingApplies().then((result) => {
			if (result) options.onFlushResult?.(result, workflowId);
		});
	}, { immediate: true });
	watch(() => toValue(options.workflowId), () => {
		pendingCredentialBinds.clear();
		pendingParameterApplies.clear();
	});
	return {
		bindCredential,
		applyParameterValues,
		applyParameterBatch,
		flushPendingApplies,
		pendingApplyCount,
		getPendingCredential,
		getPendingParameterChanges,
		isApplying
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelTelemetry.ts
function createTelemetryState() {
	return {
		owners: shallowReactive(/* @__PURE__ */ new Set()),
		shownRows: /* @__PURE__ */ new Set(),
		snapshots: /* @__PURE__ */ new Map(),
		connectionAttempts: /* @__PURE__ */ new Map(),
		visibleWorkflowId: ref()
	};
}
var states = /* @__PURE__ */ new WeakMap();
function useSetupPanelTelemetry(options) {
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const nodeTypesStore = useNodeTypesStore();
	const { getTelemetryPayload } = useInstanceAiSetupPanelExperiment();
	const state = states.get(options.thread) ?? createTelemetryState();
	states.set(options.thread, state);
	const owner = Symbol();
	state.owners.add(owner);
	const isOwner = () => [...state.owners].at(-1) === owner;
	const { shownRows, snapshots, connectionAttempts } = state;
	const context = () => ({
		...getTelemetryPayload(),
		session_id: rootStore.pushRef,
		workflow_id: toValue(options.workflowId),
		thread_id: options.thread.id
	});
	function getItems(setupItems, readNode = options.getNodeByName) {
		return setupItems.flatMap((item) => {
			if (item.kind === "credential") return (item.nodeBindings ?? []).flatMap((binding) => {
				const node = readNode(binding.nodeName);
				return node ? [{
					node_id: node.id,
					node_type: node.type,
					kind: "credential",
					credential_type: item.credentialType,
					completed: options.isItemDone({
						...item,
						nodeBindings: [binding]
					}, readNode)
				}] : [];
			});
			const node = readNode(item.nodeName);
			return node ? item.parameterNames.map((name) => ({
				node_id: node.id,
				node_type: node.type,
				kind: "parameter",
				parameter_name: name,
				completed: options.isItemDone({
					...item,
					parameterNames: [name]
				}, readNode)
			})) : [];
		});
	}
	function trackSaved(workflow) {
		if (!state.owners.has(owner) || workflow.id !== toValue(options.workflowId)) return;
		const nodes = new Map(workflow.nodes.map((node) => [node.name, node]));
		const announced = Object.hasOwn(options.thread.setupItemsByWorkflowId, workflow.id) ? options.thread.setupItemsByWorkflowId[workflow.id] : [];
		const savedRequirements = [...new Map([...announced.map((item) => [item.id, item]), ...toValue(options.rows).map(({ item }) => [item.id, item])]).values()].map((item) => item.kind === "credential" ? resolveSetupCredentialItem(item, workflow.nodes, nodeTypesStore) : item);
		const readNode = (name) => nodes.get(name);
		const items = getItems(savedRequirements, readNode);
		if (items.length === 0) return;
		telemetry.track(TELEMETRY_EVENT.WORKFLOW.SETUP_SAVED, {
			...context(),
			instance_id: rootStore.instanceId,
			source: "instance_ai_setup_panel",
			items,
			setup_complete: !toValue(options.isAgentBuilding) && items.every((item) => item.completed)
		});
	}
	function getChatTelemetryContext() {
		const groups = toValue(options.groups);
		if (!isOwner() || !toValue(options.ready) || groups.length === 0) return void 0;
		return {
			...context(),
			pending_credential_count: groups.filter((group) => group.credential && !group.credential.isDone).length,
			pending_parameter_count: groups.reduce((count, group) => count + group.parameters.reduce((total, row) => total + (row.isDone ? 0 : row.item.parameterNames.length), 0), 0)
		};
	}
	function trackDismissed(reason) {
		if (!state.visibleWorkflowId.value) return;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_DISMISSED, {
			...context(),
			workflow_id: state.visibleWorkflowId.value,
			reason
		});
		state.visibleWorkflowId.value = void 0;
	}
	watch(() => [
		toValue(options.workflowId),
		toValue(options.rows),
		toValue(options.groups),
		toValue(options.ready),
		[...toValue(options.shownItemIds)],
		isOwner()
	], ([workflowId, rows, groups, ready, shownItemIds, ownsTracking]) => {
		if (!ownsTracking) return;
		if (state.visibleWorkflowId.value && state.visibleWorkflowId.value !== workflowId) trackDismissed("navigation");
		if (!ready) return;
		const key = JSON.stringify(rows.map((row) => ({
			id: row.item.id,
			done: row.isDone,
			shown: shownItemIds.includes(row.item.id),
			parameters: row.item.kind === "parameters" ? [...row.item.parameterNames].sort() : void 0
		})).sort((a, b) => a.id.localeCompare(b.id)));
		if (snapshots.get(workflowId) !== key) {
			snapshots.set(workflowId, key);
			const credentials = rows.filter((row) => row.item.kind === "credential");
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_STATE_OBSERVED, {
				...context(),
				credential_count: credentials.length,
				pending_credential_count: credentials.filter((row) => !row.isDone).length,
				pending_parameter_count: rows.reduce((count, row) => count + (row.item.kind === "parameters" && !row.isDone ? row.item.parameterNames.length : 0), 0),
				already_connected_count: credentials.filter((row) => row.isDone && !shownItemIds.includes(row.item.id)).length
			});
		}
		if (groups.length) state.visibleWorkflowId.value = workflowId;
		else trackDismissed("items_removed");
		for (const group of groups) {
			const rowKey = `${workflowId}:${group.id}`;
			if (shownRows.has(rowKey)) continue;
			shownRows.add(rowKey);
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.SETUP_PANEL_ITEM_SHOWN, {
				...context(),
				kind: group.credential ? "credential" : group.node ? "parameters" : "details",
				credential_type: group.credential?.item.credentialType,
				parameter_count: group.parameters.reduce((count, row) => count + row.item.parameterNames.length, 0),
				items: getItems([...group.credential ? [group.credential.item] : [], ...group.parameters.map(({ item }) => item)]).map(({ completed, ...item }) => item)
			});
		}
	}, { immediate: true });
	function trackConnectionStarted(item, method) {
		if (!isOwner()) return;
		connectionAttempts.set(item.id, {
			method,
			workflowId: toValue(options.workflowId)
		});
		telemetry.track(TELEMETRY_EVENT.CREDENTIALS.USER_STARTED_CREDENTIAL_CONNECTION, {
			...context(),
			source: "instance_ai_setup_panel",
			credential_type: item.credentialType,
			method
		});
	}
	function trackConnectionCompleted(item, credentialId, result) {
		const attempt = connectionAttempts.get(item.id);
		if (!attempt || result !== "applied" && result !== "noop" && result !== "queued") return;
		connectionAttempts.delete(item.id);
		telemetry.track(TELEMETRY_EVENT.CREDENTIALS.USER_COMPLETED_CREDENTIAL_CONNECTION, {
			...context(),
			workflow_id: attempt.workflowId,
			source: "instance_ai_setup_panel",
			credential_type: item.credentialType,
			credential_id: credentialId,
			method: attempt.method,
			binding_state: result
		});
	}
	onScopeDispose(() => {
		state.owners.delete(owner);
		if (state.owners.size === 0) {
			trackDismissed("navigation");
			states.delete(options.thread);
		}
	});
	return {
		trackConnectionStarted,
		trackConnectionCompleted,
		trackDismissed,
		trackSaved,
		getChatTelemetryContext
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupPanelDocument.ts
/** Give existing credential and parameter controls a disposable local document. */
function useSetupPanelDocument(options) {
	const documentId = computed(() => createWorkflowDocumentId(toValue(options.workflowId) ?? "instance-ai-setup-panel", toValue(options.itemId)));
	const document = computed(() => useWorkflowDocumentStore(documentId.value));
	watch([documentId, () => toValue(options.node)], ([_id, node]) => document.value.setNodes(node ? [deepCopy(node)] : []), {
		immediate: true,
		deep: true
	});
	function dispose(id) {
		disposeNDVStore(useNDVStore(id));
		disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(id));
		disposeWorkflowDocumentStore(useWorkflowDocumentStore(id));
	}
	watch(documentId, (_id, previous) => dispose(previous));
	onScopeDispose(() => dispose(documentId.value));
	provide(ExpressionLocalResolveContextSymbol, computed(() => {
		const node = toValue(options.node);
		return node ? {
			localResolve: true,
			nodeName: node.name,
			additionalKeys: {}
		} : void 0;
	}));
	provide(WorkflowDocumentStoreKey, document);
}
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupPanelDetail.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSetupPanelDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupPanelDetail",
	props: {
		item: {},
		node: {},
		workflowId: {},
		projectId: {},
		pendingChanges: {}
	},
	emits: ["update:hasChanges"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		provide(CompactParameterHintsKey, true);
		const parametersItem = computed(() => props.item);
		const parameterChanges = ref([...props.pendingChanges ?? []]);
		const touchedParameters = ref(/* @__PURE__ */ new Set());
		onScopeDispose(() => emit("update:hasChanges", false));
		const displayParameters = computed(() => applySetupParameterChanges(props.node.parameters, mergeSetupParameterChanges(props.pendingChanges ?? [], parameterChanges.value)));
		const hasChanges = computed(() => !(0, import_isEqual.default)(applySetupParameterChanges(props.node.parameters, props.pendingChanges ?? []), displayParameters.value));
		watch(hasChanges, (value) => emit("update:hasChanges", value));
		const parameterRoots = computed(() => new Set([...(parametersItem.value?.parameterNames ?? []).map((name) => name.split(/[.[\]]/)[0] ?? name), ...parameterChanges.value.map((change) => change.path[0])]));
		watch(() => props.node.parameters, (saved) => {
			parameterChanges.value = parameterChanges.value.filter((change) => !(0, import_isEqual.default)(getSetupParameterValue(saved, change.path), change.value));
		}, { deep: true });
		function onParameterValueChanged(update) {
			if (!parametersItem.value) return;
			const parameterName = update.name.replace(/^parameters\./, "");
			if (!parameterRoots.value.has(parameterName.split(/[.[\]]/)[0])) return;
			const next = deepCopy(displayParameters.value);
			setParameterValue(next, parameterName, update.value);
			parameterChanges.value = mergeSetupParameterChanges(parameterChanges.value, getSetupParameterChanges(displayParameters.value, next));
		}
		function getSubmission() {
			for (const parameter of parameterDefinitions.value) touchedParameters.value.add(parameter.name);
			const item = parametersItem.value;
			if (!item || !hasChanges.value) return;
			const values = {};
			for (const change of parameterChanges.value) {
				const root = change.path[0];
				if (typeof root === "string") values[root] = displayParameters.value[root];
			}
			return {
				nodeName: item.nodeName,
				values,
				baseline: applySetupParameterChanges(props.node.parameters, props.pendingChanges ?? [])
			};
		}
		__expose({ getSubmission });
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.node.type, props.node.typeVersion));
		const parameterDefinitions = computed(() => {
			if (!parametersItem.value || !nodeType.value) return [];
			return nodeType.value.properties.filter((property) => parameterRoots.value.has(property.name));
		});
		const hiddenIssuesInputs = computed(() => parameterDefinitions.value.filter((parameter) => !touchedParameters.value.has(parameter.name)).map((parameter) => parameter.name));
		const assignmentCollectionEditableValueIndices = computed(() => {
			const result = {};
			for (const parameter of nodeType.value?.properties ?? []) {
				if (parameter.type !== "assignmentCollection") continue;
				const indices = /* @__PURE__ */ new Set();
				for (const detail of findPlaceholderDetails(props.node.parameters[parameter.name])) {
					if (detail.path[0] !== "assignments" || detail.path[2] !== "value") continue;
					const match = /^\[(\d+)\]$/.exec(detail.path[1] ?? "");
					if (match?.[1]) indices.add(Number.parseInt(match[1], 10));
				}
				const value = displayParameters.value[parameter.name];
				if (value && typeof value === "object" && "assignments" in value && Array.isArray(value.assignments)) for (const change of parameterChanges.value) {
					if (change.path[0] !== parameter.name || change.path[1] !== "assignments") continue;
					const target = change.path[2];
					const index = typeof target === "object" ? value.assignments.findIndex((assignment) => assignment !== null && typeof assignment === "object" && "id" in assignment && assignment.id === target.id) : Number(target);
					if (Number.isInteger(index) && index >= 0) indices.add(index);
				}
				result[parameter.name] = [...indices];
			}
			return result;
		});
		const displayNode = computed(() => ({
			...props.node,
			parameters: nodeType.value ? getNodeParameters(nodeType.value.properties, displayParameters.value, true, true, props.node, nodeType.value) ?? displayParameters.value : displayParameters.value
		}));
		useSetupPanelDocument({
			workflowId: () => props.workflowId,
			itemId: () => props.item.id,
			node: displayNode
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.body),
				"data-test-id": "instance-ai-setup-panel-detail"
			}, [parametersItem.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parameterDefinitions.value,
				"node-values": { parameters: displayNode.value.parameters },
				node: displayNode.value,
				path: "parameters",
				"hide-delete": true,
				"remove-first-parameter-margin": true,
				"remove-last-parameter-margin": true,
				"options-overrides": {
					hideExpressionSelector: true,
					hideFocusPanelButton: true
				},
				"hidden-issues-inputs": hiddenIssuesInputs.value,
				"assignment-collection-editable-value-indices": assignmentCollectionEditableValueIndices.value,
				onValueChanged: onParameterValueChanged,
				onParameterBlur: _cache[0] || (_cache[0] = ($event) => touchedParameters.value.add($event))
			}, null, 8, [
				"parameters",
				"node-values",
				"node",
				"hidden-issues-inputs",
				"assignment-collection-editable-value-indices"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiSetupPanelDetail_vue_vue_type_style_index_0_lang_module_default = { body: "_body_1790x_1" };
var InstanceAiSetupPanelDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupPanelDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupPanelDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/credentialSetupFields.ts
var OAUTH_ADVANCED_FIELDS = [
	"sendAdditionalBodyProperties",
	"additionalBodyProperties",
	"authQueryParameters",
	"tokenExpiredStatusCode",
	"jweEnabled",
	"inlineJwks"
];
var CERTIFICATE_OVERRIDE_TYPES = new Set([
	"dfirIrisApi",
	"elasticsearchApi",
	"erpNextApi",
	"gotifyApi",
	"imap",
	"kafka",
	"ldap",
	"mattermostApi",
	"microsoftSql",
	"mispApi",
	"oAuth2Api",
	"postgres",
	"redis",
	"s3",
	"splunkApi",
	"theHiveApi",
	"theHiveProjectApi",
	"timescaleDb",
	"wordpressApi",
	"zammadBasicAuthApi",
	"zammadTokenAuthApi"
]);
var CERTIFICATE_OVERRIDE_FIELDS = new Set([
	"allowUnauthorizedCerts",
	"ignoreSSLIssues",
	"skipSslCertificateValidation",
	"disableTlsVerification"
]);
var ADVANCED_FIELDS_BY_TYPE = {
	anthropicApi: ["url", "header"],
	aws: ["customEndpoints"],
	awsAssumeRole: ["customEndpoints", "roleSessionName"],
	azureEntraCognitiveServicesOAuth2Api: ["apiVersion", "endpoint"],
	azureOpenAiApi: ["apiVersion", "endpoint"],
	boxOAuth2Api: ["signingKeySecondary"],
	chromaCloudApi: [
		"tenant",
		"database",
		"baseUrl"
	],
	githubApi: ["server"],
	githubAppApi: ["server"],
	githubOAuth2Api: ["server"],
	googlePalmApi: ["host"],
	ldap: ["timeout"],
	mcpOAuth2Api: ["resourceUrl"],
	microsoftSql: [
		"connectTimeout",
		"requestTimeout",
		"tdsVersion"
	],
	mqtt: ["clean", "clientId"],
	mySql: ["connectTimeout"],
	openAiApi: [
		"url",
		"organizationId",
		"header"
	],
	oracleDBApi: [
		"privilege",
		"sslServerDNMatch",
		"sslAllowWeakDNMatch",
		"poolMin",
		"poolMax",
		"poolIncrement",
		"maxLifetimeSession",
		"poolTimeout",
		"connectionClass",
		"connectTimeout",
		"transportConnectTimeout",
		"expireTime"
	],
	postgres: ["maxConnections"],
	qualysApi: ["requestedWith"],
	smtp: ["disableStartTls", "hostName"],
	snowflake: ["clientSessionKeepAlive"],
	snowflakeOAuth2Api: ["clientSessionKeepAlive"],
	telegramApi: ["baseUrl"],
	totpApi: ["label"],
	vercelAiGatewayApi: ["url"],
	wooCommerceApi: ["includeCredentialsInQuery"]
};
function groupCredentialSetupFields(credentialType, parentTypes, fields) {
	const types = [credentialType, ...parentTypes];
	const advancedNames = new Set([...DOMAIN_RESTRICTION_FIELDS.map(({ name }) => name), ...types.flatMap((type) => ADVANCED_FIELDS_BY_TYPE[type] ?? [])]);
	if (types.includes("oAuth2Api")) {
		for (const name of OAUTH_ADVANCED_FIELDS) advancedNames.add(name);
		if (!types.includes("snowflakeOAuth2Api")) advancedNames.add("customScopes");
	}
	if (types.some((type) => CERTIFICATE_OVERRIDE_TYPES.has(type))) {
		for (const field of fields) if (CERTIFICATE_OVERRIDE_FIELDS.has(field.name) && field.type === "boolean" && field.default === false) advancedNames.add(field.name);
	}
	const inline = [];
	const advanced = [];
	for (const field of fields) {
		const followsAdvancedControl = Object.entries(field.displayOptions?.show ?? {}).some(([name, values]) => advancedNames.has(name) && values?.includes(true));
		(advancedNames.has(field.name) || followsAdvancedControl ? advanced : inline).push(field);
	}
	return {
		inline,
		advanced
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupCredential.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["tabindex"];
var InstanceAiSetupCredential_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupCredential",
	props: {
		item: {},
		node: {},
		pendingCredential: {},
		nodes: {},
		workflowId: {},
		projectId: {},
		helpDisabled: { type: Boolean },
		allowPerNode: { type: Boolean }
	},
	emits: [
		"bindCredential",
		"connectStarted",
		"askForHelp",
		"setCredentialsPerNode",
		"update:busy",
		"update:hasChanges"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const toast = useToast();
		const telemetry = useTelemetry();
		const externalHooks = useExternalHooks();
		const credentialsStore = useCredentialsStore();
		const { check: envFeatureFlag } = useEnvFeatureFlag();
		const oauth = useCredentialOAuth();
		const quickConnect = useQuickConnect();
		const gateway = useAiGateway();
		const { openTopUp } = useAiGatewayTopUp();
		const initialized = ref(false);
		const initializationFailed = ref(false);
		const busy = ref(false);
		const reopenAuthorization = ref();
		const createNew = ref(Boolean(props.item.preferNew && !props.pendingCredential && !props.node?.credentials?.[props.item.credentialType]));
		const hasDraft = ref(false);
		watch(busy, (value) => emit("update:busy", value));
		watch(() => hasDraft.value || createNew.value, (value) => emit("update:hasChanges", value));
		const chooseExisting = ref(false);
		const oauthConnection = ref();
		const oauthMode = ref("unknown");
		const loadingOAuth = ref(false);
		const mode = ref("credits");
		const modeChanged = ref(false);
		let active = true;
		useSetupPanelDocument({
			workflowId: () => props.workflowId,
			itemId: () => props.item.id,
			node: () => props.node
		});
		const form = useCredentialForm({
			mode: "new",
			activeId: () => props.item.credentialType,
			contextNode: () => props.node ?? null,
			projectId: () => props.projectId,
			setupHint: () => props.item.setupHint
		});
		form.setCredentialPropertyDefaults();
		const isOAuth = form.isOAuthType;
		const isTemplated = computed(() => props.item.credentialType === TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE);
		const canQuickConnect = computed(() => isOAuth.value && oauth.canOAuthCredentialQuickConnect(props.item.credentialType) || Boolean(!oauth.isOAuthCredentialType(props.item.credentialType) && props.node && quickConnect.getQuickConnectOption(props.item.credentialType, props.node.type)));
		const serviceName = computed(() => deriveServiceName(props.item.setupHint) ?? getAppNameFromNodeName(getAppNameFromCredType(props.item.appDisplayName ?? form.credentialType.value?.displayName ?? props.item.credentialType)));
		const binding = computed(() => {
			if (props.pendingCredential) return props.pendingCredential;
			const value = props.node?.credentials?.[props.item.credentialType];
			return value && typeof value !== "string" ? value : void 0;
		});
		const connected = computed(() => !createNew.value && !hasDraft.value && Boolean(binding.value?.id || binding.value?.__aiGatewayManaged) && !loadingOAuth.value && !needsAuthorization.value);
		const usableCredentials = computed(() => credentialsStore.hasUsableCredentialsForScope({ workflowId: props.workflowId }) ? credentialsStore.getUsableCredentialByType(props.item.credentialType) : []);
		const storedCredential = computed(() => binding.value?.id ? usableCredentials.value.find(({ id }) => id === binding.value?.id) ?? credentialsStore.getCredentialById(binding.value.id) : void 0);
		const usesCustomOAuth = computed(() => oauthMode.value === "custom");
		const selectedOAuthId = computed(() => !createNew.value && !hasDraft.value && isOAuth.value ? binding.value?.id : void 0);
		watch([
			selectedOAuthId,
			() => storedCredential.value?.updatedAt,
			() => storedCredential.value?.connectedByMe,
			() => storedCredential.value?.scopes?.join(",")
		], async ([id], _previous, onCleanup) => {
			let stale = false;
			onCleanup(() => {
				stale = true;
			});
			const permissions = getResourcePermissions(storedCredential.value?.scopes).credential;
			oauthConnection.value = storedCredential.value?.isResolvable ? storedCredential.value.connectedByMe : permissions.read === true && !permissions.update;
			oauthMode.value = "unknown";
			loadingOAuth.value = Boolean(id);
			if (!id) return;
			try {
				const credential = await credentialsStore.getCredentialData({ id });
				if (stale) return;
				const data = credential?.data;
				if (credential?.isResolvable) oauthConnection.value = credential.connectedByMe;
				if (data && typeof data === "object") {
					if (!credential?.isResolvable) oauthConnection.value = Boolean(data.grantType && !["authorizationCode", "pkce"].includes(String(data.grantType))) || hasOAuthTokenData(credential);
					oauthMode.value = Boolean(data.clientId && data.clientSecret || data.consumerKey && data.consumerSecret) || !form.managedOAuthAvailable.value ? "custom" : "managed";
				}
			} catch {} finally {
				if (!stale) loadingOAuth.value = false;
			}
		}, { immediate: true });
		const needsAuthorization = computed(() => Boolean(selectedOAuthId.value) && oauthConnection.value === false);
		const showExistingPicker = computed(() => chooseExisting.value || storedCredential.value?.isResolvable || !connected.value && !needsAuthorization.value && !createNew.value && !hasDraft.value && usableCredentials.value.length > 0);
		const gatewayAvailable = computed(() => gateway.isEnabled.value && gateway.isCredentialTypeSupported(props.item.credentialType) && props.nodes.length > 0 && props.nodes.every((node) => {
			const { operation, resource } = node.parameters;
			return !AI_GATEWAY_UNSUPPORTED_NODE_TYPES.includes(node.type) && gateway.isNodeTypeVersionSupported(node.type, node.typeVersion) && (typeof operation !== "string" || !operation || gateway.isActionSupported(node.type, typeof resource === "string" ? resource : void 0, operation));
		}));
		watch([
			gatewayAvailable,
			gateway.balance,
			usableCredentials
		], ([available, balance, credentials]) => {
			if (available && !modeChanged.value && !connected.value) mode.value = !props.item.preferNew && ((balance ?? 0) > 0 || credentials.length === 0) ? "credits" : "own";
		}, { immediate: true });
		const credentialFields = computed(() => groupCredentialSetupFields(props.item.credentialType, form.parentTypes.value, form.credentialProperties.value.filter((property) => !property.envFeatureFlag || envFeatureFlag.value(property.envFeatureFlag))));
		const helpFields = computed(() => credentialFields.value.inline.filter((property) => property.type !== "notice" && !property.typeOptions?.copyButton));
		const fieldTitles = computed(() => isTemplated.value ? listPlaceholderTitles(form.credentialData.value) : helpFields.value.map((property) => property.displayName));
		const useAdvancedForm = computed(() => !canQuickConnect.value && (isTemplated.value ? fieldTitles.value.length === 0 : credentialFields.value.inline.length === 0));
		const advancedIsPrimary = computed(() => isTemplated.value && useAdvancedForm.value);
		const valueLabel = computed(() => binding.value?.__aiGatewayManaged ? i18n.baseText("instanceAi.setupPanel.connectedWith") : isOAuth.value ? i18n.baseText("instanceAi.setupPanel.account") : i18n.baseText("instanceAi.setupPanel.credential"));
		const balanceLabel = computed(() => gateway.balance.value === void 0 ? "" : gateway.balance.value <= 0 ? i18n.baseText("aiGateway.wallet.noCredits") : i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(gateway.balance.value).toFixed(2)}` } }));
		const value = computed(() => binding.value?.__aiGatewayManaged ? [i18n.baseText("generic.n8nCredits"), balanceLabel.value].filter(Boolean).join(" · ") : isOAuth.value ? storedCredential.value?.connectedAccountIdentifier ?? storedCredential.value?.name ?? binding.value?.name : storedCredential.value?.name ?? binding.value?.name);
		const useCredits = computed(() => gatewayAvailable.value && mode.value === "credits");
		const actionLabel = computed(() => needsAuthorization.value ? i18n.baseText("credentialEdit.oAuthButton.connectMyAccount") : useCredits.value ? i18n.baseText("instanceAi.setupPanel.useCredits") : advancedIsPrimary.value ? i18n.baseText("instanceAi.setupPanel.advancedSetup") : canQuickConnect.value || useAdvancedForm.value ? i18n.baseText("instanceAi.setupPanel.connect") : isOAuth.value ? i18n.baseText("instanceAi.setupPanel.saveAndSignIn") : i18n.baseText("generic.save"));
		const actionDisabled = computed(() => !initialized.value || loadingOAuth.value);
		const redirectUrl = computed(() => {
			const urls = rootStore.OAuthCallbackUrls;
			if (form.parentTypes.value.includes("oAuth1Api") || props.item.credentialType === "oAuth1Api") return "oauth1" in urls && typeof urls.oauth1 === "string" ? urls.oauth1 : "";
			return "oauth2" in urls && typeof urls.oauth2 === "string" ? urls.oauth2 : "";
		});
		const documentationUrl = computed(() => {
			const url = props.item.setupHint?.docsUrl ?? form.credentialType.value?.documentationUrl;
			if (!url) return "";
			return /^https?:\/\//.test(url) ? url : `${BUILTIN_CREDENTIALS_DOCS_URL}${url}/`;
		});
		const modeOptions = computed(() => [{
			value: "credits",
			label: i18n.baseText("generic.n8nCredits")
		}, {
			value: "own",
			label: i18n.baseText("instanceAi.setupPanel.useOwnKey")
		}]);
		const perNodeActions = computed(() => props.allowPerNode && connected.value ? [{
			id: "per-node",
			label: i18n.baseText("instanceAi.setupPanel.setCredentialsPerNode")
		}] : []);
		const actions = computed(() => {
			const existing = usableCredentials.value.some((credential) => !connected.value || credential.id !== binding.value?.id) ? [{
				id: "existing",
				label: i18n.baseText("instanceAi.setupPanel.useExisting")
			}] : [];
			if (!connected.value && useCredits.value) return existing;
			if (needsAuthorization.value) return [{
				id: "edit",
				label: i18n.baseText("instanceAi.setupPanel.editCredential")
			}, ...existing];
			if (connected.value && binding.value?.__aiGatewayManaged) return [
				{
					id: "replace",
					label: i18n.baseText("instanceAi.setupPanel.useOwnKey")
				},
				{
					id: "manage",
					label: i18n.baseText("instanceAi.setupPanel.manageCredits")
				},
				...perNodeActions.value
			];
			return [
				...connected.value ? [{
					id: "replace",
					label: i18n.baseText(isOAuth.value ? usesCustomOAuth.value ? "instanceAi.setupPanel.connectWithOAuth" : "instanceAi.setupPanel.switchAccount" : "instanceAi.setupPanel.replaceKey")
				}, {
					id: "edit",
					label: i18n.baseText("instanceAi.setupPanel.editCredential")
				}] : advancedIsPrimary.value ? [] : [{
					id: "advanced",
					label: i18n.baseText("instanceAi.setupPanel.advancedSetup")
				}],
				...existing,
				...perNodeActions.value
			];
		});
		const helpLabel = computed(() => {
			const fieldName = helpFields.value.length === 1 ? helpFields.value[0].name : void 0;
			return i18n.baseText(fieldName === "apiKey" ? "instanceAi.setupPanel.helpFindApiKey" : fieldName === "accessToken" ? "instanceAi.setupPanel.helpFindAccessToken" : "instanceAi.setupPanel.helpSetUp");
		});
		function askForHelp() {
			if (props.helpDisabled || busy.value) return;
			const selectedMode = selectedOAuthId.value ? oauthMode.value : form.isManagedOAuthMode.value ? "managed" : "custom";
			const selectedConnection = selectedOAuthId.value ? oauthConnection.value : false;
			emit("askForHelp", {
				id: binding.value?.id ?? void 0,
				credentialType: props.item.credentialType,
				displayName: serviceName.value,
				nodeName: props.node?.name,
				nodeType: props.node?.type,
				placeholderTitles: isOAuth.value ? void 0 : fieldTitles.value,
				documentationUrl: documentationUrl.value || void 0,
				oauthRedirectUrl: isOAuth.value ? redirectUrl.value : void 0,
				setupContext: isOAuth.value ? [
					i18n.baseText("instanceAi.setupPanel.helpOAuthState", { interpolate: {
						mode: selectedMode,
						state: selectedConnection === void 0 ? "unknown" : selectedConnection ? "connected" : "disconnected"
					} }),
					!needsAuthorization.value && fieldTitles.value.length ? i18n.baseText("instanceAi.setupPanel.helpVisibleFields", { interpolate: { fields: fieldTitles.value.join(", ") } }) : "",
					i18n.baseText(canQuickConnect.value ? "instanceAi.setupPanel.helpManagedOAuthAvailable" : "instanceAi.setupPanel.helpManagedOAuthUnavailable")
				].filter(Boolean).join(" ") : void 0
			});
		}
		function emitBinding(id, submittedData) {
			if (!active) return;
			createNew.value = false;
			hasDraft.value = submittedData !== void 0 && !(0, import_isEqual.default)(formData(), submittedData);
			chooseExisting.value = false;
			emit("bindCredential", props.item, id);
		}
		function onCredentialSelected(update) {
			const credential = update.properties.credentials?.[props.item.credentialType];
			if (!credential || typeof credential === "string") return;
			emit("connectStarted", "existing");
			if (credential.__aiGatewayManaged) emitBinding(AI_GATEWAY_MANAGED_TAG);
			else if (credential.id) emitBinding(credential.id);
		}
		function formData() {
			const data = { ...form.credentialData.value };
			delete data.homeProject;
			delete data.sharedWithProjects;
			return data;
		}
		function onDataChange(update) {
			if (!form.onDataChange(update)) return;
			hasDraft.value = true;
			if (reopenAuthorization.value) {
				reopenAuthorization.value = void 0;
				oauth.cancelAuthorize();
			}
		}
		async function saveKey() {
			const workflowId = props.workflowId;
			const details = {
				id: "",
				name: form.credentialName.value,
				type: props.item.credentialType,
				data: deepCopy(formData())
			};
			const credential = await credentialsStore.createNewCredential(details, props.projectId, void 0, { skipStoreUpdate: true });
			await externalHooks.run("credential.saved", {
				credential_type: credential.type,
				credential_id: credential.id,
				is_new: true
			});
			telemetry.track("User created credentials", {
				credential_type: credential.type,
				credential_id: credential.id,
				workflow_id: props.workflowId
			});
			if (form.isCredentialTestable.value) {
				await form.testCredential({
					...details,
					id: credential.id
				});
				if (!form.testedSuccessfully.value) {
					await credentialsStore.deleteCredential({ id: credential.id });
					return;
				}
			}
			credentialsStore.upsertCredential(credential);
			if (!active || props.workflowId !== workflowId) return;
			await credentialsStore.fetchUsableCredentials({ workflowId }).catch(() => {});
			emitBinding(credential.id, details.data);
		}
		async function connect() {
			if (reopenAuthorization.value) {
				reopenAuthorization.value();
				return;
			}
			if (busy.value || actionDisabled.value) return;
			if (!needsAuthorization.value && !useCredits.value && !canQuickConnect.value && !useAdvancedForm.value) {
				form.showValidationWarning.value = true;
				if (!form.requiredPropertiesFilled.value) return;
			}
			busy.value = true;
			form.authError.value = "";
			try {
				if (needsAuthorization.value && storedCredential.value) {
					emit("connectStarted", "oauth");
					const credential = await oauth.authorizeExistingCredential(storedCredential.value, {
						workflowId: props.workflowId,
						onAuthorizationStarted: (reopen) => {
							reopenAuthorization.value = reopen;
						}
					});
					if (credential) {
						oauthConnection.value = true;
						emitBinding(credential.id);
					}
				} else if (useCredits.value) {
					emit("connectStarted", "gateway");
					emitBinding(AI_GATEWAY_MANAGED_TAG);
				} else if (useAdvancedForm.value) onMenuAction("advanced");
				else if (isOAuth.value) {
					emit("connectStarted", "oauth");
					const submittedData = canQuickConnect.value ? void 0 : deepCopy(formData());
					const credential = await oauth.createAndAuthorize(props.item.credentialType, props.node?.type, {
						projectId: props.projectId,
						workflowId: props.workflowId,
						data: submittedData,
						name: form.credentialName.value || void 0,
						onAuthorizationStarted: (reopen) => {
							reopenAuthorization.value = reopen;
						}
					});
					if (credential) emitBinding(credential.id, submittedData);
				} else if (canQuickConnect.value && props.node) {
					emit("connectStarted", "api_key");
					const credential = await quickConnect.connect({
						credentialTypeName: props.item.credentialType,
						nodeType: props.node.type,
						serviceName: serviceName.value,
						source: "credential_type",
						projectId: props.projectId,
						workflowId: props.workflowId
					});
					if (credential) emitBinding(credential.id);
				} else {
					emit("connectStarted", "api_key");
					await saveKey();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			} finally {
				reopenAuthorization.value = void 0;
				busy.value = false;
			}
		}
		function onMenuAction(id) {
			if (id === "per-node") {
				emit("setCredentialsPerNode");
				return;
			}
			if (id === "existing") {
				chooseExisting.value = true;
				return;
			}
			if (id === "manage") {
				openTopUp({
					source: "credential_selector",
					credentialType: props.item.credentialType
				});
				return;
			}
			if (id === "edit" && binding.value?.id) {
				uiStore.openExistingCredential(binding.value.id, { workflowId: props.workflowId });
				return;
			}
			if (id === "replace") {
				mode.value = "own";
				modeChanged.value = true;
				if (isOAuth.value && canQuickConnect.value) connect();
				else {
					createNew.value = true;
					if (!hasDraft.value) {
						initialized.value = false;
						initialize();
					}
				}
				return;
			}
			emit("connectStarted", "advanced");
			uiStore.openNewCredential(props.item.credentialType, false, true, props.projectId, void 0, props.node?.name, props.node, {
				closeOnSave: true,
				credentialSetupHint: props.item.setupHint,
				workflowId: props.workflowId,
				onCredentialCreated: (credential) => emitBinding(credential.id)
			});
		}
		async function initialize() {
			initializationFailed.value = false;
			try {
				uiStore.activeCredentialType = props.item.credentialType;
				const initialization = form.initialize();
				const type = props.item.credentialType;
				const locale = rootStore.defaultLocale;
				if (locale !== "en" && !i18n.exists(`n8n-nodes-base.credentials.${type}`)) {
					const translation = await credentialsStore.getCredentialTranslation(type).catch(() => void 0);
					if (translation) addCredentialTranslation({ [type]: translation }, locale);
				}
				await initialization;
				initialized.value = true;
			} catch (error) {
				initializationFailed.value = true;
				if (active) toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			}
		}
		if (binding.value?.id || binding.value?.__aiGatewayManaged) initialized.value = true;
		else initialize();
		watch(() => props.item.setupHint, (hint) => {
			if (hint && !connected.value) initialize();
		});
		onMounted(() => {
			Promise.all([gateway.fetchConfig(), gateway.fetchWallet()]).catch(() => {});
		});
		onScopeDispose(() => {
			active = false;
			emit("update:busy", false);
			emit("update:hasChanges", false);
			oauth.cancelAuthorize();
			quickConnect.cancelConnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.form) }, [
				showExistingPicker.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.node ? (openBlock(), createBlock(NodeCredentials_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.existing),
					node: __props.node,
					"override-cred-type": __props.item.credentialType,
					"project-id": __props.projectId,
					"workflow-id": __props.workflowId,
					"credential-setup-hint": __props.item.setupHint,
					"credentials-field-label": unref(i18n).baseText("instanceAi.setupPanel.credential"),
					standalone: "",
					"hide-issues": "",
					"skip-auto-select": "",
					onCredentialSelected,
					onConnectionStarted: _cache[0] || (_cache[0] = ($event) => emit("connectStarted", "oauth")),
					onConnectionCompleted: _cache[1] || (_cache[1] = ($event) => emitBinding($event))
				}, createSlots({ _: 2 }, [perNodeActions.value.length ? {
					name: "label-postfix",
					fn: withCtx(() => [createVNode(unref(DropdownMenu_default), {
						items: perNodeActions.value,
						modal: false,
						placement: "bottom-end",
						onSelect: onMenuAction
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: busy.value,
							"aria-label": unref(i18n).baseText("node.moreActions")
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "pencil",
								size: "small"
							})]),
							_: 1
						}, 8, ["disabled", "aria-label"])]),
						_: 1
					}, 8, ["items"])]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"node",
					"override-cred-type",
					"project-id",
					"workflow-id",
					"credential-setup-hint",
					"credentials-field-label"
				])) : (openBlock(), createBlock(CredentialsDropdown_default, {
					key: 1,
					teleported: "",
					"credential-options": usableCredentials.value.map(({ id, name, homeProject }) => ({
						id,
						name,
						homeProject,
						typeDisplayName: unref(form).credentialType.value?.displayName
					})),
					"selected-credential-id": null,
					permissions: unref(form).credentialPermissions.value,
					onCredentialSelected: _cache[2] || (_cache[2] = ($event) => {
						emit("connectStarted", "existing");
						emitBinding($event);
					}),
					onNewCredential: _cache[3] || (_cache[3] = ($event) => onMenuAction("advanced"))
				}, null, 8, ["credential-options", "permissions"])), chooseExisting.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: "ghost",
					size: "small",
					onClick: _cache[4] || (_cache[4] = ($event) => chooseExisting.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 64)) : (openBlock(), createBlock(unref(SetupConnection_default), {
					key: 1,
					connected: connected.value && !reopenAuthorization.value,
					"value-label": valueLabel.value,
					value: value.value,
					"action-label": actionLabel.value,
					actions: reopenAuthorization.value ? [] : actions.value,
					"action-disabled": actionDisabled.value,
					loading: loadingOAuth.value || busy.value && !reopenAuthorization.value,
					onAction: connect,
					onSelect: onMenuAction
				}, {
					"action-leading": withCtx(() => [useCredits.value && balanceLabel.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						step: "xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(balanceLabel.value), 1)]),
						_: 1
					})) : !useCredits.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						"as-child": "",
						disabled: !__props.helpDisabled,
						content: unref(i18n).baseText("instanceAi.setupPanel.helpUnavailableWhileBuilding")
					}, {
						default: withCtx(() => [createBaseVNode("span", { tabindex: __props.helpDisabled ? 0 : void 0 }, [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "small",
							class: normalizeClass(_ctx.$style.help),
							disabled: __props.helpDisabled || busy.value,
							onClick: askForHelp
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "sparkles",
								size: "small"
							}), createTextVNode(" " + toDisplayString(helpLabel.value), 1)]),
							_: 1
						}, 8, ["class", "disabled"])], 8, _hoisted_1$1)]),
						_: 1
					}, 8, ["disabled", "content"])) : createCommentVNode("", true)]),
					default: withCtx(() => [
						gatewayAvailable.value ? (openBlock(), createBlock(unref(N8nSegmentControl_default), {
							key: 0,
							"model-value": mode.value,
							options: modeOptions.value,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => {
								mode.value = $event;
								modeChanged.value = true;
							})
						}, null, 8, ["model-value", "options"])) : createCommentVNode("", true),
						useCredits.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							class: normalizeClass(_ctx.$style.hint)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.creditsDescription")), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						needsAuthorization.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(value.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						!loadingOAuth.value && !needsAuthorization.value && !useCredits.value && !canQuickConnect.value && !useAdvancedForm.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [unref(isOAuth) && redirectUrl.value ? (openBlock(), createElementBlock("label", {
							key: 0,
							class: normalizeClass(_ctx.$style.redirect)
						}, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.redirectUrl")) + " ", 1), createVNode(unref(N8nCopyInput_default), {
							class: normalizeClass(_ctx.$style.redirectInput),
							value: redirectUrl.value,
							"copy-label": unref(i18n).baseText("instanceAi.setupPanel.copyRedirectUrl"),
							size: "small"
						}, null, 8, [
							"class",
							"value",
							"copy-label"
						])], 2)) : createCommentVNode("", true), isTemplated.value ? (openBlock(), createBlock(TemplatedAuthSimpleView_default, {
							key: 1,
							compact: "",
							"credential-data": unref(form).credentialData.value,
							"show-validation-warnings": unref(form).showValidationWarning.value,
							onUpdate: onDataChange
						}, null, 8, ["credential-data", "show-validation-warnings"])) : (openBlock(), createBlock(CredentialInputs_default, {
							key: 2,
							compact: "",
							"credential-type": __props.item.credentialType,
							"credential-properties": credentialFields.value.inline,
							"credential-data": unref(form).credentialData.value,
							"documentation-url": documentationUrl.value,
							"show-validation-warnings": unref(form).showValidationWarning.value,
							onUpdate: onDataChange
						}, null, 8, [
							"credential-type",
							"credential-properties",
							"credential-data",
							"documentation-url",
							"show-validation-warnings"
						]))], 64)) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"connected",
					"value-label",
					"value",
					"action-label",
					"actions",
					"action-disabled",
					"loading"
				])),
				unref(form).authError.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					theme: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(form).authError.value), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				initializationFailed.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 3,
					variant: "ghost",
					size: "small",
					onClick: initialize
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiSetupCredential_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_m1fmg_1",
	redirect: "_redirect_m1fmg_7",
	hint: "_hint_m1fmg_15",
	help: "_help_m1fmg_19",
	existing: "_existing_m1fmg_24",
	redirectInput: "_redirectInput_m1fmg_28"
};
var InstanceAiSetupCredential_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupCredential_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupCredential_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/setupPanel/InstanceAiSetupPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiSetupPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiSetupPanel",
	props: {
		workflowId: {},
		projectId: {}
	},
	emits: ["update:overlapHeight"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		provide(ResourceLocatorDropdownTeleportedKey, true);
		const i18n = useI18n();
		const toast = useToast();
		const thread = useThread();
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const projectsStore = useProjectsStore();
		const usersStore = useUsersStore();
		const rootStore = useRootStore();
		const oauth = useCredentialOAuth();
		const connectingItemId = ref();
		const reopenAuthorization = ref();
		let active = true;
		onScopeDispose(() => {
			active = false;
			oauth.cancelAuthorize();
		});
		const { testCredentialInBackground } = useCredentialTestInBackground();
		const { rows, rowSource, credentialsAvailable, workflowNodes, savedWorkflowChecksum, isRefreshingWorkflow, isCheckingOAuthCredentials, isAgentBuilding, isAwaitingFirstBuild, getNodeByName: getSavedNodeByName, refreshWorkflow, workflowProjectId, isItemDone, isCredentialConfigured } = useSetupPanelState({
			thread,
			workflowId: () => props.workflowId
		});
		const fetchedProject = ref();
		const credentialProjectId = computed(() => workflowProjectId.value ?? props.projectId ?? (fetchedProject.value?.workflowId === props.workflowId ? fetchedProject.value.projectId : void 0));
		watch(() => workflowProjectId.value || props.projectId ? void 0 : props.workflowId, async (id) => {
			if (!id || fetchedProject.value?.workflowId === id) return;
			try {
				const workflow = await getWorkflow(rootStore.restApiContext, id);
				if (props.workflowId === id) fetchedProject.value = {
					workflowId: id,
					projectId: deriveHomeProject(workflow)?.id
				};
			} catch {}
		}, { immediate: true });
		const isCredentialProjectReady = computed(() => projectsStore.myProjects.some((project) => project.id === credentialProjectId.value));
		watch(credentialProjectId, async (id) => {
			if (id && !isCredentialProjectReady.value) await projectsStore.getMyProjects().catch(() => {});
		}, { immediate: true });
		const actions = useSetupPanelActions({
			threadId: thread.id,
			workflowId: () => props.workflowId,
			workflowNodes,
			isAgentBuilding,
			savedWorkflowChecksum,
			onFlushResult: notifyApplyResult,
			onSaved: (workflow) => panelTelemetry.trackSaved(workflow)
		});
		function getNodeByName(name, includePendingParameters = true) {
			const node = getSavedNodeByName(name);
			if (!node) return void 0;
			let credentials = node.credentials;
			for (const { item } of rows.value) {
				if (item.kind !== "credential" || !item.nodeBindings?.some((binding) => binding.nodeName === name)) continue;
				const pending = actions.getPendingCredential(item.id, name);
				if (pending) credentials = {
					...credentials,
					[item.credentialType]: pending
				};
			}
			const changes = includePendingParameters ? actions.getPendingParameterChanges(name) : [];
			if (credentials === node.credentials && changes.length === 0) return node;
			return {
				...node,
				credentials,
				parameters: changes.length ? applySetupParameterChanges(node.parameters, changes) : node.parameters
			};
		}
		const displayedRows = computed(() => rows.value.map((row) => {
			if (row.item.kind === "credential") {
				const pending = actions.getPendingCredential(row.item.id);
				if (pending && !row.item.nodeBindings?.length) return {
					...row,
					isDone: isCredentialConfigured(pending)
				};
				return pending || row.item.nodeBindings?.some(({ nodeName }) => actions.getPendingCredential(row.item.id, nodeName)) ? {
					...row,
					isDone: isItemDone(row.item, getNodeByName)
				} : row;
			}
			return actions.getPendingParameterChanges(row.item.nodeName).length ? {
				...row,
				isDone: isItemDone(row.item, getNodeByName)
			} : row;
		}));
		const execution = useSetupPanelExecution({
			thread,
			workflowId: () => props.workflowId
		});
		const selectedItemId = ref();
		const setupDismissedKey = computed(() => LOCAL_STORAGE_INSTANCE_AI_SETUP_DISMISSED(usersStore.currentUserId ?? "", thread.id, props.workflowId));
		const setupDismissed = useLocalStorage(setupDismissedKey, false, { writeDefaults: false });
		watch(() => props.workflowId, () => {
			selectedItemId.value = void 0;
			oauth.cancelAuthorize();
			clearDetailState();
			lastDetailId = void 0;
		});
		function nodeType(node) {
			return nodeTypesStore.getNodeType(node.type, node.typeVersion);
		}
		const shownItemIds = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_SETUP_ITEMS(usersStore.currentUserId ?? "", thread.id, props.workflowId), [], {
			writeDefaults: false,
			flush: "sync"
		});
		const credentialsReady = computed(() => credentialsAvailable.value && !isRefreshingWorkflow.value && !isCheckingOAuthCredentials.value);
		const selectingExisting = ref(/* @__PURE__ */ new Set());
		watch([
			rows,
			credentialsReady,
			() => credentialsStore.usableCredentials
		], async ([currentRows, ready]) => {
			if (!ready) return;
			const workflowId = props.workflowId;
			const selections = currentRows.flatMap(({ item }) => {
				if (item.kind !== "credential" || item.nodeBindings?.length || item.preferNew || actions.getPendingCredential(item.id) || selectingExisting.value.has(item.id)) return [];
				const credentials = credentialsStore.getUsableCredentialByType(item.credentialType);
				return shouldAutoResolveCredential(item.credentialType, credentials.length) ? [{
					item,
					credential: credentials[0]
				}] : [];
			});
			if (!selections.length) return;
			selectingExisting.value = new Set([...selectingExisting.value, ...selections.map(({ item }) => item.id)]);
			for (const { item, credential } of selections) try {
				if (props.workflowId === workflowId) await actions.bindCredential(item, {
					id: credential.id,
					name: credential.name
				});
			} finally {
				selectingExisting.value.delete(item.id);
			}
		}, {
			immediate: true,
			flush: "sync"
		});
		function needsInitialAction(row) {
			return !row.isDone && (row.item.kind === "parameters" || credentialsReady.value && !selectingExisting.value.has(row.item.id));
		}
		watch(() => displayedRows.value.filter(needsInitialAction), (currentRows) => {
			const added = currentRows.filter((row) => !shownItemIds.value.includes(row.item.id));
			if (added.length) shownItemIds.value = [...shownItemIds.value, ...added.map((row) => row.item.id)];
		}, {
			immediate: true,
			flush: "sync"
		});
		const groups = computed(() => groupSetupPanelRows(displayedRows.value, {
			workflowId: props.workflowId,
			getNodeByName,
			getNodeType: nodeType
		}).filter((group) => {
			const items = [...group.credential ? [group.credential] : [], ...group.parameters];
			return group.id === selectedItemId.value || items.some((row) => shownItemIds.value.includes(row.item.id)) || items.some(needsInitialAction);
		}));
		const panelTelemetry = useSetupPanelTelemetry({
			workflowId: () => props.workflowId,
			thread,
			rows,
			groups,
			shownItemIds,
			getNodeByName: getSavedNodeByName,
			isItemDone,
			isAgentBuilding,
			ready: () => !setupDismissed.value && credentialsReady.value && (rowSource.value === "derived" || rows.value.length > 0)
		});
		__expose({ getChatTelemetryContext: panelTelemetry.getChatTelemetryContext });
		const selectedGroup = computed(() => groups.value.find((group) => group.id === selectedItemId.value));
		const selectedNodes = computed(() => (selectedGroup.value?.credential?.item.nodeBindings ?? []).flatMap((binding) => {
			const node = getNodeByName(binding.nodeName);
			return node ? [node] : [];
		}));
		function groupById(id) {
			return groups.value.find((group) => group.id === id);
		}
		function groupNodeType(id) {
			const node = groupById(id)?.node;
			return node ? nodeType(node) : null;
		}
		function groupName(group) {
			const item = group.credential?.item;
			if (item) return deriveServiceName(item.setupHint) ?? getAppNameFromNodeName(getAppNameFromCredType(item.appDisplayName ?? credentialsStore.getCredentialTypeByName(item.credentialType)?.displayName ?? item.credentialType));
			return group.node ? getAppNameFromNodeName(nodeType(group.node)?.displayName ?? group.node.name) : i18n.baseText("instanceAi.setupPanel.details");
		}
		const panelItems = computed(() => groups.value.map((group) => {
			const pending = [];
			if (group.credential && !group.credential.isDone) pending.push(i18n.baseText("instanceAi.setupPanel.connection"));
			for (const row of group.parameters) {
				if (row.isDone) continue;
				const node = getNodeByName(row.item.nodeName);
				const properties = node ? nodeType(node)?.properties : void 0;
				for (const name of row.item.parameterNames) {
					const root = name.split(/[.[\]]/)[0];
					pending.push(properties?.find((property) => property.name === root)?.displayName ?? name);
				}
			}
			return {
				id: group.id,
				title: groupName(group),
				hasAction: Boolean(group.credential && !group.credential.isDone && oauth.isOAuthCredentialType(group.credential.item.credentialType) && oauth.canOAuthCredentialQuickConnect(group.credential.item.credentialType) && (connectingItemId.value === group.id || credentialsStore.getUsableCredentialByType(group.credential.item.credentialType).length === 0)),
				completed: (!group.credential || group.credential.isDone) && group.parameters.every((row) => row.isDone),
				subtitle: pending.length ? i18n.baseText("instanceAi.setupPanel.needs", { interpolate: { items: [...new Set(pending)].join(", ") } }) : void 0,
				disabled: group.credential ? !isCredentialProjectReady.value || !credentialsAvailable.value || !credentialsStore.getCredentialTypeByName(group.credential.item.credentialType) : !group.parameters.some((row) => getNodeByName(row.item.nodeName))
			};
		}));
		watch(() => selectedItemId.value && panelItems.value.find((item) => item.id === selectedItemId.value && !item.disabled), (item) => {
			if (selectedItemId.value && !item) {
				selectedItemId.value = void 0;
				clearDetailState();
			}
		});
		const parameterEditors = computed(() => (selectedGroup.value?.parameters ?? []).flatMap((row) => {
			const node = getNodeByName(row.item.nodeName, false);
			return node ? [{
				item: row.item,
				node,
				pendingChanges: actions.getPendingParameterChanges(row.item.nodeName)
			}] : [];
		}));
		const perNodeGroups = shallowReactive(/* @__PURE__ */ new Set());
		const perNodeCredentials = computed(() => {
			const group = selectedGroup.value;
			if (!group?.credential || selectedNodes.value.length < 2) return false;
			if (perNodeGroups.has(group.id)) return true;
			const type = group.credential.item.credentialType;
			return new Set(selectedNodes.value.map((node) => {
				const credential = node.credentials?.[type];
				return credential?.__aiGatewayManaged ? AI_GATEWAY_MANAGED_TAG : credential?.id;
			})).size > 1;
		});
		const detailSections = computed(() => {
			const group = selectedGroup.value;
			if (!group) return [];
			const credential = group.credential?.item;
			const editors = parameterEditors.value.filter(({ item, node }) => {
				const type = nodeType(node);
				if (!type) return false;
				const values = getNodeParameters(type.properties, node.parameters, true, true, node, type) ?? node.parameters;
				return type.properties.some((property) => property.type !== "hidden" && item.parameterNames.some((name) => name.split(/[.[\]]/)[0] === property.name) && displayParameter(values, property, node, type));
			});
			const nodes = credential ? selectedNodes.value : editors.map((editor) => editor.node);
			return [...credential && !perNodeCredentials.value ? [{
				id: group.id,
				title: void 0,
				credential,
				nodes: selectedNodes.value,
				editors: [],
				showParameters: false
			}] : [], ...nodes.filter((node) => perNodeCredentials.value || editors.some((editor) => editor.node.name === node.name)).map((node) => ({
				id: `node:${node.name}`,
				title: nodes.length > 1 ? node.name : void 0,
				credential: credential && perNodeCredentials.value ? {
					...credential,
					id: `${credential.id}:${node.name}`,
					nodeBindings: [{ nodeName: node.name }]
				} : void 0,
				nodes: [node],
				editors: editors.filter((editor) => editor.node.name === node.name),
				showParameters: credential && perNodeCredentials.value ? isCredentialConfigured(node.credentials?.[credential.credentialType]) : !group.credential || group.credential.isDone
			}))].filter((section) => section.credential || section.showParameters && section.editors.length > 0);
		});
		const parameterEditorComponents = useTemplateRef("parameterEditorComponents");
		const showParameterConfirm = computed(() => detailSections.value.some((section) => section.showParameters && section.editors.length > 0));
		const isApplying = ref(false);
		const busyCredentials = shallowReactive(/* @__PURE__ */ new Set());
		const dirtyCredentials = shallowReactive(/* @__PURE__ */ new Set());
		const credentialBusy = computed(() => busyCredentials.size > 0);
		const credentialHasChanges = computed(() => dirtyCredentials.size > 0);
		const dirtyParameters = shallowReactive(/* @__PURE__ */ new Set());
		const requestingExecution = execution.isRunning;
		const isChatBusy = computed(() => thread.isStreaming || thread.isSendingMessage || thread.isAwaitingConfirmation);
		const setupPanel = useTemplateRef("setupPanel");
		const setupCoachmarkSeen = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_SETUP_COACHMARK_SEEN(usersStore.currentUserId ?? ""), false, { writeDefaults: false });
		const showSetupCoachmark = ref(false);
		watch([
			computed(() => Boolean(usersStore.currentUserId && setupPanel.value) && (isAgentBuilding.value || isAwaitingFirstBuild.value && thread.isStreaming) && !setupDismissed.value && !selectedItemId.value && panelItems.value.some((item) => !item.completed && !item.disabled)),
			() => usersStore.currentUserId,
			() => props.workflowId
		], ([available]) => {
			showSetupCoachmark.value = available && !setupCoachmarkSeen.value;
			if (showSetupCoachmark.value) setupCoachmarkSeen.value = true;
		}, {
			immediate: true,
			flush: "post"
		});
		async function onAskForHelp(credential) {
			if (isChatBusy.value) return;
			await thread.sendMessage(buildInstanceAiArtifactCredentialQuestion(credential), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_credential_setup"
				},
				pushRef: rootStore.pushRef,
				handoffContext: buildInstanceAiCredentialHandoffContext(credential)
			});
		}
		const allRowsDone = computed(() => rows.value.length > 0 && rows.value.every((row) => row.isDone));
		const hasChanges = computed(() => credentialHasChanges.value || dirtyParameters.size > 0);
		const activeGroupComplete = computed(() => {
			const group = selectedGroup.value;
			return Boolean(group && (!group.credential || group.credential.isDone) && group.parameters.every((row) => row.isDone));
		});
		const canAutoClose = ref(false);
		const reducedMotion = usePreferredReducedMotion();
		let selectionVersion = 0;
		let lastDetailId;
		const readyToReturn = computed(() => canAutoClose.value && activeGroupComplete.value && !hasChanges.value && !isApplying.value && !actions.isApplying.value && !credentialBusy.value && !isRefreshingWorkflow.value && !connectingItemId.value);
		const { start: scheduleReturn, stop: cancelReturn } = useTimeoutFn(() => {
			if (readyToReturn.value) selectedItemId.value = void 0;
		}, computed(() => reducedMotion.value === "reduce" ? 0 : 650), { immediate: false });
		function clearDetailState() {
			busyCredentials.clear();
			dirtyCredentials.clear();
			dirtyParameters.clear();
		}
		function onDetailClosed() {
			if (selectedItemId.value) return;
			clearDetailState();
			lastDetailId = void 0;
		}
		watch(selectedItemId, (id) => {
			selectionVersion++;
			cancelReturn();
			canAutoClose.value = Boolean(id && !activeGroupComplete.value);
			if (id && id !== lastDetailId) {
				clearDetailState();
				lastDetailId = id;
			}
		}, { flush: "sync" });
		watch(readyToReturn, (ready) => {
			cancelReturn();
			if (ready) scheduleReturn();
		});
		function finishSubmission(result, version, workflowId) {
			if (active && props.workflowId === workflowId && version === selectionVersion && (result === "applied" || result === "noop" || result === "queued")) canAutoClose.value = true;
		}
		const terminalStatus = computed(() => {
			if (!allRowsDone.value || hasChanges.value) return "incomplete";
			if (requestingExecution.value) return "executing";
			if (isAgentBuilding.value || isAwaitingFirstBuild.value) return "incomplete";
			if (rowSource.value !== "derived" || !credentialsReady.value || isApplying.value || actions.isApplying.value || actions.pendingApplyCount.value > 0 || credentialBusy.value || connectingItemId.value) return "validating";
			return "complete";
		});
		watch([
			() => rows.value.some((row) => !row.isDone),
			hasChanges,
			rowSource,
			credentialsReady,
			isAgentBuilding
		], ([pending, dirty, source, ready, building]) => {
			if (dirty || pending && (source === "derived" && ready || building)) setupDismissed.value = false;
		}, { immediate: true });
		async function onExecute() {
			if (terminalStatus.value !== "complete" || isChatBusy.value || requestingExecution.value) return;
			const workflowId = props.workflowId;
			const dismissedKey = setupDismissedKey.value;
			try {
				const result = await execution.executeWorkflow();
				if (!active || !result?.notified) return;
				if (props.workflowId !== workflowId) {
					localStorage.setItem(dismissedKey, "true");
					return;
				}
				if (allRowsDone.value && !isAgentBuilding.value && !hasChanges.value && !actions.isApplying.value && actions.pendingApplyCount.value === 0) {
					setupDismissed.value = true;
					panelTelemetry.trackDismissed("execution_finished");
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.setupPanel.executeError"));
			}
		}
		async function connectFromRow(id) {
			if (connectingItemId.value === id && reopenAuthorization.value) {
				reopenAuthorization.value();
				return;
			}
			const group = groupById(id);
			const item = group?.credential?.item;
			const projectId = credentialProjectId.value;
			if (!group || !item || !projectId || connectingItemId.value) return;
			const workflowId = props.workflowId;
			const nodeName = item.nodeBindings?.find((binding) => getNodeByName(binding.nodeName))?.nodeName;
			const node = nodeName ? getNodeByName(nodeName) : void 0;
			const bind = async (credentialId) => {
				if (!active || props.workflowId !== workflowId) return;
				await onBindCredential(item, credentialId);
				if (active && props.workflowId === workflowId && groupById(id)?.parameters.some((row) => !row.isDone)) selectedItemId.value = id;
			};
			panelTelemetry.trackConnectionStarted(item, "oauth");
			connectingItemId.value = id;
			try {
				const credential = await oauth.createAndAuthorize(item.credentialType, node?.type, {
					projectId,
					workflowId,
					onAuthorizationStarted: (reopen) => {
						reopenAuthorization.value = reopen;
					}
				});
				if (credential) await bind(credential.id);
			} catch (error) {
				if (active) toast.showError(error, i18n.baseText("instanceAi.setupPanel.connectionError"));
			} finally {
				reopenAuthorization.value = void 0;
				connectingItemId.value = void 0;
			}
		}
		async function notifyApplyResult(result, workflowId) {
			if (!active || props.workflowId !== workflowId) return;
			if (result === "error" || result === "conflict") toast.showMessage({
				title: i18n.baseText("instanceAi.setupPanel.applyError"),
				type: "error"
			});
			if (result === "applied" || result === "noop" || result === "dropped" || result === "conflict") await refreshWorkflow();
		}
		async function onBindCredential(item, credentialId) {
			const workflowId = props.workflowId;
			const version = selectedGroup.value?.credential?.item.credentialType === item.credentialType ? selectionVersion : void 0;
			if (credentialId === "__AI_GATEWAY_MANAGED__") {
				const result = await actions.bindCredential(item, {
					id: null,
					name: "",
					__aiGatewayManaged: true
				});
				await notifyApplyResult(result, workflowId);
				panelTelemetry.trackConnectionCompleted(item, null, result);
				finishSubmission(result, version, workflowId);
				return;
			}
			const credential = (credentialsStore.hasUsableCredentialsForScope({ workflowId }) ? credentialsStore.getUsableCredentialById(credentialId) : void 0) ?? credentialsStore.getCredentialById(credentialId);
			if (!credential) return;
			testCredentialInBackground(credential.id, credential.name, item.credentialType);
			const result = await actions.bindCredential(item, {
				id: credential.id,
				name: credential.name
			});
			await notifyApplyResult(result, workflowId);
			panelTelemetry.trackConnectionCompleted(item, credential.id, result);
			finishSubmission(result, version, workflowId);
		}
		async function onConfirmParameters() {
			if (isApplying.value || credentialBusy.value) return;
			const submissions = (parameterEditorComponents.value ?? []).flatMap((editor) => {
				const submission = editor.getSubmission();
				return submission ? [submission] : [];
			});
			if (!submissions.length) return;
			const workflowId = props.workflowId;
			const version = selectionVersion;
			isApplying.value = true;
			try {
				const result = await actions.applyParameterBatch(submissions);
				await notifyApplyResult(result, workflowId);
				finishSubmission(result, version, workflowId);
			} finally {
				isApplying.value = false;
			}
		}
		return (_ctx, _cache) => {
			return !unref(setupDismissed) && panelItems.value.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "setupPanel",
				ref: setupPanel
			}, [(openBlock(), createBlock(unref(SetupPanel_default), {
				key: __props.workflowId,
				"active-item-id": selectedItemId.value,
				"onUpdate:activeItemId": _cache[0] || (_cache[0] = ($event) => selectedItemId.value = $event),
				items: panelItems.value,
				status: terminalStatus.value,
				"execute-disabled": isChatBusy.value || unref(requestingExecution),
				"data-test-id": "instance-ai-setup-panel",
				onExecute,
				onDetailClosed,
				"onUpdate:overlapHeight": _cache[1] || (_cache[1] = ($event) => emit("update:overlapHeight", $event))
			}, {
				action: withCtx(({ item }) => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "subtle",
					disabled: item.disabled || Boolean(connectingItemId.value && (connectingItemId.value !== item.id || !reopenAuthorization.value)),
					loading: connectingItemId.value === item.id && !reopenAuthorization.value,
					onClick: ($event) => connectFromRow(item.id)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.connect")), 1)]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"onClick"
				])]),
				icon: withCtx(({ item }) => [groupById(item.id)?.credential ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": groupById(item.id)?.credential?.item.credentialType ?? "",
					size: 16
				}, null, 8, ["credential-type-name"])) : groupById(item.id)?.node ? (openBlock(), createBlock(NodeIcon_default, {
					key: 1,
					"node-type": groupNodeType(item.id),
					size: 16
				}, null, 8, ["node-type"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 2,
					icon: "sliders-horizontal",
					size: "small"
				}))]),
				detail: withCtx(({ item }) => [selectedGroup.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.detail)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(detailSections.value, (section) => {
					return openBlock(), createElementBlock("section", {
						key: section.id,
						class: normalizeClass([_ctx.$style.section, { [_ctx.$style.divided]: section.title }])
					}, [
						section.title ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							tag: "h3",
							size: "medium",
							bold: "",
							class: normalizeClass(_ctx.$style.sectionTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(section.title), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						section.credential && credentialProjectId.value ? (openBlock(), createBlock(InstanceAiSetupCredential_default, {
							key: section.credential.id,
							item: section.credential,
							node: section.nodes[0],
							"pending-credential": unref(actions).getPendingCredential(section.credential.id),
							nodes: section.nodes,
							"workflow-id": __props.workflowId,
							"project-id": credentialProjectId.value,
							"help-disabled": isChatBusy.value,
							"allow-per-node": !perNodeCredentials.value && selectedNodes.value.length > 1,
							onSetCredentialsPerNode: ($event) => unref(perNodeGroups).add(item.id),
							onAskForHelp,
							onBindCredential: (credential, id) => selectedItemId.value === item.id && onBindCredential(credential, id),
							"onUpdate:busy": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(busyCredentials).add(section.id) : unref(busyCredentials).delete(section.id)),
							"onUpdate:hasChanges": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(dirtyCredentials).add(section.id) : unref(dirtyCredentials).delete(section.id)),
							onConnectStarted: ($event) => selectedItemId.value === item.id && unref(panelTelemetry).trackConnectionStarted(section.credential, $event)
						}, null, 8, [
							"item",
							"node",
							"pending-credential",
							"nodes",
							"workflow-id",
							"project-id",
							"help-disabled",
							"allow-per-node",
							"onSetCredentialsPerNode",
							"onBindCredential",
							"onUpdate:busy",
							"onUpdate:hasChanges",
							"onConnectStarted"
						])) : createCommentVNode("", true),
						section.showParameters ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(section.editors, (editor) => {
							return openBlock(), createElementBlock("div", { key: editor.item.id }, [createVNode(InstanceAiSetupPanelDetail_default, {
								ref_for: true,
								ref_key: "parameterEditorComponents",
								ref: parameterEditorComponents,
								item: editor.item,
								node: editor.node,
								"workflow-id": __props.workflowId,
								"project-id": credentialProjectId.value,
								"pending-changes": editor.pendingChanges,
								"onUpdate:hasChanges": ($event) => (selectedItemId.value === item.id || !selectedItemId.value && !$event) && ($event ? unref(dirtyParameters).add(editor.item.id) : unref(dirtyParameters).delete(editor.item.id))
							}, null, 8, [
								"item",
								"node",
								"workflow-id",
								"project-id",
								"pending-changes",
								"onUpdate:hasChanges"
							])]);
						}), 128)) : createCommentVNode("", true)
					], 2);
				}), 128)), showParameterConfirm.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [createVNode(unref(N8nButton_default), {
					size: "small",
					disabled: unref(dirtyParameters).size === 0 || isApplying.value || credentialBusy.value,
					loading: isApplying.value,
					"data-test-id": "instance-ai-setup-panel-confirm",
					onClick: onConfirmParameters
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(activeGroupComplete.value ? "generic.update" : "generic.confirm")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"active-item-id",
				"items",
				"status",
				"execute-disabled"
			])), createVNode(unref(N8nPopover_default), {
				open: showSetupCoachmark.value,
				reference: setupPanel.value ?? void 0,
				side: "top",
				align: "start",
				"show-arrow": "",
				"enable-scrolling": false,
				"suppress-auto-focus": "",
				width: "calc(var(--spacing--5xl) + var(--spacing--3xl))",
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => showSetupCoachmark.value = $event && showSetupCoachmark.value)
			}, {
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.coachmark),
					"data-test-id": "instance-ai-setup-coachmark"
				}, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "small",
					role: "status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.earlySetupCoachmark")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "small",
					onClick: _cache[2] || (_cache[2] = ($event) => showSetupCoachmark.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.setupPanel.dismissCoachmark")), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["open", "reference"])], 512)) : createCommentVNode("", true);
		};
	}
});
var InstanceAiSetupPanel_vue_vue_type_style_index_0_lang_module_default = {
	detail: "_detail_1v659_1",
	section: "_section_1v659_2",
	divided: "_divided_1v659_8",
	sectionTitle: "_sectionTitle_1v659_13",
	footer: "_footer_1v659_17",
	coachmark: "_coachmark_1v659_22"
};
var InstanceAiSetupPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiSetupPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiSetupPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiTestAgentPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiTestAgentPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiTestAgentPanel",
	emits: ["generate", "dismiss"],
	setup(__props) {
		/**
		* Post-setup suggestion to test the agent that was just built. Suggests rather
		* than imposes: the dismiss action is a peer of the CTA, not a close affordance
		* tucked in a corner.
		*/
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				"data-test-id": "instance-ai-test-agent-panel"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.head) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrap) }, [createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					size: "medium"
				})], 2), createVNode(unref(N8nText_default), {
					bold: "",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nText_default), {
					step: "xs",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.description")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.options) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					"data-test-id": "instance-ai-test-agent-generate",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("generate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.generate")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"data-test-id": "instance-ai-test-agent-dismiss",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("dismiss"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testAgent.dismiss")), 1)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
var InstanceAiTestAgentPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1j9b6_4",
	head: "_head_1j9b6_19",
	iconWrap: "_iconWrap_1j9b6_25",
	options: "_options_1j9b6_32"
};
var InstanceAiTestAgentPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiTestAgentPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiTestAgentPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/useArtifactTabSummaries.ts
var import_chunk = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSlice = require__baseSlice(), isIterateeCall = require__isIterateeCall(), toInteger = require_toInteger();
	var nativeCeil = Math.ceil, nativeMax = Math.max;
	/**
	* Creates an array of elements split into groups the length of `size`.
	* If `array` can't be split evenly, the final chunk will be the remaining
	* elements.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Array
	* @param {Array} array The array to process.
	* @param {number} [size=1] The length of each chunk
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Array} Returns the new array of chunks.
	* @example
	*
	* _.chunk(['a', 'b', 'c', 'd'], 2);
	* // => [['a', 'b'], ['c', 'd']]
	*
	* _.chunk(['a', 'b', 'c', 'd'], 3);
	* // => [['a', 'b', 'c'], ['d']]
	*/
	function chunk(array, size, guard) {
		if (guard ? isIterateeCall(array, size, guard) : size === void 0) size = 1;
		else size = nativeMax(toInteger(size), 0);
		var length = array == null ? 0 : array.length;
		if (!length || size < 1) return [];
		var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
		while (index < length) result[resIndex++] = baseSlice(array, index, index += size);
		return result;
	}
	module.exports = chunk;
})))(), 1);
var MAX_IDS_PER_REQUEST = 50;
var WORKFLOW_SUMMARY_FIELDS = [
	"id",
	"name",
	"updatedAt",
	"activeVersionId"
];
/** Tells if the hover card of a tab shows loaded details. */
function hasTabSummary(tab) {
	return (tab.type === "workflow" || tab.type === "data-table") && !tab.pending;
}
function summaryKey(type, id) {
	return `${type}:${id}`;
}
/**
* Keeps the edited time and a status of the workflows and data tables open as
* tabs. Uses list endpoints, so the responses have no nodes and no rows.
*/
function useArtifactTabSummaries(tabs) {
	const rootStore = useRootStore();
	const workflowsListStore = useWorkflowsListStore();
	const summaries = reactive(/* @__PURE__ */ new Map());
	async function loadWorkflows(ids) {
		const workflows = await workflowsListStore.searchWorkflows({
			ids,
			select: WORKFLOW_SUMMARY_FIELDS,
			options: { includeScopes: false }
		});
		return new Map(workflows.map((workflow) => [workflow.id, {
			type: "workflow",
			updatedAt: String(workflow.updatedAt),
			published: !!workflow.activeVersionId
		}]));
	}
	async function loadDataTables(ids) {
		const { data } = await fetchDataTablesApi(rootStore.restApiContext, "", {
			skip: 0,
			take: ids.length
		}, { id: ids });
		return new Map(data.map((dataTable) => [dataTable.id, {
			type: "data-table",
			updatedAt: dataTable.updatedAt,
			columnCount: dataTable.columns.length + 1
		}]));
	}
	const loaders = {
		workflow: loadWorkflows,
		"data-table": loadDataTables
	};
	const latestRequest = /* @__PURE__ */ new Map();
	let requestSeq = 0;
	async function refreshType(type, ids) {
		await Promise.all((0, import_chunk.default)([...new Set(ids)], MAX_IDS_PER_REQUEST).map(async (batch) => {
			const seq = ++requestSeq;
			for (const id of batch) latestRequest.set(summaryKey(type, id), seq);
			const currentKeys = () => batch.map((id) => ({
				id,
				key: summaryKey(type, id)
			})).filter(({ key }) => latestRequest.get(key) === seq);
			try {
				const loaded = await loaders[type](batch);
				for (const { id, key } of currentKeys()) summaries.set(key, loaded.get(id) ?? null);
			} catch {
				for (const { key } of currentKeys()) if (!summaries.has(key)) summaries.set(key, null);
			}
		}));
	}
	async function refresh(tabsToRefresh) {
		const summarized = tabsToRefresh.filter(hasTabSummary);
		await Promise.all(["workflow", "data-table"].map(async (type) => {
			const ids = summarized.filter((tab) => tab.type === type).map((tab) => tab.id);
			if (ids.length > 0) await refreshType(type, ids);
		}));
	}
	function getSummary(tab) {
		return hasTabSummary(tab) ? summaries.get(summaryKey(tab.type, tab.id)) : void 0;
	}
	const summarizedTabs = () => tabs().filter(hasTabSummary);
	const requestedKeys = /* @__PURE__ */ new Set();
	watch(summarizedTabs, (currentTabs) => {
		const newTabs = currentTabs.filter((tab) => !requestedKeys.has(summaryKey(tab.type, tab.id)));
		if (newTabs.length === 0) return;
		for (const tab of newTabs) requestedKeys.add(summaryKey(tab.type, tab.id));
		refresh(newTabs);
	}, { immediate: true });
	watch(() => summarizedTabs().filter((tab) => tab.building), (buildingTabs, previousBuildingTabs) => {
		const finishedTabs = previousBuildingTabs.filter((previous) => !buildingTabs.some((tab) => tab.id === previous.id));
		if (finishedTabs.length > 0) refresh(finishedTabs);
	});
	return {
		getSummary,
		refresh
	};
}
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/ManualEditorButton.vue
var ManualEditorButton_default = /* @__PURE__ */ defineComponent({
	__name: "ManualEditorButton",
	props: {
		tabs: {},
		activeTabId: {}
	},
	setup(__props) {
		const props = __props;
		const store = useOpenWorkflowInAssistantStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const workflowId = computed(() => {
			const tab = props.tabs.find((t) => t.id === props.activeTabId);
			return tab?.type === "workflow" ? tab.id : null;
		});
		async function handleClick() {
			if (workflowId.value === null) return;
			store.trackManualEditorOpened(workflowId.value, typeof route.params.threadId === "string" ? route.params.threadId : void 0);
			await router.push(`/workflow/${workflowId.value}`);
		}
		return (_ctx, _cache) => {
			return unref(store).isTreatment && workflowId.value !== null ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "subtle",
				size: "small",
				label: unref(i18n).baseText("experiments.openWorkflowInAssistant.manualEditor"),
				"data-test-id": "instance-ai-manual-editor-button",
				onClick: handleClick
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPreviewTabBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewTabBar",
	props: {
		tabs: {},
		activeTabId: {},
		isExpanded: {
			type: Boolean,
			default: false
		},
		isExpandDisabled: {
			type: Boolean,
			default: false
		},
		previewToggleLabel: { default: void 0 }
	},
	emits: ["togglePreview", "toggleExpanded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
		const tabListRef = ref(null);
		const sizeToggleLabel = computed(() => i18n.baseText(props.isExpanded ? "instanceAi.previewTabBar.collapse" : "instanceAi.previewTabBar.expand"));
		function handleToggleExpanded() {
			if (props.isExpandDisabled) return;
			emit("toggleExpanded");
		}
		function getTabListElement() {
			const tabList = tabListRef.value;
			if (tabList instanceof HTMLElement) return tabList;
			return tabList?.$el ?? null;
		}
		function scrollTabIntoView(tabId) {
			const tabList = getTabListElement();
			if (!tabList) return;
			const activeTab = Array.from(tabList.querySelectorAll("[data-tab-id]")).find((tab) => tab.dataset.tabId === tabId);
			if (!activeTab) return;
			const tabLeft = activeTab.offsetLeft;
			const tabRight = tabLeft + activeTab.offsetWidth;
			const visibleLeft = tabList.scrollLeft;
			const visibleRight = visibleLeft + tabList.clientWidth;
			const nextScrollLeft = tabLeft < visibleLeft ? tabLeft : tabRight > visibleRight ? tabRight - tabList.clientWidth : void 0;
			if (nextScrollLeft === void 0) return;
			if (typeof tabList.scrollTo === "function") tabList.scrollTo({
				left: nextScrollLeft,
				behavior: "smooth"
			});
			else tabList.scrollLeft = nextScrollLeft;
		}
		watch(() => props.activeTabId, (tabId) => {
			if (!tabId) return;
			nextTick(() => {
				scrollTabIntoView(tabId);
			});
		});
		function tabHref(tab) {
			if (tab.type === "workflow") return `/workflow/${tab.id}`;
			if (tab.type === "data-table") return tab.projectId ? `/projects/${tab.projectId}/datatables/${tab.id}` : "/home/datatables";
			if (tab.type === "agent") return tab.projectId ? `/projects/${tab.projectId}/agents/${tab.id}` : "/home/agents";
		}
		function handleOpenInEditor(tab) {
			const href = tabHref(tab);
			if (!href) return;
			window.open(href, "_blank", "noopener");
		}
		const { getSummary, refresh: refreshSummaries } = useArtifactTabSummaries(() => props.tabs);
		const hoverTarget = shallowRef(null);
		const hoveredTab = computed(() => {
			const target = hoverTarget.value;
			const tab = target && props.tabs.find(({ id }) => id === target.tabId);
			return tab ? {
				tab,
				reference: target.reference
			} : null;
		});
		const hoveredSummary = computed(() => hoveredTab.value ? getSummary(hoveredTab.value.tab) : void 0);
		const isHoveredSummaryLoading = computed(() => !!hoveredTab.value && hasTabSummary(hoveredTab.value.tab) && hoveredSummary.value === void 0);
		const hoveredStatus = computed(() => {
			const summary = hoveredSummary.value;
			if (!summary) return void 0;
			if (summary.type === "workflow") return {
				label: i18n.baseText(summary.published ? "workflows.published" : "instanceAi.previewTabBar.draft"),
				published: summary.published
			};
			return {
				label: i18n.baseText("dataTable.card.column.count", {
					adjustToNumber: summary.columnCount,
					interpolate: { count: summary.columnCount }
				}),
				published: false
			};
		});
		function setHoveredTab(target) {
			hoverTarget.value = target;
			if (!hoveredTab.value) {
				hoverTarget.value = null;
				return;
			}
			refreshSummaries([hoveredTab.value.tab]);
		}
		const { start: startOpenTimer, stop: stopOpenTimer } = useTimeoutFn(setHoveredTab, HOVER_DELAY.SHOW, { immediate: false });
		const { start: startCloseTimer, stop: stopCloseTimer } = useTimeoutFn(() => {
			hoverTarget.value = null;
		}, HOVER_DELAY.LEAVE, { immediate: false });
		let isPointerOnTab = false;
		function showTabHoverCard(tab, event) {
			if (!(event.currentTarget instanceof HTMLElement)) return;
			const target = {
				tabId: tab.id,
				reference: event.currentTarget
			};
			isPointerOnTab = true;
			stopCloseTimer();
			if (hoveredTab.value) setHoveredTab(target);
			else startOpenTimer(target);
		}
		function handleTabMouseLeave() {
			isPointerOnTab = false;
			scheduleHideTabHoverCard();
		}
		function scheduleHideTabHoverCard() {
			stopOpenTimer();
			if (hoveredTab.value) startCloseTimer();
		}
		function hideTabHoverCard() {
			stopOpenTimer();
			stopCloseTimer();
			hoverTarget.value = null;
		}
		watch(hoveredTab, (tab) => {
			if (!tab && hoverTarget.value) hideTabHoverCard();
		});
		function handleHoverCardOpenChange(open) {
			if (open) stopCloseTimer();
			else if (!isPointerOnTab) scheduleHideTabHoverCard();
		}
		async function handleCopyLink(tab) {
			const href = tabHref(tab);
			if (!href) return;
			const url = new URL(href, window.location.origin).toString();
			await clipboard.copy(url);
			toast.showMessage({
				title: i18n.baseText("generic.copiedToClipboard"),
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [
				__props.previewToggleLabel ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "panel-right",
					variant: "ghost",
					size: "medium",
					"aria-label": __props.previewToggleLabel,
					title: __props.previewToggleLabel,
					"aria-pressed": true,
					"data-test-id": "instance-ai-artifacts-preview-toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("togglePreview"))
				}, null, 8, ["aria-label", "title"])) : createCommentVNode("", true),
				createVNode(unref(TabsList_default), {
					ref_key: "tabListRef",
					ref: tabListRef,
					"aria-label": unref(i18n).baseText("instanceAi.artifactsPanel.title"),
					class: normalizeClass(_ctx.$style.tabList)
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
						return openBlock(), createBlock(unref(ContextMenuRoot_default), { key: tab.id }, {
							default: withCtx(() => [createVNode(unref(ContextMenuTrigger_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
									value: tab.id,
									"data-tab-id": tab.id,
									class: normalizeClass(_ctx.$style.tab),
									onMouseenter: ($event) => showTabHoverCard(tab, $event),
									onMouseleave: handleTabMouseLeave,
									onContextmenu: hideTabHoverCard
								}, {
									default: withCtx(() => [tab.building ? (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 0,
										icon: "spinner",
										size: "large",
										spin: "",
										class: normalizeClass(_ctx.$style.icon),
										"data-test-id": "instance-ai-tab-building-spinner"
									}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 1,
										icon: tab.icon,
										size: "large",
										class: normalizeClass(_ctx.$style.icon)
									}, null, 8, ["icon", "class"])), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(tab.name), 3)]),
									_: 2
								}, 1032, [
									"value",
									"data-tab-id",
									"class",
									"onMouseenter"
								])]),
								_: 2
							}, 1024), createVNode(unref(ContextMenuPortal_default), null, {
								default: withCtx(() => [createVNode(unref(ContextMenuContent_default), { class: normalizeClass(_ctx.$style.contextMenu) }, {
									default: withCtx(() => [createVNode(unref(ContextMenuItem_default), {
										class: normalizeClass(_ctx.$style.contextMenuItem),
										onSelect: ($event) => handleOpenInEditor(tab)
									}, {
										default: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "external-link",
											size: "small"
										}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.openInEditor")), 1)]),
										_: 1
									}, 8, ["class", "onSelect"]), createVNode(unref(ContextMenuItem_default), {
										class: normalizeClass(_ctx.$style.contextMenuItem),
										onSelect: ($event) => handleCopyLink(tab)
									}, {
										default: withCtx(() => [createVNode(unref(N8nIcon_default), {
											icon: "link",
											size: "small"
										}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.copyLink")), 1)]),
										_: 1
									}, 8, ["class", "onSelect"])]),
									_: 2
								}, 1032, ["class"])]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024);
					}), 128))]),
					_: 1
				}, 8, ["aria-label", "class"]),
				createVNode(unref(N8nHoverCard_default), {
					open: !!hoveredTab.value,
					"hide-trigger": "",
					reference: hoveredTab.value?.reference,
					side: "bottom",
					align: "center",
					"side-offset": 4,
					"open-delay": 0,
					"close-delay": 0,
					"content-class": _ctx.$style.hoverCard,
					"onUpdate:open": handleHoverCardOpenChange
				}, {
					content: withCtx(() => [hoveredTab.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.hoverCardBody),
						"data-test-id": "instance-ai-tab-hover-card"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hoverCardText) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.hoverCardName) }, toDisplayString(hoveredTab.value.tab.name), 3), hoveredSummary.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.hoverCardMeta)
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.edited")) + " ", 1), createVNode(TimeAgo_default, { date: hoveredSummary.value.updatedAt }, null, 8, ["date"])], 2)) : isHoveredSummaryLoading.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass([
							_ctx.$style.hoverCardMeta,
							_ctx.$style.placeholder,
							_ctx.$style.placeholderMeta
						]),
						"data-test-id": "instance-ai-tab-hover-card-placeholder"
					}, [createVNode(unref(N8nLoading_default), {
						variant: "custom",
						class: normalizeClass(_ctx.$style.placeholderSkeleton)
					}, null, 8, ["class"])], 2)) : createCommentVNode("", true)], 2), isHoveredSummaryLoading.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass([
							_ctx.$style.statusTag,
							_ctx.$style.placeholder,
							_ctx.$style.placeholderTag
						])
					}, [createVNode(unref(N8nLoading_default), {
						variant: "custom",
						class: normalizeClass(_ctx.$style.placeholderSkeleton)
					}, null, 8, ["class"])], 2)) : hoveredStatus.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass([_ctx.$style.statusTag, { [_ctx.$style.statusTagPublished]: hoveredStatus.value.published }]),
						"data-test-id": "instance-ai-tab-hover-card-status"
					}, toDisplayString(hoveredStatus.value.label), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"open",
					"reference",
					"content-class"
				]),
				createVNode(ManualEditorButton_default, {
					tabs: __props.tabs,
					"active-tab-id": __props.activeTabId
				}, null, 8, ["tabs", "active-tab-id"]),
				createVNode(unref(N8nIconButton_default), {
					icon: __props.isExpanded ? "minimize-2" : "maximize-2",
					variant: "ghost",
					size: "medium",
					disabled: __props.isExpandDisabled,
					"aria-label": sizeToggleLabel.value,
					title: __props.isExpandDisabled ? void 0 : sizeToggleLabel.value,
					"data-test-id": "instance-ai-preview-expand-toggle",
					onClick: handleToggleExpanded
				}, null, 8, [
					"icon",
					"disabled",
					"aria-label",
					"title"
				])
			], 2);
		};
	}
});
var InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1brmo_25",
	tabList: "_tabList_1brmo_36",
	scrollfade: "_scrollfade_1brmo_1",
	tab: "_tab_1brmo_36",
	label: "_label_1brmo_84",
	labelfade: "_labelfade_1brmo_1",
	icon: "_icon_1brmo_104",
	hoverCard: "_hoverCard_1brmo_108",
	hoverCardBody: "_hoverCardBody_1brmo_116",
	hoverCardText: "_hoverCardText_1brmo_123",
	hoverCardName: "_hoverCardName_1brmo_132",
	hoverCardMeta: "_hoverCardMeta_1brmo_138",
	placeholder: "_placeholder_1brmo_143",
	statusTag: "_statusTag_1brmo_149",
	placeholderSkeleton: "_placeholderSkeleton_1brmo_153",
	placeholderMeta: "_placeholderMeta_1brmo_158",
	placeholderTag: "_placeholderTag_1brmo_162",
	statusTagPublished: "_statusTagPublished_1brmo_177",
	contextMenu: "_contextMenu_1brmo_182",
	contextMenuItem: "_contextMenuItem_1brmo_192"
};
var InstanceAiPreviewTabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/OpenWorkflowInAssistantNotification.vue?vue&type=script&setup=true&lang.ts
var OpenWorkflowInAssistantNotification_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OpenWorkflowInAssistantNotification",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useOpenWorkflowInAssistantStore();
		const i18n = useI18n();
		const router = useRouter();
		const visible = computed(() => store.isNotificationVisibleFor(props.threadId));
		async function onSettingsLink() {
			store.closeNotification("settings_link");
			store.requestSettingHighlight();
			await router.push({ name: INSTANCE_AI_SETTINGS_VIEW });
		}
		return (_ctx, _cache) => {
			return visible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.notification),
				"data-test-id": "open-in-assistant-notification"
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					color: "primary",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.text")) + " ", 1), createVNode(unref(N8nLink_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.settingsLink),
						"data-test-id": "open-in-assistant-notification-settings-link",
						onClick: onSettingsLink
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.settingsLink")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})], 2),
				createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.close),
					"aria-label": unref(i18n).baseText("generic.close"),
					"data-test-id": "open-in-assistant-notification-close",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(store).closeNotification("close"))
				}, null, 8, ["class", "aria-label"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					label: unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.neverShowAgain"),
					"data-test-id": "open-in-assistant-notification-never",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(store).neverShowAgain())
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: unref(i18n).baseText("experiments.openWorkflowInAssistant.notification.gotIt"),
					"data-test-id": "open-in-assistant-notification-got-it",
					onClick: _cache[2] || (_cache[2] = ($event) => unref(store).closeNotification("got_it"))
				}, null, 8, ["label"])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/experiments/openWorkflowInAssistant/components/OpenWorkflowInAssistantNotification.vue?vue&type=style&index=0&lang.module.scss
var notification = "_notification_1wbsv_1";
var icon = "_icon_1wbsv_29";
var content$2 = "_content_1wbsv_33";
var settingsLink = "_settingsLink_1wbsv_39";
var close = "_close_1wbsv_43";
var actions = "_actions_1wbsv_47";
var OpenWorkflowInAssistantNotification_vue_vue_type_style_index_0_lang_module_default = {
	notification,
	"slide-in": "_slide-in_1wbsv_1",
	icon,
	content: content$2,
	settingsLink,
	close,
	actions
};
var OpenWorkflowInAssistantNotification_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OpenWorkflowInAssistantNotification_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OpenWorkflowInAssistantNotification_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHostBody.vue?vue&type=script&setup=true&lang.ts
var WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHostBody",
	props: {
		workflowId: {},
		refreshKey: {},
		initialWorkflow: {},
		initialExecution: {}
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const currentWorkflowDocumentStore = injectStrict(WorkflowDocumentStoreKey);
		const canvasStore = useCanvasStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const workflowSaveStore = useWorkflowSaveStore();
		const { isLoading, initializeData, initializeWorkflow, openWorkflow, cleanup } = useWorkflowInitialization();
		/**
		* Display-only counterpart of the editor's debug-mode execution loading: shows
		* the hand-off execution snapshot on the canvas. Seeds its per-execution store
		* and marks it the displayed execution — no fetch, since the editor already had
		* the run data and handed it over. A live or pending run always wins — it owns
		* `activeExecutionId`, which we never touch here. Unlike the editor's
		* `applyExecutionData` it has no debug side effects (node matching, pin-data).
		*/
		function showInitialExecution() {
			if (!props.initialExecution) return;
			const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(props.workflowId));
			if (executionState.activeExecutionId !== void 0) return;
			const { id } = props.initialExecution;
			useExecutionDataStore(createExecutionDataId(id)).setExecution(props.initialExecution);
			executionState.setDisplayedExecutionId(id);
		}
		async function loadWorkflow(force) {
			if (!force && props.initialWorkflow) {
				await openWorkflow(props.initialWorkflow);
				isLoading.value = false;
			} else await initializeWorkflow(force);
			if (currentWorkflowDocumentStore.value) emit("workflow-loaded", props.workflowId);
		}
		onMounted(async () => {
			await initializeData();
			await loadWorkflow(false);
			showInitialExecution();
			emit("ready");
		});
		watch(() => [props.workflowId, props.refreshKey], async () => {
			await loadWorkflow(true);
		});
		onBeforeUnmount(() => {
			cleanup();
			nodeCreatorStore.isCreateNodeActive = false;
			canvasStore.setHasRangeSelection(false);
			canvasStore.newNodeInsertPosition = null;
			workflowSaveStore.reset();
		});
		function requestFitView() {
			canvasEventBus.emit("fitView");
		}
		__expose({ requestFitView });
		const isReady = computed(() => !isLoading.value && !!currentWorkflowDocumentStore.value);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-canvas-host"
			}, [isReady.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(MainHeader_default, { class: normalizeClass(_ctx.$style.header) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvas) }, [createVNode(NodeView_default)], 2),
				createVNode(LogsPanel_default, { class: normalizeClass(_ctx.$style.logs) }, null, 8, ["class"])
			], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_8mfox_1",
	header: "_header_8mfox_10",
	canvas: "_canvas_8mfox_14",
	logs: "_logs_8mfox_20",
	centerState: "_centerState_8mfox_24"
};
var WorkflowCanvasHostBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHost.vue
var WorkflowCanvasHost_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHost",
	props: {
		workflowId: {},
		refreshKey: { default: 0 },
		initialWorkflow: { default: void 0 },
		initialExecution: { default: void 0 }
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		provide(WorkflowIdKey, computed(() => props.workflowId));
		provide(WorkflowDocumentStoreKey, shallowRef(null));
		const bodyRef = shallowRef(null);
		function requestFitView() {
			bodyRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowCanvasHostBody_default, {
				ref_key: "bodyRef",
				ref: bodyRef,
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": __props.initialWorkflow,
				"initial-execution": __props.initialExecution,
				onReady: _cache[0] || (_cache[0] = ($event) => emit("ready")),
				onWorkflowLoaded: _cache[1] || (_cache[1] = (id) => emit("workflow-loaded", id))
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiWorkflowPreviewExecution.ts
function hasPinData(pinData) {
	return pinData !== void 0 && Object.keys(pinData).length > 0;
}
function normalizeExecutionPinData(execution) {
	const data = execution.data;
	const resultData = data?.resultData;
	const workflowPinData = execution.workflowData.pinData;
	if (!data || !resultData || !hasPinData(workflowPinData) || hasPinData(resultData.pinData)) return execution;
	return {
		...execution,
		data: {
			...data,
			resultData: {
				...resultData,
				pinData: workflowPinData
			}
		}
	};
}
function useInstanceAiWorkflowPreviewExecution(options) {
	const pushStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const logsStore = useLogsStore();
	const aiSimulatedExecutionsStore = useAiSimulatedExecutionsStore();
	const thread = useThread();
	const latestAgentExecution = shallowRef();
	const supersededAgentExecutionId = shallowRef(null);
	let latestExecutionLoadRequest = 0;
	function applyExecution(execution) {
		const workflowId = options.workflowId();
		if (execution.workflowId !== workflowId) return false;
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		const activeExecutionId = executionState.activeExecutionId;
		if (activeExecutionId === null) return false;
		if (typeof activeExecutionId === "string" && activeExecutionId !== execution.id) return false;
		executionState.setWorkflowExecutionData(normalizeExecutionPinData(execution));
		return true;
	}
	function hasManualExecution() {
		return thread.getRememberedManualExecution(options.workflowId()) !== void 0;
	}
	async function fetchPreviewExecution(executionId) {
		const request = ++latestExecutionLoadRequest;
		let execution;
		try {
			execution = await workflowsStore.fetchExecutionDataById(executionId);
		} catch {
			return;
		}
		if (request !== latestExecutionLoadRequest) return;
		if (!execution || execution.workflowId !== options.workflowId()) return;
		return normalizeExecutionPinData(execution);
	}
	function restoreLatestAgentExecution() {
		if (hasManualExecution()) return;
		const execution = latestAgentExecution.value;
		if (!execution) return;
		if (supersededAgentExecutionId.value === execution.id) return;
		applyExecution(execution);
	}
	async function showExecutionResult(executionResult) {
		if (!executionResult) return;
		if (executionResult.simulatedNodeNames?.length) aiSimulatedExecutionsStore.markSimulatedNodes(executionResult.executionId, executionResult.simulatedNodeNames);
		if (hasManualExecution()) return;
		if (supersededAgentExecutionId.value === executionResult.executionId) return;
		if (latestAgentExecution.value?.id === executionResult.executionId) {
			applyExecution(latestAgentExecution.value);
			return;
		}
		const execution = await fetchPreviewExecution(executionResult.executionId);
		if (!execution) return;
		latestAgentExecution.value = execution;
		if (supersededAgentExecutionId.value !== execution.id) applyExecution(execution);
	}
	async function restoreManualExecution(executionId) {
		const execution = await fetchPreviewExecution(executionId);
		if (execution) applyExecution(execution);
	}
	function restoreExecutionResult() {
		const manual = thread.getRememberedManualExecution(options.workflowId());
		if (manual && options.executionResult()?.executionId === manual.agentExecutionId) {
			restoreManualExecution(manual.executionId);
			return;
		}
		if (manual) thread.forgetManualExecution(options.workflowId());
		showExecutionResult(options.executionResult());
	}
	const removeExecutionStartedListener = pushStore.addEventListener((event) => {
		if (event.type !== "executionStarted") return;
		if (event.data.workflowId !== options.workflowId()) return;
		logsStore.toggleOpen(true);
		const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(options.workflowId()));
		if (event.data.source !== "instance_ai") {
			thread.rememberManualExecution(options.workflowId(), event.data.executionId, options.executionResult()?.executionId);
			supersededAgentExecutionId.value = options.executionResult()?.executionId ?? null;
			return;
		}
		thread.forgetManualExecution(options.workflowId());
		if (typeof executionState.activeExecutionId === "string" && executionState.activeExecutionId !== event.data.executionId) return;
		executionState.setActiveExecutionId(null);
	});
	const removeExecutionFinishedListener = pushStore.addEventListener((event) => {
		if (event.type !== "executionFinished") return;
		if (event.data.workflowId !== options.workflowId()) return;
		if (event.data.status !== "error" && event.data.status !== "crashed") return;
		if (event.data.source === "instance_ai") return;
		options.reportWorkflowFailures(event.data.executionId, event.data.workflowId);
	});
	watch(() => [options.workflowId(), options.executionResult()?.executionId], () => {
		showExecutionResult(options.executionResult());
	}, { immediate: true });
	watch(() => {
		const workflowId = options.workflowId();
		return [workflowId, useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId)).activeExecutionId];
	}, () => {
		restoreLatestAgentExecution();
	});
	onBeforeUnmount(() => {
		removeExecutionStartedListener();
		removeExecutionFinishedListener();
	});
	return { restoreExecutionResult };
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowPreview",
	props: {
		workflowId: {},
		initialNodeId: { default: void 0 },
		refreshKey: { default: 0 },
		executionResult: { default: void 0 }
	},
	emits: ["initial-node-id-consumed", "workflow-failures"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hostRef = useTemplateRef("host");
		function requestFitView() {
			hostRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		function collectNodeErrors(runData) {
			const errors = [];
			for (const [nodeName, tasks] of Object.entries(runData ?? {})) {
				const error = tasks?.at(-1)?.error;
				if (!error) continue;
				const description = error.description ? ` (${error.description})` : "";
				errors.push({
					nodeName,
					errorMessage: `${error.message ?? "Unknown error"}${description}`
				});
			}
			return errors;
		}
		function collectValidationIssues(workflowId) {
			const docStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
			const errors = [];
			for (const node of docStore.allNodes) {
				if (!node.issues) continue;
				const messages = nodeIssuesToString(node.issues, node);
				if (messages.length === 0) continue;
				errors.push({
					nodeName: node.name,
					errorMessage: messages.join(" ")
				});
			}
			return errors;
		}
		function reportWorkflowFailures(executionId, workflowId) {
			let errors = collectNodeErrors(useExecutionDataStore(createExecutionDataId(executionId)).executionRunData);
			if (errors.length === 0) errors = collectValidationIssues(workflowId);
			if (errors.length === 0) return;
			emit("workflow-failures", {
				workflowId,
				executionId,
				errors
			});
		}
		const { restoreExecutionResult } = useInstanceAiWorkflowPreviewExecution({
			workflowId: () => props.workflowId,
			executionResult: () => props.executionResult,
			reportWorkflowFailures
		});
		let pendingInitialNodeId = props.initialNodeId;
		function handleWorkflowLoaded(workflowId) {
			restoreExecutionResult();
			const nodeId = pendingInitialNodeId;
			pendingInitialNodeId = void 0;
			if (!nodeId) return;
			emit("initial-node-id-consumed");
			const documentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
			const node = documentStore.getNodeById(nodeId);
			if (!node) return;
			useNDVStore(documentStore.documentId).setActiveNodeName(node.name, "other");
		}
		const thread = useThread();
		const isAgentWorking = useIsAgentWorking();
		const settingsStore = useInstanceAiSettingsStore();
		const handoff = thread.consumePendingHandoff(props.workflowId);
		const initialWorkflow = handoff?.workflow;
		const initialExecution = handoff?.execution;
		const isAgentEditingThisWorkflow = computed(() => {
			for (const message of thread.messages) {
				if (!message.agentTree) continue;
				if (isAgentEditingWorkflow(message.agentTree, props.workflowId)) return true;
			}
			return false;
		});
		provide(EditorEnabledFeaturesKey, computed(() => ({
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			readOnly: isAgentWorking.value || isAgentEditingThisWorkflow.value,
			executionSuccessToasts: false,
			executionErrorToasts: false,
			executionButtonType: "secondary",
			credentialSetupWarnings: settingsStore.isInstanceAiSetupPanelEnabled
		})));
		const rootStore = useRootStore();
		provide(InstanceAiEditorCapabilityKey, { openCredential: async (credential) => {
			thread.sendMessage(buildInstanceAiArtifactCredentialQuestion(credential), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_credential_setup"
				},
				pushRef: rootStore.pushRef,
				handoffContext: buildInstanceAiCredentialHandoffContext(credential)
			});
			return true;
		} });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(WorkflowCanvasHost_default, {
				ref: "host",
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": unref(initialWorkflow),
				"initial-execution": unref(initialExecution),
				onWorkflowLoaded: handleWorkflowLoaded
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			])], 2);
		};
	}
});
var InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default = { content: "_content_x1wv5_1" };
var InstanceAiWorkflowPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/fixWithAi.ts
function buildFixWithAiPrompt(context) {
	const i18n = useI18n();
	if (context.errors.length === 1) {
		const { nodeName, errorMessage } = context.errors[0];
		if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.singleInWorkflow", { interpolate: {
			nodeName,
			errorMessage,
			workflowName: context.workflowName
		} });
		return i18n.baseText("instanceAi.fixWithAi.prompt.single", { interpolate: {
			nodeName,
			errorMessage
		} });
	}
	const errorList = context.errors.map(({ nodeName, errorMessage }) => i18n.baseText("instanceAi.fixWithAi.prompt.errorLine", { interpolate: {
		nodeName,
		errorMessage
	} })).join("\n");
	if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.multipleInWorkflow", { interpolate: {
		errorList,
		workflowName: context.workflowName
	} });
	return i18n.baseText("instanceAi.fixWithAi.prompt.multiple", { interpolate: { errorList } });
}
//#endregion
//#region src/features/ai/instanceAi/testAgentOffer.ts
/**
* Dismissal key for the "test your agent" suggestion, stored alongside the
* handoff-context keys in `dismissedContextKeys`. Scoped per agent so
* dismissing it for one agent doesn't suppress it for another built later in
* the same thread.
*/
function testAgentOfferKey(agentId) {
	return `test-agent:${agentId}`;
}
/**
* Whether an agent is set up enough to be worth testing.
*
* A model alone isn't enough — an agent with no tools and no skills has almost
* no behaviour to get wrong, so generated cases would only exercise the model's
* prose. Requiring one capability is what makes the suggestion land at the
* moment the design describes ("your agent is set up") rather than the moment
* the row was created.
*/
function isAgentWorthTesting(summary) {
	if (!summary?.model) return false;
	return summary.tools.length + summary.skills.length > 0;
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDataTablePreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDataTablePreview",
	props: {
		dataTableId: {},
		projectId: {},
		refreshKey: { default: 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const dataTableStore = useDataTableStore();
		const sourceControlStore = useSourceControlStore();
		const dataTable = ref(null);
		const isLoading = ref(false);
		const fetchError = ref(null);
		const isAgentWorking = useIsAgentWorking();
		const isReadOnly = computed(() => isAgentWorking.value || sourceControlStore.preferences.branchReadOnly);
		async function fetchDataTable(id, projectId) {
			const isRefresh = dataTable.value?.id === id;
			fetchError.value = null;
			if (!isRefresh) {
				isLoading.value = true;
				dataTable.value = null;
			}
			try {
				const result = await dataTableStore.fetchDataTableDetails(id, projectId);
				dataTable.value = result ?? null;
				if (!result) fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} catch {
				dataTable.value = null;
				fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} finally {
				isLoading.value = false;
			}
		}
		watch(() => [props.dataTableId, props.refreshKey], async ([id]) => {
			if (id && props.projectId) await fetchDataTable(id, props.projectId);
			else {
				dataTable.value = null;
				fetchError.value = null;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [
				fetchError.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(fetchError.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				dataTable.value ? (openBlock(), createBlock(DataTableTable_default, {
					key: `${props.refreshKey}-${isReadOnly.value}`,
					"data-table": dataTable.value,
					"read-only": isReadOnly.value
				}, null, 8, ["data-table", "read-only"])) : createCommentVNode("", true),
				isLoading.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "loader-circle",
					size: 80,
					spin: ""
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1347i_1",
	centerState: "_centerState_1347i_8"
};
var InstanceAiDataTablePreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiAgentPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiAgentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiAgentPreview",
	props: {
		projectId: {},
		agentId: {},
		previewSessionId: {},
		previewOpen: { type: Boolean },
		pending: { type: Boolean }
	},
	emits: ["preview-open-change", "assistant-handoff"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const thread = useThread();
		const instanceAiStore = useInstanceAiStore();
		const rootStore = useRootStore();
		/**
		* Props of an unmounted instance keep their last values, so a target comparison
		* alone cannot tell "still showing this artifact" from "torn down while the
		* request was in flight". Both must be false before a response touches shared
		* thread state.
		*/
		let mounted = true;
		onBeforeUnmount(() => {
			mounted = false;
		});
		const isAgentBuilding = computed(() => {
			for (const message of thread.messages) {
				if (!message.agentTree) continue;
				if (isAgentEditingAgent(message.agentTree, props.agentId)) return true;
			}
			return false;
		});
		const showBuildingIndicator = computed(() => isAgentBuilding.value || thread.activeArtifactId === props.agentId && (thread.isSendingMessage || thread.isStreaming));
		async function syncAgentTarget(name) {
			const metadata = instanceAiStore.getThreadMetadata(thread.id);
			const target = getAgentBuilderTargetFromThreadMetadata(metadata);
			const pendingTarget = getPendingAgentTargetFromThreadMetadata(metadata);
			if (target?.agentId === props.agentId && target.projectId === props.projectId && target.name === name && !pendingTarget) return;
			await instanceAiStore.updateThreadMetadata(thread.id, {
				[INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: null,
				[INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
					agentId: props.agentId,
					projectId: props.projectId,
					name
				}
			});
		}
		/**
		* Persist the pending artifact: one request creates (or adopts, when the chat
		* already created it under the same id) the agent and replaces this thread's
		* pending marker with the bound target. The builder treats resolution as the
		* acknowledgement, so the binding is durable before it stops drafting.
		*/
		async function persistAgent(name) {
			const target = {
				projectId: props.projectId,
				agentId: props.agentId
			};
			const { agent, thread: updatedThread } = await persistPendingAgent(rootStore.restApiContext, thread.id, {
				...target,
				name
			});
			if (mounted && props.projectId === target.projectId && props.agentId === target.agentId) instanceAiStore.setThreadMetadata(thread.id, updatedThread.metadata);
			return agent;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createVNode(Transition, { name: "agent-building-indicator" }, {
				default: withCtx(() => [showBuildingIndicator.value ? (openBlock(), createBlock(AgentBuildingIndicator_default, { key: 0 })) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(AgentBuilderView_default, {
				"artifact-mode": "",
				"artifact-project-id": props.projectId,
				"artifact-agent-id": props.agentId,
				"artifact-preview-session-id": props.previewSessionId,
				"artifact-preview-open": props.previewOpen,
				"artifact-agent-pending": props.pending,
				"artifact-editing-locked": isAgentBuilding.value,
				"artifact-persist-agent": persistAgent,
				onPreviewOpenChange: _cache[0] || (_cache[0] = ($event) => emit("preview-open-change", $event)),
				onAssistantHandoff: _cache[1] || (_cache[1] = ($event) => emit("assistant-handoff", $event)),
				onNameSaved: syncAgentTarget
			}, null, 8, [
				"artifact-project-id",
				"artifact-agent-id",
				"artifact-preview-session-id",
				"artifact-preview-open",
				"artifact-agent-pending",
				"artifact-editing-locked"
			])], 2);
		};
	}
});
var InstanceAiAgentPreview_vue_vue_type_style_index_0_lang_module_default = { root: "_root_1tkty_1" };
var InstanceAiAgentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiAgentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiAgentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiThreadView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-layout-animated"];
var _hoisted_2 = ["data-layout-transitions-enabled"];
var _hoisted_3 = ["data-expanded"];
var MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL = 900;
var MIN_SPLIT_PANEL_WIDTH = 400;
var DEFAULT_CHAT_PANEL_CONTENT_WIDTH = 800;
var AGENT_PREVIEW_CHAT_MIN_WIDTH = 320;
var AGENT_PREVIEW_CHAT_PREFERRED_WIDTH = 480;
var AGENT_PREVIEW_CHAT_MAX_RATIO = .5;
/** Keep the agent chat readable without using more than half of its preview panel. */
var InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadView",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const thread = provideThread(props.threadId);
		const rootStore = useRootStore();
		const i18n = useI18n();
		const router = useRouter();
		const { width: windowWidth } = useWindowSize();
		const { isCollapsed: isMainSidebarCollapsed, sidebarWidth: mainSidebarWidth } = useSidebarLayout();
		const toast = useToast();
		const recentWorkflowsStore = useRecentWorkflowsStore();
		const mentionsEnabled = useIsAssistantAtMentionsEnabled();
		const conversationRef = useTemplateRef("conversation");
		const handoffContext = computed(() => conversationRef.value?.pendingComposerContext ?? null);
		function onThreadMissing() {
			if (router.currentRoute.value.params.threadId !== props.threadId) return;
			router.replace({ name: INSTANCE_AI_VIEW });
		}
		function onAgentAttachmentRestored(attachment) {
			preview.openAgentPreview(attachment.id, attachment.projectId);
		}
		const failedRun = ref(null);
		const dismissedExecutionId = ref(null);
		const isChatInProgress = computed(() => thread.isStreaming || thread.isSendingMessage || thread.isAwaitingConfirmation);
		const activeFixWithAiOffer = computed(() => {
			const run = failedRun.value;
			if (!run) return null;
			if (run.executionId === dismissedExecutionId.value) return null;
			if (isChatInProgress.value) return null;
			return {
				...run,
				workflowName: thread.producedArtifacts.get(run.workflowId)?.name
			};
		});
		const isAgentEvalsEnabled = useAgentEvalsFlag();
		const agentEvalsStore = useAgentEvalsStore();
		const isAgentWorking = useIsAgentWorking(thread);
		const agentBuilderTarget = computed(() => getAgentBuilderTargetFromThreadMetadata(store.getThreadMetadata(thread.id)));
		/**
		* The agent this thread would offer to test, before the checks that need its
		* capabilities. Resolves to null for the conditions we can decide without a
		* network call — flag off, nothing built, already dismissed — so the capability
		* summary is never fetched for a card the user will not be shown.
		*/
		const testAgentOfferCandidate = computed(() => {
			if (!isAgentEvalsEnabled.value) return null;
			const target = agentBuilderTarget.value;
			if (!target) return null;
			return new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id))).has(testAgentOfferKey(target.agentId)) ? null : target;
		});
		const offerAgentId = computed(() => testAgentOfferCandidate.value?.agentId ?? "");
		const { summary: offerAgentSummary } = useAgentCapabilitySummary(computed(() => testAgentOfferCandidate.value?.projectId ?? ""), offerAgentId);
		const activeTestAgentOffer = computed(() => {
			const target = testAgentOfferCandidate.value;
			if (!target) return null;
			if (isAgentWorking.value) return null;
			if (agentEvalsStore.isLoaded(target.agentId) && agentEvalsStore.getDatasets(target.agentId).length) return null;
			if (!isAgentWorthTesting(offerAgentSummary.value)) return null;
			return target;
		});
		const currentThreadTitle = computed(() => getThreadDisplayTitle(store.threads.find((t) => t.id === props.threadId), thread.messages));
		const isOnboardingChromeHidden = computed(() => store.isOnboardingChromeHidden(props.threadId));
		const documentTitle = useDocumentTitle();
		watch(currentThreadTitle, (title) => documentTitle.set(title ?? i18n.baseText("instanceAi.view.title")), { immediate: true });
		const persistedArtifactPreviewOpen = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_ARTIFACT_PREVIEW_OPEN(props.threadId), null, {
			serializer: StorageSerializers.boolean,
			writeDefaults: false,
			flush: "sync"
		});
		const preview = useCanvasPreview({
			thread,
			threadId: () => props.threadId,
			initialAgentId: () => getAgentBuilderTargetFromThreadMetadata(store.getThreadMetadata(props.threadId))?.agentId,
			previewOpenState: () => persistedArtifactPreviewOpen.value ?? void 0,
			onPreviewOpenChange: (open) => {
				persistedArtifactPreviewOpen.value = open;
			}
		});
		watch([() => preview.activeTabId.value, () => preview.isPreviewVisible.value], ([tabId, previewVisible]) => {
			thread.setActiveArtifactId(previewVisible ? tabId : void 0);
		}, { immediate: true });
		const setupPanelWorkflowId = computed(() => {
			if (!settingsStore.isInstanceAiSetupPanelEnabled) return void 0;
			const active = preview.activeWorkflowId.value;
			if (preview.activeTabId.value) return active ?? void 0;
			let latest;
			for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow") latest = entry.id;
			return latest ?? thread.latestSetupWorkflowId;
		});
		const setupPanelProjectId = computed(() => setupPanelWorkflowId.value ? thread.producedArtifacts.get(setupPanelWorkflowId.value)?.projectId : void 0);
		const setupOverlapHeight = ref(0);
		const setupPanelRef = useTemplateRef("setupPanel");
		onUnmounted(thread.registerSetupChatTelemetryContext(() => {
			const context = setupPanelRef.value?.getChatTelemetryContext();
			return context?.workflow_id === setupPanelWorkflowId.value ? context : void 0;
		}));
		const agentReturnContext = useAgentReturnContextStore().consumePendingArtifactReturn();
		const agentReturnWorkflowId = agentReturnContext?.workflowId;
		const agentReturnNodeId = ref(agentReturnContext?.nodeId);
		if (agentReturnWorkflowId) preview.openWorkflowPreview(agentReturnWorkflowId);
		function consumeAgentReturnNodeId() {
			agentReturnNodeId.value = void 0;
		}
		function openAgentChatPreview(agentId, projectId) {
			preview.openAgentPreview(agentId, projectId);
			isAgentPreviewDockOpen.value = true;
			return true;
		}
		function openWorkflowPreview(workflowId) {
			const artifact = thread.producedArtifacts.get(workflowId);
			recentWorkflowsStore.registerWorkflowOpen(workflowId, artifact?.projectId ?? thread.projectId);
			return preview.openWorkflowPreview(workflowId);
		}
		function selectArtifactTab(tabId) {
			const artifact = thread.producedArtifacts.get(tabId);
			if (artifact?.type === "workflow") recentWorkflowsStore.registerWorkflowOpen(tabId, artifact.projectId ?? thread.projectId);
			preview.selectTab(tabId);
		}
		const activeAgentPreviewSessionId = computed(() => {
			const context = handoffContext.value;
			if (context?.source === "agent-preview" && context.agentId === preview.activeAgentId.value) return context.threadId;
			const metadata = store.getThreadMetadata(props.threadId);
			const persisted = getAgentPreviewViewFromThreadMetadata(metadata) ?? getAgentPreviewSessionFromThreadMetadata(metadata);
			return persisted?.agentId === preview.activeAgentId.value ? persisted.threadId : void 0;
		});
		provide("openWorkflowPreview", openWorkflowPreview);
		provide("openDataTablePreview", preview.openDataTablePreview);
		provide("openAgentPreview", preview.openAgentPreview);
		provide("openAgentChatPreview", openAgentChatPreview);
		provide("pendingComposerContext", handoffContext);
		provide("dismissPendingComposerContext", (key) => conversationRef.value?.dismissPendingComposerContext(key) ?? false);
		const showDebugPanel = ref(false);
		const isDebugEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true");
		const hasPreviewTabs = computed(() => preview.allArtifactTabs.value.length > 0);
		const isArtifactsPanelRevealed = ref(false);
		const isArtifactsPanelDismissedInLayout = ref(false);
		const artifactsPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const previewPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const isArtifactsPanelTransitionEnabled = artifactsPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitionEnabled = previewPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitioning = ref(false);
		const artifactsPreviewToggleLabel = computed(() => i18n.baseText(preview.isPreviewVisible.value ? "instanceAi.artifactsPanel.hidePreview" : "instanceAi.artifactsPanel.showPreview"));
		const artifactsPanelToggleLabel = computed(() => i18n.baseText(showArtifactsPanel.value ? "instanceAi.artifactsPanel.hidePanel" : "instanceAi.artifactsPanel.showPanel"));
		const artifactsPanelTransitionName = computed(() => isPreviewPanelTransitioning.value ? "artifacts-panel-preview" : "artifacts-panel-fade");
		function toggleArtifactsPreview() {
			if (preview.isPreviewVisible.value) {
				preview.closePreview();
				return;
			}
			const tabToOpen = preview.allArtifactTabs.value.find((tab) => tab.id === preview.activeTabId.value) ?? preview.allArtifactTabs.value[0];
			if (tabToOpen) selectArtifactTab(tabToOpen.id);
		}
		function toggleArtifactsPanel() {
			if (!canShowArtifactsPanel.value || preview.isPreviewVisible.value) return;
			if (showArtifactsPanel.value) {
				if (isArtifactsPanelInLayout.value) {
					isArtifactsPanelDismissedInLayout.value = true;
					return;
				}
				isArtifactsPanelRevealed.value = false;
				return;
			}
			if (isArtifactsPanelInLayout.value) {
				isArtifactsPanelDismissedInLayout.value = false;
				return;
			}
			isArtifactsPanelRevealed.value = true;
		}
		function enablePanelTransitionsAfterStableRender() {
			artifactsPanelTransitionGate.enableAfterStableRender();
			previewPanelTransitionGate.enableAfterStableRender();
		}
		function suppressPanelTransitionsUntilStableRender() {
			artifactsPanelTransitionGate.suppressUntilStableRender();
			previewPanelTransitionGate.suppressUntilStableRender();
		}
		const { width: threadAreaWidth } = useElementSize(useTemplateRef("threadArea"));
		const mainSidebarOccupiedWidth = computed(() => isMainSidebarCollapsed.value ? 42 : mainSidebarWidth.value ?? 0);
		const availableWidthForPinnedArtifactsPanel = computed(() => windowWidth.value - mainSidebarOccupiedWidth.value);
		const isArtifactsPanelInLayout = computed(() => availableWidthForPinnedArtifactsPanel.value >= MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL);
		const canShowArtifactsPanel = computed(() => thread.hasMessages || preview.allArtifactTabs.value.length > 0 || Boolean(props.threadId) && thread.isHydratingThread);
		const showArtifactsPanel = computed(() => canShowArtifactsPanel.value && !isOnboardingChromeHidden.value && !preview.isPreviewVisible.value && (isArtifactsPanelInLayout.value ? !isArtifactsPanelDismissedInLayout.value : isArtifactsPanelRevealed.value));
		const showArtifactsPanelToggle = computed(() => canShowArtifactsPanel.value && !preview.isPreviewVisible.value);
		const reserveArtifactsPanelLayout = computed(() => showArtifactsPanel.value && isArtifactsPanelInLayout.value);
		const shouldAnimateArtifactsPanel = computed(() => isArtifactsPanelTransitionEnabled.value && isArtifactsPanelInLayout.value);
		const shouldSuppressContentLayoutTransitions = computed(() => !isPreviewPanelTransitionEnabled.value);
		const artifactsPanelSlotRef = useTemplateRef("artifactsPanelSlot");
		const isResizingPreview = ref(false);
		const isThreadAreaResizing = ref(false);
		const isPreviewExpanded = ref(false);
		const isAgentPreviewDockOpen = ref(false);
		const chatPanelWidthRatio = useLocalStorage(LOCAL_STORAGE_INSTANCE_AI_CHAT_PANEL_WIDTH_RATIO, -1, { writeDefaults: false });
		watch(() => store.composerFocusRequest, () => {
			isPreviewExpanded.value = false;
		});
		watch(preview.activeTabId, (activeTabId, previousActiveTabId) => {
			if (activeTabId !== previousActiveTabId) isAgentPreviewDockOpen.value = false;
		}, { flush: "sync" });
		const halfThreadAreaWidth = computed(() => Math.round(threadAreaWidth.value / 2));
		const previewMinWidth = computed(() => Math.min(MIN_SPLIT_PANEL_WIDTH, halfThreadAreaWidth.value));
		const previewMaxWidth = computed(() => Math.max(threadAreaWidth.value - MIN_SPLIT_PANEL_WIDTH, halfThreadAreaWidth.value));
		const previewPanelWidth = computed(() => {
			const ratio = chatPanelWidthRatio.value;
			const chatPanelWidth = ratio >= 0 && ratio <= 1 ? threadAreaWidth.value * ratio : DEFAULT_CHAT_PANEL_CONTENT_WIDTH;
			return Math.round(Math.min(Math.max(threadAreaWidth.value - chatPanelWidth, previewMinWidth.value), previewMaxWidth.value));
		});
		const isPreviewResizeEnabled = computed(() => !isPreviewExpanded.value && previewMinWidth.value < previewMaxWidth.value);
		const shouldAnimatePreviewLayout = computed(() => isPreviewPanelTransitionEnabled.value && !isResizingPreview.value && !isThreadAreaResizing.value);
		const agentPreviewChatColumnWidth = computed(() => {
			const maximumWidth = (isPreviewExpanded.value ? threadAreaWidth.value : previewPanelWidth.value) * AGENT_PREVIEW_CHAT_MAX_RATIO;
			return Math.round(Math.max(Math.min(AGENT_PREVIEW_CHAT_MIN_WIDTH, maximumWidth), Math.min(AGENT_PREVIEW_CHAT_PREFERRED_WIDTH, maximumWidth)));
		});
		/** Add custom width to Agent Preview chat when canvas area is full expanded. */
		const agentPreviewPanelStyle = computed(() => {
			const chatColumnWidth = { "--agent-preview-chat-column-width": `${agentPreviewChatColumnWidth.value}px` };
			return isPreviewExpanded.value ? chatColumnWidth : {
				...chatColumnWidth,
				width: `${previewPanelWidth.value}px`
			};
		});
		function togglePreviewExpanded() {
			isPreviewExpanded.value = !isPreviewExpanded.value;
		}
		function handleAgentPreviewDockOpenChange(open) {
			isAgentPreviewDockOpen.value = open;
		}
		function handlePreviewResize({ width }) {
			if (Math.round(width) === previewPanelWidth.value) return;
			chatPanelWidthRatio.value = (threadAreaWidth.value - width) / threadAreaWidth.value;
		}
		function handlePreviewPanelAfterEnter() {
			isPreviewPanelTransitioning.value = false;
			workflowPreviewRef.value?.requestFitView();
		}
		function handlePreviewPanelAfterLeave() {
			isPreviewPanelTransitioning.value = false;
			isPreviewExpanded.value = false;
		}
		watch(preview.isPreviewVisible, (visible, wasVisible) => {
			if (visible !== wasVisible) isPreviewPanelTransitioning.value = isPreviewPanelTransitionEnabled.value;
			if (!visible) isAgentPreviewDockOpen.value = false;
			else isArtifactsPanelRevealed.value = false;
		}, { flush: "sync" });
		const finishThreadAreaResize = useDebounceFn(() => {
			isThreadAreaResizing.value = false;
		}, getDebounceTime(DEBOUNCE_TIME.UI.RESIZE));
		watch(threadAreaWidth, (width, previousWidth) => {
			if (typeof previousWidth === "number" && previousWidth > 0 && width !== previousWidth && preview.isPreviewVisible.value) {
				isThreadAreaResizing.value = true;
				finishThreadAreaResize();
			}
		}, { immediate: true });
		watch(isArtifactsPanelInLayout, (isInLayout) => {
			isArtifactsPanelRevealed.value = false;
			if (isInLayout) isArtifactsPanelDismissedInLayout.value = false;
		});
		watch(canShowArtifactsPanel, (canShow) => {
			if (!canShow) {
				isArtifactsPanelRevealed.value = false;
				isArtifactsPanelDismissedInLayout.value = false;
			}
		});
		onClickOutside(artifactsPanelSlotRef, () => {
			if (isArtifactsPanelInLayout.value) return;
			isArtifactsPanelRevealed.value = false;
		}, { ignore: ["[data-test-id=\"instance-ai-artifacts-panel-toggle\"]", ".n8n-tooltip"] });
		watch(() => props.threadId, (threadId, previousThreadId) => {
			if (threadId !== previousThreadId) {
				isAgentPreviewDockOpen.value = false;
				suppressPanelTransitionsUntilStableRender();
			}
		});
		watch(() => thread.isHydratingThread, (isHydrating) => {
			if (isHydrating) {
				artifactsPanelTransitionGate.suppress();
				previewPanelTransitionGate.suppress();
				return;
			}
			suppressPanelTransitionsUntilStableRender();
		});
		onMounted(() => {
			enablePanelTransitionsAfterStableRender();
		});
		onUnmounted(() => {
			if (router.currentRoute.value.params.threadId !== props.threadId) {
				store.disposeRuntime(props.threadId);
				const offeredAgentId = agentBuilderTarget.value?.agentId;
				if (offeredAgentId) agentEvalsStore.clearEvalsFocus(offeredAgentId);
			}
		});
		const workflowPreviewRef = useTemplateRef("workflowPreview");
		function handleFixWithAiFromOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
			conversationRef.value?.resetScroll();
			thread.sendMessage(buildFixWithAiPrompt({
				workflowName: offer.workflowName,
				errors: offer.errors
			}), {
				authorship: {
					kind: "prefill",
					prefillType: "handoff_fix_with_ai"
				},
				pushRef: rootStore.pushRef
			});
		}
		function dismissFixWithAiOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
		}
		function handleWorkflowFailures(report) {
			failedRun.value = report;
		}
		function handleAgentPreviewAssistantHandoff(params) {
			if (params.agentId !== preview.activeAgentId.value || params.projectId !== preview.activeAgentProjectId.value) return;
			if (conversationRef.value?.isDirty()) {
				toast.showMessage({
					title: i18n.baseText("instanceAi.input.finishDraftBeforeHandoff.title"),
					message: i18n.baseText("instanceAi.input.finishDraftBeforeHandoff.message"),
					type: "warning"
				});
				return;
			}
			isAgentPreviewDockOpen.value = false;
			conversationRef.value?.applyHandoff(buildInstanceAiAgentPreviewHandoffContext(params), params.initialDraft);
		}
		/**
		* Reveal the agent artifact, then hand off to the builder to select its Evals
		* tab and generate. Generation deliberately stays in the builder: it already
		* owns the call, its loading flag and its error toast, so driving it from here
		* would be a second call site for the same operation.
		*/
		async function handleGenerateTestCasesFromOffer() {
			const target = activeTestAgentOffer.value;
			if (!target) return;
			agentEvalsStore.requestEvalsFocus(target.agentId, true);
			preview.openAgentPreview(target.agentId, target.projectId);
			await persistTestAgentOfferDismissal(target.agentId);
		}
		async function dismissTestAgentOffer() {
			const target = activeTestAgentOffer.value;
			if (!target) return;
			await persistTestAgentOfferDismissal(target.agentId);
		}
		async function persistTestAgentOfferDismissal(agentId) {
			const dismissedKeys = new Set(getDismissedContextKeys(store.getThreadMetadata(thread.id)));
			dismissedKeys.add(testAgentOfferKey(agentId));
			await store.updateThreadMetadata(thread.id, { dismissedContextKeys: [...dismissedKeys] });
		}
		function handleNewThreadClick() {
			router.push({ name: INSTANCE_AI_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "threadArea",
				class: normalizeClass([_ctx.$style.threadArea, { agentPreviewDockOpen: isAgentPreviewDockOpen.value }]),
				"data-test-id": "instance-ai-thread-area"
			}, [
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.chatArea, { [_ctx.$style.agentPreviewLayoutTransition]: shouldAnimatePreviewLayout.value }]),
					"data-layout-animated": shouldAnimatePreviewLayout.value,
					"data-test-id": "instance-ai-builder-chat"
				}, [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.builderChatHeader, { [_ctx.$style.chromeHidden]: isOnboardingChromeHidden.value }]),
					"data-test-id": "instance-ai-builder-chat-header"
				}, [createVNode(InstanceAiViewHeader_default, { "show-thread-history-label": !currentThreadTitle.value }, {
					title: withCtx(() => [currentThreadTitle.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h2",
						bold: "",
						size: "small",
						class: normalizeClass(_ctx.$style.headerTitle)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentThreadTitle.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), unref(thread).sseState === "reconnecting" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.reconnecting)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.view.reconnecting")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					actions: withCtx(() => [
						createVNode(unref(N8nTooltip_default), {
							content: unref(i18n).baseText("instanceAi.thread.new"),
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								icon: "message-circle-plus",
								variant: "ghost",
								size: "small",
								"icon-size": "large",
								"aria-label": unref(i18n).baseText("instanceAi.thread.new"),
								"data-test-id": "instance-ai-embed-new-thread",
								onClick: handleNewThreadClick
							}, null, 8, ["aria-label"])]),
							_: 1
						}, 8, ["content", "show-after"]),
						isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							icon: "bug",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							class: normalizeClass({ [_ctx.$style.activeButton]: showDebugPanel.value }),
							onClick: _cache[0] || (_cache[0] = ($event) => {
								showDebugPanel.value = !showDebugPanel.value;
								unref(store).debugMode = showDebugPanel.value;
							})
						}, null, 8, ["class"])) : createCommentVNode("", true),
						createVNode(unref(N8nTooltip_default), {
							content: artifactsPanelToggleLabel.value,
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(Transition, {
								name: "preview-toggle-opacity",
								css: unref(isArtifactsPanelTransitionEnabled)
							}, {
								default: withCtx(() => [showArtifactsPanelToggle.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									icon: "list",
									variant: "ghost",
									size: "small",
									"icon-size": "large",
									"data-test-id": "instance-ai-artifacts-panel-toggle",
									"aria-label": artifactsPanelToggleLabel.value,
									"aria-pressed": showArtifactsPanel.value,
									disabled: !canShowArtifactsPanel.value,
									onClick: toggleArtifactsPanel
								}, null, 8, [
									"aria-label",
									"aria-pressed",
									"disabled"
								])) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["css"])]),
							_: 1
						}, 8, ["content", "show-after"]),
						createVNode(unref(N8nTooltip_default), {
							content: artifactsPreviewToggleLabel.value,
							placement: "bottom",
							"show-after": unref(500)
						}, {
							default: withCtx(() => [createVNode(Transition, {
								name: "preview-toggle-opacity",
								css: unref(isPreviewPanelTransitionEnabled)
							}, {
								default: withCtx(() => [!unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									icon: "panel-right",
									variant: "ghost",
									size: "small",
									"icon-size": "large",
									"data-test-id": "instance-ai-artifacts-preview-toggle",
									"aria-label": artifactsPreviewToggleLabel.value,
									"aria-pressed": unref(preview).isPreviewVisible.value,
									disabled: !hasPreviewTabs.value,
									onClick: toggleArtifactsPreview
								}, null, 8, [
									"aria-label",
									"aria-pressed",
									"disabled"
								])) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["css"])]),
							_: 1
						}, 8, ["content", "show-after"])
					]),
					_: 1
				}, 8, ["show-thread-history-label"])], 2), createBaseVNode("div", {
					class: normalizeClass([
						_ctx.$style.contentArea,
						{ [_ctx.$style.contentAreaWithPinnedArtifacts]: reserveArtifactsPanelLayout.value },
						{ [_ctx.$style.contentAreaWithoutLayoutTransitions]: shouldSuppressContentLayoutTransitions.value }
					]),
					"data-layout-transitions-enabled": unref(isPreviewPanelTransitionEnabled),
					"data-test-id": "instance-ai-content-area"
				}, [
					createVNode(InstanceAiConversation_default, {
						ref: "conversation",
						"above-input-overlap-height": setupPanelWorkflowId.value ? setupOverlapHeight.value : void 0,
						"mentions-enabled": unref(mentionsEnabled),
						onThreadMissing,
						onAgentAttachmentRestored
					}, {
						"above-input": withCtx(() => [setupPanelWorkflowId.value ? (openBlock(), createBlock(InstanceAiSetupPanel_default, {
							key: 0,
							ref: "setupPanel",
							"workflow-id": setupPanelWorkflowId.value,
							"project-id": setupPanelProjectId.value,
							"onUpdate:overlapHeight": _cache[1] || (_cache[1] = ($event) => setupOverlapHeight.value = $event)
						}, null, 8, ["workflow-id", "project-id"])) : createCommentVNode("", true)]),
						"inline-offers": withCtx(() => [createVNode(Transition, { name: "confirmation-slide" }, {
							default: withCtx(() => [activeFixWithAiOffer.value ? (openBlock(), createBlock(InstanceAiFixWithAiPanel_default, {
								key: 0,
								"node-name": activeFixWithAiOffer.value.errors[0].nodeName,
								"error-message": activeFixWithAiOffer.value.errors[0].errorMessage,
								"failed-count": activeFixWithAiOffer.value.errors.length,
								onFixWithAi: handleFixWithAiFromOffer,
								onDismiss: dismissFixWithAiOffer
							}, null, 8, [
								"node-name",
								"error-message",
								"failed-count"
							])) : createCommentVNode("", true)]),
							_: 1
						}), createVNode(Transition, { name: "confirmation-slide" }, {
							default: withCtx(() => [activeTestAgentOffer.value ? (openBlock(), createBlock(InstanceAiTestAgentPanel_default, {
								key: 0,
								onGenerate: handleGenerateTestCasesFromOffer,
								onDismiss: dismissTestAgentOffer
							})) : createCommentVNode("", true)]),
							_: 1
						})]),
						_: 1
					}, 8, ["above-input-overlap-height", "mentions-enabled"]),
					createVNode(Transition, {
						name: artifactsPanelTransitionName.value,
						css: shouldAnimateArtifactsPanel.value
					}, {
						default: withCtx(() => [showArtifactsPanel.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							ref: "artifactsPanelSlot",
							class: normalizeClass([_ctx.$style.artifactsPanelSlot, { [_ctx.$style.artifactsPanelSlotOverlay]: !reserveArtifactsPanelLayout.value }]),
							"data-test-id": "instance-ai-artifacts-sidebar-slot"
						}, [createVNode(InstanceAiArtifactsPanel_default)], 2)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["name", "css"]),
					showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
						key: 0,
						onClose: _cache[2] || (_cache[2] = ($event) => {
							showDebugPanel.value = false;
							unref(store).debugMode = false;
						})
					})) : createCommentVNode("", true)
				], 10, _hoisted_2)], 10, _hoisted_1),
				createVNode(Transition, {
					name: "preview-panel-slide",
					css: unref(isPreviewPanelTransitionEnabled),
					onAfterEnter: handlePreviewPanelAfterEnter,
					onAfterLeave: handlePreviewPanelAfterLeave
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.canvasArea, {
							[_ctx.$style.canvasAreaExpanded]: isPreviewExpanded.value,
							[_ctx.$style.agentPreviewLayoutTransition]: shouldAnimatePreviewLayout.value
						}]),
						style: normalizeStyle(agentPreviewPanelStyle.value),
						"data-expanded": isPreviewExpanded.value,
						"data-test-id": "instance-ai-preview-panel"
					}, [createVNode(unref(N8nResizeWrapper_default), {
						width: previewPanelWidth.value,
						"min-width": previewMinWidth.value,
						"max-width": previewMaxWidth.value,
						"supported-directions": ["left"],
						"is-resizing-enabled": isPreviewResizeEnabled.value,
						"grid-size": 8,
						onResize: handlePreviewResize,
						onResizestart: _cache[3] || (_cache[3] = ($event) => isResizingPreview.value = true),
						onResizeend: _cache[4] || (_cache[4] = ($event) => isResizingPreview.value = false)
					}, {
						default: withCtx(() => [createVNode(unref(TabsRoot_default), {
							"model-value": unref(preview).activeTabId.value,
							orientation: "horizontal",
							class: normalizeClass(_ctx.$style.previewPanel),
							"onUpdate:modelValue": selectArtifactTab
						}, {
							default: withCtx(() => [createVNode(InstanceAiPreviewTabBar_default, {
								tabs: unref(preview).allArtifactTabs.value,
								"active-tab-id": unref(preview).activeTabId.value,
								"is-expanded": isPreviewExpanded.value,
								"preview-toggle-label": artifactsPreviewToggleLabel.value,
								onTogglePreview: toggleArtifactsPreview,
								onToggleExpanded: togglePreviewExpanded
							}, null, 8, [
								"tabs",
								"active-tab-id",
								"is-expanded",
								"preview-toggle-label"
							]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewContent) }, [
								unref(preview).isPreviewVisible.value && unref(preview).activeWorkflowId.value ? (openBlock(), createBlock(InstanceAiWorkflowPreview_default, {
									key: unref(preview).activeWorkflowId.value,
									ref: "workflowPreview",
									class: normalizeClass([_ctx.$style.previewSlot, { [_ctx.$style.previewSlotHidden]: !!unref(preview).activeDataTableId.value }]),
									"workflow-id": unref(preview).activeWorkflowId.value,
									"initial-node-id": unref(preview).activeWorkflowId.value === unref(agentReturnWorkflowId) ? agentReturnNodeId.value : void 0,
									"refresh-key": unref(preview).workflowRefreshKey.value,
									"execution-result": unref(preview).activeWorkflowExecutionResult.value,
									onInitialNodeIdConsumed: consumeAgentReturnNodeId,
									onWorkflowFailures: handleWorkflowFailures
								}, null, 8, [
									"class",
									"workflow-id",
									"initial-node-id",
									"refresh-key",
									"execution-result"
								])) : createCommentVNode("", true),
								unref(preview).isPreviewVisible.value && unref(preview).activeDataTableId.value ? (openBlock(), createBlock(InstanceAiDataTablePreview_default, {
									key: 1,
									class: normalizeClass(_ctx.$style.previewSlot),
									"data-table-id": unref(preview).activeDataTableId.value,
									"project-id": unref(preview).activeDataTableProjectId.value,
									"refresh-key": unref(preview).dataTableRefreshKey.value
								}, null, 8, [
									"class",
									"data-table-id",
									"project-id",
									"refresh-key"
								])) : createCommentVNode("", true),
								unref(preview).isPreviewVisible.value && unref(preview).activeAgentId.value && unref(preview).activeAgentProjectId.value ? (openBlock(), createBlock(InstanceAiAgentPreview_default, {
									key: 2,
									class: normalizeClass(_ctx.$style.previewSlot),
									"agent-id": unref(preview).activeAgentId.value,
									"project-id": unref(preview).activeAgentProjectId.value,
									"preview-session-id": activeAgentPreviewSessionId.value,
									"preview-open": isAgentPreviewDockOpen.value,
									pending: unref(preview).activeAgentPending.value,
									onPreviewOpenChange: handleAgentPreviewDockOpenChange,
									onAssistantHandoff: handleAgentPreviewAssistantHandoff
								}, null, 8, [
									"class",
									"agent-id",
									"project-id",
									"preview-session-id",
									"preview-open",
									"pending"
								])) : createCommentVNode("", true)
							], 2)]),
							_: 1
						}, 8, ["model-value", "class"])]),
						_: 1
					}, 8, [
						"width",
						"min-width",
						"max-width",
						"is-resizing-enabled"
					])], 14, _hoisted_3), [[vShow, unref(preview).isPreviewVisible.value]])]),
					_: 1
				}, 8, ["css"]),
				createVNode(OpenWorkflowInAssistantNotification_default, { "thread-id": __props.threadId }, null, 8, ["thread-id"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/InstanceAiThreadView.vue?vue&type=style&index=0&lang.module.scss
var threadArea = "_threadArea_cke9q_276";
var agentPreviewLayoutTransition = "_agentPreviewLayoutTransition_cke9q_286";
var builderChatHeader = "_builderChatHeader_cke9q_299";
var chromeHidden = "_chromeHidden_cke9q_303";
var chatArea = "_chatArea_cke9q_307";
var canvasArea = "_canvasArea_cke9q_317";
var canvasAreaExpanded = "_canvasAreaExpanded_cke9q_323";
var headerTitle = "_headerTitle_cke9q_331";
var activeButton = "_activeButton_cke9q_339";
var reconnecting = "_reconnecting_cke9q_343";
var contentArea = "_contentArea_cke9q_347";
var artifactsPanelSlot = "_artifactsPanelSlot_cke9q_356";
var artifactsPanelSlotOverlay = "_artifactsPanelSlotOverlay_cke9q_369";
var contentAreaWithPinnedArtifacts = "_contentAreaWithPinnedArtifacts_cke9q_374";
var contentAreaWithoutLayoutTransitions = "_contentAreaWithoutLayoutTransitions_cke9q_378";
var previewPanel = "_previewPanel_cke9q_387";
var previewContent = "_previewContent_cke9q_393";
var previewSlot = "_previewSlot_cke9q_399";
var previewSlotHidden = "_previewSlotHidden_cke9q_404";
var shimmer = "_shimmer_cke9q_1";
var spin = "_spin_cke9q_1";
var opacityPulse = "_opacityPulse_cke9q_1";
var popoverIn = "_popoverIn_cke9q_1";
var fadeIn = "_fadeIn_cke9q_1";
var collapsibleSlideDown = "_collapsibleSlideDown_cke9q_1";
var collapsibleSlideUp = "_collapsibleSlideUp_cke9q_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_cke9q_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_cke9q_1";
var blurSwapIn = "_blurSwapIn_cke9q_1";
var blurSwapOut = "_blurSwapOut_cke9q_1";
var pulseGlow = "_pulseGlow_cke9q_1";
var pulseGlowDelayed = "_pulseGlowDelayed_cke9q_1";
var fade = "_fade_cke9q_1";
var fadeInUp = "_fadeInUp_cke9q_1";
var fadeInDown = "_fadeInDown_cke9q_1";
var fadeInLeft = "_fadeInLeft_cke9q_1";
var fadeInRight = "_fadeInRight_cke9q_1";
var fadeOut = "_fadeOut_cke9q_1";
var fadeOutDown = "_fadeOutDown_cke9q_1";
var fadeOutUp = "_fadeOutUp_cke9q_1";
var fadeOutLeft = "_fadeOutLeft_cke9q_1";
var fadeOutRight = "_fadeOutRight_cke9q_1";
var ping = "_ping_cke9q_1";
var blinkBackground = "_blinkBackground_cke9q_1";
var typingBlink = "_typingBlink_cke9q_1";
var InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default = {
	threadArea,
	agentPreviewLayoutTransition,
	builderChatHeader,
	chromeHidden,
	chatArea,
	canvasArea,
	canvasAreaExpanded,
	headerTitle,
	activeButton,
	reconnecting,
	contentArea,
	artifactsPanelSlot,
	artifactsPanelSlotOverlay,
	contentAreaWithPinnedArtifacts,
	contentAreaWithoutLayoutTransitions,
	previewPanel,
	previewContent,
	previewSlot,
	previewSlotHidden,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_cke9q_1",
	opacityPulse,
	popoverIn,
	fadeIn,
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
var InstanceAiThreadView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiThreadView_default as default };

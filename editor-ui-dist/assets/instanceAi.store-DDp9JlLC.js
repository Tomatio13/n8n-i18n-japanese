import { Et as effectScope, It as ref, Lt as shallowReactive, Pt as reactive, R as inject, S as computed, W as nextTick, Wt as triggerRef, gt as watch, tt as provide } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n, i as i18n } from "./src-C397uuXA.js";
import { $n as ResponseError, fr as defineStore, nr as makeRestApiRequest, t as useRootStore } from "./useRootStore-D173L1zv.js";
import { $r as getChildNodes, $t as INSTANCE_AI_EPHEMERAL_EVENT_TYPES, Cn as isSafeObjectKey, D as stateFromAgentTree, E as reduceEvent, Ha as v4, O as toAgentTree, Qr as getParentNodes, T as findAgent, Zr as mapConnectionsByDestination, bn as instanceAiEventSchema, dn as buildExecuteNodeSessionGrantKey, fn as buildRunStepSessionGrantKey, mn as buildUpdateWorkflowSessionGrantKey, on as INSTANCE_AI_THREAD_SOURCE_FALLBACK, pn as buildRunWorkflowSessionGrantKey, rr as isRecord, un as buildDataTablesSessionGrantKey, w as createInitialState } from "./src-DVqjY0nx.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import { a as TELEMETRY_EVENT, n as redactTelemetryText, t as redactTelemetryProperties } from "./src-v31X3Vyz.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-Ci26HGIx.js";
import { C as isInstanceAiThreadSource, c as INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY, f as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, o as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, s as INSTANCE_AI_AGENT_PREVIEW_SESSION_METADATA_KEY } from "./constants-DMeWsGm9.js";
import { c as getInstanceAiCredits, d as postConfirmation, f as postFeedback, l as postCancel, p as postMessage, s as ensureThread, t as useInstanceAiSettingsStore, u as postCancelTask } from "./instanceAiSettings.store-Bx6F9tHk.js";
//#region src/features/ai/instanceAi/instanceAi.memory.api.ts
async function fetchThreads(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/threads");
}
async function fetchThreadHistory(context, query) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/threads/history", query);
}
async function fetchThread(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/threads/${threadId}`);
}
async function deleteThread(context, threadId) {
	await makeRestApiRequest(context, "DELETE", `/instance-ai/threads/${threadId}`);
}
async function renameThread(context, threadId, title) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/threads/${threadId}`, { title });
}
async function updateThreadMetadata(context, threadId, metadata) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/threads/${threadId}`, { metadata });
}
/**
* Persist the thread's pending new-agent artifact under the client-minted id and
* bind it to the thread in one request. Converges with a concurrent chat build on
* the same id instead of failing, and the response arriving IS the guarantee that
* the binding is durable.
*/
async function persistPendingAgent(context, threadId, payload) {
	return await makeRestApiRequest(context, "POST", `/instance-ai/threads/${threadId}/agent`, payload);
}
async function fetchThreadMessages(context, threadId, limit, page) {
	const params = new URLSearchParams();
	if (limit !== void 0) params.set("limit", String(limit));
	if (page !== void 0) params.set("page", String(page));
	const qs = params.toString();
	return await makeRestApiRequest(context, "GET", `/instance-ai/threads/${threadId}/messages${qs ? `?${qs}` : ""}`);
}
async function fetchThreadStatus(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/threads/${threadId}/status`);
}
async function fetchRunDebug(context, runId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/debug/runs/${runId}`);
}
async function fetchThreadDebugRuns(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/debug/threads/${threadId}/runs`);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.reducer.ts
/** Resolve a runId to its group key. */
function resolveGroupId(state, runId) {
	if (!isSafeObjectKey(runId)) return runId;
	const groupId = state.groupIdByRunId.get(runId);
	return groupId && isSafeObjectKey(groupId) ? groupId : runId;
}
/** Find the message that owns a group. */
function findMessageByGroupId(state, groupId) {
	if (!isSafeObjectKey(groupId)) return void 0;
	return state.messages.find((m) => m.messageGroupId === groupId || m.runId === groupId);
}
/**
* Create a reactive run state. Reactivity must live on the run state itself:
* the shared reducer mutates it in place, and components render the very same
* node objects via `msg.agentTree` — wrapping here makes those mutations
* observable everywhere without any synchronization layer.
*/
function createRunState(rootAgentId) {
	return reactive(createInitialState(rootAgentId));
}
/**
* Index a snapshot tree (session restore / run-sync) into a reactive run state.
* The tree's nodes are adopted, not copied — live events keep mutating the
* exact objects the message already renders.
*/
function createRunStateFromTree(tree) {
	const runState = stateFromAgentTree(tree);
	return runState ? reactive(runState) : void 0;
}
/**
* Get or create the AgentRunState for a group.
*/
function getOrCreateGroupState(state, groupId, rootAgentId) {
	if (!isSafeObjectKey(groupId)) return createRunState(rootAgentId);
	let runState = state.runStateByGroupId.get(groupId);
	if (!runState) {
		runState = createRunState(rootAgentId);
		state.runStateByGroupId.set(groupId, runState);
	}
	return runState;
}
/** Register a runId → groupId mapping. */
function registerRunId(state, runId, groupId) {
	if (!isSafeObjectKey(runId) || !isSafeObjectKey(groupId)) return;
	state.groupIdByRunId.set(runId, groupId);
}
function hasSafeEventKeys(event) {
	if (!isSafeObjectKey(event.runId) || !isSafeObjectKey(event.agentId)) return false;
	switch (event.type) {
		case "run-start": return event.payload.messageGroupId ? isSafeObjectKey(event.payload.messageGroupId) : true;
		case "agent-spawned": return isSafeObjectKey(event.payload.parentId);
		case "tool-input-start":
		case "tool-call":
		case "tool-result":
		case "tool-error":
		case "tool-interrupted":
		case "confirmation-request": return isSafeObjectKey(event.payload.toolCallId);
		default: return true;
	}
}
function resolveTarget(state, runId) {
	const groupId = resolveGroupId(state, runId);
	return {
		msg: findMessageByGroupId(state, groupId),
		runState: state.runStateByGroupId.get(groupId),
		groupId
	};
}
/** Mutates state.messages in-place. Returns the new activeRunId (may differ from input). */
function handleEvent(state, event) {
	if (!state.groupIdByRunId) state.groupIdByRunId = /* @__PURE__ */ new Map();
	if (!state.runStateByGroupId) state.runStateByGroupId = /* @__PURE__ */ new Map();
	if (!hasSafeEventKeys(event)) return state.activeRunId;
	if (event.type !== "run-start") {
		const { msg, groupId } = resolveTarget(state, event.runId);
		if (!msg) {
			const rootAgentId = event.type === "agent-spawned" ? event.payload.parentId : event.agentId;
			registerRunId(state, event.runId, groupId);
			const runState = getOrCreateGroupState(state, groupId, rootAgentId);
			state.messages.push({
				id: groupId,
				runId: event.runId,
				messageGroupId: groupId,
				role: "assistant",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				content: "",
				reasoning: "",
				isStreaming: true,
				agentTree: toAgentTree(runState)
			});
		}
	}
	switch (event.type) {
		case "run-start": {
			const messageGroupId = event.payload.messageGroupId ?? event.runId;
			registerRunId(state, event.runId, messageGroupId);
			const existingMsg = findMessageByGroupId(state, messageGroupId);
			if (existingMsg) {
				const runState = state.runStateByGroupId.get(messageGroupId);
				if (runState) {
					reduceEvent(runState, event);
					existingMsg.agentTree = toAgentTree(runState);
				}
				existingMsg.runId = event.runId;
				existingMsg.isStreaming = true;
				return event.runId;
			}
			const runState = getOrCreateGroupState(state, messageGroupId, event.agentId);
			reduceEvent(runState, event);
			state.messages.push({
				id: event.runId,
				runId: event.runId,
				messageGroupId,
				role: "assistant",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				content: "",
				reasoning: "",
				isStreaming: true,
				agentTree: toAgentTree(runState)
			});
			return event.runId;
		}
		case "text-delta":
		case "text-block": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg && event.agentId === runState.rootAgentId) msg.content = findAgent(runState, event.agentId)?.textContent ?? msg.content;
			}
			return state.activeRunId;
		}
		case "reasoning-block":
		case "reasoning-delta": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg && event.agentId === runState.rootAgentId) msg.reasoning = findAgent(runState, event.agentId)?.reasoning ?? msg.reasoning;
			}
			return state.activeRunId;
		}
		case "tool-input-start":
		case "tool-call":
		case "tool-result":
		case "tool-error":
		case "tool-interrupted":
		case "agent-spawned":
		case "agent-completed":
		case "confirmation-request":
		case "tasks-update":
		case "setup-items":
		case "status": {
			const { runState } = resolveTarget(state, event.runId);
			if (runState) reduceEvent(runState, event);
			return state.activeRunId;
		}
		case "error": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				const target = findAgent(runState, event.agentId) ?? findAgent(runState, runState.rootAgentId);
				if (target) {
					target.status = "error";
					target.error = event.payload.content;
					target.errorDetails = {
						...event.payload.statusCode !== void 0 ? { statusCode: event.payload.statusCode } : {},
						...event.payload.code ? { code: event.payload.code } : {},
						...event.payload.provider ? { provider: event.payload.provider } : {},
						...event.payload.technicalDetails ? { technicalDetails: event.payload.technicalDetails } : {}
					};
					if (msg && target.agentId === runState.rootAgentId) msg.content = target.textContent;
				}
			} else if (msg) msg.content += "\n\n*Error: " + event.payload.content + "*";
			return state.activeRunId;
		}
		case "filesystem-request":
		case "thread-title-updated":
		case "preferences-applied": return state.activeRunId;
		case "run-finish": {
			const { msg, runState } = resolveTarget(state, event.runId);
			const isActiveRunFinishing = event.runId === state.activeRunId;
			if (runState) {
				reduceEvent(runState, event);
				const { status, reason } = event.payload;
				const root = findAgent(runState, runState.rootAgentId);
				if (root && status === "error" && reason && !root.error) root.error = reason;
				if (msg && isActiveRunFinishing) msg.isStreaming = false;
			} else if (msg) {
				if (isActiveRunFinishing) msg.isStreaming = false;
				const { status, reason } = event.payload;
				if (status === "error" && reason) msg.content += "\n\n*Error: " + reason + "*";
			}
			return isActiveRunFinishing ? null : state.activeRunId;
		}
		default: return state.activeRunId;
	}
}
//#endregion
//#region src/features/ai/instanceAi/canvasPreview.utils.ts
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* and toolCallId from the latest successful build-workflow / submit-workflow tool result.
*/
function getLatestBuildResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestBuildResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if ((tc.toolName === "build-workflow" || tc.toolName === "submit-workflow") && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			if (result.success === true && typeof result.workflowId === "string") return {
				workflowId: result.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
/** A workflow-builder sub-agent node, identified by kind or role. */
function isBuilderNode(node) {
	return node.kind === "builder" || node.role === "workflow-builder";
}
/**
* Walks an agent tree depth-first (most recent last) and returns the agentId
* and workflowId of the latest workflow-builder sub-agent that was spawned
* with a concrete `targetResource.id` — i.e. an edit-mode builder that
* already knows which existing workflow it is modifying. Used to open the
* canvas preview at spawn time, before the first build-workflow tool call
* returns a result.
*/
function getLatestBuilderTarget(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const child = node.children[i];
		const nested = getLatestBuilderTarget(child);
		if (nested) return nested;
		if (isBuilderNode(child) && child.targetResource?.type === "workflow" && typeof child.targetResource.id === "string") return {
			agentId: child.agentId,
			workflowId: child.targetResource.id
		};
	}
}
/**
* Walks an agent tree depth-first (most recent last) and returns the agentId
* (node id) and targetAgentId of the latest agent-builder sub-agent that was
* spawned with a concrete `targetResource.id`. Used to open the canvas
* preview at spawn time, before the first build-agent tool call returns a
* result — mirrors getLatestBuilderTarget for workflows.
*/
function getLatestAgentBuilderTarget(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const child = node.children[i];
		const nested = getLatestAgentBuilderTarget(child);
		if (nested) return nested;
		if (child.kind === "agent-builder" && child.targetResource?.type === "agent" && typeof child.targetResource.id === "string") return {
			agentId: child.agentId,
			targetAgentId: child.targetResource.id
		};
	}
}
var WORKFLOW_SETUP_TOOLS = new Set(["setup-workflow", "apply-workflow-credentials"]);
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* (from args) and toolCallId from the latest successful setup-workflow /
* apply-workflow-credentials tool result. These tools modify the workflow
* (credentials, parameters) but don't return workflowId in the result.
*/
function getLatestWorkflowSetupResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestWorkflowSetupResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (WORKFLOW_SETUP_TOOLS.has(tc.toolName) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			if (result.success === true && typeof args?.workflowId === "string") return {
				workflowId: args.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
var WORKFLOW_MUTATING_ACTIONS$1 = new Set([
	"update",
	"restore-version",
	"setup"
]);
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* (from args) and toolCallId from the latest successful `workflows` tool call
* that mutated the workflow definition (action=update / restore-version / setup).
* These modify an existing workflow but surface under tool name 'workflows' —
* invisible to getLatestBuildResult — and don't reliably return the workflowId in
* the result, so it is read from the call args. `setup` is the current path for
* credential/parameter configuration (the inline setup card); the legacy
* setup-workflow / apply-workflow-credentials tools are handled by
* getLatestWorkflowSetupResult.
*/
function getLatestWorkflowUpdateResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestWorkflowUpdateResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		if (tc.toolName === "workflows" && typeof args?.action === "string" && WORKFLOW_MUTATING_ACTIONS$1.has(args.action) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			if (tc.result.success === true && typeof args?.workflowId === "string") return {
				workflowId: args.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
var WORKFLOW_LOCKING_TOOLS = new Set([
	"build-workflow",
	"build-workflow-with-agent",
	"apply-workflow-credentials",
	"setup-workflow",
	"verify-built-workflow"
]);
/**
* Whether the agent is actively working on `workflowId` somewhere in this agent
* tree — used to lock the artifact canvas while a build/edit/verification is in
* flight so the user can't execute or edit into a mid-stream conflict. Any
* of these signals is enough:
*   1. The active agent tree has already built/updated/setup this workflow.
*      This covers short gaps between tool calls while the agent run is still
*      ongoing.
*   2. An active workflow-builder sub-agent targeting the workflow (covers the
*      whole build window: read file → edit → submit-workflow → verify).
*   3. An in-flight workflow-affecting tool call targeting the workflow — the
*      build/setup/verify tools, `executions.run`, or a `workflows` update /
*      restore-version / setup action. Read-only `workflows` actions (including
*      historical get-json events, get, list, …) don't lock.
*/
function isAgentEditingWorkflow(node, workflowId, announcement = node.latestSetupAnnouncement) {
	const announcedBuild = announcement?.workflowId === workflowId && node.toolCalls.some((call) => call.isLoading && call.toolName === "build-workflow" && !call.args?.workflowId && announcement.agentId === node.agentId && call.startedAt && announcement.timestamp >= call.startedAt);
	if (node.status === "active" && (getLatestBuildResult(node)?.workflowId === workflowId || getLatestWorkflowSetupResult(node)?.workflowId === workflowId || getLatestWorkflowUpdateResult(node)?.workflowId === workflowId || announcedBuild)) return true;
	if (isBuilderNode(node) && node.status === "active" && node.targetResource?.type === "workflow" && node.targetResource.id === workflowId) return true;
	for (const tc of node.toolCalls) {
		if (!tc.isLoading) continue;
		const args = tc.args;
		if (args?.workflowId !== workflowId) continue;
		if (WORKFLOW_LOCKING_TOOLS.has(tc.toolName)) return true;
		if (tc.toolName === "executions" && args.action === "run") return true;
		if (tc.toolName === "workflows" && typeof args?.action === "string" && WORKFLOW_MUTATING_ACTIONS$1.has(args.action)) return true;
	}
	for (const child of node.children) if (isAgentEditingWorkflow(child, workflowId, announcement)) return true;
	return false;
}
/**
* Whether the AI is actively working on agent `agentId` somewhere in this
* agent tree — used to lock the agent artifact editor while a build is in
* flight so user edits can't race builder config writes (the post-build
* refetch would clobber them). Either signal is enough:
*   1. The active agent tree has already created/mutated this agent — covers
*      short gaps between tool calls while the run is still ongoing.
*   2. An active agent-builder sub-agent targeting the agent — covers the
*      whole build window from spawn to completion.
*/
function isAgentEditingAgent(node, agentId) {
	if (node.status === "active" && getLatestAgentArtifactResult(node)?.agentId === agentId) return true;
	if (node.kind === "agent-builder" && node.status === "active" && node.targetResource?.type === "agent" && node.targetResource.id === agentId) return true;
	for (const child of node.children) if (isAgentEditingAgent(child, agentId)) return true;
	return false;
}
var DATA_TABLE_PREVIEW_ACTIONS = new Set([
	"schema",
	"query",
	"create",
	"insert-rows",
	"update-rows",
	"delete-rows",
	"add-column",
	"delete-column",
	"rename-column"
]);
/** Per-action check that the result contains a table reference worth previewing. */
var RESULT_VALIDATORS = {
	schema: (r) => Array.isArray(r.columns),
	query: (r) => Array.isArray(r.data),
	"insert-rows": (r) => typeof r.insertedCount === "number",
	"update-rows": (r) => typeof r.updatedCount === "number",
	"add-column": (r) => r.column !== null && r.column !== void 0 && typeof r.column === "object",
	"delete-rows": (r) => r.success === true,
	"delete-column": (r) => r.success === true,
	"rename-column": (r) => r.success === true
};
function extractDataTableId(action, result, args) {
	if (action === "create") {
		if (result.table && typeof result.table === "object") {
			const table = result.table;
			if (typeof table.id === "string") return table.id;
		}
		return;
	}
	const isValid = RESULT_VALIDATORS[action];
	if (isValid?.(result)) {
		if (typeof result.dataTableId === "string") return result.dataTableId;
		if (typeof args?.dataTableId === "string") return args.dataTableId;
	}
}
/**
* Walks an agent tree depth-first (most recent last) and returns the dataTableId
* from the latest successful delete-data-table tool result.
*/
function getLatestDeletedDataTableId(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDeletedDataTableId(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		if (tc.toolName === "data-tables" && args?.action === "delete" && !tc.isLoading && tc.result && typeof tc.result === "object") {
			if (tc.result.success === true && typeof args?.dataTableId === "string") return args.dataTableId;
		}
	}
}
function getLatestDataTableResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDataTableResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		const action = typeof args?.action === "string" ? args.action : "";
		if (tc.toolName === "data-tables" && DATA_TABLE_PREVIEW_ACTIONS.has(action) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const dataTableId = extractDataTableId(action, result, args);
			if (dataTableId) return {
				dataTableId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
function getAgentTarget(node) {
	if (node.targetResource?.type !== "agent" || typeof node.targetResource.id !== "string") return;
	return {
		agentId: node.targetResource.id,
		...typeof node.targetResource.projectId === "string" ? { projectId: node.targetResource.projectId } : {}
	};
}
/**
* Walks an agent tree depth-first (most recent last), threading the nearest
* agent target down to descendants and back up to callers, and returns the
* first `match` hit among a node's own tool calls (also most recent last).
* Shared by artifact discovery and config-mutation preview refresh so their
* identical target-resolution/traversal logic can't drift between the two.
*/
function walkAgentTargetedResult(node, fallbackTarget, match) {
	const ownTarget = getAgentTarget(node);
	const target = ownTarget ?? fallbackTarget;
	let childTarget;
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childWalk = walkAgentTargetedResult(node.children[i], target, match);
		if (childWalk.result) return childWalk;
		if (childTarget === void 0) childTarget = childWalk.target;
	}
	const callTarget = ownTarget ?? childTarget ?? fallbackTarget;
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const result = match(node.toolCalls[i], callTarget);
		if (result !== void 0) return {
			result,
			target: callTarget
		};
	}
	return { target: callTarget };
}
function matchAgentArtifactToolCall(tc, callTarget) {
	if (tc.isLoading || !tc.result || typeof tc.result !== "object" || !callTarget) return void 0;
	if (tc.toolName !== "build-agent") return void 0;
	const result = tc.result;
	const args = tc.args;
	if (result.ok === true && typeof args?.name === "string") return {
		...callTarget,
		toolCallId: tc.toolCallId,
		kind: "created"
	};
	if (result.configUpdated === true) return {
		...callTarget,
		toolCallId: tc.toolCallId,
		kind: "mutated"
	};
}
function getLatestAgentArtifactResult(node, fallbackTarget) {
	return walkAgentTargetedResult(node, fallbackTarget, matchAgentArtifactToolCall).result;
}
/**
* Walks an agent tree depth-first (most recent last) and returns the latest
* resolved tool call stamped with `configMutated: true` by the backend.
*/
function getLatestAgentConfigMutation(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestAgentConfigMutation(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (!tc.isLoading && isRecord(tc.result) && tc.result.configMutated === true && typeof tc.result.agentId === "string") return {
			agentId: tc.result.agentId,
			toolCallId: tc.toolCallId
		};
	}
}
/**
* Walks an agent tree and collects the latest completed run-workflow result
* per workflowId. Used to restore execution status from historical messages
* after page refresh.
*/
function getExecutionResultsByWorkflow(node) {
	const results = /* @__PURE__ */ new Map();
	collectExecutionResults(node, results);
	return results;
}
function collectExecutionResults(node, results) {
	for (const tc of node.toolCalls) {
		const tcArgs = tc.args;
		const isExecutionRun = tc.toolName === "executions" && tcArgs?.action === "run";
		const isVerificationRun = tc.toolName === "verify-built-workflow";
		if (!isExecutionRun && !isVerificationRun || tc.isLoading) continue;
		const result = tc.result;
		const args = tc.args;
		if (typeof result === "object" && result !== null && typeof args === "object" && args !== null && "workflowId" in args && typeof args.workflowId === "string" && "executionId" in result && typeof result.executionId === "string" && "status" in result && (result.status === "success" || result.status === "error")) {
			const simulatedNodeNames = getSimulatedNodeNames(result);
			results.set(args.workflowId, {
				executionId: result.executionId,
				status: result.status,
				..."finishedAt" in result && typeof result.finishedAt === "string" ? { finishedAt: result.finishedAt } : {},
				...simulatedNodeNames.length > 0 ? { simulatedNodeNames } : {}
			});
		}
	}
	for (const child of node.children) collectExecutionResults(child, results);
}
/** Simulated node names from a verify-built-workflow result (`simulatedNodes: [{nodeName, reason}]`). */
function getSimulatedNodeNames(result) {
	if (!("simulatedNodes" in result) || !Array.isArray(result.simulatedNodes)) return [];
	return result.simulatedNodes.map((entry) => isRecord(entry) && typeof entry.nodeName === "string" ? entry.nodeName : void 0).filter((name) => name !== void 0);
}
//#endregion
//#region src/features/ai/instanceAi/useResourceRegistry.ts
/**
* A blank string is treated as absent. Every caller uses the result as the head
* of a fallback chain, so a blank name from a patch call would otherwise beat
* the known name and re-key the indexes under an empty string.
*/
function optionalString(val) {
	if (typeof val !== "string") return void 0;
	const trimmed = val.trim();
	return trimmed === "" ? void 0 : trimmed;
}
/**
* Upsert a produced artifact. When an entry for the same `id` already exists,
* optional fields provided by the new call win; fields it omits are preserved
* from the existing entry. Callers are responsible for resolving `name` using
* the existing entry as a fallback so partial updates (e.g. a patch
* `build-workflow` call that carries only a `workflowId`) don't regress a
* known name to 'Untitled'.
*/
function recordProduced(col, entry, options = {}) {
	const existing = col.produced.get(entry.id);
	const existingLinkKey = existing?.name.toLowerCase();
	const wasLinkable = existingLinkKey !== void 0 && col.linkableByName.get(existingLinkKey)?.id === entry.id;
	const shouldLink = options.linkable !== false || wasLinkable;
	const merged = existing ? {
		type: entry.type,
		id: entry.id,
		name: entry.name,
		createdAt: entry.createdAt ?? existing.createdAt,
		updatedAt: entry.updatedAt ?? existing.updatedAt,
		projectId: entry.projectId ?? existing.projectId
	} : entry;
	col.produced.set(entry.id, merged);
	if (existing && existing.name.toLowerCase() !== merged.name.toLowerCase()) {
		col.byName.delete(existing.name.toLowerCase());
		if (wasLinkable) col.linkableByName.delete(existing.name.toLowerCase());
	}
	col.byName.set(merged.name.toLowerCase(), merged);
	if (shouldLink) col.linkableByName.set(merged.name.toLowerCase(), merged);
}
function indexByName(col, entry) {
	col.byName.set(entry.name.toLowerCase(), entry);
}
function entryFromListItem(type, obj) {
	if (typeof obj.name !== "string" || typeof obj.id !== "string") return void 0;
	const entry = {
		type,
		id: obj.id,
		name: obj.name
	};
	const createdAt = optionalString(obj.createdAt);
	const updatedAt = optionalString(obj.updatedAt);
	const projectId = optionalString(obj.projectId);
	if (createdAt !== void 0) entry.createdAt = createdAt;
	if (updatedAt !== void 0) entry.updatedAt = updatedAt;
	if (projectId !== void 0) entry.projectId = projectId;
	return entry;
}
/** Tools whose results may contain resource info (workflows, credentials, data tables). */
var ARTIFACT_TOOLS = new Set([
	"build-workflow",
	"build-workflow-with-agent",
	"build-agent",
	"submit-workflow",
	"apply-workflow-credentials",
	"workflows",
	"credentials",
	"data-tables",
	"insert-data-table-rows",
	"update-data-table-rows",
	"delete-data-table-rows"
]);
var WORKFLOW_MUTATING_ACTIONS = new Set([
	"update",
	"restore-version",
	"setup"
]);
function entryFromAgentBuilderTarget(target, existing, fallbackName = "Untitled") {
	if (target?.type !== "agent" || !target.id) return void 0;
	const entry = {
		type: "agent",
		id: target.id,
		name: optionalString(target.name) ?? existing?.name ?? fallbackName
	};
	const projectId = optionalString(target.projectId) ?? existing?.projectId;
	if (projectId !== void 0) entry.projectId = projectId;
	return entry;
}
function extractFromToolCall(tc, col) {
	if (!ARTIFACT_TOOLS.has(tc.toolName)) return;
	if (!tc.result || typeof tc.result !== "object") return;
	const result = tc.result;
	if (Array.isArray(result.workflows)) for (const wf of result.workflows) {
		const entry = entryFromListItem("workflow", wf);
		if (entry) indexByName(col, entry);
	}
	if (typeof result.workflowId === "string") {
		const existing = col.produced.get(result.workflowId);
		const name = optionalString(result.workflowName) ?? optionalString(tc.args?.name) ?? existing?.name ?? "Untitled";
		recordProduced(col, {
			type: "workflow",
			id: result.workflowId,
			name
		});
	}
	if (tc.toolName === "workflows" && result.success === true && typeof tc.args?.workflowId === "string" && typeof tc.args.action === "string" && WORKFLOW_MUTATING_ACTIONS.has(tc.args.action)) {
		const workflowId = tc.args.workflowId;
		const existing = col.produced.get(workflowId);
		recordProduced(col, {
			type: "workflow",
			id: workflowId,
			name: optionalString(result.workflowName) ?? optionalString(tc.args.name) ?? existing?.name ?? "Untitled"
		});
	}
	if (tc.toolName === "workflows" && Array.isArray(result.nodes)) {
		const entry = entryFromListItem("workflow", result);
		if (entry) recordProduced(col, entry);
	}
	if (result.workflow && typeof result.workflow === "object") {
		const obj = result.workflow;
		if (typeof obj.id === "string") {
			const existing = col.produced.get(obj.id);
			const name = optionalString(obj.name) ?? existing?.name ?? "Untitled";
			const entry = {
				type: "workflow",
				id: obj.id,
				name
			};
			const createdAt = optionalString(obj.createdAt);
			const updatedAt = optionalString(obj.updatedAt);
			const projectId = optionalString(obj.projectId);
			if (createdAt !== void 0) entry.createdAt = createdAt;
			if (updatedAt !== void 0) entry.updatedAt = updatedAt;
			if (projectId !== void 0) entry.projectId = projectId;
			recordProduced(col, entry);
		}
	}
	if (tc.toolName === "build-agent" && typeof result.agentId === "string") {
		const existing = col.produced.get(result.agentId);
		recordProduced(col, {
			type: "agent",
			id: result.agentId,
			name: optionalString(result.agentName) ?? existing?.name ?? "Untitled"
		});
	}
	if (Array.isArray(result.credentials)) for (const cred of result.credentials) {
		const entry = entryFromListItem("credential", cred);
		if (entry) indexByName(col, entry);
	}
	if (Array.isArray(result.tables)) for (const table of result.tables) {
		const entry = entryFromListItem("data-table", table);
		if (entry) indexByName(col, entry);
	}
	if (Array.isArray(result.dataTables)) for (const table of result.dataTables) {
		const entry = entryFromListItem("data-table", table);
		if (entry) indexByName(col, entry);
	}
	if (result.table && typeof result.table === "object") {
		const obj = result.table;
		if (typeof obj.id === "string") {
			const existing = col.produced.get(obj.id);
			const name = optionalString(obj.name) ?? existing?.name ?? obj.id;
			const entry = {
				type: "data-table",
				id: obj.id,
				name
			};
			const createdAt = optionalString(obj.createdAt);
			const updatedAt = optionalString(obj.updatedAt);
			const projectId = optionalString(obj.projectId);
			if (createdAt !== void 0) entry.createdAt = createdAt;
			if (updatedAt !== void 0) entry.updatedAt = updatedAt;
			if (projectId !== void 0) entry.projectId = projectId;
			recordProduced(col, entry);
		}
	}
	if (typeof result.dataTableId === "string" && typeof result.projectId === "string") {
		const existing = col.produced.get(result.dataTableId);
		const name = optionalString(result.tableName) ?? optionalString(result.dataTableName) ?? existing?.name ?? result.dataTableId;
		const dataTableAction = optionalString(tc.args?.action);
		const isReadOnlyLookup = tc.toolName === "data-tables" && (dataTableAction === "schema" || dataTableAction === "query");
		recordProduced(col, {
			type: "data-table",
			id: result.dataTableId,
			name,
			projectId: result.projectId
		}, { linkable: !isReadOnlyLookup });
	}
}
/**
* Register the agent's `targetResource` as a produced artifact when it carries
* a concrete resource id (e.g. a workflow-builder spawned to edit an existing
* workflow). Surfacing this at spawn time — before the first build-workflow
* tool result arrives — lets the artifacts panel show the workflow as soon as
* the sub-agent starts, instead of waiting for the first edit.
*/
function extractFromTargetResource(node, col) {
	const target = node.targetResource;
	if (!target?.id) return;
	if (target.type !== "workflow" && target.type !== "data-table" && target.type !== "agent") return;
	const existing = col.produced.get(target.id);
	const name = optionalString(target.name) ?? existing?.name ?? "Untitled";
	if (target.type === "agent") {
		const entry = entryFromAgentBuilderTarget(target, existing, name);
		if (entry) recordProduced(col, entry);
		return;
	}
	recordProduced(col, {
		type: target.type,
		id: target.id,
		name
	});
}
function collectFromAgentNode(node, col) {
	extractFromTargetResource(node, col);
	for (const tc of node.toolCalls) extractFromToolCall(tc, col);
	for (const child of node.children) collectFromAgentNode(child, col);
}
/**
* Register resource attachments on a (user) message as produced artifacts —
* e.g. the editor hand-off attaches the current workflow or agent, which then
* shows as an artifact tab even before the agent acts on it.
*/
function collectFromMessageAttachments(message, col) {
	for (const attachment of message.attachments ?? []) if (attachment.type === "workflow") recordProduced(col, {
		type: "workflow",
		id: attachment.id,
		name: attachment.name ?? "Untitled"
	});
	else if (attachment.type === "agent") recordProduced(col, {
		type: "agent",
		id: attachment.id,
		name: attachment.name ?? "Untitled",
		projectId: attachment.projectId,
		...attachment.pending ? { pending: true } : {}
	}, { linkable: !attachment.pending });
}
function enrichAgentFromBuilderTarget(col, target) {
	if (!target) return;
	const existing = col.produced.get(target.agentId);
	if (existing && existing.type !== "agent") return;
	const eventName = existing && !existing.pending && existing.name !== "Untitled" ? existing.name : void 0;
	recordProduced(col, {
		type: "agent",
		id: target.agentId,
		name: eventName ?? target.name ?? "Untitled",
		projectId: target.projectId
	}, { linkable: existing !== void 0 });
}
function enrichWorkflowNames(col, workflowNameLookup) {
	for (const entry of col.produced.values()) {
		if (entry.type !== "workflow") continue;
		const storeName = workflowNameLookup(entry.id);
		if (storeName && storeName !== entry.name) {
			col.byName.delete(entry.name.toLowerCase());
			col.linkableByName.delete(entry.name.toLowerCase());
			entry.name = storeName;
			col.byName.set(storeName.toLowerCase(), entry);
			col.linkableByName.set(storeName.toLowerCase(), entry);
		}
	}
}
/**
* Surface a workflow the editor handed off before any message carries it, so
* the canvas tab opens on arrival. Skipped once a message attachment (or any
* other producer) already knows this id.
*/
function enrichWorkflowFromPendingAttachment(col, pending) {
	if (!pending) return;
	if (col.produced.has(pending.id)) return;
	recordProduced(col, {
		type: "workflow",
		id: pending.id,
		name: optionalString(pending.name) ?? "Untitled"
	}, { linkable: true });
}
/**
* Surface a new-agent artifact the user opened but has not configured yet, so
* the panel can show it before any agent row exists.
*
* Skipped once anything else knows this id — a bound target, or a builder event
* — because that means the agent was persisted and the marker is only still
* there because the thread-metadata API can merge keys but not delete them.
*/
function enrichAgentFromPendingTarget(col, pending, boundTarget) {
	if (!pending) return;
	if (boundTarget?.agentId === pending.agentId) return;
	if (col.produced.has(pending.agentId)) return;
	recordProduced(col, {
		type: "agent",
		id: pending.agentId,
		name: pending.name,
		projectId: pending.projectId,
		pending: true
	}, { linkable: false });
}
/**
* Scans tool-call results in the conversation and returns two collections:
*
* - `producedArtifacts` (keyed by resource id) — things the agent built,
*   submitted, created, or mutated. Powers the Artifacts panel and the
*   canvas preview tabs. Repeated writes to the same resource update the
*   existing entry instead of creating a duplicate.
*
* - `resourceNameIndex` (keyed by lowercased name) — every named resource
*   seen in any tool call, including list results. Used for resource metadata
*   lookups after explicit links have rendered.
*
* - `linkableResourceNameIndex` (keyed by lowercased name) — only resources
*   produced or mutated by the agent. Used for markdown name→link replacement
*   so passive list/search results cannot rewrite ordinary prose.
*/
function useResourceRegistry(messages, workflowNameLookup, archivedWorkflowIds, agentBuilderTarget, pendingAgentTarget, pendingWorkflowAttachment) {
	const producedArtifacts = reactive(/* @__PURE__ */ new Map());
	const resourceNameIndex = reactive(/* @__PURE__ */ new Map());
	const linkableResourceNameIndex = reactive(/* @__PURE__ */ new Map());
	watch(() => {
		const col = {
			produced: /* @__PURE__ */ new Map(),
			byName: /* @__PURE__ */ new Map(),
			linkableByName: /* @__PURE__ */ new Map()
		};
		for (const msg of messages()) {
			collectFromMessageAttachments(msg, col);
			if (msg.agentTree) collectFromAgentNode(msg.agentTree, col);
		}
		const boundTarget = agentBuilderTarget?.();
		enrichAgentFromBuilderTarget(col, boundTarget);
		enrichAgentFromPendingTarget(col, pendingAgentTarget?.(), boundTarget);
		enrichWorkflowFromPendingAttachment(col, pendingWorkflowAttachment?.());
		if (workflowNameLookup) enrichWorkflowNames(col, workflowNameLookup);
		const archived = archivedWorkflowIds?.();
		if (archived && archived.size > 0) {
			for (const entry of col.produced.values()) if (entry.type === "workflow" && archived.has(entry.id)) entry.archived = true;
		}
		return col;
	}, (col) => {
		reconcileMap(producedArtifacts, col.produced);
		reconcileMap(resourceNameIndex, col.byName);
		reconcileMap(linkableResourceNameIndex, col.linkableByName);
	}, { immediate: true });
	return {
		producedArtifacts,
		resourceNameIndex,
		linkableResourceNameIndex
	};
}
/** Sync `target` to `next` with minimal writes — unchanged entries trigger no subscribers. */
function reconcileMap(target, next) {
	for (const key of [...target.keys()]) if (!next.has(key)) target.delete(key);
	for (const [key, entry] of next) {
		const existing = target.get(key);
		if (existing) reconcileEntryFields(existing, entry);
		else target.set(key, entry);
	}
}
/**
* Per-field sync: `Object.assign` writes through the proxy (equal values
* trigger nothing), the sweep deletes fields the new entry no longer carries.
*/
function reconcileEntryFields(existing, next) {
	for (const key of Object.keys(existing)) if (!(key in next)) Reflect.deleteProperty(existing, key);
	Object.assign(existing, next);
}
//#endregion
//#region src/features/ai/instanceAi/threadArtifacts.ts
var MAX_THREAD_ARTIFACTS = 20;
function isThreadArtifactType(type) {
	return type === "workflow" || type === "agent" || type === "data-table";
}
/**
* Build the per-turn index the backend injects inside `<thread-context>`.
* Matches the thread preview tabs: ids and names only.
*/
function buildThreadArtifactsContext(produced, activeId) {
	const all = [];
	for (const entry of produced) {
		if (!isThreadArtifactType(entry.type)) continue;
		all.push({
			type: entry.type,
			id: entry.id,
			...entry.name ? { name: entry.name } : {},
			...entry.projectId ? { projectId: entry.projectId } : {},
			...entry.pending ? { pending: true } : {},
			...entry.archived ? { archived: true } : {}
		});
	}
	if (all.length === 0) return void 0;
	const active = all.find((artifact) => artifact.id === activeId);
	let artifacts = all.slice(-MAX_THREAD_ARTIFACTS);
	if (active && !artifacts.includes(active)) artifacts = [active, ...artifacts.slice(1)];
	return {
		artifacts,
		...active ? { activeId: active.id } : {}
	};
}
//#endregion
//#region src/features/ai/instanceAi/useResponseFeedback.ts
function hasActiveAgent(node) {
	if (node.status === "active") return true;
	return node.children.some((child) => hasActiveAgent(child));
}
function hasLoadingToolCall(node) {
	if (node.toolCalls.some((tc) => tc.isLoading)) return true;
	return node.children.some((child) => hasLoadingToolCall(child));
}
function hasPendingConfirmation(node) {
	if (node.toolCalls.some((tc) => tc.confirmation && tc.confirmationStatus === "pending")) return true;
	return node.children.some((child) => hasPendingConfirmation(child));
}
function useResponseFeedback({ messages, threadId, telemetry, postFeedback }) {
	const feedbackByResponseId = ref({});
	const ratingByResponseId = /* @__PURE__ */ new Map();
	/**
	* Computes the one currently rateable response identity for the thread.
	* Uses `messageGroupId ?? id` as the response identity.
	*
	* A response is rateable only when:
	* - It is the latest assistant response group
	* - No user message exists after it
	* - The response is no longer streaming
	* - No agent in the tree is still active
	* - No tool call in the tree is still loading
	* - No confirmation/input request is pending
	* - The final state is `completed` or a settled `error` (not cancelled)
	*/
	const rateableResponseId = computed(() => {
		let lastAssistantIdx = -1;
		for (let i = messages.value.length - 1; i >= 0; i--) if (messages.value[i].role === "assistant") {
			lastAssistantIdx = i;
			break;
		}
		if (lastAssistantIdx === -1) return null;
		const lastAssistant = messages.value[lastAssistantIdx];
		for (let i = lastAssistantIdx + 1; i < messages.value.length; i++) if (messages.value[i].role === "user") return null;
		if (lastAssistant.isStreaming) return null;
		const tree = lastAssistant.agentTree;
		if (tree) {
			if (hasActiveAgent(tree)) return null;
			if (hasLoadingToolCall(tree)) return null;
			if (hasPendingConfirmation(tree)) return null;
			if (tree.status === "cancelled") return null;
			if (tree.status !== "completed" && tree.status !== "error") return null;
		}
		return lastAssistant.messageGroupId ?? lastAssistant.id;
	});
	/**
	* Submit response feedback (rating or text). Saves locally and emits telemetry.
	*
	* For thumbs-up: records immediately as submitted (final action).
	* For thumbs-down: emits telemetry but does NOT mark as submitted yet
	* (the user may still type text feedback or cancel).
	* For text feedback: records as submitted (final action after thumbs-down).
	*/
	function submitFeedback(responseId, payload) {
		if (!isSafeObjectKey(responseId)) return;
		if (payload.rating) {
			telemetry.track("User rated workflow generation", {
				thread_id: threadId,
				response_id: responseId,
				helpful: payload.rating === "up"
			});
			if (payload.rating === "up") feedbackByResponseId.value[responseId] = payload;
		}
		if (payload.feedback !== void 0) {
			telemetry.track("User submitted workflow generation feedback", {
				thread_id: threadId,
				response_id: responseId,
				feedback: redactTelemetryText(payload.feedback)
			});
			feedbackByResponseId.value[responseId] = {
				...feedbackByResponseId.value[responseId],
				...payload
			};
		}
		if (payload.rating) ratingByResponseId.set(responseId, payload.rating);
		if (postFeedback) {
			const rating = payload.rating ?? ratingByResponseId.get(responseId);
			if (rating) postFeedback(threadId, responseId, {
				rating,
				...payload.feedback !== void 0 ? { comment: payload.feedback } : {}
			}).catch(() => {});
		}
	}
	/** Clear all feedback state (e.g. on thread switch). */
	function resetFeedback() {
		feedbackByResponseId.value = {};
		ratingByResponseId.clear();
	}
	return {
		feedbackByResponseId,
		rateableResponseId,
		submitFeedback,
		resetFeedback
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.liveRunState.ts
function isOrchestratorLive(status) {
	return status.hasActiveRun || status.isSuspended;
}
function findLastAssistantMessage(messages) {
	return [...messages].reverse().find((m) => m.role === "assistant");
}
function findToolCallInTree(node, requestId) {
	for (const tc of node.toolCalls) if (tc.confirmation?.requestId === requestId) return tc;
	for (const child of node.children) {
		const found = findToolCallInTree(child, requestId);
		if (found) return found;
	}
}
function findRunIdForRequestId(messages, requestId) {
	for (const msg of messages) {
		if (msg.role !== "assistant" || !msg.agentTree) continue;
		if (findToolCallInTree(msg.agentTree, requestId)) return msg.runIds?.at(-1) ?? msg.runId ?? null;
	}
	return null;
}
function resolveActiveRunId(options) {
	if (options.confirmRunId) return options.confirmRunId;
	if (options.apiRunId) return options.apiRunId;
	if (options.requestId) {
		const fromRequest = findRunIdForRequestId(options.messages, options.requestId);
		if (fromRequest) return fromRequest;
	}
	const lastAssistant = findLastAssistantMessage(options.messages);
	if (!lastAssistant) return null;
	return lastAssistant.runIds?.at(-1) ?? lastAssistant.runId ?? null;
}
function markAssistantMessageStreaming(messages, runId) {
	for (const msg of messages) {
		if (msg.role !== "assistant") continue;
		if (msg.runId === runId || msg.runIds?.includes(runId)) {
			msg.isStreaming = true;
			return;
		}
	}
	const lastAssistant = findLastAssistantMessage(messages);
	if (lastAssistant) lastAssistant.isStreaming = true;
}
function syncLiveRunFromStatus(status, messages) {
	if (!isOrchestratorLive(status)) return null;
	const runId = resolveActiveRunId({
		apiRunId: status.runId,
		messages
	});
	if (!runId) return null;
	markAssistantMessageStreaming(messages, runId);
	return runId;
}
function shouldRearmRunAfterConfirm(payload) {
	switch (payload.kind) {
		case "approval":
		case "credentialDestination": return payload.approved === true;
		case "credentialSelection":
		case "domainAccessApprove":
		case "resourceDecision":
		case "questions":
		case "setupWorkflowApply":
		case "setupWorkflowTestTrigger":
		case "mcpConnect": return true;
		default: return false;
	}
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.responseTiming.ts
/** A high-resolution timestamp that remains comparable across browser windows. */
function instanceAiResponseNow() {
	return performance.timeOrigin + performance.now();
}
//#endregion
//#region src/features/ai/instanceAi/planReview.utils.ts
/** Map the simplified task checklist to the richer planned-task shape. */
function mapTaskItemsToPlannedTasks(tasks) {
	if (!tasks?.tasks?.length) return void 0;
	return tasks.tasks.map((t) => ({
		id: t.id,
		title: t.description,
		kind: "",
		spec: "",
		deps: []
	}));
}
/**
* First source that actually holds tasks. An empty array means "no tasks here",
* the same reading `isDisplayableConfirmationRequest` takes, so it has to fall
* through to the next source instead of ending the search.
*/
function firstNonEmpty(...sources) {
	return sources.find((source) => source?.length) ?? [];
}
/**
* Resolve the planned tasks a plan-review card is about.
*
* The `create-tasks` suspend payload carries `tasks` only, so `planItems` is
* empty on a live card and `args.tasks` is the real source. Keep all three
* sources in one place — a count taken from `planItems` alone reports zero.
*/
function resolvePlanTasks(tc) {
	return firstNonEmpty(tc.confirmation?.planItems, tc.args?.tasks, mapTaskItemsToPlannedTasks(tc.confirmation?.tasks));
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.threadRuntime.ts
var MAX_DEBUG_EVENTS = 1e3;
/** Tool calls that end the onboarding flow, with the outcome each one reports. */
var ONBOARDING_EXIT_OUTCOMES = new Map([["leave-onboarding", "left"], ["build-workflow", "build"]]);
/** Mirrors the backend's per-thread event buffer cap (MAX_EVENTS_PER_THREAD × 2). */
var MAX_SEEN_EVENT_IDS = 1e3;
/** Silence window after which an active run with no stream traffic counts as stalled. */
var GENERATION_STALL_TIMEOUT_MS = 6e4;
/**
* The title a thread shows in a header: the summary title once the server has
* generated one, else the first user message (truncated), else undefined —
* rendering only on a defined value avoids a "New conversation" → real title
* flash. Shared by `InstanceAiThreadView` and the embedded `InstanceAiChatPanel`.
*/
function getThreadDisplayTitle(summary, messages) {
	if (summary?.title && summary.title !== "New conversation") return summary.title;
	const firstUserMessage = messages.find((message) => message.role === "user");
	if (firstUserMessage?.content) {
		const text = firstUserMessage.content.trim();
		return text.length > 60 ? text.slice(0, 60) + "…" : text;
	}
}
function getAgentBuilderTargetFromThreadMetadata(metadata) {
	const raw = metadata?.[INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY];
	if (!raw || typeof raw !== "object") return void 0;
	const target = raw;
	if (typeof target.agentId !== "string" || typeof target.projectId !== "string") return void 0;
	return {
		agentId: target.agentId,
		projectId: target.projectId,
		...typeof target.name === "string" ? { name: target.name } : {}
	};
}
function getPendingAgentTargetFromThreadMetadata(metadata) {
	const raw = metadata?.[INSTANCE_AI_PENDING_AGENT_METADATA_KEY];
	if (!raw || typeof raw !== "object") return void 0;
	const target = raw;
	if (typeof target.agentId !== "string" || typeof target.projectId !== "string") return void 0;
	return {
		agentId: target.agentId,
		projectId: target.projectId
	};
}
function getAgentPreviewViewFromThreadMetadata(metadata) {
	return getAgentPreviewTargetFromThreadMetadata(metadata, INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY);
}
function getAgentPreviewSessionFromThreadMetadata(metadata) {
	return getAgentPreviewTargetFromThreadMetadata(metadata, INSTANCE_AI_AGENT_PREVIEW_SESSION_METADATA_KEY);
}
function getAgentPreviewTargetFromThreadMetadata(metadata, metadataKey) {
	const raw = metadata?.[metadataKey];
	if (!raw || typeof raw !== "object") return void 0;
	const target = raw;
	if (typeof target.agentId !== "string" || typeof target.threadId !== "string") return void 0;
	return {
		agentId: target.agentId,
		threadId: target.threadId
	};
}
/**
* Walk an agent tree, collecting every tool call whose confirmation the user can
* still act on. Callers split the result by where it renders: the confirmation
* panel takes most kinds, while plan review and the MCP connect card render
* inline in the timeline.
*
* Expired cards are left out entirely — they render as a terminal "this action
* has expired" state in their inline slot, and treating one as actionable would
* offer a resolution the server rejects.
*/
function collectActionableConfirmations(node, messageId, resolved, out) {
	for (const tc of node.toolCalls) if (tc.confirmation && tc.isLoading && tc.confirmationStatus !== "approved" && tc.confirmationStatus !== "denied" && !resolved.has(tc.confirmation.requestId) && !tc.confirmation.expired) out.push({
		toolCall: tc,
		agentNode: node,
		messageId
	});
	for (const child of node.children) collectActionableConfirmations(child, messageId, resolved, out);
}
/** Confirmations the panel owns: everything except the timeline-rendered kinds. */
function isPanelConfirmation(item) {
	const conf = item.toolCall.confirmation;
	return conf.inputType !== "plan-review" && !conf.mcpConnectRequest;
}
/**
* Whether any tool call in the tree still waits on user input. Broader than
* `collectActionableConfirmations`: expired confirmations also pause the run, so
* the stall watchdog must not count them as thinking time.
*/
function hasUnresolvedConfirmation(node, resolved) {
	for (const tc of node.toolCalls) if (tc.confirmation && tc.isLoading && tc.confirmationStatus !== "approved" && tc.confirmationStatus !== "denied" && !resolved.has(tc.confirmation.requestId)) return true;
	return node.children.some((child) => hasUnresolvedConfirmation(child, resolved));
}
function findLatestTasksFromMessages(messages) {
	for (let i = messages.length - 1; i >= 0; i--) {
		const tasks = messages[i].agentTree?.tasks;
		if (tasks) return tasks;
	}
	return null;
}
/**
* Latest setup-items snapshot per workflowId across all messages (newest wins
* per key). Bounded by the hydrated message page: snapshots older than the
* page are deliberately not resurrected — at rest the panel derives its state
* from the saved workflow itself, the event feed only covers live builds.
*
* Message position is the recency proxy for restored snapshots — if parallel
* emitters across message groups ever land, stamp the events with a sequence
* instead of trusting position.
*/
function findLatestSetupItemsFromMessages(messages) {
	const result = {};
	for (let i = messages.length - 1; i >= 0; i--) {
		const byWorkflowId = messages[i].agentTree?.setupItemsByWorkflowId;
		if (!byWorkflowId) continue;
		for (const [workflowId, items] of Object.entries(byWorkflowId)) {
			if (!isSafeObjectKey(workflowId)) continue;
			if (!Object.hasOwn(result, workflowId)) result[workflowId] = items;
		}
	}
	return result;
}
/**
* Collapse runs of consecutive `text-delta` / `reasoning-delta` events from the
* same agent into a single entry per run. Other events pass through unchanged.
* Pure: same input array → same output array, no shared state.
*/
function collapseDeltaEvents(events) {
	const collapsed = [];
	let pendingText = null;
	let pendingReasoning = null;
	const flushText = () => {
		if (!pendingText) return;
		pendingText.event.payload.text = pendingText.buffer;
		collapsed.push({
			timestamp: pendingText.timestamp,
			event: pendingText.event
		});
		pendingText = null;
	};
	const flushReasoning = () => {
		if (!pendingReasoning) return;
		pendingReasoning.event.payload.text = pendingReasoning.buffer;
		collapsed.push({
			timestamp: pendingReasoning.timestamp,
			event: pendingReasoning.event
		});
		pendingReasoning = null;
	};
	for (const entry of events) {
		const { event } = entry;
		if (event.type === "text-delta") {
			if (pendingText && pendingText.event.agentId === event.agentId) pendingText.buffer += event.payload.text;
			else {
				flushText();
				pendingText = {
					timestamp: entry.timestamp,
					event: {
						...event,
						payload: { ...event.payload }
					},
					buffer: event.payload.text
				};
			}
			continue;
		}
		if (event.type === "reasoning-delta") {
			if (pendingReasoning && pendingReasoning.event.agentId === event.agentId) pendingReasoning.buffer += event.payload.text;
			else {
				flushReasoning();
				pendingReasoning = {
					timestamp: entry.timestamp,
					event: {
						...event,
						payload: { ...event.payload }
					},
					buffer: event.payload.text
				};
			}
			continue;
		}
		flushText();
		flushReasoning();
		collapsed.push(entry);
	}
	flushText();
	flushReasoning();
	return collapsed;
}
/**
* Walk historical messages and build the reducer routing maps that SSE replay
* events need to reduce into existing run state. Each message's agent tree is
* adopted (not copied) into its run state, so replayed/live events mutate the
* exact nodes the message renders.
*
* - `runStateByGroupId`: run state per message group id, adopting `msg.agentTree`
* - `groupIdByRunId`: every runId in the group → its group id, so late events
*   from older runs in a merged A→B→C chain still route to the right message
*/
function buildRoutingFromMessages(messages) {
	const runStateByGroupId = /* @__PURE__ */ new Map();
	const groupIdByRunId = /* @__PURE__ */ new Map();
	for (const msg of messages) {
		if (msg.role !== "assistant" || !msg.agentTree) continue;
		const groupId = msg.messageGroupId ?? msg.runId;
		if (!groupId || !isSafeObjectKey(groupId)) continue;
		const rebuiltRunState = createRunStateFromTree(msg.agentTree);
		if (!rebuiltRunState) continue;
		runStateByGroupId.set(groupId, rebuiltRunState);
		if (msg.runIds) for (const rid of msg.runIds) {
			if (!isSafeObjectKey(rid)) continue;
			groupIdByRunId.set(rid, groupId);
		}
		if (msg.runId && isSafeObjectKey(msg.runId)) groupIdByRunId.set(msg.runId, groupId);
	}
	return {
		runStateByGroupId,
		groupIdByRunId
	};
}
/**
* Owns state for exactly one thread: messages, SSE, reducer state, hydration,
* feedback and resource registries.
*/
function createThreadRuntime(threadId, hooks, initialProjectId) {
	const rootStore = useRootStore();
	const instanceAiSettingsStore = useInstanceAiSettingsStore();
	const workflowsListStore = useWorkflowsListStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const i18n = useI18n();
	let readSetupChatTelemetryContext;
	function registerSetupChatTelemetryContext(reader) {
		readSetupChatTelemetryContext = reader;
		return () => {
			if (readSetupChatTelemetryContext === reader) readSetupChatTelemetryContext = void 0;
		};
	}
	const messages = ref([]);
	const projectId = ref(initialProjectId);
	const activeRunId = ref(null);
	const archivedWorkflowIds = ref(/* @__PURE__ */ new Set());
	const latestTasks = ref(null);
	const latestSetupItems = ref(null);
	const debugEvents = ref([]);
	const resolvedConfirmationIds = reactive(/* @__PURE__ */ new Map());
	const pendingMessageCount = ref(0);
	const hydrationStatus = ref("idle");
	const sseState = ref("disconnected");
	const lastEventId = ref(void 0);
	/** Focused preview tab id while the artifacts preview is open. */
	const activeArtifactId = ref();
	const seenEventIds = /* @__PURE__ */ new Set();
	const amendContext = ref(null);
	const updatingPlanRequestIds = reactive(/* @__PURE__ */ new Set());
	const pendingHandoff = ref(null);
	function setPendingHandoff(value) {
		pendingHandoff.value = value;
	}
	function consumePendingHandoff(workflowId) {
		const pending = pendingHandoff.value;
		if (pending?.workflowId !== workflowId) return void 0;
		pendingHandoff.value = null;
		return {
			workflow: pending.workflow,
			execution: pending.execution
		};
	}
	/** Workflow stashed by a no-message hand-off; cleared after the first send. */
	const pendingWorkflowAttachment = ref(null);
	function setPendingWorkflowAttachment(value) {
		pendingWorkflowAttachment.value = value;
	}
	function clearPendingWorkflowAttachment() {
		pendingWorkflowAttachment.value = null;
	}
	const rememberedManualExecutions = /* @__PURE__ */ new Map();
	function rememberManualExecution(workflowId, executionId, agentExecutionId) {
		rememberedManualExecutions.set(workflowId, {
			executionId,
			agentExecutionId
		});
	}
	function getRememberedManualExecution(workflowId) {
		return rememberedManualExecutions.get(workflowId);
	}
	function forgetManualExecution(workflowId) {
		rememberedManualExecutions.delete(workflowId);
	}
	const runStateByGroupId = /* @__PURE__ */ new Map();
	const groupIdByRunId = /* @__PURE__ */ new Map();
	const pendingResponseMetrics = /* @__PURE__ */ new Map();
	const earlyResponseSignals = /* @__PURE__ */ new Map();
	const earlyTerminalRunIds = /* @__PURE__ */ new Set();
	let responseMetricGeneration = 0;
	let eventSource = null;
	let sseGeneration = 0;
	let hydrationGeneration = 0;
	let hydrationPromise = null;
	const isStreaming = computed(() => activeRunId.value !== null);
	const isSendingMessage = computed(() => pendingMessageCount.value > 0);
	const hasMessages = computed(() => messages.value.length > 0);
	const isHydratingThread = computed(() => hydrationStatus.value === "hydrating");
	const { producedArtifacts, resourceNameIndex, linkableResourceNameIndex } = useResourceRegistry(() => messages.value, (id) => workflowsListStore.getWorkflowById(id)?.name, () => archivedWorkflowIds.value, () => getAgentBuilderTargetFromThreadMetadata(hooks.getThreadMetadata?.(threadId)), () => {
		const pending = getPendingAgentTargetFromThreadMetadata(hooks.getThreadMetadata?.(threadId));
		return pending ? {
			...pending,
			name: i18n.baseText("agents.new.defaultName")
		} : void 0;
	}, () => pendingWorkflowAttachment.value ?? void 0);
	const { feedbackByResponseId, rateableResponseId, submitFeedback, resetFeedback } = useResponseFeedback({
		messages,
		threadId,
		telemetry,
		postFeedback: async (tid, responseId, payload) => await postFeedback(rootStore.restApiContext, tid, responseId, payload)
	});
	/** The latest task list, preferring explicit tasks-update events over tree snapshots. */
	const currentTasks = computed(() => latestTasks.value ?? findLatestTasksFromMessages(messages.value));
	/**
	* Latest setup-items snapshot per workflowId — restored messages as the
	* base, live setup-items events (strictly newer) overriding per key.
	*/
	const setupItemsByWorkflowId = computed(() => ({
		...findLatestSetupItemsFromMessages(messages.value),
		...latestSetupItems.value
	}));
	const latestSetupWorkflowId = computed(() => {
		let latest;
		for (const message of messages.value) {
			const announcement = message.agentTree?.latestSetupAnnouncement;
			if (announcement && (!latest || announcement.timestamp >= latest.timestamp)) latest = announcement;
		}
		if (latest) return latest.workflowId;
		for (const message of messages.value.toReversed()) {
			const workflowIds = Object.keys(message.agentTree?.setupItemsByWorkflowId ?? {});
			if (workflowIds.length > 0) return workflowIds.length === 1 ? workflowIds[0] : void 0;
		}
	});
	const latestBuildResult = computed(() => {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const tree = messages.value[i].agentTree;
			if (tree) {
				const result = getLatestBuildResult(tree);
				if (result) return result;
			}
		}
		return null;
	});
	const reportedBuiltWorkflowIds = /* @__PURE__ */ new Set();
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || isHydratingThread.value) return;
		const workflowId = latestBuildResult.value?.workflowId;
		if (!workflowId || reportedBuiltWorkflowIds.has(workflowId)) return;
		reportedBuiltWorkflowIds.add(workflowId);
		telemetry.track("User viewed new builder workflow", {
			thread_id: threadId,
			instance_id: rootStore.instanceId,
			workflow_id: workflowId
		});
	}, { flush: "sync" });
	function responseKindForEvent(event) {
		if (event.type === "confirmation-request") {
			const confirmation = pendingConfirmations.value.find((item) => item.toolCall.confirmation.requestId === event.payload.requestId);
			return confirmation && hasSessionAlwaysAllowGrant(confirmation) ? void 0 : "awaiting_input";
		}
		if (event.type !== "run-finish") return void 0;
		return event.payload.status === "completed" ? "completed" : null;
	}
	async function observeResponseRender() {
		await nextTick();
		const tabVisible = document.visibilityState === "visible";
		if (tabVisible) await new Promise((resolve) => requestAnimationFrame(() => resolve()));
		return {
			atEpochMs: instanceAiResponseNow(),
			tabVisible
		};
	}
	function createResponseSignal(responseKind) {
		if (responseKind === null) return { kind: "discard" };
		return {
			kind: "received",
			responseKind,
			rendered: observeResponseRender()
		};
	}
	function settleResponseMetric(runId, metric, signal) {
		pendingResponseMetrics.delete(runId);
		if (signal.kind === "discard") return;
		signal.rendered.then(({ atEpochMs, tabVisible }) => {
			if (metric.generation !== responseMetricGeneration) return;
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_RECEIVED_AI_ASSISTANT_RESPONSE, {
				instance_id: rootStore.instanceId,
				thread_id: threadId,
				run_id: runId,
				latency_ms: Math.max(0, Math.round(atEpochMs - metric.startedAtEpochMs)),
				is_first_user_message: metric.isFirstUserMessage,
				response_kind: signal.responseKind,
				action_source: metric.actionSource,
				tab_visible: tabVisible
			});
		});
	}
	function handleResponseMetricEvent(event) {
		const responseKind = responseKindForEvent(event);
		if (responseKind === void 0) return;
		if (event.type === "run-finish" && pendingMessageCount.value > 0) earlyTerminalRunIds.add(event.runId);
		const pendingMetric = pendingResponseMetrics.get(event.runId);
		if (!pendingMetric && pendingMessageCount.value === 0) return;
		const signal = createResponseSignal(responseKind);
		if (pendingMetric) settleResponseMetric(event.runId, pendingMetric, signal);
		else if (!earlyResponseSignals.has(event.runId)) earlyResponseSignals.set(event.runId, signal);
	}
	function registerResponseMetric(runId, metric) {
		pendingResponseMetrics.set(runId, metric);
		const earlySignal = earlyResponseSignals.get(runId);
		if (!earlySignal) return;
		earlyResponseSignals.delete(runId);
		settleResponseMetric(runId, metric, earlySignal);
	}
	let generationStallTimer = null;
	const isAwaitingUserInput = computed(() => {
		const runId = activeRunId.value;
		if (runId === null) return false;
		const activeMessage = messages.value.find((m) => m.role === "assistant" && (m.runId === runId || (m.runIds?.includes(runId) ?? false)));
		if (!activeMessage?.agentTree) return false;
		return hasUnresolvedConfirmation(activeMessage.agentTree, resolvedConfirmationIds);
	});
	const isGenerationPending = computed(() => isStreaming.value && !isAwaitingUserInput.value);
	function disarmGenerationStallWatchdog() {
		if (generationStallTimer === null) return;
		clearTimeout(generationStallTimer);
		generationStallTimer = null;
	}
	/** (Re)start the silence countdown while generation is pending, stop it otherwise. */
	function resetGenerationStallWatchdog() {
		disarmGenerationStallWatchdog();
		if (!isGenerationPending.value) return;
		generationStallTimer = setTimeout(() => {
			generationStallTimer = null;
			telemetry.track("Builder generation stalled", { thread_id: threadId });
		}, GENERATION_STALL_TIMEOUT_MS);
	}
	watch(isGenerationPending, resetGenerationStallWatchdog);
	/**
	* Derive a single contextual follow-up suggestion from the last completed
	* assistant message. Shown as the input placeholder + Tab to autocomplete.
	*/
	const contextualSuggestion = computed(() => {
		if (isStreaming.value) return null;
		const lastAssistant = [...messages.value].reverse().find((m) => m.role === "assistant");
		if (!lastAssistant || lastAssistant.isStreaming) return null;
		const tree = lastAssistant.agentTree;
		if (!tree) return null;
		const builderChild = tree.children.find((c) => c.role === "workflow-builder");
		if (builderChild) return builderChild.status === "error" || builderChild.status === "cancelled" ? "Try building the workflow again with different settings" : "Add error handling to the workflow";
		return null;
	});
	/** Every confirmation the user can still act on, in document order. */
	const actionableConfirmations = computed(() => {
		const items = [];
		for (const msg of messages.value) {
			if (msg.role !== "assistant" || !msg.agentTree) continue;
			collectActionableConfirmations(msg.agentTree, msg.id, resolvedConfirmationIds, items);
		}
		return items;
	});
	/** All pending confirmations across all messages, for the top-level panel. */
	const pendingConfirmations = computed(() => actionableConfirmations.value.filter(isPanelConfirmation));
	/**
	* The plan review the composer currently routes messages into, if any.
	*
	* Newest wins: a revised plan stacks a fresh card on top of the superseded
	* one, so the last card is the one the user is looking at. This is the
	* opposite of the panel, which queues oldest-first.
	*
	* Only a card in the transcript tail counts. A later turn strands the older
	* card — a suspended run keeps its confirmation row alive and releases its
	* concurrency slot, so a new turn starts without settling it. Resuming that
	* requestId would revive an abandoned run, and a revision never appends a
	* message of its own, so "still the last message" holds for the whole review.
	*/
	const pendingPlanReview = computed(() => {
		for (let i = actionableConfirmations.value.length - 1; i >= 0; i--) {
			const item = actionableConfirmations.value[i];
			const conf = item.toolCall.confirmation;
			if (conf.inputType !== "plan-review") continue;
			if (item.messageId !== messages.value.at(-1)?.id) return null;
			return {
				requestId: conf.requestId,
				inputThreadId: conf.inputThreadId,
				taskCount: resolvePlanTasks(item.toolCall).length
			};
		}
		return null;
	});
	/** True while the run is paused awaiting the user to resolve a confirmation. */
	const isAwaitingConfirmation = computed(() => pendingConfirmations.value.length > 0);
	function resolveConfirmation(requestId, action) {
		resolvedConfirmationIds.set(requestId, action);
	}
	/** Find a tool call by its confirmation requestId across all messages. */
	function findToolCallByRequestId(requestId) {
		for (const msg of messages.value) {
			if (!msg.agentTree) continue;
			const found = findToolCallInTree(msg.agentTree, requestId);
			if (found) return found;
		}
	}
	function rearmRunState(runId) {
		if (!runId) return;
		const groupId = groupIdByRunId.get(runId);
		if (groupId && runStateByGroupId.get(groupId)?.status !== "active") return;
		activeRunId.value = runId;
		markAssistantMessageStreaming(messages.value, runId);
		triggerRef(messages);
	}
	const sessionAlwaysAllowKeys = ref(/* @__PURE__ */ new Set());
	function resolveAlwaysAllowWorkflowId(args, confirmationWorkflowId) {
		if (typeof args.workflowId === "string" && args.workflowId.length > 0) return args.workflowId;
		if (typeof confirmationWorkflowId === "string" && confirmationWorkflowId.length > 0) return confirmationWorkflowId;
		return "";
	}
	/**
	* Returns null when an edit grant cannot be scoped to a workflow ID — storing a
	* generic `build-workflow:` key would auto-approve later foreign edits.
	*/
	function buildAlwaysAllowKey(toolName, args, confirmationWorkflowId) {
		if (toolName === "submit-workflow") return `submit-workflow:${typeof args.workflowId === "string" && args.workflowId.length > 0 ? "update" : "create"}`;
		const action = typeof args.action === "string" ? args.action : "";
		const workflowId = resolveAlwaysAllowWorkflowId(args, confirmationWorkflowId);
		if (toolName === "executions" && action === "run") return buildRunWorkflowSessionGrantKey(workflowId);
		if (toolName === "executions" && action === "run-step") {
			const nodeName = typeof args.nodeName === "string" ? args.nodeName : "";
			if (!workflowId || !nodeName) return null;
			return buildRunStepSessionGrantKey(workflowId, nodeName);
		}
		if (toolName === "workflows" && action === "update" || toolName === "build-workflow") {
			if (!workflowId) return null;
			return buildUpdateWorkflowSessionGrantKey(workflowId);
		}
		if (toolName === "data-tables") return buildDataTablesSessionGrantKey(action);
		if (toolName === "nodes" && action === "execute") {
			const nodeType = typeof args.type === "string" ? args.type : "";
			if (!nodeType) return null;
			const config = isRecord(args.config) ? args.config : void 0;
			return buildExecuteNodeSessionGrantKey(nodeType, isRecord(config?.parameters) ? config.parameters : void 0);
		}
		return `${toolName}:${action}`;
	}
	function addAlwaysAllowKey(toolName, args, confirmationWorkflowId) {
		const key = buildAlwaysAllowKey(toolName, args, confirmationWorkflowId);
		if (key === null) return;
		const next = new Set(sessionAlwaysAllowKeys.value);
		next.add(key);
		sessionAlwaysAllowKeys.value = next;
	}
	/** False when Always allow cannot be scoped (e.g. workflow edit with no workflow ID). */
	function canAlwaysAllow(toolName, args, confirmationWorkflowId) {
		return buildAlwaysAllowKey(toolName, args, confirmationWorkflowId) !== null;
	}
	function isGenericApprovalEligible(item) {
		const conf = item.toolCall.confirmation;
		if (conf.targetApproval) return false;
		if (conf.credentialDestination) return false;
		if (conf.severity === "destructive") return false;
		if (conf.domainAccess) return false;
		if (conf.inputType) return false;
		if (conf.setupRequests?.length) return false;
		if (conf.credentialRequests?.length) return false;
		if (conf.credentialFlow) return false;
		if (conf.questions?.length) return false;
		if (conf.channelConfig) return false;
		return true;
	}
	function hasSessionAlwaysAllowGrant(item) {
		if (!isGenericApprovalEligible(item)) return false;
		const confirmation = item.toolCall.confirmation;
		const key = buildAlwaysAllowKey(item.toolCall.toolName, item.toolCall.args ?? {}, confirmation.workflowId);
		return key !== null && sessionAlwaysAllowKeys.value.has(key);
	}
	const autoApproveInFlight = /* @__PURE__ */ new Set();
	watch(pendingConfirmations, async (items) => {
		if (sessionAlwaysAllowKeys.value.size === 0) return;
		for (const item of items) {
			const conf = item.toolCall.confirmation;
			if (resolvedConfirmationIds.has(conf.requestId)) continue;
			if (autoApproveInFlight.has(conf.requestId)) continue;
			if (!hasSessionAlwaysAllowGrant(item)) continue;
			autoApproveInFlight.add(conf.requestId);
			try {
				if (!await confirmAction(conf.requestId, {
					kind: "approval",
					approved: true
				})) continue;
				resolveConfirmation(conf.requestId, "approved");
				telemetry.track("User finished providing input", redactTelemetryProperties({
					thread_id: threadId,
					input_thread_id: conf.inputThreadId ?? "",
					instance_id: rootStore.instanceId,
					type: "approval",
					provided_inputs: [{
						label: conf.message,
						options: [
							"approve",
							"deny",
							"approve_always"
						],
						option_chosen: "approve_auto"
					}],
					skipped_inputs: [],
					auto_resolved: true
				}));
			} finally {
				autoApproveInFlight.delete(conf.requestId);
			}
		}
	}, { deep: true });
	function onSSEMessage(sseEvent) {
		try {
			const parsed = instanceAiEventSchema.safeParse(JSON.parse(String(sseEvent.data)));
			if (!parsed.success) {
				console.warn("[InstanceAI] Invalid SSE event, skipping:", parsed.error.message);
				return;
			}
			const eventId = sseEvent.lastEventId ? Number(sseEvent.lastEventId) : void 0;
			if (eventId !== void 0 && Number.isFinite(eventId)) if (INSTANCE_AI_EPHEMERAL_EVENT_TYPES.has(parsed.data.type)) lastEventId.value = Math.max(lastEventId.value ?? 0, eventId);
			else {
				if (eventId === 1 && seenEventIds.has(1)) {
					seenEventIds.clear();
					lastEventId.value = void 0;
				}
				if (seenEventIds.has(eventId)) return;
				seenEventIds.add(eventId);
				if (seenEventIds.size > MAX_SEEN_EVENT_IDS) {
					const oldest = seenEventIds.values().next().value;
					if (oldest !== void 0) seenEventIds.delete(oldest);
				}
				lastEventId.value = Math.max(lastEventId.value ?? 0, eventId);
			}
			debugEvents.value.push({
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				event: parsed.data
			});
			if (debugEvents.value.length > MAX_DEBUG_EVENTS) debugEvents.value.splice(0, debugEvents.value.length - MAX_DEBUG_EVENTS);
			const previousRunId = activeRunId.value;
			activeRunId.value = handleEvent({
				messages: messages.value,
				activeRunId: activeRunId.value,
				runStateByGroupId,
				groupIdByRunId
			}, parsed.data);
			resetGenerationStallWatchdog();
			if (parsed.data.type === "tasks-update") latestTasks.value = parsed.data.payload.tasks;
			if (parsed.data.type === "setup-items" && isSafeObjectKey(parsed.data.payload.workflowId)) latestSetupItems.value = {
				...latestSetupItems.value,
				[parsed.data.payload.workflowId]: parsed.data.payload.items
			};
			if (parsed.data.type === "thread-title-updated") hooks.onTitleUpdated(threadId, parsed.data.payload.title);
			if (parsed.data.type === "tool-call") {
				const outcome = ONBOARDING_EXIT_OUTCOMES.get(parsed.data.payload.toolName);
				const reason = parsed.data.payload.args.reason;
				if (outcome) hooks.onOnboardingLeft?.(threadId, outcome, typeof reason === "string" ? reason : void 0);
			} else if (parsed.data.type === "run-finish" && (parsed.data.payload.status === "error" || parsed.data.payload.status === "interrupted")) hooks.onOnboardingLeft?.(threadId, "run_failed");
			if (parsed.data.type === "run-finish") {
				const ids = parsed.data.payload.archivedWorkflowIds;
				if (ids && ids.length > 0) {
					const next = new Set(archivedWorkflowIds.value);
					for (const id of ids) next.add(id);
					archivedWorkflowIds.value = next;
				}
			}
			if (parsed.data.type === "run-start" || parsed.data.type === "run-finish") triggerRef(messages);
			handleResponseMetricEvent(parsed.data);
			if (previousRunId && activeRunId.value === null) hooks.onRunFinish();
		} catch {}
	}
	/**
	* Handle run-sync control frames — full state snapshot from the backend.
	* Replaces the agent tree AND rebuilds the group-level run state so
	* subsequent live events have state to reduce into. Also restores the
	* runId → groupId mapping so late events from any run in the group route
	* to the correct message.
	*/
	function onRunSync(sseEvent) {
		try {
			const data = JSON.parse(String(sseEvent.data));
			const groupId = data.messageGroupId ?? data.runId;
			if (!isSafeObjectKey(data.runId) || !isSafeObjectKey(groupId)) return;
			const rebuiltRunState = createRunStateFromTree(data.agentTree);
			if (!rebuiltRunState) return;
			let msg;
			if (data.messageGroupId) msg = messages.value.find((m) => m.messageGroupId === data.messageGroupId && m.role === "assistant");
			if (!msg) msg = messages.value.find((m) => m.runId === data.runId);
			if (!msg) {
				messages.value.push({
					id: groupId,
					runId: data.runId,
					messageGroupId: groupId,
					runIds: data.runIds,
					role: "assistant",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					content: data.agentTree.textContent,
					reasoning: data.agentTree.reasoning,
					isStreaming: false,
					agentTree: data.agentTree
				});
				msg = messages.value[messages.value.length - 1];
			}
			msg.agentTree = data.agentTree;
			msg.runId = data.runId;
			msg.messageGroupId = groupId;
			msg.runIds = data.runIds;
			msg.content = data.agentTree.textContent;
			msg.reasoning = data.agentTree.reasoning;
			latestTasks.value = findLatestTasksFromMessages(messages.value);
			latestSetupItems.value = findLatestSetupItemsFromMessages(messages.value);
			const isOrchestratorLive = data.status === "active" || data.status === "suspended";
			msg.isStreaming = isOrchestratorLive;
			if (isOrchestratorLive) activeRunId.value = data.runId;
			runStateByGroupId.set(groupId, rebuiltRunState);
			if (data.runIds) for (const rid of data.runIds) {
				if (!isSafeObjectKey(rid)) continue;
				groupIdByRunId.set(rid, groupId);
			}
			groupIdByRunId.set(data.runId, groupId);
		} catch {}
	}
	function connectSSE() {
		if (eventSource) closeSSE();
		sseState.value = "connecting";
		const gen = ++sseGeneration;
		const cursor = lastEventId.value;
		const baseUrl = rootStore.restApiContext.baseUrl;
		const url = cursor !== null && cursor !== void 0 ? `${baseUrl}/instance-ai/events/${threadId}?lastEventId=${String(cursor)}` : `${baseUrl}/instance-ai/events/${threadId}`;
		eventSource = new EventSource(url, { withCredentials: true });
		eventSource.onopen = () => {
			if (gen !== sseGeneration) return;
			sseState.value = "connected";
		};
		eventSource.onmessage = (ev) => {
			if (gen !== sseGeneration) return;
			onSSEMessage(ev);
		};
		eventSource.addEventListener("run-sync", (ev) => {
			if (gen !== sseGeneration) return;
			onRunSync(ev);
		});
		eventSource.onerror = () => {
			if (gen !== sseGeneration) return;
			if (eventSource?.readyState === EventSource.CONNECTING) sseState.value = "reconnecting";
			else if (eventSource?.readyState === EventSource.CLOSED) {
				sseState.value = "disconnected";
				eventSource = null;
			}
		};
	}
	function closeSSE() {
		if (eventSource) {
			eventSource.close();
			eventSource = null;
		}
		sseState.value = "disconnected";
	}
	function setActiveArtifactId(id) {
		activeArtifactId.value = id;
	}
	/** Reset all state owned by this runtime. */
	function resetState() {
		hydrationGeneration += 1;
		hydrationPromise = null;
		hydrationStatus.value = "idle";
		messages.value = [];
		archivedWorkflowIds.value = /* @__PURE__ */ new Set();
		latestTasks.value = null;
		latestSetupItems.value = null;
		activeRunId.value = null;
		debugEvents.value = [];
		resetFeedback();
		resolvedConfirmationIds.clear();
		sessionAlwaysAllowKeys.value = /* @__PURE__ */ new Set();
		runStateByGroupId.clear();
		groupIdByRunId.clear();
		pendingResponseMetrics.clear();
		earlyResponseSignals.clear();
		earlyTerminalRunIds.clear();
		responseMetricGeneration += 1;
		lastEventId.value = void 0;
		seenEventIds.clear();
		activeArtifactId.value = void 0;
		pendingWorkflowAttachment.value = null;
		pendingHandoff.value = null;
		disarmGenerationStallWatchdog();
	}
	function dispose() {
		closeSSE();
		resetState();
		readSetupChatTelemetryContext = void 0;
	}
	async function loadHistoricalMessages() {
		if (hydrationPromise) return await hydrationPromise;
		if (messages.value.length > 0 || hydrationStatus.value === "ready") {
			hydrationStatus.value = "ready";
			return "skipped";
		}
		const capturedHydrationGeneration = ++hydrationGeneration;
		hydrationStatus.value = "hydrating";
		const promise = (async () => {
			try {
				const result = await fetchThreadMessages(rootStore.restApiContext, threadId, 100);
				if (capturedHydrationGeneration !== hydrationGeneration) return "stale";
				if (messages.value.length > 0) return "skipped";
				if (result.messages.length > 0) {
					messages.value = result.messages;
					latestTasks.value = findLatestTasksFromMessages(result.messages);
					latestSetupItems.value = findLatestSetupItemsFromMessages(result.messages);
					const routing = buildRoutingFromMessages(messages.value);
					routing.runStateByGroupId.forEach((value, key) => runStateByGroupId.set(key, value));
					routing.groupIdByRunId.forEach((value, key) => groupIdByRunId.set(key, value));
				}
				if (result.nextEventId !== null && result.nextEventId !== void 0) lastEventId.value = Math.max(lastEventId.value ?? 0, result.nextEventId - 1);
				if (result.projectId) projectId.value = result.projectId;
				return "applied";
			} catch {
				return capturedHydrationGeneration === hydrationGeneration ? "applied" : "stale";
			} finally {
				if (capturedHydrationGeneration === hydrationGeneration) {
					hydrationStatus.value = "ready";
					hydrationPromise = null;
				}
			}
		})();
		hydrationPromise = promise;
		return await promise;
	}
	async function loadThreadStatus() {
		const runIdAtRequest = activeRunId.value;
		try {
			const status = await fetchThreadStatus(rootStore.restApiContext, threadId);
			if (activeRunId.value !== runIdAtRequest && activeRunId.value !== (status.runId ?? null)) return;
			if (!isOrchestratorLive(status)) return;
			const runId = syncLiveRunFromStatus(status, messages.value);
			if (runId) {
				activeRunId.value = runId;
				triggerRef(messages);
			}
		} catch {}
	}
	function ensureSSEConnected() {
		if (sseState.value === "disconnected") connectSSE();
	}
	function pushOptimisticUserMessage(message, attachments, handoffContext) {
		const userMessage = {
			id: v4(),
			role: "user",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			content: message,
			reasoning: "",
			isStreaming: false,
			attachments: attachments && attachments.length > 0 ? attachments : void 0,
			context: handoffContext
		};
		messages.value.push(userMessage);
		return userMessage;
	}
	function removeOptimisticMessage(message) {
		const idx = messages.value.indexOf(message);
		if (idx !== -1) messages.value.splice(idx, 1);
	}
	function resolveActionSource() {
		const rawSource = hooks.getThreadMetadata?.(threadId)?.source;
		return isInstanceAiThreadSource(rawSource) ? rawSource : INSTANCE_AI_THREAD_SOURCE_FALLBACK;
	}
	function trackUserMessageSent(isFirstMessage, authorship, actionSource) {
		const isPrefill = authorship.kind === "prefill";
		const setupContext = isPrefill && authorship.prefillType === "handoff_setup_panel_execute" ? void 0 : readSetupChatTelemetryContext?.();
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_SENT_BUILDER_MESSAGE, {
			...setupContext,
			thread_id: threadId,
			instance_id: rootStore.instanceId,
			is_first_message: isFirstMessage,
			action_source: actionSource,
			prefill_type: isPrefill ? authorship.prefillType : null,
			prefill_id: isPrefill ? authorship.prefillId ?? null : null,
			prompt_modified: isPrefill ? authorship.promptModified ?? false : null
		});
	}
	async function dispatchUserMessage(message, attachments, handoffContext, pushRef) {
		try {
			const { runId } = await postMessage(rootStore.restApiContext, threadId, message, attachments, handoffContext, Intl.DateTimeFormat().resolvedOptions().timeZone, pushRef, instanceAiSettingsStore.computerUseChannels, buildThreadArtifactsContext(producedArtifacts.values(), activeArtifactId.value));
			return runId;
		} catch (error) {
			const status = error instanceof ResponseError ? error.httpStatusCode : void 0;
			if (status === 409) toast.showError(/* @__PURE__ */ new Error("Agent is still working on your previous message"), "Cannot send message");
			else if (status === 429) {
				const scope = (error instanceof ResponseError ? error.meta?.reason : void 0) === "user_run_limit" ? "userLimit" : "instanceLimit";
				toast.showError(new Error(i18n.baseText(`instanceAi.send.${scope}.message`)), i18n.baseText(`instanceAi.send.${scope}.title`));
			} else if (status === 400) {
				const serverMessage = error instanceof ResponseError && error.message ? error.message : "";
				toast.showError(new Error(serverMessage || "The request was rejected. Please try again."), "Could not send message");
			} else toast.showError(/* @__PURE__ */ new Error("Failed to send message. Try again."), "Send failed");
			return null;
		}
	}
	/**
	* `authorship` is required so a new pre-fill surface cannot ship untagged:
	* omitting it fails typecheck rather than reporting the opener as user-typed.
	*/
	async function sendMessage(message, opts) {
		const { authorship, attachments, pushRef, handoffContext, responseStartedAtEpochMs = instanceAiResponseNow() } = opts;
		const metricGeneration = responseMetricGeneration;
		amendContext.value = null;
		pendingMessageCount.value += 1;
		try {
			ensureSSEConnected();
			const isFirstMessage = !messages.value.some((m) => m.role === "user");
			const actionSource = resolveActionSource();
			const optimistic = pushOptimisticUserMessage(message, attachments, handoffContext);
			trackUserMessageSent(isFirstMessage, authorship, actionSource);
			const runId = await dispatchUserMessage(message, attachments, handoffContext, pushRef);
			if (!runId) {
				removeOptimisticMessage(optimistic);
				return false;
			}
			if (metricGeneration !== responseMetricGeneration) return true;
			if (!earlyTerminalRunIds.has(runId)) activeRunId.value = runId;
			registerResponseMetric(runId, {
				startedAtEpochMs: responseStartedAtEpochMs,
				isFirstUserMessage: isFirstMessage,
				actionSource,
				generation: metricGeneration
			});
			return true;
		} finally {
			pendingMessageCount.value = Math.max(0, pendingMessageCount.value - 1);
			if (pendingMessageCount.value === 0) {
				earlyResponseSignals.clear();
				earlyTerminalRunIds.clear();
			}
		}
	}
	async function cancelRun() {
		try {
			await postCancel(rootStore.restApiContext, threadId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to cancel. Try again."), "Cancel failed");
		}
	}
	/** Cancel a specific background task. */
	async function cancelBackgroundTask(taskId) {
		try {
			await postCancelTask(rootStore.restApiContext, threadId, taskId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to cancel task. Try again."), "Cancel failed");
		}
	}
	/** Stop an agent and prime the input for amend instructions. */
	function amendAgent(agentId, role, taskId) {
		if (taskId) cancelBackgroundTask(taskId);
		else cancelRun();
		amendContext.value = {
			agentId,
			role
		};
	}
	/**
	* Send the user's typed feedback as a request to revise the plan.
	*
	* Deliberately adds nothing to the transcript. A revision does not re-arm the
	* run (`shouldRearmRunAfterConfirm` is false for `approved: false`), so the
	* revised card merges into the assistant message that already sits above the
	* transcript tail — a user bubble appended here would read as if the feedback
	* came after the revision it caused. The card's "Changes requested" and
	* "Updating plan…" states are the in-flight affordance instead.
	*/
	async function requestPlanChanges(requestId, message) {
		if (updatingPlanRequestIds.has(requestId)) return false;
		markPlanUpdatePending(requestId);
		if (!await confirmAction(requestId, {
			kind: "approval",
			approved: false,
			userInput: message
		})) {
			clearPlanUpdatePending(requestId);
			return false;
		}
		resolveConfirmation(requestId, "changes-requested");
		return true;
	}
	function markPlanUpdatePending(requestId) {
		updatingPlanRequestIds.add(requestId);
	}
	function clearPlanUpdatePending(requestId) {
		updatingPlanRequestIds.delete(requestId);
	}
	watch(() => pendingPlanReview.value?.requestId, (requestId) => {
		if (!requestId) return;
		for (const id of updatingPlanRequestIds) if (id !== requestId) updatingPlanRequestIds.delete(id);
	});
	watch(isStreaming, (streaming) => {
		if (!streaming && updatingPlanRequestIds.size > 0) updatingPlanRequestIds.clear();
	});
	async function confirmAction(requestId, payload) {
		try {
			const response = await postConfirmation(rootStore.restApiContext, requestId, payload);
			ensureSSEConnected();
			if (shouldRearmRunAfterConfirm(payload)) rearmRunState(resolveActiveRunId({
				confirmRunId: response.runId,
				messages: messages.value,
				requestId
			}));
			await loadThreadStatus();
			return true;
		} catch (error) {
			if ((error instanceof ResponseError ? error.httpStatusCode : void 0) === 400) {
				const serverMessage = error instanceof ResponseError && error.message ? error.message : "";
				toast.showError(new Error(serverMessage || "The confirmation could not be processed."), "Confirmation failed");
			} else toast.showError(/* @__PURE__ */ new Error("Failed to send confirmation. Try again."), "Confirmation failed");
			return false;
		}
	}
	async function confirmResourceDecision(requestId, decision) {
		resolveConfirmation(requestId, "approved");
		await confirmAction(requestId, {
			kind: "resourceDecision",
			resourceDecision: decision
		});
	}
	function copyFullTrace() {
		return JSON.stringify({
			threadId,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			messages: messages.value,
			events: collapseDeltaEvents(debugEvents.value)
		}, null, 2);
	}
	return reactive({
		id: threadId,
		messages,
		projectId,
		activeRunId,
		archivedWorkflowIds,
		latestTasks,
		debugEvents,
		resolvedConfirmationIds,
		sessionAlwaysAllowKeys,
		pendingMessageCount,
		hydrationStatus,
		sseState,
		lastEventId,
		amendContext,
		updatingPlanRequestIds,
		pendingPlanReview,
		isStreaming,
		isSendingMessage,
		hasMessages,
		isHydratingThread,
		producedArtifacts,
		resourceNameIndex,
		linkableResourceNameIndex,
		activeArtifactId,
		setActiveArtifactId,
		feedbackByResponseId,
		rateableResponseId,
		currentTasks,
		setupItemsByWorkflowId,
		latestSetupWorkflowId,
		contextualSuggestion,
		pendingConfirmations,
		isAwaitingConfirmation,
		setPendingHandoff,
		consumePendingHandoff,
		pendingWorkflowAttachment,
		setPendingWorkflowAttachment,
		clearPendingWorkflowAttachment,
		rememberManualExecution,
		getRememberedManualExecution,
		forgetManualExecution,
		resetState,
		dispose,
		connectSSE,
		closeSSE,
		loadHistoricalMessages,
		loadThreadStatus,
		registerSetupChatTelemetryContext,
		sendMessage,
		cancelRun,
		cancelBackgroundTask,
		amendAgent,
		requestPlanChanges,
		markPlanUpdatePending,
		clearPlanUpdatePending,
		confirmAction,
		confirmResourceDecision,
		resolveConfirmation,
		resolveActionSource,
		addAlwaysAllowKey,
		canAlwaysAllow,
		findToolCallByRequestId,
		copyFullTrace,
		submitFeedback
	});
}
//#endregion
//#region src/features/ai/instanceAi/utils/buildNodesAttachment.ts
var setSignature = (set) => set.nodes.map((n) => n.id).sort().join("\n");
/** Append incoming sets to existing ones, skipping duplicates and capping the total to the schema limit. */
function mergeNodeSets(existing, incoming) {
	const seen = new Set(existing.map(setSignature));
	return [...existing, ...incoming.filter((s) => !seen.has(setSignature(s)))].slice(0, MAX_SETS_PER_ATTACHMENT);
}
var MAX_NODES_PER_SET = 50;
var MAX_SETS_PER_ATTACHMENT = 50;
/**
* One "add to chat" action = one set: everything the user picked, regardless of
* connectivity. Ordered input→output by walking selected `main` connections from
* each parentless member, so chains stay contiguous and disconnected members
* (e.g. a sub-node picked without its parent) follow after.
*/
function orderSelectionIntoSet(selectedNodeNames, connections) {
	const selected = new Set(selectedNodeNames);
	const byDestination = mapConnectionsByDestination(connections);
	const selectedChildren = (name) => getChildNodes(connections, name, "main", 1).filter((n) => selected.has(n));
	const selectedParents = (name) => getParentNodes(byDestination, name, "main", 1).filter((n) => selected.has(n));
	const order = [];
	const visited = /* @__PURE__ */ new Set();
	const visit = (start) => {
		const queue = [start];
		visited.add(start);
		while (queue.length) {
			const cur = queue.shift();
			order.push(cur);
			for (const child of selectedChildren(cur)) if (!visited.has(child)) {
				visited.add(child);
				queue.push(child);
			}
		}
	};
	for (const n of selectedNodeNames) if (!visited.has(n) && selectedParents(n).length === 0) visit(n);
	for (const n of [...selectedNodeNames].sort()) if (!visited.has(n)) visit(n);
	return { nodeNames: order };
}
/** Find the set's immediate upstream/downstream nodes that sit just outside it, for send-time context. */
function resolveSetNeighbors(set, connections) {
	const inSet = new Set(set.nodeNames);
	const byDestination = mapConnectionsByDestination(connections);
	const head = set.nodeNames[0];
	const tail = set.nodeNames[set.nodeNames.length - 1];
	return {
		inputName: getParentNodes(byDestination, head, "main", 1).find((n) => !inSet.has(n)),
		outputName: getChildNodes(connections, tail, "main", 1).find((n) => !inSet.has(n))
	};
}
/** Return the canvas group a multi-node set belongs to, when all its members share exactly one. */
function resolveSetCanvasGroup(set, workflow) {
	if (set.nodeNames.length < 2) return {};
	const nameToId = new Map(workflow.nodes.map((n) => [n.name, n.id]));
	const groupIds = new Set(set.nodeNames.map((name) => workflow.nodeIdToGroupId.get(nameToId.get(name) ?? "")));
	if (groupIds.size !== 1) return {};
	const [only] = [...groupIds];
	if (!only) return {};
	const group = workflow.groupsById.get(only);
	return group ? {
		canvasGroupId: group.id,
		canvasGroupName: group.name
	} : {};
}
/**
* Turn a raw node selection into one attachment set: resolve ids to names, order
* them, cap at the schema limit, and attach neighbor/group context. Returns null
* when nothing resolves; `truncated` flags that the cap was hit.
*/
function buildNodesAttachment(workflowId, selectedNodeIds, workflow) {
	if (selectedNodeIds.length === 0) return null;
	const idToName = new Map(workflow.nodes.map((n) => [n.id, n.name]));
	const nameToId = new Map(workflow.nodes.map((n) => [n.name, n.id]));
	const selectedNames = selectedNodeIds.map((id) => idToName.get(id)).filter((n) => Boolean(n));
	if (selectedNames.length === 0) return null;
	let truncated = false;
	let names = orderSelectionIntoSet(selectedNames, workflow.connections).nodeNames;
	if (names.length > MAX_NODES_PER_SET) {
		names = names.slice(0, MAX_NODES_PER_SET);
		truncated = true;
	}
	const ref = (name) => ({
		id: nameToId.get(name) ?? name,
		name
	});
	const { inputName, outputName } = resolveSetNeighbors({ nodeNames: names }, workflow.connections);
	const group = resolveSetCanvasGroup({ nodeNames: names }, workflow);
	return {
		attachment: {
			type: "nodes",
			workflowId,
			sets: [{
				nodes: names.map(ref),
				...inputName && nameToId.has(inputName) ? { inputNode: ref(inputName) } : {},
				...outputName && nameToId.has(outputName) ? { outputNode: ref(outputName) } : {},
				...group
			}]
		},
		truncated
	};
}
/** Total nodes attached across every `nodes` attachment in a sent message. */
function countAttachedNodes(attachments) {
	return (attachments ?? []).filter((a) => a.type === "nodes").reduce((sum, a) => sum + a.sets.reduce((s, set) => s + set.nodes.length, 0), 0);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.store.ts
var THREAD_HISTORY_PAGE_SIZE = 30;
var emptyThreadHistory = (search = "") => ({
	search,
	threads: [],
	hasMore: true,
	loading: false,
	error: false
});
var useInstanceAiStore = defineStore("instanceAi", () => {
	const rootStore = useRootStore();
	const instanceAiSettingsStore = useInstanceAiSettingsStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const persistedThreadIds = /* @__PURE__ */ new Set();
	const threads = ref([]);
	const threadHistory = ref(emptyThreadHistory());
	const debugMode = ref(false);
	const creditsQuota = ref(void 0);
	const creditsClaimed = ref(void 0);
	/** Whether the pool has been locked by the activation cap. */
	const quotaLocked = ref(false);
	const runtimes = shallowReactive(/* @__PURE__ */ new Map());
	const runtimeScopes = /* @__PURE__ */ new Map();
	const runtimeHooks = {
		onTitleUpdated: (threadId, title) => {
			for (const thread of localThreadEntries(threadId)) thread.title = title;
		},
		onRunFinish: () => {
			loadThreads();
		},
		getThreadMetadata: (threadId) => threads.value.find((t) => t.id === threadId)?.metadata,
		onOnboardingLeft: leaveOnboarding
	};
	function getOrCreateRuntime(threadId, projectId) {
		const existingRuntime = runtimes.get(threadId);
		if (existingRuntime) return existingRuntime;
		const scope = effectScope(true);
		const runtime = scope.run(() => createThreadRuntime(threadId, runtimeHooks, projectId));
		if (!runtime) throw new Error("Failed to create thread runtime");
		runtimes.set(threadId, runtime);
		runtimeScopes.set(threadId, scope);
		return runtime;
	}
	function getRuntime(threadId) {
		return runtimes.get(threadId);
	}
	function disposeRuntime(threadId) {
		const runtime = runtimes.get(threadId);
		if (!runtime) return;
		runtime.dispose();
		runtimeScopes.get(threadId)?.stop();
		runtimeScopes.delete(threadId);
		runtimes.delete(threadId);
	}
	const isGatewayConnected = computed(() => instanceAiSettingsStore.isGatewayConnected);
	const gatewayDirectory = computed(() => instanceAiSettingsStore.gatewayDirectory);
	const activeDirectory = computed(() => gatewayDirectory.value);
	const creditsRemaining = computed(() => {
		if (creditsQuota.value === void 0 || creditsClaimed.value === void 0 || creditsQuota.value === -1) return;
		return Math.max(0, creditsQuota.value - creditsClaimed.value);
	});
	const creditsPercentageRemaining = computed(() => {
		if (creditsQuota.value === void 0 || creditsQuota.value === -1 || creditsRemaining.value === void 0) return;
		if (creditsQuota.value === 0) return 0;
		return creditsRemaining.value / creditsQuota.value * 100;
	});
	const isLowCredits = computed(() => {
		return creditsPercentageRemaining.value !== void 0 && creditsPercentageRemaining.value <= 10;
	});
	/**
	* Whether to warn about credits above the chat input: either the balance is running low, or the
	* pool has been locked outright. The two are mutually exclusive in practice — a cohort with a
	* masked balance can never read as "low" — so this is the single condition the views use.
	*/
	const showCreditWarning = computed(() => isLowCredits.value || quotaLocked.value);
	function handleCreditsPush(data) {
		creditsQuota.value = data.creditsQuota;
		creditsClaimed.value = data.creditsClaimed;
		if (data.quotaLocked !== void 0) quotaLocked.value = data.quotaLocked;
		const { creditsPerThread } = data;
		if (creditsPerThread !== void 0) {
			const thread = threads.value.find((t) => t.id === creditsPerThread.threadId);
			if (thread) thread.metadata = {
				...thread.metadata,
				creditsUsed: creditsPerThread.totalCreditsUsed
			};
		}
	}
	async function fetchCredits() {
		try {
			const result = await getInstanceAiCredits(rootStore.restApiContext);
			creditsQuota.value = result.creditsQuota;
			creditsClaimed.value = result.creditsClaimed;
			quotaLocked.value = result.quotaLocked ?? false;
		} catch {}
	}
	function toThreadSummary(thread) {
		return {
			id: thread.id,
			title: thread.title || "New conversation",
			createdAt: thread.createdAt,
			updatedAt: thread.updatedAt,
			metadata: thread.metadata ?? void 0
		};
	}
	/** Every local copy of a thread; the sidebar list and the history page can both hold one. */
	function localThreadEntries(threadId) {
		return [...threads.value, ...threadHistory.value.threads].filter((t) => t.id === threadId);
	}
	async function loadThreads() {
		try {
			const result = await fetchThreads(rootStore.restApiContext);
			for (const thread of result.threads) persistedThreadIds.add(thread.id);
			const serverIds = new Set(result.threads.map((t) => t.id));
			threads.value = [...threads.value.filter((t) => !serverIds.has(t.id)), ...result.threads.map(toThreadSummary)];
			return true;
		} catch {
			return false;
		}
	}
	/** Fetch a thread the sidebar list does not hold, e.g. an older one opened by URL. */
	async function loadThread(threadId) {
		const { thread } = await fetchThread(rootStore.restApiContext, threadId);
		persistedThreadIds.add(thread.id);
		if (!threads.value.some((t) => t.id === thread.id)) threads.value.push(toThreadSummary(thread));
	}
	let threadHistoryCursor;
	let threadHistoryRequest = 0;
	function resetThreadHistory(search = "") {
		threadHistoryRequest++;
		threadHistoryCursor = void 0;
		threadHistory.value = emptyThreadHistory(search);
	}
	async function loadThreadHistoryPage() {
		const history = threadHistory.value;
		if (history.loading || !history.hasMore) return;
		const request = threadHistoryRequest;
		history.loading = true;
		history.error = false;
		let result;
		try {
			result = await fetchThreadHistory(rootStore.restApiContext, {
				limit: THREAD_HISTORY_PAGE_SIZE,
				search: history.search || void 0,
				cursor: threadHistoryCursor
			});
		} catch {}
		if (request !== threadHistoryRequest) return;
		history.loading = false;
		if (!result) {
			history.error = true;
			return;
		}
		for (const thread of result.threads) persistedThreadIds.add(thread.id);
		const known = new Set(history.threads.map((t) => t.id));
		history.threads.push(...result.threads.filter((t) => !known.has(t.id)).map(toThreadSummary));
		threadHistoryCursor = result.nextCursor ?? void 0;
		history.hasMore = result.hasMore;
	}
	async function syncThread(threadId, projectId, launch) {
		if (persistedThreadIds.has(threadId)) return;
		const result = await ensureThread(rootStore.restApiContext, threadId, projectId, launch);
		persistedThreadIds.add(result.thread.id);
		const templateId = launch.sourceContext?.templateId;
		telemetry.track("User launched Instance AI thread", {
			thread_id: result.thread.id,
			instance_id: rootStore.instanceId,
			source: launch.source,
			origin: launch.origin ?? "internal",
			...typeof templateId === "string" || typeof templateId === "number" ? { template_id: templateId } : {}
		});
		const existingThread = threads.value.find((thread) => thread.id === threadId);
		if (existingThread) {
			existingThread.createdAt = result.thread.createdAt;
			existingThread.updatedAt = result.thread.updatedAt;
			existingThread.title = result.thread.title || existingThread.title;
			existingThread.metadata = result.thread.metadata ?? existingThread.metadata;
			return;
		}
		threads.value.unshift(toThreadSummary(result.thread));
	}
	/**
	* Delete a thread. Returns false if the backend refused, in which case the thread is
	* left in the list because it genuinely still exists.
	*
	* `silent` suppresses the failure toast, for callers cleaning up after some other
	* failure they have already reported -- a second, unrelated "delete failed" on top of
	* the real error only confuses. Those callers should handle `false` themselves.
	*/
	async function deleteThread$1(threadId, options = {}) {
		if (persistedThreadIds.has(threadId)) try {
			await deleteThread(rootStore.restApiContext, threadId);
			persistedThreadIds.delete(threadId);
		} catch {
			if (!options.silent) toast.showError(/* @__PURE__ */ new Error("Failed to delete thread. Try again."), "Delete failed");
			return false;
		}
		threads.value = threads.value.filter((t) => t.id !== threadId);
		threadHistory.value.threads = threadHistory.value.threads.filter((t) => t.id !== threadId);
		disposeRuntime(threadId);
		return true;
	}
	async function renameThread$1(threadId, title) {
		const entries = localThreadEntries(threadId);
		const previousTitle = entries[0]?.title;
		for (const entry of entries) entry.title = title;
		if (!persistedThreadIds.has(threadId)) return;
		try {
			await renameThread(rootStore.restApiContext, threadId, title);
		} catch (error) {
			if (previousTitle !== void 0) for (const entry of entries) entry.title = previousTitle;
			throw error;
		}
	}
	function getThreadMetadata(threadId) {
		return threads.value.find((t) => t.id === threadId)?.metadata;
	}
	/** Reactive per-thread credit total (decimal), or undefined if none recorded yet. */
	function threadCreditsUsed(threadId) {
		const used = threads.value.find((t) => t.id === threadId)?.metadata?.creditsUsed;
		return typeof used === "number" ? used : void 0;
	}
	/**
	* Replace a thread's metadata with an authoritative server copy — used after a
	* write the server itself made (e.g. persisting a pending agent binds it),
	* where a merge would keep locally-known keys the server just removed.
	*/
	function setThreadMetadata(threadId, metadata) {
		const thread = threads.value.find((t) => t.id === threadId);
		if (thread) thread.metadata = metadata;
	}
	async function updateThreadMetadata$1(threadId, metadata) {
		for (const thread of localThreadEntries(threadId)) thread.metadata = {
			...thread.metadata,
			...metadata
		};
		if (persistedThreadIds.has(threadId)) await updateThreadMetadata(rootStore.restApiContext, threadId, metadata);
	}
	const pendingComposerAttachments = ref([]);
	function stageNodeSets(workflowId, newSets) {
		const existing = pendingComposerAttachments.value.find((a) => a.type === "nodes" && a.workflowId === workflowId);
		if (existing) existing.sets = mergeNodeSets(existing.sets, newSets);
		else pendingComposerAttachments.value = [...pendingComposerAttachments.value, {
			type: "nodes",
			workflowId,
			sets: newSets
		}];
	}
	function consumePendingAttachments() {
		const staged = pendingComposerAttachments.value;
		pendingComposerAttachments.value = [];
		return staged;
	}
	const composerFocusRequest = ref(0);
	function requestComposerFocus() {
		composerFocusRequest.value++;
	}
	const clearCanvasSelectionRequest = ref(0);
	function requestClearCanvasSelection() {
		clearCanvasSelectionRequest.value++;
	}
	const leftOnboardingThreadIds = /* @__PURE__ */ new Set();
	/** An onboarding thread hides the host chrome (chat header, sidebar, artifacts) until the user leaves it. */
	function isOnboardingChromeHidden(threadId) {
		return !leftOnboardingThreadIds.has(threadId) && localThreadEntries(threadId).some((t) => t.metadata?.source === "onboarding" && !t.metadata.onboardingLeft);
	}
	/** The exit lives in thread metadata, so a reload keeps it. Idempotent. */
	function leaveOnboarding(threadId, outcome, leaveReason) {
		if (!isOnboardingChromeHidden(threadId)) return;
		leftOnboardingThreadIds.add(threadId);
		updateThreadMetadata$1(threadId, { onboardingLeft: true }).catch((error) => {
			toast.showError(error, i18n.baseText("generic.error"));
		});
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.AI_ASSISTANT_ONBOARDING_ENDED, {
			thread_id: threadId,
			instance_id: rootStore.instanceId,
			outcome,
			leave_reason: leaveReason ?? null
		});
	}
	return {
		threads,
		debugMode,
		creditsQuota,
		creditsClaimed,
		isGatewayConnected,
		gatewayDirectory,
		activeDirectory,
		creditsRemaining,
		creditsPercentageRemaining,
		isLowCredits,
		quotaLocked,
		showCreditWarning,
		deleteThread: deleteThread$1,
		renameThread: renameThread$1,
		getThreadMetadata,
		threadCreditsUsed,
		updateThreadMetadata: updateThreadMetadata$1,
		setThreadMetadata,
		loadThreads,
		loadThread,
		threadHistory,
		resetThreadHistory,
		loadThreadHistoryPage,
		fetchCredits,
		handleCreditsPush,
		getOrCreateRuntime,
		getRuntime,
		disposeRuntime,
		syncThread,
		pendingComposerAttachments,
		stageNodeSets,
		consumePendingAttachments,
		composerFocusRequest,
		requestComposerFocus,
		clearCanvasSelectionRequest,
		isOnboardingChromeHidden,
		leaveOnboarding,
		requestClearCanvasSelection
	};
});
var ThreadKey = Symbol("instanceAiThread");
function provideThread(thread) {
	if (typeof thread === "string") {
		const runtime = useInstanceAiStore().getOrCreateRuntime(thread);
		provide(ThreadKey, runtime);
		return runtime;
	}
	provide(ThreadKey, thread);
	return thread;
}
function useThread(threadId) {
	if (threadId) return useInstanceAiStore().getOrCreateRuntime(threadId);
	const thread = inject(ThreadKey, null);
	if (!thread) throw new Error("useThread() requires a provideThread() ancestor.");
	return thread;
}
//#endregion
export { isAgentEditingAgent as C, fetchThreadMessages as D, fetchThreadDebugRuns as E, fetchThreads as O, getLatestWorkflowUpdateResult as S, fetchRunDebug as T, getLatestBuildResult as _, countAttachedNodes as a, getLatestDeletedDataTableId as b, getAgentPreviewSessionFromThreadMetadata as c, getThreadDisplayTitle as d, resolvePlanTasks as f, getLatestAgentConfigMutation as g, getLatestAgentBuilderTarget as h, buildNodesAttachment as i, persistPendingAgent as k, getAgentPreviewViewFromThreadMetadata as l, getExecutionResultsByWorkflow as m, useInstanceAiStore as n, mergeNodeSets as o, instanceAiResponseNow as p, useThread as r, getAgentBuilderTargetFromThreadMetadata as s, provideThread as t, getPendingAgentTargetFromThreadMetadata as u, getLatestBuilderTarget as v, isAgentEditingWorkflow as w, getLatestWorkflowSetupResult as x, getLatestDataTableResult as y };

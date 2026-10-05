import { Ar as ZodLazy, Br as array, Dr as ZodArray, Fr as ZodReadonly, Gr as record, Hr as literal, Ir as ZodRecord, Jr as unknown, Kr as string, Lr as ZodType, Mr as ZodNullable, Nr as ZodObject, Or as ZodCatch, Pr as ZodOptional, Rr as ZodUnion, Ur as number, Vr as boolean, Wr as object, an as INSTANCE_AI_THREAD_SOURCES, jr as ZodNonOptional, kr as ZodDefault, nn as INSTANCE_AI_PREFILL_TYPE_FALLBACK, on as INSTANCE_AI_THREAD_SOURCE_FALLBACK, qr as union, tn as INSTANCE_AI_PREFILL_TYPES, zr as _enum } from "./src-DVqjY0nx.js";
//#region ../../@n8n/telemetry/src/validate.ts
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function formatPath(path) {
	return path.map(String).join(".") || "(root)";
}
function isObjectSchema(schema) {
	return schema instanceof ZodObject;
}
function isUnionSchema(schema) {
	return schema instanceof ZodUnion;
}
function isArraySchema(schema) {
	return schema instanceof ZodArray;
}
function isRecordSchema(schema) {
	return schema instanceof ZodRecord;
}
function isWrappedSchema(schema) {
	return schema instanceof ZodOptional || schema instanceof ZodNullable || schema instanceof ZodDefault || schema instanceof ZodNonOptional || schema instanceof ZodCatch || schema instanceof ZodLazy;
}
function isReadonlySchema(schema) {
	return schema instanceof ZodReadonly;
}
function isSchema(value) {
	return value instanceof ZodType;
}
function getWrappedSchema(schema) {
	if (isWrappedSchema(schema)) return schema.unwrap();
	if (isReadonlySchema(schema)) return schema.def.innerType;
}
function getUnrecognizedPropertyIssues(schema, value, path = []) {
	const wrappedSchema = getWrappedSchema(schema);
	if (wrappedSchema !== void 0) return getUnrecognizedPropertyIssues(wrappedSchema, value, path);
	if (isObjectSchema(schema)) {
		if (!isRecord(value)) return [];
		const issues = [];
		for (const [key, childValue] of Object.entries(value)) {
			const childPath = [...path, key];
			const childSchema = schema.shape[key];
			if (childSchema !== void 0) issues.push(...getUnrecognizedPropertyIssues(childSchema, childValue, childPath));
			else if (schema.def.catchall === void 0) issues.push(`${formatPath(childPath)}: unrecognized property`);
			else if (isSchema(schema.def.catchall)) issues.push(...getUnrecognizedPropertyIssues(schema.def.catchall, childValue, childPath));
		}
		return issues;
	}
	if (isArraySchema(schema)) {
		if (!Array.isArray(value)) return [];
		return value.flatMap((item, index) => getUnrecognizedPropertyIssues(schema.element, item, [...path, index]));
	}
	if (isRecordSchema(schema)) {
		if (!isRecord(value)) return [];
		return Object.entries(value).flatMap(([key, childValue]) => getUnrecognizedPropertyIssues(schema.valueType, childValue, [...path, key]));
	}
	if (isUnionSchema(schema)) {
		const matchingOptions = schema.options.filter((option) => option.safeParse(value).success);
		if (matchingOptions.length === 0) return [];
		return matchingOptions.map((option) => getUnrecognizedPropertyIssues(option, value, path)).reduce((fewestIssues, optionIssues) => optionIssues.length < fewestIssues.length ? optionIssues : fewestIssues);
	}
	return [];
}
function getEventValidationError(event, properties) {
	const issues = [];
	const result = event.properties.safeParse(properties);
	if (!result.success) for (const issue of result.error.issues) issues.push(`${issue.path.map(String).join(".") || "(root)"}: ${issue.message}`);
	issues.push(...getUnrecognizedPropertyIssues(event.properties, properties));
	if (issues.length === 0) return null;
	return `Telemetry event "${event.name}" failed schema validation: ${issues.join("; ")}`;
}
//#endregion
//#region ../../@n8n/telemetry/src/define.ts
function defineTelemetryEvents(events) {
	const result = {};
	for (const [key, event] of Object.entries(events)) result[key] = {
		...event,
		getValidationError: (properties) => getEventValidationError(event, properties)
	};
	return result;
}
//#endregion
//#region ../../@n8n/telemetry/src/events/agents.ts
var builderSessionIdentity = {
	agent_id: string(),
	user_id: string(),
	thread_id: string().optional().describe("Instance AI thread hosting the builder session"),
	run_id: string().optional().describe("Instance AI run that triggered this builder call")
};
var agentStatus = _enum(["draft", "production"]);
var agentRunType = _enum(["test", "production"]).describe("production means the run executed the published snapshot; test means it ran a draft");
var agentConfigurationTelemetry = {
	model: string().nullable(),
	channels: array(string()),
	tool_types: array(string()),
	tool_count: number(),
	num_skills: number(),
	memory_type: _enum([
		"none",
		"n8n",
		"n8n_observational",
		"n8n_episodic",
		"n8n_observational_episodic"
	])
};
var builderPreWriteStatus = agentStatus.describe("Agent status before the builder's write");
var sessionId = string().describe("Editor push session id (pushRef)");
var agentConfigFingerprint = object({
	instructions: string(),
	tools: array(string()),
	skills: array(string()),
	tasks: array(string()),
	triggers: array(string()),
	vector_stores: array(string()),
	memory: object({
		enabled: boolean(),
		storage: literal("n8n")
	}).nullable(),
	model: string().nullable(),
	config_version: string()
});
var toolIdentity = {
	node_type: string().optional(),
	workflow: string().optional(),
	custom_id: string().optional(),
	server_name: string().optional()
};
var optionalAgentId = string().optional();
var agentCapabilityKind = _enum([
	"channel",
	"tool",
	"mcpServer",
	"skill",
	"task",
	"subAgent",
	"vectorStore"
]);
var agentConfigPart = _enum([
	"instructions",
	"model",
	"credential",
	"memory",
	"name",
	"config",
	"tools",
	"providerTools",
	"skills",
	"tasks",
	"triggers",
	"subAgents",
	"mcpServers",
	"vectorStores"
]);
/** Identity carried by every per-surface agent lifecycle event. */
var agentActorIdentity = {
	agent_id: string(),
	project_id: string(),
	user_id: string().describe("The acting user, on every surface including MCP")
};
/**
* What the agent looked like at the moment of the event. Shared by the write
* events and the publish events, using the same names and semantics as
* "Agent setup completed", so an agent's profile lines up across its whole
* lifecycle.
*/
var agentCapabilityProfile = {
	capability_kinds: array(agentCapabilityKind),
	capability_count: number(),
	tool_count: number(),
	skill_count: number(),
	sub_agent_count: number(),
	mcp_server_count: number(),
	vector_store_count: number(),
	task_count: number(),
	trigger_count: number(),
	model: string().nullable(),
	tool_types: array(string()).describe("Tool types, never user-authored tool names")
};
/**
* Shared by the six creation and modification events, which differ only in
* which surface wrote and whether the write was the agent's first — so they
* union into one picture of every agent write. `event_version` is per-event.
*/
var agentWrite = {
	...agentActorIdentity,
	...agentCapabilityProfile,
	changed_parts: array(agentConfigPart).describe("Config parts this save actually changed. \"credential\" is the model credential, which the retired \"User edited agent config\" reported as part \"model\". \"config\" is the feature block: web search and prompt caching. \"providerTools\" is the provider-native tools map, including web-search tool settings reconciled from config.webSearch."),
	has_published_version: boolean().describe("Whether a live published version exists; stable across an editing session. Always false on the creation events, which is what makes the six safe to union.")
};
/**
* Shared by the three publish events. `republish` activates an older snapshot
* — a rollback rather than shipping new work — so a "published" count that
* should mean the latter must exclude it. `channel_connect` and `slack_setup`
* are retained only for compatibility with historical auto-publish rows.
*/
var agentPublishTrigger = _enum([
	"explicit",
	"republish",
	"channel_connect",
	"slack_setup"
]).describe("What caused the publish, as opposed to who performed it. channel_connect and slack_setup are historical values only.");
var agentPublish = {
	...agentActorIdentity,
	...agentCapabilityProfile,
	trigger: agentPublishTrigger,
	version_id: string().describe("AgentHistory versionId that became active")
};
var AGENTS_TELEMETRY = defineTelemetryEvents({
	AGENT_SETUP_COMPLETED: {
		name: "Agent setup completed",
		description: "The first time an agent reached a complete setup: it passes the same validation the Publish button requires, and has at least one configured capability. Fires at most once per agent, guarded by the persisted `agents.setupCompletedAt`. Emitted from the config-save path, with the publish path as a backstop so a published agent is always marked first.",
		properties: object({
			agent_id: string(),
			project_id: string(),
			user_id: string().optional().describe("Absent for builder writes made without an acting user"),
			capability_kinds: array(agentCapabilityKind).describe("Capability kinds with at least one configured entry"),
			capability_count: number().describe("Total configured capabilities across all kinds"),
			tool_count: number(),
			skill_count: number(),
			sub_agent_count: number(),
			mcp_server_count: number().describe("MCP servers with a URL set"),
			vector_store_count: number(),
			task_count: number(),
			trigger_count: number().describe("Configured chat integrations; draft channels excluded"),
			status: agentStatus
		})
	},
	AGENT_EXECUTION_COUNT: {
		name: "Agent execution count",
		description: "Six-hourly pulse of aggregate agent usage, bucketed by agent, run type and optional user. event_version 2 added run_type; version 1 rows are a mix of test and production and must not be read as production. token_count is broader than \"Agent session metrics\".cost_sum: it also covers LLM calls belonging to no single turn (title generation, observational/episodic memory, embeddings).",
		properties: object({
			event_version: literal("2"),
			agent_id: string(),
			user_id: string().optional().describe("Present only for runs with an n8n user — absent for chat integrations and cron"),
			run_type: agentRunType,
			message_count: number().describe("Fresh top-level user turns; delegated child runs excluded"),
			token_count: number().describe("Includes LLM calls belonging to no turn (title generation, memory, embeddings), so runs higher than \"Agent session metrics\".token_count_sum"),
			tool_call_count: number()
		})
	},
	AGENT_SESSION_METRICS: {
		name: "Agent session metrics",
		description: "Six-hourly pulse of agent session and turn metrics, bucketed by agent, optional user, run type, turn status and configuration. Two token numbers exist across the agent events and they measure different things: token_count_sum here covers only the recorded turns, from the same usage as cost_sum so the two reconcile, while token_count on \"Agent execution count\" additionally covers LLM calls belonging to no turn (title generation, observational/episodic memory, embeddings) and so runs higher.",
		properties: object({
			event_version: literal("1"),
			agent_id: string(),
			user_id: string().optional(),
			agent_type: literal("inline").optional(),
			run_type: agentRunType,
			turn_status: _enum(["succeeded", "failed"]),
			session_count: number(),
			turn_count: number(),
			latency_ms_sum: number(),
			cost_sum: number(),
			token_count_sum: number().describe("Recorded-turn tokens only; reconciles with cost_sum, unlike token_count"),
			tool_call_count_sum: number(),
			num_skills_sum: number(),
			...agentConfigurationTelemetry
		})
	},
	BUILDER_CREATED_AGENT: {
		name: "Builder created agent",
		description: "The Instance AI builder was the first surface to configure an agent. One of three same-shaped creation events (\"User created agent\", \"MCP created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write, so the builder minting an agent row emits nothing and a build that fails before writing config never counts. event_version 2 replaced thread_id with user_id, moved the emit from the frontend-facing delegate wrapper to the config-save path, and added the write profile.",
		properties: object({
			...agentWrite,
			event_version: literal("2")
		})
	},
	USER_CREATED_AGENT: {
		name: "User created agent",
		description: "A user was the first surface to configure an agent, from the editor. One of three same-shaped creation events (\"Builder created agent\", \"MCP created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write: agents are created lazily and the row alone emits nothing, so this fires when the agent gains a model, instructions or a capability rather than on the click, and an abandoned new-agent flow never counts. A rename or an icon change does not qualify. \"User clicked new agent\" carries the same agent_id, so the two join into a click-to-creation funnel whose gap is abandoned flows. event_version 2 dropped source (editor-only knowledge, still on the click event), added project_id, user_id and the write profile, and moved the emit to the backend.",
		properties: object({
			...agentWrite,
			event_version: literal("2")
		})
	},
	MCP_CREATED_AGENT: {
		name: "MCP created agent",
		description: "An MCP client was the first surface to configure an agent, through the `create_agent` or `mutate_agent` tool. One of three same-shaped creation events (\"User created agent\", \"Builder created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write, so a `create_agent` call carrying no initial config emits nothing until something configures the agent. The coarser \"User called mcp tool\" event also fires for the same call.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	USER_MODIFIED_AGENT: {
		name: "User modified agent",
		description: "A user saved a change to an agent that was already configured, from the editor. One of three same-shaped modification events (\"Builder modified agent\", \"MCP modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits the matching creation event instead — so a write is never counted as both, and this event is not inflated by every agent's birth. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. Replaces the per-part \"User edited agent config\" and the per-item \"User added/removed tools/skills/tasks\" and \"User added/removed agent tool\" events, which fired several times for a single save and never covered the builder or MCP.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	BUILDER_MODIFIED_AGENT: {
		name: "Builder modified agent",
		description: "The Instance AI builder saved a change to an agent that was already configured. One of three same-shaped modification events (\"User modified agent\", \"MCP modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits \"Builder created agent\" instead. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. Replaces the per-item \"Builder added tools/skills to agent\" and \"Builder removed tasks from agent\" events.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	MCP_MODIFIED_AGENT: {
		name: "MCP modified agent",
		description: "An MCP client saved a change to an agent that was already configured, through the `create_agent` or `mutate_agent` tool. One of three same-shaped modification events (\"User modified agent\", \"Builder modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits \"MCP created agent\" instead. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. This surface had no modification telemetry before. The coarser \"User called mcp tool\" event also fires for the same call.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	USER_PUBLISHED_AGENT: {
		name: "User published agent",
		description: "A user explicitly published an agent version, making it the active one. One of three same-shaped publish events (\"Builder published agent\", \"MCP published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing. `republish` identifies a rollback to an older snapshot; `channel_connect` and `slack_setup` are retained only as historical trigger values. event_version 2 moved the emit from the frontend to the backend, which replaced the editor-only scope (version-history publishes were missing) with every user surface, dropped config_version, status and session_id, and added project_id, user_id, trigger, version_id and the capability profile.",
		properties: object({
			...agentPublish,
			event_version: literal("2")
		})
	},
	BUILDER_PUBLISHED_AGENT: {
		name: "Builder published agent",
		description: "The Instance AI builder published an agent version through its publish_agent tool. One of three same-shaped publish events (\"User published agent\", \"MCP published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing.",
		properties: object({
			...agentPublish,
			event_version: literal("1")
		})
	},
	MCP_PUBLISHED_AGENT: {
		name: "MCP published agent",
		description: "An MCP client explicitly published an agent version through the `publish_agent` tool. One of three same-shaped publish events (\"User published agent\", \"Builder published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing. Before this event existed these publishes were reported as \"Agent published\" with source \"builder\", so they were indistinguishable from Instance AI builder publishes.",
		properties: object({
			...agentPublish,
			event_version: literal("1")
		})
	},
	USER_UNPUBLISHED_AGENT: {
		name: "User unpublished agent",
		description: "A user unpublished an agent, clearing its active version. One of three same-shaped unpublish events (\"Builder unpublished agent\", \"MCP unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`. Unlike the publish events these carry no trigger (there is one way to unpublish) and no capability profile. event_version 2 moved the emit from the frontend to the backend and replaced status and session_id with project_id and user_id.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("2")
		})
	},
	BUILDER_UNPUBLISHED_AGENT: {
		name: "Builder unpublished agent",
		description: "The Instance AI builder unpublished an agent through its unpublish_agent tool. One of three same-shaped unpublish events (\"User unpublished agent\", \"MCP unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("1")
		})
	},
	MCP_UNPUBLISHED_AGENT: {
		name: "MCP unpublished agent",
		description: "An MCP client unpublished an agent through the `unpublish_agent` tool. One of three same-shaped unpublish events (\"User unpublished agent\", \"Builder unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`. Before this event existed these unpublishes were reported as \"Agent unpublished\" with source \"builder\", so they were indistinguishable from Instance AI builder unpublishes.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("1")
		})
	},
	INSTANCE_AI_OPENED_FROM_AGENT_PREVIEW: {
		name: "Instance AI opened from agent preview",
		description: "The user handed a preview chat session off to Instance AI from the agent builder preview panel.",
		properties: object({
			agent_id: string(),
			preview_thread_id: string(),
			preview_execution_id: string().optional()
		})
	},
	USER_GAVE_MCP_ACCESS_TO_AGENT: {
		name: "User gave MCP access to agent",
		description: "An agent was exposed over MCP. The sibling \"User gave MCP access to workflow\" and \"User toggled MCP access\" events are not registered.",
		properties: object({ agent_id: string() })
	},
	USER_SELECTED_AGENTS_FOR_MCP: {
		name: "User selected agent from list",
		description: "The user confirmed a bulk agent selection in the MCP connect-agents dialog. Property is camelCase for warehouse continuity with existing rows.",
		properties: object({
			agentIds: array(string()),
			count: number()
		})
	},
	USER_DISMISSED_MCP_AGENTS_DIALOG: {
		name: "User dismissed mcp agents dialog",
		description: "The user closed the MCP connect-agents dialog without confirming a selection.",
		properties: object({})
	},
	USER_CLICKED_CONNECT_AGENTS_FROM_MCP_SETTINGS: {
		name: "User clicked connect agents from mcp settings",
		description: "The user opened the MCP connect-agents dialog from the MCP settings page.",
		properties: object({})
	},
	BUILDER_ADDED_TASKS: {
		name: "Builder added tasks to agent",
		description: "The Instance AI builder created a scheduled task through the `create_tasks` tool. That path persists outside `AgentConfigService.updateConfig`, so it is not covered by \"Builder modified agent\" — this event stays until the task write path is folded in.",
		properties: object({
			...builderSessionIdentity,
			task_added: string().describe("Identifier of the newly added task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_ADDED_TRIGGER: {
		name: "Builder added trigger to agent",
		description: "The Instance AI builder configured and persisted a chat channel for the target agent through the configure_channel tool, mirroring the frontend \"User added trigger to agent\" event.",
		properties: object({
			...builderSessionIdentity,
			trigger_type: string().describe("Chat integration type that was configured and persisted")
		})
	},
	BUILDER_ASKED_QUESTIONS: {
		name: "Builder asked questions",
		description: "The Instance AI builder used the ask_questions tool and suspended, showing the user a batch of questions to determine the shape of the agent.",
		properties: object({
			...builderSessionIdentity,
			question_count: number(),
			question_types: array(string()).describe("Distinct question types in the batch")
		})
	},
	USER_ANSWERED_BUILDER_QUESTIONS: {
		name: "User answered builder questions",
		description: "The user resumed a builder ask_questions card by answering, skipping, or dismissing it.",
		properties: object({
			...builderSessionIdentity,
			outcome: _enum([
				"answered",
				"skipped",
				"dismissed"
			]),
			answered_count: number(),
			skipped_count: number()
		})
	},
	BUILDER_REQUESTED_CREDENTIAL: {
		name: "Builder requested credential",
		description: "The Instance AI builder used the ask_credential (or ask_embedding_credential) tool and suspended to show a credential picker card. Does not fire when the request auto-resolves without showing a card.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string()
		})
	},
	USER_PROVIDED_CREDENTIAL: {
		name: "User provided credential",
		description: "The user resumed a builder credential picker card by selecting a credential or skipping.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string(),
			outcome: _enum(["provided", "skipped"])
		})
	},
	USER_CLICKED_NEW_AGENT: {
		name: "User clicked new agent",
		description: "The user clicked a new-agent entry point (button, dropdown, or card). No agent exists at this point — `agent_id` is the id minted for the click, which whichever path later persists the agent creates it under, so this joins to the eventual creation event. Clicks with no matching creation are abandoned new-agent flows.",
		properties: object({
			source: _enum([
				"button",
				"dropdown",
				"card"
			]),
			agent_id: string().describe("Minted at the click; no agent row exists yet"),
			manual: boolean().optional().meta({ deprecated: true }).describe("Deprecated: the \"Create agent manually\" entry point was removed. No longer emitted."),
			session_id: sessionId
		})
	},
	USER_SUBMITTED_MESSAGE_TO_AGENT: {
		name: "User submitted message to agent",
		description: "The user sent a test-mode chat message to an agent, with a fingerprint of the agent config at send time.",
		properties: object({
			agent_id: string(),
			mode: literal("test").describe("Constant dimension kept for warehouse-schema stability"),
			status: agentStatus,
			agent_config: agentConfigFingerprint,
			session_id: sessionId
		})
	},
	USER_ADDED_TRIGGER_TO_AGENT: {
		name: "User added trigger to agent",
		description: "The user configured and persisted a chat trigger from the agent builder.",
		properties: object({
			agent_id: string(),
			trigger_type: string(),
			triggers: array(string()).describe("Configured trigger types after the change"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_AGENT_NODE: {
		name: "User added agent node",
		description: "The user added a Message an Agent node to the workflow canvas. agent_source distinguishes the inline agent variant from calling an existing agent.",
		properties: object({
			agent_source: _enum(["inline", "referenced"]).optional().describe("Omitted when the node was added without the agents panel preset (treat as 'referenced')"),
			agent_id: string().optional().describe("Referenced agent ID, when one was picked"),
			workflow_id: string(),
			node_id: string(),
			node_version: number()
		})
	},
	USER_OPENED_AGENT_TOOL: {
		name: "User opened agent tool",
		description: "The user opened a tool from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			tool_type: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_AGENT_SKILL: {
		name: "User opened agent skill",
		description: "The user opened a skill from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			skill_id: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_ADD_SKILL_MODAL: {
		name: "User opened add skill modal",
		description: "The user opened the add-skill modal in the builder.",
		properties: object({
			agent_id: string(),
			session_id: sessionId
		})
	},
	USER_IMPORTED_AGENT_SKILL: {
		name: "User imported agent skill",
		description: "The user imported a skill into an agent from a skill file or folder, with success or error outcome.",
		properties: object({
			agent_id: string(),
			source: _enum(["skill_file", "folder"]),
			status: _enum(["success", "error"]),
			reference_count: number(),
			error: string().optional(),
			session_id: sessionId
		})
	},
	USER_STARTED_ADDING_AGENT_TOOL: {
		name: "User started adding agent tool",
		description: "The user started adding an available tool manually by connecting it or creating a workflow.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			source: literal("manual"),
			agent_id: optionalAgentId
		})
	},
	USER_EDITED_AGENT_TOOL: {
		name: "User edited agent tool",
		description: "An existing agent tool's configuration was saved from the tools modal.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			...toolIdentity,
			agent_id: optionalAgentId
		})
	},
	USER_OPENED_AGENT_PREVIEW: {
		name: "User opened agent preview",
		description: "The user opened the agent preview panel in the builder.",
		properties: object({ agent_id: string() })
	},
	USER_SAVED_AGENT_SKILL: {
		name: "User saved agent skill",
		description: "An agent skill autosave completed in the builder.",
		properties: object({
			agent_id: string(),
			skill_id: string()
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/events/context.ts
/** The scope decides who edits a preference and who receives it. */
var scopeType = _enum([
	"user",
	"project",
	"instance"
]).describe("Who the preference applies to: only its author, one project, or the whole instance");
/** Length only. The text is free-form user writing. */
var textLength = number().describe("Character count of the preference text. The text itself is never reported");
/**
* Which surface acted, with the same values as the `source` column. `ui` is the settings area,
* where only a person writes, so an event that only an assistant can fire uses
* `assistantSurface` instead and a `ui` row can never be counted as assistant activity.
*/
var surface = _enum([
	"ui",
	"aia",
	"mcp"
]).describe("Surface the event came from, with the same values as the `source` column");
var assistantSurface = _enum(["aia", "mcp"]).describe("Assistant surface that acted. The settings area cannot fire this event");
var CONTEXT_TELEMETRY = defineTelemetryEvents({
	USER_CREATED_PREFERENCE: {
		name: "User created preference",
		description: "A user saved a new preference from the Context settings area. Fires once the save succeeds, so opening the modal and cancelling reports nothing.",
		properties: object({
			scope_type: scopeType,
			text_length: textLength,
			project_id: string().optional().describe("Present only for a project-scoped preference")
		})
	},
	USER_UPDATED_PREFERENCE: {
		name: "User updated preference",
		description: "A user saved an edit to an existing preference. Fires once the save succeeds. Reports the resulting scope, not the prior one; `scope_changed` tells them apart.",
		properties: object({
			scope_type: scopeType,
			text_length: textLength,
			scope_changed: boolean().describe("Whether this edit moved the preference to a different scope"),
			project_id: string().optional().describe("Present only when the resulting scope is a project")
		})
	},
	USER_DELETED_PREFERENCES: {
		name: "User deleted preferences",
		description: "A user deleted one or more preferences. One event covers a single row action and a bulk delete; `source` tells them apart and `count` carries how many went. Fires after the delete succeeds and the confirmation was accepted.",
		properties: object({
			count: number().describe("How many preferences the operation deleted"),
			source: _enum(["row", "bulk"]).describe("`row` is the per-row Delete button, `bulk` is the selection toolbar"),
			scope_types: array(scopeType).describe("Distinct scopes the deleted preferences covered")
		})
	},
	PREFERENCES_APPLIED_TO_TURN: {
		name: "Preferences applied to a turn",
		description: "A turn was built with the saved preferences available to it. Fires once for each turn that ran the preferences path, including a turn that applied none, so the share of turns with preferences is computable. CONTEXT-139 fires it.",
		properties: object({
			count: number().describe("Preferences the request carried. 0 when none applied"),
			scope_types: array(scopeType).describe("Distinct scopes the applied preferences covered"),
			rendered_length: number().describe("Characters in the rendered block. Reviews the caps: a 95th percentile above 8,000 means the caps need new numbers"),
			surface: assistantSurface,
			injected_this_turn: boolean().describe("False when the text was unchanged and an earlier block in the same conversation still carries it. Shows how often re-injecting on every turn actually costs anything"),
			turn_latency_ms: number().optional().describe("Wall-clock time of the turn. Paired with `count` to show the cost of the block"),
			turn_token_count: number().optional().describe("Input tokens of the turn, so the cost with and without the block is comparable")
		})
	},
	ASSISTANT_SAVED_PREFERENCE: {
		name: "Assistant saved preference",
		description: "An AI surface created or updated a preference on the user behalf, after the user accepted it. Kept apart from the UI events so an assistant write is never counted as a person writing in settings. CONTEXT-138 fires it.",
		properties: object({
			surface: assistantSurface,
			scope_type: scopeType,
			text_length: textLength,
			replaced_existing: boolean().describe("Whether the write updated an existing preference instead of adding one")
		})
	},
	PREFERENCE_CONFIRMATION_SHOWN: {
		name: "Preference confirmation shown",
		description: "The assistant proposed a preference and the confirmation card was shown. Fires when the card appears, whatever the user does next. CONTEXT-138 fires it.",
		properties: object({
			surface: assistantSurface,
			scope_type: scopeType.describe("Scope the assistant offered"),
			text_length: textLength
		})
	},
	PREFERENCE_CONFIRMATION_RESOLVED: {
		name: "Preference confirmation resolved",
		description: "The user answered a preference confirmation. A high `rejected` share means the assistant proposes the wrong preferences, and no other number shows that. CONTEXT-138 fires it.",
		properties: object({
			surface: assistantSurface,
			outcome: _enum([
				"accepted",
				"accepted_after_edit",
				"rejected"
			]).describe("`accepted_after_edit` means the user changed the text before accepting"),
			scope_type: scopeType.describe("Scope the preference was saved with, or the offered scope on a rejection"),
			text_length: textLength.describe("Character count of the text the user accepted or rejected")
		})
	},
	PREFERENCE_SCOPE_ACCEPTED: {
		name: "Preference scope accepted",
		description: "The scope the user accepted against the scope the assistant offered. Shows whether the assistant reads the difference between a personal habit and a team rule. Fires only on an accepted write. CONTEXT-138 and the scope ticket fire it.",
		properties: object({
			surface: assistantSurface,
			offered_scope: scopeType,
			accepted_scope: scopeType,
			scope_changed: boolean().describe("Whether the user moved the write to another scope")
		})
	},
	PREFERENCE_WRITE_REJECTED: {
		name: "Preference write rejected",
		description: "A preference write was refused before it reached the database. Separates a rule the code applied from a user saying no, which is `Preference confirmation resolved`. CONTEXT-138 fires it.",
		properties: object({
			surface,
			reason: _enum([
				"too_long",
				"scope_full",
				"duplicate",
				"not_permitted",
				"blocked_by_admin",
				"failed"
			]).describe("`duplicate` is a write the assistant avoided because the same preference was saved already. `scope_full` is the per-scope cap. `blocked_by_admin` is the assistant permission set to blocked"),
			scope_type: scopeType.optional().describe("Absent when the write named no usable scope"),
			text_length: textLength.optional()
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/setup-properties.ts
var setupVariant = _enum(["control", "variant"]).optional();
var setupTelemetryProperties = {
	session_id: string().optional(),
	variant: setupVariant,
	"$feature/118_instance_ai_setup_overhaul": setupVariant
};
var setupItemProperties = {
	node_id: string(),
	node_type: string().optional(),
	kind: _enum(["credential", "parameter"]),
	credential_type: string().optional(),
	parameter_name: string().optional()
};
//#endregion
//#region ../../@n8n/telemetry/src/events/credentials.ts
var descriptionProperties = {
	has_description: boolean().describe("Whether the saved credential has a nonempty description."),
	description_length: number().int().nonnegative().describe("Length of the trimmed, saved description in UTF-16 code units. Zero when absent.")
};
var CREDENTIALS_TELEMETRY = defineTelemetryEvents({
	USER_CREATED_CREDENTIALS: {
		name: "User created credentials",
		description: "A credential was created. The server sets source to backend and reports description metadata. Existing editor events omit these properties. Description text is never included.",
		properties: object({
			credential_id: string(),
			credential_type: string(),
			source: literal("backend").optional().describe("Set by the server. Existing editor events omit it."),
			public_api: boolean().optional().describe("Whether the server used the public API."),
			has_description: descriptionProperties.has_description.optional(),
			description_length: descriptionProperties.description_length.optional(),
			user_id: string().optional(),
			user_role: string().optional(),
			project_id: string().optional(),
			project_type: string().optional(),
			workflow_id: string().nullable().optional(),
			uiContext: string().optional().describe("Legacy property for the editor entry point."),
			is_private: boolean().optional(),
			uses_external_secrets: boolean().optional(),
			jwe_enabled: boolean().optional(),
			credential_supports_managed_auth: boolean().optional(),
			credential_uses_managed_auth: boolean().optional()
		})
	},
	USER_UPDATED_CREDENTIALS: {
		name: "User updated credentials",
		description: "The server updated a credential through the internal credential API. Description metadata comes from the saved record. Description text is never included.",
		properties: object({
			user_id: string(),
			user_role: string().optional(),
			credential_id: string(),
			credential_type: string(),
			source: literal("backend"),
			...descriptionProperties,
			is_private: boolean(),
			uses_external_secrets: boolean(),
			jwe_enabled: boolean(),
			credential_supports_managed_auth: boolean(),
			credential_uses_managed_auth: boolean()
		})
	},
	USER_STARTED_CREDENTIAL_CONNECTION: {
		name: "User started credential connection",
		description: "The user started a connection attempt or selected an existing credential in the setup panel. Includes retries.",
		properties: object({
			...setupTelemetryProperties,
			source: literal("instance_ai_setup_panel"),
			workflow_id: string(),
			thread_id: string(),
			credential_type: string(),
			method: _enum([
				"oauth",
				"api_key",
				"gateway",
				"advanced",
				"existing"
			])
		})
	},
	USER_COMPLETED_CREDENTIAL_CONNECTION: {
		name: "User completed credential connection",
		description: "A setup-panel credential was selected or connected and its workflow binding was applied or queued. This does not report workflow validation.",
		properties: object({
			...setupTelemetryProperties,
			source: literal("instance_ai_setup_panel"),
			workflow_id: string(),
			thread_id: string(),
			credential_type: string(),
			credential_id: string().nullable(),
			method: _enum([
				"oauth",
				"api_key",
				"gateway",
				"advanced",
				"existing"
			]),
			binding_state: _enum([
				"applied",
				"noop",
				"queued"
			])
		})
	},
	USER_PROBED_CREDENTIAL: {
		name: "User probed credential",
		description: "A stored credential was auth-probed against its own persisted test URL (POST /credentials/:id/probe) — the test path for generic credential types that declare no test, currently Simplified Custom Auth. Fires once per probe, including retries. The outcome is the probe's three-state verdict; joins to 'User created credentials' on credential_id.",
		properties: object({
			user_id: string(),
			credential_id: string(),
			outcome: _enum([
				"accepted",
				"rejected",
				"unverified"
			]).describe("'accepted' = the service took the credential (2xx, or a service-declared accepted status code); 'rejected' = explicit 401/403 auth rejection; 'unverified' = anything else (wrong test URL, unreachable service) — proves nothing about the credential")
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/events/instance.ts
var INSTANCE_TELEMETRY = defineTelemetryEvents({ INSTANCE_STARTED: {
	name: "Instance started",
	description: "Instance finished booting, reported once per main process start with a snapshot of its configuration.",
	properties: object({
		version_cli: string(),
		db_type: _enum(["sqlite", "postgresdb"]),
		db_version: string().nullable().describe("Postgres server version, or SQLite library version. Null when it could not be determined, which for `postgresdb` means the query failed rather than that the instance runs SQLite."),
		n8n_version_notifications_enabled: boolean(),
		n8n_disable_production_main_process: boolean(),
		system_info: object({
			os: object({
				type: string(),
				version: string()
			}),
			memory: number().describe("Total system memory in KiB"),
			cpus: object({
				count: number(),
				model: string(),
				speed: number().describe("Clock speed in MHz")
			}),
			is_docker: boolean()
		}),
		execution_variables: object({
			executions_mode: _enum(["regular", "queue"]),
			executions_timeout: number().describe("Seconds, -1 for unlimited"),
			executions_timeout_max: number().describe("Seconds"),
			executions_data_save_on_error: _enum(["all", "none"]),
			executions_data_save_on_success: _enum(["all", "none"]),
			executions_data_save_on_progress: boolean(),
			executions_data_save_manual_executions: boolean(),
			executions_data_prune: boolean(),
			executions_data_max_age: number().describe("Hours")
		}),
		workflow_history: object({
			compaction_optimizing_time_window_hours: number(),
			compaction_trim_on_start_up: boolean(),
			compaction_trimming_time_window_days: number()
		}),
		n8n_deployment_type: string(),
		n8n_binary_data_mode: _enum([
			"default",
			"filesystem",
			"s3",
			"azure",
			"database"
		]),
		smtp_set_up: boolean(),
		ldap_allowed: boolean(),
		saml_enabled: boolean(),
		license_plan_name: string(),
		license_tenant_id: number(),
		binary_data_s3: boolean().describe("S3 binary data is selected, available and licensed, all three"),
		multi_main_setup_enabled: boolean(),
		instance_ai: object({
			sandbox_enabled: boolean(),
			sandbox_provider: string(),
			search_brave_set: boolean(),
			search_searxng_set: boolean(),
			model_env_set: boolean().describe("Model connection env vars are set (API key or base URL). UI-credential model state is on the \"AI Assistant setup completed\" and \"User viewed AI Assistant setup page\" events instead"),
			model_id: string().describe("Configured model identifier incl. provider, e.g. 'anthropic/claude-sonnet-4'")
		}).describe("Which model, sandbox and search providers are configured via env vars, never key values"),
		metrics: object({
			metrics_enabled: boolean(),
			metrics_category_default: boolean(),
			metrics_category_routes: boolean(),
			metrics_category_cache: boolean(),
			metrics_category_logs: boolean(),
			metrics_category_queue: boolean(),
			metrics_category_execution_data: boolean(),
			metrics_category_webhooks: boolean(),
			metrics_category_forms: boolean(),
			metrics_category_workflow_info: boolean()
		}),
		earliest_workflow_created: unknown().describe("Date of the oldest workflow, absent when the instance has none"),
		otel: object({
			enabled: boolean(),
			include_node_spans: boolean()
		}),
		settings_managed_by_env_vars: object({
			owner_managed_by_env: boolean(),
			sso_managed_by_env: boolean(),
			security_policy_managed_by_env: boolean(),
			log_streaming_managed_by_env: boolean(),
			mcp_managed_by_env: boolean(),
			community_packages_managed_by_env: boolean()
		})
	})
} });
//#endregion
//#region ../../@n8n/telemetry/src/events/instance-ai.ts
/**
* How each n8n Assistant setup component is configured. Source (who set it) and
* type/provider (what it is) are separate properties on purpose: an env-var
* Daytona sandbox reports sandbox_source 'env' and sandbox_type 'daytona',
* so neither dimension shadows the other.
*/
var setupSnapshotProps = {
	model_source: _enum([
		"ui",
		"env",
		"none"
	]).describe("Whether the model is configured via a UI credential, env vars, or not at all"),
	model_provider: string().nullable().describe("Model provider, e.g. 'anthropic'. Null when not configured or not derivable"),
	model_name: string().nullable().describe("Selected model name. Null when not configured; on the page-view event also null when the name is env-managed, which the emitting frontend cannot resolve — \"AI Assistant setup completed\" carries the resolved name"),
	sandbox_source: _enum([
		"ui",
		"env",
		"none"
	]),
	sandbox_type: _enum(["n8n-sandbox", "daytona"]).nullable(),
	web_search_source: _enum([
		"ui",
		"env",
		"disabled",
		"none"
	]).describe("'disabled' means the admin explicitly turned web search off, which counts as decided"),
	web_search_provider: _enum(["brave", "searxng"]).nullable()
};
var freeNudgeVariant = _enum([
	"control",
	"variant-1",
	"variant-2"
]);
var freeNudgeTreatmentVariant = _enum(["variant-1", "variant-2"]);
var openWorkflowInAssistantVariant = _enum(["control", "variant"]);
var threadActionSource = _enum([...INSTANCE_AI_THREAD_SOURCES, INSTANCE_AI_THREAD_SOURCE_FALLBACK]);
var prefillType = _enum([...INSTANCE_AI_PREFILL_TYPES, INSTANCE_AI_PREFILL_TYPE_FALLBACK]);
var INSTANCE_AI_TELEMETRY = defineTelemetryEvents({
	SETUP_PANEL_STATE_OBSERVED: {
		name: "AI Assistant setup panel state observed",
		description: "The setup panel observed a new requirement snapshot. Also fires when no setup is needed, including workflows whose credentials were already connected.",
		properties: object({
			...setupTelemetryProperties,
			workflow_id: string(),
			thread_id: string(),
			credential_count: number(),
			pending_credential_count: number(),
			pending_parameter_count: number(),
			already_connected_count: number()
		})
	},
	SETUP_PANEL_ITEM_SHOWN: {
		name: "AI Assistant setup panel item shown",
		description: "A setup checklist row became visible. Reopening the same row within the mounted panel does not emit another event.",
		properties: object({
			...setupTelemetryProperties,
			workflow_id: string(),
			thread_id: string(),
			kind: _enum([
				"credential",
				"parameters",
				"details"
			]),
			credential_type: string().optional(),
			parameter_count: number(),
			items: array(object(setupItemProperties)).optional()
		})
	},
	SETUP_PANEL_DISMISSED: {
		name: "AI Assistant setup panel dismissed",
		description: "A visible setup panel closed. The reason separates navigation and removed requirements from a finished execution or an explicit dismissal.",
		properties: object({
			...setupTelemetryProperties,
			workflow_id: string(),
			thread_id: string(),
			reason: _enum([
				"navigation",
				"items_removed",
				"execution_succeeded",
				"execution_finished",
				"user_dismissed"
			])
		})
	},
	USER_CLICKED_AI_CREDIT_BALANCE: {
		name: "User clicked AI credit balance",
		description: "The user clicked the n8n Assistant credit balance button to open or close the balance dropdown.",
		properties: object({})
	},
	FREE_NUDGE_EXPOSED: {
		name: "Instance AI free nudge exposed",
		description: "An eligible user reached the Instance AI empty state for the free-use nudge experiment, including the control variant.",
		properties: object({
			variant: freeNudgeVariant,
			"$feature/105_instance_ai_free_nudge": freeNudgeVariant
		})
	},
	FREE_NUDGE_DISMISSED: {
		name: "Instance AI free nudge dismissed",
		description: "The user dismissed a visible Instance AI free-use nudge.",
		properties: object({
			variant: freeNudgeTreatmentVariant,
			"$feature/105_instance_ai_free_nudge": freeNudgeTreatmentVariant
		})
	},
	OPEN_BY_DEFAULT_NOTIFICATION_SHOWN: {
		name: "Open in assistant notification shown",
		description: "The open-by-default experiment notification rendered after a workflow list card auto-opened in the n8n Assistant.",
		properties: object({
			workflow_id: string().nullable(),
			variant: openWorkflowInAssistantVariant,
			"$feature/108_open_workflow_in_assistant": openWorkflowInAssistantVariant
		})
	},
	OPEN_BY_DEFAULT_NOTIFICATION_ACTION: {
		name: "Open in assistant notification actioned",
		description: "The user acted on the open-by-default experiment notification.",
		properties: object({
			method: _enum([
				"got_it",
				"never_show_again",
				"close",
				"settings_link"
			]),
			variant: openWorkflowInAssistantVariant,
			"$feature/108_open_workflow_in_assistant": openWorkflowInAssistantVariant
		})
	},
	DEFAULT_EDITOR_PREFERENCE_CHANGED: {
		name: "Default editor preference changed",
		description: "The user saved the default-editor preference on the n8n Assistant settings page.",
		properties: object({
			value: _enum(["assistant", "manual"]),
			variant: openWorkflowInAssistantVariant,
			"$feature/108_open_workflow_in_assistant": openWorkflowInAssistantVariant
		})
	},
	MANUAL_EDITOR_OPENED: {
		name: "Manual editor opened from assistant",
		description: "The user clicked the Manual Editor button on a workflow artifact tab.",
		properties: object({
			workflow_id: string(),
			thread_id: string().optional(),
			variant: openWorkflowInAssistantVariant,
			"$feature/108_open_workflow_in_assistant": openWorkflowInAssistantVariant
		})
	},
	USER_CLICKED_AI_ASSISTANT_INPUT_PLUS_BUTTON: {
		name: "User clicked AI Assistant input plus button",
		description: "The user clicked the plus button in the n8n Assistant input.",
		properties: object({})
	},
	TOOLS_LIST_OPENED: {
		name: "Instance AI tools list opened",
		description: "The user opened the n8n Assistant tools connection modal.",
		properties: object({ source: _enum(["input_menu", "mcp_connect_card"]) })
	},
	MCP_SETTINGS_OPENED: {
		name: "Instance AI mcp settings opened",
		description: "The user opened settings for an MCP connection in the n8n Assistant.",
		properties: object({
			server_slug: string(),
			source: _enum(["input_menu", "mcp_connect_card"])
		})
	},
	MCP_FIRST_CREDENTIAL_CONNECTION_STARTED: {
		name: "Instance AI mcp first credential connection start",
		description: "The user started connecting the first credential for an MCP server.",
		properties: object({ server_slug: string() })
	},
	MCP_CREDENTIAL_DROPDOWN_OPENED: {
		name: "Instance AI mcp credential dropdown opened",
		description: "The user opened the credential dropdown for an MCP server.",
		properties: object({ server_slug: string() })
	},
	MCP_EXISTING_CREDENTIAL_SELECTED: {
		name: "Instance AI mcp existing credential selected",
		description: "The user selected an existing credential for an MCP server.",
		properties: object({ server_slug: string() })
	},
	MCP_NEW_CREDENTIAL_CONNECTION_STARTED: {
		name: "Instance AI mcp new credential connection start",
		description: "The user started connecting a new credential for an MCP server.",
		properties: object({ server_slug: string() })
	},
	MCP_TOOL_FILTER_SETTINGS_UPDATED: {
		name: "Instance AI mcp tool filter settings updated",
		description: "The user updated which tools are enabled for an MCP server.",
		properties: object({
			server_slug: string(),
			inclusion_mode: _enum([
				"all",
				"selected",
				"except"
			])
		})
	},
	BROWSER_USE_MODAL_OPENED: {
		name: "Instance AI Connect Browser Use modal opened",
		description: "The user opened the Browser Use connection interface.",
		properties: object({
			browser_supported: boolean(),
			source: _enum([
				"input_menu",
				"credential_setup",
				"tools_modal"
			])
		})
	},
	BROWSER_USE_INSTALL_EXTENSION_CLICKED: {
		name: "Instance AI Install Chrome Browser Extension button clicked",
		description: "The user clicked the button to install the Browser Use Chrome extension.",
		properties: object({})
	},
	BROWSER_USE_OPEN_EXTENSION_CLICKED: {
		name: "Instance AI Open Browser Use Extension button clicked",
		description: "The user clicked the button to open the Browser Use extension.",
		properties: object({})
	},
	BROWSER_USE_DIRECT_CONNECT_REQUESTED: {
		name: "Instance AI Browser Use direct connect requested",
		description: "The n8n Assistant requested a direct connection through the Browser Use extension.",
		properties: object({})
	},
	USER_RECEIVED_AI_ASSISTANT_RESPONSE: {
		name: "User received AI Assistant response",
		description: "The initial foreground AI Assistant reply was rendered after a user submitted a chat message. Starts before attachment processing and first-thread creation, then fires once when the initial run completes or pauses for user input. Automated follow-up runs do not create another sample.",
		properties: object({
			instance_id: string(),
			thread_id: string(),
			run_id: string().describe("Run ID returned for the user-submitted message"),
			latency_ms: number().int().nonnegative().describe("Milliseconds from submit intent until the initial foreground reply is rendered"),
			is_first_user_message: boolean().describe("Whether this was the thread's first user message"),
			response_kind: _enum(["completed", "awaiting_input"]).describe("Whether the response completed the run or rendered an input request"),
			action_source: threadActionSource,
			tab_visible: boolean().describe("Whether the document was visible when the response rendered")
		})
	},
	COMPUTER_USE_MODAL_OPENED: {
		name: "User opened computer use connection modal",
		description: "The user opened the Computer Use connection interface.",
		properties: object({
			is_connected: boolean(),
			source: _enum(["input_menu", "tools_modal"])
		})
	},
	COMPUTER_USE_CONNECTION_COMMAND_COPIED: {
		name: "User copied computer use connection command",
		description: "The user copied the Computer Use connection command.",
		properties: object({ os: _enum([
			"mac",
			"windows",
			"linux"
		]) })
	},
	BUILDER_SPECCED_TEMPLATED_CRED: {
		name: "Builder specced templated cred",
		description: "The Instance AI workflow builder composed a Simplified Custom Auth recipe (credentialHints) and suspended to show its setup card. Captures the recipe fields so template and link quality are observable in production — one event per recipe in the suspension. Contains no secrets by construction: recipes are agent-authored before any user input.",
		properties: object({
			thread_id: string(),
			input_thread_id: string().describe("Joins with 'Builder asked for input' / 'User finished providing input'"),
			template: record(string(), unknown()).describe("Auth request parts with {{placeholder}} markers, never real values"),
			placeholders: array(record(string(), unknown())).describe("Placeholder defs (name, title, info, type, optional)"),
			test_url: string().optional(),
			docs_url: string().optional().describe("Provider key page the credential help thread directs the user to"),
			service_host: string().optional().describe("API host the recipe targets (server-derived) — groups events by service"),
			accepted_status_codes: array(number()).optional().describe("No longer model-suppliable; expected absent — presence flags a regression")
		})
	},
	USER_VIEWED_AI_ASSISTANT_SETUP_PAGE: {
		name: "User viewed AI Assistant setup page",
		description: "The user landed on a self-hosted n8n Assistant setup surface: the onboarding takeover on /assistant, or the settings page on /settings/assistant. Carries the configuration snapshot at view time, so joined with \"AI Assistant setup completed\" it measures setup drop-off. Not emitted on cloud or proxy deployments, where setup is managed.",
		properties: object({
			page: _enum(["onboarding", "settings"]).describe("Which setup surface: the first-run onboarding wizard or the settings page"),
			...setupSnapshotProps
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_MODEL: {
		name: "User configured AI Assistant model",
		description: "An admin saved an n8n Assistant model connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_provider is absent. The event marks a saved configuration, not a verified one — the setup wizard verifies before saving, but a direct API save can skip verification. Env-var model config never emits this; it is visible on \"Instance started\" and on the snapshot events instead.",
		properties: object({
			provider: string().describe("Model provider derived from the credential type, e.g. 'anthropic'"),
			model: string(),
			previous_provider: string().optional().describe("Absent when nothing was configured before — an absent value marks a first connect"),
			previous_model: string().optional()
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_SANDBOX: {
		name: "User configured AI Assistant sandbox",
		description: "An admin saved an n8n Assistant sandbox connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_sandbox_type is absent. Env-var sandbox config never emits this.",
		properties: object({
			sandbox_type: _enum(["n8n-sandbox", "daytona"]),
			previous_sandbox_type: _enum(["n8n-sandbox", "daytona"]).optional().describe("Absent when nothing was configured before — an absent value marks a first connect")
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_WEB_SEARCH: {
		name: "User configured AI Assistant web search",
		description: "An admin saved an n8n Assistant web search connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_provider is absent. Explicitly disabling web search does not emit this; that decision is visible as web_search_source \"disabled\" on the snapshot events.",
		properties: object({
			provider: _enum(["brave", "searxng"]),
			previous_provider: _enum(["brave", "searxng"]).optional().describe("Absent when nothing was configured before — an absent value marks a first connect")
		})
	},
	AI_ASSISTANT_CONNECTION_FAILED: {
		name: "AI Assistant connection failed",
		description: "A setup verification call (POST /instance-ai/settings/verify/*) failed for a model, sandbox, or web search connection. One event covers all three components; the component property tells them apart. Fires once per failed verify attempt, including retries.",
		properties: object({
			component: _enum([
				"model",
				"sandbox",
				"web_search"
			]),
			provider: string().nullable().describe("Provider being verified, when known — model provider, sandbox type, or search provider"),
			failure: _enum([
				"unauthorized",
				"forbidden",
				"quota_exceeded",
				"rate_limited",
				"timeout",
				"unreachable",
				"invalid_response",
				"provider_error"
			]).describe("Classified failure, same taxonomy the verify response returns to the UI"),
			error_message: string().describe("Sanitized provider error: URL queries stripped, length capped, never key values")
		})
	},
	AI_ASSISTANT_SETUP_COMPLETED: {
		name: "AI Assistant setup completed",
		description: "A self-hosted instance reached a complete n8n Assistant setup for the first time: model configured, sandbox configured, and web search decided (configured or explicitly disabled) — the same predicate that unlocks the assistant UI. Fires at most once per instance, guarded by a persisted settings key, regardless of how the last piece was set: emitted from the settings save path, with a boot-time check so an env-var finish is also counted. No \"User\" prefix because the last piece can land via env vars with no acting user.",
		properties: object({ ...setupSnapshotProps })
	},
	USER_ADDED_NODES_TO_CHAT: {
		name: "User added nodes to chat",
		description: "The user attached one or more canvas nodes as context to the Instance AI chat. Fires once per add action, after the attachment is built — so node_count reflects the nodes actually attached (unresolved ids dropped, capped at the per-set maximum), not the raw selection.",
		properties: object({
			source: _enum([
				"node_toolbar",
				"selection_toolbar",
				"context_menu",
				"group_title_bar",
				"keyboard"
			]).describe("Which affordance triggered the add"),
			node_count: number().describe("Number of nodes actually attached in this add action")
		})
	},
	USER_SENT_CHAT_MESSAGE_WITH_NODES: {
		name: "User sent chat message with nodes",
		description: "The user sent an Instance AI chat message that carried node context. Fires only when the submitted message includes at least one node attachment; node_count is the total nodes across every attached set in the message.",
		properties: object({ node_count: number().describe("Total nodes attached across the sent message") })
	},
	USER_SENT_BUILDER_MESSAGE: {
		name: "User sent builder message",
		description: "The user sent a message to the n8n Assistant. Fires once per message on the optimistic send, before the request is admitted, so a refused send still counts as an attempt. Carries who wrote the text: a pre-fill is an opener n8n composed (a failed execution, a credential modal, a template card, a suggestion chip) that the user accepted or edited, so pre-fill share must be read from prefill_type rather than matched against the message body.",
		properties: object({
			...setupTelemetryProperties,
			workflow_id: string().optional(),
			pending_credential_count: number().optional(),
			pending_parameter_count: number().optional(),
			thread_id: string(),
			instance_id: string(),
			is_first_message: boolean().describe("Whether this is the first user message in the thread"),
			action_source: threadActionSource.describe("The thread's entry point, read back from thread metadata. 'unknown' covers threads created before source was required."),
			prefill_type: prefillType.nullable().describe("Which pre-fill surface composed the text. Null when the user typed it. 'unknown' is a read-path fallback for a pre-fill a previous deploy stashed in the browser, so a non-trivial share of it is a bug, not a category."),
			prefill_id: string().nullable().describe("Catalog entry id for pre-fill types that have sub-items, e.g. a suggestion id. Null otherwise."),
			prompt_modified: boolean().nullable().describe("Whether the user edited the pre-filled text before sending. Always false for pre-fills that send without being shown. Null when the user typed the message.")
		})
	},
	BUILDER_LISTED_WORKFLOWS: {
		name: "Builder listed workflows",
		description: "Instance AI called workflows(action=\"list\"). Emitted on every list call, in both arms of the folder-exploration rollout, so folder-scoped calls have a denominator. Carries no folder names.",
		properties: object({
			user_id: string(),
			thread_id: string().optional(),
			folder_exploration_enabled: boolean().describe("Whether the run had the folder-exploration flag on"),
			folder_scope: _enum([
				"none",
				"path",
				"id"
			]).describe("How the caller addressed a folder, if at all"),
			recursive: boolean().optional().describe("Only when a folder was addressed"),
			folder_resolution: _enum([
				"resolved",
				"not_found",
				"ambiguous",
				"unsupported",
				"scope_too_wide"
			]).optional().describe("Only when a folder was addressed"),
			candidate_count: number().int().optional().describe("Folders offered back on an unresolved request"),
			scope: _enum(["project", "instance"]),
			has_query: boolean().describe("Whether a name filter was also passed"),
			result_count: number().int().describe("Rows returned on this page"),
			total: number().int().describe("Rows matching every filter, ignoring limit")
		})
	},
	USER_STARTED_AI_ASSISTANT_ONBOARDING: {
		name: "User started AI Assistant onboarding",
		description: "An onboarding thread was created: the user arrived from the n8n Cloud signup survey (/assistant?source=onboarding) or opened the onboarding by hand. Fires once per thread, from the backend, when the seeded greeting and question card are stored.",
		properties: object({
			user_id: string(),
			thread_id: string(),
			team: string().nullable().describe("The signup survey answer to \"What team are you on?\". Null when the survey did not answer it, so the card asks"),
			team_source: _enum(["cloud", "url"]).nullable().describe("Where the team answer came from: the n8n Cloud account, or the `?team=` query of a test run. Null when there is no team")
		})
	},
	USER_ANSWERED_AI_ASSISTANT_ONBOARDING_CARD: {
		name: "User answered AI Assistant onboarding card",
		description: "The user settled the question card an onboarding thread opens with. Fires once per thread, from the backend, when the answers are stored. Carries the picked apps and the free text as typed.",
		properties: object({
			user_id: string(),
			thread_id: string(),
			team: string().nullable().describe("From the signup survey or the card. Null when the card step was skipped"),
			team_source: _enum([
				"cloud",
				"url",
				"card"
			]).nullable().describe("Where the team came from: the n8n Cloud account, the `?team=` query of a test run, or the card. Null when the card step was skipped"),
			apps: array(string()).describe("Apps picked in the card, by their shown names"),
			custom_text: string().nullable().describe("Free text typed in the card, which starts the first model turn")
		})
	},
	AI_ASSISTANT_ONBOARDING_ENDED: {
		name: "AI Assistant onboarding ended",
		description: "The onboarding flow of a thread ended and the normal chat came back. Fires once per thread, from the browser, on the first build, when the agent calls `leave-onboarding`, or when a run fails.",
		properties: object({
			thread_id: string(),
			instance_id: string(),
			outcome: _enum([
				"build",
				"left",
				"run_failed"
			]).describe("build: the agent started the first workflow. left: the agent called `leave-onboarding`. run_failed: the run ended with an error or was interrupted"),
			leave_reason: string().nullable().describe("The reason the agent gave on `leave-onboarding`: 'stop', 'explore' or 'unrelated_request'. Null for the other outcomes, or when the agent gave none")
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/events/mcp.ts
/**
* Brand and category resolved from the client's self-registered name by the
* shared matchers, so a revoke can be segmented the same way the connect
* dialog's client slug is. Null when the name matches no known brand.
*/
var clientBrand = _enum([
	"claude",
	"cursor",
	"vscode",
	"openai"
]).nullable().describe("Client brand, mirroring MCP_CLIENT_BRAND_MATCHERS in @n8n/api-types");
var clientType = _enum([
	"cli",
	"ide",
	"editor",
	"assistant"
]).nullable();
/** Which JSON action opened the MCP nudge modal. */
var nudgeSurface = _enum([
	"export",
	"import_file",
	"import_url",
	"copy",
	"paste"
]).describe("The action that opened the nudge: the Export JSON menu item, Import from file, Import from URL, copying nodes, or pasting workflow JSON onto the canvas");
var MCP_TELEMETRY = defineTelemetryEvents({
	MCP_NUDGE_VIEWED: {
		name: "User viewed MCP nudge",
		description: "The MCP nudge modal opened after the user exported a workflow as JSON, imported one from a file or URL, copied nodes, or pasted workflow JSON onto the canvas. Fires only when the modal opens, so a trigger that the flag, the two-impression cap, an opt-out, or instance-level MCP access suppresses emits nothing. Each fire consumes one impression.",
		properties: object({ surface: nudgeSurface })
	},
	MCP_NUDGE_CONNECT_CLICKED: {
		name: "User clicked connect in MCP nudge",
		description: "The user clicked \"Connect n8n\" in the MCP nudge. The app navigates to the MCP settings page and abandons the export or import that opened the nudge. Kept separate from the skip and dismiss events so the connect-to-export click ratio stays computable.",
		properties: object({ surface: nudgeSurface })
	},
	MCP_NUDGE_SKIPPED: {
		name: "User skipped MCP nudge",
		description: "The user clicked \"Skip\" in the MCP nudge. The export or import that opened the nudge completes unchanged. Closing with × or Escape is \"User dismissed MCP nudge\" instead.",
		properties: object({ surface: nudgeSurface })
	},
	MCP_NUDGE_DISMISSED: {
		name: "User dismissed MCP nudge",
		description: "The user closed the MCP nudge with × or Escape without choosing an action. The export or import that opened the nudge completes unchanged.",
		properties: object({ surface: nudgeSurface })
	},
	MCP_NUDGE_OPTED_OUT: {
		name: "User opted out of MCP nudge",
		description: "The user checked \"Don't show this again\" in the MCP nudge. Fires when the checkbox is checked, independent of which button later closes the modal. The nudge never shows again for this user.",
		properties: object({ surface: nudgeSurface })
	},
	USER_GAVE_MCP_ACCESS_TO_WORKFLOW: {
		name: "User gave MCP access to workflow",
		description: "A workflow was exposed over MCP.",
		properties: object({ workflow_id: string() })
	},
	USER_TOGGLED_MCP_ACCESS: {
		name: "User toggled MCP access",
		description: "An admin turned instance-level MCP access on or off. Reports the resulting state.",
		properties: object({ state: boolean().describe("Resulting state of MCP access, not the prior one") })
	},
	USER_CLICKED_CONNECT_CLIENT: {
		name: "User clicked connect MCP client",
		description: "A user opened the connect-client dialog. Heads the client setup funnel: sessions carrying this event without a follow-up copy or token fetch are the ones abandoning the one-click setup.",
		properties: object({ source: _enum(["settings"]).describe("Where the dialog was opened from; the MCP settings page is the only entry point today") })
	},
	USER_VIEWED_ALL_MCP_CLIENTS: {
		name: "User viewed all MCP clients",
		description: "An admin switched the connected-clients page from their own consents to the whole instance's. Only the switch is reported, so landing on the page emits nothing.",
		properties: object({})
	},
	USER_REVOKED_MCP_CLIENT_ACCESS: {
		name: "User revoked MCP client access",
		description: "A connected client's MCP access was revoked from the connected-clients page. Fires once the revoke succeeds, so opening the confirmation dialog and cancelling emits nothing.",
		properties: object({
			client_id: string().describe("OAuth client whose consent was revoked. Dynamically registered, so it is unique per user and client pair rather than a segmentable dimension: use client_brand for that"),
			client_brand: clientBrand,
			client_type: clientType,
			revoked_for_other: boolean().describe("Whether an admin revoked another user's grant rather than their own")
		})
	},
	AUTO_EXPOSE_NEW_WORKFLOWS_TOGGLED: {
		name: "User toggled auto-expose new workflows to MCP",
		description: "An admin turned the \"Auto-expose new workflows\" MCP setting on or off. Reports the resulting state so enabling and disabling are distinguishable.",
		properties: object({
			enabled: boolean().describe("Resulting state of the setting, not the prior one"),
			source: _enum(["settings", "expose_all"]).describe("Where the toggle came from: \"settings\" for the manual MCP settings switch, \"expose_all\" when enabled automatically as part of exposing all workflows")
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/events/node-type-policies.ts
/**
* Absent for a write that no user made — an environment bootstrap writes the policy with no
* actor, and `user_id` is what builds the RudderStack user, so a placeholder would create one.
*/
var userId = string().optional();
var source = _enum(["user", "environment"]).describe("'environment' is a bootstrap write from configuration, with no acting user");
var scope = _enum(["instance", "project"]).describe("Which scope the policy was written at; project policies compose under instance");
var kind = _enum(["node-types", "credential-types"]).describe("Which type family the policy governs. Credential type policies report through these same events instead of a second set, so this is what tells the two apart.");
var projectId = string().optional().describe("Absent at instance scope");
var ruleCounts = {
	rule_count: number(),
	allow_rule_count: number(),
	deny_rule_count: number(),
	delegate_rule_count: number().describe("Always 0 at project scope, which rejects the delegate action")
};
var NODE_TYPE_POLICIES_TELEMETRY = defineTelemetryEvents({
	USER_SAVED_NODE_TYPE_POLICY: {
		name: "User saved node type policy",
		description: "A node type availability policy was saved for one scope through the composed write that the policy UI uses. One event per save, covering both the scope default action and its rules. Rule-level edits through the advanced document and attachment APIs report separately. The type counts and list report what this scope decides on its own, so at project scope they are the project layer before it composes with the instance policy.",
		properties: object({
			user_id: userId,
			source,
			kind,
			scope,
			project_id: projectId,
			default_action: _enum([
				"allow",
				"deny",
				"delegate"
			]).describe("What the scope decides for a type that no rule matches"),
			previous_default_action: _enum([
				"allow",
				"deny",
				"delegate"
			]).nullable().describe("Null on the first write to this scope, which had no stored default"),
			is_first_write: boolean().describe("Whether this write created the scope; an unwritten scope allows every type"),
			...ruleCounts,
			name_selector_count: number().describe("Rules that target one exact node type name"),
			package_selector_count: number().describe("Rules that target a whole node package"),
			evaluated_type_count: number().describe("Node types this instance knows, and so the denominator for the counts below"),
			blocked_type_count: number(),
			allowed_type_count: number(),
			delegated_type_count: number().describe("Types a project can opt into; always 0 at project scope"),
			blocked_types: array(string()).describe("The node types this policy makes unavailable, capped at 100. Node type names, not user data. Compare the length against blocked_type_count to see whether the cap dropped any"),
			allowed_types: array(string()).describe("The node types this policy leaves available, capped at 100 the same way"),
			previous_rule_count: number().nullable().describe("Null on the first write to this scope"),
			shadow_warning_count: number().describe("Saved rules that can never match, because an earlier rule already covers them"),
			version: number().describe("The scope version after the write")
		})
	},
	USER_UPDATED_NODE_TYPE_POLICY_DOCUMENT: {
		name: "User updated node type policy document",
		description: "A policy document was created, edited, or deleted through the advanced instance-only document API. The composed save that the policy UI uses reports as \"User saved node type policy\" instead. Rule counts describe the document after the operation, so a delete reports 0 and carries the deleted size in previous_rule_count.",
		properties: object({
			user_id: userId,
			source,
			kind,
			operation: _enum([
				"created",
				"updated",
				"deleted"
			]),
			policy_id: string(),
			...ruleCounts,
			previous_rule_count: number().nullable().describe("Null on a created document")
		})
	},
	USER_UPDATED_NODE_TYPE_POLICY_ATTACHMENTS: {
		name: "User updated node type policy attachments",
		description: "The set of policy documents attached to one scope was replaced through the advanced instance-only attachment API. Reports the resulting set, not the individual add or remove.",
		properties: object({
			user_id: userId,
			source,
			kind,
			scope,
			project_id: projectId,
			scope_id: string(),
			attachment_count: number(),
			floor_attachment_count: number().describe("Attachments that a narrower scope cannot override"),
			previous_attachment_count: number()
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/telemetry-events.ts
var TELEMETRY_EVENT = {
	PLATFORM: defineTelemetryEvents({
		USER_IS_PART_OF_EXPERIMENT: {
			name: "User is part of experiment",
			description: "User was assigned a variant of a running experiment, reported when feature flags resolve in the editor.",
			properties: object({
				name: string().describe("Experiment feature-flag key"),
				variant: union([string(), boolean()]).describe("Variant assigned to the user")
			})
		},
		TASK_RUNNER_DISCONNECTED: {
			name: "Task runner disconnected",
			description: "The broker tore down a task runner connection because the runner was unhealthy: it failed a heartbeat check, or was reported unresponsive after it stopped acknowledging or offering tasks. Normal shutdowns are not reported.",
			properties: object({
				reason: _enum(["failed-heartbeat-check", "runner-unresponsive"]).describe("Which detection reported the runner as unhealthy"),
				mode: _enum(["internal", "external"]).describe("Task runners deployment mode")
			})
		}
	}),
	AGENTS: AGENTS_TELEMETRY,
	CREDENTIALS: CREDENTIALS_TELEMETRY,
	CONTEXT: CONTEXT_TELEMETRY,
	INSTANCE: INSTANCE_TELEMETRY,
	INSTANCE_AI: INSTANCE_AI_TELEMETRY,
	MCP: MCP_TELEMETRY,
	NODE_TYPE_POLICIES: NODE_TYPE_POLICIES_TELEMETRY,
	WORKFLOW: defineTelemetryEvents({
		USER_REQUESTED_WORKFLOW_TEST: {
			name: "User requested workflow test",
			description: "The user started a manual workflow test from the AI Assistant setup panel. This event does not report execution success.",
			properties: object({
				...setupTelemetryProperties,
				source: literal("instance_ai_setup_panel"),
				workflow_id: string(),
				thread_id: string().optional(),
				test_request_id: string().optional()
			})
		},
		SETUP_TEST_FINISHED: {
			name: "AI Assistant setup test finished",
			description: "The setup panel observed a terminal test result or a failed run request. A failed request does not prove that execution did not start. Leaving setup before the result can omit this event.",
			properties: object({
				...setupTelemetryProperties,
				source: literal("instance_ai_setup_panel"),
				workflow_id: string(),
				thread_id: string(),
				test_request_id: string(),
				execution_id: string().optional(),
				status: _enum([
					"success",
					"error",
					"crashed",
					"canceled",
					"request_failed"
				])
			})
		},
		SETUP_SAVED: {
			name: "AI Assistant workflow setup saved",
			description: "A setup surface observed saved requirements after applying changes. Completion covers the observed setup requirements, not credential validity or edits made while setup is closed.",
			properties: object({
				...setupTelemetryProperties,
				instance_id: string(),
				workflow_id: string(),
				thread_id: string(),
				source: _enum(["instance_ai_setup_wizard", "instance_ai_setup_panel"]),
				request_id: string().optional(),
				items: array(object({
					...setupItemProperties,
					completed: boolean()
				})),
				setup_complete: boolean()
			})
		},
		MULTIPLE_NODES_SELECTED: {
			name: "User selected multiple nodes",
			description: "The user has two or more nodes selected on the workflow canvas. Fires once the selection settles (debounced), covering all selection paths — rubber-band drag, shift-click, and select-all — so intermediate states during a drag are not reported. Groups are excluded from the count.",
			properties: object({
				workflow_id: string(),
				node_count: number().describe("Number of nodes selected once the selection settled"),
				push_ref: string().describe("Editor session ref, to join with other canvas events")
			})
		},
		NODE_IDS_HEALED: {
			name: "Workflow node ids healed",
			description: "A published version about to be activated carried duplicate or missing node ids, so a corrected system-authored version was published in its place. `superseded` means the corrected version lost against a concurrent publish or unpublish and was discarded.",
			properties: object({
				workflow_id: string(),
				filled_count: number().describe("Nodes that had no id and received a fresh one"),
				reassigned_count: number().describe("Nodes that shared their id with another node and received a fresh one"),
				dropped_count: number().describe("Exact same-name duplicates removed in favor of their last occurrence"),
				superseded: boolean().describe("Whether the corrected version lost the publish race and was discarded")
			})
		}
	}),
	WORKFLOW_REVIEWS: defineTelemetryEvents({
		USER_REQUESTED_WORKFLOW_REVIEW: {
			name: "User requested workflow review",
			description: "A workflow was submitted for review, opening a review request. Fires once per opened review, not on a later re-pin.",
			properties: object({
				user_id: string(),
				workflow_review_request_id: string(),
				project_id: string().describe("Owning project when the review opened"),
				workflow_id: string(),
				workflow_version_id: string(),
				reviewer_count: number().describe("Reviewers assigned when the review opened, not everyone eligible to review")
			})
		},
		USER_UPDATED_WORKFLOW_VERSION_UNDER_REVIEW: {
			name: "User updated workflow version under review",
			description: "An open review was re-pinned to another version of the workflow it covers. Fires only on a real re-pin, not on a rename or a description edit.",
			properties: object({
				user_id: string(),
				workflow_review_request_id: string(),
				workflow_id: string(),
				workflow_version_id: string().describe("The newly pinned version, not the previous one")
			})
		},
		USER_DECIDED_WORKFLOW_REVIEW: {
			name: "User decided workflow review",
			description: "A user approved a review or requested changes on it. Fires once per decision, so a review can appear several times.",
			properties: object({
				user_id: string(),
				workflow_review_request_id: string(),
				workflow_id: string(),
				workflow_version_id: string().nullable().describe("Null when the pinned version was pruned before the decision"),
				decision: _enum(["approved", "changes_requested"]),
				decided_via: _enum(["assigned-reviewer", "admin-override"]).describe("'assigned-reviewer' = the decider was assigned to this review; 'admin-override' = they decided through an instance or project admin role. Assignment wins when both apply"),
				review_created_at: string().describe("When the review was opened, ISO 8601")
			})
		},
		WORKFLOW_REVIEW_CLOSED: {
			name: "Workflow review closed",
			description: "An open review was closed without a decision because no reviewable workflow was left on it. No user performs it.",
			properties: object({
				workflow_review_request_id: string(),
				cause_trigger: _enum([
					"workflow-archived",
					"workflow-moved",
					"workflow-deleted",
					"unknown"
				]).describe("What left the review without a reviewable workflow. \"unknown\" means the trigger went unrecorded and the review was swept up later, not that nothing triggered it"),
				cause_actor_kind: _enum(["user", "system"]).describe("Who caused the trigger, not who closed the review. \"system\" means no actor was recorded, not that automation acted")
			})
		},
		USER_COMMENTED_ON_WORKFLOW_REVIEW: {
			name: "User commented on workflow review",
			description: "A comment was posted on an open review.",
			properties: object({
				user_id: string(),
				workflow_review_request_id: string()
			})
		}
	})
};
//#endregion
//#region ../../@n8n/telemetry/src/constants.ts
var POSTHOG_EVENTS_BLACKLIST = [TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT];
//#endregion
//#region ../../@n8n/utils/src/scrub-secrets.ts
/**
* Replace common credential patterns in free-form text with `[REDACTED]`.
*
* Used before persisting or transmitting user-supplied text (telemetry
* excerpts, eval report HTML, free-form feedback) where keys/tokens
* accidentally pasted into prompts or command lines could otherwise leak
* downstream.
*
* Conservative by design: matches well-known prefixed tokens, explicit
* `key=value` pairs, and quoted JSON/JS-object fields with sensitive
* names. We don't attempt to redact arbitrary long opaque strings — false
* positives on file paths, IDs, or base64 payloads would make the output
* unreadable.
*/
var SECRET_KEYS = "password|passwd|secret|credentials?|api[_-]?key|authorization|access[_-]?token|refresh[_-]?token|id[_-]?token|session[_-]?token|auth[_-]?token|client[_-]?secret|private[_-]?key|session[_-]?cookie|token";
var QUOTED_KEY_PREFIX = "(?:[\\w.-]*[._-])?";
var SECRET_VALUE_PATTERNS = [
	/-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/g,
	/\beyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
	/(?<=\bauthorization\s*[:=]\s*["']?)(?:Bearer|Basic|Token)\s+(?:\\.|[^\s"',;\\])+/gi,
	/\b(?:Bearer\s+[^\s"',;]{12,}|(?:Basic|Token)\s+[A-Za-z0-9._~+/=-]{12,})/gi,
	/\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{16,}/g,
	/\b(?:sk|rk|pk)_(?:live|test)_[A-Za-z0-9]{16,}/g,
	/\bAIza[0-9A-Za-z_-]{35}\b/g,
	/\bya29\.[0-9A-Za-z_-]{20,}\b/g,
	/\bxox[abprso]-[A-Za-z0-9-]{10,}/g,
	/\bgh[psoru]_[A-Za-z0-9]{20,}/g,
	/\bgithub_pat_[A-Za-z0-9_]{22,}/g,
	/\bAKIA[0-9A-Z]{16}\b/g,
	/\b(?:bot)?\d{8,10}:[A-Za-z0-9_-]{35}\b/g,
	/\b[MNO][A-Za-z0-9_-]{22,}\.[A-Za-z0-9_-]{6}\.[A-Za-z0-9_-]{27,}\b/g,
	/\blin_(?:api|oauth)_[A-Za-z0-9]{20,}/g,
	/(?<=:\/\/)[^\s:/@]+:[^\s:/@]+(?=@)/g,
	new RegExp(`(["'])${QUOTED_KEY_PREFIX}(?:${SECRET_KEYS})\\1\\s*:\\s*(["'])(?!\\[(?:redacted|REDACTED)(?::[^\\]]*)?\\]\\2)(?:(?!\\2)[^\\\\\\r\\n]|\\\\.)*\\2`, "gi"),
	new RegExp(`\\\\(["'])${QUOTED_KEY_PREFIX}(?:${SECRET_KEYS})\\\\\\1\\s*:\\s*\\\\(["'])(?!\\[(?:redacted|REDACTED)(?::[^\\]]*)?\\]\\\\\\2)(?:(?!\\2)[^\\\\\\r\\n]|\\\\(?!\\2)[^\\\\\\r\\n]|\\\\\\\\(?:\\\\.|[^\\\\\\r\\n]))*\\\\\\2`, "gi"),
	new RegExp(`(?<!\\[(?:redacted|REDACTED):)\\b(?:[\\w.-]{0,128}[._-])?(?:${SECRET_KEYS})\\s*[:=]\\s*(?!\\[?(?:redacted|REDACTED)\\b)(?:"(?:[^"\\\\\\r\\n]|\\\\.)*"|'(?:[^'\\\\\\r\\n]|\\\\.)*'|\\S+)`, "gi")
];
function scrubSecretsInText(input) {
	let out = input;
	for (const pattern of SECRET_VALUE_PATTERNS) out = out.replace(pattern, "[REDACTED]");
	return out;
}
//#endregion
//#region ../../@n8n/utils/src/redaction/pii-patterns.ts
/** Compile a global regex once, adding the `g` flag if the source omits it. */
function globalRegex(source, flags = "") {
	return new RegExp(source, flags.includes("g") ? flags : `${flags}g`);
}
/**
* Secret/credential patterns, sourced from {@link SECRET_VALUE_PATTERNS} so
* there is a single place that defines what a credential looks like.
*/
var SECRET_PATTERNS = SECRET_VALUE_PATTERNS.map((re) => ({
	category: "secret",
	regex: globalRegex(re.source, re.flags)
}));
/** Luhn checksum — used to keep credit-card redaction from firing on any long digit run. */
function passesLuhn(candidate) {
	const digits = candidate.replace(/\D/g, "");
	if (digits.length < 13 || digits.length > 19) return false;
	let sum = 0;
	let double = false;
	for (let i = digits.length - 1; i >= 0; i--) {
		let digit = digits.charCodeAt(i) - 48;
		if (double) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		double = !double;
	}
	return sum % 10 === 0;
}
/**
* Confidence gate for phone candidates, encoding the **E.164** standard: a
* leading `+`, a non-zero country code, and 7–15 digits total. Runs on the
* digit/`+`-only normalized form (separators stripped).
*/
function passesE164(candidate) {
	return /^\+[1-9]\d{6,14}$/.test(candidate.replace(/[^\d+]/g, ""));
}
/**
* IBAN mod-97 checksum (ISO 13616): drop spaces, move the first 4 chars to the
* end, map letters A–Z → 10–35, and confirm the big-integer value mod 97 === 1.
*/
function passesIbanChecksum(candidate) {
	const compact = candidate.replace(/\s/g, "").toUpperCase();
	if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(compact)) return false;
	const rearranged = compact.slice(4) + compact.slice(0, 4);
	let remainder = 0;
	for (let i = 0; i < rearranged.length; i++) {
		const code = rearranged.charCodeAt(i);
		const value = code >= 65 ? code - 55 : code - 48;
		remainder = value > 9 ? (remainder * 100 + value) % 97 : (remainder * 10 + value) % 97;
	}
	return remainder === 1;
}
var BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function base58Decode(input) {
	const bytes = [];
	for (let i = 0; i < input.length; i++) {
		let carry = BASE58_ALPHABET.indexOf(input[i]);
		if (carry === -1) return void 0;
		for (let j = 0; j < bytes.length; j++) {
			carry += bytes[j] * 58;
			bytes[j] = carry & 255;
			carry >>= 8;
		}
		while (carry > 0) {
			bytes.push(carry & 255);
			carry >>= 8;
		}
	}
	for (let i = 0; i < input.length && input[i] === "1"; i++) bytes.push(0);
	return Uint8Array.from(bytes.reverse());
}
/**
* Ethereum (`0x`+40 hex) or Bitcoin bech32 (`bc1`/`tb1`) — both distinctive
* enough to accept on shape alone.
*/
function isDistinctiveWalletShape(match) {
	if (/^0x[0-9a-fA-F]{40}$/.test(match)) return true;
	return /^(?:bc1|tb1)[023456789acdefghjklmnpqrstuvwxyz]{11,71}$/.test(match);
}
/**
* Default legacy-address gate: a Base58Check payload decodes to exactly 25
* bytes (1 version + 20 hash + 4 checksum). Verifying the checksum itself needs
* SHA-256, which has no synchronous cross-platform primitive — Node callers
* inject the stricter check via `createPiiPatterns`. Erring toward redaction is
* the safe direction: an unvalidated Base58 blob of that length is far more
* likely to be a credential than prose.
*/
function isLegacyWalletShape(match) {
	return base58Decode(match)?.length === 25;
}
/** Ethereum, Bitcoin bech32, or a legacy Base58 address of plausible length. */
function isCryptoWalletShape(match) {
	return isDistinctiveWalletShape(match) || isLegacyWalletShape(match);
}
/**
* Conservative, high-confidence PII patterns. Phone detection is best-effort:
* only well-structured (E.164) formats are matched. New {@link PiiDetectionType}
* categories slot in here; a category may map to `undefined` to declare it
* before a pattern exists, in which case it is excluded from detection.
*
* `overrides` swaps individual entries — used by `@n8n/agents` to layer its
* Node-only Base58Check validator onto `crypto-wallet`.
*/
function createPiiPatterns(overrides = {}) {
	return {
		email: {
			category: "email",
			regex: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g
		},
		"credit-card": {
			category: "credit-card",
			regex: /\b\d(?:[ -]?\d){12,18}\b/g,
			validate: passesLuhn
		},
		"ssn-us": {
			category: "ssn-us",
			regex: /\b\d{3}-\d{2}-\d{4}\b/g
		},
		phone: {
			category: "phone",
			regex: /\+\d(?:[\s().-]*\d){6,14}\b/g,
			validate: passesE164
		},
		iban: {
			category: "iban",
			regex: /\b[A-Za-z]{2}\d{2}[A-Za-z0-9]{11,30}\b|\b[A-Z]{2}\d{2}(?: [A-Z0-9]{1,4}){2,8}\b/g,
			validate: passesIbanChecksum
		},
		"crypto-wallet": {
			category: "crypto-wallet",
			regex: /\b(?:0x[0-9a-fA-F]{40}|(?:bc1|tb1)[023456789acdefghjklmnpqrstuvwxyz]{11,71}|[13][1-9A-HJ-NP-Za-km-z]{25,34})\b/g,
			validate: isCryptoWalletShape
		},
		mac: {
			category: "mac",
			regex: /\b(?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}\b/g
		},
		ip: {
			category: "ip",
			regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b|\b(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{1,4}\b|\b(?:[A-Fa-f0-9]{1,4}:){1,7}:(?:[A-Fa-f0-9]{1,4})?\b/g,
			validate: isIpAddress
		},
		url: {
			category: "url",
			regex: /\bhttps?:\/\/[^\s<>"')\]}]+/g
		},
		...overrides
	};
}
/** IPv4 with octets ≤ 255, or a colon-delimited IPv6 (shape already constrained by the regex). */
function isIpAddress(match) {
	if (match.includes(":")) return true;
	const octets = match.split(".");
	return octets.length === 4 && octets.every((o) => /^\d{1,3}$/.test(o) && Number(o) <= 255);
}
/** Browser-safe default table. Node callers layer stricter validators on top. */
var PII_PATTERNS = createPiiPatterns();
/**
* PII categories that actually have a detection pattern today — the source of
* truth for what redaction can detect. Any {@link PiiDetectionType} mapped to
* `undefined` in the table (declared but not yet implemented) is excluded here.
*/
var SUPPORTED_PII_CATEGORIES = Object.keys(PII_PATTERNS).filter((type) => PII_PATTERNS[type] !== void 0);
/** Resolve the active pattern set for the given options. */
function resolvePatterns(opts, piiPatterns = PII_PATTERNS) {
	const patterns = [];
	if (opts.secrets) patterns.push(...SECRET_PATTERNS);
	for (const type of opts.detect) {
		const pattern = piiPatterns[type];
		if (pattern) patterns.push(pattern);
	}
	return patterns;
}
//#endregion
//#region ../../@n8n/utils/src/redaction/redact-text.ts
var DEFAULT_PLACEHOLDER = "[REDACTED]";
/**
* Redact secret/PII patterns from a complete string. Pure and idempotent —
* already-redacted placeholders are left untouched by the underlying patterns.
*/
function redactText(input, opts = {}) {
	const placeholder = opts.placeholder ?? "[REDACTED]";
	const patterns = resolvePatterns({
		secrets: opts.secrets ?? true,
		detect: opts.detect ?? []
	}, opts.piiPatterns);
	const ordered = [...patterns.filter((pattern) => pattern.category === "url"), ...patterns.filter((pattern) => pattern.category !== "url")];
	const matches = [];
	let text = input;
	for (const pattern of ordered) text = text.replace(pattern.regex, (match) => {
		if (pattern.validate && !pattern.validate(match)) return match;
		if (opts.preserveUrlStructure && pattern.category === "url") {
			const rebuilt = stripUrlSensitiveParts(match, placeholder);
			if (rebuilt !== match) matches.push({ category: pattern.category });
			return rebuilt;
		}
		matches.push({ category: pattern.category });
		return placeholder;
	});
	return {
		text,
		matches
	};
}
/** True for a path segment that looks like an embedded token — webhook-style
*  services (Slack/Discord/Telegram, …) carry their secret as a path segment.
*  Shape-based on purpose: per-service URL grammars don't scale across hundreds
*  of integrations. Conservative: words, readable slugs and digit-only ids are
*  kept. */
function isTokenLikeSegment(segment) {
	if (segment.length >= 16 && /[A-Za-z]/.test(segment) && /\d/.test(segment)) return true;
	return segment.length >= 24 && /^[A-Za-z]+$/.test(segment);
}
/** Keep origin + path (token-like segments redacted) + query names; redact
*  query values, drop userinfo and fragment. The replacement is URL-safe (no
*  `]`, which the url regex stops at) so re-scrubbing is stable. Unparseable ⇒
*  fully redacted. */
function stripUrlSensitiveParts(match, placeholder) {
	const urlPlaceholder = placeholder.replace(/[^A-Za-z0-9_.~-]/g, "") || "REDACTED";
	try {
		const url = new URL(match);
		const pathname = url.pathname.split("/").map((segment) => isTokenLikeSegment(segment) ? urlPlaceholder : segment).join("/");
		const names = [...url.searchParams.keys()];
		const query = names.length > 0 ? `?${names.map((name) => `${encodeURIComponent(name)}=${urlPlaceholder}`).join("&")}` : "";
		return `${url.origin}${pathname}${query}`;
	} catch {
		return placeholder;
	}
}
//#endregion
//#region ../../@n8n/telemetry/src/redaction.ts
/**
* Egress policy for free-text values leaving the instance as product telemetry
* (RudderStack/PostHog). Deliberately stricter than the user-facing output
* policy: secrets plus every PII category.
*
* Shared by the backend and the editor UI. Frontend events reach RudderStack
* *and* PostHog straight from the browser, so redaction has to happen at the
* call site — there is no server hop that sees both.
*
* `preserveUrlStructure` keeps traced URLs readable; their value-bearing parts
* are still redacted and secrets are matched first.
*/
var TELEMETRY_REDACTION_OPTIONS = {
	secrets: true,
	detect: SUPPORTED_PII_CATEGORIES,
	preserveUrlStructure: true
};
/**
* Length cap for a single free-text telemetry property. RudderStack silently
* drops any event whose serialized payload exceeds 32 KB, so an uncapped
* assistant message or workflow JSON loses the whole event; this keeps it well
* under.
*/
var MAX_TELEMETRY_TEXT_LENGTH = 8e3;
/**
* Identifier-shaped keys (`thread_id`, `workflow_id`, `source_hash`, …). Their
* values are internally generated, carry no user content, and are the join keys
* every dashboard groups by — scrubbing them is all downside.
*/
var IDENTIFIER_KEY_PATTERN = /(?:^|_)(?:id|ids|hash)$/;
/**
* Keys whose *value is itself* the credential. A pattern scan only catches
* secrets with a recognizable shape, so a plain `password: 'hunter2'` would
* sail through — these are replaced wholesale instead. Anchored at the end of
* the key so properties that merely describe a credential (`credential_type`,
* `credential_kind` on `Node credential assigned`) keep their analytics value.
*
* Deliberately excludes a bare `credential(s)` key: in this codebase such a
* property is a dimension (a list of credential *types*), and wiping it would
* be a silent analytics regression. A credential object nested under it is
* still walked key by key.
*/
var SECRET_KEY_PATTERN = /(?:^|_)(?:password|passwd|pwd|secret|token|api_?key|apikey|access_?token|refresh_?token|id_?token|session_?token|auth_?token|authorization|cookie|private_?key)$/i;
/**
* `clientSecret` → `client_secret`, `private-key` → `private_key`, so
* camelCase and kebab-case keys both hit the same (snake_case) pattern.
*/
function toSnakeCase(key) {
	return key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/-/g, "_");
}
/**
* Telemetry payloads are flat in practice. Rather than let an unexpectedly deep
* value through unscrubbed, replace it with a marker.
*/
var MAX_PROPERTY_DEPTH = 5;
var OVER_DEPTH_MARKER = "[REDACTED_DEPTH]";
/** Scrub secrets/PII from a free-text telemetry value and cap its length. */
function redactTelemetryText(value, opts = {}) {
	const maxLength = opts.maxLength ?? MAX_TELEMETRY_TEXT_LENGTH;
	const redacted = redactText(value, TELEMETRY_REDACTION_OPTIONS).text;
	return redacted.length > maxLength ? `${redacted.slice(0, maxLength)}...` : redacted;
}
function isNonNullObject(value) {
	return value !== null && typeof value === "object";
}
function redactPropertyValue(key, value, depth) {
	if (SECRET_KEY_PATTERN.test(toSnakeCase(key)) && (typeof value === "string" || isNonNullObject(value))) return DEFAULT_PLACEHOLDER;
	if (typeof value === "string") return IDENTIFIER_KEY_PATTERN.test(key) ? value : redactTelemetryText(value);
	if (Array.isArray(value)) {
		if (depth >= MAX_PROPERTY_DEPTH) return OVER_DEPTH_MARKER;
		return value.map((entry) => redactPropertyValue(key, entry, depth + 1));
	}
	if (isNonNullObject(value)) {
		if (depth >= MAX_PROPERTY_DEPTH) return OVER_DEPTH_MARKER;
		const redacted = {};
		for (const [nestedKey, nestedValue] of Object.entries(value)) redacted[nestedKey] = redactPropertyValue(nestedKey, nestedValue, depth + 1);
		return redacted;
	}
	return value;
}
/**
* Scrub every free-text value in a telemetry payload. Used at boundaries where
* the property bag is open-ended — a `trackTelemetry` channel handed to tools,
* or a frontend event whose payload carries user prose — and the values can't
* be audited call site by call site. Identifier keys and non-string values pass
* through untouched.
*/
function redactTelemetryProperties(properties) {
	const redacted = {};
	for (const [key, value] of Object.entries(properties)) redacted[key] = redactPropertyValue(key, value, 0);
	return redacted;
}
//#endregion
export { TELEMETRY_EVENT as a, POSTHOG_EVENTS_BLACKLIST as i, redactTelemetryText as n, scrubSecretsInText as r, redactTelemetryProperties as t };

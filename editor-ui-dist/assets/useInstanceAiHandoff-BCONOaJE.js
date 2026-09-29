import { c as useI18n } from "./src-DxZTq86C.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { jn as useProjectsStore } from "./workflows.store-D-csz4jD.js";
import { t as useRootStore } from "./useRootStore-DZGHRGYJ.js";
import { Ha as v4, Sn as instanceAiWorkflowAttachmentSchema, aa as jsonParse, nn as INSTANCE_AI_PREFILL_TYPE_FALLBACK, tn as INSTANCE_AI_PREFILL_TYPES, xn as instanceAiNodesAttachmentSchema, yn as instanceAiAgentAttachmentSchema } from "./src-idT_fqaK.js";
import { n as useToast } from "./useToast-Btn7qL6F.js";
import { n as useInstanceAiReady } from "./useInstanceAiAvailability-ChHHHSvH.js";
import { _ as INSTANCE_AI_THREAD_VIEW, f as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, o as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, y as INSTANCE_AI_VIEW } from "./constants-taHvt7D2.js";
import { n as useInstanceAiStore, p as instanceAiResponseNow } from "./instanceAi.store-Ba2espcn.js";
//#region src/features/ai/instanceAi/prefills.ts
var USER_TYPED_MESSAGE = { kind: "user_typed" };
var INSTANCE_AI_PREFILL_TYPE_SET = new Set(INSTANCE_AI_PREFILL_TYPES);
function isInstanceAiPrefillType(value) {
	return typeof value === "string" && INSTANCE_AI_PREFILL_TYPE_SET.has(value);
}
/**
* Accepts the read-path fallback as well, for values coming back out of storage.
* Surfaces declare `InstanceAiPrefillType` and so cannot reach for the fallback.
*/
function isInstanceAiPrefillTypeReported(value) {
	return isInstanceAiPrefillType(value) || value === "unknown";
}
/**
* Validates an authorship read back from storage. Everything that reaches
* telemetry is checked, not just the discriminant: an unrecognised type would
* widen the reported enum, and a non-string id or non-boolean flag would break
* the event's schema.
*/
function isMessageAuthorship(value) {
	if (typeof value !== "object" || value === null) return false;
	const candidate = value;
	if (candidate.kind === "user_typed") return true;
	if (candidate.kind !== "prefill") return false;
	if (!isInstanceAiPrefillTypeReported(candidate.prefillType)) return false;
	if (candidate.prefillId !== void 0 && typeof candidate.prefillId !== "string") return false;
	return candidate.promptModified === void 0 || typeof candidate.promptModified === "boolean";
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiHandoff.ts
/** The existing credential id, when known, so the agent can act on it directly. */
function existingCredentialNote(credential) {
	return credential.id ? ` The existing credential id is \`${credential.id}\`.` : "";
}
/**
* A recipe-created credential arrives pre-filled, so the visible question only
* asks where to find the values — this text renders as the user's own message;
* the paste-only steering travels invisibly in the handoff context.
*/
function templatedValuesQuestion(credential) {
	const titles = (credential.placeholderTitles ?? []).map((title) => `"${title}"`);
	return `Where do I find the ${titles.length > 1 ? `${titles.slice(0, -1).join(", ")} and ${titles[titles.length - 1]} values` : titles[0]} for my "${credential.displayName}" credential?`;
}
/**
* Opening question for a new-tab credential hand-off (credentials list, editor):
* the new thread carries no workflow, so it names the credential setup modal as
* the user's context. The node isn't carried into the new tab, so it isn't named.
*/
function buildInstanceAiCredentialQuestion(credential) {
	if (credential.placeholderTitles?.length) return templatedValuesQuestion(credential);
	return `How do I set up the credentials for ${credential.displayName}?${existingCredentialNote(credential)} I'm looking at the credential setup modal.`;
}
/**
* Opening question for an in-thread credential hand-off (the workflow artifact):
* the workflow is already the thread's subject, so it names the node and omits
* the modal context.
*/
function buildInstanceAiArtifactCredentialQuestion(credential) {
	const node = credential.nodeName ? ` It's for the "${credential.nodeName}" node.` : "";
	if (credential.placeholderTitles?.length) return `${templatedValuesQuestion(credential)}${node}`;
	const setupContext = credential.setupContext ? ` ${credential.setupContext}` : "";
	return `How do I set up the credentials for ${credential.displayName}?${node}${existingCredentialNote(credential)}${setupContext}`;
}
var pendingFirstMessageKey = (threadId) => `n8n-instance-ai-first-message:${threadId}`;
var pendingHandoffContextKey = (threadId) => `n8n-instance-ai-handoff-context:${threadId}`;
var pendingComposerDraftKey = (threadId) => `n8n-instance-ai-composer-draft:${threadId}`;
var pendingAgentAttachmentKey = (threadId) => `n8n-instance-ai-agent-attachment:${threadId}`;
var pendingWorkflowAttachmentKey = (threadId) => `n8n-instance-ai-workflow-attachment:${threadId}`;
var pendingRedirectLandingKey = (threadId) => `n8n-instance-ai-redirect-landing:${threadId}`;
function buildInstanceAiCredentialHandoffContext(credential) {
	return {
		source: "credential-modal",
		credential: {
			credentialType: credential.credentialType,
			displayName: credential.displayName,
			...credential.id ? { id: credential.id } : {},
			...credential.nodeName ? { nodeName: credential.nodeName } : {},
			...credential.nodeType ? { nodeType: credential.nodeType } : {},
			...credential.placeholderTitles?.length ? { placeholderTitles: credential.placeholderTitles } : {},
			...credential.docsUrl ? { docsUrl: credential.docsUrl } : {},
			...credential.documentationUrl ? { documentationUrl: credential.documentationUrl } : {},
			...credential.oauthRedirectUrl ? { oauthRedirectUrl: credential.oauthRedirectUrl } : {}
		}
	};
}
function buildInstanceAiAgentPreviewHandoffContext(params) {
	return {
		source: "agent-preview",
		agentId: params.agentId,
		threadId: params.threadId,
		...params.agentName ? { agentName: params.agentName } : {},
		...params.agentIcon ? { agentIcon: params.agentIcon } : {},
		...params.sessionTitle ? { sessionTitle: params.sessionTitle } : {},
		...params.executionId ? { executionId: params.executionId } : {}
	};
}
/**
* Stash the opening message for a thread the current context can't send itself
* (a new tab, a router guard). The destination thread view consumes it after
* hydration + SSE connect (see consumePendingFirstMessage) and sends it there.
*/
function stashPendingFirstMessage(threadId, payload) {
	localStorage.setItem(pendingFirstMessageKey(threadId), JSON.stringify(payload));
}
/**
* Consume the opening message a new-tab hand-off stashed here. A separate window
* can't send it (the destination loads before the BE persists it), so it does.
*/
function consumePendingFirstMessage(threadId) {
	const raw = localStorage.getItem(pendingFirstMessageKey(threadId));
	if (!raw) return null;
	localStorage.removeItem(pendingFirstMessageKey(threadId));
	try {
		const parsed = JSON.parse(raw);
		if (typeof parsed?.message !== "string") return null;
		return {
			...parsed,
			message: parsed.message,
			authorship: isMessageAuthorship(parsed.authorship) ? parsed.authorship : {
				kind: "prefill",
				prefillType: INSTANCE_AI_PREFILL_TYPE_FALLBACK
			}
		};
	} catch {
		return null;
	}
}
function stashPendingHandoffContext(threadId, context) {
	localStorage.setItem(pendingHandoffContextKey(threadId), JSON.stringify(context));
}
function getPendingHandoffContext(threadId) {
	const raw = localStorage.getItem(pendingHandoffContextKey(threadId));
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		clearPendingHandoffContext(threadId);
		return null;
	}
}
function clearPendingHandoffContext(threadId) {
	localStorage.removeItem(pendingHandoffContextKey(threadId));
}
function stashPendingComposerDraft(threadId, draft) {
	localStorage.setItem(pendingComposerDraftKey(threadId), JSON.stringify(draft));
}
/**
* A draft is text the user is about to send, so it is never dropped for being
* unreadable: anything that is not a recognisable envelope is treated as the
* bare string a previous deploy stashed. Both surfaces that stash a draft are
* hand-offs, so naming either would mis-attribute the other -- keep the text
* and report the fallback type.
*/
function getPendingComposerDraft(threadId) {
	const raw = localStorage.getItem(pendingComposerDraftKey(threadId));
	if (!raw) return null;
	const legacy = {
		text: raw,
		prefillType: INSTANCE_AI_PREFILL_TYPE_FALLBACK
	};
	try {
		const parsed = JSON.parse(raw);
		if (typeof parsed?.text !== "string") return legacy;
		return {
			text: parsed.text,
			prefillType: isInstanceAiPrefillTypeReported(parsed.prefillType) ? parsed.prefillType : INSTANCE_AI_PREFILL_TYPE_FALLBACK
		};
	} catch {
		return legacy;
	}
}
function clearPendingComposerDraft(threadId) {
	localStorage.removeItem(pendingComposerDraftKey(threadId));
}
function stashPendingAgentAttachment(threadId, attachment) {
	localStorage.setItem(pendingAgentAttachmentKey(threadId), JSON.stringify(attachment));
}
function getPendingAgentAttachment(threadId) {
	const raw = localStorage.getItem(pendingAgentAttachmentKey(threadId));
	if (!raw) return null;
	try {
		const parsed = instanceAiAgentAttachmentSchema.safeParse(JSON.parse(raw));
		return parsed.success ? parsed.data : null;
	} catch {
		return null;
	}
}
function clearPendingAgentAttachment(threadId) {
	localStorage.removeItem(pendingAgentAttachmentKey(threadId));
}
/**
* Stash a workflow the editor handed off without sending an opening turn. The
* destination view restores it so the canvas opens and the first real prompt
* carries the attachment.
*/
function stashPendingWorkflowAttachment(threadId, attachment) {
	localStorage.setItem(pendingWorkflowAttachmentKey(threadId), JSON.stringify(attachment));
}
function getPendingWorkflowAttachment(threadId) {
	const raw = localStorage.getItem(pendingWorkflowAttachmentKey(threadId));
	if (!raw) return null;
	try {
		const parsed = instanceAiWorkflowAttachmentSchema.safeParse(JSON.parse(raw));
		return parsed.success ? parsed.data : null;
	} catch {
		return null;
	}
}
function clearPendingWorkflowAttachment(threadId) {
	localStorage.removeItem(pendingWorkflowAttachmentKey(threadId));
}
/**
* One-shot marker for a workflow-list auto redirect. The destination view
* consumes it after hydration so the experiment can collapse the sidebar and
* show its callout once. Thread metadata source persists forever, so it cannot
* be the landing signal.
*/
function stashPendingRedirectLanding(threadId) {
	localStorage.setItem(pendingRedirectLandingKey(threadId), "1");
}
function consumePendingRedirectLanding(threadId) {
	if (!localStorage.getItem(pendingRedirectLandingKey(threadId))) return false;
	localStorage.removeItem(pendingRedirectLandingKey(threadId));
	return true;
}
function clearPendingRedirectLanding(threadId) {
	localStorage.removeItem(pendingRedirectLandingKey(threadId));
}
/** Drop a stashed opening message without sending it (e.g. its thread is gone). */
function clearPendingFirstMessage(threadId) {
	localStorage.removeItem(pendingFirstMessageKey(threadId));
}
var pendingDraftAttachmentKey = (threadId) => `n8n-instance-ai-draft-attachment:${threadId}`;
function stashPendingDraftAttachment(threadId, sets, workflowId) {
	const attachment = {
		type: "nodes",
		workflowId,
		sets
	};
	localStorage.setItem(pendingDraftAttachmentKey(threadId), JSON.stringify(attachment));
}
function clearPendingDraftAttachment(threadId) {
	localStorage.removeItem(pendingDraftAttachmentKey(threadId));
}
function consumePendingDraftAttachment(threadId) {
	const raw = localStorage.getItem(pendingDraftAttachmentKey(threadId));
	if (!raw) return null;
	localStorage.removeItem(pendingDraftAttachmentKey(threadId));
	const parsed = instanceAiNodesAttachmentSchema.safeParse(jsonParse(raw, { fallbackValue: void 0 }));
	return parsed.success ? parsed.data : null;
}
function clearPendingThreadHandoff(threadId) {
	clearPendingHandoffContext(threadId);
	clearPendingComposerDraft(threadId);
	clearPendingAgentAttachment(threadId);
	clearPendingWorkflowAttachment(threadId);
	clearPendingRedirectLanding(threadId);
	clearPendingFirstMessage(threadId);
	clearPendingDraftAttachment(threadId);
}
/** Resolve the personal project a launched thread binds to, loading it on first use. */
async function ensurePersonalProjectId() {
	const projectsStore = useProjectsStore();
	if (!projectsStore.personalProject) try {
		await projectsStore.getPersonalProject();
	} catch {
		return null;
	}
	return projectsStore.personalProject?.id ?? null;
}
/**
* Provision a launched thread the destination view will send for: mint the id,
* persist it, and stash the opening message. Shared by the deep-link router
* guard and the new-tab hand-off, which both hand off delivery to the view.
* Returns the thread id, or null if persistence failed.
*/
async function provisionLaunchedThread(projectId, payload, launch) {
	const pendingMessage = {
		...payload,
		responseStartedAtEpochMs: payload.responseStartedAtEpochMs ?? instanceAiResponseNow()
	};
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingFirstMessage(threadId, pendingMessage);
	return threadId;
}
/**
* Provision a thread bound to a workflow without sending an opening turn. The
* destination view restores the attachment so the canvas opens and the first
* real prompt carries it.
*/
async function provisionWorkflowThread(projectId, attachment, launch) {
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingWorkflowAttachment(threadId, attachment);
	if (launch.source === "workflow_list_auto") stashPendingRedirectLanding(threadId);
	return threadId;
}
/**
* Mint a thread bound to a subject: the id, the target metadata (a pending
* marker or a bound target), and — for the agent variant — the stashed
* attachment the destination view resolves it with. `extraMetadata` merges
* into the same write so binding a subject and recording where it opened from
* (e.g. the agent-preview view) costs one round trip, not two.
*
* Shared by `InstanceAiChatPanel` (embed/), which used to run this in two
* separate steps.
*/
async function provisionSubjectThread(subject, launch, extraMetadata) {
	const store = useInstanceAiStore();
	const threadId = v4();
	await store.syncThread(threadId, subject.projectId, launch);
	const targetMetadata = subject.type === "agent" ? subject.pending ? { [INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: {
		projectId: subject.projectId,
		agentId: subject.id
	} } : { [INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
		agentId: subject.id,
		projectId: subject.projectId,
		...subject.name ? { name: subject.name } : {}
	} } : {};
	try {
		await store.updateThreadMetadata(threadId, {
			...targetMetadata,
			...extraMetadata
		});
	} catch (error) {
		await store.deleteThread(threadId, { silent: true });
		throw error;
	}
	if (subject.type === "agent") stashPendingAgentAttachment(threadId, subject);
	return threadId;
}
async function provisionContextOnlyThread(projectId, context, launch, initialDraft) {
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingHandoffContext(threadId, context);
	if (initialDraft) stashPendingComposerDraft(threadId, initialDraft);
	return threadId;
}
var handoffInFlight = false;
/**
* Create a thread, optionally seed its runtime (`prepare`), send the opening turn,
* and navigate to it. Shared by the capability adapters and the credentials list.
*/
function useInstanceAiHandoff() {
	const instanceAiStore = useInstanceAiStore();
	const rootStore = useRootStore();
	const router = useRouter();
	const toast = useToast();
	const i18n = useI18n();
	const instanceAiReady = useInstanceAiReady();
	/**
	* Setup isn't finished yet. An admin reaches these entry points before it is
	* (they need the way in to complete it), so opening a thread here would send
	* a turn no model can answer. Take them to the assistant instead, where
	* onboarding takes over. Every hand-off funnels through here, so a new entry
	* point inherits the gate instead of having to remember it.
	*/
	async function routeToSetup() {
		await router.push({ name: INSTANCE_AI_VIEW });
	}
	function showOpenFailed() {
		toast.showError(new Error(i18n.baseText("instanceAi.handoff.openFailed.message")), i18n.baseText("instanceAi.handoff.openFailed.title"));
	}
	async function openThreadWithContext(projectId, context, launch, options) {
		if (!instanceAiReady.value) {
			await routeToSetup();
			return false;
		}
		if (handoffInFlight) return false;
		handoffInFlight = true;
		try {
			const tab = options?.newTab ? window.open("", "_blank") : null;
			const threadId = await provisionContextOnlyThread(projectId, context, launch, options?.initialDraft);
			if (!threadId) {
				tab?.close();
				showOpenFailed();
				return false;
			}
			const route = {
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			};
			if (tab) tab.location.href = router.resolve(route).href;
			else await router.push(route);
			return true;
		} finally {
			handoffInFlight = false;
		}
	}
	async function startThread(projectId, message, authorship, launch, attachments, prepare, options) {
		if (!instanceAiReady.value) {
			await routeToSetup();
			return;
		}
		if (handoffInFlight) return;
		handoffInFlight = true;
		const responseStartedAtEpochMs = instanceAiResponseNow();
		try {
			if (options?.newTab) {
				const tab = window.open("", "_blank");
				const threadId = await provisionLaunchedThread(projectId, {
					message,
					attachments,
					context: options?.context,
					authorship,
					responseStartedAtEpochMs
				}, launch);
				if (!threadId) {
					tab?.close();
					showOpenFailed();
					return;
				}
				const route = {
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				};
				if (tab) tab.location.href = router.resolve(route).href;
				else await router.push(route);
				return;
			}
			const threadId = v4();
			try {
				await instanceAiStore.syncThread(threadId, projectId, launch);
			} catch {
				showOpenFailed();
				return;
			}
			const thread = instanceAiStore.getOrCreateRuntime(threadId, projectId);
			prepare?.(threadId);
			thread.sendMessage(message, {
				authorship,
				attachments,
				pushRef: rootStore.pushRef,
				handoffContext: options?.context,
				responseStartedAtEpochMs
			});
			await router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		} finally {
			handoffInFlight = false;
		}
	}
	/**
	* Open a thread bound to a workflow without sending an opening turn. The
	* canvas opens from the pending attachment; the first real prompt carries it.
	*/
	async function openWorkflowThread(projectId, attachment, launch, prepare) {
		if (!instanceAiReady.value) {
			await routeToSetup();
			return false;
		}
		if (handoffInFlight) return false;
		handoffInFlight = true;
		try {
			const threadId = await provisionWorkflowThread(projectId, attachment, launch);
			if (!threadId) {
				showOpenFailed();
				return false;
			}
			prepare?.(threadId);
			try {
				if (await router.push({
					name: "InstanceAiThread",
					params: { threadId }
				})) throw new Error("Navigation failed");
			} catch {
				clearPendingThreadHandoff(threadId);
				await instanceAiStore.deleteThread(threadId);
				showOpenFailed();
				return false;
			}
			return true;
		} finally {
			handoffInFlight = false;
		}
	}
	async function openThreadForDraft(workflow) {
		if (handoffInFlight) return null;
		handoffInFlight = true;
		try {
			const projectId = await ensurePersonalProjectId();
			if (!projectId) return null;
			const threadId = v4();
			const launch = {
				source: "canvas_action_button",
				origin: "internal"
			};
			try {
				await instanceAiStore.syncThread(threadId, projectId, launch);
			} catch {
				toast.showError(new Error(i18n.baseText("instanceAi.handoff.openFailed.message")), i18n.baseText("instanceAi.handoff.openFailed.title"));
				return null;
			}
			if (workflow) {
				stashPendingWorkflowAttachment(threadId, {
					type: "workflow",
					id: workflow.id,
					name: workflow.name || void 0
				});
				if (workflow.snapshot) instanceAiStore.getOrCreateRuntime(threadId, projectId).setPendingHandoff({
					workflowId: workflow.id,
					workflow: workflow.snapshot
				});
			}
			return threadId;
		} finally {
			handoffInFlight = false;
		}
	}
	return {
		startThread,
		openWorkflowThread,
		openThreadWithContext,
		openThreadForDraft
	};
}
//#endregion
export { stashPendingFirstMessage as C, USER_TYPED_MESSAGE as E, stashPendingDraftAttachment as S, useInstanceAiHandoff as T, getPendingWorkflowAttachment as _, clearPendingAgentAttachment as a, provisionWorkflowThread as b, clearPendingThreadHandoff as c, consumePendingFirstMessage as d, consumePendingRedirectLanding as f, getPendingHandoffContext as g, getPendingComposerDraft as h, buildInstanceAiCredentialQuestion as i, clearPendingWorkflowAttachment as l, getPendingAgentAttachment as m, buildInstanceAiArtifactCredentialQuestion as n, clearPendingComposerDraft as o, ensurePersonalProjectId as p, buildInstanceAiCredentialHandoffContext as r, clearPendingHandoffContext as s, buildInstanceAiAgentPreviewHandoffContext as t, consumePendingDraftAttachment as u, provisionLaunchedThread as v, stashPendingHandoffContext as w, stashPendingComposerDraft as x, provisionSubjectThread as y };

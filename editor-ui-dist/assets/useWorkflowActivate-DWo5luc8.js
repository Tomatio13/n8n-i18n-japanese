import { Dt as getCurrentScope, It as ref, Nt as onScopeDispose } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-cuvvA3pI.js";
import { T as createWorkflowDocumentId, j as useWorkflowDocumentStore, t as useWorkflowsStore } from "./workflows.store-fOIpEAUT.js";
import { t as useSettingsStore } from "./settings.store-BY2qTSjy.js";
import { t as useTelemetry } from "./useTelemetry-30Afudd_.js";
import { t as useStorage } from "./useStorage-CsEAufjz.js";
import { n as useToast } from "./useToast-Cvy_I-4R.js";
import { _i as WORKFLOW_ACTIVE_MODAL_KEY, gi as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY } from "./constants-CyB1HP9v.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-Don1G7_q.js";
import { n as useUIStore } from "./ui.store-DfWIxg_D.js";
import { t as useExternalHooks } from "./useExternalHooks-6KUChhnA.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DmawTASZ.js";
import { t as useCollaborationStore } from "./collaboration.store-B3JF3m7P.js";
import { t as useActivationError } from "./useActivationError-DCXYk3Od.js";
//#region src/app/composables/useWorkflowActivate.ts
function useWorkflowActivate() {
	const updatingWorkflowActivation = ref(false);
	const activationErrorNodeId = ref();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const pushConnectionStore = usePushConnectionStore();
	const pendingListeners = /* @__PURE__ */ new Set();
	if (getCurrentScope()) onScopeDispose(() => {
		for (const removeListener of pendingListeners) removeListener();
		pendingListeners.clear();
	});
	const uiStore = useUIStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const collaborationStore = useCollaborationStore();
	const { errorMessage: activationErrorMessage } = useActivationError(activationErrorNodeId);
	const parseWebhookConflictError = (error) => {
		try {
			const { errorCode, hint } = error;
			if (errorCode === 409) {
				const parsedHint = JSON.parse(hint ?? "");
				if (Array.isArray(parsedHint) && parsedHint.length > 0 && Object.hasOwn(parsedHint[0], "trigger")) return parsedHint;
			}
			return null;
		} catch {
			return null;
		}
	};
	const handleWebhookConflictError = async (error) => {
		const { trigger, conflict } = parseWebhookConflictError(error)?.pop() || {};
		let workflowName = conflict?.workflowId;
		try {
			if (conflict?.workflowId) workflowName = (await workflowsListStore.fetchWorkflow(conflict?.workflowId)).name;
		} catch {}
		uiStore.openModalWithData({
			name: WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY,
			data: {
				triggerType: trigger?.type,
				workflowName,
				...conflict
			}
		});
	};
	const isWebhookConflictError = (error) => {
		return parseWebhookConflictError(error) !== null;
	};
	/**
	* Race the `/activate` request against the push message that reports the new
	* active version. Either one confirms the publish: the response can arrive late
	* or never, and the push carries no payload. A retry can publish the same
	* version without changing the document's IDs, so match the raw message.
	*/
	const publishWithConfirmation = async (workflowId, versionId, payload) => {
		let removeListener;
		try {
			const confirmedByPush = new Promise((resolve) => {
				removeListener = pushConnectionStore.addEventListener((message) => {
					if ((message.type === "workflowActivated" || message.type === "workflowPartiallyActivated") && message.data.workflowId === workflowId && message.data.activeVersionId === versionId) resolve({ source: "push" });
				});
				pendingListeners.add(removeListener);
			});
			const confirmedByResponse = workflowsStore.publishWorkflow(workflowId, {
				versionId,
				...payload
			}).then((workflow) => ({
				source: "response",
				workflow
			}));
			return await Promise.race([confirmedByPush, confirmedByResponse]);
		} finally {
			if (removeListener) {
				removeListener();
				pendingListeners.delete(removeListener);
			}
		}
	};
	/**
	* Return the published workflow to apply. The push carries no workflow payload
	* and callers read the list cache as soon as `publishWorkflow` resolves, so
	* refresh the cache on that path. Best effort: the publish is already confirmed.
	*/
	const resolvePublishedWorkflow = async (confirmation, workflowId) => {
		if (confirmation.source === "push") return await workflowsListStore.fetchWorkflow(workflowId).catch(() => null);
		if (!confirmation.workflow.activeVersion || !confirmation.workflow.checksum) throw new Error("Failed to publish workflow");
		return confirmation.workflow;
	};
	const applyPublishedWorkflowState = (workflowId, workflow, confirmedBy) => {
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		if (!workflow.activeVersion) return;
		workflowsStore.setWorkflowActive(workflowId, workflow.activeVersion, true);
		workflowDocumentStore.setActiveState({
			activeVersionId: workflow.activeVersion.versionId,
			activeVersion: workflow.activeVersion
		});
		if (confirmedBy === "response" && useSettingsStore().isWorkflowPublicationServiceEnabled) workflowDocumentStore.setPublicationStatus({ status: "publishing" });
		if (workflowDocumentStore.hydrated) {
			workflowDocumentStore.setVersionData({
				versionId: workflow.versionId,
				name: workflowDocumentStore.versionData?.name ?? null,
				description: workflowDocumentStore.versionData?.description ?? null
			});
			if (workflow.checksum) workflowDocumentStore.setChecksum(workflow.checksum);
		}
	};
	const publishWorkflow = async (workflowId, versionId, options) => {
		updatingWorkflowActivation.value = true;
		collaborationStore.requestWriteAccess();
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		const cachedWorkflow = workflowsListStore.getWorkflowById(workflowId);
		const hadPublishedVersion = cachedWorkflow ? !!cachedWorkflow.activeVersion : workflowDocumentStore.hydrated && workflowDocumentStore.active;
		if (!hadPublishedVersion) {
			const telemetryPayload = {
				workflow_id: workflowId,
				is_active: true,
				previous_status: false,
				ndv_input: false
			};
			useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
		}
		try {
			const expectedChecksum = workflowDocumentStore.hydrated ? workflowDocumentStore.checksum : void 0;
			const confirmation = await publishWithConfirmation(workflowId, versionId, {
				name: options?.name,
				description: options?.description,
				expectedChecksum
			});
			const publishedWorkflow = await resolvePublishedWorkflow(confirmation, workflowId);
			if (publishedWorkflow) applyPublishedWorkflowState(workflowId, publishedWorkflow, confirmation.source);
			useExternalHooks().run("workflow.published", {
				workflowId,
				versionId: publishedWorkflow?.activeVersion?.versionId ?? versionId
			});
			if (!hadPublishedVersion && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);
			return { success: true };
		} catch (error) {
			if (isWebhookConflictError(error)) {
				await handleWebhookConflictError(error);
				return {
					success: false,
					errorHandled: true
				};
			} else {
				activationErrorNodeId.value = error.meta?.nodeId;
				const title = i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "published" } });
				toast.showError(error, title, {
					message: activationErrorMessage.value,
					description: error.meta?.description
				});
				if (!error.meta?.validationError) {
					workflowsStore.setWorkflowInactive(workflowId);
					workflowDocumentStore.setActiveState({
						activeVersionId: null,
						activeVersion: null
					});
				}
			}
			return {
				success: false,
				errorHandled: true
			};
		} finally {
			updatingWorkflowActivation.value = false;
		}
	};
	const unpublishWorkflowFromHistory = async (workflowId) => {
		updatingWorkflowActivation.value = true;
		collaborationStore.requestWriteAccess();
		const telemetryPayload = {
			workflow_id: workflowId,
			is_active: false,
			previous_status: !!workflowsListStore.getWorkflowById(workflowId)?.activeVersion,
			ndv_input: false
		};
		telemetry.track("User set workflow active status", telemetryPayload);
		useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		try {
			const expectedChecksum = workflowDocumentStore.hydrated ? workflowDocumentStore.checksum : void 0;
			await workflowsStore.deactivateWorkflow(workflowId, expectedChecksum);
			workflowDocumentStore.setActiveState({
				activeVersionId: null,
				activeVersion: null
			});
			useExternalHooks().run("workflow.unpublished", { workflowId });
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "deactivated" } }) + ":");
			return false;
		} finally {
			updatingWorkflowActivation.value = false;
		}
	};
	return {
		updatingWorkflowActivation,
		publishWorkflow,
		unpublishWorkflowFromHistory
	};
}
//#endregion
export { useWorkflowActivate as t };

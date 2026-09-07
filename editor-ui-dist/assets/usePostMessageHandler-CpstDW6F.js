const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pushConnection.store-f6zH_WHY.js","assets/pushConnection.store-C2Ze1L8_.js","assets/src-0DA8_Bs0.js","assets/chunk-CC9Q-vWm.js","assets/preload-helper-CUiGbY1o.js","assets/lib-DCPrRYqD.js","assets/merge-ClcnqcHc.js","assets/isObject-kdW5bPtk.js","assets/isSymbol-5IuA5_89.js","assets/expression-runtime-stub-NIkB-avn.js","assets/__vite-browser-external-DJAlrGU7.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/useRootStore-BSAx_ps9.js","assets/lib-9WedzCRO.js","assets/assert-x03v9egj.js","assets/settings.store-Dm_XGogh.js","assets/src-DkIl6lih.js","assets/useDebounce-0DvhDGwu.js","assets/durations-Di5kgmlt.js"])))=>i.map(i=>d[i]);
import { It as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-DkIl6lih.js";
import { t as __vitePreload } from "./preload-helper-CUiGbY1o.js";
import { c as useRoute } from "./vue-router-BayijiqM.js";
import { Jr as getNodesWithNormalizedPosition, T as createWorkflowDocumentId, k as useWorkflowDocumentStore, n as buildExecutionResponseFromSchema, t as useWorkflowsStore, vn as useProjectsStore, wt as useCredentialsStore, y as useWorkflowExecutionStateStore } from "./workflows.store-C6Ww9gO9.js";
import { t as useRootStore } from "./useRootStore-BSAx_ps9.js";
import { t as useTelemetry } from "./useTelemetry-bfo0xDrQ.js";
import { t as VIEWS } from "./views-C1c85B58.js";
import { n as useToast } from "./useToast-CCfCGV-t.js";
import "./constants-DyyK5g3e.js";
import { _ as useCanvasStore, t as useNodeHelpers } from "./useNodeHelpers-DTt236lk.js";
import { t as useExternalHooks } from "./useExternalHooks-Bk5eRZ54.js";
import { t as useExecutionsStore } from "./executions.store-CKsELMPo.js";
import { t as useCanvasOperations } from "./useCanvasOperations-DgZuI45O.js";
import { t as canvasEventBus } from "./canvas.eventBus-B0tHfrLP.js";
import { t as useNotificationsStore } from "./notifications.store-yVj7QYfD.js";
import { t as isPostMessageOriginAllowed } from "./postMessageUtils-57Pu_I8f.js";
//#region src/app/composables/useWorkflowImport.ts
function useWorkflowImport(currentWorkflowDocumentStore) {
	const route = useRoute();
	const { resetWorkspace, initializeWorkspace, fitView } = useCanvasOperations();
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	async function importWorkflowExact({ workflow: workflowData }) {
		if (!workflowData.nodes || !workflowData.connections) throw new Error("Invalid workflow object");
		resetWorkspace();
		const { workflowDocumentStore } = await initializeWorkspace({
			...workflowData,
			nodes: getNodesWithNormalizedPosition(workflowData.nodes)
		});
		currentWorkflowDocumentStore.value = workflowDocumentStore;
		if (isDemoRoute.value) {
			workflowDocumentStore.setConnections({});
			canvasEventBus.emit("setConnections:onNodesInit", workflowData.connections);
			canvasEventBus.emit("fitView:onNodesInit");
		} else fitView();
	}
	return { importWorkflowExact };
}
//#endregion
//#region src/app/composables/usePostMessageHandler.ts
var canOpenNDV = ref(true);
function usePostMessageControls() {
	return { canOpenNDV };
}
function canOpenNDVFromRouteQuery(queryValue) {
	return queryValue !== "false";
}
function usePostMessageHandler({ currentWorkflowDocumentStore }) {
	const i18n = useI18n();
	const toast = useToast();
	const canvasStore = useCanvasStore();
	const notificationsStore = useNotificationsStore();
	const projectsStore = useProjectsStore();
	const executionsStore = useExecutionsStore();
	const credentialsStore = useCredentialsStore();
	const rootStore = useRootStore();
	const externalHooks = useExternalHooks();
	const telemetry = useTelemetry();
	const nodeHelpers = useNodeHelpers();
	const route = useRoute();
	const workflowsStore = useWorkflowsStore();
	const { resetWorkspace, openExecution, fitView } = useCanvasOperations();
	const { importWorkflowExact } = useWorkflowImport(currentWorkflowDocumentStore);
	function emitPostMessageReady() {
		if (window.parent) window.parent.postMessage(JSON.stringify({
			command: "n8nReady",
			version: rootStore.versionCli,
			pushRef: rootStore.pushRef
		}), "*");
	}
	function reportErrorToParent(message) {
		if (window.top) window.top.postMessage(JSON.stringify({
			command: "error",
			message
		}), "*");
	}
	async function handleOpenWorkflow(json) {
		canOpenNDV.value = canOpenNDVFromRouteQuery(route.query.canOpenNDV) && json.canOpenNDV !== false;
		notificationsStore.setNotificationsSuppressed(json.suppressNotifications === true, { allowErrors: json.allowErrorNotifications === true });
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		if (route.name === VIEWS.DEMO && route.query.canExecute !== "true") json.workflow.id = "demo";
		await importWorkflowExact(json);
		if (window !== window.parent && route.query.canExecute !== "true") {
			const workflowDocumentStore = currentWorkflowDocumentStore.value;
			if (workflowDocumentStore) useWorkflowExecutionStateStore(workflowDocumentStore.documentId).setActiveExecutionId(null);
		}
		if (json.tidyUp === true) canvasEventBus.emit("tidyUp", { source: "import-workflow-data" });
	}
	async function handleOpenExecution(json) {
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		nodeHelpers.isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
		canvasStore.startLoading();
		resetWorkspace();
		const data = await openExecution(json.executionId, json.nodeId);
		if (!data) return;
		await credentialsStore.fetchUsableCredentials({ workflowId: data.workflowData.id });
		const wfId = workflowsStore.workflowId;
		if (wfId) currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(wfId));
		nextTick(() => {
			nodeHelpers.updateNodesInputIssues();
			nodeHelpers.updateNodesCredentialsIssues();
		});
		canvasStore.stopLoading();
		fitView();
		canvasEventBus.emit("open:execution", data);
		externalHooks.run("execution.open", {
			workflowId: data.workflowData.id,
			workflowName: data.workflowData.name,
			executionId: json.executionId
		});
		telemetry.track("User opened read-only execution", {
			workflow_id: data.workflowData.id,
			execution_mode: data.mode,
			execution_finished: data.finished
		});
	}
	async function handleOpenExecutionPreview(json) {
		canvasStore.startLoading();
		const workflow = json.workflow;
		if (!workflow?.nodes || !workflow?.connections) {
			canvasStore.stopLoading();
			throw new Error("Invalid workflow object");
		}
		if (window !== window.parent) json.workflow.id = "demo";
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		const data = buildExecutionResponseFromSchema({
			workflow,
			nodeExecutionSchema: json.nodeExecutionSchema,
			executionStatus: json.executionStatus,
			executionError: json.executionError,
			lastNodeExecuted: json.lastNodeExecuted
		});
		await importWorkflowExact(json);
		const workflowDocumentStore = currentWorkflowDocumentStore.value;
		if (workflowDocumentStore) {
			useWorkflowExecutionStateStore(workflowDocumentStore.documentId).setWorkflowExecutionData(data);
			workflowDocumentStore.setPinData({});
		}
		canvasStore.stopLoading();
		canvasEventBus.emit("open:execution", data);
	}
	async function onPostMessageReceived(messageEvent) {
		if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"") || !isPostMessageOriginAllowed(messageEvent.origin)) return;
		try {
			const json = JSON.parse(messageEvent.data);
			if (json && json.command === "openWorkflow") try {
				await handleOpenWorkflow(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("openWorkflow.workflowImportError"));
				toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
			}
			else if (json && json.command === "openExecution") try {
				await handleOpenExecution(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json && json.command === "openExecutionPreview") try {
				await handleOpenExecutionPreview(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json?.command === "resetWorkflow") resetWorkspace();
			else if (json?.command === "setActiveExecution") executionsStore.activeExecution = await executionsStore.fetchExecution(json.executionId);
			else if (json?.command === "fitView") canvasEventBus.emit("fitView");
			else if (json?.command === "executionEvent") {
				const { usePushConnectionStore } = await __vitePreload(async () => {
					const { usePushConnectionStore } = await import("./pushConnection.store-f6zH_WHY.js");
					return { usePushConnectionStore };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));
				const pushStore = usePushConnectionStore();
				for (const handler of pushStore.onMessageReceivedHandlers) handler(json.event);
			}
		} catch {}
	}
	function setup() {
		canOpenNDV.value = canOpenNDVFromRouteQuery(route.query.canOpenNDV);
		window.addEventListener("message", onPostMessageReceived);
		emitPostMessageReady();
	}
	function cleanup() {
		window.removeEventListener("message", onPostMessageReceived);
		canOpenNDV.value = true;
	}
	return {
		setup,
		cleanup
	};
}
//#endregion
export { usePostMessageHandler as n, usePostMessageControls as t };

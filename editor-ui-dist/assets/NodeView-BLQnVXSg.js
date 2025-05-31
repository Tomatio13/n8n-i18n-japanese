const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreation-CP6lkm4S.js","assets/index-bHaUIFge.js","assets/index-Ed_z14lJ.css","assets/NodeCreation-RKvezEeg.css","assets/NodeDetailsView-rLFBUlXs.js","assets/import-curl-DuPoiMf1.js","assets/RunData-kQBInJus.js","assets/FileSaver.min-DkVvR-w5.js","assets/useExecutionHelpers-DPPWfJgc.js","assets/dateFormatter-B1WDHRuT.js","assets/RunData-CE5FsU6k.css","assets/RunDataAi-DqJQe2qw.js","assets/RunDataParsedAiContent-CLSGMQDd.js","assets/RunDataParsedAiContent-9EEUzCKp.css","assets/RunDataAi-D9VLFXIf.css","assets/useWorkflowActivate-B4KEs2b0.js","assets/NodeDetailsView-DpO8nTmN.css","assets/SetupWorkflowCredentialsButton-BYzZejY1.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, h as resolveComponent, e as createBlock, g as openBlock, C as createEventBus, Y as useCssModule, bI as toRef, q as computed, r as ref, bR as refThrottled, i as createElementBlock, k as createBaseVNode, x as renderSlot, f as createCommentVNode, b8 as mergeProps, m as unref, n as normalizeClass, _ as _export_sfc, c as useI18n, bL as KeyboardShortcutTooltip, w as withCtx, j as createVNode, b3 as withModifiers, bS as reactive, o as onMounted, bc as onUnmounted, l as createTextVNode, t as toDisplayString, b as useRouter, R as useRoute, a as useToast, a4 as useDocumentTitle, a5 as useWorkflowHelpers, bA as useNodeHelpers, bz as useNodeTypesStore, H as useUIStore, Q as useWorkflowsStore, a0 as useSourceControlStore, bT as useNodeCreatorStore, p as useSettingsStore, bU as useCredentialsStore, bV as useEnvironmentsStore, bW as useExternalSecretsStore, Z as useRootStore, at as useExecutionsStore, $ as useCanvasStore, a3 as useNpsSurveyStore, bX as useHistoryStore, a1 as useProjectsStore, u as useUsersStore, E as useTagsStore, P as usePushConnectionStore, as as useNDVStore, aN as useTemplatesStore, bY as useBuilderStore, a2 as useFoldersStore, bZ as useAgentRequestStore, aY as useLogsStore, bB as useRunWorkflow, b_ as useCanvasOperations, bg as useClipboard, S as PLACEHOLDER_EMPTY_WORKFLOW_ID, b$ as NEW_WORKFLOW_ID, V as VIEWS, c0 as START_NODE_TYPE, c1 as getNodeViewTab, s as MAIN_HEADER_TABS, c2 as VALID_WORKFLOW_IMPORT_URL_REGEX, ai as useMessage, aj as MODAL_CONFIRM, c3 as jsonParse, a7 as getResourcePermissions, c4 as CHAT_TRIGGER_NODE_TYPE, c5 as MANUAL_CHAT_TRIGGER_NODE_TYPE, X as watch, c6 as onBeforeRouteLeave, az as onBeforeMount, ak as WORKFLOW_SETTINGS_MODAL_KEY, aP as useExternalHooks, c7 as onActivated, c8 as onDeactivated, y as onBeforeUnmount, c9 as Suspense, ca as defineAsyncComponent, F as Fragment, cb as N8nCallout, ao as __vitePreload, aa as EnterpriseEditionFeature, z as nextTick, ag as useTelemetry, cc as tryToParseNumber, ah as nodeViewEventBus, by as NodeConnectionTypes, cd as createCanvasConnectionHandleString, ce as isValidNodeConnectionType, cf as CanvasConnectionMode, aF as sourceControlEventBus, cg as getNodesWithNormalizedPosition, aq as h, ch as NODE_CREATOR_OPEN_SOURCES, ci as CanvasNodeRenderType, ay as STICKY_NODE_TYPE, cj as needsAgentInput, ck as FROM_AI_PARAMETERS_MODAL_KEY, cl as historyBus, cm as DRAG_EVENT_DATA_KEY } from "./index-bHaUIFge.js";
import { u as useVueFlow, a as useCanvasMapping, C as Canvas } from "./useCanvasMapping-CQBY35gl.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-F55zLQYZ.js";
import { u as useExecutionDebugging } from "./useExecutionDebugging-brUq23t6.js";
import { u as useBeforeUnload } from "./useBeforeUnload-hIF9Fvpw.js";
import { g as getEasyAiWorkflowJson } from "./easyAiWorkflowUtils-D4a8FLqF.js";
import { u as useClearExecutionButtonVisible } from "./useClearExecutionButtonVisible-CXrgd1z1.js";
import { u as useWorkflowSaving } from "./useWorkflowSaving-Wfk21FR9.js";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CanvasChatButton",
  props: {
    type: {},
    label: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_N8nButton = resolveComponent("N8nButton");
      return openBlock(), createBlock(_component_N8nButton, {
        label: _ctx.label,
        size: "large",
        icon: "comment",
        type: _ctx.type,
        "data-test-id": "workflow-chat-button"
      }, null, 8, ["label", "type"]);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "WorkflowCanvas",
  props: {
    id: { default: "canvas" },
    workflow: {},
    workflowObject: {},
    fallbackNodes: { default: () => [] },
    showFallbackNodes: { type: Boolean, default: true },
    eventBus: { default: () => createEventBus() },
    readOnly: { type: Boolean },
    executing: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const $style = useCssModule();
    const { onNodesInitialized } = useVueFlow({ id: props.id });
    const workflow = toRef(props, "workflow");
    const workflowObject = toRef(props, "workflowObject");
    const nodes = computed(() => {
      return props.showFallbackNodes ? [...props.workflow.nodes, ...props.fallbackNodes] : props.workflow.nodes;
    });
    const connections = computed(() => props.workflow.connections);
    const { nodes: mappedNodes, connections: mappedConnections } = useCanvasMapping({
      nodes,
      connections,
      workflowObject
    });
    const initialFitViewDone = ref(false);
    onNodesInitialized(() => {
      if (!initialFitViewDone.value || props.showFallbackNodes) {
        props.eventBus.emit("fitView");
        initialFitViewDone.value = true;
      }
    });
    const mappedNodesThrottled = refThrottled(mappedNodes, 200);
    const mappedConnectionsThrottled = refThrottled(mappedConnections, 200);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).wrapper),
        "data-test-id": "canvas-wrapper"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).canvas)
        }, [
          workflow.value ? (openBlock(), createBlock(Canvas, mergeProps({
            key: 0,
            id: _ctx.id,
            nodes: _ctx.executing ? unref(mappedNodesThrottled) : unref(mappedNodes),
            connections: _ctx.executing ? unref(mappedConnectionsThrottled) : unref(mappedConnections),
            "event-bus": _ctx.eventBus,
            "read-only": _ctx.readOnly
          }, _ctx.$attrs), null, 16, ["id", "nodes", "connections", "event-bus", "read-only"])) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const wrapper = "_wrapper_17o0o_123";
const canvas = "_canvas_17o0o_131";
const style0$1 = {
  wrapper,
  canvas
};
const cssModules$1 = {
  "$style": style0$1
};
const WorkflowCanvas = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CanvasRunWorkflowButton",
  props: {
    waitingForWebhook: { type: Boolean },
    executing: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["mouseenter", "mouseleave", "click"],
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const label = computed(() => {
      if (!props.executing) {
        return i18n.baseText("nodeView.runButtonText.executeWorkflow");
      }
      if (props.waitingForWebhook) {
        return i18n.baseText("nodeView.runButtonText.waitingForTriggerEvent");
      }
      return i18n.baseText("nodeView.runButtonText.executingWorkflow");
    });
    return (_ctx, _cache) => {
      const _component_N8nButton = resolveComponent("N8nButton");
      return openBlock(), createBlock(KeyboardShortcutTooltip, {
        label: label.value,
        shortcut: { metaKey: true, keys: ["↵"] }
      }, {
        default: withCtx(() => [
          createVNode(_component_N8nButton, {
            loading: _ctx.executing,
            label: label.value,
            disabled: _ctx.disabled,
            size: "large",
            icon: "flask",
            type: "primary",
            "data-test-id": "execute-workflow-button",
            onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("mouseenter", $event)),
            onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("mouseleave", $event)),
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.$emit("click", $event), ["stop"]))
          }, null, 8, ["loading", "label", "disabled"])
        ]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
const state = reactive({
  customActions: {},
  delegatedClickHandler: null
});
function useGlobalLinkActions() {
  function registerCustomAction({ key, action }) {
    state.customActions[key] = action;
  }
  function unregisterCustomAction(key) {
    const { [key]: _, ...rest } = state.customActions;
    state.customActions = rest;
  }
  function getElementAttributes(element) {
    const attributesObject = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      if (attr.name.startsWith("data-action-parameter-")) {
        attributesObject[attr.name.replace("data-action-parameter-", "")] = attr.value;
      }
    }
    return attributesObject;
  }
  function delegateClick(e) {
    const clickedElement = e.target;
    if (!(clickedElement instanceof Element) || clickedElement.tagName !== "A") return;
    const actionAttribute = clickedElement.getAttribute("data-action");
    if (actionAttribute && typeof availableActions.value[actionAttribute] === "function") {
      e.preventDefault();
      const elementAttributes = getElementAttributes(clickedElement);
      availableActions.value[actionAttribute](elementAttributes);
    }
  }
  function reload() {
    if (window.top) {
      window.top.location.reload();
    } else {
      window.location.reload();
    }
  }
  const availableActions = computed(() => ({
    reload,
    ...state.customActions
  }));
  onMounted(() => {
    if (state.delegatedClickHandler) return;
    state.delegatedClickHandler = delegateClick;
    window.addEventListener("click", delegateClick);
    globalLinkActionsEventBus.on("registerGlobalLinkAction", registerCustomAction);
  });
  onUnmounted(() => {
    window.removeEventListener("click", delegateClick);
    state.delegatedClickHandler = null;
    globalLinkActionsEventBus.off("registerGlobalLinkAction", registerCustomAction);
  });
  return {
    registerCustomAction,
    unregisterCustomAction
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopCurrentExecutionButton",
  props: {
    stopping: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const title = computed(
      () => props.stopping ? i18n.baseText("nodeView.stoppingCurrentExecution") : i18n.baseText("nodeView.stopCurrentExecution")
    );
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      return openBlock(), createBlock(_component_N8nIconButton, {
        icon: "stop",
        size: "large",
        class: "stop-execution",
        type: "secondary",
        title: title.value,
        loading: _ctx.stopping,
        "data-test-id": "stop-execution-button"
      }, null, 8, ["title", "loading"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopWaitingForWebhookButton",
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      return openBlock(), createBlock(_component_N8nIconButton, {
        class: "stop-execution",
        icon: "stop",
        size: "large",
        title: unref(i18n).baseText("nodeView.stopWaitingForWebhookCall"),
        type: "secondary",
        "data-test-id": "stop-execution-waiting-for-webhook-button"
      }, null, 8, ["title"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CanvasClearExecutionDataButton",
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      return openBlock(), createBlock(_component_N8nIconButton, {
        title: unref(i18n).baseText("nodeView.deletesTheCurrentExecutionData"),
        icon: "trash",
        size: "large",
        "data-test-id": "clear-execution-data-button"
      }, null, 8, ["title"]);
    };
  }
});
const _hoisted_1 = { "data-action": "reload" };
const _hoisted_2 = {
  href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/",
  target: "_blank"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NodeViewUnfinishedWorkflowMessage",
  setup(__props) {
    const i18 = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("a", _hoisted_1, toDisplayString(unref(i18).baseText("nodeView.refresh")), 1),
        createTextVNode(" " + toDisplayString(unref(i18).baseText("nodeView.toSeeTheLatestStatus")) + ". ", 1),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18).baseText("nodeView.moreInfo")), 1)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "NodeView"
  },
  __name: "NodeView",
  setup(__props) {
    const LazyNodeCreation = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeCreation-CP6lkm4S.js").then((n) => n.N), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const LazyNodeDetailsView = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeDetailsView-rLFBUlXs.js"), true ? __vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0)
    );
    const LazySetupWorkflowCredentialsButton = defineAsyncComponent(
      async () => await __vitePreload(() => import("./SetupWorkflowCredentialsButton-BYzZejY1.js"), true ? __vite__mapDeps([17,1,2]) : void 0)
    );
    const $style = useCssModule();
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const externalHooks = useExternalHooks();
    const toast = useToast();
    const message = useMessage();
    const documentTitle = useDocumentTitle();
    const workflowHelpers = useWorkflowHelpers({ router });
    const nodeHelpers = useNodeHelpers();
    const nodeTypesStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const sourceControlStore = useSourceControlStore();
    const nodeCreatorStore = useNodeCreatorStore();
    const settingsStore = useSettingsStore();
    const credentialsStore = useCredentialsStore();
    const environmentsStore = useEnvironmentsStore();
    const externalSecretsStore = useExternalSecretsStore();
    const rootStore = useRootStore();
    const executionsStore = useExecutionsStore();
    const canvasStore = useCanvasStore();
    const npsSurveyStore = useNpsSurveyStore();
    const historyStore = useHistoryStore();
    const projectsStore = useProjectsStore();
    const usersStore = useUsersStore();
    const tagsStore = useTagsStore();
    const pushConnectionStore = usePushConnectionStore();
    const ndvStore = useNDVStore();
    const templatesStore = useTemplatesStore();
    const builderStore = useBuilderStore();
    const foldersStore = useFoldersStore();
    const agentRequestStore = useAgentRequestStore();
    const logsStore = useLogsStore();
    const canvasEventBus = createEventBus();
    const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings } = useBeforeUnload({
      route
    });
    const { registerCustomAction, unregisterCustomAction } = useGlobalLinkActions();
    const { runWorkflow, runEntireWorkflow, stopCurrentExecution, stopWaitingForWebhook } = useRunWorkflow({ router });
    const {
      updateNodePosition,
      updateNodesPosition,
      tidyUp,
      revertUpdateNodePosition,
      renameNode,
      revertRenameNode,
      setNodeActive,
      setNodeSelected,
      toggleNodesDisabled,
      revertToggleNodeDisabled,
      toggleNodesPinned,
      setNodeParameters,
      deleteNode,
      deleteNodes,
      copyNodes,
      cutNodes,
      duplicateNodes,
      revertDeleteNode,
      addNodes,
      importTemplate,
      revertAddNode,
      createConnection,
      revertCreateConnection,
      deleteConnection,
      revertDeleteConnection,
      revalidateNodeInputConnections,
      revalidateNodeOutputConnections,
      setNodeActiveByName,
      clearNodeActive,
      addConnections,
      tryToOpenSubworkflowInNewTab,
      importWorkflowData,
      fetchWorkflowDataFromUrl,
      resetWorkspace,
      initializeWorkspace,
      openExecution,
      editableWorkflow,
      editableWorkflowObject,
      lastClickPosition,
      startChat
    } = useCanvasOperations({ router });
    const { applyExecutionData } = useExecutionDebugging();
    useClipboard({ onPaste: onClipboardPaste });
    const isLoading = ref(true);
    const isBlankRedirect = ref(false);
    const readOnlyNotification = ref(null);
    const isProductionExecutionPreview = ref(false);
    const isExecutionPreview = ref(false);
    const canOpenNDV = ref(true);
    const hideNodeIssues = ref(false);
    const fallbackNodes = ref([]);
    const initializedWorkflowId = ref();
    const workflowId = computed(() => {
      const workflowIdParam = route.params.name;
      return [PLACEHOLDER_EMPTY_WORKFLOW_ID, NEW_WORKFLOW_ID].includes(workflowIdParam) ? void 0 : workflowIdParam;
    });
    const routeNodeId = computed(() => route.params.nodeId);
    const isNewWorkflowRoute = computed(() => route.name === VIEWS.NEW_WORKFLOW || !workflowId.value);
    const isWorkflowRoute = computed(() => !!route?.meta?.nodeView || isDemoRoute.value);
    const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
    const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
    const isReadOnlyEnvironment = computed(() => {
      return sourceControlStore.preferences.branchReadOnly;
    });
    const isCanvasReadOnly = computed(() => {
      return isDemoRoute.value || isReadOnlyEnvironment.value || !(workflowPermissions.value.update ?? projectPermissions.value.workflow.update) || editableWorkflow.value.isArchived;
    });
    const showFallbackNodes = computed(() => triggerNodes.value.length === 0);
    const keyBindingsEnabled = computed(() => {
      return !ndvStore.activeNode && uiStore.activeModals.length === 0;
    });
    const isLogsPanelOpen = computed(() => logsStore.isOpen);
    async function initializeData() {
      const loadPromises = (() => {
        if (settingsStore.isPreviewMode && isDemoRoute.value) return [];
        const promises = [
          workflowsStore.fetchActiveWorkflows(),
          credentialsStore.fetchAllCredentials(),
          credentialsStore.fetchCredentialTypes(true)
        ];
        if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) {
          promises.push(environmentsStore.fetchAllVariables());
        }
        if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]) {
          promises.push(externalSecretsStore.fetchAllSecrets());
        }
        return promises;
      })();
      if (nodeTypesStore.allNodeTypes.length === 0) {
        loadPromises.push(nodeTypesStore.getNodeTypes());
      }
      try {
        await Promise.all(loadPromises);
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("nodeView.showError.mounted1.title"),
          i18n.baseText("nodeView.showError.mounted1.message") + ":"
        );
        return;
      }
    }
    async function initializeRoute(force = false) {
      if (route.query.action === "workflowSave") {
        uiStore.stateIsDirty = false;
        await router.replace({
          query: { ...route.query, action: void 0 }
        });
        return;
      }
      const isAlreadyInitialized = !force && initializedWorkflowId.value && [NEW_WORKFLOW_ID, workflowId.value].includes(initializedWorkflowId.value);
      if (isBlankRedirect.value) {
        isBlankRedirect.value = false;
      } else if (route.name === VIEWS.TEMPLATE_IMPORT) {
        const templateId = route.params.id;
        const loadWorkflowFromJSON = route.query.fromJson === "true";
        if (loadWorkflowFromJSON) {
          const easyAiWorkflowJson = getEasyAiWorkflowJson();
          await openTemplateFromWorkflowJSON(easyAiWorkflowJson);
        } else {
          await openWorkflowTemplate(templateId.toString());
        }
      } else if (isWorkflowRoute.value) {
        if (!isAlreadyInitialized) {
          historyStore.reset();
          if (!isDemoRoute.value) {
            await loadCredentials();
          }
          if (isNewWorkflowRoute.value || !workflowId.value) {
            if (route.meta?.nodeView === true) {
              await initializeWorkspaceForNewWorkflow();
            }
            return;
          }
          await initializeWorkspaceForExistingWorkflow(workflowId.value);
          void nextTick(() => {
            updateNodesIssues();
          });
        }
        if (route.name === VIEWS.EXECUTION_DEBUG) {
          await initializeDebugMode();
        }
      }
    }
    async function initializeWorkspaceForNewWorkflow() {
      resetWorkspace();
      const parentFolderId = route.query.parentFolderId;
      await workflowsStore.getNewWorkflowDataAndMakeShareable(
        void 0,
        projectsStore.currentProjectId,
        parentFolderId
      );
      if (projectsStore.currentProjectId) {
        await fetchAndSetProject(projectsStore.currentProjectId);
      }
      await fetchAndSetParentFolder(parentFolderId);
      uiStore.nodeViewInitialized = true;
      initializedWorkflowId.value = NEW_WORKFLOW_ID;
    }
    async function fetchAndSetParentFolder(folderId) {
      if (folderId) {
        let parentFolder = foldersStore.getCachedFolder(folderId);
        if (!parentFolder && projectsStore.currentProjectId) {
          await foldersStore.getFolderPath(projectsStore.currentProjectId, folderId);
          parentFolder = foldersStore.getCachedFolder(folderId);
        }
        if (parentFolder) {
          workflowsStore.setParentFolder({
            ...parentFolder,
            parentFolderId: parentFolder.parentFolder ?? null
          });
        }
      }
    }
    async function fetchAndSetProject(projectId) {
      if (!projectsStore.currentProject) {
        const project = await projectsStore.fetchProject(projectId);
        projectsStore.setCurrentProject(project);
      }
    }
    async function initializeWorkspaceForExistingWorkflow(id) {
      try {
        const workflowData = await workflowsStore.fetchWorkflow(id);
        openWorkflow(workflowData);
        if (workflowData.parentFolder) {
          workflowsStore.setParentFolder(workflowData.parentFolder);
        }
        if (workflowData.meta?.onboardingId) {
          trackOpenWorkflowFromOnboardingTemplate();
        }
        await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject);
      } catch (error) {
        toast.showError(error, i18n.baseText("openWorkflow.workflowNotFoundError"));
        void router.push({
          name: VIEWS.NEW_WORKFLOW
        });
      } finally {
        uiStore.nodeViewInitialized = true;
        initializedWorkflowId.value = workflowId.value;
      }
    }
    function updateNodesIssues() {
      nodeHelpers.updateNodesInputIssues();
      nodeHelpers.updateNodesCredentialsIssues();
      nodeHelpers.updateNodesParameterIssues();
    }
    function openWorkflow(data) {
      resetWorkspace();
      workflowHelpers.setDocumentTitle(data.name, "IDLE");
      initializeWorkspace(data);
      void externalHooks.run("workflow.open", {
        workflowId: data.id,
        workflowName: data.name
      });
      fitView();
    }
    function trackOpenWorkflowFromOnboardingTemplate() {
      telemetry.track(
        `User opened workflow from onboarding template with ID ${editableWorkflow.value.meta?.onboardingId}`,
        {
          workflow_id: workflowId.value
        },
        {
          withPostHog: true
        }
      );
    }
    async function openTemplateFromWorkflowJSON(workflow) {
      if (!workflow.nodes || !workflow.connections) {
        toast.showError(
          new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")),
          i18n.baseText("nodeView.couldntImportWorkflow")
        );
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        return;
      }
      resetWorkspace();
      canvasStore.startLoading();
      canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
      workflowsStore.currentWorkflowExecutions = [];
      executionsStore.activeExecution = null;
      isBlankRedirect.value = true;
      const templateId = workflow.meta.templateId;
      const parentFolderId = route.query.parentFolderId;
      await router.replace({
        name: VIEWS.NEW_WORKFLOW,
        query: { templateId, parentFolderId }
      });
      await importTemplate({ id: templateId, name: workflow.name, workflow });
      uiStore.stateIsDirty = true;
      canvasStore.stopLoading();
      fitView();
    }
    async function openWorkflowTemplate(templateId) {
      resetWorkspace();
      canvasStore.startLoading();
      canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
      workflowsStore.currentWorkflowExecutions = [];
      executionsStore.activeExecution = null;
      let data;
      try {
        void externalHooks.run("template.requested", { templateId });
        data = await templatesStore.getFixedWorkflowTemplate(templateId);
        if (!data) {
          throw new Error(
            i18n.baseText("nodeView.workflowTemplateWithIdCouldNotBeFound", {
              interpolate: { templateId }
            })
          );
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("nodeView.couldntImportWorkflow"));
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        return;
      }
      trackOpenWorkflowTemplate(templateId);
      isBlankRedirect.value = true;
      await router.replace({ name: VIEWS.NEW_WORKFLOW, query: { templateId } });
      await importTemplate({ id: templateId, name: data.name, workflow: data.workflow });
      uiStore.stateIsDirty = true;
      canvasStore.stopLoading();
      void externalHooks.run("template.open", {
        templateId,
        templateName: data.name,
        workflow: data.workflow
      });
      fitView();
    }
    function trackOpenWorkflowTemplate(templateId) {
      telemetry.track(
        "User inserted workflow template",
        {
          source: "workflow",
          template_id: tryToParseNumber(templateId),
          wf_template_repo_session_id: templatesStore.previousSessionId
        },
        {
          withPostHog: true
        }
      );
    }
    const triggerNodes = computed(() => {
      return editableWorkflow.value.nodes.filter(
        (node) => node.type === START_NODE_TYPE || nodeTypesStore.isTriggerNode(node.type)
      );
    });
    const containsTriggerNodes = computed(() => triggerNodes.value.length > 0);
    const allTriggerNodesDisabled = computed(() => {
      const disabledTriggerNodes = triggerNodes.value.filter((node) => node.disabled);
      return disabledTriggerNodes.length === triggerNodes.value.length;
    });
    function onTidyUp(event) {
      tidyUp(event);
    }
    function onUpdateNodesPosition(events) {
      updateNodesPosition(events, { trackHistory: true });
    }
    function onUpdateNodePosition(id, position) {
      updateNodePosition(id, position, { trackHistory: true });
    }
    function onRevertNodePosition({ nodeName, position }) {
      revertUpdateNodePosition(nodeName, { x: position[0], y: position[1] });
    }
    function onDeleteNode(id) {
      const matchedFallbackNode = fallbackNodes.value.findIndex((node) => node.id === id);
      if (matchedFallbackNode >= 0) {
        fallbackNodes.value.splice(matchedFallbackNode, 1);
      } else {
        deleteNode(id, { trackHistory: true });
      }
    }
    function onDeleteNodes(ids) {
      deleteNodes(ids);
    }
    function onRevertDeleteNode({ node }) {
      revertDeleteNode(node);
    }
    function onToggleNodeDisabled(id) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesDisabled([id]);
    }
    function onRevertToggleNodeDisabled({ nodeName }) {
      revertToggleNodeDisabled(nodeName);
    }
    function onToggleNodesDisabled(ids) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesDisabled(ids);
    }
    function onClickNode(_id, event) {
      lastClickPosition.value = [event.x, event.y];
      closeNodeCreator();
    }
    function onSetNodeActivated(id, event) {
      if (event?.metaKey || event?.ctrlKey) {
        const didOpen = tryToOpenSubworkflowInNewTab(id);
        if (didOpen) {
          return;
        }
      }
      setNodeActive(id);
    }
    function onOpenSubWorkflow(id) {
      tryToOpenSubworkflowInNewTab(id);
    }
    function onSetNodeDeactivated() {
      clearNodeActive();
    }
    function onSetNodeSelected(id) {
      closeNodeCreator();
      setNodeSelected(id);
    }
    async function onCopyNodes(ids) {
      await copyNodes(ids);
      toast.showMessage({ title: i18n.baseText("generic.copiedToClipboard"), type: "success" });
    }
    async function onClipboardPaste(plainTextData) {
      if (getNodeViewTab(route) !== MAIN_HEADER_TABS.WORKFLOW || !keyBindingsEnabled.value || !checkIfEditingIsAllowed()) {
        return;
      }
      let workflowData = null;
      if (plainTextData.match(VALID_WORKFLOW_IMPORT_URL_REGEX)) {
        const importConfirm = await message.confirm(
          i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.message", {
            interpolate: { plainTextData }
          }),
          i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.headline"),
          {
            type: "warning",
            confirmButtonText: i18n.baseText(
              "nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText"
            ),
            cancelButtonText: i18n.baseText(
              "nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText"
            )
          }
        );
        if (importConfirm !== MODAL_CONFIRM) {
          return;
        }
        workflowData = await fetchWorkflowDataFromUrl(plainTextData);
      } else {
        workflowData = jsonParse(plainTextData, { fallbackValue: null });
      }
      if (!workflowData) {
        return;
      }
      const result = await importWorkflowData(workflowData, "paste", {
        importTags: false,
        viewport: viewportBoundaries.value
      });
      selectNodes(result.nodes?.map((node) => node.id) ?? []);
    }
    async function onCutNodes(ids) {
      if (isCanvasReadOnly.value) {
        await copyNodes(ids);
      } else {
        await cutNodes(ids);
      }
    }
    async function onDuplicateNodes(ids) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      const newIds = await duplicateNodes(ids, {
        viewport: viewportBoundaries.value
      });
      selectNodes(newIds);
    }
    function onPinNodes(ids, source) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesPinned(ids, source);
    }
    async function onSaveWorkflow() {
      const workflowIsSaved = !uiStore.stateIsDirty;
      const workflowIsArchived = workflowsStore.workflow.isArchived;
      if (workflowIsSaved || workflowIsArchived) {
        return;
      }
      const saved = await workflowHelpers.saveCurrentWorkflow();
      if (saved) {
        canvasEventBus.emit("saved:workflow");
      }
    }
    function addWorkflowSavedEventBindings() {
      canvasEventBus.on("saved:workflow", npsSurveyStore.fetchPromptsData);
      canvasEventBus.on("saved:workflow", onSaveFromWithinNDV);
    }
    function removeWorkflowSavedEventBindings() {
      canvasEventBus.off("saved:workflow", npsSurveyStore.fetchPromptsData);
      canvasEventBus.off("saved:workflow", onSaveFromWithinNDV);
      canvasEventBus.off("saved:workflow", onSaveFromWithinExecutionDebug);
    }
    async function onSaveFromWithinNDV() {
      if (ndvStore.activeNodeName) {
        toast.showMessage({
          title: i18n.baseText("generic.workflowSaved"),
          type: "success"
        });
      }
    }
    async function onCreateWorkflow() {
      await router.push({ name: VIEWS.NEW_WORKFLOW });
    }
    function onRenameNode(parameterData) {
      if (parameterData.name === "name" && parameterData.oldValue) {
        void renameNode(parameterData.oldValue, parameterData.value);
      }
    }
    async function onOpenRenameNodeModal(id) {
      const currentName = workflowsStore.getNodeById(id)?.name ?? "";
      if (!keyBindingsEnabled.value || document.querySelector(".rename-prompt")) return;
      try {
        const promptResponsePromise = message.prompt(
          i18n.baseText("nodeView.prompt.newName") + ":",
          i18n.baseText("nodeView.prompt.renameNode") + `: ${currentName}`,
          {
            customClass: "rename-prompt",
            confirmButtonText: i18n.baseText("nodeView.prompt.rename"),
            cancelButtonText: i18n.baseText("nodeView.prompt.cancel"),
            inputErrorMessage: i18n.baseText("nodeView.prompt.invalidName"),
            inputValue: currentName,
            inputValidator: (value) => {
              if (!value.trim()) {
                return i18n.baseText("nodeView.prompt.invalidName");
              }
              return true;
            }
          }
        );
        await nextTick();
        const nameInput = document.querySelector(".rename-prompt .el-input__inner");
        nameInput?.focus();
        nameInput?.select();
        const promptResponse = await promptResponsePromise;
        if (promptResponse.action === MODAL_CONFIRM) {
          await renameNode(currentName, promptResponse.value, { trackHistory: true });
        }
      } catch (e) {
      }
    }
    async function onRevertRenameNode({
      currentName,
      newName
    }) {
      await revertRenameNode(currentName, newName);
    }
    function onUpdateNodeParameters(id, parameters) {
      setNodeParameters(id, parameters);
    }
    function onUpdateNodeInputs(id) {
      revalidateNodeInputConnections(id);
    }
    function onUpdateNodeOutputs(id) {
      revalidateNodeOutputConnections(id);
    }
    function onClickNodeAdd(source, sourceHandle) {
      nodeCreatorStore.openNodeCreatorForConnectingNode({
        connection: {
          source,
          sourceHandle
        },
        eventSource: NODE_CREATOR_OPEN_SOURCES.PLUS_ENDPOINT
      });
    }
    async function loadCredentials() {
      let options;
      if (workflowId.value) {
        options = { workflowId: workflowId.value };
      } else {
        const queryParam = typeof route.query?.projectId === "string" ? route.query?.projectId : void 0;
        const projectId = queryParam ?? projectsStore.personalProject?.id;
        if (projectId === void 0) {
          throw new Error(
            "Could not find projectId in the query nor could I find the personal project in the project store"
          );
        }
        options = { projectId };
      }
      await credentialsStore.fetchAllCredentialsForWorkflow(options);
    }
    function onCreateConnection(connection) {
      createConnection(connection, { trackHistory: true });
    }
    function onRevertCreateConnection({ connection }) {
      revertCreateConnection(connection);
    }
    function onCreateConnectionCancelled(event, position, mouseEvent) {
      const preventDefault = (mouseEvent?.target).classList?.contains("clickable");
      if (preventDefault) {
        return;
      }
      uiStore.lastInteractedWithNodeId = event.nodeId;
      uiStore.lastInteractedWithNodeHandle = event.handleId;
      uiStore.lastCancelledConnectionPosition = [position.x, position.y];
      setTimeout(() => {
        if (!event.nodeId) return;
        nodeCreatorStore.openNodeCreatorForConnectingNode({
          connection: {
            source: event.nodeId,
            sourceHandle: event.handleId
          },
          eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_DROP
        });
      });
    }
    function onDeleteConnection(connection) {
      deleteConnection(connection, { trackHistory: true });
    }
    function onRevertDeleteConnection({ connection }) {
      revertDeleteConnection(connection);
    }
    async function importWorkflowExact({ workflow: workflowData }) {
      if (!workflowData.nodes || !workflowData.connections) {
        throw new Error("Invalid workflow object");
      }
      resetWorkspace();
      await initializeData();
      initializeWorkspace({
        ...workflowData,
        nodes: getNodesWithNormalizedPosition(workflowData.nodes)
      });
      fitView();
    }
    async function onImportWorkflowDataEvent(data) {
      const workflowData = data.data;
      await importWorkflowData(workflowData, "file", {
        viewport: viewportBoundaries.value
      });
      fitView();
      selectNodes(workflowData.nodes?.map((node) => node.id) ?? []);
      if (data.tidyUp) {
        setTimeout(() => {
          canvasEventBus.emit("tidyUp", { source: "import-workflow-data" });
        }, 0);
      }
    }
    async function onImportWorkflowUrlEvent(data) {
      const workflowData = await fetchWorkflowDataFromUrl(data.url);
      if (!workflowData) {
        return;
      }
      await importWorkflowData(workflowData, "url", {
        viewport: viewportBoundaries.value
      });
      fitView();
      selectNodes(workflowData.nodes?.map((node) => node.id) ?? []);
    }
    function addImportEventBindings() {
      nodeViewEventBus.on("importWorkflowData", onImportWorkflowDataEvent);
      nodeViewEventBus.on("importWorkflowUrl", onImportWorkflowUrlEvent);
      nodeViewEventBus.on("openChat", onOpenChat);
    }
    function removeImportEventBindings() {
      nodeViewEventBus.off("importWorkflowData", onImportWorkflowDataEvent);
      nodeViewEventBus.off("importWorkflowUrl", onImportWorkflowUrlEvent);
      nodeViewEventBus.off("openChat", onOpenChat);
    }
    async function onAddNodesAndConnections({ nodes, connections }, dragAndDrop = false, position) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      const addedNodes = await addNodes(nodes, {
        dragAndDrop,
        position,
        viewport: viewportBoundaries.value,
        trackHistory: true,
        telemetry: true
      });
      const offsetIndex = editableWorkflow.value.nodes.length - nodes.length;
      const mappedConnections = connections.map(({ from, to }) => {
        const fromNode = editableWorkflow.value.nodes[offsetIndex + from.nodeIndex];
        const toNode = editableWorkflow.value.nodes[offsetIndex + to.nodeIndex];
        const type = from.type ?? to.type ?? NodeConnectionTypes.Main;
        return {
          source: fromNode.id,
          sourceHandle: createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Output,
            type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
            index: from.outputIndex ?? 0
          }),
          target: toNode.id,
          targetHandle: createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Input,
            type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
            index: to.inputIndex ?? 0
          }),
          data: {
            source: {
              index: from.outputIndex ?? 0,
              type
            },
            target: {
              index: to.inputIndex ?? 0,
              type
            }
          }
        };
      });
      await addConnections(mappedConnections);
      uiStore.resetLastInteractedWith();
      if (addedNodes.length > 0) {
        selectNodes([addedNodes[addedNodes.length - 1].id]);
      }
    }
    async function onRevertAddNode({ node }) {
      await revertAddNode(node.name);
    }
    async function onSwitchActiveNode(nodeName) {
      const node = workflowsStore.getNodeByName(nodeName);
      if (!node) return;
      setNodeActiveByName(nodeName);
      selectNodes([node.id]);
    }
    async function onOpenSelectiveNodeCreator(node, connectionType) {
      nodeCreatorStore.openSelectiveNodeCreator({ node, connectionType });
    }
    async function onOpenNodeCreatorForTriggerNodes(source) {
      nodeCreatorStore.openNodeCreatorForTriggerNodes(source);
    }
    function onOpenNodeCreatorFromCanvas(source) {
      onToggleNodeCreator({ createNodeActive: true, source });
    }
    function onToggleNodeCreator(options) {
      nodeCreatorStore.setNodeCreatorState(options);
      if (!options.createNodeActive && !options.hasAddedNodes) {
        uiStore.resetLastInteractedWith();
      }
    }
    function closeNodeCreator() {
      if (nodeCreatorStore.isCreateNodeActive) {
        nodeCreatorStore.isCreateNodeActive = false;
      }
    }
    function onCreateSticky() {
      void onAddNodesAndConnections({ nodes: [{ type: STICKY_NODE_TYPE }], connections: [] });
    }
    function onClickConnectionAdd(connection) {
      nodeCreatorStore.openNodeCreatorForConnectingNode({
        connection,
        eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_ACTION
      });
    }
    const workflowPermissions = computed(() => {
      return workflowId.value ? getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow : {};
    });
    const projectPermissions = computed(() => {
      const project = route.query?.projectId ? projectsStore.myProjects.find((p) => p.id === route.query.projectId) : projectsStore.currentProject ?? projectsStore.personalProject;
      return getResourcePermissions(project?.scopes);
    });
    const isStoppingExecution = ref(false);
    const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
    const isExecutionDisabled = computed(() => {
      if (containsChatTriggerNodes.value && isOnlyChatTriggerNodeActive.value && !chatTriggerNodePinnedData.value) {
        return true;
      }
      return !containsTriggerNodes.value || allTriggerNodesDisabled.value;
    });
    const isRunWorkflowButtonVisible = computed(
      () => !isOnlyChatTriggerNodeActive.value || chatTriggerNodePinnedData.value
    );
    const isStopExecutionButtonVisible = computed(
      () => isWorkflowRunning.value && !isExecutionWaitingForWebhook.value
    );
    const isStopWaitingForWebhookButtonVisible = computed(
      () => isWorkflowRunning.value && isExecutionWaitingForWebhook.value
    );
    const isClearExecutionButtonVisible = useClearExecutionButtonVisible();
    async function onRunWorkflowToNode(id) {
      const node = workflowsStore.getNodeById(id);
      if (!node) return;
      if (needsAgentInput(node) && nodeTypesStore.isToolNode(node.type)) {
        uiStore.openModalWithData({
          name: FROM_AI_PARAMETERS_MODAL_KEY,
          data: {
            nodeName: node.name
          }
        });
      } else {
        trackRunWorkflowToNode(node);
        agentRequestStore.clearAgentRequests(workflowsStore.workflowId, node.id);
        void runWorkflow({ destinationNode: node.name, source: "Node.executeNode" });
      }
    }
    function trackRunWorkflowToNode(node) {
      const telemetryPayload = {
        node_type: node.type,
        workflow_id: workflowsStore.workflowId,
        source: "canvas",
        push_ref: ndvStore.pushRef
      };
      telemetry.track("User clicked execute node button", telemetryPayload);
      void externalHooks.run("nodeView.onRunNode", telemetryPayload);
    }
    async function onOpenExecution(executionId) {
      canvasStore.startLoading();
      resetWorkspace();
      await initializeData();
      const data = await openExecution(executionId);
      if (!data) {
        return;
      }
      void nextTick(() => {
        updateNodesIssues();
      });
      canvasStore.stopLoading();
      fitView();
      canvasEventBus.emit("open:execution", data);
      void externalHooks.run("execution.open", {
        workflowId: data.workflowData.id,
        workflowName: data.workflowData.name,
        executionId
      });
      telemetry.track("User opened read-only execution", {
        workflow_id: data.workflowData.id,
        execution_mode: data.mode,
        execution_finished: data.finished
      });
    }
    function onExecutionOpenedWithError(data) {
      if (!data.finished && data.data?.resultData?.error) {
        let nodeErrorFound = false;
        if (data.data.resultData.runData) {
          const runData = data.data.resultData.runData;
          errorCheck: for (const nodeName of Object.keys(runData)) {
            for (const taskData of runData[nodeName]) {
              if (taskData.error) {
                nodeErrorFound = true;
                break errorCheck;
              }
            }
          }
        }
        if (!nodeErrorFound && (data.data.resultData.error.stack ?? data.data.resultData.error.message)) {
          console.error(`Execution ${data.id} error:`);
          console.error(data.data.resultData.error.stack);
          toast.showMessage({
            title: i18n.baseText("nodeView.showError.workflowError"),
            message: data.data.resultData.error.message,
            type: "error",
            duration: 0
          });
        }
      }
    }
    function onExecutionOpenedWithWaitTill(data) {
      if (data.waitTill) {
        toast.showMessage({
          title: i18n.baseText("nodeView.thisExecutionHasntFinishedYet"),
          message: h(_sfc_main$1),
          type: "warning",
          duration: 0
        });
      }
    }
    function addExecutionOpenedEventBindings() {
      canvasEventBus.on("open:execution", onExecutionOpenedWithError);
      canvasEventBus.on("open:execution", onExecutionOpenedWithWaitTill);
    }
    function removeExecutionOpenedEventBindings() {
      canvasEventBus.off("open:execution", onExecutionOpenedWithError);
      canvasEventBus.off("open:execution", onExecutionOpenedWithWaitTill);
    }
    async function onStopExecution() {
      isStoppingExecution.value = true;
      await stopCurrentExecution();
      isStoppingExecution.value = false;
    }
    async function onStopWaitingForWebhook() {
      await stopWaitingForWebhook();
    }
    async function onClearExecutionData() {
      workflowsStore.workflowExecutionData = null;
      nodeHelpers.updateNodesExecutionIssues();
    }
    function onRunWorkflowButtonMouseEnter() {
      nodeViewEventBus.emit("runWorkflowButton:mouseenter");
    }
    function onRunWorkflowButtonMouseLeave() {
      nodeViewEventBus.emit("runWorkflowButton:mouseleave");
    }
    const chatTriggerNode = computed(() => {
      return editableWorkflow.value.nodes.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE);
    });
    const containsChatTriggerNodes = computed(() => {
      return !isExecutionWaitingForWebhook.value && !!editableWorkflow.value.nodes.find(
        (node) => [MANUAL_CHAT_TRIGGER_NODE_TYPE, CHAT_TRIGGER_NODE_TYPE].includes(node.type) && node.disabled !== true
      );
    });
    const isOnlyChatTriggerNodeActive = computed(() => {
      return triggerNodes.value.every((node) => node.disabled || node.type === CHAT_TRIGGER_NODE_TYPE);
    });
    const chatTriggerNodePinnedData = computed(() => {
      if (!chatTriggerNode.value) return null;
      return workflowsStore.pinDataByNodeName(chatTriggerNode.value.name);
    });
    function onOpenChat() {
      startChat("main");
    }
    function addUndoRedoEventBindings() {
      historyBus.on("nodeMove", onRevertNodePosition);
      historyBus.on("revertAddNode", onRevertAddNode);
      historyBus.on("revertRemoveNode", onRevertDeleteNode);
      historyBus.on("revertAddConnection", onRevertCreateConnection);
      historyBus.on("revertRemoveConnection", onRevertDeleteConnection);
      historyBus.on("revertRenameNode", onRevertRenameNode);
      historyBus.on("enableNodeToggle", onRevertToggleNodeDisabled);
    }
    function removeUndoRedoEventBindings() {
      historyBus.off("nodeMove", onRevertNodePosition);
      historyBus.off("revertAddNode", onRevertAddNode);
      historyBus.off("revertRemoveNode", onRevertDeleteNode);
      historyBus.off("revertAddConnection", onRevertCreateConnection);
      historyBus.off("revertRemoveConnection", onRevertDeleteConnection);
      historyBus.off("revertRenameNode", onRevertRenameNode);
      historyBus.off("enableNodeToggle", onRevertToggleNodeDisabled);
    }
    async function onSourceControlPull() {
      try {
        await Promise.all([
          environmentsStore.fetchAllVariables(),
          tagsStore.fetchAll(),
          loadCredentials()
        ]);
        if (workflowId.value && !uiStore.stateIsDirty) {
          const workflowData = await workflowsStore.fetchWorkflow(workflowId.value);
          if (workflowData) {
            workflowHelpers.setDocumentTitle(workflowData.name, "IDLE");
            openWorkflow(workflowData);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    function addSourceControlEventBindings() {
      sourceControlEventBus.on("pull", onSourceControlPull);
    }
    function removeSourceControlEventBindings() {
      sourceControlEventBus.off("pull", onSourceControlPull);
    }
    function addPostMessageEventBindings() {
      window.addEventListener("message", onPostMessageReceived);
    }
    function removePostMessageEventBindings() {
      window.removeEventListener("message", onPostMessageReceived);
    }
    function emitPostMessageReady() {
      if (window.parent) {
        window.parent.postMessage(
          JSON.stringify({ command: "n8nReady", version: rootStore.versionCli }),
          "*"
        );
      }
    }
    async function onPostMessageReceived(messageEvent) {
      if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.('"command"')) {
        return;
      }
      try {
        const json = JSON.parse(messageEvent.data);
        if (json && json.command === "openWorkflow") {
          try {
            await importWorkflowExact(json);
            canOpenNDV.value = json.canOpenNDV ?? true;
            hideNodeIssues.value = json.hideNodeIssues ?? false;
            isExecutionPreview.value = false;
          } catch (e) {
            if (window.top) {
              window.top.postMessage(
                JSON.stringify({
                  command: "error",
                  message: i18n.baseText("openWorkflow.workflowImportError")
                }),
                "*"
              );
            }
            toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
          }
        } else if (json && json.command === "openExecution") {
          try {
            isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
            await onOpenExecution(json.executionId);
            canOpenNDV.value = json.canOpenNDV ?? true;
            hideNodeIssues.value = json.hideNodeIssues ?? false;
            isExecutionPreview.value = true;
          } catch (e) {
            if (window.top) {
              window.top.postMessage(
                JSON.stringify({
                  command: "error",
                  message: i18n.baseText("nodeView.showError.openExecution.title")
                }),
                "*"
              );
            }
            toast.showMessage({
              title: i18n.baseText("nodeView.showError.openExecution.title"),
              message: e.message,
              type: "error"
            });
          }
        } else if (json?.command === "setActiveExecution") {
          executionsStore.activeExecution = await executionsStore.fetchExecution(
            json.executionId
          );
        }
      } catch (e) {
      }
    }
    function checkIfEditingIsAllowed() {
      if (!initializedWorkflowId.value) {
        return true;
      }
      if (readOnlyNotification.value?.visible) {
        return false;
      }
      if (isReadOnlyRoute.value || isReadOnlyEnvironment.value) {
        const messageContext = isReadOnlyRoute.value ? "executions" : "workflows";
        readOnlyNotification.value = toast.showMessage({
          title: i18n.baseText(
            isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.title` : "readOnly.showMessage.executions.title"
          ),
          message: i18n.baseText(
            isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.message` : "readOnly.showMessage.executions.message"
          ),
          type: "info"
        });
        return false;
      }
      return true;
    }
    function checkIfRouteIsAllowed() {
      if (isReadOnlyEnvironment.value && [VIEWS.NEW_WORKFLOW, VIEWS.TEMPLATE_IMPORT].find((view) => view === route.name)) {
        void nextTick(async () => {
          resetWorkspace();
          uiStore.stateIsDirty = false;
          await router.replace({ name: VIEWS.HOMEPAGE });
        });
      }
    }
    async function initializeDebugMode() {
      workflowHelpers.setDocumentTitle(workflowsStore.workflowName, "DEBUG");
      if (!workflowsStore.isInDebugMode) {
        await applyExecutionData(route.params.executionId);
        workflowsStore.isInDebugMode = true;
      }
      canvasEventBus.on("saved:workflow", onSaveFromWithinExecutionDebug);
    }
    async function onSaveFromWithinExecutionDebug() {
      if (route.name !== VIEWS.EXECUTION_DEBUG) return;
      await router.replace({
        name: VIEWS.WORKFLOW,
        params: { name: workflowId.value }
      });
    }
    const viewportTransform = ref({ x: 0, y: 0, zoom: 1 });
    const viewportDimensions = ref({ width: 0, height: 0 });
    const viewportBoundaries = computed(() => {
      const { x, y, zoom } = viewportTransform.value;
      const { width, height } = viewportDimensions.value;
      const xMin = -x / zoom;
      const yMin = -y / zoom;
      const xMax = (width - x) / zoom;
      const yMax = (height - y) / zoom;
      return { xMin, yMin, xMax, yMax };
    });
    function onViewportChange(viewport, dimensions) {
      viewportTransform.value = viewport;
      viewportDimensions.value = dimensions;
      uiStore.nodeViewOffsetPosition = [viewport.x, viewport.y];
    }
    function fitView() {
      setTimeout(() => canvasEventBus.emit("fitView"));
    }
    function selectNodes(ids) {
      setTimeout(() => canvasEventBus.emit("nodes:select", { ids }));
    }
    function onClickPane(position) {
      lastClickPosition.value = [position.x, position.y];
      onSetNodeSelected();
    }
    function onSelectionEnd(position) {
      lastClickPosition.value = [position.x, position.y];
    }
    async function onDragAndDrop(position, event) {
      if (!event.dataTransfer) {
        return;
      }
      const dropData = jsonParse(
        event.dataTransfer.getData(DRAG_EVENT_DATA_KEY)
      );
      if (dropData) {
        const insertNodePosition = [position.x, position.y];
        await onAddNodesAndConnections(dropData, true, insertNodePosition);
        onToggleNodeCreator({ createNodeActive: false, hasAddedNodes: true });
      }
    }
    function registerCustomActions() {
      registerCustomAction({
        key: "openNodeDetail",
        action: ({ node }) => {
          setNodeActiveByName(node);
        }
      });
      registerCustomAction({
        key: "openSelectiveNodeCreator",
        action: ({
          creatorview: creatorView,
          connectiontype: connectionType,
          node
        }) => {
          nodeCreatorStore.openSelectiveNodeCreator({ node, connectionType, creatorView });
        }
      });
      registerCustomAction({
        key: "showNodeCreator",
        action: () => {
          ndvStore.activeNodeName = null;
          void nextTick(() => {
            void onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TAB);
          });
        }
      });
    }
    function unregisterCustomActions() {
      unregisterCustomAction("openNodeDetail");
      unregisterCustomAction("openSelectiveNodeCreator");
      unregisterCustomAction("showNodeCreator");
    }
    function showAddFirstStepIfEnabled() {
      if (uiStore.addFirstStepOnLoad) {
        void onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON);
        uiStore.addFirstStepOnLoad = false;
      }
    }
    function updateNodeRoute(nodeId) {
      const nodeUi = workflowsStore.findNodeByPartialId(nodeId);
      if (nodeUi) {
        setNodeActive(nodeUi.id);
      } else {
        toast.showToast({
          title: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.title"),
          message: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.content"),
          type: "warning"
        });
        void router.replace({
          name: route.name,
          params: { name: workflowId.value }
        });
      }
    }
    watch(
      () => route.name,
      async (newRouteName, oldRouteName) => {
        const force = newRouteName === VIEWS.NEW_WORKFLOW && oldRouteName === VIEWS.WORKFLOW || newRouteName === VIEWS.WORKFLOW && oldRouteName === VIEWS.NEW_WORKFLOW;
        await initializeRoute(force);
      }
    );
    watch(
      () => {
        return isLoading.value || isCanvasReadOnly.value || editableWorkflow.value.nodes.length !== 0;
      },
      (isReadOnlyOrLoading) => {
        const defaultFallbackNodes = [
          {
            id: CanvasNodeRenderType.AddNodes,
            name: CanvasNodeRenderType.AddNodes,
            type: CanvasNodeRenderType.AddNodes,
            typeVersion: 1,
            position: [0, 0],
            parameters: {}
          }
        ];
        if (builderStore.isAIBuilderEnabled && builderStore.isAssistantEnabled) {
          defaultFallbackNodes.unshift({
            id: CanvasNodeRenderType.AIPrompt,
            name: CanvasNodeRenderType.AIPrompt,
            type: CanvasNodeRenderType.AIPrompt,
            typeVersion: 1,
            position: [-690, -15],
            parameters: {}
          });
        }
        fallbackNodes.value = isReadOnlyOrLoading ? [] : defaultFallbackNodes;
      }
    );
    watch(
      () => route.params.nodeId,
      async (newId) => {
        if (typeof newId !== "string" || newId === "") ndvStore.activeNodeName = null;
        else {
          updateNodeRoute(newId);
        }
      }
    );
    watch(
      () => ndvStore.activeNode,
      async (val) => {
        if (![VIEWS.WORKFLOW].includes(String(route.name))) return;
        const nodeId = val?.id ? workflowsStore.getPartialIdForNode(val?.id) : "";
        if (nodeId !== route.params.nodeId) {
          await router.replace({
            name: route.name,
            params: { name: workflowId.value, nodeId }
          });
        }
      }
    );
    onBeforeRouteLeave(async (to, from, next) => {
      const toNodeViewTab = getNodeViewTab(to);
      if (toNodeViewTab === MAIN_HEADER_TABS.EXECUTIONS || from.name === VIEWS.TEMPLATE_IMPORT || toNodeViewTab === MAIN_HEADER_TABS.WORKFLOW && from.name === VIEWS.EXECUTION_DEBUG || isReadOnlyEnvironment.value) {
        next();
        return;
      }
      await useWorkflowSaving({ router }).promptSaveUnsavedWorkflowChanges(next, {
        async confirm() {
          if (from.name === VIEWS.NEW_WORKFLOW) {
            const savedWorkflowId = workflowsStore.workflowId;
            await router.replace({
              name: VIEWS.WORKFLOW,
              params: { name: savedWorkflowId }
            });
            await router.push(to);
            return false;
          }
          workflowsStore.setWorkflowId(PLACEHOLDER_EMPTY_WORKFLOW_ID);
          return true;
        }
      });
    });
    onBeforeMount(() => {
      if (!isDemoRoute.value) {
        pushConnectionStore.pushConnect();
      }
      addPostMessageEventBindings();
    });
    onMounted(() => {
      canvasStore.startLoading();
      documentTitle.reset();
      resetWorkspace();
      void initializeData().then(() => {
        void initializeRoute().then(() => {
          toast.showNotificationForViews([VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW]);
          if (route.query.settings) {
            uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
            void router.replace({ query: { settings: void 0 } });
          }
        }).finally(() => {
          isLoading.value = false;
          canvasStore.stopLoading();
          void externalHooks.run("nodeView.mount").catch(() => {
          });
          setTimeout(() => {
            if (routeNodeId.value) {
              updateNodeRoute(routeNodeId.value);
            }
          }, 500);
          emitPostMessageReady();
        });
        void usersStore.showPersonalizationSurvey();
        checkIfRouteIsAllowed();
      });
      addSourceControlEventBindings();
      addWorkflowSavedEventBindings();
      addBeforeUnloadEventBindings();
      addImportEventBindings();
      addExecutionOpenedEventBindings();
      registerCustomActions();
    });
    onActivated(async () => {
      addUndoRedoEventBindings();
      showAddFirstStepIfEnabled();
    });
    onDeactivated(() => {
      uiStore.closeModal(WORKFLOW_SETTINGS_MODAL_KEY);
      removeUndoRedoEventBindings();
    });
    onBeforeUnmount(() => {
      removeSourceControlEventBindings();
      removePostMessageEventBindings();
      removeWorkflowSavedEventBindings();
      removeBeforeUnloadEventBindings();
      removeImportEventBindings();
      removeExecutionOpenedEventBindings();
      unregisterCustomActions();
      if (!isDemoRoute.value) {
        pushConnectionStore.pushDisconnect();
      }
    });
    return (_ctx, _cache) => {
      const _component_CanvasChatButton = _sfc_main$7;
      return unref(editableWorkflow) && unref(editableWorkflowObject) && !isLoading.value ? (openBlock(), createBlock(WorkflowCanvas, {
        key: 0,
        id: unref(editableWorkflow).id,
        workflow: unref(editableWorkflow),
        "workflow-object": unref(editableWorkflowObject),
        "fallback-nodes": fallbackNodes.value,
        "show-fallback-nodes": showFallbackNodes.value,
        "event-bus": unref(canvasEventBus),
        "read-only": isCanvasReadOnly.value,
        executing: isWorkflowRunning.value,
        "key-bindings": keyBindingsEnabled.value,
        "onUpdate:nodes:position": onUpdateNodesPosition,
        "onUpdate:node:position": onUpdateNodePosition,
        "onUpdate:node:activated": onSetNodeActivated,
        "onUpdate:node:deactivated": onSetNodeDeactivated,
        "onUpdate:node:selected": onSetNodeSelected,
        "onUpdate:node:enabled": onToggleNodeDisabled,
        "onUpdate:node:name": onOpenRenameNodeModal,
        "onUpdate:node:parameters": onUpdateNodeParameters,
        "onUpdate:node:inputs": onUpdateNodeInputs,
        "onUpdate:node:outputs": onUpdateNodeOutputs,
        "onUpdate:logsOpen": _cache[2] || (_cache[2] = ($event) => unref(logsStore).toggleOpen($event)),
        "onUpdate:logs:inputOpen": unref(logsStore).toggleInputOpen,
        "onUpdate:logs:outputOpen": unref(logsStore).toggleOutputOpen,
        "onOpen:subWorkflow": onOpenSubWorkflow,
        "onClick:node": onClickNode,
        "onClick:node:add": onClickNodeAdd,
        "onRun:node": onRunWorkflowToNode,
        "onDelete:node": onDeleteNode,
        "onCreate:connection": onCreateConnection,
        "onCreate:connection:cancelled": onCreateConnectionCancelled,
        "onDelete:connection": onDeleteConnection,
        "onClick:connection:add": onClickConnectionAdd,
        "onClick:pane": onClickPane,
        "onCreate:node": onOpenNodeCreatorFromCanvas,
        "onCreate:sticky": onCreateSticky,
        "onDelete:nodes": onDeleteNodes,
        "onUpdate:nodes:enabled": onToggleNodesDisabled,
        "onUpdate:nodes:pin": onPinNodes,
        "onDuplicate:nodes": onDuplicateNodes,
        "onCopy:nodes": onCopyNodes,
        "onCut:nodes": onCutNodes,
        "onRun:workflow": _cache[3] || (_cache[3] = ($event) => unref(runEntireWorkflow)("main")),
        "onSave:workflow": onSaveWorkflow,
        "onCreate:workflow": onCreateWorkflow,
        "onViewport:change": onViewportChange,
        "onSelection:end": onSelectionEnd,
        onDragAndDrop,
        onTidyUp,
        onStartChat: _cache[4] || (_cache[4] = ($event) => unref(startChat)())
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode(unref(LazySetupWorkflowCredentialsButton), {
                class: normalizeClass(unref($style).setupCredentialsButtonWrapper)
              }, null, 8, ["class"])
            ]),
            _: 1
          })),
          !isCanvasReadOnly.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref($style).executionButtons)
          }, [
            isRunWorkflowButtonVisible.value ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              "waiting-for-webhook": isExecutionWaitingForWebhook.value,
              disabled: isExecutionDisabled.value,
              executing: isWorkflowRunning.value,
              onMouseenter: onRunWorkflowButtonMouseEnter,
              onMouseleave: onRunWorkflowButtonMouseLeave,
              onClick: _cache[0] || (_cache[0] = ($event) => unref(runEntireWorkflow)("main"))
            }, null, 8, ["waiting-for-webhook", "disabled", "executing"])) : createCommentVNode("", true),
            containsChatTriggerNodes.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              isLogsPanelOpen.value ? (openBlock(), createBlock(_component_CanvasChatButton, {
                key: 0,
                type: "tertiary",
                label: unref(i18n).baseText("chat.hide"),
                onClick: _cache[1] || (_cache[1] = ($event) => unref(logsStore).toggleOpen(false))
              }, null, 8, ["label"])) : (openBlock(), createBlock(KeyboardShortcutTooltip, {
                key: 1,
                label: unref(i18n).baseText("chat.open"),
                shortcut: { keys: ["c"] }
              }, {
                default: withCtx(() => [
                  createVNode(_component_CanvasChatButton, {
                    type: "primary",
                    label: unref(i18n).baseText("chat.open"),
                    onClick: onOpenChat
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["label"]))
            ], 64)) : createCommentVNode("", true),
            isStopExecutionButtonVisible.value ? (openBlock(), createBlock(_sfc_main$4, {
              key: 2,
              stopping: isStoppingExecution.value,
              onClick: onStopExecution
            }, null, 8, ["stopping"])) : createCommentVNode("", true),
            isStopWaitingForWebhookButtonVisible.value ? (openBlock(), createBlock(_sfc_main$3, {
              key: 3,
              onClick: onStopWaitingForWebhook
            })) : createCommentVNode("", true),
            unref(isClearExecutionButtonVisible) && !unref(settingsStore).isNewLogsEnabled ? (openBlock(), createBlock(_sfc_main$2, {
              key: 4,
              onClick: onClearExecutionData
            })) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true),
          isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout), {
            key: 1,
            theme: "warning",
            icon: "lock",
            class: normalizeClass(unref($style).readOnlyEnvironmentNotification)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.cantEditOrRun")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              !isCanvasReadOnly.value ? (openBlock(), createBlock(unref(LazyNodeCreation), {
                key: 0,
                "create-node-active": unref(nodeCreatorStore).isCreateNodeActive,
                "node-view-scale": viewportTransform.value.zoom,
                onToggleNodeCreator,
                onAddNodes: onAddNodesAndConnections
              }, null, 8, ["create-node-active", "node-view-scale"])) : createCommentVNode("", true)
            ]),
            _: 1
          })),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode(unref(LazyNodeDetailsView), {
                "workflow-object": unref(editableWorkflowObject),
                "read-only": isCanvasReadOnly.value,
                "is-production-execution-preview": isProductionExecutionPreview.value,
                renaming: false,
                onValueChanged: onRenameNode,
                onStopExecution,
                onSwitchSelectedNode: onSwitchActiveNode,
                onOpenConnectionNodeCreator: onOpenSelectiveNodeCreator,
                onSaveKeyboardShortcut: onSaveWorkflow
              }, null, 8, ["workflow-object", "read-only", "is-production-execution-preview"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["id", "workflow", "workflow-object", "fallback-nodes", "show-fallback-nodes", "event-bus", "read-only", "executing", "key-bindings", "onUpdate:logs:inputOpen", "onUpdate:logs:outputOpen"])) : createCommentVNode("", true);
    };
  }
});
const executionButtons = "_executionButtons_8gz1l_123";
const setupCredentialsButtonWrapper = "_setupCredentialsButtonWrapper_8gz1l_161";
const readOnlyEnvironmentNotification = "_readOnlyEnvironmentNotification_8gz1l_167";
const style0 = {
  executionButtons,
  setupCredentialsButtonWrapper,
  readOnlyEnvironmentNotification
};
const cssModules = {
  "$style": style0
};
const NodeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeView as default
};

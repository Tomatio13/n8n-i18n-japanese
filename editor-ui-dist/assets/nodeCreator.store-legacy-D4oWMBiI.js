;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-DcX1vy0l.js", "./truncate-legacy-D2_XDpGK.js", "./useTelemetry-legacy-Bu_8SoSm.js", "./constants-legacy-CLA25gM9.js", "./merge-legacy-CcVOuFTi.js", "./useExternalHooks-legacy-DAJrb39U.js", "./templates.store-legacy-CPyYqMqR.js", "./nodeIcon-legacy-DD6sIN5e.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, nextTick, ref, useI18n, useRouter, require__arrayMap, require_get, require_toString, useRoute, isPrebuiltAgentTemplateId, useSettingsStore, require__createCompounder, STORES, transformNodeType, getRagStarterWorkflowJson, useProjectsStore, getPrebuiltAgents, v4_default, updateCurrentUserSettings, useUIStore, getSampleWorkflowByTemplateId, useRootStore, require_upperFirst, subcategorizeItems, useCanvasStore, getThemedValue, prepareCommunityNodeDetailsViewStack, useNDVStore, useEvaluationStore, CanvasConnectionMode, flattenCreateElements, useUsersStore, getPreBuiltAgentsCalloutWithDivider, isValidNodeConnectionType, isAINode, usePostHog, isTutorialTemplateId, getTutorialTemplates, isValidCanvasConnectionMode, groupItemsInSections, useWorkflowsStore, extendItemsWithUUID, useNodeTypesStore, useTelemetry, getAiTemplatesCallout, isVueFlowConnection, SampleTemplates, defineStore, sortNodeCreateElements, searchNodes, DEFAULT_SUBCATEGORY, require__arrayIncludesWith, require__SetCache, AI_CATEGORY_RETRIEVERS, MERGE_NODE_TYPE, NODE_MIN_INPUT_ITEMS_COUNT, HTTP_REQUEST_NODE_TYPE, AI_CATEGORY_LANGUAGE_MODELS, AGGREGATE_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, AI_CATEGORY_TEXT_SPLITTERS, CUSTOM_API_CALL_KEY, AI_CATEGORY_MCP_NODES, PRE_BUILT_AGENTS_EXPERIMENT, AI_TRANSFORM_NODE_TYPE$1, AI_OTHERS_NODE_CREATOR_VIEW, AI_CODE_NODE_TYPE, AI_CATEGORY_MEMORY, PRE_BUILT_AGENTS_MODAL_KEY, MANUAL_TRIGGER_NODE_TYPE, AI_CATEGORY_CHAINS, AI_CATEGORY_DOCUMENT_LOADERS, WEBHOOK_NODE_TYPE, require__baseFlatten, IF_NODE_TYPE, AI_CATEGORY_EMBEDDING, XML_NODE_TYPE, LIMIT_NODE_TYPE, CHAT_TRIGGER_NODE_TYPE, CORE_NODES_CATEGORY, MARKDOWN_NODE_TYPE, SUMMARIZE_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, HTML_NODE_TYPE, AI_CATEGORY_TOOLS, isCommunityPackageName, AI_CATEGORY_ROOT_NODES, AI_CATEGORY_VECTOR_STORES, AI_UNCATEGORIZED_CATEGORY, AI_SUBCATEGORY, AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, getNodeInputs, SPLIT_IN_BATCHES_NODE_TYPE, OTHER_TRIGGER_NODES_SUBCATEGORY, FILTER_NODE_TYPE, DATETIME_NODE_TYPE, TRIGGER_NODE_CREATOR_VIEW, NodeConnectionTypes, require__arrayIncludes, FLOWS_CONTROL_SUBCATEGORY, CODE_NODE_TYPE, EVALUATION_TRIGGER_NODE_TYPE, SET_NODE_TYPE, EMAIL_IMAP_NODE_TYPE, NODE_CREATOR_OPEN_SOURCES, AI_CATEGORY_AGENTS, require__cacheHas, SCHEDULE_TRIGGER_NODE_TYPE, TEMPLATE_CATEGORY_AI, VIEWS, HITL_SUBCATEGORY, CONVERT_TO_FILE_NODE_TYPE, REMOVE_DUPLICATES_NODE_TYPE, CRYPTO_NODE_TYPE, EMAIL_SEND_NODE_TYPE, AI_NODE_CREATOR_VIEW, HUMAN_IN_THE_LOOP_CATEGORY, AI_TRANSFORM_NODE_TYPE, RSS_READ_NODE_TYPE, REGULAR_NODE_CREATOR_VIEW, HELPERS_SUBCATEGORY, COMPRESSION_NODE_TYPE, TRANSFORM_DATA_SUBCATEGORY, EDIT_IMAGE_NODE_TYPE, SPLIT_OUT_NODE_TYPE, EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, EXTRACT_FROM_FILE_NODE_TYPE, AI_CATEGORY_OUTPUTPARSER, require__baseUnary, require__baseRest, require_isArrayLikeObject, useExternalHooks, useTemplatesStore, getNodeIconSource, require__baseDifference, require_difference, require_capitalize, require_camelCase, import_camelCase, KEYBOARD_ID_ATTR, WATCHED_KEYS, useKeyboardNavigation, __virtual_node_popularity_data_default, import_difference, nodePopularityMap, useViewStacks, import_get, useNodeCreatorStore;
    //#endregion
    //#region src/app/composables/useCalloutHelpers.ts
    function useCalloutHelpers() {
      const route = useRoute();
      const router = useRouter();
      const telemetry = useTelemetry();
      const postHog = usePostHog();
      const i18n = useI18n();
      const rootStore = useRootStore();
      const workflowsStore = useWorkflowsStore();
      const usersStore = useUsersStore();
      const ndvStore = useNDVStore();
      const nodeCreatorStore = useNodeCreatorStore();
      const viewStacks = useViewStacks();
      const nodeTypesStore = useNodeTypesStore();
      const uiStore = useUIStore();
      const projectsStore = useProjectsStore();
      const isRagStarterCalloutVisible = computed(() => {
        const template = getRagStarterWorkflowJson();
        const routeTemplateId = route.query.templateId;
        const workflowObject = workflowsStore.workflowObject;
        const workflow = workflowsStore.getWorkflowById(workflowObject.id);
        if ((routeTemplateId ?? workflow?.meta?.templateId) === template.meta.templateId) return false;
        return true;
      });
      const getPreBuiltAgentNodeCreatorItems = () => {
        return getPrebuiltAgents().map(template => {
          return {
            key: template.template.meta.templateId,
            type: "openTemplate",
            properties: {
              templateId: template.template.meta.templateId,
              title: template.name,
              description: template.description,
              nodes: template.nodes.flatMap(node => {
                const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
                if (!nodeType) return [];
                return nodeType;
              })
            }
          };
        });
      };
      const getTutorialTemplatesNodeCreatorItems = () => {
        return getTutorialTemplates().map(template => {
          return {
            key: template.template.meta.templateId,
            type: "openTemplate",
            properties: {
              templateId: template.template.meta.templateId,
              title: template.name,
              description: template.description,
              nodes: template.nodes.flatMap(node => {
                const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
                if (!nodeType) return [];
                return nodeType;
              })
            }
          };
        });
      };
      const openPreBuiltAgentsModal = async source => {
        telemetry.track("User opened pre-built Agents collection", {
          source,
          node_type: null,
          section: null
        });
        await nodeTypesStore.loadNodeTypesIfNotLoaded();
        uiStore.openModal(PRE_BUILT_AGENTS_MODAL_KEY);
      };
      const openPreBuiltAgentsCollection = async options => {
        telemetry.track("User opened pre-built Agents collection", {
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });
        await nodeTypesStore.loadNodeTypesIfNotLoaded();
        const items = getPreBuiltAgentNodeCreatorItems();
        ndvStore.unsetActiveNodeName();
        nodeCreatorStore.setNodeCreatorState({
          source: NODE_CREATOR_OPEN_SOURCES.TEMPLATES_CALLOUT,
          createNodeActive: true,
          nodeCreatorView: void 0,
          connectionType: void 0
        });
        await nextTick();
        viewStacks.pushViewStack({
          title: i18n.baseText("nodeCreator.preBuiltAgents.title"),
          rootView: REGULAR_NODE_CREATOR_VIEW,
          activeIndex: 0,
          transitionDirection: "in",
          hasSearch: false,
          preventBack: false,
          items,
          baselineItems: items,
          mode: "nodes",
          hideActions: false
        }, {
          resetStacks: options.resetStacks ?? false
        });
      };
      const openSampleWorkflowTemplate = (templateId, options) => {
        if (templateId === SampleTemplates.RagStarterTemplate) telemetry.track("User clicked on RAG callout", {
          node_type: options.telemetry.nodeType ?? null
        });else if (isPrebuiltAgentTemplateId(templateId)) telemetry.track("User inserted pre-built Agent", {
          template: templateId,
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });else if (isTutorialTemplateId(templateId)) telemetry.track("User inserted tutorial template", {
          template: templateId,
          source: options.telemetry.source,
          node_type: options.telemetry.nodeType ?? null,
          section: options.telemetry.section ?? null
        });
        const template = getSampleWorkflowByTemplateId(templateId);
        if (!template) return;
        const {
          href
        } = router.resolve({
          name: VIEWS.TEMPLATE_IMPORT,
          params: {
            id: template.meta.templateId
          },
          query: {
            fromJson: "true",
            parentFolderId: route.params.folderId,
            projectId: projectsStore.currentProjectId
          }
        });
        window.open(href, "_blank");
      };
      const isPreBuiltAgentsExperimentEnabled = computed(() => {
        return postHog.isVariantEnabled(PRE_BUILT_AGENTS_EXPERIMENT.name, PRE_BUILT_AGENTS_EXPERIMENT.variant);
      });
      const isPreBuiltAgentsCalloutVisible = computed(() => {
        return isPreBuiltAgentsExperimentEnabled.value;
      });
      const isCalloutDismissed = callout => {
        return usersStore.isCalloutDismissed(callout);
      };
      const dismissCallout = async callout => {
        usersStore.setCalloutDismissed(callout);
        await updateCurrentUserSettings(rootStore.restApiContext, {
          dismissedCallouts: {
            ...usersStore.currentUser?.settings?.dismissedCallouts,
            [callout]: true
          }
        });
      };
      return {
        openSampleWorkflowTemplate,
        openPreBuiltAgentsModal,
        openPreBuiltAgentsCollection,
        getPreBuiltAgentNodeCreatorItems,
        getTutorialTemplatesNodeCreatorItems,
        isRagStarterCalloutVisible,
        isPreBuiltAgentsCalloutVisible,
        isCalloutDismissed,
        dismissCallout
      };
    }

    //#endregion
    //#region src/features/shared/nodeCreator/views/viewsData.ts

    function getNodeView(node) {
      return {
        key: node.name,
        type: "node",
        properties: {
          group: [],
          name: node.name,
          displayName: node.displayName,
          title: node.displayName,
          description: node.description,
          icon: node.icon,
          iconUrl: node.iconUrl
        }
      };
    }
    function getAiNodesBySubcategory(nodes, subcategory) {
      return nodes.filter(node => !node.hidden && node.codex?.subcategories?.["AI"]?.includes(subcategory)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
    }
    function getEvaluationNode(nodeTypesStore, isEvaluationVariantEnabled) {
      const evaluationNodeStore = nodeTypesStore.getNodeType("n8n-nodes-base.evaluation");
      if (!isEvaluationVariantEnabled || !evaluationNodeStore) return [];
      const evaluationNode = getNodeView(evaluationNodeStore);
      return [{
        ...evaluationNode,
        properties: {
          ...evaluationNode.properties,
          defaults: {
            name: "Evaluation",
            color: "#c3c9d5"
          }
        }
      }];
    }
    function AIView(_nodes) {
      const i18n = useI18n();
      const nodeTypesStore = useNodeTypesStore();
      const templatesStore = useTemplatesStore();
      const evaluationStore = useEvaluationStore();
      const calloutHelpers = useCalloutHelpers();
      const isEvaluationEnabled = evaluationStore.isEvaluationEnabled;
      const evaluationNode = getEvaluationNode(nodeTypesStore, isEvaluationEnabled);
      const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
      const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
      const websiteCategoryURLParams = templatesStore.websiteTemplateRepositoryParameters;
      websiteCategoryURLParams.append("utm_user_role", "AdvancedAI");
      const aiTemplatesURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams, TEMPLATE_CATEGORY_AI);
      const askAiEnabled = useSettingsStore().isAskAiEnabled;
      const aiTransformNode = nodeTypesStore.getNodeType(AI_TRANSFORM_NODE_TYPE$1);
      const transformNode = askAiEnabled && aiTransformNode ? [getNodeView(aiTransformNode)] : [];
      const callouts = !calloutHelpers.isPreBuiltAgentsCalloutVisible.value ? [getAiTemplatesCallout(aiTemplatesURL)] : [getPreBuiltAgentsCalloutWithDivider()];
      return {
        value: "AI",
        title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
        subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
        items: [...callouts, ...agentNodes, ...chainNodes, ...transformNode, ...evaluationNode, {
          key: AI_OTHERS_NODE_CREATOR_VIEW,
          type: "view",
          properties: {
            title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
            icon: "robot",
            description: i18n.baseText("nodeCreator.aiPanel.aiOtherNodesDescription")
          }
        }]
      };
    }
    function AINodesView(_nodes) {
      const i18n = useI18n();
      function getAISubcategoryProperties(nodeConnectionType) {
        return {
          connectionType: nodeConnectionType,
          iconProps: {
            color: `var(--node-type-${nodeConnectionType}-color)`
          },
          panelClass: `nodes-list-panel-${nodeConnectionType}`
        };
      }
      function getSubcategoryInfo(subcategory) {
        const localeKey = `nodeCreator.subcategoryInfos.${(0, import_camelCase.default)(subcategory)}`;
        const info = i18n.baseText(localeKey);
        if (info === localeKey) return void 0;
        return info;
      }
      return {
        value: AI_OTHERS_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
        subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
        items: [{
          key: AI_CATEGORY_DOCUMENT_LOADERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_DOCUMENT_LOADERS,
            info: getSubcategoryInfo(AI_CATEGORY_DOCUMENT_LOADERS),
            icon: "file-input",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiDocument)
          }
        }, {
          key: AI_CATEGORY_LANGUAGE_MODELS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_LANGUAGE_MODELS,
            info: getSubcategoryInfo(AI_CATEGORY_LANGUAGE_MODELS),
            icon: "language",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiLanguageModel)
          }
        }, {
          key: AI_CATEGORY_MEMORY,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_MEMORY,
            info: getSubcategoryInfo(AI_CATEGORY_MEMORY),
            icon: "brain",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiMemory)
          }
        }, {
          key: AI_CATEGORY_OUTPUTPARSER,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_OUTPUTPARSER,
            info: getSubcategoryInfo(AI_CATEGORY_OUTPUTPARSER),
            icon: "list",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiOutputParser)
          }
        }, {
          key: AI_CATEGORY_RETRIEVERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_RETRIEVERS,
            info: getSubcategoryInfo(AI_CATEGORY_RETRIEVERS),
            icon: "search",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiRetriever)
          }
        }, {
          key: AI_CATEGORY_TEXT_SPLITTERS,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_TEXT_SPLITTERS,
            info: getSubcategoryInfo(AI_CATEGORY_TEXT_SPLITTERS),
            icon: "grip-lines-vertical",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiTextSplitter)
          }
        }, {
          type: "subcategory",
          key: AI_CATEGORY_TOOLS,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: AI_CATEGORY_TOOLS,
            info: getSubcategoryInfo(AI_CATEGORY_TOOLS),
            icon: "tools",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiTool),
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE]
            }]
          }
        }, {
          key: AI_CATEGORY_EMBEDDING,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_EMBEDDING,
            info: getSubcategoryInfo(AI_CATEGORY_EMBEDDING),
            icon: "vector-square",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiEmbedding)
          }
        }, {
          key: AI_CATEGORY_VECTOR_STORES,
          type: "subcategory",
          properties: {
            title: AI_CATEGORY_VECTOR_STORES,
            info: getSubcategoryInfo(AI_CATEGORY_VECTOR_STORES),
            icon: "waypoints",
            ...getAISubcategoryProperties(NodeConnectionTypes.AiVectorStore)
          }
        }, {
          key: AI_UNCATEGORIZED_CATEGORY,
          type: "subcategory",
          properties: {
            title: AI_UNCATEGORIZED_CATEGORY,
            icon: "code"
          }
        }]
      };
    }
    function TriggerView() {
      const i18n = useI18n();
      const evaluationTriggerNode = useEvaluationStore().isEvaluationEnabled ? {
        key: EVALUATION_TRIGGER_NODE_TYPE,
        type: "node",
        category: [CORE_NODES_CATEGORY],
        properties: {
          group: [],
          name: EVALUATION_TRIGGER_NODE_TYPE,
          displayName: "When running evaluation",
          description: "Run a dataset through your workflow to test performance",
          icon: "fa:check-double",
          defaults: {
            name: "Evaluation",
            color: "#c3c9d5"
          }
        }
      } : null;
      return {
        value: TRIGGER_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.triggerHelperPanel.selectATrigger"),
        subtitle: i18n.baseText("nodeCreator.triggerHelperPanel.selectATriggerDescription"),
        items: [{
          key: MANUAL_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: MANUAL_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDescription"),
            icon: "fa:mouse-pointer"
          }
        }, {
          key: "*",
          type: "subcategory",
          properties: {
            forceIncludeNodes: [WEBHOOK_NODE_TYPE, EMAIL_IMAP_NODE_TYPE],
            title: "App Trigger Nodes",
            icon: "satellite-dish"
          }
        }, {
          key: SCHEDULE_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: SCHEDULE_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDescription"),
            icon: "fa:clock"
          }
        }, {
          key: WEBHOOK_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: WEBHOOK_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDescription"),
            iconData: {
              type: "file",
              fileBuffer: "/static/webhook-icon.svg"
            }
          }
        }, {
          key: FORM_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: FORM_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDescription"),
            iconData: {
              type: "file",
              fileBuffer: "/static/form-grey.svg"
            }
          }
        }, {
          key: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDescription"),
            icon: "fa:sign-out-alt"
          }
        }, {
          key: CHAT_TRIGGER_NODE_TYPE,
          type: "node",
          category: [CORE_NODES_CATEGORY],
          properties: {
            group: [],
            name: CHAT_TRIGGER_NODE_TYPE,
            displayName: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDisplayName"),
            description: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDescription"),
            icon: "fa:comments"
          }
        }, ...(evaluationTriggerNode ? [evaluationTriggerNode] : []), {
          type: "subcategory",
          key: OTHER_TRIGGER_NODES_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: OTHER_TRIGGER_NODES_SUBCATEGORY,
            icon: "folder-open"
          }
        }]
      };
    }
    function RegularView(nodes) {
      const i18n = useI18n();
      const popularItemsSubcategory = [SET_NODE_TYPE, CODE_NODE_TYPE, DATETIME_NODE_TYPE, AI_TRANSFORM_NODE_TYPE$1];
      const getSendAndWaitNodes = nodes$1 => {
        return (nodes$1 ?? []).filter(node => node.codex?.categories?.includes(HUMAN_IN_THE_LOOP_CATEGORY)).map(node => node.name);
      };
      const view = {
        value: REGULAR_NODE_CREATOR_VIEW,
        title: i18n.baseText("nodeCreator.triggerHelperPanel.whatHappensNext"),
        items: [{
          key: "*",
          type: "subcategory",
          properties: {
            title: "App Regular Nodes",
            icon: "globe",
            forceIncludeNodes: [RSS_READ_NODE_TYPE, EMAIL_SEND_NODE_TYPE]
          }
        }, {
          type: "subcategory",
          key: TRANSFORM_DATA_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: TRANSFORM_DATA_SUBCATEGORY,
            icon: "pen",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: popularItemsSubcategory
            }, {
              key: "addOrRemove",
              title: i18n.baseText("nodeCreator.sectionNames.transform.addOrRemove"),
              items: [FILTER_NODE_TYPE, REMOVE_DUPLICATES_NODE_TYPE, SPLIT_OUT_NODE_TYPE, LIMIT_NODE_TYPE]
            }, {
              key: "combine",
              title: i18n.baseText("nodeCreator.sectionNames.transform.combine"),
              items: [SUMMARIZE_NODE_TYPE, AGGREGATE_NODE_TYPE, MERGE_NODE_TYPE]
            }, {
              key: "convert",
              title: i18n.baseText("nodeCreator.sectionNames.transform.convert"),
              items: [HTML_NODE_TYPE, MARKDOWN_NODE_TYPE, XML_NODE_TYPE, CRYPTO_NODE_TYPE, EXTRACT_FROM_FILE_NODE_TYPE, CONVERT_TO_FILE_NODE_TYPE, COMPRESSION_NODE_TYPE, EDIT_IMAGE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: FLOWS_CONTROL_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: FLOWS_CONTROL_SUBCATEGORY,
            icon: "git-branch",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [FILTER_NODE_TYPE, IF_NODE_TYPE, SPLIT_IN_BATCHES_NODE_TYPE, MERGE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: HELPERS_SUBCATEGORY,
          category: CORE_NODES_CATEGORY,
          properties: {
            title: HELPERS_SUBCATEGORY,
            icon: "toolbox",
            sections: [{
              key: "popular",
              title: i18n.baseText("nodeCreator.sectionNames.popular"),
              items: [HTTP_REQUEST_NODE_TYPE, WEBHOOK_NODE_TYPE, CODE_NODE_TYPE]
            }]
          }
        }, {
          type: "subcategory",
          key: HITL_SUBCATEGORY,
          category: HUMAN_IN_THE_LOOP_CATEGORY,
          properties: {
            title: HITL_SUBCATEGORY,
            icon: "user-check",
            sections: [{
              key: "sendAndWait",
              title: i18n.baseText("nodeCreator.sectionNames.sendAndWait"),
              items: getSendAndWaitNodes(nodes)
            }]
          }
        }]
      };
      if ((nodes ?? []).some(node => node.codex?.categories?.includes("AI"))) view.items.unshift({
        key: "AI",
        type: "view",
        properties: {
          title: i18n.baseText("nodeCreator.aiPanel.langchainAiNodes"),
          icon: "robot",
          description: i18n.baseText("nodeCreator.aiPanel.nodesForAi"),
          borderless: true
        }
      });
      view.items.push({
        key: TRIGGER_NODE_CREATOR_VIEW,
        type: "view",
        properties: {
          title: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTrigger"),
          icon: "bolt-filled",
          description: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTriggerDescription")
        }
      });
      return view;
    }

    //#endregion
    //#region src/features/shared/nodeCreator/composables/useKeyboardNavigation.ts

    //#endregion
    //#region src/features/workflows/canvas/canvas.utils.ts
    /**
    * Maps multiple legacy n8n connections to VueFlow connections
    */
    function mapLegacyConnectionsToCanvasConnections(legacyConnections, nodes) {
      const mappedConnections = [];
      Object.keys(legacyConnections).forEach(fromNodeName => {
        const fromId = nodes.find(node => node.name === fromNodeName)?.id ?? "";
        Object.keys(legacyConnections[fromNodeName]).forEach(fromConnectionType => {
          legacyConnections[fromNodeName][fromConnectionType]?.forEach((toPorts, fromIndex) => {
            toPorts?.forEach(toPort => {
              const toNodeName = toPort.node;
              const toId = nodes.find(node => node.name === toNodeName)?.id ?? "";
              const toConnectionType = toPort.type;
              const toIndex = toPort.index;
              const sourceHandle = createCanvasConnectionHandleString({
                mode: CanvasConnectionMode.Output,
                type: fromConnectionType,
                index: fromIndex
              });
              const targetHandle = createCanvasConnectionHandleString({
                mode: CanvasConnectionMode.Input,
                type: toConnectionType,
                index: toIndex
              });
              const connectionId = createCanvasConnectionId({
                source: fromId,
                sourceHandle,
                target: toId,
                targetHandle
              });
              if (fromId && toId) mappedConnections.push({
                id: connectionId,
                source: fromId,
                target: toId,
                sourceHandle,
                targetHandle,
                data: {
                  source: {
                    node: fromNodeName,
                    index: fromIndex,
                    type: fromConnectionType
                  },
                  target: {
                    node: toNodeName,
                    index: toIndex,
                    type: toConnectionType
                  }
                }
              });
            });
          });
        });
      });
      return mappedConnections;
    }
    /**
    * Maps a single legacy n8n connection to a VueFlow connection
    */
    function mapLegacyConnectionToCanvasConnection(sourceNode, targetNode, legacyConnection) {
      return {
        source: sourceNode.id,
        sourceHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Output,
          type: legacyConnection[0].type,
          index: legacyConnection[0].index
        }),
        target: targetNode.id,
        targetHandle: createCanvasConnectionHandleString({
          mode: CanvasConnectionMode.Input,
          type: legacyConnection[1].type,
          index: legacyConnection[1].index
        })
      };
    }
    /**
    * Parses a canvas connection handle string into its parts:
    * - mode
    * - type
    * - index
    */
    function parseCanvasConnectionHandleString(handle) {
      const [mode, type, index] = (handle ?? "").split("/");
      const resolvedMode = isValidCanvasConnectionMode(mode) ? mode : CanvasConnectionMode.Output;
      const resolvedType = isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main;
      let resolvedIndex = parseInt(index, 10);
      if (isNaN(resolvedIndex)) resolvedIndex = 0;
      return {
        mode: resolvedMode,
        type: resolvedType,
        index: resolvedIndex
      };
    }
    /**
    * Creates a canvas connection handle string from its parts
    */
    function createCanvasConnectionHandleString({
      mode,
      type = NodeConnectionTypes.Main,
      index = 0
    }) {
      return `${mode}/${type}/${index}`;
    }
    /**
    * Creates a canvas connection ID from a connection
    */
    function createCanvasConnectionId(connection) {
      return `[${connection.source}/${connection.sourceHandle}][${connection.target}/${connection.targetHandle}]`;
    }
    /**
    * Maps a VueFlow connection to a legacy n8n connection
    */
    function mapCanvasConnectionToLegacyConnection(sourceNode, targetNode, connection) {
      const sourceNodeName = sourceNode?.name ?? "";
      const {
        type: sourceType,
        index: sourceIndex
      } = parseCanvasConnectionHandleString(connection.sourceHandle);
      const targetNodeName = targetNode?.name ?? "";
      const {
        type: targetType,
        index: targetIndex
      } = parseCanvasConnectionHandleString(connection.targetHandle);
      return [{
        node: sourceNodeName,
        type: sourceType,
        index: sourceIndex
      }, {
        node: targetNodeName,
        type: targetType,
        index: targetIndex
      }];
    }
    /**
    * Maps legacy n8n node inputs to VueFlow connection handles
    */
    function mapLegacyEndpointsToCanvasConnectionPort(endpoints, endpointNames = []) {
      if (typeof endpoints === "string") {
        console.warn("Node endpoints have not been evaluated", endpoints);
        return [];
      }
      return endpoints.map((endpoint, endpointIndex) => {
        const typeValue = typeof endpoint === "string" ? endpoint : endpoint.type;
        const type = isValidNodeConnectionType(typeValue) ? typeValue : NodeConnectionTypes.Main;
        const label = typeof endpoint === "string" ? endpointNames[endpointIndex] : endpoint.displayName;
        const index = endpoints.slice(0, endpointIndex + 1).filter(e => (typeof e === "string" ? e : e.type) === type).length - 1;
        const required = typeof endpoint === "string" ? false : endpoint.required;
        const maxConnections = typeof endpoint === "string" ? void 0 : endpoint.maxConnections;
        return {
          type,
          index,
          label,
          ...(maxConnections ? {
            maxConnections
          } : {}),
          ...(required ? {
            required
          } : {})
        };
      });
    }
    /**
    * Checks if two bounding boxes overlap
    */
    function checkOverlap(node1, node2) {
      return !(node1.x + node1.width <= node2.x || node2.x + node2.width <= node1.x || node1.y + node1.height <= node2.y || node2.y + node2.height <= node1.y);
    }
    /**
    * Inserts spacers between endpoints to visually separate them
    */
    function insertSpacersBetweenEndpoints(endpoints, requiredEndpointsCount = 0) {
      const endpointsWithSpacers = [...endpoints];
      const optionalNonMainInputsCount = endpointsWithSpacers.length - requiredEndpointsCount;
      const spacerCount = 4 - requiredEndpointsCount - optionalNonMainInputsCount;
      if (endpointsWithSpacers.length < 4) for (let i = 0; i < spacerCount; i++) endpointsWithSpacers.splice(requiredEndpointsCount + i, 0, null);
      return endpointsWithSpacers;
    }
    function shouldIgnoreCanvasShortcut(el) {
      return ["INPUT", "TEXTAREA"].includes(el.tagName) || el.closest("[contenteditable]") !== null || el.closest(".ignore-key-press-canvas") !== null;
    }

    //#endregion
    //#region src/features/shared/nodeCreator/nodeCreator.store.ts
    _export({
      _: useCalloutHelpers,
      a: mapCanvasConnectionToLegacyConnection,
      c: mapLegacyEndpointsToCanvasConnectionPort,
      g: TriggerView,
      h: RegularView,
      i: insertSpacersBetweenEndpoints,
      l: parseCanvasConnectionHandleString,
      m: AIView,
      n: checkOverlap,
      o: mapLegacyConnectionToCanvasConnection,
      p: AINodesView,
      r: createCanvasConnectionHandleString,
      s: mapLegacyConnectionsToCanvasConnections,
      u: shouldIgnoreCanvasShortcut
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        require__arrayMap = _truncateLegacy00hJs.c;
        require_get = _truncateLegacy00hJs.r;
        require_toString = _truncateLegacy00hJs.s;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00FJs) {
        isPrebuiltAgentTemplateId = _useTelemetryLegacy00FJs.At;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        require__createCompounder = _useTelemetryLegacy00FJs.Bt;
        STORES = _useTelemetryLegacy00FJs.Cc;
        transformNodeType = _useTelemetryLegacy00FJs.Ct;
        getRagStarterWorkflowJson = _useTelemetryLegacy00FJs.Dt;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        getPrebuiltAgents = _useTelemetryLegacy00FJs.Et;
        v4_default = _useTelemetryLegacy00FJs.Io;
        updateCurrentUserSettings = _useTelemetryLegacy00FJs.Ko;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        getSampleWorkflowByTemplateId = _useTelemetryLegacy00FJs.Ot;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        require_upperFirst = _useTelemetryLegacy00FJs.Rt;
        subcategorizeItems = _useTelemetryLegacy00FJs.St;
        useCanvasStore = _useTelemetryLegacy00FJs.Un;
        getThemedValue = _useTelemetryLegacy00FJs.Zr;
        prepareCommunityNodeDetailsViewStack = _useTelemetryLegacy00FJs._t;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useEvaluationStore = _useTelemetryLegacy00FJs.at;
        CanvasConnectionMode = _useTelemetryLegacy00FJs.br;
        flattenCreateElements = _useTelemetryLegacy00FJs.ct;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        getPreBuiltAgentsCalloutWithDivider = _useTelemetryLegacy00FJs.ft;
        isValidNodeConnectionType = _useTelemetryLegacy00FJs.gr;
        isAINode = _useTelemetryLegacy00FJs.ht;
        usePostHog = _useTelemetryLegacy00FJs.i;
        isTutorialTemplateId = _useTelemetryLegacy00FJs.jt;
        getTutorialTemplates = _useTelemetryLegacy00FJs.kt;
        isValidCanvasConnectionMode = _useTelemetryLegacy00FJs.mr;
        groupItemsInSections = _useTelemetryLegacy00FJs.mt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        extendItemsWithUUID = _useTelemetryLegacy00FJs.ot;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        getAiTemplatesCallout = _useTelemetryLegacy00FJs.ut;
        isVueFlowConnection = _useTelemetryLegacy00FJs.vr;
        SampleTemplates = _useTelemetryLegacy00FJs.wt;
        defineStore = _useTelemetryLegacy00FJs.xc;
        sortNodeCreateElements = _useTelemetryLegacy00FJs.xt;
        searchNodes = _useTelemetryLegacy00FJs.yt;
      }, function (_constantsLegacy00NJs) {
        DEFAULT_SUBCATEGORY = _constantsLegacy00NJs.$a;
        require__arrayIncludesWith = _constantsLegacy00NJs.$r;
        require__SetCache = _constantsLegacy00NJs.Aa;
        AI_CATEGORY_RETRIEVERS = _constantsLegacy00NJs.Ba;
        MERGE_NODE_TYPE = _constantsLegacy00NJs.Bt;
        NODE_MIN_INPUT_ITEMS_COUNT = _constantsLegacy00NJs.Cr;
        HTTP_REQUEST_NODE_TYPE = _constantsLegacy00NJs.Et;
        AI_CATEGORY_LANGUAGE_MODELS = _constantsLegacy00NJs.Fa;
        AGGREGATE_NODE_TYPE = _constantsLegacy00NJs.G;
        AI_CODE_TOOL_LANGCHAIN_NODE_TYPE = _constantsLegacy00NJs.Ga;
        AI_CATEGORY_TEXT_SPLITTERS = _constantsLegacy00NJs.Ha;
        CUSTOM_API_CALL_KEY = _constantsLegacy00NJs.I;
        AI_CATEGORY_MCP_NODES = _constantsLegacy00NJs.Ia;
        PRE_BUILT_AGENTS_EXPERIMENT = _constantsLegacy00NJs.Is;
        AI_TRANSFORM_NODE_TYPE$1 = _constantsLegacy00NJs.J;
        AI_OTHERS_NODE_CREATOR_VIEW = _constantsLegacy00NJs.Ja;
        AI_CODE_NODE_TYPE = _constantsLegacy00NJs.K;
        AI_CATEGORY_MEMORY = _constantsLegacy00NJs.La;
        PRE_BUILT_AGENTS_MODAL_KEY = _constantsLegacy00NJs.Lo;
        MANUAL_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Lt;
        AI_CATEGORY_CHAINS = _constantsLegacy00NJs.Ma;
        AI_CATEGORY_DOCUMENT_LOADERS = _constantsLegacy00NJs.Na;
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        require__baseFlatten = _constantsLegacy00NJs.Or;
        IF_NODE_TYPE = _constantsLegacy00NJs.Ot;
        AI_CATEGORY_EMBEDDING = _constantsLegacy00NJs.Pa;
        XML_NODE_TYPE = _constantsLegacy00NJs.Pn;
        LIMIT_NODE_TYPE = _constantsLegacy00NJs.Pt;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        CORE_NODES_CATEGORY = _constantsLegacy00NJs.Qa;
        MARKDOWN_NODE_TYPE = _constantsLegacy00NJs.Rt;
        SUMMARIZE_NODE_TYPE = _constantsLegacy00NJs.Sn;
        FORM_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.St;
        HTML_NODE_TYPE = _constantsLegacy00NJs.Tt;
        AI_CATEGORY_TOOLS = _constantsLegacy00NJs.Ua;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        AI_CATEGORY_ROOT_NODES = _constantsLegacy00NJs.Va;
        AI_CATEGORY_VECTOR_STORES = _constantsLegacy00NJs.Wa;
        AI_UNCATEGORIZED_CATEGORY = _constantsLegacy00NJs.Xa;
        AI_SUBCATEGORY = _constantsLegacy00NJs.Ya;
        AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE = _constantsLegacy00NJs.Za;
        getNodeInputs = _constantsLegacy00NJs._i;
        SPLIT_IN_BATCHES_NODE_TYPE = _constantsLegacy00NJs._n;
        OTHER_TRIGGER_NODES_SUBCATEGORY = _constantsLegacy00NJs.ao;
        FILTER_NODE_TYPE = _constantsLegacy00NJs.bt;
        DATETIME_NODE_TYPE = _constantsLegacy00NJs.ct;
        TRIGGER_NODE_CREATOR_VIEW = _constantsLegacy00NJs.do;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        require__arrayIncludes = _constantsLegacy00NJs.ei;
        FLOWS_CONTROL_SUBCATEGORY = _constantsLegacy00NJs.eo;
        CODE_NODE_TYPE = _constantsLegacy00NJs.et;
        EVALUATION_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.fa;
        SET_NODE_TYPE = _constantsLegacy00NJs.fn;
        EMAIL_IMAP_NODE_TYPE = _constantsLegacy00NJs.ft;
        NODE_CREATOR_OPEN_SOURCES = _constantsLegacy00NJs.io;
        AI_CATEGORY_AGENTS = _constantsLegacy00NJs.ja;
        require__cacheHas = _constantsLegacy00NJs.ka;
        SCHEDULE_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.ln;
        TEMPLATE_CATEGORY_AI = _constantsLegacy00NJs.lo;
        VIEWS = _constantsLegacy00NJs.mo;
        HITL_SUBCATEGORY = _constantsLegacy00NJs.no;
        CONVERT_TO_FILE_NODE_TYPE = _constantsLegacy00NJs.nt;
        REMOVE_DUPLICATES_NODE_TYPE = _constantsLegacy00NJs.on;
        CRYPTO_NODE_TYPE = _constantsLegacy00NJs.ot;
        EMAIL_SEND_NODE_TYPE = _constantsLegacy00NJs.pt;
        AI_NODE_CREATOR_VIEW = _constantsLegacy00NJs.qa;
        HUMAN_IN_THE_LOOP_CATEGORY = _constantsLegacy00NJs.ro;
        AI_TRANSFORM_NODE_TYPE = _constantsLegacy00NJs.sa;
        RSS_READ_NODE_TYPE = _constantsLegacy00NJs.sn;
        REGULAR_NODE_CREATOR_VIEW = _constantsLegacy00NJs.so;
        HELPERS_SUBCATEGORY = _constantsLegacy00NJs.to;
        COMPRESSION_NODE_TYPE = _constantsLegacy00NJs.tt;
        TRANSFORM_DATA_SUBCATEGORY = _constantsLegacy00NJs.uo;
        EDIT_IMAGE_NODE_TYPE = _constantsLegacy00NJs.ut;
        SPLIT_OUT_NODE_TYPE = _constantsLegacy00NJs.vn;
        EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.vt;
        EXTRACT_FROM_FILE_NODE_TYPE = _constantsLegacy00NJs.yt;
        AI_CATEGORY_OUTPUTPARSER = _constantsLegacy00NJs.za;
      }, function (_mergeLegacy00PJs) {
        require__baseUnary = _mergeLegacy00PJs.T;
        require__baseRest = _mergeLegacy00PJs.r;
        require_isArrayLikeObject = _mergeLegacy00PJs.u;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_nodeIconLegacy01lJs) {
        getNodeIconSource = _nodeIconLegacy01lJs.t;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseDifference.js
        require__baseDifference = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseDifference.js": (exports, module) => {
            var SetCache = require__SetCache(),
              arrayIncludes = require__arrayIncludes(),
              arrayIncludesWith = require__arrayIncludesWith(),
              arrayMap = require__arrayMap(),
              baseUnary = require__baseUnary(),
              cacheHas = require__cacheHas();
            /** Used as the size to enable large array optimizations. */
            var LARGE_ARRAY_SIZE = 200;
            /**
            * The base implementation of methods like `_.difference` without support
            * for excluding multiple arrays or iteratee shorthands.
            *
            * @private
            * @param {Array} array The array to inspect.
            * @param {Array} values The values to exclude.
            * @param {Function} [iteratee] The iteratee invoked per element.
            * @param {Function} [comparator] The comparator invoked per element.
            * @returns {Array} Returns the new array of filtered values.
            */
            function baseDifference$1(array, values, iteratee, comparator) {
              var index = -1,
                includes = arrayIncludes,
                isCommon = true,
                length = array.length,
                result = [],
                valuesLength = values.length;
              if (!length) return result;
              if (iteratee) values = arrayMap(values, baseUnary(iteratee));
              if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
              } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
              }
              outer: while (++index < length) {
                var value = array[index],
                  computed$1 = iteratee == null ? value : iteratee(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed$1 === computed$1) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) if (values[valuesIndex] === computed$1) continue outer;
                  result.push(value);
                } else if (!includes(values, computed$1, comparator)) result.push(value);
              }
              return result;
            }
            module.exports = baseDifference$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js
        require_difference = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js": (exports, module) => {
            var baseDifference = require__baseDifference(),
              baseFlatten = require__baseFlatten(),
              baseRest = require__baseRest(),
              isArrayLikeObject = require_isArrayLikeObject();
            /**
            * Creates an array of `array` values not included in the other given arrays
            * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
            * for equality comparisons. The order and references of result values are
            * determined by the first array.
            *
            * **Note:** Unlike `_.pullAll`, this method returns a new array.
            *
            * @static
            * @memberOf _
            * @since 0.1.0
            * @category Array
            * @param {Array} array The array to inspect.
            * @param {...Array} [values] The values to exclude.
            * @returns {Array} Returns the new array of filtered values.
            * @see _.without, _.xor
            * @example
            *
            * _.difference([2, 1], [2, 3]);
            * // => [1]
            */
            var difference$1 = baseRest(function (array, values) {
              return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
            });
            module.exports = difference$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js
        _export("y", require_capitalize = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js": (exports, module) => {
            var toString = require_toString(),
              upperFirst = require_upperFirst();
            /**
            * Converts the first character of `string` to upper case and the remaining
            * to lower case.
            *
            * @static
            * @memberOf _
            * @since 3.0.0
            * @category String
            * @param {string} [string=''] The string to capitalize.
            * @returns {string} Returns the capitalized string.
            * @example
            *
            * _.capitalize('FRED');
            * // => 'Fred'
            */
            function capitalize$1(string) {
              return upperFirst(toString(string).toLowerCase());
            }
            module.exports = capitalize$1;
          }
        })); //#endregion
        //#region ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/camelCase.js
        _export("v", require_camelCase = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/camelCase.js": (exports, module) => {
            var capitalize = require_capitalize();
            /**
            * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
            *
            * @static
            * @memberOf _
            * @since 3.0.0
            * @category String
            * @param {string} [string=''] The string to convert.
            * @returns {string} Returns the camel cased string.
            * @example
            *
            * _.camelCase('Foo Bar');
            * // => 'fooBar'
            *
            * _.camelCase('--foo-bar--');
            * // => 'fooBar'
            *
            * _.camelCase('__FOO_BAR__');
            * // => 'fooBar'
            */
            var camelCase$1 = require__createCompounder()(function (result, word, index) {
              word = word.toLowerCase();
              return result + (index ? capitalize(word) : word);
            });
            module.exports = camelCase$1;
          }
        }));
        import_camelCase = /* @__PURE__ */__toESM(require_camelCase());
        KEYBOARD_ID_ATTR = "data-keyboard-nav-id";
        WATCHED_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "Escape", "Tab"];
        _export("f", useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
          const selectableItems = ref([]);
          const activeItemId = ref(null);
          const keysHooks = ref({});
          function shouldAllowNativeInputBehavior(target, key) {
            if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return false;
            const hasContent = target.value.length > 0;
            if (key === "ArrowLeft" && hasContent) return true;
            if (key === "ArrowRight" && hasContent) return !((target.selectionStart || 0) >= target.value.length);
            return false;
          }
          function getItemType(element) {
            return element?.getAttribute("data-keyboard-nav-type");
          }
          function getElementId(element) {
            return element?.getAttribute("data-keyboard-nav-id") || void 0;
          }
          async function refreshSelectableItems() {
            return await new Promise(resolve => {
              cleanupSelectableItems();
              setTimeout(() => {
                selectableItems.value = Array.from(document.querySelectorAll("[data-keyboard-nav-type]")).map(el => new WeakRef(el));
                resolve();
              }, 0);
            });
          }
          function executeKeyHooks(keyboardKey, activeItem) {
            Object.values(keysHooks.value).filter(hook => hook.keyboardKeys.includes(keyboardKey)).forEach(hook => {
              if (!activeItemId.value) return;
              if ((hook.condition === void 0 || hook.condition(getItemType(activeItem) || "", activeItemId.value)) && activeItemId.value) hook.handler(activeItemId.value, keyboardKey);
            });
          }
          async function onKeyDown(e) {
            if (e.target instanceof Element && e.target.classList.contains("ignore-key-press-node-creator")) return;
            const pressedKey = e.key;
            if (!WATCHED_KEYS.includes(pressedKey)) return;
            if (shouldAllowNativeInputBehavior(e.target, pressedKey)) return;
            e.preventDefault();
            e.stopPropagation();
            await refreshSelectableItems();
            const activeItemIndex = selectableItems.value.findIndex(item => getElementId(item?.deref()) === activeItemId.value);
            const activeItem = selectableItems.value[activeItemIndex]?.deref();
            const isArrowDown = pressedKey === "ArrowDown";
            const isArrowUp = pressedKey === "ArrowUp";
            if (!activeItem) return;
            if (isArrowDown) {
              const nextItemIndex = activeItemIndex < selectableItems.value.length - 1 ? activeItemIndex + 1 : 0;
              setActiveItem(selectableItems.value[nextItemIndex]?.deref());
            }
            if (isArrowUp) {
              const previousIndex = activeItemIndex > 0 ? activeItemIndex - 1 : selectableItems.value.length - 1;
              setActiveItem(selectableItems.value[previousIndex]?.deref());
            }
            executeKeyHooks(pressedKey, activeItem);
          }
          function setActiveItemId(id) {
            activeItemId.value = id;
          }
          function setActiveItem(item) {
            const itemId = getElementId(item);
            if (!itemId) return;
            setActiveItemId(itemId);
            if (item?.scrollIntoView) item?.scrollIntoView({
              block: "center"
            });
          }
          async function setActiveItemIndex(index) {
            await refreshSelectableItems();
            setActiveItem(selectableItems.value[index]?.deref());
          }
          function attachKeydownEvent() {
            document.addEventListener("keydown", onKeyDown, {
              capture: true
            });
          }
          function detachKeydownEvent() {
            cleanupSelectableItems();
            document.removeEventListener("keydown", onKeyDown, {
              capture: true
            });
          }
          function registerKeyHook(name, hook) {
            hook.keyboardKeys.forEach(keyboardKey => {
              if (WATCHED_KEYS.includes(keyboardKey)) keysHooks.value = {
                ...keysHooks.value,
                [name]: hook
              };else throw new Error(`Key ${keyboardKey} is not supported`);
            });
          }
          function cleanupSelectableItems() {
            selectableItems.value = [];
          }
          function getActiveItemIndex() {
            return selectableItems.value.findIndex(item => getElementId(item?.deref()) === activeItemId.value);
          }
          return {
            activeItemId,
            attachKeydownEvent,
            refreshSelectableItems,
            detachKeydownEvent,
            registerKeyHook,
            getActiveItemIndex,
            setActiveItemId,
            setActiveItemIndex
          };
        })); //#endregion
        //#region \0virtual:node-popularity-data
        __virtual_node_popularity_data_default = []; //#endregion
        //#region src/features/shared/nodeCreator/composables/useViewStacks.ts
        import_difference = /* @__PURE__ */__toESM(require_difference());
        nodePopularityMap = Object.values(__virtual_node_popularity_data_default).reduce((acc, node) => {
          return {
            ...acc,
            [node.id]: node.popularity * 100
          };
        }, {});
        _export("d", useViewStacks = defineStore("nodeCreatorViewStacks", () => {
          const nodeCreatorStore = useNodeCreatorStore();
          const {
            getActiveItemIndex
          } = useKeyboardNavigation();
          const i18n = useI18n();
          const settingsStore = useSettingsStore();
          const viewStacks = ref([]);
          const activeStackItems = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.baselineItems) return stack.items ? extendItemsWithUUID(stack.items) : [];
            if (stack.search && searchBaseItems.value) {
              let searchBase = searchBaseItems.value;
              const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
              if (searchBaseItems.value.length === 0) searchBase = flattenCreateElements(stack.baselineItems ?? []);
              if (!(isAiRootView(stack) || canvasHasAINodes) || ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)) searchBase = filterOutAiNodes(searchBase);
              const searchResults = extendItemsWithUUID(searchNodes(stack.search || "", searchBase, {
                popularity: nodePopularityMap
              }));
              const groupedNodes = groupIfAiNodes(searchResults, stack.title, false) ?? searchResults;
              stack.activeIndex = groupedNodes.some(node => node.type === "section") ? 1 : 0;
              return groupedNodes;
            }
            return extendItemsWithUUID(groupIfAiNodes(stack.baselineItems, stack.title, true));
          });
          const activeViewStack = computed(() => {
            const stack = getLastActiveStack();
            if (!stack) return {};
            const flatBaselineItems = flattenCreateElements(stack.baselineItems ?? []);
            return {
              ...stack,
              items: activeStackItems.value,
              hasSearch: flatBaselineItems.length > 8 || stack?.hasSearch
            };
          });
          const activeViewStackMode = computed(() => activeViewStack.value.mode ?? "Trigger");
          const searchBaseItems = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.searchItems) return [];
            return stack.searchItems.map(item => transformNodeType(item, stack.subcategory));
          });
          function isAiSubcategoryView(stack) {
            return stack.rootView === AI_OTHERS_NODE_CREATOR_VIEW;
          }
          function getLastActiveStack() {
            return viewStacks.value[viewStacks.value.length - 1];
          }
          function getAllNodeCreateElements() {
            return nodeCreatorStore.mergedNodes.map(item => transformNodeType(item));
          }
          const globalSearchItemsDiff = computed(() => {
            const stack = getLastActiveStack();
            if (!stack?.search || isAiSubcategoryView(stack)) return [];
            const allNodes = getAllNodeCreateElements();
            const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
            let globalSearchResult = extendItemsWithUUID(searchNodes(stack.search || "", filteredNodes, {
              popularity: nodePopularityMap
            }));
            if (isAiRootView(stack)) globalSearchResult = groupIfAiNodes(globalSearchResult, stack.title, false);
            return globalSearchResult.filter(item => {
              return !activeStackItems.value.find(activeItem => {
                if (activeItem.type === "section") return activeItem.children.some(sectionItem => sectionItem.key === item.key);
                return activeItem.key === item.key;
              });
            }).filter(item => {
              if (item.type === "section") return item.children.some(child => activeStackItems.value.some(filteredItem => filteredItem.key === child.key));
              return true;
            });
          });
          const itemsBySubcategory = computed(() => subcategorizeItems(nodeCreatorStore.mergedNodes));
          function isAiRootView(stack) {
            return stack.rootView === "AI";
          }
          function filterAiRootNodes(items) {
            return items.filter(node => {
              if (node.type !== "node") return false;
              const subcategories = node.properties.codex?.subcategories?.["AI"] ?? [];
              return subcategories.includes("Root Nodes") && !subcategories?.includes("Tools");
            });
          }
          function groupIfAiNodes(items, stackCategory, sortAlphabetically) {
            const aiNodes = items.filter(node => isAINode(node));
            const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
            const isVectorStoresCategory = stackCategory === AI_CATEGORY_VECTOR_STORES;
            if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()) || isVectorStoresCategory)) {
              const sectionsMap = /* @__PURE__ */new Map();
              const aiRootNodes = filterAiRootNodes(aiNodes);
              const aiSubNodes = (0, import_difference.default)(aiNodes, aiRootNodes);
              aiSubNodes.forEach(node => {
                const subcategories = node.properties.codex?.subcategories ?? {};
                const section = subcategories["AI"]?.[0];
                if (section) {
                  const subSection = section === "Vector Stores" && stackCategory === "Tools" ? void 0 : subcategories[section]?.[0];
                  const sectionKey = subSection ?? section;
                  const currentItems = sectionsMap.get(sectionKey)?.items ?? [];
                  const isSubnodesSection = !(subcategories["AI"].includes("Root Nodes") || subcategories["AI"].includes("Model Context Protocol"));
                  let title = section;
                  if (isSubnodesSection) title = `${section} (${i18n.baseText("nodeCreator.subnodes")})`;
                  if (subSection) title = subSection;
                  sectionsMap.set(sectionKey, {
                    key: sectionKey,
                    title,
                    items: [...currentItems, node.key]
                  });
                }
              });
              const nonAiNodes = (0, import_difference.default)(items, aiNodes);
              const sections = Array.from(sectionsMap.values());
              return [...nonAiNodes, ...aiRootNodes, ...groupItemsInSections(aiSubNodes, sections, sortAlphabetically)];
            }
            return items;
          }
          function filterOutAiNodes(items) {
            return items.filter(item => {
              if (item.type === "node") {
                if (!(item.properties.codex?.categories?.includes("AI") === true)) return true;
                return item.properties.codex?.subcategories?.["AI"]?.includes(AI_CATEGORY_ROOT_NODES);
              }
              return true;
            });
          }
          async function gotoCompatibleConnectionView(connectionType, isOutput, filter) {
            let nodesByConnectionType;
            let relatedAIView;
            if (isOutput === true) {
              nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByInputConnectionTypeNames;
              relatedAIView = {
                properties: {
                  title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
                  icon: "robot"
                }
              };
            } else {
              nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByOutputConnectionTypeNames;
              relatedAIView = AINodesView([]).items.find(item => item.properties.connectionType === connectionType);
            }
            let extendedInfo = {};
            if (!filter?.nodes?.length && relatedAIView?.properties.info) extendedInfo = {
              info: relatedAIView?.properties.info
            };
            await nextTick();
            const iconName = getThemedValue(relatedAIView?.properties.icon, useUIStore().appliedTheme);
            pushViewStack({
              title: relatedAIView?.properties.title,
              ...extendedInfo,
              rootView: AI_OTHERS_NODE_CREATOR_VIEW,
              mode: "nodes",
              items: nodeCreatorStore.allNodeCreatorNodes,
              nodeIcon: iconName ? {
                type: "icon",
                name: iconName,
                color: relatedAIView?.properties.iconProps?.color
              } : void 0,
              panelClass: relatedAIView?.properties.panelClass,
              baseFilter: i => {
                if (i.key === "@n8n/n8n-nodes-langchain.code") return false;
                const displayNode = nodesByConnectionType[connectionType].includes(i.key);
                if (displayNode && filter?.nodes?.length) return filter.nodes.includes(i.key);
                if (displayNode && filter?.excludedNodes?.length) return !filter.excludedNodes.includes(i.key);
                return displayNode;
              },
              itemsMapper(item) {
                return {
                  ...item,
                  subcategory: connectionType
                };
              },
              actionsFilter: items => {
                if (items.some(item => item.outputConnectionType)) return items.filter(item => item.outputConnectionType === connectionType);
                return items;
              },
              hideActions: true,
              preventBack: true
            }, {
              resetStacks: true
            });
          }
          function setStackBaselineItems() {
            const stack = getLastActiveStack();
            if (!stack || !activeViewStack.value.uuid) return;
            let stackItems = stack?.items ?? [];
            if (!stack?.items) {
              const subcategory = stack?.subcategory ?? "*";
              let itemsInSubcategory = itemsBySubcategory.value[subcategory];
              if (!settingsStore.isAskAiEnabled) itemsInSubcategory = itemsInSubcategory.filter(item => item.key !== AI_TRANSFORM_NODE_TYPE);
              const sections = stack.sections;
              if (sections) stackItems = groupItemsInSections(itemsInSubcategory, sections);else stackItems = itemsInSubcategory;
            }
            if ((stack.forceIncludeNodes ?? []).length > 0) {
              const matchedNodes = nodeCreatorStore.mergedNodes.filter(item => stack.forceIncludeNodes?.includes(item.name)).map(item => transformNodeType(item, stack.subcategory));
              stackItems.push(...matchedNodes);
            }
            if (stack.baseFilter) stackItems = stackItems.filter(stack.baseFilter);
            if (stack.itemsMapper) stackItems = stackItems.map(stack.itemsMapper);
            if (!stack.items) stackItems = sortNodeCreateElements(stackItems);
            updateCurrentViewStack({
              baselineItems: stackItems
            });
          }
          function pushViewStack(stack, options = {}) {
            if (options.resetStacks) resetViewStacks();
            if (activeViewStack.value.uuid) updateCurrentViewStack({
              activeIndex: getActiveItemIndex()
            });
            const newStackUuid = v4_default();
            viewStacks.value.push({
              ...stack,
              uuid: newStackUuid,
              transitionDirection: options.transitionDirection ?? "in",
              activeIndex: 0
            });
            setStackBaselineItems();
          }
          function popViewStack() {
            if (activeViewStack.value.uuid) {
              viewStacks.value.pop();
              updateCurrentViewStack({
                transitionDirection: "out"
              });
            }
          }
          function updateCurrentViewStack(stack) {
            const currentStack = getLastActiveStack();
            const matchedIndex = viewStacks.value.findIndex(s => s.uuid === currentStack.uuid);
            if (!currentStack) return;
            Object.keys(stack).forEach(key => {
              const typedKey = key;
              viewStacks.value[matchedIndex] = {
                ...viewStacks.value[matchedIndex],
                [key]: stack[typedKey]
              };
            });
          }
          function resetViewStacks() {
            viewStacks.value = [];
          }
          return {
            viewStacks,
            activeViewStack,
            activeViewStackMode,
            globalSearchItemsDiff,
            isAiSubcategoryView,
            gotoCompatibleConnectionView,
            resetViewStacks,
            updateCurrentViewStack,
            pushViewStack,
            popViewStack,
            getAllNodeCreateElements
          };
        }));
        import_get = /* @__PURE__ */__toESM(require_get());
        _export("t", useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
          const workflowsStore = useWorkflowsStore();
          const ndvStore = useNDVStore();
          const uiStore = useUIStore();
          const nodeTypesStore = useNodeTypesStore();
          const telemetry = useTelemetry();
          const externalHooks = useExternalHooks();
          const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
          const mergedNodes = ref([]);
          const actions = ref({});
          const showScrim = ref(false);
          const openSource = ref("");
          const isCreateNodeActive = ref(false);
          const nodePanelSessionId = ref("");
          const allNodeCreatorNodes = computed(() => Object.values(mergedNodes.value).map(i => transformNodeType(i)));
          const workflowObject = computed(() => workflowsStore.workflowObject);
          function setMergeNodes(nodes) {
            mergedNodes.value = nodes;
          }
          function removeNodeFromMergedNodes(nodeName) {
            mergedNodes.value = mergedNodes.value.filter(n => n.name !== nodeName);
          }
          function setActions(nodes) {
            actions.value = nodes;
          }
          function setShowScrim(isVisible) {
            showScrim.value = isVisible;
          }
          function setSelectedView(view) {
            selectedView.value = view;
          }
          function setOpenSource(view) {
            openSource.value = view;
          }
          function openSelectiveNodeCreator({
            connectionType,
            node,
            creatorView,
            connectionIndex = 0
          }) {
            const nodeName = node ?? ndvStore.activeNodeName;
            const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
            ndvStore.unsetActiveNodeName();
            setTimeout(() => {
              if (creatorView) setNodeCreatorState({
                createNodeActive: true,
                nodeCreatorView: creatorView,
                connectionType
              });else if (connectionType && nodeData) openNodeCreatorForConnectingNode({
                connection: {
                  source: nodeData.id,
                  sourceHandle: createCanvasConnectionHandleString({
                    mode: "inputs",
                    type: connectionType,
                    index: connectionIndex
                  })
                },
                eventSource: NODE_CREATOR_OPEN_SOURCES.NOTICE_ERROR_MESSAGE
              });
            });
          }
          function setNodeCreatorState({
            source,
            createNodeActive,
            nodeCreatorView,
            connectionType
          }) {
            if (!nodeCreatorView) nodeCreatorView = workflowsStore.workflowTriggerNodes.length > 0 ? REGULAR_NODE_CREATOR_VIEW : TRIGGER_NODE_CREATOR_VIEW;
            setSelectedView(nodeCreatorView);
            isCreateNodeActive.value = createNodeActive;
            if (createNodeActive && source) setOpenSource(source);
            externalHooks.run("nodeView.createNodeActiveChanged", {
              source,
              mode: getMode(nodeCreatorView),
              connectionType,
              createNodeActive
            });
            if (createNodeActive) onCreatorOpened({
              source,
              mode: getMode(nodeCreatorView),
              connectionType,
              workflow_id: workflowsStore.workflowId
            });
          }
          function openNodeCreatorForConnectingNode({
            connection,
            eventSource,
            nodeCreatorView
          }) {
            const sourceNode = workflowsStore.getNodeById(connection.source);
            if (!sourceNode) return;
            const {
              type,
              mode
            } = parseCanvasConnectionHandleString(connection.sourceHandle);
            uiStore.lastSelectedNode = sourceNode.name;
            if (isVueFlowConnection(connection)) uiStore.lastInteractedWithNodeConnection = connection;
            uiStore.lastInteractedWithNodeHandle = connection.sourceHandle ?? null;
            uiStore.lastInteractedWithNodeId = sourceNode.id;
            const isOutput = mode === CanvasConnectionMode.Output;
            const isScopedConnection = type !== NodeConnectionTypes.Main;
            setNodeCreatorState({
              source: eventSource,
              createNodeActive: true,
              nodeCreatorView: isScopedConnection ? AI_UNCATEGORIZED_CATEGORY : nodeCreatorView,
              connectionType: type
            });
            if (isScopedConnection) useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type)).catch(() => {});
          }
          async function openNodeCreatorWithNode(nodeName) {
            const nodeData = nodeName ? workflowsStore.getNodeByName(nodeName) : null;
            if (!nodeData) return;
            ndvStore.unsetActiveNodeName();
            const nodeType = nodeTypesStore.getNodeType(nodeData?.type) ?? nodeTypesStore.communityNodeType(nodeData?.type)?.nodeDescription;
            if (!nodeType) return;
            setNodeCreatorState({
              createNodeActive: true
            });
            await nextTick();
            const nodeActions = actions.value[nodeType.name];
            const viewStack = prepareCommunityNodeDetailsViewStack({
              key: nodeType.name,
              properties: nodeType,
              type: "node",
              subcategory: "*"
            }, getNodeIconSource(nodeType.name), "Regular", nodeActions ?? []);
            useViewStacks().pushViewStack(viewStack, {
              resetStacks: true
            });
          }
          function openNodeCreatorForTriggerNodes(source) {
            ndvStore.unsetActiveNodeName();
            setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
            setShowScrim(true);
            setNodeCreatorState({
              source,
              createNodeActive: true,
              nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
            });
          }
          function openNodeCreatorForRegularNodes(source) {
            ndvStore.unsetActiveNodeName();
            setSelectedView(REGULAR_NODE_CREATOR_VIEW);
            setShowScrim(true);
            setNodeCreatorState({
              source,
              createNodeActive: true,
              nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
            });
          }
          function openNodeCreatorForActions(node, eventSource) {
            const actionNode = allNodeCreatorNodes.value.find(i => i.key === node);
            if (!actionNode) return;
            const transformedActions = actions.value[actionNode.key]?.map(a => transformNodeType(a, actionNode.properties.displayName, "action"));
            ndvStore.unsetActiveNodeName();
            setSelectedView(REGULAR_NODE_CREATOR_VIEW);
            setNodeCreatorState({
              source: eventSource,
              createNodeActive: true,
              nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
            });
            setTimeout(() => {
              useViewStacks().pushViewStack({
                subcategory: "*",
                title: actionNode.properties.displayName,
                nodeIcon: {
                  type: "icon",
                  name: "check-check"
                },
                rootView: "Regular",
                mode: "actions",
                items: transformedActions
              }, {
                resetStacks: true
              });
            });
          }
          function getNodeCreatorFilter(nodeName, outputType) {
            let filter;
            const workflowNode = workflowObject.value.getNode(nodeName);
            if (!workflowNode) return {
              nodes: []
            };
            const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion) ?? nodeTypesStore.communityNodeType(workflowNode?.type)?.nodeDescription;
            if (nodeType) {
              const filterFound = getNodeInputs(workflowObject.value, workflowNode, nodeType).filter(input => {
                if (typeof input === "string" || input.type !== outputType || !input.filter) return false;
                return true;
              });
              if (filterFound.length) filter = filterFound[0].filter;
            }
            return filter;
          }
          function resetNodesPanelSession() {
            nodePanelSessionId.value = `nodes_panel_session_${(/* @__PURE__ */new Date()).valueOf()}`;
          }
          function trackNodeCreatorEvent(event, properties = {}) {
            telemetry.track(event, {
              ...properties,
              nodes_panel_session_id: nodePanelSessionId.value
            });
          }
          function onCreatorOpened({
            source,
            mode,
            connectionType,
            workflow_id
          }) {
            resetNodesPanelSession();
            trackNodeCreatorEvent("User opened nodes panel", {
              source,
              mode,
              connectionType,
              workflow_id
            });
          }
          function onNodeFilterChanged({
            newValue,
            filteredNodes,
            filterMode,
            subcategory,
            title
          }) {
            if (!newValue.length) return;
            const {
              results_count,
              trigger_count,
              regular_count,
              community_count
            } = filteredNodes.reduce((accu, node) => {
              if (!("properties" in node)) return accu;
              if ("actionKey" in node.properties && node.properties.actionKey === "__CUSTOM_API_CALL__") return accu;
              const isTrigger = node.key.includes("Trigger");
              const nodeName = (0, import_get.default)(node, "properties.name", null);
              const isCommunityNode = nodeName && isCommunityPackageName(nodeName);
              return {
                results_count: accu.results_count + 1,
                trigger_count: accu.trigger_count + (isTrigger ? 1 : 0),
                regular_count: accu.regular_count + (isTrigger ? 0 : 1),
                community_count: accu.community_count + (isCommunityNode ? 1 : 0)
              };
            }, {
              results_count: 0,
              trigger_count: 0,
              regular_count: 0,
              community_count: 0
            });
            trackNodeCreatorEvent("User entered nodes panel search term", {
              search_string: newValue,
              filter_mode: getMode(filterMode),
              category_name: subcategory,
              results_count,
              trigger_count,
              regular_count,
              community_count,
              title
            });
          }
          function onCategoryExpanded(properties) {
            trackNodeCreatorEvent("User viewed node category", {
              ...properties,
              is_subcategory: false
            });
          }
          function onViewActions(properties) {
            trackNodeCreatorEvent("User viewed node actions", properties);
          }
          function onActionsCustomAPIClicked(properties) {
            trackNodeCreatorEvent("User clicked custom API from node actions", properties);
          }
          function onSubcategorySelected(properties) {
            trackNodeCreatorEvent("User viewed node category", {
              category_name: properties.subcategory,
              is_subcategory: true
            });
          }
          function onNodeAddedToCanvas(properties) {
            trackNodeCreatorEvent("User added node to workflow canvas", properties);
          }
          function getMode(mode) {
            if (mode === "AI" || mode === "AI Other") return "ai";
            if (mode === "Trigger") return "trigger";
            return "regular";
          }
          return {
            isCreateNodeActive,
            openSource,
            selectedView,
            showScrim,
            mergedNodes,
            actions,
            allNodeCreatorNodes,
            setShowScrim,
            setSelectedView,
            setOpenSource,
            setActions,
            setMergeNodes,
            removeNodeFromMergedNodes,
            setNodeCreatorState,
            openSelectiveNodeCreator,
            openNodeCreatorForConnectingNode,
            openNodeCreatorForTriggerNodes,
            openNodeCreatorForRegularNodes,
            openNodeCreatorForActions,
            onCreatorOpened,
            onNodeFilterChanged,
            onCategoryExpanded,
            onActionsCustomAPIClicked,
            onViewActions,
            onSubcategorySelected,
            onNodeAddedToCanvas,
            openNodeCreatorWithNode
          };
        })); //#endregion
      }
    };
  });
})();
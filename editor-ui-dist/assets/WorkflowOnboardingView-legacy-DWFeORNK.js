;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-EpiRSp2k.js", "./truncate-legacy-DwotxNoN.js", "./empty-legacy-DFAcggMu.js", "./useTelemetry-legacy-4qTitth1.js", "./constants-legacy-C2dQIV-q.js", "./merge-legacy-PhS8LH-D.js", "./_baseOrderBy-legacy-DbYiQl0Y.js", "./dateformat-legacy-COtwsT2o.js", "./useDebounce-legacy-DkEuh-M3.js", "./cloudPlan.store-legacy-WogyZLSg.js", "./templates.store-legacy-DcF8PNqn.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, defineComponent, onMounted, openBlock, useI18n, useRoute, useRouter, useLoadingService, useWorkflowsStore, VIEWS, useTemplatesStore, WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default, WorkflowOnboardingView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js._t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.v;
        useRouter = _truncateLegacy00hJs.y;
      }, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useLoadingService = _useTelemetryLegacy00HJs.Kn;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_constantsLegacy00VJs) {
        VIEWS = _constantsLegacy00VJs.Io;
      }, function (_mergeLegacy00XJs) {}, function (_baseOrderByLegacy00$Js) {}, function (_dateformatLegacy011Js) {}, function (_useDebounceLegacy013Js) {}, function (_cloudPlanStoreLegacy01fJs) {}, function (_templatesStoreLegacy01hJs) {
        useTemplatesStore = _templatesStoreLegacy01hJs.t;
      }],
      execute: function () {
        //#region src/app/views/WorkflowOnboardingView.vue?vue&type=script&setup=true&lang.ts
        WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowOnboardingView",
          setup(__props) {
            const loadingService = useLoadingService();
            const templateStore = useTemplatesStore();
            const workflowsStore = useWorkflowsStore();
            const router = useRouter();
            const route = useRoute();
            const i18n = useI18n();
            const openWorkflowTemplate = async templateId => {
              try {
                loadingService.startLoading();
                const template = await templateStore.getFixedWorkflowTemplate(templateId);
                if (!template) throw new Error();
                const name = i18n.baseText("onboarding.title", {
                  interpolate: {
                    name: template.name
                  }
                });
                const workflow = await workflowsStore.createNewWorkflow({
                  name,
                  connections: template.workflow.connections,
                  nodes: template.workflow.nodes.map(workflowsStore.convertTemplateNodeToNodeUi),
                  pinData: template.workflow.pinData,
                  settings: template.workflow.settings,
                  meta: {
                    onboardingId: templateId
                  }
                });
                await router.replace({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: workflow.id
                  },
                  query: {
                    onboardingId: templateId
                  }
                });
                loadingService.stopLoading();
              } catch (e) {
                await router.replace({
                  name: VIEWS.NEW_WORKFLOW
                });
                loadingService.stopLoading();
                throw new Error(`Could not load onboarding template ${templateId}`);
              }
            };
            onMounted(async () => {
              const templateId = route.params.id;
              if (!templateId || typeof templateId !== "string") {
                await router.replace({
                  name: VIEWS.NEW_WORKFLOW
                });
                return;
              }
              await openWorkflowTemplate(templateId);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div");
            };
          }
        }); //#endregion
        //#region src/app/views/WorkflowOnboardingView.vue
        _export("default", WorkflowOnboardingView_default = WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
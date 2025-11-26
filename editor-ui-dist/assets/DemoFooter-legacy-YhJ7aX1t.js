;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CSbUIQNN.js", "./src-legacy-Bw3jlBBM.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BXBaeAHj.js", "./icon-legacy-G70PJc8a.js", "./overlay-legacy-Cejp9MX-.js", "./empty-legacy-CsIOGMHW.js", "./useMessage-legacy-DsPzQPKW.js", "./useTelemetry-legacy-K-mG0KNq.js", "./useToast-legacy-BNFd7XMO.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-CvA6xS_6.js", "./merge-legacy-B2foMX1A.js", "./assistant.store-legacy-Bo8vQA-C.js", "./useRootStore-legacy-BMRt4TVg.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-CQgGMAey.js", "./useExternalHooks-legacy-JPDKkvXd.js", "./useStyles-legacy-DnD2qvTK.js", "./chatPanel.store-legacy-BVTuxquV.js", "./npsSurvey.store-legacy-CdkwEWy8.js", "./cloudPlan.store-legacy-GVLMfBwn.js", "./templates.store-legacy-CnhRjinz.js", "./focusPanel.store-legacy-U5eteqRp.js", "./useWorkflowSaving-legacy-C6zZ8vrh.js", "./retry-legacy-WzzNqxgG.js", "./executions.store-legacy-BQZSOquz.js", "./useRunWorkflow-legacy-CtsMZdc0.js", "./usePinnedData-legacy-r6Hms__G.js", "./nodeCreator.store-legacy-DQwKsohf.js", "./nodeIcon-legacy-8jhXeJb9.js", "./useClipboard-legacy-CBwNXFKB.js", "./useCanvasOperations-legacy-DLuVK3gp.js", "./LogsPanel-legacy-DkYLblun.js", "./folders.store-legacy-I_vXgpGZ.js", "./NodeIcon-legacy-B-R6YtUx.js", "./KeyboardShortcutTooltip-legacy-4NG_kcYh.js", "./isEmpty-legacy--Pveyn0I.js", "./NDVEmptyState-legacy-CI2i2aM4.js", "./externalSecrets.ee.store-legacy-CwruvELZ.js", "./uniqBy-legacy-Br8r8n6N.js", "./RunDataHtml-legacy-D8NXU-VY.js", "./VueMarkdown-legacy-B0Ipd2HP.js", "./schemaPreview.store-legacy-BBf88M94.js", "./FileSaver.min-legacy-B8jlBJiw.js", "./vue-json-pretty-legacy-DD4fdIw2.js", "./dateFormatter-legacy-D9IT4d7n.js", "./useExecutionHelpers-legacy-BptiEayu.js", "./useKeybindings-legacy-CjcxAAS5.js", "./core-legacy-jXu14BKh.js", "./xml-legacy-CWf6ot6H.js", "./AnimatedSpinner-legacy-DWtktXyG.js", "./useLogsTreeExpand-legacy-Ds5dAhIA.js", "./core-legacy-lLLh1p7Z.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, defineComponent, createBlock, openBlock, useWorkflowsStore, LogsPanel_default, DemoFooter_vue_vue_type_script_setup_true_lang_default, DemoFooter_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {}, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_useTelemetryLegacy00FJs) {
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_chatPanelStoreLegacy011Js) {}, function (_npsSurveyStoreLegacy015Js) {}, function (_cloudPlanStoreLegacy017Js) {}, function (_templatesStoreLegacy019Js) {}, function (_focusPanelStoreLegacy01bJs) {}, function (_useWorkflowSavingLegacy01dJs) {}, function (_retryLegacy01fJs) {}, function (_executionsStoreLegacy01hJs) {}, function (_useRunWorkflowLegacy01jJs) {}, function (_usePinnedDataLegacy01lJs) {}, function (_nodeCreatorStoreLegacy01nJs) {}, function (_nodeIconLegacy01pJs) {}, function (_useClipboardLegacy01rJs) {}, function (_useCanvasOperationsLegacy01tJs) {}, function (_LogsPanelLegacy01vJs) {
        LogsPanel_default = _LogsPanelLegacy01vJs.t;
      }, function (_foldersStoreLegacy01xJs) {}, function (_NodeIconLegacy01zJs) {}, function (_KeyboardShortcutTooltipLegacy01BJs) {}, function (_isEmptyLegacy01XJs) {}, function (_NDVEmptyStateLegacy01ZJs) {}, function (_externalSecretsEeStoreLegacy021Js) {}, function (_uniqByLegacy023Js) {}, function (_RunDataHtmlLegacy02hJs) {}, function (_VueMarkdownLegacy02lJs) {}, function (_schemaPreviewStoreLegacy02vJs) {}, function (_FileSaverMinLegacy02BJs) {}, function (_vueJsonPrettyLegacy02DJs) {}, function (_dateFormatterLegacy02FJs) {}, function (_useExecutionHelpersLegacy02HJs) {}, function (_useKeybindingsLegacy03zJs) {}, function (_coreLegacy03LJs) {}, function (_xmlLegacy057Js) {}, function (_AnimatedSpinnerLegacy05hJs) {}, function (_useLogsTreeExpandLegacy06vJs) {}, function (_coreLegacy06xJs) {}],
      execute: function () {
        //#region src/features/execution/logs/components/DemoFooter.vue?vue&type=script&setup=true&lang.ts
        DemoFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DemoFooter",
          setup(__props) {
            const workflowsStore = useWorkflowsStore();
            const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
            return (_ctx, _cache) => {
              return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
                key: 0,
                "is-read-only": true
              })) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/logs/components/DemoFooter.vue
        _export("default", DemoFooter_default = DemoFooter_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
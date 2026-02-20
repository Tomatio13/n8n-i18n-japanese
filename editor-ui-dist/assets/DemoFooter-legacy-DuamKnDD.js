;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-EpiRSp2k.js", "./src-legacy-DawDbnmB.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-DwotxNoN.js", "./icon-legacy-BdmVZSNO.js", "./overlay-legacy-BYIDEkfw.js", "./empty-legacy-DFAcggMu.js", "./useMessage-legacy-_SXMZqc2.js", "./useTelemetry-legacy-4qTitth1.js", "./useToast-legacy-rZg7wSqi.js", "./sanitize-html-legacy-BEmHhTEK.js", "./CalendarDate-legacy-BUvNgcoo.js", "./constants-legacy-C2dQIV-q.js", "./merge-legacy-PhS8LH-D.js", "./assistant.store-legacy-BoOQyDsL.js", "./_baseOrderBy-legacy-DbYiQl0Y.js", "./dateformat-legacy-COtwsT2o.js", "./useDebounce-legacy-DkEuh-M3.js", "./useExternalHooks-legacy-Dbhz_Ckd.js", "./useStyles-legacy-CBz5KLcN.js", "./chatPanel.store-legacy-Beo8wAcW.js", "./npsSurvey.store-legacy-F4UBkvm8.js", "./cloudPlan.store-legacy-WogyZLSg.js", "./templates.store-legacy-DcF8PNqn.js", "./focusPanel.store-legacy-BsUj_z11.js", "./useWorkflowSaving-legacy-D62n5VO8.js", "./retry-legacy-B42G2wo4.js", "./executions.store-legacy-CEl2c5DI.js", "./useRunWorkflow-legacy-DU7dKDe0.js", "./usePinnedData-legacy-BWe3ZTkE.js", "./nodeCreator.store-legacy-DzJ9E0gn.js", "./nodeIcon-legacy-CPb7SaRx.js", "./useClipboard-legacy-3yLJ0EVp.js", "./useCanvasOperations-legacy-CkWPTIoc.js", "./LogsPanel-legacy-CpaCijWv.js", "./folders.store-legacy-DoBmBKi2.js", "./NodeIcon-legacy-CjCmDQ_1.js", "./KeyboardShortcutTooltip-legacy-C3idXhIK.js", "./isEmpty-legacy-zb7QxA07.js", "./NDVEmptyState-legacy-BiGU-Iaj.js", "./externalSecrets.ee.store-legacy-BIBldKdf.js", "./uniqBy-legacy-CiQACjIu.js", "./RunDataHtml-legacy-DHQEjjqz.js", "./VueMarkdown-legacy-6eGvC_vO.js", "./schemaPreview.store-legacy-D7RH4kzv.js", "./FileSaver.min-legacy-0SsKJJ7L.js", "./vue-json-pretty-legacy-DEs9LQ9L.js", "./dateFormatter-legacy-Ds7SiiEq.js", "./useExecutionHelpers-legacy-B5gKSIYQ.js", "./fileUtils-legacy-AaxU-aoB.js", "./useKeybindings-legacy-Bt8y82b5.js", "./core-legacy-CE24FyzQ.js", "./ChatFile-legacy-5tjvkOZY.js", "./xml-legacy-Bml4tBFF.js", "./AnimatedSpinner-legacy-Bc8CRgqr.js", "./useLogsTreeExpand-legacy-BZ0tTsr1.js", "./core-legacy-DSRhYczf.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, defineComponent, createBlock, openBlock, useWorkflowsStore, LogsPanel_default, DemoFooter_vue_vue_type_script_setup_true_lang_default, DemoFooter_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {}, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_constantsLegacy00VJs) {}, function (_mergeLegacy00XJs) {}, function (_assistantStoreLegacy00ZJs) {}, function (_baseOrderByLegacy00$Js) {}, function (_dateformatLegacy011Js) {}, function (_useDebounceLegacy013Js) {}, function (_useExternalHooksLegacy015Js) {}, function (_useStylesLegacy017Js) {}, function (_chatPanelStoreLegacy019Js) {}, function (_npsSurveyStoreLegacy01dJs) {}, function (_cloudPlanStoreLegacy01fJs) {}, function (_templatesStoreLegacy01hJs) {}, function (_focusPanelStoreLegacy01jJs) {}, function (_useWorkflowSavingLegacy01lJs) {}, function (_retryLegacy01nJs) {}, function (_executionsStoreLegacy01pJs) {}, function (_useRunWorkflowLegacy01rJs) {}, function (_usePinnedDataLegacy01tJs) {}, function (_nodeCreatorStoreLegacy01vJs) {}, function (_nodeIconLegacy01xJs) {}, function (_useClipboardLegacy01zJs) {}, function (_useCanvasOperationsLegacy01BJs) {}, function (_LogsPanelLegacy01DJs) {
        LogsPanel_default = _LogsPanelLegacy01DJs.t;
      }, function (_foldersStoreLegacy01FJs) {}, function (_NodeIconLegacy01HJs) {}, function (_KeyboardShortcutTooltipLegacy01JJs) {}, function (_isEmptyLegacy023Js) {}, function (_NDVEmptyStateLegacy025Js) {}, function (_externalSecretsEeStoreLegacy029Js) {}, function (_uniqByLegacy02bJs) {}, function (_RunDataHtmlLegacy02pJs) {}, function (_VueMarkdownLegacy02tJs) {}, function (_schemaPreviewStoreLegacy02DJs) {}, function (_FileSaverMinLegacy02JJs) {}, function (_vueJsonPrettyLegacy02LJs) {}, function (_dateFormatterLegacy02NJs) {}, function (_useExecutionHelpersLegacy02PJs) {}, function (_fileUtilsLegacy03rJs) {}, function (_useKeybindingsLegacy03NJs) {}, function (_coreLegacy03$Js) {}, function (_ChatFileLegacy05dJs) {}, function (_xmlLegacy05tJs) {}, function (_AnimatedSpinnerLegacy05DJs) {}, function (_useLogsTreeExpandLegacy06TJs) {}, function (_coreLegacy06VJs) {}],
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
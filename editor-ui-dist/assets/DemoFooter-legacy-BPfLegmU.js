;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-Dnvl_Nsb.js", "./src-legacy-ovK6Yepc.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-FGoq5HUU.js", "./icon-legacy-CGCHLh4c.js", "./overlay-legacy-BE4EX41P.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DNyf8RAT.js", "./useTelemetry-legacy-DDadbM-F.js", "./useToast-legacy-mgI0JreW.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-ChKQ_dFa.js", "./merge-legacy-3m9P34FL.js", "./assistant.store-legacy-CsRYRswL.js", "./_baseOrderBy-legacy-BPTF6GmT.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-C62RhzIG.js", "./useExternalHooks-legacy-9B_pHzUT.js", "./useStyles-legacy-CJudPaTy.js", "./chatPanel.store-legacy-DC_rvvSe.js", "./npsSurvey.store-legacy-5PS1YJ8J.js", "./cloudPlan.store-legacy-D1meWtN_.js", "./templates.store-legacy-Coq6ILHm.js", "./focusPanel.store-legacy-BQl8FrOJ.js", "./useWorkflowSaving-legacy-CbhrCJYz.js", "./retry-legacy-CSXRWnZ-.js", "./executions.store-legacy-BSmK2wYL.js", "./useRunWorkflow-legacy-B9DJIVrX.js", "./usePinnedData-legacy-D9qWgS53.js", "./nodeCreator.store-legacy-Cz7MT2yw.js", "./nodeIcon-legacy-BDR7mI3b.js", "./useClipboard-legacy-oCuG5psd.js", "./useCanvasOperations-legacy-jGTblFvL.js", "./LogsPanel-legacy-BAq2Zd1M.js", "./folders.store-legacy-C0hwiE2m.js", "./NodeIcon-legacy-CdcdwuK1.js", "./KeyboardShortcutTooltip-legacy-C63GjBDB.js", "./isEmpty-legacy-CUhxEXWu.js", "./NDVEmptyState-legacy-C-3u2C0Y.js", "./externalSecrets.ee.store-legacy-BeMjgDas.js", "./uniqBy-legacy-DLCGw2JU.js", "./RunDataHtml-legacy-3uzev81-.js", "./VueMarkdown-legacy-DTlDGKgB.js", "./schemaPreview.store-legacy-CZbn2cgF.js", "./FileSaver.min-legacy-CcqEXadD.js", "./vue-json-pretty-legacy-CpZv9WKV.js", "./dateFormatter-legacy-D3yx565r.js", "./useExecutionHelpers-legacy-DxwCfvUi.js", "./fileUtils-legacy-C-uhaiIn.js", "./useKeybindings-legacy-D2MUCvKA.js", "./core-legacy-DCWpYxu8.js", "./ChatFile-legacy-nQoUioQE.js", "./xml-legacy-BUWp3PGK.js", "./AnimatedSpinner-legacy-CvzgRCW1.js", "./useLogsTreeExpand-legacy-Bshv2Leu.js", "./core-legacy-RhcoKxpA.js"], function (_export, _context) {
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
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {}, function (_mergeLegacy00TJs) {}, function (_assistantStoreLegacy00VJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_chatPanelStoreLegacy015Js) {}, function (_npsSurveyStoreLegacy019Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {}, function (_focusPanelStoreLegacy01fJs) {}, function (_useWorkflowSavingLegacy01hJs) {}, function (_retryLegacy01jJs) {}, function (_executionsStoreLegacy01lJs) {}, function (_useRunWorkflowLegacy01nJs) {}, function (_usePinnedDataLegacy01pJs) {}, function (_nodeCreatorStoreLegacy01rJs) {}, function (_nodeIconLegacy01tJs) {}, function (_useClipboardLegacy01vJs) {}, function (_useCanvasOperationsLegacy01xJs) {}, function (_LogsPanelLegacy01zJs) {
        LogsPanel_default = _LogsPanelLegacy01zJs.t;
      }, function (_foldersStoreLegacy01BJs) {}, function (_NodeIconLegacy01DJs) {}, function (_KeyboardShortcutTooltipLegacy01FJs) {}, function (_isEmptyLegacy01$Js) {}, function (_NDVEmptyStateLegacy021Js) {}, function (_externalSecretsEeStoreLegacy025Js) {}, function (_uniqByLegacy027Js) {}, function (_RunDataHtmlLegacy02lJs) {}, function (_VueMarkdownLegacy02pJs) {}, function (_schemaPreviewStoreLegacy02zJs) {}, function (_FileSaverMinLegacy02FJs) {}, function (_vueJsonPrettyLegacy02HJs) {}, function (_dateFormatterLegacy02JJs) {}, function (_useExecutionHelpersLegacy02LJs) {}, function (_fileUtilsLegacy03nJs) {}, function (_useKeybindingsLegacy03JJs) {}, function (_coreLegacy03XJs) {}, function (_ChatFileLegacy059Js) {}, function (_xmlLegacy05pJs) {}, function (_AnimatedSpinnerLegacy05zJs) {}, function (_useLogsTreeExpandLegacy06PJs) {}, function (_coreLegacy06RJs) {}],
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
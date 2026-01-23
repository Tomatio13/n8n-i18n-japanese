;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-8OcfWMWH.js", "./src-legacy-CqaaMy6r.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-COQs_hNk.js", "./icon-legacy-BBcLFUR7.js", "./empty-legacy-DFAcggMu.js", "./useTelemetry-legacy-DRbFTEPe.js", "./useToast-legacy-DFHug49l.js", "./sanitize-html-legacy-C2e3AnhY.js", "./CalendarDate-legacy-BUvNgcoo.js", "./constants-legacy-BnN5j0Of.js", "./merge-legacy-Bk31cAi2.js", "./_baseOrderBy-legacy-Helkyheh.js", "./dateformat-legacy-COtwsT2o.js", "./useDebounce-legacy-vbPtOpN1.js", "./useExternalHooks-legacy-cRYXgFRw.js", "./useStyles-legacy-CBz5KLcN.js", "./sso.store-legacy-ChxS382m.js", "./AuthView-legacy-B2p0G1YU.js"], function (_export, _context) {
    "use strict";

    var ref, defineComponent, reactive, createBlock, openBlock, useI18n, useRouter, useUsersStore, useToast, VIEWS, AuthView_default, SamlOnboarding_vue_vue_type_script_setup_true_lang_default, SamlOnboarding_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js._t;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_constantsLegacy00VJs) {
        VIEWS = _constantsLegacy00VJs.Io;
      }, function (_mergeLegacy00XJs) {}, function (_baseOrderByLegacy00$Js) {}, function (_dateformatLegacy011Js) {}, function (_useDebounceLegacy013Js) {}, function (_useExternalHooksLegacy015Js) {}, function (_useStylesLegacy017Js) {}, function (_ssoStoreLegacy03bJs) {}, function (_AuthViewLegacy05TJs) {
        AuthView_default = _AuthViewLegacy05TJs.t;
      }],
      execute: function () {
        //#region src/features/settings/sso/views/SamlOnboarding.vue?vue&type=script&setup=true&lang.ts
        SamlOnboarding_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SamlOnboarding",
          setup(__props) {
            const router = useRouter();
            const locale = useI18n();
            const toast = useToast();
            const usersStore = useUsersStore();
            const loading = ref(false);
            const FORM_CONFIG = reactive({
              title: locale.baseText("auth.signup.setupYourAccount"),
              buttonText: locale.baseText("auth.signup.finishAccountSetup"),
              inputs: [{
                name: "firstName",
                initialValue: usersStore.currentUser?.firstName,
                properties: {
                  label: locale.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true
                }
              }, {
                name: "lastName",
                initialValue: usersStore.currentUser?.lastName,
                properties: {
                  label: locale.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }]
            });
            const isFormWithFirstAndLastName = values => {
              return "firstName" in values && "lastName" in values;
            };
            const onSubmit = async values => {
              if (!isFormWithFirstAndLastName(values)) return;
              try {
                loading.value = true;
                await usersStore.updateUserName(values);
                await router.push({
                  name: VIEWS.HOMEPAGE
                });
              } catch (error) {
                loading.value = false;
                toast.showError(error, "Error", error.message);
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: FORM_CONFIG,
                "form-loading": loading.value,
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SamlOnboarding.vue
        _export("default", SamlOnboarding_default = SamlOnboarding_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
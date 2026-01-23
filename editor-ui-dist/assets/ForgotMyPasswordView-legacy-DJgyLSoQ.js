;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-8OcfWMWH.js", "./src-legacy-CqaaMy6r.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-COQs_hNk.js", "./icon-legacy-BBcLFUR7.js", "./empty-legacy-DFAcggMu.js", "./useTelemetry-legacy-DRbFTEPe.js", "./useToast-legacy-DFHug49l.js", "./sanitize-html-legacy-C2e3AnhY.js", "./CalendarDate-legacy-BUvNgcoo.js", "./constants-legacy-BnN5j0Of.js", "./merge-legacy-Bk31cAi2.js", "./_baseOrderBy-legacy-Helkyheh.js", "./dateformat-legacy-COtwsT2o.js", "./useDebounce-legacy-vbPtOpN1.js", "./useExternalHooks-legacy-cRYXgFRw.js", "./useStyles-legacy-CBz5KLcN.js", "./sso.store-legacy-ChxS382m.js", "./AuthView-legacy-B2p0G1YU.js"], function (_export, _context) {
    "use strict";

    var computed, ref, defineComponent, createBlock, openBlock, useI18n, useSettingsStore, useUsersStore, useToast, AuthView_default, ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default, ForgotMyPasswordView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js._t;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_constantsLegacy00VJs) {}, function (_mergeLegacy00XJs) {}, function (_baseOrderByLegacy00$Js) {}, function (_dateformatLegacy011Js) {}, function (_useDebounceLegacy013Js) {}, function (_useExternalHooksLegacy015Js) {}, function (_useStylesLegacy017Js) {}, function (_ssoStoreLegacy03bJs) {}, function (_AuthViewLegacy05TJs) {
        AuthView_default = _AuthViewLegacy05TJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/ForgotMyPasswordView.vue?vue&type=script&setup=true&lang.ts
        ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ForgotMyPasswordView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const toast = useToast();
            const locale = useI18n();
            const loading = ref(false);
            const formConfig = computed(() => {
              const EMAIL_INPUTS = [{
                name: "email",
                properties: {
                  label: locale.baseText("auth.email"),
                  type: "email",
                  required: true,
                  validationRules: [{
                    name: "VALID_EMAIL"
                  }],
                  autocomplete: "email",
                  capitalize: true,
                  focusInitially: true
                }
              }];
              const NO_SMTP_INPUTS = [{
                name: "no-smtp-warning",
                properties: {
                  label: locale.baseText("forgotPassword.noSMTPToSendEmailWarning"),
                  type: "info"
                }
              }];
              const DEFAULT_FORM_CONFIG = {
                title: locale.baseText("forgotPassword.recoverPassword"),
                redirectText: locale.baseText("forgotPassword.returnToSignIn"),
                redirectLink: "/signin"
              };
              if (settingsStore.isSmtpSetup) return {
                ...DEFAULT_FORM_CONFIG,
                buttonText: locale.baseText("forgotPassword.getRecoveryLink"),
                inputs: EMAIL_INPUTS
              };
              return {
                ...DEFAULT_FORM_CONFIG,
                inputs: NO_SMTP_INPUTS
              };
            });
            const isFormWithEmail = values => {
              return "email" in values;
            };
            const onSubmit = async values => {
              if (!isFormWithEmail(values)) return;
              try {
                loading.value = true;
                await usersStore.sendForgotPasswordEmail(values);
                toast.showMessage({
                  type: "success",
                  title: locale.baseText("forgotPassword.recoveryEmailSent"),
                  message: locale.baseText("forgotPassword.emailSentIfExists", {
                    interpolate: {
                      email: values.email
                    }
                  })
                });
              } catch (error) {
                let message = locale.baseText("forgotPassword.smtpErrorContactAdministrator");
                if (error.httpStatusCode) {
                  const {
                    httpStatusCode: status
                  } = error;
                  if (status === 429) message = locale.baseText("forgotPassword.tooManyRequests");else if (error.httpStatusCode === 422) message = locale.baseText(error.message);
                  toast.showMessage({
                    type: "error",
                    title: locale.baseText("forgotPassword.sendingEmailError"),
                    message
                  });
                }
              }
              loading.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: formConfig.value,
                "form-loading": loading.value,
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/ForgotMyPasswordView.vue
        _export("default", ForgotMyPasswordView_default = ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
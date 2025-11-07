;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6di38.js", "./src-legacy-DaU7H7T8.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWR_lVFz.js", "./icon-legacy-BEgY2guO.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-DyFWt8gD.js", "./useToast-legacy-CQPpmrHA.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-DAaX1J_j.js", "./merge-legacy-BzTgy7Qd.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-B8ZMAqF7.js", "./useExternalHooks-legacy-BUVgQPZx.js", "./sso.store-legacy-DrctBYZk.js", "./AuthView-legacy-Bd1xaLeb.js"], function (_export, _context) {
    "use strict";

    var ref, defineComponent, reactive, createBlock, openBlock, useI18n, useRouter, useSettingsStore, useUsersStore, useToast, VIEWS, AuthView_default, SetupView_vue_vue_type_script_setup_true_lang_default, SetupView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_ssoStoreLegacy02ZJs) {}, function (_AuthViewLegacy05fJs) {
        AuthView_default = _AuthViewLegacy05fJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/SetupView.vue?vue&type=script&setup=true&lang.ts
        SetupView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const toast = useToast();
            const locale = useI18n();
            const router = useRouter();
            const loading = ref(false);
            const formConfig = reactive({
              title: locale.baseText("auth.setup.setupOwner"),
              buttonText: locale.baseText("auth.setup.next"),
              inputs: [{
                name: "email",
                properties: {
                  label: locale.baseText("auth.email"),
                  type: "email",
                  required: true,
                  validationRules: [{
                    name: "VALID_EMAIL"
                  }],
                  autocomplete: "email",
                  capitalize: true
                }
              }, {
                name: "firstName",
                properties: {
                  label: locale.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true
                }
              }, {
                name: "lastName",
                properties: {
                  label: locale.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }, {
                name: "password",
                properties: {
                  label: locale.baseText("auth.password"),
                  type: "password",
                  required: true,
                  validationRules: [{
                    name: "DEFAULT_PASSWORD_RULES"
                  }],
                  infoText: locale.baseText("auth.defaultPasswordRequirements"),
                  autocomplete: "new-password",
                  capitalize: true
                }
              }, {
                name: "agree",
                properties: {
                  label: locale.baseText("auth.agreement.label"),
                  type: "checkbox"
                }
              }]
            });
            const onSubmit = async values => {
              try {
                const forceRedirectedHere = settingsStore.showSetupPage;
                loading.value = true;
                await usersStore.createOwner(values);
                if (values.agree === true) try {
                  await usersStore.submitContactEmail(values.email.toString(), values.agree);
                } catch {}
                if (forceRedirectedHere) await router.push({
                  name: VIEWS.HOMEPAGE
                });else await router.push({
                  name: VIEWS.USERS_SETTINGS
                });
              } catch (error) {
                toast.showError(error, locale.baseText("auth.setup.settingUpOwnerError"));
              }
              loading.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: formConfig,
                "form-loading": loading.value,
                "data-test-id": "setup-form",
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SetupView.vue
        _export("default", SetupView_default = SetupView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();
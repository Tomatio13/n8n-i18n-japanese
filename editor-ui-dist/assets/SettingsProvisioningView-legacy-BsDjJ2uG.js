;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6di38.js", "./src-legacy-DaU7H7T8.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWR_lVFz.js", "./icon-legacy-BEgY2guO.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-DyFWt8gD.js", "./useToast-legacy-CQPpmrHA.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-DAaX1J_j.js", "./merge-legacy-BzTgy7Qd.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-B8ZMAqF7.js", "./useExternalHooks-legacy-BUVgQPZx.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, ref, createVNode, defineComponent, reactive, toDisplayString, onMounted, normalizeClass, withCtx, openBlock, createTextVNode, vModelCheckbox, createBaseVNode, withDirectives, useI18n, N8nInput_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nSpinner_default, __plugin_vue_export_helper_default, useDocumentTitle, useRootStore, defineStore, saveProvisioningConfig, getProvisioningConfig, useToast, __vite_style__, useProvisioningStore, _hoisted_1, _hoisted_2, SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, container, heading, loading, buttons, group, frequencySelect, checkbox, SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsProvisioningView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        vModelCheckbox = _vueRuntimeEsmBundlerLegacy003Js.u;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useRootStore = _useTelemetryLegacy00FJs.Zs;
        defineStore = _useTelemetryLegacy00FJs.bc;
        saveProvisioningConfig = _useTelemetryLegacy00FJs.ms;
        getProvisioningConfig = _useTelemetryLegacy00FJs.ps;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_b5ixa_123 {\n  padding-bottom: var(--spacing--2xl);\n  max-width: 600px;\n}\n._heading_b5ixa_128 {\n  margin-bottom: var(--spacing--sm);\n}\n._loading_b5ixa_132 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--spacing--2xl);\n}\n._buttons_b5ixa_139 {\n  display: flex;\n  justify-content: flex-start;\n  padding: var(--spacing--2xl) 0 var(--spacing--2xs);\n}\n._buttons_b5ixa_139 button {\n  margin: 0 var(--spacing--sm) 0 0;\n}\n._group_b5ixa_148 {\n  padding: var(--spacing--xl) 0 0;\n}\n._group_b5ixa_148 > label {\n  display: inline-block;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--medium);\n  padding: 0 0 var(--spacing--2xs);\n}\n._group_b5ixa_148 small {\n  display: block;\n  padding: var(--spacing--2xs) 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._frequencySelect_b5ixa_164 {\n  display: block;\n  width: 240px;\n}\n._checkbox_b5ixa_169 {\n  margin-right: var(--spacing--xs);\n  transform: scale(1.2);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/provisioning/provisioning.store.ts
        useProvisioningStore = defineStore("provisioning", () => {
          const rootStore = useRootStore();
          const provisioningConfig = ref();
          const isProvisioningEnabled = computed(() => provisioningConfig.value?.scopesProvisionInstanceRole || provisioningConfig.value?.scopesProvisionProjectRoles || false);
          const getProvisioningConfig$1 = async () => {
            try {
              const config = await getProvisioningConfig(rootStore.restApiContext);
              provisioningConfig.value = config;
              return config;
            } catch (error) {
              console.error("Failed to fetch provisioning config:", error);
              throw error;
            }
          };
          const saveProvisioningConfig$1 = async config => {
            try {
              const updatedConfig = await saveProvisioningConfig(rootStore.restApiContext, config);
              provisioningConfig.value = updatedConfig;
              return updatedConfig;
            } catch (error) {
              console.error("Failed to save provisioning config:", error);
              throw error;
            }
          };
          return {
            provisioningConfig,
            isProvisioningEnabled,
            getProvisioningConfig: getProvisioningConfig$1,
            saveProvisioningConfig: saveProvisioningConfig$1
          };
        }); //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 1
        };
        _hoisted_2 = {
          for: "provisioning-enabled"
        };
        SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsProvisioningView",
          setup(__props) {
            const i18n = useI18n();
            const documentTitle = useDocumentTitle();
            const {
              showError,
              showMessage
            } = useToast();
            const provisioningStore = useProvisioningStore();
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.provisioning.title"));
              loading$1.value = true;
              try {
                await provisioningStore.getProvisioningConfig();
                loadFormData();
              } catch (error) {
                showError(error, i18n.baseText("settings.provisioning.loadError"));
              } finally {
                loading$1.value = false;
              }
            });
            const loading$1 = ref(false);
            const saving = ref(false);
            const form = reactive({
              scopesName: "",
              scopesInstanceRoleClaimName: "",
              scopesProjectsRolesClaimName: "",
              provisioningEnabled: false
            });
            const isFormDirty = computed(() => {
              const config = provisioningStore.provisioningConfig;
              if (!config) return false;
              const configChanged = ["scopesName", "scopesInstanceRoleClaimName", "scopesProjectsRolesClaimName"].some(key => form[key] !== config[key]);
              const provisioningEnabledChanged = form.provisioningEnabled !== (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles);
              return configChanged || provisioningEnabledChanged;
            });
            const loadFormData = () => {
              const cfg = provisioningStore.provisioningConfig;
              if (!cfg) return;
              Object.assign(form, {
                scopesName: cfg.scopesName || "",
                scopesInstanceRoleClaimName: cfg.scopesInstanceRoleClaimName || "",
                scopesProjectsRolesClaimName: cfg.scopesProjectsRolesClaimName || ""
              });
              form.provisioningEnabled = cfg.scopesProvisionInstanceRole;
            };
            const onSave = async () => {
              saving.value = true;
              try {
                const {
                  provisioningEnabled,
                  ...dataToSave
                } = form;
                await provisioningStore.saveProvisioningConfig({
                  ...dataToSave,
                  scopesProvisionInstanceRole: provisioningEnabled,
                  scopesProvisionProjectRoles: provisioningEnabled
                });
                await provisioningStore.getProvisioningConfig();
                loadFormData();
                showMessage({
                  title: i18n.baseText("settings.provisioning.saveSuccess"),
                  message: i18n.baseText("settings.provisioning.saveSuccessMessage"),
                  type: "success",
                  duration: 3e3
                });
              } catch (error) {
                showError(error, i18n.baseText("settings.provisioning.saveError"));
              } finally {
                saving.value = false;
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.heading)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.title")), 1)]),
                _: 1
              })], 2), createVNode(unref(N8nText_default), {
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.description")), 1)]),
                _: 1
              }), loading$1.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.loading)
              }, [createVNode(unref(N8nSpinner_default), {
                size: "large"
              })], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle.help")), 1), withDirectives(createBaseVNode("input", {
                id: "provisioning-enabled",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => form.provisioningEnabled = $event),
                type: "checkbox",
                class: normalizeClass(_ctx.$style.checkbox)
              }, null, 2), [[vModelCheckbox, form.provisioningEnabled]])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesName,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => form.scopesName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesInstanceRoleClaimName,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => form.scopesInstanceRoleClaimName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesProjectsRolesClaimName,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => form.scopesProjectsRolesClaimName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                disabled: !isFormDirty.value || saving.value,
                size: "large",
                loading: saving.value,
                onClick: onSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.save")), 1)]),
                _: 1
              }, 8, ["disabled", "loading"])], 2)]))], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_b5ixa_123";
        heading = "_heading_b5ixa_128";
        loading = "_loading_b5ixa_132";
        buttons = "_buttons_b5ixa_139";
        group = "_group_b5ixa_148";
        frequencySelect = "_frequencySelect_b5ixa_164";
        checkbox = "_checkbox_b5ixa_169";
        SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          heading,
          loading,
          buttons,
          group,
          frequencySelect,
          checkbox
        }; //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue
        cssModules = {
          "$style": SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsProvisioningView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();
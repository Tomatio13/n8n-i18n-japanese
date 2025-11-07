import { C as computed, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, Z as onMounted, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, u as vModelCheckbox, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-BecNBFeT.js";
import { Ct as N8nInput_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, Rn as N8nSpinner_default } from "./src-CfTpoyeY.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BZrAdcfN.js";
import "./icon-XQY4TXQ5.js";
import "./empty-RTEMfF4N.js";
import { Tn as useDocumentTitle, Zs as useRootStore, bc as defineStore, ms as saveProvisioningConfig, ps as getProvisioningConfig } from "./useTelemetry-Bj7xGk8p.js";
import { t as useToast } from "./useToast-DELebJfp.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import "./constants-WMddrDmV.js";
import "./merge-CTrTJJe4.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-HLmV-jng.js";
import "./useExternalHooks-DuJjJf0w.js";
const useProvisioningStore = defineStore("provisioning", () => {
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
	const saveProvisioningConfig$1 = async (config) => {
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
});
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { for: "provisioning-enabled" };
var SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsProvisioningView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
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
			const configChanged = [
				"scopesName",
				"scopesInstanceRoleClaimName",
				"scopesProjectsRolesClaimName"
			].some((key) => form[key] !== config[key]);
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
				const { provisioningEnabled,...dataToSave } = form;
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.description")), 1)]),
					_: 1
				}),
				loading$1.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nSpinner_default), { size: "large" })], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle")), 1),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle.help")), 1),
						withDirectives(createBaseVNode("input", {
							id: "provisioning-enabled",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.provisioningEnabled = $event),
							type: "checkbox",
							class: normalizeClass(_ctx.$style.checkbox)
						}, null, 2), [[vModelCheckbox, form.provisioningEnabled]])
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesName,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.scopesName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesInstanceRoleClaimName,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.scopesInstanceRoleClaimName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesProjectsRolesClaimName,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.scopesProjectsRolesClaimName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
						disabled: !isFormDirty.value || saving.value,
						size: "large",
						loading: saving.value,
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.save")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"])], 2)
				]))
			], 2);
		};
	}
});
var SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_b5ixa_123",
	heading: "_heading_b5ixa_128",
	loading: "_loading_b5ixa_132",
	buttons: "_buttons_b5ixa_139",
	group: "_group_b5ixa_148",
	frequencySelect: "_frequencySelect_b5ixa_164",
	checkbox: "_checkbox_b5ixa_169"
};
var SettingsProvisioningView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsProvisioningView_default as default };

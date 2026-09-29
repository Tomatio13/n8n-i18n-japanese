import { Gt as unref, It as ref, P as getCurrentInstance, R as inject, S as computed, Vt as toRef, X as onMounted, Z as onUnmounted, gt as watch } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as useId } from "./icon-OgbQpBGS.js";
import { n as useGlobalSize } from "./use-size-BhKdgz8u.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/hooks/use-prop/index.mjs
var useProp = (name) => {
	const vm = getCurrentInstance();
	return computed(() => {
		var _a, _b;
		return (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$props) == null ? void 0 : _b[name];
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/components/form/src/constants.mjs
var formContextKey = Symbol("formContextKey");
var formItemContextKey = Symbol("formItemContextKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/components/form/src/hooks/use-form-common-props.mjs
var useFormSize = (fallback, ignore = {}) => {
	const emptyRef = ref(void 0);
	const size = ignore.prop ? emptyRef : useProp("size");
	const globalConfig = ignore.global ? emptyRef : useGlobalSize();
	const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
	const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
	return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "");
};
var useFormDisabled = (fallback) => {
	const disabled = useProp("disabled");
	const form = inject(formContextKey, void 0);
	return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/components/form/src/hooks/use-form-item.mjs
var useFormItem = () => {
	return {
		form: inject(formContextKey, void 0),
		formItem: inject(formItemContextKey, void 0)
	};
};
var useFormItemInputId = (props, { formItemContext, disableIdGeneration, disableIdManagement }) => {
	if (!disableIdGeneration) disableIdGeneration = ref(false);
	if (!disableIdManagement) disableIdManagement = ref(false);
	const inputId = ref();
	let idUnwatch = void 0;
	const isLabeledByFormItem = computed(() => {
		var _a;
		return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
	});
	onMounted(() => {
		idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
			const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
			if (newId !== inputId.value) {
				if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
					inputId.value && formItemContext.removeInputId(inputId.value);
					if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) formItemContext.addInputId(newId);
				}
				inputId.value = newId;
			}
		}, { immediate: true });
	});
	onUnmounted(() => {
		idUnwatch && idUnwatch();
		if (formItemContext == null ? void 0 : formItemContext.removeInputId) inputId.value && formItemContext.removeInputId(inputId.value);
	});
	return {
		isLabeledByFormItem,
		inputId
	};
};
//#endregion
export { formItemContextKey as a, useFormSize as i, useFormItemInputId as n, useFormDisabled as r, useFormItem as t };

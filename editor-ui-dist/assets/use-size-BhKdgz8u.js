import { Gt as unref, R as inject, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as buildProp } from "./plugin-vue_export-helper-DRkkgGiw.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/constants/size.mjs
var componentSizes = [
	"",
	"default",
	"small",
	"large"
];
var componentSizeMap = {
	large: 40,
	default: 32,
	small: 24
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/hooks/use-size/index.mjs
var useSizeProp = buildProp({
	type: String,
	values: componentSizes,
	required: false
});
var SIZE_INJECTION_KEY = Symbol("size");
var useGlobalSize = () => {
	const injectedSize = inject(SIZE_INJECTION_KEY, {});
	return computed(() => {
		return unref(injectedSize.size) || "";
	});
};
//#endregion
export { componentSizes as a, componentSizeMap as i, useGlobalSize as n, useSizeProp as r, SIZE_INJECTION_KEY as t };

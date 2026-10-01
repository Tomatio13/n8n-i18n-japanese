import { an as isFunction, tn as init_shared_esm_bundler } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/utils/vue/refs.mjs
init_shared_esm_bundler();
var composeRefs = (...refs) => {
	return (el) => {
		refs.forEach((ref) => {
			if (isFunction(ref)) ref(el);
			else ref.value = el;
		});
	};
};
//#endregion
export { composeRefs as t };

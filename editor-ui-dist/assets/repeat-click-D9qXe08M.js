import { an as isFunction, tn as init_shared_esm_bundler } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=9547bca88969f416e6132b09a48e71a969dce25ee6669c7f1f78d51ce_fca96918dfb7fba3852d058e36f4b42b/node_modules/element-plus/es/directives/repeat-click/index.mjs
init_shared_esm_bundler();
var vRepeatClick = { beforeMount(el, binding) {
	const value = binding.value;
	const { interval = 100, delay = 600 } = isFunction(value) ? {} : value;
	let intervalId;
	let delayId;
	const handler = () => isFunction(value) ? value() : value.handler();
	const clear = () => {
		if (delayId) {
			clearTimeout(delayId);
			delayId = void 0;
		}
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = void 0;
		}
	};
	el.addEventListener("mousedown", (evt) => {
		if (evt.button !== 0) return;
		clear();
		handler();
		document.addEventListener("mouseup", () => clear(), { once: true });
		delayId = setTimeout(() => {
			intervalId = setInterval(() => {
				handler();
			}, interval);
		}, delay);
	});
} };
//#endregion
export { vRepeatClick as t };

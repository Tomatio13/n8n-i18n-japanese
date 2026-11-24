import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Wd as createVNode, Zd as init_runtime_core_esm_bundler, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, mM as N8nLoading_default } from "./app-BJz3tlB7.js";
//#region src/app/components/layouts/ResourcesListSkeleton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
//#endregion
//#region src/app/components/layouts/ResourcesListSkeleton.vue
var ResourcesListSkeleton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ResourcesListSkeleton",
	props: {
		rows: { default: 25 },
		immediate: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["resource-list-loading", { "resource-list-loading-instant": __props.immediate }]) }, [createVNode(unref(N8nLoading_default), {
				rows: __props.rows,
				"shrink-last": false
			}, null, 8, ["rows"])], 2);
		};
	}
}), [["__scopeId", "data-v-7c36ef5f"]]);
//#endregion
export { ResourcesListSkeleton_default as t };

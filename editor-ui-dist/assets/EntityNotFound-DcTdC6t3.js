import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Fj as N8nHeading_default, Kj as N8nCard_default, NM as _plugin_vue_export_helper_default, bM as N8nText_default, kM as N8nButton_default, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/app/views/EntityNotFound.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "entity-not-found-view" };
//#endregion
//#region src/app/views/EntityNotFound.vue
var EntityNotFound_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "EntityNotFound",
	props: { entityType: {} },
	setup(__props) {
		const locale = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nCard_default), { class: "entity-card" }, {
				default: withCtx(() => [
					_cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-center mb-l" }, [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none"
					}, [
						createBaseVNode("circle", {
							cx: "12",
							cy: "12",
							r: "10",
							stroke: "var(--text-button--color--text--secondary)",
							"stroke-width": "2"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "6",
							width: "2",
							height: "8",
							fill: "var(--text-button--color--text--secondary)"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "16",
							width: "2",
							height: "2",
							fill: "var(--text-button--color--text--secondary)"
						})
					])], -1)),
					createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						align: "center",
						tag: "h2",
						color: "text-dark",
						class: "mb-2xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.title", { interpolate: { entity: unref(locale).baseText(`generic.${__props.entityType}`) } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-base",
						tag: "p",
						align: "center",
						class: "mb-m"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.text", { interpolate: { entity: unref(locale).baseText(`generic.${__props.entityType}`).toLocaleLowerCase() } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						href: "/"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.action")), 1)]),
						_: 1
					})
				]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-b88b407b"]]);
//#endregion
export { EntityNotFound_default as default };

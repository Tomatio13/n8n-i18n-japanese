import { Bd as createTextVNode, Bf as unref, Ld as createElementBlock, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, cf as renderSlot, fp as toDisplayString, uf as resolveDirective, xf as withDirectives } from "./vendor-C1jTjpo6.js";
import { Dw as useI18n, Fu as useBackendConnectionStore, Sc as usePushConnectionStore, Sw as _plugin_vue_export_helper_default, fw as N8nTooltip_default, uw as N8nText_default, yw as N8nIcon_default } from "./app-C-V9N0hV.js";
//#region src/app/components/ConnectionTracker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "connection-lost"
};
var _hoisted_2 = { class: "connection-lost-content" };
//#endregion
//#region src/app/components/ConnectionTracker.vue
var ConnectionTracker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ConnectionTracker",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const backendConnectionStore = useBackendConnectionStore();
		const i18n = useI18n();
		const connectionStatus = computed(() => {
			if (!backendConnectionStore.isOnline) return {
				hasError: true,
				message: "network.error.message",
				tooltip: "network.error.tooltip"
			};
			if (pushConnectionStore.isConnectionRequested && !pushConnectionStore.isConnected && !pushConnectionStore.isConnecting) return {
				hasError: true,
				message: "pushConnection.error.message",
				tooltip: "pushConnection.error.tooltip"
			};
			return {
				hasError: false,
				message: null,
				tooltip: null
			};
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("span", null, [connectionStatus.value.hasError ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTooltip_default), { placement: "bottom-end" }, {
				content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(connectionStatus.value.tooltip)]])]),
				default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					color: "warning"
				}), createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(connectionStatus.value.message)), 1)]),
					_: 1
				})])]),
				_: 1
			})])) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)]);
		};
	}
}), [["__scopeId", "data-v-6825e866"]]);
//#endregion
export { ConnectionTracker_default as t };

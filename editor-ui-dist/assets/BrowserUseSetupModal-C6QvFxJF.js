import { Af as unref, Nd as defineComponent, Td as createBlock, Yd as openBlock, jd as createVNode, uf as withCtx } from "./vendor-C0K-pJCd.js";
import { au as Modal_default, xC as createEventBus } from "./app-Gcu_WcI0.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-BZ7d64f1.js";
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupModal.vue
var BrowserUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const modalBus = createEventBus();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"event-bus": unref(modalBus),
				"custom-class": "instance-ai-browser-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(BrowserUseSetupContent_default, {
					"auto-connect": "",
					onClose: _cache[0] || (_cache[0] = ($event) => unref(modalBus).emit("close"))
				})]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
//#endregion
export { BrowserUseSetupModal_default as default };

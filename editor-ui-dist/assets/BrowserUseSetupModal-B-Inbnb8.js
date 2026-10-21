import { Hd as createVNode, Id as createBlock, Vf as unref, Wd as defineComponent, of as openBlock, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { Gw as createEventBus, rd as Modal_default } from "./app-Bl9bQlKQ.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-U2Z7hrzU.js";
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

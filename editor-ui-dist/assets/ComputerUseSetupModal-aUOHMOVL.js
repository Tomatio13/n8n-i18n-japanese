import { Hd as createVNode, Id as createBlock, Wd as defineComponent, of as openBlock, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { rd as Modal_default } from "./app-Bl9bQlKQ.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-BGAh2y5c.js";
//#endregion
//#region src/features/ai/instanceAi/components/modals/ComputerUseSetupModal.vue
var ComputerUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "ComputerUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"custom-class": "instance-ai-computer-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(ComputerUseSetupContent_default)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
//#endregion
export { ComputerUseSetupModal_default as default };

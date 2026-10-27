import { Id as defineComponent, Od as createBlock, Pd as createVNode, Qd as openBlock, pf as withCtx } from "./vendor-DtL-V0ia.js";
import { Md as Modal_default } from "./app-BdR1u3Ua.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-BUvjTSw5.js";
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

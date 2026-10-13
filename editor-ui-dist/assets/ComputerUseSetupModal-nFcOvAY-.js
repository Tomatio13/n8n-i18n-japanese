import { Fd as createBlock, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx } from "./vendor-C1jTjpo6.js";
import { _u as Modal_default } from "./app-C5zIGyiz.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-DasVEb5j.js";
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

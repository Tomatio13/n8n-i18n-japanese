import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Mf as init_reactivity_esm_bundler, Rd as computed, Vd as createCommentVNode, Yf as unref, ff as openBlock } from "./vendor-BtpAr53w.js";
import { DD as AiActivityStep_default } from "./app-Dp0u0Hpe.js";
import { t as useInstanceContextLabel } from "./instanceContextLabels-CzrOYwqx.js";
import { n as parseInstanceContextHostEvent } from "./assistantHostEvents-QRDy4yv_.js";
//#region src/features/ai/instanceAi/assistantAgent/AssistantInstanceContextHostEvent.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/ai/instanceAi/assistantAgent/AssistantInstanceContextHostEvent.vue
var AssistantInstanceContextHostEvent_default = /* @__PURE__ */ defineComponent({
	__name: "AssistantInstanceContextHostEvent",
	props: { event: {} },
	setup(__props) {
		const props = __props;
		const { getInstanceContextLabel } = useInstanceContextLabel();
		const label = computed(() => {
			const summary = parseInstanceContextHostEvent(props.event);
			return summary ? getInstanceContextLabel(summary) : "";
		});
		return (_ctx, _cache) => {
			return label.value ? (openBlock(), createBlock(unref(AiActivityStep_default), {
				key: 0,
				label: label.value,
				"has-content": false,
				"data-test-id": "assistant-agent-instance-context"
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { AssistantInstanceContextHostEvent_default as default };

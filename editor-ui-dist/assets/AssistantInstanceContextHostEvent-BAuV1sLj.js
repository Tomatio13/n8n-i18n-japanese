import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { wA as AiActivityStep_default } from "./app-CkjcdAxY.js";
import { t as useInstanceContextLabel } from "./instanceContextLabels-n_M_Df4m.js";
import { n as parseInstanceContextHostEvent } from "./assistantHostEvents-DnH4aWuI.js";
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

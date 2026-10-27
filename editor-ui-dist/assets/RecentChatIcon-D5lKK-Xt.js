import { Ed as computed, Id as defineComponent, Nf as unref, Od as createBlock, Qd as openBlock, kd as createCommentVNode } from "./vendor-DtL-V0ia.js";
import { Fr as AgentPersonalisationIcon_default, wE as N8nIcon_default } from "./app-BdR1u3Ua.js";
//#endregion
//#region src/features/agents/n8nChatPage/components/RecentChatIcon.vue
var RecentChatIcon_default = /* @__PURE__ */ defineComponent({
	__name: "RecentChatIcon",
	props: {
		item: { default: void 0 },
		size: { default: 16 }
	},
	setup(__props) {
		const props = __props;
		const assistantIconSize = computed(() => Math.round(props.size * .75));
		return (_ctx, _cache) => {
			return __props.item?.kind === "assistant" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "n8n-assistant",
				size: assistantIconSize.value
			}, null, 8, ["size"])) : __props.item?.kind === "agent" ? (openBlock(), createBlock(AgentPersonalisationIcon_default, {
				key: 1,
				personalisation: __props.item.thread.agent.personalisation,
				size: __props.size
			}, null, 8, ["personalisation", "size"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { RecentChatIcon_default as t };

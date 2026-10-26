import { Id as createBlock, Ld as createCommentVNode, Pd as computed, Vf as unref, Wd as defineComponent, of as openBlock } from "./vendor-D9HlBS7Y.js";
import { DT as N8nIcon_default, gr as AgentPersonalisationIcon_default } from "./app-TXEjHrLJ.js";
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
		const sparkleSize = computed(() => Math.round(props.size * .75));
		return (_ctx, _cache) => {
			return __props.item?.kind === "assistant" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "sparkles",
				size: sparkleSize.value
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

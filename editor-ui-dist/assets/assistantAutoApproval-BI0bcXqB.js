const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AssistantAutoApprovalStep-VD4BGU3c.js","assets/vendor-zYfdu4Ed.js","assets/rolldown-runtime-EITvVbkG.js","assets/vendor-CB64RKTG.css","assets/app-CkjcdAxY.js","assets/app-dNJMURUy.css","assets/autoApproval-DF-5zwLk.js","assets/AssistantAutoApprovalStep-C37ow8aH.css"])))=>i.map(i=>d[i]);
import { Gd as defineAsyncComponent, Zd as init_runtime_core_esm_bundler } from "./vendor-zYfdu4Ed.js";
import { Ek as autoApprovalPayloadSchema, FM as __vitePreload, eh as HOST_EVENT_PLACEMENT } from "./app-CkjcdAxY.js";
//#region src/features/ai/instanceAi/assistantAgent/assistantAutoApproval.ts
init_runtime_core_esm_bundler();
function parseAssistantAutoApproval(event) {
	if (event.name !== "auto-approval") return void 0;
	const parsed = autoApprovalPayloadSchema.safeParse(event.payload);
	return parsed.success ? parsed.data : void 0;
}
/** Shows each action that Auto mode ran without a card right before the step of its call. */
var assistantAutoApprovalExtension = {
	key: "assistant_auto_approval",
	matchHostEvent: (event) => parseAssistantAutoApproval(event) !== void 0,
	hostEventComponent: defineAsyncComponent(async () => await __vitePreload(() => import("./AssistantAutoApprovalStep-VD4BGU3c.js"), __vite__mapDeps([0,1,2,3,4,5,6,7]))),
	hostEventPlacement: HOST_EVENT_PLACEMENT.TOOL_CALL,
	hostEventToolCallId: (event) => parseAssistantAutoApproval(event)?.toolCallId
};
//#endregion
export { parseAssistantAutoApproval as n, assistantAutoApprovalExtension as t };

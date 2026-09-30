import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { fr as defineStore } from "./useRootStore-DR5raQ_t.js";
//#region src/features/agents/agentReturnContext.store.ts
var useAgentReturnContextStore = defineStore("agentReturnContext", () => {
	const context = ref(null);
	const pendingArtifactReturn = ref(null);
	function set(ctx) {
		context.value = ctx;
	}
	function clear() {
		context.value = null;
	}
	function setPendingArtifactReturn(pending) {
		pendingArtifactReturn.value = pending;
	}
	function consumePendingArtifactReturn() {
		const pending = pendingArtifactReturn.value;
		pendingArtifactReturn.value = null;
		return pending;
	}
	return {
		context,
		pendingArtifactReturn,
		set,
		clear,
		setPendingArtifactReturn,
		consumePendingArtifactReturn
	};
});
//#endregion
export { useAgentReturnContextStore as t };

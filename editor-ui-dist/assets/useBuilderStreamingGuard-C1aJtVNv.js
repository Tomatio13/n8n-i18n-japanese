import { c as useI18n } from "./src-C397uuXA.js";
import { t as useBuilderStore } from "./builder.store-Doqbxxx1.js";
import { t as useMessage } from "./useMessage-Cg0wKfzg.js";
import "./constants-BFgNRWjM.js";
//#region src/features/ai/assistant/composables/useBuilderStreamingGuard.ts
/**
* Shows a confirmation dialog if the AI builder is currently streaming.
* Returns `true` if the caller should proceed (not streaming, or user confirmed).
* Returns `false` if the user cancelled and the caller should abort.
*
* When the user confirms, streaming is aborted before returning.
*/
async function confirmIfBuilderStreaming() {
	const builderStore = useBuilderStore();
	if (!builderStore.streaming) return true;
	const { confirm } = useMessage();
	const i18n = useI18n();
	if (await confirm(i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.message"), {
		title: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.title"),
		type: "warning",
		confirmButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.confirmButtonText"),
		cancelButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.cancelButtonText"),
		showClose: true
	}) !== "confirm") return false;
	builderStore.abortStreaming();
	return true;
}
//#endregion
export { confirmIfBuilderStreaming as t };

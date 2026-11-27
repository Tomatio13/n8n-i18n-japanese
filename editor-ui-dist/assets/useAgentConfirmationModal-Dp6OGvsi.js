import { Em as AGENT_CONFIRMATION_MODAL_KEY, Mb as MODAL_CLOSE, Nb as MODAL_CONFIRM, gg as useUIStore, jb as MODAL_CANCEL } from "./app-BXv1VOvT.js";
//#region src/features/agents/composables/useAgentConfirmationModal.ts
function useAgentConfirmationModal() {
	const uiStore = useUIStore();
	async function openAgentConfirmationModal(options) {
		return await new Promise((resolve) => {
			uiStore.openModalWithData({
				name: AGENT_CONFIRMATION_MODAL_KEY,
				data: {
					...options,
					onConfirm: () => {
						resolve(MODAL_CONFIRM);
					},
					onCancel: () => {
						resolve(MODAL_CANCEL);
					},
					onClose: () => {
						resolve(MODAL_CLOSE);
					}
				}
			});
		});
	}
	return { openAgentConfirmationModal };
}
//#endregion
export { useAgentConfirmationModal as t };

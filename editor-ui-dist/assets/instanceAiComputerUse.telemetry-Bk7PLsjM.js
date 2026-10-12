import { H_ as useTelemetry, _m as TELEMETRY_EVENT } from "./app-Gcu_WcI0.js";
//#region src/features/ai/instanceAi/instanceAiComputerUse.telemetry.ts
function useInstanceAiComputerUseTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackModalOpened(isConnected, source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.COMPUTER_USE_MODAL_OPENED, {
				is_connected: isConnected,
				source
			});
		},
		trackCommandCopied(os) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.COMPUTER_USE_CONNECTION_COMMAND_COPIED, { os });
		}
	};
}
//#endregion
export { useInstanceAiComputerUseTelemetry as t };

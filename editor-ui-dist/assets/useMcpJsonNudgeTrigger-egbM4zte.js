import { t as useTelemetry } from "./useTelemetry-30Afudd_.js";
import { Za as MCP_JSON_NUDGE_EXPERIMENT } from "./constants-CyB1HP9v.js";
import { a as TELEMETRY_EVENT } from "./src-CujaOyWm.js";
import { t as usePostHog } from "./posthog.store-BHADDpKv.js";
import { n as useUIStore } from "./ui.store-DfWIxg_D.js";
import { n as MCP_JSON_NUDGE_MODAL_KEY } from "./constants-C450kEOi.js";
import { t as useMcpJsonNudgeEligibility } from "./useMcpJsonNudgeEligibility-DQZT8lF-.js";
//#region src/experiments/mcpJsonNudge/composables/useMcpJsonNudgeTrigger.ts
function useMcpJsonNudgeTrigger() {
	const uiStore = useUIStore();
	const eligibility = useMcpJsonNudgeEligibility();
	const telemetry = useTelemetry();
	const posthogStore = usePostHog();
	/**
	* Runs `action` (the export or import) behind the nudge. When the nudge is
	* eligible, the modal opens and the action is deferred to its `onContinue`
	* (Skip / dismiss); Connect abandons it. Otherwise the action runs right away.
	*/
	async function gate(surface, action) {
		if (uiStore.isModalActiveById["mcpJsonNudgeModal"]) {
			await action();
			return;
		}
		if (eligibility.isEligibleApartFromExperiment()) posthogStore.trackExposure(MCP_JSON_NUDGE_EXPERIMENT.name);
		if (!eligibility.canShow()) {
			await action();
			return;
		}
		uiStore.openModalWithData({
			name: MCP_JSON_NUDGE_MODAL_KEY,
			data: {
				surface,
				onContinue: action
			}
		});
		telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_VIEWED, { surface });
		eligibility.recordImpression();
	}
	return { gate };
}
//#endregion
export { useMcpJsonNudgeTrigger as t };

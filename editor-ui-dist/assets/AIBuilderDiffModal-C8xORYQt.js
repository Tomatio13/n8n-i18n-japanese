import { Cd as init_runtime_dom_esm_bundler, Ed as useCssModule, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Zd as init_runtime_core_esm_bundler, jf as init_reactivity_esm_bundler, sf as onMounted, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { Iu as useBuilderStore, MS as useTelemetry, NM as _plugin_vue_export_helper_default, _b as AI_BUILDER_DIFF_MODAL_KEY, gg as useUIStore } from "./app-BJz3tlB7.js";
import { t as Modal_default } from "./Modal-UWXQ2H-M.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B_3VPAhg.js";
//#region src/features/ai/assistant/components/Agent/AIBuilderDiffModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var AIBuilderDiffModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AIBuilderDiffModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const telemetry = useTelemetry();
		const builderStore = useBuilderStore();
		const uiStore = useUIStore();
		onMounted(() => {
			telemetry.track("Workflow diff view opened", { source: "ai-builder-review" });
			builderStore.trackWorkflowBuilderJourney("user_opened_review_changes");
		});
		function handleBeforeClose() {
			telemetry.track("Workflow diff view closed", { source: "ai-builder-review" });
			builderStore.trackWorkflowBuilderJourney("user_closed_review_changes");
		}
		function closeModal() {
			uiStore.closeModal(AI_BUILDER_DIFF_MODAL_KEY);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				"event-bus": __props.data.eventBus,
				name: unref(AI_BUILDER_DIFF_MODAL_KEY),
				"custom-class": unref($style).aiBuilderDiffModal,
				height: "100%",
				width: "100%",
				"max-width": "100%",
				"max-height": "100%",
				"close-on-press-escape": true,
				"append-to-body": true,
				"before-close": handleBeforeClose
			}, {
				content: withCtx(() => [createVNode(WorkflowDiffView_default, {
					"source-workflow": props.data.sourceWorkflow,
					"target-workflow": props.data.targetWorkflow,
					"source-label": props.data.sourceLabel,
					"target-label": props.data.targetLabel,
					"show-back-button": true,
					onBack: closeModal
				}, null, 8, [
					"source-workflow",
					"target-workflow",
					"source-label",
					"target-label"
				])]),
				_: 1
			}, 8, [
				"event-bus",
				"name",
				"custom-class"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	aiBuilderDiffModal: "_aiBuilderDiffModal_ekwoq_1",
	backButton: "_backButton_ekwoq_15"
} }]]);
//#endregion
export { AIBuilderDiffModal_default as default };

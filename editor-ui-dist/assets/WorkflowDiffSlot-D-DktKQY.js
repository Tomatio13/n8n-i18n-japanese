import { Ed as computed, Id as defineComponent, Od as createBlock, Qd as openBlock, jd as createSlots, pf as withCtx, tf as renderSlot, xf as markRaw } from "./vendor-z-loPfiR.js";
import { hr as WorkflowDiffView_default, iC as deepCopy } from "./app-kkzDAG6o.js";
//#endregion
//#region src/features/workflows/workflowDiff/WorkflowDiffSlot.vue
var WorkflowDiffSlot_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDiffSlot",
	props: {
		workflowId: {},
		workflowName: {},
		sourceSnapshot: {},
		targetSnapshot: {},
		sourceLabel: {},
		targetLabel: {},
		showFullscreenButton: { type: Boolean },
		canvasIdPrefix: {},
		hideTitle: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		function toWorkflow(snapshot) {
			if (!snapshot) return void 0;
			return markRaw(deepCopy({
				id: props.workflowId,
				name: props.workflowName,
				active: false,
				isArchived: false,
				createdAt: snapshot.createdAt,
				updatedAt: snapshot.createdAt,
				versionId: snapshot.versionId,
				activeVersionId: null,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups
			}));
		}
		const sourceWorkflow = computed(() => toWorkflow(props.sourceSnapshot));
		const targetWorkflow = computed(() => toWorkflow(props.targetSnapshot));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowDiffView_default, {
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": __props.sourceLabel,
				"target-label": __props.targetLabel,
				"show-fullscreen-button": __props.showFullscreenButton,
				"canvas-id-prefix": __props.canvasIdPrefix,
				"hide-title": __props.hideTitle
			}, createSlots({ _: 2 }, [
				_ctx.$slots.sourceLabel ? {
					name: "sourceLabel",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "sourceLabel")]),
					key: "0"
				} : void 0,
				_ctx.$slots.targetLabel ? {
					name: "targetLabel",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "targetLabel")]),
					key: "1"
				} : void 0,
				_ctx.$slots.sourceEmptyText ? {
					name: "sourceEmptyText",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "sourceEmptyText")]),
					key: "2"
				} : void 0
			]), 1032, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"show-fullscreen-button",
				"canvas-id-prefix",
				"hide-title"
			]);
		};
	}
});
//#endregion
export { WorkflowDiffSlot_default as default };

import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Qd as inject, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, gf as resolveDynamicComponent, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, Og as use, _g as tagNames, bM as N8nText_default, kg as get, zM as useI18n } from "./app-CkjcdAxY.js";
import { a as toPromotionDiffSide, i as isBranchSide, o as PromotionAbsentSideLabelsKey, t as PromotionWorkflowSideLabel_default } from "./PromotionWorkflowSideLabel-_5Ugeo0V.js";
//#region ../../modules/promotions/frontend/src/components/preview/PromotionWorkflowDiff.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var PromotionWorkflowDiff_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionWorkflowDiff",
	props: {
		detail: {},
		resourceKey: {},
		direction: {},
		graph: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const absentLabels = inject(PromotionAbsentSideLabelsKey, void 0);
		const tagNames$1 = use(tagNames);
		const WorkflowDiff = computed(() => get("workflow-diff"));
		onMounted(async () => {
			try {
				await tagNames$1.load();
			} catch {}
		});
		function tagNameOf(side) {
			return (id) => {
				const resource = props.graph.resources.get(`tag:${id}`);
				if (!resource) return tagNames$1.nameOf(id) ?? id;
				return side === "before" ? resource.previousName ?? resource.name : resource.name;
			};
		}
		function snapshotOf(side) {
			const state = toPromotionDiffSide(props.detail, side, tagNameOf(side));
			return state.kind === "content" ? state.content : void 0;
		}
		const source = computed(() => snapshotOf("before"));
		const target = computed(() => snapshotOf("after"));
		const workflow = computed(() => props.detail.after ?? props.detail.before);
		function emptyTextOf(side) {
			return absentLabels?.[side] ?? i18n.baseText(isBranchSide(side, props.direction) ? "promotions.preview.side.notOnBranch" : "promotions.preview.side.notOnInstance");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.diff),
				"data-test-id": "promotion-preview-workflow-diff"
			}, [WorkflowDiff.value ? (openBlock(), createBlock(resolveDynamicComponent(WorkflowDiff.value), {
				key: 0,
				"workflow-id": workflow.value?.id ?? __props.resourceKey,
				"workflow-name": workflow.value?.name ?? "",
				"source-snapshot": source.value,
				"target-snapshot": target.value,
				"canvas-id-prefix": __props.resourceKey,
				"show-fullscreen-button": "",
				"require-canvas-focus": "",
				"hide-title": ""
			}, {
				sourceLabel: withCtx(() => [createVNode(PromotionWorkflowSideLabel_default, { side: "before" })]),
				targetLabel: withCtx(() => [createVNode(PromotionWorkflowSideLabel_default, { side: "after" })]),
				sourceEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyTextOf("before")), 1)]),
					_: 1
				})]),
				targetEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyTextOf("after")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"workflow-id",
				"workflow-name",
				"source-snapshot",
				"target-snapshot",
				"canvas-id-prefix"
			])) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": { diff: "_diff_gmfmp_1" } }]]);
//#endregion
export { PromotionWorkflowDiff_default as default };

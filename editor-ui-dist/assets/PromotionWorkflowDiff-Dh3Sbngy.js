import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Mf as init_reactivity_esm_bundler, Rd as computed, Vd as createCommentVNode, Yf as unref, ef as inject, ff as openBlock, gp as normalizeClass, lf as onMounted, rp as init_shared_esm_bundler, vf as resolveDynamicComponent, xp as toDisplayString } from "./vendor-BtpAr53w.js";
import { Fk as useI18n, H_ as use, U_ as get, _k as N8nText_default, j_ as tagNames, kk as _plugin_vue_export_helper_default } from "./app-Dp0u0Hpe.js";
import { a as toPromotionDiffSide, i as isBranchSide, o as PromotionAbsentSideLabelsKey, t as PromotionWorkflowSideLabel_default } from "./PromotionWorkflowSideLabel-C73T2ROA.js";
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

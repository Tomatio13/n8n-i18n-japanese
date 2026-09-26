const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-B3l1BGxr.js","assets/_plugin-vue_export-helper-BV7tgqAU.js","assets/chunk-CC9Q-vWm.js","assets/src-saBS3VLT.js","assets/preload-helper-CUiGbY1o.js","assets/lib-BQlKZQEI.js","assets/_MapCache-DZ3c0MyV.js","assets/isObject-CuOGLKLO.js","assets/merge-DE7gCDJF.js","assets/get-D3N_f-PZ.js","assets/isSymbol-D3VPv5yW.js","assets/expression-runtime-stub-CFMzV69h.js","assets/__vite-browser-external-DJAlrGU7.js","assets/src-cuvvA3pI.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/workflows.store-fOIpEAUT.js","assets/dist-DHr3MfZO.js","assets/useRootStore-CVbOmixR.js","assets/lib-BNZ9usf7.js","assets/assert-BzqDnKeJ.js","assets/settings.store-BY2qTSjy.js","assets/dist-BvHLGitf.js","assets/evaluation.store-DeJOnobE.js","assets/useDebounce-Bv-wlZOG.js","assets/sortBy-DQnW097e.js","assets/_baseOrderBy-ROVWhQX2.js","assets/vue-router-B1wl6-pc.js","assets/truncate-Bqpw8XCi.js","assets/useStorage-CsEAufjz.js","assets/views-D_dqPEUH.js","assets/htmlUtils-thGWBTpz.js","assets/users.store-Bf1IoNrc.js","assets/users-BKEg62aj.js","assets/workflowsList.store-Don1G7_q.js","assets/useTelemetry-30Afudd_.js","assets/constants-CyB1HP9v.js","assets/durations-8IALAHJh.js","assets/typesUtils-XUaQmjo0.js","assets/dateformat-mPjEAfa4.js","assets/useDocumentTitle-Bvouz54k.js","assets/useDocumentTitle-BGS156oL.js","assets/ui.store-DfWIxg_D.js","assets/versions-OpZ02Zn2.js","assets/src-CA5HdROc.js","assets/posthog.store-BHADDpKv.js","assets/src-CujaOyWm.js","assets/permissions-BJUlwR2i.js","assets/rbac.store-BCrWLPzn.js","assets/dropdown-BTqNxV3I.js","assets/button-CqawdY6I.js","assets/plugin-vue_export-helper-B8C6eG08.js","assets/use-global-config-CCPAC84l.js","assets/style-ByWi83qr.js","assets/use-namespace-sBCcHOMJ.js","assets/use-size-Dy-DtU7h.js","assets/use-z-index-DUsdk_jW.js","assets/use-form-item-BCNrrQJc.js","assets/icon-CbBtHqWi.js","assets/tooltip-BPfdTj9Y.js","assets/focus-trap-CEslUpmB.js","assets/isUndefined-CapPFLNM.js","assets/scrollbar-StnYXAbK.js","assets/refs-DY6Ix90q.js","assets/injectionKeys-BbgDLAhd.js","assets/useClipboard-Db-W5poh.js","assets/useToast-Cvy_I-4R.js","assets/useExternalHooks-C3e_VqmZ.js","assets/z-indexes-CL6YV8ul.js","assets/N8nIconButton-lwlzJlc2.js","assets/N8nButton-CClPzxgq.js","assets/N8nIcon-CgWQM0v1.js","assets/Icon-BQP2Q0A1.js","assets/Icon-D_OWYp2w.css","assets/N8nButton-Cp4gXyRS.css","assets/useInjectWorkflowId-DYBhDeSH.js","assets/useNodeHelpers-3yjIF7ny.js","assets/useLoadingService-obunJLb_.js","assets/event-bus-oFXuRr9B.js","assets/usePrivateCredentials-DWWnixhY.js","assets/usePinnedData-CDOJMXl7.js","assets/useExternalHooks-6KUChhnA.js","assets/RunDataJsonActions-72pRvfr_.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CUiGbY1o.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { g as useElementSize } from "./dist-DHr3MfZO.js";
import { O as injectWorkflowDocumentStore, Vn as executionDataToJson, un as injectNDVStore, zi as isString, zt as getMappedExpression } from "./workflows.store-fOIpEAUT.js";
import { t as useTelemetry } from "./useTelemetry-30Afudd_.js";
import { B as nonExistingJsonPath } from "./constants-CyB1HP9v.js";
import { m as shorten } from "./typesUtils-XUaQmjo0.js";
import { t as useExternalHooks } from "./useExternalHooks-6KUChhnA.js";
import { t as Draggable_default } from "./Draggable-C9zcVlAH.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-BDUAFcn2.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-BXZ0zFso.js";
import { t as P } from "./vue-json-pretty-K1nm9oHr.js";
//#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=script&setup=true&lang.ts
var RunDataJson_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataJson",
	props: {
		editMode: { default: () => ({}) },
		pushRef: {},
		paneType: {},
		node: {},
		inputData: {},
		mappingEnabled: { type: Boolean },
		distanceFromActive: {},
		outputIndex: {},
		runIndex: {},
		totalRuns: {},
		search: {},
		compact: { type: Boolean },
		execution: {}
	},
	setup(__props) {
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-B3l1BGxr.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81])));
		const props = __props;
		const ndvStore = injectNDVStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const selectedJsonPath = ref(nonExistingJsonPath);
		const draggingPath = ref(null);
		const jsonDataContainer = ref(null);
		const { height } = useElementSize(jsonDataContainer);
		const jsonData = computed(() => executionDataToJson(props.inputData));
		const highlight = computed(() => ndvStore.value.highlightDraggables);
		const getShortKey = (el) => {
			if (!el) return "";
			return shorten(el.dataset.name ?? "", 16, 2);
		};
		const getJsonParameterPath = (path) => {
			const subPath = path.replace(/^(\["?\d"?])/, "");
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: subPath,
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		};
		const canDraggableDrop = computed(() => ndvStore.value.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.value.draggableStickyPos);
		const onDragStart = (el, data) => {
			if (el?.dataset.path) draggingPath.value = el.dataset.path;
			ndvStore.value.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.value.resetMappingTelemetry();
		};
		const onDragEnd = (el) => {
			ndvStore.value.draggableStopDragging();
			draggingPath.value = null;
			const mappingTelemetry = ndvStore.value.mappingTelemetry;
			const telemetryPayload = {
				src_node_type: props.node.type,
				src_field_name: el.dataset.name ?? "",
				src_nodes_back: props.distanceFromActive,
				src_run_index: props.runIndex,
				src_runs_total: props.totalRuns,
				src_field_nest_level: el.dataset.depth ?? 0,
				src_view: "json",
				src_element: el,
				success: false,
				view_shown: telemetryContext.view_shown,
				...mappingTelemetry
			};
			setTimeout(() => {
				externalHooks.run("runDataJson.onDragEnd", telemetryPayload);
				telemetry.track("User dragged data for mapping", telemetryPayload);
			}, 1e3);
		};
		const formatKey = (value) => {
			return isString(value) ? `"${value}"` : JSON.stringify(value);
		};
		const formatValue = (value) => {
			return JSON.stringify(value);
		};
		const getListItemName = (path) => {
			return path.replace(/^(\["?\d"?]\.?)/g, "");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "jsonDataContainer",
				ref: jsonDataContainer,
				class: normalizeClass([_ctx.$style.jsonDisplay, {
					[_ctx.$style.highlight]: highlight.value,
					[_ctx.$style.compact]: props.compact
				}])
			}, [(openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [!__props.editMode.enabled ? (openBlock(), createBlock(unref(LazyRunDataJsonActions), {
					key: 0,
					node: __props.node,
					"pane-type": __props.paneType,
					"push-ref": __props.pushRef,
					"distance-from-active": __props.distanceFromActive,
					"selected-json-path": selectedJsonPath.value,
					"json-data": jsonData.value,
					"output-index": __props.outputIndex,
					"run-index": __props.runIndex,
					execution: __props.execution
				}, null, 8, [
					"node",
					"pane-type",
					"push-ref",
					"distance-from-active",
					"selected-json-path",
					"json-data",
					"output-index",
					"run-index",
					"execution"
				])) : createCommentVNode("", true)]),
				_: 1
			})), createVNode(Draggable_default, {
				type: "mapping",
				"target-data-key": "mappable",
				disabled: !__props.mappingEnabled,
				"can-drop": canDraggableDrop.value,
				"sticky-position": draggableStickyPosition.value,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				preview: withCtx(({ canDrop, el }) => [el ? (openBlock(), createBlock(MappingPill_default, {
					key: 0,
					html: getShortKey(el),
					"can-drop": canDrop
				}, null, 8, ["html", "can-drop"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(P), {
					data: jsonData.value,
					deep: 10,
					"show-length": true,
					"selected-value": selectedJsonPath.value,
					"root-path": "",
					"selectable-type": "single",
					class: "json-data",
					virtual: true,
					height: unref(height),
					"onUpdate:selectedValue": _cache[0] || (_cache[0] = ($event) => selectedJsonPath.value = $event)
				}, {
					renderNodeKey: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
						content: formatKey(node.key),
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": node.key,
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass({
							[_ctx.$style.mappable]: __props.mappingEnabled,
							[_ctx.$style.dragged]: draggingPath.value === node.path
						})
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					renderNodeValue: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
						content: formatValue(node.content),
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": getListItemName(node.path),
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass([{
							[_ctx.$style.mappable]: __props.mappingEnabled,
							[_ctx.$style.dragged]: draggingPath.value === node.path
						}, "ph-no-capture"])
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					_: 1
				}, 8, [
					"data",
					"selected-value",
					"height"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"can-drop",
				"sticky-position"
			])], 2);
		};
	}
});
var RunDataJson_vue_vue_type_style_index_0_lang_module_default = {
	jsonDisplay: "_jsonDisplay_803o3_1",
	mappable: "_mappable_803o3_18",
	highlight: "_highlight_803o3_24",
	dragged: "_dragged_803o3_25",
	compact: "_compact_803o3_30"
};
var RunDataJson_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataJson_default as default };

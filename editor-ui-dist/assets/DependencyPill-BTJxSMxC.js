import { Ad as createTextVNode, Af as unref, Cd as computed, Nd as defineComponent, Od as createSlots, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, jd as createVNode, np as toDisplayString, uf as withCtx, wd as createBaseVNode } from "./vendor-C0K-pJCd.js";
import { Ci as useDependencies, HC as N8nBadge_default, H_ as useTelemetry, YC as N8nTooltip_default, aw as _plugin_vue_export_helper_default, uw as useI18n, zC as DropdownMenu_default } from "./app-Gcu_WcI0.js";
import { t as useDependencyMenu } from "./useDependencyMenu-Bs39SP5O.js";
//#region src/app/components/DependencyPill.vue?vue&type=script&setup=true&lang.ts
var MIN_ITEMS_FOR_SEARCH = 6;
var DependencyPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DependencyPill",
	props: {
		resourceType: {},
		resourceId: {},
		totalCount: {},
		source: {},
		dataTestId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { getDependencies, fetchDependencies, getTotalCount } = useDependencies();
		const { buildDependencyMenuItems, resolveDependencyMenuId, openDependency } = useDependencyMenu();
		const isLoadingDetails = ref(false);
		const depsResult = computed(() => getDependencies(props.resourceId, props.resourceType));
		const effectiveCount = computed(() => {
			const result = depsResult.value;
			if (result) return result.dependencies.length + result.inaccessibleCount;
			return getTotalCount(props.resourceId, props.resourceType) ?? 0;
		});
		const hasHiddenDeps = computed(() => (depsResult.value?.inaccessibleCount ?? 0) > 0);
		const tooltipText = computed(() => i18n.baseText(`workflows.dependencies.tooltip.${props.resourceType}`));
		const showSearch = computed(() => (depsResult.value?.dependencies.length ?? 0) >= MIN_ITEMS_FOR_SEARCH);
		const searchTerm = ref("");
		const menuItems = computed(() => buildDependencyMenuItems(depsResult.value?.dependencies ?? [], searchTerm.value));
		function onSelect(value) {
			const dep = resolveDependencyMenuId(depsResult.value?.dependencies ?? [], value);
			if (!dep) return;
			telemetry.track("User clicked dependency pill item", {
				source: props.source,
				dependency_type: dep.type,
				dependency_count: effectiveCount.value
			});
			openDependency(dep);
		}
		function onSearch(term) {
			searchTerm.value = term;
		}
		async function loadDetails() {
			await fetchDependencies([props.resourceId], props.resourceType);
		}
		async function onDropdownToggle(open) {
			if (open) {
				telemetry.track("User opened dependency pill", {
					source: props.source,
					dependency_count: effectiveCount.value
				});
				if (!isLoadingDetails.value) {
					isLoadingDetails.value = true;
					await loadDetails();
					isLoadingDetails.value = false;
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				placement: "bottom-end",
				loading: isLoadingDetails.value,
				"loading-item-count": 1,
				searchable: showSearch.value,
				"extra-popper-class": "dependency-pill-dropdown",
				"search-placeholder": unref(i18n).baseText("workflows.dependencies.search.placeholder"),
				"max-height": 280,
				"data-test-id": __props.dataTestId,
				onSelect,
				onSearch,
				"onUpdate:modelValue": onDropdownToggle
			}, createSlots({
				trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					content: tooltipText.value,
					placement: "top",
					"as-child": ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nBadge_default), {
						variant: "outline",
						"leading-icon": "link",
						clickable: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(effectiveCount.value), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["content"])]),
				_: 2
			}, [hasHiddenDeps.value ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hiddenNotice) }, toDisplayString(unref(i18n).baseText("workflows.dependencies.hiddenNotice", {
					adjustToNumber: depsResult.value.inaccessibleCount,
					interpolate: { count: String(depsResult.value.inaccessibleCount) }
				})), 3)]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"loading",
				"searchable",
				"search-placeholder",
				"data-test-id"
			]);
		};
	}
});
var DependencyPill_vue_vue_type_style_index_0_lang_module_default = { hiddenNotice: "_hiddenNotice_1e2zu_1" };
var DependencyPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DependencyPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DependencyPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DependencyPill_default as t };

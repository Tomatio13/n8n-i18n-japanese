import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as DropdownMenu_default } from "./DropdownMenu-rO_anaTA.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nBadge_default } from "./N8nBadge-CjUJHqMU.js";
import { t as useTelemetry } from "./useTelemetry-BDjJDHLn.js";
import { t as useDependencies } from "./useDependencies-DUBJwJgc.js";
import { t as useDependencyMenu } from "./useDependencyMenu-DAuObeLL.js";
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
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: tooltipText.value,
				placement: "top",
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
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
					trigger: withCtx(() => [createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						"show-border": false,
						class: normalizeClass(_ctx.$style.badge)
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.badgeText) }, [createVNode(unref(N8nIcon_default), {
							icon: "link",
							size: "small"
						}), createTextVNode(" " + toDisplayString(effectiveCount.value), 1)], 2)]),
						_: 1
					}, 8, ["class"])]),
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
				])]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
var DependencyPill_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_q9hcr_1",
	badgeText: "_badgeText_q9hcr_15",
	hiddenNotice: "_hiddenNotice_q9hcr_22"
};
var DependencyPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DependencyPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DependencyPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DependencyPill_default as t };

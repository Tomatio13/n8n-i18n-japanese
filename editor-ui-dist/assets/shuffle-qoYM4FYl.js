import { t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { m as require_isArray, vt as useI18n } from "./_MapCache-1Qi8jh0X.js";
import { An as N8nButton_default, at as N8nCard_default, kn as N8nText_default } from "./src-CoBd3nY2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import { c as require__arrayMap, y as useRouter } from "./truncate-BINt9V_x.js";
import { C as useNodeTypesStore, r as useUIStore, tr as useTemplatesDataQualityStore } from "./users.store-BIGRcGPu.js";
import { qo as EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, vo as require_keys } from "./constants-BvSprbON.js";
import { p as require__copyArray } from "./merge-DCyotd_0.js";
import { t as NodeIcon_default } from "./NodeIcon-B7gntMR5.js";
var TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateCard",
	props: {
		template: {},
		tileNumber: {}
	},
	setup(__props) {
		const props = __props;
		const nodeTypesStore = useNodeTypesStore();
		const { getTemplateRoute, trackTemplateTileClick, trackTemplateShown } = useTemplatesDataQualityStore();
		const router = useRouter();
		const uiStore = useUIStore();
		const locale = useI18n();
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = new Set(props.template.nodes.map((node) => node.name));
			return Array.from(uniqueNodeTypes).slice(0, 2).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const hasTrackedShown = ref(false);
		const cardRef = ref(null);
		let observer = null;
		const trackWhenVisible = () => {
			if (hasTrackedShown.value || props.tileNumber === void 0) return;
			hasTrackedShown.value = true;
			trackTemplateShown(props.template.id, props.tileNumber);
			if (observer && cardRef.value) observer.unobserve(cardRef.value.$el);
			observer = null;
		};
		const handleUseTemplate = async () => {
			trackTemplateTileClick(props.template.id);
			await router.push(getTemplateRoute(props.template.id));
			uiStore.closeModal(EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY);
		};
		onMounted(() => {
			if (!cardRef.value) return;
			if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
				trackWhenVisible();
				return;
			}
			observer = new IntersectionObserver((entries) => {
				for (const entry of entries) if (entry.isIntersecting) {
					trackWhenVisible();
					break;
				}
			});
			observer.observe(cardRef.value.$el);
		});
		onBeforeUnmount(() => {
			if (observer) {
				observer.disconnect();
				observer = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				ref_key: "cardRef",
				ref: cardRef,
				class: normalizeClass(_ctx.$style.suggestion),
				onClick: handleUseTemplate
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.nodes, "mb-s"])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
					return openBlock(), createElementBlock("div", {
						key: nodeType.name,
						class: normalizeClass(_ctx.$style.nodeIcon)
					}, [createVNode(NodeIcon_default, {
						size: 18,
						"stroke-width": 1.5,
						"node-type": nodeType
					}, null, 8, ["node-type"])], 2);
				}), 128))], 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
					size: "medium",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.template.name), 1)]),
					_: 1
				})]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.actions, "mt-m"]) }, [createVNode(unref(N8nButton_default), {
					label: unref(locale).baseText("workflows.templateRecoV2.useTemplate"),
					type: "secondary",
					size: "mini",
					onClick: withModifiers(handleUseTemplate, ["stop"])
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	nodes: "_nodes_ztiub_123",
	nodeIcon: "_nodeIcon_ztiub_128",
	suggestion: "_suggestion_ztiub_139",
	actions: "_actions_ztiub_148"
};
var TemplateCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
var require__baseRandom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeFloor = Math.floor, nativeRandom = Math.random;
	function baseRandom$1(lower, upper) {
		return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	module.exports = baseRandom$1;
}));
var require__shuffleSelf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseRandom = require__baseRandom();
	function shuffleSelf$2(array, size) {
		var index = -1, length = array.length, lastIndex = length - 1;
		size = size === void 0 ? length : size;
		while (++index < size) {
			var rand = baseRandom(index, lastIndex), value = array[rand];
			array[rand] = array[index];
			array[index] = value;
		}
		array.length = size;
		return array;
	}
	module.exports = shuffleSelf$2;
}));
var require__arrayShuffle = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyArray = require__copyArray(), shuffleSelf$1 = require__shuffleSelf();
	function arrayShuffle$1(array) {
		return shuffleSelf$1(copyArray(array));
	}
	module.exports = arrayShuffle$1;
}));
var require__baseValues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	function baseValues$1(object, props) {
		return arrayMap(props, function(key) {
			return object[key];
		});
	}
	module.exports = baseValues$1;
}));
var require_values = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseValues = require__baseValues(), keys = require_keys();
	function values$1(object) {
		return object == null ? [] : baseValues(object, keys(object));
	}
	module.exports = values$1;
}));
var require__baseShuffle = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var shuffleSelf = require__shuffleSelf(), values = require_values();
	function baseShuffle$1(collection) {
		return shuffleSelf(values(collection));
	}
	module.exports = baseShuffle$1;
}));
var require_shuffle = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayShuffle = require__arrayShuffle(), baseShuffle = require__baseShuffle(), isArray = require_isArray();
	function shuffle(collection) {
		return (isArray(collection) ? arrayShuffle : baseShuffle)(collection);
	}
	module.exports = shuffle;
}));
export { TemplateCard_default as n, require_shuffle as t };

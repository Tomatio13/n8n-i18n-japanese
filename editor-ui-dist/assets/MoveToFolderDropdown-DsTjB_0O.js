import { Bd as createElementBlock, Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Dj as N8nOption_default, Ej as N8nSelect_default, MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, ac as useFoldersStore, bM as N8nText_default, mM as N8nLoading_default, zM as useI18n } from "./app-BXv1VOvT.js";
//#region src/features/core/folders/components/MoveToFolderDropdown.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["title", "data-resourceid"];
var maxPathLength = 4;
var separator$1 = "/";
var MoveToFolderDropdown_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "MoveToFolderDropdown",
	props: {
		selectedLocation: { default: null },
		selectedProjectId: {},
		currentProjectId: { default: void 0 },
		currentFolderId: { default: void 0 },
		parentFolderId: { default: void 0 }
	},
	emits: ["location:selected"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const foldersStore = useFoldersStore();
		const availableLocations = ref([]);
		const selectedLocationId = computed({
			get: () => props.selectedLocation?.id ?? null,
			set: (id) => {
				const location = availableLocations.value.find((f) => f.id === id);
				if (!location) return;
				emit("location:selected", location);
			}
		});
		const loading = ref(false);
		const initialLoading = ref(true);
		const fetchAvailableLocations = async (query) => {
			loading.value = true;
			const folders = await foldersStore.fetchFoldersAvailableForMove(props.selectedProjectId, props.currentFolderId, { name: query ?? void 0 });
			if (!props.parentFolderId) availableLocations.value = folders;
			else availableLocations.value = folders.filter((folder) => folder.id !== props.parentFolderId);
			const rootFolderName = i18n.baseText("folders.move.project.root.name");
			const isQueryMatchesRoot = !query || rootFolderName.toLowerCase().includes(query?.toLowerCase());
			const projectRoot = {
				id: props.selectedProjectId,
				name: rootFolderName,
				resource: "project",
				createdAt: "",
				updatedAt: "",
				workflowCount: 0,
				subFolderCount: 0,
				path: []
			};
			if (isQueryMatchesRoot) availableLocations.value.unshift(projectRoot);
			if (!query && !props.selectedLocation) emit("location:selected", projectRoot);
			loading.value = false;
			initialLoading.value = false;
		};
		watch(() => [
			props.selectedProjectId,
			props.currentFolderId,
			props.parentFolderId
		], () => {
			availableLocations.value = [];
			initialLoading.value = true;
			fetchAvailableLocations();
		}, { immediate: true });
		const isTopLevelFolder = (location, index) => {
			return index === location.path.length - 1 || index >= 3;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style["move-folder-dropdown"]),
				"data-test-id": "move-to-folder-dropdown"
			}, [initialLoading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				rows: 1,
				class: normalizeClass(_ctx.$style["loading-skeleton"])
			}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nSelect_default), {
				key: 1,
				ref: "moveFolderDropdown",
				modelValue: selectedLocationId.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLocationId.value = $event),
				filterable: true,
				remote: true,
				"remote-method": fetchAvailableLocations,
				loading: loading.value,
				placeholder: unref(i18n).baseText("folders.move.modal.folder.placeholder"),
				"no-data-text": unref(i18n).baseText("folders.move.modal.folder.noData.label"),
				"option-label": "name",
				"option-value": "id"
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableLocations.value, (location) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: location.id,
						value: location.id,
						label: location.name,
						"data-test-id": "move-to-folder-option"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["folder-select-item"]) }, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.list) }, [location.resource === "project" ? (openBlock(), createElementBlock("li", {
							key: 0,
							class: normalizeClass(_ctx.$style.current)
						}, [createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(location.name), 1)]),
							_: 2
						}, 1024)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							location.path.length > maxPathLength ? (openBlock(), createElementBlock("li", {
								key: 0,
								class: normalizeClass(_ctx.$style.item)
							}, [createVNode(unref(N8nText_default), null, {
								default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("...", -1)])]),
								_: 1
							})], 2)) : createCommentVNode("", true),
							location.path.length > 0 ? (openBlock(), createElementBlock("li", {
								key: 1,
								class: normalizeClass(_ctx.$style.separator)
							}, [createVNode(unref(N8nText_default), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(separator$1))]),
								_: 1
							})], 2)) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(location.path.slice(-4), (fragment, index) => {
								return openBlock(), createElementBlock(Fragment, { key: `${location.id}-${index}` }, [createBaseVNode("li", {
									class: normalizeClass({
										[_ctx.$style.item]: true,
										[_ctx.$style.current]: isTopLevelFolder(location, index)
									}),
									title: fragment,
									"data-resourceid": fragment,
									"data-test-id": "breadcrumbs-item",
									"data-target": "folder-breadcrumb-item"
								}, [createVNode(unref(N8nText_default), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(fragment), 1)]),
									_: 2
								}, 1024)], 10, _hoisted_1), !isTopLevelFolder(location, index) ? (openBlock(), createElementBlock("li", {
									key: 0,
									class: normalizeClass(_ctx.$style.separator)
								}, [createVNode(unref(N8nText_default), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(separator$1))]),
									_: 1
								})], 2)) : createCommentVNode("", true)], 64);
							}), 128))
						], 64))], 2)], 2)]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"loading",
				"placeholder",
				"no-data-text"
			]))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	"move-folder-dropdown": "_move-folder-dropdown_1uii7_1",
	"loading-skeleton": "_loading-skeleton_1uii7_6",
	"folder-select-item": "_folder-select-item_1uii7_15",
	list: "_list_1uii7_27",
	item: "_item_1uii7_33",
	current: "_current_1uii7_48",
	separator: "_separator_1uii7_52"
} }]]);
//#endregion
export { MoveToFolderDropdown_default as t };

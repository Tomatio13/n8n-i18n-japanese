import { $d as provide, Ad as createElementBlock, Df as shallowRef, Ed as computed, Gd as nextTick, Id as defineComponent, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, df as watch, ep as normalizeClass, qd as onBeforeUnmount } from "./vendor-DtL-V0ia.js";
import { $f as disposeWorkflowDocumentStore, DE as _plugin_vue_export_helper_default, Gf as useWorkflowExecutionStateStore, Rv as WorkflowDocumentStoreKey, Uf as disposeWorkflowExecutionStateStore, em as disposeNDVStore, ip as assignNodeId, kv as EditorEnabledFeaturesKey, lf as canvasEventBus, rm as useNDVStore, rp as useWorkflowDocumentStore, ud as useWorkflowNormalization, wE as N8nIcon_default, zv as WorkflowIdKey } from "./app-BdR1u3Ua.js";
import { t as NodeView_default } from "./NodeView-CFUYisBx.js";
//#region src/app/components/WorkflowPreviewHost.vue?vue&type=script&setup=true&lang.ts
var WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewHost",
	props: {
		documentId: {},
		workflow: {}
	},
	setup(__props) {
		const props = __props;
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const documentStore = shallowRef(null);
		provide(WorkflowIdKey, computed(() => documentStore.value?.workflowId ?? ""));
		provide(WorkflowDocumentStoreKey, documentStore);
		provide(EditorEnabledFeaturesKey, computed(() => ({
			readOnly: true,
			expandGroups: "all",
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			executionSuccessToasts: false,
			executionErrorToasts: false
		})));
		function disposePreviewStores() {
			const scopedDocumentStore = documentStore.value;
			if (!scopedDocumentStore) return;
			const documentId = scopedDocumentStore.documentId;
			documentStore.value = null;
			disposeNDVStore(useNDVStore(documentId));
			disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(documentId));
			disposeWorkflowDocumentStore(scopedDocumentStore);
		}
		async function hydratePreview() {
			if (documentStore.value) disposePreviewStores();
			const [workflowIdFromDocumentId, version] = props.documentId.split("@");
			const scopedDocumentStore = useWorkflowDocumentStore(props.documentId);
			const { nodes, connections } = normalizeWorkflowData({
				nodes: (props.workflow.nodes ?? []).map((node) => {
					const previewNode = { ...node };
					if (!previewNode.id) assignNodeId(previewNode);
					return previewNode;
				}),
				connections: props.workflow.connections ?? {}
			});
			scopedDocumentStore.hydrate({
				name: "",
				active: false,
				isArchived: false,
				createdAt: "",
				updatedAt: "",
				...props.workflow,
				id: workflowIdFromDocumentId,
				versionId: version,
				nodes,
				connections
			});
			documentStore.value = scopedDocumentStore;
			await nextTick();
			canvasEventBus.emit("fitView");
		}
		watch(() => [props.documentId, props.workflow], hydratePreview, { immediate: true });
		onBeforeUnmount(() => {
			disposePreviewStores();
		});
		const isReady = computed(() => documentStore.value !== null);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-preview-host"
			}, [isReady.value ? (openBlock(), createBlock(NodeView_default, { key: 0 })) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_1m0j7_1",
	centerState: "_centerState_1m0j7_9"
};
var WorkflowPreviewHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowPreviewHost_default as t };

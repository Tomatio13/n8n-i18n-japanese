import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, if as onBeforeUnmount, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Fj as N8nHeading_default, MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, Oj as N8nLink_default, bM as N8nText_default, gg as useUIStore, ih as AGENT_BUILDER_VIEW, kM as N8nButton_default, kS as VIEWS, zM as useI18n } from "./app-CkjcdAxY.js";
import { t as Modal_default } from "./Modal-BKydlLDn.js";
import { t as useDependencies } from "./useDependencies-DqA2HHyv.js";
//#region src/features/workflows/workflowHistory/components/WorkflowHistoryVersionUnpublishModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var WorkflowHistoryVersionUnpublishModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryVersionUnpublishModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const AFFECTED_TYPES = [
			{
				type: "workflowParent",
				labelKey: "workflows.dependencies.type.parentWorkflows"
			},
			{
				type: "errorWorkflowParent",
				labelKey: "workflows.dependencies.type.errorWorkflowParent"
			},
			{
				type: "agentUsage",
				labelKey: "workflows.dependencies.type.agents"
			}
		];
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const uiStore = useUIStore();
		const { fetchDependencies, fetchDependencyCounts, getDependencies, getDependencyCounts } = useDependencies();
		const unpublishing = ref(false);
		onMounted(async () => {
			await Promise.all([fetchDependencies([props.data.workflowId], "workflow"), fetchDependencyCounts([props.data.workflowId], "workflow")]);
		});
		const hrefFor = (dep) => {
			if (dep.type === "agentUsage") {
				if (!dep.projectId) return void 0;
				return router.resolve({
					name: AGENT_BUILDER_VIEW,
					params: {
						projectId: dep.projectId,
						agentId: dep.id
					}
				}).href;
			}
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: dep.id }
			}).href;
		};
		const affectedGroups = computed(() => {
			const dependencies = getDependencies(props.data.workflowId, "workflow")?.dependencies ?? [];
			return AFFECTED_TYPES.map((group) => ({
				...group,
				items: dependencies.filter((dep) => dep.type === group.type).map((dep) => ({
					...dep,
					href: hrefFor(dep)
				}))
			})).filter((group) => group.items.length > 0);
		});
		const hiddenAffectedCount = computed(() => {
			const counts = getDependencyCounts(props.data.workflowId, "workflow");
			if (!counts) return 0;
			return AFFECTED_TYPES.reduce((sum, { type }) => sum + counts[type], 0) - affectedGroups.value.reduce((sum, group) => sum + group.items.length, 0);
		});
		const hasAffected = computed(() => affectedGroups.value.length > 0 || hiddenAffectedCount.value > 0);
		const closeModal = () => {
			uiStore.closeModal(props.modalName);
		};
		const onCancel = () => {
			props.data.eventBus.emit("cancel");
			closeModal();
		};
		const onUnpublish = () => {
			unpublishing.value = true;
			props.data.eventBus.emit("unpublish");
		};
		onBeforeUnmount(() => {
			unpublishing.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "500px",
				"max-height": "85vh",
				name: props.modalName,
				"before-close": onCancel
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.action.unpublish.modal.title", { interpolate: { versionName: props.data.versionName || "" } })), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.action.unpublish.modal.description", { interpolate: { versionName: props.data.versionName || "" } })), 1)]),
					_: 1
				}), hasAffected.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.action.unpublish.modal.affected")), 1)]),
					_: 1
				}), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.affected),
					"data-test-id": "workflow-unpublish-affected-resources"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(affectedGroups.value, (group) => {
					return openBlock(), createElementBlock("div", { key: group.type }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(group.labelKey)), 1)]),
						_: 2
					}, 1024), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (dep) => {
						return openBlock(), createElementBlock("li", { key: dep.id }, [dep.href ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							to: dep.href,
							"new-window": "",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep.name), 1)]),
							_: 2
						}, 1032, ["to"])) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(dep.name), 1)]),
							_: 2
						}, 1024))]);
					}), 128))], 2)]);
				}), 128)), hiddenAffectedCount.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.dependencies.hiddenNotice", {
						adjustToNumber: hiddenAffectedCount.value,
						interpolate: { count: String(hiddenAffectedCount.value) }
					})), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)], 64)) : createCommentVNode("", true)], 2)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					disabled: unpublishing.value,
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					loading: unpublishing.value,
					onClick: onUnpublish
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.action.unpublish.modal.button.unpublish")), 1)]),
					_: 1
				}, 8, ["loading"])], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
}), [["__cssModules", { "$style": {
	footer: "_footer_1eb19_1",
	content: "_content_1eb19_10",
	icon: "_icon_1eb19_17",
	body: "_body_1eb19_22",
	affected: "_affected_1eb19_29",
	list: "_list_1eb19_35"
} }]]);
//#endregion
export { WorkflowHistoryVersionUnpublishModal_default as default };

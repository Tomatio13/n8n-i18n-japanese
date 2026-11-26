import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Xo as useRouter, Yd as h, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { Lp as ResourceType, OS as useToast, Vp as getTruncatedProjectName, bM as N8nText_default, kS as VIEWS, rC as ProjectTypes, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/features/collaboration/projects/components/ProjectMoveSuccessToastMessage.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 2 };
var _hoisted_4 = {
	key: 1,
	class: "pt-s"
};
var _hoisted_5 = { href: "#" };
//#endregion
//#region src/features/collaboration/projects/components/ProjectMoveSuccessToastMessage.vue
var ProjectMoveSuccessToastMessage_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMoveSuccessToastMessage",
	props: {
		routeName: {},
		resourceType: {},
		targetProject: {},
		isShareCredentialsChecked: { type: Boolean },
		areAllUsedCredentialsShareable: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isWorkflow = computed(() => props.resourceType === ResourceType.Workflow);
		const isTargetProjectTeam = computed(() => props.targetProject.type === ProjectTypes.Team);
		const targetProjectName = computed(() => {
			return getTruncatedProjectName(props.targetProject?.name);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [isWorkflow.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				tag: "p",
				class: "pt-xs"
			}, {
				default: withCtx(() => [props.isShareCredentialsChecked && props.areAllUsedCredentialsShareable ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withAllCredentials")), 1)) : props.isShareCredentialsChecked ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withSomeCredentials")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow")), 1))]),
				_: 1
			})) : createCommentVNode("", true), isTargetProjectTeam.value ? (openBlock(), createElementBlock("p", _hoisted_4, [createBaseVNode("a", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.move.resource.success.link", { interpolate: { targetProjectName: targetProjectName.value } })), 1)])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/composables/useMoveResourceToProjectToast.ts
init_runtime_core_esm_bundler();
function useMoveResourceToProjectToast() {
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	function showMoveToProjectToast(options) {
		const viewName = options.resourceType === ResourceType.Workflow ? VIEWS.PROJECTS_WORKFLOWS : VIEWS.PROJECTS_CREDENTIALS;
		toast.showToast({
			title: i18n.baseText("projects.move.resource.success.title", { interpolate: {
				resourceTypeLabel: options.resourceTypeLabel,
				resourceName: options.resourceName,
				targetProjectName: options.targetProjectName
			} }),
			message: h(ProjectMoveSuccessToastMessage_default, {
				routeName: viewName,
				resourceType: options.resourceType,
				targetProject: options.targetProject,
				isShareCredentialsChecked: options.shareUsedCredentials,
				areAllUsedCredentialsShareable: options.areAllUsedCredentialsShareable
			}),
			onClick: (event) => {
				if (event?.target instanceof HTMLAnchorElement) {
					event.preventDefault();
					router.push(options.destinationFolderId ? {
						name: VIEWS.PROJECTS_FOLDERS,
						params: {
							projectId: options.targetProject.id,
							folderId: options.destinationFolderId
						}
					} : {
						name: viewName,
						params: { projectId: options.targetProject.id }
					});
				}
			},
			type: "success",
			duration: 8e3
		});
	}
	return { showMoveToProjectToast };
}
//#endregion
export { useMoveResourceToProjectToast as t };

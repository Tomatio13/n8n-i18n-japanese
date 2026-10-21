import { Id as createBlock, Pd as computed, Vf as unref, Wd as defineComponent, cs as useRouter, of as openBlock } from "./vendor-D9HlBS7Y.js";
import { Bv as VIEWS, FT as useI18n, Pw as N8nEmptyState_default } from "./app-Bl9bQlKQ.js";
//#endregion
//#region src/features/core/folders/components/EmptySharedSectionActionBox.vue
var EmptySharedSectionActionBox_default = /* @__PURE__ */ defineComponent({
	__name: "EmptySharedSectionActionBox",
	props: {
		personalProject: {},
		resourceType: { default: "workflows" }
	},
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const props = __props;
		const heading = computed(() => {
			return i18n.baseText("workflows.empty.shared-with-me", { interpolate: { resource: i18n.baseText(`generic.${props.resourceType === "workflows" ? "workflow" : "credential"}`).toLowerCase() } });
		});
		const onPersonalLinkClick = (event) => {
			event.preventDefault();
			router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: props.personalProject.id }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				"data-test-id": "empty-shared-action-box",
				heading: heading.value,
				description: unref(i18n).baseText("workflows.empty.shared-with-me.link"),
				onDescriptionClick: onPersonalLinkClick
			}, null, 8, ["heading", "description"]);
		};
	}
});
//#endregion
export { EmptySharedSectionActionBox_default as t };

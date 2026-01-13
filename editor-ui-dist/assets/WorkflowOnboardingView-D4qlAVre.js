import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { vt as useI18n } from "./_MapCache-hRR_540s.js";
import { v as useRoute, y as useRouter } from "./truncate-Cam0Yz48.js";
import { N as useWorkflowsStore, _r as useLoadingService, c as useTemplatesStore } from "./builder.store-BKBgS0LR.js";
import "./empty-BUjCyq3U.js";
import { Bo as VIEWS } from "./constants-Boli8QrC.js";
import "./merge-CdJz6LD3.js";
import "./_baseOrderBy-BVaisI9V.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DLjRs23H.js";
var WorkflowOnboardingView_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowOnboardingView",
	setup(__props) {
		const loadingService = useLoadingService();
		const templateStore = useTemplatesStore();
		const workflowsStore = useWorkflowsStore();
		const router = useRouter();
		const route = useRoute();
		const i18n = useI18n();
		const openWorkflowTemplate = async (templateId) => {
			try {
				loadingService.startLoading();
				const template = await templateStore.getFixedWorkflowTemplate(templateId);
				if (!template) throw new Error();
				const name = i18n.baseText("onboarding.title", { interpolate: { name: template.name } });
				const workflow = await workflowsStore.createNewWorkflow({
					name,
					connections: template.workflow.connections,
					nodes: template.workflow.nodes.map(workflowsStore.convertTemplateNodeToNodeUi),
					pinData: template.workflow.pinData,
					settings: template.workflow.settings,
					meta: { onboardingId: templateId }
				});
				await router.replace({
					name: VIEWS.WORKFLOW,
					params: { name: workflow.id },
					query: { onboardingId: templateId }
				});
				loadingService.stopLoading();
			} catch (e) {
				await router.replace({ name: VIEWS.NEW_WORKFLOW });
				loadingService.stopLoading();
				throw new Error(`Could not load onboarding template ${templateId}`);
			}
		};
		onMounted(async () => {
			const templateId = route.params.id;
			if (!templateId || typeof templateId !== "string") {
				await router.replace({ name: VIEWS.NEW_WORKFLOW });
				return;
			}
			await openWorkflowTemplate(templateId);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
export { WorkflowOnboardingView_default as default };

import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as useI18n } from "./src-BCW48wog.js";
import { _t as useRouter, gt as useRoute } from "./src-DkMzRRJg.js";
import { t as useLoadingService } from "./useLoadingService-B6ZriRj3.js";
import { ui as VIEWS } from "./constants-5VeHwMFI.js";
import { cn as useWorkflowsStore } from "./workflowDocument.store-CX7TViRg.js";
import { t as useTemplatesStore } from "./templates.store-il31D49n.js";
//#endregion
//#region src/app/views/WorkflowOnboardingView.vue
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
					params: { workflowId: workflow.id },
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
//#endregion
export { WorkflowOnboardingView_default as default };

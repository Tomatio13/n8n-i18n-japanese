import { Fd as createBaseVNode, Hd as createVNode, Nf as ref, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, cf as renderList, cp as normalizeClass, jd as Fragment, of as openBlock, pp as toDisplayString, up as normalizeStyle, xf as withCtx } from "./vendor-D9HlBS7Y.js";
import { AT as _plugin_vue_export_helper_default, Ac as unpublishAgent, DT as N8nIcon_default, FT as useI18n, Tc as revertAgentToPublished, ei as upsertProjectAgentsListCache, gr as AgentPersonalisationIcon_default, qv as useRootStore, vT as N8nText_default, xc as publishAgent, zv as useToast } from "./app-TXEjHrLJ.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-coqklv5e.js";
//#region src/features/agents/agentTemplates.ts
/** Distinct from the home-screen suggestion catalog (`v1`). */
var AGENT_TEMPLATE_SUGGESTIONS_VERSION = "agent-templates-v1";
function isAgentStarter(value) {
	if (typeof value !== "object" || value === null) return false;
	const starter = value;
	if (starter.kind === "prompt") return typeof starter.text === "string" && starter.text.trim() !== "";
	if (starter.kind === "template") return typeof starter.templateId === "string" && starter.templateId !== "";
	return false;
}
var AGENT_TEMPLATES = [
	{
		id: "morning-news-brief",
		labelKey: "agents.builder.templates.morningNewsBrief.label",
		descriptionKey: "agents.builder.templates.morningNewsBrief.description",
		icon: "sun",
		gradient: {
			from: "#F5A524",
			to: "#FF5A1F",
			angle: 160,
			fromStop: 8,
			toStop: 92
		},
		config: {
			name: "Morning News Brief",
			instructions: "You are a news brief agent. Every morning at 9am, search the web for today’s top headlines and compile a concise summary. For each story include a headline, a one-sentence summary, and a source link. Limit the brief to five stories.",
			config: { webSearch: {
				enabled: true,
				provider: "native"
			} }
		},
		tasks: [{
			name: "Morning news brief",
			objective: "Search the web for today’s top headlines and compile a concise summary. For each story include a headline, a one-sentence summary, and a source link. Limit the brief to five stories.",
			cronExpression: "0 9 * * *"
		}]
	},
	{
		id: "process-incoming-emails",
		labelKey: "agents.builder.templates.processIncomingEmails.label",
		descriptionKey: "agents.builder.templates.processIncomingEmails.description",
		icon: "mail",
		gradient: {
			from: "#2563EB",
			to: "#7C3AED",
			angle: 135,
			fromStop: 0,
			toStop: 100
		},
		config: {
			name: "Process Incoming Emails",
			instructions: "You are an email processing agent. Read new emails from Gmail, identify action items, and update the user’s Google Calendar with any meetings, deadlines, or follow-ups mentioned. Summarize each email and flag urgent items.",
			tools: [{
				type: "node",
				name: "Gmail",
				description: "Read and send emails through Gmail.",
				node: {
					nodeType: "n8n-nodes-base.gmail",
					nodeTypeVersion: 2,
					nodeParameters: {
						resource: "message",
						operation: "getAll"
					},
					credentials: { gmailOAuth2: {
						id: "",
						name: "gmailOAuth2"
					} }
				}
			}, {
				type: "node",
				name: "Google Calendar",
				description: "Create and update calendar events.",
				node: {
					nodeType: "n8n-nodes-base.googleCalendar",
					nodeTypeVersion: 1,
					nodeParameters: {
						resource: "event",
						operation: "create",
						start: "={{ $fromAI('start', 'Event start time', 'string') }}",
						end: "={{ $fromAI('end', 'Event end time', 'string') }}"
					},
					credentials: { googleCalendarOAuth2Api: {
						id: "",
						name: "googleCalendarOAuth2Api"
					} }
				}
			}]
		}
	},
	{
		id: "qualify-new-leads",
		labelKey: "agents.builder.templates.qualifyNewLeads.label",
		descriptionKey: "agents.builder.templates.qualifyNewLeads.description",
		icon: "users",
		gradient: {
			from: "#059669",
			to: "#84CC16",
			angle: 120,
			fromStop: 4,
			toStop: 88
		},
		config: {
			name: "Qualify New Leads",
			instructions: "You are a lead qualification agent. Score new leads from the CRM based on their profile, activity, and engagement. Route high-scoring leads to sales for immediate follow-up, and nurture low-scoring leads with relevant content."
		}
	},
	{
		id: "propose-meeting-times",
		labelKey: "agents.builder.templates.proposeMeetingTimes.label",
		descriptionKey: "agents.builder.templates.proposeMeetingTimes.description",
		icon: "calendar",
		gradient: {
			from: "#0F766E",
			to: "#2DD4BF",
			angle: 150,
			fromStop: 4,
			toStop: 96
		},
		config: {
			name: "Propose Meeting Times",
			instructions: "You are a scheduling agent. Find open slots on the user’s Google Calendar and suggest a few meeting times. Match the requested duration and time window. Do not book a meeting until the user confirms a time.",
			tools: [{
				type: "node",
				name: "Google Calendar",
				description: "Find open slots on Google Calendar.",
				node: {
					nodeType: "n8n-nodes-base.googleCalendar",
					nodeTypeVersion: 1.3,
					nodeParameters: {
						resource: "calendar",
						operation: "availability",
						timeMin: "={{ $fromAI('timeMin', 'Start of the interval to check', 'string') }}",
						timeMax: "={{ $fromAI('timeMax', 'End of the interval to check', 'string') }}"
					},
					credentials: { googleCalendarOAuth2Api: {
						id: "",
						name: "googleCalendarOAuth2Api"
					} }
				}
			}]
		}
	}
];
/**
* A blank agent: no instructions, no tools, and no channel integrations.
* `name` and `model` are ignored — both are seeded on every new agent, so a
* default name or model does not count as content the user would lose by
* applying a template.
*/
function isAgentConfigBlank(config) {
	return config.instructions.trim() === "" && (config.tools?.length ?? 0) === 0 && (config.integrations?.length ?? 0) === 0;
}
/**
* Returns the config with the template written onto it, or `null` when the
* agent already has content (instructions or tools). `name` is only replaced
* while it still equals `defaultName` (the seeded "Untitled"), so a renamed
* agent keeps its name. The template icon and gradient replace the
* personalisation. `model` and every other field are preserved.
*/
function applyAgentTemplate(config, template, defaultName) {
	if (!isAgentConfigBlank(config)) return null;
	return {
		...config,
		name: config.name === defaultName ? template.config.name : config.name,
		instructions: template.config.instructions,
		tools: template.config.tools ?? [],
		integrations: template.config.integrations ?? [],
		config: {
			...config.config,
			...template.config.config
		},
		personalisation: {
			icon: template.icon,
			gradient: { ...template.gradient }
		}
	};
}
//#endregion
//#region src/features/agents/composables/useAgentPublish.ts
/**
* Shared publish/unpublish flow used by the builder header button and the list card.
* Owns the confirmation modal, toasts, error handling, and the `publishing` spinner
* state so both call sites stay thin and behave consistently.
*/
function useAgentPublish() {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showMessage, showError } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const publishing = ref(false);
	async function publish(projectId, agentId) {
		if (publishing.value) return null;
		publishing.value = true;
		try {
			const updated = await publishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.published"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.publish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function unpublish(projectId, agentId, agentName) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.unpublish.modal.title", { interpolate: { name: agentName ?? "" } }),
			description: locale.baseText("agents.unpublish.modal.description"),
			confirmButtonText: locale.baseText("agents.unpublish.modal.button.unpublish"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await unpublishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.unpublished"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.unpublish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function revertToPublished(projectId, agentId) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.revertToPublished.modal.title"),
			description: locale.baseText("agents.revertToPublished.modal.description"),
			confirmButtonText: locale.baseText("agents.revertToPublished.modal.button.revert"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await revertAgentToPublished(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.reverted"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.revert"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	return {
		publish,
		unpublish,
		revertToPublished,
		publishing
	};
}
//#endregion
//#region src/features/agents/components/AgentTemplateList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = ["data-test-id"];
var AgentTemplateList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentTemplateList",
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ul", { class: normalizeClass(_ctx.$style.examples) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(AGENT_TEMPLATES), (template, index) => {
				return openBlock(), createElementBlock("li", {
					key: template.id,
					class: normalizeClass(_ctx.$style.example),
					style: normalizeStyle({ "--intro-index": index + 1 }),
					"data-test-id": `agent-template-${template.id}`
				}, [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.exampleButton),
					onClick: ($event) => emit("select", template)
				}, [
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.exampleIcon),
						"data-test-id": `agent-template-icon-${template.id}`
					}, [createVNode(AgentPersonalisationIcon_default, {
						personalisation: {
							icon: template.icon,
							gradient: template.gradient
						},
						size: 40
					}, null, 8, ["personalisation"])], 10, _hoisted_3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.exampleText) }, [createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.exampleLabel) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(template.labelKey)), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						class: normalizeClass(_ctx.$style.exampleDescription),
						title: unref(i18n).baseText(template.descriptionKey)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(template.descriptionKey)), 1)]),
						_: 2
					}, 1032, ["class", "title"])], 2),
					createVNode(unref(N8nIcon_default), {
						icon: "arrow-right",
						color: "text-light",
						size: "medium",
						class: normalizeClass(_ctx.$style.exampleArrow)
					}, null, 8, ["class"])
				], 10, _hoisted_2)], 14, _hoisted_1);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentTemplateList.vue?vue&type=style&index=0&lang.module.scss
var examples = "_examples_tbzdw_278";
var example = "_example_tbzdw_278";
var fadeInUp = "_fadeInUp_tbzdw_1";
var exampleButton = "_exampleButton_tbzdw_300";
var exampleArrow = "_exampleArrow_tbzdw_319";
var exampleIcon = "_exampleIcon_tbzdw_328";
var exampleText = "_exampleText_tbzdw_333";
var exampleLabel = "_exampleLabel_tbzdw_340";
var exampleDescription = "_exampleDescription_tbzdw_344";
var shimmer = "_shimmer_tbzdw_1";
var spin = "_spin_tbzdw_1";
var opacityPulse = "_opacityPulse_tbzdw_1";
var popoverIn = "_popoverIn_tbzdw_1";
var fadeIn = "_fadeIn_tbzdw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_tbzdw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_tbzdw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_tbzdw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_tbzdw_1";
var blurSwapIn = "_blurSwapIn_tbzdw_1";
var blurSwapOut = "_blurSwapOut_tbzdw_1";
var pulseGlow = "_pulseGlow_tbzdw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_tbzdw_1";
var fade = "_fade_tbzdw_1";
var fadeInDown = "_fadeInDown_tbzdw_1";
var fadeInLeft = "_fadeInLeft_tbzdw_1";
var fadeInRight = "_fadeInRight_tbzdw_1";
var fadeOut = "_fadeOut_tbzdw_1";
var fadeOutDown = "_fadeOutDown_tbzdw_1";
var fadeOutUp = "_fadeOutUp_tbzdw_1";
var fadeOutLeft = "_fadeOutLeft_tbzdw_1";
var fadeOutRight = "_fadeOutRight_tbzdw_1";
var ping = "_ping_tbzdw_1";
var blinkBackground = "_blinkBackground_tbzdw_1";
var typingBlink = "_typingBlink_tbzdw_1";
var AgentTemplateList_vue_vue_type_style_index_0_lang_module_default = {
	examples,
	example,
	fadeInUp,
	exampleButton,
	exampleArrow,
	exampleIcon,
	exampleText,
	exampleLabel,
	exampleDescription,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_tbzdw_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var AgentTemplateList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTemplateList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTemplateList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { applyAgentTemplate as a, AGENT_TEMPLATE_SUGGESTIONS_VERSION as i, useAgentPublish as n, isAgentConfigBlank as o, AGENT_TEMPLATES as r, isAgentStarter as s, AgentTemplateList_default as t };

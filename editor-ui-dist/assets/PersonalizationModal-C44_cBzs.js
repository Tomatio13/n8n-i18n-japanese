import { Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Yo as useRoute, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zf as ref } from "./vendor-zYfdu4Ed.js";
import { $_ as REAL_ESTATE_OR_CONSTRUCTION, A_ as GOVERNMENT_INDUSTRY, B_ as MARKETING_AUTOMATION_GOAL_KEY, Bg as COMMUNITY_PLUS_ENROLLMENT_MODAL, Bv as usePostHog, C_ as DEVOPS_MONITORING_AND_ALERTING_GOAL, Cv as TELECOMS_INDUSTRY, D_ as ECOMMERCE_COMPANY_TYPE, E_ as DIGITAL_AGENCY_COMPANY_TYPE, FS as PERSONALIZATION_MODAL_KEY, F_ as MANUFACTURING_INDUSTRY, G_ as MEDIA_INDUSTRY, H_ as MARKETING_AUTOMATION_OTHER, IS as useSettingsStore, I_ as MARKETING_AUTOMATION_ACTIONS, J_ as OTHER_COMPANY_TYPE, K_ as OTHER_AUTOMATION_GOAL, LS as useRootStore, L_ as MARKETING_AUTOMATION_AD_CAMPAIGN, NM as _plugin_vue_export_helper_default, N_ as IT_INDUSTRY, OS as useToast, O_ as EDUCATION_TYPE, PS as useUsersStore, P_ as LEGAL_INDUSTRY, Q_ as PHYSICAL_RETAIL_OR_SERVICES, RT as getResourcePermissions, R_ as MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION, S_ as DEVOPS_INCIDENT_RESPONSE_GOAL, Sj as N8nFormInputs_default, Sv as SYSTEMS_INTEGRATOR_COMPANY_TYPE, T_ as DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL, Tc as isInstanceAiChatRoute, U_ as MARKETING_AUTOMATION_REPORTING, Uj as createFormEventBus, V_ as MARKETING_AUTOMATION_LEAD_GENERATION_GOAL, W_ as MARKETING_INDUSTRY, X_ as OTHER_MARKETING_AUTOMATION_GOAL_KEY, Y_ as OTHER_INDUSTRY_OPTION, Z_ as PERSONAL_COMPANY_TYPE, __ as DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL, _v as ROLE_OTHER_KEY, aA as DialogDescription_default, a_ as AUTOMATION_BENEFICIARY_OTHER_TEAMS, av as REPORTED_SOURCE_OTHER, b_ as DEVOPS_AUTOMATION_GOAL_OTHER_KEY, bv as SAAS_COMPANY_TYPE, c_ as COMPANY_SIZE_1000_OR_MORE, cv as REPORTED_SOURCE_TWITTER, d_ as COMPANY_SIZE_500_999, dv as ROLE_CUSTOMER_SUPPORT, ev as REPORTED_SOURCE_EVENT, f_ as COMPANY_SIZE_KEY, fv as ROLE_DATA_SCIENCE, g_ as DEVOPS_AUTOMATION_CI_CD_GOAL, gg as useUIStore, gv as ROLE_OTHER, hv as ROLE_KEY, iA as DialogBody_default, i_ as AUTOMATION_BENEFICIARY_MY_TEAM, iv as REPORTED_SOURCE_LINKEDIN, j_ as HEALTHCARE_INDUSTRY, kM as N8nButton_default, kS as VIEWS, k_ as FINANCE_INSURANCE_INDUSTRY, l_ as COMPANY_SIZE_100_499, lv as REPORTED_SOURCE_YOUTUBE, m_ as COMPANY_TYPE_KEY, md as useExternalHooks, mv as ROLE_ENGINEERING, nv as REPORTED_SOURCE_GOOGLE, oA as Dialog_default, o_ as AUTOMATION_BENEFICIARY_SELF, ov as REPORTED_SOURCE_OTHER_KEY, p_ as COMPANY_SIZE_PERSONAL_USE, pv as ROLE_DEVOPS, q_ as OTHER_COMPANY_INDUSTRY_EXTENDED_KEY, rA as DialogFooter_default, r_ as AUTOMATION_BENEFICIARY_KEY, rv as REPORTED_SOURCE_KEY, s_ as COMPANY_INDUSTRY_EXTENDED_KEY, sv as REPORTED_SOURCE_PODCAST, tv as REPORTED_SOURCE_FRIEND, u_ as COMPANY_SIZE_20_99, uv as ROLE_BUSINESS_OWNER, v_ as DEVOPS_AUTOMATION_DATA_SYNCING_GOAL, vv as ROLE_SALES_AND_MARKETING, w_ as DEVOPS_REPORTING_GOAL, xv as SECURITY_INDUSTRY, y_ as DEVOPS_AUTOMATION_GOAL_KEY, yv as ROLE_SECURITY, zM as useI18n, z_ as MARKETING_AUTOMATION_DATA_SYNCHING } from "./app-BJz3tlB7.js";
//#region src/features/settings/users/components/PersonalizationModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SURVEY_VERSION = "v4";
var PersonalizationModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PersonalizationModal",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const formBus = createFormEventBus();
		const { showError } = useToast();
		const i18n = useI18n();
		const rootStore = useRootStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const posthogStore = usePostHog();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[PERSONALIZATION_MODAL_KEY]?.open === true);
		const formValues = ref({});
		const isSaving = ref(false);
		const userPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes));
		const survey = computed(() => [
			{
				name: COMPANY_TYPE_KEY,
				properties: {
					label: i18n.baseText("personalizationModal.whatBestDescribesYourCompany"),
					type: "select",
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							label: i18n.baseText("personalizationModal.saas"),
							value: SAAS_COMPANY_TYPE
						},
						{
							label: i18n.baseText("personalizationModal.eCommerce"),
							value: ECOMMERCE_COMPANY_TYPE
						},
						{
							label: i18n.baseText("personalizationModal.digitalAgencyOrConsultant"),
							value: DIGITAL_AGENCY_COMPANY_TYPE
						},
						{
							label: i18n.baseText("personalizationModal.systemsIntegrator"),
							value: SYSTEMS_INTEGRATOR_COMPANY_TYPE
						},
						{
							value: EDUCATION_TYPE,
							label: i18n.baseText("personalizationModal.education")
						},
						{
							label: i18n.baseText("personalizationModal.other"),
							value: OTHER_COMPANY_TYPE
						},
						{
							label: i18n.baseText("personalizationModal.imNotUsingN8nForWork"),
							value: PERSONAL_COMPANY_TYPE
						}
					]
				}
			},
			{
				name: COMPANY_INDUSTRY_EXTENDED_KEY,
				properties: {
					type: "multi-select",
					label: i18n.baseText("personalizationModal.whichIndustriesIsYourCompanyIn"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							value: FINANCE_INSURANCE_INDUSTRY,
							label: i18n.baseText("personalizationModal.financeOrInsurance")
						},
						{
							value: GOVERNMENT_INDUSTRY,
							label: i18n.baseText("personalizationModal.government")
						},
						{
							value: HEALTHCARE_INDUSTRY,
							label: i18n.baseText("personalizationModal.healthcare")
						},
						{
							value: IT_INDUSTRY,
							label: i18n.baseText("personalizationModal.it")
						},
						{
							value: LEGAL_INDUSTRY,
							label: i18n.baseText("personalizationModal.legal")
						},
						{
							value: "msp",
							label: i18n.baseText("personalizationModal.managedServiceProvider")
						},
						{
							value: MARKETING_INDUSTRY,
							label: i18n.baseText("personalizationModal.marketing")
						},
						{
							value: MEDIA_INDUSTRY,
							label: i18n.baseText("personalizationModal.media")
						},
						{
							value: MANUFACTURING_INDUSTRY,
							label: i18n.baseText("personalizationModal.manufacturing")
						},
						{
							value: PHYSICAL_RETAIL_OR_SERVICES,
							label: i18n.baseText("personalizationModal.physicalRetailOrServices")
						},
						{
							value: REAL_ESTATE_OR_CONSTRUCTION,
							label: i18n.baseText("personalizationModal.realEstateOrConstruction")
						},
						{
							value: SECURITY_INDUSTRY,
							label: i18n.baseText("personalizationModal.security")
						},
						{
							value: TELECOMS_INDUSTRY,
							label: i18n.baseText("personalizationModal.telecoms")
						},
						{
							value: OTHER_INDUSTRY_OPTION,
							label: i18n.baseText("personalizationModal.otherPleaseSpecify")
						}
					]
				},
				shouldDisplay(values) {
					return values[COMPANY_TYPE_KEY] === OTHER_COMPANY_TYPE;
				}
			},
			{
				name: OTHER_COMPANY_INDUSTRY_EXTENDED_KEY,
				properties: { placeholder: i18n.baseText("personalizationModal.specifyYourCompanysIndustry") },
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const companyIndustry = values[COMPANY_INDUSTRY_EXTENDED_KEY];
					return companyType === "other" && !!companyIndustry && companyIndustry.includes("other");
				}
			},
			{
				name: ROLE_KEY,
				properties: {
					type: "select",
					label: i18n.baseText("personalizationModal.whichRoleBestDescribesYou"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							value: ROLE_BUSINESS_OWNER,
							label: i18n.baseText("personalizationModal.businessOwner")
						},
						{
							value: ROLE_CUSTOMER_SUPPORT,
							label: i18n.baseText("personalizationModal.customerSupport")
						},
						{
							value: ROLE_DATA_SCIENCE,
							label: i18n.baseText("personalizationModal.dataScience")
						},
						{
							value: ROLE_DEVOPS,
							label: i18n.baseText("personalizationModal.devops")
						},
						{
							value: "it",
							label: i18n.baseText("personalizationModal.it")
						},
						{
							value: ROLE_ENGINEERING,
							label: i18n.baseText("personalizationModal.engineering")
						},
						{
							value: ROLE_SALES_AND_MARKETING,
							label: i18n.baseText("personalizationModal.salesAndMarketing")
						},
						{
							value: ROLE_SECURITY,
							label: i18n.baseText("personalizationModal.security")
						},
						{
							value: ROLE_OTHER,
							label: i18n.baseText("personalizationModal.otherPleaseSpecify")
						}
					]
				},
				shouldDisplay(values) {
					return values[COMPANY_TYPE_KEY] !== PERSONAL_COMPANY_TYPE;
				}
			},
			{
				name: ROLE_OTHER_KEY,
				properties: { placeholder: i18n.baseText("personalizationModal.specifyYourRole") },
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const role = values[ROLE_KEY];
					return companyType !== "personal" && role === "other";
				}
			},
			{
				name: DEVOPS_AUTOMATION_GOAL_KEY,
				properties: {
					type: "multi-select",
					label: i18n.baseText("personalizationModal.whatAreYouLookingToAutomate"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							value: DEVOPS_AUTOMATION_CI_CD_GOAL,
							label: i18n.baseText("personalizationModal.cicd")
						},
						{
							value: DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL,
							label: i18n.baseText("personalizationModal.cloudInfrastructureOrchestration")
						},
						{
							value: DEVOPS_AUTOMATION_DATA_SYNCING_GOAL,
							label: i18n.baseText("personalizationModal.dataSynching")
						},
						{
							value: DEVOPS_INCIDENT_RESPONSE_GOAL,
							label: i18n.baseText("personalizationModal.incidentResponse")
						},
						{
							value: DEVOPS_MONITORING_AND_ALERTING_GOAL,
							label: i18n.baseText("personalizationModal.monitoringAndAlerting")
						},
						{
							value: DEVOPS_REPORTING_GOAL,
							label: i18n.baseText("personalizationModal.reporting")
						},
						{
							value: DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL,
							label: i18n.baseText("personalizationModal.ticketingSystemsIntegrations")
						},
						{
							value: OTHER_AUTOMATION_GOAL,
							label: i18n.baseText("personalizationModal.other")
						}
					]
				},
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const role = values[ROLE_KEY];
					return companyType !== "personal" && [
						"devops",
						"engineering",
						"it"
					].includes(role);
				}
			},
			{
				name: DEVOPS_AUTOMATION_GOAL_OTHER_KEY,
				properties: { placeholder: i18n.baseText("personalizationModal.specifyYourAutomationGoal") },
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const goals = values[DEVOPS_AUTOMATION_GOAL_KEY];
					const role = values[ROLE_KEY];
					return companyType !== "personal" && [
						"devops",
						"engineering",
						"it"
					].includes(role) && !!goals && goals.includes("other");
				}
			},
			{
				name: MARKETING_AUTOMATION_GOAL_KEY,
				properties: {
					type: "multi-select",
					label: i18n.baseText("personalizationModal.specifySalesMarketingGoal"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							label: i18n.baseText("personalizationModal.leadGeneration"),
							value: MARKETING_AUTOMATION_LEAD_GENERATION_GOAL
						},
						{
							label: i18n.baseText("personalizationModal.customerCommunication"),
							value: MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION
						},
						{
							label: i18n.baseText("personalizationModal.customerActions"),
							value: MARKETING_AUTOMATION_ACTIONS
						},
						{
							label: i18n.baseText("personalizationModal.adCampaign"),
							value: MARKETING_AUTOMATION_AD_CAMPAIGN
						},
						{
							label: i18n.baseText("personalizationModal.reporting"),
							value: MARKETING_AUTOMATION_REPORTING
						},
						{
							label: i18n.baseText("personalizationModal.dataSynching"),
							value: MARKETING_AUTOMATION_DATA_SYNCHING
						},
						{
							label: i18n.baseText("personalizationModal.other"),
							value: MARKETING_AUTOMATION_OTHER
						}
					]
				},
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const role = values[ROLE_KEY];
					return companyType !== "personal" && role === "sales-and-marketing";
				}
			},
			{
				name: OTHER_MARKETING_AUTOMATION_GOAL_KEY,
				properties: { placeholder: i18n.baseText("personalizationModal.specifyOtherSalesAndMarketingGoal") },
				shouldDisplay(values) {
					const companyType = values[COMPANY_TYPE_KEY];
					const goals = values[MARKETING_AUTOMATION_GOAL_KEY];
					const role = values[ROLE_KEY];
					return companyType !== "personal" && role === "sales-and-marketing" && !!goals && goals.includes("other");
				}
			},
			{
				name: AUTOMATION_BENEFICIARY_KEY,
				properties: {
					type: "select",
					label: i18n.baseText("personalizationModal.specifyAutomationBeneficiary"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							label: i18n.baseText("personalizationModal.myself"),
							value: AUTOMATION_BENEFICIARY_SELF
						},
						{
							label: i18n.baseText("personalizationModal.myTeam"),
							value: AUTOMATION_BENEFICIARY_MY_TEAM
						},
						{
							label: i18n.baseText("personalizationModal.otherTeams"),
							value: AUTOMATION_BENEFICIARY_OTHER_TEAMS
						}
					]
				},
				shouldDisplay(values) {
					return values[COMPANY_TYPE_KEY] !== PERSONAL_COMPANY_TYPE;
				}
			},
			{
				name: COMPANY_SIZE_KEY,
				properties: {
					type: "select",
					label: i18n.baseText("personalizationModal.howBigIsYourCompany"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							label: i18n.baseText("personalizationModal.lessThan20People"),
							value: "<20"
						},
						{
							label: `20-99 ${i18n.baseText("personalizationModal.people")}`,
							value: COMPANY_SIZE_20_99
						},
						{
							label: `100-499 ${i18n.baseText("personalizationModal.people")}`,
							value: COMPANY_SIZE_100_499
						},
						{
							label: `500-999 ${i18n.baseText("personalizationModal.people")}`,
							value: COMPANY_SIZE_500_999
						},
						{
							label: `1000+ ${i18n.baseText("personalizationModal.people")}`,
							value: COMPANY_SIZE_1000_OR_MORE
						},
						{
							label: i18n.baseText("personalizationModal.imNotUsingN8nForWork"),
							value: COMPANY_SIZE_PERSONAL_USE
						}
					]
				},
				shouldDisplay(values) {
					return values[COMPANY_TYPE_KEY] !== PERSONAL_COMPANY_TYPE;
				}
			},
			{
				name: REPORTED_SOURCE_KEY,
				properties: {
					type: "select",
					label: i18n.baseText("personalizationModal.howDidYouHearAboutN8n"),
					placeholder: i18n.baseText("personalizationModal.select"),
					options: [
						{
							label: "Google",
							value: REPORTED_SOURCE_GOOGLE
						},
						{
							label: "Twitter",
							value: REPORTED_SOURCE_TWITTER
						},
						{
							label: "LinkedIn",
							value: REPORTED_SOURCE_LINKEDIN
						},
						{
							label: "YouTube",
							value: REPORTED_SOURCE_YOUTUBE
						},
						{
							label: "ChatGPT / LLM",
							value: "llm"
						},
						{
							label: i18n.baseText("personalizationModal.friendWordOfMouth"),
							value: REPORTED_SOURCE_FRIEND
						},
						{
							label: i18n.baseText("personalizationModal.podcast"),
							value: REPORTED_SOURCE_PODCAST
						},
						{
							label: i18n.baseText("personalizationModal.event"),
							value: REPORTED_SOURCE_EVENT
						},
						{
							label: i18n.baseText("personalizationModal.otherPleaseSpecify"),
							value: REPORTED_SOURCE_OTHER
						}
					]
				}
			},
			{
				name: REPORTED_SOURCE_OTHER_KEY,
				properties: { placeholder: i18n.baseText("personalizationModal.specifyReportedSource") },
				shouldDisplay(values) {
					return values[REPORTED_SOURCE_KEY] === REPORTED_SOURCE_OTHER;
				}
			}
		]);
		const onSave = () => {
			formBus.emit("submit");
		};
		const closeCallback = () => {
			if (route.name !== VIEWS.HOMEPAGE && !isInstanceAiChatRoute(route.name)) router.replace({ name: VIEWS.HOMEPAGE });
		};
		const closeDialog = () => {
			if (uiStore.modalsById["personalization"]?.open !== true) return;
			uiStore.closeModal(PERSONALIZATION_MODAL_KEY);
			if (settingsStore.deploymentType === "default" && userPermissions.value.community.register) uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: {
					closeCallback,
					customHeading: void 0
				}
			});
			else closeCallback();
		};
		function onDialogOpenUpdate(open) {
			if (!open) closeDialog();
		}
		const onSubmit = async (values) => {
			isSaving.value = true;
			try {
				const completedSurvey = {
					...values,
					version: SURVEY_VERSION,
					personalization_survey_submitted_at: (/* @__PURE__ */ new Date()).toISOString(),
					personalization_survey_n8n_version: rootStore.versionCli
				};
				await externalHooks.run("personalizationModal.onSubmit", completedSurvey);
				await usersStore.submitPersonalizationSurvey(completedSurvey);
				posthogStore.setMetadata(completedSurvey, "user");
			} catch (e) {
				showError(e, "Error while submitting results");
			} finally {
				isSaving.value = false;
				closeDialog();
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: modalOpen.value,
				size: "medium",
				header: unref(i18n).baseText("personalizationModal.customizeN8n"),
				"show-close-button": false,
				"close-on-overlay-click": false,
				"close-on-escape": false,
				"onUpdate:open": onDialogOpenUpdate
			}, {
				default: withCtx(() => [createVNode(unref(DialogBody_default), { "data-test-id": `${unref(PERSONALIZATION_MODAL_KEY)}-modal` }, {
					default: withCtx(() => [createVNode(unref(DialogDescription_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("personalizationModal.theseQuestionsHelpUs")), 1)]),
						_: 1
					}), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.container),
						"data-test-id": "personalization-form"
					}, [createVNode(unref(N8nFormInputs_default), {
						modelValue: formValues.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formValues.value = $event),
						inputs: survey.value,
						"column-view": true,
						"event-bus": unref(formBus),
						teleported: false,
						"tag-size": "small",
						onSubmit
					}, null, 8, [
						"modelValue",
						"inputs",
						"event-bus"
					])], 2)]),
					_: 1
				}, 8, ["data-test-id"]), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						loading: isSaving.value,
						label: unref(i18n).baseText("personalizationModal.getStarted"),
						float: "right",
						onClick: onSave
					}, null, 8, ["loading", "label"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
}), [["__cssModules", { "$style": { container: "_container_2zzx1_1" } }]]);
//#endregion
export { PersonalizationModal_default as default };

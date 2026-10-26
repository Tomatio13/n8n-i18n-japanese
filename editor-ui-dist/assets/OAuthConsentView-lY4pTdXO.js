import { Fd as createBaseVNode, Hd as createVNode, Id as createBlock, Ld as createCommentVNode, Nf as ref, Pd as computed, Rd as createElementBlock, Vd as createTextVNode, Vf as unref, Wd as defineComponent, cp as normalizeClass, go as defineStore, if as onUnmounted, jd as Fragment, of as openBlock, pp as toDisplayString, rf as onMounted, xf as withCtx, yf as watch } from "./vendor-D9HlBS7Y.js";
import { $u as ScopesSelector_default, AT as _plugin_vue_export_helper_default, Aw as Checkbox_default, DT as N8nIcon_default, ET as N8nButton_default, FT as useI18n, Fw as N8nHeading_default, QS as STORES, Uv as useTelemetry, Zw as N8nCallout_default, bT as N8nTooltip_default, dw as N8nNotice_default, gy as makeRestApiRequest, hy as ResponseError, qi as MCP_SCOPE_GROUPS, qv as useRootStore, vT as N8nText_default, vf as useDocumentTitle, vw as N8nLogo_default, zv as useToast } from "./app-TXEjHrLJ.js";
//#region ../@n8n/rest-api-client/src/api/consent.ts
async function getConsentDetails(context) {
	return await makeRestApiRequest(context, "GET", "/consent/details");
}
async function approveConsent(context, approved, scopes) {
	return await makeRestApiRequest(context, "POST", "/consent/approve", {
		approved,
		scopes
	});
}
//#endregion
//#region src/app/stores/consent.store.ts
var useConsentStore = defineStore(STORES.CONSENT, () => {
	const consentDetails = ref(null);
	const isLoading = ref(false);
	const error = ref(null);
	const errorCode = ref(null);
	const rootStore = useRootStore();
	let latestRequestId = 0;
	const fetchConsentDetails = async () => {
		const requestId = ++latestRequestId;
		isLoading.value = true;
		error.value = null;
		errorCode.value = null;
		try {
			const response = await getConsentDetails(rootStore.restApiContext);
			if (requestId !== latestRequestId) return consentDetails.value;
			consentDetails.value = response;
			return consentDetails.value;
		} catch (err) {
			if (requestId === latestRequestId) {
				if (err instanceof ResponseError && err.httpStatusCode === 422) errorCode.value = "resource_unavailable";
				else if (err instanceof ResponseError && err.httpStatusCode === 403) errorCode.value = "forbidden";
				error.value = err instanceof Error ? err.message : "Failed to load consent details";
			}
			throw err;
		} finally {
			if (requestId === latestRequestId) isLoading.value = false;
		}
	};
	const approveConsent$1 = async (approved, scopes) => {
		isLoading.value = true;
		error.value = null;
		try {
			return await approveConsent(rootStore.restApiContext, approved, scopes);
		} catch (err) {
			error.value = err instanceof Error ? err.message : "Failed to process consent";
			throw err;
		} finally {
			isLoading.value = false;
		}
	};
	const resetState = () => {
		consentDetails.value = null;
		isLoading.value = false;
		error.value = null;
		errorCode.value = null;
	};
	return {
		fetchConsentDetails,
		approveConsent: approveConsent$1,
		resetState,
		consentDetails,
		isLoading,
		error,
		errorCode
	};
});
//#endregion
//#region src/app/views/OAuthConsentView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	viewBox: "0 0 64 8",
	preserveAspectRatio: "none"
};
var OAuthConsentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthConsentView",
	setup(__props) {
		const consentStore = useConsentStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const telemetry = useTelemetry();
		const waitingForRedirect = ref(false);
		const autoApprovedRedirect = ref(false);
		const detailsResolved = ref(false);
		const redirectUriTrusted = ref(false);
		const selectedScopes = ref([]);
		let isActive = true;
		onUnmounted(() => {
			isActive = false;
		});
		const error = computed(() => consentStore.error);
		const loading = computed(() => consentStore.isLoading);
		const errorMessage = computed(() => {
			if (consentStore.errorCode === "resource_unavailable") return i18n.baseText("oauth.consentView.error.resourceUnavailable");
			else if (consentStore.errorCode === "forbidden") return i18n.baseText("oauth.consentView.error.insufficientScope");
			return consentStore.error;
		});
		const clientDetails = computed(() => {
			const details = consentStore.consentDetails;
			return details && !details.autoApproved ? details : null;
		});
		const resourceName = computed(() => clientDetails.value?.resourceName);
		const uiHints = computed(() => consentStore.consentDetails?.uiHints);
		const firstPartyResourceType = computed(() => i18n.baseText(`oauth.consentView.firstParty.type.${clientDetails.value?.uiHints?.consentType ?? "default"}`));
		const availableScopes = computed(() => clientDetails.value?.scopes ?? []);
		const hasScopes = computed(() => availableScopes.value.length > 0);
		const trustRequired = computed(() => !!clientDetails.value?.redirectUri && !clientDetails.value?.isFirstParty);
		const noScopesSelected = computed(() => hasScopes.value && selectedScopes.value.length === 0);
		const allowDisabled = computed(() => loading.value || error.value !== null || !clientDetails.value || trustRequired.value && !redirectUriTrusted.value || noScopesSelected.value);
		const allowDisabledReason = computed(() => {
			if (noScopesSelected.value) return i18n.baseText("oauth.consentView.allowDisabled.noScopes");
			if (trustRequired.value && !redirectUriTrusted.value) return i18n.baseText("oauth.consentView.allowDisabled.trust");
			return null;
		});
		watch(() => clientDetails.value?.redirectUri, () => {
			redirectUriTrusted.value = false;
		});
		watch(availableScopes, (scopes) => {
			const previous = clientDetails.value?.previousScopes ?? [];
			selectedScopes.value = previous.length > 0 ? previous : [...scopes];
		}, { immediate: true });
		const handleAllow = async () => {
			try {
				const response = await consentStore.approveConsent(true, hasScopes.value ? selectedScopes.value : void 0);
				telemetry.track("User approved MCP consent", {
					client_name: clientDetails.value?.clientName,
					selected_scopes: selectedScopes.value,
					selected_scopes_count: selectedScopes.value.length,
					all_scopes_selected: selectedScopes.value.length === availableScopes.value.length
				});
				waitingForRedirect.value = true;
				window.location.href = response.redirectUrl;
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.allow"));
			}
		};
		const handleDeny = async () => {
			try {
				await consentStore.approveConsent(false);
				telemetry.track("User denied MCP consent", { client_name: clientDetails.value?.clientName });
				window.location.href = window.BASE_PATH ?? "/";
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.deny"));
			}
		};
		const handleClose = () => {
			window.location.href = window.BASE_PATH ?? "/";
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("oauth.consentView.title"));
			try {
				const details = await consentStore.fetchConsentDetails();
				if (!isActive) return;
				detailsResolved.value = true;
				if (details?.autoApproved && details.redirectUrl) {
					autoApprovedRedirect.value = true;
					window.location.href = details.redirectUrl;
					return;
				}
				telemetry.track("User viewed MCP consent screen", {
					client_name: clientDetails.value?.clientName,
					available_scopes_count: availableScopes.value.length
				});
			} catch (err) {
				if (!isActive) return;
				toast.showError(err, i18n.baseText("oauth.consentView.error.fetchDetails"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.overlay) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["consent-dialog"]) }, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.logo) }, [uiHints.value?.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: uiHints.value.icon,
						size: "large",
						color: "text-dark",
						"data-test-id": "consent-client-icon"
					}, null, 8, ["icon"])) : detailsResolved.value || error.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "mcp",
						size: "large",
						color: "text-dark",
						"data-test-id": "consent-client-icon"
					})) : createCommentVNode("", true)], 2),
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.connector),
						"aria-hidden": "true"
					}, [(openBlock(), createElementBlock("svg", _hoisted_1, [createBaseVNode("line", {
						class: normalizeClass(_ctx.$style["connector-line"]),
						x1: "0",
						y1: "4",
						x2: "64",
						y2: "4",
						stroke: "currentColor",
						"stroke-width": "1.5",
						"stroke-linecap": "round",
						"stroke-dasharray": "2 5"
					}, null, 2)])), createBaseVNode("span", { class: normalizeClass(_ctx.$style.badge) }, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style["badge-spinner"]),
						icon: "loader-circle",
						size: "large"
					}, null, 8, ["class"])], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.logo) }, [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: true,
						"release-channel": "stable"
					})], 2)
				], 2),
				waitingForRedirect.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.success),
					"data-test-id": "consent-success-screen"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.description")), 1)]),
					_: 1
				})], 2)) : error.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-error"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.error.heading")), 1)]),
					_: 1
				}), createVNode(unref(N8nNotice_default), {
					theme: "danger",
					"data-test-id": "consent-error-notice",
					content: errorMessage.value ?? ""
				}, null, 8, ["content"])], 2)) : autoApprovedRedirect.value || !detailsResolved.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-loading"
				}, null, 2)) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-content"
				}, [clientDetails.value?.isFirstParty ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.firstParty.heading", { interpolate: { resourceName: resourceName.value ?? "" } })), 1)]),
					_: 1
				})) : resourceName.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 1,
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.headingWithWorkflow", { interpolate: {
						clientName: clientDetails.value?.clientName ?? "",
						resourceName: resourceName.value
					} })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 2,
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.heading", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				})), createBaseVNode("div", { class: normalizeClass(_ctx.$style["text-content"]) }, [clientDetails.value?.isFirstParty ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.firstParty.description", { interpolate: { resourceType: firstPartyResourceType.value } })), 1)]),
					_: 1
				})) : resourceName.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.descriptionWithWorkflow", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				})) : hasScopes.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.scopes.description", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 3,
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.description", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				})), hasScopes.value ? (openBlock(), createBlock(ScopesSelector_default, {
					key: 4,
					modelValue: selectedScopes.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedScopes.value = $event),
					"available-scopes": availableScopes.value,
					groups: unref(MCP_SCOPE_GROUPS),
					"scope-tools": clientDetails.value?.scopeTools,
					"i18n-key-prefix": "oauth.consentView.scopes",
					"root-test-id": "consent-scopes"
				}, null, 8, [
					"modelValue",
					"available-scopes",
					"groups",
					"scope-tools"
				])) : !resourceName.value ? (openBlock(), createElementBlock("ul", {
					key: 5,
					class: normalizeClass(_ctx.$style["permission-list"])
				}, [
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.listWorkflows")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.workflowDetails")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.executeWorkflows")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.executionDetails")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.createUpdateWorkflows")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.createDataTables")), 1),
					createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.searchProjectsAndFolders")), 1)
				], 2)) : createCommentVNode("", true)], 2)], 2)),
				!waitingForRedirect.value && !autoApprovedRedirect.value && (error.value || detailsResolved.value) ? (openBlock(), createElementBlock("footer", {
					key: 4,
					class: normalizeClass(_ctx.$style.footer)
				}, [!error.value && trustRequired.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.divided)
				}, [createVNode(unref(N8nCallout_default), {
					theme: "secondary",
					iconless: true,
					class: normalizeClass(_ctx.$style["redirect-note"]),
					"data-test-id": "consent-redirect-warning"
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["redirect-note-title"]) }, toDisplayString(unref(i18n).baseText("oauth.consentView.redirectWarning.title")), 3), createBaseVNode("code", {
						class: normalizeClass(_ctx.$style["redirect-url"]),
						"data-test-id": "consent-redirect-uri"
					}, toDisplayString(clientDetails.value?.redirectUri), 3)]),
					_: 1
				}, 8, ["class"])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass([_ctx.$style["footer-actions"], _ctx.$style.divided]) }, [!error.value && trustRequired.value ? (openBlock(), createBlock(unref(Checkbox_default), {
					key: 0,
					modelValue: redirectUriTrusted.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => redirectUriTrusted.value = $event),
					class: normalizeClass(_ctx.$style["trust-confirm"]),
					label: unref(i18n).baseText("oauth.consentView.redirectWarning.confirm"),
					"data-test-id": "consent-redirect-confirm"
				}, null, 8, [
					"modelValue",
					"class",
					"label"
				])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style["button-group"]) }, [error.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					"data-test-id": "consent-close-button",
					size: "large",
					onClick: handleClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					"data-test-id": "consent-deny-button",
					size: "large",
					loading: loading.value,
					disabled: loading.value,
					onClick: handleDeny
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.deny")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"]), createVNode(unref(N8nTooltip_default), { disabled: !allowDisabled.value || !allowDisabledReason.value }, {
					content: withCtx(() => [createTextVNode(toDisplayString(allowDisabledReason.value), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "solid",
						"data-test-id": "consent-allow-button",
						size: "large",
						loading: loading.value,
						disabled: allowDisabled.value,
						onClick: handleAllow
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.allow")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"])]),
					_: 1
				}, 8, ["disabled"])], 64))], 2)], 2)], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/views/OAuthConsentView.vue?vue&type=style&index=0&lang.module.scss
var overlay = "_overlay_12b84_1";
var header = "_header_12b84_31";
var logo = "_logo_12b84_38";
var connector = "_connector_12b84_52";
var badge = "_badge_12b84_79";
var content = "_content_12b84_112";
var success = "_success_12b84_118";
var footer = "_footer_12b84_147";
var divided = "_divided_12b84_146";
var OAuthConsentView_vue_vue_type_style_index_0_lang_module_default = {
	overlay,
	"consent-dialog": "_consent-dialog_12b84_14",
	header,
	logo,
	connector,
	"connector-line": "_connector-line_12b84_69",
	"mcp-connector-dash": "_mcp-connector-dash_12b84_1",
	badge,
	"badge-spinner": "_badge-spinner_12b84_96",
	"mcp-connector-spin": "_mcp-connector-spin_12b84_1",
	content,
	success,
	"text-content": "_text-content_12b84_127",
	"permission-list": "_permission-list_12b84_133",
	footer,
	divided,
	"redirect-note": "_redirect-note_12b84_165",
	"redirect-note-title": "_redirect-note-title_12b84_173",
	"redirect-url": "_redirect-url_12b84_174",
	"footer-actions": "_footer-actions_12b84_188",
	"button-group": "_button-group_12b84_197",
	"trust-confirm": "_trust-confirm_12b84_206"
};
var OAuthConsentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthConsentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthConsentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { OAuthConsentView_default as default };

import { Bd as createElementBlock, Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Md as Fragment, Pf as isRef, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, ff as renderList, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Dj as N8nOption_default, Ej as N8nSelect_default, Er as useContactAdminDialog, Jd as injectWorkflowDocumentStore, MM as N8nIcon_default, MS as useTelemetry, NM as _plugin_vue_export_helper_default, Or as CredentialTypeRestrictedMarker_default, Tv as CREDENTIAL_SELECT_MODAL_KEY, Vl as isCredentialTypeSupported, Wf as ContactAdminModal_default, Wj as createEventBus, af as useNodeTypesStore, bM as N8nText_default, ep as getCredentialTypeRestriction, gg as useUIStore, kM as N8nButton_default, lp as useTypeAvailabilityPoliciesStore, md as useExternalHooks, pp as SCOPE_LABEL_KEY, tp as getNodeTypeRestriction, vk as HTTP_REQUEST_NODE_TYPE, vp as useCredentialsStore, zM as useI18n } from "./app-B_io1t1X.js";
import { t as Modal_default } from "./Modal-D1475wME.js";
import { t as useInstanceAiCredentialHelp } from "./useInstanceAiCredentialHelp-_ymLaKdT.js";
//#region src/features/credentials/composables/useCredentialTypeUsability.ts
var HTTP_REQUEST_CREDENTIAL_TYPES = [
	"extends:oAuth2Api",
	"extends:oAuth1Api",
	"has:authenticate"
];
function isUsableByHttpRequest(credentialType, getCredentialType) {
	return isCredentialTypeSupported(credentialType, HTTP_REQUEST_CREDENTIAL_TYPES, HTTP_REQUEST_NODE_TYPE, getCredentialType);
}
/**
* Why no workflow in the loaded project can use a credential type: a policy blocks the type,
* or blocks every node that could use it, HTTP Request included.
*/
function useCredentialTypeUsability() {
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	function getNodesRestriction(credentialType) {
		const nodeTypes = credentialType.supportedNodes ?? [];
		if (nodeTypes.length === 0) return null;
		const restrictions = [];
		for (const nodeType of nodeTypes) {
			const restriction = getNodeTypeRestriction(nodeType);
			if (!restriction) return null;
			restrictions.push(restriction);
		}
		const getCredentialType = (name) => credentialsStore.getCredentialTypeByName(name) ?? void 0;
		if (isUsableByHttpRequest(credentialType, getCredentialType) && !getNodeTypeRestriction("n8n-nodes-base.httpRequest")) return null;
		const nodeTypeNames = [...new Set(nodeTypes.map((nodeType) => nodeTypesStore.getNodeType(nodeType)?.displayName ?? nodeType))];
		return {
			reason: "nodesRestricted",
			restriction: restrictions.find((verdict) => verdict.scope === "project" || verdict.optInAvailable) ?? restrictions[0],
			nodeTypeNames
		};
	}
	function getCredentialTypeUsability(credentialTypeName) {
		const restriction = getCredentialTypeRestriction(credentialTypeName);
		if (restriction) return {
			reason: "typeRestricted",
			restriction
		};
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		return credentialType ? getNodesRestriction(credentialType) : null;
	}
	return { getCredentialTypeUsability };
}
//#endregion
//#region src/features/credentials/components/CredentialsSelectModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var CredentialsSelectModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CredentialsSelectModal",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const modalBus = ref(createEventBus());
		const selected = ref("");
		const loading = ref(true);
		const selectRef = ref();
		const credentialsStore = useCredentialsStore();
		const uiStore = useUIStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const instanceAiCredentialHelp = useInstanceAiCredentialHelp();
		const typeAvailabilityPoliciesStore = useTypeAvailabilityPoliciesStore();
		const { getCredentialTypeUsability } = useCredentialTypeUsability();
		const { isOpen: isContactAdminOpen, state: contactAdmin, request: requestContactAdmin } = useContactAdminDialog(() => selectRef.value?.blur());
		const hasListOpened = ref(false);
		const searchQuery = ref("");
		const presetUsageScope = computed(() => {
			return (uiStore.modalsById["selectCredential"]?.data)?.usageScope === "instance" ? "instance" : void 0;
		});
		const isListLoading = computed(() => loading.value || typeAvailabilityPoliciesStore.isLoading);
		onMounted(async () => {
			try {
				await credentialsStore.fetchCredentialTypes(false);
			} catch (e) {}
			loading.value = false;
		});
		watch(isListLoading, (isLoading) => {
			if (isLoading) return;
			setTimeout(() => {
				if (selectRef.value) selectRef.value.focus();
			}, 0);
		});
		const allSelectableCredentialTypes = computed(() => credentialsStore.allCredentialTypes.filter((credentialType) => !credentialType.hidden && !credentialType.name.startsWith("chatHub")));
		function toOption(type) {
			const usability = getCredentialTypeUsability(type.name);
			if (!usability) return {
				type,
				restricted: null
			};
			if (usability.reason === "typeRestricted") {
				const { scope } = usability.restriction;
				return {
					type,
					restricted: {
						blocked: true,
						kind: "credential",
						restriction: usability.restriction,
						scopeLabel: i18n.baseText(scope ? SCOPE_LABEL_KEY[scope] : "typeAvailabilityPolicies.restrictedNodes.scope.generic"),
						contactSubject: type.displayName
					}
				};
			}
			const scopeLabel = i18n.baseText("typeAvailabilityPolicies.restrictedCredentialType.nodesRestricted.scope");
			return {
				type,
				restricted: {
					blocked: false,
					kind: "node",
					restriction: usability.restriction,
					scopeLabel,
					popoverScopeLabel: scopeLabel,
					description: i18n.baseText("typeAvailabilityPolicies.restrictedCredentialType.nodesRestricted.description", { interpolate: { nodeTypes: usability.nodeTypeNames.join(", ") } }),
					contactSubject: usability.nodeTypeNames.join(", ")
				}
			};
		}
		const optionRank = (option) => !option.restricted ? 0 : option.restricted.blocked ? 1 : 2;
		/**
		* Usable types first, then the types a policy blocks, then the types whose nodes it blocks.
		* The sort is stable and the store sorts the types by name, so each group keeps that order.
		* It does not depend on the search, so typing only filters.
		*/
		const credentialTypeOptions = computed(() => allSelectableCredentialTypes.value.map(toOption).toSorted((a, b) => optionRank(a) - optionRank(b)));
		const selectableCredentialTypes = computed(() => {
			const q = searchQuery.value.toLowerCase();
			if (!q) return credentialTypeOptions.value;
			return credentialTypeOptions.value.filter(({ type }) => type.displayName.toLowerCase().includes(q));
		});
		function filterCredentials(query) {
			searchQuery.value = query;
		}
		function onSelect(type) {
			if (getCredentialTypeRestriction(type)) return;
			selected.value = type;
		}
		function openCredentialType() {
			modalBus.value.emit("close");
			uiStore.openNewCredential(selected.value, false, false, void 0, void 0, void 0, void 0, {
				instanceAiCredentialHelp: instanceAiCredentialHelp(),
				usageScope: presetUsageScope.value
			});
			const telemetryPayload = {
				credential_type: selected.value,
				source: "primary_menu",
				new_credential: true,
				workflow_id: workflowDocumentStore.value.workflowId
			};
			telemetry.track("User opened Credential modal", telemetryPayload);
			externalHooks.run("credentialsSelectModal.openCredentialType", telemetryPayload);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CREDENTIAL_SELECT_MODAL_KEY),
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				loading: isListLoading.value,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(unref(i18n).baseText("credentialSelectModal.addNewCredential")), 3)]),
				content: withCtx(() => [createBaseVNode("div", null, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(unref(i18n).baseText("credentialSelectModal.selectAnAppOrServiceToConnectTo")), 3),
					createVNode(unref(N8nSelect_default), {
						ref_key: "selectRef",
						ref: selectRef,
						filterable: "",
						"default-first-option": "",
						placeholder: unref(i18n).baseText("credentialSelectModal.searchForApp"),
						size: "xlarge",
						"model-value": selected.value,
						"filter-method": filterCredentials,
						"data-test-id": "new-credential-type-select",
						"onUpdate:modelValue": onSelect,
						onVisibleChange: _cache[0] || (_cache[0] = (visible) => visible && (hasListOpened.value = true))
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(selectableCredentialTypes.value, ({ type: credential, restricted }) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: credential.name,
								value: credential.name,
								label: credential.displayName,
								disabled: restricted?.blocked,
								filterable: "",
								"data-test-id": "new-credential-type-select-option",
								onMousedown: (event) => restricted?.blocked && event.preventDefault()
							}, {
								default: withCtx(() => [restricted ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.restrictedOption)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.restrictedName) }, toDisplayString(credential.displayName), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.restrictedScope) }, [createVNode(unref(N8nText_default), {
									size: "small",
									color: "text-light"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(restricted.scopeLabel), 1)]),
									_: 2
								}, 1024), hasListOpened.value ? (openBlock(), createBlock(CredentialTypeRestrictedMarker_default, {
									key: 0,
									name: credential.displayName,
									restriction: restricted.restriction,
									kind: restricted.kind,
									"scope-label": restricted.popoverScopeLabel,
									description: restricted.description,
									onContactAdmin: (audience) => unref(requestContactAdmin)(restricted.contactSubject, audience, restricted.kind)
								}, null, 8, [
									"name",
									"restriction",
									"kind",
									"scope-label",
									"description",
									"onContactAdmin"
								])) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true)]),
								_: 2
							}, 1032, [
								"value",
								"label",
								"disabled",
								"onMousedown"
							]);
						}), 128))]),
						_: 1
					}, 8, ["placeholder", "model-value"]),
					createVNode(unref(ContactAdminModal_default), {
						open: unref(isContactAdminOpen),
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isRef(isContactAdminOpen) ? isContactAdminOpen.value = $event : null),
						kind: unref(contactAdmin).kind,
						"type-name": unref(contactAdmin).subject,
						audience: unref(contactAdmin).audience
					}, null, 8, [
						"open",
						"kind",
						"type-name",
						"audience"
					])
				])]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("credentialSelectModal.continue"),
					float: "right",
					size: "large",
					disabled: !selected.value || !!unref(getCredentialTypeRestriction)(selected.value),
					"data-test-id": "new-credential-type-button",
					onClick: openCredentialType
				}, null, 8, ["label", "disabled"])], 2)]),
				_: 1
			}, 8, [
				"name",
				"event-bus",
				"loading"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	title: "_title_x1s3q_1",
	subtitle: "_subtitle_x1s3q_6",
	restrictedOption: "_restrictedOption_x1s3q_12",
	restrictedName: "_restrictedName_x1s3q_19",
	restrictedScope: "_restrictedScope_x1s3q_28"
} }]]);
//#endregion
export { CredentialsSelectModal_default as default };

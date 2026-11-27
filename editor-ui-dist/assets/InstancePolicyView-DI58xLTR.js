import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Xo as useRouter, Yo as useRoute, Zd as init_runtime_core_esm_bundler, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { Hd as useDocumentTitle, Jf as usePolicyAdminAccess, NM as _plugin_vue_export_helper_default, UA as N8nSegmentControl_default, dp as POLICIES_LANDING_VIEW, fp as POLICY_TAB_LABEL_KEY, kS as VIEWS, nj as SettingsLayout_default, tj as SettingsPageHeader_default, zM as useI18n } from "./app-BXv1VOvT.js";
//#region ../../modules/type-availability-policies/frontend/src/instance-policy/InstancePolicyView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var InstancePolicyView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstancePolicyView",
	setup(__props) {
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const { manageableKinds, entryRouteName } = usePolicyAdminAccess();
		const tabOptions = computed(() => manageableKinds.value.map((kind) => ({
			value: kind,
			label: i18n.baseText(POLICY_TAB_LABEL_KEY[kind])
		})));
		const activeTab = computed({
			get: () => {
				const requested = route.query.tab;
				return manageableKinds.value.find((kind) => kind === requested) ?? manageableKinds.value[0];
			},
			set: (tab) => {
				router.replace({ query: {
					...route.query,
					tab
				} });
			}
		});
		const back = computed(() => entryRouteName.value === "TypeAvailabilityPoliciesView" ? {
			name: POLICIES_LANDING_VIEW,
			label: i18n.baseText("typeAvailabilityPolicies.instancePolicy.back")
		} : {
			name: VIEWS.SECURITY_SETTINGS,
			label: i18n.baseText("typeAvailabilityPolicies.backToPolicies")
		});
		function onBack() {
			router.push({ name: back.value.name });
		}
		onMounted(() => {
			documentTitle.set(i18n.baseText("typeAvailabilityPolicies.instancePolicy.title"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"show-back": "",
				"back-label": back.value.label,
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "instance-policy-view",
				onBack
			}, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("typeAvailabilityPolicies.instancePolicy.title"),
					description: unref(i18n).baseText("typeAvailabilityPolicies.instancePolicy.description"),
					"show-docs-link": false
				}, null, 8, ["title", "description"]), activeTab.value ? (openBlock(), createBlock(unref(N8nSegmentControl_default), {
					key: 0,
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
					options: tabOptions.value,
					"data-test-id": "instance-policy-tabs"
				}, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["back-label", "class"]);
		};
	}
}), [["__cssModules", { "$style": { layout: "_layout_12pr6_1" } }]]);
//#endregion
export { InstancePolicyView_default as default };

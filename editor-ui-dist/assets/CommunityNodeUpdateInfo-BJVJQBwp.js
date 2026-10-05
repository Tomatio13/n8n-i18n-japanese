import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, Ut as toValue, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as N8nCallout_default } from "./N8nCallout-1EEnGTrv.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-o_9DNe7b.js";
import { H as useNodeTypesStore, Mt as useAiGatewayStore } from "./workflows.store-bhmLKy6g.js";
import { ra as isCommunityPackageName } from "./src-DVqjY0nx.js";
import { t as useSettingsStore } from "./settings.store-CvPjXzAs.js";
import { t as useUsersStore } from "./users.store-B-Ck61Zf.js";
import { t as VIEWS } from "./views-DQZApcH_.js";
import "./constants-BFgNRWjM.js";
import { n as useUIStore } from "./ui.store-ClQOp9Tb.js";
import { n as captureException } from "./exports-Wi07ZyHX.js";
import { n as useCommunityNodesStore } from "./semver-DY046_VN.js";
import { n as fetchInstalledPackageInfo } from "./useInstallNode-BvC4FdMA.js";
//#region src/features/credentials/quickConnect/components/QuickConnectBanner.vue?vue&type=script&setup=true&lang.ts
var QuickConnectBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "QuickConnectBanner",
	props: {
		text: {},
		disclaimer: {}
	},
	setup(__props) {
		const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
		const disclaimerHtml = computed(() => {
			if (!__props.disclaimer) return "";
			const label = escapeHtml(__props.disclaimer.linkLabel ?? "here");
			const link = `<a href="${escapeHtml(__props.disclaimer.linkUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
			return __props.disclaimer.text.split("{link}").map(escapeHtml).join(link);
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return __props.text || __props.disclaimer ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "quick-connect-banner"
			}, [__props.text ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				iconless: ""
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, __props.text]])]),
				_: 1
			})) : createCommentVNode("", true), __props.disclaimer ? withDirectives((openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.disclaimer),
				"data-test-id": "quick-connect-banner-disclaimer"
			}, null, 2)), [[_directive_n8n_html, disclaimerHtml.value]]) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var QuickConnectBanner_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_spbkp_1",
	disclaimer: "_disclaimer_spbkp_7"
};
var QuickConnectBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(QuickConnectBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": QuickConnectBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/gatewayCreditsPromotion/useGatewayCreditsPromotion.ts
var isActive = (promotion, now) => !!promotion?.text?.trim() && (!promotion.startsAt || now >= Date.parse(promotion.startsAt)) && (!promotion.endsAt || now < Date.parse(promotion.endsAt));
/**
* Gateway credits promotion of a community node, looked up by node type or,
* when there is no node type, by credential type.
*/
function useGatewayCreditsPromotion({ nodeType, credentialType }) {
	const nodeTypesStore = useNodeTypesStore();
	const settingsStore = useSettingsStore();
	const aiGatewayStore = useAiGatewayStore();
	const isEnabled = computed(() => settingsStore.isAiGatewayEnabled);
	if (isEnabled.value) aiGatewayStore.fetchConfig();
	if (isEnabled.value && credentialType !== void 0 && nodeTypesStore.vettedCommunityNodeTypes.size === 0) nodeTypesStore.fetchCommunityNodePreviews();
	const communityNode = computed(() => {
		const nodeTypeName = toValue(nodeType);
		if (nodeTypeName) return nodeTypesStore.communityNodeType(nodeTypeName);
		const credentialTypeName = toValue(credentialType);
		if (!credentialTypeName || !aiGatewayStore.isCredentialTypeSupported(credentialTypeName)) return;
		return [...nodeTypesStore.vettedCommunityNodeTypes.values()].find(({ name, gatewayCreditsPromotion }) => isActive(gatewayCreditsPromotion, Date.now()) && nodeTypesStore.getNodeType(name)?.credentials?.some(({ name: credential }) => credential === credentialTypeName));
	});
	return { promotionText: computed(() => {
		const node = communityNode.value;
		if (!isEnabled.value || !node || !isActive(node.gatewayCreditsPromotion, Date.now()) || !aiGatewayStore.isNodeSupported(node.name)) return;
		return node.gatewayCreditsPromotion?.text;
	}) };
}
//#endregion
//#region src/features/credentials/gatewayCreditsPromotion/GatewayCreditsPromotion.vue
var GatewayCreditsPromotion_default = /* @__PURE__ */ defineComponent({
	__name: "GatewayCreditsPromotion",
	props: { text: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "secondary",
				iconless: "",
				"data-test-id": "gateway-credits-promotion"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.text), 1)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/composables/useInstalledCommunityPackage.ts
function useInstalledCommunityPackage(nodeTypeName) {
	const communityNodesStore = useCommunityNodesStore();
	const usersStore = useUsersStore();
	const installedPackage = ref(void 0);
	const packageName = computed(() => toValue(nodeTypeName)?.split(".")[0] ?? "");
	const isCommunityNode = computed(() => {
		const nodeType = toValue(nodeTypeName);
		if (nodeType) return isCommunityPackageName(nodeType);
		return false;
	});
	const initInstalledPackage = async () => {
		if (!packageName.value || !isCommunityNode.value) return void 0;
		installedPackage.value = await fetchInstalledPackageInfo(packageName.value);
		return installedPackage.value;
	};
	watch(() => communityNodesStore.installedPackages[packageName.value], async (changedPackage) => {
		if (!packageName.value || !changedPackage) return;
		await initInstalledPackage();
	}, { deep: true });
	onMounted(async () => {
		if (!packageName.value || !isCommunityNode.value) return;
		await initInstalledPackage();
	});
	return {
		installedPackage,
		isUpdateCheckAvailable: computed(() => {
			return isCommunityNode.value && usersStore.isAdminOrOwner && !installedPackage.value?.unverifiedUpdate;
		}),
		isCommunityNode,
		initInstalledPackage
	};
}
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeFooter",
	props: {
		packageName: {},
		showManage: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const bugsUrl = ref(`https://registry.npmjs.org/${props.packageName}`);
		const { installedPackage } = useInstalledCommunityPackage(props.packageName);
		async function openSettingsPage() {
			await router.push({ name: VIEWS.COMMUNITY_NODES });
		}
		async function openIssuesPage() {
			if (bugsUrl.value) window.open(bugsUrl.value, "_blank");
		}
		async function getBugsUrl(packageName) {
			const url = `https://registry.npmjs.org/${packageName}`;
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error("Could not get metadata for package");
				const data = await response.json();
				if (data.bugs?.url) bugsUrl.value = data.bugs.url;
			} catch (error) {
				captureException(error);
			}
		}
		onMounted(async () => {
			if (props.packageName) await getBugsUrl(props.packageName);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.separator) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				unref(installedPackage) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					style: { "margin-right": "auto" }
				}, {
					default: withCtx(() => [createTextVNode(" Package version " + toDisplayString(unref(installedPackage).installedVersion) + " (" + toDisplayString(unref(installedPackage).updateAvailable && !unref(installedPackage).unverifiedUpdate ? unref(i18n).baseText("communityNodeFooter.legacy") : unref(i18n).baseText("nodeSettings.latest")) + ") ", 1)]),
					_: 1
				})) : createCommentVNode("", true),
				props.showManage ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openSettingsPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.manage")), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					style: { "color": "var(--color--foreground)" },
					bold: ""
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("|", -1)])]),
					_: 1
				})], 64)) : createCommentVNode("", true),
				createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openIssuesPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.reportIssue")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2)]);
		};
	}
});
var CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_2erah_1",
	separator: "_separator_2erah_9"
};
var CommunityNodeFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeUpdateInfo.vue
var CommunityNodeUpdateInfo_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeUpdateInfo",
	props: {
		packageName: {},
		source: {}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal } = useUIStore();
		const onUpdate = () => {
			if (!props.packageName) return;
			openCommunityPackageUpdateConfirmModal(props.packageName, props.source);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "secondary",
				iconless: true,
				style: { "margin-bottom": "var(--spacing--sm)" }
			}, createSlots({
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeUpdateInfo.available")) + " ", 1)]),
				_: 2
			}, [props.packageName ? {
				name: "trailingContent",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onUpdate
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.update")), 1)]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
//#endregion
export { useGatewayCreditsPromotion as a, GatewayCreditsPromotion_default as i, CommunityNodeFooter_default as n, QuickConnectBanner_default as o, useInstalledCommunityPackage as r, CommunityNodeUpdateInfo_default as t };

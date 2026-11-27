import { Bd as createElementBlock, Cf as watch, Id as computed, Jf as unref, Kd as defineComponent, Kf as toValue, Ld as createBaseVNode, Md as Fragment, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Vd as createSlots, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, mr as captureException, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { IS as useSettingsStore, NM as _plugin_vue_export_helper_default, Oj as N8nLink_default, PS as useUsersStore, RM as i18n, Xj as N8nCallout_default, ZO as isCommunityPackageName, af as useNodeTypesStore, bM as N8nText_default, gg as useUIStore, kM as N8nButton_default, kS as VIEWS } from "./app-BXv1VOvT.js";
import { i as isCommunityPackageUpdateAvailable, o as useCommunityNodesStore } from "./communityNodes.utils-CNYllCay.js";
//#region src/features/settings/communityNodes/composables/useInstalledCommunityPackage.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useInstalledCommunityPackage(nodeTypeName) {
	const communityNodesStore = useCommunityNodesStore();
	const nodeTypesStore = useNodeTypesStore();
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const installedPackage = ref();
	const packageName = computed(() => toValue(nodeTypeName)?.split(".")[0] ?? "");
	const isCommunityNode = computed(() => {
		const nodeType = toValue(nodeTypeName);
		if (nodeType) return isCommunityPackageName(nodeType);
		return false;
	});
	const initInstalledPackage = async () => {
		if (!packageName.value || !isCommunityNode.value) return void 0;
		installedPackage.value = await communityNodesStore.getInstalledPackage(packageName.value);
		return installedPackage.value;
	};
	watch(() => communityNodesStore.installedPackages[packageName.value], async (changedPackage) => {
		if (!packageName.value || !changedPackage) {
			installedPackage.value = void 0;
			return;
		}
		await initInstalledPackage();
	}, { deep: true });
	onMounted(async () => {
		if (!packageName.value || !isCommunityNode.value) return;
		await initInstalledPackage();
	});
	return {
		installedPackage,
		canUpdatePackage: computed(() => {
			return isCommunityNode.value && usersStore.isAdminOrOwner;
		}),
		hasUpdateAvailable: computed(() => {
			const packageInfo = installedPackage.value;
			if (!packageInfo) return false;
			const communityNodeType = nodeTypesStore.communityNodeType(toValue(nodeTypeName) ?? "");
			return isCommunityPackageUpdateAvailable({
				installedVersion: packageInfo.installedVersion,
				updateAvailable: packageInfo.updateAvailable,
				latestVerifiedVersion: communityNodeType?.npmVersion,
				isCommunityNodesFeatureEnabled: settingsStore.isCommunityNodesFeatureEnabled,
				isUnverifiedPackagesEnabled: settingsStore.isUnverifiedPackagesEnabled,
				isManagedByEnv: settingsStore.settings.communityNodesManagedByEnv ?? false
			});
		}),
		isCommunityNode,
		initInstalledPackage
	};
}
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var CommunityNodeFooter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CommunityNodeFooter",
	props: {
		packageName: {},
		nodeTypeName: {},
		showManage: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const bugsUrl = ref(`https://registry.npmjs.org/${props.packageName}`);
		const { installedPackage, hasUpdateAvailable } = useInstalledCommunityPackage(() => props.nodeTypeName);
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
					default: withCtx(() => [createTextVNode(" Package version " + toDisplayString(unref(installedPackage).installedVersion) + " (" + toDisplayString(unref(hasUpdateAvailable) ? unref(i18n).baseText("communityNodeFooter.legacy") : unref(i18n).baseText("nodeSettings.latest")) + ") ", 1)]),
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
}), [["__cssModules", { "$style": {
	container: "_container_2erah_1",
	separator: "_separator_2erah_9"
} }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeUpdateInfo.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
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
					variant: "outline",
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
export { CommunityNodeFooter_default as n, useInstalledCommunityPackage as r, CommunityNodeUpdateInfo_default as t };

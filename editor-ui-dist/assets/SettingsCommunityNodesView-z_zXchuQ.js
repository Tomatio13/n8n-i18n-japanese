import { $d as onBeforeMount, Ad as Fragment, Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Nd as computed, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, ef as onBeforeUnmount, fp as toDisplayString, nf as onMounted, os as useRouter, sf as renderList, sp as normalizeClass, vf as watch } from "./vendor-C1jTjpo6.js";
import { $C as N8nActionToggle_default, $l as useCommunityNodesStore, $p as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, Cw as _plugin_vue_export_helper_default, DC as N8nEmptyState_default, Fp as useUIStore, J_ as useToast, OC as N8nHeading_default, Ow as useI18n, Pd as useNodeTypesStore, Q_ as useTelemetry, Qp as COMMUNITY_NODES_INSTALLATION_DOCS_URL, Sc as usePushConnectionStore, Vm as NPM_PACKAGE_DOCS_BASE_URL, Yu as useExternalHooks, aC as N8nNotice_default, aw as N8nLoading_default, bw as N8nIcon_default, dw as N8nText_default, em as COMMUNITY_PACKAGE_MANAGE_ACTIONS, eu as findVettedCommunityNodeAttributes, pw as N8nTooltip_default, tu as isCommunityPackageUpdateAvailable, tv as useSettingsStore, vd as useDocumentTitle, yw as N8nButton_default } from "./app-C5zIGyiz.js";
import { t as usePushConnection } from "./usePushConnection-DCdQgwTo.js";
import "./usePushConnection-DA5uMIQT.js";
//#region src/features/settings/communityNodes/components/CommunityPackageCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var CommunityPackageCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityPackageCard",
	props: {
		communityPackage: { default: null },
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal, openCommunityPackageUninstallConfirmModal } = useUIStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const settingsStore = useSettingsStore();
		const nodeTypesStore = useNodeTypesStore();
		const latestVerifiedVersion = ref();
		const isManagedByEnv = computed(() => settingsStore.settings.communityNodesManagedByEnv ?? false);
		const hasUpdateAvailable = computed(() => {
			if (!props.communityPackage) return false;
			return isCommunityPackageUpdateAvailable({
				installedVersion: props.communityPackage.installedVersion,
				updateAvailable: props.communityPackage.updateAvailable,
				latestVerifiedVersion: latestVerifiedVersion.value,
				isCommunityNodesFeatureEnabled: settingsStore.isCommunityNodesFeatureEnabled,
				isUnverifiedPackagesEnabled: settingsStore.isUnverifiedPackagesEnabled,
				isManagedByEnv: isManagedByEnv.value
			});
		});
		const packageActions = computed(() => {
			const actions = [{
				label: i18n.baseText("settings.communityNodes.viewDocsAction.label"),
				value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS,
				type: "external-link"
			}];
			if (!isManagedByEnv.value) actions.push({
				label: i18n.baseText("settings.communityNodes.uninstallAction.label"),
				value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL
			});
			return actions;
		});
		async function onAction(value) {
			if (!props.communityPackage) return;
			switch (value) {
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS:
					telemetry.track("user clicked to browse the cnr package documentation", {
						package_name: props.communityPackage.packageName,
						package_version: props.communityPackage.installedVersion
					});
					window.open(`${NPM_PACKAGE_DOCS_BASE_URL}${props.communityPackage.packageName}`, "_blank");
					break;
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL:
					openCommunityPackageUninstallConfirmModal(props.communityPackage.packageName);
					break;
				default: break;
			}
		}
		function onUpdateClick() {
			if (!props.communityPackage) return;
			openCommunityPackageUpdateConfirmModal(props.communityPackage.packageName, "instance settings");
		}
		watch(() => props.communityPackage?.installedNodes.map((node) => node.type) ?? [], async (nodeTypes) => {
			latestVerifiedVersion.value = (await findVettedCommunityNodeAttributes(nodeTypes, nodeTypesStore.getCommunityNodeAttributes))?.npmVersion;
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.cardContainer),
				"data-test-id": "community-package-card"
			}, [__props.loading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.cardSkeleton)
			}, [createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"])], 2)) : __props.communityPackage ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.packageCard)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardInfoContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "large"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.communityPackage.packageName), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardSubtitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes.packageNodes.label", { adjustToNumber: __props.communityPackage.installedNodes.length })) + ":\xA0 ", 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.communityPackage.installedNodes, (node, index) => {
					return openBlock(), createElementBlock("span", { key: node.name }, [createTextVNode(toDisplayString(node.name), 1), index != __props.communityPackage.installedNodes.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1, ",")) : createCommentVNode("", true)]);
				}), 128))]),
				_: 1
			})], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardControlsContainer) }, [
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "large",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(" v" + toDisplayString(__props.communityPackage.installedVersion), 1)]),
					_: 1
				}),
				__props.communityPackage.failedLoading === true ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.failedToLoad.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						color: "danger",
						size: "large"
					})]),
					_: 1
				})) : hasUpdateAvailable.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.updateAvailable.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: "Update",
						onClick: onUpdateClick
					})]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.upToDate.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						color: "text-light",
						size: "large"
					})]),
					_: 1
				})),
				packageActions.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.cardActions)
				}, [createVNode(unref(N8nActionToggle_default), {
					actions: packageActions.value,
					onAction
				}, null, 8, ["actions"])], 2)) : createCommentVNode("", true)
			], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer: "_cardContainer_1ccl0_1",
	packageCard: "_packageCard_1ccl0_9",
	cardSkeleton: "_cardSkeleton_1ccl0_10",
	loader: "_loader_1ccl0_24",
	cardInfoContainer: "_cardInfoContainer_1ccl0_35",
	cardTitle: "_cardTitle_1ccl0_40",
	cardSubtitle: "_cardSubtitle_1ccl0_47",
	cardControlsContainer: "_cardControlsContainer_1ccl0_52",
	cardActions: "_cardActions_1ccl0_58"
};
var CommunityPackageCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityPackageCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue?vue&type=script&setup=true&lang.ts
var PACKAGE_COUNT_THRESHOLD = 31;
var SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsCommunityNodesView",
	setup(__props) {
		const loading = ref(false);
		const pushConnection = usePushConnection({ router: useRouter() });
		const pushStore = usePushConnectionStore();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const communityNodesStore = useCommunityNodesStore();
		const uiStore = useUIStore();
		const settingsStore = useSettingsStore();
		const isManagedByEnv = computed(() => {
			return settingsStore.settings.communityNodesManagedByEnv ?? false;
		});
		const canInstall = computed(() => {
			return settingsStore.isUnverifiedPackagesEnabled && !isManagedByEnv.value;
		});
		const getEmptyStateTitle = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.title");
			return i18n.baseText("settings.communityNodes.empty.title");
		});
		const getEmptyStateDescription = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.description");
			const packageCount = communityNodesStore.availablePackageCount;
			return packageCount < PACKAGE_COUNT_THRESHOLD ? i18n.baseText("settings.communityNodes.empty.description.no-packages", { interpolate: { docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL } }) : i18n.baseText("settings.communityNodes.empty.description", { interpolate: {
				docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
				count: (Math.floor(packageCount / 10) * 10).toString()
			} });
		});
		const getEmptyStateButtonText = computed(() => {
			if (!canInstall.value) return "";
			return i18n.baseText("settings.communityNodes.empty.installPackageLabel");
		});
		const actionBoxConfig = computed(() => {
			return {
				calloutText: "",
				calloutTheme: void 0,
				hideButton: false
			};
		});
		const onClickEmptyStateButton = () => {
			openInstallModal();
		};
		const openInstallModal = () => {
			const telemetryPayload = { is_empty_state: communityNodesStore.getInstalledPackages.length === 0 };
			telemetry.track("user clicked cnr install button", telemetryPayload);
			externalHooks.run("settingsCommunityNodesView.openInstallModal", telemetryPayload);
			uiStore.openModal(COMMUNITY_PACKAGE_INSTALL_MODAL_KEY);
		};
		onBeforeMount(() => {
			pushConnection.initialize();
			pushStore.pushConnect();
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.communityNodes"));
			try {
				loading.value = true;
				await communityNodesStore.fetchInstalledPackages();
				const installedPackages = communityNodesStore.getInstalledPackages;
				const packagesToUpdate = installedPackages.filter((p) => p.updateAvailable);
				telemetry.track("user viewed cnr settings page", {
					num_of_packages_installed: installedPackages.length,
					installed_packages: installedPackages.map((p) => {
						return {
							package_name: p.packageName,
							package_version: p.installedVersion,
							package_nodes: p.installedNodes.map((node) => `${node.name}-v${node.latestVersion}`),
							is_update_available: p.updateAvailable !== void 0
						};
					}),
					packages_to_update: packagesToUpdate.map((p) => {
						return {
							package_name: p.packageName,
							package_version_current: p.installedVersion,
							package_version_available: p.updateAvailable
						};
					}),
					number_of_updates_available: packagesToUpdate.length
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.communityNodes.fetchError.title"), { message: i18n.baseText("settings.communityNodes.fetchError.message") });
			} finally {
				loading.value = false;
			}
			try {
				await communityNodesStore.fetchAvailableCommunityPackageCount();
			} finally {
				loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			pushStore.pushDisconnect();
			pushConnection.terminate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingContainer) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes")), 1)]),
					_: 1
				}), canInstall.value && unref(communityNodesStore).getInstalledPackages.length > 0 && !loading.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: unref(i18n).baseText("settings.communityNodes.installModal.installButton.label"),
					size: "large",
					onClick: openInstallModal
				}, null, 8, ["label"])) : createCommentVNode("", true)], 2),
				isManagedByEnv.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mb-l",
					content: unref(i18n).baseText("settings.communityNodes.managedByEnv"),
					"data-test-id": "community-nodes-managed-by-env"
				}, null, 8, ["content"])) : createCommentVNode("", true),
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.cardsContainer)
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(2, (n) => {
					return createVNode(CommunityPackageCard_default, {
						key: "index-" + n,
						loading: true
					});
				}), 64))], 2)) : unref(communityNodesStore).getInstalledPackages.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.actionBoxContainer)
				}, [createVNode(unref(N8nEmptyState_default), {
					heading: getEmptyStateTitle.value,
					description: getEmptyStateDescription.value,
					"button-text": getEmptyStateButtonText.value,
					"button-disabled": !unref(settingsStore).isUnverifiedPackagesEnabled,
					"callout-text": actionBoxConfig.value.calloutText,
					"callout-theme": actionBoxConfig.value.calloutTheme,
					"onClick:button": onClickEmptyStateButton
				}, null, 8, [
					"heading",
					"description",
					"button-text",
					"button-disabled",
					"callout-text",
					"callout-theme"
				])], 2)) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.cardsContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(communityNodesStore).getInstalledPackages, (communityPackage) => {
					return openBlock(), createBlock(CommunityPackageCard_default, {
						key: communityPackage.packageName,
						"community-package": communityPackage
					}, null, 8, ["community-package"]);
				}), 128))], 2))
			], 2);
		};
	}
});
var SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1j2yb_1",
	headingContainer: "_headingContainer_1j2yb_9",
	loadingContainer: "_loadingContainer_1j2yb_14",
	actionBoxContainer: "_actionBoxContainer_1j2yb_19",
	cardsContainer: "_cardsContainer_1j2yb_23"
};
var SettingsCommunityNodesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsCommunityNodesView_default as default };

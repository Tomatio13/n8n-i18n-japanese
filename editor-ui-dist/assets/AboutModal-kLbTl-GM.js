import { Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { $A as SettingsRow_default, Gr as useClipboard, LS as useRootStore, MM as N8nIcon_default, Ns as useDebugInfo, OS as useToast, Ps as useInstanceRegistryStore, WS as getThirdPartyLicenses, YA as SettingsRowGroup_default, bM as N8nText_default, gg as useUIStore, hb as ABOUT_MODAL_KEY, iA as DialogBody_default, kM as N8nButton_default, oA as Dialog_default, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/app/components/AboutModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SOURCE_CODE_HOST = "github.com/n8n-io/n8n";
//#endregion
//#region src/app/components/AboutModal.vue
var AboutModal_default = /* @__PURE__ */ defineComponent({
	__name: "AboutModal",
	setup(__props) {
		const SOURCE_CODE_URL = `https://${SOURCE_CODE_HOST}`;
		const LICENSE_URL = `${SOURCE_CODE_URL}/blob/master/LICENSE.md`;
		const toast = useToast();
		const i18n = useI18n();
		const debugInfo = useDebugInfo();
		const clipboard = useClipboard();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const instanceRegistryStore = useInstanceRegistryStore();
		onMounted(async () => {
			await instanceRegistryStore.fetchClusterInfo();
		});
		const onOpenChange = (open) => {
			if (!open) uiStore.closeModal(ABOUT_MODAL_KEY);
		};
		const copyInstanceId = async () => {
			await clipboard.copy(rootStore.instanceId);
			toast.showMessage({
				title: i18n.baseText("about.instanceID.copied"),
				type: "success"
			});
		};
		const downloadThirdPartyLicenses = async () => {
			try {
				const thirdPartyLicenses = await getThirdPartyLicenses(rootStore.restApiContext);
				const blob = new File([thirdPartyLicenses], "THIRD_PARTY_LICENSES.md", { type: "text/markdown" });
				window.open(URL.createObjectURL(blob));
			} catch (error) {
				toast.showToast({
					title: i18n.baseText("about.thirdPartyLicenses.downloadError"),
					message: error.message,
					type: "error"
				});
			}
		};
		const copyDebugInfoToClipboard = async () => {
			toast.showToast({
				title: i18n.baseText("about.debug.toast.title"),
				message: i18n.baseText("about.debug.toast.message"),
				type: "info",
				duration: 5e3
			});
			await clipboard.copy(debugInfo.generateDebugInfo());
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: true,
				size: "large",
				header: unref(i18n).baseText("about.aboutN8n"),
				"aria-description": unref(i18n).baseText("about.ariaDescription"),
				"data-test-id": "about-modal",
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogBody_default), null, {
					default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
						default: withCtx(() => [
							createVNode(unref(SettingsRow_default), { title: unref(i18n).baseText("about.n8nVersion") }, {
								action: withCtx(() => [createVNode(unref(N8nText_default), {
									size: "medium",
									color: "text-dark",
									"data-test-id": "about-modal-version"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(rootStore).versionCli), 1)]),
									_: 1
								})]),
								_: 1
							}, 8, ["title"]),
							createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("about.instanceID"),
								description: unref(rootStore).instanceId,
								"max-description-lines": 1
							}, {
								action: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									size: "medium",
									icon: "copy",
									label: unref(i18n).baseText("generic.copy"),
									"data-test-id": "about-modal-copy-instance-id",
									onClick: copyInstanceId
								}, null, 8, ["label"])]),
								_: 1
							}, 8, ["title", "description"]),
							createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("about.sourceCode"),
								description: SOURCE_CODE_HOST
							}, {
								action: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									size: "medium",
									href: SOURCE_CODE_URL,
									target: "_blank"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.open")) + " ", 1), createVNode(unref(N8nIcon_default), {
										icon: "external-link",
										size: "small"
									})]),
									_: 1
								})]),
								_: 1
							}, 8, ["title"]),
							createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("about.license"),
								description: unref(i18n).baseText("about.n8nLicense")
							}, {
								action: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									size: "medium",
									href: LICENSE_URL,
									target: "_blank"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.open")) + " ", 1), createVNode(unref(N8nIcon_default), {
										icon: "external-link",
										size: "small"
									})]),
									_: 1
								})]),
								_: 1
							}, 8, ["title", "description"]),
							createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("about.thirdPartyLicenses"),
								description: unref(i18n).baseText("about.thirdPartyLicenses.description")
							}, {
								action: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									size: "medium",
									"data-test-id": "about-modal-third-party-licenses",
									onClick: downloadThirdPartyLicenses
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.open")) + " ", 1), createVNode(unref(N8nIcon_default), {
										icon: "external-link",
										size: "small"
									})]),
									_: 1
								})]),
								_: 1
							}, 8, ["title", "description"]),
							createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("about.debug.title"),
								description: unref(i18n).baseText("about.debug.description")
							}, {
								action: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									size: "medium",
									icon: "copy",
									label: unref(i18n).baseText("generic.copy"),
									"data-test-id": "about-modal-copy-debug-info",
									onClick: copyDebugInfoToClipboard
								}, null, 8, ["label"])]),
								_: 1
							}, 8, ["title", "description"])
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["header", "aria-description"]);
		};
	}
});
//#endregion
export { AboutModal_default as default };

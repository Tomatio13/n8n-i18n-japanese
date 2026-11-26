const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/useImportCurlCommand-BjmU7uwo.js","assets/rolldown-runtime-EITvVbkG.js","assets/vendor-zYfdu4Ed.js","assets/vendor-CB64RKTG.css","assets/app-B_io1t1X.js","assets/app-dNJMURUy.css"])))=>i.map(i=>d[i]);
import { Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Wd as createVNode, Zd as init_runtime_core_esm_bundler, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zf as ref } from "./vendor-zYfdu4Ed.js";
import { DM as Input_default, FM as __vitePreload, MS as useTelemetry, Mp as injectNDVStore, NM as _plugin_vue_export_helper_default, OS as useToast, Ob as IMPORT_CURL_MODAL_KEY, aj as N8nNotice_default, gg as useUIStore, iA as DialogBody_default, kM as N8nButton_default, kj as N8nInputLabel_default, oA as Dialog_default, rA as DialogFooter_default, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/features/ndv/parameters/components/ImportCurlModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ImportCurlModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ImportCurlModal",
	setup(__props) {
		const telemetry = useTelemetry();
		const toast = useToast();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const ndvStore = injectNDVStore();
		const curlCommand = ref("");
		const modalOpen = computed(() => uiStore.modalsById[IMPORT_CURL_MODAL_KEY]?.open === true);
		const inputRef = ref(null);
		onMounted(() => {
			const curlCommands = uiStore.modalsById[IMPORT_CURL_MODAL_KEY].data?.curlCommands;
			const nodeId = ndvStore.value.activeNode?.id ?? "";
			const command = curlCommands?.[nodeId];
			curlCommand.value = command ?? "";
		});
		function onInput(value) {
			curlCommand.value = value;
		}
		function onFocus() {
			inputRef.value?.select();
		}
		function closeDialog() {
			uiStore.closeModal(IMPORT_CURL_MODAL_KEY);
		}
		function onDialogOpenUpdate(open) {
			if (!open) closeDialog();
		}
		function onImportSuccess() {
			sendTelemetry();
			closeDialog();
		}
		function onImportFailure(data) {
			sendTelemetry({
				success: false,
				...data
			});
		}
		function onAfterImport() {
			const nodeId = ndvStore.value.activeNode?.id;
			const curlCommands = uiStore.modalsById[IMPORT_CURL_MODAL_KEY].data?.curlCommands;
			uiStore.setModalData({
				name: IMPORT_CURL_MODAL_KEY,
				data: { curlCommands: {
					...curlCommands,
					[nodeId]: curlCommand.value
				} }
			});
		}
		function sendTelemetry(data = {
			success: true,
			invalidProtocol: false,
			protocol: ""
		}) {
			telemetry.track("User imported curl command", {
				success: data.success,
				invalidProtocol: data.invalidProtocol,
				protocol: data.protocol
			});
		}
		async function onImport() {
			try {
				const { useImportCurlCommand } = await __vitePreload(async () => {
					const { useImportCurlCommand } = await import("./useImportCurlCommand-BjmU7uwo.js");
					return { useImportCurlCommand };
				}, __vite__mapDeps([0,1,2,3,4,5]));
				const { importCurlCommand } = useImportCurlCommand({
					onImportSuccess,
					onImportFailure,
					onAfterImport
				});
				importCurlCommand(curlCommand);
			} catch {
				toast.showToast({
					title: i18n.baseText("importCurlParameter.showError.failedToLoad.title"),
					message: i18n.baseText("importCurlParameter.showError.failedToLoad.message"),
					type: "error",
					duration: 0
				});
				onImportFailure({ invalidProtocol: false });
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: modalOpen.value,
				size: "large",
				header: unref(i18n).baseText("importCurlModal.title"),
				"onUpdate:open": onDialogOpenUpdate
			}, {
				default: withCtx(() => [createVNode(unref(DialogBody_default), null, {
					default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("importCurlModal.input.label"),
						color: "text-dark"
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							ref_key: "inputRef",
							ref: inputRef,
							"model-value": curlCommand.value,
							type: "textarea",
							rows: 5,
							"data-test-id": "import-curl-modal-input",
							placeholder: unref(i18n).baseText("importCurlModal.input.placeholder"),
							"onUpdate:modelValue": onInput,
							onFocus
						}, null, 8, ["model-value", "placeholder"])]),
						_: 1
					}, 8, ["label"])]),
					_: 1
				}), createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.footer) }, {
					default: withCtx(() => [createVNode(unref(N8nNotice_default), {
						class: normalizeClass(_ctx.$style.notice),
						content: unref(i18n).baseText("ImportCurlModal.notice.content")
					}, null, 8, ["class", "content"]), createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("importCurlModal.button.label"),
						"data-test-id": "import-curl-modal-button",
						onClick: onImport
					}, null, 8, ["label"])]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
}), [["__cssModules", { "$style": {
	footer: "_footer_1afvd_1",
	notice: "_notice_1afvd_5"
} }]]);
//#endregion
export { ImportCurlModal_default as default };

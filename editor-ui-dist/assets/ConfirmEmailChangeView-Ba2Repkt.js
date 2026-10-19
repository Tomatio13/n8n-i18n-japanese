import { Bd as createTextVNode, Bf as unref, Id as createCommentVNode, Ld as createElementBlock, Mf as ref, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, fp as toDisplayString, nf as onMounted, os as useRouter, sp as normalizeClass } from "./vendor-LwB6jUFW.js";
import { DC as N8nHeading_default, Dw as useI18n, J_ as useToast, Sw as _plugin_vue_export_helper_default, Y_ as VIEWS, dC as N8nLogo_default, ev as useUsersStore, tv as useSettingsStore, uw as N8nText_default, vw as N8nButton_default } from "./app-6hFiMIk3.js";
//#region src/features/core/auth/views/ConfirmEmailChangeView.vue?vue&type=script&setup=true&lang.ts
var ConfirmEmailChangeView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmEmailChangeView",
	setup(__props) {
		const usersStore = useUsersStore();
		const { settings: { releaseChannel } } = useSettingsStore();
		const locale = useI18n();
		const toast = useToast();
		const router = useRouter();
		const loading = ref(false);
		const ready = ref(false);
		const newEmail = ref("");
		const getToken = () => {
			const { token } = router.currentRoute.value.query;
			return typeof token === "string" && token.length > 0 ? token : null;
		};
		const onConfirm = async () => {
			const token = getToken();
			if (!token) return;
			try {
				loading.value = true;
				await usersStore.confirmEmailChange({ token });
				toast.showMessage({
					type: "success",
					title: locale.baseText("auth.confirmEmailChange.success.title"),
					message: locale.baseText("auth.confirmEmailChange.success.message")
				});
				await usersStore.logout();
				await router.push({ name: VIEWS.SIGNIN });
			} catch (error) {
				toast.showError(error, locale.baseText("auth.confirmEmailChange.error"));
			}
			loading.value = false;
		};
		onMounted(async () => {
			const token = getToken();
			if (!token) {
				toast.showError(new Error(locale.baseText("auth.confirmEmailChange.missingTokenError")), locale.baseText("auth.confirmEmailChange.error"));
				router.replace({ name: VIEWS.SIGNIN });
				return;
			}
			try {
				newEmail.value = (await usersStore.resolveEmailChangeToken({ token })).email;
				ready.value = true;
			} catch (error) {
				toast.showError(error, locale.baseText("auth.confirmEmailChange.tokenValidationError"));
				router.replace({ name: VIEWS.SIGNIN });
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLogo_default), {
				size: "large",
				"release-channel": unref(releaseChannel)
			}, null, 8, ["release-channel"]), ready.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "confirm-email-change"
			}, [
				createVNode(unref(N8nHeading_default), { size: "xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("auth.confirmEmailChange.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("auth.confirmEmailChange.message", { interpolate: { newEmail: newEmail.value } })), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					label: unref(locale).baseText("auth.confirmEmailChange.button"),
					loading: loading.value,
					size: "large",
					"data-test-id": "confirm-email-change-button",
					onClick: onConfirm
				}, null, 8, ["label", "loading"])
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var ConfirmEmailChangeView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_11atm_1",
	card: "_card_11atm_8"
};
var ConfirmEmailChangeView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmEmailChangeView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmEmailChangeView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ConfirmEmailChangeView_default as default };

import { Ad as createElementBlock, Id as defineComponent, Nd as createTextVNode, Nf as unref, Pd as createVNode, Qd as openBlock, Tf as ref, Yd as onMounted, ap as toDisplayString, ep as normalizeClass, kd as createCommentVNode, pf as withCtx, rs as useRouter } from "./vendor-DtL-V0ia.js";
import { CE as N8nButton_default, Cy as VIEWS, DE as _plugin_vue_export_helper_default, ME as useI18n, Oy as useUsersStore, Sy as useToast, hE as N8nText_default, jT as N8nHeading_default, ky as useSettingsStore, mT as N8nLogo_default } from "./app-BdR1u3Ua.js";
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

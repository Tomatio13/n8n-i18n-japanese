import { Bd as createElementBlock, Jf as unref, Kd as defineComponent, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Xo as useRouter, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, sf as onMounted, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { Fj as N8nHeading_default, IS as useSettingsStore, NM as _plugin_vue_export_helper_default, OS as useToast, PS as useUsersStore, bM as N8nText_default, fj as N8nLogo_default, kM as N8nButton_default, kS as VIEWS, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/features/core/auth/views/ConfirmEmailChangeView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ConfirmEmailChangeView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
				const resolved = await usersStore.resolveEmailChangeToken({ token });
				newEmail.value = resolved.email;
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
}), [["__cssModules", { "$style": {
	container: "_container_11atm_1",
	card: "_card_11atm_8"
} }]]);
//#endregion
export { ConfirmEmailChangeView_default as default };

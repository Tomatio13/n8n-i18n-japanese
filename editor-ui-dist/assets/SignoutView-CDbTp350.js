import { Ad as createElementBlock, Id as defineComponent, Qd as openBlock, Yd as onMounted, is as useRouter } from "./vendor-z-loPfiR.js";
import { $ as useSSOStore, Ey as VIEWS, FE as useI18n, Ty as useToast, jy as useUsersStore } from "./app-CJdBXMVa.js";
//#endregion
//#region src/features/core/auth/views/SignoutView.vue
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const ssoStore = useSSOStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				const viaOidc = ssoStore.isDefaultAuthenticationOidc;
				const { redirectUrl } = await usersStore.logout({ viaOidc });
				window.location.href = redirectUrl ?? router.resolve({ name: VIEWS.SIGNIN }).href;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signout.error"));
			}
		};
		onMounted(() => {
			logout();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { SignoutView_default as default };

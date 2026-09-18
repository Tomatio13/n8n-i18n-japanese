import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-hT_kMPyY.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as useUsersStore } from "./users.store-BLyvhaBZ.js";
import { t as VIEWS } from "./views-SD4Teu77.js";
import { n as useToast } from "./useToast-CBUt6GTa.js";
import "./constants-BTQ_2Abt.js";
import { n as useSSOStore } from "./sso.store-YG_k_t5S.js";
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

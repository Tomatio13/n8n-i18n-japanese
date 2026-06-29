import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { c as useI18n } from "./src-n6xdFelH.js";
import { gt as useRouter } from "./src-C-nY7oMT.js";
import { t as useToast } from "./useToast-Cq6k1YOn.js";
import { ui as VIEWS } from "./constants-DDoZf_wd.js";
import { t as useUsersStore } from "./users.store-Bl56nEMX.js";
//#endregion
//#region src/features/core/auth/views/SignoutView.vue
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				await usersStore.logout();
				window.location.href = router.resolve({ name: VIEWS.SIGNIN }).href;
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

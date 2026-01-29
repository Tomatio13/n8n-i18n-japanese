import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { vt as useI18n } from "./_MapCache-1Qi8jh0X.js";
import { y as useRouter } from "./truncate-BINt9V_x.js";
import { br as useToast, t as useUsersStore } from "./users.store-BIGRcGPu.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-BvSprbON.js";
import "./merge-DCyotd_0.js";
import "./_baseOrderBy-qNJ6eMO7.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DFqE9_Q_.js";
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
export { SignoutView_default as default };

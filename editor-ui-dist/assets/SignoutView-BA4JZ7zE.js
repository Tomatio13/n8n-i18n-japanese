import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { vt as useI18n } from "./_MapCache-m5Ncuhis.js";
import { y as useRouter } from "./truncate-DUg0RUz-.js";
import { br as useToast, t as useUsersStore } from "./users.store-DT_y7y2t.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-085fQwMT.js";
import "./merge-B_dSS6iU.js";
import "./_baseOrderBy-BItCifbo.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-0EW4YcbG.js";
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

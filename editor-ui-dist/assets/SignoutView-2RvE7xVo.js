import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-DiguV1k7.js";
import { _t as useRouter } from "./src-BELAPDSn.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ln as useToast, t as useUsersStore } from "./users.store-DPEdOi9X.js";
import { hs as VIEWS } from "./constants-MwmOH9ul.js";
import "./merge-DuN0a3S0.js";
import "./_baseOrderBy-BLvkq7eK.js";
import "./dateformat-BLM1Bzb6.js";
import "./useDebounce-DISrHC6a.js";
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

import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DJgxgo4K.js";
import { wi as useRouter } from "./src-12jI_oWL.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as useUsersStore, yr as useToast } from "./users.store-CZakb1us.js";
import { rs as VIEWS } from "./constants-BRkGKd9e.js";
import "./merge-CRJgDSbC.js";
import "./_baseOrderBy-CtcXV8Wq.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BUjIzaVZ.js";
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

import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-DAfQkYUW.js";
import { Di as useRouter } from "./src-CVRo-0o8.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Er as useToast, t as useUsersStore } from "./users.store-DbrQquUN.js";
import { cs as VIEWS } from "./constants-HkX3ruPP.js";
import "./merge-D06_YRZ7.js";
import "./_baseOrderBy-CRlYhHsD.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Cock4s9P.js";
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

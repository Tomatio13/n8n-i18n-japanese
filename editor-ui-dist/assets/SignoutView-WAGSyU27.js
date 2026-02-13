import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-Ct6p3xKn.js";
import { bi as useRouter } from "./src-DuGormCI.js";
import "./sanitize-html-DjneYy0u.js";
import { gr as useToast, t as useUsersStore } from "./users.store-AbL4SQmk.js";
import { ts as VIEWS } from "./constants-Bd1ZtBWa.js";
import "./merge-D4SF-xu2.js";
import "./_baseOrderBy-1mqBccLb.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-ClefIYI_.js";
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

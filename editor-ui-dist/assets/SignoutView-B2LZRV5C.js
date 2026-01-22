import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DzvtSRAp.js";
import { Vt as useRouter } from "./src-foU9rMrs.js";
import { mr as useToast, t as useUsersStore } from "./users.store-B8MNpFK1.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { Vo as VIEWS } from "./constants-Bpgtcge2.js";
import "./merge-CYj4-Mn8.js";
import "./_baseOrderBy-DTKFAGkB.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dd1QbJRS.js";
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

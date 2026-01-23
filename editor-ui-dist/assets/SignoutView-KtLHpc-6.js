import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BSabmsGd.js";
import { Vt as useRouter } from "./src-9dBEqjNT.js";
import { mr as useToast, t as useUsersStore } from "./users.store-CRuM-6OK.js";
import "./sanitize-html-Bm7Ej2cW.js";
import { Wo as VIEWS } from "./constants-jSlGi3TV.js";
import "./merge-WwnMky1z.js";
import "./_baseOrderBy-DymvjUPt.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CD300VZO.js";
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

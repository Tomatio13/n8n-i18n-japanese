import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-74QeOTmX.js";
import { Rt as useRouter } from "./src-Bos3oYaY.js";
import "./sanitize-html-DjneYy0u.js";
import { hr as useToast, t as useUsersStore } from "./users.store-BiTSVjy6.js";
import { Xo as VIEWS } from "./constants-CvBCoQnq.js";
import "./merge-CMwWq682.js";
import "./_baseOrderBy-CA-ldP4w.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B_GWpbEm.js";
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

import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as useI18n } from "./_MapCache-84FHPy_f.js";
import { Di as useRouter } from "./src-_eK_1rXK.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Er as useToast, t as useUsersStore } from "./users.store-DhQma29k.js";
import { cs as VIEWS } from "./constants-CoM3n6o2.js";
import "./merge-DXu1hBe8.js";
import "./_baseOrderBy-CggIhTiT.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BY19fKVi.js";
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

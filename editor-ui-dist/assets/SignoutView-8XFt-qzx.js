import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-BlLZ6mUD.js";
import { b as useRouter } from "./truncate-D6Yv1bik.js";
import "./empty-BuGRxzl4.js";
import { dr as useUsersStore, n as useToast } from "./builder.store-D6ZH9IR6.js";
import { Vo as VIEWS } from "./constants-f81qCZme.js";
import "./merge-BprNJBm8.js";
import "./_baseOrderBy-Djvlo6N-.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-BuYN7d--.js";
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

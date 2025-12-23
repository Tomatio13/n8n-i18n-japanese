import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-BlLZ6mUD.js";
import { y as useRouter } from "./truncate-DwVApnO8.js";
import "./empty-BuGRxzl4.js";
import { dr as useUsersStore, n as useToast } from "./builder.store-73YTVd9M.js";
import { Vo as VIEWS } from "./constants-CbzZCrin.js";
import "./merge-BprNJBm8.js";
import "./_baseOrderBy-BFDPXEj6.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CsTcKCpb.js";
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

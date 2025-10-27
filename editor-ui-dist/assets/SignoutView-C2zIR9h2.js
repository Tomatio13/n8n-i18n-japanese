import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CaP4mhI9.js";
import { b as useRouter } from "./truncate-Zm7rqMgr.js";
import "./icon-bktrs2EQ.js";
import "./empty-BuGRxzl4.js";
import { ir as useUsersStore } from "./useTelemetry-DMMCGp2b.js";
import { t as useToast } from "./useToast-C1ZpPbXg.js";
import { oa as VIEWS } from "./constants-yBDcqULv.js";
import "./merge-BONzxfgw.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BDOVCaxX.js";
import "./useExternalHooks-zp0_PYje.js";
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

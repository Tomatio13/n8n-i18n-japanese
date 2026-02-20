import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CtoBMdwA.js";
import { y as useRouter } from "./truncate-DNWsAGoL.js";
import "./icon-CWP9Nnio.js";
import "./empty-Dn9EY6Kk.js";
import { nr as useUsersStore } from "./useTelemetry-BYARpW-Z.js";
import { t as useToast } from "./useToast-CgKfmIUZ.js";
import { Io as VIEWS } from "./constants-CvLls3vA.js";
import "./merge-B86hLe6a.js";
import "./_baseOrderBy-8nn1Vi_3.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-C-rqaNOB.js";
import "./useExternalHooks-BUhY3XSH.js";
import "./useStyles-B70NtkBU.js";
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

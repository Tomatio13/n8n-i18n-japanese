import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-B_K3eSCc.js";
import { y as useRouter } from "./truncate-DoMGc5TW.js";
import "./icon-CK3ijqYT.js";
import "./empty-Dn9EY6Kk.js";
import { nr as useUsersStore } from "./useTelemetry-g0679zS3.js";
import { t as useToast } from "./useToast-CsUXQdC8.js";
import { Io as VIEWS } from "./constants-CaCsIb1D.js";
import "./merge-CN7D2NBB.js";
import "./_baseOrderBy-DPXOv1ix.js";
import "./dateformat-CC7PiOsE.js";
import "./useDebounce-DvYwTHuw.js";
import "./useExternalHooks-D4-jcuhh.js";
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

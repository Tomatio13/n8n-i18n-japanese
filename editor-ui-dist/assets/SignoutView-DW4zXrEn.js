import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-BMxyEZko.js";
import { b as useRouter } from "./truncate-BfTdoaZc.js";
import "./icon-Da54nWkZ.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-DrgoSbS3.js";
import { t as useToast } from "./useToast-yCbLVwaJ.js";
import { Lo as VIEWS } from "./constants-BwijwK3E.js";
import "./merge-CWiNuSKW.js";
import "./_baseOrderBy-sGP9Nbn8.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-CwR1JoFJ.js";
import "./useExternalHooks-CvM_L6cv.js";
import "./useStyles-DhM0cpS7.js";
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

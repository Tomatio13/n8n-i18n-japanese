import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-B_K3eSCc.js";
import { b as useRouter } from "./truncate-DR9nQYb9.js";
import "./icon-3J2KqNjC.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-CaRpph28.js";
import { t as useToast } from "./useToast-7p3aPJCC.js";
import { Po as VIEWS } from "./constants-CiLxMmB3.js";
import "./merge-DgUGqCbI.js";
import "./_baseOrderBy-C1lYf1dp.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-CNSqq1fm.js";
import "./useExternalHooks-D3qOtkb5.js";
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

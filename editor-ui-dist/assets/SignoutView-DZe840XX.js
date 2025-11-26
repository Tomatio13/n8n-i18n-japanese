import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-YY5H5Elo.js";
import { b as useRouter } from "./truncate-Ck6UaU_n.js";
import "./icon-DH_JWezv.js";
import "./empty-BuGRxzl4.js";
import { er as useUsersStore } from "./useTelemetry-BeI6sUZT.js";
import { t as useToast } from "./useToast-BoMuAjRw.js";
import { Oo as VIEWS } from "./constants-pWZn2DpD.js";
import "./merge-BmJ4zzsI.js";
import "./useRootStore-Ab0OGVtg.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CJ52CxJT.js";
import "./useExternalHooks-C-vdU9Vl.js";
import "./useStyles-CBQs-v7u.js";
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

import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-BGBKpT5S.js";
import { b as useRouter } from "./truncate-Dc79aML5.js";
import "./icon-C8yfF1LY.js";
import "./empty-BuGRxzl4.js";
import { ir as useUsersStore } from "./useTelemetry-BxbCYDca.js";
import { t as useToast } from "./useToast-CKD06lpn.js";
import { co as VIEWS } from "./constants-B1JYxPAR.js";
import "./merge-Db6rb1_m.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BRhQZVIC.js";
import "./useExternalHooks-ChElZw8W.js";
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

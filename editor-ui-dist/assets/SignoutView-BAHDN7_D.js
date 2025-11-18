import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-Dw6Llo22.js";
import { b as useRouter } from "./truncate-7XypoloM.js";
import "./icon-DmIKo5zZ.js";
import "./empty-RTEMfF4N.js";
import { er as useUsersStore } from "./useTelemetry-DedEakwK.js";
import { t as useToast } from "./useToast-LQk5sJH0.js";
import { mo as VIEWS } from "./constants-C5Tj3dXQ.js";
import "./merge-Dnkh07HW.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DFa0sFlC.js";
import "./useExternalHooks-DSSTcvme.js";
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

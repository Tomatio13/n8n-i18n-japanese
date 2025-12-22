import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { vt as useI18n } from "./_MapCache-C16tFX_5.js";
import { b as useRouter } from "./truncate-CgrKzQs8.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-BLAleF9k.js";
import "./empty-BuGRxzl4.js";
import { Ro as VIEWS } from "./constants-G5Vkztf0.js";
import "./merge-Cct2Tso6.js";
import "./_baseOrderBy-DWwx0cJy.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-CA5UjP42.js";
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

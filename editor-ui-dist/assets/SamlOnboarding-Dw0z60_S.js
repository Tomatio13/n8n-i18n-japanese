import { It as ref, P as defineComponent, Pt as reactive, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-YY5H5Elo.js";
import "./src-BVivsRgW.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-Ck6UaU_n.js";
import "./icon-DH_JWezv.js";
import "./empty-BuGRxzl4.js";
import { er as useUsersStore } from "./useTelemetry-BeI6sUZT.js";
import { t as useToast } from "./useToast-BoMuAjRw.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS } from "./constants-pWZn2DpD.js";
import "./merge-BmJ4zzsI.js";
import "./useRootStore-Ab0OGVtg.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CJ52CxJT.js";
import "./useExternalHooks-C-vdU9Vl.js";
import "./useStyles-CBQs-v7u.js";
import "./sso.store-DvYUJuIm.js";
import { t as AuthView_default } from "./AuthView-CWZLOX5U.js";
var SamlOnboarding_default = /* @__PURE__ */ defineComponent({
	__name: "SamlOnboarding",
	setup(__props) {
		const router = useRouter();
		const locale = useI18n();
		const toast = useToast();
		const usersStore = useUsersStore();
		const loading = ref(false);
		const FORM_CONFIG = reactive({
			title: locale.baseText("auth.signup.setupYourAccount"),
			buttonText: locale.baseText("auth.signup.finishAccountSetup"),
			inputs: [{
				name: "firstName",
				initialValue: usersStore.currentUser?.firstName,
				properties: {
					label: locale.baseText("auth.firstName"),
					maxlength: 32,
					required: true,
					autocomplete: "given-name",
					capitalize: true
				}
			}, {
				name: "lastName",
				initialValue: usersStore.currentUser?.lastName,
				properties: {
					label: locale.baseText("auth.lastName"),
					maxlength: 32,
					required: true,
					autocomplete: "family-name",
					capitalize: true
				}
			}]
		});
		const isFormWithFirstAndLastName = (values) => {
			return "firstName" in values && "lastName" in values;
		};
		const onSubmit = async (values) => {
			if (!isFormWithFirstAndLastName(values)) return;
			try {
				loading.value = true;
				await usersStore.updateUserName(values);
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				loading.value = false;
				toast.showError(error, "Error", error.message);
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: FORM_CONFIG,
				"form-loading": loading.value,
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
export { SamlOnboarding_default as default };

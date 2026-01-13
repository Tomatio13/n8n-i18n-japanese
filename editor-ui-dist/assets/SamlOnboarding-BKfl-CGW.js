import { It as ref, P as defineComponent, Pt as reactive, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-B_K3eSCc.js";
import "./src-BvNUCnVa.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRouter } from "./truncate-DoMGc5TW.js";
import "./icon-CK3ijqYT.js";
import "./empty-Dn9EY6Kk.js";
import { nr as useUsersStore } from "./useTelemetry-DQTGrbn4.js";
import { t as useToast } from "./useToast-py1kD7JF.js";
import "./sanitize-html-CuGdF3xj.js";
import "./CalendarDate-DxkU3CHY.js";
import { Io as VIEWS } from "./constants-BhgKUaYo.js";
import "./merge-DhnZj-ot.js";
import "./_baseOrderBy-8b6Irjhc.js";
import "./dateformat-CaoB5ai3.js";
import "./useDebounce-JWs-XZcR.js";
import "./useExternalHooks-DFcmMkkK.js";
import "./useStyles-CEyEF3kW.js";
import "./sso.store-CCUbiwTl.js";
import { t as AuthView_default } from "./AuthView-DPfb8_BN.js";
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

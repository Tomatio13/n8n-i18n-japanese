import { C as computed, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-YY5H5Elo.js";
import "./src-BVivsRgW.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-Ck6UaU_n.js";
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
var SignupView_default = /* @__PURE__ */ defineComponent({
	__name: "SignupView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const FORM_CONFIG = {
			title: i18n.baseText("auth.signup.setupYourAccount"),
			buttonText: i18n.baseText("auth.signup.finishAccountSetup"),
			inputs: [
				{
					name: "firstName",
					properties: {
						label: i18n.baseText("auth.firstName"),
						maxlength: 32,
						required: true,
						autocomplete: "given-name",
						capitalize: true,
						focusInitially: true
					}
				},
				{
					name: "lastName",
					properties: {
						label: i18n.baseText("auth.lastName"),
						maxlength: 32,
						required: true,
						autocomplete: "family-name",
						capitalize: true
					}
				},
				{
					name: "password",
					properties: {
						label: i18n.baseText("auth.password"),
						type: "password",
						validationRules: [{ name: "DEFAULT_PASSWORD_RULES" }],
						required: true,
						infoText: i18n.baseText("auth.defaultPasswordRequirements"),
						autocomplete: "new-password",
						capitalize: true
					}
				},
				{
					name: "agree",
					properties: {
						label: i18n.baseText("auth.agreement.label"),
						type: "checkbox"
					}
				}
			]
		};
		const loading = ref(false);
		const inviter = ref(null);
		const inviterId = ref(null);
		const inviteeId = ref(null);
		const inviteMessage = computed(() => {
			if (!inviter.value) return "";
			return i18n.baseText("settings.signup.signUpInviterInfo", { interpolate: {
				firstName: inviter.value.firstName,
				lastName: inviter.value.lastName
			} });
		});
		onMounted(async () => {
			const inviterIdParam = getQueryParameter("inviterId");
			const inviteeIdParam = getQueryParameter("inviteeId");
			try {
				if (!inviterIdParam || !inviteeIdParam) throw new Error(i18n.baseText("auth.signup.missingTokenError"));
				inviterId.value = inviterIdParam;
				inviteeId.value = inviteeIdParam;
				inviter.value = (await usersStore.validateSignupToken({
					inviteeId: inviteeId.value,
					inviterId: inviterId.value
				})).inviter;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signup.tokenValidationError"));
				router.replace({ name: VIEWS.SIGNIN });
			}
		});
		async function onSubmit(values) {
			if (!inviterId.value || !inviteeId.value) {
				toast.showError(new Error(i18n.baseText("auth.signup.tokenValidationError")), i18n.baseText("auth.signup.setupYourAccountError"));
				return;
			}
			try {
				loading.value = true;
				await usersStore.acceptInvitation({
					...values,
					inviterId: inviterId.value,
					inviteeId: inviteeId.value
				});
				if (values.agree === true) try {
					await usersStore.submitContactEmail(values.email.toString(), values.agree);
				} catch {}
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				toast.showError(error, i18n.baseText("auth.signup.setupYourAccountError"));
			}
			loading.value = false;
		}
		function getQueryParameter(key) {
			return !route.query[key] || typeof route.query[key] !== "string" ? null : route.query[key];
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: FORM_CONFIG,
				"form-loading": loading.value,
				subtitle: inviteMessage.value,
				onSubmit
			}, null, 8, ["form-loading", "subtitle"]);
		};
	}
});
export { SignupView_default as default };

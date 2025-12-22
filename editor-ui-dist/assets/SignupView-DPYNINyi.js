import { C as computed, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { vt as useI18n } from "./_MapCache-C16tFX_5.js";
import "./src-D2eAHqUn.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-CgrKzQs8.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-BLAleF9k.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import { Ro as VIEWS } from "./constants-G5Vkztf0.js";
import "./merge-Cct2Tso6.js";
import "./_baseOrderBy-DWwx0cJy.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-CA5UjP42.js";
import "./sso.store-BU6whTTC.js";
import { t as AuthView_default } from "./AuthView-8eh0n13C.js";
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

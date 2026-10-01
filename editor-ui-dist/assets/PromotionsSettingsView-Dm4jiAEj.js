import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-C397uuXA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as Input_default } from "./Input-DZHU7J3z.js";
import { r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-BEnlQHTO.js";
import { t as Checkbox_default } from "./Checkbox-GPp4h5FI.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { t as useMessage } from "./useMessage-Cg0wKfzg.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-3GKqRVTj.js";
import { t as N8nNotice_default } from "./N8nNotice-DNfJ2TB4.js";
import { t as N8nCopyInput_default } from "./N8nCopyInput-CRmPWw4S.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-B2dtD8bS.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BV1zRhIW.js";
import { t as SettingsLayout_default } from "./SettingsLayout-CP9bXVix.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-BXLEIkk3.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-eIo8piUF.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-Sc_ClrxG.js";
import { t as SettingsSaveBar_default } from "./SettingsSaveBar-AkXsLWRy.js";
import { t as SettingsSection_default } from "./SettingsSection-BfSN3eq-.js";
import { t as N8nSwitch_default } from "./N8nSwitch-Bn6lUf23.js";
import { t as Dialog_default } from "./Dialog-DZMllp5P.js";
import { t as DialogFooter_default } from "./DialogFooter-DF2akcVC.js";
import { t as Loading_default } from "./Loading-D5w_xHP7.js";
import { $n as ResponseError, ir as request, t as useRootStore } from "./useRootStore-CyJ3H_gS.js";
import { Ft as getResourcePermissions } from "./src-CUD3lZBU.js";
import { t as useUsersStore } from "./users.store-DAMxyXw2.js";
import { n as useToast } from "./useToast-B4cJ9YnD.js";
import "./constants-xJAwzpHs.js";
import { n as useDocumentTitle } from "./useDocumentTitle-Mcu_VHpZ.js";
//#region src/features/integrations/promotions.ee/promotionsSettings.api.ts
var promotionsApiRoot = "/promotions";
async function fetchAllPages(fetchPage) {
	const items = [];
	let cursor;
	do {
		const page = await fetchPage(cursor);
		items.push(...page.data);
		cursor = page.nextCursor ?? void 0;
	} while (cursor);
	return items;
}
var fetchPromotionProviders = async (context) => await fetchAllPages(async (cursor) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers`,
	data: { cursor }
}));
/** Fetches the provider with its SSH public key. */
var fetchPromotionProvider = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`
});
var createPromotionProvider = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers`,
	data: payload
});
var updatePromotionProvider = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`,
	data: payload
});
var deletePromotionProvider = async (context, id) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/providers/${id}`
	});
};
var fetchPromotionConnections = async (context, filter = {}) => await fetchAllPages(async (cursor) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections`,
	data: {
		...filter,
		cursor
	}
}));
/** Fetches live checkout state with the stored connection fields. */
var fetchPromotionConnection = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${id}`
});
var createPromotionConnection = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections`,
	data: payload
});
var updatePromotionConnection = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${id}`,
	data: payload
});
var upsertPromotionApplyConfig = async (context, connectionId, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/apply`,
	data: payload
});
var upsertPromotionPromoteConfig = async (context, connectionId, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/promote`,
	data: payload
});
var deletePromotionConfig = async (context, connectionId, direction) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/connections/${connectionId}/configs/${direction}`
	});
};
/** Clones one direction into local storage on the instance. Safe to repeat. */
var clonePromotionCheckout = async (context, connectionId, direction) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/${direction}/clone`
});
/** Removes one direction's local checkout. Keeps the config and its credentials. */
var disconnectPromotionCheckout = async (context, connectionId, direction) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/${direction}/disconnect`
});
/** Promotes the whole instance through its instance connection. */
var promotePackage = async (context, connectionId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/connections/${connectionId}/promote`,
	data: payload
});
//#endregion
//#region src/features/integrations/promotions.ee/components/PromoteInstanceDialog.vue?vue&type=script&setup=true&lang.ts
var PromoteInstanceDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromoteInstanceDialog",
	props: {
		open: { type: Boolean },
		connectionId: {},
		baseBranchName: {},
		createBranchOnPromotion: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const commitMessage = ref("");
		const isSubmitting = ref(false);
		const messageInput = useTemplateRef("messageInput");
		const isPromoteDisabled = computed(() => isSubmitting.value || commitMessage.value.trim().length === 0);
		const bodyText = computed(() => props.createBranchOnPromotion ? i18n.baseText("settings.promotions.promote.dialog.body.newBranch") : i18n.baseText("settings.promotions.promote.dialog.body.toBranch", { interpolate: { branch: props.baseBranchName } }));
		function close() {
			emit("update:open", false);
		}
		function onOpenChange(value) {
			if (value || isSubmitting.value) return;
			close();
		}
		function onOpenAutoFocus(event) {
			event.preventDefault();
			nextTick(() => messageInput.value?.focus());
		}
		async function submit() {
			if (isPromoteDisabled.value) return;
			isSubmitting.value = true;
			try {
				const result = await promotePackage(rootStore.publicApiContext, props.connectionId, { commitMessage: commitMessage.value.trim() });
				toast.showMessage({
					title: i18n.baseText("settings.promotions.promote.toast.success.title"),
					message: i18n.baseText("settings.promotions.promote.toast.success.message", { interpolate: { branch: result.git.branchName } }),
					type: "success"
				});
				close();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.promote.toast.error"));
			} finally {
				isSubmitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": unref(i18n).baseText("settings.promotions.promote.dialog.ariaDescription"),
				"data-test-id": "promote-instance-dialog",
				onOpenAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
					default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.promote.dialog.title")), 1)]),
						_: 1
					})]),
					_: 1
				}), createBaseVNode("form", {
					class: normalizeClass(_ctx.$style.form),
					onSubmit: withModifiers(submit, ["prevent"])
				}, [
					createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(bodyText.value), 1)]),
						_: 1
					}),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "promote-commit-message",
						label: unref(i18n).baseText("settings.promotions.promote.dialog.commitMessage.label"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "promote-commit-message",
							ref_key: "messageInput",
							ref: messageInput,
							modelValue: commitMessage.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => commitMessage.value = $event),
							type: "textarea",
							rows: 3,
							disabled: isSubmitting.value,
							placeholder: unref(i18n).baseText("settings.promotions.promote.dialog.commitMessage.placeholder"),
							"data-test-id": "promote-commit-message"
						}, null, 8, [
							"modelValue",
							"disabled",
							"placeholder"
						])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							disabled: isSubmitting.value,
							"data-test-id": "promote-cancel-button",
							onClick: close
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							type: "submit",
							disabled: isPromoteDisabled.value,
							loading: isSubmitting.value,
							"data-test-id": "promote-confirm-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.promote.dialog.confirm")), 1)]),
							_: 1
						}, 8, ["disabled", "loading"])]),
						_: 1
					})
				], 34)]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
});
var PromoteInstanceDialog_vue_vue_type_style_index_0_lang_module_default = { form: "_form_i1mrt_1" };
var PromoteInstanceDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromoteInstanceDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromoteInstanceDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/PromoteInstanceSection.vue
var PromoteInstanceSection_default = /* @__PURE__ */ defineComponent({
	__name: "PromoteInstanceSection",
	props: { connection: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const dialogOpen = ref(false);
		const promoteConfig = computed(() => props.connection?.configs.promote);
		const canPromote = computed(() => !!promoteConfig.value && !!getResourcePermissions(usersStore.currentUser?.globalScopes).gitConnection.push);
		const isConnected = computed(() => promoteConfig.value?.checkout.matchesConfig ?? false);
		return (_ctx, _cache) => {
			return canPromote.value && __props.connection && promoteConfig.value ? (openBlock(), createBlock(unref(SettingsSection_default), {
				key: 0,
				title: unref(i18n).baseText("settings.promotions.promote.title"),
				description: unref(i18n).baseText("settings.promotions.promote.description")
			}, {
				default: withCtx(() => [
					createVNode(unref(N8nButton_default), {
						disabled: !isConnected.value,
						"data-test-id": "promote-instance-button",
						onClick: _cache[0] || (_cache[0] = ($event) => dialogOpen.value = true)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.promote.button")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					!isConnected.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-light",
						"data-test-id": "promote-instance-not-connected"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.promote.notConnected")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					dialogOpen.value ? (openBlock(), createBlock(PromoteInstanceDialog_default, {
						key: 1,
						open: dialogOpen.value,
						"connection-id": __props.connection.id,
						"base-branch-name": promoteConfig.value.settings.baseBranchName,
						"create-branch-on-promotion": promoteConfig.value.settings.createBranchOnPromotion,
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => dialogOpen.value = $event)
					}, null, 8, [
						"open",
						"connection-id",
						"base-branch-name",
						"create-branch-on-promotion"
					])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["title", "description"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionConnectionSave.ts
/** Tries every write and returns the successful state and failed writes. */
function usePromotionConnectionSave() {
	const rootStore = useRootStore();
	const isSaving = ref(false);
	const failedWrites = ref([]);
	const runWrite = async (connectionId, write, connection) => {
		const context = rootStore.publicApiContext;
		switch (write.kind) {
			case "connection": return await updatePromotionConnection(context, connectionId, write.payload);
			case "config": {
				const config = write.direction === "apply" ? await upsertPromotionApplyConfig(context, connectionId, write.payload) : await upsertPromotionPromoteConfig(context, connectionId, write.payload);
				return {
					...connection,
					configs: {
						...connection.configs,
						[write.direction]: config
					}
				};
			}
			case "config-delete": {
				try {
					await deletePromotionConfig(context, connectionId, write.direction);
				} catch (error) {
					if (!(error instanceof ResponseError) || error.httpStatusCode !== 404) throw error;
				}
				const configs = { ...connection.configs };
				delete configs[write.direction];
				return {
					...connection,
					configs
				};
			}
		}
	};
	const run = async (current, writes) => {
		let connection = current;
		const failed = [];
		let error;
		isSaving.value = true;
		try {
			for (const write of writes) try {
				connection = await runWrite(current.id, write, connection);
			} catch (writeError) {
				failed.push(write);
				error ??= writeError;
			}
		} finally {
			isSaving.value = false;
		}
		failedWrites.value = failed;
		return {
			connection,
			failed,
			error
		};
	};
	const reset = () => {
		failedWrites.value = [];
	};
	return {
		isSaving,
		failedWrites,
		run,
		reset
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionCheckoutStatus.vue?vue&type=script&setup=true&lang.ts
var PromotionCheckoutStatus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionCheckoutStatus",
	props: {
		checkout: {},
		branchName: {},
		busy: { type: [String, Boolean] },
		disabledReason: {},
		disabled: { type: Boolean }
	},
	emits: ["connect", "disconnect"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const status = computed(() => {
			if (!props.checkout) return "blocked";
			if (!props.checkout.hasCheckout) return "not-connected";
			return props.checkout.matchesConfig ? "connected" : "stale";
		});
		const isConnected = computed(() => props.checkout?.hasCheckout ?? false);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.status),
				"data-test-id": "promotion-checkout-status"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.state) }, [status.value === "connected" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "circle-check",
				color: "success",
				size: "large"
			})) : status.value === "stale" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "triangle-alert",
				color: "warning",
				size: "large"
			})) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "circle-dot",
				color: "text-light",
				size: "large"
			})), createVNode(unref(N8nText_default), {
				size: "small",
				color: status.value === "stale" ? "warning" : "text-base"
			}, {
				default: withCtx(() => [status.value === "connected" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.checkout.connected", { interpolate: { branch: __props.branchName } })), 1)], 64)) : status.value === "stale" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.checkout.stale")), 1)], 64)) : __props.disabledReason ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(__props.disabledReason), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.checkout.notConnected")), 1)], 64))]),
				_: 1
			}, 8, ["color"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [status.value !== "connected" ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				type: "button",
				size: "small",
				disabled: !!__props.disabledReason || __props.busy === "disconnect" || __props.disabled,
				loading: __props.busy === "connect",
				"data-test-id": "promotion-checkout-connect",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("connect"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.checkout.connect")), 1)]),
				_: 1
			}, 8, ["disabled", "loading"])) : createCommentVNode("", true), isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				type: "button",
				variant: "outline",
				size: "small",
				disabled: __props.busy === "connect" || __props.disabled,
				loading: __props.busy === "disconnect",
				"data-test-id": "promotion-checkout-disconnect",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("disconnect"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.checkout.disconnect")), 1)]),
				_: 1
			}, 8, ["disabled", "loading"])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var PromotionCheckoutStatus_vue_vue_type_style_index_0_lang_module_default = {
	status: "_status_jjqp4_1",
	state: "_state_jjqp4_9",
	actions: "_actions_jjqp4_15"
};
var PromotionCheckoutStatus_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionCheckoutStatus_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionCheckoutStatus_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/promotions.ee/promotionsSettings.utils.ts
var emptyProviderForm = () => ({
	name: "",
	authType: "ssh-key",
	keyType: "ed25519",
	username: "",
	password: "",
	regenerateKey: false
});
var providerFormFrom = (provider) => ({
	...emptyProviderForm(),
	name: provider.name,
	authType: provider.authType,
	keyType: "keyType" in provider.config ? provider.config.keyType : "ed25519"
});
/** New forms must set whether promotion creates a branch. */
var emptyConnectionForm = () => ({
	name: "",
	providerId: "",
	remoteUrl: "",
	apply: {
		enabled: false,
		branchName: ""
	},
	promote: {
		enabled: false,
		baseBranchName: "",
		createBranchOnPromotion: false
	}
});
var connectionFormFrom = (connection) => {
	const { apply, promote } = connection.configs;
	return {
		name: connection.name,
		providerId: connection.provider.id,
		remoteUrl: connection.target.remoteUrl,
		apply: {
			enabled: apply !== void 0,
			name: apply?.name,
			branchName: apply?.settings.branchName ?? ""
		},
		promote: {
			enabled: promote !== void 0,
			name: promote?.name,
			baseBranchName: promote?.settings.baseBranchName ?? "",
			createBranchOnPromotion: promote?.settings.createBranchOnPromotion ?? false
		}
	};
};
var applyConfigPayload = (form) => ({
	name: form.apply.name,
	settings: {
		schemaVersion: 1,
		branchName: form.apply.branchName.trim()
	}
});
var promoteConfigPayload = (form) => ({
	name: form.promote.name,
	settings: {
		schemaVersion: 1,
		baseBranchName: form.promote.baseBranchName.trim(),
		createBranchOnPromotion: form.promote.createBranchOnPromotion
	}
});
var buildProviderCreatePayload = (form) => ({
	name: form.name.trim(),
	type: "git",
	auth: form.authType === "ssh-key" ? {
		authType: "ssh-key",
		keyType: form.keyType
	} : {
		authType: "token",
		username: form.username.trim(),
		password: form.password
	}
});
/** If credentials are absent, the API keeps them. SSH rotation keeps the key type. */
var buildProviderUpdatePayload = (form, current) => {
	const payload = {};
	const name = form.name.trim();
	if (name !== current.name) payload.name = name;
	if (form.authType === "ssh-key" && form.regenerateKey) payload.auth = { authType: "ssh-key" };
	else if (form.authType === "token" && form.username.trim() && form.password) payload.auth = {
		authType: "token",
		username: form.username.trim(),
		password: form.password
	};
	return payload;
};
var buildConnectionCreatePayload = (form) => ({
	name: form.name.trim(),
	scope: "instance",
	providerId: form.providerId,
	target: {
		schemaVersion: 1,
		remoteUrl: form.remoteUrl.trim()
	},
	configs: {
		...form.apply.enabled && { apply: applyConfigPayload(form) },
		...form.promote.enabled && { promote: promoteConfigPayload(form) }
	}
});
/** Returns only changed fields and configs. */
var planConnectionWrites = (form, current) => {
	const writes = [];
	const payload = {};
	const name = form.name.trim();
	if (name !== current.name) payload.name = name;
	const remoteUrl = form.remoteUrl.trim();
	if (remoteUrl !== current.target.remoteUrl) payload.target = {
		schemaVersion: 1,
		remoteUrl
	};
	if (form.providerId !== current.provider.id) payload.providerId = form.providerId;
	if (Object.keys(payload).length > 0) writes.push({
		kind: "connection",
		payload
	});
	const applyPayload = applyConfigPayload(form);
	const currentApply = current.configs.apply;
	if (form.apply.enabled) {
		if (currentApply === void 0 || currentApply.name !== applyPayload.name || currentApply.settings.branchName !== applyPayload.settings.branchName) writes.push({
			kind: "config",
			direction: "apply",
			payload: applyPayload
		});
	} else if (currentApply !== void 0) writes.push({
		kind: "config-delete",
		direction: "apply"
	});
	const promotePayload = promoteConfigPayload(form);
	const currentPromote = current.configs.promote;
	if (form.promote.enabled) {
		if (currentPromote === void 0 || currentPromote.name !== promotePayload.name || currentPromote.settings.baseBranchName !== promotePayload.settings.baseBranchName || currentPromote.settings.createBranchOnPromotion !== promotePayload.settings.createBranchOnPromotion) writes.push({
			kind: "config",
			direction: "promote",
			payload: promotePayload
		});
	} else if (currentPromote !== void 0) writes.push({
		kind: "config-delete",
		direction: "promote"
	});
	return writes;
};
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionConnectionForm.vue?vue&type=script&setup=true&lang.ts
var PromotionConnectionForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionConnectionForm",
	props: {
		providers: {},
		connection: {}
	},
	emits: ["saved", "add-provider"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const usersStore = useUsersStore();
		const save = usePromotionConnectionSave();
		const canClone = computed(() => !!getResourcePermissions(usersStore.currentUser?.globalScopes).gitConnection.clone);
		const current = ref(props.connection);
		const form = reactive(props.connection ? connectionFormFrom(props.connection) : emptyConnectionForm());
		const baseline = ref(JSON.stringify(form));
		const isCreating = ref(false);
		const resetTo = (connection) => {
			current.value = connection;
			Object.assign(form, connection ? connectionFormFrom(connection) : emptyConnectionForm());
			baseline.value = JSON.stringify(form);
			save.reset();
		};
		const isSaving = computed(() => isCreating.value || save.isSaving.value);
		const isDirty = computed(() => JSON.stringify(form) !== baseline.value);
		const saveDisabledReason = computed(() => {
			if (!form.providerId || !form.name.trim() || !form.remoteUrl.trim()) return i18n.baseText("settings.promotions.connection.form.incomplete");
			if (form.apply.enabled && !form.apply.branchName.trim() || form.promote.enabled && !form.promote.baseBranchName.trim()) return i18n.baseText("settings.promotions.connection.form.branchRequired");
		});
		const failedParts = computed(() => save.failedWrites.value.map((write) => i18n.baseText(write.kind === "connection" ? "settings.promotions.connection.partialSave.part.connection" : write.direction === "apply" ? "settings.promotions.connection.partialSave.part.apply" : "settings.promotions.connection.partialSave.part.promote")));
		const hasPartialFailure = computed(() => failedParts.value.length > 0);
		async function submit() {
			if (saveDisabledReason.value !== void 0 || isSaving.value) return;
			const existing = current.value;
			if (!existing) {
				isCreating.value = true;
				try {
					const created = await createPromotionConnection(rootStore.publicApiContext, buildConnectionCreatePayload(form));
					resetTo(created);
					toast.showMessage({
						title: i18n.baseText("settings.promotions.connection.toast.created"),
						type: "success"
					});
					emit("saved", created);
				} catch (error) {
					toast.showError(error, i18n.baseText("settings.promotions.connection.toast.error.save"));
				} finally {
					isCreating.value = false;
				}
				return;
			}
			const result = await save.run(existing, planConnectionWrites(form, existing));
			current.value = result.connection;
			emit("saved", result.connection);
			if (result.failed.length > 0) {
				toast.showError(result.error, i18n.baseText("settings.promotions.connection.toast.error.save"));
				return;
			}
			baseline.value = JSON.stringify(form);
			toast.showMessage({
				title: i18n.baseText("settings.promotions.connection.toast.updated"),
				type: "success"
			});
		}
		function discard() {
			resetTo(current.value);
		}
		const connecting = reactive({
			apply: false,
			promote: false
		});
		const savedCheckout = (direction) => current.value?.configs[direction]?.checkout;
		const branchNameFor = (direction) => {
			const configs = current.value?.configs;
			if (direction === "apply") return configs?.apply?.settings.branchName ?? form.apply.branchName;
			return configs?.promote?.settings.baseBranchName ?? form.promote.baseBranchName;
		};
		const connectDisabledReason = (direction) => {
			if (!canClone.value) return i18n.baseText("settings.promotions.connection.checkout.noPermission");
			if (!current.value?.configs[direction]) return i18n.baseText("settings.promotions.connection.checkout.saveFirst");
			if (isDirty.value) return i18n.baseText("settings.promotions.connection.checkout.saveChangesFirst");
		};
		function applyCheckout(direction, checkout) {
			const connection = current.value;
			const config = connection?.configs[direction];
			if (!connection || !config) return;
			const updated = {
				...connection,
				configs: {
					...connection.configs,
					[direction]: {
						...config,
						checkout
					}
				}
			};
			current.value = updated;
			emit("saved", updated);
		}
		async function connect(direction) {
			if (!current.value || connectDisabledReason(direction) !== void 0) return;
			connecting[direction] = "connect";
			try {
				const result = await clonePromotionCheckout(rootStore.publicApiContext, current.value.id, direction);
				applyCheckout(direction, {
					hasCheckout: result.hasCheckout,
					matchesConfig: result.hasCheckout
				});
				toast.showMessage({
					title: i18n.baseText("settings.promotions.connection.checkout.toast.connected"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.connection.checkout.toast.connectError"));
			} finally {
				connecting[direction] = false;
			}
		}
		async function disconnect(direction) {
			if (!current.value) return;
			connecting[direction] = "disconnect";
			try {
				await disconnectPromotionCheckout(rootStore.publicApiContext, current.value.id, direction);
				applyCheckout(direction, {
					hasCheckout: false,
					matchesConfig: false
				});
				toast.showMessage({
					title: i18n.baseText("settings.promotions.connection.checkout.toast.disconnected"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.connection.checkout.toast.disconnectError"));
			} finally {
				connecting[direction] = false;
			}
		}
		function selectProvider(id) {
			form.providerId = id;
		}
		__expose({ selectProvider });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.form),
				"data-test-id": "promotion-connection-form",
				onSubmit: withModifiers(submit, ["prevent"])
			}, [
				createVNode(unref(N8nInputLabel_default), {
					"input-name": "promotion-connection-provider",
					label: unref(i18n).baseText("settings.promotions.connection.form.provider"),
					required: ""
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.providerRow) }, [createVNode(unref(N8nSelect_default), {
						id: "promotion-connection-provider",
						modelValue: form.providerId,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.providerId = $event),
						disabled: isSaving.value,
						placeholder: unref(i18n).baseText("settings.promotions.connection.form.provider.placeholder"),
						"data-test-id": "promotion-connection-provider-select"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.providers, (provider) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: provider.id,
								value: provider.id,
								label: provider.name
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"disabled",
						"placeholder"
					]), createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "outline",
						disabled: isSaving.value,
						"data-test-id": "promotion-connection-add-provider",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("add-provider"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.form.provider.add")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nInputLabel_default), {
					"input-name": "promotion-connection-name",
					label: unref(i18n).baseText("settings.promotions.connection.form.name"),
					required: ""
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						id: "promotion-connection-name",
						modelValue: form.name,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.name = $event),
						disabled: isSaving.value,
						"data-test-id": "promotion-connection-name-input"
					}, null, 8, ["modelValue", "disabled"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nInputLabel_default), {
					"input-name": "promotion-connection-remote-url",
					label: unref(i18n).baseText("settings.promotions.connection.form.remoteUrl"),
					required: ""
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						id: "promotion-connection-remote-url",
						modelValue: form.remoteUrl,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.remoteUrl = $event),
						disabled: isSaving.value,
						"data-test-id": "promotion-connection-remote-url-input"
					}, null, 8, ["modelValue", "disabled"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						"data-test-id": "promotion-connection-remote-url-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.form.remoteUrl.hint")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [createVNode(unref(SettingsRow_default), {
						modelValue: form.apply.enabled,
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.apply.enabled = $event),
						expandable: "",
						disclosure: false,
						title: unref(i18n).baseText("settings.promotions.connection.apply.title"),
						description: unref(i18n).baseText("settings.promotions.connection.apply.description")
					}, {
						action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
							modelValue: form.apply.enabled,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.apply.enabled = $event),
							disabled: isSaving.value,
							"data-test-id": "promotion-connection-apply-toggle"
						}, null, 8, ["modelValue", "disabled"])]),
						expanded: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.directionFields) }, [createVNode(unref(N8nInputLabel_default), {
							"input-name": "promotion-connection-apply-branch",
							label: unref(i18n).baseText("settings.promotions.connection.apply.branchName"),
							required: ""
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "promotion-connection-apply-branch",
								modelValue: form.apply.branchName,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.apply.branchName = $event),
								disabled: isSaving.value,
								"data-test-id": "promotion-connection-apply-branch-input"
							}, null, 8, ["modelValue", "disabled"])]),
							_: 1
						}, 8, ["label"]), createVNode(PromotionCheckoutStatus_default, {
							checkout: savedCheckout("apply"),
							"branch-name": branchNameFor("apply"),
							busy: connecting.apply,
							"disabled-reason": connectDisabledReason("apply"),
							disabled: !canClone.value,
							onConnect: _cache[6] || (_cache[6] = ($event) => connect("apply")),
							onDisconnect: _cache[7] || (_cache[7] = ($event) => disconnect("apply"))
						}, null, 8, [
							"checkout",
							"branch-name",
							"busy",
							"disabled-reason",
							"disabled"
						])], 2)]),
						_: 1
					}, 8, [
						"modelValue",
						"title",
						"description"
					]), createVNode(unref(SettingsRow_default), {
						modelValue: form.promote.enabled,
						"onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.promote.enabled = $event),
						expandable: "",
						disclosure: false,
						title: unref(i18n).baseText("settings.promotions.connection.promote.title"),
						description: unref(i18n).baseText("settings.promotions.connection.promote.description")
					}, {
						action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
							modelValue: form.promote.enabled,
							"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.promote.enabled = $event),
							disabled: isSaving.value,
							"data-test-id": "promotion-connection-promote-toggle"
						}, null, 8, ["modelValue", "disabled"])]),
						expanded: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.directionFields) }, [
							createVNode(unref(N8nInputLabel_default), {
								"input-name": "promotion-connection-promote-branch",
								label: unref(i18n).baseText("settings.promotions.connection.promote.baseBranchName"),
								required: ""
							}, {
								default: withCtx(() => [createVNode(unref(Input_default), {
									id: "promotion-connection-promote-branch",
									modelValue: form.promote.baseBranchName,
									"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.promote.baseBranchName = $event),
									disabled: isSaving.value,
									"data-test-id": "promotion-connection-promote-branch-input"
								}, null, 8, ["modelValue", "disabled"])]),
								_: 1
							}, 8, ["label"]),
							createVNode(unref(N8nSwitch_default), {
								modelValue: form.promote.createBranchOnPromotion,
								"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.promote.createBranchOnPromotion = $event),
								disabled: isSaving.value,
								label: unref(i18n).baseText("settings.promotions.connection.promote.createBranch"),
								"data-test-id": "promotion-connection-create-branch-toggle"
							}, null, 8, [
								"modelValue",
								"disabled",
								"label"
							]),
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.promote.createBranch.description")), 1)]),
								_: 1
							}),
							createVNode(PromotionCheckoutStatus_default, {
								checkout: savedCheckout("promote"),
								"branch-name": branchNameFor("promote"),
								busy: connecting.promote,
								"disabled-reason": connectDisabledReason("promote"),
								disabled: !canClone.value,
								onConnect: _cache[12] || (_cache[12] = ($event) => connect("promote")),
								onDisconnect: _cache[13] || (_cache[13] = ($event) => disconnect("promote"))
							}, null, 8, [
								"checkout",
								"branch-name",
								"busy",
								"disabled-reason",
								"disabled"
							])
						], 2)]),
						_: 1
					}, 8, [
						"modelValue",
						"title",
						"description"
					])]),
					_: 1
				}),
				hasPartialFailure.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					theme: "warning",
					"data-test-id": "promotion-connection-partial-save"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.connection.partialSave.title")) + " " + toDisplayString(unref(i18n).baseText("settings.promotions.connection.partialSave.description", { interpolate: { parts: failedParts.value.join(", ") } })), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createVNode(unref(SettingsSaveBar_default), {
					visible: isDirty.value || hasPartialFailure.value,
					saving: isSaving.value,
					"save-disabled": saveDisabledReason.value !== void 0,
					message: hasPartialFailure.value ? unref(i18n).baseText("settings.promotions.connection.partialSave.title") : unref(i18n).baseText("settings.promotions.saveBar.message"),
					"save-label": hasPartialFailure.value ? unref(i18n).baseText("generic.retry") : unref(i18n).baseText("settings.promotions.saveBar.save"),
					"discard-label": unref(i18n).baseText("settings.promotions.saveBar.discard"),
					"data-test-id": "promotion-connection-save-bar",
					onSave: submit,
					onDiscard: discard
				}, null, 8, [
					"visible",
					"saving",
					"save-disabled",
					"message",
					"save-label",
					"discard-label"
				])
			], 34);
		};
	}
});
var PromotionConnectionForm_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_n0oae_1",
	providerRow: "_providerRow_n0oae_7",
	directionFields: "_directionFields_n0oae_16"
};
var PromotionConnectionForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionConnectionForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionConnectionForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionProviderDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 2 };
var PromotionProviderDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionProviderDialog",
	props: {
		open: { type: Boolean },
		providerId: {}
	},
	emits: [
		"update:open",
		"saved",
		"deleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const rootStore = useRootStore();
		const form = reactive(emptyProviderForm());
		const step = ref("form");
		const current = ref(null);
		const usedBy = ref([]);
		const generatedPublicKey = ref(null);
		const isLoading = ref(false);
		const isSubmitting = ref(false);
		const nameInput = useTemplateRef("nameInput");
		const doneButton = useTemplateRef("doneButton");
		const isEdit = computed(() => props.providerId !== void 0);
		const title = computed(() => {
			if (step.value === "key") return i18n.baseText("settings.promotions.provider.dialog.title.key");
			return i18n.baseText(isEdit.value ? "settings.promotions.provider.dialog.title.edit" : "settings.promotions.provider.dialog.title.add");
		});
		const ariaDescription = computed(() => i18n.baseText(step.value === "key" ? "settings.promotions.provider.dialog.key.ariaDescription" : "settings.promotions.provider.dialog.ariaDescription"));
		const storedPublicKey = computed(() => {
			const config = current.value?.config;
			return config && "publicKey" in config ? config.publicKey : null;
		});
		const isInUse = computed(() => usedBy.value.length > 0);
		const usedByNames = computed(() => usedBy.value.map((connection) => connection.name).join(", "));
		const hasUsername = computed(() => form.username.trim().length > 0);
		const hasPassword = computed(() => form.password.length > 0);
		const areCredentialsIncomplete = computed(() => {
			if (form.authType !== "token") return false;
			if (!isEdit.value) return !(hasUsername.value && hasPassword.value);
			if (!hasUsername.value && !hasPassword.value) return false;
			return !(hasUsername.value && hasPassword.value);
		});
		const hasChanges = computed(() => {
			if (!current.value) return true;
			return Object.keys(buildProviderUpdatePayload(form, current.value)).length > 0;
		});
		const saveDisabledReason = computed(() => {
			if (!form.name.trim()) return i18n.baseText("settings.promotions.provider.form.incomplete");
			if (areCredentialsIncomplete.value) return i18n.baseText("settings.promotions.provider.form.credentials.required");
			if (!hasChanges.value) return i18n.baseText("settings.promotions.provider.form.noChanges");
		});
		const isSaveDisabled = computed(() => isSubmitting.value || isLoading.value || saveDisabledReason.value !== void 0);
		function close() {
			emit("update:open", false);
		}
		function onOpenChange(value) {
			if (value || isSubmitting.value) return;
			close();
		}
		function focusStep() {
			nextTick(() => {
				if (step.value === "key") doneButton.value?.$el?.focus();
				else nameInput.value?.focus();
			});
		}
		function onOpenAutoFocus(event) {
			event.preventDefault();
			focusStep();
		}
		function onCloseAutoFocus(event) {
			event.preventDefault();
		}
		onMounted(async () => {
			if (props.providerId === void 0) {
				focusStep();
				return;
			}
			isLoading.value = true;
			try {
				const [provider, connections] = await Promise.all([fetchPromotionProvider(rootStore.publicApiContext, props.providerId), fetchPromotionConnections(rootStore.publicApiContext, { providerId: props.providerId })]);
				current.value = provider;
				usedBy.value = connections;
				Object.assign(form, providerFormFrom(provider));
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.provider.toast.error.load"));
				close();
			} finally {
				isLoading.value = false;
				focusStep();
			}
		});
		async function submit() {
			if (isSaveDisabled.value) return;
			const existing = current.value;
			isSubmitting.value = true;
			try {
				if (existing) {
					const updated = await updatePromotionProvider(rootStore.publicApiContext, existing.id, buildProviderUpdatePayload(form, existing));
					const rotatedKey = "publicKey" in updated.config && updated.config.publicKey !== storedPublicKey.value ? updated.config.publicKey : null;
					current.value = updated;
					toast.showMessage({
						title: i18n.baseText("settings.promotions.provider.toast.updated"),
						type: "success"
					});
					emit("saved", updated.id);
					if (rotatedKey) {
						generatedPublicKey.value = rotatedKey;
						step.value = "key";
						focusStep();
					} else close();
				} else {
					const created = await createPromotionProvider(rootStore.publicApiContext, buildProviderCreatePayload(form));
					toast.showMessage({
						title: i18n.baseText("settings.promotions.provider.toast.created"),
						type: "success"
					});
					emit("saved", created.provider.id);
					if (created.publicKey) {
						generatedPublicKey.value = created.publicKey;
						step.value = "key";
						focusStep();
					} else close();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.provider.toast.error.save"));
			} finally {
				isSubmitting.value = false;
			}
		}
		async function onDelete() {
			const existing = current.value;
			if (!existing) return;
			if (await message.confirm(i18n.baseText("settings.promotions.provider.delete.confirm.message"), i18n.baseText("settings.promotions.provider.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("settings.promotions.provider.delete.confirm.button"),
				customClass: "el-message-box--destructive",
				showClose: true
			}) !== "confirm") return;
			isSubmitting.value = true;
			try {
				await deletePromotionProvider(rootStore.publicApiContext, existing.id);
				toast.showMessage({
					title: i18n.baseText("settings.promotions.provider.toast.deleted"),
					type: "success"
				});
				emit("deleted", existing.id);
				close();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.provider.toast.error.delete"));
			} finally {
				isSubmitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": ariaDescription.value,
				"data-test-id": "promotion-provider-dialog",
				onOpenAutoFocus,
				onCloseAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
					default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
						_: 1
					})]),
					_: 1
				}), step.value === "key" && generatedPublicKey.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.form),
					"data-test-id": "promotion-provider-key-step"
				}, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.promotions.provider.publicKey.label") }, {
					default: withCtx(() => [createVNode(unref(N8nCopyInput_default), {
						value: generatedPublicKey.value,
						"copy-label": unref(i18n).baseText("settings.promotions.provider.publicKey.copy"),
						"copied-label": unref(i18n).baseText("generic.copiedToClipboard"),
						"data-test-id": "promotion-provider-public-key"
					}, null, 8, [
						"value",
						"copy-label",
						"copied-label"
					]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.provider.publicKey.hint")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["label"]), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						ref_key: "doneButton",
						ref: doneButton,
						"data-test-id": "promotion-provider-done-button",
						onClick: close
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
						_: 1
					}, 512)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("form", {
					key: 1,
					class: normalizeClass(_ctx.$style.form),
					"data-test-id": "promotion-provider-form-step",
					onSubmit: withModifiers(submit, ["prevent"])
				}, [
					isEdit.value && isInUse.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						theme: "warning",
						"data-test-id": "promotion-provider-in-use"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.provider.inUse.warning")) + " " + toDisplayString(unref(i18n).baseText("settings.promotions.provider.inUse.connections", { interpolate: { names: usedByNames.value } })), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "promotion-provider-name",
						label: unref(i18n).baseText("settings.promotions.provider.form.name"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "promotion-provider-name",
							ref_key: "nameInput",
							ref: nameInput,
							modelValue: form.name,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event),
							disabled: isLoading.value,
							"data-test-id": "promotion-provider-name-input"
						}, null, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "promotion-provider-auth-type",
						label: unref(i18n).baseText("settings.promotions.provider.form.authType"),
						"tooltip-text": isEdit.value ? unref(i18n).baseText("settings.promotions.provider.form.authType.locked") : void 0
					}, {
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							id: "promotion-provider-auth-type",
							modelValue: form.authType,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.authType = $event),
							teleported: false,
							disabled: isLoading.value || isEdit.value,
							"data-test-id": "promotion-provider-auth-type-select"
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "ssh-key",
								label: unref(i18n).baseText("settings.promotions.providers.authType.sshKey")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "token",
								label: unref(i18n).baseText("settings.promotions.providers.authType.token")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label", "tooltip-text"]),
					form.authType === "ssh-key" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						!isEdit.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 0,
							"input-name": "promotion-provider-key-type",
							label: unref(i18n).baseText("settings.promotions.provider.form.keyType")
						}, {
							default: withCtx(() => [createVNode(unref(N8nSelect_default), {
								id: "promotion-provider-key-type",
								modelValue: form.keyType,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.keyType = $event),
								teleported: false,
								disabled: isLoading.value,
								"data-test-id": "promotion-provider-key-type-select"
							}, {
								default: withCtx(() => [createVNode(unref(N8nOption_default), {
									value: "ed25519",
									label: "ED25519"
								}), createVNode(unref(N8nOption_default), {
									value: "rsa",
									label: "RSA"
								})]),
								_: 1
							}, 8, ["modelValue", "disabled"])]),
							_: 1
						}, 8, ["label"])) : createCommentVNode("", true),
						storedPublicKey.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 1,
							label: unref(i18n).baseText("settings.promotions.provider.publicKey.label")
						}, {
							default: withCtx(() => [createVNode(unref(N8nCopyInput_default), {
								value: storedPublicKey.value,
								"copy-label": unref(i18n).baseText("settings.promotions.provider.publicKey.copy"),
								"copied-label": unref(i18n).baseText("generic.copiedToClipboard"),
								"data-test-id": "promotion-provider-public-key"
							}, null, 8, [
								"value",
								"copy-label",
								"copied-label"
							])]),
							_: 1
						}, 8, ["label"])) : createCommentVNode("", true),
						isEdit.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(Checkbox_default), {
							modelValue: form.regenerateKey,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.regenerateKey = $event),
							label: unref(i18n).baseText("settings.promotions.provider.regenerateKey"),
							disabled: isLoading.value,
							"data-test-id": "promotion-provider-regenerate-key"
						}, null, 8, [
							"modelValue",
							"label",
							"disabled"
						]), form.regenerateKey ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.provider.regenerateKey.hint")), 1)]),
							_: 1
						})) : createCommentVNode("", true)])) : createCommentVNode("", true)
					], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						createVNode(unref(N8nInputLabel_default), {
							"input-name": "promotion-provider-username",
							label: unref(i18n).baseText("settings.promotions.provider.form.username"),
							required: !isEdit.value
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "promotion-provider-username",
								modelValue: form.username,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.username = $event),
								disabled: isLoading.value,
								"data-test-id": "promotion-provider-username-input"
							}, null, 8, ["modelValue", "disabled"])]),
							_: 1
						}, 8, ["label", "required"]),
						createVNode(unref(N8nInputLabel_default), {
							"input-name": "promotion-provider-password",
							label: unref(i18n).baseText("settings.promotions.provider.form.password"),
							required: !isEdit.value
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "promotion-provider-password",
								modelValue: form.password,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.password = $event),
								type: "password",
								autocomplete: "new-password",
								disabled: isLoading.value,
								"data-test-id": "promotion-provider-password-input"
							}, null, 8, ["modelValue", "disabled"])]),
							_: 1
						}, 8, ["label", "required"]),
						hasUsername.value !== hasPassword.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.provider.form.credentials.required")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						isEdit.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.provider.form.credentials.keepHint")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 64)),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [
							isEdit.value ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.deleteAction),
								type: "button",
								variant: "destructive",
								disabled: isInUse.value || isSubmitting.value,
								"data-test-id": "promotion-provider-delete-button",
								onClick: onDelete
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.delete")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								type: "button",
								variant: "outline",
								disabled: isSubmitting.value,
								"data-test-id": "promotion-provider-cancel-button",
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							createVNode(unref(N8nButton_default), {
								type: "submit",
								disabled: isSaveDisabled.value,
								loading: isSubmitting.value,
								"data-test-id": "promotion-provider-save-button"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
								_: 1
							}, 8, ["disabled", "loading"])
						]),
						_: 1
					})
				], 34))]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
});
var PromotionProviderDialog_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_dqdos_1",
	deleteAction: "_deleteAction_dqdos_7"
};
var PromotionProviderDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionProviderDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionProviderDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/promotions.ee/views/PromotionsSettingsView.vue?vue&type=script&setup=true&lang.ts
var PromotionsSettingsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionsSettingsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const documentTitle = useDocumentTitle();
		const providers = ref([]);
		const connection = ref(null);
		const isInitialLoading = ref(true);
		const loadError = ref(false);
		const dialogOpen = ref(false);
		const editingId = ref(void 0);
		const providerToFocus = ref(void 0);
		const selectAfterCreate = ref(false);
		const list = useTemplateRef("list");
		const addRow = useTemplateRef("addRow");
		const page = useTemplateRef("page");
		const connectionForm = useTemplateRef("connectionForm");
		let hasLoaded = false;
		let pendingLoad = Promise.resolve();
		async function load() {
			isInitialLoading.value = !hasLoaded || loadError.value;
			loadError.value = false;
			try {
				const [loadedProviders, connections] = await Promise.all([fetchPromotionProviders(rootStore.publicApiContext), fetchPromotionConnections(rootStore.publicApiContext, { scope: "instance" })]);
				providers.value = loadedProviders;
				const summary = connections[0];
				connection.value = summary ? await fetchPromotionConnection(rootStore.publicApiContext, summary.id) : null;
			} catch (error) {
				loadError.value = true;
				providers.value = [];
				connection.value = null;
				toast.showError(error, i18n.baseText("settings.promotions.providers.error.title"));
			} finally {
				isInitialLoading.value = false;
				hasLoaded = true;
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.promotions.title"));
			await load();
		});
		function authTypeLabel(provider) {
			return i18n.baseText(provider.authType === "ssh-key" ? "settings.promotions.providers.authType.sshKey" : "settings.promotions.providers.authType.token");
		}
		function openCreateDialog(fromConnectionForm = false) {
			editingId.value = void 0;
			providerToFocus.value = void 0;
			selectAfterCreate.value = fromConnectionForm;
			dialogOpen.value = true;
		}
		function openEditDialog(id) {
			editingId.value = id;
			providerToFocus.value = id;
			selectAfterCreate.value = false;
			dialogOpen.value = true;
		}
		function onProviderSaved(id) {
			providerToFocus.value = id;
			if (selectAfterCreate.value) {
				connectionForm.value?.selectProvider(id);
				selectAfterCreate.value = false;
			}
			pendingLoad = load();
		}
		function onProviderDeleted() {
			providerToFocus.value = void 0;
			pendingLoad = load();
		}
		async function focusProvider(id) {
			await nextTick();
			((id ? list.value?.querySelector(`[data-provider-id="${id}"]`) : void 0) ?? addRow.value?.$el ?? page.value?.$el)?.focus();
		}
		async function onDialogOpenChange(open) {
			dialogOpen.value = open;
			if (open) return;
			await pendingLoad;
			await focusProvider(providerToFocus.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				ref_key: "page",
				ref: page,
				class: normalizeClass(_ctx.$style.layout),
				tabindex: "-1"
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.promotions.title"),
						description: unref(i18n).baseText("settings.promotions.description"),
						"show-docs-link": false
					}, null, 8, ["title", "description"]),
					createVNode(PromoteInstanceSection_default, { connection: connection.value }, null, 8, ["connection"]),
					createVNode(unref(SettingsSection_default), {
						title: unref(i18n).baseText("settings.promotions.providers.title"),
						description: unref(i18n).baseText("settings.promotions.providers.description")
					}, {
						default: withCtx(() => [isInitialLoading.value ? (openBlock(), createBlock(unref(Loading_default), {
							key: 0,
							rows: 2,
							"shrink-last": false
						})) : loadError.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
							key: 1,
							heading: unref(i18n).baseText("settings.promotions.providers.error.title"),
							description: unref(i18n).baseText("settings.promotions.providers.error.description"),
							"button-text": unref(i18n).baseText("generic.retry"),
							"data-test-id": "promotion-providers-load-error",
							"onClick:button": load
						}, null, 8, [
							"heading",
							"description",
							"button-text"
						])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", {
							ref_key: "list",
							ref: list,
							class: normalizeClass(_ctx.$style.list)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(providers.value, (provider) => {
							return openBlock(), createBlock(unref(SettingsRowGroup_default), { key: provider.id }, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									clickable: "",
									title: provider.name,
									description: authTypeLabel(provider),
									"data-provider-id": provider.id,
									"data-test-id": "promotion-provider-row",
									onClick: ($event) => openEditDialog(provider.id)
								}, {
									visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "git-branch",
										color: "text-dark",
										size: 20
									})]),
									action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default))]),
									_: 1
								}, 8, [
									"title",
									"description",
									"data-provider-id",
									"onClick"
								])]),
								_: 2
							}, 1024);
						}), 128))], 2), createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), {
								ref_key: "addRow",
								ref: addRow,
								clickable: "",
								title: unref(i18n).baseText("settings.promotions.providers.add"),
								description: unref(i18n).baseText("settings.promotions.providers.add.description"),
								"data-test-id": "promotion-providers-add",
								onClick: _cache[0] || (_cache[0] = ($event) => openCreateDialog())
							}, {
								visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "plus",
									color: "text-dark",
									size: 20
								})]),
								action: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "chevron-right",
									color: "text-light",
									size: "small"
								})]),
								_: 1
							}, 8, ["title", "description"])]),
							_: 1
						})], 64))]),
						_: 1
					}, 8, ["title", "description"]),
					createVNode(unref(SettingsSection_default), {
						title: unref(i18n).baseText("settings.promotions.connection.title"),
						description: unref(i18n).baseText("settings.promotions.connection.description")
					}, {
						default: withCtx(() => [isInitialLoading.value ? (openBlock(), createBlock(unref(Loading_default), {
							key: 0,
							rows: 3,
							"shrink-last": false
						})) : !loadError.value ? (openBlock(), createBlock(PromotionConnectionForm_default, {
							key: 1,
							ref_key: "connectionForm",
							ref: connectionForm,
							providers: providers.value,
							connection: connection.value,
							onSaved: _cache[1] || (_cache[1] = ($event) => connection.value = $event),
							onAddProvider: _cache[2] || (_cache[2] = ($event) => openCreateDialog(true))
						}, null, 8, ["providers", "connection"])) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["title", "description"]),
					dialogOpen.value ? (openBlock(), createBlock(PromotionProviderDialog_default, {
						key: editingId.value ?? "new",
						open: dialogOpen.value,
						"provider-id": editingId.value,
						"onUpdate:open": onDialogOpenChange,
						onSaved: onProviderSaved,
						onDeleted: onProviderDeleted
					}, null, 8, ["open", "provider-id"])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var PromotionsSettingsView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_1dwhz_1",
	list: "_list_1dwhz_8"
};
var PromotionsSettingsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionsSettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionsSettingsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PromotionsSettingsView_default as default };

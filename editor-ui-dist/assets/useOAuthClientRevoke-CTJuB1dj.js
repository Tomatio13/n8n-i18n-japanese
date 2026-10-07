import { Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Nd as defineComponent, Qd as renderSlot, Sf as ref, Td as createBlock, Yd as openBlock, Zd as renderList, Zf as normalizeClass, bd as Fragment, jd as createVNode, np as toDisplayString, tf as resolveDynamicComponent, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { Jx as Dialog_default, Kx as AlertDialog_default, R_ as useToast, W_ as useUsersStore, Xx as DialogHeader_default, Yx as DialogTitle_default, Zx as DialogDescription_default, aw as _plugin_vue_export_helper_default, hi as useMcp, ko as TimeAgo_default, nw as N8nIcon_default, qC as N8nText_default, qx as DialogFooter_default, tw as N8nButton_default, uw as useI18n } from "./app-DPWSzjF9.js";
import { t as useMCPStore } from "./mcp.store-pKH9xQPA.js";
import { i as scopeLabel, r as getClientBrand } from "./clients.utils-B9-gwYRH.js";
import { t as McpClientLogoCards_default } from "./McpClientLogoCards-BEem_Pei.js";
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpEmptyStateCard",
	props: {
		title: {},
		description: {},
		surface: {
			type: Boolean,
			default: false
		},
		dataTestId: { default: void 0 }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.card, __props.surface && _ctx.$style.surface]),
				"data-test-id": __props.dataTestId
			}, [
				createVNode(McpClientLogoCards_default, { class: normalizeClass(_ctx.$style.cards) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				})], 2),
				_ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1plsi_1";
var surface = "_surface_1plsi_14";
var cards = "_cards_1plsi_33";
var copy = "_copy_1plsi_37";
var actions = "_actions_1plsi_44";
var McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	"mcp-reveal-in": "_mcp-reveal-in_1plsi_1",
	surface,
	cards,
	copy,
	actions
};
var McpEmptyStateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=script&setup=true&lang.ts
var OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientDetailsModal",
	props: {
		client: {},
		open: { type: Boolean }
	},
	emits: ["update:open", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const brand = computed(() => props.client ? getClientBrand(props.client.name) : null);
		const ownerLabel = computed(() => {
			const owner = props.client?.owner;
			if (!owner) return null;
			const name = [owner.firstName, owner.lastName].filter(Boolean).join(" ");
			return name ? `${name} (${owner.email})` : owner.email;
		});
		const subtitle = computed(() => {
			const type = brand.value?.type;
			if (!type) return i18n.baseText("settings.mcp.oAuthClients.details.subtitle");
			return i18n.baseText("settings.mcp.oAuthClients.details.subtitleWithType", { interpolate: { type: i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`) } });
		});
		/** Granted scopes as human labels, listed plainly in grant order. */
		const grantedScopes = computed(() => props.client?.scopes ?? []);
		function onRevoke() {
			if (!props.client) return;
			emit("revoke", props.client);
			emit("update:open", false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [__props.client ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-client-details-modal"
				}, [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["icon-chip"]) }, [brand.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"]))], 2), createTextVNode(" " + toDisplayString(__props.client.name), 1)], 2)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
						ownerLabel.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedBy")), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-by"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(ownerLabel.value), 1)]),
							_: 1
						})], 64)) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedOn")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-on"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, {
								date: new Date(__props.client.grantedAt).toISOString(),
								capitalize: ""
							}, null, 8, ["date"])]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.access")), 1)]),
							_: 1
						}),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.access),
							"data-test-id": "mcp-client-details-access"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(grantedScopes.value, (scope) => {
							return openBlock(), createBlock(unref(N8nText_default), {
								key: scope,
								color: "text-dark",
								size: "small",
								"data-test-id": `mcp-client-details-scope-${scope}`
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(scopeLabel)(unref(i18n), scope)), 1)]),
								_: 2
							}, 1032, ["data-test-id"]);
						}), 128))], 2)
					], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							"data-test-id": "mcp-client-details-close",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "destructive",
							"data-test-id": "mcp-client-details-revoke",
							onClick: onRevoke
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_11klp_1";
var title = "_title_11klp_7";
var icon = "_icon_11klp_13";
var details = "_details_11klp_33";
var access = "_access_11klp_43";
var OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default = {
	container,
	title,
	"icon-chip": "_icon-chip_11klp_13",
	icon,
	details,
	access
};
var OAuthClientDetailsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/RevokeOAuthClientConfirmModal.vue
var RevokeOAuthClientConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeOAuthClientConfirmModal",
	props: {
		client: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.client ? i18n.baseText("settings.mcp.oAuthClients.revoke.title", { interpolate: { name: props.client.name } }) : "");
		const description = computed(() => {
			if (!props.client) return "";
			if (props.revokingForOther) {
				const owner = props.client.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.mcp.oAuthClients.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.mcp.oAuthClients.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.mcp.oAuthClients.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "mcp-client-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/composables/useOAuthClientRevoke.ts
/**
* The confirm-then-revoke flow for a connected client, shared by the settings
* overview and the clients page. `requestRevoke` opens the confirmation (the
* pending client is the dialog's `open` state), `confirmRevoke` performs the
* revoke and reports it, `cancelRevoke` dismisses.
*
* `onRevoked` runs after a successful revoke so the caller can refresh its own
* view of the data. It owns its error handling: the revoke already succeeded,
* so a failed refresh must not be reported as a failed revoke.
*
* `refreshList` (default true) refetches the clients page's list after the
* revoke. Callers that don't render that list (the overview) turn it off and
* refresh their own data in `onRevoked`, so the list's persisted ownership and
* filters are never requested from a page that doesn't show them.
*/
function useOAuthClientRevoke(options = {}) {
	const i18n = useI18n();
	const toast = useToast();
	const mcp = useMcp();
	const mcpStore = useMCPStore();
	const usersStore = useUsersStore();
	const revokeClient = ref(null);
	const revoking = ref(false);
	/** An admin revoking someone else's grant rather than their own. */
	const isRevokingForOther = (client) => !!client.owner && client.owner.id !== usersStore.currentUser?.id;
	const requestRevoke = (client) => {
		revokeClient.value = client;
	};
	const cancelRevoke = () => {
		revokeClient.value = null;
	};
	const confirmRevoke = async () => {
		const client = revokeClient.value;
		if (!client) return;
		let revoked = false;
		try {
			revoking.value = true;
			await mcpStore.removeOAuthClient(client.id, client.owner?.id, { refreshList: options.refreshList ?? true });
			revoked = true;
			mcp.trackClientAccessRevoked({
				clientId: client.id,
				clientName: client.name,
				revokedForOther: isRevokingForOther(client)
			});
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
				message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
		} finally {
			revoking.value = false;
			revokeClient.value = null;
		}
		if (revoked) await options.onRevoked?.();
	};
	return {
		revokeClient,
		revoking,
		isRevokingForOther,
		requestRevoke,
		cancelRevoke,
		confirmRevoke
	};
}
//#endregion
export { McpEmptyStateCard_default as i, RevokeOAuthClientConfirmModal_default as n, OAuthClientDetailsModal_default as r, useOAuthClientRevoke as t };

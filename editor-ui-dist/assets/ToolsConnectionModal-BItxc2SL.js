import { $u as useDebounceFn, Ad as createTextVNode, Af as unref, Cd as computed, Dd as createElementBlock, Ed as createCommentVNode, Fd as guardReactiveProps, Hd as nextTick, Kd as onMounted, Nd as defineComponent, Od as createSlots, Qd as renderSlot, Qf as normalizeProps, Rd as inject, Sf as ref, Td as createBlock, Vd as mergeProps, Yd as openBlock, Zd as renderList, Zf as normalizeClass, bd as Fragment, cf as watch, jd as createVNode, np as toDisplayString, of as useTemplateRef, tf as resolveDynamicComponent, uf as withCtx, wd as createBaseVNode } from "./vendor-BdZVA4Px.js";
import { $C as Input_default, HC as N8nBadge_default, Jx as Dialog_default, OS as N8nRecycleScroller_default, O_ as DEBOUNCE_TIME, US as N8nNodeIcon_default, YC as N8nTooltip_default, aw as _plugin_vue_export_helper_default, ew as N8nIconButton_default, fm as getDebounceTime, nw as N8nIcon_default, qC as N8nText_default, tw as N8nButton_default, uw as useI18n, vS as N8nTabs_default, wS as N8nSpinner_default } from "./app-BLs7xE53.js";
import { a as TOOL_CONNECTION_CREDITS_LABEL_KEY, i as TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, n as ToolCredentialPicker_default, o as hasToolConnection, r as CATEGORY_BY_KIND, t as ToolIcon_default } from "./ToolIcon-CGLuI6k8.js";
//#region src/features/shared/toolsConnection/toolItemIcon.ts
function resolveToolItemIcon(item) {
	return item.iconSource ?? null;
}
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-row-kind"];
var _hoisted_2$2 = ["disabled"];
var _hoisted_3 = ["aria-label"];
var ToolRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolRow",
	props: {
		item: {},
		showConnectAction: { type: Boolean },
		connectLabel: {},
		connectAriaLabel: {},
		connectedLabel: {}
	},
	emits: [
		"open-detail",
		"connect",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const credentialAdapter = inject(TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, null);
		const creditsLabelKey = inject(TOOL_CONNECTION_CREDITS_LABEL_KEY, null);
		/**
		* Gateway-backed rows share the credits pill copy with the node creator and
		* model selector: "Free credits" until a top-up or a depleted allowance flips
		* it to a blue "n8n credits" pill. Defaults to "Free credits" when no consumer
		* injects the store-backed key.
		*/
		const creditsPill = computed(() => {
			const key = creditsLabelKey?.value ?? "generic.freeCredits";
			return {
				text: i18n.baseText(key),
				type: key === "generic.freeCredits" ? "default" : "info"
			};
		});
		/**
		* The picker needs both credential definitions and an injected adapter.
		* Consumers that manage credentials elsewhere simply get the static marker below.
		*/
		const shouldShowCredentialPicker = computed(() => {
			if (!credentialAdapter || !props.item.credentials?.length) return false;
			if (props.item.status === "connecting") return false;
			if (hasToolConnection(props.item.status)) return true;
			return Boolean(props.item.credentials?.some(({ authType }) => credentialAdapter.getCredentialsByType(authType).length > 0));
		});
		const placeholderIcon = computed(() => {
			switch (props.item.kind) {
				case "service":
				case "mcp-server": return "plug";
				case "workflow": return "workflow";
				case "agent": return "bot";
				case "data-store": return "database";
				default: return "toolbox";
			}
		});
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		const actionLabel = computed(() => {
			if (props.item.communityPreview) return i18n.baseText("communityNodeDetails.install");
			if (props.item.status === "disconnected") return i18n.baseText("tools.connection.action.reconnect");
			return props.connectLabel ?? i18n.baseText("tools.connection.action.connect");
		});
		const installBlocked = computed(() => Boolean(props.item.communityPreview) && Boolean(props.item.installDisabled));
		const isDisabled = computed(() => Boolean(props.item.disabled));
		/**
		* For most rows the button only repeated what clicking the row already does.
		* What survives is the pair that goes somewhere the row body cannot: installing
		* a community package, and connecting an MCP server without a detour through
		* its detail view.
		*/
		const hasDirectAction = computed(() => props.showConnectAction || Boolean(props.item.communityPreview) || props.item.kind === "mcp-server");
		function handleRowClick() {
			if (props.item.disabled) return;
			if (props.item.status === "connecting") return;
			emit("open-detail", props.item);
		}
		function handleConnect() {
			emit("connect", props.item);
			if (props.item.credentials?.length) emit("first-credential-connect", props.item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.row,
					_ctx.$style[`row--${__props.item.kind}`],
					{ [_ctx.$style.rowDisabled]: isDisabled.value }
				]),
				"data-test-id": `tools-connection-row`,
				"data-row-kind": __props.item.kind
			}, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.mainAction),
				disabled: isDisabled.value || __props.item.status === "connecting",
				"data-test-id": "tools-connection-row-main",
				onClick: handleRowClick
			}, [__props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.workflowIcon),
					"aria-hidden": "true"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: 20
				})], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.workflowTitle),
					tag: "span",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
					_: 1
				}, 8, ["class"]),
				__props.item.warning ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.workflowWarning),
					tag: "span",
					size: "small",
					color: "warning",
					"data-test-id": "tools-connection-row-warning"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.warning), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(ToolIcon_default, {
				source: resolvedIcon.value,
				"fallback-icon": placeholderIcon.value
			}, null, 8, ["source", "fallback-icon"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleRow) }, [
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					tag: "span",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
					_: 1
				}, 8, ["class"]),
				__props.item.verified ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.approved"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "shield-half",
						size: 14,
						class: normalizeClass(_ctx.$style.verifiedIcon),
						"aria-label": unref(i18n).baseText("communityNodeInfo.approved"),
						"data-test-id": "tools-connection-row-verified-badge"
					}, null, 8, ["class", "aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				__props.item.freeCredits ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					size: "xxsmall",
					variant: creditsPill.value.type === "info" ? "info" : "success",
					"data-test-id": "tools-connection-row-free-credits"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(creditsPill.value.text), 1)]),
					_: 1
				}, 8, ["variant"])) : createCommentVNode("", true)
			], 2), __props.item.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.description),
				tag: "span",
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.item.description), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 64))], 10, _hoisted_2$2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [isDisabled.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: __props.item.disabledReason ?? "",
				disabled: !__props.item.disabledReason,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.disabledMarker),
					role: "img",
					tabindex: "0",
					"aria-label": __props.item.disabledReason,
					"data-test-id": "tools-connection-row-disabled"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "info",
					size: 14,
					color: "text-light"
				})], 10, _hoisted_3)]),
				_: 1
			}, 8, ["content", "disabled"])) : shouldShowCredentialPicker.value ? (openBlock(), createBlock(ToolCredentialPicker_default, {
				key: 1,
				item: __props.item,
				credentials: __props.item.credentials ?? [],
				"connect-variant": "outline",
				onSelectCredential: _cache[0] || (_cache[0] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
				onCredentialDropdownOpen: _cache[1] || (_cache[1] = ($event) => emit("credential-dropdown-open", $event)),
				onFirstCredentialConnect: _cache[2] || (_cache[2] = ($event) => emit("first-credential-connect", $event)),
				onNewCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("new-credential-connect", $event))
			}, null, 8, ["item", "credentials"])) : __props.item.status === "connected" ? (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(_ctx.$style.statusMarker),
				"data-test-id": "tools-connection-row-connected"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: 14,
				class: normalizeClass(_ctx.$style.statusIconConnected),
				"aria-hidden": "true"
			}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(__props.connectedLabel ?? unref(i18n).baseText("tools.connection.action.connected")), 1)], 2)) : __props.item.status === "connecting" ? (openBlock(), createElementBlock("span", {
				key: 3,
				class: normalizeClass(_ctx.$style.statusMarker),
				"data-test-id": "tools-connection-row-connecting"
			}, [createVNode(unref(N8nSpinner_default), { size: "small" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.connecting")), 1)], 2)) : hasDirectAction.value ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [installBlocked.value && !__props.item.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(i18n).baseText("tools.connection.install.contactAdmin"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
					label: actionLabel.value,
					variant: "outline",
					size: "small",
					disabled: "",
					"data-test-id": "tools-connection-row-install"
				}, null, 8, ["label"])])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "outline",
				size: "small",
				loading: __props.item.installing,
				"aria-label": __props.connectAriaLabel,
				"data-test-id": __props.item.communityPreview ? "tools-connection-row-install" : "tools-connection-row-connect",
				onClick: handleConnect
			}, {
				default: withCtx(() => [!__props.item.communityPreview && __props.item.status === "disconnected" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "circle-x",
					size: 14,
					class: normalizeClass(_ctx.$style.statusIconDisconnected),
					"aria-hidden": "true"
				}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(actionLabel.value), 1)]),
				_: 1
			}, 8, [
				"loading",
				"aria-label",
				"data-test-id"
			]))], 64)) : __props.item.status === "disconnected" ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 5,
				variant: "outline",
				size: "small",
				"data-test-id": "tools-connection-row-disconnected",
				onClick: handleRowClick
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "circle-x",
					size: 14,
					class: normalizeClass(_ctx.$style.statusIconDisconnected),
					"aria-hidden": "true"
				}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.reconnect")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2)], 10, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_1324n_1";
var rowDisabled = "_rowDisabled_1324n_15";
var mainAction = "_mainAction_1324n_22";
var workflowIcon = "_workflowIcon_1324n_48";
var text = "_text_1324n_58";
var workflowTitle = "_workflowTitle_1324n_66";
var workflowWarning = "_workflowWarning_1324n_72";
var titleRow = "_titleRow_1324n_76";
var title$2 = "_title_1324n_76";
var verifiedIcon = "_verifiedIcon_1324n_87";
var description$2 = "_description_1324n_93";
var action = "_action_1324n_98";
var statusMarker = "_statusMarker_1324n_105";
var statusIconConnected = "_statusIconConnected_1324n_115";
var statusIconDisconnected = "_statusIconDisconnected_1324n_116";
var disabledMarker = "_disabledMarker_1324n_120";
var ToolRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	rowDisabled,
	mainAction,
	"row--workflow": "_row--workflow_1324n_44",
	workflowIcon,
	text,
	workflowTitle,
	workflowWarning,
	titleRow,
	title: title$2,
	verifiedIcon,
	description: description$2,
	action,
	statusMarker,
	statusIconConnected,
	statusIconDisconnected,
	disabledMarker
};
var ToolRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/DefaultDetailBody.vue?vue&type=script&setup=true&lang.ts
var DefaultDetailBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultDetailBody",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const hasContent = computed(() => Boolean(props.item.longDescription));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-default-detail-body"
			}, [hasContent.value ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.description)
			}, toDisplayString(__props.item.longDescription), 3)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.placeholder),
				"data-test-id": "tools-connection-detail-placeholder"
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.noAdditionalDetails")), 1)]),
				_: 1
			})], 2))], 2);
		};
	}
});
var DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_15856_1",
	description: "_description_15856_6",
	placeholder: "_placeholder_15856_13"
};
var DefaultDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/McpDetailBody.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["href"];
var _hoisted_2$1 = ["href"];
var McpDetailBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpDetailBody",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const readTools = computed(() => props.item.availableTools.filter((tool) => tool.category === "read"));
		const writeTools = computed(() => props.item.availableTools.filter((tool) => tool.category === "write"));
		const otherTools = computed(() => props.item.availableTools.filter((tool) => tool.category === void 0));
		const hasMetadata = computed(() => Boolean(props.item.publisher) || Boolean(props.item.version) || Boolean(props.item.docsUrl));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				__props.item.longDescription ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.description)
				}, toDisplayString(__props.item.longDescription), 3)) : createCommentVNode("", true),
				hasMetadata.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.metadata),
					"data-test-id": "tools-connection-detail-metadata"
				}, [
					__props.item.publisher ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.publisher")), 1)]),
						_: 1
					}, 8, ["class"]), __props.item.publisher.url ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: __props.item.publisher.url,
						target: "_blank",
						rel: "noopener noreferrer",
						class: normalizeClass(_ctx.$style.metadataLink)
					}, toDisplayString(__props.item.publisher.name), 11, _hoisted_1$2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.publisher.name), 1)]),
						_: 1
					}))], 2)) : createCommentVNode("", true),
					__props.item.version ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.version")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.version), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					__props.item.docsUrl ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.moreInfo")), 1)]),
						_: 1
					}, 8, ["class"]), createBaseVNode("a", {
						href: __props.item.docsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						class: normalizeClass(_ctx.$style.metadataLink)
					}, toDisplayString(unref(i18n).baseText("tools.connection.detail.docs")), 11, _hoisted_2$1)], 2)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true),
				hasMetadata.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.divider)
				}, null, 2)) : createCommentVNode("", true),
				readTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 3,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.readTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(readTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-read-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(readTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				writeTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 4,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.writeTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(writeTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-write-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(writeTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				otherTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 5,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.otherTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(otherTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-other-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(otherTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var McpDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_xvv0n_1",
	description: "_description_xvv0n_7",
	metadata: "_metadata_xvv0n_14",
	metadataCell: "_metadataCell_xvv0n_19",
	metadataLabel: "_metadataLabel_xvv0n_26",
	metadataLink: "_metadataLink_xvv0n_32",
	divider: "_divider_xvv0n_41",
	toolsSection: "_toolsSection_xvv0n_46",
	toolsHeader: "_toolsHeader_xvv0n_52",
	toolsLabel: "_toolsLabel_xvv0n_58",
	toolsCount: "_toolsCount_xvv0n_64",
	chipList: "_chipList_xvv0n_78",
	chip: "_chip_xvv0n_78"
};
var McpDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolDetailView.vue?vue&type=script&setup=true&lang.ts
var ToolDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolDetailView",
	props: {
		item: {},
		hideBackButton: { type: Boolean }
	},
	emits: [
		"back",
		"close",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const placeholderIcon = computed(() => {
			switch (props.item.kind) {
				case "service":
				case "mcp-server": return "plug";
				case "workflow": return "workflow";
				case "agent": return "bot";
				case "data-store": return "database";
				default: return "toolbox";
			}
		});
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-detail"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [
				!__props.hideBackButton ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "arrow-left",
					variant: "ghost",
					size: "medium",
					"aria-label": unref(i18n).baseText("tools.connection.detail.back"),
					"data-test-id": "tools-connection-detail-back",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
				}, null, 8, ["aria-label"])) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.iconWrapper),
					"aria-hidden": "true"
				}, [resolvedIcon.value ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
					key: 0,
					type: resolvedIcon.value.type,
					src: resolvedIcon.value.type === "file" ? resolvedIcon.value.src : void 0,
					name: resolvedIcon.value.type === "icon" ? resolvedIcon.value.name : void 0,
					color: resolvedIcon.value.type === "icon" ? resolvedIcon.value.color : void 0,
					size: 20
				}, null, 8, [
					"type",
					"src",
					"name",
					"color"
				])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: placeholderIcon.value,
					size: 20,
					class: normalizeClass(_ctx.$style.iconFallback)
				}, null, 8, ["icon", "class"]))], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					tag: "h2",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
					_: 1
				}, 8, ["class"])
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [__props.item.credentials?.length ? (openBlock(), createBlock(ToolCredentialPicker_default, {
				key: 0,
				item: __props.item,
				credentials: __props.item.credentials,
				onSelectCredential: _cache[1] || (_cache[1] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
				onCredentialDropdownOpen: _cache[2] || (_cache[2] = ($event) => emit("credential-dropdown-open", $event)),
				onFirstCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("first-credential-connect", $event)),
				onNewCredentialConnect: _cache[4] || (_cache[4] = ($event) => emit("new-credential-connect", $event))
			}, null, 8, ["item", "credentials"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				size: "medium",
				"aria-label": unref(i18n).baseText("tools.connection.action.close"),
				"data-test-id": "tools-connection-detail-close",
				onClick: _cache[5] || (_cache[5] = ($event) => emit("close"))
			}, null, 8, ["aria-label"])], 2)], 2), renderSlot(_ctx.$slots, "body", { item: __props.item }, () => [__props.item.kind === "mcp-server" ? (openBlock(), createBlock(McpDetailBody_default, {
				key: 0,
				item: __props.item
			}, null, 8, ["item"])) : (openBlock(), createBlock(DefaultDetailBody_default, {
				key: 1,
				item: __props.item
			}, null, 8, ["item"]))])], 2);
		};
	}
});
var ToolDetailView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_19r5e_1",
	header: "_header_19r5e_7",
	headerLeft: "_headerLeft_19r5e_14",
	headerActions: "_headerActions_19r5e_22",
	iconWrapper: "_iconWrapper_19r5e_29",
	iconFallback: "_iconFallback_19r5e_39",
	title: "_title_19r5e_43"
};
var ToolDetailView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolDetailView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolSettingsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-selected"];
var _hoisted_2 = ["aria-selected"];
var ToolSettingsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsView",
	props: {
		item: {},
		hideBackButton: { type: Boolean }
	},
	emits: [
		"back",
		"close",
		"disconnect",
		"save",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		const activeTab = ref("settings");
		function onSave(settings) {
			emit("save", props.item, settings);
		}
		function onDisconnect() {
			emit("disconnect", props.item);
		}
		function onClose() {
			emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-settings"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [
					!__props.hideBackButton ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						icon: "arrow-left",
						variant: "ghost",
						size: "medium",
						class: normalizeClass(_ctx.$style.backButton),
						"aria-label": unref(i18n).baseText("tools.connection.detail.back"),
						"data-test-id": "tools-connection-settings-back",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
					}, null, 8, ["class", "aria-label"])) : createCommentVNode("", true),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.iconWrapper),
						"aria-hidden": "true"
					}, [resolvedIcon.value ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
						key: 0,
						type: resolvedIcon.value.type,
						src: resolvedIcon.value.type === "file" ? resolvedIcon.value.src : void 0,
						name: resolvedIcon.value.type === "icon" ? resolvedIcon.value.name : void 0,
						color: resolvedIcon.value.type === "icon" ? resolvedIcon.value.color : void 0,
						size: 20
					}, null, 8, [
						"type",
						"src",
						"name",
						"color"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "plug",
						size: 20,
						class: normalizeClass(_ctx.$style.iconFallback)
					}, null, 8, ["class"]))], 2),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
						_: 1
					}, 8, ["class"])
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [__props.item.credentials?.length ? (openBlock(), createBlock(ToolCredentialPicker_default, {
					key: 0,
					item: __props.item,
					credentials: __props.item.credentials,
					onSelectCredential: _cache[1] || (_cache[1] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
					onCredentialDropdownOpen: _cache[2] || (_cache[2] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[4] || (_cache[4] = ($event) => emit("new-credential-connect", $event))
				}, null, 8, ["item", "credentials"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "medium",
					"aria-label": unref(i18n).baseText("tools.connection.action.close"),
					"data-test-id": "tools-connection-settings-close",
					onClick: onClose
				}, null, 8, ["aria-label"])], 2)], 2),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.tabs),
					role: "tablist"
				}, [createBaseVNode("button", {
					type: "button",
					role: "tab",
					class: normalizeClass([_ctx.$style.tab, { [_ctx.$style.tabActive]: activeTab.value === "settings" }]),
					"aria-selected": activeTab.value === "settings",
					"data-test-id": "tools-connection-settings-tab-settings",
					onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "settings")
				}, toDisplayString(unref(i18n).baseText("tools.connection.tabs.settings")), 11, _hoisted_1$1), createBaseVNode("button", {
					type: "button",
					role: "tab",
					class: normalizeClass([_ctx.$style.tab, { [_ctx.$style.tabActive]: activeTab.value === "details" }]),
					"aria-selected": activeTab.value === "details",
					"data-test-id": "tools-connection-settings-tab-details",
					onClick: _cache[6] || (_cache[6] = ($event) => activeTab.value = "details")
				}, toDisplayString(unref(i18n).baseText("tools.connection.tabs.details")), 11, _hoisted_2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.bodyWrapper) }, [activeTab.value === "settings" ? renderSlot(_ctx.$slots, "body", {
					key: 0,
					item: __props.item,
					onSave,
					onDisconnect,
					onClose
				}) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.item.kind === "mcp-server" ? (openBlock(), createBlock(McpDetailBody_default, {
					key: 0,
					item: __props.item
				}, null, 8, ["item"])) : (openBlock(), createBlock(DefaultDetailBody_default, {
					key: 1,
					item: __props.item
				}, null, 8, ["item"]))], 64))], 2)
			], 2);
		};
	}
});
var ToolSettingsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_xn4rj_1",
	header: "_header_xn4rj_8",
	headerLeft: "_headerLeft_xn4rj_15",
	headerActions: "_headerActions_xn4rj_23",
	iconWrapper: "_iconWrapper_xn4rj_30",
	iconFallback: "_iconFallback_xn4rj_40",
	title: "_title_xn4rj_44",
	tabs: "_tabs_xn4rj_53",
	tab: "_tab_xn4rj_53",
	tabActive: "_tabActive_xn4rj_79",
	bodyWrapper: "_bodyWrapper_xn4rj_84"
};
var ToolSettingsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolSettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolsConnectionModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"disabled",
	"aria-busy",
	"data-test-id"
];
var ITEM_HEIGHT = 58;
var MAX_DISPLAYED_COUNT = 99;
var ToolsConnectionModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsConnectionModal",
	props: {
		open: {
			type: Boolean,
			default: false
		},
		items: {},
		categories: {},
		title: {},
		searchPlaceholder: {},
		detailItem: { default: null },
		detailMode: { default: "detail" },
		hideBackButton: { type: Boolean },
		size: { default: "xlarge" },
		createAction: { default: void 0 },
		createActionLoading: {
			type: Boolean,
			default: false
		},
		emptyMessage: { default: void 0 },
		noResultsMessage: { default: void 0 },
		embedded: {
			type: Boolean,
			default: false
		},
		showConnectActions: {
			type: Boolean,
			default: false
		},
		persistentScrollbar: {
			type: Boolean,
			default: false
		},
		connectLabel: {},
		connectAriaLabel: {},
		connectedLabel: {}
	},
	emits: [
		"update:open",
		"update:searchQuery",
		"update:detailItem",
		"disconnect",
		"save",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect",
		"open-detail",
		"connect",
		"create"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const modalTitle = computed(() => props.title ?? i18n.baseText("tools.connection.title"));
		const containerComponent = computed(() => props.embedded ? "div" : Dialog_default);
		const containerProps = computed(() => props.embedded ? {} : {
			open: props.open,
			size: props.size,
			header: props.detailItem ? "" : modalTitle.value,
			showCloseButton: !props.detailItem,
			"aria-label": modalTitle.value
		});
		const searchPlaceholder = computed(() => props.searchPlaceholder ?? i18n.baseText("tools.connection.search.placeholder"));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const setDebouncedSearch = useDebounceFn((value) => {
			debouncedSearchQuery.value = value;
			emit("update:searchQuery", value);
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(searchQuery, (value) => {
			setDebouncedSearch(value);
		});
		const activeCategory = ref(props.categories[0] ?? "connected");
		const isMcpCategory = computed(() => activeCategory.value === "mcp");
		const searchInputRef = useTemplateRef("searchInputRef");
		const scrollerRef = useTemplateRef("scrollerRef");
		function focusSearchInput() {
			nextTick(() => {
				searchInputRef.value?.focus();
			});
		}
		/**
		* Search text and active tab live as long as this component, which a consumer
		* mounts for exactly one modal session — so stepping aside for a follow-up
		* dialog leaves them intact. The scroll offset does not survive on its own:
		* the dialog content unmounts while hidden, so carry it across by hand.
		*/
		const savedScrollTop = ref(0);
		watch(() => props.open, async (isOpen) => {
			if (!isOpen) {
				savedScrollTop.value = scrollerRef.value?.scrollTop ?? 0;
				return;
			}
			focusSearchInput();
			await nextTick();
			scrollerRef.value?.scrollTo(savedScrollTop.value);
		});
		onMounted(() => {
			if (props.open) focusSearchInput();
		});
		const normalizedSearchQuery = computed(() => debouncedSearchQuery.value.trim());
		const hasActiveSearch = computed(() => normalizedSearchQuery.value.length > 0);
		function matchesQuery(item) {
			if (!normalizedSearchQuery.value) return true;
			const query = normalizedSearchQuery.value.toLowerCase();
			return item.title.toLowerCase().includes(query) || (item.description ?? "").toLowerCase().includes(query);
		}
		const hasConnectedTab = computed(() => props.categories.includes("connected"));
		function categoryOf(item) {
			return item.category ?? CATEGORY_BY_KIND[item.kind];
		}
		/**
		* "All" ranks connected tools first, then those backed by n8n credits, then the
		* rest — so the most immediately usable tools sit on top. Lower rank sorts first.
		*/
		function allSortRank(item) {
			if (hasToolConnection(item.status)) return 0;
			if (item.freeCredits) return 1;
			return 2;
		}
		function itemsForCategory(category) {
			if (category === "all") return [...props.items].sort((a, b) => allSortRank(a) - allSortRank(b));
			if (category === "connected") return props.items.filter((item) => hasToolConnection(item.status));
			return props.items.filter((item) => categoryOf(item) === category && (hasConnectedTab.value ? !hasToolConnection(item.status) : true));
		}
		const countByCategory = computed(() => {
			const counts = {};
			for (const category of props.categories) counts[category] = itemsForCategory(category).filter(matchesQuery).length;
			return counts;
		});
		/** Past this the exact number stops being useful and starts crowding the tab. */
		function tabCount(category) {
			const count = countByCategory.value[category] ?? 0;
			return count > MAX_DISPLAYED_COUNT ? `${MAX_DISPLAYED_COUNT}+` : String(count);
		}
		const toolRows = computed(() => itemsForCategory(activeCategory.value).filter(matchesQuery).map((item) => ({
			key: `item:${item.id}`,
			item
		})));
		const flattenedRows = computed(() => isMcpCategory.value ? [...toolRows.value, { key: "suggestion" }] : toolRows.value);
		/** Categories only worth a tab once they hold something. */
		const HIDE_WHEN_EMPTY = ["community"];
		/**
		* Deliberately independent of the search query, so the tab strip stays put
		* while typing and the counts alone show where the matches are.
		*/
		const visibleCategories = computed(() => props.categories.filter((category) => !HIDE_WHEN_EMPTY.includes(category) || itemsForCategory(category).length > 0));
		const tabsVisible = computed(() => props.categories.length > 1 && visibleCategories.value.length > 0);
		async function selectCategory(category) {
			activeCategory.value = category;
			await nextTick();
			const firstKey = flattenedRows.value[0]?.key;
			if (firstKey) scrollerRef.value?.scrollToKey(firstKey);
		}
		const CATEGORY_I18N = {
			all: "tools.connection.categories.all",
			connected: "tools.connection.categories.connected",
			"built-in": "tools.connection.categories.builtIn",
			mcp: "tools.connection.categories.mcp",
			ai: "tools.connection.categories.ai",
			n8n: "tools.connection.categories.n8n",
			"n8n-connect": "tools.connection.categories.n8nConnect",
			"app-action": "tools.connection.categories.appAction",
			community: "tools.connection.categories.community",
			workflows: "tools.connection.categories.workflows",
			agents: "tools.connection.categories.agents",
			data: "tools.connection.categories.data"
		};
		function categoryLabel(category) {
			return i18n.baseText(CATEGORY_I18N[category]);
		}
		/**
		* The count rides in the label rather than `tag`, which would render a chip per
		* tab — far louder than a muted number next to the name.
		*/
		const tabOptions = computed(() => visibleCategories.value.map((category) => ({
			value: category,
			label: `${categoryLabel(category)} (${tabCount(category)})`
		})));
		watch(visibleCategories, (categories) => {
			if (categories.length > 0 && !categories.includes(activeCategory.value)) activeCategory.value = categories[0];
		});
		const isListEmpty = computed(() => toolRows.value.length === 0);
		const resolvedEmptyMessage = computed(() => {
			if (hasActiveSearch.value) {
				if (props.noResultsMessage) return props.noResultsMessage;
				return i18n.baseText("tools.connection.empty.noResults", { interpolate: { query: normalizedSearchQuery.value } });
			}
			return props.emptyMessage ?? i18n.baseText("tools.connection.empty.title");
		});
		const showCreateAction = computed(() => props.createAction?.category === activeCategory.value);
		function openDetail(item) {
			emit("open-detail", item);
			emit("update:detailItem", item);
		}
		function closeDetail() {
			emit("update:detailItem", null);
		}
		function handleOpenChange(value) {
			emit("update:open", value);
			if (!value) closeDetail();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(containerComponent.value), mergeProps(containerProps.value, {
				class: props.embedded && _ctx.$style.embedded,
				"data-test-id": "tools-connection-modal",
				"onUpdate:open": handleOpenChange
			}), {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [__props.detailItem && __props.detailMode === "settings" ? (openBlock(), createBlock(ToolSettingsView_default, {
					key: __props.detailItem.id,
					item: __props.detailItem,
					"hide-back-button": __props.hideBackButton,
					onBack: closeDetail,
					onClose: _cache[0] || (_cache[0] = ($event) => handleOpenChange(false)),
					onDisconnect: _cache[1] || (_cache[1] = ($event) => emit("disconnect", $event)),
					onSave: _cache[2] || (_cache[2] = (item, settings) => emit("save", item, settings)),
					onSelectCredential: _cache[3] || (_cache[3] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
					onCredentialDropdownOpen: _cache[4] || (_cache[4] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[5] || (_cache[5] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[6] || (_cache[6] = ($event) => emit("new-credential-connect", $event))
				}, createSlots({ _: 2 }, [_ctx.$slots["settings-body"] ? {
					name: "body",
					fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "settings-body", normalizeProps(guardReactiveProps(slotProps)))]),
					key: "0"
				} : void 0]), 1032, ["item", "hide-back-button"])) : __props.detailItem ? (openBlock(), createBlock(ToolDetailView_default, {
					key: 1,
					item: __props.detailItem,
					"hide-back-button": __props.hideBackButton,
					onBack: closeDetail,
					onClose: _cache[7] || (_cache[7] = ($event) => handleOpenChange(false)),
					onSelectCredential: _cache[8] || (_cache[8] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
					onCredentialDropdownOpen: _cache[9] || (_cache[9] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[10] || (_cache[10] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[11] || (_cache[11] = ($event) => emit("new-credential-connect", $event))
				}, createSlots({ _: 2 }, [_ctx.$slots["detail-body"] ? {
					name: "body",
					fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "detail-body", normalizeProps(guardReactiveProps(slotProps)))]),
					key: "0"
				} : void 0]), 1032, ["item", "hide-back-button"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createVNode(unref(Input_default), {
						ref_key: "searchInputRef",
						ref: searchInputRef,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => searchQuery.value = $event),
						placeholder: searchPlaceholder.value,
						clearable: "",
						"data-test-id": "tools-connection-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"class"
					]),
					tabsVisible.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
						key: 0,
						"model-value": activeCategory.value,
						options: tabOptions.value,
						size: "small",
						variant: "modern",
						justified: "",
						class: normalizeClass(_ctx.$style.tabs),
						"data-test-id": "tools-connection-tabs",
						"onUpdate:modelValue": selectCategory
					}, null, 8, [
						"model-value",
						"options",
						"class"
					])) : createCommentVNode("", true),
					showCreateAction.value && __props.createAction ? (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						class: normalizeClass(_ctx.$style.createRow),
						disabled: __props.createActionLoading,
						"aria-busy": __props.createActionLoading,
						"data-test-id": __props.createAction.testId ?? "tools-connection-create",
						onClick: _cache[13] || (_cache[13] = ($event) => emit("create"))
					}, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.createIcon),
						"aria-hidden": "true"
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.createActionLoading ? "loader-circle" : "plus",
						size: 20,
						spin: __props.createActionLoading
					}, null, 8, ["icon", "spin"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.createText) }, [createVNode(unref(N8nText_default), {
						tag: "span",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.createAction.label), 1)]),
						_: 1
					}), __props.createAction.description ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						tag: "span",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.createAction.description), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)], 10, _hoisted_1)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.listWrapper) }, [isListEmpty.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.empty),
						"data-test-id": "tools-connection-empty"
					}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(resolvedEmptyMessage.value), 1)]),
						_: 1
					})], 2), isMcpCategory.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.suggestionRow)
					}, [renderSlot(_ctx.$slots, "suggestion-footer")], 2)) : createCommentVNode("", true)], 64)) : (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
						key: 1,
						ref_key: "scrollerRef",
						ref: scrollerRef,
						items: flattenedRows.value,
						"item-size": ITEM_HEIGHT,
						"item-key": "key",
						class: normalizeClass([_ctx.$style.scroller, __props.persistentScrollbar && _ctx.$style.persistentScrollbar])
					}, {
						default: withCtx(({ item: row }) => ["item" in row ? (openBlock(), createBlock(ToolRow_default, {
							key: 0,
							item: row.item,
							"show-connect-action": props.showConnectActions,
							"connect-label": props.connectLabel?.(row.item),
							"connect-aria-label": props.connectAriaLabel?.(row.item),
							"connected-label": props.connectedLabel?.(row.item),
							onOpenDetail: _cache[14] || (_cache[14] = ($event) => openDetail($event)),
							onConnect: _cache[15] || (_cache[15] = ($event) => emit("connect", $event)),
							onSelectCredential: _cache[16] || (_cache[16] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
							onCredentialDropdownOpen: _cache[17] || (_cache[17] = ($event) => emit("credential-dropdown-open", $event)),
							onFirstCredentialConnect: _cache[18] || (_cache[18] = ($event) => emit("first-credential-connect", $event)),
							onNewCredentialConnect: _cache[19] || (_cache[19] = ($event) => emit("new-credential-connect", $event))
						}, null, 8, [
							"item",
							"show-connect-action",
							"connect-label",
							"connect-aria-label",
							"connected-label"
						])) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.suggestionRow)
						}, [renderSlot(_ctx.$slots, "suggestion-footer")], 2))]),
						_: 3
					}, 8, ["items", "class"]))], 2)
				], 64))], 2)]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
var ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_12ugx_121",
	embedded: "_embedded_12ugx_129",
	searchInput: "_searchInput_12ugx_137",
	tabs: "_tabs_12ugx_148",
	createRow: "_createRow_12ugx_153",
	createIcon: "_createIcon_12ugx_179",
	createText: "_createText_12ugx_189",
	listWrapper: "_listWrapper_12ugx_196",
	scroller: "_scroller_12ugx_205",
	persistentScrollbar: "_persistentScrollbar_12ugx_210",
	empty: "_empty_12ugx_233",
	suggestionRow: "_suggestionRow_12ugx_242"
};
var ToolsConnectionModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolsConnectionModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpDetailBody_default as n, DefaultDetailBody_default as r, ToolsConnectionModal_default as t };

import { Bd as createTextVNode, Bf as unref, Fd as createBlock, Id as createCommentVNode, Mf as ref, Nd as computed, Rd as createSlots, Ud as defineComponent, Vd as createVNode, af as openBlock, bf as withCtx, fp as toDisplayString } from "./vendor-LwB6jUFW.js";
import { Dw as useI18n, Fp as useUIStore, Ir as toolRefToNode, vw as N8nButton_default, yw as N8nIcon_default } from "./app-6hFiMIk3.js";
import { t as AgentModal_default } from "./AgentModal-CYxr4Ph3.js";
import { t as AgentToolConfigForm_default } from "./AgentToolConfigForm-Dqpha4Ad.js";
//#endregion
//#region src/features/agents/components/AgentToolConfigModal.vue
var AgentToolConfigModal_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AgentToolConfigModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const form = ref(null);
		const credentialModalOpen = ref(false);
		const title = ref(initialTitle());
		const isOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const isCustomTool = computed(() => props.data.kind !== "mcpServer" && props.data.toolRef.type === "custom");
		const canRender = computed(() => {
			if (props.data.kind === "mcpServer") return Boolean(props.data.initialNode);
			if (props.data.toolRef.type === "custom" || props.data.toolRef.type === "workflow") return true;
			return toolRefToNode(props.data.toolRef) !== null;
		});
		const removeLabel = computed(() => {
			if (props.data.kind === "mcpServer") return i18n.baseText("agents.builder.tools.mcp.remove");
			if (props.data.toolRef.type === "workflow") return i18n.baseText("agents.builder.tools.workflow.remove");
			return i18n.baseText("agents.builder.tools.remove");
		});
		function initialTitle() {
			if (props.data.kind === "mcpServer") return props.data.mcpServer.name;
			if (props.data.toolRef.type === "custom") return props.data.customTool?.descriptor.name ?? props.data.toolRef.id;
			return props.data.toolRef.name ?? "";
		}
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function onOpenChange(open) {
			if (!open) closeDialog();
		}
		function handleInteractOutside(event) {
			if (credentialModalOpen.value) event.preventDefault();
		}
		function updateTitle(value) {
			title.value = value;
			form.value?.changeTitle(value);
		}
		function handleConfirm() {
			if (form.value?.confirm()) closeDialog();
		}
		function handleRemove() {
			form.value?.remove();
			closeDialog();
		}
		return (_ctx, _cache) => {
			return canRender.value ? (openBlock(), createBlock(AgentModal_default, {
				key: 0,
				open: isOpen.value,
				title: title.value,
				"editable-title": !isCustomTool.value,
				"trap-focus": !credentialModalOpen.value,
				"disable-outside-pointer-events": !credentialModalOpen.value,
				"data-testid": "agent-tool-config-modal",
				onInteractOutside: handleInteractOutside,
				"onUpdate:open": onOpenChange,
				"onUpdate:title": updateTitle
			}, createSlots({
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					"data-testid": "agent-tool-config-save",
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(AgentToolConfigForm_default, {
					ref_key: "form",
					ref: form,
					data: __props.data,
					"onUpdate:title": _cache[0] || (_cache[0] = ($event) => title.value = $event),
					"onUpdate:credentialModalOpen": _cache[1] || (_cache[1] = ($event) => credentialModalOpen.value = $event)
				}, null, 8, ["data"])]),
				_: 2
			}, [__props.data.onRemove ? {
				name: "footerLeft",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					"data-testid": "agent-tool-config-remove",
					onClick: handleRemove
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "trash-2",
						size: 16
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(removeLabel.value), 1)]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1032, [
				"open",
				"title",
				"editable-title",
				"trap-focus",
				"disable-outside-pointer-events"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { AgentToolConfigModal_default as default };

import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, H as mergeModels, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, dt as useModel, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { xt as useI18n } from "./_MapCache-CVjD7lfb.js";
import { $i as N8nIcon_default, At as createEventBus, Et as N8nOption_default, K as N8nNotice_default, Qi as N8nButton_default, Tt as N8nSelect_default } from "./src-DI71_LGY.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Tr as useToast, en as useTelemetry } from "./users.store-BMJ9fc-u.js";
import "./constants-BVqqmrz5.js";
import "./merge-DEVXSdfC.js";
import "./_baseOrderBy-CrD5hJjV.js";
import "./banners.store-GgJFEwRP.js";
import "./dateformat-LXsrXDXe.js";
import "./useDebounce-BCW--JMK.js";
import "./versions.store-bVafcXwz.js";
import "./dataTable.store-BPntPlM6.js";
import { t as Modal_default } from "./Modal-CGL2aG6V.js";
import "./executions.store-HTiT_ST0.js";
import "./usePinnedData-DeK1lmat.js";
import "./nodeIcon-ByXH4W6J.js";
import "./canvas.utils-HRVIUNJr.js";
import "./canvas.eventBus-C7jRWIn-.js";
import "./useCanvasOperations-hI6y40Pq.js";
import "./setupPanel.store-CbWq_6AQ.js";
import "./nodeTransforms-BHqkOPk4.js";
import "./templateTransforms-BwT8lyVB.js";
import "./useDynamicCredentials-CdgXtuyk.js";
import "./NodeIcon-B7_ESjJa.js";
import "./roles.store-LcZ19HRT.js";
import "./dist-BhH95MLZ.js";
import "./sso.store-Db6MBS3V.js";
import "./router-DpRUtFeD.js";
import "./insights.store-Dk183Xl-.js";
import "./insights.constants-CwA2b-bC.js";
import "./insights.utils-BPzCDciv.js";
import { a as MCP_DOCS_PAGE_URL, i as MCP_CONNECT_WORKFLOWS_MODAL_KEY, n as LOADING_INDICATOR_TIMEOUT, t as ELIGIBLE_WORKFLOWS_DOCS_SECTION } from "./mcp.constants-Cru2b8E2.js";
import { t as useMCPStore } from "./mcp.store-CMNY_Q_I.js";
import { t as WorkflowLocation_default } from "./WorkflowLocation-BDSAuwQ_.js";
var MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPWorkflowsSelect",
	props: /* @__PURE__ */ mergeModels({
		placeholder: {},
		disabled: { type: Boolean }
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["ready", "confirm"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const i18n = useI18n();
		const toast = useToast();
		const modelValue = useModel(__props, "modelValue");
		const emit = __emit;
		const mcpStore = useMCPStore();
		const isLoading = ref(false);
		const hasFetched = ref(false);
		const isDropdownVisible = ref(false);
		const selectRef = ref();
		const workflowOptions = ref([]);
		let loadingTimeoutId = null;
		const showEmptyState = computed(() => {
			return !isLoading.value && hasFetched.value && workflowOptions.value.length === 0;
		});
		async function searchWorkflows(query) {
			if (loadingTimeoutId) {
				clearTimeout(loadingTimeoutId);
				loadingTimeoutId = null;
			}
			isLoading.value = true;
			hasFetched.value = false;
			try {
				workflowOptions.value = (await mcpStore.getMcpEligibleWorkflows({
					take: 10,
					query: query ?? void 0
				}))?.data ?? [];
			} catch (e) {
				toast.showError(e, i18n.baseText("settings.mcp.connectWorkflows.error"));
			} finally {
				await waitFor(200);
				isLoading.value = false;
				hasFetched.value = true;
			}
		}
		async function waitFor(timeout) {
			await new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, timeout);
			});
		}
		function focusOnInput() {
			selectRef.value?.focusOnInput();
		}
		function removeOption(value) {
			workflowOptions.value = workflowOptions.value.filter((option) => option.id !== value);
		}
		function onVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		function onKeydownCapture(event) {
			if (event.key === "Enter" && !isDropdownVisible.value && modelValue.value) {
				event.preventDefault();
				event.stopPropagation();
				emit("confirm");
			}
		}
		onMounted(async () => {
			await searchWorkflows();
			emit("ready");
		});
		__expose({
			focusOnInput,
			removeOption
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { onKeydownCapture: withKeys(onKeydownCapture, ["enter"]) }, [createVNode(unref(N8nSelect_default), {
				ref_key: "selectRef",
				ref: selectRef,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				"data-test-id": "mcp-workflows-select",
				placeholder: __props.placeholder,
				disabled: __props.disabled,
				loading: isLoading.value,
				filterable: true,
				remote: true,
				"remote-method": searchWorkflows,
				"popper-class": {
					[_ctx.$style["mcp-workflows-select-loading"]]: isLoading.value,
					[_ctx.$style["mcp-workflows-select-empty"]]: showEmptyState.value
				},
				onVisibleChange
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style["search-icon"]),
					icon: "search",
					size: "large"
				}, null, 8, ["class"])]),
				default: withCtx(() => [showEmptyState.value ? (openBlock(), createBlock(unref(N8nOption_default), {
					key: 0,
					value: "",
					disabled: "",
					class: normalizeClass(_ctx.$style["empty-option"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectWorkflows.emptyState")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(workflowOptions.value, (workflow) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: workflow.id,
						value: workflow.id,
						label: workflow.name
					}, {
						default: withCtx(() => [createVNode(WorkflowLocation_default, {
							"workflow-id": workflow.id,
							"workflow-name": workflow.name,
							"home-project": workflow.homeProject,
							"parent-folder": workflow.parentFolder
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"home-project",
							"parent-folder"
						])]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"placeholder",
				"disabled",
				"loading",
				"popper-class"
			])], 32);
		};
	}
});
var MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default = {
	"mcp-workflows-select-loading": "_mcp-workflows-select-loading_eulzw_125",
	"mcp-workflows-select-empty": "_mcp-workflows-select-empty_eulzw_126",
	"empty-option": "_empty-option_eulzw_133"
};
var MCPWorkflowsSelect_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default }]]);
var MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectWorkflowsModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isSaving = ref(false);
		const selectedWorkflowId = ref();
		const selectRef = ref(null);
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const docsLink = `${MCP_DOCS_PAGE_URL}#${ELIGIBLE_WORKFLOWS_DOCS_SECTION}`;
		const canSave = computed(() => !!selectedWorkflowId.value);
		const cancel = (close) => {
			closedByAction.value = true;
			telemetry.track("User dismissed mcp workflows dialog");
			close();
		};
		async function save(close) {
			if (!selectedWorkflowId.value) return;
			isSaving.value = true;
			try {
				await props.data.onEnableMcpAccess(selectedWorkflowId.value);
				closedByAction.value = true;
				telemetry.track("User selected workflow from list", { workflowId: selectedWorkflowId.value });
				close();
			} finally {
				isSaving.value = false;
			}
		}
		function onModalClosed() {
			if (!closedByAction.value) telemetry.track("User dismissed mcp workflows dialog");
		}
		function onSelectReady() {
			selectRef.value?.focusOnInput();
		}
		function onConfirm() {
			if (!isSaving.value) save(() => modalBus.emit("close"));
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(MCP_CONNECT_WORKFLOWS_MODAL_KEY),
				title: unref(i18n).baseText("settings.mcp.connectWorkflows.modalTitle"),
				width: "600px",
				class: normalizeClass(_ctx.$style.container),
				"event-bus": unref(modalBus)
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nNotice_default), {
					"data-test-id": "mcp-connect-workflows-info-notice",
					theme: "info",
					content: unref(i18n).baseText("settings.mcp.connectWorkflows.notice", { interpolate: { docsLink } }),
					class: normalizeClass(_ctx.$style.notice)
				}, null, 8, ["content", "class"]), createVNode(MCPWorkflowsSelect_default, {
					ref_key: "selectRef",
					ref: selectRef,
					modelValue: selectedWorkflowId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedWorkflowId.value = $event),
					placeholder: unref(i18n).baseText("settings.mcp.connectWorkflows.input.placeholder"),
					disabled: isSaving.value,
					onReady: onSelectReady,
					onConfirm
				}, null, 8, [
					"modelValue",
					"placeholder",
					"disabled"
				])], 2)]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					label: unref(i18n).baseText("generic.cancel"),
					size: "small",
					disabled: isSaving.value,
					"data-test-id": "mcp-connect-workflows-cancel-button",
					onClick: ($event) => cancel(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: unref(i18n).baseText("settings.mcp.connectWorkflows.confirm.label"),
					loading: isSaving.value,
					disabled: !canSave.value || isSaving.value,
					"data-test-id": "mcp-connect-workflows-save-button",
					onClick: ($event) => save(close)
				}, null, 8, [
					"label",
					"loading",
					"disabled",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"class",
				"event-bus"
			]);
		};
	}
});
var MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_lejd8_125",
	content: "_content_lejd8_130",
	notice: "_notice_lejd8_135",
	footer: "_footer_lejd8_142"
};
var MCPConnectWorkflowsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { MCPConnectWorkflowsModal_default as default };

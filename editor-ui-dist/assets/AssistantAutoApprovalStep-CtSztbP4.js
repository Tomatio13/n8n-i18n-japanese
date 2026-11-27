import { Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, wA as AiActivityStep_default, zM as useI18n } from "./app-BXv1VOvT.js";
import { n as autoApprovalReason, t as autoApprovalLabel } from "./autoApproval-DF-5zwLk.js";
import { n as parseAssistantAutoApproval } from "./assistantAutoApproval-rN6J9Dka.js";
//#region src/features/ai/instanceAi/assistantAgent/AssistantAutoApprovalStep.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AssistantAutoApprovalStep_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AssistantAutoApprovalStep",
	props: {
		event: {},
		message: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const approval = computed(() => parseAssistantAutoApproval(props.event));
		return (_ctx, _cache) => {
			return approval.value ? (openBlock(), createBlock(unref(AiActivityStep_default), {
				key: 0,
				label: unref(autoApprovalLabel)(unref(i18n), approval.value),
				"data-test-id": "assistant-auto-approval"
			}, {
				default: withCtx(() => [createBaseVNode("p", { class: normalizeClass(_ctx.$style.reason) }, toDisplayString(unref(autoApprovalReason)(unref(i18n), approval.value)), 3)]),
				_: 1
			}, 8, ["label"])) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": { reason: "_reason_1uhot_1" } }]]);
//#endregion
export { AssistantAutoApprovalStep_default as default };

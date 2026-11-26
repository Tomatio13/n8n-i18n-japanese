import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Rd as createBlock, Tf as withCtx, Ud as createTextVNode, Wd as createVNode, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock, zd as createCommentVNode } from "./vendor-zYfdu4Ed.js";
import { NM as _plugin_vue_export_helper_default, bM as N8nText_default, zM as useI18n } from "./app-B_io1t1X.js";
//#region src/app/composables/useApprovalCardLabels.ts
init_runtime_core_esm_bundler();
function useApprovalCardLabels() {
	const i18n = useI18n();
	return computed(() => ({
		alwaysAllow: i18n.baseText("instanceAi.confirmation.alwaysAllow"),
		alwaysAllowSuffix: i18n.baseText("instanceAi.confirmation.alwaysAllowSuffix"),
		allowOnce: i18n.baseText("instanceAi.confirmation.approve"),
		deny: i18n.baseText("instanceAi.confirmation.deny"),
		allowed: i18n.baseText("instanceAi.confirmation.approved"),
		denied: i18n.baseText("instanceAi.confirmation.denied"),
		args: i18n.baseText("instanceAi.toolCall.input")
	}));
}
//#endregion
//#region src/features/ai/shared/components/ApprovalAskReason.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var ApprovalAskReason_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ApprovalAskReason",
	props: {
		reason: {},
		description: {}
	},
	setup(__props) {
		/**
		* The details of an approval card that the "Approve for me" mode showed: the
		* description of the action, then why the review asked.
		*/
		const props = __props;
		const i18n = useI18n();
		/** The judge explains its own decision. Each fixed cause has one text. */
		const reasonText = computed(() => {
			switch (props.reason.kind) {
				case "judge": return props.reason.text;
				case "always-ask": return i18n.baseText("instanceAi.approvalAskReason.alwaysAsk");
				case "too-long": return i18n.baseText("instanceAi.approvalAskReason.tooLong");
				case "judge-failed": return i18n.baseText("instanceAi.approvalAskReason.judgeFailed");
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				step: "sm",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				tag: "p",
				step: "sm",
				color: "text-light",
				class: normalizeClass(_ctx.$style.reason),
				"data-test-id": "approval-ask-reason"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(reasonText.value), 1)]),
				_: 1
			}, 8, ["class"])]);
		};
	}
}), [["__cssModules", { "$style": {
	description: "_description_ew9qy_2",
	reason: "_reason_ew9qy_6"
} }]]);
//#endregion
export { useApprovalCardLabels as n, ApprovalAskReason_default as t };

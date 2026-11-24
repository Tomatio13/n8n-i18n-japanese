import "./rolldown-runtime-EITvVbkG.js";
import { Bd as createElementBlock, Cd as init_runtime_dom_esm_bundler, Ed as useCssModule, Id as computed, Jf as unref, Kd as defineComponent, Ld as createBaseVNode, Rd as createBlock, Tf as withCtx, Zd as init_runtime_core_esm_bundler, bp as toDisplayString, hp as normalizeClass, jd as withModifiers, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pf as renderSlot, pu as ElTag, uf as openBlock, zd as createCommentVNode, zf as ref } from "./vendor-zYfdu4Ed.js";
import { MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, Oj as N8nLink_default, kM as N8nButton_default, zM as useI18n } from "./app-BJz3tlB7.js";
//#region src/app/components/Banner.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var Banner_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Banner",
	props: {
		theme: {},
		message: {},
		buttonLabel: { default: "" },
		buttonLoadingLabel: { default: "" },
		buttonTitle: { default: "" },
		details: { default: "" },
		buttonLoading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		/**
		* @TODO Move to design system
		*/
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const expanded = ref(false);
		const expand = () => {
			expanded.value = true;
		};
		const onClick = () => {
			expanded.value = false;
			emit("click");
		};
		const $style = useCssModule();
		const icon = computed(() => {
			return {
				success: "circle-check",
				warning: "triangle-alert",
				danger: "triangle-alert",
				info: void 0
			}[props.theme];
		});
		const iconClass = computed(() => ({
			success: $style.icon,
			warning: $style.warningIcon,
			danger: $style.dangerIcon,
			info: $style.icon
		}));
		const messageClass = computed(() => ({
			success: $style.message,
			warning: $style.warningMessage,
			danger: $style.dangerMessage,
			info: $style.infoMessage
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElTag), {
				type: __props.theme,
				"disable-transitions": true,
				class: normalizeClass([unref($style).container, __props.theme === "info" && unref($style).containerInfo])
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).banner) }, [createBaseVNode("div", { class: normalizeClass(unref($style).content) }, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(unref($style).messageRow) }, [
					icon.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: icon.value,
						class: normalizeClass(iconClass.value[props.theme])
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(messageClass.value[props.theme]) }, toDisplayString(__props.message) + "\xA0 ", 3),
					__props.details && !expanded.value ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 1,
						bold: true,
						size: "small",
						onClick: expand
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).moreDetails) }, toDisplayString(unref(i18n).baseText("generic.moreDetails")), 3)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([unref($style).subtitle, icon.value && unref($style).subtitleWithIcon])
				}, [renderSlot(_ctx.$slots, "subtitle")], 2)) : createCommentVNode("", true)])], 2), _ctx.$slots.button ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).actions)
				}, [renderSlot(_ctx.$slots, "button")], 2)) : __props.buttonLabel ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "outline",
					class: normalizeClass(unref($style).actions),
					label: __props.buttonLoading && __props.buttonLoadingLabel ? __props.buttonLoadingLabel : __props.buttonLabel,
					title: __props.buttonTitle,
					loading: __props.buttonLoading,
					size: "small",
					onClick: withModifiers(onClick, ["stop"])
				}, null, 8, [
					"class",
					"label",
					"title",
					"loading"
				])) : createCommentVNode("", true)], 2), expanded.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).details)
				}, toDisplayString(__props.details), 3)) : createCommentVNode("", true)]),
				_: 3
			}, 8, ["type", "class"]);
		};
	}
}), [["__cssModules", { "$style": {
	icon: "_icon_c2erk_1",
	dangerIcon: "_dangerIcon_c2erk_5 _icon_c2erk_1",
	warningIcon: "_warningIcon_c2erk_10 _icon_c2erk_1",
	container: "_container_c2erk_15",
	containerInfo: "_containerInfo_c2erk_21",
	message: "_message_c2erk_26",
	dangerMessage: "_dangerMessage_c2erk_33 _message_c2erk_26",
	warningMessage: "_warningMessage_c2erk_38 _message_c2erk_26",
	infoMessage: "_infoMessage_c2erk_43 _message_c2erk_26",
	banner: "_banner_c2erk_48",
	content: "_content_c2erk_55",
	actions: "_actions_c2erk_66",
	details: "_details_c2erk_70 _message_c2erk_26",
	moreDetails: "_moreDetails_c2erk_77",
	messageRow: "_messageRow_c2erk_81",
	subtitle: "_subtitle_c2erk_87",
	subtitleWithIcon: "_subtitleWithIcon_c2erk_93"
} }]]);
//#endregion
export { Banner_default as t };

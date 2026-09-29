import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, X as onMounted, Z as onUnmounted, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { a as vscode_default, c as claude_default, o as openai_default, s as cursor_default } from "./clients.utils-JhTrRAdC.js";
//#region src/features/ai/mcpAccess/components/McpClientLogoCards.vue?vue&type=script&setup=true&lang.ts
var McpClientLogoCards_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpClientLogoCards",
	setup(__props) {
		const CLIENT_ICONS = [
			claude_default,
			cursor_default,
			vscode_default,
			openai_default
		];
		const leftIconIndex = ref(0);
		const rightIconIndex = ref(2);
		const leftFading = ref(false);
		const rightFading = ref(false);
		let animationInterval = null;
		function animateLeft() {
			leftFading.value = true;
			setTimeout(() => {
				leftIconIndex.value = (leftIconIndex.value + 1) % CLIENT_ICONS.length;
				leftFading.value = false;
			}, 300);
		}
		function animateRight() {
			rightFading.value = true;
			setTimeout(() => {
				rightIconIndex.value = (rightIconIndex.value + 1) % CLIENT_ICONS.length;
				rightFading.value = false;
			}, 300);
		}
		onMounted(() => {
			animationInterval = setInterval(() => {
				animateLeft();
				setTimeout(() => {
					animateRight();
				}, 1500);
			}, 3e3);
		});
		onUnmounted(() => {
			if (animationInterval) clearInterval(animationInterval);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.iconCardContainer) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[leftIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: leftFading.value }]) }, null, 8, ["class"]))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), {
					icon: "mcp",
					class: normalizeClass(_ctx.$style.mcpIcon)
				}, null, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[rightIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: rightFading.value }]) }, null, 8, ["class"]))], 2)
			], 2);
		};
	}
});
var McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default = {
	iconCardContainer: "_iconCardContainer_9qxcy_1",
	iconCard: "_iconCard_9qxcy_1",
	clientLogo: "_clientLogo_9qxcy_31",
	mcpIcon: "_mcpIcon_9qxcy_40",
	fading: "_fading_9qxcy_46"
};
var McpClientLogoCards_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpClientLogoCards_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpClientLogoCards_default as t };

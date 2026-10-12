import { Af as unref, Dd as createElementBlock, Kd as onMounted, Nd as defineComponent, Sf as ref, Td as createBlock, Yd as openBlock, Zf as normalizeClass, jd as createVNode, qd as onUnmounted, tf as resolveDynamicComponent, wd as createBaseVNode } from "./vendor-C0K-pJCd.js";
import { aw as _plugin_vue_export_helper_default, nw as N8nIcon_default } from "./app-Gcu_WcI0.js";
import { a as vscode_default, c as cursor_default, l as claude_default, o as openai_default } from "./clients.utils-vXo-FGL1.js";
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

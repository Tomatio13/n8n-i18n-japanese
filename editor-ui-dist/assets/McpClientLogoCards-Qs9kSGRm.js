import { Bf as unref, Fd as createBlock, Ld as createElementBlock, Mf as ref, Pd as createBaseVNode, Ud as defineComponent, Vd as createVNode, af as openBlock, df as resolveDynamicComponent, nf as onMounted, rf as onUnmounted, sp as normalizeClass } from "./vendor-LwB6jUFW.js";
import { Sw as _plugin_vue_export_helper_default, yw as N8nIcon_default } from "./app-Ddu-psGf.js";
import { l as cursor_default, o as vscode_default, s as openai_default, u as claude_default } from "./mcp.store-BzMNByRc.js";
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

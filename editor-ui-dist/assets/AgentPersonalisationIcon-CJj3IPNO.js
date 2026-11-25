import { Bd as createElementBlock, Id as computed, Jf as unref, Kd as defineComponent, Wd as createVNode, Zd as init_runtime_core_esm_bundler, _p as normalizeStyle, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, uf as openBlock } from "./vendor-zYfdu4Ed.js";
import { MM as N8nIcon_default, NM as _plugin_vue_export_helper_default, QE as DEFAULT_AGENT_PERSONALISATION, _T as resolveAgentPersonalisation } from "./app-CkjcdAxY.js";
//#region src/features/agents/components/AgentPersonalisationIcon.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentPersonalisationIcon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentPersonalisationIcon",
	props: {
		personalisation: { default: null },
		size: { default: 24 }
	},
	setup(__props) {
		const props = __props;
		const resolved = computed(() => resolveAgentPersonalisation(props.personalisation));
		const tileStyle = computed(() => ({
			"--agent-personalisation-gradient-from": resolved.value.gradient.from,
			"--agent-personalisation-gradient-to": resolved.value.gradient.to,
			"--agent-personalisation-gradient-angle": `${resolved.value.gradient.angle}deg`,
			"--agent-personalisation-gradient-from-stop": `${resolved.value.gradient.fromStop}%`,
			"--agent-personalisation-gradient-to-stop": `${resolved.value.gradient.toStop}%`,
			width: `${props.size}px`,
			height: `${props.size}px`
		}));
		const iconSize = computed(() => Math.round(props.size * .6));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["n8n-agent-icon", _ctx.$style.tile]),
				style: normalizeStyle(tileStyle.value),
				"data-test-id": "agent-personalisation-icon-tile"
			}, [createVNode(unref(N8nIcon_default), {
				icon: resolved.value.icon,
				"fallback-icon": unref(DEFAULT_AGENT_PERSONALISATION).icon,
				size: iconSize.value
			}, null, 8, [
				"icon",
				"fallback-icon",
				"size"
			])], 6);
		};
	}
}), [["__cssModules", { "$style": { tile: "_tile_1n4jg_1" } }]]);
//#endregion
export { AgentPersonalisationIcon_default as t };

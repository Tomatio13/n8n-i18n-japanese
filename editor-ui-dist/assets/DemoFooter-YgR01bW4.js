import LogsPanel from "./LogsPanel-DydeRuLp.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BCzb71Mg.js";
import "./AnimatedSpinner-C2ryxaS2.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-CcLTd3O6.js";
import "./core-CzGcr9og.js";
import "./canvas-UMlNZPMG.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};

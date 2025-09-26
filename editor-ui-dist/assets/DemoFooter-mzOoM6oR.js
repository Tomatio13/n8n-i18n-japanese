import LogsPanel from "./LogsPanel-7Blct7nG.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-lSzoI3Qq.js";
import "./AnimatedSpinner-C-_smmII.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-qR8gM6HA.js";
import "./core-TVPTGjqv.js";
import "./canvas-DJoNL6VZ.js";
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

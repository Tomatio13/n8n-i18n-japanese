import LogsPanel from "./LogsPanel-B56cexkS.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DTeglzKi.js";
import "./AnimatedSpinner-bZwXLQAP.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BlF7j5nY.js";
import "./core-BtpvBHG9.js";
import "./canvas-CRg7xkzU.js";
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

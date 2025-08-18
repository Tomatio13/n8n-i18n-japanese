import LogsPanel from "./LogsPanel-CV0tyfoK.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BEyr3NcB.js";
import "./AnimatedSpinner-CW6funOb.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-bYRk3AgY.js";
import "./core-CnKRU-36.js";
import "./canvas-DLxTmzR1.js";
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

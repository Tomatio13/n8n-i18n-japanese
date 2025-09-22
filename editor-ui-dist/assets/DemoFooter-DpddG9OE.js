import LogsPanel from "./LogsPanel-D2zxINTR.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-NJL4IKW7.js";
import "./AnimatedSpinner-BVe0lSGB.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-B1v8GYxK.js";
import "./core-BTymK6dc.js";
import "./canvas-5TA50LqA.js";
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

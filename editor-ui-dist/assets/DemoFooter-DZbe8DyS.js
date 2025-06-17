import LogsPanel from "./LogsPanel-GgbBjf7Y.js";
import { d as defineComponent, P as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-F4i4lJvC.js";
import "./RunData-faT6PKwI.js";
import "./FileSaver.min-60y9Egwz.js";
import "./useExecutionHelpers-BI1QKI3N.js";
import "./canvas-8c5WJ1DD.js";
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

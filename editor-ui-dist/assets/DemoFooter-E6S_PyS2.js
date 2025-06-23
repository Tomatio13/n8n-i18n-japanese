import LogsPanel from "./LogsPanel-Cm3g1lBy.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BUnZ6YUf.js";
import "./RunData-CzZWL05C.js";
import "./FileSaver.min-D9kz5jh_.js";
import "./useExecutionHelpers-qdhaMkSM.js";
import "./canvas-70V9x1o8.js";
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

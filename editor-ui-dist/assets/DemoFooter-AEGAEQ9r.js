import LogsPanel from "./LogsPanel-Bm6sKs0d.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Dc3X-hmK.js";
import "./RunData-MTcxMkqD.js";
import "./FileSaver.min-Z44IkkX8.js";
import "./useExecutionHelpers-Zn7xDM0T.js";
import "./useKeybindings-D1Xg_bRi.js";
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

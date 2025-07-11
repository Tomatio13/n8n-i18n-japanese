import LogsPanel from "./LogsPanel-BHRl7p6i.js";
import { d as defineComponent, a3 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-B0MupW8X.js";
import "./RunData-BU3D-2Qd.js";
import "./FileSaver.min-d2y7Sm-C.js";
import "./useKeybindings-DnBgNBSR.js";
import "./useExecutionHelpers-HiAA4A0D.js";
import "./ActionDropdown-vusLMZ4t.js";
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

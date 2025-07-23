import LogsPanel from "./LogsPanel-DZwBnehg.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DCnmwh6X.js";
import "./RunData-DaR_RcN-.js";
import "./FileSaver.min-ChznNQUn.js";
import "./useKeybindings-DD56N_lV.js";
import "./useExecutionHelpers-DbQO3N-Q.js";
import "./AnimatedSpinner--LdOwkZl.js";
import "./ActionDropdown-DjPqv0J2.js";
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

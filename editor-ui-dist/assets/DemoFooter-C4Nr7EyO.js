import LogsPanel from "./LogsPanel-CJ4nvvDp.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DIzSOb7d.js";
import "./useKeybindings-u401fo4t.js";
import "./FileSaver.min-Cljw1hMZ.js";
import "./useExecutionHelpers-Bh-a1BDz.js";
import "./AnimatedSpinner-DTDBAQ7M.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-B4Yb58A2.js";
import "./VueMarkdown-Dblv6PwV.js";
import "./ActionDropdown-DT7j7s11.js";
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

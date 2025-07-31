import LogsPanel from "./LogsPanel-D-YodyIL.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BhVK601O.js";
import "./useKeybindings-Y7cDWbJ5.js";
import "./FileSaver.min-Cda1w6qe.js";
import "./useExecutionHelpers-Di-8L3W-.js";
import "./AnimatedSpinner-BD1b7g9R.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-DE8sXDgy.js";
import "./VueMarkdown-Ze2zqGgV.js";
import "./ActionDropdown-D0ZMTM8I.js";
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

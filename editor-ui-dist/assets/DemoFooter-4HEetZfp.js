import LogsPanel from "./LogsPanel-CYToWUoe.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-UTNeBwYa.js";
import "./AnimatedSpinner-DUtFO5Co.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C_Vkd09Q.js";
import "./VueMarkdown-CAC626rq.js";
import "./canvas-Pg-EMbll.js";
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

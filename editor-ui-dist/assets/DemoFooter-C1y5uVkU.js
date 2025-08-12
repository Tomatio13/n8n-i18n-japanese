import LogsPanel from "./LogsPanel-BqdDhhrn.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CS7URPCI.js";
import "./AnimatedSpinner-BOcP3tS_.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BmX44SRx.js";
import "./VueMarkdown-BsBuHm6w.js";
import "./canvas-qejqwZDU.js";
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

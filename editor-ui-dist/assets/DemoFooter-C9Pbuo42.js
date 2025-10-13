import LogsPanel from "./LogsPanel-gPZA6JtS.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-9Hb4GmM-.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-S_-8QMsB.js";
import "./AnimatedSpinner-Cps5Zi3t.js";
import "./core-BraSR5-s.js";
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

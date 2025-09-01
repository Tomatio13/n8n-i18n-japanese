import LogsPanel from "./LogsPanel-DxLimCtf.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DB7ZLRj0.js";
import "./AnimatedSpinner-vfIfWT1C.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-DI4BlZkZ.js";
import "./core-gS549Wu5.js";
import "./canvas-BwgM4ul9.js";
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

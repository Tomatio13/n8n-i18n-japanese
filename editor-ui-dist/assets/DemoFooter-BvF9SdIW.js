import { L as LogsPanel } from "./LogsPanel-BPUBqT9s.js";
import { d as defineComponent, p as useSettingsStore, Q as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-bHaUIFge.js";
import "./useClearExecutionButtonVisible-CXrgd1z1.js";
import "./RunData-kQBInJus.js";
import "./FileSaver.min-DkVvR-w5.js";
import "./useExecutionHelpers-DPPWfJgc.js";
import "./dateFormatter-B1WDHRuT.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const { isNewLogsEnabled } = useSettingsStore();
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return unref(isNewLogsEnabled) && hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};

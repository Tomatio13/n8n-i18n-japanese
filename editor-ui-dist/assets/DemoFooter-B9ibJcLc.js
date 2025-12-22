import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-C16tFX_5.js";
import "./src-D2eAHqUn.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-CgrKzQs8.js";
import { N as useWorkflowsStore } from "./builder.store-BLAleF9k.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-G5Vkztf0.js";
import "./merge-Cct2Tso6.js";
import "./_baseOrderBy-DWwx0cJy.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-CA5UjP42.js";
import "./assistant.store-DBrM6voM.js";
import "./chatPanel.store-C81u7qSL.js";
import "./retry-dP46utx2.js";
import "./executions.store-8vYg4w9J.js";
import "./useRunWorkflow-CIVBNJI-.js";
import "./usePinnedData-CBIw3DIN.js";
import "./nodeCreator.store-rXIBkQ9v.js";
import "./nodeIcon-Ya_GSJ4X.js";
import "./useClipboard-DbIQKG0a.js";
import "./useCanvasOperations-Cw4rD9nh.js";
import { t as LogsPanel_default } from "./LogsPanel-9FZzAAaz.js";
import "./folders.store-DmFJZk7_.js";
import "./NodeIcon-CymdBTFw.js";
import "./KeyboardShortcutTooltip-ByrbuR6b.js";
import "./isEmpty-Dm179PV5.js";
import "./NDVEmptyState-B67qraFM.js";
import "./externalSecrets.ee.store-DRnoB5hl.js";
import "./uniqBy-DpCjsa99.js";
import "./RunDataHtml-CkjC7YuF.js";
import "./VueMarkdown-DrQTsQ87.js";
import "./schemaPreview.store-1IdauqOf.js";
import "./vue-json-pretty-DGKuDe33.js";
import "./dateFormatter-CGEHXe6n.js";
import "./useExecutionHelpers-CJwBC4B5.js";
import "./useKeybindings-BVn82Tc7.js";
import "./fileUtils-D_SiS8no.js";
import "./core-6W4wWNc1.js";
import "./ChatFile-DPKnwtRU.js";
import "./xml-WU96HhF2.js";
import "./AnimatedSpinner-DejvPGEu.js";
import "./useLogsTreeExpand-C9ZcERRI.js";
import "./core-CNO4CUOM.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
export { DemoFooter_default as default };

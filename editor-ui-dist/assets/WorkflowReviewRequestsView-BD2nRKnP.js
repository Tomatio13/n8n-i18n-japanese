import { o as __toESM } from "./rolldown-runtime-Bq5D3eIA.js";
import { Ad as Fragment, Bd as createTextVNode, Bf as unref, Bu as useLocalStorage, Df as isRef, Fd as createBlock, Id as createCommentVNode, Jd as inject, Ld as createElementBlock, Mf as ref, Na as require_isEqual, Nd as computed, Od as withKeys, Of as markRaw, Pd as createBaseVNode, Rd as createSlots, Ud as defineComponent, Vd as createVNode, Wu as useResizeObserver, Zd as mergeProps, af as openBlock, as as useRoute, bf as withCtx, cf as renderSlot, df as resolveDynamicComponent, fp as toDisplayString, gd as I18nT, gf as useTemplateRef, go as storeToRefs, kd as withModifiers, lp as normalizeStyle, mo as defineStore, nf as onMounted, of as provide, os as useRouter, pf as useId, rf as onUnmounted, sf as renderList, sp as normalizeClass, vf as watch } from "./vendor-C1jTjpo6.js";
import { BC as N8nCard_default, Cw as _plugin_vue_export_helper_default, DC as N8nEmptyState_default, HS as useResizablePanel, Io as TimeAgo_default, JC as N8nAvatar_default, JS as N8nPopover_default, J_ as useToast, Kn as WorkflowDiffView_default, OC as N8nHeading_default, Oi as getVersionLabel, Ow as useI18n, PS as N8nTabs_default, S as WORKFLOW_REVIEW_REQUESTS_VIEW, SC as N8nLink_default, Ty as WORKFLOW_REVIEW_TEXT_MAX_LENGTH, VS as N8nResizeWrapper_default, WC as N8nCallout_default, Y_ as VIEWS, Zg as LOCAL_STORAGE_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS, _w as Input_default, aw as N8nLoading_default, b as ReviewDetailScrollContainerKey, bw as N8nIcon_default, dw as N8nText_default, e_ as LOCAL_STORAGE_WORKFLOW_REVIEW_SIDEBAR_WIDTH, ev as useUsersStore, lw as N8nChatInput_default, lx as deepCopy, nv as useRootStore, ow as N8nBadge_default, pw as N8nTooltip_default, vd as useDocumentTitle, vv as ResponseError, x as ReviewLinkedWorkflowsKey, y as REVIEW_INBOX_QUERY_PARAM, yw as N8nButton_default } from "./app-C5zIGyiz.js";
import { c as fetchWorkflowReviewActivity, d as fetchWorkflowReviewRequestDetail, i as createWorkflowReviewComment, l as fetchWorkflowReviewInbox, n as formatUserDisplayName, o as decideWorkflowReviewRequest, r as toError, t as formatActorName, u as fetchWorkflowReviewInboxSummary } from "./workflowReviews.utils-CbgRmcGe.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BQofMzd8.js";
import { t as require_omit } from "./omit-D8WDjUfe.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-D7PigIVJ.js";
//#region src/features/workflow-reviews/reviewActivity.store.ts
var DEFAULT_LIMIT$1 = 25;
/**
* The activity feed of one review. `entries` is ascending by id: the backend pages
* backwards, so `loadMore` prepends older pages and `postComment` appends.
*/
var useReviewActivityStore = defineStore("workflowReviewActivity", () => {
	const rootStore = useRootStore();
	const currentReviewId = ref(null);
	const entries = ref([]);
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const posting = ref(false);
	const error = ref(null);
	const draft = ref("");
	const decisionNote = ref("");
	let feedRequestSeq = 0;
	let postSeq = 0;
	async function fetchFeed(reviewId) {
		const requestSeq = ++feedRequestSeq;
		const switchedReview = currentReviewId.value !== reviewId;
		currentReviewId.value = reviewId;
		nextCursor.value = null;
		hasMore.value = false;
		loadingMore.value = false;
		loading.value = true;
		error.value = null;
		if (switchedReview) {
			entries.value = [];
			posting.value = false;
			draft.value = "";
			decisionNote.value = "";
		}
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, { limit: DEFAULT_LIMIT$1 });
			if (requestSeq !== feedRequestSeq) return;
			const newestInPage = Number(response.data.at(-1)?.id ?? 0);
			entries.value = [...response.data, ...entries.value.filter((entry) => Number(entry.id) > newestInPage)];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore;
		} catch (e) {
			if (requestSeq !== feedRequestSeq) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		const reviewId = currentReviewId.value;
		const cursor = nextCursor.value;
		if (!reviewId || !cursor || loading.value || loadingMore.value) return;
		const requestSeq = ++feedRequestSeq;
		loadingMore.value = true;
		error.value = null;
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, {
				limit: DEFAULT_LIMIT$1,
				cursor
			});
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			entries.value = [...response.data, ...entries.value];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore && response.data.length > 0;
		} catch (e) {
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loadingMore.value = false;
		}
	}
	/**
	* Resolves `false` when the viewer moved to another review while the post was in flight:
	* the comment was written, but nothing about it belongs on the review they are reading now.
	*/
	async function postComment(body) {
		const reviewId = currentReviewId.value;
		if (!reviewId) throw new Error("Cannot post a comment without a selected review");
		const requestSeq = ++postSeq;
		posting.value = true;
		try {
			const entry = await createWorkflowReviewComment(rootStore.restApiContext, reviewId, { body });
			if (currentReviewId.value !== reviewId) return false;
			entries.value = [...entries.value.filter((existing) => existing.id !== entry.id), entry];
			return true;
		} finally {
			if (requestSeq === postSeq) posting.value = false;
		}
	}
	/**
	* Clears the decision note, unless the viewer typed something else since the submit
	* `expected` came from — both callers await a request first.
	*/
	function clearDecisionNote(expected) {
		if (decisionNote.value.trim() === expected) decisionNote.value = "";
	}
	function reset() {
		feedRequestSeq += 1;
		currentReviewId.value = null;
		entries.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		posting.value = false;
		error.value = null;
		draft.value = "";
		decisionNote.value = "";
	}
	return {
		currentReviewId,
		entries,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		posting,
		error,
		draft,
		decisionNote,
		fetchFeed,
		loadMore,
		postComment,
		clearDecisionNote,
		reset
	};
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityActorAvatar.vue?vue&type=script&setup=true&lang.ts
/**
* The avatar column of a feed entry that names a person: the actor's avatar, or a person
* silhouette when the actor was deleted.
*/
var WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityActorAvatar",
	props: { actor: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.actor ? (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 0,
				size: "xxsmall",
				class: normalizeClass(_ctx.$style.avatar),
				"first-name": __props.actor.firstName,
				"last-name": __props.actor.lastName
			}, null, 8, [
				"class",
				"first-name",
				"last-name"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.deletedActor),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-deleted-actor"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-user-round",
				size: 16,
				color: "text-light"
			})], 2));
		};
	}
});
var WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default = {
	avatar: "_avatar_70nmw_10",
	deletedActor: "_deletedActor_70nmw_16"
};
var WorkflowReviewActivityActorAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityComment.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["datetime"];
var WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityComment",
	props: { entry: {} },
	setup(__props) {
		const i18n = useI18n();
		function authorName(message) {
			return formatActorName(message.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor"));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.entry.messages, (message) => {
				return openBlock(), createElementBlock("div", {
					key: message.id,
					class: normalizeClass(_ctx.$style.message)
				}, [createVNode(WorkflowReviewActivityActorAvatar_default, { actor: message.createdBy }, null, 8, ["actor"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-comment-author"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(authorName(message)), 1)]),
					_: 2
				}, 1032, ["class"]), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light"
				}, {
					default: withCtx(() => [createBaseVNode("time", {
						datetime: message.createdAt,
						"data-test-id": "workflow-review-activity-comment-time",
						class: normalizeClass(_ctx.$style.timeStamp)
					}, [createVNode(TimeAgo_default, { date: message.createdAt }, null, 8, ["date"])], 10, _hoisted_1$4)]),
					_: 2
				}, 1024)], 2), message.deletedAt ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.deleted),
					"data-test-id": "workflow-review-activity-comment-deleted"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.comment.deleted")), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "medium",
					color: "text-dark",
					class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
					"data-test-id": "workflow-review-activity-comment-body"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(message.body), 1)]),
					_: 2
				}, 1032, ["class"]))], 2)], 2);
			}), 128))], 2);
		};
	}
});
var WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_rdsw0_11",
	message: "_message_rdsw0_21",
	content: "_content_rdsw0_27",
	header: "_header_rdsw0_34",
	line: "_line_rdsw0_41",
	timeStamp: "_timeStamp_rdsw0_45",
	body: "_body_rdsw0_49",
	deleted: "_deleted_rdsw0_54"
};
var WorkflowReviewActivityComment_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityFallback.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "WorkflowReviewActivityFallback",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.icon),
				"aria-hidden": "true"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-help",
				size: 16,
				color: "text-light"
			})], 2), createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light",
				class: normalizeClass(_ctx.$style.line),
				"data-test-id": "workflow-review-activity-unknown"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownEntry")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_ls3mo_10",
	icon: "_icon_ls3mo_16",
	line: "_line_ls3mo_26"
};
var WorkflowReviewActivityFallback_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityWorkflowLink.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityWorkflowLink",
	props: {
		workflowId: {},
		workflowName: {},
		version: {}
	},
	setup(__props) {
		const props = __props;
		const label = computed(() => props.version ? `${props.workflowName} ${props.version}` : props.workflowName);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nLink_default), {
				to: {
					name: unref(VIEWS).WORKFLOW,
					params: { workflowId: __props.workflowId }
				},
				theme: "text",
				size: "medium",
				"data-test-id": "workflow-review-activity-workflow-link"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "medium",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]), createTextVNode(toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["to"]);
		};
	}
});
var WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default = { icon: "_icon_1w4u3_1" };
var WorkflowReviewActivityWorkflowLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityEventEntry.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["datetime"];
var _hoisted_2$1 = ["datetime"];
var WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityEventEntry",
	props: { entry: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const linkedWorkflows = inject(ReviewLinkedWorkflowsKey, computed(() => /* @__PURE__ */ new Map()));
		const closedReasonKeys = { "no-reviewable-workflows": "workflowReviews.detail.closedCallout.noReviewableWorkflows" };
		/**
		* A lifecycle close concludes the feed, so it renders as a callout rather than one more
		* sentence. The body is a keypath, and the stored reason, so there is nothing to fall back to.
		*/
		const closedCallout = computed(() => {
			const entry = props.entry;
			if (entry.type !== "review.closed" || !entry.data) return null;
			return {
				title: i18n.baseText("workflowReviews.detail.closedCallout.title"),
				bodyKey: closedReasonKeys[entry.data.reason]
			};
		});
		const causeKeys = {
			"workflow.archived": {
				user: "workflowReviews.detail.activity.workflowArchived.user",
				userNamed: "workflowReviews.detail.activity.workflowArchived.user.named",
				system: "workflowReviews.detail.activity.workflowArchived.system",
				systemNamed: "workflowReviews.detail.activity.workflowArchived.system.named",
				testId: "workflow-review-activity-workflow-archived"
			},
			"workflow.deleted": {
				user: "workflowReviews.detail.activity.workflowDeleted.user",
				userNamed: "workflowReviews.detail.activity.workflowDeleted.user.named",
				system: "workflowReviews.detail.activity.workflowDeleted.system",
				systemNamed: "workflowReviews.detail.activity.workflowDeleted.system.named",
				testId: "workflow-review-activity-workflow-deleted"
			},
			"workflow.moved": {
				user: "workflowReviews.detail.activity.workflowMoved.user",
				userNamed: "workflowReviews.detail.activity.workflowMoved.user.named",
				system: "workflowReviews.detail.activity.workflowMoved.system",
				systemNamed: "workflowReviews.detail.activity.workflowMoved.system.named",
				testId: "workflow-review-activity-workflow-moved"
			}
		};
		/**
		* The sentence for one entry: an i18n key plus its placeholder values, one case per type.
		* `null` means "no sentence" — `review.closed` renders as a callout instead, and a
		* `workflow.published` entry with an unreadable payload has nothing to say. Other types
		* survive a bad payload with a reduced sentence: a decision loses its note, a cause event
		* its actor.
		*
		* `workflow` is set only when the workflow still exists.
		*
		* `namesActor` comes from the entry itself, never from `createdBy` — that is also null for
		* deleted users, whose actions must still read as a person's.
		*/
		const content = computed(() => {
			const entry = props.entry;
			const workflowId = entry.data && "workflowId" in entry.data ? entry.data.workflowId : null;
			const linked = workflowId === null ? void 0 : linkedWorkflows.value.get(workflowId);
			const workflow = workflowId !== null && linked ? {
				id: workflowId,
				name: linked.workflowName
			} : void 0;
			switch (entry.type) {
				case "review.opened": return {
					key: "workflowReviews.detail.activity.opened",
					note: null,
					testId: "workflow-review-activity-opened",
					namesActor: true
				};
				case "review.changes_requested": return {
					key: "workflowReviews.detail.activity.changesRequested",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-changes-requested",
					namesActor: true
				};
				case "review.approved": return {
					key: "workflowReviews.detail.activity.approved",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-approved",
					namesActor: true
				};
				case "review.version_updated": return {
					key: workflow ? "workflowReviews.detail.activity.versionUpdated.named" : "workflowReviews.detail.activity.versionUpdated",
					workflow,
					note: null,
					testId: "workflow-review-activity-version-updated",
					namesActor: true
				};
				case "review.closed": return null;
				case "workflow.archived":
				case "workflow.deleted":
				case "workflow.moved": {
					const keys = causeKeys[entry.type];
					const namesActor = entry.data?.actorKind === "user";
					return {
						key: namesActor ? workflow ? keys.userNamed : keys.user : workflow ? keys.systemNamed : keys.system,
						workflow,
						note: null,
						testId: keys.testId,
						namesActor
					};
				}
				case "workflow.published": {
					if (!entry.data) return null;
					const versionName = linked?.pinnedVersionId === entry.data.workflowVersionId ? linked.pinnedVersionName : null;
					return {
						key: "workflowReviews.detail.activity.workflowPublished",
						workflow,
						version: getVersionLabel({ workflowHistory: {
							versionId: entry.data.workflowVersionId,
							name: versionName
						} }),
						note: null,
						testId: "workflow-review-activity-workflow-published",
						namesActor: true
					};
				}
			}
		});
		const actorName = computed(() => formatActorName(props.entry.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor")));
		return (_ctx, _cache) => {
			return closedCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				class: normalizeClass(_ctx.$style.closedCallout),
				"data-test-id": "workflow-review-activity-closed"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(closedCallout.value.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: closedCallout.value.bodyKey,
						scope: "global"
					}, {
						timestamp: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(TimeAgo_default, { date: __props.entry.createdAt }, null, 8, ["date"])], 8, _hoisted_1$3)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"])) : content.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass([_ctx.$style.entry, content.value.note && _ctx.$style.boxed])
			}, [content.value.namesActor ? (openBlock(), createBlock(WorkflowReviewActivityActorAvatar_default, {
				key: 0,
				actor: __props.entry.createdBy
			}, null, 8, ["actor"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.systemIcon),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-system-icon"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "info",
				size: 16,
				color: "text-light"
			})], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headline) }, [
				content.value.namesActor ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "medium",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-actor"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actorName.value) + " ", 1), createBaseVNode("span", {
						"aria-hidden": "true",
						class: normalizeClass(_ctx.$style.separator)
					}, "|", 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": content.value.testId
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: content.value.key,
						scope: "global"
					}, createSlots({ _: 2 }, [content.value.workflow ? {
						name: "workflowName",
						fn: withCtx(() => [createVNode(WorkflowReviewActivityWorkflowLink_default, {
							"workflow-id": content.value.workflow.id,
							"workflow-name": content.value.workflow.name,
							version: content.value.version
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"version"
						])]),
						key: "0"
					} : content.value.version ? {
						name: "workflowName",
						fn: withCtx(() => [createBaseVNode("i", { class: normalizeClass(_ctx.$style.unknownWorkflow) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownWorkflow")), 3), createTextVNode(" " + toDisplayString(content.value.version), 1)]),
						key: "1"
					} : void 0]), 1032, ["keypath"])]),
					_: 1
				}, 8, ["class", "data-test-id"]),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light",
					class: normalizeClass(_ctx.$style.timeStamp)
				}, {
					default: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(TimeAgo_default, { date: __props.entry.createdAt }, null, 8, ["date"])], 8, _hoisted_2$1)]),
					_: 1
				}, 8, ["class"])
			], 2), content.value.note ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "medium",
				color: "text-dark",
				class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
				"data-test-id": "workflow-review-activity-note"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(content.value.note), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2)) : (openBlock(), createBlock(WorkflowReviewActivityFallback_default, { key: 2 }));
		};
	}
});
var WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_ov45x_10",
	systemIcon: "_systemIcon_ov45x_16",
	content: "_content_ov45x_26",
	headline: "_headline_ov45x_34",
	separator: "_separator_ov45x_41",
	unknownWorkflow: "_unknownWorkflow_ov45x_46",
	timeStamp: "_timeStamp_ov45x_50",
	boxed: "_boxed_ov45x_55",
	closedCallout: "_closedCallout_ov45x_63",
	closedCalloutContent: "_closedCalloutContent_ov45x_67",
	line: "_line_ov45x_74",
	body: "_body_ov45x_78"
};
var WorkflowReviewActivityEventEntry_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activityEntryRegistry.ts
var registry = {
	"comment.created": { 1: WorkflowReviewActivityComment_default },
	"review.opened": { 1: WorkflowReviewActivityEventEntry_default },
	"review.changes_requested": { 1: WorkflowReviewActivityEventEntry_default },
	"review.approved": { 1: WorkflowReviewActivityEventEntry_default },
	"review.version_updated": { 1: WorkflowReviewActivityEventEntry_default },
	"review.closed": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.archived": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.deleted": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.moved": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.published": { 1: WorkflowReviewActivityEventEntry_default }
};
function resolveActivityComponent(entry) {
	return registry[entry.type]?.[entry.typeVersion] ?? WorkflowReviewActivityFallback_default;
}
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewActivityFeed.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
var WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityFeed",
	setup(__props) {
		const i18n = useI18n();
		const store = useReviewActivityStore();
		const { entries, loading, loadingMore, hasMore, error } = storeToRefs(store);
		const scrollContainer = inject(ReviewDetailScrollContainerKey, ref(null));
		const feed = ref(null);
		const list = ref(null);
		const sentinel = ref(null);
		const composer = ref(null);
		const initialScrollApplied = ref(false);
		let prependAnchor = null;
		const enteringIds = ref(/* @__PURE__ */ new Set());
		function scrollToBottom() {
			const container = scrollContainer.value;
			if (container) container.scrollTop = container.scrollHeight;
		}
		const { observe } = useIntersectionObserver({
			root: scrollContainer,
			threshold: .01,
			onIntersect: () => {
				const element = list.value?.firstElementChild ?? null;
				prependAnchor = element ? {
					element,
					top: element.getBoundingClientRect().top
				} : null;
				store.loadMore();
			}
		});
		watch([
			sentinel,
			hasMore,
			loadingMore,
			() => entries.value.length
		], ([sentinelElement, moreToLoad, isLoadingMore]) => {
			if (sentinelElement && moreToLoad && !isLoadingMore) observe(sentinelElement);
		}, {
			immediate: true,
			flush: "post"
		});
		watch(entries, (next, previous) => {
			const anchor = prependAnchor?.element.isConnected === true ? prependAnchor : null;
			prependAnchor = null;
			if (next.length === 0) return;
			if (!previous || previous.length === 0) {
				scrollToBottom();
				return;
			}
			if (next[0]?.id !== previous[0]?.id) {
				const container = scrollContainer.value;
				if (!container || !anchor) {
					scrollToBottom();
					return;
				}
				container.scrollTop += anchor.element.getBoundingClientRect().top - anchor.top;
				return;
			}
			if (next.at(-1)?.id !== previous.at(-1)?.id) scrollToBottom();
		}, { flush: "post" });
		watch(entries, (next, previous) => {
			if (next.length === 0) {
				enteringIds.value = /* @__PURE__ */ new Set();
				return;
			}
			const lastShown = previous?.at(-1);
			if (!lastShown) return;
			const newer = next.filter((entry) => Number(entry.id) > Number(lastShown.id));
			if (newer.length > 0) enteringIds.value = new Set(newer.map((entry) => entry.id));
		}, { flush: "post" });
		let composerHeight = 0;
		useResizeObserver(composer, ([entry]) => {
			const height = entry?.borderBoxSize[0]?.blockSize ?? 0;
			const growth = height - composerHeight;
			composerHeight = height;
			feed.value?.style.setProperty("--review-activity--composer-height", `${height}px`);
			const container = scrollContainer.value;
			if (!container || growth <= 0) return;
			if (container.scrollHeight - container.clientHeight - container.scrollTop <= growth + 1) scrollToBottom();
		});
		function retry() {
			if (!store.nextCursor) {
				if (store.currentReviewId) store.fetchFeed(store.currentReviewId);
				return;
			}
			store.loadMore();
		}
		onMounted(() => {
			if (entries.value.length > 0) scrollToBottom();
			initialScrollApplied.value = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "feed",
				ref: feed,
				class: normalizeClass([_ctx.$style.feed, { [_ctx.$style.feedWithComposer]: _ctx.$slots.composer }]),
				"data-test-id": "workflow-review-activity-feed"
			}, [
				_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.header)
				}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
				unref(loading) && unref(entries).length === 0 ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: true,
					rows: 3
				})) : unref(error) && unref(entries).length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorRow),
					"data-test-id": "workflow-review-activity-error"
				}, [createVNode(unref(N8nText_default), {
					color: "danger",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "mini",
					variant: "subtle",
					"data-test-id": "workflow-review-activity-retry",
					onClick: _cache[0] || (_cache[0] = ($event) => retry())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
					initialScrollApplied.value && unref(hasMore) && !unref(error) ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref_key: "sentinel",
						ref: sentinel,
						class: normalizeClass(_ctx.$style.sentinel),
						"data-test-id": "workflow-review-activity-load-more-sentinel"
					}, null, 2)) : createCommentVNode("", true),
					unref(loadingMore) || unref(loading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 1,
						loading: true,
						rows: 1
					})) : createCommentVNode("", true),
					unref(error) ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.errorRow)
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "mini",
						variant: "subtle",
						"data-test-id": "workflow-review-activity-load-more-retry",
						onClick: _cache[1] || (_cache[1] = ($event) => retry())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium",
						class: normalizeClass(_ctx.$style.header)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.tabs.activity")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", {
						ref_key: "list",
						ref: list,
						role: "list",
						"aria-label": unref(i18n).baseText("workflowReviews.detail.activity.listLabel"),
						class: normalizeClass(_ctx.$style.list)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(entries), (entry) => {
						return openBlock(), createElementBlock("div", {
							key: entry.id,
							role: "listitem",
							class: normalizeClass([_ctx.$style.item, { [_ctx.$style.itemEntering]: enteringIds.value.has(entry.id) }]),
							"data-test-id": "workflow-review-activity-entry"
						}, [(openBlock(), createBlock(resolveDynamicComponent(unref(resolveActivityComponent)(entry)), { entry }, null, 8, ["entry"]))], 2);
					}), 128)), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
						key: 0,
						role: "listitem",
						class: normalizeClass(_ctx.$style.item)
					}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 10, _hoisted_1$2)
				], 64)),
				_ctx.$slots.composer ? (openBlock(), createElementBlock("div", {
					key: 4,
					ref_key: "composer",
					ref: composer,
					class: normalizeClass(_ctx.$style.composer)
				}, [renderSlot(_ctx.$slots, "composer")], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewActivityFeed.vue?vue&type=style&index=0&lang.module.scss
var feed = "_feed_d0q88_276";
var header$1 = "_header_d0q88_290";
var list$1 = "_list_d0q88_295";
var item = "_item_d0q88_303";
var itemEntering = "_itemEntering_d0q88_313";
var fadeInUp = "_fadeInUp_d0q88_1";
var feedWithComposer = "_feedWithComposer_d0q88_339";
var composer$1 = "_composer_d0q88_344";
var errorRow = "_errorRow_d0q88_355";
var sentinel$1 = "_sentinel_d0q88_362";
var shimmer = "_shimmer_d0q88_1";
var spin = "_spin_d0q88_1";
var opacityPulse = "_opacityPulse_d0q88_1";
var popoverIn = "_popoverIn_d0q88_1";
var fadeIn = "_fadeIn_d0q88_1";
var collapsibleSlideDown = "_collapsibleSlideDown_d0q88_1";
var collapsibleSlideUp = "_collapsibleSlideUp_d0q88_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_d0q88_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_d0q88_1";
var blurSwapIn = "_blurSwapIn_d0q88_1";
var blurSwapOut = "_blurSwapOut_d0q88_1";
var pulseGlow = "_pulseGlow_d0q88_1";
var pulseGlowDelayed = "_pulseGlowDelayed_d0q88_1";
var fade = "_fade_d0q88_1";
var fadeInDown = "_fadeInDown_d0q88_1";
var fadeInLeft = "_fadeInLeft_d0q88_1";
var fadeInRight = "_fadeInRight_d0q88_1";
var fadeOut = "_fadeOut_d0q88_1";
var fadeOutDown = "_fadeOutDown_d0q88_1";
var fadeOutUp = "_fadeOutUp_d0q88_1";
var fadeOutLeft = "_fadeOutLeft_d0q88_1";
var fadeOutRight = "_fadeOutRight_d0q88_1";
var ping = "_ping_d0q88_1";
var blinkBackground = "_blinkBackground_d0q88_1";
var typingBlink = "_typingBlink_d0q88_1";
var WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default = {
	feed,
	header: header$1,
	list: list$1,
	item,
	itemEntering,
	fadeInUp,
	feedWithComposer,
	composer: composer$1,
	errorRow,
	sentinel: sentinel$1,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_d0q88_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var WorkflowReviewActivityFeed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewChangesSection.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewChangesSection",
	props: {
		workflow: {},
		state: {},
		decision: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isApproved = computed(() => props.state === "closed" && props.decision === "approved");
		const isClosedWithoutApproval = computed(() => props.state === "closed" && props.decision !== "approved");
		/**
		* Label each side the way version history does, falling back to a short id.
		* Falsy rather than nullish: the publish endpoints accept `name: ""`.
		*/
		const versionLabel = (snapshot) => getVersionLabel({ workflowHistory: snapshot });
		/**
		* A snapshot minus its identity and metadata — i.e. everything the diff renders.
		* Derived by omission rather than an explicit field list to avoid drift; renaming
		* a version must not read as a change.
		*/
		function contentOf(snapshot) {
			return (0, import_omit.default)(snapshot, [
				"versionId",
				"name",
				"createdAt"
			]);
		}
		const hasChanges = computed(() => {
			const { pinnedVersion, baselineVersion } = props.workflow;
			if (!pinnedVersion) return false;
			if (!baselineVersion) return true;
			if (pinnedVersion.versionId === baselineVersion.versionId) return false;
			return !(0, import_isEqual.default)(contentOf(baselineVersion), contentOf(pinnedVersion));
		});
		function snapshotToWorkflow(snapshot) {
			return markRaw(deepCopy({
				id: props.workflow.workflowId,
				name: props.workflow.workflowName,
				active: false,
				isArchived: false,
				createdAt: snapshot.createdAt,
				updatedAt: snapshot.createdAt,
				versionId: snapshot.versionId,
				activeVersionId: null,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups
			}));
		}
		const sourceWorkflow = computed(() => props.workflow.baselineVersion ? snapshotToWorkflow(props.workflow.baselineVersion) : void 0);
		const targetWorkflow = computed(() => props.workflow.pinnedVersion ? snapshotToWorkflow(props.workflow.pinnedVersion) : void 0);
		const sourceDotClass = computed(() => isApproved.value ? "statusDotSuperseded" : "statusDotPublished");
		const targetDotClass = computed(() => isApproved.value ? "statusDotPublished" : "statusDotInReview");
		const noChangesText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.noChanges" : "workflowReviews.changes.noChanges"));
		const sourceEmptyText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.firstPublish.sourceEmpty" : "workflowReviews.changes.firstPublish.sourceEmpty"));
		const sourceLabel = computed(() => props.workflow.baselineVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.sourceLabel" : "workflowReviews.changes.sourceLabel", { interpolate: { version: versionLabel(props.workflow.baselineVersion) } }) : void 0);
		const targetLabel = computed(() => props.workflow.pinnedVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.targetLabel" : "workflowReviews.changes.targetLabel", { interpolate: { version: versionLabel(props.workflow.pinnedVersion) } }) : void 0);
		return (_ctx, _cache) => {
			return isClosedWithoutApproval.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-closed-without-approval"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.closedWithoutApproval")), 1)]),
				_: 1
			}, 8, ["class"])) : !__props.workflow.pinnedVersion ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-version-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.versionUnavailable.body")), 1)]),
				_: 1
			}, 8, ["class"])) : !hasChanges.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-no-changes"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(noChangesText.value), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.diff),
				"data-test-id": "workflow-review-changes-diff"
			}, [createVNode(WorkflowDiffView_default, {
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": sourceLabel.value,
				"target-label": targetLabel.value,
				"show-fullscreen-button": ""
			}, createSlots({
				targetLabel: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-target-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[targetDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(targetLabel.value), 1)]),
					_: 1
				})], 2)]),
				sourceEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceEmptyText.value), 1)]),
					_: 1
				})]),
				_: 2
			}, [__props.workflow.baselineVersion ? {
				name: "sourceLabel",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-source-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[sourceDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceLabel.value), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label"
			])], 2));
		};
	}
});
var WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_w6tcm_1",
	versionBadge: "_versionBadge_w6tcm_6 _sourceBadge_1jo27_3",
	statusDot: "_statusDot_w6tcm_10",
	statusDotPublished: "_statusDotPublished_w6tcm_18",
	statusDotInReview: "_statusDotInReview_w6tcm_22",
	statusDotSuperseded: "_statusDotSuperseded_w6tcm_26",
	diff: "_diff_w6tcm_30"
};
var WorkflowReviewChangesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewCommentComposer.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewCommentComposer",
	props: { canComment: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, draft } = storeToRefs(store);
		const submitDisabled = computed(() => posting.value || draft.value.trim().length === 0 || draft.value.length > 1e4 || !props.canComment);
		async function onSubmit() {
			const submitted = draft.value;
			const body = submitted.trim();
			if (!body) return;
			try {
				if (await store.postComment(body) && draft.value === submitted) draft.value = "";
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("label", { class: normalizeClass(_ctx.$style.composer) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.srOnly) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.composer.label")), 3), createVNode(unref(N8nChatInput_default), {
				modelValue: unref(draft),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(draft) ? draft.value = $event : null),
				layout: "adaptive",
				"max-length": unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
				placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
				"refocus-after-send": "",
				disabled: !__props.canComment,
				"disabled-tooltip": unref(i18n).baseText("workflowReviews.detail.activity.composer.notAllowed"),
				"submit-disabled": submitDisabled.value,
				"data-test-id": "workflow-review-comment-composer",
				onSubmit
			}, null, 8, [
				"modelValue",
				"max-length",
				"placeholder",
				"disabled",
				"disabled-tooltip",
				"submit-disabled"
			])], 2);
		};
	}
});
var WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_1g329_1",
	srOnly: "_srOnly_1g329_5"
};
var WorkflowReviewCommentComposer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDecisionPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDecisionPopover",
	props: {
		deciding: { type: Boolean },
		viewerCanDecide: { type: Boolean },
		viewerCanComment: { type: Boolean },
		ineligibilityHint: {}
	},
	emits: ["decide", "comment-posted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, decisionNote } = storeToRefs(store);
		const isOpen = ref(false);
		const noteInputId = useId();
		const note = computed(() => decisionNote.value.trim());
		const commentDisabled = computed(() => posting.value || props.deciding || note.value.length === 0 || !props.viewerCanComment);
		const decisionDisabled = computed(() => props.deciding || posting.value);
		function submitDecision(input) {
			isOpen.value = false;
			emit("decide", input);
		}
		function onRequestChanges() {
			submitDecision({
				decision: "changes_requested",
				note: note.value
			});
		}
		function onApprove() {
			submitDecision(note.value ? {
				decision: "approved",
				note: note.value
			} : { decision: "approved" });
		}
		async function onComment() {
			const body = note.value;
			isOpen.value = false;
			try {
				if (!await store.postComment(body)) return;
				store.clearDecisionNote(body);
				emit("comment-posted");
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				width: "480px",
				"enable-scrolling": false,
				"content-class": _ctx.$style.popover
			}, {
				trigger: withCtx(() => [__props.ineligibilityHint ? (openBlock(), createElementBlock("span", _hoisted_1$1, [createVNode(unref(N8nTooltip_default), {
					content: __props.ineligibilityHint,
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						disabled: __props.deciding || !__props.viewerCanDecide,
						"data-test-id": "workflow-review-decision-trigger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["content"])])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					size: "small",
					disabled: __props.deciding || !__props.viewerCanDecide,
					"data-test-id": "workflow-review-decision-trigger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
					_: 1
				}, 8, ["disabled"]))]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "workflow-review-decision-popover"
				}, [createVNode(unref(Input_default), {
					id: unref(noteInputId),
					"aria-label": unref(i18n).baseText("workflowReviews.detail.decision.note.label"),
					modelValue: unref(decisionNote),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(decisionNote) ? decisionNote.value = $event : null),
					type: "textarea",
					rows: 3,
					maxlength: unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
					placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
					class: normalizeClass(_ctx.$style.input),
					"data-test-id": "workflow-review-decision-note"
				}, null, 8, [
					"id",
					"aria-label",
					"modelValue",
					"maxlength",
					"placeholder",
					"class"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: commentDisabled.value,
						"data-test-id": "workflow-review-decision-comment-button",
						onClick: onComment
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "message-square" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.comment")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					createVNode(unref(N8nTooltip_default), {
						disabled: !!note.value,
						content: unref(i18n).baseText("workflowReviews.detail.decision.note.required"),
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							disabled: !note.value || decisionDisabled.value,
							"data-test-id": "workflow-review-decision-request-changes-button",
							onClick: onRequestChanges
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "refresh-cw" })]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.requestChanges")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["disabled", "content"]),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: decisionDisabled.value,
						"data-test-id": "workflow-review-decision-approve-button",
						onClick: onApprove
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "check" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.approveAndPublish")), 1)]),
						_: 1
					}, 8, ["disabled"])
				], 2)], 2)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
var WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default = {
	popover: "_popover_v2y1m_1",
	content: "_content_v2y1m_5",
	input: "_input_v2y1m_11",
	actions: "_actions_v2y1m_15"
};
var WorkflowReviewDecisionPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/workflowReviewStatus.utils.ts
/**
* The one mapping from review state/decision to what users see — card badge,
* detail status card, and status dot all render from here so their labels and
* colors cannot drift apart. A closed review that never got a decision reads
* `No decision`, not `Waiting for review`: nobody is waiting anymore.
*/
function getWorkflowReviewStatusDisplay(i18n, state, decision) {
	const decisionKey = state === "closed" && decision === "pending" ? "workflowReviews.decision.noDecision" : `workflowReviews.decision.${decision}`;
	const decisionLabel = i18n.baseText(decisionKey);
	return {
		stateLabel: i18n.baseText(`workflowReviews.status.${state}`),
		decisionLabel,
		colorClass: state === "open" ? decision === "changes_requested" ? "changesRequested" : decision === "approved" ? "approved" : "pending" : decision === "approved" ? "approved" : "closed"
	};
}
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewStatusDot.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusDot",
	props: {
		state: {},
		decision: {},
		size: { default: "medium" },
		decorative: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => getWorkflowReviewStatusDisplay(i18n, props.state, props.decision));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({
				class: [
					_ctx.$style.dot,
					_ctx.$style[status.value.colorClass],
					__props.size === "small" && _ctx.$style.small
				],
				"data-test-id": "workflow-review-request-status-dot"
			}, __props.decorative ? { "aria-hidden": "true" } : {
				role: "img",
				"aria-label": `${status.value.stateLabel} | ${status.value.decisionLabel}`
			}), null, 16);
		};
	}
});
var WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1jjrv_1",
	small: "_small_1jjrv_8",
	pending: "_pending_1jjrv_13",
	changesRequested: "_changesRequested_1jjrv_17",
	approved: "_approved_1jjrv_21",
	closed: "_closed_1jjrv_25"
};
var WorkflowReviewStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDetailMetadata.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailMetadata",
	props: { review: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const otherAuthors = computed(() => props.review.authors.filter((author) => author.id !== props.review.requester?.id));
		const statusSummary = computed(() => getWorkflowReviewStatusDisplay(i18n, props.review.state, props.review.decision));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.metadata),
				"data-test-id": "workflow-review-detail-metadata"
			}, [
				createVNode(unref(N8nCard_default), {
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-status-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.status")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.status) }, [createVNode(WorkflowReviewStatusDot_default, {
						state: __props.review.state,
						decision: __props.review.decision,
						decorative: ""
					}, null, 8, ["state", "decision"]), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(statusSummary.value.stateLabel) + " ", 1),
							createBaseVNode("span", {
								"aria-hidden": "true",
								class: normalizeClass(_ctx.$style.statusSeparator)
							}, "|", 2),
							createTextVNode(" " + toDisplayString(statusSummary.value.decisionLabel), 1)
						]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					class: normalizeClass([_ctx.$style.card, _ctx.$style.peopleCard]),
					"data-test-id": "workflow-review-detail-people-card"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requestedBy")), 1)]),
							_: 1
						}), __props.review.requester ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.person)
						}, [createVNode(unref(N8nAvatar_default), {
							"first-name": __props.review.requester.firstName,
							"last-name": __props.review.requester.lastName,
							size: "xsmall"
						}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(__props.review.requester)), 1)]),
							_: 1
						})], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: "text-light",
							size: "medium",
							"data-test-id": "workflow-review-detail-requester-deleted"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requesterDeleted")), 1)]),
							_: 1
						}))], 2),
						otherAuthors.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.section),
							"data-test-id": "workflow-review-detail-other-authors"
						}, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.otherAuthors")), 1)]),
							_: 1
						}), (openBlock(true), createElementBlock(Fragment, null, renderList(otherAuthors.value, (author) => {
							return openBlock(), createElementBlock("div", {
								key: author.id,
								class: normalizeClass(_ctx.$style.person)
							}, [createVNode(unref(N8nAvatar_default), {
								"first-name": author.firstName,
								"last-name": author.lastName,
								size: "xsmall"
							}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(author)), 1)]),
								_: 2
							}, 1024)], 2);
						}), 128))], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [
							createVNode(unref(N8nText_default), {
								bold: "",
								color: "text-light",
								size: "medium"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.reviewers")), 1)]),
								_: 1
							}),
							(openBlock(true), createElementBlock(Fragment, null, renderList(__props.review.reviewers, (reviewer) => {
								return openBlock(), createElementBlock("div", {
									key: reviewer.id,
									class: normalizeClass(_ctx.$style.person)
								}, [createVNode(unref(N8nAvatar_default), {
									"first-name": reviewer.firstName,
									"last-name": reviewer.lastName,
									size: "xsmall"
								}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(reviewer)), 1)]),
									_: 2
								}, 1024)], 2);
							}), 128)),
							__props.review.reviewers.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-light",
								size: "medium",
								"data-test-id": "workflow-review-detail-no-reviewers"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.noReviewers")), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						], 2)
					]),
					_: 1
				}, 8, ["class"]),
				detail.value?.workflows.length ? (openBlock(), createBlock(unref(N8nCard_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-changes-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.workflow")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.workflows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.workflows, (workflow) => {
						return openBlock(), createBlock(unref(N8nLink_default), {
							key: workflow.workflowId,
							to: {
								name: unref(VIEWS).WORKFLOW,
								params: { workflowId: workflow.workflowId }
							},
							theme: "text",
							size: "medium",
							class: normalizeClass(_ctx.$style.workflow),
							"data-test-id": "workflow-review-detail-workflow-link"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "workflow",
								size: "medium",
								class: normalizeClass(_ctx.$style.workflowIcon)
							}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.workflowName) }, toDisplayString(workflow.workflowName), 3)]),
							_: 2
						}, 1032, ["to", "class"]);
					}), 128))], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default = {
	metadata: "_metadata_ferqb_1",
	card: "_card_ferqb_13",
	status: "_status_ferqb_24",
	section: "_section_ferqb_30",
	workflows: "_workflows_ferqb_31",
	statusSeparator: "_statusSeparator_ferqb_38",
	peopleCard: "_peopleCard_ferqb_43",
	person: "_person_ferqb_47",
	workflow: "_workflow_ferqb_31",
	workflowName: "_workflowName_ferqb_69",
	workflowIcon: "_workflowIcon_ferqb_76"
};
var WorkflowReviewDetailMetadata_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDetailTabs.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailTabs",
	props: {
		review: {},
		tab: {},
		deciding: { type: Boolean }
	},
	emits: ["update:tab", "decide"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		provide(ReviewDetailScrollContainerKey, useTemplateRef("detailBody"));
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const viewerCanDecide = computed(() => detail.value?.viewerCanDecide ?? false);
		const viewerCanComment = computed(() => detail.value?.viewerCanComment ?? false);
		provide(ReviewLinkedWorkflowsKey, computed(() => new Map((detail.value?.workflows ?? []).map((workflow) => [workflow.workflowId, {
			workflowName: workflow.workflowName,
			pinnedVersionId: workflow.workflowVersionId,
			pinnedVersionName: workflow.pinnedVersion?.name ?? null
		}]))));
		const ineligibilityHint = computed(() => {
			if (!detail.value || detail.value.viewerCanDecide) return "";
			return detail.value.viewerDecisionIneligibilityReason === "author" ? i18n.baseText("workflowReviews.detail.decision.ineligible.author") : i18n.baseText("generic.missing.permissions");
		});
		/**
		* Whether to append the approved-and-published summary below the feed. Derived at read
		* time from the live published pointer, not from a `workflow.published` entry: an entry
		* can sit on an unfetched feed page, and it would keep the summary up after a newer
		* version replaced this one. The pointer cannot claim a publication that isn't live —
		* a failed publish either left the pin unpublished (no summary) or never touched a pin
		* that was already live (summary true) — and it is the signal the canvas banner trusts,
		* so the two cannot disagree. A lifecycle close needs no summary here: its
		* `review.closed` entry renders as a callout.
		*/
		const showApprovedAndPublished = computed(() => {
			const review = detail.value;
			if (!review || review.state !== "closed" || review.decision !== "approved") return false;
			return review.workflows.length > 0 && review.workflows.every((workflow) => workflow.workflowVersionId !== null && workflow.publishedVersionId === workflow.workflowVersionId);
		});
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.detail.tabs.activity"),
			value: "activity"
		}, {
			label: i18n.baseText("workflowReviews.detail.tabs.changes"),
			value: "changes"
		}]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "workflow-review-detail-tabs"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabRow) }, [createVNode(unref(N8nTabs_default), {
				"model-value": __props.tab,
				options: tabOptions.value,
				variant: "modern",
				"data-test-id": "workflow-review-detail-tab-bar",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:tab", $event))
			}, null, 8, ["model-value", "options"]), detail.value?.state === "open" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.decisionActions)
			}, [createVNode(WorkflowReviewDecisionPopover_default, {
				deciding: __props.deciding,
				"viewer-can-decide": viewerCanDecide.value,
				"viewer-can-comment": viewerCanComment.value,
				"ineligibility-hint": ineligibilityHint.value,
				onDecide: _cache[1] || (_cache[1] = ($event) => emit("decide", $event)),
				onCommentPosted: _cache[2] || (_cache[2] = ($event) => emit("update:tab", "activity"))
			}, null, 8, [
				"deciding",
				"viewer-can-decide",
				"viewer-can-comment",
				"ineligibility-hint"
			])], 2)) : createCommentVNode("", true)], 2), (openBlock(), createElementBlock("div", {
				key: `${__props.review.id}:${__props.tab}`,
				ref: "detailBody",
				class: normalizeClass(_ctx.$style.detailBody)
			}, [__props.tab === "activity" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.activityPanel),
				"data-test-id": "workflow-review-activity-panel"
			}, [(openBlock(), createBlock(WorkflowReviewActivityFeed_default, { key: __props.review.id }, createSlots({
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.descriptionCard) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					bold: "",
					color: "text-light",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.description")), 1)]),
					_: 1
				}), detail.value?.description ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base",
					size: "medium",
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "workflow-review-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(detail.value.description), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-review-no-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.noDescription")), 1)]),
					_: 1
				}))], 2)]),
				_: 2
			}, [showApprovedAndPublished.value ? {
				name: "footer",
				fn: withCtx(() => [createVNode(unref(N8nCallout_default), {
					theme: "success",
					class: normalizeClass(_ctx.$style.closedCallout),
					"data-test-id": "workflow-review-closed-callout"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.approvedAndPublished")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"])]),
				key: "0"
			} : void 0, __props.review.state === "open" ? {
				name: "composer",
				fn: withCtx(() => [createVNode(WorkflowReviewCommentComposer_default, { "can-comment": viewerCanComment.value }, null, 8, ["can-comment"])]),
				key: "1"
			} : void 0]), 1024))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "workflow-review-changes-panel"
			}, [!detail.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.unavailable")), 1)]),
				_: 1
			}, 8, ["class"])) : detail.value.workflows.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(detail.value.workflows, (workflow) => {
				return openBlock(), createBlock(WorkflowReviewChangesSection_default, {
					key: workflow.workflowId,
					workflow,
					state: detail.value.state,
					decision: detail.value.decision
				}, null, 8, [
					"workflow",
					"state",
					"decision"
				]);
			}), 128)) : (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-workflow-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.workflowUnavailable")), 1)]),
				_: 1
			}, 8, ["class"]))], 2)), createVNode(WorkflowReviewDetailMetadata_default, { review: __props.review }, null, 8, ["review"])], 2))], 2);
		};
	}
});
var WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1utw9_10",
	tabRow: "_tabRow_1utw9_19",
	detailBody: "_detailBody_1utw9_33",
	panel: "_panel_1utw9_43",
	activityPanel: "_activityPanel_1utw9_48",
	descriptionCard: "_descriptionCard_1utw9_55",
	callout: "_callout_1utw9_65",
	closedCallout: "_closedCallout_1utw9_70",
	closedCalloutContent: "_closedCalloutContent_1utw9_74",
	description: "_description_1utw9_55",
	decisionActions: "_decisionActions_1utw9_87"
};
var WorkflowReviewDetailTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/composables/useReviewInboxSectionCollapse.ts
var DEFAULT_COLLAPSED = {
	waiting: false,
	authored: false
};
/**
* Which inbox sections are collapsed, persisted per user. Collapsing only hides
* rows — the store keeps the loaded items and their cursors, so re-expanding
* never refetches.
*/
var useReviewInboxSectionCollapse = () => {
	const userId = useUsersStore().currentUserId;
	const collapsedSections = userId ? useLocalStorage(LOCAL_STORAGE_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS(userId), { ...DEFAULT_COLLAPSED }, { writeDefaults: false }) : ref({ ...DEFAULT_COLLAPSED });
	function isCollapsed(section) {
		return collapsedSections.value[section] ?? false;
	}
	function toggleSection(section) {
		collapsedSections.value = {
			...collapsedSections.value,
			[section]: !isCollapsed(section)
		};
	}
	return {
		collapsedSections,
		isCollapsed,
		toggleSection
	};
};
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"id",
	"aria-expanded",
	"aria-controls",
	"data-section",
	"onClick"
];
var _hoisted_2 = [
	"id",
	"aria-labelledby",
	"aria-label"
];
var _hoisted_3 = ["title"];
var _hoisted_4 = ["data-section"];
var WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsSidebar",
	props: {
		sections: {},
		loading: { type: Boolean },
		initialLoadFailed: { type: Boolean },
		activeTab: {},
		openCount: {},
		closedCount: {},
		selectedId: {}
	},
	emits: [
		"select",
		"clear",
		"update:activeTab",
		"loadMore",
		"retry",
		"retryActiveTab"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const { isCollapsed, toggleSection } = useReviewInboxSectionCollapse();
		/**
		* Admins see every review, including ones nobody assigned them, so "Waiting for
		* your review" would wrongly claim they are blocking.
		*/
		const usesImpersonalWaitingLabels = computed(() => usersStore.isAdminOrOwner);
		function sectionTitle(key) {
			return key === "waiting" && usesImpersonalWaitingLabels.value ? i18n.baseText("workflowReviews.sidebar.section.waiting.titleAdmin") : i18n.baseText(`workflowReviews.sidebar.section.${key}.title`);
		}
		const listRef = ref(null);
		const loadMoreSentinel = ref(null);
		function countTag(count) {
			return count === null ? void 0 : String(count);
		}
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.sidebar.tabs.open"),
			value: "open",
			tag: countTag(props.openCount)
		}, {
			label: i18n.baseText("workflowReviews.sidebar.tabs.closed"),
			value: "closed",
			tag: countTag(props.closedCount)
		}]);
		function isCollapsibleSection(key) {
			return key !== "closed";
		}
		const hasUsableRows = computed(() => props.sections.some((section) => section.items.length > 0));
		const showInitialLoadError = computed(() => props.initialLoadFailed && !hasUsableRows.value);
		const groups = computed(() => props.sections.map((section) => {
			const collapsibleKey = isCollapsibleSection(section.key) ? section.key : null;
			return {
				key: section.key,
				section,
				collapsible: collapsibleKey !== null,
				title: collapsibleKey ? sectionTitle(collapsibleKey) : null,
				collapsed: collapsibleKey !== null && isCollapsed(collapsibleKey),
				headerId: `workflow-review-section-header-${section.key}`,
				groupId: `workflow-review-section-group-${section.key}`,
				visible: section.error !== null || section.items.length > 0 || section.hasMore
			};
		}).filter((group) => group.visible && !props.loading && !showInitialLoadError.value));
		/** The closed tab keeps infinite scroll; the open tab loads more explicitly. */
		const closedSentinelActive = computed(() => props.sections.length === 1 && props.sections[0].key === "closed");
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listRef,
			threshold: .01,
			onIntersect: () => emit("loadMore", "closed")
		});
		watch([
			loadMoreSentinel,
			closedSentinelActive,
			() => props.sections[0]?.hasMore,
			() => props.sections[0]?.loadingMore,
			() => props.sections[0]?.items.length
		], ([sentinel, sentinelActive, hasMore, loadingMore]) => {
			if (sentinel && sentinelActive && hasMore && !loadingMore) observeForLoadMore(sentinel);
		}, {
			immediate: true,
			flush: "post"
		});
		function onTabChange(value) {
			emit("update:activeTab", String(value));
		}
		function onSectionHeaderClick(key) {
			if (isCollapsibleSection(key)) toggleSection(key);
		}
		function onListBackgroundClick() {
			if (props.selectedId) emit("clear");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.sidebar),
				"data-test-id": "workflow-reviews-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-reviews-page-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.page.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nTabs_default), {
					"model-value": __props.activeTab,
					options: tabOptions.value,
					variant: "modern",
					"data-test-id": "workflow-reviews-tabs",
					"onUpdate:modelValue": onTabChange
				}, null, 8, ["model-value", "options"])], 2),
				createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					class: normalizeClass(_ctx.$style.list),
					onClick: withModifiers(onListBackgroundClick, ["self"])
				}, [
					__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						loading: true,
						rows: 3,
						"data-test-id": "workflow-review-list-skeleton"
					})) : showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionError),
						"data-test-id": "workflow-review-list-error"
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.sidebar.error")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "mini",
						label: unref(i18n).baseText("generic.retry"),
						"data-test-id": "workflow-review-list-retry",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("retryActiveTab"))
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
						return openBlock(), createElementBlock("div", {
							key: group.key,
							class: normalizeClass(_ctx.$style.section)
						}, [
							group.title ? (openBlock(), createElementBlock("button", {
								key: 0,
								id: group.headerId,
								type: "button",
								class: normalizeClass(_ctx.$style.sectionHeader),
								"aria-expanded": !group.collapsed,
								"aria-controls": group.groupId,
								"data-section": group.key,
								"data-test-id": "workflow-review-section-header",
								onClick: ($event) => onSectionHeaderClick(group.key)
							}, [createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: "small",
								class: normalizeClass([_ctx.$style.chevron, { [_ctx.$style.chevronCollapsed]: group.collapsed }])
							}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
								bold: "",
								size: "small",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(group.title), 1)]),
								_: 2
							}, 1024)], 10, _hoisted_1)) : createCommentVNode("", true),
							createBaseVNode("div", {
								id: group.groupId,
								role: "listbox",
								class: normalizeClass(_ctx.$style.group),
								"aria-labelledby": group.title ? group.headerId : void 0,
								"aria-label": group.title ? void 0 : unref(i18n).baseText("workflowReviews.sidebar.tabs.closed")
							}, [!group.collapsed ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(group.section.items, (item) => {
								return openBlock(), createBlock(unref(N8nCard_default), {
									key: item.id,
									class: normalizeClass([_ctx.$style.card, { [_ctx.$style.cardSelected]: __props.selectedId === item.id }]),
									"data-test-id": "workflow-review-request-row",
									role: "option",
									tabindex: "0",
									"aria-selected": __props.selectedId === item.id,
									onClick: ($event) => emit("select", item.id),
									onKeydown: [withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["space"])]
								}, {
									default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nText_default), {
										bold: "",
										tag: "h3",
										class: normalizeClass(_ctx.$style.cardTitle)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
										_: 2
									}, 1032, ["class"]), createVNode(WorkflowReviewStatusDot_default, {
										state: item.state,
										decision: item.decision
									}, null, 8, ["state", "decision"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMeta) }, [item.workflowName ? (openBlock(), createBlock(unref(N8nBadge_default), {
										key: 0,
										variant: "outline",
										class: normalizeClass(_ctx.$style.workflowBadge),
										"data-test-id": "workflow-review-request-workflow-badge"
									}, {
										default: withCtx(() => [createBaseVNode("span", {
											class: normalizeClass(_ctx.$style.workflowBadgeText),
											title: item.workflowName
										}, [createVNode(unref(N8nIcon_default), {
											icon: "workflow",
											size: "small"
										}), createBaseVNode("span", null, toDisplayString(item.workflowName), 1)], 10, _hoisted_3)]),
										_: 2
									}, 1032, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMetaActions) }, [createVNode(unref(N8nText_default), {
										size: "xsmall",
										color: "text-light",
										class: normalizeClass(_ctx.$style.cardMetaTime),
										"data-test-id": "workflow-review-request-created-at"
									}, {
										default: withCtx(() => [createVNode(TimeAgo_default, { date: item.createdAt }, null, 8, ["date"])]),
										_: 2
									}, 1032, ["class"])], 2)], 2)], 2)]),
									_: 2
								}, 1032, [
									"class",
									"aria-selected",
									"onClick",
									"onKeydown"
								]);
							}), 128)) : createCommentVNode("", true)], 10, _hoisted_2),
							!group.collapsed ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
								group.section.loadingMore ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.loadingMore)
								}, [createVNode(unref(N8nLoading_default), {
									loading: true,
									rows: 1
								})], 2)) : createCommentVNode("", true),
								group.section.error ? (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.sectionError),
									"data-section": group.key,
									"data-test-id": "workflow-review-section-error"
								}, [createVNode(unref(N8nText_default), {
									color: "danger",
									size: "small"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.sidebar.error")), 1)]),
									_: 1
								}), createVNode(unref(N8nButton_default), {
									variant: "subtle",
									size: "mini",
									label: unref(i18n).baseText("generic.retry"),
									"data-section": group.key,
									"data-test-id": "workflow-review-section-retry",
									onClick: ($event) => emit("retry", group.key)
								}, null, 8, [
									"label",
									"data-section",
									"onClick"
								])], 10, _hoisted_4)) : createCommentVNode("", true),
								group.collapsible && group.section.hasMore ? (openBlock(), createBlock(unref(N8nButton_default), {
									key: 2,
									variant: "subtle",
									size: "small",
									class: normalizeClass(_ctx.$style.loadMoreButton),
									label: unref(i18n).baseText("workflowReviews.sidebar.loadMore"),
									loading: group.section.loadingMore,
									"data-section": group.key,
									"data-test-id": "workflow-review-section-load-more",
									onClick: ($event) => emit("loadMore", group.key)
								}, null, 8, [
									"class",
									"label",
									"loading",
									"data-section",
									"onClick"
								])) : createCommentVNode("", true)
							], 64)) : createCommentVNode("", true)
						], 2);
					}), 128)),
					closedSentinelActive.value && !__props.loading && !showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)) : createCommentVNode("", true)
				], 2)
			], 2);
		};
	}
});
var WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sidebar: "_sidebar_q98ng_1",
	columnTitle: "_columnTitle_q98ng_10",
	header: "_header_q98ng_17",
	list: "_list_q98ng_34",
	section: "_section_q98ng_44",
	group: "_group_q98ng_51",
	sectionHeader: "_sectionHeader_q98ng_58",
	chevron: "_chevron_q98ng_77",
	chevronCollapsed: "_chevronCollapsed_q98ng_82",
	sectionError: "_sectionError_q98ng_86",
	card: "_card_q98ng_94",
	cardSelected: "_cardSelected_q98ng_100",
	cardContent: "_cardContent_q98ng_113",
	cardHeader: "_cardHeader_q98ng_122",
	cardTitle: "_cardTitle_q98ng_131",
	cardMeta: "_cardMeta_q98ng_139",
	cardMetaActions: "_cardMetaActions_q98ng_148",
	cardMetaTime: "_cardMetaTime_q98ng_156",
	workflowBadge: "_workflowBadge_q98ng_160",
	workflowBadgeText: "_workflowBadgeText_q98ng_172",
	loadMoreButton: "_loadMoreButton_q98ng_187",
	loadingMore: "_loadingMore_q98ng_191",
	sentinel: "_sentinel_q98ng_195"
};
var WorkflowReviewRequestsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/reviewInbox.store.ts
var DEFAULT_LIMIT = 15;
/** One keyset-paginated list with its own pagination and load-more state. */
function createInboxListSlice(requestPage) {
	const items = ref([]);
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const error = ref(null);
	const failedRequest = ref(null);
	let requestSeq = 0;
	function applyResponse(response, { append }) {
		items.value = append ? [...items.value, ...response.data] : response.data;
		nextCursor.value = response.nextCursor;
		hasMore.value = response.hasMore;
	}
	async function fetchList() {
		const seq = ++requestSeq;
		items.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loadingMore.value = false;
		loading.value = true;
		error.value = null;
		failedRequest.value = null;
		try {
			const response = await requestPage();
			if (seq !== requestSeq) return;
			applyResponse(response, { append: false });
		} catch (e) {
			if (seq !== requestSeq) return;
			error.value = toError(e);
			failedRequest.value = "list";
		} finally {
			if (seq === requestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		if (loading.value || loadingMore.value || !hasMore.value || !nextCursor.value) return;
		const seq = ++requestSeq;
		const cursor = nextCursor.value;
		loadingMore.value = true;
		error.value = null;
		failedRequest.value = null;
		try {
			const response = await requestPage(cursor);
			if (seq !== requestSeq) return;
			applyResponse(response, { append: true });
		} catch (e) {
			if (seq !== requestSeq) return;
			error.value = toError(e);
			failedRequest.value = "loadMore";
		} finally {
			if (seq === requestSeq) loadingMore.value = false;
		}
	}
	async function retry() {
		if (failedRequest.value === "loadMore") {
			await loadMore();
			return;
		}
		await fetchList();
	}
	function findItem(id) {
		return items.value.find((candidate) => candidate.id === id) ?? null;
	}
	function removeItem(id) {
		items.value = items.value.filter((candidate) => candidate.id !== id);
	}
	function reset() {
		requestSeq += 1;
		items.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		error.value = null;
		failedRequest.value = null;
	}
	return {
		items,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		error,
		isEmpty: computed(() => !loading.value && error.value === null && items.value.length === 0),
		initialLoadFailed: computed(() => failedRequest.value === "list"),
		fetchList,
		loadMore,
		retry,
		findItem,
		removeItem,
		reset
	};
}
var useReviewInboxStore = defineStore("workflowReviewInbox", () => {
	const rootStore = useRootStore();
	const openCount = ref(null);
	const closedCount = ref(null);
	const detail = ref(null);
	const detailLoading = ref(false);
	const detailNotFound = ref(false);
	const activeTab = ref("open");
	let summaryRequestSeq = 0;
	let detailRequestSeq = 0;
	function requestPage(state, category) {
		return async (cursor) => await fetchWorkflowReviewInbox(rootStore.restApiContext, {
			state,
			category,
			limit: DEFAULT_LIMIT,
			cursor
		});
	}
	/**
	* Plain object of slices, not a `ref`/`reactive` wrapper: the slice internals
	* stay refs and Pinia unwraps them on access, so consumers read
	* `store.sections.waiting.items` directly. `storeToRefs` does not reach into
	* this object.
	*/
	const sections = {
		waiting: createInboxListSlice(requestPage("open", "waiting")),
		authored: createInboxListSlice(requestPage("open", "authored")),
		closed: createInboxListSlice(requestPage("closed"))
	};
	const allSlices = [
		sections.waiting,
		sections.authored,
		sections.closed
	];
	const activeSlices = computed(() => activeTab.value === "closed" ? [sections.closed] : [sections.waiting, sections.authored]);
	const hasItemsInActiveTab = computed(() => activeSlices.value.some((slice) => slice.items.value.length > 0));
	const isLoadingActiveTab = computed(() => activeSlices.value.some((slice) => slice.loading.value));
	const activeTabInitialLoadFailed = computed(() => activeSlices.value.some((slice) => slice.initialLoadFailed.value));
	const isEmpty = computed(() => activeSlices.value.every((slice) => slice.isEmpty.value));
	/**
	* Both open sections start together and settle before the tab is rendered.
	* Each slice still owns its pagination state after the initial load.
	*/
	async function fetchActiveTab() {
		if (activeTab.value === "closed") {
			await sections.closed.fetchList();
			return;
		}
		await Promise.all([sections.waiting.fetchList(), sections.authored.fetchList()]);
	}
	async function fetchSummary() {
		const requestSeq = ++summaryRequestSeq;
		try {
			const summary = await fetchWorkflowReviewInboxSummary(rootStore.restApiContext);
			if (requestSeq !== summaryRequestSeq) return;
			openCount.value = summary.open;
			closedCount.value = summary.closed;
		} catch {}
	}
	async function loadMore(section) {
		await sections[section].loadMore();
	}
	async function retry(section) {
		await sections[section].retry();
	}
	async function setActiveTab(tab) {
		if (activeTab.value === tab) return;
		activeTab.value = tab;
		await fetchActiveTab();
	}
	function findItemById(id) {
		for (const slice of allSlices) {
			const item = slice.findItem(id);
			if (item) return item;
		}
		return null;
	}
	async function fetchDetail(id) {
		const requestSeq = ++detailRequestSeq;
		if (detail.value?.id !== id) {
			detail.value = null;
			detailLoading.value = true;
			detailNotFound.value = false;
		}
		try {
			const response = await fetchWorkflowReviewRequestDetail(rootStore.restApiContext, id);
			if (requestSeq !== detailRequestSeq) return;
			detail.value = response;
			detailNotFound.value = false;
		} catch (e) {
			if (requestSeq !== detailRequestSeq) return;
			if (e instanceof ResponseError && e.httpStatusCode === 404) {
				detailNotFound.value = true;
				return;
			}
			throw e;
		} finally {
			if (requestSeq === detailRequestSeq) detailLoading.value = false;
		}
	}
	function clearDetail() {
		detailRequestSeq += 1;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
	}
	/**
	* Submit a decision and patch the affected item in place. Approving closes
	* the request; the closed tab refetches on activation and picks it up there.
	* Decisions never change authorship, so an item never moves between the
	* waiting and authored sections. Returns the response so callers can surface
	* the auto-publish outcome.
	*/
	async function decideOnReview(id, input) {
		const summary = await decideWorkflowReviewRequest(rootStore.restApiContext, id, input);
		const item = findItemById(id);
		if (item) {
			item.decision = summary.decision;
			item.state = summary.state;
			item.updatedAt = summary.updatedAt;
		}
		if (detail.value?.id === id) {
			detail.value.decision = summary.decision;
			detail.value.state = summary.state;
			detail.value.updatedAt = summary.updatedAt;
		}
		if (summary.state === "closed") {
			if (openCount.value !== null) openCount.value = Math.max(0, openCount.value - 1);
			if (closedCount.value !== null) closedCount.value += 1;
		}
		if (item && item.state !== activeTab.value) for (const slice of allSlices) slice.removeItem(id);
		return summary;
	}
	function reset() {
		summaryRequestSeq += 1;
		detailRequestSeq += 1;
		openCount.value = null;
		closedCount.value = null;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
		activeTab.value = "open";
		for (const slice of allSlices) slice.reset();
	}
	return {
		openCount,
		closedCount,
		sections,
		detail,
		detailLoading,
		detailNotFound,
		activeTab,
		isEmpty,
		isLoadingActiveTab,
		activeTabInitialLoadFailed,
		hasItemsInActiveTab,
		fetchSummary,
		fetchActiveTab,
		loadMore,
		retry,
		setActiveTab,
		findItemById,
		fetchDetail,
		clearDetail,
		decideOnReview,
		reset
	};
});
//#endregion
//#region src/features/workflow-reviews/views/WorkflowReviewRequestsView.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsView",
	setup(__props) {
		const store = useReviewInboxStore();
		const activityStore = useReviewActivityStore();
		const { activeTab, detail, detailLoading, detailNotFound, isEmpty, isLoadingActiveTab, activeTabInitialLoadFailed, hasItemsInActiveTab, openCount, closedCount } = storeToRefs(store);
		function toSidebarSection(key) {
			const slice = store.sections[key];
			return {
				key,
				items: slice.items,
				loadingMore: slice.loadingMore,
				hasMore: slice.hasMore,
				error: slice.error
			};
		}
		const sidebarSections = computed(() => activeTab.value === "closed" ? [toSidebarSection("closed")] : [toSidebarSection("waiting"), toSidebarSection("authored")]);
		const route = useRoute();
		const router = useRouter();
		const contentRef = ref(null);
		const sidebarResizer = useResizablePanel({
			container: contentRef,
			width: {
				localStorageKey: LOCAL_STORAGE_WORKFLOW_REVIEW_SIDEBAR_WIDTH,
				defaultSize: function getDefaultWidth(size) {
					return Math.min(Math.max(size * .25, 240), 400);
				},
				minSize: 240,
				maxSize: function getMaxWidth(size) {
					return Math.min(size * .5, 640);
				},
				snap: true
			}
		});
		const sidebarWidth = sidebarResizer.width;
		function firstParam(value) {
			return (Array.isArray(value) ? value[0] : value) || null;
		}
		const selectedReviewId = computed(() => firstParam(route.params.reviewRequestId));
		/**
		* Watchers and resolved requests below both reach this view after the viewer may have left it,
		* where the query params it writes mean something else entirely.
		*/
		function isOnInbox() {
			return route.name === WORKFLOW_REVIEW_REQUESTS_VIEW;
		}
		function stateFromQuery(value) {
			return value === "closed" ? "closed" : "open";
		}
		store.reset();
		activityStore.reset();
		store.activeTab = stateFromQuery(route.query[REVIEW_INBOX_QUERY_PARAM.state]);
		const selectedListItem = computed(() => selectedReviewId.value ? store.findItemById(selectedReviewId.value) : null);
		const selectedItem = computed(() => detail.value ?? selectedListItem.value);
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		documentTitle.set(i18n.baseText("workflowReviews.page.title"));
		const reviewsIcon = {
			type: "cards",
			center: "message-square-text",
			sides: [
				"file-diff",
				"git-branch",
				"circle-check",
				"list",
				"message-square"
			]
		};
		const alertIcon = {
			type: "icon",
			value: "circle-alert"
		};
		const noSelectionHeading = computed(() => {
			const count = activeTab.value === "closed" ? closedCount.value : openCount.value;
			if (count === null) return activeTab.value === "closed" ? i18n.baseText("workflowReviews.closedReviews") : i18n.baseText("workflowReviews.openReviews");
			return i18n.baseText(`workflowReviews.noSelection.title.${activeTab.value}`, {
				adjustToNumber: count,
				interpolate: { count: String(count) }
			});
		});
		let isMounted = false;
		function handleLoadError(error) {
			if (!isMounted) return;
			showError(error, i18n.baseText("workflowReviews.error.load"));
		}
		watch(selectedReviewId, (id) => {
			if (!isOnInbox()) return;
			if (id) {
				store.fetchDetail(id).catch(handleLoadError);
				activityStore.fetchFeed(id);
			} else {
				store.clearDetail();
				activityStore.reset();
			}
		}, { immediate: true });
		watch(() => route.query[REVIEW_INBOX_QUERY_PARAM.state], (next) => {
			if (!isOnInbox()) return;
			store.setActiveTab(stateFromQuery(next));
		});
		function onSelect(id) {
			const query = { ...route.query };
			if (id !== selectedReviewId.value) delete query[REVIEW_INBOX_QUERY_PARAM.tab];
			router.replace({
				params: { reviewRequestId: id },
				query
			});
		}
		function onClearSelection() {
			router.replace({
				params: { reviewRequestId: "" },
				query: route.query
			});
		}
		function onActiveTabChange(tab) {
			const query = { ...route.query };
			if (tab === "closed") query[REVIEW_INBOX_QUERY_PARAM.state] = tab;
			else delete query[REVIEW_INBOX_QUERY_PARAM.state];
			router.replace({ query });
		}
		const detailTab = computed(() => route.query[REVIEW_INBOX_QUERY_PARAM.tab] === "changes" ? "changes" : "activity");
		function onDetailTabChange(tab) {
			if (!isOnInbox()) return;
			const query = { ...route.query };
			if (tab === "changes") query[REVIEW_INBOX_QUERY_PARAM.tab] = tab;
			else delete query[REVIEW_INBOX_QUERY_PARAM.tab];
			router.replace({ query });
		}
		function onLoadMore(section) {
			store.loadMore(section);
		}
		function onRetrySection(section) {
			store.retry(section);
		}
		function onRetryActiveTab() {
			store.fetchActiveTab();
		}
		const deciding = ref(false);
		function asSentence(message) {
			const trimmed = message.trim();
			return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
		}
		/**
		* A decision that closes the review drops its card from the open list, which
		* would leave the detail on screen with nothing selected in the sidebar. Follow
		* it to the closed tab instead, keeping the selection. The `state` query watcher
		* refetches the list from here.
		*/
		function followClosedReview(id) {
			if (!isOnInbox()) return;
			if (activeTab.value === "closed") return;
			router.replace({
				params: { reviewRequestId: id },
				query: {
					...route.query,
					[REVIEW_INBOX_QUERY_PARAM.state]: "closed"
				}
			});
		}
		async function onDecide(id, input) {
			deciding.value = true;
			try {
				const { autoPublish, state } = await store.decideOnReview(id, input);
				if (selectedReviewId.value === id) {
					activityStore.clearDecisionNote(input.note ?? "");
					activityStore.fetchFeed(id);
					if (state === "closed") {
						store.fetchDetail(id).catch(handleLoadError);
						followClosedReview(id);
					}
				}
				if (!isMounted) return;
				if (autoPublish?.status === "published") showMessage({
					type: "success",
					title: i18n.baseText("workflowReviews.decision.approved.published.title"),
					message: i18n.baseText("workflowReviews.decision.approved.published.message")
				});
				else if (autoPublish?.status === "failed") showMessage({
					type: "warning",
					duration: 0,
					title: i18n.baseText("workflowReviews.decision.approved.publishFailed.title"),
					message: i18n.baseText("workflowReviews.decision.approved.publishFailed.message", { interpolate: { message: asSentence(autoPublish.message) } })
				});
			} catch (error) {
				if (!isMounted) return;
				showError(error, i18n.baseText("workflowReviews.decision.error.title"));
				try {
					await Promise.all([store.fetchActiveTab(), selectedReviewId.value ? store.fetchDetail(selectedReviewId.value) : void 0]);
				} catch (refetchError) {
					handleLoadError(refetchError);
				}
				if (selectedReviewId.value === id) activityStore.fetchFeed(id);
			} finally {
				deciding.value = false;
			}
		}
		onMounted(() => {
			isMounted = true;
			store.fetchSummary();
			store.fetchActiveTab();
		});
		onUnmounted(() => {
			isMounted = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, {
				class: normalizeClass(_ctx.$style.layout),
				"full-width": "",
				"data-test-id": "workflow-review-requests-view"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					ref_key: "contentRef",
					ref: contentRef,
					class: normalizeClass(_ctx.$style.content)
				}, [createVNode(unref(N8nResizeWrapper_default), {
					class: normalizeClass(_ctx.$style.sidebarResizer),
					style: normalizeStyle({ width: `${unref(sidebarWidth)}px` }),
					resizer: unref(sidebarResizer),
					"supported-directions": ["right"],
					"data-test-id": "workflow-reviews-sidebar-resizer"
				}, {
					default: withCtx(() => [createVNode(WorkflowReviewRequestsSidebar_default, {
						class: normalizeClass(_ctx.$style.sidebar),
						sections: sidebarSections.value,
						loading: unref(isLoadingActiveTab),
						"initial-load-failed": unref(activeTabInitialLoadFailed),
						"active-tab": unref(activeTab),
						"open-count": unref(openCount),
						"closed-count": unref(closedCount),
						"selected-id": selectedReviewId.value,
						onSelect,
						onClear: onClearSelection,
						"onUpdate:activeTab": onActiveTabChange,
						onLoadMore,
						onRetry: onRetrySection,
						onRetryActiveTab
					}, null, 8, [
						"class",
						"sections",
						"loading",
						"initial-load-failed",
						"active-tab",
						"open-count",
						"closed-count",
						"selected-id"
					])]),
					_: 1
				}, 8, [
					"class",
					"style",
					"resizer"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [selectedItem.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.reviewTitle),
					"data-test-id": "workflow-review-request-title-row"
				}, [createVNode(WorkflowReviewStatusDot_default, {
					state: selectedItem.value.state,
					decision: selectedItem.value.decision
				}, null, 8, ["state", "decision"]), createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-review-request-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedItem.value.title), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [selectedReviewId.value && unref(detailNotFound) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-review-detail-not-found"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: alertIcon,
					heading: unref(i18n).baseText("workflowReviews.detail.notFound.title"),
					description: unref(i18n).baseText("workflowReviews.detail.notFound.body")
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : selectedReviewId.value && unref(detailLoading) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.detailSkeleton)
				}, [createVNode(unref(N8nLoading_default), {
					loading: true,
					rows: 3
				})], 2)) : selectedItem.value ? (openBlock(), createBlock(WorkflowReviewDetailTabs_default, {
					key: 2,
					review: selectedItem.value,
					tab: detailTab.value,
					deciding: deciding.value,
					"onUpdate:tab": onDetailTabChange,
					onDecide: _cache[0] || (_cache[0] = ($event) => onDecide(selectedItem.value.id, $event))
				}, null, 8, [
					"review",
					"tab",
					"deciding"
				])) : unref(isLoadingActiveTab) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 3,
					loading: true,
					rows: 3
				})) : unref(activeTabInitialLoadFailed) && !unref(hasItemsInActiveTab) ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-load-error"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: alertIcon,
					heading: unref(i18n).baseText("workflowReviews.error.load"),
					"button-text": unref(i18n).baseText("generic.retry"),
					"onClick:button": onRetryActiveTab
				}, null, 8, [
					"class",
					"heading",
					"button-text"
				])], 2)) : unref(isEmpty) ? (openBlock(), createElementBlock("div", {
					key: 5,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-empty-state"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: reviewsIcon,
					heading: unref(i18n).baseText(`workflowReviews.emptyState.title.${unref(activeTab)}`),
					description: unref(i18n).baseText(`workflowReviews.emptyState.body.${unref(activeTab)}`)
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : unref(hasItemsInActiveTab) ? (openBlock(), createElementBlock("div", {
					key: 6,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-no-selection"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: reviewsIcon,
					heading: noSelectionHeading.value,
					description: unref(i18n).baseText("workflowReviews.noSelection.body")
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : createCommentVNode("", true)], 2)], 2)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_1r03k_113",
	content: "_content_1r03k_117",
	sidebarResizer: "_sidebarResizer_1r03k_130",
	main: "_main_1r03k_134",
	sidebar: "_sidebar_1r03k_130",
	columnTitle: "_columnTitle_1r03k_155",
	reviewTitle: "_reviewTitle_1r03k_162",
	mainBody: "_mainBody_1r03k_169",
	detailSkeleton: "_detailSkeleton_1r03k_175",
	emptyStateWrapper: "_emptyStateWrapper_1r03k_179",
	emptyState: "_emptyState_1r03k_179"
};
var WorkflowReviewRequestsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowReviewRequestsView_default as default };

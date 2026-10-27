import { Ad as createElementBlock, Cd as Fragment, Cf as reactive, Dd as createBaseVNode, Ed as computed, Id as defineComponent, Nd as createTextVNode, Nf as unref, Od as createBlock, Pd as createVNode, Qd as openBlock, Sd as withModifiers, Tf as ref, Ud as mergeModels, Yd as onMounted, ap as toDisplayString, df as watch, ef as renderList, ep as normalizeClass, jd as createSlots, kd as createCommentVNode, pf as withCtx, rs as useRouter, sf as useModel, tf as renderSlot } from "./vendor-DtL-V0ia.js";
import { CE as N8nButton_default, CT as N8nFormInput_default, Cy as VIEWS, DE as _plugin_vue_export_helper_default, Ey as useTelemetry, Fg as TELEMETRY_EVENT, Is as TimeAgo_default, J_ as MODAL_CONFIRM, LT as N8nOption_default, ME as useI18n, Oy as useUsersStore, PT as N8nSelect_default, Sy as useToast, TT as N8nInputLabel_default, _ as toPreferenceSortOption, _E as N8nTooltip_default, _w as N8nDataTableServer_default, b as PREFERENCES_PAGE_SIZES, d as preferenceAudience, ew as useMessage, f as preferenceCreatorLabel, g as toPreferencePermissions, h as preferenceWriteRejectionReason, hE as N8nText_default, i as canWriteInstanceScope, jT as N8nHeading_default, lm as useProjectsStore, lw as DialogFooter_default, m as preferenceUserName, nT as SettingsPageHeader_default, o as canWriteProjectScope, og as DEFAULT_PROJECT_ICON, p as preferenceScope, qf as useDocumentTitle, rT as SettingsLayout_default, uE as N8nBadge_default, uw as Dialog_default, v as PREFERENCES_DEFAULT_PAGE_SIZE, wE as N8nIcon_default, x as PREFERENCE_TEXT_MAX_LENGTH, y as PREFERENCES_DEFAULT_SORT_BY } from "./app-BdR1u3Ua.js";
import { t as useContextStore } from "./context.store-B9LuIn_O.js";
import { t as useElementOverflow } from "./useElementOverflow-8CnQUrFH.js";
//#region src/features/settings/context/components/PreferenceModal.vue?vue&type=script&setup=true&lang.ts
/** Owned by the preferences page: `open`, the row to edit or null, and `saved` to reload. */
var USER_SCOPE_VALUE = "user";
var INSTANCE_SCOPE_VALUE = "instance";
var USER_SCOPE_PREFIX = "user:";
var PROJECT_SCOPE_PREFIX = "project:";
/** The current target when the caller's own list lacks it, such as another user's row. */
var PreferenceModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreferenceModal",
	props: {
		open: { type: Boolean },
		preference: {}
	},
	emits: ["update:open", "saved"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const mode = computed(() => props.preference ? "edit" : "new");
		const preference = computed(() => props.preference);
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { showError } = useToast();
		const projectsStore = useProjectsStore();
		const usersStore = useUsersStore();
		const contextStore = useContextStore();
		const loading = ref(false);
		/** A save reports back only while its opening is current, so it never closes a newer dialog. */
		let openToken = 0;
		const projectScopeValue = (id) => `${PROJECT_SCOPE_PREFIX}${id}`;
		const userScopeValue = (id) => `${USER_SCOPE_PREFIX}${id}`;
		const USER_ICON = {
			type: "icon",
			value: "user"
		};
		const INSTANCE_ICON = {
			type: "icon",
			value: "globe"
		};
		const currentUserId = computed(() => usersStore.currentUser?.id);
		function initialScopeValue() {
			const editing = preference.value;
			if (!editing) return USER_SCOPE_VALUE;
			const scope = preferenceScope(editing);
			if (scope === "instance") return INSTANCE_SCOPE_VALUE;
			if (scope === "project" && editing.projectId) return projectScopeValue(editing.projectId);
			if (editing.userId && editing.userId !== currentUserId.value) return userScopeValue(editing.userId);
			return USER_SCOPE_VALUE;
		}
		const initialScope = ref(initialScopeValue());
		const form = reactive({
			content: preference.value?.content ?? "",
			scope: initialScope.value
		});
		function resetForm() {
			initialScope.value = initialScopeValue();
			form.content = preference.value?.content ?? "";
			form.scope = initialScope.value;
			contentValid.value = false;
		}
		const contentValid = ref(false);
		const contentValidationRules = [{ name: "REQUIRED" }, {
			name: "MAX_LENGTH",
			config: { maximum: PREFERENCE_TEXT_MAX_LENGTH }
		}];
		const trimmedContent = computed(() => form.content.trim());
		function currentTargetOption(editing) {
			const audience = preferenceAudience(editing, currentUserId.value);
			if (audience.kind === "user") return {
				value: initialScope.value,
				label: i18n.baseText("settings.context.preferences.scope.otherUser", { interpolate: { name: preferenceUserName(audience.user) } }),
				icon: USER_ICON,
				usable: true
			};
			if (audience.kind === "personalProject") return {
				value: initialScope.value,
				label: i18n.baseText("settings.context.preferences.scope.otherPersonalProject", { interpolate: { name: audience.ownerName } }),
				icon: USER_ICON,
				usable: true
			};
			return {
				value: initialScope.value,
				label: editing.project?.name ?? editing.projectId ?? "",
				icon: editing.project?.icon ?? DEFAULT_PROJECT_ICON,
				usable: true
			};
		}
		const scopeOptions = computed(() => {
			const options = [{
				value: USER_SCOPE_VALUE,
				label: i18n.baseText("settings.context.preferences.scope.user"),
				icon: USER_ICON,
				usable: true
			}];
			const personal = projectsStore.myProjects.find((project) => project.type === "personal");
			if (personal) options.push({
				value: projectScopeValue(personal.id),
				label: i18n.baseText("settings.context.preferences.scope.personalProject"),
				icon: USER_ICON,
				usable: canWriteProjectScope(personal.id)
			});
			options.push({
				value: INSTANCE_SCOPE_VALUE,
				label: i18n.baseText("settings.context.preferences.scope.instance"),
				icon: INSTANCE_ICON,
				usable: canWriteInstanceScope()
			});
			options.push(...projectsStore.myProjects.filter((project) => project.type === "team").map((project) => ({
				value: projectScopeValue(project.id),
				label: project.name ?? project.id,
				icon: project.icon ?? DEFAULT_PROJECT_ICON,
				usable: canWriteProjectScope(project.id)
			})));
			const editing = preference.value;
			if (editing && !options.some((option) => option.value === initialScope.value)) options.unshift(currentTargetOption(editing));
			const canLeave = !editing || toPreferencePermissions(editing).delete;
			return options.filter((option) => option.value === initialScope.value || canLeave && option.usable);
		});
		const selectedIcon = computed(() => scopeOptions.value.find((option) => option.value === form.scope)?.icon ?? DEFAULT_PROJECT_ICON);
		const modalTitle = computed(() => mode.value === "new" ? i18n.baseText("settings.context.preferences.modal.title.create") : i18n.baseText("settings.context.preferences.modal.title.edit"));
		const isValid = computed(() => contentValid.value && trimmedContent.value.length > 0);
		function parseScope() {
			if (form.scope === USER_SCOPE_VALUE) return {
				scope: "user",
				projectId: null,
				userId: mode.value === "edit" ? currentUserId.value ?? null : null
			};
			if (form.scope === INSTANCE_SCOPE_VALUE) return {
				scope: "instance",
				projectId: null,
				userId: null
			};
			if (form.scope.startsWith(USER_SCOPE_PREFIX)) return {
				scope: "user",
				projectId: null,
				userId: form.scope.slice(5)
			};
			return {
				scope: "project",
				projectId: form.scope.slice(8),
				userId: null
			};
		}
		function closeModal() {
			emit("update:open", false);
		}
		async function handleSubmit() {
			if (!isValid.value || loading.value) return;
			const token = openToken;
			const { scope, projectId, userId } = parseScope();
			const content = trimmedContent.value;
			const payload = {
				content,
				scope,
				projectId,
				...userId ? { userId } : {}
			};
			try {
				loading.value = true;
				if (mode.value === "new") {
					await contextStore.createPreference(payload);
					telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_CREATED_PREFERENCE, {
						scope_type: scope,
						text_length: content.length,
						...projectId ? { project_id: projectId } : {}
					});
				} else if (preference.value) {
					await contextStore.updatePreference(preference.value.id, payload);
					telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_UPDATED_PREFERENCE, {
						scope_type: scope,
						text_length: content.length,
						scope_changed: form.scope !== initialScope.value,
						...projectId ? { project_id: projectId } : {},
						surface: "ui"
					});
				}
				if (token === openToken) emit("saved");
			} catch (error) {
				telemetry.track(TELEMETRY_EVENT.CONTEXT.PREFERENCE_WRITE_REJECTED, {
					surface: "ui",
					reason: preferenceWriteRejectionReason(error),
					scope_type: scope,
					text_length: content.length
				});
				showError(error, i18n.baseText("settings.context.preferences.error.save"));
			} finally {
				loading.value = false;
			}
		}
		watch(() => props.open, (open) => {
			if (!open) return;
			openToken += 1;
			resetForm();
			telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_OPENED_PREFERENCE_MODAL, {
				mode: mode.value,
				...preference.value ? { scope_type: preferenceScope(preference.value) } : {}
			});
			projectsStore.getMyProjects();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				header: modalTitle.value,
				size: "medium",
				"disable-outside-pointer-events": true,
				"data-test-id": "preference-modal",
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.form) }, [
					createVNode(unref(N8nFormInput_default), {
						modelValue: form.content,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.content = $event),
						name: "content",
						type: "textarea",
						"focus-initially": "",
						required: "",
						label: unref(i18n).baseText("settings.context.preferences.modal.text.label"),
						placeholder: unref(i18n).baseText("settings.context.preferences.modal.text.placeholder"),
						autosize: {
							minRows: 3,
							maxRows: 8
						},
						maxlength: unref(PREFERENCE_TEXT_MAX_LENGTH),
						"validate-on-blur": false,
						"validation-rules": contentValidationRules,
						"data-test-id": "preference-modal-text-input",
						onValidate: _cache[1] || (_cache[1] = (value) => contentValid.value = value)
					}, null, 8, [
						"modelValue",
						"label",
						"placeholder",
						"maxlength"
					]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.counter),
						size: "small",
						color: "text-light",
						"data-test-id": "preference-modal-counter"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(form.content.length) + " / " + toDisplayString(unref(PREFERENCE_TEXT_MAX_LENGTH)), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.context.preferences.modal.scope.label"),
						color: "text-dark"
					}, {
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							modelValue: form.scope,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.scope = $event),
							size: "large",
							filterable: "",
							teleported: false,
							"data-test-id": "preference-modal-scope-select"
						}, {
							prefix: withCtx(() => [selectedIcon.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.emoji)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(selectedIcon.value.value), 1)]),
								_: 1
							}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: selectedIcon.value.value
							}, null, 8, ["icon"]))]),
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(scopeOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, {
									default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [option.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 0,
										class: normalizeClass(_ctx.$style.emoji)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.icon.value), 1)]),
										_: 2
									}, 1032, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 1,
										icon: option.icon.value
									}, null, 8, ["icon"])), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
									_: 2
								}, 1032, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, ["modelValue"])]),
						_: 1
					}, 8, ["label"])
				], 2), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: unref(i18n).baseText("settings.context.preferences.modal.cancel"),
						"data-test-id": "preference-modal-cancel-button",
						onClick: closeModal
					}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
						loading: loading.value,
						disabled: !isValid.value,
						label: unref(i18n).baseText("settings.context.preferences.modal.save"),
						"data-test-id": "preference-modal-save-button",
						onClick: handleSubmit
					}, null, 8, [
						"loading",
						"disabled",
						"label"
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
});
var PreferenceModal_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_1wcac_1",
	counter: "_counter_1wcac_8",
	optionContent: "_optionContent_1wcac_13",
	emoji: "_emoji_1wcac_19"
};
var PreferenceModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreferenceModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreferenceModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/components/PreferenceContentCell.vue?vue&type=script&setup=true&lang.ts
/** Two-line clamp. The tooltip renders through a slot, so user text is never parsed as HTML. */
var PreferenceContentCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreferenceContentCell",
	props: { content: {} },
	setup(__props) {
		const props = __props;
		const textEl = ref(null);
		const { isOverflowing: isClamped } = useElementOverflow(textEl, "y", [() => props.content]);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"show-after": 500,
				disabled: !unref(isClamped),
				placement: "top",
				"content-class": _ctx.$style.tooltip
			}, {
				content: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.full) }, toDisplayString(__props.content), 3)]),
				default: withCtx(() => [createBaseVNode("span", {
					ref_key: "textEl",
					ref: textEl,
					class: normalizeClass(_ctx.$style.text),
					"data-test-id": "preference-content"
				}, toDisplayString(__props.content), 3)]),
				_: 1
			}, 8, ["disabled", "content-class"]);
		};
	}
});
var PreferenceContentCell_vue_vue_type_style_index_0_lang_module_default = {
	text: "_text_15vfq_1",
	tooltip: "_tooltip_15vfq_11",
	full: "_full_15vfq_15"
};
var PreferenceContentCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreferenceContentCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreferenceContentCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/components/PreferenceScopeBadge.vue?vue&type=script&setup=true&lang.ts
var PreferenceScopeBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreferenceScopeBadge",
	props: { preference: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const audience = computed(() => preferenceAudience(props.preference, usersStore.currentUser?.id));
		const icon = computed(() => {
			switch (audience.value.kind) {
				case "project": return props.preference.project?.icon ?? DEFAULT_PROJECT_ICON;
				case "personalProject": return {
					type: "icon",
					value: "user"
				};
				default: return null;
			}
		});
		const label = computed(() => {
			const scope = audience.value;
			switch (scope.kind) {
				case "instance": return i18n.baseText("settings.context.preferences.scope.instance");
				case "user": return scope.own ? i18n.baseText("settings.context.preferences.scope.user") : i18n.baseText("settings.context.preferences.scope.otherUser", { interpolate: { name: preferenceUserName(scope.user) } });
				case "personalProject": return scope.own ? i18n.baseText("settings.context.preferences.scope.personalProject") : i18n.baseText("settings.context.preferences.scope.otherPersonalProject", { interpolate: { name: scope.ownerName } });
				case "project": return scope.name ?? i18n.baseText("settings.context.preferences.scope.project");
			}
		});
		const theme = computed(() => audience.value.kind === "user" || audience.value.kind === "personalProject" ? "filled" : "outline");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), {
				variant: theme.value,
				class: normalizeClass(_ctx.$style.badge),
				"data-test-id": "preference-scope-badge"
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.content) }, [icon.value?.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.emoji)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(icon.value.value), 1)]),
					_: 1
				}, 8, ["class"])) : icon.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: icon.value.value,
					size: "small"
				}, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(label.value), 3)], 2)]),
				_: 1
			}, 8, ["variant", "class"]);
		};
	}
});
var PreferenceScopeBadge_vue_vue_type_style_index_0_lang_module_default = {
	badge: "_badge_tav9i_1",
	content: "_content_tav9i_5",
	label: "_label_tav9i_12",
	emoji: "_emoji_tav9i_18"
};
var PreferenceScopeBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreferenceScopeBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreferenceScopeBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/components/PreferencesTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "preferences-table" };
var PreferencesTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreferencesTable",
	props: /* @__PURE__ */ mergeModels({
		preferences: {},
		itemsLength: {},
		loading: { type: Boolean },
		showEmpty: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {},
		"selection": { default: () => [] },
		"selectionModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"edit",
		"delete",
		"update:options"
	], ["update:tableOptions", "update:selection"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const selection = useModel(__props, "selection");
		const i18n = useI18n();
		function permissions(preference) {
			return toPreferencePermissions(preference);
		}
		/** Rows the viewer cannot delete stay unselectable, so bulk delete never offers a no-op. */
		function isSelectable(preference) {
			return permissions(preference).delete;
		}
		const readOnlyHint = computed(() => i18n.baseText("settings.context.preferences.readOnly.tooltip"));
		const headers = computed(() => [
			{
				title: i18n.baseText("settings.context.preferences.columns.preference"),
				key: "content",
				width: 430,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.preferences.columns.scope"),
				key: "scope",
				value: (row) => preferenceScope(row),
				width: 220,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.preferences.columns.createdBy"),
				key: "createdBy",
				width: 180,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.context.preferences.columns.updatedAt"),
				key: "updatedAt",
				width: 130,
				resize: false
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 184,
				disableSort: true,
				resize: false,
				value: () => void 0
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nDataTableServer_default), {
				page: tableOptions.value.page,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => tableOptions.value.itemsPerPage = $event),
				"sort-by": tableOptions.value.sortBy,
				selection: selection.value,
				"onUpdate:selection": _cache[3] || (_cache[3] = ($event) => selection.value = $event),
				headers: headers.value,
				items: props.preferences,
				"items-length": props.itemsLength,
				loading: props.loading,
				"page-sizes": unref(PREFERENCES_PAGE_SIZES),
				"row-props": { class: _ctx.$style.row },
				"show-select": "",
				"item-selectable": isSelectable,
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, createSlots({
				[`item.content`]: withCtx(({ item }) => [createVNode(PreferenceContentCell_default, { content: item.content }, null, 8, ["content"])]),
				[`item.scope`]: withCtx(({ item }) => [createVNode(PreferenceScopeBadge_default, { preference: item }, null, 8, ["preference"])]),
				[`item.createdBy`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					"data-test-id": "preference-created-by"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(preferenceCreatorLabel)(unref(i18n), item)), 1)]),
					_: 2
				}, 1024)]),
				[`item.updatedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					"data-test-id": "preference-updated-at"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, { date: item.updatedAt }, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.actions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: permissions(item).update,
					content: readOnlyHint.value
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: !permissions(item).update,
						label: unref(i18n).baseText("settings.context.preferences.actions.edit"),
						"data-test-id": "preference-edit-button",
						onClick: ($event) => emit("edit", item)
					}, null, 8, [
						"disabled",
						"label",
						"onClick"
					])])]),
					_: 2
				}, 1032, ["disabled", "content"]), createVNode(unref(N8nTooltip_default), {
					disabled: permissions(item).delete,
					content: readOnlyHint.value
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: !permissions(item).delete,
						label: unref(i18n).baseText("settings.context.preferences.actions.delete"),
						"data-test-id": "preference-delete-button",
						onClick: ($event) => emit("delete", item)
					}, null, 8, [
						"disabled",
						"label",
						"onClick"
					])])]),
					_: 2
				}, 1032, ["disabled", "content"])], 2)]),
				_: 2
			}, [props.showEmpty ? {
				name: "cover",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"sort-by",
				"selection",
				"headers",
				"items",
				"items-length",
				"loading",
				"page-sizes",
				"row-props"
			])]);
		};
	}
});
var PreferencesTable_vue_vue_type_style_index_0_lang_module_default = {
	actions: "_actions_79cox_1",
	row: "_row_79cox_10"
};
var PreferencesTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreferencesTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreferencesTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/context/views/SettingsPreferencesView.vue?vue&type=script&setup=true&lang.ts
var SettingsPreferencesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsPreferencesView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const telemetry = useTelemetry();
		const contextStore = useContextStore();
		const { showError, showMessage } = useToast();
		const tableOptions = ref({
			page: 0,
			itemsPerPage: PREFERENCES_DEFAULT_PAGE_SIZE,
			sortBy: PREFERENCES_DEFAULT_SORT_BY
		});
		const selection = ref([]);
		const loadFailed = ref(false);
		const dialogTarget = ref(null);
		const showEmptyState = computed(() => !contextStore.loading && !loadFailed.value && contextStore.count === 0);
		const selectedCount = computed(() => selection.value.length);
		async function load() {
			const { page = 0, itemsPerPage = PREFERENCES_DEFAULT_PAGE_SIZE } = tableOptions.value;
			const sortBy = toPreferenceSortOption(tableOptions.value.sortBy);
			try {
				await contextStore.fetchPreferences({
					skip: page * itemsPerPage,
					take: itemsPerPage,
					sortBy
				});
				loadFailed.value = false;
				const lastPage = Math.max(0, Math.ceil(contextStore.count / itemsPerPage) - 1);
				if (page > lastPage) {
					tableOptions.value = {
						...tableOptions.value,
						page: lastPage
					};
					await contextStore.fetchPreferences({
						skip: lastPage * itemsPerPage,
						take: itemsPerPage,
						sortBy
					});
				}
			} catch (error) {
				loadFailed.value = true;
				showError(error, i18n.baseText("settings.context.preferences.error.load"));
			}
		}
		async function onOptionsUpdate(options) {
			const [previous] = tableOptions.value.sortBy;
			const sortBy = options.sortBy.length > 0 || !previous ? options.sortBy : [{
				id: previous.id,
				desc: !previous.desc
			}];
			tableOptions.value = {
				...options,
				sortBy
			};
			await load();
		}
		function openCreateModal() {
			dialogTarget.value = "new";
		}
		function openEditModal(preference) {
			dialogTarget.value = preference;
		}
		async function onSaved() {
			dialogTarget.value = null;
			await load();
		}
		async function confirmDelete(count) {
			return await message.confirm(i18n.baseText("settings.context.preferences.delete.confirm.message", {
				interpolate: { count },
				adjustToNumber: count
			}), i18n.baseText("settings.context.preferences.delete.confirm.title", {
				interpolate: { count },
				adjustToNumber: count
			}), {
				type: "warning",
				confirmButtonText: i18n.baseText("settings.context.preferences.delete.confirm.button"),
				cancelButtonText: i18n.baseText("settings.context.preferences.modal.cancel")
			}) === MODAL_CONFIRM;
		}
		function trackDelete(source, scopeTypes) {
			const present = scopeTypes.filter((scope) => scope !== void 0);
			telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_DELETED_PREFERENCES, {
				count: scopeTypes.length,
				source,
				scope_types: [...new Set(present)]
			});
		}
		async function onDelete(preference) {
			if (!await confirmDelete(1)) return;
			try {
				await contextStore.deletePreference(preference.id);
				trackDelete("row", [preferenceScope(preference)]);
				selection.value = selection.value.filter((id) => id !== preference.id);
				await load();
				showMessage({
					title: i18n.baseText("settings.context.preferences.delete.success"),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.preferences.error.delete"));
			}
		}
		async function onDeleteSelected() {
			const ids = [...selection.value];
			if (ids.length === 0 || !await confirmDelete(ids.length)) return;
			const scopeById = new Map(contextStore.preferences.map((row) => [row.id, preferenceScope(row)]));
			const { deleted, failed } = await contextStore.deletePreferences(ids);
			const gone = new Set(deleted);
			selection.value = selection.value.filter((id) => !gone.has(id));
			if (deleted.length > 0) await load();
			if (deleted.length > 0) trackDelete("bulk", deleted.map((id) => scopeById.get(id)));
			if (failed.length > 0) {
				showError(failed[0].error, i18n.baseText("settings.context.preferences.error.delete"));
				return;
			}
			showMessage({
				title: i18n.baseText("settings.context.preferences.delete.success"),
				type: "success"
			});
		}
		async function goBack() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT });
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.preferences.title"));
			await load();
			if (loadFailed.value) return;
			telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_VIEWED_PREFERENCES, {
				count: contextStore.count,
				scope_types: [...new Set(contextStore.preferences.map((row) => preferenceScope(row)))]
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.context.preferences.back"),
				"data-test-id": "settings-preferences-view",
				onBack: goBack
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.context.preferences.title"),
						description: unref(i18n).baseText("settings.context.preferences.description"),
						"show-docs-link": false
					}, null, 8, ["title", "description"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableArea) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
						selectedCount.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.preferences.selected", {
								interpolate: { count: selectedCount.value },
								adjustToNumber: selectedCount.value
							})), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						selectedCount.value > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "outline",
							label: unref(i18n).baseText("settings.context.preferences.actions.deleteSelected"),
							"data-test-id": "preferences-delete-selected-button",
							onClick: onDeleteSelected
						}, null, 8, ["label"])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							label: unref(i18n).baseText("settings.context.preferences.actions.create"),
							"data-test-id": "preferences-create-button",
							onClick: openCreateModal
						}, null, 8, ["label"])
					], 2), createVNode(PreferencesTable_default, {
						"table-options": tableOptions.value,
						"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => tableOptions.value = $event),
						selection: selection.value,
						"onUpdate:selection": _cache[1] || (_cache[1] = ($event) => selection.value = $event),
						preferences: unref(contextStore).preferences,
						"items-length": unref(contextStore).count,
						loading: unref(contextStore).loading,
						"show-empty": showEmptyState.value,
						onEdit: openEditModal,
						onDelete,
						"onUpdate:options": onOptionsUpdate
					}, {
						empty: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.empty),
							"data-test-id": "preferences-empty-state"
						}, [
							createVNode(unref(N8nHeading_default), {
								tag: "h2",
								size: "medium",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.preferences.empty.title")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.preferences.empty.description")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nButton_default), {
								label: unref(i18n).baseText("settings.context.preferences.actions.create"),
								"data-test-id": "preferences-empty-create-button",
								onClick: openCreateModal
							}, null, 8, ["label"])
						], 2)]),
						_: 1
					}, 8, [
						"table-options",
						"selection",
						"preferences",
						"items-length",
						"loading",
						"show-empty"
					])], 2),
					createVNode(PreferenceModal_default, {
						open: dialogTarget.value !== null,
						preference: dialogTarget.value === "new" ? null : dialogTarget.value,
						"onUpdate:open": _cache[2] || (_cache[2] = (open) => dialogTarget.value = open ? dialogTarget.value : null),
						onSaved
					}, null, 8, ["open", "preference"])
				]),
				_: 1
			}, 8, ["class", "back-label"]);
		};
	}
});
var SettingsPreferencesView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_vvvsb_2",
	tableArea: "_tableArea_vvvsb_7",
	empty: "_empty_vvvsb_13",
	toolbar: "_toolbar_vvvsb_22"
};
var SettingsPreferencesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsPreferencesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsPreferencesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsPreferencesView_default as default };

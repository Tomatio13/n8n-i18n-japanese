import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useI18n } from "./src-DxZTq86C.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BV7tgqAU.js";
import { t as N8nButton_default } from "./N8nButton-_SztANHe.js";
import { t as N8nIcon_default } from "./N8nIcon-DMoKXyJK.js";
import { t as Input_default } from "./Input-DZHU7J3z.js";
import { t as Switch_default } from "./Switch-Bc3wwG2d.js";
import { t as N8nTooltip_default } from "./N8nTooltip-7LODTd-t.js";
import { t as N8nText_default } from "./N8nText-B2Ksryzw.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-3GKqRVTj.js";
import { t as N8nHeading_default } from "./N8nHeading-DvvN7aP6.js";
import { t as N8nFormInput_default } from "./N8nFormInput-DTyzwN5F.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-Bx7HkGpy.js";
import { t as useRootStore } from "./useRootStore-DZGHRGYJ.js";
import { ao as StrictTimeZoneSchema, wn as AGENT_TASK_OBJECTIVE_MAX_LENGTH } from "./src-idT_fqaK.js";
import { t as useSettingsStore } from "./settings.store-eyxr9QVd.js";
import "./constants-CKEgyzi2.js";
import { n as useUIStore } from "./ui.store-DrBfSuCE.js";
import { t as Modal_default } from "./Modal-DvbkwGsG.js";
import { I as updateAgentTask, l as deleteAgentTask, o as createAgentTask } from "./useAgentApi-B2v0LyuE.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-5MTzPmmI.js";
import { a as describeSchedule, c as getNextScheduleOccurrence, i as buildCron, l as parseCron, o as formatScheduleDateTime, r as DEFAULT_SCHEDULE_PARTS, s as formatTimeOfDay, t as AgentPreviewButton_default, u as weekdayLabel } from "./AgentPreviewButton-DqvzUUJf.js";
//#region src/features/agents/components/AgentTaskModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var AgentTaskModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentTaskModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const task = computed(() => props.data.task ?? null);
		const isEditing = computed(() => Boolean(task.value));
		const scheduleTouched = ref(isEditing.value);
		const showRepublishHint = computed(() => isEditing.value && props.data.isPublished);
		const enabled = ref(props.data.taskState?.enabled ?? true);
		const deleting = ref(false);
		const name = ref("");
		const objective = ref("");
		const frequency = ref(DEFAULT_SCHEDULE_PARTS.frequency);
		const minute = ref(DEFAULT_SCHEDULE_PARTS.minute);
		const hour = ref(DEFAULT_SCHEDULE_PARTS.hour);
		const dayOfWeek = ref(DEFAULT_SCHEDULE_PARTS.dayOfWeek);
		const dayOfMonth = ref(DEFAULT_SCHEDULE_PARTS.dayOfMonth);
		const customCron = ref("");
		const timezone = ref(browserTimezone());
		const timezoneOptions = ref([]);
		const followsInstanceTimezone = ref(false);
		const saving = ref(false);
		const errorMessage = ref("");
		const saveAttempted = ref(false);
		const nameValid = ref(false);
		const objectiveTouched = ref(false);
		const cronValid = ref(true);
		/**
		* Zone a new task is authored in — the clock the user is actually reading. A host
		* that cannot determine its zone reports `Etc/Unknown`, which `Intl` itself then
		* refuses, so check against the same schema the API validates with and fall back
		* to the instance timezone rather than sending a value that cannot be saved.
		*/
		function browserTimezone() {
			const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			return StrictTimeZoneSchema.safeParse(browserZone).success ? browserZone : rootStore.timezone;
		}
		const cronExpression = computed(() => {
			const freq = frequency.value;
			if (freq === "custom") return customCron.value.trim();
			return buildCron({
				frequency: freq,
				minute: minute.value,
				hour: hour.value,
				dayOfWeek: dayOfWeek.value,
				dayOfMonth: dayOfMonth.value
			});
		});
		function applyTask() {
			const current = task.value;
			name.value = current?.name ?? "";
			objective.value = current?.objective ?? "";
			followsInstanceTimezone.value = current !== null && !current.timezone;
			timezone.value = current ? current.timezone ?? rootStore.timezone : browserTimezone();
			const parts = current ? parseCron(current.cronExpression) : { ...DEFAULT_SCHEDULE_PARTS };
			if (parts) {
				frequency.value = parts.frequency;
				minute.value = parts.minute;
				hour.value = parts.hour;
				dayOfWeek.value = parts.dayOfWeek;
				dayOfMonth.value = parts.dayOfMonth;
				customCron.value = "";
			} else {
				frequency.value = "custom";
				customCron.value = current?.cronExpression ?? "";
			}
		}
		applyTask();
		const initialNameInvalid = isEditing.value && !name.value.trim();
		const initialObjectiveInvalid = isEditing.value && !objective.value.trim();
		const initialCronInvalid = isEditing.value && !getNextScheduleOccurrence(cronExpression.value, timezone.value);
		const cronValidator = { validate: (value) => getNextScheduleOccurrence(typeof value === "string" ? value : "", timezone.value) ? false : { message: i18n.baseText("agents.builder.tasks.validation.cronInvalid") } };
		watch(frequency, (value) => {
			if (value !== "custom") cronValid.value = true;
		});
		const frequencyOptions = computed(() => [
			{
				value: "hourly",
				label: i18n.baseText("agents.builder.tasks.schedule.frequency.hourly")
			},
			{
				value: "daily",
				label: i18n.baseText("agents.builder.tasks.schedule.frequency.daily")
			},
			{
				value: "weekly",
				label: i18n.baseText("agents.builder.tasks.schedule.frequency.weekly")
			},
			{
				value: "monthly",
				label: i18n.baseText("agents.builder.tasks.schedule.frequency.monthly")
			},
			{
				value: "custom",
				label: i18n.baseText("agents.builder.tasks.schedule.frequency.custom")
			}
		]);
		function onFrequencyChange(value) {
			const match = frequencyOptions.value.find((option) => option.value === value);
			if (match) {
				frequency.value = match.value;
				scheduleTouched.value = true;
			}
		}
		const dayOfWeekOptions = computed(() => Array.from({ length: 7 }, (_, index) => ({
			value: index,
			label: weekdayLabel(index)
		})));
		const dayOfMonthOptions = computed(() => Array.from({ length: 31 }, (_, index) => ({
			value: index + 1,
			label: String(index + 1)
		})));
		const showTime = computed(() => [
			"daily",
			"weekly",
			"monthly"
		].includes(frequency.value));
		const selectedTime = computed({
			get: () => hour.value * 60 + minute.value,
			set: (value) => {
				hour.value = Math.floor(value / 60);
				minute.value = value % 60;
				scheduleTouched.value = true;
			}
		});
		const timeOptions = computed(() => {
			const steps = Array.from({ length: 48 }, (_, index) => index * 30);
			return (steps.includes(selectedTime.value) ? steps : [...steps, selectedTime.value].sort((a, b) => a - b)).map((totalMinutes) => ({
				value: totalMinutes,
				label: formatTimeOfDay(Math.floor(totalMinutes / 60), totalMinutes % 60)
			}));
		});
		function onMinuteInput(value) {
			const parsed = Number(value);
			minute.value = Number.isFinite(parsed) ? Math.min(59, Math.max(0, Math.trunc(parsed))) : 0;
			scheduleTouched.value = true;
		}
		function onDayOfWeekChange(value) {
			dayOfWeek.value = Number(value);
			scheduleTouched.value = true;
		}
		function onDayOfMonthChange(value) {
			dayOfMonth.value = Number(value);
			scheduleTouched.value = true;
		}
		/**
		* Same timezone list the workflow settings offer. Kept renderable while it
		* loads (and if it fails) by always including the selected zone, since a
		* filterable select shows the raw value for an option it doesn't know.
		*/
		const timezoneSelectOptions = computed(() => {
			const options = timezoneOptions.value;
			if (options.some((option) => option.value === timezone.value)) return options;
			return [{
				value: timezone.value,
				label: timezone.value
			}, ...options];
		});
		onMounted(async () => {
			try {
				const timezones = await settingsStore.getTimezones();
				timezoneOptions.value = Object.entries(timezones).map(([value, label]) => ({
					value,
					label: typeof label === "string" ? label : value
				}));
			} catch {}
		});
		const nextOccurrenceText = computed(() => {
			if (!scheduleTouched.value) return "";
			const next = getNextScheduleOccurrence(cronExpression.value, timezone.value);
			if (!next) return "";
			return formatScheduleDateTime(next, timezone.value);
		});
		const scheduleDescription = computed(() => {
			if (frequency.value !== "custom" || !nextOccurrenceText.value) return "";
			return describeSchedule(cronExpression.value) ?? "";
		});
		const executionSummary = computed(() => {
			if (!enabled.value && isEditing.value) return i18n.baseText("agents.builder.tasks.schedule.executionPaused");
			if (!nextOccurrenceText.value) return "";
			return i18n.baseText("agents.builder.tasks.schedule.nextOccurrence", { interpolate: { occurrence: nextOccurrenceText.value } });
		});
		const scheduleSummary = computed(() => {
			if (!scheduleDescription.value) return executionSummary.value;
			return i18n.baseText("agents.builder.tasks.schedule.summary", { interpolate: {
				description: scheduleDescription.value,
				execution: executionSummary.value
			} });
		});
		const objectiveError = computed(() => {
			if (!objective.value.trim()) return i18n.baseText("agents.builder.tasks.validation.objectiveRequired");
			if (objective.value.trim().length > 1e4) return i18n.baseText("agents.builder.tasks.validation.objectiveMaxLength", { interpolate: { max: String(AGENT_TASK_OBJECTIVE_MAX_LENGTH) } });
			return "";
		});
		const visibleObjectiveError = computed(() => saveAttempted.value || initialObjectiveInvalid || objectiveTouched.value ? objectiveError.value : "");
		const canSave = computed(() => nameValid.value && !objectiveError.value && cronValid.value && !saving.value);
		function onObjectiveInput(value) {
			objective.value = value;
			objectiveTouched.value = true;
		}
		function onNameInput(value) {
			name.value = typeof value === "string" ? value : "";
		}
		function onCronInput(value) {
			customCron.value = typeof value === "string" ? value : "";
			scheduleTouched.value = true;
		}
		function onTimezoneChange(value) {
			timezone.value = String(value);
			followsInstanceTimezone.value = false;
			scheduleTouched.value = true;
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function onToggleEnabled(value) {
			const current = task.value;
			if (!current) return;
			enabled.value = value;
			props.data.onToggle?.({
				id: current.id,
				enabled: value
			});
		}
		function onPauseToggle(paused) {
			onToggleEnabled(!paused);
		}
		function onPreview() {
			objectiveTouched.value = true;
			if (objectiveError.value || !props.data.onPreview) return;
			closeModal();
			props.data.onPreview(objective.value.trim());
		}
		async function onDelete() {
			const current = task.value;
			if (!current || deleting.value) return;
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agents.builder.tasks.deleteConfirm.title"),
				description: i18n.baseText("agents.builder.tasks.deleteConfirm.description"),
				confirmButtonText: i18n.baseText("agents.builder.tasks.deleteConfirm.confirm"),
				cancelButtonText: i18n.baseText("agents.builder.tasks.cancel")
			}) !== "confirm") return;
			deleting.value = true;
			errorMessage.value = "";
			try {
				await deleteAgentTask(rootStore.restApiContext, props.data.projectId, props.data.agentId, current.id);
				props.data.onSaved();
				closeModal();
			} catch (error) {
				errorMessage.value = error instanceof Error && error.message ? error.message : i18n.baseText("agents.builder.tasks.deleteError");
			} finally {
				deleting.value = false;
			}
		}
		async function onSave() {
			saveAttempted.value = true;
			if (!canSave.value) return;
			saving.value = true;
			errorMessage.value = "";
			const base = {
				name: name.value.trim(),
				objective: objective.value.trim(),
				cronExpression: cronExpression.value,
				timezone: followsInstanceTimezone.value ? null : timezone.value
			};
			try {
				if (task.value) await updateAgentTask(rootStore.restApiContext, props.data.projectId, props.data.agentId, task.value.id, base);
				else {
					/** Save the agent only on submit, so canceling does not create an empty agent. */
					await props.data.ensureAgentPersisted?.();
					/** New tasks start running once the agent is published. */
					await createAgentTask(rootStore.restApiContext, props.data.projectId, props.data.agentId, {
						...base,
						enabled: true
					});
				}
				props.data.onSaved();
				closeModal();
			} catch (error) {
				errorMessage.value = error instanceof Error && error.message ? error.message : i18n.baseText("agents.builder.tasks.saveError");
			} finally {
				saving.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "860px",
				"data-testid": "agent-task-modal"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isEditing.value ? "agents.builder.tasks.edit.title" : "agents.builder.tasks.create.title")), 1)]),
					_: 1
				})], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nFormInput_default), {
						"model-value": name.value,
						label: unref(i18n).baseText("agents.builder.tasks.name.label"),
						name: "task-name",
						required: "",
						"label-size": "small",
						placeholder: unref(i18n).baseText("agents.builder.tasks.name.placeholder"),
						"validation-rules": [{
							name: "MAX_LENGTH",
							config: { maximum: unref(128) }
						}],
						"show-validation-warnings": saveAttempted.value || unref(initialNameInvalid),
						"data-testid": "agent-task-name-input",
						"onUpdate:modelValue": onNameInput,
						onValidate: _cache[0] || (_cache[0] = ($event) => nameValid.value = $event)
					}, null, 8, [
						"model-value",
						"label",
						"placeholder",
						"validation-rules",
						"show-validation-warnings"
					])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.objective.label")) + " ", 1), createVNode(unref(N8nText_default), {
								color: "primary",
								bold: "",
								size: "small"
							}, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("*", -1)])]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(MarkdownEditor_default), {
							class: normalizeClass(_ctx.$style.objectiveEditor),
							"model-value": objective.value,
							placeholder: unref(i18n).baseText("agents.builder.tasks.objective.placeholder"),
							"show-toolbar": "floating",
							"max-height": "100%",
							"data-testid": "agent-task-objective-input",
							"onUpdate:modelValue": onObjectiveInput
						}, null, 8, [
							"class",
							"model-value",
							"placeholder"
						]),
						visibleObjectiveError.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.error),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(visibleObjectiveError.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.label")) + " ", 1), createVNode(unref(N8nText_default), {
								color: "primary",
								bold: "",
								size: "small"
							}, {
								default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("*", -1)])]),
								_: 1
							})]),
							_: 1
						}),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.scheduleRow) }, [
							createVNode(unref(N8nSelect_default), {
								"model-value": frequency.value,
								class: normalizeClass(_ctx.$style.frequencySelect),
								"data-testid": "agent-task-frequency",
								"onUpdate:modelValue": onFrequencyChange
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(frequencyOptions.value, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["model-value", "class"]),
							frequency.value === "weekly" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.on")), 1)]),
								_: 1
							}), createVNode(unref(N8nSelect_default), {
								"model-value": dayOfWeek.value,
								class: normalizeClass(_ctx.$style.daySelect),
								"data-testid": "agent-task-day-of-week",
								"onUpdate:modelValue": onDayOfWeekChange
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(dayOfWeekOptions.value, (day) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: day.value,
										value: day.value,
										label: day.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["model-value", "class"])], 64)) : createCommentVNode("", true),
							frequency.value === "monthly" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.onDay")), 1)]),
								_: 1
							}), createVNode(unref(N8nSelect_default), {
								"model-value": dayOfMonth.value,
								class: normalizeClass(_ctx.$style.daySelect),
								"data-testid": "agent-task-day-of-month",
								"onUpdate:modelValue": onDayOfMonthChange
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(dayOfMonthOptions.value, (day) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: day.value,
										value: day.value,
										label: day.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["model-value", "class"])], 64)) : createCommentVNode("", true),
							showTime.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.at")), 1)]),
								_: 1
							}), createVNode(unref(N8nSelect_default), {
								"model-value": selectedTime.value,
								class: normalizeClass(_ctx.$style.timeSelect),
								"data-testid": "agent-task-time",
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedTime.value = Number($event))
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(timeOptions.value, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["model-value", "class"])], 64)) : createCommentVNode("", true),
							frequency.value === "hourly" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.minuteLabel")), 1)]),
								_: 1
							}), createVNode(unref(Input_default), {
								type: "number",
								"model-value": String(minute.value),
								class: normalizeClass(_ctx.$style.minuteInput),
								"data-testid": "agent-task-minute",
								"onUpdate:modelValue": onMinuteInput
							}, null, 8, ["model-value", "class"])], 64)) : createCommentVNode("", true),
							frequency.value === "custom" ? (openBlock(), createBlock(unref(N8nFormInput_default), {
								key: 4,
								"model-value": customCron.value,
								label: "",
								name: "task-cron",
								required: "",
								placeholder: unref(i18n).baseText("agents.builder.tasks.schedule.cron.placeholder"),
								validators: { VALID_CRON: cronValidator },
								"validation-rules": [{ name: "VALID_CRON" }],
								"show-validation-warnings": saveAttempted.value || unref(initialCronInvalid),
								class: normalizeClass(_ctx.$style.cronInput),
								"data-testid": "agent-task-schedule-cron",
								"onUpdate:modelValue": onCronInput,
								onValidate: _cache[2] || (_cache[2] = ($event) => cronValid.value = $event)
							}, null, 8, [
								"model-value",
								"placeholder",
								"validators",
								"show-validation-warnings",
								"class"
							])) : createCommentVNode("", true),
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.schedule.in")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nSelect_default), {
								"model-value": timezone.value,
								class: normalizeClass(_ctx.$style.timezoneSelect),
								placeholder: unref(i18n).baseText("agents.builder.tasks.schedule.timezone.placeholder"),
								filterable: "",
								"limit-popper-width": true,
								"data-testid": "agent-task-timezone",
								"onUpdate:modelValue": onTimezoneChange
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(timezoneSelectOptions.value, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, [
								"model-value",
								"class",
								"placeholder"
							])
						], 2),
						scheduleSummary.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.scheduleSummary)
						}, [createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.help),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(scheduleSummary.value), 1)]),
							_: 1
						}, 8, ["class"]), showRepublishHint.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(i18n).baseText("agents.builder.tasks.republishHint"),
							placement: "top"
						}, {
							default: withCtx(() => [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.infoIcon),
								"aria-label": unref(i18n).baseText("agents.builder.tasks.republishHint"),
								tabindex: "0"
							}, [createVNode(unref(N8nIcon_default), {
								icon: "info",
								size: "small"
							})], 10, _hoisted_1)]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
					], 2),
					isEditing.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.pauseControl),
						"data-testid": "agent-task-pause-control"
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.pause")), 1)]),
						_: 1
					}), createVNode(unref(Switch_default), {
						"model-value": !enabled.value,
						"aria-label": unref(i18n).baseText("agents.builder.tasks.pause"),
						"data-testid": "agent-task-toggle",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = (paused) => onPauseToggle(Boolean(paused)))
					}, null, 8, ["model-value", "aria-label"])], 2)) : createCommentVNode("", true),
					errorMessage.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.error),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [isEditing.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					loading: deleting.value,
					"data-testid": "agent-task-delete",
					onClick: onDelete
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "trash-2",
						size: 16
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.delete")), 1)]),
					_: 1
				}, 8, ["loading"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(AgentPreviewButton_default, {
					"is-runnable": props.data.isRunnable === true,
					"validation-issues": props.data.validationIssues ?? [],
					"test-id": "agent-task-preview",
					onOpenPreview: onPreview
				}, null, 8, ["is-runnable", "validation-issues"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: saving.value,
					loading: saving.value,
					"data-testid": "agent-task-save",
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
var AgentTaskModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1emwe_2",
	content: "_content_1emwe_10",
	field: "_field_1emwe_16",
	objectiveEditor: "_objectiveEditor_1emwe_23",
	scheduleRow: "_scheduleRow_1emwe_27",
	frequencySelect: "_frequencySelect_1emwe_34",
	daySelect: "_daySelect_1emwe_38",
	minuteInput: "_minuteInput_1emwe_42",
	cronInput: "_cronInput_1emwe_46",
	timeSelect: "_timeSelect_1emwe_51",
	timezoneSelect: "_timezoneSelect_1emwe_55",
	scheduleSummary: "_scheduleSummary_1emwe_59",
	infoIcon: "_infoIcon_1emwe_65",
	help: "_help_1emwe_71",
	error: "_error_1emwe_75",
	pauseControl: "_pauseControl_1emwe_79",
	footer: "_footer_1emwe_85",
	footerActions: "_footerActions_1emwe_91"
};
var AgentTaskModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTaskModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTaskModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentTaskModal_default as default };

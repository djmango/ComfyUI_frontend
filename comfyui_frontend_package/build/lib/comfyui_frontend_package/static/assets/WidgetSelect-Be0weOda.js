import "./rolldown-runtime-w0pxe0c8.js";
import { G as script } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, C as withModifiers, Et as isRef, Gt as toDisplayString, Ht as normalizeClass, It as toRef, J as mergeModels, K as inject, M as createBlock, N as createCommentVNode, P as createElementBlock, Pt as shallowRef, R as createTextVNode, Rt as toValue, S as withKeys, T as Fragment, V as defineComponent, Wt as normalizeStyle, Y as mergeProps, at as renderList, bt as withCtx, ct as resolveDirective, f as storeToRefs, gt as watch, ht as useTemplateRef, it as provide, j as createBaseVNode, jt as ref, ot as renderSlot, pt as useModel, rt as openBlock, xt as withDirectives, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { G as capitalize } from "./vendor-other-DBdmkK1j.js";
import { An as useAssetsStore, Fr as isCanvasGestureWheel, Oi as AsyncSearchInput_default, Qr as useModelToNodeStore, Xn as useModelUpload, Zr as assetService, ai as useMissingMediaStore, di as getOutputAssetMetadata, er as sortAssets, gn as useAssetsApi, mr as useAssetFilterOptions, nr as filterItemByOwnership, pi as VirtualGrid_default, tr as filterItemByBaseModels, ui as appendCloudResParam, vr as isComboInputSpec, wn as resolveOutputAssetItems, y as useWorkflowStore } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { Q as tryOnScopeDispose, T as useIntersectionObserver, X as refDebounced, a as computedAsync } from "./vendor-vueuse-B9Hj6YrL.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { c as t } from "./i18n-CKSCRJIF.js";
import { r as api } from "./api-nNRZeCUN.js";
import { t as useToastStore } from "./toastStore-DLjER1Ce.js";
import { g as getMediaTypeFromFilename } from "./formatUtil-DYCY4wm_.js";
import { bt as ComboboxAnchor_default, ct as ComboboxPortal_default, dt as ComboboxInput_default, lt as ComboboxItemIndicator_default, mt as ComboboxRoot_default, pt as ComboboxContent_default, st as ComboboxTrigger_default, ut as ComboboxItem_default } from "./vendor-reka-ui-DQClbqQd.js";
import { t as cn } from "./src-nrRWoNk5.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as useErrorHandling } from "./useErrorHandling-DVmwK9Br.js";
import { c as getAssetFilename, f as getAssetUrlFilename, o as getAssetDisplayFilename, r as getAssetBaseModels, s as getAssetDisplayName } from "./useImageQuiet-8o4A_oUF.js";
import { r as SUPPORTED_EXTENSIONS_ACCEPT } from "./constants-O5j-l2wh.js";
import { n as isAssetPreviewSupported, t as findServerPreviewUrl } from "./assetPreviewUtil-CKRmBkBF.js";
import { i as PANEL_EXCLUDED_PROPS, o as filterWidgetProps } from "./widgetPropFilter-BNE9bPNz.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-CbI_MttR.js";
import { t as WidgetInputBaseClass } from "./layout-DqSb5RDy.js";
import { t as WidgetWithControl_default } from "./WidgetWithControl-BFLxorUz.js";
//#region src/renderer/extensions/vueNodes/widgets/composables/useRestoreFocusOnViewportPointer.ts
/**
* Keeps a search input focused when pressing a dropdown viewport.
* Reka treats native scrollbar presses as focus-outside interactions, so this
* short-lived guard preserves list scrolling without blocking normal outside
* clicks after the pointer gesture completes.
*/
function useRestoreFocusOnViewportPointer(focusInput) {
	const isViewportPointerDownInFlight = ref(false);
	let clearPointerDownTimer;
	function clearPointerDown() {
		isViewportPointerDownInFlight.value = false;
		window.clearTimeout(clearPointerDownTimer);
		clearPointerDownTimer = void 0;
		window.removeEventListener("pointerup", clearPointerDown);
		window.removeEventListener("pointercancel", clearPointerDown);
	}
	function handleViewportPointerDown() {
		clearPointerDown();
		isViewportPointerDownInFlight.value = true;
		clearPointerDownTimer = window.setTimeout(clearPointerDown, 0);
		window.addEventListener("pointerup", clearPointerDown, { once: true });
		window.addEventListener("pointercancel", clearPointerDown, { once: true });
	}
	function handleFocusOutside(event) {
		if (!isViewportPointerDownInFlight.value) return;
		if (!unref(focusInput)()) {
			clearPointerDown();
			return;
		}
		event.preventDefault();
		clearPointerDown();
	}
	tryOnScopeDispose(clearPointerDown);
	return {
		handleFocusOutside,
		handleViewportPointerDown
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDefault.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = [
	"aria-label",
	"aria-invalid",
	"aria-expanded",
	"disabled"
];
var _hoisted_2$5 = { class: "flex h-full w-8 shrink-0 items-center justify-center rounded-r-lg" };
var _hoisted_3$3 = { class: "truncate" };
var _hoisted_4$3 = {
	key: 0,
	role: "status",
	"aria-live": "polite",
	class: "p-2 text-xs text-muted-foreground"
};
var _hoisted_5$2 = { class: "absolute top-5 right-8 flex h-4 w-7 -translate-y-4/5" };
var COMBOBOX_VALUE_PREFIX = "widget-select-value:";
var MAX_VISIBLE_OPTIONS = 7;
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDefault.vue
var WidgetSelectDefault_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelectDefault",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default(modelProps) {
			try {
				const values = modelProps.widget.options?.values;
				const resolved = typeof values === "function" ? values() : values;
				const firstValue = Array.isArray(resolved) ? resolved.find((value) => value !== null && value !== void 0) : void 0;
				return firstValue === void 0 ? "" : String(firstValue);
			} catch (error) {
				console.error("[WidgetSelectDefault] Failed to resolve options", error);
				return "";
			}
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		function toComboboxValue(value) {
			return `${COMBOBOX_VALUE_PREFIX}${value}`;
		}
		function fromComboboxValue(value) {
			if (value === void 0 || !value.startsWith(COMBOBOX_VALUE_PREFIX)) return;
			return value.slice(20);
		}
		function resolveRawValues(values) {
			try {
				const resolved = typeof values === "function" ? values() : values;
				return Array.isArray(resolved) ? resolved : [];
			} catch (error) {
				console.error("[WidgetSelectDefault] Failed to resolve options", error);
				return [];
			}
		}
		function resolveValues(values) {
			return resolveRawValues(values).filter((value) => value !== null && value !== void 0).map((value) => String(value));
		}
		const modelValue = useModel(__props, "modelValue");
		const searchQuery = ref("");
		const optionsRefreshKey = ref(0);
		const isOpen = ref(false);
		const searchInputContainerRef = ref();
		const { handleFocusOutside, handleViewportPointerDown } = useRestoreFocusOnViewportPointer(focusSearchInput);
		const widgetOptions = computed(() => __props.widget.options);
		const disabled = computed(() => Boolean(widgetOptions.value?.disabled));
		const placeholder = computed(() => widgetOptions.value?.placeholder ?? "");
		const filterPlaceholder = computed(() => widgetOptions.value?.filterPlaceholder ?? placeholder.value);
		function refreshOptions() {
			optionsRefreshKey.value++;
		}
		function getOptionLabel(value) {
			const labeler = widgetOptions.value?.getOptionLabel;
			if (!labeler) return value;
			try {
				return labeler(value) || value;
			} catch (error) {
				console.error("[WidgetSelectDefault] Failed to map option label", error);
				return value;
			}
		}
		const normalizedOptions = computed(() => {
			optionsRefreshKey.value;
			return resolveValues(widgetOptions.value?.values).map((value, index) => ({
				comboboxValue: toComboboxValue(value),
				key: `${value}-${index}`,
				label: getOptionLabel(value),
				value
			}));
		});
		const knownOptionValues = computed(() => new Set(normalizedOptions.value.map((option) => option.value)));
		const isFilterable = computed(() => normalizedOptions.value.length > 4);
		const filteredOptions = computed(() => {
			if (!isFilterable.value) return normalizedOptions.value;
			const query = searchQuery.value.trim().toLocaleLowerCase();
			if (!query) return normalizedOptions.value;
			return normalizedOptions.value.filter((option) => option.value.toLocaleLowerCase().includes(query) || option.label.toLocaleLowerCase().includes(query));
		});
		const viewportStyle = computed(() => ({
			overflowY: filteredOptions.value.length > MAX_VISIBLE_OPTIONS ? "scroll" : "auto",
			scrollbarGutter: "stable"
		}));
		const selectedOption = computed(() => normalizedOptions.value.find((option) => option.value === modelValue.value));
		const comboboxValue = computed(() => {
			const value = modelValue.value;
			if (value === void 0 || !knownOptionValues.value.has(value)) return "";
			return toComboboxValue(value);
		});
		const isInvalid = computed(() => modelValue.value !== void 0 && modelValue.value !== "" && !selectedOption.value);
		const selectedLabel = computed(() => {
			if (selectedOption.value) return selectedOption.value.label;
			if (isInvalid.value) return String(modelValue.value);
			return "";
		});
		function selectOption(rekaValue) {
			const value = fromComboboxValue(rekaValue);
			if (value === void 0 || !knownOptionValues.value.has(value)) return;
			modelValue.value = value;
			searchQuery.value = "";
			isOpen.value = false;
		}
		function focusSearchInput() {
			const input = searchInputContainerRef.value?.querySelector("input");
			if (!input) return false;
			input.focus({ preventScroll: true });
			return true;
		}
		function handleOpenChange(open) {
			isOpen.value = open;
			if (open) refreshOptions();
			else searchQuery.value = "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: __props.widget }, {
				default: withCtx(() => [createVNode(unref(ComboboxRoot_default), {
					open: isOpen.value,
					"onUpdate:open": [_cache[3] || (_cache[3] = ($event) => isOpen.value = $event), handleOpenChange],
					"model-value": comboboxValue.value,
					disabled: disabled.value,
					"ignore-filter": "",
					"selection-behavior": "replace",
					"reset-search-term-on-select": false,
					"onUpdate:modelValue": selectOption
				}, {
					default: withCtx(() => [createVNode(unref(ComboboxAnchor_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(ComboboxTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [createBaseVNode("button", {
								type: "button",
								role: "combobox",
								"aria-haspopup": "listbox",
								"aria-label": __props.widget.label || __props.widget.name,
								"aria-invalid": isInvalid.value || void 0,
								"aria-expanded": isOpen.value,
								disabled: disabled.value,
								tabindex: "0",
								"data-capture-wheel": "true",
								"data-testid": "widget-select-default-trigger",
								class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex h-7 w-full min-w-0 cursor-pointer items-center overflow-hidden outline-none hover:bg-component-node-widget-background-hovered disabled:cursor-default disabled:opacity-50 disabled:hover:bg-component-node-widget-background", isInvalid.value && "ring-1 ring-destructive-background"))
							}, [createBaseVNode("span", { class: normalizeClass(unref(cn)("min-w-[4ch] flex-1 truncate pr-3 pl-1 text-left", _ctx.$slots.default && "mr-5")) }, toDisplayString(selectedLabel.value || placeholder.value || "\xA0"), 3), createBaseVNode("span", _hoisted_2$5, [createBaseVNode("i", {
								class: normalizeClass(unref(cn)("icon-[lucide--chevron-down] size-4 translate-x-1.5", disabled.value ? "bg-component-node-foreground-secondary" : "bg-muted-foreground")),
								"aria-hidden": "true"
							}, null, 2)])], 10, _hoisted_1$5)]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(ComboboxPortal_default), null, {
						default: withCtx(() => [createVNode(unref(ComboboxContent_default), {
							"data-capture-wheel": "true",
							"data-testid": "widget-select-default-overlay",
							position: "popper",
							"side-offset": 1,
							align: "start",
							class: normalizeClass(unref(cn)("z-3000 overflow-hidden rounded-lg border border-solid border-border-default bg-base-background p-0 text-base-foreground shadow-md", "min-w-(--reka-combobox-trigger-width)")),
							onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => handleOpenChange(false), ["stop"]), ["escape"])),
							onFocusOutside: unref(handleFocusOutside)
						}, {
							default: withCtx(() => [isFilterable.value ? (openBlock(), createElementBlock("div", {
								key: 0,
								ref_key: "searchInputContainerRef",
								ref: searchInputContainerRef,
								class: "m-1 flex items-center gap-2 rounded-md border border-solid border-border-default px-2 py-1.5 transition-colors focus-within:border-primary-background"
							}, [_cache[4] || (_cache[4] = createBaseVNode("i", {
								class: "icon-[lucide--search] shrink-0 text-sm text-muted-foreground",
								"aria-hidden": "true"
							}, null, -1)), createVNode(unref(ComboboxInput_default), {
								modelValue: searchQuery.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
								placeholder: filterPlaceholder.value,
								"auto-focus": "",
								"aria-label": _ctx.$t("g.search"),
								"data-testid": "widget-select-default-search-input",
								class: "w-full border-none bg-transparent text-xs outline-none"
							}, null, 8, [
								"modelValue",
								"placeholder",
								"aria-label"
							])], 512)) : createCommentVNode("", true), createBaseVNode("div", {
								"data-testid": "widget-select-default-viewport",
								role: "presentation",
								class: "flex max-h-56 min-w-full scrollbar-thin scrollbar-thumb-alpha-smoke-500-50 scrollbar-track-transparent scrollbar-gutter-stable flex-col gap-1 overflow-y-auto p-1 text-xs",
								style: normalizeStyle(viewportStyle.value),
								onPointerdownCapture: _cache[1] || (_cache[1] = withModifiers((...args) => unref(handleViewportPointerDown) && unref(handleViewportPointerDown)(...args), ["self"]))
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option) => {
								return openBlock(), createBlock(unref(ComboboxItem_default), {
									key: option.key,
									value: option.comboboxValue,
									"text-value": option.label,
									class: normalizeClass(unref(cn)("relative flex min-h-7 cursor-pointer items-center justify-between gap-3 rounded-sm p-2 outline-none select-none", "hover:bg-secondary-background data-highlighted:bg-secondary-background", "data-[state=checked]:bg-primary-background/20 data-[state=checked]:hover:bg-primary-background/20 data-[state=checked]:data-highlighted:bg-primary-background/30"))
								}, {
									default: withCtx(() => [createBaseVNode("span", _hoisted_3$3, toDisplayString(option.label), 1), createVNode(unref(ComboboxItemIndicator_default), { class: "flex shrink-0 items-center justify-center" }, {
										default: withCtx(() => [..._cache[5] || (_cache[5] = [createBaseVNode("i", {
											class: "icon-[lucide--check] size-3.5 text-base-foreground",
											"aria-hidden": "true"
										}, null, -1)])]),
										_: 1
									})]),
									_: 2
								}, 1032, [
									"value",
									"text-value",
									"class"
								]);
							}), 128)), filteredOptions.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4$3, toDisplayString(_ctx.$t("g.noResultsFound")), 1)) : createCommentVNode("", true)], 36)]),
							_: 1
						}, 8, ["class", "onFocusOutside"])]),
						_: 1
					})]),
					_: 1
				}, 8, [
					"open",
					"model-value",
					"disabled"
				]), createBaseVNode("div", _hoisted_5$2, [renderSlot(_ctx.$slots, "default")])]),
				_: 3
			}, 8, ["widget"]);
		};
	}
});
//#endregion
//#region src/platform/assets/composables/media/useFlatOutputAssets.ts
function useFlatOutputAssets() {
	const store = useAssetsStore();
	const { flatOutputAssets, flatOutputLoading, flatOutputError, flatOutputHasMore, flatOutputIsLoadingMore } = storeToRefs(store);
	return {
		media: flatOutputAssets,
		loading: flatOutputLoading,
		error: flatOutputError,
		fetchMediaList: store.updateFlatOutputs,
		refresh: store.updateFlatOutputs,
		loadMore: store.loadMoreFlatOutputs,
		hasMore: flatOutputHasMore,
		isLoadingMore: flatOutputIsLoadingMore
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "min-w-0 flex-1 truncate px-1 py-2 text-left" };
var _hoisted_2$4 = { key: 0 };
var _hoisted_3$2 = { key: 1 };
var _hoisted_4$2 = [
	"aria-label",
	"multiple",
	"disabled",
	"accept"
];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownInput.vue
var FormDropdownInput_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownInput",
	props: {
		isOpen: { type: Boolean },
		placeholder: { default: "Select..." },
		items: {},
		displayItems: {},
		selected: {},
		maxSelectable: {},
		uploadable: { type: Boolean },
		disabled: { type: Boolean },
		accept: {}
	},
	emits: ["select-click", "file-change"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const selectedItems = computed(() => {
			return (__props.displayItems ?? __props.items).filter((item) => __props.selected.has(item.id));
		});
		const theButtonStyle = computed(() => cn("border-0 bg-component-node-widget-background text-text-secondary outline-none", __props.disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-component-node-widget-background-hovered", selectedItems.value.length > 0 && "text-text-primary"));
		const buttonRef = ref();
		function focus() {
			buttonRef.value?.focus();
		}
		__expose({ focus });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex text-base leading-none", { "cursor-not-allowed opacity-50 outline-node-component-border": __props.disabled })) }, [createBaseVNode("button", {
				ref_key: "buttonRef",
				ref: buttonRef,
				class: normalizeClass(unref(cn)(theButtonStyle.value, "flex h-8 min-w-0 flex-1 items-center justify-between", {
					"rounded-l-lg": __props.uploadable,
					"rounded-lg": !__props.uploadable
				})),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("select-click", $event))
			}, [createBaseVNode("span", _hoisted_1$4, [!selectedItems.value.length ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(__props.placeholder), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(selectedItems.value.map((item) => item.label ?? item.name).join(", ")), 1))]), createBaseVNode("i", { class: normalizeClass(["icon-[lucide--chevron-down]", unref(cn)("mr-2 size-4 shrink-0 text-component-node-foreground-secondary transition-transform duration-200", __props.isOpen && "rotate-180")]) }, null, 2)], 2), __props.uploadable ? (openBlock(), createElementBlock("label", {
				key: 0,
				class: normalizeClass(unref(cn)(theButtonStyle.value, "relative", "flex size-8 items-center justify-center rounded-r-lg border-l border-node-component-border"))
			}, [_cache[2] || (_cache[2] = createBaseVNode("i", {
				class: "icon-[lucide--folder-search] size-4",
				"aria-hidden": "true"
			}, null, -1)), createBaseVNode("input", {
				type: "file",
				class: "absolute inset-0 -z-1 opacity-0",
				"aria-label": unref(t)("g.upload"),
				multiple: __props.maxSelectable > 1,
				disabled: __props.disabled,
				accept: __props.accept,
				onChange: _cache[1] || (_cache[1] = ($event) => emit("file-change", $event))
			}, null, 40, _hoisted_4$2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "text-secondary flex gap-2 px-4" };
var _hoisted_2$3 = {
	key: 0,
	role: "status",
	"aria-live": "polite",
	"aria-atomic": "true",
	class: "sr-only"
};
var _hoisted_3$1 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_4$1 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var _hoisted_5$1 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_6$1 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var _hoisted_7 = {
	key: 0,
	class: "absolute top-[-2px] left-[-2px] size-2 rounded-full bg-component-node-widget-background-highlighted"
};
var _hoisted_8 = {
	key: 0,
	class: "icon-[lucide--check] size-4"
};
var layoutSwitchItemStyle = "size-6 flex justify-center items-center rounded-sm cursor-pointer transition-all duration-150 hover:scale-108 hover:text-base-foreground active:scale-95";
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuActions.vue
var FormDropdownMenuActions_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuActions",
	props: /* @__PURE__ */ mergeModels({
		sortOptions: {},
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {},
		candidateLabel: {}
	}, {
		"layoutMode": {},
		"layoutModeModifiers": {},
		"searchQuery": {},
		"searchQueryModifiers": {},
		"sortSelected": {},
		"sortSelectedModifiers": {},
		"ownershipSelected": { default: "all" },
		"ownershipSelectedModifiers": {},
		"baseModelSelected": { default: () => /* @__PURE__ */ new Set() },
		"baseModelSelectedModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["search-enter"], [
		"update:layoutMode",
		"update:searchQuery",
		"update:sortSelected",
		"update:ownershipSelected",
		"update:baseModelSelected"
	]),
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const layoutMode = useModel(__props, "layoutMode");
		const searchQuery = useModel(__props, "searchQuery");
		const sortSelected = useModel(__props, "sortSelected");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const actionButtonStyle = cn("h-8 rounded-lg bg-zinc-500/20 outline-1 -outline-offset-1 outline-node-component-border transition-all duration-150");
		const sortPopoverRef = useTemplateRef("sortPopoverRef");
		const sortTriggerRef = useTemplateRef("sortTriggerRef");
		const isSortPopoverOpen = ref(false);
		function toggleSortPopover(event) {
			if (!sortPopoverRef.value || !sortTriggerRef.value) return;
			isSortPopoverOpen.value = !isSortPopoverOpen.value;
			sortPopoverRef.value.toggle(event, sortTriggerRef.value.$el);
		}
		function closeSortPopover() {
			isSortPopoverOpen.value = false;
			sortPopoverRef.value?.hide();
		}
		function handleSortSelected(item) {
			sortSelected.value = item.id;
			closeSortPopover();
		}
		const ownershipPopoverRef = useTemplateRef("ownershipPopoverRef");
		const ownershipTriggerRef = useTemplateRef("ownershipTriggerRef");
		const isOwnershipPopoverOpen = ref(false);
		function toggleOwnershipPopover(event) {
			if (!ownershipPopoverRef.value || !ownershipTriggerRef.value) return;
			isOwnershipPopoverOpen.value = !isOwnershipPopoverOpen.value;
			ownershipPopoverRef.value.toggle(event, ownershipTriggerRef.value.$el);
		}
		function closeOwnershipPopover() {
			isOwnershipPopoverOpen.value = false;
			ownershipPopoverRef.value?.hide();
		}
		function handleOwnershipSelected(item) {
			ownershipSelected.value = item.value;
			closeOwnershipPopover();
		}
		const baseModelPopoverRef = useTemplateRef("baseModelPopoverRef");
		const baseModelTriggerRef = useTemplateRef("baseModelTriggerRef");
		const isBaseModelPopoverOpen = ref(false);
		function toggleBaseModelPopover(event) {
			if (!baseModelPopoverRef.value || !baseModelTriggerRef.value) return;
			isBaseModelPopoverOpen.value = !isBaseModelPopoverOpen.value;
			baseModelPopoverRef.value.toggle(event, baseModelTriggerRef.value.$el);
		}
		function toggleBaseModelSelection(item) {
			const current = new Set(baseModelSelected.value);
			baseModelSelected.value = current.has(item.value) ? new Set([...current].filter((v) => v !== item.value)) : new Set([...current, item.value]);
		}
		function handleSearchEnter(event) {
			event.preventDefault();
			emit("search-enter");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [
				createVNode(AsyncSearchInput_default, {
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					autofocus: "",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "hover:outline-component-node-widget-background-highlighted/80", "focus-within:ring-0 focus-within:outline-component-node-widget-background-highlighted/80")),
					onEnter: handleSearchEnter
				}, null, 8, ["modelValue", "class"]),
				__props.candidateLabel ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(unref(t)("widgets.uploadSelect.topResult", { result: __props.candidateLabel })), 1)) : createCommentVNode("", true),
				createVNode(Button_default, {
					ref_key: "sortTriggerRef",
					ref: sortTriggerRef,
					"aria-label": unref(t)("assetBrowser.sortBy"),
					title: unref(t)("assetBrowser.sortBy"),
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleSortPopover
				}, {
					default: withCtx(() => [sortSelected.value !== "default" ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("", true), _cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--arrow-up-down] size-4" }, null, -1))]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				]),
				createVNode(unref(script), {
					ref_key: "sortPopoverRef",
					ref: sortPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[1] || (_cache[1] = ($event) => isSortPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.sortOptions, (item) => {
						return openBlock(), createBlock(Button_default, {
							key: item.name,
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: ($event) => handleSortSelected(item)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), sortSelected.value === item.id ? (openBlock(), createElementBlock("i", _hoisted_4$1)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)]),
					_: 1
				}, 512),
				__props.showOwnershipFilter && __props.ownershipOptions?.length ? (openBlock(), createBlock(Button_default, {
					key: 1,
					ref_key: "ownershipTriggerRef",
					ref: ownershipTriggerRef,
					"aria-label": unref(t)("assetBrowser.ownership"),
					title: unref(t)("assetBrowser.ownership"),
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleOwnershipPopover
				}, {
					default: withCtx(() => [ownershipSelected.value !== "all" ? (openBlock(), createElementBlock("div", _hoisted_5$1)) : createCommentVNode("", true), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--user] size-4" }, null, -1))]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				])) : createCommentVNode("", true),
				createVNode(unref(script), {
					ref_key: "ownershipPopoverRef",
					ref: ownershipPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[2] || (_cache[2] = ($event) => isOwnershipPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.ownershipOptions, (item) => {
						return openBlock(), createBlock(Button_default, {
							key: item.value,
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: ($event) => handleOwnershipSelected(item)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), ownershipSelected.value === item.value ? (openBlock(), createElementBlock("i", _hoisted_6$1)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)]),
					_: 1
				}, 512),
				__props.showBaseModelFilter && __props.baseModelOptions?.length ? (openBlock(), createBlock(Button_default, {
					key: 2,
					ref_key: "baseModelTriggerRef",
					ref: baseModelTriggerRef,
					"aria-label": unref(t)("assetBrowser.baseModel"),
					title: unref(t)("assetBrowser.baseModel"),
					variant: "textonly",
					size: "icon",
					class: normalizeClass(unref(cn)(unref(actionButtonStyle), "relative w-8 hover:outline-component-node-widget-background-highlighted active:scale-95")),
					onClick: toggleBaseModelPopover
				}, {
					default: withCtx(() => [baseModelSelected.value.size > 0 ? (openBlock(), createElementBlock("div", _hoisted_7)) : createCommentVNode("", true), _cache[9] || (_cache[9] = createBaseVNode("i", { class: "icon-[comfy--ai-model] size-4" }, null, -1))]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				])) : createCommentVNode("", true),
				createVNode(unref(script), {
					ref_key: "baseModelPopoverRef",
					ref: baseModelPopoverRef,
					dismissable: true,
					"close-on-escape": true,
					unstyled: "",
					pt: {
						root: { class: "absolute z-50" },
						content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
					},
					onHide: _cache[4] || (_cache[4] = ($event) => isBaseModelPopoverOpen.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref(cn)("flex min-w-32 flex-col gap-2 p-2", "bg-component-node-background", "rounded-lg outline -outline-offset-1 outline-component-node-border")) }, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(__props.baseModelOptions, (item) => {
							return openBlock(), createBlock(Button_default, {
								key: item.value,
								variant: "textonly",
								size: "unset",
								class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
								onClick: ($event) => toggleBaseModelSelection(item)
							}, {
								default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.name), 1), baseModelSelected.value.has(item.value) ? (openBlock(), createElementBlock("i", _hoisted_8)) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["class", "onClick"]);
						}), 128)),
						_cache[10] || (_cache[10] = createBaseVNode("span", { class: "h-0 w-full border-b border-border-default" }, null, -1)),
						createVNode(Button_default, {
							variant: "textonly",
							size: "unset",
							class: normalizeClass(unref(cn)("flex h-6 items-center justify-between text-left")),
							onClick: _cache[3] || (_cache[3] = ($event) => baseModelSelected.value = /* @__PURE__ */ new Set())
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("g.clearFilters")), 1)]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					_: 1
				}, 512),
				createBaseVNode("div", { class: normalizeClass(unref(cn)(unref(actionButtonStyle), "flex items-center justify-center gap-1 p-1 hover:outline-component-node-widget-background-highlighted")) }, [createVNode(Button_default, {
					"aria-label": unref(t)("assetBrowser.listView"),
					title: unref(t)("assetBrowser.listView"),
					variant: "textonly",
					size: "unset",
					class: normalizeClass(unref(cn)(layoutSwitchItemStyle, layoutMode.value === "list" && "bg-neutral-500/50 text-base-foreground")),
					onClick: _cache[5] || (_cache[5] = ($event) => layoutMode.value = "list")
				}, {
					default: withCtx(() => [..._cache[11] || (_cache[11] = [createBaseVNode("i", { class: "icon-[lucide--list] size-4" }, null, -1)])]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				]), createVNode(Button_default, {
					"aria-label": unref(t)("assetBrowser.gridView"),
					title: unref(t)("assetBrowser.gridView"),
					variant: "textonly",
					size: "unset",
					class: normalizeClass(unref(cn)(layoutSwitchItemStyle, layoutMode.value === "grid" && "bg-neutral-500/50 text-base-foreground")),
					onClick: _cache[6] || (_cache[6] = ($event) => layoutMode.value = "grid")
				}, {
					default: withCtx(() => [..._cache[12] || (_cache[12] = [createBaseVNode("i", { class: "icon-[lucide--layout-grid] size-4" }, null, -1)])]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"class"
				])], 2)
			]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "text-secondary mb-4 flex justify-start gap-1 px-4" };
var _hoisted_2$2 = ["disabled", "onClick"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuFilter.vue
var FormDropdownMenuFilter_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuFilter",
	props: /* @__PURE__ */ mergeModels({ filterOptions: {} }, {
		"filterSelected": {},
		"filterSelectedModifiers": {}
	}),
	emits: ["update:filterSelected"],
	setup(__props) {
		const filterSelected = useModel(__props, "filterSelected");
		const { isUploadButtonEnabled, showUploadDialog } = useModelUpload();
		const singleFilterOption = computed(() => __props.filterOptions.length === 1);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.filterOptions, (option) => {
				return openBlock(), createElementBlock("button", {
					key: option.value,
					type: "button",
					disabled: singleFilterOption.value,
					class: normalizeClass(unref(cn)("inline-flex appearance-none items-center justify-center rounded-md border-0 px-4 py-2 text-base-foreground select-none", !singleFilterOption.value && "cursor-pointer transition-all duration-150 hover:bg-interface-menu-component-surface-hovered hover:text-base-foreground active:scale-95", !singleFilterOption.value && filterSelected.value === option.value ? "bg-interface-menu-component-surface-selected! text-base-foreground" : "bg-transparent")),
					onClick: ($event) => filterSelected.value = option.value
				}, toDisplayString(option.name), 11, _hoisted_2$2);
			}), 128)), unref(isUploadButtonEnabled) && singleFilterOption.value ? (openBlock(), createBlock(Button_default, {
				key: 0,
				class: "ml-auto",
				size: "md",
				variant: "textonly",
				onClick: unref(showUploadDialog)
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--folder-input]" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("g.import")), 1)]),
				_: 1
			}, 8, ["onClick"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/types.ts
var AssetKindKey = Symbol("assetKind");
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["src", "aria-label"];
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = {
	key: 3,
	"data-testid": "dropdown-item-mesh-placeholder",
	class: "flex size-full items-center justify-center bg-modal-card-placeholder-background"
};
var _hoisted_5 = {
	key: 4,
	"data-testid": "dropdown-item-media-placeholder",
	class: "size-full bg-linear-to-tr from-blue-400 via-teal-500 to-green-400"
};
var _hoisted_6 = {
	key: 0,
	class: "text-secondary block text-xs"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenuItem.vue
var FormDropdownMenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenuItem",
	props: {
		index: {},
		selected: { type: Boolean },
		candidate: { type: Boolean },
		previewUrl: {},
		name: {},
		label: {},
		layout: {}
	},
	emits: ["click", "mediaLoad"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { t } = useI18n();
		const emit = __emit;
		const actualDimensions = ref(null);
		const assetKind = inject(AssetKindKey);
		const isVideo = computed(() => assetKind?.value === "video");
		const isMesh = computed(() => assetKind?.value === "mesh");
		const mediaContainerRef = ref();
		const resolvedMeshPreview = ref(null);
		const meshPreviewAttempted = ref(false);
		function toLookupName(name) {
			const stripped = name.replace(/ \[output\]$/, "");
			const slash = stripped.lastIndexOf("/");
			return slash === -1 ? stripped : stripped.substring(slash + 1);
		}
		async function resolveMeshPreview() {
			if (!isAssetPreviewSupported()) return;
			const url = await findServerPreviewUrl(toLookupName(props.name));
			if (url) resolvedMeshPreview.value = url;
		}
		useIntersectionObserver(mediaContainerRef, ([entry]) => {
			if (!entry?.isIntersecting) return;
			if (!isMesh.value || meshPreviewAttempted.value) return;
			meshPreviewAttempted.value = true;
			resolveMeshPreview();
		});
		watch(() => props.name, () => {
			meshPreviewAttempted.value = false;
			resolvedMeshPreview.value = null;
		});
		const displayedPreviewUrl = computed(() => isMesh.value ? resolvedMeshPreview.value : props.previewUrl);
		function handleClick() {
			emit("click", props.index);
		}
		function handleImageLoad(event) {
			emit("mediaLoad", event);
			if (!event.target || !(event.target instanceof HTMLImageElement)) return;
			const img = event.target;
			if (img.naturalWidth && img.naturalHeight) actualDimensions.value = `${img.naturalWidth} x ${img.naturalHeight}`;
		}
		function handleVideoLoad(event) {
			emit("mediaLoad", event);
			if (!event.target || !(event.target instanceof HTMLVideoElement)) return;
			const video = event.target;
			if (video.videoWidth && video.videoHeight) actualDimensions.value = `${video.videoWidth} x ${video.videoHeight}`;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(unref(cn)("group/item flex cursor-pointer gap-1 bg-component-node-widget-background select-none", "transition-[transform,box-shadow,background-color] duration-150", {
					"flex-col text-center": __props.layout === "grid",
					"max-h-16 flex-row rounded-lg text-left hover:scale-102 active:scale-98": __props.layout === "list",
					"flex-row rounded-lg text-left hover:bg-component-node-widget-background-hovered": __props.layout === "list-small",
					"ring-2 ring-component-node-widget-background-highlighted": __props.layout === "list" && __props.selected
				}, __props.candidate && !__props.selected && __props.layout !== "grid" && "bg-component-node-widget-background-hovered")),
				onClick: handleClick
			}, [__props.layout !== "list-small" ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "mediaContainerRef",
				ref: mediaContainerRef,
				class: normalizeClass(unref(cn)("relative", "aspect-square w-full overflow-hidden outline-1 -outline-offset-1 outline-interface-stroke", "transition-[transform,box-shadow] duration-150", {
					"max-w-16 min-w-16 rounded-l-lg": __props.layout === "list",
					"rounded-sm group-hover/item:scale-108 group-active/item:scale-95": __props.layout === "grid",
					"ring-2 ring-component-node-widget-background-highlighted": __props.layout === "grid" && (__props.selected || __props.candidate)
				}))
			}, [__props.selected ? (openBlock(), createElementBlock("div", {
				key: 0,
				"aria-label": unref(t)("g.selected"),
				role: "img",
				class: "absolute top-1 left-1 size-4 rounded-full border border-base-foreground bg-primary-background"
			}, [..._cache[0] || (_cache[0] = [createBaseVNode("i", {
				class: "bold icon-[lucide--check] size-3 translate-y-[-0.5px] text-base-foreground",
				"aria-hidden": "true"
			}, null, -1)])], 8, _hoisted_1$1)) : createCommentVNode("", true), __props.previewUrl && isVideo.value ? (openBlock(), createElementBlock("video", {
				key: 1,
				src: __props.previewUrl,
				"aria-label": __props.label ?? __props.name,
				class: "size-full object-cover",
				preload: "metadata",
				muted: "",
				onLoadeddata: handleVideoLoad
			}, null, 40, _hoisted_2$1)) : displayedPreviewUrl.value ? (openBlock(), createElementBlock("img", {
				key: 2,
				src: displayedPreviewUrl.value,
				alt: __props.name,
				draggable: "false",
				class: "size-full object-cover",
				onLoad: handleImageLoad
			}, null, 40, _hoisted_3)) : isMesh.value ? (openBlock(), createElementBlock("div", _hoisted_4, [..._cache[1] || (_cache[1] = [createBaseVNode("i", { class: "icon-[lucide--box] text-3xl text-muted-foreground" }, null, -1)])])) : (openBlock(), createElementBlock("div", _hoisted_5))], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref(cn)("flex gap-1", {
				"flex-col": __props.layout === "grid",
				"w-full min-w-0 flex-col justify-center px-4 py-1": __props.layout === "list",
				"w-full flex-row items-center justify-between p-2": __props.layout === "list-small"
			})) }, [withDirectives((openBlock(), createElementBlock("span", { class: normalizeClass(unref(cn)("line-clamp-2 block overflow-hidden text-xs wrap-break-word", "transition-colors duration-150", !!__props.selected && "text-base-foreground")) }, [createTextVNode(toDisplayString(__props.label ?? __props.name), 1)], 2)), [[_directive_tooltip, __props.layout === "grid" ? __props.label ?? __props.name : void 0]]), actualDimensions.value ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(actualDimensions.value), 1)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 1,
	class: "flex h-50 items-center justify-center"
};
var _hoisted_2 = ["title", "aria-label"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdownMenu.vue
var FormDropdownMenu_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdownMenu",
	props: /* @__PURE__ */ mergeModels({
		items: {},
		isSelected: { type: Function },
		filterOptions: {},
		sortOptions: {},
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {},
		candidateIndex: { default: () => -1 },
		candidateLabel: {}
	}, {
		"filterSelected": {},
		"filterSelectedModifiers": {},
		"layoutMode": {},
		"layoutModeModifiers": {},
		"sortSelected": {},
		"sortSelectedModifiers": {},
		"searchQuery": {},
		"searchQueryModifiers": {},
		"ownershipSelected": {},
		"ownershipSelectedModifiers": {},
		"baseModelSelected": {},
		"baseModelSelectedModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["item-click", "search-enter"], [
		"update:filterSelected",
		"update:layoutMode",
		"update:sortSelected",
		"update:searchQuery",
		"update:ownershipSelected",
		"update:baseModelSelected"
	]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const filterSelected = useModel(__props, "filterSelected");
		const layoutMode = useModel(__props, "layoutMode");
		const sortSelected = useModel(__props, "sortSelected");
		const searchQuery = useModel(__props, "searchQuery");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const LAYOUT_CONFIGS = {
			grid: {
				maxColumns: 4,
				itemHeight: 120,
				itemWidth: 89,
				gap: "var(--spacing-4) var(--spacing-2)"
			},
			list: {
				maxColumns: 1,
				itemHeight: 64,
				itemWidth: 380,
				gap: "var(--spacing-2)"
			},
			"list-small": {
				maxColumns: 1,
				itemHeight: 40,
				itemWidth: 380,
				gap: "var(--spacing-1)"
			}
		};
		const layoutConfig = computed(() => LAYOUT_CONFIGS[layoutMode.value ?? "grid"]);
		const gridStyle = computed(() => ({
			display: "grid",
			gap: layoutConfig.value.gap,
			padding: "1rem",
			width: "100%"
		}));
		const virtualItems = computed(() => __props.items.map((item) => ({
			...item,
			key: String(item.id)
		})));
		/**
		* The dropdown content is teleported to `document.body` by PrimeVue Popover,
		* detaching it from the LGraphNode subtree where the canvas wheel guard lives.
		* Suppress only the destructive browser defaults (page zoom on pinch and
		* back/forward on horizontal swipe); regular vertical scrolling still
		* scrolls the dropdown's own content.
		*/
		const onWheel = (event) => {
			if (isCanvasGestureWheel(event)) event.preventDefault();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "flex h-[640px] w-103 flex-col rounded-lg bg-component-node-background pt-4 outline -outline-offset-1 outline-node-component-border",
				"data-capture-wheel": "true",
				"data-testid": "form-dropdown-menu",
				onWheel
			}, [
				__props.filterOptions.length > 0 ? (openBlock(), createBlock(FormDropdownMenuFilter_default, {
					key: 0,
					"filter-selected": filterSelected.value,
					"onUpdate:filterSelected": _cache[0] || (_cache[0] = ($event) => filterSelected.value = $event),
					"filter-options": __props.filterOptions
				}, null, 8, ["filter-selected", "filter-options"])) : createCommentVNode("", true),
				createVNode(FormDropdownMenuActions_default, {
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[1] || (_cache[1] = ($event) => layoutMode.value = $event),
					"sort-selected": sortSelected.value,
					"onUpdate:sortSelected": _cache[2] || (_cache[2] = ($event) => sortSelected.value = $event),
					"search-query": searchQuery.value,
					"onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
					"ownership-selected": ownershipSelected.value,
					"onUpdate:ownershipSelected": _cache[4] || (_cache[4] = ($event) => ownershipSelected.value = $event),
					"base-model-selected": baseModelSelected.value,
					"onUpdate:baseModelSelected": _cache[5] || (_cache[5] = ($event) => baseModelSelected.value = $event),
					"sort-options": __props.sortOptions,
					"show-ownership-filter": __props.showOwnershipFilter,
					"ownership-options": __props.ownershipOptions,
					"show-base-model-filter": __props.showBaseModelFilter,
					"base-model-options": __props.baseModelOptions,
					"candidate-label": __props.candidateLabel,
					onSearchEnter: _cache[6] || (_cache[6] = ($event) => emit("search-enter"))
				}, null, 8, [
					"layout-mode",
					"sort-selected",
					"search-query",
					"ownership-selected",
					"base-model-selected",
					"sort-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options",
					"candidate-label"
				]),
				__props.items.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("i", {
					title: _ctx.$t("g.noItems"),
					"aria-label": _ctx.$t("g.noItems"),
					class: "icon-[lucide--circle-off] size-30 text-muted-foreground/20"
				}, null, 8, _hoisted_2)])) : (openBlock(), createBlock(VirtualGrid_default, {
					key: layoutMode.value,
					items: virtualItems.value,
					"grid-style": gridStyle.value,
					"max-columns": layoutConfig.value.maxColumns,
					"default-item-height": layoutConfig.value.itemHeight,
					"default-item-width": layoutConfig.value.itemWidth,
					"buffer-rows": 2,
					class: "mt-2 min-h-0 flex-1"
				}, {
					item: withCtx(({ item, index }) => [createVNode(FormDropdownMenuItem_default, {
						index,
						candidate: index === __props.candidateIndex,
						selected: __props.isSelected(item, index),
						"preview-url": item.preview_url ?? "",
						name: item.name,
						label: item.label,
						layout: layoutMode.value,
						onClick: ($event) => emit("item-click", item, index)
					}, null, 8, [
						"index",
						"candidate",
						"selected",
						"preview-url",
						"name",
						"label",
						"layout",
						"onClick"
					])]),
					_: 1
				}, 8, [
					"items",
					"grid-style",
					"max-columns",
					"default-item-height",
					"default-item-width"
				]))
			], 32);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/shared.ts
async function defaultSearcher(query, items) {
	if (query.trim() === "") return items;
	const words = query.trim().toLowerCase().split(" ");
	return items.filter((item) => {
		const name = item.name.toLowerCase();
		const label = item.label?.toLowerCase() ?? "";
		return words.every((word) => name.includes(word) || label.includes(word));
	});
}
/**
* Create a SortOption that delegates to the shared sortAssets utility
*/
function createSortOption(id, name) {
	return {
		id,
		name,
		sorter: ({ items }) => sortAssets(items, id)
	};
}
function getDefaultSortOptions() {
	return [createSortOption("default", t("assetBrowser.sortUnsorted")), createSortOption("name-asc", t("assetBrowser.sortAZ"))];
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/form/dropdown/FormDropdown.vue
var FormDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "FormDropdown",
	props: /* @__PURE__ */ mergeModels({
		items: {},
		displayItems: {},
		placeholder: {},
		multiple: {
			type: [Boolean, Number],
			default: false
		},
		uploadable: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		accept: {},
		filterOptions: { default: () => [] },
		sortOptions: { default: () => getDefaultSortOptions() },
		showOwnershipFilter: { type: Boolean },
		ownershipOptions: {},
		showBaseModelFilter: { type: Boolean },
		baseModelOptions: {},
		isSelected: {
			type: Function,
			default: (selected, item, _index) => selected.has(item.id)
		},
		searcher: {
			type: Function,
			default: defaultSearcher
		}
	}, {
		"selected": { default: () => /* @__PURE__ */ new Set() },
		"selectedModifiers": {},
		"filterSelected": { default: "" },
		"filterSelectedModifiers": {},
		"sortSelected": { default: "default" },
		"sortSelectedModifiers": {},
		"layoutMode": { default: "grid" },
		"layoutModeModifiers": {},
		"files": { default: () => [] },
		"filesModifiers": {},
		"searchQuery": { default: "" },
		"searchQueryModifiers": {},
		"ownershipSelected": { default: "all" },
		"ownershipSelectedModifiers": {},
		"baseModelSelected": { default: () => /* @__PURE__ */ new Set() },
		"baseModelSelectedModifiers": {},
		"isOpen": {
			type: Boolean,
			default: false
		},
		"isOpenModifiers": {}
	}),
	emits: [
		"update:selected",
		"update:filterSelected",
		"update:sortSelected",
		"update:layoutMode",
		"update:files",
		"update:searchQuery",
		"update:ownershipSelected",
		"update:baseModelSelected",
		"update:isOpen"
	],
	setup(__props) {
		const { t } = useI18n();
		const placeholderText = computed(() => __props.placeholder ?? t("widgets.uploadSelect.placeholder"));
		const selected = useModel(__props, "selected");
		const filterSelected = useModel(__props, "filterSelected");
		const sortSelected = useModel(__props, "sortSelected");
		const layoutMode = useModel(__props, "layoutMode");
		const files = useModel(__props, "files");
		const searchQuery = useModel(__props, "searchQuery");
		const ownershipSelected = useModel(__props, "ownershipSelected");
		const baseModelSelected = useModel(__props, "baseModelSelected");
		const isOpen = useModel(__props, "isOpen");
		const toastStore = useToastStore();
		const popoverRef = ref();
		const triggerAnchorRef = useTemplateRef("triggerAnchorRef");
		const triggerRef = useTemplateRef("triggerRef");
		const displayedSearchQuery = ref("");
		const isFiltering = ref(false);
		const maxSelectable = computed(() => {
			if (__props.multiple === true) return Infinity;
			if (typeof __props.multiple === "number") return __props.multiple;
			return 1;
		});
		const isSingleSelect = computed(() => maxSelectable.value === 1);
		const debouncedSearchQuery = refDebounced(searchQuery, 250, { maxWait: 1e3 });
		const filteredItems = computedAsync(async (onCancel) => {
			if (!isOpen.value) {
				displayedSearchQuery.value = "";
				return __props.items;
			}
			const query = debouncedSearchQuery.value;
			let cancelled = false;
			let cleanupFn;
			onCancel(() => {
				cancelled = true;
				cleanupFn?.();
			});
			const result = await __props.searcher(query, __props.items, (cb) => {
				cleanupFn = cb;
			});
			if (!cancelled) displayedSearchQuery.value = query;
			return result;
		}, __props.items, { evaluating: isFiltering });
		const defaultSorter = computed(() => {
			return __props.sortOptions.find((option) => option.id === "default")?.sorter || (({ items: i }) => i.slice());
		});
		const selectedSorter = computed(() => {
			if (sortSelected.value === "default") return defaultSorter.value;
			return __props.sortOptions.find((option) => option.id === sortSelected.value)?.sorter || defaultSorter.value;
		});
		const sortedItems = computed(() => {
			if (!isOpen.value) return __props.items;
			return selectedSorter.value({ items: filteredItems.value }) || [];
		});
		const isShowingCurrentSearchResults = computed(() => isOpen.value && isSingleSelect.value && !isFiltering.value && searchQuery.value.trim() !== "" && displayedSearchQuery.value === searchQuery.value && sortedItems.value.length > 0);
		const candidateIndex = computed(() => isShowingCurrentSearchResults.value ? 0 : -1);
		const candidateLabel = computed(() => {
			const candidate = sortedItems.value[candidateIndex.value];
			return candidate?.label ?? candidate?.name;
		});
		function internalIsSelected(item, index) {
			return __props.isSelected(selected.value, item, index);
		}
		const toggleDropdown = (event) => {
			if (__props.disabled) return;
			if (popoverRef.value && triggerAnchorRef.value) {
				popoverRef.value.toggle?.(event, triggerAnchorRef.value);
				isOpen.value = !isOpen.value;
			}
		};
		function focusTrigger() {
			triggerRef.value?.focus();
		}
		const closeDropdown = ({ restoreFocus = false } = {}) => {
			if (popoverRef.value) {
				popoverRef.value.hide?.();
				isOpen.value = false;
			}
			if (restoreFocus) focusTrigger();
		};
		function handleFileChange(event) {
			if (__props.disabled) return;
			const target = event.target;
			if (!(target instanceof HTMLInputElement)) return;
			if (target.files) files.value = Array.from(target.files);
			target.value = "";
		}
		function handleSelection(item, index) {
			if (__props.disabled) return;
			const sel = selected.value;
			if (internalIsSelected(item, index)) sel.delete(item.id);
			else if (sel.size < maxSelectable.value) sel.add(item.id);
			else if (maxSelectable.value === 1) {
				sel.clear();
				sel.add(item.id);
			} else {
				toastStore.addAlert(t("widgets.uploadSelect.maxSelectionReached"));
				return;
			}
			selected.value = new Set(sel);
			if (maxSelectable.value === 1) closeDropdown({ restoreFocus: true });
		}
		async function getTopSearchResult() {
			const query = searchQuery.value;
			if (query.trim() === "") return;
			const sourceItems = __props.items;
			const matches = isShowingCurrentSearchResults.value && displayedSearchQuery.value === query ? filteredItems.value : await __props.searcher(query, sourceItems, () => {});
			if (query !== searchQuery.value || sourceItems !== __props.items || !isOpen.value) return;
			return selectedSorter.value({ items: matches })?.[0];
		}
		async function selectTopSearchResult() {
			try {
				if (__props.disabled || !isOpen.value || !isSingleSelect.value) return;
				const topResult = await getTopSearchResult();
				if (!topResult) return;
				handleSelection(topResult, 0);
			} catch (error) {
				console.error("[FormDropdown] search selection failed", error);
			}
		}
		function handleSearchEnter() {
			selectTopSearchResult();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "triggerAnchorRef",
				ref: triggerAnchorRef
			}, [createVNode(FormDropdownInput_default, {
				ref_key: "triggerRef",
				ref: triggerRef,
				files: files.value,
				"is-open": isOpen.value,
				placeholder: placeholderText.value,
				items: __props.items,
				"display-items": __props.displayItems,
				"max-selectable": maxSelectable.value,
				selected: selected.value,
				uploadable: __props.uploadable,
				disabled: __props.disabled,
				accept: __props.accept,
				onSelectClick: toggleDropdown,
				onFileChange: handleFileChange
			}, null, 8, [
				"files",
				"is-open",
				"placeholder",
				"items",
				"display-items",
				"max-selectable",
				"selected",
				"uploadable",
				"disabled",
				"accept"
			]), createVNode(unref(script), {
				ref_key: "popoverRef",
				ref: popoverRef,
				dismissable: true,
				"close-on-escape": true,
				unstyled: "",
				pt: {
					root: { class: "absolute z-50" },
					content: { class: ["bg-transparent border-none p-0 pt-2 rounded-lg shadow-lg"] }
				},
				onHide: _cache[6] || (_cache[6] = ($event) => isOpen.value = false)
			}, {
				default: withCtx(() => [createVNode(FormDropdownMenu_default, {
					"filter-selected": filterSelected.value,
					"onUpdate:filterSelected": _cache[0] || (_cache[0] = ($event) => filterSelected.value = $event),
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[1] || (_cache[1] = ($event) => layoutMode.value = $event),
					"sort-selected": sortSelected.value,
					"onUpdate:sortSelected": _cache[2] || (_cache[2] = ($event) => sortSelected.value = $event),
					"search-query": searchQuery.value,
					"onUpdate:searchQuery": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
					"ownership-selected": ownershipSelected.value,
					"onUpdate:ownershipSelected": _cache[4] || (_cache[4] = ($event) => ownershipSelected.value = $event),
					"base-model-selected": baseModelSelected.value,
					"onUpdate:baseModelSelected": _cache[5] || (_cache[5] = ($event) => baseModelSelected.value = $event),
					"filter-options": __props.filterOptions,
					"sort-options": __props.sortOptions,
					"show-ownership-filter": __props.showOwnershipFilter,
					"ownership-options": __props.ownershipOptions,
					"show-base-model-filter": __props.showBaseModelFilter,
					"base-model-options": __props.baseModelOptions,
					disabled: __props.disabled,
					items: sortedItems.value,
					"candidate-index": candidateIndex.value,
					"candidate-label": candidateLabel.value,
					"is-selected": internalIsSelected,
					"max-selectable": maxSelectable.value,
					onClose: closeDropdown,
					onSearchEnter: handleSearchEnter,
					onItemClick: handleSelection
				}, null, 8, [
					"filter-selected",
					"layout-mode",
					"sort-selected",
					"search-query",
					"ownership-selected",
					"base-model-selected",
					"filter-options",
					"sort-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options",
					"disabled",
					"items",
					"candidate-index",
					"candidate-label",
					"max-selectable"
				])]),
				_: 1
			}, 512)], 512);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useAssetWidgetData.ts
/**
* Composable for fetching and transforming asset data for Vue node widgets.
* Provides reactive asset data based on node type with automatic category detection.
* Uses store-based caching to avoid duplicate fetches across multiple instances.
*
* Cloud-only composable - returns empty data when not in cloud environment.
*
* @param nodeType - ComfyUI node type (ref, getter, or plain value). Can be undefined.
*   Accepts: ref('CheckpointLoaderSimple'), () => 'CheckpointLoaderSimple', or 'CheckpointLoaderSimple'
* @returns Reactive data including category, assets, dropdown items, loading state, and errors
*/
function useAssetWidgetData(nodeType) {
	if (isCloud) {
		const assetsStore = useAssetsStore();
		const modelToNodeStore = useModelToNodeStore();
		const category = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? modelToNodeStore.getCategoryForNodeType(resolvedType) : void 0;
		});
		const assets = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.getAssets(resolvedType) ?? [] : [];
		});
		const isLoading = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.isModelLoading(resolvedType) : false;
		});
		const error = computed(() => {
			const resolvedType = toValue(nodeType);
			return resolvedType ? assetsStore.getError(resolvedType) ?? null : null;
		});
		watch(() => toValue(nodeType), async (currentNodeType) => {
			if (!currentNodeType) return;
			const isLoading = assetsStore.isModelLoading(currentNodeType);
			const hasBeenInitialized = assetsStore.hasAssetKey(currentNodeType);
			if (!isLoading && !hasBeenInitialized) await assetsStore.updateModelsForNodeType(currentNodeType);
		}, { immediate: true });
		return {
			category,
			assets,
			isLoading,
			error
		};
	}
	return {
		category: computed(() => void 0),
		assets: computed(() => []),
		isLoading: computed(() => false),
		error: computed(() => null)
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useWidgetSelectActions.ts
function useWidgetSelectActions(options) {
	const { modelValue, dropdownItems } = options;
	const toastStore = useToastStore();
	const { wrapWithErrorHandlingAsync } = useErrorHandling();
	function updateSelectedItems(selectedItems) {
		const id = selectedItems.size > 0 ? selectedItems.values().next().value : void 0;
		modelValue.value = id == null ? void 0 : dropdownItems.value.find((item) => item.id === id)?.name;
		useWorkflowStore().activeWorkflow?.changeTracker?.captureCanvasState();
	}
	async function uploadFile(file, isPasted = false, formFields = {}) {
		const body = new FormData();
		body.append("image", file);
		if (isPasted) body.append("subfolder", "pasted");
		else {
			const subfolder = toValue(options.uploadSubfolder);
			if (subfolder) body.append("subfolder", subfolder);
		}
		if (formFields.type) body.append("type", formFields.type);
		const resp = await api.fetchApi("/upload/image", {
			method: "POST",
			body
		});
		if (resp.status !== 200) {
			toastStore.addAlert(resp.status + " - " + resp.statusText);
			return null;
		}
		const data = await resp.json();
		if (formFields.type === "input" || !formFields.type && !isPasted) await useAssetsStore().updateInputs();
		return data.subfolder ? `${data.subfolder}/${data.name}` : data.name;
	}
	async function uploadFiles(files) {
		const folder = toValue(options.uploadFolder) ?? "input";
		const uploadPromises = files.map((file) => uploadFile(file, false, { type: folder }));
		return (await Promise.all(uploadPromises)).filter((path) => path !== null);
	}
	return {
		updateSelectedItems,
		handleFilesUpdate: wrapWithErrorHandlingAsync(async (files) => {
			if (!files || files.length === 0) return;
			const uploadedPaths = await uploadFiles(files);
			if (uploadedPaths.length === 0) {
				toastStore.addAlert("File upload failed");
				return;
			}
			const widget = toValue(options.widget);
			const values = widget.options?.values;
			if (Array.isArray(values)) uploadedPaths.forEach((path) => {
				if (!values.includes(path)) values.push(path);
			});
			modelValue.value = uploadedPaths[0];
			if (widget.callback) widget.callback(uploadedPaths[0]);
			useWorkflowStore().activeWorkflow?.changeTracker?.captureCanvasState();
		})
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/composables/useWidgetSelectItems.ts
function getDisplayLabel(value, getOptionLabel) {
	if (!getOptionLabel) return value;
	try {
		return getOptionLabel(value) || value;
	} catch (e) {
		console.warn("Failed to map value:", e);
		return value;
	}
}
function assetKindToMediaType(kind) {
	return kind === "mesh" ? "3D" : kind;
}
function getMediaUrl(filename, type, assetKind) {
	if (![
		"image",
		"video",
		"audio"
	].includes(assetKind ?? "")) return "";
	const params = new URLSearchParams({
		filename,
		type
	});
	appendCloudResParam(params, filename);
	return `/api/view?${params}`;
}
function useWidgetSelectItems(options) {
	const { modelValue, outputMediaAssets, assetData } = options;
	const missingMediaStore = useMissingMediaStore();
	const missingMediaValues = computed(() => new Set(missingMediaStore.missingMediaCandidates?.map((c) => c.name) ?? []));
	const filterSelected = ref("all");
	const filterOptions = computed(() => {
		if (toValue(options.isAssetMode)) return [{
			name: capitalize(assetData?.category.value ?? "All"),
			value: "all"
		}];
		return [
			{
				name: t("g.all"),
				value: "all"
			},
			{
				name: t("sideToolbar.labels.imported"),
				value: "inputs"
			},
			{
				name: t("sideToolbar.labels.generated"),
				value: "outputs"
			}
		];
	});
	const ownershipSelected = ref("all");
	const showOwnershipFilter = computed(() => !!toValue(options.isAssetMode));
	const { ownershipOptions, availableBaseModels } = useAssetFilterOptions(() => assetData?.assets.value ?? []);
	const baseModelSelected = ref(/* @__PURE__ */ new Set());
	const showBaseModelFilter = computed(() => !!toValue(options.isAssetMode));
	const baseModelOptions = computed(() => {
		if (!toValue(options.isAssetMode) || !assetData) return [];
		return availableBaseModels.value;
	});
	const resolvedByJobId = shallowRef(/* @__PURE__ */ new Map());
	watch(() => outputMediaAssets.media.value, (assets, _, onCleanup) => {
		let cancelled = false;
		onCleanup(() => {
			cancelled = true;
		});
		const seenJobIds = /* @__PURE__ */ new Set();
		const jobsToResolve = [];
		for (const asset of assets) {
			if (asset.hash) continue;
			const meta = getOutputAssetMetadata(asset.user_metadata);
			if (!meta) continue;
			if ((meta.outputCount ?? meta.allOutputs?.length ?? 0) <= 1 || resolvedByJobId.value.has(meta.jobId) || seenJobIds.has(meta.jobId)) continue;
			seenJobIds.add(meta.jobId);
			jobsToResolve.push({
				jobId: meta.jobId,
				meta,
				createdAt: asset.created_at
			});
		}
		if (jobsToResolve.length === 0) return;
		Promise.all(jobsToResolve.map(({ jobId, meta, createdAt }) => resolveOutputAssetItems(meta, { createdAt }).then((resolved) => ({
			jobId,
			resolved
		})).catch((error) => {
			console.warn("Failed to resolve multi-output job", jobId, error);
			return {
				jobId,
				resolved: []
			};
		}))).then((results) => {
			if (cancelled) return;
			const next = new Map(resolvedByJobId.value);
			let changed = false;
			for (const { jobId, resolved } of results) {
				if (!resolved.length) continue;
				next.set(jobId, resolved);
				changed = true;
			}
			if (changed) resolvedByJobId.value = next;
		});
	}, { immediate: true });
	const inputItems = computed(() => {
		const values = toValue(options.values) || [];
		if (!Array.isArray(values)) return [];
		const labelFn = toValue(options.getOptionLabel);
		const kind = toValue(options.assetKind);
		const missing = missingMediaValues.value;
		return values.filter((value) => !missing.has(String(value))).map((value, index) => ({
			id: `input-${index}`,
			preview_url: getMediaUrl(String(value), "input", kind),
			name: String(value),
			label: getDisplayLabel(String(value), labelFn)
		}));
	});
	const outputItems = computed(() => {
		const kind = toValue(options.assetKind);
		if (![
			"image",
			"video",
			"audio",
			"mesh"
		].includes(kind ?? "")) return [];
		const targetMediaType = assetKindToMediaType(kind);
		const seen = /* @__PURE__ */ new Set();
		const items = [];
		const labelFn = toValue(options.getOptionLabel);
		const assets = outputMediaAssets.media.value.flatMap((asset) => {
			const meta = getOutputAssetMetadata(asset.user_metadata);
			return (meta ? resolvedByJobId.value.get(meta.jobId) : void 0) ?? [asset];
		});
		const missing = missingMediaValues.value;
		for (const asset of assets) {
			if (getMediaTypeFromFilename(asset.name) !== targetMediaType) continue;
			if (seen.has(asset.id)) continue;
			seen.add(asset.id);
			const filenameForUrl = getAssetUrlFilename(asset);
			const subfolder = kind === "mesh" ? getOutputAssetMetadata(asset.user_metadata)?.subfolder : void 0;
			const annotatedPath = `${subfolder ? `${subfolder}/${filenameForUrl}` : filenameForUrl} [output]`;
			if (missing.has(annotatedPath)) continue;
			const displayLabel = `${getAssetDisplayFilename(asset)} [output]`;
			items.push({
				id: `output-${asset.id}`,
				preview_url: kind === "mesh" ? "" : asset.preview_url || getMediaUrl(filenameForUrl, "output", kind),
				name: annotatedPath,
				label: getDisplayLabel(displayLabel, labelFn)
			});
		}
		return items;
	});
	const missingValueItem = computed(() => {
		const currentValue = modelValue.value;
		if (!currentValue) return void 0;
		const labelFn = toValue(options.getOptionLabel);
		const kind = toValue(options.assetKind);
		if (missingMediaValues.value.has(currentValue)) return void 0;
		if (toValue(options.isAssetMode) && assetData) {
			if (assetData.assets.value.some((asset) => getAssetFilename(asset) === currentValue)) return void 0;
			return {
				id: `missing-${currentValue}`,
				preview_url: "",
				name: currentValue,
				label: getDisplayLabel(currentValue, labelFn)
			};
		}
		const existsInInputs = inputItems.value.some((item) => item.name === currentValue);
		const existsInOutputs = outputItems.value.some((item) => item.name === currentValue);
		if (existsInInputs || existsInOutputs) return void 0;
		const isOutput = currentValue.endsWith(" [output]");
		const strippedValue = isOutput ? currentValue.replace(" [output]", "") : currentValue;
		return {
			id: `missing-${currentValue}`,
			preview_url: getMediaUrl(strippedValue, isOutput ? "output" : "input", kind),
			name: currentValue,
			label: getDisplayLabel(currentValue, labelFn)
		};
	});
	const assetItems = computed(() => {
		if (!toValue(options.isAssetMode) || !assetData) return [];
		return assetData.assets.value.map((asset) => ({
			id: asset.id,
			name: getAssetFilename(asset),
			label: getAssetDisplayName(asset),
			preview_url: asset.preview_url,
			is_immutable: asset.is_immutable,
			base_models: getAssetBaseModels(asset)
		}));
	});
	const filteredAssetItems = computed(() => filterItemByBaseModels(filterItemByOwnership(assetItems.value, ownershipSelected.value), baseModelSelected.value));
	const allItems = computed(() => {
		if (toValue(options.isAssetMode) && assetData) return filteredAssetItems.value;
		return [
			...missingValueItem.value ? [missingValueItem.value] : [],
			...inputItems.value,
			...outputItems.value
		];
	});
	const dropdownItems = computed(() => {
		if (toValue(options.isAssetMode)) return allItems.value;
		switch (filterSelected.value) {
			case "inputs": return inputItems.value;
			case "outputs": return outputItems.value;
			default: return allItems.value;
		}
	});
	const displayItems = computed(() => {
		if (toValue(options.isAssetMode) && assetData && missingValueItem.value) return [missingValueItem.value, ...filteredAssetItems.value];
		return dropdownItems.value;
	});
	return {
		dropdownItems,
		displayItems,
		filterSelected,
		filterOptions,
		ownershipSelected,
		showOwnershipFilter,
		ownershipOptions,
		baseModelSelected,
		showBaseModelFilter,
		baseModelOptions,
		selectedSet: computed(() => {
			const currentValue = modelValue.value;
			if (currentValue === void 0) return /* @__PURE__ */ new Set();
			const item = displayItems.value.find((item) => item.name === currentValue);
			return item ? new Set([item.id]) : /* @__PURE__ */ new Set();
		})
	};
}
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelectDropdown.vue
var WidgetSelectDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelectDropdown",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		nodeType: {},
		assetKind: {},
		allowUpload: { type: Boolean },
		uploadFolder: {},
		uploadSubfolder: {},
		isAssetMode: { type: Boolean },
		defaultLayoutMode: {}
	}, {
		"modelValue": { default(props) {
			const values = props.widget.options?.values;
			return (Array.isArray(values) ? values[0] : void 0) ?? "";
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		provide(AssetKindKey, computed(() => props.assetKind));
		const modelValue = useModel(__props, "modelValue");
		const { t } = useI18n();
		const outputMediaAssets = isCloud ? useFlatOutputAssets() : useAssetsApi("output");
		const combinedProps = computed(() => filterWidgetProps(props.widget.options, PANEL_EXCLUDED_PROPS));
		const getAssetData = () => {
			const nodeType = props.widget.options?.nodeType ?? props.nodeType;
			if (props.isAssetMode && nodeType) return useAssetWidgetData(toRef(nodeType));
			return null;
		};
		const { dropdownItems, displayItems, filterSelected, filterOptions, ownershipSelected, showOwnershipFilter, ownershipOptions, baseModelSelected, showBaseModelFilter, baseModelOptions, selectedSet } = useWidgetSelectItems({
			values: () => props.widget.options?.values,
			getOptionLabel: () => props.widget.options?.getOptionLabel,
			modelValue,
			assetKind: () => props.assetKind,
			outputMediaAssets,
			assetData: getAssetData(),
			isAssetMode: () => props.isAssetMode
		});
		const { updateSelectedItems, handleFilesUpdate } = useWidgetSelectActions({
			modelValue,
			dropdownItems,
			widget: () => props.widget,
			uploadFolder: () => props.uploadFolder,
			uploadSubfolder: () => props.uploadSubfolder
		});
		const mediaPlaceholder = computed(() => {
			const options = props.widget.options;
			if (options?.placeholder) return options.placeholder;
			switch (props.assetKind) {
				case "image": return t("widgets.uploadSelect.placeholderImage");
				case "video": return t("widgets.uploadSelect.placeholderVideo");
				case "audio": return t("widgets.uploadSelect.placeholderAudio");
				case "mesh": return t("widgets.uploadSelect.placeholderMesh");
				case "model": return t("widgets.uploadSelect.placeholderModel");
				case "unknown": return t("widgets.uploadSelect.placeholderUnknown");
			}
			return t("widgets.uploadSelect.placeholder");
		});
		const uploadable = computed(() => {
			if (props.isAssetMode) return false;
			return props.allowUpload === true;
		});
		const acceptTypes = computed(() => {
			switch (props.assetKind) {
				case "image": return "image/*";
				case "video": return "video/*";
				case "audio": return "audio/*";
				case "mesh": return SUPPORTED_EXTENSIONS_ACCEPT;
				default: return;
			}
		});
		const layoutMode = ref(props.defaultLayoutMode ?? "grid");
		function handleIsOpenUpdate(isOpen) {
			if (isOpen && !outputMediaAssets.loading.value) outputMediaAssets.refresh();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: __props.widget }, {
				default: withCtx(() => [createVNode(FormDropdown_default, mergeProps({
					"filter-selected": unref(filterSelected),
					"onUpdate:filterSelected": _cache[0] || (_cache[0] = ($event) => isRef(filterSelected) ? filterSelected.value = $event : null),
					"layout-mode": layoutMode.value,
					"onUpdate:layoutMode": _cache[1] || (_cache[1] = ($event) => layoutMode.value = $event),
					"ownership-selected": unref(ownershipSelected),
					"onUpdate:ownershipSelected": _cache[2] || (_cache[2] = ($event) => isRef(ownershipSelected) ? ownershipSelected.value = $event : null),
					"base-model-selected": unref(baseModelSelected),
					"onUpdate:baseModelSelected": _cache[3] || (_cache[3] = ($event) => isRef(baseModelSelected) ? baseModelSelected.value = $event : null),
					selected: unref(selectedSet),
					items: unref(dropdownItems),
					"display-items": unref(displayItems),
					placeholder: mediaPlaceholder.value,
					multiple: false,
					uploadable: uploadable.value,
					accept: acceptTypes.value,
					"filter-options": unref(filterOptions),
					"show-ownership-filter": unref(showOwnershipFilter),
					"ownership-options": unref(ownershipOptions),
					"show-base-model-filter": unref(showBaseModelFilter),
					"base-model-options": unref(baseModelOptions)
				}, combinedProps.value, {
					class: "w-full",
					"onUpdate:selected": unref(updateSelectedItems),
					"onUpdate:files": unref(handleFilesUpdate),
					"onUpdate:isOpen": handleIsOpenUpdate
				}), null, 16, [
					"filter-selected",
					"layout-mode",
					"ownership-selected",
					"base-model-selected",
					"selected",
					"items",
					"display-items",
					"placeholder",
					"uploadable",
					"accept",
					"filter-options",
					"show-ownership-filter",
					"ownership-options",
					"show-base-model-filter",
					"base-model-options",
					"onUpdate:selected",
					"onUpdate:files"
				])]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetSelect.vue
var WidgetSelect_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetSelect",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		nodeType: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const comboSpec = computed(() => {
			if (props.widget.spec && isComboInputSpec(props.widget.spec)) return props.widget.spec;
		});
		const specDescriptor = computed(() => {
			const spec = comboSpec.value;
			if (!spec) return {
				kind: "unknown",
				allowUpload: false,
				folder: void 0,
				subfolder: void 0
			};
			const { image_upload, animated_image_upload, video_upload, image_folder, audio_upload, mesh_upload, upload_subfolder } = spec;
			let kind = "unknown";
			if (video_upload) kind = "video";
			else if (image_upload || animated_image_upload) kind = "image";
			else if (audio_upload) kind = "audio";
			else if (mesh_upload) kind = "mesh";
			return {
				kind,
				allowUpload: image_upload === true || animated_image_upload === true || video_upload === true || audio_upload === true || mesh_upload === true,
				folder: mesh_upload ? "input" : image_folder,
				subfolder: upload_subfolder
			};
		});
		const isAssetMode = computed(() => assetService.shouldUseAssetBrowser(props.nodeType, props.widget.name) || assetService.isAssetAPIEnabled() && props.widget.type === "asset");
		const assetKind = computed(() => specDescriptor.value.kind);
		const isDropdownUIWidget = computed(() => isAssetMode.value || assetKind.value !== "unknown");
		const allowUpload = computed(() => specDescriptor.value.allowUpload);
		const uploadFolder = computed(() => {
			return specDescriptor.value.folder ?? "input";
		});
		const uploadSubfolder = computed(() => specDescriptor.value.subfolder);
		const defaultLayoutMode = computed(() => {
			return isAssetMode.value ? "list" : "grid";
		});
		return (_ctx, _cache) => {
			return isDropdownUIWidget.value ? (openBlock(), createBlock(WidgetSelectDropdown_default, {
				key: 0,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				widget: __props.widget,
				"node-type": __props.widget.nodeType ?? __props.nodeType,
				"asset-kind": assetKind.value,
				"allow-upload": allowUpload.value,
				"upload-folder": uploadFolder.value,
				"upload-subfolder": uploadSubfolder.value,
				"is-asset-mode": isAssetMode.value,
				"default-layout-mode": defaultLayoutMode.value
			}, null, 8, [
				"modelValue",
				"widget",
				"node-type",
				"asset-kind",
				"allow-upload",
				"upload-folder",
				"upload-subfolder",
				"is-asset-mode",
				"default-layout-mode"
			])) : __props.widget.controlWidget ? (openBlock(), createBlock(WidgetWithControl_default, {
				key: 1,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				component: WidgetSelectDefault_default,
				widget: __props.widget
			}, null, 8, ["modelValue", "widget"])) : (openBlock(), createBlock(WidgetSelectDefault_default, {
				key: 2,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => modelValue.value = $event),
				widget: __props.widget
			}, null, 8, ["modelValue", "widget"]));
		};
	}
});
//#endregion
export { WidgetSelect_default as default };

//# sourceMappingURL=WidgetSelect-Be0weOda.js.map
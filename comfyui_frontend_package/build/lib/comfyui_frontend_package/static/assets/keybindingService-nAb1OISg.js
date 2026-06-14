import "./rolldown-runtime-w0pxe0c8.js";
import { A as computed, Bt as unref, Gt as toDisplayString, Ht as normalizeClass, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, Rt as toValue, T as Fragment, V as defineComponent, Y as mergeProps, at as renderList, bt as withCtx, j as createBaseVNode, ot as renderSlot, rt as openBlock, st as resolveComponent, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { _a as useSettingStore, da as useCommandStore, fa as useKeybindingStore, ma as KeyComboImpl, pa as KeybindingImpl } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { B as DropdownMenuPortal_default, F as DropdownMenuSubContent_default, H as DropdownMenuItem_default, I as DropdownMenuSub_default, K as DropdownMenuArrow_default, L as DropdownMenuSeparator_default, N as DropdownMenuTrigger_default, P as DropdownMenuSubTrigger_default, U as DropdownMenuContent_default, W as DropdownMenuRoot_default } from "./vendor-reka-ui-DQClbqQd.js";
import { t as cn } from "./src-nrRWoNk5.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as useDialogStore } from "./dialogStore-NFHibcWZ.js";
//#region src/components/common/DropdownItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var _hoisted_2 = {
	key: 0,
	class: "icon-[lucide--check] shrink-0"
};
var _hoisted_3 = ["textContent"];
//#endregion
//#region src/components/common/DropdownItem.vue
var DropdownItem_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownItem",
	props: {
		itemClass: {},
		contentClass: {},
		item: {}
	},
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			const _component_DropdownItem = resolveComponent("DropdownItem", true);
			return __props.item.separator ? (openBlock(), createBlock(unref(DropdownMenuSeparator_default), {
				key: 0,
				class: "m-1 h-px bg-border-subtle"
			})) : __props.item.items ? (openBlock(), createBlock(unref(DropdownMenuSub_default), { key: 1 }, {
				default: withCtx(() => [createVNode(unref(DropdownMenuSubTrigger_default), {
					class: normalizeClass(__props.itemClass),
					disabled: toValue(__props.item.disabled) ?? !__props.item.items?.length
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.label) + " ", 1), _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ml-auto icon-[lucide--chevron-right]" }, null, -1))]),
					_: 1
				}, 8, ["class", "disabled"]), createVNode(unref(DropdownMenuPortal_default), null, {
					default: withCtx(() => [createVNode(unref(DropdownMenuSubContent_default), {
						class: normalizeClass(__props.contentClass),
						"side-offset": 2,
						"align-offset": -5
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.items, (subitem, index) => {
							return openBlock(), createBlock(_component_DropdownItem, {
								key: toValue(subitem.label) ?? index,
								item: subitem,
								"item-class": __props.itemClass,
								"content-class": __props.contentClass
							}, null, 8, [
								"item",
								"item-class",
								"content-class"
							]);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			})) : (openBlock(), createBlock(unref(DropdownMenuItem_default), {
				key: 2,
				class: normalizeClass(__props.itemClass),
				disabled: toValue(__props.item.disabled) ?? !__props.item.command,
				onSelect: _cache[0] || (_cache[0] = ($event) => __props.item.command?.({
					originalEvent: $event,
					item: __props.item
				}))
			}, {
				default: withCtx(() => [
					createBaseVNode("i", { class: normalizeClass(["size-5 shrink-0", __props.item.icon]) }, null, 2),
					createBaseVNode("div", {
						class: "mr-auto truncate",
						textContent: toDisplayString(__props.item.label)
					}, null, 8, _hoisted_1),
					__props.item.checked ? (openBlock(), createElementBlock("i", _hoisted_2)) : __props.item.new ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: "flex shrink-0 items-center rounded-full bg-primary-background px-1 text-2xs leading-none font-bold",
						textContent: toDisplayString(unref(t)("contextMenu.new"))
					}, null, 8, _hoisted_3)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class", "disabled"]));
		};
	}
});
//#endregion
//#region src/components/common/DropdownMenu.vue
var DropdownMenu_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownMenu",
	props: {
		entries: {},
		icon: {},
		to: {},
		itemClass: {},
		contentClass: {},
		buttonSize: {},
		buttonClass: {}
	},
	setup(__props) {
		const itemClass = computed(() => cn("m-1 flex cursor-pointer items-center-safe gap-1 rounded-lg p-2 leading-none data-disabled:pointer-events-none data-disabled:text-muted-foreground data-highlighted:bg-secondary-background-hover", __props.itemClass));
		const contentClass = computed(() => cn("data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-1700 min-w-[220px] rounded-lg border border-border-subtle bg-base-background p-2 shadow-sm will-change-[opacity,transform]", __props.contentClass));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenuRoot_default), null, {
				default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "button", {}, () => [createVNode(Button_default, {
						size: __props.buttonSize ?? "icon",
						class: normalizeClass(__props.buttonClass)
					}, {
						default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(__props.icon ?? "icon-[lucide--menu]") }, null, 2)]),
						_: 1
					}, 8, ["size", "class"])])]),
					_: 3
				}), createVNode(unref(DropdownMenuPortal_default), { to: __props.to }, {
					default: withCtx(() => [createVNode(unref(DropdownMenuContent_default), mergeProps({
						side: "bottom",
						"side-offset": 5,
						"collision-padding": 10
					}, _ctx.$attrs, { class: contentClass.value }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { itemClass: itemClass.value }, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.entries ?? [], (item, index) => {
							return openBlock(), createBlock(DropdownItem_default, {
								key: toValue(item.label) ?? index,
								"item-class": itemClass.value,
								"content-class": contentClass.value,
								item
							}, null, 8, [
								"item-class",
								"content-class",
								"item"
							]);
						}), 128))]), createVNode(unref(DropdownMenuArrow_default), { class: "fill-base-background stroke-border-subtle" })]),
						_: 3
					}, 16, ["class"])]),
					_: 3
				}, 8, ["to"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region src/platform/keybindings/defaults.ts
var CORE_KEYBINDINGS = [
	{
		combo: {
			ctrl: true,
			key: "Enter"
		},
		commandId: "Comfy.QueuePrompt"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "Enter"
		},
		commandId: "Comfy.QueuePromptFront"
	},
	{
		combo: {
			ctrl: true,
			alt: true,
			key: "Enter"
		},
		commandId: "Comfy.Interrupt"
	},
	{
		combo: { key: "r" },
		commandId: "Comfy.RefreshNodeDefinitions"
	},
	{
		combo: { key: "w" },
		commandId: "Workspace.ToggleSidebarTab.workflows"
	},
	{
		combo: { key: "n" },
		commandId: "Workspace.ToggleSidebarTab.node-library"
	},
	{
		combo: { key: "m" },
		commandId: "Workspace.ToggleSidebarTab.model-library"
	},
	{
		combo: { key: "a" },
		commandId: "Workspace.ToggleSidebarTab.assets"
	},
	{
		combo: {
			alt: true,
			key: "m"
		},
		commandId: "Comfy.ToggleLinear"
	},
	{
		combo: {
			alt: true,
			key: "µ"
		},
		commandId: "Comfy.ToggleLinear"
	},
	{
		combo: {
			key: "s",
			ctrl: true
		},
		commandId: "Comfy.SaveWorkflow"
	},
	{
		combo: {
			key: "o",
			ctrl: true
		},
		commandId: "Comfy.OpenWorkflow"
	},
	{
		combo: {
			key: "g",
			ctrl: true
		},
		commandId: "Comfy.Graph.GroupSelectedNodes"
	},
	{
		combo: {
			key: ",",
			ctrl: true
		},
		commandId: "Comfy.ShowSettingsDialog"
	},
	{
		combo: {
			key: "=",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "+",
			alt: true,
			shift: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "+",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomIn",
		targetElementId: "graph-canvas"
	},
	{
		combo: {
			key: "-",
			alt: true
		},
		commandId: "Comfy.Canvas.ZoomOut",
		targetElementId: "graph-canvas"
	},
	{
		combo: { key: "." },
		commandId: "Comfy.Canvas.FitView",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "p" },
		commandId: "Comfy.Canvas.ToggleSelected.Pin",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "c",
			alt: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "b",
			ctrl: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "m",
			ctrl: true
		},
		commandId: "Comfy.Canvas.ToggleSelectedNodes.Mute",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			key: "`",
			ctrl: true
		},
		commandId: "Workspace.ToggleBottomPanelTab.logs-terminal"
	},
	{
		combo: {
			key: "e",
			ctrl: true,
			shift: true
		},
		commandId: "Comfy.Graph.ConvertToSubgraph"
	},
	{
		combo: {
			key: "m",
			alt: true,
			shift: true
		},
		commandId: "Comfy.Canvas.ToggleMinimap"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "k"
		},
		commandId: "Workspace.ToggleBottomPanel.Shortcuts"
	},
	{
		combo: { key: "v" },
		commandId: "Comfy.Canvas.Unlock"
	},
	{
		combo: { key: "h" },
		commandId: "Comfy.Canvas.Lock"
	},
	{
		combo: { key: "Escape" },
		commandId: "Comfy.Graph.ExitSubgraph"
	},
	{
		combo: {
			ctrl: true,
			key: "a"
		},
		commandId: "Comfy.Canvas.SelectAll",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: {
			ctrl: true,
			shift: true,
			key: "v"
		},
		commandId: "Comfy.Canvas.PasteFromClipboardWithConnect",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "Delete" },
		commandId: "Comfy.Canvas.DeleteSelectedItems",
		targetElementId: "graph-canvas-container"
	},
	{
		combo: { key: "Backspace" },
		commandId: "Comfy.Canvas.DeleteSelectedItems",
		targetElementId: "graph-canvas-container"
	}
];
//#endregion
//#region src/platform/keybindings/keybindingService.ts
function useKeybindingService() {
	const keybindingStore = useKeybindingStore();
	const commandStore = useCommandStore();
	const settingStore = useSettingStore();
	const dialogStore = useDialogStore();
	async function keybindHandler(event) {
		const keyCombo = KeyComboImpl.fromEvent(event);
		if (keyCombo.isModifier) return;
		const target = event.composedPath()[0];
		if (keyCombo.isReservedByTextInput && (target.tagName === "TEXTAREA" || target.tagName === "INPUT" || target.contentEditable === "true" || target.tagName === "SPAN" && target.classList.contains("property_value"))) return;
		const keybinding = keybindingStore.getKeybinding(keyCombo);
		if (keybinding) {
			const targetElementId = keybinding.targetElementId === "graph-canvas" ? "graph-canvas-container" : keybinding.targetElementId;
			if (targetElementId) {
				if (!document.getElementById(targetElementId)?.contains(target)) return;
			}
			if (event.key === "Escape" && !event.ctrlKey && !event.altKey && !event.metaKey) {
				if (dialogStore.dialogStack.length > 0) return;
			}
			event.preventDefault();
			if (new Set([
				"Comfy.QueuePrompt",
				"Comfy.QueuePromptFront",
				"Comfy.QueueSelectedOutputNodes"
			]).has(keybinding.commandId)) await commandStore.execute(keybinding.commandId, { metadata: { trigger_source: "keybinding" } });
			else await commandStore.execute(keybinding.commandId);
			return;
		}
		if (event.ctrlKey || event.altKey || event.metaKey) return;
		if (event.key === "Escape") {
			const modals = document.querySelectorAll(".comfy-modal");
			for (const modal of modals) if (window.getComputedStyle(modal).getPropertyValue("display") !== "none") {
				modal.style.display = "none";
				break;
			}
			for (const d of document.querySelectorAll("dialog")) d.close();
		}
	}
	function registerCoreKeybindings() {
		for (const keybinding of CORE_KEYBINDINGS) {
			if (isCloud && keybinding.commandId === "Workspace.ToggleBottomPanelTab.logs-terminal") continue;
			keybindingStore.addDefaultKeybinding(new KeybindingImpl(keybinding));
		}
	}
	function registerUserKeybindings() {
		const unsetBindings = settingStore.get("Comfy.Keybinding.UnsetBindings");
		for (const keybinding of unsetBindings) keybindingStore.unsetKeybinding(new KeybindingImpl(keybinding));
		const newBindings = settingStore.get("Comfy.Keybinding.NewBindings");
		for (const keybinding of newBindings) {
			if (isCloud && keybinding.commandId === "Workspace.ToggleBottomPanelTab.logs-terminal") continue;
			keybindingStore.addUserKeybinding(new KeybindingImpl(keybinding));
		}
	}
	async function persistUserKeybindings() {
		await settingStore.setMany({
			"Comfy.Keybinding.NewBindings": Object.values(keybindingStore.getUserKeybindings()),
			"Comfy.Keybinding.UnsetBindings": Object.values(keybindingStore.getUserUnsetKeybindings())
		});
	}
	return {
		keybindHandler,
		registerCoreKeybindings,
		registerUserKeybindings,
		persistUserKeybindings
	};
}
//#endregion
export { DropdownMenu_default as n, useKeybindingService as t };

//# sourceMappingURL=keybindingService-nAb1OISg.js.map
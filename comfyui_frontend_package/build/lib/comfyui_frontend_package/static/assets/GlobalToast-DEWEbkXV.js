import "./rolldown-runtime-w0pxe0c8.js";
import { it as useToast, o as script } from "./vendor-primevue-DUHRgx0Y.js";
import { Bt as unref, Gt as toDisplayString, P as createElementBlock, T as Fragment, V as defineComponent, X as nextTick, bt as withCtx, gt as watch, j as createBaseVNode, rt as openBlock, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { _a as useSettingStore } from "./promotionUtils-RbTs6TVG.js";
import { t as useToastStore } from "./toastStore-DLjER1Ce.js";
//#region src/components/toast/GlobalToast.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex items-center gap-2" };
//#endregion
//#region src/components/toast/GlobalToast.vue
var GlobalToast_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalToast",
	setup(__props) {
		const toast = useToast();
		const toastStore = useToastStore();
		const settingStore = useSettingStore();
		watch(() => toastStore.messagesToAdd, (newMessages) => {
			if (newMessages.length === 0) return;
			newMessages.forEach((message) => {
				toast.add(message);
			});
			toastStore.messagesToAdd = [];
		}, { deep: true });
		watch(() => toastStore.messagesToRemove, (messagesToRemove) => {
			if (messagesToRemove.length === 0) return;
			messagesToRemove.forEach((message) => {
				toast.remove(message);
			});
			toastStore.messagesToRemove = [];
		}, { deep: true });
		watch(() => toastStore.removeAllRequested, (requested) => {
			if (requested) {
				toast.removeAllGroups();
				toastStore.removeAllRequested = false;
			}
		});
		function updateToastPosition() {
			const styleElement = document.getElementById("dynamic-toast-style") || createStyleElement();
			const rect = document.querySelector(".graph-canvas-container")?.getBoundingClientRect();
			if (!rect) return;
			styleElement.textContent = `
    .p-toast.p-component.p-toast-top-right {
      top: ${rect.top + 100}px !important;
      right: ${window.innerWidth - (rect.left + rect.width) + 20}px !important;
       z-index: 10000 !important;
    }
  `;
		}
		function createStyleElement() {
			const style = document.createElement("style");
			style.id = "dynamic-toast-style";
			document.head.appendChild(style);
			return style;
		}
		watch(() => settingStore.get("Comfy.UseNewMenu"), () => nextTick(updateToastPosition), { immediate: true });
		watch(() => settingStore.get("Comfy.Sidebar.Location"), () => nextTick(updateToastPosition), { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(script)), createVNode(unref(script), {
				group: "billing-operation",
				position: "top-right"
			}, {
				message: withCtx((slotProps) => [createBaseVNode("div", _hoisted_1, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-spin pi-spinner text-primary" }, null, -1)), createBaseVNode("span", null, toDisplayString(slotProps.message.summary), 1)])]),
				_: 1
			})], 64);
		};
	}
});
//#endregion
export { GlobalToast_default as t };

//# sourceMappingURL=GlobalToast-DEWEbkXV.js.map
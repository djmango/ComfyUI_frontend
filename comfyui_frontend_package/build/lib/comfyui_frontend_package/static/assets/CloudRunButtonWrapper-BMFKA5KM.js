import "./rolldown-runtime-w0pxe0c8.js";
import { A as computed, Bt as unref, M as createBlock, V as defineComponent, lt as resolveDynamicComponent, rt as openBlock } from "./vendor-vue-core-lEb6pQ7x.js";
import { Vi as useBillingContext } from "./promotionUtils-RbTs6TVG.js";
import { t as ComfyQueueButton_default } from "./ComfyQueueButton-Dg2QNFJG.js";
import { t as SubscribeToRun_default } from "./SubscribeToRun-DfLgi_Vb.js";
//#endregion
//#region src/components/actionbar/ComfyRunButton/CloudRunButtonWrapper.vue
var CloudRunButtonWrapper_default = /* @__PURE__ */ defineComponent({
	__name: "CloudRunButtonWrapper",
	setup(__props) {
		const { isActiveSubscription } = useBillingContext();
		const currentButton = computed(() => isActiveSubscription.value ? ComfyQueueButton_default : SubscribeToRun_default);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(currentButton.value), { key: unref(isActiveSubscription) ? "queue" : "subscribe" });
		};
	}
});
//#endregion
export { CloudRunButtonWrapper_default as default };

//# sourceMappingURL=CloudRunButtonWrapper-BMFKA5KM.js.map
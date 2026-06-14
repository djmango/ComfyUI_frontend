import "./rolldown-runtime-w0pxe0c8.js";
import { Bt as unref, Gt as toDisplayString, Ht as normalizeClass, M as createBlock, Q as onBeforeUnmount, R as createTextVNode, V as defineComponent, bt as withCtx, gt as watch, jt as ref, rt as openBlock } from "./vendor-vue-core-lEb6pQ7x.js";
import { Ui as useSubscription, Vi as useBillingContext } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { t as useTelemetry } from "./telemetry-egVpDhez.js";
import { t as cn } from "./src-nrRWoNk5.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeButton.vue
var SubscribeButton_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeButton",
	props: {
		label: {},
		size: { default: "lg" },
		buttonVariant: { default: "default" },
		fluid: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["subscribed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { isActiveSubscription, showSubscriptionDialog } = useBillingContext();
		const { subscriptionTier } = useSubscription();
		const isAwaitingStripeSubscription = ref(false);
		watch([isAwaitingStripeSubscription, isActiveSubscription], ([awaiting, isActive]) => {
			if (isCloud && awaiting && isActive) {
				emit("subscribed");
				isAwaitingStripeSubscription.value = false;
			}
		});
		const handleSubscribe = () => {
			if (isCloud) useTelemetry()?.trackSubscription("subscribe_clicked", { current_tier: subscriptionTier.value?.toLowerCase() });
			isAwaitingStripeSubscription.value = true;
			showSubscriptionDialog();
		};
		onBeforeUnmount(() => {
			isAwaitingStripeSubscription.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				size: __props.size,
				disabled: __props.disabled,
				variant: __props.buttonVariant === "gradient" ? "gradient" : "primary",
				class: normalizeClass(unref(cn)("font-bold", __props.fluid && "w-full")),
				onClick: handleSubscribe
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label || _ctx.$t("subscription.required.subscribe")), 1)]),
				_: 1
			}, 8, [
				"size",
				"disabled",
				"variant",
				"class"
			]);
		};
	}
});
//#endregion
export { SubscribeButton_default as t };

//# sourceMappingURL=SubscribeButton-CAwgBtpx.js.map
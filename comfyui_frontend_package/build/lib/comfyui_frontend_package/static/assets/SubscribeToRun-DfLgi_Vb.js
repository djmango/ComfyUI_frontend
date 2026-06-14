import "./rolldown-runtime-w0pxe0c8.js";
import { A as computed, Gt as toDisplayString, M as createBlock, R as createTextVNode, V as defineComponent, bt as withCtx, ct as resolveDirective, j as createBaseVNode, rt as openBlock, xt as withDirectives } from "./vendor-vue-core-lEb6pQ7x.js";
import { Vi as useBillingContext } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { d as useBreakpoints, i as breakpointsTailwind } from "./vendor-vueuse-B9Hj6YrL.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { t as useTelemetry } from "./telemetry-egVpDhez.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeToRun.vue
var SubscribeToRun_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeToRun",
	setup(__props) {
		const { t } = useI18n();
		const isMdOrLarger = useBreakpoints(breakpointsTailwind).greaterOrEqual("md");
		const buttonLabel = computed(() => isMdOrLarger.value ? t("subscription.subscribeToRunFull") : t("subscription.subscribeToRun"));
		const { showSubscriptionDialog } = useBillingContext();
		const handleSubscribeToRun = () => {
			if (isCloud) useTelemetry()?.trackRunButton({ subscribe_to_run: true });
			showSubscriptionDialog();
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				class: "subscribe-to-run-button whitespace-nowrap",
				variant: "gradient",
				size: "sm",
				"data-testid": "subscribe-to-run-button",
				onClick: handleSubscribeToRun
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-lock" }, null, -1)), createTextVNode(" " + toDisplayString(buttonLabel.value), 1)]),
				_: 1
			})), [[
				_directive_tooltip,
				{
					value: _ctx.$t("subscription.subscribeToRunFull"),
					showDelay: 600
				},
				void 0,
				{ bottom: true }
			]]);
		};
	}
});
//#endregion
export { SubscribeToRun_default as t };

//# sourceMappingURL=SubscribeToRun-DfLgi_Vb.js.map
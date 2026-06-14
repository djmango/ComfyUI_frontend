const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ValueControlPopover-pqe0Vx00.js","./rolldown-runtime-w0pxe0c8.js","./vendor-primevue-DUHRgx0Y.js","./vendor-vue-core-lEb6pQ7x.js","./promotionUtils-RbTs6TVG.js","./_plugin-vue_export-helper-BKnUacfG.js","./vendor-other-DBdmkK1j.js","./vendor-firebase-C7k8AidI.js","./vendor-three-1JIRRquj.js","./vendor-tiptap-BOgG_8hl.js","./vendor-zod-cnyoNRiP.js","./vendor-reka-ui-DQClbqQd.js","./vendor-i18n-DqMDtj1Y.js","./vendor-sentry-CJqm_Nmo.js","./vendor-vueuse-B9Hj6YrL.js","./vendor-axios-DFahpQvv.js","./vendor-markdown-DaMlfZYH.js","./vendor-yjs-BiH7xZSO.js","./api-nNRZeCUN.js","./types-LUZjNlbK.js","./toastStore-DLjER1Ce.js","./formatUtil-DYCY4wm_.js","./src-nrRWoNk5.js","./downloadUtil-DQuLILFB.js","./i18n-CKSCRJIF.js","./commands-CNd8pb7g.js","./main-CpnoxeA3.js","./nodeDefs-Bl2vpgyY.js","./settings-SBB4ueng.js","./WaveAudioPlayer-DjtG6J05.js","./Button-B6t0hT7N.js","./Slider-Bbbvwjli.js","./DialogHeader-C-hI2Gvk.js","./dialogStore-NFHibcWZ.js","./Loader-BhTdgZW2.js","./Popover-Dr5f5HTY.js","./ColorPicker-BogdWVAu.js","./SelectValue-DA-RVt3I.js","./Input-0QCKBTLy.js","./extensionStore-DLGBp7MW.js","./useErrorHandling-DVmwK9Br.js","./useExternalLink-C1LT460D.js","./envUtil-DPYJeo7H.js","./useFeatureFlags-BjrlE-sm.js","./useImageQuiet-8o4A_oUF.js","./VideoPlayOverlay-CIUc_QTf.js","./useFeatureUsageTracker-CQLF2p3J.js","./telemetry-egVpDhez.js","./userStore-Cm9ERWXg.js","./widgetTypes-BmUFT8-p.js","./markdownRendererUtil-DtxY94tK.js","./vendor-other-DODGPXtn.css","./promotionUtils-CTR1rhL9.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-w0pxe0c8.js";
import { tt as __vitePreload } from "./vendor-primevue-DUHRgx0Y.js";
import { B as defineAsyncComponent, Bt as unref, Gt as toDisplayString, Ht as normalizeClass, J as mergeModels, M as createBlock, N as createCommentVNode, P as createElementBlock, V as defineComponent, Y as mergeProps, bt as withCtx, gt as watch, jt as ref, lt as resolveDynamicComponent, pt as useModel, rt as openBlock, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { t as Popover_default } from "./Popover-Dr5f5HTY.js";
import { t as cn } from "./src-nrRWoNk5.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = {
	key: 1,
	class: "text-xs font-normal text-primary-background"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue
var ValueControlButton_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlButton",
	props: {
		mode: {},
		variant: { default: "badge" }
	},
	setup(__props) {
		const { t } = useI18n();
		const iconMap = {
			fixed: "icon-[lucide--pencil-off]",
			randomize: "icon-[lucide--shuffle]",
			increment: null,
			decrement: null
		};
		const textMap = {
			increment: "+1",
			decrement: "-1",
			fixed: null,
			randomize: null
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				"data-testid": "value-control",
				type: "button",
				"aria-label": unref(t)("widgets.valueControl." + __props.mode),
				class: normalizeClass(unref(cn)("flex shrink-0 cursor-pointer items-center justify-center border-none focus-visible:ring-2 focus-visible:ring-primary-background focus-visible:ring-offset-1 focus-visible:outline-none", __props.variant === "badge" ? "h-4.5 w-8 rounded-full" : "size-6 rounded-sm", __props.mode !== "fixed" ? "bg-primary-background/30 hover:bg-primary-background-hover/30" : "bg-transparent"))
			}, [iconMap[__props.mode] ? (openBlock(), createElementBlock("i", {
				key: 0,
				"aria-hidden": "true",
				class: normalizeClass(unref(cn)(iconMap[__props.mode] ?? "", "text-xs", __props.mode === "fixed" ? "text-muted-foreground" : "text-primary-background"))
			}, null, 2)) : textMap[__props.mode] ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(textMap[__props.mode]), 1)) : createCommentVNode("", true)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative grid grid-cols-subgrid" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue
var WidgetWithControl_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetWithControl",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		component: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const ValueControlPopover = defineAsyncComponent(() => __vitePreload(() => import("./ValueControlPopover-pqe0Vx00.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]), import.meta.url));
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const controlModel = ref(props.widget.controlWidget.value);
		watch(controlModel, props.widget.controlWidget.update);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(__props.component), mergeProps(_ctx.$attrs, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				widget: __props.widget
			}), {
				default: withCtx(() => [createVNode(Popover_default, null, {
					button: withCtx(() => [createVNode(ValueControlButton_default, {
						mode: controlModel.value,
						class: "self-center"
					}, null, 8, ["mode"])]),
					default: withCtx(() => [createVNode(unref(ValueControlPopover), {
						modelValue: controlModel.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlModel.value = $event)
					}, null, 8, ["modelValue"])]),
					_: 1
				})]),
				_: 1
			}, 16, ["modelValue", "widget"]))]);
		};
	}
});
//#endregion
export { WidgetWithControl_default as t };

//# sourceMappingURL=WidgetWithControl-BFLxorUz.js.map
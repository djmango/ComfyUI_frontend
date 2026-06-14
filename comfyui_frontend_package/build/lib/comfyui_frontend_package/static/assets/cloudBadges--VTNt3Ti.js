import "./rolldown-runtime-w0pxe0c8.js";
import { A as computed, gt as watch } from "./vendor-vue-core-lEb6pQ7x.js";
import { Rn as useExtensionService, h as useCanvasStore } from "./promotionUtils-RbTs6TVG.js";
import { a as remoteConfig } from "./useFeatureFlags-BjrlE-sm.js";
import { c as t } from "./i18n-CKSCRJIF.js";
//#region src/extensions/core/cloudBadges.ts
var badges = computed(() => {
	const result = [];
	const alert = remoteConfig.value.server_health_alert;
	if (alert) result.push({
		text: alert.message,
		label: alert.badge,
		variant: alert.severity ?? "error",
		tooltip: alert.tooltip
	});
	return result;
});
var canvasStore = useCanvasStore();
watch(() => canvasStore.canvas, (canvas) => {
	if (canvas) canvas.info_text = t("g.comfyCloud");
}, { immediate: true });
useExtensionService().registerExtension({
	name: "Comfy.Cloud.Badges",
	get topbarBadges() {
		return badges.value;
	}
});
//#endregion

//# sourceMappingURL=cloudBadges--VTNt3Ti.js.map
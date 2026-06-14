import "./rolldown-runtime-w0pxe0c8.js";
import { Rn as useExtensionService, _a as useSettingStore } from "./promotionUtils-RbTs6TVG.js";
import { c as t } from "./i18n-CKSCRJIF.js";
import { t as buildFeedbackTypeformUrl } from "./config-D7rQudX6.js";
//#region src/extensions/core/cloudFeedbackTopbarButton.ts
var buttons = [{
	icon: "icon-[lucide--message-square-text]",
	label: t("actionbar.feedback"),
	tooltip: t("actionbar.feedbackTooltip"),
	onClick: () => {
		window.open(buildFeedbackTypeformUrl("action-bar"), "_blank", "noopener,noreferrer");
	}
}];
useExtensionService().registerExtension({
	name: "Comfy.FeedbackButton",
	get actionBarButtons() {
		return useSettingStore().get("Comfy.UI.TabBarLayout") === "Legacy" ? buttons : [];
	}
});
//#endregion

//# sourceMappingURL=cloudFeedbackTopbarButton-BQika64F.js.map
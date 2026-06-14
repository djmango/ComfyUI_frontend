import "./rolldown-runtime-w0pxe0c8.js";
import { gt as watch } from "./vendor-vue-core-lEb6pQ7x.js";
import { Gi as useCurrentUser, Rn as useExtensionService, Vi as useBillingContext } from "./promotionUtils-RbTs6TVG.js";
//#region src/extensions/core/cloudSubscription.ts
/**
* Cloud-only extension that enforces active subscription requirement
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.Subscription",
	setup: async () => {
		const { isLoggedIn } = useCurrentUser();
		const { requireActiveSubscription } = useBillingContext();
		const checkSubscriptionStatus = () => {
			if (!isLoggedIn.value) return;
			requireActiveSubscription();
		};
		watch(() => isLoggedIn.value, checkSubscriptionStatus, { immediate: true });
	}
});
//#endregion

//# sourceMappingURL=cloudSubscription-DLHuj55V.js.map
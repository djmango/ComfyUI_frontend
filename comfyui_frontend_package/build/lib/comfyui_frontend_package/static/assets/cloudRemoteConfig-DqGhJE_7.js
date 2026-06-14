import "./rolldown-runtime-w0pxe0c8.js";
import { Gi as useCurrentUser, Rn as useExtensionService, Vi as useBillingContext } from "./promotionUtils-RbTs6TVG.js";
import { at as watchDebounced } from "./vendor-vueuse-B9Hj6YrL.js";
import { t as refreshRemoteConfig } from "./refreshRemoteConfig-vHRXaeGq.js";
//#region src/extensions/core/cloudRemoteConfig.ts
/**
* Cloud-only extension that polls for remote config updates
* Initial config load happens in main.ts before any other imports
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.RemoteConfig",
	setup: async () => {
		const { isLoggedIn } = useCurrentUser();
		const { isActiveSubscription } = useBillingContext();
		watchDebounced([isLoggedIn, isActiveSubscription], () => {
			if (!isLoggedIn.value) return;
			refreshRemoteConfig();
		}, {
			debounce: 256,
			immediate: true
		});
		setInterval(() => void refreshRemoteConfig(), 6e5);
	}
});
//#endregion

//# sourceMappingURL=cloudRemoteConfig-DqGhJE_7.js.map
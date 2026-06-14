import "./rolldown-runtime-w0pxe0c8.js";
import { f as storeToRefs } from "./vendor-vue-core-lEb6pQ7x.js";
import { Ji as useAuthStore, Wi as recordPendingSubscriptionCheckoutAttempt, Xi as getComfyApiBaseUrl, qi as AuthStoreError } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { c as t } from "./i18n-CKSCRJIF.js";
import { t as useTelemetry } from "./telemetry-egVpDhez.js";
//#region src/platform/cloud/subscription/utils/subscriptionCheckoutUtil.ts
var getCheckoutTier = (tierKey, billingCycle) => billingCycle === "yearly" ? `${tierKey}-yearly` : tierKey;
var getCheckoutAttributionForCloud = async () => {
	return {};
};
/**
* Core subscription checkout logic shared between PricingTable and
* SubscriptionRedirectView. Handles:
* - Ensuring the user is authenticated
* - Calling the backend checkout endpoint
* - Normalizing error responses
* - Opening the checkout URL in a new tab when available
*
* Callers are responsible for:
* - Guarding on cloud-only behavior (isCloud)
* - Managing loading state
* - Wrapping with error handling (e.g. useErrorHandling)
*/
async function performSubscriptionCheckout(tierKey, currentBillingCycle, openInNewTab = true) {
	if (!isCloud) return;
	const authStore = useAuthStore();
	const { userId } = storeToRefs(authStore);
	const telemetry = useTelemetry();
	const authHeader = await authStore.getAuthHeader();
	if (!authHeader) throw new AuthStoreError(t("toastMessages.userNotAuthenticated"));
	const checkoutTier = getCheckoutTier(tierKey, currentBillingCycle);
	let checkoutAttribution = {};
	try {
		checkoutAttribution = await getCheckoutAttributionForCloud();
	} catch (error) {
		console.warn("[SubscriptionCheckout] Failed to collect checkout attribution", error);
	}
	const checkoutPayload = { ...checkoutAttribution };
	const response = await fetch(`${getComfyApiBaseUrl()}/customers/cloud-subscription-checkout/${checkoutTier}`, {
		method: "POST",
		headers: {
			...authHeader,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(checkoutPayload)
	});
	if (!response.ok) {
		let errorMessage = "Failed to initiate checkout";
		try {
			errorMessage = (await response.json()).message || errorMessage;
		} catch {
			try {
				errorMessage = await response.text() || `HTTP ${response.status} ${response.statusText}`;
			} catch {
				errorMessage = `HTTP ${response.status} ${response.statusText}`;
			}
		}
		throw new AuthStoreError(t("toastMessages.failedToInitiateSubscription", { error: errorMessage }));
	}
	const data = await response.json();
	if (data.checkout_url) {
		if (userId.value) telemetry?.trackBeginCheckout({
			user_id: userId.value,
			tier: tierKey,
			cycle: currentBillingCycle,
			checkout_type: "new",
			...checkoutAttribution
		});
		if (openInNewTab) {
			if (!window.open(data.checkout_url, "_blank")) return;
			recordPendingSubscriptionCheckoutAttempt({
				tier: tierKey,
				cycle: currentBillingCycle,
				checkout_type: "new"
			});
		} else {
			recordPendingSubscriptionCheckoutAttempt({
				tier: tierKey,
				cycle: currentBillingCycle,
				checkout_type: "new"
			});
			globalThis.location.href = data.checkout_url;
		}
	}
}
//#endregion
export { performSubscriptionCheckout as t };

//# sourceMappingURL=subscriptionCheckoutUtil-DT_u3x3E.js.map
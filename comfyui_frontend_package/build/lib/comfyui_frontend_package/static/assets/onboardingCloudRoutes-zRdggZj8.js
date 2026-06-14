const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./useSessionCookie-CsscnSWY.js","./useSessionCookie-xkxfJ1nJ.js","./rolldown-runtime-w0pxe0c8.js","./promotionUtils-RbTs6TVG.js","./_plugin-vue_export-helper-BKnUacfG.js","./vendor-primevue-DUHRgx0Y.js","./vendor-vue-core-lEb6pQ7x.js","./vendor-other-DBdmkK1j.js","./vendor-firebase-C7k8AidI.js","./vendor-three-1JIRRquj.js","./vendor-tiptap-BOgG_8hl.js","./vendor-zod-cnyoNRiP.js","./vendor-reka-ui-DQClbqQd.js","./vendor-i18n-DqMDtj1Y.js","./vendor-sentry-CJqm_Nmo.js","./vendor-vueuse-B9Hj6YrL.js","./vendor-axios-DFahpQvv.js","./vendor-markdown-DaMlfZYH.js","./vendor-yjs-BiH7xZSO.js","./api-nNRZeCUN.js","./types-LUZjNlbK.js","./toastStore-DLjER1Ce.js","./formatUtil-DYCY4wm_.js","./src-nrRWoNk5.js","./downloadUtil-DQuLILFB.js","./i18n-CKSCRJIF.js","./commands-CNd8pb7g.js","./main-CpnoxeA3.js","./nodeDefs-Bl2vpgyY.js","./settings-SBB4ueng.js","./WaveAudioPlayer-DjtG6J05.js","./Button-B6t0hT7N.js","./Slider-Bbbvwjli.js","./DialogHeader-C-hI2Gvk.js","./dialogStore-NFHibcWZ.js","./Loader-BhTdgZW2.js","./Popover-Dr5f5HTY.js","./ColorPicker-BogdWVAu.js","./SelectValue-DA-RVt3I.js","./Input-0QCKBTLy.js","./extensionStore-DLGBp7MW.js","./useErrorHandling-DVmwK9Br.js","./useExternalLink-C1LT460D.js","./envUtil-DPYJeo7H.js","./useFeatureFlags-BjrlE-sm.js","./useImageQuiet-8o4A_oUF.js","./VideoPlayOverlay-CIUc_QTf.js","./useFeatureUsageTracker-CQLF2p3J.js","./telemetry-egVpDhez.js","./userStore-Cm9ERWXg.js","./widgetTypes-BmUFT8-p.js","./markdownRendererUtil-DtxY94tK.js","./vendor-other-DODGPXtn.css","./promotionUtils-CTR1rhL9.css","./CloudLayoutView-BNbVTCmM.js","./GlobalToast-DEWEbkXV.js","./CloudLayoutView-DROL9oAr.css","./CloudLoginView-WHdLVnIH.js","./webviewDetection-jr5llWdv.js","./usePostAuthRedirect-qpgoKgHs.js","./oauthState-BCY4VkxE.js","./signInSchema-icyFWeFz.js","./CloudLoginView-Ce8BuGOl.css","./useCurrentUser-BHpbC3bF.js","./CloudSignupView-DXqdU1uq.js","./SignUpForm-wAIiz8dO.js","./PasswordFields-BAPbMymp.js","./CloudSignupView-DQ3xbimS.css","./CloudForgotPasswordView-DgpZdVXv.js","./CloudForgotPasswordView-qHVhh4y3.css","./CloudSurveyView-CFJhQ-al.js","./auth-DeQZht7v.js","./errorUtil-CeVwjeWE.js","./OAuthConsentView-dMPJFLU6.js","./WorkspaceProfilePic-DNYUdXQc.js","./UserCheckView-COP3vSLg.js","./CloudSorryContactSupportView-CDFAd93U.js","./CloudSorryContactSupportView-Cg1Fm-bz.css","./CloudAuthTimeoutView-08k4eRTT.js","./CloudSubscriptionRedirectView-BhKOaghl.js","./comfy-logo-single-onb3MTt4.js","./subscriptionCheckoutUtil-DT_u3x3E.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-w0pxe0c8.js";
import { tt as __vitePreload } from "./vendor-primevue-DUHRgx0Y.js";
import { r as getOAuthRequestId } from "./oauthState-BCY4VkxE.js";
//#region src/platform/cloud/onboarding/onboardingCloudRoutes.ts
async function oauthConsentRedirect() {
	const oauthRequestId = getOAuthRequestId();
	if (!oauthRequestId) return { name: "cloud-user-check" };
	try {
		const { useSessionCookie } = await __vitePreload(async () => {
			const { useSessionCookie } = await import("./useSessionCookie-CsscnSWY.js");
			return { useSessionCookie };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]), import.meta.url);
		await useSessionCookie().createSessionOrThrow();
	} catch (error) {
		console.warn("Failed to establish Cloud session cookie before OAuth consent:", error);
	}
	return {
		name: "cloud-oauth-consent",
		query: { oauth_request_id: oauthRequestId }
	};
}
var cloudOnboardingRoutes = [{
	path: "/cloud",
	component: () => __vitePreload(() => import("./CloudLayoutView-BNbVTCmM.js"), __vite__mapDeps([54,2,13,6,55,5,3,4,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,56]), import.meta.url),
	children: [
		{
			path: "login",
			name: "cloud-login",
			component: () => __vitePreload(() => import("./CloudLoginView-WHdLVnIH.js"), __vite__mapDeps([57,4,2,5,6,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,58,59,1,60,61,52,53,62]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-BHpbC3bF.js");
						return { useCurrentUser };
					}, __vite__mapDeps([63,3,4,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next(await oauthConsentRedirect());
				}
				next();
			}
		},
		{
			path: "signup",
			name: "cloud-signup",
			component: () => __vitePreload(() => import("./CloudSignupView-DXqdU1uq.js"), __vite__mapDeps([64,4,2,5,6,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,58,65,66,61,59,1,60,52,53,67]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-BHpbC3bF.js");
						return { useCurrentUser };
					}, __vite__mapDeps([63,3,4,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next(await oauthConsentRedirect());
				}
				next();
			}
		},
		{
			path: "forgot-password",
			name: "cloud-forgot-password",
			component: () => __vitePreload(() => import("./CloudForgotPasswordView-DgpZdVXv.js"), __vite__mapDeps([68,4,2,5,6,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,69]), import.meta.url)
		},
		{
			path: "survey",
			name: "cloud-survey",
			component: () => __vitePreload(() => import("./CloudSurveyView-CFJhQ-al.js"), __vite__mapDeps([70,2,5,6,7,8,9,10,11,13,23,31,12,39,44,15,19,16,20,21,71,14,72,48,52]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "oauth/consent",
			name: "cloud-oauth-consent",
			component: () => __vitePreload(() => import("./OAuthConsentView-dMPJFLU6.js"), __vite__mapDeps([73,2,12,6,13,23,7,8,9,10,11,31,60,74,52]), import.meta.url)
		},
		{
			path: "user-check",
			name: "cloud-user-check",
			component: () => __vitePreload(() => import("./UserCheckView-COP3vSLg.js"), __vite__mapDeps([75,2,5,6,15,31,7,8,9,10,11,12,23,41,25,13,26,27,28,29,21,44,19,16,20,71,14,72,52]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "sorry-contact-support",
			name: "cloud-sorry-contact-support",
			component: () => __vitePreload(() => import("./CloudSorryContactSupportView-CDFAd93U.js"), __vite__mapDeps([76,4,2,13,6,77]), import.meta.url)
		},
		{
			path: "auth-timeout",
			name: "cloud-auth-timeout",
			component: () => __vitePreload(() => import("./CloudAuthTimeoutView-08k4eRTT.js"), __vite__mapDeps([78,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]), import.meta.url),
			props: true
		},
		{
			path: "subscribe",
			name: "cloud-subscribe",
			component: () => __vitePreload(() => import("./CloudSubscriptionRedirectView-BhKOaghl.js"), __vite__mapDeps([79,2,5,6,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,80,81,52,53]), import.meta.url),
			meta: { requiresAuth: true }
		}
	]
}];
//#endregion
export { cloudOnboardingRoutes };

//# sourceMappingURL=onboardingCloudRoutes-zRdggZj8.js.map
import "./rolldown-runtime-w0pxe0c8.js";
import { D as script } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, Gt as toDisplayString, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, T as Fragment, V as defineComponent, bt as withCtx, c as useRouter, et as onMounted, j as createBaseVNode, jt as ref, rt as openBlock, s as useRoute, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { $ as useAuthActions, X as isInChina, oa as getTierCredits } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { a as remoteConfig } from "./useFeatureFlags-BjrlE-sm.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { t as useTelemetry } from "./telemetry-egVpDhez.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BKnUacfG.js";
import { t as getGoogleSsoBlockedReason } from "./webviewDetection-jr5llWdv.js";
import { t as SignUpForm_default } from "./SignUpForm-wAIiz8dO.js";
import { t as usePostAuthRedirect } from "./usePostAuthRedirect-qpgoKgHs.js";
//#region src/platform/cloud/onboarding/composables/useFreeTierOnboarding.ts
function useFreeTierOnboarding() {
	const showEmailForm = ref(false);
	const freeTierCredits = computed(() => getTierCredits("free"));
	const isFreeTierEnabled = computed(() => remoteConfig.value.new_free_tier_subscriptions ?? false);
	function switchToEmailForm() {
		showEmailForm.value = true;
	}
	function switchToSocialLogin() {
		showEmailForm.value = false;
	}
	return {
		showEmailForm,
		freeTierCredits,
		isFreeTierEnabled,
		switchToEmailForm,
		switchToSocialLogin
	};
}
//#endregion
//#region src/platform/cloud/onboarding/CloudSignupView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-full items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:py-12" };
var _hoisted_2 = { class: "flex w-full max-w-md flex-col items-start" };
var _hoisted_3 = { class: "flex w-full flex-col gap-4" };
var _hoisted_4 = { class: "my-0 font-inter text-xl/8 font-extrabold tracking-wide text-primary-comfy-canvas sm:text-2xl/8" };
var _hoisted_5 = { class: "my-0 text-base/6 tracking-[-0.02em] text-primary-comfy-canvas" };
var _hoisted_6 = { class: "text-primary-comfy-canvas/70" };
var _hoisted_7 = { class: "flex w-full flex-col gap-4 pt-5 pb-2" };
var _hoisted_8 = { class: "mx-auto my-0 flex w-full max-w-10/12 flex-wrap items-center justify-center gap-x-1 py-4 text-center text-sm/5 tracking-[-0.011em] text-primary-comfy-canvas" };
var _hoisted_9 = {
	href: "https://www.comfy.org/terms-of-service",
	target: "_blank",
	class: "cursor-pointer text-azure-600 no-underline"
};
var _hoisted_10 = {
	href: "https://www.comfy.org/privacy-policy",
	target: "_blank",
	class: "cursor-pointer text-azure-600 no-underline"
};
var _hoisted_11 = { class: "mx-auto mt-2 mb-0 flex w-full max-w-10/12 flex-wrap items-center justify-center gap-x-1 text-center text-sm/5 tracking-[-0.011em] text-primary-comfy-canvas" };
var _hoisted_12 = {
	href: "https://support.comfy.org",
	class: "cursor-pointer text-azure-600 no-underline",
	target: "_blank",
	rel: "noopener noreferrer"
};
//#endregion
//#region src/platform/cloud/onboarding/CloudSignupView.vue
var CloudSignupView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CloudSignupView",
	setup(__props) {
		const { t } = useI18n();
		const router = useRouter();
		const route = useRoute();
		const authActions = useAuthActions();
		const isSecureContext = globalThis.isSecureContext;
		const authError = ref("");
		const userIsInChina = ref(false);
		const telemetry = useTelemetry();
		const { showEmailForm, isFreeTierEnabled, switchToEmailForm, switchToSocialLogin } = useFreeTierOnboarding();
		const googleSsoBlockedReason = getGoogleSsoBlockedReason();
		const { onAuthSuccess } = usePostAuthRedirect({
			authError,
			successSummary: "Sign up Completed",
			defaultRedirect: () => ({
				path: "/",
				query: route.query
			})
		});
		const navigateToLogin = async () => {
			await router.push({
				name: "cloud-login",
				query: route.query
			});
		};
		const signInWithGoogle = async () => {
			authError.value = "";
			if (await authActions.signInWithGoogle({ isNewUser: true })) await onAuthSuccess();
		};
		const signInWithGithub = async () => {
			authError.value = "";
			if (await authActions.signInWithGithub({ isNewUser: true })) await onAuthSuccess();
		};
		const signUpWithEmail = async (values) => {
			authError.value = "";
			if (await authActions.signUpWithEmail(values.email, values.password)) await onAuthSuccess();
		};
		onMounted(async () => {
			if (isCloud) telemetry?.trackSignupOpened();
			userIsInChina.value = await isInChina();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("h1", _hoisted_4, toDisplayString(unref(t)("auth.signup.title")), 1), createBaseVNode("p", _hoisted_5, [createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("auth.signup.alreadyHaveAccount")), 1), createBaseVNode("span", {
					class: "ml-1 cursor-pointer text-azure-600",
					onClick: navigateToLogin
				}, toDisplayString(unref(t)("auth.signup.signIn")), 1)])]),
				!unref(isSecureContext) ? (openBlock(), createBlock(unref(script), {
					key: 0,
					severity: "warn",
					class: "mt-4 w-full"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.login.insecureContextWarning")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_7, [!unref(showEmailForm) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					!unref(googleSsoBlockedReason) ? (openBlock(), createBlock(Button_default, {
						key: 0,
						type: "button",
						variant: "secondary",
						class: "relative h-10 w-full gap-4 rounded-md border border-solid border-smoke-800/10 bg-smoke-800/10 text-sm/4 font-medium text-primary-comfy-canvas shadow-inset-highlight hover:bg-sand-300/20",
						onClick: signInWithGoogle
					}, {
						default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-google text-base" }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("auth.signup.signUpWithGoogle")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(Button_default, {
						type: "button",
						variant: "secondary",
						class: "relative h-10 w-full gap-4 rounded-md border border-solid border-smoke-800/10 bg-smoke-800/10 font-inter text-sm/4 font-medium text-primary-comfy-canvas shadow-inset-highlight hover:bg-sand-300/20",
						onClick: signInWithGithub
					}, {
						default: withCtx(() => [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-github text-base" }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("auth.signup.signUpWithGithub")), 1)]),
						_: 1
					}),
					createVNode(Button_default, {
						variant: "link",
						class: "text-sm/4 text-primary-comfy-canvas/70 hover:text-primary-comfy-canvas",
						onClick: unref(switchToEmailForm)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.login.useEmailInstead")), 1)]),
						_: 1
					}, 8, ["onClick"])
				], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					unref(isFreeTierEnabled) ? (openBlock(), createBlock(unref(script), {
						key: 0,
						severity: "warn",
						class: "w-full"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.signup.emailNotEligibleForFreeTier")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					userIsInChina.value ? (openBlock(), createBlock(unref(script), {
						key: 1,
						severity: "warn",
						class: "w-full"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.signup.regionRestrictionChina")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(SignUpForm_default, {
						key: 2,
						"auth-error": authError.value,
						onSubmit: signUpWithEmail
					}, null, 8, ["auth-error"])),
					createVNode(Button_default, {
						variant: "secondary",
						class: "mt-1 h-10 w-full rounded-md border-none bg-smoke-800/5 text-sm/5 font-normal tracking-[-0.011em] text-primary-comfy-canvas/55 hover:bg-sand-300/10",
						onClick: unref(switchToSocialLogin)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(googleSsoBlockedReason) ? unref(t)("auth.login.backToGithubLogin") : unref(t)("auth.login.backToSocialLogin")), 1)]),
						_: 1
					}, 8, ["onClick"])
				], 64))]),
				createBaseVNode("p", _hoisted_8, [
					createTextVNode(toDisplayString(unref(t)("auth.login.termsText")) + " ", 1),
					createBaseVNode("a", _hoisted_9, toDisplayString(unref(t)("auth.login.termsLink")), 1),
					createTextVNode(" " + toDisplayString(unref(t)("auth.login.andText")) + " ", 1),
					createBaseVNode("a", _hoisted_10, toDisplayString(unref(t)("auth.login.privacyLink")), 1),
					_cache[2] || (_cache[2] = createTextVNode(". ", -1))
				]),
				createBaseVNode("p", _hoisted_11, [
					createTextVNode(toDisplayString(unref(t)("cloudWaitlist_questionsText")) + " ", 1),
					createBaseVNode("a", _hoisted_12, toDisplayString(unref(t)("cloudWaitlist_contactLink")), 1),
					_cache[3] || (_cache[3] = createTextVNode(". ", -1))
				])
			])]);
		};
	}
}), [["__scopeId", "data-v-8385b32a"]]);
//#endregion
export { CloudSignupView_default as default };

//# sourceMappingURL=CloudSignupView-DXqdU1uq.js.map
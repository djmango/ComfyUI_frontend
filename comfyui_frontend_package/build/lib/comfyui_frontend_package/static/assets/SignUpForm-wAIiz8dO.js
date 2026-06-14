import "./rolldown-runtime-w0pxe0c8.js";
import { Q as script$3, i as script, n as zodResolver, q as script$2, r as script$1 } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, Gt as toDisplayString, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, V as defineComponent, bt as withCtx, j as createBaseVNode, rt as openBlock, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { Ji as useAuthStore } from "./promotionUtils-RbTs6TVG.js";
import { nt as useThrottleFn } from "./vendor-vueuse-B9Hj6YrL.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { r as signUpSchema } from "./signInSchema-icyFWeFz.js";
import { t as PasswordFields_default } from "./PasswordFields-BAPbMymp.js";
//#region src/components/dialog/content/signin/SignUpForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "mb-2 text-base font-medium opacity-80",
	for: "comfy-org-sign-up-email"
};
var _hoisted_2 = {
	key: 0,
	class: "text-red-500"
};
//#endregion
//#region src/components/dialog/content/signin/SignUpForm.vue
var SignUpForm_default = /* @__PURE__ */ defineComponent({
	__name: "SignUpForm",
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const authStore = useAuthStore();
		const loading = computed(() => authStore.loading);
		const emit = __emit;
		const onSubmit = useThrottleFn((event) => {
			if (event.valid) emit("submit", event.values);
		}, 1500);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				class: "flex flex-col gap-6",
				resolver: unref(zodResolver)(unref(signUpSchema)),
				onSubmit: unref(onSubmit)
			}, {
				default: withCtx(($form) => [
					createVNode(unref(script$1), {
						name: "email",
						class: "flex flex-col gap-2"
					}, {
						default: withCtx(($field) => [
							createBaseVNode("label", _hoisted_1, toDisplayString(unref(t)("auth.signup.emailLabel")), 1),
							createVNode(unref(script$2), {
								"pt:root:id": "comfy-org-sign-up-email",
								"pt:root:name": "email",
								"pt:root:autocomplete": "email",
								class: "h-10",
								type: "email",
								placeholder: unref(t)("auth.signup.emailPlaceholder"),
								invalid: $field.invalid
							}, null, 8, ["placeholder", "invalid"]),
							$field.error ? (openBlock(), createElementBlock("small", _hoisted_2, toDisplayString($field.error.message), 1)) : createCommentVNode("", true)
						]),
						_: 1
					}),
					createVNode(PasswordFields_default),
					loading.value ? (openBlock(), createBlock(unref(script$3), {
						key: 0,
						class: "mx-auto size-8"
					})) : (openBlock(), createBlock(Button_default, {
						key: 1,
						type: "submit",
						class: "mt-4 h-10 font-medium",
						disabled: !$form.valid
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.signup.signUpButton")), 1)]),
						_: 1
					}, 8, ["disabled"]))
				]),
				_: 1
			}, 8, ["resolver", "onSubmit"]);
		};
	}
});
//#endregion
export { SignUpForm_default as t };

//# sourceMappingURL=SignUpForm-wAIiz8dO.js.map
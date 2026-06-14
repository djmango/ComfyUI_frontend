import "./rolldown-runtime-w0pxe0c8.js";
import { i as script, n as zodResolver } from "./vendor-primevue-DUHRgx0Y.js";
import { Bt as unref, Gt as toDisplayString, M as createBlock, R as createTextVNode, V as defineComponent, bt as withCtx, jt as ref, rt as openBlock, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { $ as useAuthActions } from "./promotionUtils-RbTs6TVG.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { i as updatePasswordSchema } from "./signInSchema-icyFWeFz.js";
import { t as PasswordFields_default } from "./PasswordFields-BAPbMymp.js";
//#endregion
//#region src/components/dialog/content/UpdatePasswordContent.vue
var UpdatePasswordContent_default = /* @__PURE__ */ defineComponent({
	__name: "UpdatePasswordContent",
	props: { onSuccess: { type: Function } },
	setup(__props) {
		const authActions = useAuthActions();
		const loading = ref(false);
		const onSubmit = async (event) => {
			if (event.valid) {
				loading.value = true;
				try {
					await authActions.updatePassword(event.values.password);
					__props.onSuccess();
				} finally {
					loading.value = false;
				}
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				"data-testid": "update-password-dialog",
				class: "flex w-96 flex-col gap-6",
				resolver: unref(zodResolver)(unref(updatePasswordSchema)),
				onSubmit
			}, {
				default: withCtx(() => [createVNode(PasswordFields_default), createVNode(Button_default, {
					type: "submit",
					class: "mt-4 h-10 font-medium",
					loading: loading.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("userSettings.updatePassword")), 1)]),
					_: 1
				}, 8, ["loading"])]),
				_: 1
			}, 8, ["resolver"]);
		};
	}
});
//#endregion
export { UpdatePasswordContent_default as default };

//# sourceMappingURL=UpdatePasswordContent-DmSQO0Jp.js.map
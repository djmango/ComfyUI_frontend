import "./rolldown-runtime-w0pxe0c8.js";
import { D as script$3, M as script$2, O as script$1, q as script } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, Gt as toDisplayString, Ht as normalizeClass, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, S as withKeys, V as defineComponent, X as nextTick, bt as withCtx, c as useRouter, et as onMounted, j as createBaseVNode, jt as ref, ot as renderSlot, rt as openBlock, x as vShow, xt as withDirectives, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { n as isDesktop } from "./types-LUZjNlbK.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { n as isNativeWindow, t as electronAPI } from "./envUtil-DPYJeo7H.js";
import { t as useUserStore } from "./userStore-Cm9ERWXg.js";
//#region src/views/templates/BaseViewTemplate.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex w-full grow items-center justify-center overflow-auto" };
//#endregion
//#region src/views/templates/BaseViewTemplate.vue
var BaseViewTemplate_default = /* @__PURE__ */ defineComponent({
	__name: "BaseViewTemplate",
	props: { dark: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const darkTheme = {
			color: "rgba(0, 0, 0, 0)",
			symbolColor: "#d4d4d4"
		};
		const lightTheme = {
			color: "rgba(0, 0, 0, 0)",
			symbolColor: "#171717"
		};
		const topMenuRef = ref(null);
		onMounted(async () => {
			if (isDesktop) {
				await nextTick();
				electronAPI().changeTheme({
					...__props.dark ? darkTheme : lightTheme,
					height: topMenuRef.value?.getBoundingClientRect().height ?? 0
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["flex h-svh w-screen flex-col font-sans", [__props.dark ? "dark-theme bg-neutral-900 text-neutral-300" : "bg-neutral-300 text-neutral-900"]]) }, [withDirectives(createBaseVNode("div", {
				ref_key: "topMenuRef",
				ref: topMenuRef,
				class: "app-drag h-(--comfy-topbar-height) w-full"
			}, null, 512), [[vShow, unref(isNativeWindow)()]]), createBaseVNode("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")])], 2);
		};
	}
});
//#endregion
//#region src/views/UserSelectView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	id: "comfy-user-selection",
	class: "relative min-w-84 rounded-lg bg-(--comfy-menu-bg) p-5 px-10 shadow-lg"
};
var _hoisted_2 = { class: "flex w-full flex-col items-center" };
var _hoisted_3 = { class: "flex w-full flex-col gap-2" };
var _hoisted_4 = { for: "new-user-input" };
var _hoisted_5 = { class: "flex w-full flex-col gap-2" };
var _hoisted_6 = { for: "existing-user-select" };
var _hoisted_7 = { class: "mt-5" };
//#endregion
//#region src/views/UserSelectView.vue
var UserSelectView_default = /* @__PURE__ */ defineComponent({
	__name: "UserSelectView",
	setup(__props) {
		const userStore = useUserStore();
		const router = useRouter();
		const selectedUser = ref(null);
		const newUsername = ref("");
		const loginError = ref("");
		const createNewUser = computed(() => newUsername.value.trim() !== "");
		const newUserExistsError = computed(() => {
			return userStore.users.find((user) => user.username === newUsername.value) ? `User "${newUsername.value}" already exists` : "";
		});
		const error = computed(() => newUserExistsError.value || loginError.value);
		const login = async () => {
			try {
				const user = createNewUser.value ? await userStore.createUser(newUsername.value) : selectedUser.value;
				if (!user) throw new Error("No user selected");
				await userStore.login(user);
				await router.push("/");
			} catch (err) {
				loginError.value = err instanceof Error ? err.message : JSON.stringify(err);
			}
		};
		onMounted(async () => {
			document.getElementById("splash-loader")?.remove();
			await userStore.initialize();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseViewTemplate_default, { dark: "" }, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1, [_cache[2] || (_cache[2] = createBaseVNode("h1", { class: "my-2.5 mb-7 font-normal" }, "ComfyUI", -1)), createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [createBaseVNode("label", _hoisted_4, toDisplayString(_ctx.$t("userSelect.newUser")) + ":", 1), createVNode(unref(script), {
						id: "new-user-input",
						modelValue: newUsername.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newUsername.value = $event),
						placeholder: _ctx.$t("userSelect.enterUsername"),
						onKeyup: withKeys(login, ["enter"])
					}, null, 8, ["modelValue", "placeholder"])]),
					createVNode(unref(script$1)),
					createBaseVNode("div", _hoisted_5, [
						createBaseVNode("label", _hoisted_6, toDisplayString(_ctx.$t("userSelect.existingUser")) + ":", 1),
						createVNode(unref(script$2), {
							modelValue: selectedUser.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedUser.value = $event),
							class: "w-full",
							"input-id": "existing-user-select",
							options: unref(userStore).users,
							"option-label": "username",
							placeholder: _ctx.$t("userSelect.selectUser"),
							disabled: createNewUser.value
						}, null, 8, [
							"modelValue",
							"options",
							"placeholder",
							"disabled"
						]),
						error.value ? (openBlock(), createBlock(unref(script$3), {
							key: 0,
							severity: "error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					createBaseVNode("footer", _hoisted_7, [createVNode(Button_default, { onClick: login }, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("userSelect.next")), 1)]),
						_: 1
					})])
				])])]),
				_: 1
			});
		};
	}
});
//#endregion
export { UserSelectView_default as default };

//# sourceMappingURL=UserSelectView-CgQn5RTT.js.map
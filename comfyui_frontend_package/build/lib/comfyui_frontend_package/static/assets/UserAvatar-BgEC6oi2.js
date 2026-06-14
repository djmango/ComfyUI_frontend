import "./rolldown-runtime-w0pxe0c8.js";
import { B as script } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, M as createBlock, V as defineComponent, jt as ref, rt as openBlock } from "./vendor-vue-core-lEb6pQ7x.js";
//#endregion
//#region src/components/common/UserAvatar.vue
var UserAvatar_default = /* @__PURE__ */ defineComponent({
	__name: "UserAvatar",
	props: {
		photoUrl: {},
		ariaLabel: {}
	},
	setup(__props) {
		const imageError = ref(false);
		const handleImageError = () => {
			imageError.value = true;
		};
		const hasAvatar = computed(() => __props.photoUrl && !imageError.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				class: "aspect-square bg-interface-panel-selected-surface",
				image: __props.photoUrl ?? void 0,
				icon: hasAvatar.value ? void 0 : "icon-[lucide--user]",
				pt: { icon: {
					class: { "size-4": !hasAvatar.value },
					"data-testid": "avatar-icon"
				} },
				shape: "circle",
				"aria-label": __props.ariaLabel ?? _ctx.$t("auth.login.userAvatar"),
				onError: handleImageError
			}, null, 8, [
				"image",
				"icon",
				"pt",
				"aria-label"
			]);
		};
	}
});
//#endregion
export { UserAvatar_default as t };

//# sourceMappingURL=UserAvatar-BgEC6oi2.js.map
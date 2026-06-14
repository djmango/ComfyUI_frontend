import "./rolldown-runtime-w0pxe0c8.js";
import { it as useToast } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, Gt as toDisplayString, Ht as normalizeClass, P as createElementBlock, R as createTextVNode, T as Fragment, V as defineComponent, b as vModelText, bt as withCtx, j as createBaseVNode, jt as ref, rt as openBlock, xt as withDirectives, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { Ki as useTeamWorkspaceStore } from "./promotionUtils-RbTs6TVG.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { t as cn } from "./src-nrRWoNk5.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as useDialogStore } from "./dialogStore-NFHibcWZ.js";
//#region src/platform/workspace/components/dialogs/InviteMemberDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[512px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = ["placeholder"];
var _hoisted_8 = { class: "flex items-center justify-end gap-4 p-4" };
var _hoisted_9 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_10 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_11 = { class: "m-0 text-sm font-medium text-base-foreground" };
var _hoisted_12 = { class: "relative" };
var _hoisted_13 = ["value"];
var _hoisted_14 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/InviteMemberDialogContent.vue
var InviteMemberDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "InviteMemberDialogContent",
	setup(__props) {
		const dialogStore = useDialogStore();
		const toast = useToast();
		const { t } = useI18n();
		const workspaceStore = useTeamWorkspaceStore();
		const loading = ref(false);
		const email = ref("");
		const step = ref("email");
		const generatedLink = ref("");
		const justCopied = ref(false);
		const isValidEmail = computed(() => {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
		});
		function onCancel() {
			dialogStore.closeDialog({ key: "invite-member" });
		}
		async function onCreateLink() {
			if (!isValidEmail.value) return;
			loading.value = true;
			try {
				generatedLink.value = await workspaceStore.createInviteLink(email.value);
				step.value = "link";
			} catch (error) {
				toast.add({
					severity: "error",
					summary: t("workspacePanel.inviteMemberDialog.linkCopyFailed"),
					detail: error instanceof Error ? error.message : void 0
				});
			} finally {
				loading.value = false;
			}
		}
		async function onCopyLink() {
			try {
				await navigator.clipboard.writeText(generatedLink.value);
				justCopied.value = true;
				setTimeout(() => {
					justCopied.value = false;
				}, 759);
				toast.add({
					severity: "success",
					summary: t("workspacePanel.inviteMemberDialog.linkCopied"),
					life: 2e3
				});
			} catch {
				toast.add({
					severity: "error",
					summary: t("workspacePanel.inviteMemberDialog.linkCopyFailed")
				});
			}
		}
		function onSelectLink(event) {
			event.target.select();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(step.value === "email" ? _ctx.$t("workspacePanel.inviteMemberDialog.title") : _ctx.$t("workspacePanel.inviteMemberDialog.linkStep.title")), 1), createBaseVNode("button", {
				class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
				"aria-label": _ctx.$t("g.close"),
				onClick: onCancel
			}, [..._cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)])], 8, _hoisted_4)]), step.value === "email" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.message")), 1), withDirectives(createBaseVNode("input", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
				type: "email",
				class: "focus:ring-secondary-foreground w-full rounded-lg border border-border-default bg-transparent px-3 py-2 text-sm text-base-foreground placeholder:text-muted-foreground focus:ring-1 focus:outline-none",
				placeholder: _ctx.$t("workspacePanel.inviteMemberDialog.placeholder")
			}, null, 8, _hoisted_7), [[vModelText, email.value]])]), createBaseVNode("div", _hoisted_8, [createVNode(Button_default, {
				variant: "muted-textonly",
				onClick: onCancel
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
				_: 1
			}), createVNode(Button_default, {
				variant: "primary",
				size: "lg",
				loading: loading.value,
				disabled: !isValidEmail.value,
				onClick: onCreateLink
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.createLink")), 1)]),
				_: 1
			}, 8, ["loading", "disabled"])])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", _hoisted_9, [
				createBaseVNode("p", _hoisted_10, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.linkStep.message")), 1),
				createBaseVNode("p", _hoisted_11, toDisplayString(email.value), 1),
				createBaseVNode("div", _hoisted_12, [createBaseVNode("input", {
					value: generatedLink.value,
					readonly: "",
					class: "w-full cursor-pointer rounded-lg border border-border-default bg-transparent px-3 py-2 pr-10 text-sm text-base-foreground focus:outline-none",
					onClick: onSelectLink
				}, null, 8, _hoisted_13), createBaseVNode("div", {
					class: "absolute top-2.5 right-3 cursor-pointer",
					onClick: onCopyLink
				}, [createBaseVNode("i", { class: normalizeClass(unref(cn)("pi size-4", justCopied.value ? "pi-check text-green-500" : "pi-copy")) }, null, 2)])])
			]), createBaseVNode("div", _hoisted_14, [createVNode(Button_default, {
				variant: "muted-textonly",
				onClick: onCancel
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
				_: 1
			}), createVNode(Button_default, {
				variant: "primary",
				size: "lg",
				onClick: onCopyLink
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.linkStep.copyLink")), 1)]),
				_: 1
			})])], 64))]);
		};
	}
});
//#endregion
export { InviteMemberDialogContent_default as default };

//# sourceMappingURL=InviteMemberDialogContent-fBrIK441.js.map
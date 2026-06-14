import "./rolldown-runtime-w0pxe0c8.js";
import { it as useToast, x as script } from "./vendor-primevue-DUHRgx0Y.js";
import { A as computed, Bt as unref, Et as isRef, Gt as toDisplayString, Ht as normalizeClass, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, T as Fragment, V as defineComponent, at as renderList, bt as withCtx, ct as resolveDirective, et as onMounted, f as storeToRefs, j as createBaseVNode, jt as ref, rt as openBlock, xt as withDirectives, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { Gi as useCurrentUser, Ki as useTeamWorkspaceStore, Vi as useBillingContext, Z as useDialogService, aa as TIER_TO_KEY, hr as SearchInput_default } from "./promotionUtils-RbTs6TVG.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { d as TabsTrigger_default, f as TabsList_default, m as TabsRoot_default, p as TabsContent_default } from "./vendor-reka-ui-DQClbqQd.js";
import { t as cn } from "./src-nrRWoNk5.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as UserAvatar_default } from "./UserAvatar-BgEC6oi2.js";
import { t as WorkspaceProfilePic_default } from "./WorkspaceProfilePic-DNYUdXQc.js";
import { t as useWorkspaceUI } from "./useWorkspaceUI-Bi7-toNr.js";
import { t as SubscriptionPanelContentWorkspace_default } from "./SubscriptionPanelContentWorkspace-wTyGBOqK.js";
//#region src/platform/workspace/components/RoleBadge.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { class: "rounded-full bg-base-foreground px-1 py-0.5 text-2xs font-bold text-base-background uppercase" };
//#endregion
//#region src/platform/workspace/components/RoleBadge.vue
var RoleBadge_default = /* @__PURE__ */ defineComponent({
	__name: "RoleBadge",
	props: { role: {} },
	setup(__props) {
		const { t } = useI18n();
		const roleBadgeLabel = computed(() => __props.role === "owner" ? t("workspaceSwitcher.roleOwner") : t("workspaceSwitcher.roleMember"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", _hoisted_1$5, toDisplayString(roleBadgeLabel.value), 1);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "flex items-center gap-3" };
var _hoisted_2$4 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_3$3 = { class: "flex items-center gap-2" };
var _hoisted_4$3 = { class: "text-sm text-base-foreground" };
var _hoisted_5$3 = {
	key: 0,
	class: "text-muted-foreground"
};
var _hoisted_6$3 = { class: "text-sm text-muted-foreground" };
var _hoisted_7$2 = {
	key: 0,
	class: "text-right text-sm text-muted-foreground"
};
var _hoisted_8$2 = {
	key: 1,
	class: "flex items-center justify-end"
};
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberListItem.vue
var MemberListItem_default = /* @__PURE__ */ defineComponent({
	__name: "MemberListItem",
	props: {
		member: {},
		isCurrentUser: { type: Boolean },
		photoUrl: {},
		gridCols: {},
		showRoleBadge: {
			type: Boolean,
			default: false
		},
		showDateColumn: {
			type: Boolean,
			default: false
		},
		canRemoveMembers: {
			type: Boolean,
			default: false
		},
		isSingleSeatPlan: {
			type: Boolean,
			default: false
		},
		striped: {
			type: Boolean,
			default: false
		}
	},
	emits: ["showMenu"],
	setup(__props) {
		const { d } = useI18n();
		function formatDate(date) {
			return d(date, { dateStyle: "medium" });
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", __props.isSingleSeatPlan ? "grid-cols-1" : __props.gridCols, __props.striped && "bg-secondary-background/50")) }, [
				createBaseVNode("div", _hoisted_1$4, [createVNode(UserAvatar_default, {
					class: "size-8",
					"photo-url": __props.isCurrentUser ? __props.photoUrl : void 0,
					"pt:icon:class": { "text-xl!": !__props.isCurrentUser || !__props.photoUrl }
				}, null, 8, ["photo-url", "pt:icon:class"]), createBaseVNode("div", _hoisted_2$4, [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("span", _hoisted_4$3, [createTextVNode(toDisplayString(__props.member.name) + " ", 1), __props.isCurrentUser ? (openBlock(), createElementBlock("span", _hoisted_5$3, " (" + toDisplayString(_ctx.$t("g.you")) + ") ", 1)) : createCommentVNode("", true)]), __props.showRoleBadge ? (openBlock(), createBlock(RoleBadge_default, {
					key: 0,
					role: __props.member.role
				}, null, 8, ["role"])) : createCommentVNode("", true)]), createBaseVNode("span", _hoisted_6$3, toDisplayString(__props.member.email), 1)])]),
				__props.showDateColumn && !__props.isSingleSeatPlan ? (openBlock(), createElementBlock("span", _hoisted_7$2, toDisplayString(formatDate(__props.member.joinDate)), 1)) : createCommentVNode("", true),
				__props.canRemoveMembers && !__props.isSingleSeatPlan ? (openBlock(), createElementBlock("div", _hoisted_8$2, [!__props.isCurrentUser ? withDirectives((openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "muted-textonly",
					size: "icon",
					"aria-label": _ctx.$t("g.moreOptions"),
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("showMenu", $event))
				}, {
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
					_: 1
				}, 8, ["aria-label"])), [[_directive_tooltip, {
					value: _ctx.$t("g.moreOptions"),
					showDelay: 300
				}]]) : createCommentVNode("", true)])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberUpsellBanner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "mt-4 flex items-center justify-center gap-2 rounded-xl border border-border-default bg-secondary-background px-4 py-3" };
var _hoisted_2$3 = { class: "text-foreground m-0 text-sm" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberUpsellBanner.vue
var MemberUpsellBanner_default = /* @__PURE__ */ defineComponent({
	__name: "MemberUpsellBanner",
	props: { isActiveSubscription: { type: Boolean } },
	emits: ["showPlans"],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("p", _hoisted_2$3, toDisplayString(__props.isActiveSubscription ? _ctx.$t("workspacePanel.members.upsellBannerUpgrade") : _ctx.$t("workspacePanel.members.upsellBannerSubscribe")), 1), createVNode(Button_default, {
				variant: "muted-textonly",
				class: "cursor-pointer text-sm underline",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("showPlans"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.viewPlans")), 1)]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PendingInvitesList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex items-center gap-3" };
var _hoisted_2$2 = { class: "flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary-background" };
var _hoisted_3$2 = { class: "text-sm font-bold text-base-foreground" };
var _hoisted_4$2 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_5$2 = { class: "text-sm text-base-foreground" };
var _hoisted_6$2 = { class: "text-sm text-muted-foreground" };
var _hoisted_7$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_8$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_9$1 = { class: "flex items-center justify-end gap-2" };
var _hoisted_10$1 = {
	key: 0,
	class: "flex w-full items-center justify-center py-8 text-sm text-muted-foreground"
};
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PendingInvitesList.vue
var PendingInvitesList_default = /* @__PURE__ */ defineComponent({
	__name: "PendingInvitesList",
	props: {
		invites: {},
		gridCols: {}
	},
	emits: ["copyLink", "revoke"],
	setup(__props) {
		const { d } = useI18n();
		function getInviteDisplayName(email) {
			return email.split("@")[0];
		}
		function getInviteInitial(email) {
			return email.charAt(0).toUpperCase();
		}
		function formatDate(date) {
			return d(date, { dateStyle: "medium" });
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.invites, (invite, index) => {
				return openBlock(), createElementBlock("div", {
					key: invite.id,
					class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", __props.gridCols, index % 2 === 1 && "bg-secondary-background/50"))
				}, [
					createBaseVNode("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("span", _hoisted_3$2, toDisplayString(getInviteInitial(invite.email)), 1)]), createBaseVNode("div", _hoisted_4$2, [createBaseVNode("span", _hoisted_5$2, toDisplayString(getInviteDisplayName(invite.email)), 1), createBaseVNode("span", _hoisted_6$2, toDisplayString(invite.email), 1)])]),
					createBaseVNode("span", _hoisted_7$1, toDisplayString(formatDate(invite.inviteDate)), 1),
					createBaseVNode("span", _hoisted_8$1, toDisplayString(formatDate(invite.expiryDate)), 1),
					createBaseVNode("div", _hoisted_9$1, [withDirectives((openBlock(), createBlock(Button_default, {
						variant: "secondary",
						size: "md",
						"aria-label": _ctx.$t("workspacePanel.members.actions.copyLink"),
						onClick: ($event) => _ctx.$emit("copyLink", invite)
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "icon-[lucide--link] size-4" }, null, -1)])]),
						_: 1
					}, 8, ["aria-label", "onClick"])), [[_directive_tooltip, {
						value: _ctx.$t("workspacePanel.members.actions.copyLink"),
						showDelay: 300
					}]]), withDirectives((openBlock(), createBlock(Button_default, {
						variant: "secondary",
						size: "md",
						"aria-label": _ctx.$t("workspacePanel.members.actions.revokeInvite"),
						onClick: ($event) => _ctx.$emit("revoke", invite)
					}, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("i", { class: "icon-[lucide--mail-x] size-4" }, null, -1)])]),
						_: 1
					}, 8, ["aria-label", "onClick"])), [[_directive_tooltip, {
						value: _ctx.$t("workspacePanel.members.actions.revokeInvite"),
						showDelay: 300
					}]])])
				], 2);
			}), 128)), __props.invites.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, toDisplayString(_ctx.$t("workspacePanel.members.noInvites")), 1)) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/platform/workspace/composables/useMembersPanel.ts
function sortMembers(members, currentUserEmail, sortDirection) {
	return [...members].sort((a, b) => {
		if (a.role === "owner" && b.role !== "owner") return -1;
		if (a.role !== "owner" && b.role === "owner") return 1;
		const aIsCurrent = a.email.toLowerCase() === currentUserEmail?.toLowerCase();
		const bIsCurrent = b.email.toLowerCase() === currentUserEmail?.toLowerCase();
		if (aIsCurrent && !bIsCurrent) return -1;
		if (!aIsCurrent && bIsCurrent) return 1;
		const aValue = a.joinDate.getTime();
		const bValue = b.joinDate.getTime();
		return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
	});
}
function filterBySearch(items, query) {
	if (!query) return items;
	const q = query.toLowerCase();
	return items.filter((item) => item.email.toLowerCase().includes(q) || "name" in item && item.name?.toLowerCase().includes(q));
}
function sortPendingInvites(invites, sortField, sortDirection) {
	const field = sortField === "joinDate" ? "inviteDate" : sortField;
	return [...invites].sort((a, b) => {
		const aDate = a[field];
		const bDate = b[field];
		if (!aDate || !bDate) return 0;
		const aValue = aDate.getTime();
		const bValue = bDate.getTime();
		return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
	});
}
function useMembersPanel() {
	const { t } = useI18n();
	const toast = useToast();
	const { userPhotoUrl, userEmail, userDisplayName } = useCurrentUser();
	const { showRemoveMemberDialog, showRevokeInviteDialog, showCreateWorkspaceDialog } = useDialogService();
	const workspaceStore = useTeamWorkspaceStore();
	const { members, pendingInvites, isInPersonalWorkspace: isPersonalWorkspace } = storeToRefs(workspaceStore);
	const { copyInviteLink } = workspaceStore;
	const { permissions, uiConfig } = useWorkspaceUI();
	const { isActiveSubscription, subscription, showSubscriptionDialog, getMaxSeats } = useBillingContext();
	const maxSeats = computed(() => {
		if (isPersonalWorkspace.value) return 1;
		const tier = subscription.value?.tier;
		if (!tier) return 1;
		const tierKey = TIER_TO_KEY[tier];
		if (!tierKey) return 1;
		return getMaxSeats(tierKey);
	});
	const isSingleSeatPlan = computed(() => {
		if (isPersonalWorkspace.value) return false;
		if (!isActiveSubscription.value) return true;
		return maxSeats.value <= 1;
	});
	const personalWorkspaceMember = computed(() => ({
		id: "self",
		name: userDisplayName.value ?? "",
		email: userEmail.value ?? "",
		role: "owner",
		joinDate: /* @__PURE__ */ new Date(0)
	}));
	const searchQuery = ref("");
	const activeView = ref("active");
	const sortField = ref("inviteDate");
	const sortDirection = ref("desc");
	const selectedMember = ref(null);
	const memberMenuItems = computed(() => [{
		label: t("workspacePanel.members.actions.removeMember"),
		icon: "pi pi-user-minus",
		command: () => {
			if (selectedMember.value) handleRemoveMember(selectedMember.value);
		}
	}]);
	function selectMember(member) {
		selectedMember.value = member;
	}
	function isCurrentUser(member) {
		return member.email.toLowerCase() === userEmail.value?.toLowerCase();
	}
	const filteredMembers = computed(() => {
		return sortMembers(filterBySearch(members.value, searchQuery.value), userEmail.value ?? null, sortDirection.value);
	});
	const filteredPendingInvites = computed(() => {
		return sortPendingInvites(filterBySearch(pendingInvites.value, searchQuery.value), sortField.value, sortDirection.value);
	});
	function toggleSort(field) {
		if (sortField.value === field) sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
		else {
			sortField.value = field;
			sortDirection.value = "desc";
		}
	}
	async function handleCopyInviteLink(invite) {
		try {
			await copyInviteLink(invite.id);
			toast.add({
				severity: "success",
				summary: t("g.copied"),
				life: 2e3
			});
		} catch {
			toast.add({
				severity: "error",
				summary: t("g.error")
			});
		}
	}
	function handleRevokeInvite(invite) {
		showRevokeInviteDialog(invite.id);
	}
	function handleCreateWorkspace() {
		showCreateWorkspaceDialog();
	}
	function handleRemoveMember(member) {
		showRemoveMemberDialog(member.id);
	}
	return {
		searchQuery,
		activeView,
		sortField,
		sortDirection,
		selectedMember,
		maxSeats,
		isSingleSeatPlan,
		personalWorkspaceMember,
		filteredMembers,
		filteredPendingInvites,
		memberMenuItems,
		isPersonalWorkspace,
		members,
		pendingInvites,
		permissions,
		uiConfig,
		isActiveSubscription,
		userPhotoUrl,
		isCurrentUser,
		selectMember,
		toggleSort,
		showSubscriptionDialog,
		handleCopyInviteLink,
		handleRevokeInvite,
		handleCreateWorkspace,
		handleRemoveMember
	};
}
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "grow overflow-auto pt-6" };
var _hoisted_2$1 = { class: "border-inter flex size-full flex-col gap-2 rounded-2xl border border-interface-stroke p-6" };
var _hoisted_3$1 = { class: "flex w-full items-center gap-9" };
var _hoisted_4$1 = { class: "flex min-w-0 flex-1 items-baseline gap-2" };
var _hoisted_5$1 = { class: "text-base font-semibold text-base-foreground" };
var _hoisted_6$1 = {
	key: 0,
	class: "flex items-start gap-2"
};
var _hoisted_7 = { class: "flex min-h-0 flex-1 flex-col" };
var _hoisted_8 = {
	key: 0,
	class: "flex items-center gap-2"
};
var _hoisted_9 = { key: 0 };
var _hoisted_10 = { class: "min-h-0 flex-1 overflow-y-auto" };
var _hoisted_11 = {
	key: 0,
	class: "flex items-center"
};
var _hoisted_12 = { class: "text-sm text-muted-foreground" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue
var MembersPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "MembersPanelContent",
	setup(__props) {
		const { searchQuery, activeView, maxSeats, isSingleSeatPlan, personalWorkspaceMember, filteredMembers, filteredPendingInvites, memberMenuItems, isPersonalWorkspace, members, pendingInvites, permissions, uiConfig, isActiveSubscription, userPhotoUrl, isCurrentUser, selectMember, toggleSort, showSubscriptionDialog, handleCopyInviteLink, handleRevokeInvite, handleCreateWorkspace } = useMembersPanel();
		const memberMenu = ref(null);
		function showMemberMenu(event, member) {
			selectMember(member);
			memberMenu.value?.toggle(event);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [createBaseVNode("span", _hoisted_5$1, [unref(activeView) === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.membersCount", {
				count: unref(isSingleSeatPlan) || unref(isPersonalWorkspace) ? 1 : unref(members).length,
				maxSeats: unref(maxSeats)
			})), 1)], 64)) : unref(permissions).canViewPendingInvites ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.pendingInvitesCount", unref(pendingInvites).length)), 1)], 64)) : createCommentVNode("", true)])]), unref(uiConfig).showSearch && !unref(isSingleSeatPlan) ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createVNode(SearchInput_default, {
				modelValue: unref(searchQuery),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
				placeholder: _ctx.$t("g.search"),
				size: "lg",
				class: "w-64"
			}, null, 8, ["modelValue", "placeholder"])])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_7, [unref(uiConfig).showMembersList ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)("grid w-full items-center py-2", unref(isSingleSeatPlan) ? "grid-cols-1 py-0" : unref(activeView) === "pending" ? unref(uiConfig).pendingGridCols : unref(uiConfig).headerGridCols))
			}, [!unref(isSingleSeatPlan) ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(Button_default, {
				variant: unref(activeView) === "active" ? "secondary" : "muted-textonly",
				size: "md",
				onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "active")
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.active")), 1)]),
				_: 1
			}, 8, ["variant"]), unref(uiConfig).showPendingTab ? (openBlock(), createBlock(Button_default, {
				key: 0,
				variant: unref(activeView) === "pending" ? "secondary" : "muted-textonly",
				size: "md",
				onClick: _cache[2] || (_cache[2] = ($event) => activeView.value = "pending")
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.pendingCount", unref(pendingInvites).length)), 1)]),
				_: 1
			}, 8, ["variant"])) : createCommentVNode("", true)])) : createCommentVNode("", true), unref(activeView) === "pending" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "sm",
					class: "justify-start",
					onClick: _cache[3] || (_cache[3] = ($event) => unref(toggleSort)("inviteDate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.inviteDate")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
					_: 1
				}),
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "sm",
					class: "justify-start",
					onClick: _cache[4] || (_cache[4] = ($event) => unref(toggleSort)("expiryDate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.expiryDate")) + " ", 1), _cache[9] || (_cache[9] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
					_: 1
				}),
				_cache[10] || (_cache[10] = createBaseVNode("div", null, null, -1))
			], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [!unref(isSingleSeatPlan) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(Button_default, {
				variant: "muted-textonly",
				size: "sm",
				class: "justify-end",
				onClick: _cache[5] || (_cache[5] = ($event) => unref(toggleSort)("joinDate"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.joinDate")) + " ", 1), _cache[11] || (_cache[11] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
				_: 1
			}), unref(permissions).canRemoveMembers ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 64))], 2)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_10, [
				unref(activeView) === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(isPersonalWorkspace) ? (openBlock(), createBlock(MemberListItem_default, {
					key: 0,
					member: unref(personalWorkspaceMember),
					"is-current-user": true,
					"photo-url": unref(userPhotoUrl) ?? void 0,
					"grid-cols": unref(uiConfig).membersGridCols,
					"show-role-badge": unref(uiConfig).showRoleBadge
				}, null, 8, [
					"member",
					"photo-url",
					"grid-cols",
					"show-role-badge"
				])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredMembers), (member, index) => {
					return openBlock(), createBlock(MemberListItem_default, {
						key: member.id,
						member,
						"is-current-user": unref(isCurrentUser)(member),
						"photo-url": unref(isCurrentUser)(member) ? unref(userPhotoUrl) ?? void 0 : void 0,
						"grid-cols": unref(uiConfig).membersGridCols,
						"show-role-badge": unref(uiConfig).showRoleBadge,
						"show-date-column": unref(uiConfig).showDateColumn,
						"can-remove-members": unref(permissions).canRemoveMembers,
						"is-single-seat-plan": unref(isSingleSeatPlan),
						striped: index % 2 === 1,
						onShowMenu: ($event) => showMemberMenu($event, member)
					}, null, 8, [
						"member",
						"is-current-user",
						"photo-url",
						"grid-cols",
						"show-role-badge",
						"show-date-column",
						"can-remove-members",
						"is-single-seat-plan",
						"striped",
						"onShowMenu"
					]);
				}), 128)), createVNode(unref(script), {
					ref_key: "memberMenu",
					ref: memberMenu,
					model: unref(memberMenuItems),
					popup: true
				}, null, 8, ["model"])], 64))], 64)) : createCommentVNode("", true),
				unref(isSingleSeatPlan) ? (openBlock(), createBlock(MemberUpsellBanner_default, {
					key: 1,
					"is-active-subscription": unref(isActiveSubscription),
					onShowPlans: _cache[6] || (_cache[6] = ($event) => unref(showSubscriptionDialog)())
				}, null, 8, ["is-active-subscription"])) : createCommentVNode("", true),
				unref(activeView) === "pending" ? (openBlock(), createBlock(PendingInvitesList_default, {
					key: 2,
					invites: unref(filteredPendingInvites),
					"grid-cols": unref(uiConfig).pendingGridCols,
					onCopyLink: unref(handleCopyInviteLink),
					onRevoke: unref(handleRevokeInvite)
				}, null, 8, [
					"invites",
					"grid-cols",
					"onCopyLink",
					"onRevoke"
				])) : createCommentVNode("", true)
			])])]), unref(isPersonalWorkspace) ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("p", _hoisted_12, toDisplayString(_ctx.$t("workspacePanel.members.personalWorkspaceMessage")), 1), createBaseVNode("button", {
				class: "cursor-pointer border-none bg-transparent underline",
				onClick: _cache[7] || (_cache[7] = (...args) => unref(handleCreateWorkspace) && unref(handleCreateWorkspace)(...args))
			}, toDisplayString(_ctx.$t("workspacePanel.members.createNewWorkspace")), 1)])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-full flex-col" };
var _hoisted_2 = { class: "mb-8 flex items-center gap-4" };
var _hoisted_3 = { class: "text-3xl text-base-foreground" };
var _hoisted_4 = { class: "flex w-full items-center justify-between" };
var _hoisted_5 = { class: "flex items-center gap-1" };
var _hoisted_6 = ["disabled", "onClick"];
var tabTriggerBase = "flex items-center justify-center shrink-0 px-2.5 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200 outline-hidden border-none";
var tabTriggerActive = "bg-interface-menu-component-surface-hovered text-text-primary font-bold";
var tabTriggerInactive = "bg-transparent text-text-secondary hover:bg-button-hover-surface focus:bg-button-hover-surface";
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue
var WorkspacePanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspacePanelContent",
	props: { defaultTab: { default: "plan" } },
	setup(__props) {
		const { t } = useI18n();
		const { showLeaveWorkspaceDialog, showDeleteWorkspaceDialog, showInviteMemberDialog, showInviteMemberUpsellDialog, showEditWorkspaceDialog } = useDialogService();
		const { isActiveSubscription, subscription, getMaxSeats } = useBillingContext();
		const isSingleSeatPlan = computed(() => {
			if (!isActiveSubscription.value) return true;
			const tier = subscription.value?.tier;
			if (!tier) return true;
			const tierKey = TIER_TO_KEY[tier];
			if (!tierKey) return true;
			return getMaxSeats(tierKey) <= 1;
		});
		const workspaceStore = useTeamWorkspaceStore();
		const { workspaceName, members, isInviteLimitReached, isWorkspaceSubscribed } = storeToRefs(workspaceStore);
		const { fetchMembers, fetchPendingInvites } = workspaceStore;
		const { workspaceRole, permissions, uiConfig } = useWorkspaceUI();
		const activeTab = ref(__props.defaultTab);
		const menu = ref(null);
		function handleLeaveWorkspace() {
			showLeaveWorkspaceDialog();
		}
		function handleDeleteWorkspace() {
			showDeleteWorkspaceDialog();
		}
		function handleEditWorkspace() {
			showEditWorkspaceDialog();
		}
		const isDeleteDisabled = computed(() => uiConfig.value.workspaceMenuAction === "delete" && isWorkspaceSubscribed.value);
		const deleteTooltip = computed(() => {
			if (!isDeleteDisabled.value) return null;
			const tooltipKey = uiConfig.value.workspaceMenuDisabledTooltip;
			return tooltipKey ? t(tooltipKey) : null;
		});
		const inviteTooltip = computed(() => {
			if (isSingleSeatPlan.value) return null;
			if (!isInviteLimitReached.value) return null;
			return t("workspacePanel.inviteLimitReached");
		});
		function handleInviteMember() {
			if (isSingleSeatPlan.value) {
				showInviteMemberUpsellDialog();
				return;
			}
			if (isInviteLimitReached.value) return;
			showInviteMemberDialog();
		}
		const menuItems = computed(() => {
			const items = [];
			if (uiConfig.value.showEditWorkspaceMenuItem) items.push({
				label: t("workspacePanel.menu.editWorkspace"),
				icon: "pi pi-pencil",
				command: handleEditWorkspace
			});
			const action = uiConfig.value.workspaceMenuAction;
			if (action === "delete") items.push({
				label: t("workspacePanel.menu.deleteWorkspace"),
				icon: "pi pi-trash",
				class: isDeleteDisabled.value ? "text-danger/50 cursor-not-allowed" : "text-danger",
				disabled: isDeleteDisabled.value,
				command: isDeleteDisabled.value ? void 0 : handleDeleteWorkspace
			});
			else if (action === "leave") items.push({
				label: t("workspacePanel.menu.leaveWorkspace"),
				icon: "pi pi-sign-out",
				command: handleLeaveWorkspace
			});
			return items;
		});
		onMounted(() => {
			fetchMembers();
			fetchPendingInvites();
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("header", _hoisted_2, [createVNode(WorkspaceProfilePic_default, {
				class: "size-12 text-3xl!",
				"workspace-name": unref(workspaceName)
			}, null, 8, ["workspace-name"]), createBaseVNode("h1", _hoisted_3, toDisplayString(unref(workspaceName)), 1)]), createVNode(unref(TabsRoot_default), {
				modelValue: activeTab.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event)
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(TabsList_default), { class: "flex items-center gap-2 pb-1" }, {
						default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
							value: "plan",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "plan" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.tabs.planCredits")), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(TabsTrigger_default), {
							value: "members",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "members" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.tabs.membersCount", { count: unref(members).length })), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}), createBaseVNode("div", _hoisted_5, [unref(permissions).canInviteMembers ? withDirectives((openBlock(), createBlock(Button_default, {
						key: 0,
						variant: "secondary",
						size: "lg",
						disabled: !isSingleSeatPlan.value && unref(isInviteLimitReached),
						class: normalizeClass(!isSingleSeatPlan.value && unref(isInviteLimitReached) && "cursor-not-allowed opacity-50"),
						"aria-label": _ctx.$t("workspacePanel.inviteMember"),
						onClick: handleInviteMember
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)])]),
						_: 1
					}, 8, [
						"disabled",
						"class",
						"aria-label"
					])), [[_directive_tooltip, inviteTooltip.value ? {
						value: inviteTooltip.value,
						showDelay: 0
					} : {
						value: _ctx.$t("workspacePanel.inviteMember"),
						showDelay: 300
					}]]) : createCommentVNode("", true), unref(permissions).canAccessWorkspaceMenu ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [withDirectives((openBlock(), createBlock(Button_default, {
						variant: "muted-textonly",
						size: "icon",
						"aria-label": _ctx.$t("g.moreOptions"),
						onClick: _cache[0] || (_cache[0] = ($event) => menu.value?.toggle($event))
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
						_: 1
					}, 8, ["aria-label"])), [[_directive_tooltip, {
						value: _ctx.$t("g.moreOptions"),
						showDelay: 300
					}]]), createVNode(unref(script), {
						ref_key: "menu",
						ref: menu,
						model: menuItems.value,
						popup: true
					}, {
						item: withCtx(({ item }) => [withDirectives((openBlock(), createElementBlock("button", {
							type: "button",
							disabled: !!item.disabled,
							class: normalizeClass(unref(cn)("flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-3 py-2", item.class, item.disabled && "pointer-events-auto cursor-not-allowed")),
							onClick: ($event) => item.command?.({
								originalEvent: $event,
								item
							})
						}, [createBaseVNode("i", { class: normalizeClass(item.icon) }, null, 2), createBaseVNode("span", null, toDisplayString(item.label), 1)], 10, _hoisted_6)), [[_directive_tooltip, item.disabled && deleteTooltip.value ? {
							value: deleteTooltip.value,
							showDelay: 0
						} : null]])]),
						_: 1
					}, 8, ["model"])], 64)) : createCommentVNode("", true)])]),
					createVNode(unref(TabsContent_default), {
						value: "plan",
						class: "mt-4"
					}, {
						default: withCtx(() => [createVNode(SubscriptionPanelContentWorkspace_default)]),
						_: 1
					}),
					createVNode(unref(TabsContent_default), {
						value: "members",
						class: "mt-4"
					}, {
						default: withCtx(() => [(openBlock(), createBlock(MembersPanelContent_default, { key: unref(workspaceRole) }))]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["modelValue"])]);
		};
	}
});
//#endregion
export { WorkspacePanelContent_default as default };

//# sourceMappingURL=WorkspacePanelContent-Q4cgnLYl.js.map
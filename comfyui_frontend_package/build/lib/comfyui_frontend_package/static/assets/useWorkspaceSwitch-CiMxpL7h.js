import "./rolldown-runtime-w0pxe0c8.js";
import { f as storeToRefs } from "./vendor-vue-core-lEb6pQ7x.js";
import { Ki as useTeamWorkspaceStore } from "./promotionUtils-RbTs6TVG.js";
//#region src/platform/workspace/composables/useWorkspaceSwitch.ts
function useWorkspaceSwitch() {
	const workspaceStore = useTeamWorkspaceStore();
	const { activeWorkspace } = storeToRefs(workspaceStore);
	async function switchWorkspace(workspaceId) {
		if (activeWorkspace.value?.id === workspaceId) return true;
		try {
			await workspaceStore.switchWorkspace(workspaceId);
			return true;
		} catch {
			return false;
		}
	}
	return { switchWorkspace };
}
//#endregion
export { useWorkspaceSwitch as t };

//# sourceMappingURL=useWorkspaceSwitch-CiMxpL7h.js.map
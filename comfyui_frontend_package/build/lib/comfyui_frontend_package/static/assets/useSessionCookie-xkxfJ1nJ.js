import "./rolldown-runtime-w0pxe0c8.js";
import { Ji as useAuthStore } from "./promotionUtils-RbTs6TVG.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { n as useFeatureFlags } from "./useFeatureFlags-BjrlE-sm.js";
import { r as api } from "./api-nNRZeCUN.js";
//#region src/platform/auth/session/useSessionCookie.ts
/**
* Session cookie management for cloud authentication.
* Creates and deletes session cookies on the ComfyUI server.
*/
var useSessionCookie = () => {
	const createSessionWithHeader = async (authHeader) => {
		return await fetch(api.apiURL("/auth/session"), {
			method: "POST",
			credentials: "include",
			headers: {
				...authHeader,
				"Content-Type": "application/json"
			}
		});
	};
	const readSessionError = async (response) => {
		const message = (await response.json().catch(() => null))?.message;
		return typeof message === "string" ? message : response.statusText;
	};
	const getFirebaseSessionHeaderOrThrow = async () => {
		const firebaseToken = await useAuthStore().getIdToken();
		if (!firebaseToken) throw new Error("No Firebase token available for session creation");
		return { Authorization: `Bearer ${firebaseToken}` };
	};
	/**
	* Creates or refreshes the session cookie.
	* Called after login and on token refresh.
	*
	* When team_workspaces_enabled is true, uses Firebase token directly
	* (since getAuthHeader() returns workspace token which shouldn't be used for session creation).
	* When disabled, uses getAuthHeader() for backward compatibility.
	*/
	const createSession = async () => {
		if (!isCloud) return;
		const { flags } = useFeatureFlags();
		try {
			const authStore = useAuthStore();
			let authHeader;
			if (flags.teamWorkspacesEnabled) {
				const firebaseToken = await authStore.getIdToken();
				if (!firebaseToken) {
					console.warn("Failed to create session cookie:", "No Firebase token available for session creation");
					return;
				}
				authHeader = { Authorization: `Bearer ${firebaseToken}` };
			} else {
				const header = await authStore.getAuthHeader();
				if (!header) {
					console.warn("Failed to create session cookie:", "No auth header available for session creation");
					return;
				}
				authHeader = header;
			}
			const response = await createSessionWithHeader(authHeader);
			if (!response.ok) console.warn("Failed to create session cookie:", await readSessionError(response));
		} catch (error) {
			console.warn("Failed to create session cookie:", error);
		}
	};
	const createSessionOrThrow = async () => {
		if (!isCloud) return;
		const response = await createSessionWithHeader(await getFirebaseSessionHeaderOrThrow());
		if (!response.ok) throw new Error(await readSessionError(response));
	};
	/**
	* Deletes the session cookie.
	* Called on logout.
	*/
	const deleteSession = async () => {
		if (!isCloud) return;
		try {
			const response = await fetch(api.apiURL("/auth/session"), {
				method: "DELETE",
				credentials: "include"
			});
			if (!response.ok) console.warn("Failed to delete session cookie:", await readSessionError(response));
		} catch (error) {
			console.warn("Failed to delete session cookie:", error);
		}
	};
	return {
		createSession,
		createSessionOrThrow,
		deleteSession
	};
};
//#endregion
export { useSessionCookie as t };

//# sourceMappingURL=useSessionCookie-xkxfJ1nJ.js.map
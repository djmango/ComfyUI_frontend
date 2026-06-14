import "./rolldown-runtime-w0pxe0c8.js";
import { Rn as useExtensionService } from "./promotionUtils-RbTs6TVG.js";
import { n as clearOAuthRequestId } from "./oauthState-BCY4VkxE.js";
import { t as useSessionCookie } from "./useSessionCookie-xkxfJ1nJ.js";
//#region src/extensions/core/cloudSessionCookie.ts
/**
* Cloud-only extension that manages session cookies for authentication.
* Creates session cookie on login, refreshes it when token refreshes, and deletes on logout.
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.SessionCookie",
	onAuthUserResolved: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthTokenRefreshed: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthUserLogout: async () => {
		clearOAuthRequestId();
		const { deleteSession } = useSessionCookie();
		await deleteSession();
	}
});
//#endregion

//# sourceMappingURL=cloudSessionCookie-m8ujigWj.js.map
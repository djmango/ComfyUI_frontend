import "./rolldown-runtime-w0pxe0c8.js";
import { A as computed, At as readonly, jt as ref, kt as reactive } from "./vendor-vue-core-lEb6pQ7x.js";
import { t as isCloud } from "./types-LUZjNlbK.js";
import { B as useStorage } from "./vendor-vueuse-B9Hj6YrL.js";
import { B as getDevOverride, r as api } from "./api-nNRZeCUN.js";
//#region src/platform/remoteConfig/remoteConfig.ts
/**
* Remote configuration service
*
* Fetches configuration from the server at runtime, enabling:
* - Feature flags without rebuilding
* - Server-side feature discovery
* - Version compatibility management
* - Avoiding vendor lock-in for native apps
*
* This module is tree-shaken in OSS builds.
*/
/**
* Current load state of remote configuration
*/
var remoteConfigState = ref("unloaded");
/**
* Whether the authenticated config has been loaded.
* Use this to gate access to user-specific feature flags like teamWorkspacesEnabled.
*/
var isAuthenticatedConfigLoaded = computed(() => remoteConfigState.value === "authenticated");
/**
* Reactive remote configuration
* Updated whenever config is loaded from the server
*/
var remoteConfig = ref({});
function configValueOrDefault(remoteConfig, key, defaultValue) {
	return remoteConfig[key] || defaultValue;
}
var cachedTeamWorkspacesEnabled = useStorage("team_workspaces_enabled", void 0);
//#endregion
//#region src/composables/useFeatureFlags.ts
/**
* Known server feature flags (top-level, not extensions)
*/
var ServerFeatureFlag = /* @__PURE__ */ function(ServerFeatureFlag) {
	ServerFeatureFlag["SUPPORTS_PREVIEW_METADATA"] = "supports_preview_metadata";
	ServerFeatureFlag["MAX_UPLOAD_SIZE"] = "max_upload_size";
	ServerFeatureFlag["MANAGER_SUPPORTS_V4"] = "extension.manager.supports_v4";
	ServerFeatureFlag["MODEL_UPLOAD_BUTTON_ENABLED"] = "model_upload_button_enabled";
	ServerFeatureFlag["ASSET_RENAME_ENABLED"] = "asset_rename_enabled";
	ServerFeatureFlag["PRIVATE_MODELS_ENABLED"] = "private_models_enabled";
	ServerFeatureFlag["ONBOARDING_SURVEY_ENABLED"] = "onboarding_survey_enabled";
	ServerFeatureFlag["LINEAR_TOGGLE_ENABLED"] = "linear_toggle_enabled";
	ServerFeatureFlag["TEAM_WORKSPACES_ENABLED"] = "team_workspaces_enabled";
	ServerFeatureFlag["USER_SECRETS_ENABLED"] = "user_secrets_enabled";
	ServerFeatureFlag["NODE_REPLACEMENTS"] = "node_replacements";
	ServerFeatureFlag["NODE_LIBRARY_ESSENTIALS_ENABLED"] = "node_library_essentials_enabled";
	ServerFeatureFlag["WORKFLOW_SHARING_ENABLED"] = "workflow_sharing_enabled";
	ServerFeatureFlag["COMFYHUB_UPLOAD_ENABLED"] = "comfyhub_upload_enabled";
	ServerFeatureFlag["COMFYHUB_PROFILE_GATE_ENABLED"] = "comfyhub_profile_gate_enabled";
	ServerFeatureFlag["SHOW_SIGNIN_BUTTON"] = "show_signin_button";
	ServerFeatureFlag["UNIFIED_CLOUD_AUTH"] = "unified_cloud_auth";
	return ServerFeatureFlag;
}({});
/**
* Resolves a feature flag value with dev override > remoteConfig > serverFeature priority.
*/
function resolveFlag(flagKey, remoteConfigValue, defaultValue) {
	const override = /* @__PURE__ */ getDevOverride(flagKey);
	if (override !== void 0) return override;
	return remoteConfigValue ?? api.getServerFeature(flagKey, defaultValue);
}
/**
* Composable for reactive access to server-side feature flags
*/
function useFeatureFlags() {
	const flags = reactive({
		get supportsPreviewMetadata() {
			return api.getServerFeature("supports_preview_metadata");
		},
		get maxUploadSize() {
			return api.getServerFeature("max_upload_size");
		},
		get supportsManagerV4() {
			return api.getServerFeature("extension.manager.supports_v4");
		},
		get modelUploadButtonEnabled() {
			return resolveFlag("model_upload_button_enabled", remoteConfig.value.model_upload_button_enabled, false);
		},
		get assetRenameEnabled() {
			return resolveFlag("asset_rename_enabled", remoteConfig.value.asset_rename_enabled, false);
		},
		get privateModelsEnabled() {
			return resolveFlag("private_models_enabled", remoteConfig.value.private_models_enabled, false);
		},
		get onboardingSurveyEnabled() {
			return resolveFlag("onboarding_survey_enabled", remoteConfig.value.onboarding_survey_enabled, false);
		},
		get linearToggleEnabled() {
			return resolveFlag("linear_toggle_enabled", remoteConfig.value.linear_toggle_enabled, false);
		},
		/**
		* Whether team workspaces feature is enabled.
		* IMPORTANT: Returns false until authenticated remote config is loaded.
		* This ensures we never use workspace tokens when the feature is disabled,
		* and prevents race conditions during initialization.
		*/
		get teamWorkspacesEnabled() {
			const override = /* @__PURE__ */ getDevOverride("team_workspaces_enabled");
			if (override !== void 0) return override;
			if (!isCloud) return false;
			if (!isAuthenticatedConfigLoaded.value) return cachedTeamWorkspacesEnabled.value ?? false;
			return remoteConfig.value.team_workspaces_enabled ?? api.getServerFeature("team_workspaces_enabled", false);
		},
		get userSecretsEnabled() {
			return resolveFlag("user_secrets_enabled", remoteConfig.value.user_secrets_enabled, false);
		},
		get nodeReplacementsEnabled() {
			return api.getServerFeature("node_replacements", false);
		},
		get nodeLibraryEssentialsEnabled() {
			return remoteConfig.value.node_library_essentials_enabled ?? api.getServerFeature("node_library_essentials_enabled", false);
		},
		get workflowSharingEnabled() {
			return resolveFlag("workflow_sharing_enabled", remoteConfig.value.workflow_sharing_enabled, false);
		},
		get comfyHubUploadEnabled() {
			return resolveFlag("comfyhub_upload_enabled", remoteConfig.value.comfyhub_upload_enabled, false);
		},
		get comfyHubProfileGateEnabled() {
			return resolveFlag("comfyhub_profile_gate_enabled", remoteConfig.value.comfyhub_profile_gate_enabled, false);
		},
		get showSignInButton() {
			return api.getServerFeature("show_signin_button", void 0);
		},
		get unifiedCloudAuthEnabled() {
			return resolveFlag("unified_cloud_auth", remoteConfig.value.unified_cloud_auth, false);
		}
	});
	const featureFlag = (featurePath, defaultValue) => computed(() => api.getServerFeature(featurePath, defaultValue));
	return {
		flags: readonly(flags),
		featureFlag
	};
}
//#endregion
export { remoteConfig as a, configValueOrDefault as i, useFeatureFlags as n, remoteConfigState as o, cachedTeamWorkspacesEnabled as r, ServerFeatureFlag as t };

//# sourceMappingURL=useFeatureFlags-BjrlE-sm.js.map
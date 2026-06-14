import "./rolldown-runtime-w0pxe0c8.js";
import { C as useImage } from "./vendor-vueuse-B9Hj6YrL.js";
import { x as isCivitaiUrl } from "./formatUtil-DYCY4wm_.js";
//#region src/platform/assets/utils/assetMetadataUtils.ts
/**
* Type-safe utilities for extracting metadata from assets.
* These utilities check user_metadata first, then metadata, then fallback.
*/
/**
* Helper to get a string property from user_metadata or metadata
*/
function getStringProperty(asset, key) {
	const userValue = asset.user_metadata?.[key];
	if (typeof userValue === "string") return userValue;
	const metaValue = asset.metadata?.[key];
	if (typeof metaValue === "string") return metaValue;
}
/**
* Safely extracts string description from asset metadata
* Checks user_metadata first, then metadata, then returns null
* @param asset - The asset to extract description from
* @returns The description string or null if not present/not a string
*/
function getAssetDescription(asset) {
	return getStringProperty(asset, "description") ?? null;
}
/**
* Extracts base models as an array from asset metadata
* Checks user_metadata first, then metadata, then returns empty array
* @param asset - The asset to extract base models from
* @returns Array of base model strings
*/
function getAssetBaseModels(asset) {
	const baseModel = asset.user_metadata?.base_model ?? asset.metadata?.base_model;
	if (Array.isArray(baseModel)) return baseModel.filter((m) => typeof m === "string");
	if (typeof baseModel === "string" && baseModel) return [baseModel];
	return [];
}
/**
* Gets the display name for an asset
* Checks user_metadata.name, then metadata.name, then display_name, then asset.name
* @param asset - The asset to get display name from
* @returns The display name
*/
function getAssetDisplayName(asset) {
	return getStringProperty(asset, "name") || asset.display_name || asset.name;
}
/**
* Constructs source URL from asset's source_arn
* @param asset - The asset to extract source URL from
* @returns The source URL or null if not present/parseable
*/
function getAssetSourceUrl(asset) {
	if (typeof asset.metadata?.repo_url === "string") return asset.metadata.repo_url;
	const sourceArn = asset.metadata?.source_arn ?? asset.user_metadata?.source_arn;
	if (typeof sourceArn !== "string") return null;
	const civitaiMatch = sourceArn.match(/^civitai:model:(\d+):version:(\d+)(?::file:\d+)?$/);
	if (civitaiMatch) {
		const [, modelId, versionId] = civitaiMatch;
		return `https://civitai.com/models/${modelId}?modelVersionId=${versionId}`;
	}
	return null;
}
/**
* Extracts trigger phrases from asset metadata
* Checks user_metadata first, then metadata, then returns empty array
* @param asset - The asset to extract trigger phrases from
* @returns Array of trigger phrases
*/
function getAssetTriggerPhrases(asset) {
	const phrases = asset.user_metadata?.trained_words ?? asset.metadata?.trained_words;
	if (Array.isArray(phrases)) return phrases.filter((p) => typeof p === "string");
	if (typeof phrases === "string") return [phrases];
	return [];
}
/**
* Extracts additional tags from asset user_metadata
* @param asset - The asset to extract tags from
* @returns Array of user-defined tags
*/
function getAssetAdditionalTags(asset) {
	const tags = asset.user_metadata?.additional_tags;
	if (Array.isArray(tags)) return tags.filter((t) => typeof t === "string");
	return [];
}
/**
* Determines the source name from a URL
* @param url - The source URL
* @returns Human-readable source name
*/
function getSourceName(url) {
	if (isCivitaiUrl(url)) return "Civitai";
	try {
		const hostname = new URL(url).hostname.toLowerCase();
		if (hostname === "huggingface.co" || hostname.endsWith(".huggingface.co")) return "Hugging Face";
	} catch {}
	return "Source";
}
/**
* Extracts the model type from asset tags
* @param asset - The asset to extract model type from
* @returns The model type string or null if not present
*/
function getAssetModelType(asset) {
	return asset.tags?.find((tag) => tag && tag !== "models") ?? null;
}
/**
* Extracts user description from asset user_metadata
* @param asset - The asset to extract user description from
* @returns The user description string or empty string if not present
*/
function getAssetUserDescription(asset) {
	return typeof asset.user_metadata?.user_description === "string" ? asset.user_metadata.user_description : "";
}
/**
* Gets the filename for an asset with fallback chain
* Checks user_metadata.filename first, then metadata.filename, then asset.name.
* Use this for serialized/identifier contexts (workflow widget values,
* filename schema validation, missing-model matching) where we need the
* canonical filename and MUST NOT substitute a display-only string.
*/
function getAssetFilename(asset) {
	return getStringProperty(asset, "filename") ?? asset.name;
}
/**
* Gets the human-readable filename to render in UI surfaces.
* Fallback chain: user_metadata.filename → metadata.filename →
* asset.display_name → asset.name.
*
* `display_name` is populated by queue output mappers in Cloud where
* `asset.name` is a content hash. Use this helper for labels/titles only;
* for serialized identifiers use {@link getAssetFilename}.
*/
function getAssetDisplayFilename(asset) {
	return getStringProperty(asset, "filename") ?? asset.display_name ?? asset.name;
}
/**
* Gets the title to render on an asset browser card / delete confirmation.
* Prefers a user-curated name (user_metadata.name / metadata.name) when it
* actually differs from asset.name, so a user-renamed model keeps its
* display name. Falls through to {@link getAssetDisplayFilename} when the
* curated name is absent or equal to asset.name (Cloud hash case).
*/
function getAssetCardTitle(asset) {
	const curatedName = getStringProperty(asset, "name");
	if (curatedName && curatedName !== asset.name) return curatedName;
	return getAssetDisplayFilename(asset);
}
/**
* Returns the filename component the cloud `/api/view` endpoint resolves
* for this asset — `hash` when present (cloud assets are hash-keyed
* in storage), otherwise `asset.name`. Use this when constructing widget
* values or media URLs that must round-trip through the view endpoint.
*/
function getAssetUrlFilename(asset) {
	return asset.hash ?? asset.name;
}
//#endregion
//#region src/composables/useImageQuiet.ts
/**
* `useImage()` that handles load failures quietly.
*
* `useImage()` already surfaces failures via its returned `error` ref (callers
* render a fallback). By default vueuse ALSO forwards the error to
* `globalThis.reportError`, which our error monitoring (Datadog RUM) captures as
* an unhandled error for every broken image — 404'd thumbnails, expired share
* links, in-app browsers that re-fetch in a loop. Broken images are expected,
* not bugs, so handle the failure here instead of letting it surface globally.
* The returned `error` ref behaviour is unchanged.
*
* `asyncStateOptions` is forwarded to `useImage`, so callers can still tune the
* other `useAsyncState` fields; only `onError` is fixed to the quiet default.
*/
function useImageQuiet(options, asyncStateOptions) {
	return useImage(options, {
		...asyncStateOptions,
		onError: () => {}
	});
}
//#endregion
export { getAssetDescription as a, getAssetFilename as c, getAssetTriggerPhrases as d, getAssetUrlFilename as f, getAssetCardTitle as i, getAssetModelType as l, getSourceName as m, getAssetAdditionalTags as n, getAssetDisplayFilename as o, getAssetUserDescription as p, getAssetBaseModels as r, getAssetDisplayName as s, useImageQuiet as t, getAssetSourceUrl as u };

//# sourceMappingURL=useImageQuiet-8o4A_oUF.js.map
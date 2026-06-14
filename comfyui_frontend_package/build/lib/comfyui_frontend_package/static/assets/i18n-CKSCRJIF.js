const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./commands-iIJIZvNF.js","./commands-CNd8pb7g.js","./main-CvQszWat.js","./main-CpnoxeA3.js","./nodeDefs-c7HHV0xd.js","./nodeDefs-Bl2vpgyY.js","./settings-BMsHiZv0.js","./settings-SBB4ueng.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-w0pxe0c8.js";
import { tt as __vitePreload } from "./vendor-primevue-DUHRgx0Y.js";
import { t as createI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { Yt as commands_default } from "./commands-CNd8pb7g.js";
import { Dt as main_default } from "./main-CpnoxeA3.js";
import { xm as nodeDefs_default } from "./nodeDefs-Bl2vpgyY.js";
import { en as settings_default } from "./settings-SBB4ueng.js";
//#region src/locales/localeConfig.ts
var localeFiles = /* @__PURE__ */ Object.assign({
	"./ar/commands.json": () => __vitePreload(() => import("./commands--aEwxX-o.js"), [], import.meta.url),
	"./ar/main.json": () => __vitePreload(() => import("./main-CgkqXeWR.js"), [], import.meta.url),
	"./ar/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-D58_lNHU.js"), [], import.meta.url),
	"./ar/settings.json": () => __vitePreload(() => import("./settings-CYv2n9lH.js"), [], import.meta.url),
	"./en/commands.json": () => __vitePreload(() => import("./commands-iIJIZvNF.js"), __vite__mapDeps([0,1]), import.meta.url),
	"./en/main.json": () => __vitePreload(() => import("./main-CvQszWat.js"), __vite__mapDeps([2,3]), import.meta.url),
	"./en/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-c7HHV0xd.js"), __vite__mapDeps([4,5]), import.meta.url),
	"./en/settings.json": () => __vitePreload(() => import("./settings-BMsHiZv0.js"), __vite__mapDeps([6,7]), import.meta.url),
	"./es/commands.json": () => __vitePreload(() => import("./commands-Dm0XgaRh.js"), [], import.meta.url),
	"./es/main.json": () => __vitePreload(() => import("./main-DPgb8gQp.js"), [], import.meta.url),
	"./es/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-BWQY7qla.js"), [], import.meta.url),
	"./es/settings.json": () => __vitePreload(() => import("./settings-Ckw4bFVJ.js"), [], import.meta.url),
	"./fa/commands.json": () => __vitePreload(() => import("./commands-Dsu42beQ.js"), [], import.meta.url),
	"./fa/main.json": () => __vitePreload(() => import("./main-DwTmuyxk.js"), [], import.meta.url),
	"./fa/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-DziAVixU.js"), [], import.meta.url),
	"./fa/settings.json": () => __vitePreload(() => import("./settings-B_golTvW.js"), [], import.meta.url),
	"./fr/commands.json": () => __vitePreload(() => import("./commands-B3pY2wvR.js"), [], import.meta.url),
	"./fr/main.json": () => __vitePreload(() => import("./main-LKjXU7aQ.js"), [], import.meta.url),
	"./fr/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-DOdmelv3.js"), [], import.meta.url),
	"./fr/settings.json": () => __vitePreload(() => import("./settings-avB8PXFu.js"), [], import.meta.url),
	"./ja/commands.json": () => __vitePreload(() => import("./commands-DEhidoVL.js"), [], import.meta.url),
	"./ja/main.json": () => __vitePreload(() => import("./main-CbfNgbHc.js"), [], import.meta.url),
	"./ja/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-D2lxGchd.js"), [], import.meta.url),
	"./ja/settings.json": () => __vitePreload(() => import("./settings-DeQHpm-g.js"), [], import.meta.url),
	"./ko/commands.json": () => __vitePreload(() => import("./commands-DQQOxtxJ.js"), [], import.meta.url),
	"./ko/main.json": () => __vitePreload(() => import("./main-DfuATKn1.js"), [], import.meta.url),
	"./ko/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-CK3dZjdX.js"), [], import.meta.url),
	"./ko/settings.json": () => __vitePreload(() => import("./settings-DeogyZIM.js"), [], import.meta.url),
	"./pt-BR/commands.json": () => __vitePreload(() => import("./commands-SNBXpwAx.js"), [], import.meta.url),
	"./pt-BR/main.json": () => __vitePreload(() => import("./main-CT_IlCxm.js"), [], import.meta.url),
	"./pt-BR/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-ChaYnEFT.js"), [], import.meta.url),
	"./pt-BR/settings.json": () => __vitePreload(() => import("./settings-CwUIXk-l.js"), [], import.meta.url),
	"./ru/commands.json": () => __vitePreload(() => import("./commands-DsiecyRn.js"), [], import.meta.url),
	"./ru/main.json": () => __vitePreload(() => import("./main-DhIJG6LA.js"), [], import.meta.url),
	"./ru/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-DOpatlAB.js"), [], import.meta.url),
	"./ru/settings.json": () => __vitePreload(() => import("./settings-7vA3MTAP.js"), [], import.meta.url),
	"./tr/commands.json": () => __vitePreload(() => import("./commands-xngMKIj5.js"), [], import.meta.url),
	"./tr/main.json": () => __vitePreload(() => import("./main-4n7Z-iyn.js"), [], import.meta.url),
	"./tr/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-DPxcBDB6.js"), [], import.meta.url),
	"./tr/settings.json": () => __vitePreload(() => import("./settings-Bpu3M8jk.js"), [], import.meta.url),
	"./zh/commands.json": () => __vitePreload(() => import("./commands-BKQ3pOEH.js"), [], import.meta.url),
	"./zh/main.json": () => __vitePreload(() => import("./main-BEChp6cf.js"), [], import.meta.url),
	"./zh/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-BCUAEu8I.js"), [], import.meta.url),
	"./zh/settings.json": () => __vitePreload(() => import("./settings-DzbOg_qL.js"), [], import.meta.url),
	"./zh-TW/commands.json": () => __vitePreload(() => import("./commands-DKIyzIjp.js"), [], import.meta.url),
	"./zh-TW/main.json": () => __vitePreload(() => import("./main-Cbcm48V-.js"), [], import.meta.url),
	"./zh-TW/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-LXSnA7hx.js"), [], import.meta.url),
	"./zh-TW/settings.json": () => __vitePreload(() => import("./settings-DYg77YHn.js"), [], import.meta.url)
});
function loadersFor(locale) {
	return {
		main: localeFiles[`./${locale}/main.json`],
		nodeDefs: localeFiles[`./${locale}/nodeDefs.json`],
		commands: localeFiles[`./${locale}/commands.json`],
		settings: localeFiles[`./${locale}/settings.json`]
	};
}
var localeDefinitions = {
	en: {
		text: "English",
		loaders: null
	},
	zh: {
		text: "中文",
		loaders: loadersFor("zh")
	},
	"zh-TW": {
		text: "繁體中文",
		loaders: loadersFor("zh-TW")
	},
	ru: {
		text: "Русский",
		loaders: loadersFor("ru")
	},
	ja: {
		text: "日本語",
		loaders: loadersFor("ja")
	},
	ko: {
		text: "한국어",
		loaders: loadersFor("ko")
	},
	fr: {
		text: "Français",
		loaders: loadersFor("fr")
	},
	es: {
		text: "Español",
		loaders: loadersFor("es")
	},
	ar: {
		text: "عربي",
		loaders: loadersFor("ar")
	},
	tr: {
		text: "Türkçe",
		loaders: loadersFor("tr")
	},
	"pt-BR": {
		text: "Português (BR)",
		loaders: loadersFor("pt-BR")
	},
	fa: {
		text: "فارسی",
		loaders: loadersFor("fa")
	}
};
var SUPPORTED_LOCALES = Object.keys(localeDefinitions);
var SUPPORTED_LOCALE_OPTIONS = SUPPORTED_LOCALES.map((value) => ({
	value,
	text: localeDefinitions[value].text
}));
var supportedLocaleByLower = new Map(SUPPORTED_LOCALES.map((locale) => [locale.toLowerCase(), locale]));
function matchSingle(candidate) {
	const normalized = candidate.toLowerCase();
	return supportedLocaleByLower.get(normalized) ?? supportedLocaleByLower.get(normalized.split("-")[0]);
}
function resolveSupportedLocale(input) {
	const candidates = Array.isArray(input) ? input : input ? [input] : [];
	for (const candidate of candidates) {
		if (!candidate) continue;
		const matched = matchSingle(candidate);
		if (matched) return matched;
	}
	return "en";
}
function getDefaultLocale() {
	return resolveSupportedLocale(navigator.languages);
}
//#endregion
//#region src/i18n.ts
function buildLocale(main, nodes, commands, settings) {
	return {
		...main,
		nodeDefs: nodes,
		commands,
		settings
	};
}
var loadedLocales = new Set(["en"]);
var loadingLocales = /* @__PURE__ */ new Map();
var customNodesI18nData = {};
/**
* Dynamically load a shipped locale's bundles (nodeDefs, commands, settings).
* Callers must pre-resolve untrusted input via `resolveSupportedLocale` or
* `setActiveLocale`, which is the boundary helper for arbitrary input.
*/
async function loadLocale(locale) {
	if (loadedLocales.has(locale)) return;
	const existingLoad = loadingLocales.get(locale);
	if (existingLoad) {
		await existingLoad;
		return;
	}
	const loaders = localeDefinitions[locale].loaders;
	if (!loaders) return;
	const loadPromise = (async () => {
		try {
			const [main, nodes, commands, settings] = await Promise.all([
				loaders.main(),
				loaders.nodeDefs(),
				loaders.commands(),
				loaders.settings()
			]);
			const messages = buildLocale(main.default, nodes.default, commands.default, settings.default);
			i18n.global.setLocaleMessage(locale, messages);
			loadedLocales.add(locale);
			if (customNodesI18nData[locale]) i18n.global.mergeLocaleMessage(locale, customNodesI18nData[locale]);
		} catch (error) {
			console.error(`Failed to load locale "${locale}":`, error);
			throw error;
		} finally {
			loadingLocales.delete(locale);
		}
	})();
	loadingLocales.set(locale, loadPromise);
	await loadPromise;
}
/**
* Boundary helper for arbitrary locale input (settings, browser preferences):
* resolves to a shipped tag, loads it, and updates the active locale.
*
* Returns the resolved tag so callers can detect a clamp (e.g. a stale stored
* `Comfy.Locale` from an older build) and self-heal persisted state.
*/
async function setActiveLocale(input) {
	const resolved = resolveSupportedLocale(input);
	if (typeof input === "string" && input && input !== resolved) console.warn(`Locale "${input}" not shipped; using "${resolved}"`);
	await loadLocale(resolved);
	i18n.global.locale.value = resolved;
	return resolved;
}
/**
* Stores the data for later use when locales are lazily loaded,
* and immediately merges data for already-loaded locales.
*/
function mergeCustomNodesI18n(i18nData) {
	for (const key of Object.keys(customNodesI18nData)) delete customNodesI18nData[key];
	Object.assign(customNodesI18nData, i18nData);
	for (const [locale, message] of Object.entries(i18nData)) if (loadedLocales.has(locale)) i18n.global.mergeLocaleMessage(locale, message);
}
var messages = { en: buildLocale(main_default, nodeDefs_default, commands_default, settings_default) };
var i18n = createI18n({
	legacy: false,
	locale: getDefaultLocale(),
	fallbackLocale: "en",
	escapeParameter: true,
	messages,
	missingWarn: /^(?!settings\.Comfy_Locale\.options\.).+/,
	fallbackWarn: /^(?!settings\.Comfy_Locale\.options\.).+/
});
/** Convenience shorthand: i18n.global */
var { t, te, d } = i18n.global;
var { tm } = i18n.global;
/**
* Safe translation function that returns the fallback message if the key is not found.
*
* @param key - The key to translate.
* @param fallbackMessage - The fallback message to use if the key is not found.
*/
function st(key, fallbackMessage) {
	return te(key) ? t(key) : fallbackMessage;
}
/**
* Safe raw translation function for strings that may contain i18n syntax.
*
* @param key - The key for the raw locale message.
* @param fallbackMessage - The fallback message to use if the key is not found
* or the locale message is not a string.
*/
function stRaw(key, fallbackMessage) {
	if (!te(key)) return fallbackMessage;
	const message = tm(key);
	return typeof message === "string" ? message : fallbackMessage;
}
//#endregion
export { setActiveLocale as a, t as c, getDefaultLocale as d, resolveSupportedLocale as f, mergeCustomNodesI18n as i, te as l, i18n as n, st as o, loadLocale as r, stRaw as s, d as t, SUPPORTED_LOCALE_OPTIONS as u };

//# sourceMappingURL=i18n-CKSCRJIF.js.map
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onboardingCloudRoutes-zRdggZj8.js","./rolldown-runtime-w0pxe0c8.js","./vendor-primevue-DUHRgx0Y.js","./vendor-vue-core-lEb6pQ7x.js","./oauthState-BCY4VkxE.js","./GraphView-CecK7kah.js","./_plugin-vue_export-helper-BKnUacfG.js","./promotionUtils-RbTs6TVG.js","./vendor-other-DBdmkK1j.js","./vendor-firebase-C7k8AidI.js","./vendor-three-1JIRRquj.js","./vendor-tiptap-BOgG_8hl.js","./vendor-zod-cnyoNRiP.js","./vendor-reka-ui-DQClbqQd.js","./vendor-i18n-DqMDtj1Y.js","./vendor-sentry-CJqm_Nmo.js","./vendor-vueuse-B9Hj6YrL.js","./vendor-axios-DFahpQvv.js","./vendor-markdown-DaMlfZYH.js","./vendor-yjs-BiH7xZSO.js","./api-nNRZeCUN.js","./types-LUZjNlbK.js","./toastStore-DLjER1Ce.js","./formatUtil-DYCY4wm_.js","./src-nrRWoNk5.js","./downloadUtil-DQuLILFB.js","./i18n-CKSCRJIF.js","./commands-CNd8pb7g.js","./main-CpnoxeA3.js","./nodeDefs-Bl2vpgyY.js","./settings-SBB4ueng.js","./WaveAudioPlayer-DjtG6J05.js","./Button-B6t0hT7N.js","./Slider-Bbbvwjli.js","./DialogHeader-C-hI2Gvk.js","./dialogStore-NFHibcWZ.js","./Loader-BhTdgZW2.js","./Popover-Dr5f5HTY.js","./ColorPicker-BogdWVAu.js","./SelectValue-DA-RVt3I.js","./Input-0QCKBTLy.js","./extensionStore-DLGBp7MW.js","./useErrorHandling-DVmwK9Br.js","./useExternalLink-C1LT460D.js","./envUtil-DPYJeo7H.js","./useFeatureFlags-BjrlE-sm.js","./useImageQuiet-8o4A_oUF.js","./VideoPlayOverlay-CIUc_QTf.js","./useFeatureUsageTracker-CQLF2p3J.js","./telemetry-egVpDhez.js","./userStore-Cm9ERWXg.js","./widgetTypes-BmUFT8-p.js","./markdownRendererUtil-DtxY94tK.js","./useConflictDetection-oEMPXr1B.js","./errorUtil-CeVwjeWE.js","./keybindingService-nAb1OISg.js","./ScrubableNumberInput-AX66-xFb.js","./UserAvatar-BgEC6oi2.js","./curveUtils-CRNKHQZi.js","./GlobalToast-DEWEbkXV.js","./TopbarBadge-CsYd8yGI.js","./graphHasMissingNodes-BfM_KPWR.js","./useClickDragGuard-HoatuWxi.js","./SubscribeButton-CAwgBtpx.js","./SubscribeToRun-DfLgi_Vb.js","./missingModelDownload-DJghH-kA.js","./config-D7rQudX6.js","./releaseStore-BRdHVkew.js","./workflowShareService-CwnsGn0S.js","./WorkspaceProfilePic-DNYUdXQc.js","./useWorkspaceSwitch-CiMxpL7h.js","./layout-DqSb5RDy.js","./serverConfigStore-DYCZnwVl.js","./vendor-other-DODGPXtn.css","./promotionUtils-CTR1rhL9.css","./useConflictDetection-BulFL8Bd.css","./GraphView-DCkkOaPZ.css","./UserSelectView-CgQn5RTT.js","./auth-Crs6FPK9.js","./auth-DeQZht7v.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-w0pxe0c8.js";
import { N as script, R as script$1, at as ConfirmationService, lt as index, nt as Tooltip, ot as PrimeVue, rt as ToastService, tt as __vitePreload, ut as definePreset } from "./vendor-primevue-DUHRgx0Y.js";
import { i as captureMessage, t as init } from "./vendor-sentry-CJqm_Nmo.js";
import { b as initializeApp } from "./vendor-firebase-C7k8AidI.js";
import { A as computed, Bt as unref, Gt as toDisplayString, Ht as normalizeClass, I as createSlots, M as createBlock, N as createCommentVNode, P as createElementBlock, R as createTextVNode, T as Fragment, V as defineComponent, Y as mergeProps, a as createWebHistory, at as renderList, bt as withCtx, et as onMounted, f as storeToRefs, g as createApp, gt as watch, i as createWebHashHistory, j as createBaseVNode, jt as ref, l as createPinia, lt as resolveDynamicComponent, ot as renderSlot, r as createRouter, rt as openBlock, st as resolveComponent, xt as withDirectives, z as createVNode } from "./vendor-vue-core-lEb6pQ7x.js";
import { Tt as VueFireAuth, Z as isEqual, wt as VueFire } from "./vendor-other-DBdmkK1j.js";
import { $i as capturePreservedQuery, Ha as LGraph, Hi as useSubscriptionDialog, Ja as resolveConcretePromotedWidget, Ji as useAuthStore, Ka as parseProxyWidgetErrorQuarantine, Ki as useTeamWorkspaceStore, Lo as usePreviewExposureStore, Qa as isWidgetValue, Qi as PRESERVED_QUERY_NAMESPACES, Ro as nextUniqueName, S as app$1, Xo as setAssertReporter, Yo as isPromotedWidgetView, Z as useDialogService, at as useWorkspaceStore, c as isPreviewPseudoWidget, dt as DialogFooter_default, i as getPromotableWidgets, qa as parseProxyWidgets, r as findHostInputForPromotion, t as autoExposeKnownPreviewNodes, ta as hydratePreservedQuery } from "./promotionUtils-RbTs6TVG.js";
import { n as isDesktop, t as isCloud } from "./types-LUZjNlbK.js";
import { $ as until, K as promiseTimeout, x as useFavicon } from "./vendor-vueuse-B9Hj6YrL.js";
import { a as remoteConfig, n as useFeatureFlags } from "./useFeatureFlags-BjrlE-sm.js";
import { n as useI18n } from "./vendor-i18n-DqMDtj1Y.js";
import { n as i18n } from "./i18n-CKSCRJIF.js";
import "./toastStore-DLjER1Ce.js";
import { t as useTelemetry } from "./telemetry-egVpDhez.js";
import { t as Button_default } from "./Button-B6t0hT7N.js";
import { t as useDialogStore } from "./dialogStore-NFHibcWZ.js";
import { d as DialogOverlay_default, f as DialogContent_default, l as DialogTitle_default, n as DialogClose_default, p as Dialog_default, t as DialogHeader_default, u as DialogPortal_default } from "./DialogHeader-C-hI2Gvk.js";
import { t as electronAPI } from "./envUtil-DPYJeo7H.js";
import { t as useUserStore } from "./userStore-Cm9ERWXg.js";
import { t as refreshRemoteConfig } from "./refreshRemoteConfig-vHRXaeGq.js";
import { t as captureOAuthRequestId } from "./oauthState-BCY4VkxE.js";
import { m as useBootstrapStore, p as config_default, t as useConflictDetection } from "./useConflictDetection-oEMPXr1B.js";
import { t as vRekaZIndex } from "./vRekaZIndex-DuArSj84.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/config/firebase.ts
var BUILD_TIME_CONFIG = {
	apiKey: "AIzaSyDa_YMeyzV0SkVe92vBZ1tVikWBmOU5KVE",
	authDomain: "dreamboothy-dev.firebaseapp.com",
	databaseURL: "https://dreamboothy-dev-default-rtdb.firebaseio.com",
	projectId: "dreamboothy-dev",
	storageBucket: "dreamboothy-dev.appspot.com",
	messagingSenderId: "313257147182",
	appId: "1:313257147182:web:be38f6ebf74345fc7618bf",
	measurementId: "G-YEVSMYXSPY"
};
/**
* Returns the Firebase configuration for the current environment.
* - Cloud builds use runtime configuration delivered via feature flags
* - OSS / localhost builds fall back to the build-time config determined by __USE_PROD_CONFIG__
*/
function getFirebaseConfig() {
	if (!isCloud) return BUILD_TIME_CONFIG;
	return remoteConfig.value.firebase_config ?? BUILD_TIME_CONFIG;
}
//#endregion
//#region src/core/graph/subgraph/migration/proxyWidgetMigration.ts
var LEGACY_PROXY_WIDGET_PREFIX_PATTERN = /^\s*(\d+)\s*:\s*(.+)$/;
function stripLegacyPrefixes(sourceWidgetName) {
	let remaining = sourceWidgetName;
	let deepestPrefixId;
	while (true) {
		const match = LEGACY_PROXY_WIDGET_PREFIX_PATTERN.exec(remaining);
		if (!match) return {
			sourceWidgetName: remaining,
			deepestPrefixId
		};
		deepestPrefixId = match[1];
		remaining = match[2];
	}
}
function canResolveLegacyProxy(hostNode, sourceNodeId, widgetName) {
	return resolveConcretePromotedWidget(hostNode, sourceNodeId, widgetName).status === "resolved";
}
function normalizeLegacyProxyWidgetEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId) {
	if (canResolveLegacyProxy(hostNode, sourceNodeId, sourceWidgetName)) return {
		sourceNodeId,
		sourceWidgetName,
		...disambiguatingSourceNodeId && { disambiguatingSourceNodeId }
	};
	const stripped = stripLegacyPrefixes(sourceWidgetName);
	const patchDisambiguatingSourceNodeId = stripped.deepestPrefixId ?? disambiguatingSourceNodeId;
	return {
		sourceNodeId,
		sourceWidgetName: stripped.sourceWidgetName,
		...patchDisambiguatingSourceNodeId && { disambiguatingSourceNodeId: patchDisambiguatingSourceNodeId }
	};
}
function resolveSourceWidget(sourceNode, sourceWidgetName, disambiguatingSourceNodeId) {
	const widgets = sourceNode.widgets;
	if (widgets && disambiguatingSourceNodeId !== void 0) {
		const byDisambiguator = widgets.find((w) => isPromotedWidgetView(w) && w.sourceNodeId === disambiguatingSourceNodeId && w.sourceWidgetName === sourceWidgetName);
		if (byDisambiguator) return byDisambiguator;
		const byName = widgets.find((w) => !isPromotedWidgetView(w) && w.name === sourceWidgetName);
		if (byName) return byName;
	}
	return widgets?.find((w) => w.name === sourceWidgetName) ?? getPromotableWidgets(sourceNode).find((w) => w.name === sourceWidgetName);
}
var PRIMITIVE_NODE_TYPE = "PrimitiveNode";
var QUARANTINE_PROPERTY = "proxyWidgetErrorQuarantine";
var QUARANTINE_VERSION = 1;
var PROXY_BYPASS_MARKER_PROPERTY = "proxyBypassedToSubgraphInput";
function flushProxyWidgetMigration(args) {
	const { hostNode, hostWidgetValues } = args;
	const tuples = parseProxyWidgets(hostNode.properties.proxyWidgets);
	if (tuples.length === 0) return;
	const cohort = tuples.map(([sourceNodeId, sourceWidgetName, disambiguator]) => normalizeLegacyProxyWidgetEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguator));
	const pending = cohort.map((normalized, index) => {
		const { value, isHole } = pickHostValue(hostWidgetValues, index);
		return {
			normalized,
			hostValue: value,
			isHole,
			plan: classify(hostNode, normalized, cohort)
		};
	});
	const previewStore = usePreviewExposureStore();
	const quarantineToAppend = [];
	const primitiveCohorts = /* @__PURE__ */ new Map();
	for (const entry of pending) switch (entry.plan.kind) {
		case "primitiveBypass": {
			const c = primitiveCohorts.get(entry.plan.primitiveNodeId) ?? [];
			c.push(entry);
			primitiveCohorts.set(entry.plan.primitiveNodeId, c);
			break;
		}
		case "alreadyLinked": {
			const r = repairAlreadyLinked(hostNode, entry, entry.plan.subgraphInputName);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "createSubgraphInput": {
			const r = repairCreateSubgraphInput(hostNode, entry, entry.plan.sourceWidgetName);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "previewExposure": {
			const r = migratePreview(hostNode, entry, previewStore, entry.plan);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "quarantine":
			quarantineToAppend.push(quarantineFor(entry, entry.plan.reason));
			break;
	}
	for (const c of primitiveCohorts.values()) {
		const r = repairPrimitive(hostNode, c);
		if (!r.ok) for (const e of c) quarantineToAppend.push(quarantineFor(e, r.reason));
	}
	if (quarantineToAppend.length > 0) appendQuarantine(hostNode, quarantineToAppend);
	delete hostNode.properties.proxyWidgets;
}
function pickHostValue(hostWidgetValues, index) {
	if (hostWidgetValues === void 0 || index < 0 || index >= hostWidgetValues.length || !Object.hasOwn(hostWidgetValues, index)) return {
		value: void 0,
		isHole: true
	};
	const raw = hostWidgetValues[index];
	if (!isWidgetValue(raw)) return {
		value: void 0,
		isHole: true
	};
	return {
		value: raw,
		isHole: false
	};
}
function collectTargetsStrict(hostNode, primitiveNode) {
	const subgraph = hostNode.subgraph;
	const linkIds = (primitiveNode.outputs?.[0])?.links ?? [];
	const targets = [];
	for (const linkId of linkIds) {
		const link = subgraph.links.get(linkId);
		if (!link) return void 0;
		targets.push({
			targetNodeId: link.target_id,
			targetSlot: link.target_slot
		});
	}
	return targets;
}
function collectTargetsSkippingDangling(hostNode, primitiveNode) {
	const subgraph = hostNode.subgraph;
	return (primitiveNode.outputs?.[0]?.links ?? []).flatMap((linkId) => {
		const link = subgraph.links.get(linkId);
		return link ? [{
			targetNodeId: link.target_id,
			targetSlot: link.target_slot
		}] : [];
	});
}
function cohortDuplicatesPrimitive(cohort, primitiveNodeId) {
	return cohort.filter((entry) => entry.sourceNodeId === primitiveNodeId).length >= 2;
}
function classify(hostNode, normalized, cohort) {
	const linkedInput = findHostInputForPromotion(hostNode, normalized.sourceNodeId, normalized.sourceWidgetName);
	if (linkedInput) {
		if (hostNode.inputs.filter((input) => {
			const w = input._widget;
			return !!w && isPromotedWidgetView(w) && w.sourceNodeId === normalized.sourceNodeId && w.sourceWidgetName === normalized.sourceWidgetName;
		}).length > 1) return {
			kind: "quarantine",
			reason: "ambiguousSubgraphInput"
		};
		return {
			kind: "alreadyLinked",
			subgraphInputName: linkedInput.name
		};
	}
	const sourceNode = hostNode.subgraph.getNodeById(normalized.sourceNodeId);
	if (!sourceNode) return {
		kind: "quarantine",
		reason: "missingSourceNode"
	};
	if (sourceNode.type === PRIMITIVE_NODE_TYPE) {
		const bypassedTo = sourceNode.properties?.[PROXY_BYPASS_MARKER_PROPERTY];
		if (typeof bypassedTo === "string") {
			const existingInput = hostNode.inputs.find((input) => input.name === bypassedTo);
			if (existingInput) return {
				kind: "alreadyLinked",
				subgraphInputName: existingInput.name
			};
		}
		const targets = collectTargetsSkippingDangling(hostNode, sourceNode);
		const cohortDuplicated = cohortDuplicatesPrimitive(cohort, normalized.sourceNodeId);
		if (targets.length >= 1 || cohortDuplicated) return {
			kind: "primitiveBypass",
			primitiveNodeId: sourceNode.id,
			sourceWidgetName: normalized.sourceWidgetName,
			targets
		};
		return {
			kind: "quarantine",
			reason: "unlinkedSourceWidget"
		};
	}
	const sourceWidget = resolveSourceWidget(sourceNode, normalized.sourceWidgetName, normalized.disambiguatingSourceNodeId);
	if (!sourceWidget) return {
		kind: "quarantine",
		reason: "missingSourceWidget"
	};
	if (normalized.sourceWidgetName.startsWith("$$") || isPreviewPseudoWidget(sourceWidget)) return {
		kind: "previewExposure",
		sourcePreviewName: normalized.sourceWidgetName
	};
	return {
		kind: "createSubgraphInput",
		sourceWidgetName: normalized.sourceWidgetName
	};
}
function applyHostValue(widget, entry) {
	if (entry.isHole) return;
	if (isPromotedWidgetView(widget) && typeof widget.hydrateHostValue === "function") {
		widget.hydrateHostValue(entry.hostValue);
		return;
	}
	console.error("[proxyWidgetMigration] applyHostValue called with non-promoted widget; refusing to write to shared interior", {
		widgetName: widget.name,
		type: widget.type
	});
}
function addUniqueSubgraphInput(subgraph, baseName, type) {
	const uniqueName = nextUniqueName(baseName, subgraph.inputs.map((input) => input.name));
	return subgraph.addInput(uniqueName, type);
}
function repairAlreadyLinked(hostNode, entry, subgraphInputName) {
	const matches = hostNode.inputs.filter((input) => input.name === subgraphInputName);
	if (matches.length === 0) return {
		ok: false,
		reason: "missingSubgraphInput"
	};
	if (matches.length > 1) return {
		ok: false,
		reason: "ambiguousSubgraphInput"
	};
	const hostInput = matches[0];
	if (!hostInput._widget) return {
		ok: false,
		reason: "missingSubgraphInput"
	};
	applyHostValue(hostInput._widget, entry);
	return {
		ok: true,
		subgraphInputName: hostInput.name
	};
}
function repairCreateSubgraphInput(hostNode, entry, sourceWidgetName) {
	const subgraph = hostNode.subgraph;
	const sourceNode = subgraph.getNodeById(entry.normalized.sourceNodeId);
	if (!sourceNode) return {
		ok: false,
		reason: "missingSourceNode"
	};
	const sourceWidget = resolveSourceWidget(sourceNode, sourceWidgetName, entry.normalized.disambiguatingSourceNodeId);
	if (!sourceWidget) return {
		ok: false,
		reason: "missingSourceWidget"
	};
	const slot = sourceNode.getSlotFromWidget(sourceWidget);
	if (!slot) {
		console.warn("[proxyWidgetMigration] source widget has no backing input slot; quarantining", {
			sourceNodeId: entry.normalized.sourceNodeId,
			sourceWidgetName
		});
		return {
			ok: false,
			reason: "missingSubgraphInput"
		};
	}
	const newSubgraphInput = addUniqueSubgraphInput(subgraph, sourceWidgetName, String(slot.type ?? sourceWidget.type ?? "*"));
	if (slot.label !== void 0) newSubgraphInput.label = slot.label;
	if (!newSubgraphInput.connect(slot, sourceNode)) {
		subgraph.removeInput(newSubgraphInput);
		return {
			ok: false,
			reason: "missingSubgraphInput"
		};
	}
	const hostInput = hostNode.inputs.find((input) => input.name === newSubgraphInput.name);
	if (!hostInput?._widget) return {
		ok: true,
		subgraphInputName: newSubgraphInput.name
	};
	applyHostValue(hostInput._widget, entry);
	return {
		ok: true,
		subgraphInputName: newSubgraphInput.name
	};
}
var PRIMITIVE_FAILED = {
	ok: false,
	reason: "primitiveBypassFailed"
};
function failPrimitive(message, ctx) {
	console.warn(`[proxyWidgetMigration] ${message}`, ctx);
	return PRIMITIVE_FAILED;
}
function userRenamedTitle(primitiveNode) {
	const title = primitiveNode.title;
	return title && title !== PRIMITIVE_NODE_TYPE ? title : void 0;
}
function validateCohort(cohort) {
	const first = cohort[0];
	if (!first || first.plan.kind !== "primitiveBypass") return { ok: false };
	const { primitiveNodeId, sourceWidgetName } = first.plan;
	for (const entry of cohort) if (entry.plan.kind !== "primitiveBypass" || entry.plan.primitiveNodeId !== primitiveNodeId || entry.plan.sourceWidgetName !== sourceWidgetName) return { ok: false };
	const uniqueEntries = [];
	for (const entry of cohort) if (!uniqueEntries.some((k) => isEqual(k.normalized, entry.normalized))) uniqueEntries.push(entry);
	return {
		ok: true,
		primitiveNodeId,
		sourceWidgetName,
		uniqueEntries
	};
}
function rollback(hostNode, primitiveNode, newSubgraphInput, snapshot) {
	if (newSubgraphInput) try {
		hostNode.subgraph.removeInput(newSubgraphInput);
	} catch (e) {
		console.warn("[proxyWidgetMigration] rollback removeInput failed", e);
	}
	for (const link of snapshot) {
		const targetNode = hostNode.subgraph.getNodeById(link.targetNodeId);
		if (!targetNode) continue;
		primitiveNode.connect(link.primitiveSlot, targetNode, link.targetSlot);
	}
}
function repairPrimitive(hostNode, cohort) {
	const validated = validateCohort(cohort);
	if (!validated.ok) return failPrimitive("cohort validation failed", { cohort });
	const subgraph = hostNode.subgraph;
	const primitiveNode = subgraph.getNodeById(validated.primitiveNodeId);
	if (!primitiveNode) return failPrimitive("primitive node missing", validated);
	if (primitiveNode.type !== PRIMITIVE_NODE_TYPE) return failPrimitive("node is not a PrimitiveNode", primitiveNode.type);
	const targets = collectTargetsStrict(hostNode, primitiveNode);
	if (!targets?.length) return failPrimitive("no targets to reconnect", validated);
	const primitiveOutput = primitiveNode.outputs?.[0];
	if (!primitiveOutput) return failPrimitive("primitive has no output");
	const primitiveOutputType = String(primitiveOutput.type ?? "*");
	for (const target of targets) {
		const targetNode = subgraph.getNodeById(target.targetNodeId);
		if (!targetNode) return failPrimitive("target node missing", target);
		const targetSlot = targetNode.inputs?.[target.targetSlot];
		if (!targetSlot) return failPrimitive("target slot missing", target);
		const targetType = String(targetSlot.type ?? "*");
		if (targetType !== primitiveOutputType && targetType !== "*" && primitiveOutputType !== "*") return failPrimitive("target slot type incompatible", {
			target,
			targetType,
			primitiveOutputType
		});
	}
	const baseName = userRenamedTitle(primitiveNode) ?? validated.sourceWidgetName;
	const snapshot = (primitiveOutput.links ?? []).map((id) => subgraph.links.get(id)).filter((l) => l !== void 0).map((l) => ({
		primitiveSlot: l.origin_slot,
		targetNodeId: l.target_id,
		targetSlot: l.target_slot
	}));
	let newSubgraphInput;
	try {
		newSubgraphInput = addUniqueSubgraphInput(subgraph, baseName, primitiveOutputType);
		for (const snap of snapshot) {
			const targetNode = subgraph.getNodeById(snap.targetNodeId);
			if (!targetNode) throw new Error(`target node ${snap.targetNodeId} disappeared mid-mutation`);
			targetNode.disconnectInput(snap.targetSlot, false);
		}
		for (const target of targets) {
			const targetNode = subgraph.getNodeById(target.targetNodeId);
			if (!targetNode) throw new Error(`target node ${target.targetNodeId} disappeared`);
			const targetSlot = targetNode.inputs?.[target.targetSlot];
			if (!targetSlot) throw new Error(`target slot ${target.targetSlot} disappeared`);
			if (!newSubgraphInput.connect(targetSlot, targetNode)) throw new Error("SubgraphInput.connect returned no link");
		}
	} catch (e) {
		rollback(hostNode, primitiveNode, newSubgraphInput, snapshot);
		return failPrimitive("mutation failed; rolled back", { error: e });
	}
	const hostInputWidget = hostNode.inputs.find((input) => input.name === newSubgraphInput.name)?._widget;
	if (hostInputWidget) {
		const valueEntry = validated.uniqueEntries.find((e) => !e.isHole);
		if (valueEntry) applyHostValue(hostInputWidget, valueEntry);
		else {
			const primitiveValue = primitiveNode.widgets?.find((w) => w.name === validated.sourceWidgetName)?.value;
			if (primitiveValue !== void 0) applyHostValue(hostInputWidget, {
				...validated.uniqueEntries[0],
				hostValue: primitiveValue,
				isHole: false
			});
		}
	}
	primitiveNode.properties ??= {};
	primitiveNode.properties[PROXY_BYPASS_MARKER_PROPERTY] = newSubgraphInput.name;
	return {
		ok: true,
		subgraphInputName: newSubgraphInput.name,
		reconnectCount: targets.length
	};
}
function migratePreview(hostNode, entry, store, plan) {
	const sourceNode = hostNode.subgraph.getNodeById(entry.normalized.sourceNodeId);
	if (!sourceNode) return {
		ok: false,
		reason: "missingSourceNode"
	};
	if (!plan.sourcePreviewName.startsWith("$$")) {
		if (!sourceNode.widgets?.find((w) => w.name === plan.sourcePreviewName)) return {
			ok: false,
			reason: "missingSourceWidget"
		};
	}
	const hostNodeLocator = String(hostNode.id);
	const existing = store.getExposures(hostNode.rootGraph.id, hostNodeLocator).find((exposure) => exposure.sourceNodeId === entry.normalized.sourceNodeId && exposure.sourcePreviewName === plan.sourcePreviewName);
	if (existing) return {
		ok: true,
		previewName: existing.name
	};
	return {
		ok: true,
		previewName: store.addExposure(hostNode.rootGraph.id, hostNodeLocator, {
			sourceNodeId: entry.normalized.sourceNodeId,
			sourcePreviewName: plan.sourcePreviewName
		}).name
	};
}
function quarantineFor(entry, reason) {
	const { sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId } = entry.normalized;
	return makeQuarantineEntry({
		originalEntry: disambiguatingSourceNodeId ? [
			sourceNodeId,
			sourceWidgetName,
			disambiguatingSourceNodeId
		] : [sourceNodeId, sourceWidgetName],
		reason,
		hostValue: entry.isHole ? void 0 : entry.hostValue
	});
}
function appendQuarantine(hostNode, entries) {
	if (entries.length === 0) return;
	const merged = [...parseProxyWidgetErrorQuarantine(hostNode.properties[QUARANTINE_PROPERTY])];
	for (const candidate of entries) if (!merged.some((e) => isEqual(e.originalEntry, candidate.originalEntry))) merged.push(candidate);
	if (merged.length === 0) delete hostNode.properties[QUARANTINE_PROPERTY];
	else hostNode.properties[QUARANTINE_PROPERTY] = merged;
}
function makeQuarantineEntry(args) {
	const entry = {
		originalEntry: args.originalEntry,
		reason: args.reason,
		attemptedAtVersion: QUARANTINE_VERSION
	};
	if (args.hostValue !== void 0) entry.hostValue = args.hostValue;
	return entry;
}
//#endregion
//#region src/platform/workspace/auth/WorkspaceAuthGate.vue?vue&type=script&setup=true&lang.ts
var FIREBASE_INIT_TIMEOUT_MS = 16e3;
var CONFIG_REFRESH_TIMEOUT_MS = 1e4;
//#endregion
//#region src/platform/workspace/auth/WorkspaceAuthGate.vue
var WorkspaceAuthGate_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceAuthGate",
	setup(__props) {
		/**
		* WorkspaceAuthGate - Conditional auth checkpoint for workspace mode.
		*
		* This gate ensures proper initialization order for workspace-scoped auth:
		* 1. Wait for Firebase auth to resolve
		* 2. Check if teamWorkspacesEnabled feature flag is on
		* 3. If YES: Initialize workspace token and store before rendering
		* 4. If NO: Render immediately using existing Firebase auth
		*
		* This prevents race conditions where API calls use Firebase tokens
		* instead of workspace tokens when the workspace feature is enabled.
		*
		* The splash loader in index.html (z-9999) covers the screen during this
		* phase, so no separate loading indicator is needed here.
		*/
		const isReady = ref(!isCloud);
		const subscriptionDialog = useSubscriptionDialog();
		async function initialize() {
			if (!isCloud) return;
			const { isInitialized, currentUser } = storeToRefs(useAuthStore());
			try {
				if (!isInitialized.value) await until(isInitialized).toBe(true, { timeout: FIREBASE_INIT_TIMEOUT_MS });
				if (!currentUser.value) {
					isReady.value = true;
					return;
				}
				try {
					await Promise.race([refreshRemoteConfig({ useAuth: true }), promiseTimeout(CONFIG_REFRESH_TIMEOUT_MS).then(() => {
						throw new Error("Config refresh timeout");
					})]);
				} catch (error) {
					console.warn("[WorkspaceAuthGate] Failed to refresh remote config:", error);
				}
				const { flags } = useFeatureFlags();
				if (!flags.teamWorkspacesEnabled) {
					isReady.value = true;
					return;
				}
				await initializeWorkspaceMode();
				if (useTeamWorkspaceStore().initState === "ready") subscriptionDialog.resumePendingPricingFlow();
			} catch (error) {
				console.error("[WorkspaceAuthGate] Initialization failed:", error);
			} finally {
				isReady.value = true;
			}
		}
		async function initializeWorkspaceMode() {
			try {
				const workspaceStore = useTeamWorkspaceStore();
				if (workspaceStore.initState === "uninitialized") await workspaceStore.initialize();
			} catch (error) {
				console.warn("[WorkspaceAuthGate] Failed to initialize workspace store:", error);
			}
		}
		onMounted(() => {
			initialize();
		});
		return (_ctx, _cache) => {
			return isReady.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/views/layouts/LayoutDefault.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "relative size-full overflow-hidden" };
//#endregion
//#region src/views/layouts/LayoutDefault.vue
var LayoutDefault_default = /* @__PURE__ */ defineComponent({
	__name: "LayoutDefault",
	setup(__props) {
		useFavicon("/assets/favicon.ico");
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(WorkspaceAuthGate_default, null, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1$1, [createVNode(_component_router_view)])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/platform/navigation/preservedQueryTracker.ts
var installPreservedQueryTracker = (router, definitions) => {
	const trackedDefinitions = definitions.map((definition) => ({ ...definition }));
	router.beforeEach((to, _from, next) => {
		const queryKeys = new Set(Object.keys(to.query));
		trackedDefinitions.forEach(({ namespace, keys }) => {
			hydratePreservedQuery(namespace);
			if (keys.some((key) => queryKeys.has(key))) capturePreservedQuery(namespace, to.query, keys);
		});
		next();
	});
};
//#endregion
//#region src/router.ts
var cloudOnboardingRoutes = isCloud ? (await __vitePreload(async () => {
	const { cloudOnboardingRoutes } = await import("./onboardingCloudRoutes-zRdggZj8.js");
	return { cloudOnboardingRoutes };
}, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).cloudOnboardingRoutes : [];
var isFileProtocol = window.location.protocol === "file:";
/**
* Determine base path for the router.
* - Electron: always root
* - Cloud: use Vite's BASE_URL (configured at build time)
* - Standard web (including reverse proxy subpaths): use window.location.pathname
*   to support deployments like http://mysite.com/ComfyUI/
*/
function getBasePath() {
	if (isDesktop) return "/";
	if (isCloud) return "./";
	return window.location.pathname;
}
var basePath = getBasePath();
function trackPageView() {
	if (!isCloud || typeof window === "undefined") return;
	useTelemetry()?.trackPageView(document.title, { path: window.location.href });
}
var router = createRouter({
	history: isFileProtocol ? createWebHashHistory() : createWebHistory(basePath),
	routes: [...isCloud ? cloudOnboardingRoutes : [], {
		path: "/",
		component: LayoutDefault_default,
		children: [{
			path: "",
			name: "GraphView",
			component: () => __vitePreload(() => import("./GraphView-CecK7kah.js"), __vite__mapDeps([5,6,1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]), import.meta.url),
			beforeEnter: async (_to, _from, next) => {
				const userStore = useUserStore();
				await userStore.initialize();
				if (userStore.needsLogin) next("/user-select");
				else next();
			}
		}, {
			path: "user-select",
			name: "UserSelectView",
			component: () => __vitePreload(() => import("./UserSelectView-CgQn5RTT.js"), __vite__mapDeps([77,1,2,3,32,8,9,10,11,12,13,24,21,50,20,16,17,22,44,73]), import.meta.url)
		}]
	}],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) return savedPosition;
		else return { top: 0 };
	}
});
installPreservedQueryTracker(router, [
	{
		namespace: PRESERVED_QUERY_NAMESPACES.TEMPLATE,
		keys: [
			"template",
			"source",
			"mode"
		]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.SHARE,
		keys: ["share"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.INVITE,
		keys: ["invite"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.CREATE_WORKSPACE,
		keys: ["create_workspace"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.OAUTH,
		keys: ["oauth_request_id"]
	}
]);
router.beforeEach((to, _from, next) => {
	captureOAuthRequestId(to.query);
	next();
});
router.afterEach(() => {
	trackPageView();
});
if (isCloud) {
	const { flags } = useFeatureFlags();
	const PUBLIC_ROUTE_NAMES = new Set([
		"cloud-login",
		"cloud-signup",
		"cloud-forgot-password",
		"cloud-oauth-consent",
		"cloud-sorry-contact-support"
	]);
	const PUBLIC_ROUTE_PATHS = new Set([
		"/cloud/login",
		"/cloud/signup",
		"/cloud/forgot-password",
		"/cloud/oauth/consent",
		"/cloud/sorry-contact-support"
	]);
	function isPublicRoute(to) {
		const name = String(to.name);
		if (PUBLIC_ROUTE_NAMES.has(name)) return true;
		const path = to.path;
		return PUBLIC_ROUTE_PATHS.has(path);
	}
	router.beforeEach(async (to, _from, next) => {
		const authStore = useAuthStore();
		if (!authStore.isInitialized) try {
			const { isInitialized } = storeToRefs(authStore);
			await until(isInitialized).toBe(true, { timeout: 16e3 });
		} catch (error) {
			console.error("Auth initialization failed:", error);
			return next({ name: "cloud-auth-timeout" });
		}
		const isLoggedIn = !!await authStore.getAuthHeader();
		if (isPublicRoute(to)) return next();
		if (to.name === "cloud-user-check") {
			if (to.meta.requiresAuth && !isLoggedIn) return next({ name: "cloud-login" });
			return next();
		}
		if (_from.name === "cloud-user-check" && to.path === "/") return next();
		const query = to.fullPath === "/" ? void 0 : { previousFullPath: encodeURIComponent(to.fullPath) };
		if (to.meta.requiresAuth && !isLoggedIn) return next({
			name: "cloud-login",
			query
		});
		if (!isLoggedIn) {
			if (isDesktop) return await useDialogService().showSignInDialog() ? next() : next(false);
			return next({
				name: "cloud-login",
				query
			});
		}
		if (!isDesktop && isLoggedIn && to.path === "/") {
			if (!flags.onboardingSurveyEnabled) return next();
			const { getSurveyCompletedStatus } = await __vitePreload(async () => {
				const { getSurveyCompletedStatus } = await import("./auth-Crs6FPK9.js");
				return { getSurveyCompletedStatus };
			}, __vite__mapDeps([78,79,1,8,9,10,11,3,12,15,20,2,16,17,21,22,54,73]), import.meta.url);
			try {
				if (!await getSurveyCompletedStatus()) return next({ name: "cloud-survey" });
			} catch (error) {
				console.error("Failed to check user status:", error);
				return next({ name: "cloud-user-check" });
			}
		}
		return next();
	});
}
//#endregion
//#region src/components/ui/dialog/DialogMaximize.vue
var DialogMaximize_default = /* @__PURE__ */ defineComponent({
	__name: "DialogMaximize",
	props: { maximized: {
		type: Boolean,
		default: false
	} },
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				"aria-label": __props.maximized ? unref(t)("g.restoreDialog") : unref(t)("g.maximizeDialog"),
				size: "icon",
				variant: "muted-textonly",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
			}, {
				default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(__props.maximized ? "icon-[lucide--minimize-2]" : "icon-[lucide--maximize-2]") }, null, 2)]),
				_: 1
			}, 8, ["aria-label"]);
		};
	}
});
//#endregion
//#region src/components/dialog/rekaPrimeVueBridge.ts
var OUTSIDE_LAYER_SELECTORS = `.p-select-overlay, .p-colorpicker-panel, .p-popover, .p-autocomplete-overlay, .p-overlay, .p-overlay-mask, .p-dialog, [data-reka-popper-content-wrapper], [data-reka-dialog-content], [data-reka-menu-content], [data-reka-context-menu-content], [role="dialog"], [role="menu"], [role="listbox"], [role="tooltip"]`;
function isInsideOverlay(target) {
	return target instanceof Element && target.closest(OUTSIDE_LAYER_SELECTORS) !== null;
}
function onRekaPointerDownOutside(options, event) {
	if (isInsideOverlay(event.detail.originalEvent.target)) {
		event.preventDefault();
		return;
	}
	if (options.dismissableMask === false) event.preventDefault();
}
function onRekaFocusOutside(event) {
	if (isInsideOverlay(event.detail.originalEvent.target)) event.preventDefault();
}
//#endregion
//#region src/components/dialog/GlobalDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex items-center gap-1" };
var _hoisted_2 = { class: "flex-1 overflow-auto px-4 py-2" };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = ["id"];
//#endregion
//#region src/components/dialog/GlobalDialog.vue
var GlobalDialog_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalDialog",
	setup(__props) {
		const dialogStore = useDialogStore();
		function isRekaItem(item) {
			return item.dialogComponentProps.renderer === "reka";
		}
		function onRekaOpenChange(key, open) {
			if (!open) dialogStore.closeDialog({ key });
		}
		function toggleMaximize(item) {
			item.dialogComponentProps.maximized = !item.dialogComponentProps.maximized;
		}
		return (_ctx, _cache) => {
			return openBlock(true), createElementBlock(Fragment, null, renderList(unref(dialogStore).dialogStack, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.key }, [isRekaItem(item) ? (openBlock(), createBlock(Dialog_default, {
					key: 0,
					open: item.visible,
					modal: item.dialogComponentProps.modal ?? true,
					"onUpdate:open": (open) => onRekaOpenChange(item.key, open)
				}, {
					default: withCtx(() => [createVNode(DialogPortal_default, null, {
						default: withCtx(() => [withDirectives(createVNode(DialogOverlay_default, { class: normalizeClass(item.dialogComponentProps.overlayClass) }, null, 8, ["class"]), [[unref(vRekaZIndex)]]), withDirectives((openBlock(), createBlock(DialogContent_default, {
							size: item.dialogComponentProps.size ?? "md",
							maximized: !!item.dialogComponentProps.maximized,
							class: normalizeClass(item.dialogComponentProps.contentClass),
							"aria-labelledby": item.key,
							onEscapeKeyDown: (e) => item.dialogComponentProps.closeOnEscape === false && e.preventDefault(),
							onPointerDownOutside: (e) => unref(onRekaPointerDownOutside)(item.dialogComponentProps, e),
							onFocusOutside: unref(onRekaFocusOutside),
							onMousedown: () => unref(dialogStore).riseDialog({ key: item.key })
						}, {
							default: withCtx(() => [item.dialogComponentProps.headless ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
								key: 0,
								ref_for: true
							}, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
								createVNode(DialogHeader_default, null, {
									default: withCtx(() => [item.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(item.headerComponent), mergeProps({
										key: 0,
										ref_for: true
									}, item.headerProps, { id: item.key }), null, 16, ["id"])) : (openBlock(), createBlock(DialogTitle_default, {
										key: 1,
										id: item.key
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.title || " "), 1)]),
										_: 2
									}, 1032, ["id"])), createBaseVNode("div", _hoisted_1, [item.dialogComponentProps.maximizable ? (openBlock(), createBlock(DialogMaximize_default, {
										key: 0,
										maximized: !!item.dialogComponentProps.maximized,
										onToggle: ($event) => toggleMaximize(item)
									}, null, 8, ["maximized", "onToggle"])) : createCommentVNode("", true), item.dialogComponentProps.closable !== false ? (openBlock(), createBlock(DialogClose_default, { key: 1 })) : createCommentVNode("", true)])]),
									_: 2
								}, 1024),
								createBaseVNode("div", _hoisted_2, [(openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"]))]),
								item.footerComponent ? (openBlock(), createBlock(DialogFooter_default, { key: 0 }, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.footerComponent), mergeProps({ ref_for: true }, item.footerProps), null, 16))]),
									_: 2
								}, 1024)) : createCommentVNode("", true)
							], 64))]),
							_: 2
						}, 1032, [
							"size",
							"maximized",
							"class",
							"aria-labelledby",
							"onEscapeKeyDown",
							"onPointerDownOutside",
							"onFocusOutside",
							"onMousedown"
						])), [[unref(vRekaZIndex)]])]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, [
					"open",
					"modal",
					"onUpdate:open"
				])) : (openBlock(), createBlock(unref(script), mergeProps({
					key: 1,
					visible: item.visible,
					"onUpdate:visible": ($event) => item.visible = $event,
					class: "global-dialog"
				}, { ref_for: true }, item.dialogComponentProps, { "aria-labelledby": item.key }), createSlots({
					header: withCtx(() => [!item.dialogComponentProps?.headless ? (openBlock(), createElementBlock("div", _hoisted_3, [item.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(item.headerComponent), mergeProps({
						key: 0,
						ref_for: true
					}, item.headerProps, { id: item.key }), null, 16, ["id"])) : (openBlock(), createElementBlock("h3", {
						key: 1,
						id: item.key
					}, toDisplayString(item.title || " "), 9, _hoisted_4))])) : createCommentVNode("", true)]),
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"]))]),
					_: 2
				}, [item.footerComponent ? {
					name: "footer",
					fn: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.footerComponent), mergeProps({ ref_for: true }, item.footerProps), null, 16))]),
					key: "0"
				} : void 0]), 1040, [
					"visible",
					"onUpdate:visible",
					"aria-labelledby"
				]))], 64);
			}), 128);
		};
	}
});
//#endregion
//#region src/utils/preloadErrorUtil.ts
var CSS_PRELOAD_RE = /Unable to preload CSS for (.+)/;
var JS_DYNAMIC_IMPORT_RE = /Failed to fetch dynamically imported module:\s*(.+)/;
var URL_FALLBACK_RE = /https?:\/\/[^\s"')]+/;
var FONT_EXTENSIONS = new Set([
	"woff",
	"woff2",
	"ttf",
	"otf",
	"eot"
]);
var IMAGE_EXTENSIONS = new Set([
	"png",
	"jpg",
	"jpeg",
	"gif",
	"svg",
	"webp",
	"avif",
	"ico"
]);
function extractUrl(message) {
	const cssMatch = message.match(CSS_PRELOAD_RE);
	if (cssMatch) return cssMatch[1].trim();
	const jsMatch = message.match(JS_DYNAMIC_IMPORT_RE);
	if (jsMatch) return jsMatch[1].trim();
	const fallbackMatch = message.match(URL_FALLBACK_RE);
	if (fallbackMatch) return fallbackMatch[0];
	return null;
}
function detectFileType(url) {
	const ext = new URL(url, "https://cloud.comfy.org").pathname.split(".").pop()?.toLowerCase();
	if (!ext) return "unknown";
	const cleanExt = ext.split("?")[0];
	if (cleanExt === "js" || cleanExt === "mjs") return "js";
	if (cleanExt === "css") return "css";
	if (FONT_EXTENSIONS.has(cleanExt)) return "font";
	if (IMAGE_EXTENSIONS.has(cleanExt)) return "image";
	return "unknown";
}
function extractChunkName(url) {
	const filename = new URL(url, "https://cloud.comfy.org").pathname.split("/").pop();
	if (!filename) return null;
	return filename.replace(/\.[^.]+$/, "").replace(/-[a-f0-9]{6,}$/, "") || null;
}
function parsePreloadError(error) {
	const message = error.message || String(error);
	const url = extractUrl(message);
	return {
		url,
		fileType: url ? detectFileType(url) : "unknown",
		chunkName: url ? extractChunkName(url) : null,
		message
	};
}
//#endregion
//#region src/App.vue
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		const workspaceStore = useWorkspaceStore();
		app$1.extensionManager = useWorkspaceStore();
		const conflictDetection = useConflictDetection();
		const isLoading = computed(() => workspaceStore.spinner);
		watch(isLoading, (loading, prevLoading) => {
			if (prevLoading && !loading) document.getElementById("splash-loader")?.remove();
		}, { flush: "post" });
		const showContextMenu = (event) => {
			const { target } = event;
			switch (true) {
				case target instanceof HTMLTextAreaElement:
				case target instanceof HTMLInputElement && target.type === "text":
					electronAPI()?.showContextMenu({ type: "text" });
					return;
			}
		};
		onMounted(() => {
			window["__COMFYUI_FRONTEND_VERSION__"] = config_default.app_version;
			if (isDesktop) document.addEventListener("contextmenu", showContextMenu);
			window.addEventListener("vite:preloadError", (event) => {
				event.preventDefault();
				const info = parsePreloadError(event.payload);
				console.error("[vite:preloadError]", {
					url: info.url,
					fileType: info.fileType,
					chunkName: info.chunkName,
					message: info.message
				});
			});
			conflictDetection.initializeConflictDetection();
		});
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(_component_router_view),
				createVNode(GlobalDialog_default),
				createVNode(unref(script$1), {
					"full-screen": "",
					blocked: isLoading.value
				}, null, 8, ["blocked"])
			], 64);
		};
	}
});
//#endregion
//#region src/main.ts
var ComfyUIPreset = definePreset(index, { semantic: { primary: index["primitive"].blue } });
var firebaseApp = initializeApp(getFirebaseConfig());
var app = createApp(App_default);
var pinia = createPinia();
init({
	app,
	dsn: "",
	enabled: false,
	release: "1.46.14",
	normalizeDepth: 8,
	tracesSampleRate: 0,
	replaysSessionSampleRate: 0,
	replaysOnErrorSampleRate: 0,
	integrations: [],
	autoSessionTracking: false,
	defaultIntegrations: false
});
setAssertReporter((message) => {
	if (isDesktop) captureMessage(message, { level: "warning" });
});
app.directive("tooltip", Tooltip);
app.use(router).use(PrimeVue, {
	zIndex: {
		modal: 1800,
		overlay: 1800,
		menu: 1800,
		tooltip: 1800
	},
	theme: {
		preset: ComfyUIPreset,
		options: {
			prefix: "p",
			cssLayer: {
				name: "primevue",
				order: "theme, base, primevue"
			},
			darkModeSelector: ".dark-theme, :root:has(.dark-theme)"
		}
	}
}).use(ConfirmationService).use(ToastService).use(pinia).use(i18n).use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()]
});
LGraph.proxyWidgetMigrationFlush = (hostNode, nodeData) => flushProxyWidgetMigration({
	hostNode,
	hostWidgetValues: nodeData?.widgets_values
});
LGraph.autoExposePreviewNodes = (hostNode) => autoExposeKnownPreviewNodes(hostNode);
useBootstrapStore(pinia).startStoreBootstrap();
app.mount("#vue-app");
//#endregion

//# sourceMappingURL=index-CC-97eKM.js.map
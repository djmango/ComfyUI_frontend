import "./rolldown-runtime-w0pxe0c8.js";
//#region src/platform/telemetry/index.ts
var _telemetryRegistry = null;
/**
* Get the telemetry dispatcher for tracking events.
* Returns null in OSS builds - all tracking calls become no-ops.
*
* Usage: useTelemetry()?.trackAuth({ method: 'google' })
*/
function useTelemetry() {
	return _telemetryRegistry;
}
//#endregion
export { useTelemetry as t };

//# sourceMappingURL=telemetry-egVpDhez.js.map
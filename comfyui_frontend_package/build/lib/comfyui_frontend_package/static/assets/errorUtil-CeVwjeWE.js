import "./rolldown-runtime-w0pxe0c8.js";
//#region src/utils/errorUtil.ts
/**
* Narrow an unknown caught value to an Error.
*
* Replaces unsafe `value as Error` assertions. When `value` is not already
* an Error instance, wraps it in a new Error whose message is the stringified
* input so downstream consumers (loggers, Sentry, toasts) always receive a
* usable Error object instead of `undefined.message`.
*/
function toError(value) {
	if (value instanceof Error) return value;
	if (typeof value === "string") return new Error(value);
	if (value === void 0) return /* @__PURE__ */ new Error("undefined");
	try {
		const serialised = JSON.stringify(value);
		return new Error(serialised ?? String(value));
	} catch {
		return new Error(String(value));
	}
}
//#endregion
export { toError as t };

//# sourceMappingURL=errorUtil-CeVwjeWE.js.map
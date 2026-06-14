//#region src/extensions/core/load3d/constants.ts
/**
* Load3D constants that don't require THREE.js
* This file can be imported without pulling in the entire THREE.js bundle
*/
var SUPPORTED_EXTENSIONS = new Set([
	".gltf",
	".glb",
	".obj",
	".fbx",
	".stl",
	".spz",
	".splat",
	".ply",
	".ksplat"
]);
var SUPPORTED_EXTENSIONS_ACCEPT = [...SUPPORTED_EXTENSIONS].join(",");
var SUPPORTED_HDRI_EXTENSIONS = new Set([".hdr", ".exr"]);
var SUPPORTED_HDRI_EXTENSIONS_ACCEPT = [...SUPPORTED_HDRI_EXTENSIONS].join(",");
var LOAD3D_NONE_MODEL = "none";
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.constants = window.comfyAPI.constants || {};
window.comfyAPI.constants.SUPPORTED_EXTENSIONS = SUPPORTED_EXTENSIONS;
window.comfyAPI.constants.SUPPORTED_EXTENSIONS_ACCEPT = SUPPORTED_EXTENSIONS_ACCEPT;
window.comfyAPI.constants.SUPPORTED_HDRI_EXTENSIONS = SUPPORTED_HDRI_EXTENSIONS;
window.comfyAPI.constants.SUPPORTED_HDRI_EXTENSIONS_ACCEPT = SUPPORTED_HDRI_EXTENSIONS_ACCEPT;
window.comfyAPI.constants.LOAD3D_NONE_MODEL = LOAD3D_NONE_MODEL;
//#endregion
export { SUPPORTED_HDRI_EXTENSIONS_ACCEPT as a, SUPPORTED_HDRI_EXTENSIONS as i, SUPPORTED_EXTENSIONS as n, SUPPORTED_EXTENSIONS_ACCEPT as r, LOAD3D_NONE_MODEL as t };

//# sourceMappingURL=constants-O5j-l2wh.js.map
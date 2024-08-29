import { Transform } from '@gltf-transform/core';
export interface ResampleOptions {
    ready?: Promise<void>;
    resample?: unknown;
    tolerance?: number;
}
/**
 * Resample {@link AnimationChannel AnimationChannels}, losslessly deduplicating keyframes to
 * reduce file size. Duplicate keyframes are commonly present in animation 'baked' by the
 * authoring software to apply IK constraints or other software-specific features.
 *
 * Optionally, a WebAssembly implementation from the
 * [`keyframe-resample`](https://github.com/donmccurdy/keyframe-resample-wasm) library may be
 * provided. The WebAssembly version is usually much faster at processing large animation
 * sequences, but may not be compatible with all runtimes and JavaScript build tools.
 *
 * Result: (0,0,0,0,1,1,1,0,0,0,0,0,0,0) → (0,0,1,1,0,0)
 *
 * Example:
 *
 * ```
 * import { resample } from '@gltf-transform/functions';
 * import { ready, resample as resampleWASM } from 'keyframe-resample';
 *
 * // JavaScript (slower)
 * await document.transform(resample());
 *
 * // WebAssembly (faster)
 * await document.transform(resample({ ready, resample: resampleWASM }));
 * ```
 *
 * @privateRemarks Implementation based on THREE.KeyframeTrack#optimize().
 * @category Transforms
 */
export declare function resample(_options?: ResampleOptions): Transform;

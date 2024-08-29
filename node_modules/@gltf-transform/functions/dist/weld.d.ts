import { Document, Primitive, Transform } from '@gltf-transform/core';
/** Options for the {@link weld} function. */
export interface WeldOptions {
    /** Tolerance for vertex positions, as a fraction of primitive AABB. */
    tolerance?: number;
    /** Tolerance for vertex normals, in radians. */
    toleranceNormal?: number;
    /** Whether to overwrite existing indices. */
    overwrite?: boolean;
    /** Enables a more thorough, but slower, search for vertices to weld. */
    exhaustive?: boolean;
}
export declare const WELD_DEFAULTS: Required<WeldOptions>;
/**
 * Index {@link Primitive Primitives} and (optionally) merge similar vertices. When merged
 * and indexed, data is shared more efficiently between vertices. File size can
 * be reduced, and the GPU can sometimes use the vertex cache more efficiently.
 *
 * When welding, the 'tolerance' threshold determines which vertices qualify for
 * welding based on distance between the vertices as a fraction of the primitive's
 * bounding box (AABB). For example, tolerance=0.01 welds vertices within +/-1%
 * of the AABB's longest dimension. Other vertex attributes are also compared
 * during welding, with attribute-specific thresholds. For `tolerance=0`, geometry
 * is indexed in place, without merging.
 *
 * To preserve visual appearance consistently, use low `toleranceNormal` thresholds
 * around 0.1 (±3º). To pre-processing a scene before simplification or LOD creation,
 * use higher thresholds around 0.5 (±30º).
 *
 * Example:
 *
 * ```javascript
 * import { weld } from '@gltf-transform/functions';
 *
 * await document.transform(
 * 	weld({ tolerance: 0.001, toleranceNormal: 0.5 })
 * );
 * ```
 *
 * @category Transforms
 */
export declare function weld(_options?: WeldOptions): Transform;
/**
 * Index a {@link Primitive} and (optionally) weld similar vertices. When merged
 * and indexed, data is shared more efficiently between vertices. File size can
 * be reduced, and the GPU can sometimes use the vertex cache more efficiently.
 *
 * When welding, the 'tolerance' threshold determines which vertices qualify for
 * welding based on distance between the vertices as a fraction of the primitive's
 * bounding box (AABB). For example, tolerance=0.01 welds vertices within +/-1%
 * of the AABB's longest dimension. Other vertex attributes are also compared
 * during welding, with attribute-specific thresholds. For tolerance=0, geometry
 * is indexed in place, without merging.
 *
 * Example:
 *
 * ```javascript
 * import { weldPrimitive } from '@gltf-transform/functions';
 *
 * const mesh = document.getRoot().listMeshes()
 * 	.find((mesh) => mesh.getName() === 'Gizmo');
 *
 * for (const prim of mesh.listPrimitives()) {
 *   weldPrimitive(prim, {tolerance: 0.0001});
 * }
 * ```
 *
 * @privateRemarks TODO(v4): Remove the "Document" parameter.
 */
export declare function weldPrimitive(a: Document | Primitive, b?: Primitive | WeldOptions, c?: Required<WeldOptions>): void;

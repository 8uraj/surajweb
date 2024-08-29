import type { Accessor, Primitive, Transform } from '@gltf-transform/core';
/** Options for the {@link dequantize} function. */
export interface DequantizeOptions {
    /**
     * Pattern (regex) used to filter vertex attribute semantics for quantization.
     * Default: `/^((?!JOINTS_).)*$/`.
     */
    pattern?: RegExp;
}
/**
 * Dequantize {@link Primitive Primitives}, removing {@link KHRMeshQuantization `KHR_mesh_quantization`}
 * if present. Dequantization will increase the size of the mesh on disk and in memory, but may be
 * necessary for compatibility with applications that don't support quantization.
 *
 * Example:
 *
 * ```javascript
 * import { dequantizePrimitive } from '@gltf-transform/functions';
 *
 * await document.transform(dequantize());
 * ```
 *
 * @category Transforms
 */
export declare function dequantize(_options?: DequantizeOptions): Transform;
/**
 * Dequantize a single {@link Primitive}, converting all vertex attributes to float32. Dequantization
 * will increase the size of the mesh on disk and in memory, but may be necessary for compatibility
 * with applications that don't support quantization.
 *
 * Example:
 *
 * ```javascript
 * import { dequantizePrimitive } from '@gltf-transform/functions';
 *
 * const mesh = document.getRoot().listMeshes().find((mesh) => mesh.getName() === 'MyMesh');
 *
 * for (const prim of mesh.listPrimitives()) {
 * 	dequantizePrimitive(prim);
 * }
 * ```
 */
export declare function dequantizePrimitive(prim: Primitive, options: Required<DequantizeOptions>): void;
export declare function dequantizeAttribute(semantic: string, attribute: Accessor, options: Required<DequantizeOptions>): void;

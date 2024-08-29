import { Transform } from '@gltf-transform/core';
/** Options for the {@link reorder} function. */
export interface ReorderOptions {
    /** MeshoptEncoder instance. */
    encoder: unknown;
    /**
     * Whether the order should be optimal for transmission size (recommended for Web)
     * or for GPU rendering performance. Default is 'size'.
     */
    target?: 'size' | 'performance';
}
/**
 * Optimizes {@link Mesh} {@link Primitive Primitives} for locality of reference. Choose whether
 * the order should be optimal for transmission size (recommended for Web) or for GPU rendering
 * performance. Requires a MeshoptEncoder instance from the Meshoptimizer library.
 *
 * Example:
 *
 * ```ts
 * import { MeshoptEncoder } from 'meshoptimizer';
 * import { reorder } from '@gltf-transform/functions';
 *
 * await MeshoptEncoder.ready;
 *
 * await document.transform(
 * 	reorder({encoder: MeshoptEncoder})
 * );
 * ```
 *
 * @category Transforms
 */
export declare function reorder(_options: ReorderOptions): Transform;

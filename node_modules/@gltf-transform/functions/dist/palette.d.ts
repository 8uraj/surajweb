import { Transform } from '@gltf-transform/core';
export interface PaletteOptions {
    /** Size (in pixels) of a single block within each palette texture. Default: 4. */
    blockSize?: number;
    /**
     * Minimum number of blocks in the palette texture. If fewer unique
     * material values are found, no palettes will be generated. Default: 2.
     */
    min?: number;
}
export declare const PALETTE_DEFAULTS: Required<PaletteOptions>;
/**
 * Creates palette textures containing all unique values of scalar
 * {@link Material} properties within the scene, then merges materials. For
 * scenes with many solid-colored materials (often found in CAD, architectural,
 * or low-poly styles), texture palettes can reduce the number of materials
 * used, and significantly increase the number of {@link Mesh} objects eligible
 * for {@link join} operations.
 *
 * Materials already containing texture coordinates (UVs) are not eligible for
 * texture palette optimizations. Currently only a material's base color,
 * alpha, emissive factor, metallic factor, and roughness factor are converted
 * to palette textures.
 *
 * Example:
 *
 * ```typescript
 * import { palette, flatten, dequantize, join } from '@gltf-transform/functions';
 *
 * await document.transform(
 * 	palette({ min: 5 }),
 * 	flatten(),
 * 	dequantize(),
 * 	join()
 * );
 * ```
 *
 * The illustration below shows a typical base color palette texture:
 *
 * <img
 * 	src="/media/functions/palette.png"
 * 	alt="Row of colored blocks"
 * 	style="width: 100%; max-width: 320px; image-rendering: pixelated;">
 *
 * @category Transforms
 */
export declare function palette(_options?: PaletteOptions): Transform;

import { type Transform, type vec2 } from '@gltf-transform/core';
/** Options for the {@link textureResize} function. */
export interface TextureResizeOptions {
    /**
     * Maximum width/height to enforce, preserving aspect ratio. For example,
     * a 4096x8192 texture, resized with limit [2048, 2048] will be reduced
     * to 1024x2048.
     */
    size: vec2;
    /** Resampling filter method. LANCZOS3 is sharper, LANCZOS2 is smoother. */
    filter?: TextureResizeFilter;
    /** Pattern identifying textures to resize, matched to name or URI. */
    pattern?: RegExp | null;
    /** Pattern to match slots usage for resizing. */
    slots?: RegExp | null;
}
/** Resampling filter methods. LANCZOS3 is sharper, LANCZOS2 is smoother. */
export declare enum TextureResizeFilter {
    /** Lanczos3 (sharp) */
    LANCZOS3 = "lanczos3",
    /** Lanczos2 (smooth) */
    LANCZOS2 = "lanczos2"
}
export declare const TEXTURE_RESIZE_DEFAULTS: TextureResizeOptions;
/**
 * Resize PNG or JPEG {@link Texture Textures}, with [Lanczos filtering](https://en.wikipedia.org/wiki/Lanczos_algorithm).
 *
 * Implementation provided by [ndarray-lanczos](https://github.com/donmccurdy/ndarray-lanczos)
 * package, which works in Web and Node.js environments. For a faster and more robust implementation
 * in Node.js, use {@link textureCompress}, providing a Sharp encoder and 'resize' options instead.
 *
 * @deprecated Prefer {@link textureCompress}, instead.
 * @privateRemarks TODO(v4): Remove this function, using `textureCompress()` instead.
 * @category Transforms
 */
export declare function textureResize(_options?: TextureResizeOptions): Transform;

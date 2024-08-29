import { Material, Texture, TextureInfo } from '@gltf-transform/core';
/**
 * Lists all {@link TextureInfo} definitions associated with a given
 * {@link Texture}. May be used to determine which UV transforms
 * and texCoord indices are applied to the material, without explicitly
 * checking the material properties and extensions.
 *
 * Example:
 *
 * ```typescript
 * // Find TextureInfo instances associated with the texture.
 * const results = listTextureInfo(texture);
 *
 * // Find which UV sets (TEXCOORD_0, TEXCOORD_1, ...) are required.
 * const texCoords = results.map((info) => info.getTexCoord());
 * // → [0, 1]
 * ```
 */
export declare function listTextureInfo(texture: Texture): TextureInfo[];
/**
 * Lists all {@link TextureInfo} definitions associated with any {@link Texture}
 * on the given {@link Material}. May be used to determine which UV transforms
 * and texCoord indices are applied to the material, without explicitly
 * checking the material properties and extensions.
 *
 * Example:
 *
 * ```typescript
 * const results = listTextureInfoByMaterial(material);
 *
 * const texCoords = results.map((info) => info.getTexCoord());
 * // → [0, 1]
 * ```
 */
export declare function listTextureInfoByMaterial(material: Material): TextureInfo[];

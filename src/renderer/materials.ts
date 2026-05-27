import * as THREE from 'three'
import type { TierSkin } from '../skins'
import { getTexture } from './skinLoader'

export function createTileMaterialFromSkin(
  tierSkin: TierSkin
): THREE.Material {
  const texture = getTexture(tierSkin)
  const color = new THREE.Color(tierSkin.color)
  const emissive = new THREE.Color(tierSkin.emissiveColor)

  if (tierSkin.clearcoat > 0) {
    return new THREE.MeshPhysicalMaterial({
      map: texture,
      color,
      roughness: tierSkin.roughness,
      metalness: tierSkin.metalness,
      clearcoat: tierSkin.clearcoat,
      clearcoatRoughness: tierSkin.clearcoatRoughness,
      emissive,
      emissiveIntensity: tierSkin.emissiveIntensity,
      transparent: tierSkin.opacity < 1,
      opacity: tierSkin.opacity,
    })
  }

  return new THREE.MeshStandardMaterial({
    map: texture,
    color,
    roughness: tierSkin.roughness,
    metalness: tierSkin.metalness,
    emissive,
    emissiveIntensity: tierSkin.emissiveIntensity,
    transparent: tierSkin.opacity < 1,
    opacity: tierSkin.opacity,
  })
}

export function clearMaterialCache() {
  // no-op, cache managed by skinLoader
}

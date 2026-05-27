import classic from './classic.json'
import cyberpunk from './cyberpunk.json'
import stone from './stone.json'
import minimal from './minimal.json'
import retro from './retro.json'

export interface TierSkin {
  color: string
  pattern: string
  patternScale: number
  patternRotation: number
  roughness: number
  metalness: number
  emissiveColor: string
  emissiveIntensity: number
  opacity: number
  clearcoat: number
  clearcoatRoughness: number
}

export interface Skin {
  id: string
  name: string
  matte: TierSkin
  metal: TierSkin
  crystal: TierSkin
  energy: TierSkin
}

export const allSkins: Skin[] = [
  classic as Skin,
  cyberpunk as Skin,
  stone as Skin,
  minimal as Skin,
  retro as Skin,
]

export const defaultSkinId = 'classic'

export function getSkinById(id: string): Skin {
  return allSkins.find(s => s.id === id) || allSkins[0]
}

export function getTierSkin(skin: Skin, tier: string): TierSkin {
  switch (tier) {
    case 'matte': return skin.matte
    case 'metal': return skin.metal
    case 'crystal': return skin.crystal
    case 'energy': return skin.energy
    default: return skin.matte
  }
}

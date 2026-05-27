import type { MaterialTier } from '../types'

export function getTier(value: number): MaterialTier {
  if (value <= 16) return 'matte'
  if (value <= 256) return 'metal'
  if (value <= 4096) return 'crystal'
  return 'energy'
}

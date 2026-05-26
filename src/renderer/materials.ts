import * as THREE from 'three'
import type { MaterialTier } from '../types'

const matteMap: Record<number, string> = { 2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563' }
const metalMap: Record<number, string> = { 32: '#c0c0c0', 64: '#cd7f32', 128: '#ffd700', 256: '#e5e4e2' }
const crystalMap: Record<number, string> = { 512: '#5bc0de', 1024: '#33b5e5', 2048: '#9b59b6', 4096: '#e74c3c' }
const energyMap: Record<number, string> = { 8192: '#1abc9c', 16384: '#e67e22', 32768: '#2ecc71', 65536: '#c0392b' }

export function getTier(value: number): MaterialTier {
  if (value <= 16) return 'matte'
  if (value <= 256) return 'metal'
  if (value <= 4096) return 'crystal'
  return 'energy'
}

export function createTileMaterial(value: number): THREE.Material {
  const tier = getTier(value)

  switch (tier) {
    case 'matte':
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(matteMap[value] || '#f59563'),
        roughness: 0.9,
        metalness: 0.02,
      })

    case 'metal':
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(metalMap[value] || '#e5e4e2'),
        roughness: 0.12,
        metalness: 0.95,
      })

    case 'crystal':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(crystalMap[value] || '#e74c3c'),
        roughness: 0.05,
        metalness: 0.1,
        clearcoat: 0.6,
        clearcoatRoughness: 0.1,
        emissive: new THREE.Color(crystalMap[value] || '#e74c3c'),
        emissiveIntensity: 0.25,
        transparent: true,
        opacity: 0.88,
      })

    case 'energy':
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(energyMap[value] || '#ff6bff'),
        roughness: 0.03,
        metalness: 0.03,
        emissive: new THREE.Color(energyMap[value] || '#ff6bff'),
        emissiveIntensity: 0.9,
      })
  }
}

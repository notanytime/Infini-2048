import * as THREE from 'three'
import type { MaterialTier } from '../types'

const matteMap: Record<number, string> = { 2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563' }
const metalMap: Record<number, string> = { 32: '#c0c0c0', 64: '#cd7f32', 128: '#ffd700', 256: '#e5e4e2' }
const crystalMap: Record<number, string> = { 512: '#5bc0de', 1024: '#33b5e5', 2048: '#9b59b6', 4096: '#e74c3c' }
const energyMap: Record<number, string> = { 8192: '#1abc9c', 16384: '#e67e22', 32768: '#2ecc71', 65536: '#c0392b' }

const textureCache = new Map<string, THREE.CanvasTexture>()

export function getTier(value: number): MaterialTier {
  if (value <= 16) return 'matte'
  if (value <= 256) return 'metal'
  if (value <= 4096) return 'crystal'
  return 'energy'
}

function getColor(value: number): string {
  return matteMap[value] || metalMap[value] || crystalMap[value] || energyMap[value] || '#ffffff'
}

function createCanvasTexture(value: number, pattern: string): THREE.CanvasTexture {
  const key = `${value}_${pattern}`
  if (textureCache.has(key)) return textureCache.get(key)!

  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  const baseColor = getColor(value)
  ctx.fillStyle = baseColor
  ctx.fillRect(0, 0, size, size)

  const tier = getTier(value)

  if (tier === 'matte') {
    ctx.fillStyle = 'rgba(0,0,0,0.08)'
    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      ctx.fillRect(x, y, 1, 1)
    }
  }

  if (tier === 'metal') {
    const c = new THREE.Color(baseColor)
    for (let y = 0; y < size; y += 2) {
      const brightness = 0.85 + 0.15 * Math.sin(y * 0.08)
      ctx.fillStyle = `rgba(${Math.floor(c.r*255*brightness)},${Math.floor(c.g*255*brightness)},${Math.floor(c.b*255*brightness)},1)`
      ctx.fillRect(0, y, size, 2)
    }
    const grad = ctx.createLinearGradient(0, 0, size, size)
    grad.addColorStop(0, 'rgba(255,255,255,0.15)')
    grad.addColorStop(0.5, 'rgba(255,255,255,0)')
    grad.addColorStop(1, 'rgba(255,255,255,0.1)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, size, size)
  }

  if (tier === 'crystal') {
    for (let r = 0; r < 3; r++) {
      const cx = size * (0.2 + Math.random() * 0.6)
      const cy = size * (0.2 + Math.random() * 0.6)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.4)
      grad.addColorStop(0, 'rgba(255,255,255,0.25)')
      grad.addColorStop(0.5, 'rgba(255,255,255,0.05)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, size, size)
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 1
    for (let i = 0; i < 6; i++) {
      const x1 = Math.random() * size, y1 = Math.random() * size
      const x2 = Math.random() * size, y2 = Math.random() * size
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
    }
  }

  if (tier === 'energy') {
    const c = new THREE.Color(baseColor)
    for (let y = 0; y < size; y++) {
      const wave = Math.sin(y * 0.05) * 0.3 + 0.7
      ctx.fillStyle = `rgba(${Math.floor(c.r*255*wave)},${Math.floor(c.g*255*wave)},${Math.floor(c.b*255*wave)},1)`
      ctx.fillRect(0, y, size, 1)
    }
    const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size*0.6)
    grad.addColorStop(0, 'rgba(255,255,255,0.3)')
    grad.addColorStop(0.5, 'rgba(255,255,255,0)')
    grad.addColorStop(1, 'rgba(255,255,255,0.15)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = 'rgba(255,255,255,0.1)'
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      ctx.beginPath(); ctx.arc(x, y, 2 + Math.random()*4, 0, Math.PI*2); ctx.fill()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  textureCache.set(key, texture)
  return texture
}

export function createTileMaterial(value: number): THREE.Material {
  const tier = getTier(value)
  const texture = createCanvasTexture(value, 'base')

  switch (tier) {
    case 'matte':
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.92,
        metalness: 0.02,
      })

    case 'metal':
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.12,
        metalness: 0.95,
      })

    case 'crystal':
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.05,
        metalness: 0.1,
        clearcoat: 0.7,
        clearcoatRoughness: 0.08,
        emissive: new THREE.Color(getColor(value)),
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.88,
      })

    case 'energy':
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.03,
        metalness: 0.03,
        emissive: new THREE.Color(getColor(value)),
        emissiveIntensity: 0.85,
      })
  }
}

export function clearMaterialCache() {
  for (const [_, t] of textureCache) t.dispose()
  textureCache.clear()
}

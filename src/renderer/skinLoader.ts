import * as THREE from 'three'
import type { TierSkin } from '../skins'

const textureCache = new Map<string, THREE.CanvasTexture>()

function generatePatternTexture(tierSkin: TierSkin, size = 512): THREE.CanvasTexture {
  const key = `${tierSkin.color}_${tierSkin.pattern}_${tierSkin.patternScale}_${tierSkin.patternRotation}`
  if (textureCache.has(key)) return textureCache.get(key)!

  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = tierSkin.color
  ctx.fillRect(0, 0, size, size)

  const scale = tierSkin.patternScale
  const s = size * scale

  switch (tierSkin.pattern) {
    case 'noise':
      drawNoise(ctx, s, tierSkin.color)
      break
    case 'brushed':
      drawBrushed(ctx, s, tierSkin.color)
      break
    case 'sparkle':
      drawSparkle(ctx, s, tierSkin.color)
      break
    case 'wave':
      drawWave(ctx, s, tierSkin.color)
      break
    case 'circuit':
      drawCircuit(ctx, s, tierSkin.color)
      break
    case 'marble':
      drawMarble(ctx, s, tierSkin.color)
      break
    case 'pixel':
      drawPixel(ctx, s, tierSkin.color)
      break
    case 'none':
    default:
      break
  }

  if (tierSkin.patternRotation !== 0) {
    const rotated = document.createElement('canvas')
    rotated.width = size
    rotated.height = size
    const rctx = rotated.getContext('2d')!
    rctx.translate(size / 2, size / 2)
    rctx.rotate((tierSkin.patternRotation * Math.PI) / 180)
    rctx.drawImage(canvas, -size / 2, -size / 2)
    const texture = new THREE.CanvasTexture(rotated)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true
    textureCache.set(key, texture)
    return texture
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  textureCache.set(key, texture)
  return texture
}

function drawNoise(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
  const c = new THREE.Color(baseColor)
  for (let i = 0; i < size * 2; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const brightness = 0.8 + Math.random() * 0.4
    ctx.fillStyle = `rgba(${Math.floor(c.r*255*brightness)},${Math.floor(c.g*255*brightness)},${Math.floor(c.b*255*brightness)},0.6)`
    ctx.fillRect(x, y, 2, 2)
  }
}

function drawBrushed(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
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

function drawSparkle(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
  for (let r = 0; r < 5; r++) {
    const cx = size * (0.1 + Math.random() * 0.8)
    const cy = size * (0.1 + Math.random() * 0.8)
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.3)
    grad.addColorStop(0, 'rgba(255,255,255,0.3)')
    grad.addColorStop(0.5, 'rgba(255,255,255,0.05)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, size, size)
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.1)'
  ctx.lineWidth = 1
  for (let i = 0; i < 8; i++) {
    const x1 = Math.random() * size, y1 = Math.random() * size
    const x2 = Math.random() * size, y2 = Math.random() * size
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
  }
}

function drawWave(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
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
  for (let i = 0; i < 15; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    ctx.beginPath(); ctx.arc(x, y, 2 + Math.random()*4, 0, Math.PI*2); ctx.fill()
  }
}

function drawCircuit(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
  const c = new THREE.Color(baseColor)
  ctx.strokeStyle = `rgba(${Math.floor(c.r*255*1.5)},${Math.floor(c.g*255*1.5)},${Math.floor(c.b*255*1.5)},0.4)`
  ctx.lineWidth = 2
  for (let i = 0; i < 20; i++) {
    const x1 = Math.random() * size
    const y1 = Math.random() * size
    const x2 = x1 + (Math.random() - 0.5) * size * 0.5
    const y2 = y1 + (Math.random() - 0.5) * size * 0.5
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }
  ctx.fillStyle = `rgba(${Math.floor(c.r*255*2)},${Math.floor(c.g*255*2)},${Math.floor(c.b*255*2)},0.6)`
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI*2); ctx.fill()
  }
}

function drawMarble(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
  const c = new THREE.Color(baseColor)
  for (let i = 0; i < 5; i++) {
    const x1 = Math.random() * size
    const y1 = Math.random() * size
    const x2 = Math.random() * size
    const y2 = Math.random() * size
    const grad = ctx.createLinearGradient(x1, y1, x2, y2)
    grad.addColorStop(0, `rgba(${Math.floor(c.r*255*1.1)},${Math.floor(c.g*255*1.1)},${Math.floor(c.b*255*1.1)},0.3)`)
    grad.addColorStop(0.5, `rgba(${Math.floor(c.r*255*0.9)},${Math.floor(c.g*255*0.9)},${Math.floor(c.b*255*0.9)},0.2)`)
    grad.addColorStop(1, `rgba(${Math.floor(c.r*255*1.05)},${Math.floor(c.g*255*1.05)},${Math.floor(c.b*255*1.05)},0.25)`)
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, size, size)
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.05)'
  ctx.lineWidth = 1
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    let x = Math.random() * size
    let y = Math.random() * size
    ctx.moveTo(x, y)
    for (let j = 0; j < 5; j++) {
      x += (Math.random() - 0.5) * 100
      y += (Math.random() - 0.5) * 100
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}

function drawPixel(ctx: CanvasRenderingContext2D, size: number, baseColor: string) {
  const c = new THREE.Color(baseColor)
  const pixelSize = 8
  for (let x = 0; x < size; x += pixelSize) {
    for (let y = 0; y < size; y += pixelSize) {
      if (Math.random() > 0.5) {
        const brightness = 0.7 + Math.random() * 0.6
        ctx.fillStyle = `rgba(${Math.floor(c.r*255*brightness)},${Math.floor(c.g*255*brightness)},${Math.floor(c.b*255*brightness)},0.8)`
        ctx.fillRect(x, y, pixelSize, pixelSize)
      }
    }
  }
}

export function getTexture(tierSkin: TierSkin): THREE.CanvasTexture {
  return generatePatternTexture(tierSkin)
}

export function clearSkinTextureCache() {
  for (const [_, t] of textureCache) t.dispose()
  textureCache.clear()
}
